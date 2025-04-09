import React from "react";
import Magento1 from "../../../public/images/ecommerceimage/ecom-logo-1.webp";
import Magento2 from "../../../public/images/ecommerceimage/ecom-logo-2.webp";
import Magento3 from "../../../public/images/ecommerceimage/ecom-logo-3.webp";
import Magento4 from "../../../public/images/ecommerceimage/ecom-logo-4.webp";
import Image from "next/image";

const ecommercePlatforms = [
  {
    img: Magento1,
    alt: "Shopify Icon",
    description:
      "A user-friendly platform perfect for businesses of all sizes. We enhance your Shopify store’s SEO to attract more customers.",
  },
  {
    img: Magento2,
    alt: "Magento Icon",
    description:
      "Advanced SEO strategies for this robust platform, ideal for larger businesses with extensive catalogs.",
  },
  {
    img: Magento3,
    alt: "Woocommerce Icon",
    description:
      "Tailored SEO solutions for WordPress-based online stores, ensuring seamless integration and improved rankings.",
  },
  {
    img: Magento4,
    alt: "Bigcommerce Icon",
    description:
      "Optimize your BigCommerce store with our specialized SEO services and grow your business with the expertise of a leading eCommerce SEO company.",
  },
];

function EcommercePlatform() {
  return (
    <div className="Ecommerceplate-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4">
            <h2>
              Top <span>eCommerce Platforms</span>
            </h2>
            <p>
              We have expertise in optimizing stores on the most popular
              eCommerce platforms:
            </p>
          </div>
        </div>
        <div className="row top-plateform">
          {ecommercePlatforms.map((platform, index) => (
            <div
              className={`col-md-6 col-12 text-center mb-4 ${
                index === 3 ? "mb-md-0" : ""
              }`}
              key={index}
            >
              <div className="top-plate-form-box">
                <Image src={platform.img} className="mb-3" alt={platform.alt} />
                <p>{platform.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EcommercePlatform;
