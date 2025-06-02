import React from "react";
import blueProtect from "../icons/blueProtect.png";
import checkMark from "../icons/checkmark.png";
import multiBrand from "../icons/multiBrand.png";
import analytics from "../icons/analytics.png";

const WhatDo = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center px-4 py-10 gap-8 bg-white">
      {/* Card 1 */}
      <div className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/4 px-4">
        <img src={blueProtect} alt="Escrow" className="w-12 h-12 mb-2" />
        <h1>Esrow Payment</h1>
        <h1 className="font-bold">Integration</h1>
        <p className="text-sm text-gray-600">
          Secure your transactions with Brandwave’s escrow payment—funds are
          only released when both parties are satisfied.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/4 px-4">
        <img src={checkMark} alt="Verified" className="w-12 h-12 mb-2" />
        <h1>Verified Seller</h1>
        <h1 className="font-bold">Badge</h1>
        <p className="text-sm text-gray-600">
          Build trust instantly with the Verified Seller badge — only authentic
          and vetted sellers earn it.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/4 px-4">
        <img src={multiBrand} alt="Multi-brand" className="w-12 h-12 mb-2" />
        <h1>Multi-brand</h1>
        <h1 className="font-bold">Management</h1>
        <p className="text-sm text-gray-600">
          Easily manage all your business ideas from one account — switch,
          compare, and grow faster.
        </p>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/4 px-4">
        <img src={analytics} alt="Analytics" className="w-12 h-12 mb-2" />
        <h1>Analytics</h1>
        <h1 className="font-bold">Dashboard</h1>
        <p className="text-sm text-gray-600">
          Track visits, clicks, and conversions in real time with your
          personalized analytics dashboard.
        </p>
      </div>
    </div>
  );
};

export default WhatDo;
