import Image from "next/image";
import Whyrsimg from "../../../public/images/drupalimg/whyrs.webp";

// Array to store reasons to hire the company
const reasonsToHire = [
  "Tailored HubSpot solutions that align with your goals.",
  "Comprehensive support from setup to ongoing optimization.",
  "Dedicated project management and regular progress updates.",
  "Expertise across all HubSpot hubs and integrations.",
  "Proven track record of success with global clients.",
  "Transparent pricing with no hidden costs.",
  "Rapid implementation and minimal downtime.",
  "Access to a team of HubSpot-certified experts.",
];

const HubServiceWhyChoose = () => {
  return (
    <>
      <section className="whyhrs choose-hubspot-services py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
              <div className="heading-main">
                <h2 className="mb-2">
                Why Choose <span> WebGuruz? </span>
                </h2>
                <p>
                As a certified HubSpot partner, WebGuruz combines deep expertise with a client-centric approach to deliver customized solutions that drive results. Our team of certified professionals leverages best practices and innovative strategies to ensure your business gets the most out of HubSpot.
                </p>
              </div>
              <div className="exphrs">
                <ul>
                  {reasonsToHire.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="whrsimg">
                <Image src={Whyrsimg} className="img-fluid" alt="CMS Development Services" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubServiceWhyChoose;
