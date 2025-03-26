import "../styles/Navbar.css"

function Navbar() {
    return(
        <div className="navbar">
        <a className="nav-links" href="#formation">
            <h3>Formation</h3>
        </a>
        <a className="nav-links" href="#skills">
            <h3>Skills</h3>
        </a>
        <a className="nav-links" href="#projects">
            <h3>Projects</h3>
        </a>
        <a className="nav-links" href="#experience">
            <h3>Experience</h3>
        </a>
        <a className="nav-links" href="#languajes">
            <h3>Languages</h3>
        </a>
        </div>
    )
}

export default Navbar;