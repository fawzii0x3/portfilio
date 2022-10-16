import React from "react";

const Card:React.FC<any> = ({children}) => {
  return (
    <div className="w-[100%] h-[100vh] md:h-[650px] backdrop-blur-lg cardGradiant md:rounded-3xl pt-[24px] sm:px-[96px] px-4 relative lg:mx-20">
      <img
        src="/images/Sphere-White-Matte.png"
        alt="bouncing ball"
        className="md:block hidden absolute top-[-26px] right-[-26px] animate-[wiggle_2s_ease-in-out_infinite]"
      />
      <img
        src="/images/RoundCube-Orange-Glossy.png"
        alt="cube"
        className="absolute left-[30%] bottom-[-47px]  animate-[spin_2s_linear_0s_infinite_reverse] "
      />
      {children}
    </div>
  );
};

export default Card;
