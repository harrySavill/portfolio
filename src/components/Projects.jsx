import './Projects.css'

const projects = [
        {
        title: "world cup predictor",
        slug: "world-cup-predictor",
        description: "a prediction based game where users score points based on correct predictions and compete with friends/family in leagues. built for the 2022 world cup, now archived.",
        tags: ["vercel", "supabase", "react"],
        status: "archived",
        links: [
            { label: "source", href: "https://github.com/harrysavill", variant: "secondary" }
        ]
    },
    {
        title: "fantasyDraft",
        slug: "fantasydraft",
        description: "a fantasy sports draft app where friends build teams and compete over a season.",
        tags: ["react", "supabase", "vercel"],
        status: "live",
        links: [
            { label: "visit", href: "https://fantasydraft.harrysavill.dev", variant: "primary" },
            { label: "source", href: "https://github.com/harrysavill", variant: "secondary" }
        ]
    }
]

export default function Projects() {
    const handleCardClick = (slug) => {
        window.open(`https://www.harrysavill.dev/projects/${slug}`, '_blank')
    }

    const handleLinkClick = (e, href) => {
        e.stopPropagation()
        window.open(href, '_blank')
    }

    return (
        <section id="projects">
            <div className="projects-container term-window">
                <div className="term-titlebar">
                    <div className="term-dots">
                        <span className="term-dot term-dot--red"></span>
                        <span className="term-dot term-dot--yellow"></span>
                        <span className="term-dot term-dot--green"></span>
                    </div>
                    <span className="term-path">projects/</span>
                </div>
                <div className="projects-body">
                    <p className="projects-line"><span className="term-prompt">$</span> ls -la projects/</p>
                    <div className="projects-list">
                        {projects.map((project) => (
                            <div
                                className="projects-card"
                                key={project.title}
                                onClick={() => handleCardClick(project.slug)}
                            >
                                <div className="projects-card-header">
                                    <h3 className="projects-card-title">{project.title}</h3>
                                    <span className={`projects-status projects-status--${project.status.replace(" ", "-")}`}>
                                        [{project.status}]
                                    </span>
                                </div>
                                <p className="projects-card-description">{project.description}</p>
                                <div className="projects-card-bottom">
                                    <div className="projects-tags">
                                        {project.tags.map((tag) => (
                                            <span className="projects-tag" key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <div className="projects-links">
                                        {project.links.map((link) => (
                                            <button
                                                key={link.label}
                                                className={`projects-link-btn projects-link-btn--${link.variant}`}
                                                onClick={(e) => handleLinkClick(e, link.href)}
                                            >
                                                {link.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}