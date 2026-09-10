import './About.css'

export default function About() {
    return (
        <section id="about">
            <div className="about-container term-window">
                <div className="term-titlebar">
                    <div className="term-dots">
                        <span className="term-dot term-dot--red"></span>
                        <span className="term-dot term-dot--yellow"></span>
                        <span className="term-dot term-dot--green"></span>
                    </div>
                    <span className="term-path">about.txt</span>
                </div>
                <div className="about-body">
                    <p className="about-line"><span className="term-prompt">$</span> whoami</p>
                    <h1 className="about-title">Harry Savill<span className="about-cursor" aria-hidden="true"></span></h1>
                    <p className="about-line"><span className="term-prompt">$</span> cat bio.txt</p>
                    <p className="about-bio">
                        A computer science graduate from the UK, interested in solving
                        problems and building things that work well.
                    </p>
                    <div className="about-actions">
                        <a href="#projects" className="about-cta-btn">./view-my-work</a>
                        <a href="#contact" className="about-secondary-btn">./get-in-touch</a>
                    </div>
                </div>
            </div>
        </section>
    )
}