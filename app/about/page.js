"use client"

import Image from "next/image"; // Import untuk image (jika menggunakan foto)

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="content-wrapper">
                <div className="text-content">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-container">
                        <p className="about-text">
                            I am a passionate and dedicated <span className="highlight">[Your Profession]</span>, with hands-on experience in <span className="highlight">[Your Field]</span>. I specialize in <span className="highlight">[Specialization]</span>, and I’m always motivated to learn, grow, and master new technologies to stay ahead in the ever-evolving tech landscape.
                            I am a person who values responsibility and integrity, always striving to deliver high-quality results on time. I thrive in collaborative environments, believing that teamwork fosters innovation, and I am committed to making a meaningful and positive impact through every project I take on.
                        </p>
                        <div className="about-icons">
                            <i className="fas fa-laptop-code"></i>
                            <i className="fas fa-users"></i>
                            <i className="fas fa-flag-checkered"></i>
                        </div>
                    </div>
                </div>
                <div className="image-content">
                    <Image
                        src="/ggg.jpg"
                        alt="Profile Picture"
                        width={200}
                        height={200}
                        className="profile-img"
                    />
                </div>
            </div>
        </section>
    );
}
