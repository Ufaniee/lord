/** @format */

import React, { useEffect, useState } from "react";
import ButtonSlider from "./ButtonSlider";
import { dataSlider } from "../../constants";
import Button from "../global/Button";
import Link from 'next/link';

const HeroSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const timeoutRef = React.useRef(null);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      if (slideIndex !== dataSlider.length) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === dataSlider.length) {
        setSlideIndex(1);
      }
    }, 10000);
    return () => {
      resetTimeout();
    };
  });

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div
      className="h-[400px] mx-auto my-0 relative overflow-hidden rounded-[32px]"
      style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
    >
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={`w-full h-full absolute opacity-0 transition-all ease-in-out ${
              slideIndex === index + 1 ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${obj.backgroundImage})`,
              backgroundColor: obj.color,
            }}
          >
            <div className="absolute text-center lg:text-left top-12 left-6 lg:left-28 w-[266px] lg:w-[500px] flex flex-col gap-4">
              <h1 className="text-[36px] lg:text-[56px] font-semibold text-colorBold" style={{ color: obj.color1 }}>
                {obj.title}
              </h1>
              <p className="text-[15px] lg:text-2xl text-colorNormal" style={{ color: obj.color2 }}>
                {obj.subTitle}
              </p>
              <Link href="/Authentication/userlogin"
                className="px-6 py-3 rounded-lg text-lg w-fit mx-auto lg:mx-0"
                style={{ backgroundColor: obj.buttonColor }}
              >Shop Now</Link>
            </div>
          </div>
        );
      })}

      <ButtonSlider moveSlide={prevSlide} direction={"prev"} />
      <ButtonSlider moveSlide={nextSlide} direction={"next"} />

      <div className="absolute bottom-2 left-[40%] lg:left-[45%] flex">
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={`h-2 mx-1 ${
              slideIndex === index + 1
                ? "w-5 rounded-lg bg-primary"
                : "w-2 rounded-full bg-[#FAFAFA]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
