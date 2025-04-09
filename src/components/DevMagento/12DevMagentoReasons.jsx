import choose from "../../../public/images/magentoimg/magentorism-1.webp";
import Image from "next/image";

const DevMagentoReasons = () => {
  const reasons = [
    {
      title: "End-to-End Solutions",
      description:
        "We provide a complete suite of Magento development services, from initial consultation and strategy development to design, development, testing, deployment, and post-launch support. Our holistic approach ensures that every aspect of your project is covered and optimized for success.",
    },
    {
      title: "Enhanced User Experience",
      description:
        "We focus on creating Magento stores with intuitive, user-friendly designs that enhance the customer experience. By improving usability and navigation, we ensure that visitors enjoy a seamless shopping journey, which leads to higher engagement and conversion rates.",
    },
    {
      title: "Future-Ready Platforms",
      description:
        "Our Magento solutions are built with scalability in mind, allowing your platform to grow alongside your business. Whether you’re expanding your product range, entering new markets, or scaling your infrastructure, our solutions are designed to handle increasing traffic and demand, ensuring long-term sustainability.",
    },
    {
      title: "Robust Security",
      description:
        "Security is a top priority in all our Magento development projects. We implement industry-leading security measures, including SSL certificates, secure payment gateways, and regular updates to safeguard your business and customer data from cyber threats. Your platform will be fortified to protect against breaches and fraud.",
    },
    {
      title: "Ongoing Support",
      description:
        "Our commitment to your success doesn’t end at launch. We offer ongoing support and maintenance to ensure your Magento platform continues to perform at its best. Whether you need technical assistance, feature upgrades, or performance optimization, our team is always here to help.",
    },
  ];

  return (
    <div className="Whychoosemagento py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              Other Benefits of Our <span> Magento Development Services </span>
            </h2>
          </div>
        </div>
        <div className="row why-chose align-items-center">
          <div className="col-md-6 col-12 mt-4 mt-md-0">
            <Image src={choose} alt="Magento eCommerce Development" />
          </div>
          <div className="col-md-6 col-12 right-content">
            {reasons.map((item, index) => (
              <div key={index} className="why-choose-text mb-4">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevMagentoReasons;
