import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 data-aos="zoom-out" className=" font-bold text-5xl sm:text-3xl">
          Let's Talk
        </h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href="mailto:hassanumar.lhe.pk@gmail.com?subject=Contact For Hiring"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <MdEmail className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Email</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1400"
            href="https://www.linkedin.com/in/hassan-umar-lhe-pk/"
            target="_blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiLinkedinFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>LinkedIn</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          | Copyright &copy; <span> {new Date().getFullYear()} </span> All
          rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
