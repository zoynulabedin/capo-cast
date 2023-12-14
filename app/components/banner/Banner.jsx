const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url('../../../img/b.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="banner-bg flex flex-row justify-between rounded-lg mt-10 relative"
    >
      <div className="content pl-5 pt-5">
        <div className="con-header flex items-center gap-5">
          <img src="../../../img/c.png" alt="" />
          <h2 className="text-white text-sm18">
            No Ads & Unlock All of Paid Songs
          </h2>
        </div>
        <div className="con-body">
          <h1 className=" text-xl30 text-white font-extrabold">
            Premium Membership
          </h1>
          <p className="text-white lgl:text-xl lgl:leading-10 break-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud.
          </p>
        </div>
        <div className="con-footer flex xs:flex-col sml:flex-row gap-5 mt-5 mb-4">
          <button className=" bg-darkdeepbg text-white pt-2 pb-2 pl-6 pr-6 text-xl rounded-full">
            Upgrade Now
          </button>
          <button className=" bg-transparent border text-white pt-2 pb-2 pl-6 pr-6 text-xl rounded-full">
            Learn More
          </button>
        </div>
      </div>
      {/* <div className="photo hidden lgl:block xl:absolute right-0 top-0 bottom-0">
        <img
          className="xxl:w-full h-auto xxl:h-full"
          src="../../../img/singer.png"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Banner;
