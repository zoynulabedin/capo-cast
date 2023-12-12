import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col xll:flex-row">
      <div
        style={{ backgroundColor: "#3B3B3B", height: "100vh" }}
        className="menu xs:w-ful xll:basis-1/4 bg-darkbg p-5 "
      >
        <Sidebar />
      </div>
      <div className="content xll:basis-3/4 p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
