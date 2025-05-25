import React from "react";
import blueProtect from "../icons/blueProtect.png";
import checkMark from "../icons/checkmark.png";
import multiBrand from "../icons/multiBrand.png";
import analytics from "../icons/analytics.png";

const WhatDo = () => {
  return (
    <div className="flex flex-row px-6 py-4 items-center justify-center gap-15 py-15">
      <div className="flex flex-col items-center justify-center w-[20%] px-5 text-center">
        <img src={blueProtect} alt="" />
        <h1>Esrow Payment</h1>
        <h1 className="font-bold">Integration</h1>
        <p>Indutes cassinations, to build obstonn trust</p>
      </div>

      <div className="flex flex-col items-center justify-center w-[20%] px-5 text-center">
        <img src={checkMark} alt="" className="w-15 h-15" />
        <h1>Verified Seller</h1>
        <h1 className="font-bold">Badge</h1>
        <p>Check arr preomonection forim tould trust</p>
      </div>

      <div className="flex flex-col items-center justify-center w-[20%] px-5 text-center">
        <img src={multiBrand} alt="" />
        <h1>Multi-brand</h1>
        <h1 className="font-bold">Management</h1>
        <p>Manage multiple enplicy brands, and track trnt</p>
      </div>

      <div className="flex flex-col items-center justify-center w-[20%] px-5 text-center">
        <img src={analytics} alt="" />
        <h1>Analytics</h1>
        <h1 className="font-bold">Dashborad</h1>
        <p>Monitor Visratilfct, teres and enportain</p>
      </div>
    </div>
  );
};

export default WhatDo;
