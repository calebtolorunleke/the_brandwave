import React from "react";
import blueProtect from "../icons/blueProtect.png";
import checkMark from "../icons/checkmark.png";
import multiBrand from "../icons/multiBrand.png";
import analytics from "../icons/analytics.png";

const FirstFooter = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap px-6 py-10 items-center justify-center gap-10 bg-gray-50">
      {/* Card 1 */}
      <div className="flex flex-col items-center text-center w-full md:w-[45%] lg:w-[20%] px-4">
        <img src={blueProtect} alt="Escrow" className="w-16 h-16 mb-2" />
        <h1 className="text-lg font-medium">Escrow Payment</h1>
        <h1 className="font-bold text-xl">Integration</h1>
        <p className="text-sm text-gray-600">
          Indutes cassinations, to build obstonn trust
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center text-center w-full md:w-[45%] lg:w-[20%] px-4">
        <img src={checkMark} alt="Verified" className="w-16 h-16 mb-2" />
        <h1 className="text-lg font-medium">Verified Seller</h1>
        <h1 className="font-bold text-xl">Badge</h1>
        <p className="text-sm text-gray-600">
          Check arr preomonection forim tould trust
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center text-center w-full md:w-[45%] lg:w-[20%] px-4">
        <img src={multiBrand} alt="Multi-brand" className="w-16 h-16 mb-2" />
        <h1 className="text-lg font-medium">Multi-brand</h1>
        <h1 className="font-bold text-xl">Management</h1>
        <p className="text-sm text-gray-600">
          Manage multiple enplicy brands, and track trnt
        </p>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center text-center w-full md:w-[45%] lg:w-[20%] px-4">
        <img src={analytics} alt="Analytics" className="w-16 h-16 mb-2" />
        <h1 className="text-lg font-medium">Analytics</h1>
        <h1 className="font-bold text-xl">Dashboard</h1>
        <p className="text-sm text-gray-600">
          Monitor Visratilfct, teres and enportain
        </p>
      </div>
    </div>
  );
};

export default FirstFooter;
