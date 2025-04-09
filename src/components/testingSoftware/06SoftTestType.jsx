import React from "react";
import Image from "next/image";
import js1 from "../../../public/images/softwereimages/software-app-1.webp";
import js2 from "../../../public/images/softwereimages/software-app-2.webp";
import js3 from "../../../public/images/softwereimages/software-app-3.webp";
import js4 from "../../../public/images/softwereimages/software-app-4.webp";
import js5 from "../../../public/images/softwereimages/software-app-5.webp";
import js6 from "../../../public/images/softwereimages/software-app-6.webp";
import js7 from "../../../public/images/softwereimages/software-app-7.webp";
import js8 from "../../../public/images/softwereimages/software-app-8.webp";
import js9 from "../../../public/images/softwereimages/software-app-9.webp";
import js10 from "../../../public/images/softwereimages/software-app-10.webp";
import js11 from "../../../public/images/softwereimages/software-app-11.webp";
import js12 from "../../../public/images/softwereimages/software-app-12.webp";
import js13 from "../../../public/images/softwereimages/checking-13.webp";
import js14 from "../../../public/images/softwereimages/checking-14.webp";
import js15 from "../../../public/images/softwereimages/checking-15.webp";
const SoftTestType = () => {
  return (
    <div className="software-test-types py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Types of <span>Software WebGuruz Tests </span>
            </h2>
          </div>
          <div className="col-lg col-md-4 col-12 mb-4">
            <div className="our-joomla-card">
              <Image src={js1} alt="js" />
              <p>Mobile applications (iOS and Android)</p>
            </div>
          </div>
          <div className="col-lg col-md-4 col-12 mb-4">
            <div className="our-joomla-card">
              <Image src={js2} alt="js" />
              <p>Web applications and websites</p>
            </div>
          </div>
          <div className="col-lg col-md-4 col-12 mb-4">
            <div className="our-joomla-card">
              <Image src={js3} alt="js" />
              <p>E-commerce platforms</p>
            </div>
          </div>
          <div className="col-lg col-md-4 col-12 mb-4">
            <div className="our-joomla-card">
              <Image src={js4} alt="js" />
              <p>Enterprise Resource Planning (ERP) systems</p>
            </div>
          </div>
          <div className="col-lg col-md-4 col-12 mb-4">
            <div className="our-joomla-card">
              <Image src={js5} alt="js" />
              <p>Customer Relationship Management (CRM) software</p>
            </div>
          </div>
          <div className="col-lg col-md-4 col-12 mb-4">
            <div className="our-joomla-card">
              <Image src={js6} alt="js" />
              <p>Content Management Systems (CMS)</p>
            </div>
          </div>
          <div className="col-lg col-md-4 col-12 mb-4">
            <div className="our-joomla-card">
              <Image src={js7} alt="js" />
              <p>Learning Management Systems (LMS)</p>
            </div>
          </div>
          <div className="col-lg col-md-4 col-12 mb-4">
            <div className="our-joomla-card">
              <Image src={js8} alt="js" />
              <p>Healthcare management software</p>
            </div>
          </div>
          <div className="col-lg col-md-4 col-12 mb-4">
            <div className="our-joomla-card">
              <Image src={js9} alt="js" />
              <p>Financial and banking applications</p>
            </div>
          </div>
          <div className="col-lg col-md-4 col-12 mb-4">
            <div className="our-joomla-card">
              <Image src={js10} alt="js" />
              <p>Inventory management systems</p>
            </div>
          </div>
          <div className="col-lg col-md-4 col-12 mb-4">
            <div className="our-joomla-card">
              <Image src={js11} alt="js" />
              <p>Point of Sale (POS) systems</p>
            </div>
          </div>
          <div className="col-lg col-md-4 col-12 mb-4">
            <div className="our-joomla-card">
              <Image src={js12} alt="js" />
              <p>Supply chain management software</p>
            </div>
          </div>
          <div className="col-lg col-md-4 col-12 mb-4">
            <div className="our-joomla-card">
              <Image src={js13} alt="js" />
              <p>Human Resource Management Systems (HRMS)</p>
            </div>
          </div>
          <div className="col-lg col-md-4 col-12 mb-4">
            <div className="our-joomla-card">
              <Image src={js14} alt="js" />
              <p>Internet of Things (IoT) applications</p>
            </div>
          </div>
          <div className="col-lg col-md-4 col-12 mb-4">
            <div className="our-joomla-card">
              <Image src={js15} alt="js" />
              <p>Cloud-based SaaS products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftTestType;
