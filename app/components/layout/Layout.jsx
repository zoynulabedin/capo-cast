import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row h-full">
      <div
        style={{ backgroundColor: "#3B3B3B", height: "100vh" }}
        className="menu  basis-1/4 bg-darkbg h-full p-5"
      >
        <Sidebar />
      </div>
      <div className="content basis-3/4 p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
