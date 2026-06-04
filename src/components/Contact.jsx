import './Contact.css'

const contacts = [
    {
        label: "email",
        display: "harry.savill6@gmail.com",
        href: "mailto:harry.savill6@gmail.com"
    },
    {
        label: "github",
        display: "github.com/harrysavill",
        href: "https://github.com/harrysavill"
    }
]

export default function Contact() {
    const handleClick = (href) => {
        window.open(href, '_blank')
    }

    return (
        <section id="contact">
            <div className="contact-container">
                <h2 className="contact-title">Contact Me</h2>
                <p className="contact-bio">feel free to reach out via email or take a look at my work on github.</p>
                <div className="contact-links">
                    {contacts.map((contact) => (
                        <div
                            key={contact.label}
                            className="contact-card"
                            onClick={() => handleClick(contact.href)}
                        >
                            <p className="contact-label">{contact.label}</p>
                            <p className="contact-display">{contact.display}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}