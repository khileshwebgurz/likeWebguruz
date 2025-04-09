import disc from "../../../public/images/magentoimg/magento-work.webp";
import Image from "next/image";

const DevMagentoPossibility = () => {
  const benefits = [
    "Expertise in Magento architecture",
    "Faster time-to-market",
    "Advanced customization options",
    "Cost-efficient solutions",
    "Reliable post-launch support",
    "Enhanced security measures",
    "Scalable solutions",
    "Access to the latest Magento tools",
  ];

  return (
    <div className="Magentodiscover-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              Why Work with a <span>Magento Development Company? </span>
            </h2>
          </div>
        </div>
        <div className="row why-chose">
          <div className="col-md-6 col-12 mt-4 mt-md-0">
            <Image src={disc} alt="Magento Development Company" />
          </div>
          <div className="col-md-6 col-12">
            <div className="why-choose-text mb-4">
              <p>
                Partnering with experts ensures your eCommerce platform stands
                out. With professional support, you can enjoy seamless
                integrations, advanced functionalities, and exceptional user
                experience.
              </p>
            </div>
            <ul className="magento-list">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevMagentoPossibility;
