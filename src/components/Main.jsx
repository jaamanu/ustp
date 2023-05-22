import React from "react";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[1]"
        src="../../src/assets/Screenshot_2023-05-20_at_14_37_35-transformed.png"
        alt="Background"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/30 flex flex-col items-center justify-center">
        <h1 className="sm:text-5xl text-4xl font-bold text-red-500 mb-4">USTP</h1>
        <TypeAnimation
          className="flex font-semibold text-white-300 shadow-lg shadow-white bg-white"
          sequence={[
            "GATEWAY VISA TO TEACH IN USA ON EXCHANGE PROGRAM ", // Types 'One'
            3000, // Waits 1s
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "1em", paddingLeft: "10px" }}
        />
        <a href="https://forms.gle/dxvQLLiGMD3QUVfR7" target="_blank" rel="noopener noreferrer" className="text-white-300 mt-4 font-extrabold  shadow-2xl shadow-white bg-red-500">
          Apply Here
        </a>
      </div>
    </div>
  );
};

export default Main;

