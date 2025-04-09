import React from "react";
import Image from "next/image";
import white1 from "../../../public/images/wiximages/wix-white-1.webp";
import white2 from "../../../public/images/wiximages/wix-white-2.webp";
import white3 from "../../../public/images/wiximages/wix-white-3.webp";
import white4 from "../../../public/images/wiximages/wix-white-4.webp";
import white5 from "../../../public/images/wiximages/wix-white-5.webp";
import white6 from "../../../public/images/wiximages/wix-white-6.webp";

import black1 from "../../../public/images/wiximages/wix-black-1.webp";
import black2 from "../../../public/images/wiximages/wix-black-2.webp";
import black3 from "../../../public/images/wiximages/wix-black-3.webp";
import black4 from "../../../public/images/wiximages/wix-black-4.webp";
import black5 from "../../../public/images/wiximages/wix-black-5.webp";
import black6 from "../../../public/images/wiximages/wix-black-6.webp";

const WixSolutions = () => {
  return (
    <div className="bigcommerce-services wix-dev-solution py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span>Why Our Wix Development </span> Services Stand Out?
            </h2>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="big-card">
              <div className="big-card-icon-content">
                <Image src={black1} alt="UI/UX Icon" />
                <h5>User-Friendly Design</h5>
              </div>
              <div className="bigcommerce-ser-content">
                <div className="bigcommerce-content-inner">
                  <Image src={white1} alt="UI/UX Icon" />
                  <h3 className="font25">User-Friendly Design</h3>
                  <p>
                    We craft intuitive and engaging website layouts that enhance
                    user experience, making navigation effortless and ensuring
                    visitors find what they need quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="big-card">
              <div className="big-card-icon-content">
                <Image src={black2} alt="Setting Icon" />
                <h5>Custom Solutions</h5>
              </div>
              <div className="bigcommerce-ser-content">
                <div className="bigcommerce-content-inner">
                  <Image src={white2} alt="Setting Icon" />
                  <h3 className="font25">Custom Solutions</h3>
                  <p>
                    Every business is unique, and so are our Wix development
                    services. We design custom websites tailored to your
                    specific brand identity, goals, and functionality needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="big-card">
              <div className="big-card-icon-content">
                <Image src={black3} alt="Setting Icon" />
                <h5>Mobile Optimization</h5>
              </div>
              <div className="bigcommerce-ser-content">
                <div className="bigcommerce-content-inner">
                  <Image src={white3} alt="Setting Icon" />
                  <h3 className="font25">Mobile Optimization</h3>
                  <p>
                    Our Wix websites are fully responsive, adapting seamlessly
                    to any screen size, so your audience enjoys a flawless
                    browsing experience on desktops, tablets, and smartphones.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="big-card">
              <div className="big-card-icon-content">
                <Image src={black4} alt="Security Icon" />
                <h5>Fast & Secure Websites</h5>
              </div>
              <div className="bigcommerce-ser-content">
                <div className="bigcommerce-content-inner">
                  <Image src={white4} alt="Security Icon" />
                  <h3 className="font25">Fast & Secure Websites</h3>
                  <p>
                    We prioritize speed and security, ensuring your Wix website
                    loads quickly, performs efficiently, and is protected
                    against potential threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="big-card">
              <div className="big-card-icon-content">
                <Image src={black5} alt="PC Icon" />
                <h5>SEO-Focused Approach</h5>
              </div>
              <div className="bigcommerce-ser-content">
                <div className="bigcommerce-content-inner">
                  <Image src={white5} alt="PC Icon" />
                  <h3 className="font25">SEO-Focused Approach</h3>
                  <p>
                    We implement best SEO practices, optimizing your website for
                    higher search engine rankings, improved visibility, and
                    increased organic traffic.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="big-card">
              <div className="big-card-icon-content">
                <Image src={black6} alt="Servers Icon" />
                <h5>24/7 Support & Maintenance</h5>
              </div>
              <div className="bigcommerce-ser-content">
                <div className="bigcommerce-content-inner">
                  <Image src={white6} alt="Servers Icon" />
                  <h3 className="font25">24/7 Support & Maintenance</h3>
                  <p>
                    Our dedicated support team is available round the clock to
                    provide assistance, updates, and maintenance, ensuring your
                    website stays up-to-date and runs smoothly at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WixSolutions;
