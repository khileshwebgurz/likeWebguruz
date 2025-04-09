import React from "react";
import benfit from "../../../public/images/ecommercemainteimg/our-benefit.webp";
import Image from "next/image";
import Link from "next/link";

const SupportEcomBenfits = () => {
  const benefits = [
    "Experience uninterrupted operations with proactive maintenance and swift resolution of technical issues.",
    "Protect your website from cyber threats with regular updates, vulnerability scans, and robust security protocols.",
    "Boost your site’s speed and responsiveness to handle traffic spikes and deliver an exceptional user experience.",
    "Engage and retain customers with an error-free, user-friendly shopping experience that fosters loyalty.",
    "Avoid costly disruptions and repairs with preventive maintenance that ensures long-term stability.",
    "Adapt your eCommerce platform seamlessly to meet the demands of business growth and evolving market trends.",
  ];

  return (
    <div className="maintenace-benifit-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="benifit-img">
              <Image src={benfit} alt="Website Support & Maintenance" />
            </div>
          </div>
          <div className="col-md-6 col-12 heading-main mb-4 mb-md-0">
            <div className="benifiti-details">
              <h2 className="mb-3">
                Benefits of Our eCommerce Website{" "}
                <span>Support and Maintenance Services </span>
              </h2>
              <p>
                Our eCommerce website support and maintenance services are
                designed to help your business thrive in the competitive digital
                marketplace. We ensure your website operates at its best,
                delights customers, and supports your growth ambitions.
              </p>
              <div className="benifit-list">
                <ul>
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <p>
                  From safeguarding against potential risks to enhancing
                  customer experience, we help your business achieve consistent
                  growth and success.
                </p>
                <Link href="#" className="explore-btn">
                  Grow with Us, Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportEcomBenfits;
