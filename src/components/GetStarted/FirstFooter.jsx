import React from "react";
import "./FirstFooter.css";
import img1 from "../images/test1.jpeg";
import img2 from "../images/test2.jpeg";
import img3 from "../images/test3.jpeg";
import img4 from "../images/test4.jpeg";
import img5 from "../images/test5.jpeg";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Brandwave made launching my skincare line feel effortless. I built a stunning page, tracked every click, and even secured payments with escrow — all in one place.",
    image: img1,
  },
  {
    name: "Jane Smith",
    feedback:
      "Fantastic customer support and very reliable. This platform completely changed how I run my business!",
    image: img2,
  },
  {
    name: "Carlos N.",
    feedback: "Smooth experience and the escrow system gives peace of mind.",
    image: img3,
  },
  {
    name: "Aisha T.",
    feedback:
      "As a social media manager, I used to struggle putting together a professional portfolio. With Brandwave, I built a sleek brand page in minutes and started attracting real clients. I love how easy it is to manage multiple brands here.",
    image: img4,
  },
  {
    name: "Kofi B.",
    feedback: "Great dashboard and insights. Super helpful!",
    image: img5,
  },
];

const FirstFooter = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative h-80 sm:h-96 md:h-[30rem] max-w-4xl mx-auto">
        <div className="testimonial-scroll">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-6 py-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-3"
              />
              <p className="text-base sm:text-lg text-gray-700 italic">
                "{testimonial.feedback}"
              </p>
              <p className="mt-2 text-sm text-gray-500">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstFooter;
