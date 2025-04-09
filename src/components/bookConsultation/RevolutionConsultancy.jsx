import React from "react";
import Image from "next/image";
import revolution from "../../../public/images/consultImages/revolution.webp";
const RevolutionConsultancy = () => {
  return (
    <div>
      <section className="revolution-consultancy py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center pb-4">
              <h2>
                <span>Experience the </span> Webguruz Difference
              </h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12">
              <p>
                Working with WebGuruz means partnering with a team that truly
                values your success. Our approach combines strategic planning
                with the latest technology to drive growth. We help businesses
                build their online reputation, attract and retain customers, and
                achieve long-term profitability. With a focus on measurable
                outcomes, our solutions are designed to maximize your return on
                investment while keeping your brand authentic and relatable.
                Choose WebGuruz for a hassle-free experience where you gain not
                only a provider but also a trusted partner in your business
                journey.
              </p>
             
            </div>
            <div className="col-sm-6 col-xs-12 consultaion-image-right">
              <Image src={revolution} alt="Consult Us" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RevolutionConsultancy;
