import React from "react";
import Image from "next/image";
import automation from "../../../public/images/newhubcrmautoimages/crmImages/crm-auto-1.webp";
import consultation from "../../../public/images/newhubcrmautoimages/crmImages/crm-auto-2.webp";
import crm from "../../../public/images/newhubcrmautoimages/crmImages/crm-auto-3.webp";
import integration from "../../../public/images/newhubcrmautoimages/crmImages/crm-auto-4.webp";
import support from "../../../public/images/newhubcrmautoimages/crmImages/crm-auto-5.webp";
import training from "../../../public/images/newhubcrmautoimages/crmImages/crm-auto-6.webp";
import arrow from "../../../public/images/newhubcrmautoimages/arrownew.svg";

const CrmAutoPlan = () => {
  return (
    <div className="hubweplain-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center">
            <h2>
              Our HubSpot <span>CRM Automation Process</span>
            </h2>
            <p>
              We follow a proven 6-step process to ensure the successful
              implementation
              <br /> of HubSpot CRM automation tailored to your business needs:
            </p>
          </div>
        </div>
        <div className="row new-hub-plain mt-4 mt-md-5">
          <div className="col-md-4 col-12">
            <div className="hub-plain-img-text">
              <Image src={consultation} alt="Initial Consultation Icon" />
              <div className="hub-plain-text">
                <h4>Initial Consultation</h4>
                <p>
                  We begin by understanding your business goals, processes, and
                  pain points to recommend the best solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="hub-plain-img-text">
              <Image src={crm} alt="CRM Customization Icon" />
              <div className="hub-plain-text">
                <h4>CRM Setup and Customization</h4>
                <p>
                  Based on your specific needs, we customize HubSpot CRM for
                  optimal use and ensure it fits your workflow.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="hub-plain-img-text">
              <Image src={automation} alt="Automation strategy Icon" />
              <div className="hub-plain-text">
                <h4>Automation Strategy Design</h4>
                <p>
                  We design a detailed automation strategy that aligns with your
                  business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row arrow-big-img">
          <div className="col-12">
            <div className="arrow-center-img">
              <Image src={arrow} alt="arrow-img" />
            </div>
          </div>
        </div>
        <div className="row new-hub-plain new-hub-plain-two ">
          <div className="col-md-4 col-12">
            <div className="hub-plain-img-text">
              <Image
                src={integration}
                alt="Implementation and Integration Icon"
              />
              <div className="hub-plain-text">
                <h4>Implementation and Integration</h4>
                <p>
                  Our team implements the automation strategy and integrates
                  HubSpot with your existing tools and platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="hub-plain-img-text">
              <Image src={training} alt="Training and Onboarding Icon" />
              <div className="hub-plain-text">
                <h4>Training and Onboarding</h4>
                <p>
                  We provide thorough training to your team to ensure they are
                  fully equipped to use HubSpot CRM automation effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="hub-plain-img-text">
              <Image src={support} alt="Ongoing Support Icon" />
              <div className="hub-plain-text">
                <h4>Ongoing Support & Optimization</h4>
                <p>
                  After implementation, we provide ongoing support and
                  continuous optimization to ensure you achieve maximum value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrmAutoPlan;
