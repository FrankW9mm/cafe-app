import React from "react";
import menu_Tea from "../images/data";
import Singlemenu from "../components/Singlemenu";
import { motion } from "framer-motion";
import { useState } from "react";
import Filter from "../components/Filter";
import { BiSearchAlt2 } from "react-icons/bi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Menu = () => {
  console.log(menu_Tea);
  AOS.init();
  const [Items, SetItmes] = useState(menu_Tea);
  const [SearchItem, setSearchItem] = useState("");
  useEffect(() => {
    if (SearchItem) {
      const newSearch = menu_Tea.filter((menu) =>
        menu.Title.toLowerCase().includes(SearchItem.toLowerCase())
      );
      SetItmes(newSearch);
    } else {
      SetItmes(menu_Tea);
    }
  }, [SearchItem]);
  const SubmitHandle = (e) => {
    e.preventDefault();
    console.log(SearchItem);
    if (SearchItem) {
      const newSearch = menu_Tea.filter((menu) =>
        menu.Title.toLowerCase().includes(SearchItem.toLowerCase())
      );
      SetItmes(newSearch);
    } else {
      SetItmes(menu_Tea);
    }
  };
  const item_category = [
    "All",
    ...new Set(menu_Tea.map((data) => data.category)),
  ];
  // const allCategories = ["All", ...new Set(data.map((item) => item.category))];
  const [categories, setCategories] = useState(item_category);
  const filter_item = (item) => {
    if (item === "All") {
      SetItmes(menu_Tea);
      return;
    }
    let filtered = menu_Tea.filter((data) => data.category === item);
    SetItmes(filtered);
  };

  console.log(typeof categories);
  return (
    <div className=" flex flex-col items-center relative" id="menu">
      <h1
        data-aos="fade-up"
        className="mt-[30px] title_font text-[#2B2F33] uppercase font-[600] text-[50px]"
      >
        Our Menu
      </h1>
      {/* <div className=" absolute w-[200px] h-[50px] top-2 bg-[#1F3933] ">
        <h1>Hello</h1>
      </div> */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0, 0.7, 0.5, 1] }}
        className="lg:w-[400px] w-[200px] md:w-[300px] h-[3px] mt-[30px] bg-black"
      /> */}
      <div className=" border-[4px] border-[#2B2F33] flex flex-row h-[60px] mt-[20px] rounded-[20px] md:w-[400px] w-[250px] justify-between p-[10px] items-center gap-[30px]">
        <input
          className=" p-[5px] focus:outline-none md:w-full w-[100px]"
          type="text"
          placeholder="Search here"
          value={SearchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <BiSearchAlt2 opacity={0.5} size={30} onClick={SubmitHandle} />
      </div>
      <Filter data={categories} filter_fun={filter_item} />
      <div className="mt-[30px] flex flex-col gap-[30px]">
        {Items.length < 1 ? (
          <div className="flex flex-col justify-center items-center shadow-lg rounded-[20px] md:w-[500px] w-[300px] h-[250px]">
            <p className="text-[20px] text-[#2B2F33]">T-T</p>
            <p className="text-[20px] text-[#2B2F33]">
              Your Search was not found
            </p>
          </div>
        ) : (
          <>
            {Items.map((data, index) => {
              return <Singlemenu {...data} key={index} />;
            })}
          </>
        )}
        {/* {Items.map((data, index) => {
          return <Singlemenu {...data} key={index} />;
        })} */}
      </div>
    </div>
  );
};

export default Menu;
