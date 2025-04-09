import React from "react";
import Image from "next/image";
import cmssol1 from "../../../public/images/Hubspotcmsimages/solution.webp";
import cmssol2 from "../../../public/images/Hubspotcmsimages/cms-sol2.webp";
import cmssol3 from "../../../public/images/Hubspotcmsimages/cms-sol3.webp";
import cmssol4 from "../../../public/images/Hubspotcmsimages/cms-sol4.webp";
import cmssol5 from "../../../public/images/Hubspotcmsimages/cms-sol5.webp";
import cmssol6 from "../../../public/images/Hubspotcmsimages/cms-sol6.webp";

const cardsData = [
  {
    img: cmssol1,
    alt: "All-in-One Solution Icon",
    title: "All-in-One Solution",
    description:
      "HubSpot CMS combines website hosting, SEO tools, and marketing automation under one roof, eliminating the need for multiple platforms.",
  },
  {
    img: cmssol2,
    alt: "Security Icon",
    title: "Enhanced Security",
    description:
      "With built-in SSL, web application firewall (WAF), and automatic updates, your website remains secure and up-to-date.",
  },
  {
    img: cmssol3,
    alt: "Superior Performance Icon",
    title: "Superior Performance",
    description:
      "HubSpot CMS offers fast load times and optimal performance, improving user experience and search engine rankings.",
  },
  {
    img: cmssol4,
    alt: "Content Delivery Icon",
    title: "Personalized Content Delivery",
    description:
      "Leverage smart content and dynamic personalization to deliver tailored experiences to your audience.",
  },
  {
    img: cmssol5,
    alt: "Analytics & Reporting Icon",
    title: "Advanced Analytics & Reporting",
    description:
      "Gain actionable insights with HubSpot’s advanced reporting tools, helping you refine your strategies.",
  },
  {
    img: cmssol6,
    alt: "Growth Icon",
    title: "Scalable for Growth",
    description:
      "HubSpot CMS grows with your business, allowing for seamless scalability and upgrades.",
  },
];

const CmsMigrateReason = () => {
  return (
    <div className="HubSpot-cms py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-3">
            <h2>
              Why Migrate Your Website to <span>HubSpot CMS ?</span>
            </h2>
            <p>
              Unlock a world of possibilities with HubSpot CMS. Migrating to
              HubSpot’s platform ensures a seamless integration of marketing,
              sales, and customer experience, enhancing your online presence.
            </p>
          </div>
        </div>
        <div className="row cms-migration">
          {cardsData.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="cms-card">
                <div className="cms-img">
                  <Image src={card.img} alt={card.alt} />
                </div>
                <h5>{card.title}</h5>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CmsMigrateReason;
