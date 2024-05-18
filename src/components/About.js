import React from "react";

// import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  const [zef, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={zef}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-center"
          ></motion.div>

          <motion.div  variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className="flex-1">
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
            I'm a Performance Media Buyer
            </h3>
            <p className="mb-6">
            I am a seasoned Performance Media Buyer and Growth Marketer with extensive experience spanning several years within the Digital Marketing industry. My expertise encompasses a comprehensive understanding of paid advertising strategies, which I adeptly apply to achieve business objectives and foster growth while maximizing Return on Ad Spend (ROAS) and Return on Investment (ROI). Throughout my career, I have cultivated a profound comprehension of online digital sales, enabling me to orchestrate successful campaigns across various platforms including: (Facebook – Instagram – TikTok – Snapchat – Google)

My proficiency extends across diverse industries such as: (E-commerce – Real Estate – Services – Medical – Educational – Food & Beverage)

across a range of countries including Egypt, Saudi Arabia, Emirates .
            </p>
            {/* <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}{" "}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}{" "}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div> */}
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">     <Link to="contact"  smooth={true}
>
                Contact me

                </Link></button>
              <a
                className="text-gradient btn-link"
                href="https://acrobat.adobe.com/id/urn:aaid:sc:eu:9d30f9ef-d9ac-4bd7-a67e-b4ef7a09cadf"
                // target="_blank"
              >
                My Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
