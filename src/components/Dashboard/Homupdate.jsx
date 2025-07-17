import React from "react";
import logo from "../images/logo.svg";

const Homupdate = () => {
  return (
    <>
      <main>
        <header>
          <div>
            <img src={logo} alt="" />
            <span>Brandwave</span>
          </div>
          <ul>
            <li>Feature</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
          <button>Launch my Brand</button>
        </header>
      </main>
    </>
  );
};

export default Homupdate;
