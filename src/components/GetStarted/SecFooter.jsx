import React from "react";
import twitter from "../icons/twitter.png";
import linkedin from "../icons/linkedin.png";
import facebook from "../icons/facebook.png";
import zero from "../icons/zero.png";

const SecFooter = () => {
  return (
    <div className="flex flex-row items-ccenter justify-between  p-5">
      <div>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
      <div className="flex flex-row items-center gap-1">
        <img src={twitter} alt="" className="w-5 h-5" />
        <img src={linkedin} alt="" className="w-5 h-5" />
        <img src={facebook} alt="" className="w-5 h-5" />
        <img src={zero} alt="" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default SecFooter;
