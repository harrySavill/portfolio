import './About.css'

export default function About() {
    return (
        <section id="about">
            <div className="about-container">
                <h1 className="about-title">Harry Savill</h1>
                <p className="about-bio">
                    A computer science graduate from the UK, interested in solving
                    problems and building things that work well.
                </p>
                <div className="about-actions">
                    <a href="#projects" className="about-cta-btn">view my work</a>
                    <a href="#contact" className="about-secondary-btn">get in touch</a>
                </div>
            </div>
        </section>
    )
}