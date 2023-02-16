import React, { useState } from "react";

const About_block = ({ title, text }) => {
  const [show, setShow] = useState(true);
  console.log(title);
  return (
    <div
      // data-aos="fade-right"
      // data-aos-offset="300"
      // data-aos-easing="ease-in-sine"
      // data-aos-once="false"
      className={`flex flex-col justify-top md:w-[60%] w-full  p-[30px] overflow-hidden bg-[#323131] hover:bg-[#444444] rounded-[20px]`}
    >
      <h1 className="text-white text-[28px] font-bold">{title}</h1>
      {/* <div className="w-[250px] h-[2px] bg-white"></div> */}
      <p
        className={` indent-6 text-white text-justify mt-[10px] lg:text-[14px] md:text-[12px] text-[10px] transistion-[all] duration-[0.7s] ease-out-flex  ${
          show ? `hidden` : `flex`
        }`}
      >
        {text}
        {/*.substring(0, 200) */}
      </p>
      <p
        onClick={() => setShow(!show)}
        className=" lg:text-[14px] md:text-[14px] text-[12px] text-red-400 cursor-pointer"
      >
        {show ? "Read Full..." : "See less"}
      </p>
    </div>
  );
};

export default About_block;
