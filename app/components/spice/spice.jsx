import { Link } from "@remix-run/react";
const Spice = ({ thumbnail, title }) => {
  return (
    <div className=" bg-red rounded-xl">
      <div
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: "cover",
        }}
        className="video flex items-center justify-center w-[206px] h-[134px]"
      >
        <button>
          <img
            width={40}
            className="rounded-full"
            src="../../../img/playIcon.png"
            alt=""
          />
        </button>
      </div>
      <div className="bottom flex justify-between p-2">
        <h3 className=" text-white">{title}</h3>
        <Link>
          <img width={40} src="../../../img/cart.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Spice;
