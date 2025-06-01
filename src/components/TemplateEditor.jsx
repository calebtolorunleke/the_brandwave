import React from "react";
import { useLocation } from "react-router-dom";

const TemplateEditor = () => {
  const location = useLocation();
  const { templateName } = location.state || {};

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">
        Customize Your{" "}
        {templateName + " " + "Personal Website" || "Personal Website"}
      </h1>
      <form className="space-y-4 max-w-xl">
        <input
          type="text"
          placeholder="Title"
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          placeholder="Description or content..."
          className="w-full px-4 py-2 border rounded h-40"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save & Preview
        </button>
      </form>
    </div>
  );
};

export default TemplateEditor;
