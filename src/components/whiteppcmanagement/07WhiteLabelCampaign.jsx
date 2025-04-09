import React from "react";
import Image from "next/image";

import camp1 from "../../../public/images/whitelabelppcimage/white-ppc-1.webp";
import camp2 from "../../../public/images/whitelabelppcimage/white-ppc-2.webp";
import camp3 from "../../../public/images/whitelabelppcimage/white-ppc-3.webp";
import camp4 from "../../../public/images/whitelabelppcimage/white-ppc-4.webp";
import camp5 from "../../../public/images/whitelabelppcimage/white-ppc-5.webp";
import camp6 from "../../../public/images/whitelabelppcimage/white-ppc-6.webp";

const campaignData = [
  {
    image: camp1,
    title: "Scalability Without Overhead",
    alt:"Scalability Icon",
    description:
      "Our expert team manages multiple campaigns efficiently, ensuring that your clients get top-quality service without the need for you to increase operational costs. This scalability is essential for growing businesses that need to keep up with the increasing demand for PPC services.",
  },
  {
    image: camp2,
    title: "Improved Efficiency and Time Savings",
    alt:"Efficiency and Time Savings Icon",
    description:
      "Our team constantly monitors performance, tweaks campaigns, and conducts A/B testing to ensure ongoing improvements. You can focus on strategic business goals and client acquisition while we handle the intricate details of PPC management, ultimately increasing overall productivity.",
  },
  {
    image: camp3,
    title: "Access to Certified PPC Experts",
    alt:"Certified PPC Experts Icon",
    description:
      "Our experts are skilled in the latest trends, best practices, and tools, ensuring your campaigns are always at the forefront of the industry. Instead of dedicating time and resources to hiring and training an in-house team, you can leverage our expertise to enhance your PPC efforts, improve campaign performance, and achieve superior results for your clients.",
  },
  {
    image: camp4,
    title: "Focus on Core Competencies",
    alt:"Core Competencies Icon",
    description:
      "Whether you specialize in SEO, website development, or branding, White Label PPC allows you to enhance your existing services without getting bogged down by complex advertising management. This focus ensures that you’re not spreading your resources too thin and can continue offering high-quality, core services while leaving the PPC expertise to the professionals.",
  },
  {
    image: camp5,
    title: "Transparency and Real-Time Reporting",
    alt:"Real-Time Reporting Icon",
    description:
      "White Label PPC services ensure complete transparency with white-labeled reporting that you can share with your clients. You will receive detailed performance reports, allowing you to track the success of campaigns, monitor key metrics, and gain insights into how well your PPC strategies are performing.",
  },
  {
    image: camp6,
    title: "Consistent Campaign Optimization for Maximum ROI",
    alt:"Campaign Optimization Icon",
    description:
      "We actively manage and optimize your campaigns on a daily basis, ensuring that bids, keywords, and ad creatives are always aligned with current performance metrics and trends. Constant A/B testing, keyword refinements, and bid adjustments help maximize results and reduce unnecessary spending, all while maintaining high-quality leads.",
  },
];

const WhiteLabelCampaign = () => {
  return (
    <div className="Whitelabelcamp-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Benefits of <span>White Label PPC</span>
            </h2>
          </div>
          {campaignData.map((campaign, index) => (
            <div className="col-md-4 col-12 mb-4" key={index}>
              <div className="campaign-card">
                <div className="camp-img">
                  <Image src={campaign.image} alt={campaign.alt} />
                </div>
                <h4>{campaign.title}</h4>
                <p>{campaign.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhiteLabelCampaign;
