const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url('../../../img/bg-banner.png')`,
        backgroundSize: "cover",
        backgroundImageRepeat: "no-repeat",
      }}
      className="banner-bg flex flex-row bg-red p-5 rounded-lg mt-10 relative"
    >
      <div className="content">
        <div className="con-header flex items-center gap-5">
          <img src="../../../img/c.png" alt="" />
          <h2 className="text-white text-xl30">
            No Ads & Unlock All of Paid Songs
          </h2>
        </div>
        <div className="con-body mt-6">
          <h1 className="text-xxxl50 text-white font-extrabold">
            Premium Membership
          </h1>
          <p className="text-white text-xl leading-10 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud.
          </p>
        </div>
        <div className="con-footer flex gap-5 mt-10 mb-4">
          <button className=" bg-darkdeepbg text-white pt-3 pb-3 pl-6 pr-6 text-xl rounded-full">
            Upgrade Now
          </button>
          <button className=" bg-transparent border text-white pt-3 pb-3 pl-6 pr-6 text-xl rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <div className="photo absolute right-0 top-0 bottom-0">
        <img className="w-full h-full" src="../../../img/singer.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
