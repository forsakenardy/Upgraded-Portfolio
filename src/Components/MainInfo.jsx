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
                "I thrive on creating intuitive and efficient user experiences, always adhering to best practices in development and design." +
                "I thrive on creating intuitive and efficient user experiences, always adhering to best practices in development and design." +
                "I thrive on creating intuitive and efficient user experiences, always adhering to best practices in development and design.<br>" +
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

                    <a target="blank" className="linkedin" href="https://www.linkedin.com/in/arnaldo-mera-rojas-webdev/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <path d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#66FFE4" />
                            <path d="M8.1 6.78261C8.1 7.58319 7.48333 8.23188 6.72222 8.23188C5.96111 8.23188 5.34444 7.58319 5.34444 6.78261C5.34444 5.98261 5.96111 5.33333 6.72222 5.33333C7.48333 5.33333 8.1 5.98261 8.1 6.78261ZM8.11111 9.3913H5.33333V18.6667H8.11111V9.3913ZM12.5456 9.3913H9.78556V18.6667H12.5461V13.7977C12.5461 11.0904 15.8956 10.869 15.8956 13.7977V18.6667H18.6667V12.7936C18.6667 8.22551 13.71 8.39188 12.5456 10.6406V9.3913Z" fill="#1F1F1F" />
                        </svg>
                    </a>
                    <a target="blank" className="git-hub" href="https://github.com/forsakenardy">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 25 25" fill="none">
                            <path d="M12.668 24.5C19.2954 24.5 24.668 19.1274 24.668 12.5C24.668 5.87258 19.2954 0.5 12.668 0.5C6.04055 0.5 0.667969 5.87258 0.667969 12.5C0.667969 19.1274 6.04055 24.5 12.668 24.5Z" fill="#66FFE4" />
                            <path d="M12.668 4.5C8.25064 4.5 4.66797 8.17255 4.66797 12.7022C4.66797 16.3263 6.95997 19.4007 10.1393 20.4855C10.5386 20.5614 10.668 20.3071 10.668 20.0911V18.5641C8.44264 19.0603 7.9793 17.5962 7.9793 17.5962C7.6153 16.6482 7.09064 16.396 7.09064 16.396C6.36464 15.8868 7.14597 15.8977 7.14597 15.8977C7.9493 15.9551 8.37197 16.7432 8.37197 16.7432C9.0853 17.9968 10.2433 17.6345 10.7 17.4247C10.7713 16.895 10.9786 16.5327 11.208 16.3283C9.4313 16.1198 7.5633 15.4165 7.5633 12.2744C7.5633 11.3783 7.87597 10.6469 8.3873 10.0727C8.30464 9.86563 8.03064 9.03106 8.4653 7.90188C8.4653 7.90188 9.1373 7.68179 10.666 8.74261C11.304 8.56079 11.988 8.46989 12.668 8.46647C13.348 8.46989 14.0326 8.56079 14.672 8.74261C16.1993 7.68179 16.87 7.90188 16.87 7.90188C17.3053 9.03174 17.0313 9.86632 16.9486 10.0727C17.462 10.6469 17.772 11.3789 17.772 12.2744C17.772 15.4247 15.9006 16.1185 14.1193 16.3215C14.406 16.5758 14.668 17.0747 14.668 17.8403V20.0911C14.668 20.3091 14.796 20.5655 15.202 20.4848C18.3786 19.3987 20.668 16.3249 20.668 12.7022C20.668 8.17255 17.086 4.5 12.668 4.5Z" fill="#1F1F1F" />
                        </svg>
                    </a>
                    <a target="blank" className="mail" href="https://mail.google.com/mail/?view=cm&fs=1&to=nardy.allstars@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 25" fill="none">
                            <circle cx="12.5" cy="12.5" r="11" stroke="#66FFE4" strokeWidth="3" />
                            <path d="M6.5 8.5C6.5 8 6.8 7.5 7.3 7.5H17.7C18.2 7.5 18.5 8 18.5 8.5V16.5C18.5 17 18.2 17.5 17.7 17.5H7.3C6.8 17.5 6.5 17 6.5 16.5V8.5Z" stroke="#66FFE4" strokeWidth="2" />
                            <path d="M6.5 8.5L12.5 13.5L18.5 8.5" stroke="#66FFE4" strokeWidth="2" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="Container1">
                <h4 className="typed-h3"></h4>
            </div>




        </>
    );
}

export default MainInfo;
