import React from "react";
import AboutUs from "../images/aboutus.jpg";
import About_block from "../components/About_block";
import { AboutData } from "../images/data";

const About = () => {
  return (
    <div id="about" className="flex flex-col">
      <div
        className={`w-full h-[100vh] relative`}
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <img
          src={AboutUs}
          className="w-full h-[50%] object-cover object-center-top"
          alt=""
        />
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-once="false"
          className="flex flex-col justify-center items-center absolute w-full h-[50%] bg-opacity-60 top-[0%] bg-black"
        >
          <h1 className=" text-white font-extrabold text-[40px]">| ABOUT US</h1>
          <div className="w-[250px] h-[4px] bg-white"></div>
          <h1 className=" text-white text-[28px]">Since 1932</h1>
        </div>
        <div className=" mb-[30px] flex flex-col justify-between md:p-[30px] p-[10px] lg:items-center h-[800px] items-center gap-[30px]">
          {AboutData.map((data, index) => {
            return <About_block key={index} {...data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
