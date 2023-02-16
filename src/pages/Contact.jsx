import React from "react";
import contactimg from "../images/contact.jpg";
const Contact = () => {
  return (
    <div className="mt-[60px] flex flex-col md:p-[60px] p-[20px] rounded-t-xl text-white text-[26px] font-bold bg-[#323131]">
      <h1>| CONTACT US</h1>
      <div className="flex md:flex-row items-center flex-col mt-[30px] w-full justify-evenly gap-4">
        <div className="md:w-[400px] w-[285px] md:h-[400px] h-[285px]">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={contactimg}
            alt=""
          />
        </div>
        <form action="" method="post">
          <div className="flex flex-col rounded-[20px] font-light justify-evenly bg-white lg:w-[500px] md:w-[400px] w-[25  0px] h-[400px] p-[30px]  ">
            <input
              className="bg-[#323131] w-[250px] md:w-[300px]  border-none rounded-[15px] text-white text-[16px] p-[10px]"
              type="text"
              placeholder="Your Name"
              name=""
              id=""
            />
            <input
              className="bg-[#323131] w-[250px] md:w-[300px]  border-none rounded-[15px] text-white text-[16px] p-[10px]"
              type="text"
              placeholder="Your Email"
              name=""
              id=""
            />
            <textarea
              className="bg-[#323131] w-[250px]  md:w-[300px] border-none rounded-[15px] text-[16px] p-[10px] resize-none"
              placeholder="Your Suggestions"
              name=""
              id=""
              cols="10"
              rows="5"
            ></textarea>
            <button className=" text-[20px] w-[130px] border-none rounded-[15px] bg-[#323131]">
              Sumbit
            </button>
            {/* <textarea rows="4" cols="50" name="comment" form="usrform">
              Enter text here...
            </textarea> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
