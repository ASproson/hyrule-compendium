import React from "react";
import triforce from "../assets/triforce.png";

const Banner = () => {
  return (
    <div className="w-screen h-screen absolute -z-50">
      {/* <div
        className="w-full h-[90px] absolute  top-0 rotate-180"
        style={{ backgroundImage: `url(${triforce})` }}
      ></div> */}
      <div
        className="w-full h-[90px] absolute bottom-0"
        style={{ backgroundImage: `url(${triforce})` }}
      ></div>
    </div>
  );
};

export default Banner;
