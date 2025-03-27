import { useState } from "react";
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

    const moveIncrement = 21;
    const totalShift = projects.length * moveIncrement;

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
            scale = 0.5; // Valor de escala para cartas invisibles (no se mostrará, así que no importa tanto)
        }
        return { opacity, transform: `scale(${scale})` };
    };

    const handleMove = (direction) => {
        if (isAnimating) return;
        setIsAnimating(true);
        if (direction === "left") {
            if (moveDistance <= -totalShift) {
                // Al mover hacia la izquierda y llegar al límite, se reinicia a 0
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
                // Al mover hacia la derecha desde 0, se reinicia al final
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
                className="svg-arrow svg-left"  // Aplica las clases para posición izquierda
            >
                <path d="M6 6L12 12L6 18" stroke="#66FFE4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 6L20 12L14 18" stroke="#66FFE4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="5vw" 
                height="5vh" 
                viewBox="0 0 30 24" 
                fill="none"
                onClick={() => handleMove("right")}
                className="svg-arrow svg-right"  // Aplica las clases para posición derecha
            >
                <path d="M24 6L18 12L24 18" stroke="#66FFE4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 6L10 12L16 18" stroke="#66FFE4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <div className="general-projects-info">
                <h1>Projects Section</h1>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur deleniti
                     cupiditate voluptates incidunt voluptas dolore a? Consectetur qui dignissimos quidem similique
                      corrupti vero eaque facilis excepturi mollitia. Eaque, incidunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                       Maiores nihil voluptatum optio soluta dignissimos voluptate aspernatur, tempore ut quaerat consectetur ipsum voluptas iste eum,
                        omnis doloremque expedita praesentium, ea at!</h4>
            </div>

            <div className="projectSlider" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <div className="slider-track" style={{transform: `translateX(${moveDistance}vw)`, transition: isTransitioning ? "transform 1s ease-in-out" : "none"}}>
                    {[...projects, ...projects].map((project, index) => (
                        <div
                            className="Project-Card"
                            key={index}
                            style={getStyleForCard(index)}
                        >
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
