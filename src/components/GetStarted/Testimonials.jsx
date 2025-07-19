import React from "react";
import img from "../images/big1.png"; // Use different images for real data

const testimonials = [
  {
    name: "Giorgio Moroder",
    title: "CTO of Glovo",
    feedback:
      "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim.",
  },
  {
    name: "Alice Johnson",
    title: "Frontend Lead at Stripe",
    feedback:
      "Donec finibus, urna bibendum ultricies laoreet, urna nulla lacinia justo, sit amet luctus sem neque nec odio.",
  },
  {
    name: "Markus Lindberg",
    title: "Head of UX at Spotify",
    feedback:
      "Aenean sodales turpis at sapien laoreet, ac tincidunt mi fermentum. Integer porttitor, urna sit amet luctus iaculis.",
  },
  {
    name: "Linda Park",
    title: "Software Engineer at Shopify",
    feedback:
      "Ut at turpis ut sapien volutpat porttitor. Curabitur porttitor facilisis turpis, non dignissim sem pretium in.",
  },
  {
    name: "Ayo Balogun",
    title: "Project Manager at Paystack",
    feedback:
      "Aliquam vitae justo ac justo vehicula tincidunt. In hac habitasse platea dictumst. Vivamus ultricies, justo vel commodo.",
  },
  {
    name: "Chen Wei",
    title: "Data Analyst at Alibaba",
    feedback:
      "Suspendisse in libero convallis, dignissim augue in, efficitur est. Nulla facilisi. Sed id justo a libero gravida tincidunt.",
  },
];

const Star = () => (
  <span
    className="inline-block bg-[#FFBA79] h-4 w-4"
    style={{
      clipPath:
        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    }}
  ></span>
);

const Testimonials = () => {
  return (
    <main className="max-w-[1250px] mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-center mb-10">Testimonials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <p className="text-sm text-gray-700">{item.feedback}</p>
            <div className="flex items-center gap-3 mt-4">
              <img
                src={img}
                alt={item.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Testimonials;
