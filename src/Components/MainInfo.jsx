import React, { useEffect } from "react";
import "../styles/MainInfo.css";
import Typed from "typed.js";
import github from "../assets/Images/git-hub.png"
import linkedin from "../assets/Images/LinkedIn.webp"
import mail from "../assets/Images/mail.png"

function MainInfo() {

    useEffect(() => {
        const optionsH1 = {
            strings: ["Arnaldo Mera"],
            typeSpeed: 30,
            startDelay: 1600, 
            loop: false,
            showCursor: false,
            contentType: "html",
        };

        const optionsH2 = {
            strings: ["Software Developer"],
            typeSpeed: 25,
            startDelay: 2100,
            loop: false,
            showCursor: false,
            contentType: "html",
        };

        const optionsH3 = {
            strings: [
                "Hi! I’m Arnaldo, a Software developer<br>" +
                "specialized in the use of JAVASCRIPT, C#, MONGODB, EXPRESS, REACT, NODEJS, HTML &amp; CSS.<br>" +
                "I’m passionate about creating dynamic websites and robust web applications.<br>" +
                "I thrive on creating intuitive and efficient user experiences, always adhering to best practices in development and design."
            ],
            typeSpeed: 1,
            startDelay: 2800,
            loop: false,
            showCursor: false,
            contentType: "html",
        };

        new Typed(".typed-h1", optionsH1);
        new Typed(".typed-h2", optionsH2);
        new Typed(".typed-h3", optionsH3);
    }, []);

    return (
        <>
            <div className="Nombre">
                <h1 className="typed-h1"></h1>
                <h2 className="typed-h2"></h2>
                <div className="contacts">
                <img src={github} className="git-hub" alt="" />
                <img src={linkedin} className="linkedin" alt="" />
                <img src={mail} className="mail" alt="" />
                </div>

            </div>
            <div className="Container1">
                <h3 className="typed-h3"></h3>
            </div>
        </>
    );
}

export default MainInfo;
