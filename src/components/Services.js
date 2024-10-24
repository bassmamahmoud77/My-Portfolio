import React from "react";

import { Link } from "react-scroll";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ProgressBar from "@ramonak/react-progress-bar";

const services = [
  {
    skill: "Meta Ads",
    progress: "100%",
  },
  {
    skill: "Google Ads",
    progress: "95%",
  },
  {
    skill: "TikTok Ads",
    progress: "95%",
  },
  {
    skill: "Snapchat Ads",
    progress: "90%",
  },
  {
    skill: "LinkedIn Ads",
    progress: "80%",
  },
  {
    skill: "Google analytics",
    progress: "75%",
  },
  {
    skill: "TypesFacebook testing, scaling and retargeting ",
    progress: "80%",
  },
  {
    skill: "Facebook tracking and analytics tools",
    progress: "90%",
  },
  {
    skill: "Ads Copywriting ",
    progress: "90%",
  },
  {
    skill: "Landing page creation",
    progress: "85%",
  },
];


const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-6">What are my skills</h2>
            <h3 className="h3 max-w-[455px] mb-16">
            I'm a Senior Media Buyer </h3>
            <Link
              to="campaigns"
              smooth={true}
              className="btn btn-sm p-4 cursor-pointer"
            >
              See my work
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 ">
              {services.map((service, index) => {
                const { skill, progress } = service;
                return (
                  <div
                    className="border-b border-white/20  mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {skill}
                      </h4>
                      <div className="w-[220px] mb-4">
                        <ProgressBar
                          bgColor="linear-gradient(
                                      92.23deg,
                                      #406aff 21.43%,
                                      #3bace2 50.63%,
                                      #b936ee 100%,
                                      #ff56f6 117.04%
                                    )"
                          completed={progress}
                          width="100%"
                          animateOnRender={true}
                          initCompletedOnAnimation={progress}
                       
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
