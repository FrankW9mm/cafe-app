import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const Singlemenu = ({ imgUrl, Title, Price, desc, category }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-once="true"
      className="flex lg:flex-row flex-col lg:items-center md:items-start gap-[30px] shadow-md p-[40px] rounded-[20px] "
    >
      <motion.div whileHover={{ scale: 1.05 }} className="w-[200px] h-[200px] ">
        <img
          src={imgUrl}
          alt={Title}
          className=" w-full h-full object-contain rounded-[20px] "
        />
      </motion.div>
      <div className="flex flex-col lg:max-w-[600px] max-w-[500px]">
        <h1 className="text-[23px] font-bold text-[#2B2F33]">
          {Title} <span className=" font-light text-[18px]">({category})</span>
        </h1>
        <samp className="mt-[10px] text-[#2B2F33] text-[20px]">
          Price- ${Price}
        </samp>
        {show ? (
          <samp className="mt-[10px] text-[#2B2F33]">
            {desc}
            <span
              onClick={() => setShow(!show)}
              className=" text-red-400 cursor-pointer"
            >
              {" "}
              {"  "}show less...
            </span>
          </samp>
        ) : (
          <samp className="mt-[10px]">
            {desc.substring(0, 68)}
            <span
              onClick={() => setShow(!show)}
              className=" text-red-400 cursor-pointer"
            >
              {" "}
              {"  "}read more...
            </span>
          </samp>
        )}
      </div>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="w-[150px] h-[50px] bg-white rounded-[25px] border-black border-[1px] hover:bg-[#1F3933] hover:border-none hover:text-white"
      >
        Add to Cart
      </motion.button>
    </div>
  );
};

export default Singlemenu;
