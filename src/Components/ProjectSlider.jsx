import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import projects from "../data/proyects";
import "../styles/ProjectSlider.css";

// Constants
const DESKTOP_INCREMENT_VW = 21;
const MOBILE_BREAKPOINT_PX = 768;
const MOBILE_INCREMENT_VW = 61; // vw for mobile step

export default function ProjectSlider() {
  // Responsive detection
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const isMobile = windowWidth <= MOBILE_BREAKPOINT_PX;

  // Determine move increment and initial offset
  const moveIncrement = isMobile ? MOBILE_INCREMENT_VW : DESKTOP_INCREMENT_VW;
  const initialOffset = isMobile ? -moveIncrement : 0;

  // Slider state
  const [moveDistance, setMoveDistance] = useState(initialOffset);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [sliderVisible, setSliderVisible] = useState(false);
  const totalShift = projects.length * moveIncrement;

  // Reset distance when breakpoint changes
  useEffect(() => {
    setMoveDistance(initialOffset);
  }, [initialOffset]);

  // Typed.js for heading
  const infoRef = useRef(null);
  const h1Ref = useRef(null);
  const h4Ref = useRef(null);
  useEffect(() => {
    const opts1 = { strings: ["Projects Section"], typeSpeed: 30, startDelay: 300, showCursor: false };
    const opts4 = { strings: ["Lorem ipsum dolor sit amet..."], typeSpeed: 1, startDelay: 1000, showCursor: false };
    const obs = new IntersectionObserver((entries, o) => {
      if (entries[0].isIntersecting) {
        h1Ref.current && new Typed(h1Ref.current, opts1);
        h4Ref.current && new Typed(h4Ref.current, opts4);
        o.disconnect();
      }
    }, { threshold: 0.5 });
    infoRef.current && obs.observe(infoRef.current);
    return () => obs.disconnect();
  }, []);

  // Reveal slider on scroll
  const sliderRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries, o) => {
      if (entries[0].isIntersecting) {
        setSliderVisible(true);
        o.disconnect();
      }
    }, { threshold: 0.3 });
    sliderRef.current && obs.observe(sliderRef.current);
    return () => obs.disconnect();
  }, []);

  // Reveal arrows
  useEffect(() => {
    const els = document.querySelectorAll('.svg-arrow');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
    }, { threshold: 0.5 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Compute card style based on position
  const getStyleForCard = (index) => {
    let pos = (moveDistance / moveIncrement + index) % projects.length;
    if (pos < 0) pos += projects.length;
    let opacity = 0, scale = 0.5;
    if (pos === 1) { opacity = 1; scale = 1; }
    else if (pos === 0 || pos === 2) { opacity = 0.5; }
    return { opacity, '--base-scale': scale };
  };

  // Navigation handling
  const handleMove = (dir) => {
    if (isAnimating) return;
    setIsAnimating(true);
    let next = dir === 'left'
      ? moveDistance - moveIncrement
      : moveDistance + moveIncrement;
    if (next < -totalShift) next = 0;
    if (next > 0) next = -totalShift;
    setMoveDistance(next);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // Touch events
  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) handleMove('left');
    if (diff < -50) handleMove('right');
    setTouchStartX(null);
  };

  return (
    <div id="projects-view">
      <svg onClick={() => handleMove('left')} className="svg-arrow svg-left" width="5vw" height="5vh" viewBox="0 0 30 24">
        <path d="M6 6L12 12L6 18" stroke="#66FFE4" strokeWidth="2"/>
        <path d="M14 6L20 12L14 18" stroke="#66FFE4" strokeWidth="2"/>
      </svg>
      <svg onClick={() => handleMove('right')} className="svg-arrow svg-right" width="5vw" height="5vh" viewBox="0 0 30 24">
        <path d="M24 6L18 12L24 18" stroke="#66FFE4" strokeWidth="2"/>
        <path d="M16 6L10 12L16 18" stroke="#66FFE4" strokeWidth="2"/>
      </svg>

      <div className="general-projects-info" ref={infoRef}>
        <h1 className="typed-h1-projects" ref={h1Ref}></h1>
        <h4 className="typed-h2-projects" ref={h4Ref}></h4>
      </div>

      <div className={`projectSlider ${sliderVisible ? 'chaotic-entry' : ''}`} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} ref={sliderRef}>
        <div className="slider-track" style={{ transform: `translateX(${moveDistance}vw)`, transition: isTransitioning ? 'transform 1s ease-in-out' : 'none' }}>
          {[...projects, ...projects].map((p, i) => (
            <Link to={`/project/${p.slug}`} key={`${p.slug}-${i}`} className="project-link">
              <div className="Project-Card" style={getStyleForCard(i)}>
                <img src={p.img} alt={p.title} className="project-card-image" />
                <h2>{p.title}</h2>
                <p className="project-description">{p.description.slice(0, 60)}…</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}