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

    const moveIncrement = 20;
    const totalShift = projects.length * moveIncrement;

    const getOpacityForCard = (index) => {
        let relativePosition = (moveDistance / moveIncrement + index) % projects.length;
    
        if (relativePosition < 0) {
            relativePosition += projects.length;
        }
    
        if (relativePosition === 1) {
            return 1;
        } 
        else if (relativePosition === 0 || relativePosition === 2) {
            return 0.5;
        }
        
        return 0;
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
            <div className="general-projects-info"></div>
            <div className="button-container">
                <button className="move-button" onClick={() => handleMove("left")} disabled={isAnimating}>
                    {isAnimating ? "Esperando..." : "← Mover Izquierda"}
                </button>
                <button className="move-button" onClick={() => handleMove("right")} disabled={isAnimating}>
                    {isAnimating ? "Esperando..." : "Mover Derecha →"}
                </button>
            </div>
            <div
                className="projectSlider"
                onTouchStart={handleTouchStart} 
                onTouchEnd={handleTouchEnd} 
            >
                <div
                    className="slider-track"
                    style={{
                        transform: `translateX(${moveDistance}vw)`,
                        transition: isTransitioning ? "transform 1s ease-in-out" : "none"
                    }}
                >
                    {[...projects, ...projects].map((project, index) => (
                        <div 
                            className="Project-Card" 
                            key={index} 
                            style={{ opacity: getOpacityForCard(index) }}
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
