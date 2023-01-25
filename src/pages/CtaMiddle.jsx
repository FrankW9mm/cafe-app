import React from "react";
import { motion } from "framer-motion";

const CtaMiddle = () => {
  return (
    <div className=" lg:py-[50px] py-[20px] lg:px-[50px] px-[30px]">
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [1, 0.3, 0.5, 1] }}
        className="flex md:flex-row flex-col justify-between items-center bg-[#2B2F33] p-[30px] md:rounded-full rounded-md gap-6"
      >
        <h1 className="text-white text-center">
          USE YOUR COUPNS FOR DISCOUNTS AND ADDITION BENIFITS
        </h1>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="w-[150px] h-[50px] bg-white rounded-[25px]"
        >
          Redeem Coupon
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CtaMiddle;
