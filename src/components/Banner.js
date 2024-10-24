import React from "react";

import Image from "../assets/web-development.svg";

import { FaWhatsapp, FaLinkedinIn,  FaFacebookF } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center "
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[35px] font-bold leading-[0.8] lg:text-[50px]"
            >
              BASSMA <span>MAHMOUD</span>
            </motion.h1>
            <motion.div variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="mb-6 text-[26px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={["Senior Media Buyer", 2000, "Performance Media Buyer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
               className="mb-8 max-w-lg mx-auto lg:mx-0">
 Results-oriented Senior Media Buyer with a proven track record of driving brand awareness, increasing sales, and optimizing media performance. Adept at developing and executing strategic media plans, negotiating favorable rates, and analyzing data to implement optimization strategies. Strong relationship-building skills with media vendors, resulting in exclusive opportunities and cost savings.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">
                <Link to="contact"  smooth={true}
>
                Contact me

                </Link>
                </button>
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:689f08e3-e71e-4574-8a94-c3f00775cc4f"
                target="_blank"
                rel="noreferrer"
                className="text-gradient btn-link"
              >
                My Resume
              </a>
            </motion.div>
            <motion.div variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://www.linkedin.com/in/basma-mahmoud-6a846225a" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="tel:+201156911551" target="_blank"   rel="noreferrer"
>
                <FaWhatsapp />
              </a>
              <a
                href="https://www.facebook.com/bosy.noty.98?mibextid=LQQJ4d"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
            </motion.div>
          </div>
          <motion.div variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
               className="hidden lg:flex max-w-[320px] lg:max-w-[482px] ">
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
