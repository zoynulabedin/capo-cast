import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../slideItem/SlideItem";

const sliderItems = [
  {
    category: "For You",
    title: "Eternal Love",
    link: "example.com/eternal-love",
    thumbnail: "example.com/thumbnail1.jpg",
    artist: "Sarah Harmony",
  },
  {
    category: "Popular",
    title: "Starlight Groove",
    link: "example.com/starlight-groove",
    thumbnail: "example.com/thumbnail2.jpg",
    artist: "Alex Beats",
  },
  {
    category: "Podcasts",
    title: "Mindful Moments",
    link: "example.com/mindful-moments",
    thumbnail: "example.com/thumbnail3.jpg",
    artist: "Emma Zen",
  },
  {
    category: "Rap EDM",
    title: "Electro Hype",
    link: "example.com/electro-hype",
    thumbnail: "example.com/thumbnail4.jpg",
    artist: "MC Voltage",
  },
  {
    category: "Rock",
    title: "Rebel Heart",
    link: "example.com/rebel-heart",
    thumbnail: "example.com/thumbnail5.jpg",
    artist: "Thunderstruck Rebels",
  },
  {
    category: "More",
    title: "Infinite Dreams",
    link: "example.com/infinite-dreams",
    thumbnail: "example.com/thumbnail6.jpg",
    artist: "Luna Muse",
  },
  {
    category: "For You",
    title: "Serendipity",
    link: "example.com/serendipity",
    thumbnail: "example.com/thumbnail7.jpg",
    artist: "Jason Serenade",
  },
  {
    category: "Popular",
    title: "Dance All Night",
    link: "example.com/dance-all-night",
    thumbnail: "example.com/thumbnail8.jpg",
    artist: "Bella Rhythm",
  },
  {
    category: "Podcasts",
    title: "Tech Talk Today",
    link: "example.com/tech-talk-today",
    thumbnail: "example.com/thumbnail9.jpg",
    artist: "Max Code",
  },
  {
    category: "Rap EDM",
    title: "Neon Beats",
    link: "example.com/neon-beats",
    thumbnail: "example.com/thumbnail10.jpg",
    artist: "DJ Luminate",
  },
  {
    category: "Rock",
    title: "Wandering Souls",
    link: "example.com/wandering-souls",
    thumbnail: "example.com/thumbnail11.jpg",
    artist: "Echo Wanderers",
  },
  {
    category: "More",
    title: "Chasing Shadows",
    link: "example.com/chasing-shadows",
    thumbnail: "example.com/thumbnail12.jpg",
    artist: "Astral Chaser",
  },
];
const Cloudxaislider = () => {
  return (
    <>
      <div className="cloudaiSlider-wrapper relative z-10">
        <div className="container pb-28 pt-24">
          <div className="section-title mb-10">
            <h1 className="lgl:text-xxl40 text-center md:text-left xl:text-xxxl70 lg91:text-xl30 text-lg24">
              Use Cases That Can Be Applied <br /> Using{" "}
              <span className=" text-blue-600"> CloudX AI</span>
            </h1>
            <p className=" text-[20px] text-center font-Inter font-normal text-[#000] lgl:text-[24px] mdl:text-left ">
              Lets explore the different use cases this application has to
              offer.
            </p>
          </div>

          <div className="slider-wrapper">
            <SliderComponent items={sliderItems} />
            <h1 className="text-white">Hello</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cloudxaislider;
