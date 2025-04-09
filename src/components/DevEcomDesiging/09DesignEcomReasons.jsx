import Image from "next/image";
import StationIcon1 from "../../../public/images/ecommercewebdesignimg/ecom-star-1.webp";
import StationIcon2 from "../../../public/images/ecommercewebdesignimg/ecom-star-2.webp";
import StationIcon3 from "../../../public/images/ecommercewebdesignimg/ecom-star-3.webp";
import StationIcon4 from "../../../public/images/ecommercewebdesignimg/ecom-star-4.webp";
import StationIcon5 from "../../../public/images/ecommercewebdesignimg/ecom-star-5.webp";
import StationIcon6 from "../../../public/images/ecommercewebdesignimg/ecom-star-6.webp";

const reasonsData = [
  {
    icon: StationIcon1,
    title: "Certified Experts",
    alt: "Certified Experts Icon",
    description:
      "Our team is composed of highly skilled and experienced professionals who are certified in leading eCommerce platforms such as Shopify, WooCommerce, Magento, and BigCommerce.",
  },
  {
    icon: StationIcon2,
    title: "Proven Track Record",
    alt: "Proven Track Record Icon",
    description:
      "Our portfolio is filled with success stories that demonstrate our ability to create impactful eCommerce solutions that drive growth and customer satisfaction.",
  },
  {
    icon: StationIcon3,
    title: "Tailored Solutions",
    alt: "Tailored Solutions Icon",
    description:
      "From personalized layouts to specific functionalities, every element of your website is crafted to help you achieve your business objectives effectively.",
  },
  {
    icon: StationIcon4,
    title: "End-to-End Services",
    alt: "End-to-End Services Icon",
    description:
      "Whether it’s initial discovery, planning, design, development, or post-launch optimization, our team handles every stage of your project from concept to completion.",
  },
  {
    icon: StationIcon5,
    title: "Ongoing Support",
    alt: "Ongoing Support Icon",
    description:
      "Our team is always available to ensure your platform remains optimized and evolves with your business needs, giving you peace of mind long after your website goes live.",
  },
  {
    icon: StationIcon6,
    title: "Global Reach",
    alt: "Global Reach Icon",
    description:
      "No matter where your business operates, we are equipped to deliver solutions that resonate with your customers and drive success on a global scale.",
  },
];

const DesignEcomReasons = () => {
  return (
    <div className="web-scalable design-ecommerce-reasons py-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-9 col-xs-12 heading-main text-center pb-5">
            <h2>
              <span>Experience Excellence</span> with Every Project
            </h2>
            <span className="mb-3 d-inline-block">
              At WebGuruz, we pride ourselves on our unwavering commitment to
              quality, innovation, and client satisfaction. Our team goes above
              and beyond to create eCommerce solutions that not only meet but
              exceed expectations, making us a trusted partner for businesses
              across the globe. Here’s what makes us stand out:
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="web-development-stations-wrap">
              {reasonsData.map((reason, index) => (
                <div className="inner-flex-statins-list" key={index}>
                  <Image src={reason.icon} alt={reason.alt} />
                  <h3 className="station-develop-title">{reason.title}</h3>
                  <p className="station-develop-peragraph">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignEcomReasons;
