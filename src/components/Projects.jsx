import './Projects.css'

const projects = [
    {
        title: "sudoku solver",
        slug: "sudoku-solver",
        description: "an interactive sudoku game with a built-in solver, playable in the browser.",
        tags: ["react", "javascript", "css"],
        status: "coming soon",
        repo: "https://github.com/harrysavill"
    },
    {
        title: "world cup predictor",
        slug: "world-cup-predictor",
        description: "a prediction based game where users can score points based on correct predictions and compete with friends/family in leagues.",
        tags: ["vercel", "supabase", "react"],
        status: "coming soon",
        repo: "https://github.com/harrysavill"
    }
]

export default function Projects() {
    const handleCardClick = (slug) => {
        window.open(`https://www.harrysavill.dev/projects/${slug}`, '_blank')
    }

    const handleRepoClick = (e, repo) => {
        e.stopPropagation()
        window.open(repo, '_blank')
    }

    return (
        <section id="projects">
            <div className="projects-container">
                <h2 className="projects-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            className="projects-card"
                            key={project.title}
                            onClick={() => handleCardClick(project.slug)}
                        >
                            <div className="projects-card-top">
                                <div className="projects-card-header">
                                    <h3 className="projects-card-title">{project.title}</h3>
                                    <span className={`projects-status projects-status--${project.status.replace(" ", "-")}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <p className="projects-card-description">{project.description}</p>
                            </div>
                            <div className="projects-card-bottom">
                                <div className="projects-tags">
                                    {project.tags.map((tag) => (
                                        <span className="projects-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <span
                                    className="projects-link"
                                    onClick={(e) => handleRepoClick(e, project.repo)}
                                >
                                    source code
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}