import React from "react";
import certiimg from "../../../public/images/hubspot-developer-img/developer-comp.webp";
import Image from "next/image";
const DeveloperCertified = () => {
  return (
    <div className="hubdev-certified py-5">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-md-6  heading-main mb-4 mb-md-0">
            <div className="hub-certified-content">
              <h2>
                Comprehensive HubSpot <span>Development Services</span>
              </h2>
              <p>
                At WebGuruz, we offer a comprehensive range of HubSpot
                development services designed to meet diverse business
                objectives. Whether you need custom CRM solutions, interactive
                landing pages, or tailored email templates, our goal is to help
                you maximize your HubSpot investment. Our expertise extends
                across various areas, including HubSpot API integrations, custom
                module development, theme creation, website migration, and CRM
                customization. Each service is crafted to enhance your HubSpot
                experience and drive tangible results for your business.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="certified-img">
              <Image src={certiimg} alt="HubSpot CRM Developers" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCertified;
