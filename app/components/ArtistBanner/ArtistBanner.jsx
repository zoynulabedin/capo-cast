import { RiShoppingBag3Fill } from "react-icons/ri";
import { Link } from "@remix-run/react";

export const ArtistBanner = ({ banner, title, title2, slug }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex justify-between h-[454px] items-center pl-7 pr-7 relative mt-7"
    >
      <div className="content">
        <img src="../../../img/badge.png" alt="" />
        <h1 className=" text-xxxl60 font-extrabold text-red">
          {" "}
          {title}
          <br />
          {title2}
        </h1>
        <button className="bg-gradient-to-r from-rose-600 to-rose-900 hover:bg-gradient-to-r hover:from-rose-900 hover:to-rose-900 text-white pl-5 pr-5 pt-3 pb-3 rounded-full">
          Watch Now
        </button>
      </div>
      <div className="playButton">
        <button>
          <img className="rounded-full" src="../../img/playIcon.png" alt="" />
        </button>
      </div>
      <div className="shopButton flex flex-col">
        <button className=" absolute bottom-7 right-7  text-center">
          <Link className="flex flex-col justify-center" to={`shop/${slug}`}>
            <span className=" text-red text-base20"> Shop</span>
            <img src="../../../img/cart.png" alt="" />
          </Link>
        </button>
      </div>
    </div>
  );
};
