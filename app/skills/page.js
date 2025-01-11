'use client'

import Navbar from "../navbar/page";
import { useState, useEffect } from "react";

export default function Skills() {
  return (
    <main>
      <Navbar />
    <section id="skills" className="skills-section">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8 text-white">My Skills</h2>
        
        <div className="skills-container">
          <div className="skill-item">
            <h3>HTML & CSS</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
              <div className="skill-label">90%</div>
            </div>
          </div>
          
          <div className="skill-item">
            <h3>JavaScript</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
              <div className="skill-label">80%</div>
            </div>
          </div>
          
          <div className="skill-item">
            <h3>React</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: '70%' }}></div>
              <div className="skill-label">70%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
