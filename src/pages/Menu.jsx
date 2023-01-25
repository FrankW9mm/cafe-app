import React from "react";
import menu_Tea from "../images/data";
import Singlemenu from "../components/Singlemenu";
import { motion } from "framer-motion";
import { useState } from "react";
import Filter from "../components/Filter";
import { BiSearchAlt2 } from "react-icons/bi";
import { useEffect } from "react";

const Menu = () => {
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
    <div className=" flex flex-col items-center" id="menu">
      <h1 className="mt-[30px] text-black uppercase font-bold text-[32px]">
        Menu
      </h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0, 0.7, 0.5, 1] }}
        className="lg:w-[400px] w-[200px] md:w-[300px] h-[3px] mt-[30px] bg-black"
      />
      <div className="flex flex-row h-[30px] mt-[20px] w-full justify-center items-center gap-[30px]">
        <input
          className=" border-[2px] border-[#2B2F33] rounded-lg p-[5px]"
          type="text"
          value={SearchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <BiSearchAlt2 size={30} onClick={SubmitHandle} />
      </div>
      <Filter data={categories} filter_fun={filter_item} />
      <div className="mt-[30px] flex flex-col gap-[30px]">
        {Items.length < 1 ? (
          <div className="flex flex-colum justify-center items-center  w-[250px] h-[250px]">
            <p className="text-[20px]">T-T Not Found...</p>
          </div>
        ) : (
          <div>
            {Items.map((data, index) => {
              return <Singlemenu {...data} key={index} />;
            })}
          </div>
        )}
        {/* {Items.map((data, index) => {
          return <Singlemenu {...data} key={index} />;
        })} */}
      </div>
    </div>
  );
};

export default Menu;
