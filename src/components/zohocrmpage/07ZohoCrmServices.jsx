import React from "react";
import Image from "next/image";
import service1 from "../../../public/images/zohocrmimages/zoho-met-1.webp";
import service2 from "../../../public/images/zohocrmimages/zoho-met-2.webp";
import service3 from "../../../public/images/zohocrmimages/zoho-met-3.webp";
import service4 from "../../../public/images/zohocrmimages/zoho-met-4.webp";
import service5 from "../../../public/images/zohocrmimages/zoho-met-5.webp";
const ZohoCrmServices = () => {
  return (
    <div className="zohoservices-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our Zoho CRM <span>Consulting Services</span>
            </h2>
          </div>
          <div className="col-xxl col-lg-4 col-md-6 col-12  mb-4 mb-xxl-0">
            <div className="services-card">
              <div className="services-img">
                <Image src={service1} alt="service" />
              </div>
              <h3>CRM Strategy & Planning</h3>
              <p>
                We assess your business needs and create a tailored CRM strategy
                to streamline operations and improve customer engagement.
              </p>
            </div>
          </div>
          <div className="col-xxl col-lg-4 col-md-6 col-12  mb-4 mb-xxl-0">
            <div className="services-card">
              <div className="services-img">
                <Image src={service2} alt="service" />
              </div>
              <h3>Process Mapping & Optimization</h3>
              <p>
                Our consultants analyze your sales, marketing, and customer
                service workflows to optimize efficiency and eliminate
                bottlenecks.
              </p>
            </div>
          </div>
          <div className="col-xxl col-lg-4 col-md-6 col-12  mb-4 mb-xxl-0">
            <div className="services-card">
              <div className="services-img">
                <Image src={service3} alt="service" />
              </div>
              <h3>Third-Party Integrations</h3>
              <p>
                We help integrate Zoho CRM with other business applications like
                ERP, accounting software, marketing tools, and communication
                platforms.
              </p>
            </div>
          </div>
          <div className="col-xxl col-lg-4 col-md-6 col-12  mb-4 mb-xxl-0">
            <div className="services-card">
              <div className="services-img">
                <Image src={service4} alt="service" />
              </div>
              <h3>Customization & Automation</h3>
              <p>
                From custom modules and fields to automated workflows, we ensure
                your Zoho CRM is tailored to fit your business processes
                perfectly.
              </p>
            </div>
          </div>
          <div className="col-xxl col-lg-4 col-md-6 col-12  mb-4 mb-xxl-0">
            <div className="services-card">
              <div className="services-img">
                <Image src={service5} alt="service" />
              </div>
              <h3>Ongoing Support & Enhancements</h3>
              <p>
                Our team provides continuous guidance, troubleshooting, and
                optimization to help your CRM evolve with your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZohoCrmServices;
