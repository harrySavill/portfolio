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
            <div className="contact-container term-window">
                <div className="term-titlebar">
                    <div className="term-dots">
                        <span className="term-dot term-dot--red"></span>
                        <span className="term-dot term-dot--yellow"></span>
                        <span className="term-dot term-dot--green"></span>
                    </div>
                    <span className="term-path">contact.sh</span>
                </div>
                <div className="contact-body">
                    <p className="contact-line"><span className="term-prompt">$</span> ./contact.sh</p>
                    <p className="contact-bio">feel free to reach out via email or take a look at my work on github.</p>
                    <div className="contact-links">
                        {contacts.map((contact) => (
                            <div
                                key={contact.label}
                                className="contact-card"
                                onClick={() => handleClick(contact.href)}
                            >
                                <p className="contact-label">{contact.label}</p>
                                <p className="contact-display">&gt; {contact.display}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}