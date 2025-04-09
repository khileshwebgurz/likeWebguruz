import Image from "next/image";
import deecom1 from "../../../public/images/bigcommerceimg/bigcom-expert-1.webp";
import deecom2 from "../../../public/images/bigcommerceimg/bigcom-expert-2.webp";
import deecom3 from "../../../public/images/bigcommerceimg/bigcom-expert-3.webp";
import deecom4 from "../../../public/images/bigcommerceimg/bigcom-expert-4.webp";
import deecom5 from "../../../public/images/bigcommerceimg/bigcom-expert-5.webp";
import deecom6 from "../../../public/images/bigcommerceimg/bigcom-expert-6.webp";

const platforms = [
  {
    image: deecom1,
    title: "Expertise in BigCommerce",
    alt: "Expertise in BigCommerce Icon",
    description:
      "Our team has extensive experience in developing, optimizing, and maintaining BigCommerce stores.",
  },
  {
    image: deecom2,
    title: "Transparent Pricing",
    alt: "Transparent Pricing Icon",
    description:
      "No hidden costs! We offer affordable pricing plans tailored to your budget.",
  },
  {
    image: deecom3,
    title: "Custom Solutions for Every Business",
    alt: "Custom Solutions for Every Business Icon",
    description:
      "Whether you’re a startup or an enterprise, we provide tailored solutions to meet your unique needs.",
  },
  {
    image: deecom4,
    title: "Seamless Integrations",
    alt: "Seamless Integrations Icon",
    description:
      "We integrate third-party apps, payment gateways, and CRM tools to enhance functionality.",
  },
  {
    image: deecom5,
    title: "Mobile & SEO-Friendly Stores",
    alt: "Mobile & SEO-Friendly Stores Icon",
    description:
      "We ensure your store is optimized for mobile and ranks higher on search engines.",
  },
  {
    image: deecom6,
    title: "24/7 Support & Maintenance",
    alt: "24/7 Support & Maintenance Icon",
    description:
      "Our dedicated team ensures your store runs smoothly with minimal downtime.",
  },
];

const BigComReasons = () => {
  return (
    <section className="ecom-development-platforms bigcommerce-reasons py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-4">
            <h2>
              Why Choose WebGuruz for <span> BigCommerce Development?</span>
            </h2>
          </div>
          {platforms.map((platform, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">
              <div className="ecom-platform-cards">
                <div className="ecom-platform-holdings">
                  <div className="platform-img">
                    <Image src={platform.image} alt={platform.alt} />
                  </div>
                  <h4>{platform.title}</h4>
                </div>
                <div className="platform-content">{platform.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BigComReasons;
