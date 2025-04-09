import React from "react";
import Image from "next/image";
import process from "../../../public/images/zohocrmimages/zoho-procee.svg";
import Link from "next/link";
const ZohoCrmProcess = () => {
  return (
    <div className="zohoprocess-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 heading-main col-12 mb-4 mb-md-0">
            <h2 className="mb-2">
              <span>Our Zoho CRM Plus </span> Implementation Process
            </h2>
            <div className="process-list">
              <ul>
                <li>
                  Consultation & Requirement Analysis: Understanding your
                  business needs and CRM goals.
                </li>
                <li>
                  CRM Customization & Setup: Configuring Zoho CRM Plus to align
                  with your workflows.
                </li>
                <li>
                  Integration & Data Migration: Ensuring seamless data
                  transition from your existing systems.
                </li>
                <li>
                  Training & Ongoing Support: Equipping your team with the
                  skills needed to maximize CRM benefits
                </li>
              </ul>
              <h5>Ready to Transform Your Business with Zoho CRM Plus? </h5>
              <div className="contact-btn">
                <Link href="/contact-us">Contact Us Today!</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="process-img">
              <Image src={process} alt="process" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZohoCrmProcess;
