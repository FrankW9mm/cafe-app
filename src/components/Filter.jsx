import React from "react";
import { motion } from "framer-motion";

const Filter = ({ data, filter_fun }) => {
  console.log(filter_fun);
  return (
    <div className="flex flex-row md:w-[50%] w-full gap-[30px] flex-wrap md:justify-evenly justify-center items-center mt-[40px]">
      {data.map((data, index) => {
        return (
          <motion.div
            whileTap={{ scale: 1.5 }}
            whileHover={{ scale: 0.9 }}
            onClick={() => {
              filter_fun(data);
              console.log(data);
            }}
            className="md:min-w-[100px] min-w-[70px] bg-[#2B2F33] p-[30px] h-[40px] flex justify-center items-center rounded-[10px] cursor-pointer hover:bg-[#1F3933] hover:shadow-2xl transistion-[all] duration-500"
          >
            <h1 className=" text-white">{data}</h1>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Filter;
