import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./GetStarted/Header";

const TemplateEditor = () => {
  const location = useLocation();
  const { templateName } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto mt-10 bg-white p-8 shadow-md rounded-xl border mb-5 border-gray-200">
        <h1 className="text-3xl font-semibold text-blue-700 mb-6">
          Craft Your Press Release
        </h1>

        <form className="space-y-6">
          {/* Headline */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Headline
            </label>
            <input
              type="text"
              placeholder="Enter a compelling headline"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Body */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Body
            </label>
            <textarea
              placeholder="Write the main content of your press release here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
            />
          </div>

          {/* Contact Info Title */}
          <h3 className="text-xl font-semibold text-blue-600 mt-6">
            Contact Information
          </h3>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Title
                </label>
                <input
                  type="text"
                  placeholder="Head of Communications"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Phone{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="+234..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Multimedia Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Multimedia <span className="text-gray-400">(Optional)</span>
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-4 py-10 border border-dashed border-gray-300 rounded-lg bg-gray-50 cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          {/* Submit Button */}
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
            >
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TemplateEditor;
