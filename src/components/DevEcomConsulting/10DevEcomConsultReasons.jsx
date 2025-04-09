import Image from "next/image";
import StationIcon1 from "../../../public/images/ecommerceconstimg/consult-xp-1.webp";
import StationIcon2 from "../../../public/images/ecommerceconstimg/consult-xp-2.webp";
import StationIcon3 from "../../../public/images/ecommerceconstimg/consult-xp-3.webp";
import StationIcon4 from "../../../public/images/ecommerceconstimg/consult-xp-4.webp";
import StationIcon5 from "../../../public/images/ecommerceconstimg/consult-xp-5.webp";
import StationIcon6 from "../../../public/images/ecommerceconstimg/consult-xp-6.webp";

const reasonsData = [
  {
    icon: StationIcon1,
    title: "Certified eCommerce Consultants",
    description: "Our team consists of certified professionals who bring deep expertise to your business.",
    alt: "Certified eCommerce Consultants Icon",
  },
  {
    icon: StationIcon2,
    title: "Tailored Strategies",
    description: "We understand that no two businesses are the same, which is why we provide customized solutions that work for you.",
    alt: "Tailored Strategies Icon",
  },
  {
    icon: StationIcon3,
    title: "Proven Track Record",
    description: "With hundreds of successful projects, we have a history of delivering measurable results.",
    alt: "Proven Track Record Icon",
  },
  {
    icon: StationIcon4,
    title: "End-to-End Support",
    description: "From strategy development to execution and ongoing optimization, we’re with you every step of the way.",
    alt: "End-to-End Support Icon",
  },
  {
    icon: StationIcon5,
    title: "Innovative Approach",
    description: "We stay on top of the latest eCommerce trends and technologies, ensuring you stay ahead of the competition.",
    alt: "Innovative Approach Icon",
  },
  {
    icon: StationIcon6,
    title: "Global Expertise",
    description: "No matter where your business is located, our team is equipped to serve clients worldwide.",
    alt: "Global Expertise Icon",
  },
];

const DevEcomConsultReasons = () => {
  return (
    <div className="web-scalable ecommerce-consulting-reasons py-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-9 col-xs-12 heading-main text-center pb-4">
            <h2>
              Why Choose <span> WebGuruz?</span>
            </h2>
            <span className="mb-3 d-inline-block">
              When you partner with WebGuruz, you’re choosing a team of
              certified experts dedicated to your business’s success.
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
                  <p className="station-develop-peragraph">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevEcomConsultReasons;
