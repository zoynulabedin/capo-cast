import { RiShoppingBag3Fill } from "react-icons/ri";
import { Link } from "@remix-run/react";
export const loader = () => {
  alert("Loading");
  return null;
};
export const ArtistBanner = ({ banner, type, title, slug }) => {
  return (
    <div style={{ backgroundImage: `url(${banner})` }} className="flex">
      <div className="content">
        <h2>{type}</h2>
        <h1> {title}</h1>
        <button>Watch Now</button>
      </div>
      <div className="playButton">
        <button>
          <img src="../../img/playIcon.png" alt="" />
        </button>
      </div>
      <div className="shopButton">
        <button>
          <Link to={`shop/${slug}`}>
            Shop <RiShoppingBag3Fill />
          </Link>
        </button>
      </div>
    </div>
  );
};
