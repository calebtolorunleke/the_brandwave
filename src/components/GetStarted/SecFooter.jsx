import React from "react";
import twitter from "../icons/twitter.png";
import linkedin from "../icons/linkedin.png";
import facebook from "../icons/facebook.png";
import zero from "../icons/zero.png";

const SecFooter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 bg-gray-100 gap-4 text-sm text-gray-600">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <span className="hover:underline cursor-pointer">Privacy Policy</span>
        <span className="hover:underline cursor-pointer">Terms of Service</span>
      </div>

      <div className="flex flex-row items-center gap-3">
        <img src={twitter} alt="Twitter" className="w-5 h-5" />
        <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
        <img src={facebook} alt="Facebook" className="w-5 h-5" />
        <img src={zero} alt="Zero" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default SecFooter;
