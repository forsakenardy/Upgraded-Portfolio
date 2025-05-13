import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import projects from "../data/proyects";
import "../styles/ProjectSlider.css";

const DESKTOP_INCREMENT_VW = 21;
const MOBILE_BREAKPOINT_PX = 768;
const MOBILE_INCREMENT_VW = 61;

export default function ProjectSlider() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = windowWidth <= MOBILE_BREAKPOINT_PX;
  const moveIncrement = isMobile ? MOBILE_INCREMENT_VW : DESKTOP_INCREMENT_VW;
  const initialOffset = isMobile ? -moveIncrement : 0;

  const [moveDistance, setMoveDistance] = useState(initialOffset);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [sliderVisible, setSliderVisible] = useState(false);
  const totalShift = projects.length * moveIncrement;

  useEffect(() => {
    setMoveDistance(initialOffset);
  }, [initialOffset]);

  const h1Ref = useRef(null);
  const h4Ref = useRef(null);
  const infoRef = useRef(null);
  const hasIntersectedHeader = useRef(false);

  useEffect(() => {
    const opts1 = {
      strings: ["Projects Section"],
      typeSpeed: 30,
      startDelay: 300,
      showCursor: false,
    };
    const opts4 = {
      strings: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ],
      typeSpeed: 1,
      startDelay: 1000,
      showCursor: false,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) {
        if (isMobile && !hasIntersectedHeader.current) {
          hasIntersectedHeader.current = true;
          return;
        }
        if (h1Ref.current) new Typed(h1Ref.current, opts1);
        if (h4Ref.current) new Typed(h4Ref.current, opts4);
        obs.disconnect();
      }
    }, {
      threshold: 0.1,
      rootMargin: isMobile ? '0px 0px -20% 0px' : '0px'
    });

    if (infoRef.current) observer.observe(infoRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  const sliderRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) {
        setSliderVisible(true);
        obs.disconnect();
      }
    }, {
      threshold: 0.2,
      rootMargin: isMobile ? '0px 0px -20% 0px' : '0px'
    });

    if (sliderRef.current) observer.observe(sliderRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    const arrowEls = document.querySelectorAll('.svg-arrow');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    arrowEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getStyleForCard = (index) => {
    let pos = (moveDistance / moveIncrement + index) % projects.length;
    if (pos < 0) pos += projects.length;
    let opacity = 0, scale = 0.5;
    if (pos === 1) { opacity = 1; scale = 1; }
    else if (pos === 0 || pos === 2) { opacity = 0.5; }
    return { opacity, '--base-scale': scale };
  };

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

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (delta > 50) handleMove('left');
    if (delta < -50) handleMove('right');
    setTouchStartX(null);
  };

  return (
    <div id="projects-view">
      <svg onClick={() => handleMove('left')} className="svg-arrow svg-left" width="5vw" height="5vh" viewBox="0 0 30 24">
        <path d="M6 6L12 12L6 18" stroke="#66FFE4" strokeWidth="2" />
        <path d="M14 6L20 12L14 18" stroke="#66FFE4" strokeWidth="2" />
      </svg>

      <svg onClick={() => handleMove('right')} className="svg-arrow svg-right" width="5vw" height="5vh" viewBox="0 0 30 24">
        <path d="M24 6L18 12L24 18" stroke="#66FFE4" strokeWidth="2" />
        <path d="M16 6L10 12L16 18" stroke="#66FFE4" strokeWidth="2" />
      </svg>

      <div className="general-projects-info" ref={infoRef}>
        <h1 className="typed-h1-projects" ref={h1Ref}></h1>
        <h4 className="typed-h2-projects" ref={h4Ref}></h4>
      </div>

      <div
        className={`projectSlider ${sliderVisible ? 'chaotic-entry' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        ref={sliderRef}
      >
        <div
          className="slider-track"
          style={{ transform: `translateX(${moveDistance}vw)`, transition: 'transform 1s ease-in-out' }}
        >
          {projects.concat(projects).map((proj, idx) => (
            <Link key={`${proj.slug}-${idx}`} to={`/project/${proj.slug}`} className="project-link">
              <div className="Project-Card" style={getStyleForCard(idx)}>
                <img src={proj.img} alt={proj.title} className="project-card-image" />
                <h2>{proj.title}</h2>
                <p className="project-description">
                  {proj.description.length > 60 ? `${proj.description.slice(0, 60)}…` : proj.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
