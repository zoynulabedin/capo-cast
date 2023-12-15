import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "@remix-run/react";
import { AiFillAppstore } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";
import { BiSolidPlaylist } from "react-icons/bi";

const menuItems = [
  {
    title: "Menu",
    list: [
      {
        title: "Home",
        path: "/dashboard",
        icon: <AiFillAppstore size={28} />,
      },
      {
        title: "Notifications",
        path: "/notifications",
        icon: <IoIosNotifications size={28} />,
      },
      {
        title: "Settings",
        path: "/settings",
        icon: <IoSettingsSharp size={28} />,
      },
      {
        title: "Logout",
        path: "/logout",
        icon: <RiLoginBoxLine size={28} />,
      },
    ],
  },
];
const playList = [
  {
    title: "My Playlist",
    list: [
      {
        title: "Playlist #A",
        path: "/",
        icon: <BiSolidPlaylist size={28} />,
      },
      {
        title: "Playlist #B",
        path: "/",
        icon: <BiSolidPlaylist size={28} />,
      },
      {
        title: "Playlist #C",
        path: "/",
        icon: <BiSolidPlaylist size={28} />,
      },
      {
        title: "Add New +",
        path: "/",
        icon: <BiSolidPlaylist size={28} />,
      },
    ],
  },
];

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-menu">
      <div className="menu-header flex justify-between">
        <img src="../../../img/logo.png" alt="Logo" className="logo" />
        <div className="menu-icons">
          {isMenuOpen ? (
            <FaTimes className="close-icon text-white" onClick={toggleMenu} />
          ) : (
            <FaBars className="bars-icon text-white" onClick={toggleMenu} />
          )}
        </div>
      </div>
      {isMenuOpen && (
         <div className="menu absolute w-full bg-[#202020] z-10">
         <ul className="flex flex-col mt-4">
           {menuItems.map((menuItem, index) => (
             <li key={index}>
               <span className="text-white menu-title text-[20px] ">
                 {menuItem.title}
               </span>
               <ul className="flex flex-col gap-10 mt-10">
                 {menuItem.list.map((item, index) => (
                   <li key={index}>
                     <Link
                       className="text-white80 hover:text-red flex gap-2  text-[20px] font-light"
                       to={item.path}
                     >
                       {item.icon} {item.title}
                     </Link>
                   </li>
                 ))}
               </ul>
             </li>
           ))}
         </ul>
         <ul className="mb-8 mt-8">
           <li>
             <Link
               className="text-white80 hover:text-red flex gap-2 text-[20px]"
               to=""
             >
               <img src="../../../img/qs.png" alt="" />
               QS Studios
             </Link>
           </li>
         </ul>
         <ul className="flex flex-col mt-3">
           {playList.map((listItem, index) => (
             <li key={index}>
               <span className="text-white menu-title  text-[20px]">
                 {listItem.title}
               </span>
               <ul className="flex flex-col gap-10 mt-5">
                 {listItem.list.map((item, index) => (
                   <li key={index}>
                     <Link
                       className=" text-white80 hover:text-red flex gap-2  text-[20px]"
                       to={item.path}
                     >
                       {item.icon} {item.title}
                     </Link>
                   </li>
                 ))}
               </ul>
             </li>
           ))}
         </ul>
       </div>
      )}
    </div>
  );
};

export default MobileMenu;
