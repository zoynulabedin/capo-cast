import { CiSearch } from "react-icons/ci";
import { AiOutlineAudio } from "react-icons/ai";
import { Link } from "@remix-run/react";
import  { useState } from 'react';
const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="flex xs:flex-col mdl:flex-row justify-between gap-10 flex-wrap mb-10">
      <div className="title text-lg24 mt-5 mdl:mt-2 mdl:text-xl30 text-white ">Welcome to The Jim Jones Cast</div>
      <div className="menu flex flex-row xs:justify-between lgl:justify-normal gap-5">
        <div className="search flex flex-row items-center relative justify-between">
          <CiSearch className="absolute text-white ml-2" />
          <input
      type="text"
      placeholder={isFocused ? '' : 'Artist, Music, Album, Product, etc'}
      className="input xs:w-[17rem] sml:w-[22rem] bg-darkbg p-2 rounded-2xl pl-8 outline-none text-white"
      onFocus={handleFocus}
      onBlur={handleBlur}
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
