import Store1 from "../../../public/images/mspimages/control-1.webp";
import Store2 from "../../../public/images/mspimages/control-2.webp";
import Store3 from "../../../public/images/mspimages/control-3.webp";
import Store4 from "../../../public/images/mspimages/control-4.webp";
import Image from "next/image";

const MspHowDifferent = () => {
  const processSteps = [
    {
      img: Store1,
      alt: "Monitoring and Support Icon Icon",
      title: "Discovery and Consultation",
      description:
        "Proactive monitoring & support to prevent issues before they disrupt your business.",
    },
    {
      img: Store2,
      alt: "Customized IT solutions Icon Icon",
      title: "Design and Prototyping",
      description:
        "Customized IT solutions that match your business goals.",
    },
    {
      img: Store3,
      alt: "IT professionals Icon Icon",
      title: "Development and Integration",
      description:
        "Experienced IT professionals dedicated to seamless IT management.",
    },
    {
      img: Store4,
      alt: "24/7 helpdesk support Icon Icon",
      title: "Testing and Quality Assurance",
      description:
        "24/7 helpdesk support to keep your business running smoothly.",
    },
    
  ];

  return (
    <div className="shopify-development-process msp-desk pt-2 pb-5 py-md-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 col-12 heading-main text-left mb-4 mb-md-5">
            <div className="shopify-left-content">
              <h2>
              Why Are <span>We Different?</span>
              </h2>
              <p>
              Choosing the right MSP partner is crucial for your business’s success. At WebGuruz Technologies, we go beyond basic IT support to offer innovative, proactive, and tailored solutions. Our experienced team understands the evolving tech landscape and delivers services that keep you ahead of the competition. We prioritize efficiency, security, and cost-effectiveness to enhance your IT ecosystem.
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

export default MspHowDifferent;
