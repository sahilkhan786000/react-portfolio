import React from "react";
import { Profile } from "../assets";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdWifiCalling2 } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";


const About = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919997458123", "_blank");
  };
  return (
    <div className='w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20 '>
      <div className='w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md'>
        <img
          src={Profile}
          className='h-[290px] p-1 rounded-md ease-in-out duration-300 hover:scale-125'
        />
      </div>

      <div className='w-full flex flex-col'>
        <p className='text-3xl font-bold text-neutral dark:text-blue-500  '>
          About Me
        </p>
        <p className='text-lg text-neutral dark:text-white leading-10'>
          Full-Stack Web Developer with ability to learn and collaborate in
          rapidly changing environments and compositions. Worked through hours
          of bootcamp structure, learning JavaScript, NodeJs, ReactJs, NextJs
          and TypeScript. Eager to tackle web development/design challenges to
          achieve lasting impacts on user experience.
        </p>

        <div
          className='mt-5 2xl:mt-10 flex flex-wrap gap-5'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 hover:scale-110 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#55079e] to-[#7f0c29] text-white cursor-pointer'>
            <FaUserAlt size={14} /> CodeAZAL
          </p>
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 hover:scale-110 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#55079e] to-[#7f0c29] text-white cursor-pointer'>
          <MdOutlineAlternateEmail size={14} />
           <a href="mailto:salmanengis6397@gmail.com">
             sskhanmath786@gmail.com
            </a>
          </p>
          <a
            href='https://wa.me/+91 9997 45 8123'
            
            className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4  hover:scale-110 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#55079e] to-[#7f0c29] text-white cursor-pointer'
            onClick={handleWhatsAppClick}
          >
            <BsWhatsapp size={14} /> +91 9997 458 123
          </a>
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 hover:scale-110 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#55079e] to-[#7f0c29] text-white cursor-pointer'>
            <MdWifiCalling2 size={14} /> +154 3656 899
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
