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
                    <p>Intensive course based on ‘Learn by
                        doing,’ project-based learning, and
                        agile methodologies.
                        The program includes training in C#,
                        SQL, web development with ASP.NET
                        and Azure, concluding with
                        a practical project simulating a real work
                        environmenT.
                    </p>
                </div>

                <div className="formation-info">
                    <h3> Ironhack / Barcelona / 2024</h3>
                    <p>Completed a 9-week Bootcamp at
                        Ironhack (400+ hours), covering HTML,
                        CSS, JavaScript, React, Node.js,
                        Express, MongoDB, and API integration,
                        with a strong focus on full-stack web
                        development through five projects.
                    </p>
                </div>

                <div className="formation-info">
                    <h3>Universidad Tecnológica de La
                        Habana “José Antonio Echeverria”,
                        CUJAE / 2018</h3>
                    <p>Intensive course based on ‘Learn by
                        doing,’ project-based learning, and
                        agile methodologies.
                        The program includes training in C#,
                        SQL, web development with ASP.NET
                        and Azure, concluding with
                        a practical project simulating a real work
                        environmenT.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Formation;