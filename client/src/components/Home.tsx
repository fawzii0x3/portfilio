import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[100%] w-[100%]">
        <div className="md:w-[50%] w-[100%] flex flex-col gap-6 items-start">
          <p className="font-bold text-4xl flex flex-col">
            <span>Hello! I am Mohamed .</span>
            <span>A full stack dev</span>
          </p>
          <p className="font-normal text-base">
            Passionate in Frontend Dev and UI/UX Design. Likes to build
            fast-performance and well-designed website interfaces using the
            latest technologies.
          </p>
          <Link to={"/hire-me"} className="bg-[#F2672E] py-3 px-6 rounded flex items-center gap-2 font-normal text-base">
            <FontAwesomeIcon icon={faBriefcase} />
            Hire me
          </Link>
        </div>
        <div className="md:block hidden">
          <img src="/images/Saly-13.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
