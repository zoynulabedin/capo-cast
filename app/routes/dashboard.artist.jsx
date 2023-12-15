import React from "react";
import SlideItem from "../components/slideItem/SlideItem";
import { Outlet, useParams } from "@remix-run/react";
const Artist = () => {
  const params = useParams();
  const artistId = params.artistId;
  if (artistId) {
    return <Outlet />;
  }
  return (
    <div className="grid grid-cols-6 gap-4">
      <SlideItem thumbnail="../../img/1.png" artist="PFire" id="1" />
      <SlideItem thumbnail="../../img/2.png" artist="Ice Spice" id="2" />
      <SlideItem thumbnail="../../img/3.png" artist="Neil Tran" id="3" />
      <SlideItem thumbnail="../../img/4.png" artist="Soo Jin Ae" id="4" />
      <SlideItem thumbnail="../../img/5.png" artist="Yael Amari" id="5" />
      <SlideItem thumbnail="../../img/1.png" artist="PFire" id="6" />
      <SlideItem thumbnail="../../img/2.png" artist="Ice Spice" id="7" />
      <SlideItem thumbnail="../../img/3.png" artist="Neil Tran" id="8" />
      
      <Outlet />
    </div>
  );
};

export default Artist;
