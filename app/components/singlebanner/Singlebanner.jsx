import { useState } from "react";
import ModalPopup from "../modal/ModalPopup";
import { Link } from "@remix-run/react";

const SingleBanner = ({ banner, title, title2, slug }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
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
        <h1 className="sm:text-2xl lgl:text-xxxl60 lgl:leading-[4rem] font-extrabold text-red mt-3 mb-3">
          {title}
          <br />
          {title2}
        </h1>
        <button
          onClick={openModal}
          className="bg-gradient-to-r from-rose-600 to-rose-900 hover:bg-gradient-to-r hover:from-rose-900 hover:to-rose-900 text-white pl-5 pr-5 pt-3 pb-3 rounded-full"
        >
          Watch Now
        </button>
      </div>
      <div className="playButton">
        <button onClick={openModal}>
          <img className="rounded-full" src="../../img/playIcon.png" alt="" />
        </button>
      </div>
      <div className="shopButton flex flex-col">
        <button className=" absolute bottom-7 right-7  text-center">
          <Link className="flex flex-col justify-center" to={`/dashboard/shop`}>
            <span className=" text-red text-base20"> Shop</span>
            <img src="../../../img/cart.png" alt="" />
          </Link>
        </button>
      </div>
      <ModalPopup isOpen={isModalOpen} onClose={closeModal}>
        <div className="w-full h-full absolute z-10 bg-white left-0 right-0 top-0 bottom-0 m-auto">
          <iframe
            title="artitist"
            src="https://widgets.dropp.tv/video/kcJqzvuor2G7b-v4/shop"
            frameborder="0"
            scrolling="no"
            style={{ overflow: "hidden" }}
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </ModalPopup>
    </div>
  );
};

export default SingleBanner;
