import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import ping from "../assets/Images/ping.jpeg";
import chain from "../assets/Images/chain.jpeg";
import nonna from "../assets/Images/nonna.jpeg";
import unnamed from "../assets/Images/unnamed.jpeg";
import "../styles/ProjectSlider.css";

const projects = [
  { img: chain, title: "Chain of Ascension" },
  { img: ping, title: "De Ping a Pong" },
  { img: nonna, title: "Nonna's Recipes" },
  { img: unnamed, title: "Unnamed" }
];

function ProjectSlider() {
  const [moveDistance, setMoveDistance] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  // Para el Typed.js en el contenedor de info
  const infoRef = useRef(null);
  const h1Ref = useRef(null);
  const h4Ref = useRef(null);
  // Para detectar la visibilidad del slider
  const sliderRef = useRef(null);
  const [sliderVisible, setSliderVisible] = useState(false);

  const moveIncrement = 21;
  const totalShift = projects.length * moveIncrement;

  // Observer para iniciar Typed.js en infoRef (como ya tienes)
  useEffect(() => {
    const optionsH1 = {
      strings: ["Projects Section"],
      typeSpeed: 30,
      startDelay: 300,
      loop: false,
      showCursor: false,
      contentType: "html",
    };

    const optionsH4 = {
      strings: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, blanditiis saepe, illum est explicabo error impedit maiores sequi suscipit tenetur laboriosam tempora deserunt pariatur, obcaecati iste aspernatur amet facere enim."
      ],
      typeSpeed: 1,
      startDelay: 1000,
      loop: false,
      showCursor: false,
      contentType: "html",
    };

    const observerInfo = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (h1Ref.current) new Typed(h1Ref.current, optionsH1);
          if (h4Ref.current) new Typed(h4Ref.current, optionsH4);
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    if (infoRef.current) observerInfo.observe(infoRef.current);
    return () => observerInfo.disconnect();
  }, []);

  // Observer para detectar cuando el slider se hace visible y así agregar la clase de animación
  useEffect(() => {
    const observerSlider = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSliderVisible(true);
          observerSlider.disconnect();
        }
      });
    }, { threshold: 0.3 });
    if (sliderRef.current) observerSlider.observe(sliderRef.current);
    return () => observerSlider.disconnect();
  }, []);

  useEffect(() => {
    const svgElements = document.querySelectorAll('.svg-arrow');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });
    
    svgElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Calcula el estilo (opacidad y escala) para cada carta según su posición relativa
  const getStyleForCard = (index) => {
    let relativePosition = (moveDistance / moveIncrement + index) % projects.length;
    if (relativePosition < 0) {
      relativePosition += projects.length;
    }
    let opacity, scale;
    if (relativePosition === 1) {
      opacity = 1;
      scale = 1;
    } else if (relativePosition === 0 || relativePosition === 2) {
      opacity = 0.5;
      scale = 0.5;
    } else {
      opacity = 0;
      scale = 0.5;
    }
    return { opacity, transform: `scale(${scale})` };
  };

  const handleMove = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (direction === "left") {
      if (moveDistance <= -totalShift) {
        setIsTransitioning(false);
        setMoveDistance(0);
        setTimeout(() => {
          setIsTransitioning(true);
          setMoveDistance(-moveIncrement);
          setTimeout(() => setIsAnimating(false), 1000);
        }, 50);
      } else {
        setMoveDistance(prev => prev - moveIncrement);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    } else if (direction === "right") {
      if (moveDistance === 0) {
        setIsTransitioning(false);
        setMoveDistance(-totalShift);
        setTimeout(() => {
          setIsTransitioning(true);
          setMoveDistance(-totalShift + moveIncrement);
          setTimeout(() => setIsAnimating(false), 1000);
        }, 50);
      } else {
        setMoveDistance(prev => prev + moveIncrement);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    }
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return;
    const touchEndX = event.changedTouches[0].clientX;
    const difference = touchStartX - touchEndX;
    if (difference > 50) handleMove("left");
    if (difference < -50) handleMove("right");
    setTouchStartX(null);
  };

  return (
    <div className="projects-view">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="5vw" 
        height="5vh" 
        viewBox="0 0 30 24" 
        fill="none"
        onClick={() => handleMove("left")}
        className="svg-arrow svg-left"
      >
        <path d="M6 6L12 12L6 18" stroke="#66FFE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 6L20 12L14 18" stroke="#66FFE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="5vw" 
        height="5vh" 
        viewBox="0 0 30 24" 
        fill="none"
        onClick={() => handleMove("right")}
        className="svg-arrow svg-right"
      >
        <path d="M24 6L18 12L24 18" stroke="#66FFE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6L10 12L16 18" stroke="#66FFE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="general-projects-info" ref={infoRef}>
        <h1 className="typed-h1-projects" ref={h1Ref}></h1>
        <h4 className="typed-h2-projects" ref={h4Ref}></h4>
      </div>

      <div 
        className={`projectSlider ${sliderVisible ? "chaotic-entry" : ""}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        ref={sliderRef}
      >
        <div
          className="slider-track"
          style={{
            transform: `translateX(${moveDistance}vw)`,
            transition: isTransitioning ? "transform 1s ease-in-out" : "none"
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <div className="Project-Card" key={index} style={getStyleForCard(index)}>
              <img src={project.img} className="project-card-image" alt="Project Image" />
              <h2>{project.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSlider;
