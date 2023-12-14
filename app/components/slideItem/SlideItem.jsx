import { Link } from "@remix-run/react";
export const SlideItem = ({ thumbnail, artist, id }) => {
  return (
    <Link to={`/dashboard/artist/${id}`}>
      <div className="flex flex-col justify-center mt-7">
        <div
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          className="item h-[200px] w-[200px] flex items-center justify-center rounded-xl"
        >
          <button>
            <img className="rounded-full" src="../../../img/play.png" alt="" />
          </button>
        </div>
        <div className="text-center mt-4">
          <h3 className="text-white text-lg24">{artist}</h3>
        </div>
      </div>
    </Link>
  );
};
export default SlideItem;
