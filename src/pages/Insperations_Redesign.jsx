import React from "react";
import { useState } from "react";
import { inspirations } from "../images/index";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Insperations_Redesign = () => {
  const [index, setIndex] = useState(3);

  const check_index = (index) => {
    if (index > inspirations.length - 1) {
      return 0;
    } else if (index < 0) {
      return inspirations.length - 1;
    } else return index;
  };

  const go_next = () => {
    setIndex((index) => {
      let new_index = index + 1;
      return check_index(new_index);
    });
  };

  const go_back = () => {
    setIndex((index) => {
      let new_index = index - 1;
      return check_index(new_index);
    });
  };

  const { id, imgUrl, text } = inspirations[index];
  console.log(id, imgUrl, text);
  return (
    <div className="flex flex-col md:p-[60px] p-[20px] bg-[#323131] items-center">
      <div className="flex flex-col p-[20px] self-start">
        <p className=" md:text-[32px] text-[18px] font-semibold text-white uppercase">
          | Get the inspirations !
        </p>
        <p className="md:text-[20px] text-[16px] font-semibold text-white uppercase">
          | From us
        </p>
      </div>
      <div className="flex flex-row items-center w-full justify-between">
        <AiOutlineArrowLeft
          onClick={() => {
            go_back();
          }}
          color="white"
          size={35}
        />
        <div className="md:mt-[80px] mt-[50px] flex md:flex-row flex-col items-center justify-evenly w-full">
          <div className="md:w-[500px] w-[300px] md:h-[500px] h-[300px]">
            <img
              src={imgUrl}
              className="w-full h-full object-cover rounded-[30px] shadow-lg"
              alt=""
            />
          </div>
          <div className="md:w-[500px] w-[300px] p-[30px] ">
            <p className="md:text-[23px] text-[16px] font-normal text-white uppercase">
              | {text}
            </p>
          </div>
        </div>
        <AiOutlineArrowRight
          onClick={() => {
            go_next();
          }}
          color="white"
          size={35}
        />
      </div>
      <p className=" mt-[20px] md:text-[16px] text-[12px] font-thin self-start text-white">
        @La Cafarina
      </p>
    </div>
  );
};

export default Insperations_Redesign;
