"use client"

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "navbar-scrolling" : ""}`}>
      <div className="navbar-content">
        <h1 className="navbar-title">DHANA</h1>
        <ul className="navbar-links">
          <li><a href="/about" className="navbar-link">About</a></li>
          <li><a href="/skills" className="navbar-link">Skills</a></li>
          <li><a href="/contact" className="navbar-link">Contact</a></li>
          <li><a href="/testimonials" className="navbar-link">Testimonials</a></li>
        </ul>
        <div className="navbar-hamburger">
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>
      </div>
    </nav>
  );
}
