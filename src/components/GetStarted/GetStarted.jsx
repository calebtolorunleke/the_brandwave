import React from "react";
import Header from "./Header";
import BuildTrust from "./BuildTrust";
import WhatDo from "./WhatDo";
import OnceSaid from "./OnceSaid";
import FirstFooter from "./FirstFooter";
import SecFooter from "./SecFooter";

const GetStarted = () => {
  return (
    <>
      <Header />
      <BuildTrust />
      <WhatDo />
      <OnceSaid />
      <hr className="text-gray-600 my-15 mx-30" />
      <FirstFooter />
      <SecFooter />
    </>
  );
};

export default GetStarted;
