import React from 'react';

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'
import { FaDribbble, FaFacebookF, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return <section className='py-16 lg:section' id='contact'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        <motion.div variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className='flex-1 flex justify-center items-center flex-col'>
          <div >
            <h4 className=' uppercase text-accent font-medium mb-2 tracking-wide text-xl'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none  mb-12'>Let's work <br /> together!</h2>
          </div>
          <div className="container mx-auto">
      <div className='w-[300px] mb-4 lg:mb-0 bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-center items-center text-2xl text-white/50'>
      <motion.div variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 ">
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
    </div>
        </motion.div>
        {/* <motion.form variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your name' />
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your email' />
          <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your message'></textarea>
          <button className='btn btn-lg'>Send message</button>
        </motion.form> */}
      </div>
  
    </div>
  </section>;
};

export default Contact;
