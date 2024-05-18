import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import Img1 from "../assets/hotel-starter.png";
import Img2 from "../assets/real-estate.png";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/restaurant-starter.png";
import Img5 from "../assets/3D-card.png";
import Img6 from "../assets/youtube-clone.png";

const Work = () => {
  return (
    <section className="section mt-6" id="work">
      <div className="container mx-auto">
        <h2 className="h2 leading-tight text-accent">My Latest Work.</h2>
        <div className="flex flex-col lg:flex-col gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <a
                href="https://ecommerce-app88.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-full left-24 lg:left-28 mb-4 group-hover:bottom-16 transition-all duration-500 z-50 btn btn-lg leading-[3]"
              >
                Live Demo
              </a>
              <div className="absolute lg:-bottom-full left-20 lg:left-32 group-hover:bottom-8  transition-all duration-700 z-50 ">
                <span className="text-white text-3xl sm:text-xl">Ecommerce Shop</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <a
                href="https://real-estate77.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-full left-24 mb-4 group-hover:bottom-16 transition-all duration-500 z-50 btn btn-lg leading-[3]"
              >
                Live Demo
              </a>
              <div className="absolute lg:-bottom-full left-28 lg:left-32 group-hover:bottom-8  transition-all duration-700 z-50 ">
                <span className="text-white text-3xl sm:text-xl">Real Estate</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img6}
                alt=""
              />
              <a
                href="https://youtube-clone55.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-full left-24 mb-4 group-hover:bottom-16 transition-all duration-500 z-50 leading-[3] btn btn-lg"
              >
                Live Demo
              </a>
              <div className="absolute lg:-bottom-full left-24 lg:left-32 group-hover:bottom-8  transition-all duration-700 z-50 ">
                <span className="text-white text-3xl sm:text-xl">Youtube Clone</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img4}
                alt=""
              />
              <a
                href="https://restaurant-website55.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-full left-24 lg:left-28 mb-4 group-hover:bottom-16 transition-all duration-500 z-50 leading-[3] btn btn-lg"
              >
                Live Demo
              </a>
              <div className="absolute lg:-bottom-full left-20 lg:left-32 group-hover:bottom-8  transition-all duration-700 z-50 ">
                <span className="text-white text-3xl sm:text-xl">Restaurant Website</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img5}
                alt=""
              />
              <a
                href="https://animated-3d-card.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-full left-24 lg:left-28 mb-4 group-hover:bottom-16 transition-all duration-500 z-50 leading-[3] btn btn-lg"
              >
                Live Demo
              </a>
              <div className="absolute lg:-bottom-full left-20 lg:left-32  group-hover:bottom-8 transition-all duration-700 z-50 ">
                <span className="text-white text-3xl sm:text-xl"  >3D Animated Card </span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <a
                href="https://hotel-website55.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-full  left-24 mb-4 group-hover:bottom-16 transition-all duration-500 z-50 leading-[3] btn btn-lg "
              >
                Live Demo
              </a>
              <div className="absolute -bottom-full  left-28 lg:left-32 group-hover:bottom-8 transition-all duration-700 z-50">
                <span className="text-white text-3xl sm:text-xl">Hotel Starter</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-10"></div>
      </div>
    </section>
  );
};

export default Work;
