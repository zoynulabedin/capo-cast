import styles from "../../styles/sidebar.css";
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
        path: "/",
        icon: <AiFillAppstore size={30} />,
      },
      {
        title: "Notifications",
        path: "/notifications",
        icon: <IoIosNotifications size={30} />,
      },
      {
        title: "Settings",
        path: "/settings",
        icon: <IoSettingsSharp size={30} />,
      },
      {
        title: "Logout",
        path: "/logout",
        icon: <RiLoginBoxLine size={30} />,
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
        icon: <BiSolidPlaylist size={30} />,
      },
      {
        title: "Playlist #B",
        path: "/",
        icon: <BiSolidPlaylist size={30} />,
      },
      {
        title: "Playlist #C",
        path: "/",
        icon: <BiSolidPlaylist size={30} />,
      },
      {
        title: "Add New +",
        path: "/",
        icon: <BiSolidPlaylist size={30} />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar bg-darkbgs h-full">
      <div className="logo">
        <img src="../../../img/logo.png" alt="" />
      </div>
      <div className="menu">
        <ul className="flex flex-col mt-4">
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <span className="text-white menu-title">{menuItem.title}</span>
              <ul className="flex flex-col gap-10 mt-5">
                {menuItem.list.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="text-white80 hover:text-red flex gap-2"
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
            <Link className="text-white80 hover:text-red flex gap-2" to="">
              <img src="../../../img/qs.png" alt="" />
              QS Studios
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col mt-3">
          {playList.map((listItem, index) => (
            <li key={index}>
              <span className="text-white menu-title">{listItem.title}</span>
              <ul className="flex flex-col gap-10 mt-5">
                {listItem.list.map((item, index) => (
                  <li key={index}>
                    <Link
                      className=" text-white80 hover:text-red flex gap-2"
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
    </div>
  );
};

export default Sidebar;

export const links = () => [{ rel: "stylesheet", href: styles }];
