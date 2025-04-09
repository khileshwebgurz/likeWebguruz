import React from "react";
import Image from "next/image";
import support1 from "../../../public/images/zohocrmimages/zoho-pro-1.webp";
import support2 from "../../../public/images/zohocrmimages/zoho-pro-2.webp";
import support3 from "../../../public/images/zohocrmimages/zoho-pro-3.webp";
import support4 from "../../../public/images/zohocrmimages/zoho-pro-4.webp";
import support5 from "../../../public/images/zohocrmimages/zoho-pro-5.webp";
import support6 from "../../../public/images/zohocrmimages/zoho-pro-6.webp";
const ZohoCrmWhyChoose = () => {
  return (
    <div className="zohochoose-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-2">
              <span> Why Choose WebGuruz </span> for Zoho CRM Plus
              Implementation?
            </h2>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="choose-card">
              <div className="choose-img">
                <Image src={support1} alt="support" />
              </div>
              <p>
                Certified Zoho Experts with years of CRM implementation
                experience.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="choose-card">
              <div className="choose-img">
                <Image src={support2} alt="support" />
              </div>
              <p>Tailor-made solutions to fit your specific business needs.</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="choose-card">
              <div className="choose-img">
                <Image src={support3} alt="support" />
              </div>
              <p>End-to-end support, from planning to execution and beyond.</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="choose-card">
              <div className="choose-img">
                <Image src={support4} alt="support" />
              </div>
              <p>Seamless Integration with your existing tools and software.</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="choose-card">
              <div className="choose-img">
                <Image src={support5} alt="support" />
              </div>
              <p>Proven Track Record of successful CRM implementations.</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="choose-card">
              <div className="choose-img">
                <Image src={support6} alt="support" />
              </div>
              <p>Affordable Pricing with flexible engagement models.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZohoCrmWhyChoose;
