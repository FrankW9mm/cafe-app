import React from "react";
import { motion } from "framer-motion";
import images from "../images/index";
import menu_Tea from "../images/data";

const Products = () => {
  console.log(menu_Tea);
  return (
    <div className="mt-[30px]">
      <div className="flex flex-row gap-[20px] p-[50px] w-[100%] justify-evenly bg-[#323131] flex-wrap">
        <div className="flex flex-col justify-center items-center p-[20px] md:w-[400px] w-[300px] md:h-[500px] h-[400px] bg-white rounded-[20px]">
          <div className="md:w-[300px] w-[200px] md:h-[300px] h-[200px]">
            <img
              src={images.Pimg1}
              alt=""
              className="w-[100%] h-[100%] object-cover rounded-[20px]"
            />
          </div>
          <div className="flex flex-col justify-center mt-[20px] bg-[#2B2F33] md:w-[300px] w-[250px] py-[20px] rounded-[20px]">
            <p className="text-center text-white text-[20px] text-bold">
              Freshly Brewed coffee
            </p>
            <p className="text-center text-white mt-[10px]">
              With High quality machines
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-[20px] md:w-[400px] w-[300px] md:h-[500px] h-[400px] bg-white  rounded-[20px]">
          <div className="md:w-[300px] w-[200px] md:h-[300px] h-[200px]">
            <img
              src={images.Pimg2}
              alt=""
              className="w-[100%] h-[100%] object-cover rounded-[20px]"
            />
          </div>
          <div className="flex flex-col justify-center mt-[20px] bg-[#2B2F33] md:w-[300px] w-[250px] py-[20px] rounded-[20px]">
            <p className="text-center text-white text-[20px] text-bold">
              Took tons of photos
            </p>
            <p className="text-center text-white mt-[10px]">
              {" "}
              with aesthetic inteior designs
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-[20px] md:w-[400px] w-[300px] md:h-[500px] h-[400px] bg-white rounded-[20px]">
          <div className="md:w-[300px] w-[200px] md:h-[300px] h-[200px] ">
            <img
              src={images.Pimg3}
              alt=""
              className="w-[100%] h-[100%] object-cover rounded-[20px]"
            />
          </div>
          <div className="flex flex-col justify-center mt-[20px] bg-[#2B2F33] md:w-[300px] w-[250px] py-[20px] rounded-[20px]">
            <p className="text-center text-white text-[20px] text-bold">
              High quality coffee Beans
            </p>
            <p className="text-center text-white mt-[10px]">
              directly imported from Italy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
