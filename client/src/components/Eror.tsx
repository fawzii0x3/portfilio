import React from "react";
import { Link } from "react-router-dom";

const Eror = () => {
  return (
    <div className="flex flex-col">
      <div>are you lost ?</div>
      <Link to={"/"} className='text-blue-400' >get home</Link>
    </div>
  );
};

export default Eror;
