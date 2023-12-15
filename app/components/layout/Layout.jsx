import MobileMenu from "../mobileMenu/mobileMenu";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col xll:flex-row">
      <div
        style={{ backgroundColor: "#3B3B3B" }}
        className="menu left-sidebar xs:w-ful xll:basis-1/6 bg-darkbg p-5 relative"
      >
        <Sidebar />
      </div>
      <div className="content xll:basis-10/12 p-10">
        <MobileMenu/>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
