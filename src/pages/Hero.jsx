import React from "react";
import { motion } from "framer-motion";
import images from "../images/index";

const Hero = () => {
  return (
    <div className=" flex lg:flex-row flex-col-reverse md:px-[100px] px-[40px] md:py-[50px] py-[40px] justify-around items-center w-full halfcolor gap-5">
      <div className="flex flex-col justify-between md:gap-[50px] gap-[20px]  max-w-[400px]">
        <div className="flex flex-col justify-center items-start  pt-[30px]">
          <h1 className="text-white uppercase font-bold text-[30px]">
            Start your day
          </h1>
          <h2 className="text-white uppercase font-bold text-[23px]">
            with your coffee of choice
          </h2>
          <h3 className="text-white uppercase font-bold text-[20px]">
            At our bistro
          </h3>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex">
            <p className="text-white">
              Boost your productivity and build your mood with a glass off
              coffee in the morning
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0, 0.7, 0.5, 1] }}
            className="lg:w-[400px] w-[200px] md:w-[300px] h-[1px] bg-white"
          />
          <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="w-[150px] h-[50px] bg-white rounded-[25px]"
            >
              Get your own
            </motion.button>
            <motion.p
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="text-white cursor-pointer"
            >
              reservation
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div className="flex justify-center items-center md:w-[500px] w-[300px] md:h-[500px] h-[300px]">
        <img
          src={images.img2}
          className="rounded-[20px] w-full h-full object-contain"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Hero;
