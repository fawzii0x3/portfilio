import React from "react";
import { NavLink,Link } from "react-router-dom";

const NavBar = () => {
  "font-normal text-base after:content-[''] after:block after:w-[100%] after:h-[1px] after:bg-[#f9fafb] after:mt-1  after:animate-[move_1s_ease-out_1] overflow-hidden";
  return (
    <nav className="flex justify-between items-center">
      <div>
        <Link to="/" className="font-bold text-2xl">
          bcmDev
        </Link>
      </div>
      <div className="flex gap-11 ">
        {[{to:"/hire-me",content:"contact"},{to:"/projects",content:"projects"}].map((itm, idx: number) => {
          return (
            <NavLink
            key={idx}
              to={itm.to}
              className={({ isActive}) =>
                isActive
                  ? "font-normal text-base after:content-[''] after:block after:w-[100%] after:h-[1px] after:bg-[#f9fafb] after:mt-1  after:animate-[move_1s_ease-out_1] overflow-hidden"
                  : "font-normal text-base"
              }
            >
              {itm.content}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
