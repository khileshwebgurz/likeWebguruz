import React from "react";
import Image from "next/image";
import imageconsultone from "../../../public/images/consultImages/consult-icon-1.svg";
import imageconsulttwo from "../../../public/images/consultImages/consult-icon-2.svg";
import imageconsultthree from "../../../public/images/consultImages/consult-icon-3.svg";
import imageconsultfour from "../../../public/images/consultImages/consult-icon-4.svg";
import imageconsultfive from "../../../public/images/consultImages/consult-icon-5.svg";
import imageconsultsix from "../../../public/images/consultImages/consult-icon-6.svg";

const DigitalConsultancy = () => {
  return (
    <div>
      <section className="digital-consultancy py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main inner-pages pb-4 text-center">
              <h2>
              Why Choose <span>Webguruz?</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsultone} alt="Consultation 1" />
              </div>
              <h3>Tailored Strategies for Your Brand</h3>
              <p>
              Our team doesn&apos;t believe in one-size-fits-all solutions. Every strategy we create is customized to fit your brand&apos;s goals, target audience, and unique challenges. We dig deep to understand your business so that every digital effort aligns with your vision.
              </p>
            </div>
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsultthree} alt="Consultation 2" />
              </div>
              <h3>Skilled & Experienced Team</h3>
              <p>
              Our team comprises industry experts in development, design, and marketing. With years of experience across diverse sectors, we bring a wealth of knowledge to your projects, ensuring they&apos;re completed with the utmost professionalism and efficiency.
              </p>
            </div>
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsulttwo} alt="Consultation 3" />
              </div>
              <h3>End-to-End Digital Services</h3>
              <p>
              From website development to SEO, social media marketing, and more, WebGuruz is a one-stop solution for all your digital needs. With everything under one roof, you save time, reduce costs, and ensure that all elements work together seamlessly.
              </p>
            </div>
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsultfour} alt="Consultation 4" />
              </div>
              <h3>Transparent & Collaborative Process</h3>
              <p>
              We value your input and keep you in the loop at every stage. Through open communication and transparent reporting, you&apos;re always aware of your project&apos;s progress, milestones, and performance metrics.
              </p>
            </div>
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsultsix} alt="Consultation 5" />
              </div>
              <h3>Focus on Data-Driven Results</h3>
              <p>
              We prioritize results that you can see. Using data and analytics, we measure success and optimize our strategies continuously. This commitment to data-backed results means higher conversions, better ROI, and consistent growth for your business.
              </p>
            </div>
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsultfive} alt="Consultation 6" />
              </div>
              <h3>Ongoing Support & Optimization</h3>
              <p>
              Our commitment to your business doesn&apos;t end at launch. We offer ongoing support and continually optimize your solutions to keep up with industry trends, ensuring your business remains at the forefront of digital innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalConsultancy;
