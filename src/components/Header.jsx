import { useEffect, useState } from "react";
import "./Header.css"

const navItems = [
    { href: "#about", label: "about" },
    { href: "#skills", label: "skills" },
    { href: "#projects", label: "projects" },
    { href: "#contact", label: "contact" },
];

export default function Header() {
    const [isDark, setIsDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <header className="term-window app-header">
            <div className="term-titlebar app-titlebar">
                <div className="term-dots">
                    <span className="term-dot term-dot--red"></span>
                    <span className="term-dot term-dot--yellow"></span>
                    <span className="term-dot term-dot--green"></span>
                </div>
                <a href="https://www.harrysavill.dev" target="_blank" rel="noreferrer" className="app-titlebar-path">
                    harry@savill:~$
                </a>
                <button className="hamburger" onClick={() => setMenuOpen(prev => !prev)} aria-label="toggle menu">
                    {menuOpen ? "[x]" : "[=]"}
                </button>
            </div>
            <nav className={`links-list ${menuOpen ? "open" : ""}`}>
                {navItems.map((item) => (
                    <a key={item.href} href={item.href} className="links-list-item" onClick={() => setMenuOpen(false)}>
                        <span className="term-prompt">./</span>{item.label}
                    </a>
                ))}
                <button className="theme-toggle" onClick={() => setIsDark(prev => !prev)}>
                    <span className="term-prompt">$</span> {isDark ? "theme light" : "theme dark"}
                </button>
            </nav>
        </header>
    );
}
