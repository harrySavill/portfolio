import './Skills.css'

const skills = [
    {
        category: "languages",
        items: ["python", "javascript", "php", "html", "css"]
    },
    {
        category: "frameworks & libraries",
        items: ["react", "pandas", "matplotlib", "pyspark"]
    },
    {
        category: "data & databases",
        items: ["postgresql", "mariadb", "supabase", "data analysis", "machine learning"]
    },
    {
        category: "tools & practices",
        items: ["git", "github", "OOP", "functional programming", "relational databases", "vercel"]
    }
]

export default function Skills() {
    return (
        <section id="skills">
            <div className="skills-container term-window">
                <div className="term-titlebar">
                    <div className="term-dots">
                        <span className="term-dot term-dot--red"></span>
                        <span className="term-dot term-dot--yellow"></span>
                        <span className="term-dot term-dot--green"></span>
                    </div>
                    <span className="term-path">skills.sh</span>
                </div>
                <div className="skills-body">
                    <p className="skills-line"><span className="term-prompt">$</span> ./skills.sh --list</p>
                    <div className="skills-grid">
                        {skills.map((group) => (
                            <div className="skills-row" key={group.category}>
                                <p className="skills-category">{group.category}</p>
                                <div className="skills-items">
                                    {group.items.map((skill) => (
                                        <span className="skills-tag" key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}