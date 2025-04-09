import React from "react";
import whyimg from "../../../public/images/hubspot-developer-img/why-developer.webp";
import happy1 from "../../../public/images/hubspot-developer-img/developer-reason1.webp";
import happy2 from "../../../public/images/hubspot-developer-img/developer-reason2.webp";
import happy3 from "../../../public/images/hubspot-developer-img/developer-reason3.webp";
import happy4 from "../../../public/images/hubspot-developer-img/developer-reason4.webp";
import happy5 from "../../../public/images/hubspot-developer-img/developer-reason5.webp";
import Image from "next/image";

const devloper = [
  {
    image: happy1,
    alt: "Certified Hubspot App Developers Icon",
    title: "Certified Hubspot",
    subtitile: "App Developers",
  },
  {
    image: happy2,
    alt: "On-Time Delivery Icon",
    title: " On-Time",
    subtitile: "Delivery",
  },
  {
    image: happy3,
    alt: "Expertise Across Verticals Icon",
    title: "Expertise Across",
    subtitile: "Verticals",
  },
  {
    image: happy4,
    alt: "Scalable Solutions Icon",
    title: "Scalable",
    subtitile: "Solutions",
  },
  {
    image: happy5,
    alt: "Support Icon",
    title: "End-to-End",
    subtitile: "Support",
  },
];

const DeveloperWhyHire = () => {
  return (
    <div className="hubdev-whyhire py-5">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-md-6  heading-main mb-4 mb-md-0">
            <div className="hub-certified-content devwhy-content">
              <h2>
                Why Hire Our <br />
                <span>HubSpot Developers?</span>
              </h2>
              <p>
                Choosing WebGuruz means partnering with a team dedicated to
                delivering exceptional results. Our developers are not just
                HubSpot experts but also problem-solvers who bring strategic
                insights to every project.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="certified-img dev-why-img">
              <Image src={whyimg} alt="HubSpot Developers" />
            </div>
          </div>
          <div className="col-12 whyhire-card">
            <div className="row align-items-center text-center pt-4">
              {devloper.map((option, index) => (
                <div
                  key={index}
                  className="col mx-1 mb-4 mb-md-0 dev-why-hire-card"
                >
                  <div className="img">
                    <Image
                      src={option.image}
                      alt={option.alt}
                      height={500}
                      width={500}
                    />
                  </div>
                  {option.title} <br />
                  {option.subtitile}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperWhyHire;
