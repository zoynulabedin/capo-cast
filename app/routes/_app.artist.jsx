import React from "react";
import SlideItem from "../components/slideItem/SlideItem";
import { useParams, Outlet } from "@remix-run/react";
export const loader = () => {
  console.log("loading back");
  return null;
};
const Artist = () => {
  return (
    <div className="flex flex-row justify-between flex-wrap">
      <SlideItem thumbnail="../../img/1.png" artist="PFire" id="1" />
      <SlideItem thumbnail="../../img/2.png" artist="Ice Spice" id="2" />
      <SlideItem thumbnail="../../img/3.png" artist="Neil Tran" id="3" />
      <SlideItem thumbnail="../../img/4.png" artist="Soo Jin Ae" id="4" />
      <SlideItem thumbnail="../../img/5.png" artist="Yael Amari" id="5" />
      <SlideItem thumbnail="../../img/1.png" artist="PFire" id="6" />
      <SlideItem thumbnail="../../img/2.png" artist="Ice Spice" id="7" />
      <SlideItem thumbnail="../../img/3.png" artist="Neil Tran" id="8" />
      <SlideItem thumbnail="../../img/4.png" artist="Soo Jin Ae" id="9" />
      <SlideItem thumbnail="../../img/5.png" artist="Yael Amari" id="10" />
      <SlideItem thumbnail="../../img/1.png" artist="PFire" id="11" />
      <SlideItem thumbnail="../../img/2.png" artist="Ice Spice" id="12" />
      <SlideItem thumbnail="../../img/3.png" artist="Neil Tran" id="13" />
      <SlideItem thumbnail="../../img/4.png" artist="Soo Jin Ae" id="14" />
      <SlideItem thumbnail="../../img/5.png" artist="Yael Amari" id="15" />
      <SlideItem thumbnail="../../img/1.png" artist="PFire" id="16" />
      <SlideItem thumbnail="../../img/2.png" artist="Ice Spice" id="17" />
      <SlideItem thumbnail="../../img/3.png" artist="Neil Tran" id="18" />
      <SlideItem thumbnail="../../img/4.png" artist="Soo Jin Ae" id="19" />
      <SlideItem thumbnail="../../img/5.png" artist="Yael Amari" id="20" />
    </div>
  );
};

export default Artist;
