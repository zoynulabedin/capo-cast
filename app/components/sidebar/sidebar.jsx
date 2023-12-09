import styles from "../../styles/sidebar.css";
import { Link } from "@remix-run/react";
const menuItems = [
  {
    title: "Menu",
    list: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Notifications",
        path: "/notifications",
      },
      {
        title: "Settings",
        path: "/settings",
      },
      {
        title: "Logout",
        path: "/logout",
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
      },
      {
        title: "Playlist #B",
        path: "/",
      },
      {
        title: "Playlist #C",
        path: "/",
      },
      {
        title: "Add New +",
        path: "/",
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
              <ul className="flex flex-col gap-5 mt-5 ml-5">
                {menuItem.list.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="text-white80 hover:text-red"
                      to={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <ul className="mb-5 mt-5 -ml-2">
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
              <ul className="flex flex-col gap-5 mt-5 ml-5">
                {listItem.list.map((item, index) => (
                  <li key={index}>
                    <Link
                      className=" text-white80 hover:text-red"
                      to={item.path}
                    >
                      {item.title}
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
