import React from "react";
import { useState } from "react";
import { location_data } from "../images/data";
import TextAndLine from "../components/TextAndLine";
import { motion } from "framer-motion";
const Location = () => {
  const [location, setLocations] = useState(location_data);
  const [index, setIndex] = useState(0);

  const { title, imgUrl, id, address } = location[index];
  return (
    <div className="flex flex-col p-[60px] bg-[#2B2F33]">
      <div className="p-[20px]">
        <h1 className="font-bold text-white uppercase text-[26px]">
          Our Locations
        </h1>
      </div>

      <div className="flex lg:flex-row flex-col-reverse items-center justify-evenly ">
        <div className=" flex flex-col h-[500px] justify-evenly items-start ">
          {location.map((data, index) => {
            return (
              <div className=" flex flex-row items-center gap-[20px] cursor-pointer">
                <motion.h1
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="text-white text-[26px]"
                  onClick={() => setIndex(index)}
                >
                  {data.title}
                </motion.h1>
                <div className="w-[200px] h-[1px] bg-white" />
                <div className="border-[1px] rounded-full p-[10px]">
                  <p className=" text-white ">{index + 1}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className=" w-[500px] h-[500px] relative group">
          <img
            src={imgUrl}
            className="w-full h-full object-cover rounded-[20px]"
            alt=""
          />
          <div className="absolute flex flex-col justify-center items-center w-[100%] rounded-b-[20px] h-[50%] bg-opacity-80 opacity-0 bottom-0 left-0 bg-black group-hover:opacity-100 transition-[all] duration-700">
            <p className="text-white">{address}</p>
          </div>
        </div>
      </div>

      {/* <div class="relative group flex justify-center w-1/2 h-0 bg-center bg-cover border-2 border-gray-300 shadow-lg pb-1-2 rounded-xl bg-image">
        <div class="absolute p-6 text-2xl tracking-widest text-white uppercase -translate-y-1/2 bg-black bg-opacity-75 opacity-0 top-1/2 rounded-xl group-hover:opacity-100">
          Tadaa 🎉
        </div>
      </div> */}
    </div>
  );
};

export default Location;