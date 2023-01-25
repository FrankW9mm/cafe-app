import React from "react";
import images from "../images/index";
import { motion } from "framer-motion";

const navbar = () => {
  return (
    <div className="flex flex-col bg_overlay ">
      <div className=" flex flex-row justify-between px-[60px] py-[20px] items-center ">
        <div className="flex w-[100px] h-[100px]">
          <img
            src={images.img1}
            alt="logo"
            className=" w-full h-full object-contain"
          />
        </div>
        {/*  */}
        <div className="flex flex-row justify-end gap-8">
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className=" text-white cursor-pointer hover:border-b-2 transistion-all ease-out duration-[0.1s]"
          >
            Menu
          </motion.a>
          {/*  */}
          <motion.h3
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className=" text-white cursor-pointer hover:border-b-2 transistion-all ease-out duration-[0.1s]"
          >
            locations
          </motion.h3>
          {/*  */}
          <motion.h3
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className=" text-white cursor-pointer hover:border-b-2 transistion-all ease-out duration-[0.1s]"
          >
            Contact
          </motion.h3>
        </div>
        {/*  */}
      </div>
      <div className="flex justify-center items-center h-[50vh] w-full">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className=" flex justify-center flex-col items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <h1 className="text-white font-normal text-[60px] font-title">
              La Cafarina
            </h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.9, 0.7, 0.5, 1] }}
              className="lg:w-[500px] w-[200px] md:w-[450px] h-[2px] bg-white"
            />
            <h3 className="mt-[20px] text-white text-[20px] font-thin">
              Local Bistro
            </h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
