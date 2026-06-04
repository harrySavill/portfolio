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
            <div className="skills-container">
                <h2 className="skills-title">My Skills</h2>
                <div className="skills-grid">
                    {skills.map((group) => (
                        <div className="skills-card" key={group.category}>
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
        </section>
    )
}