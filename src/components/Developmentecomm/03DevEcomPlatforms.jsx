import Image from "next/image";
import deecom1 from "../../../public/images/devecomerceimg/ecom-company-1.webp";
import deecom2 from "../../../public/images/devecomerceimg/ecom-company-2.webp";
import deecom3 from "../../../public/images/devecomerceimg/ecom-company-3.webp";
import deecom4 from "../../../public/images/devecomerceimg/ecom-company-4.webp";
import deecom5 from "../../../public/images/devecomerceimg/ecom-company-5.webp";
import deecom6 from "../../../public/images/devecomerceimg/ecom-company-6.webp";

const platforms = [
  {
    image: deecom1,
    title: "Shopify Development",
    alt:"Shopify Development Icon",
    description:
      "Create beautiful, responsive, and intuitive Shopify stores tailored to your brand's unique needs. Our Shopify development services focus on creating stunning websites that provide an exceptional user experience. Whether you’re a startup or an established business, we help you set up, customize, and scale your store with ease.",
  },
  {
    image: deecom2,
    title: "WooCommerce Development",
    alt:"WooCommerce Development Icon",
    description:
      "Build robust WordPress-powered eCommerce stores with seamless integrations and easy management using WooCommerce. WooCommerce is a powerful and flexible platform that provides you with full control over your online store. From product listing to customer management, our team ensures that your store is easy to navigate and manage.",
  },
  {
    image: deecom3,
    title: "Magento Development",
    alt:"Magento Development Icon",
    description:
      "Leverage Magento’s flexibility to build robust, feature-rich eCommerce websites that meet the demands of growing businesses. Whether you need advanced product categorization, personalized shopping experiences, or multi-language and multi-currency support, we ensure that your Magento store is optimized for speed, performance, and a seamless customer experience.",
  },
  {
    image: deecom4,
    title: "BigCommerce Development",
    alt:"BigCommerce Development Icon",
    description:
      "Boost your sales and drive business growth with scalable, secure, and fully optimized BigCommerce stores. We specialize in custom development, including designing highly optimized storefronts, integrating various payment options, and implementing marketing tools like automated cart recovery.",
  },
  {
    image: deecom5,
    title: "Wix eCommerce Development",
    alt:"Wix eCommerce Development Icon",
    description:
      "We help you create visually stunning, responsive websites with features like secure payment gateways, SEO optimization, and inventory management. Whether you’re just getting started or want to improve an existing store, our team ensures that your Wix store runs smoothly and efficiently.",
  },
  {
    image: deecom6,
    title: "OpenCart Development",
    alt:"OpenCart Development Icon",
    description:
      "We specialize in creating personalized OpenCart websites that are both functional and easy to manage. Our services include theme customization, plugin integrations, SEO optimization, and secure payment gateway setups, ensuring your store delivers a seamless shopping experience and attracts more customers.",
  },
];

const DevEcomPlatforms = () => {
  return (
    <section className="ecom-development-platforms py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-4">
            <h2>
              Platforms We Support for <span>eCommerce Development</span>
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

export default DevEcomPlatforms;
