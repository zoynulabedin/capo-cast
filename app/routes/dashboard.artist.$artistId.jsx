import React from "react";
import Spice from "../components/spice/spice";
import SingleBanner from "../components/singlebanner/Singlebanner";
import { Link } from "@remix-run/react";

const singleArtist = () => {
  return (
    <div className="single-artist">
      <SingleBanner
        banner="../../img/s.png"
        type="New"
        title="IF YOU WANT"
        title2="ME TO STAY"
        slug="in-ha-mod"
      />
      <div className="experiences">
        <h2 className=" text-base20 text-white mt-4">
          Additional artist experiences:
        </h2>
        <div className="grid grid-cols-4 lgl:grid-cols-4 xs:grid-cols-2 song-list -m-4">
          {/* <Spice thumbnail="../../img/p/1.png" title="Gangsta Boo" />
          <Spice thumbnail="../../img/p/2.png" title="Gangsta Boo" />
          <Spice thumbnail="../../img/p/3.png" title="Gangsta Boo" />
          <Spice thumbnail="../../img/p/4.png" title="Gangsta Boo" /> */}
          <div className="thumbnail-play">
          <Link to="/video">
            <img width="100%" src="../../img/p/1.png" alt="" />
          </Link>
          </div>
        <div className="thumbnail-play">
        <Link to="/video">
            <img width="100%" src="../../img/p/2.png" alt="" />
          </Link>
        </div>
        <div className="thumbnail-play">
        <Link to="/video">
            <img width="100%" src="../../img/p/3.png" alt="" />
          </Link>
        </div>
          <div className="thumbnail-play">
          <Link to="/video">
            <img width="100%" src="../../img/p/4.png" alt="" />
          </Link>
          </div>
        
        </div>
      </div>
    
    </div>
  );
};

export default singleArtist;
