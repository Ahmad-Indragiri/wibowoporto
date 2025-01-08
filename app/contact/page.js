export default function Contact() {
    return (
      <section id="contact" className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-16">
        <div className="contact-form">
          <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
  