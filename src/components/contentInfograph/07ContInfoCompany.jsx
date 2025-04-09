import Image from "next/image";
import React from "react";
import seo1 from "../../../public/images/graphmotionimg/smm-illustrate-1.png";
import seo2 from "../../../public/images/graphmotionimg/smm-illustrate-2.png";
import seo3 from "../../../public/images/graphmotionimg/smm-illustrate-3.png";
import seo4 from "../../../public/images/graphmotionimg/smm-illustrate-4.png";
import seo5 from "../../../public/images/graphmotionimg/smm-illustrate-5.png";
import seo6 from "../../../public/images/graphmotionimg/smm-illustrate-6.png";

const ContInfoCompany = () => {
  return (
    <>
      <div className="motion-graphic-company py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 heading-main text-center text-md-start mb-4 mb-md-5">
              <h2>
                Why <span> Choose WebGuruz?</span>
              </h2>
              <p>
                At WebGuruz Technologies Pvt Ltd, we are passionate about
                crafting visually stunning infographics and motion graphics that
                transform complex information into engaging, easy-to-understand
                visuals. Our team of experienced designers, animators, and
                storytellers work collaboratively to ensure every project is not
                just aesthetically pleasing but also strategically aligned with
                your brand’s goals.
              </p>
              <p>
                We blend creativity with data-driven insights to produce
                high-quality designs that capture attention, enhance user
                engagement, and drive conversions. Whether you need an
                infographic to showcase key statistics or an animated video to
                explain a complex concept, we bring ideas to life with precision
                and impact. With our deep expertise, industry-leading tools, and
                commitment to excellence, we help businesses stand out in an
                increasingly visual digital landscape.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <div className="motion-platform">
                <div className="motion-platform-img">
                  <Image src={seo1} alt="" />
                </div>
                <div className="motion-platform-content">
                  <p>Experienced Designers & Animators</p>
                </div>
              </div>
              <div className="motion-platform">
                <div className="motion-platform-img">
                  <Image src={seo2} alt="" />
                </div>
                <div className="motion-platform-content">
                  <p>Custom Solutions Tailored to Your Brand</p>
                </div>
              </div>
              <div className="motion-platform">
                <div className="motion-platform-img">
                  <Image src={seo3} alt="" />
                </div>
                <div className="motion-platform-content">
                  <p>High-Quality, Engaging Visual Content</p>
                </div>
              </div>
              <div className="motion-platform">
                <div className="motion-platform-img">
                  <Image src={seo4} alt="" />
                </div>
                <div className="motion-platform-content">
                  <p>Quick Turnaround Time</p>
                </div>
              </div>
              <div className="motion-platform">
                <div className="motion-platform-img">
                  <Image src={seo5} alt="" />
                </div>
                <div className="motion-platform-content">
                  <p>SEO-Optimized Visuals for Maximum Reach</p>
                </div>
              </div>
              <div className="motion-platform">
                <div className="motion-platform-img">
                  <Image src={seo6} alt="" />
                </div>
                <div className="motion-platform-content">
                  <p>Cost-Effective Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContInfoCompany;
