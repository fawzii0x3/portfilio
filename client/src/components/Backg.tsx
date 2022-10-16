import React from "react";

const Backg = () => {
  return (
    <>
      <div className="w-[606px] h-[606px] rounded-full  sideball z-[-1] absolute blur-[100px] rotate-[-17deg] top-[-170px] left-[-365px] opacity-[0.8]"></div>
      <div className="w-[606px] h-[606px] rounded-full  sideball z-[-1] absolute blur-[100px] bottom-[-423px] right-[-290px] opacity-[0.8]"></div>
      <img
        src="/images/Pill-Blue-Glossy.png"
        alt="pill"
        className="absolute left-[-108px] top-[65%]  md:block hidden"
      />
      <img
        src="/images/SuperToroid-Yellow-Glossy.png"
        alt="donuts"
        className="absolute z-[-1] right-[-79px] bottom-14 "
      />
    </>
  );
};

export default Backg;
