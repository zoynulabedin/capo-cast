import React from "react";
import Banner from "../components/banner/Banner";
import { Button } from "../components/button/Button";
import SlideItem from "../components/slideItem/SlideItem";

const Index = () => {
  return (
    <>
      <Banner />
      <div className="grid xs:grid-cols-3 sml:grid-cols-4 mdl:grid-cols-7 gap-6 mt-5">
        <Button title="For you" active={true} />
        <Button title="Popular" active={false} />
        <Button title="Podcasts" active={false} />
        <Button title="Rap" active={false} />
        <Button title="EDM" active={false} />
        <Button title="Rook" active={false} />
        <Button title="More" active={false} />
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 mdl:grid-cols-3 lg:grid-cols-3 lgl:grid-cols-4 xl:grid-cols-5 gap-4 justify-center">
        <SlideItem thumbnail="../../img/1.png" artist="PFire" id="1" />
        <SlideItem thumbnail="../../img/2.png" artist="Ice Spice" id="2" />
        <SlideItem thumbnail="../../img/3.png" artist="Neil Tran" id="3" />
        <SlideItem thumbnail="../../img/4.png" artist="Soo Jin Ae" id="4" />
        <SlideItem thumbnail="../../img/5.png" artist="Yael Amari" id="5" />
      </div>
    </>
  );
};

export default Index;
