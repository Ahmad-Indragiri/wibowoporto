"use client";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "This is an amazing portfolio! I highly recommend [Your Name].",
      name: "John Doe",
      position: "CEO, Company X",
      photo: "/images/john-doe.jpg", // Ganti dengan foto yang sesuai
    },
    {
      quote: "The work was exceptional, exceeded all my expectations.",
      name: "Jane Smith",
      position: "Founder, Startup Y",
      photo: "/images/jane-smith.jpg", // Ganti dengan foto yang sesuai
    },
    {
      quote: "A true professional with an eye for detail. Highly recommend!",
      name: "Tom Harris",
      position: "Director, Tech Co.",
      photo: "/images/tom-harris.jpg", // Ganti dengan foto yang sesuai
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change testimonial every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center"
    >
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-8">What People Say</h2>
        <div
          className={`testimonial-item transition-all duration-700 ease-in-out ${
            currentIndex === 0 ? "show" : ""
          }`}
        >
          <img
            src={testimonials[currentIndex].photo}
            alt={testimonials[currentIndex].name}
            className="testimonial-photo"
          />
          <div>
            <p className="text-xl mb-4">{testimonials[currentIndex].quote}</p>
            <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
            <p>{testimonials[currentIndex].position}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
