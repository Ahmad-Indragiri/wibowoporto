"use client";
import { useState, useEffect } from "react";
import Navbar from "../navbar/page";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "This is an amazing portfolio! I highly recommend [Your Name].",
      name: "John Doe",
      position: "CEO, Company X",
      photo: "/images/john-doe.jpg",
    },
    {
      quote: "The work was exceptional, exceeded all my expectations.",
      name: "Jane Smith",
      position: "Founder, Startup Y",
      photo: "/images/jane-smith.jpg",
    },
    {
      quote: "A true professional with an eye for detail. Highly recommend!",
      name: "Tom Harris",
      position: "Director, Tech Co.",
      photo: "/images/tom-harris.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <main>
      <Navbar />
    <section
      id="testimonials"
      className="py-16 px-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 flex justify-center items-center"
    >
      <div className="max-w-7xl mx-auto text-center text-white relative">
        <h2 className="text-5xl font-bold mb-12 text-gradient animate__animated animate__fadeIn animate__delay-1s">
          What People Say
        </h2>
        <div className="testimonial-container relative overflow-hidden">
          <div
            className={`testimonial-item transition-transform transform duration-1000 ${
              currentIndex === 0 ? "translate-x-0" : currentIndex === 1 ? "translate-x-[-100%]" : "translate-x-[100%]"
            }`}
          >
            <div className="testimonial-content">
              <div className="testimonial-photo-wrapper relative overflow-hidden">
                <img
                  src={testimonials[currentIndex].photo}
                  alt={testimonials[currentIndex].name}
                  className="testimonial-photo w-32 h-32 rounded-full object-cover mx-auto shadow-2xl"
                />
              </div>
              <p className="text-xl mb-4 mt-6">{testimonials[currentIndex].quote}</p>
              <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
              <p className="text-sm text-gray-300">{testimonials[currentIndex].position}</p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <button
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))}
            className="text-white text-2xl p-4 bg-black rounded-full opacity-50 hover:opacity-100 transition-all"
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <button
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))}
            className="text-white text-2xl p-4 bg-black rounded-full opacity-50 hover:opacity-100 transition-all"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
    </main>
  );
}
