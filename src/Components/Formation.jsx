import "../styles/Formation.css";

function Formation() {
    return (
        <div id="formation">
            <div className="formationTitle">
                <h1>Formation</h1>
                <div className="formationContainer">
                    <h2>.Net Enviroment</h2>
                    <h2>Web Development</h2>
                    <h2>Metalurgical Engeniring</h2>
                </div>
            </div>
            <div className="formationInfoContainer">
                <div className="formation-info">
                    <h3>Fundación Esplai / 2025</h3>
                    <p>Intensive course focused on project-based
                        learning and agile methodologies.<br /><br />
                        Trained in:<br />
                        C#, SQL, ASP.NET, Microsoft
                        Azure and modern web development tools.<br /><br />
                        Final project:<br /> Go Bolet – a full-stack MVC
                        web app deployed to Azure
                    </p>
                </div>

                <div className="formation-info">
                    <h3> Ironhack / Barcelona / 2024</h3>
                    <p>9-week (400+ hours) full-time bootcamp.<br /><br />
                        Covering:<br />
                        HTML, CSS, JavaScript, React, Node.js,
                        Express, MongoDB, API integration.<br /><br />
                        Completed 5 full-stack projects including
                        real-time apps and SPA development.
                    </p>
                </div>

                <div className="formation-info">
                    <h3>Universidad Tecnológica de La
                        Habana “José Antonio Echeverria”,
                        CUJAE / 2018</h3>
                    <p> Completed 3 years of engineering studies
                        with focus on problem-solving and technical
                        foundations.<br/><br/>
                        Covering:<br />
                        Mathematics, Physics, Chemistry, Fluid transport and mass transfer
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Formation;