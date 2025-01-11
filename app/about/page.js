"use client";

import Image from "next/image";
import Navbar from "../navbar/page";

export default function About() {
    return (
        <main>
            <Navbar />
            <section id="about" className="about-section py-20 bg-gradient-to-r from-teal-500 via-blue-600 to-indigo-800">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center px-6 relative">
                    {/* Parallax Effect Background */}
                    <div className="absolute inset-0 bg-cover bg-center opacity-30 z-0" style={{ backgroundImage: 'url("/background-image.jpg")' }}></div>

                    <div className="content-wrapper relative z-10 flex flex-col md:flex-row justify-center items-center md:space-x-12 px-6 py-8 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-2xl">
                        <div className="text-content text-white text-center md:text-left flex flex-col justify-center items-center md:items-start space-y-6">
                            <h2 className="section-title text-4xl font-bold text-gradient mb-6 animate__animated animate__fadeIn animate__delay-1s">
                                About Me
                            </h2>
                            <p className="intro-text text-lg md:text-xl leading-relaxed opacity-90 animate__animated animate__fadeIn animate__delay-1s">
                                I am a passionate and dedicated <span className="highlight">[Your Profession]</span>, with hands-on experience in <span className="highlight">[Your Field]</span>. I specialize in <span className="highlight">[Specialization]</span>, and I’m always motivated to learn, grow, and master new technologies to stay ahead in the ever-evolving tech landscape.
                            </p>
                            <p className="intro-text text-lg md:text-xl leading-relaxed opacity-90 animate__animated animate__fadeIn animate__delay-2s">
                                I value responsibility and integrity, always striving to deliver high-quality results on time. I thrive in collaborative environments, believing that teamwork fosters innovation, and I am committed to making a meaningful and positive impact through every project I take on.
                            </p>
                            <div className="about-icons flex space-x-6 mt-6">
                                <i className="fas fa-laptop-code text-4xl transition-all hover:scale-110 transform hover:text-yellow-400"></i>
                                <i className="fas fa-users text-4xl transition-all hover:scale-110 transform hover:text-pink-400"></i>
                                <i className="fas fa-flag-checkered text-4xl transition-all hover:scale-110 transform hover:text-green-400"></i>
                            </div>
                        </div>
                        <div className="image-content mt-12 md:mt-0 flex justify-center">
                            <div className="profile-img-wrapper w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden relative shadow-xl hover:scale-105 transition-all ease-in-out transform hover:rotate-3">
                                <Image
                                    src="/ggg.jpg"
                                    alt="Profile Picture"
                                    width={250}
                                    height={250}
                                    className="profile-img object-cover w-full h-full"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-40 hover:opacity-20 transition-opacity"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
