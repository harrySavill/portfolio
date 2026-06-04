import { useEffect, useState } from "react";
import "./Header.css"
import logo from "../assets/hsdev-logo.png";

export default function Header() {
    const [isDark, setIsDark] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <header className="App-header">
            <a href={"https://www.harrysavill.dev"} target="_blank" className="home-link">
                <img className="logo-img" src={logo} alt="site logo"/>
            </a>
            <nav>
                <ul className={`links-list ${menuOpen ? "open" : ""}`}>
                    <li className="links-list-item"><a href="#about" onClick={() => setMenuOpen(false)}>about</a></li>
                    <li className="links-list-item"><a href="#skills" onClick={() => setMenuOpen(false)}>skills</a></li>
                    <li className="links-list-item"><a href="#projects" onClick={() => setMenuOpen(false)}>projects</a></li>
                    <li className="links-list-item"><a href="#contact" onClick={() => setMenuOpen(false)}>contact</a></li>
                    <li className="links-list-item">
                        <button className="theme-toggle" onClick={() => setIsDark(prev => !prev)}>
                            <span className="theme-dot"></span>
                            {isDark ? "light" : "dark"}
                        </button>
                    </li>
                </ul>
            </nav>
            <button className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
                {menuOpen ? "✕" : "☰"}
            </button>
        </header>
    );
}