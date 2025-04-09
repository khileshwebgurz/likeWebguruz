import Store1 from "../../../public/images/shopifydevlpomentimg/shopify-discover-1.webp";
import Store2 from "../../../public/images/shopifydevlpomentimg/shopify-discover-2.webp";
import Store3 from "../../../public/images/shopifydevlpomentimg/shopify-discover-3.webp";
import Store4 from "../../../public/images/shopifydevlpomentimg/shopify-discover-4.webp";
import Store5 from "../../../public/images/shopifydevlpomentimg/shopify-discover-5.webp";
import Image from "next/image";

const DevShopifyProcess = () => {
  const processSteps = [
    {
      img: Store1,
      alt: "Discovery and Consultation Icon",
      title: "Discovery and Consultation",
      description:
        "We begin by engaging with you to deeply understand your business needs, target audience, and long-term objectives. This phase ensures that every decision made aligns with your unique goals and sets a strong foundation for the project.",
    },
    {
      img: Store2,
      alt: "Design and Prototyping Icon",
      title: "Design and Prototyping",
      description:
        "Our team creates visually captivating and highly intuitive designs that reflect your brand’s identity while prioritizing user experience. Interactive prototypes allow you to visualize the layout and functionality of your store before moving to development.",
    },
    {
      img: Store3,
      alt: "Development and Integration Icon",
      title: "Development and Integration",
      description:
        "In this phase, we bring the design to life by building a fully functional, responsive, and optimized store. We also integrate any necessary third-party tools or custom features to ensure your Shopify store meets your specific requirements.",
    },
    {
      img: Store4,
      alt: "Testing and Quality Assurance Icon",
      title: "Testing and Quality Assurance",
      description:
        "Rigorous testing is conducted across various devices and browsers to verify that your store operates flawlessly. From functionality checks to performance optimization, we leave no stone unturned to ensure a seamless shopping experience.",
    },
    {
      img: Store5,
      alt: "Launch and Support Icon",
      title: "Launch and Support",
      description:
        "After ensuring everything is ready, we deploy your store for the world to see while monitoring its performance during the initial launch. Post-launch, we provide comprehensive support and maintenance to keep your store running smoothly and efficiently.",
    },
  ];

  return (
    <div className="shopify-development-process py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 col-12 heading-main text-left mb-4 mb-md-5">
            <div className="shopify-left-content">
              <h2>
                <span> Our Shopify Website</span> Development Process
              </h2>
              <p>
                At WebGuruz, our 5-step Shopify development process ensures that
                your project succeeds:
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
                        <Image src={step.img} alt={step.alt} />
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

export default DevShopifyProcess;
