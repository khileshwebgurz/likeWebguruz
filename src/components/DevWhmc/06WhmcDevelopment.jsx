import React from "react";
import Image from "next/image";
import quick1 from "../../../public/images/whmcsimages/whmc-iterate-1.webp";
import quick2 from "../../../public/images/whmcsimages/whmc-iterate-2.webp";
import quick3 from "../../../public/images/whmcsimages/whmc-iterate-3.webp";
import quick4 from "../../../public/images/whmcsimages/whmc-iterate-4.webp";
import quick5 from "../../../public/images/whmcsimages/whmc-iterate-5.webp";
import quick6 from "../../../public/images/whmcsimages/whmc-iterate-6.webp";
import quick7 from "../../../public/images/whmcsimages/whmc-iterate-7.webp";
import quick8 from "../../../public/images/whmcsimages/whmc-iterate-8.webp";

const data = [
  {
    img: quick1,
    alt:"Automation of Business Processes Icon",
    title: "Automation of Business Processes",
    description:
      "Simplify and automate your day-to-day operations, saving time and reducing human errors. With automation, your team can focus on strategic tasks rather than manual, repetitive processes.",
  },
  {
    img: quick2,
    alt:"Seamless Integrations Icon",
    title: "Seamless Integrations",
    description:
      "Integrate WHMCS with your existing systems and tools to create a unified workflow. This integration allows data to flow freely between platforms, improving accuracy and reducing the chances of errors.",
  },
  {
    img: quick3,
    alt:"Cost Efficiency Icon",
    title: "Cost Efficiency",
    description:
      "By leveraging our expertise, you reduce operational costs associated with manual processes and inefficiencies. This results in a higher return on investment, helping you allocate resources more effectively.",
  },
  {
    img: quick4,
    alt:"Customization & Flexibility Icon",
    title: "Customization & Flexibility",
    description:
      "Get tailored solutions that address your specific needs and offer flexibility for future adjustments. Our services allow you to adapt and evolve with changing market conditions, helping you stay ahead of the curve.",
  },
  {
    img: quick5,
    alt:"Scalable Solutions Icon",
    title: "Scalable Solutions",
    description:
      "Our WHMCS solutions grow with your business, allowing for easy scalability and future-proofing. Whether your business expands or diversifies, your WHMCS platform will be adaptable to accommodate new demands.",
  },
  {
    img: quick6,
    alt:"Customer Experience Icon",
    title: "Improved Customer Experience",
    description:
      "Enhance the user experience with intuitive designs, fast processes, and better customer service. With a streamlined workflow, your customers will enjoy a smoother, more satisfying interaction with your business.",
  },
  {
    img: quick7,
    alt:"Enhanced Security Icon",
    title: "Enhanced Security",
    description:
      "We prioritize data security by implementing the latest best practices and technologies in your WHMCS setup. This ensures that your customer information and financial transactions are always protected against potential threats.",
  },
  {
    img: quick8,
    alt:"Global Reach Icon",
    title: "Global Reach",
    description:
      "With our services, you can cater to customers worldwide by offering seamless billing and payment processing. This opens up new markets and opportunities for your business to grow on a global scale.",
  },
];

const WhmcDevelopment = () => {
  return (
    <div className="whmcsbest-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Benefits of Our <span>WHMCS Development Services </span>
            </h2>
          </div>
          {data.map((item, index) => (
            <div key={index} className="col-md-6 col-12 mb-4">
              <div className="best-box">
                <div className="best-box-img">
                  <Image src={item.img} alt={item.alt} />
                </div>
                <div className="best-box-description">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhmcDevelopment;
