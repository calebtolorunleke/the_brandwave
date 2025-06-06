import React from "react";
import { useNavigate } from "react-router-dom";
import SecFooter from "../GetStarted/SecFooter";
import big1 from "../images/big1.png";
import big2 from "../images/big2.png";
import big3 from "../images/big3.png";
import big4 from "../images/big4.png";
import big5 from "../images/big5.png";
import big6 from "../images/big6.png";
import big7 from "../images/big7.png";
import big8 from "../images/big8.png";
import big9 from "../images/big9.png";

export const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const firstName = user?.fullName ? user.fullName.split(" ")[0] : "User";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/Signin");
  };

  const handleUseTemplate = (templateName) => {
    navigate("/TemplateEditor", { state: { templateName } });
  };

  const templates = [
    {
      name: "Business Report",
      desc: "Create a clean and professional report in minutes.",
      img: big1,
    },
    {
      name: "Portfolio",
      desc: "Showcase your work and personal brand beautifully.",
      img: big2,
    },
    {
      name: "Newsletter",
      desc: "Send updates and content in a professional format.",
      img: big3,
    },
    {
      name: "Event Invitation",
      desc: "Create elegant invites for your special events.",
      img: big4,
    },
    {
      name: "Resume",
      desc: "Build a standout resume that highlights your skills.",
      img: big5,
    },
    {
      name: "Invoice",
      desc: "Generate professional invoices with ease.",
      img: big6,
    },
    {
      name: "Project Proposal",
      desc: "Craft convincing proposals for your projects.",
      img: big7,
    },
    {
      name: "Meeting Agenda",
      desc: "Organize your meetings with clear agendas.",
      img: big8,
    },
    {
      name: "Press Release",
      desc: "Announce news and events professionally.",
      img: big9,
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800">
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Hello, {firstName}!</h1>
        <button
          className="text-blue-600 hover:underline"
          onClick={handleLogout}
        >
          Logout!
        </button>
      </nav>

      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Choose a Template to Get Started
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded-lg p-4 flex flex-col"
            >
              <img
                src={template.img}
                alt={`Template ${idx + 1}`}
                className="rounded mb-3"
              />
              <div className="min-h-[100px] mb-3">
                <h3 className="text-lg font-semibold">{template.name}</h3>
                <p className="text-sm text-gray-600">{template.desc}</p>
              </div>
              <button
                onClick={() => handleUseTemplate(template.name)}
                className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>

      <SecFooter />
    </div>
  );
};
