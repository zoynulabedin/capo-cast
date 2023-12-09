import { CiSearch } from "react-icons/ci";
import { AiOutlineAudio } from "react-icons/ai";
import { Link } from "@remix-run/react";
const Navbar = () => {
  return (
    <div className="container flex justify-between gap-10">
      <div className="title text-xl30 text-white ">Welcome, Claudia Alves!</div>
      <div className="menu flex flex-row gap-5">
        <div className="search flex flex-row items-center relative">
          <CiSearch className="absolute text-white ml-2" />
          <input
            type="text"
            placeholder="Artist, Music, Album, Product, etc"
            className="input w-[22rem] bg-darkbg p-2 rounded-2xl pl-8 outline-none text-white"
          />
          <button className="absolute right-0 mr-2">
            <AiOutlineAudio className="text-white" />
          </button>
        </div>
        <div className="Profile">
          <Link to="">
            <img src="../../../img/profile.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
