export default function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-content">
          <h1 className="navbar-title">DHANA</h1>
          <ul className="navbar-links">
            <li><a href="/about" className="navbar-link">About</a></li>
            <li><a href="/skills" className="navbar-link">skills</a></li>
            <li><a href="/contact" className="navbar-link">Contact</a></li>
           <li><a href="/testimonials" className="navbar-link">testimonials</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  