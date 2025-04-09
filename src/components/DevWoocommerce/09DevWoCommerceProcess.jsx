import Store1 from "../../../public/images/wocommercesimg/woo-ticket-1.webp";
import Store2 from "../../../public/images/wocommercesimg/woo-ticket-2.webp";
import Store3 from "../../../public/images/wocommercesimg/woo-ticket-3.webp";
import Store4 from "../../../public/images/wocommercesimg/woo-ticket-5.webp";
import Store5 from "../../../public/images/wocommercesimg/woo-ticket-6.webp";
import Image from "next/image";

const DevWoCommerceProcess = () => {
  const processSteps = [
    {
      step: Store1,
      alt:"Requirement Analysis Icon",
      title: "Requirement Analysis",
      description:
        "We collaborate with you to understand your business needs, goals, and vision for your eCommerce store.",
    },
    {
      step: Store2,
      alt:"Planning and Design Icon",
      title: "Planning & Design",
      description:
        "Based on the insights gathered during the requirement analysis, our team designs a detailed blueprint and wireframe for your store. ",
    },
    {
      step: Store3,
      alt:"Development and Customization Icon",
      title: "Development & Customization",
      description:
        "We integrate the chosen design, implement required features, and customize the platform to meet your specific business needs. ",
    },
    {
      step: Store4,
      alt:"Quality Assurance Icon",
      title: "Testing & Quality Assurance",
      description:
        "Before launching, we conduct thorough testing to ensure it functions flawlessly across all devices and browsers.",
    },
    {
      step: Store5,
      alt:"Launch and Post-Launch Icon",
      title: "Launch & Post-Launch Support",
      description:
        "Once everything is tested and optimized, we launch your WooCommerce store with a detailed go-live plan. After launch, we continue to provide post-launch support, including regular updates, maintenance, and any necessary tweaks needed.",
    },
   
  ];

  return (
    <div className="shopify-development-process wocommerce-process py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 col-12 heading-main text-left mb-4 mb-md-5">
            <div className="shopify-left-content">
              <h2>
                Our WooCommerce <span> Development Process </span>
              </h2>
              <p>
              At WebGuruz, we follow a systematic 5-step WooCommerce development process. This helps ensure your WooCommerce store is built on a solid foundation, delivering a smooth, optimized, and secure shopping experience for your customers. 
              </p>
            </div>
          </div>
          <div className="col-md-7 col-12">
            <div className="row shopify-liner-content">
              {processSteps.map((step, index) => (
                <div key={index} className="col-12 mb-4">
                  <div className="shopify-box">
                    <div className="box-imgs">
                      <div className="box-inner-img">
                        <Image src={step.step} alt={step.alt} />
                      </div>
                      <div className="shopify-box-para">
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevWoCommerceProcess;
