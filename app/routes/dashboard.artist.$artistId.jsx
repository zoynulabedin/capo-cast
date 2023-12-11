import { ArtistBanner } from "../components/ArtistBanner/ArtistBanner";

import React from "react";
import Spice from "../components/spice/spice";
export const loader = () => {
  console.log(`Loading`);
  return null;
};
const singleArtist = () => {
  return (
    <div className="container">
      <ArtistBanner
        banner="../../img/singer-profile-bg.png"
        type="New"
        title="IN HA"
        title2="MOOD"
        slug="in-ha-mod"
      />
      <div className="experiences">
        <h2 className=" text-xl30 text-white mt-4 mb-4">
          More Ice Spice Experiences:
        </h2>
        <div className="flex flex-row gap-5">
          <Spice thumbnail="../../img/sp-1.png" title="Gangsta Boo" />
          <Spice thumbnail="../../img/sp-2.png" title="Gangsta Boo" />
          <Spice thumbnail="../../img/sp-3.png" title="Gangsta Boo" />
          <Spice thumbnail="../../img/sp-4.png" title="Gangsta Boo" />
        </div>
      </div>
    </div>
  );
};

export default singleArtist;
