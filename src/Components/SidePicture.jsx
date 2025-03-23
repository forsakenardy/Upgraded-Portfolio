import { useEffect, useRef } from "react";
import "../styles/SidePicture.css";

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
            <img className="my-photo " src="src\assets\Images\P1070787-Photoroom.png" alt="Arnaldo's photo" />
            <img className="helm" src="src\assets\Images\casco-Photoroom.png" alt="helm" />
        </div>
    );
}

export default SidePicture;

