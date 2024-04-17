import React from "react";
import { projects } from "../data";

const Works = () => {
  return (
    <div className='w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20'>
      <h4 className='text-3xl font-bold text-neutral dark:text-blue-500 mt-10 '>
        Projetcs
      </h4>

      <div className=' flex flex-wrap gap-20 lg:gap-30 justify-center '>
        {projects.map((p, index) => (
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            key={index}
            className='w-[350px] h-[150px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 rounded-md mb-8'
          >
            <img
              src={p.img}
              alt={p.name}
              className='w-full h-full object-cover rounded-md'
              style={{ objectFit: 'contain' }}
            />

            <div className='w-full h-100px bg-white dark:bg-[#04133e]'>
              <h4 className='text-2xl text-black dark:text-white font-semibold py-2 px-1 '>
                <a href = {p.url}>{p.title}</a>
              </h4>
              <p className='text-sm text-orange-600 px-1 uppercase'>{p.cat}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
