'use client'

import Navbar from "../navbar/page";

export default function Contact() {
  return (
    <main>
      <Navbar />
    <section id="contact" className="contact-section py-16">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-form">
          <form className="form-grid">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              className="input-field" 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
              className="input-field" 
            />
            <textarea 
              placeholder="Your Message" 
              required 
              className="input-field" 
            ></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
    </main>
  );
}
