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
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
             
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
//     <section class="elementor-section elementor-top-section elementor-element elementor-element-cb977a1 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="cb977a1" data-element_type="section" id="campaigns" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}" style="width: 849px; left: 0px;">
// <div class="elementor-container elementor-column-gap-default">
// <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5ef3b33" data-id="5ef3b33" data-element_type="column">
// <div class="elementor-widget-wrap elementor-element-populated">
// <div class="elementor-element elementor-element-8189764 elementor-widget elementor-widget-heading" data-id="8189764" data-element_type="widget" data-widget_type="heading.default">
// <div class="elementor-widget-container">
// <h2 class="elementor-heading-title elementor-size-default">Campaigns Results</h2> </div>
// </div>
// <div class="elementor-element elementor-element-9cb2555 elementor-hidden-mobile elementor-widget elementor-widget-spacer" data-id="9cb2555" data-element_type="widget" data-widget_type="spacer.default">
// <div class="elementor-widget-container">
// <div class="elementor-spacer">
// <div class="elementor-spacer-inner"></div>
// </div>
// </div>
// </div>
// <section class="elementor-section elementor-inner-section elementor-element elementor-element-8dcf30c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8dcf30c" data-element_type="section">
// <div class="elementor-container elementor-column-gap-default">
// <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-93f4420" data-id="93f4420" data-element_type="column">
// <div class="elementor-widget-wrap elementor-element-populated">
// <div class="elementor-element elementor-element-e97a4f0 elementor-widget elementor-widget-image animated fadeInUp" data-id="e97a4f0" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="image.default">
// <div class="elementor-widget-container">
// <a href="https://loayabdallah.com/wp-content/uploads/2024/03/حملات-06.jpg" data-elementor-open-lightbox="yes" data-elementor-lightbox-title="Real Estate - Dubai" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NjQxNiwidXJsIjoiaHR0cHM6XC9cL2xvYXlhYmRhbGxhaC5jb21cL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMjRcLzAzXC9cdTA2MmRcdTA2NDVcdTA2NDRcdTA2MjdcdTA2MmEtMDYuanBnIn0%3D">
// <img decoding="async" width="1024" height="731" src="https://loayabdallah.com/wp-content/uploads/2024/03/حملات-06-1024x731.jpg" class="attachment-large size-large wp-image-6416" alt="" srcset="https://loayabdallah.com/wp-content/uploads/2024/03/حملات-06-1024x731.jpg 1024w, https://loayabdallah.com/wp-content/uploads/2024/03/حملات-06-300x214.jpg 300w, https://loayabdallah.com/wp-content/uploads/2024/03/حملات-06-768x549.jpg 768w, https://loayabdallah.com/wp-content/uploads/2024/03/حملات-06-1536x1097.jpg 1536w, https://loayabdallah.com/wp-content/uploads/2024/03/حملات-06-2048x1463.jpg 2048w" sizes="(max-width: 1024px) 100vw, 1024px"> </a>
// </div>
// </div>
// </div>
// </div>
// <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ab2179e" data-id="ab2179e" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
// <div class="elementor-widget-wrap elementor-element-populated">
// <div class="elementor-element elementor-element-958d51e elementor-widget elementor-widget-text-editor animated fadeInUp" data-id="958d51e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="text-editor.default">
// <div class="elementor-widget-container">
// <p><b>Get +400 Qualified Leads in less than 5 days.</b></p> </div>
// </div>
// </div>
// </div>
// </div>
// </section>
// <section class="elementor-section elementor-inner-section elementor-element elementor-element-cd39a78 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="cd39a78" data-element_type="section">
// <div class="elementor-container elementor-column-gap-default">
// <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ac47b24" data-id="ac47b24" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
// <div class="elementor-widget-wrap elementor-element-populated">
// <div class="elementor-element elementor-element-8d955c7 elementor-widget elementor-widget-text-editor animated fadeInUp" data-id="8d955c7" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="text-editor.default">
// <div class="elementor-widget-container">
// <ul><li><span style="font-weight: 400;"><strong>Marketing Objectives:</strong> Conversion Campaign </span></li><li><strong style="font-size: 16px;">Industry:</strong><span style="font-size: 16px; font-weight: 400;"> E-commerce</span></li><li><strong style="font-size: 16px;">Platform:</strong><span style="font-size: 16px; font-weight: 400;"> TikTok</span></li><li><strong>Country</strong>: Saudi Arabia&nbsp;</li><li><strong style="font-size: 16px;">Total Purchases</strong><span style="font-size: 16px; font-weight: 400;">&nbsp;= <strong>42,295 Orders</strong></span></li><li><strong style="font-size: 16px;">CPP (Cost Per Purchase)</strong><span style="font-size: 16px; font-weight: 400;"> = 7.37 $</span></li><li><strong>Sales: 12,688,500 SAR</strong></li><li><strong style="font-size: 16px;">A.O.V</strong><span style="font-size: 16px; font-weight: 400;"> = 300 SAR</span></li><li><strong style="font-size: 16px;">ROAS</strong><span style="font-size: 16px; font-weight: 400;"> = <strong>10.8</strong></span></li><li><strong style="font-size: 16px;">Total Spend</strong><span style="font-size: 16px; font-weight: 400;"> = <strong>311,623 $</strong></span></li></ul> </div>
// </div>
// </div>
// </div>
// <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-9577516" data-id="9577516" data-element_type="column">
// <div class="elementor-widget-wrap elementor-element-populated">
// <div class="elementor-element elementor-element-1af8508 elementor-widget elementor-widget-image animated fadeInUp" data-id="1af8508" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="image.default">
// <div class="elementor-widget-container">
// <a href="https://loayabdallah.com/wp-content/uploads/2023/02/E-commerce-GCC-2.jpg" data-elementor-open-lightbox="yes" data-elementor-lightbox-title="E-commerce GCC 2" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NTgyOSwidXJsIjoiaHR0cHM6XC9cL2xvYXlhYmRhbGxhaC5jb21cL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMjNcLzAyXC9FLWNvbW1lcmNlLUdDQy0yLmpwZyJ9">
// <img decoding="async" width="1024" height="436" src="https://loayabdallah.com/wp-content/uploads/2023/02/E-commerce-GCC-2-1024x436.jpg" class="attachment-large size-large wp-image-5829" alt="" srcset="https://loayabdallah.com/wp-content/uploads/2023/02/E-commerce-GCC-2-1024x436.jpg 1024w, https://loayabdallah.com/wp-content/uploads/2023/02/E-commerce-GCC-2-300x128.jpg 300w, https://loayabdallah.com/wp-content/uploads/2023/02/E-commerce-GCC-2-768x327.jpg 768w, https://loayabdallah.com/wp-content/uploads/2023/02/E-commerce-GCC-2.jpg 1070w" sizes="(max-width: 1024px) 100vw, 1024px"> </a>
// </div>
// </div>
// </div>
// </div>
// </div>
// </section>
// <section class="elementor-section elementor-inner-section elementor-element elementor-element-2bcf9e4 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2bcf9e4" data-element_type="section">
// <div class="elementor-container elementor-column-gap-default">
// <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e8f3085" data-id="e8f3085" data-element_type="column">
// <div class="elementor-widget-wrap elementor-element-populated">
// <div class="elementor-element elementor-element-c9218a3 elementor-widget elementor-widget-image animated fadeInUp" data-id="c9218a3" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="image.default">
// <div class="elementor-widget-container">
// <a href="https://loayabdallah.com/wp-content/uploads/2023/02/E-COMMERCE-GCC.jpg" data-elementor-open-lightbox="yes" data-elementor-lightbox-title="E-COMMERCE GCC" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NTgzMywidXJsIjoiaHR0cHM6XC9cL2xvYXlhYmRhbGxhaC5jb21cL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMjNcLzAyXC9FLUNPTU1FUkNFLUdDQy5qcGcifQ%3D%3D">
// <img loading="lazy" decoding="async" width="1024" height="397" src="https://loayabdallah.com/wp-content/uploads/2023/02/E-COMMERCE-GCC-1024x397.jpg" class="attachment-large size-large wp-image-5833" alt="" srcset="https://loayabdallah.com/wp-content/uploads/2023/02/E-COMMERCE-GCC-1024x397.jpg 1024w, https://loayabdallah.com/wp-content/uploads/2023/02/E-COMMERCE-GCC-300x116.jpg 300w, https://loayabdallah.com/wp-content/uploads/2023/02/E-COMMERCE-GCC-768x298.jpg 768w, https://loayabdallah.com/wp-content/uploads/2023/02/E-COMMERCE-GCC.jpg 1072w" sizes="(max-width: 1024px) 100vw, 1024px"> </a>
// </div>
// </div>
// </div>
// </div>
// <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-fae53b7" data-id="fae53b7" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
// <div class="elementor-widget-wrap elementor-element-populated">
// <div class="elementor-element elementor-element-3cb273d elementor-widget elementor-widget-text-editor animated fadeInUp" data-id="3cb273d" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="text-editor.default">
// <div class="elementor-widget-container">
// <ul><li><b>Marketing Objectives: </b>Converstion Campaign</li><li><b>Industry: </b>E-commerce</li><li><b>Platform: </b>TikTok</li><li><strong>Country:&nbsp;</strong>United Arab Emirates&nbsp;</li><li><b>Total Purchases&nbsp; </b>= <strong>11,333 <span style="font-size: 16px;">Orders</span></strong></li><li><b>CPP (Cost Per Purchase) </b>= 5.30 $<b></b></li><li><strong>Sales: 3,173,240 AED</strong></li><li><b>A.O.V = </b>280 AED</li><li><b>ROAS = </b><strong>14.37</strong></li><li><b>Total Spend = </b><strong>60,113 $</strong></li></ul> </div>
// </div>
// </div>
// </div>
// </div>
// </section>
// <section class="elementor-section elementor-inner-section elementor-element elementor-element-c995c27 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c995c27" data-element_type="section">
// <div class="elementor-container elementor-column-gap-default">
// <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ac5971b" data-id="ac5971b" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
// <div class="elementor-widget-wrap elementor-element-populated">
// <div class="elementor-element elementor-element-bec68f8 elementor-widget elementor-widget-text-editor animated fadeInUp" data-id="bec68f8" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="text-editor.default">
// <div class="elementor-widget-container">
// <ul><li><b>Marketing Objectives: </b>Converstion Campaign</li><li><b>Industry: </b>E-commerce</li><li><b>Platform: </b>TikTok</li><li><strong>Country:</strong> Kuwait</li><li><b>Total Purchases&nbsp; </b>=<strong> 2,112 <span style="font-size: 16px;">Orders</span></strong></li><li><b>CPP (Cost Per Purchase) </b>= 4.54 <b>$</b></li><li><strong>Sales: 67,584 KWD</strong></li><li><b>A.O.V </b>= 32 KWD</li><li><b>ROAS </b>= <strong>23</strong></li><li><b>Total Spend </b>= <strong>9,583 $</strong></li></ul> </div>
// </div>
// </div>
// </div>
// <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a12de84" data-id="a12de84" data-element_type="column">
// <div class="elementor-widget-wrap elementor-element-populated">
// <div class="elementor-element elementor-element-d06b2f7 elementor-widget elementor-widget-image animated fadeInUp" data-id="d06b2f7" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="image.default">
// <div class="elementor-widget-container">
// <a href="https://loayabdallah.com/wp-content/uploads/2023/02/GCC-Campaign.jpg" data-elementor-open-lightbox="yes" data-elementor-lightbox-title="GCC Campaign" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NTg3NiwidXJsIjoiaHR0cHM6XC9cL2xvYXlhYmRhbGxhaC5jb21cL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMjNcLzAyXC9HQ0MtQ2FtcGFpZ24uanBnIn0%3D">
// <img loading="lazy" decoding="async" width="1024" height="382" src="https://loayabdallah.com/wp-content/uploads/2023/02/GCC-Campaign-1024x382.jpg" class="attachment-large size-large wp-image-5876" alt="" srcset="https://loayabdallah.com/wp-content/uploads/2023/02/GCC-Campaign-1024x382.jpg 1024w, https://loayabdallah.com/wp-content/uploads/2023/02/GCC-Campaign-300x112.jpg 300w, https://loayabdallah.com/wp-content/uploads/2023/02/GCC-Campaign-768x287.jpg 768w, https://loayabdallah.com/wp-content/uploads/2023/02/GCC-Campaign.jpg 1280w" sizes="(max-width: 1024px) 100vw, 1024px"> </a>
// </div>
// </div>
// </div>
// </div>
// </div>
// </section>
// <section class="elementor-section elementor-inner-section elementor-element elementor-element-cdff53c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="cdff53c" data-element_type="section">
// <div class="elementor-container elementor-column-gap-default">
// <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-153b349" data-id="153b349" data-element_type="column">
// <div class="elementor-widget-wrap elementor-element-populated">
// <div class="elementor-element elementor-element-384a61e elementor-widget elementor-widget-image animated fadeInUp" data-id="384a61e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="image.default">
// <div class="elementor-widget-container">
// <a href="https://loayabdallah.com/wp-content/uploads/2023/02/Messages-Campaign-Results-FA.jpg" data-elementor-open-lightbox="yes" data-elementor-lightbox-title="Messages Campaign Results - FA" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NTg5OSwidXJsIjoiaHR0cHM6XC9cL2xvYXlhYmRhbGxhaC5jb21cL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMjNcLzAyXC9NZXNzYWdlcy1DYW1wYWlnbi1SZXN1bHRzLUZBLmpwZyJ9">
// <img loading="lazy" decoding="async" width="1024" height="369" src="https://loayabdallah.com/wp-content/uploads/2023/02/Messages-Campaign-Results-FA-1024x369.jpg" class="attachment-large size-large wp-image-5899" alt="" srcset="https://loayabdallah.com/wp-content/uploads/2023/02/Messages-Campaign-Results-FA-1024x369.jpg 1024w, https://loayabdallah.com/wp-content/uploads/2023/02/Messages-Campaign-Results-FA-300x108.jpg 300w, https://loayabdallah.com/wp-content/uploads/2023/02/Messages-Campaign-Results-FA-768x276.jpg 768w, https://loayabdallah.com/wp-content/uploads/2023/02/Messages-Campaign-Results-FA-1536x553.jpg 1536w, https://loayabdallah.com/wp-content/uploads/2023/02/Messages-Campaign-Results-FA.jpg 1600w" sizes="(max-width: 1024px) 100vw, 1024px"> </a>
// </div>
// </div>
// </div>
// </div>
// <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bb7fd12" data-id="bb7fd12" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
// <div class="elementor-widget-wrap elementor-element-populated">
// <div class="elementor-element elementor-element-ef755cd elementor-widget elementor-widget-text-editor animated fadeInUp" data-id="ef755cd" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="text-editor.default">
// <div class="elementor-widget-container">
// <ul><li><b><b>Marketing Objectives: </b></b>Messages Campaign</li><li><b>Industry: </b>E-commerce</li><li><b>Platform: </b>Facebook&nbsp;</li><li><b>Total Purchases (Orders) </b>= <strong>1627</strong></li><li><b>CPP (Cost Per Purchase) </b>= 36 L.E</li><li><b>Sales </b>= <strong>984,696 L.E</strong></li><li><b>A.O.V </b>= 605 L.E</li><li><b>ROAS </b>= <strong>16.74</strong></li><li><b>Total Spend</b> = <strong>58,826 L.E</strong></li></ul> </div>
// </div>
// </div>
// </div>
// </div>
// </section>
// <section class="elementor-section elementor-inner-section elementor-element elementor-element-db63aa3 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="db63aa3" data-element_type="section">
// <div class="elementor-container elementor-column-gap-default">
// <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-08aa328" data-id="08aa328" data-element_type="column">
// <div class="elementor-widget-wrap elementor-element-populated">
// <div class="elementor-element elementor-element-33a279e elementor-widget elementor-widget-image animated fadeInUp" data-id="33a279e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="image.default">
// <div class="elementor-widget-container">
// <a href="https://loayabdallah.com/wp-content/uploads/2023/02/Campaign-Messages.jpg" data-elementor-open-lightbox="yes" data-elementor-lightbox-title="Campaign Messages" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NTg1NiwidXJsIjoiaHR0cHM6XC9cL2xvYXlhYmRhbGxhaC5jb21cL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMjNcLzAyXC9DYW1wYWlnbi1NZXNzYWdlcy5qcGcifQ%3D%3D">
// <img loading="lazy" decoding="async" width="1024" height="288" src="https://loayabdallah.com/wp-content/uploads/2023/02/Campaign-Messages-1024x288.jpg" class="attachment-large size-large wp-image-5856" alt="" srcset="https://loayabdallah.com/wp-content/uploads/2023/02/Campaign-Messages-1024x288.jpg 1024w, https://loayabdallah.com/wp-content/uploads/2023/02/Campaign-Messages-300x84.jpg 300w, https://loayabdallah.com/wp-content/uploads/2023/02/Campaign-Messages-768x216.jpg 768w, https://loayabdallah.com/wp-content/uploads/2023/02/Campaign-Messages.jpg 1280w" sizes="(max-width: 1024px) 100vw, 1024px"> </a>
// </div>
// </div>
// </div>
// </div>
// <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-38cd720" data-id="38cd720" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
// <div class="elementor-widget-wrap elementor-element-populated">
// <div class="elementor-element elementor-element-08a56a0 elementor-widget elementor-widget-text-editor animated fadeInUp" data-id="08a56a0" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="text-editor.default">
// <div class="elementor-widget-container">
// <ul><li><b>Marketing Objectives: </b>Messages Campaign</li><li><b>Industry: </b>E-commerce</li><li><b>Platform: </b>Facebook &amp; Instagram</li><li><b>Total Purchases&nbsp; </b>= <strong>3390 <span style="font-size: 16px;">Orders</span></strong></li><li><b>CPP (Cost Per Purchase) </b>= 14.3 L.E</li><li><strong>Sales:</strong> <strong>1,237,350 L.E</strong></li><li><b>A.O.V </b>= 365 L.E</li><li><b>ROAS </b>= <strong>25.4</strong></li><li><b>Total Spend</b> = <strong>48,560 L.E</strong></li></ul> </div>
// </div>
// </div>
// </div>
// </div>
// </section>
// <section class="elementor-section elementor-inner-section elementor-element elementor-element-10c812e elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="10c812e" data-element_type="section">
// <div class="elementor-container elementor-column-gap-default">
// <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-311e381" data-id="311e381" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
// <div class="elementor-widget-wrap elementor-element-populated">
// <div class="elementor-element elementor-element-96a1456 elementor-widget elementor-widget-text-editor animated fadeInUp" data-id="96a1456" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="text-editor.default">
// <div class="elementor-widget-container">
// <ul><li><b>Marketing Objectives: </b>Lead Generation Campaign</li><li><b>Industry: </b>Real Estate</li><li><strong>Country:</strong> United Arab Emirates</li><li><b>Platform: </b>Facebook &amp; Instagram</li><li><b>Total Leads </b>= 350 Leads</li><li><b>CPL (Cost Per Lead) </b>= 90 AED</li><li><b>Total Ad Spend </b>= <strong>31,635 AED</strong></li></ul> </div>
// </div>
// </div>
// </div>
// <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-cefa1ad" data-id="cefa1ad" data-element_type="column">
// <div class="elementor-widget-wrap elementor-element-populated">
// <div class="elementor-element elementor-element-fb45134 elementor-widget elementor-widget-image animated fadeInUp" data-id="fb45134" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="image.default">
// <div class="elementor-widget-container">
// <a href="https://loayabdallah.com/wp-content/uploads/2024/03/حملات-07.jpg" data-elementor-open-lightbox="yes" data-elementor-lightbox-title="Real Estate - Dubai" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6NjQxNCwidXJsIjoiaHR0cHM6XC9cL2xvYXlhYmRhbGxhaC5jb21cL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMjRcLzAzXC9cdTA2MmRcdTA2NDVcdTA2NDRcdTA2MjdcdTA2MmEtMDcuanBnIn0%3D">
// <img loading="lazy" decoding="async" width="1024" height="731" src="https://loayabdallah.com/wp-content/uploads/2024/03/حملات-07-1024x731.jpg" class="attachment-large size-large wp-image-6414" alt="" srcset="https://loayabdallah.com/wp-content/uploads/2024/03/حملات-07-1024x731.jpg 1024w, https://loayabdallah.com/wp-content/uploads/2024/03/حملات-07-300x214.jpg 300w, https://loayabdallah.com/wp-content/uploads/2024/03/حملات-07-768x549.jpg 768w, https://loayabdallah.com/wp-content/uploads/2024/03/حملات-07-1536x1097.jpg 1536w, https://loayabdallah.com/wp-content/uploads/2024/03/حملات-07-2048x1463.jpg 2048w" sizes="(max-width: 1024px) 100vw, 1024px"> </a>
// </div>
// </div>
// </div>
// </div>
// </div>
// </section>
// </div>
// </div>
// </div>
// </section>
  );
};

export default Work;
