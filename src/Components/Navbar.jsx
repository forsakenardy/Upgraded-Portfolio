import "../styles/Navbar.css"

function Navbar() {
    return(
        <div className="navbar">
        <a className="nav-links" href="">
            <h3>Main</h3>
        </a>
        <a className="nav-links" href="#projects-view">
            <h3>Projects</h3>
        </a>
        <a className="nav-links" href="#formation">
            <h3>Formation</h3>
        </a>
        <a className="nav-links" href="#aboutMe">
            <h3>About Me</h3>
        </a>
        </div>
    )
}

export default Navbar;