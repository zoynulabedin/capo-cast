import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row">
      <div
        style={{ backgroundColor: "#3B3B3B" }}
        className="menu  basis-1/4 bg-darkbg p-5"
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
