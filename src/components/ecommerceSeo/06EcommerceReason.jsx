import React from "react";
import Seo from "../../../public/images/ecommerceimage/our-ecom-prtnr.webp";
import Image from "next/image";
const EcommerceReason = () => {
  return (
    <div className="Whychooseseo-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-6 heading-main  mb-4 mb-5">
            <h2 className="mb-3">
              Why Choose Webguruz for <br />
              <span>eCommerce SEO?</span>
            </h2>
            <p>
              At Webguruz, we combine expertise with innovation to deliver
              exceptional eCommerce SEO results. Our team of experienced
              professionals understands the nuances of online retail and works
              closely with you to develop customized strategies.
            </p>
            <p>
              From identifying the right keywords to enhancing user experience,
              we focus on every detail that drives success. Our transparent
              reporting keeps you informed about your site’s performance, and
              our commitment to excellence ensures you get the best return on
              investment.
            </p>
            <p>
              Whether you&apos;re launching a new store or looking to revamp an
              existing one, WebGuruz is your trusted eCommerce SEO agency
              partner.
            </p>
          </div>
          <div className="col-md-6">
            <div className="why-seo-img">
              <Image src={Seo} alt="eCommerce SEO Services" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceReason;
