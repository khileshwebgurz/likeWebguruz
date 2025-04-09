import choose from "../../../public/images/wocommercesimg/wocom-dev.webp";
import Image from "next/image";

const DevWoCommerceReasons = () => {
  const reasons = [
    {
      title: "Open-Source Flexibility",
      description:
        "WooCommerce is an open-source platform, which means it is fully customizable, with no limitations imposed by licensing fees or restrictive design templates. Developers have complete control over the store’s appearance, functionality, and performance. Whether you're building a simple online store or a complex eCommerce solution, WooCommerce offers the flexibility to integrate unique features, third-party applications, and custom themes.",
    },
    {
      title: "Seamless WordPress Integration",
      description:
        "WooCommerce is built to seamlessly integrate with WordPress, the world’s most popular content management system. This means that businesses can leverage the robust features of WordPress- such as its extensive content management, SEO tools, and user-friendly interface- while enjoying the added eCommerce capabilities of WooCommerce.",
    },
    {
      title: "Cost-Effective Solution",
      description:
        "WooCommerce is a cost-effective eCommerce solution that allows businesses to launch their online stores without breaking the bank. The platform itself is free, and many of its core features come built-in, making it accessible to small businesses and startups. Additionally, WooCommerce offers a vast library of plugins that can add advanced functionalities without significant development costs.",
    },
    {
      title: "Comprehensive Payment Gateway Integration",
      description:
        "WooCommerce supports over 100 different payment gateways, including PayPal, Stripe, Authorize.net, and many more. This extensive range of payment options allows store owners to cater to a global audience, providing multiple methods for customers to complete their purchases securely.",
    },
    {
      title: "Scalability for Growing Businesses",
      description:
        "WooCommerce is designed to scale with you, supporting everything from small storefronts to large-scale, enterprise-level stores with thousands of products. WooCommerce can handle high traffic, large product catalogs, and complex inventory management systems. With features like product variations, digital downloads, and multi-store management, WooCommerce grows with your business.",
    },
    {
      title: "Robust SEO Capabilities",
      description:
        "WooCommerce is built with search engine optimization (SEO) in mind, allowing businesses to easily optimize their stores for better visibility in search engines like Google. It integrates seamlessly with popular SEO plugins such as Yoast SEO, making it easier to optimize product pages, categories, and blog posts for relevant keywords. Features like customizable URLs, metadata, and sitemaps allow WooCommerce stores to rank higher and drive organic traffic.",
    },
    {
      title: "Vast Plugin Ecosystem",
      description:
        "With thousands of plugins available, businesses can easily add features like advanced shipping methods, loyalty programs, email marketing automation, live chat support, and much more. These plugins allow WooCommerce to be tailored to almost any business model, whether you’re selling physical products, digital goods, subscriptions, or services.",
    },
  ];

  return (
    <div className="Whychoosemagento woocomerce-reasons py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              <span>WooCommerce: </span>
              <br />
              Your Development Platform of Choice
            </h2>
          </div>
        </div>
        <div className="row why-chose align-items-center">
          <div className="col-md-6 col-12 mt-4 mt-md-0">
            <Image src={choose} alt="WooCommerce Website Development Services" />
          </div>
          <div className="col-md-6 col-12 right-choose">
            {reasons.map((reason, index) => (
              <div className="why-choose-text mb-4" key={index}>
                <h5>{reason.title}</h5>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevWoCommerceReasons;
