import { useEffect, useRef } from "react";
import "../styles/SidePicture.css";
import myPhoto from "../assets/Images/my photo.png"
import helm from "../assets/Images/casco.png"

function SidePicture() {
    const photoRef = useRef(null);

    useEffect(() => {
        const photoElement = photoRef.current;
        if (!photoElement) return;

        const handleAnimationEnd = () => {
            photoElement.classList.add("show-my-photo");
        };

        photoElement.addEventListener("animationend", handleAnimationEnd);

        return () => {
            photoElement.removeEventListener("animationend", handleAnimationEnd);
        };
    }, []);

    return (
        <div className="photo" ref={photoRef}>
            <img className="my-photo " src={myPhoto} alt="Arnaldo's photo" />
            <img className="helm" src={helm} alt="helm" />
        </div>
    );
}

export default SidePicture;

