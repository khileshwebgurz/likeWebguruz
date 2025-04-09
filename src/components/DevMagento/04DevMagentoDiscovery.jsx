import React from "react";
import magento from "../../../public/images/magentoimg/magento-desk.webp";
import Image from "next/image";
const DevMagentoDiscovery = () => {
  return (
    <div className="Magentodev-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 heading-main">
            <h2 className="mb-3">
              Transform Your Business with{" "}
              <span>Custom Magento Development</span>
            </h2>
            <p>
              With Magento, the possibilities for eCommerce innovation and
              growth are truly limitless. From crafting immersive, user-friendly
              shopping experiences to enabling seamless integrations with
              third-party tools, our custom Magento development services are
              designed to help your business thrive in today’s competitive
              market.
            </p>
            <p>
              Magento empowers you to build a fully customized online store that
              aligns with your brand’s identity, offers advanced analytics for
              informed decision-making, and ensures a robust and secure
              foundation for sustained growth.
            </p>
            <p>
              At WebGuruz, we specialize in delivering solutions tailored to
              your unique business needs. Our team of certified Magento experts
              combines deep industry knowledge with technical excellence to
              develop platforms that not only meet but exceed your expectations.
              Whether it’s enhancing your store’s performance, optimizing user
              engagement, or scaling for future expansion, our solutions are
              engineered to drive measurable results and foster long-term
              success. Partner with us to harness the full potential of Magento
              and take your eCommerce journey to the next level.
            </p>
          </div>
          <div className="col-md-6 col-12 mt-5 mt-md-0">
            <div className="magento-desk-img">
              <Image src={magento} alt="Custom Magento Development" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevMagentoDiscovery;
