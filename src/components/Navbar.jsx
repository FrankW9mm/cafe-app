import React, { useState } from "react";
import images from "../images/index";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col bg_overlay">
      <div className=" flex flex-row justify-between md:px-[60px] px-[20px] py-[20px] items-center">
        {/* <div className="flex w-[100px] h-[100px] items-center">
          <img
            src={images.img1}
            alt="logo"
            className=" w-full h-full object-contain"
          />
         
        </div> */}
        <div className="flex items-center">
          <h1 className="text-white font-normal text-[38px] font-title">
            La Cafarina
          </h1>
        </div>

        {/*  */}
        <div className="app__nav flex flex-row justify-end gap-8">
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className=" text-white cursor-pointer hover:border-b-2 transistion-all ease-out duration-[0.1s]"
          >
            Menu
          </motion.a>
          {/*  */}
          <motion.a
            href="#location"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className=" text-white cursor-pointer hover:border-b-2 transistion-all ease-out duration-[0.1s]"
          >
            locations
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className=" text-white cursor-pointer hover:border-b-2 transistion-all ease-out duration-[0.1s]"
          >
            About us
          </motion.a>
          {/*  */}
          <motion.h3
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className=" text-white cursor-pointer hover:border-b-2 transistion-all ease-out duration-[0.1s]"
          >
            Contact
          </motion.h3>
        </div>
        <div className="mb__icon">
          <AiOutlineMenu
            onClick={() => setShow(!show)}
            color="white"
            size={50}
          />
        </div>
        {/* Mobile Nav */}
        {show && (
          <div className="mb__nav absolute right-0 top-[0] p-3 bg-[#2B2F33] flex flex-col justify-evenly w-[200px] items-center h-[250px] ">
            <AiOutlineClose
              onClick={() => setShow(!show)}
              color="white"
              size={25}
            />
            <a
              className="text-white w-full text-center hover:bg-[#60676d]"
              href="#menu"
            >
              Menu
            </a>
            <a
              className="text-white w-full text-center hover:bg-[#60676d]"
              href="#location"
            >
              locations
            </a>
            <a
              className="text-white w-full text-center hover:bg-[#60676d]"
              href="#about"
            >
              About us
            </a>
            <a
              className="text-white w-full text-center hover:bg-[#60676d]"
              href=""
            >
              Contact
            </a>
          </div>
        )}
        {/* <div className="mb__nav absolute right-0 top-[0] p-3 bg-[#2B2F33] flex flex-col justify-evenly w-[200px] items-center h-[250px] ">
          <AiOutlineClose
            onClick={() => setShow(!show)}
            color="white"
            size={25}
          />
          <a className="text-white" href="">
            Menu
          </a>
          <a className="text-white" href="">
            locations
          </a>
          <a className="text-white" href="">
            About us
          </a>
          <a className="text-white" href="">
            Contact
          </a>
        </div> */}
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

export default Navbar;
