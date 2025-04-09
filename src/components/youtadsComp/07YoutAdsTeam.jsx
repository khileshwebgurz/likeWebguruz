import React from "react";
import Image from "next/image";
import focus from "../../../public/images/youtubeimg/focus.webp";
import result from "../../../public/images/youtubeimg/results.webp";
import paid from "../../../public/images/youtubeimg/marketing.webp";
import ppc from "../../../public/images/youtubeimg/ppc.webp";
import mobile from "../../../public/images/youtubeimg/mobileadd.webp";
import higher from "../../../public/images/youtubeimg/Conversions.webp";

const teamData = [
  {
    img: focus,
    alt: "Sales and Leads Icon",
    title: "Focus on Sales and Leads",
    description:
      "When crafting your PPC campaign, our primary goal is to align with your brand's unique voice. By analyzing audience behavior, understanding demographics, and streamlining the right traffic channels for your business, we design campaigns aimed at boosting your ROAS. Our strategies track conversions, customer lifetime value, and ROI to ensure the best outcomes.",
  },
  {
    img: result,
    alt: "Outstanding Results Icon",
    title: "Outstanding Results",
    description:
      "Our expertise in accurately targeting your audience and delivering the right ads is unparalleled. Driven by data, our continuous optimization approach ensures that we thoroughly and consistently review your landing pages and ad copies. We quickly identify any gaps and take immediate corrective actions. Additionally, we regularly test and update your ad copies and designs based on market feedback.",
  },
  {
    img: paid,
    alt: "Paid Marketing Experts Icon",
    title: "Experts in Paid Marketing",
    description:
      "With decades of experience in paid marketing, we know exactly which channels will best support your business goals. Our strategic partnerships and extensive database give us insights into what your customers are looking for. Whether it’s programmatic ads, display ads, or shopping ads, we ensure your ads reach the right audience, at the right time, in the right place.",
  },
  {
    img: ppc,
    alt: "PPC Performance Icon",
    title: "Expertise to Enhance PPC Performance",
    description:
      "As a full-stack digital marketing agency, we have the in-house expertise to ensure your brand achieves maximum success. By partnering with our expert PPC team, you’ll experience the best ROAS, thanks to our comprehensive and integrated approach to digital marketing.",
  },
  {
    img: higher,
    alt: "Conversions Icon",
    title: "Higher Conversions",
    description:
      "With our team of talented content writers, we focus on targeting commercial-intent (transactional) keywords to craft your Ad copy. But that’s just the beginning. Whether your goal is to expand your email list, boost brand awareness, or drive more traffic to increase ad revenue, we’ve got you covered. Our direct-response copywriters are skilled in SEO, PPC, and behavioral marketing. You’ll receive unique, click-worthy content designed to engage visitors and optimize conversions from the outset.",
  },
  {
    img: mobile,
    alt: "Mobile Campaign Optimization Icon",
    title: "Mobile Campaign Optimization",
    description:
      "Did you know that more than half of search ad clicks come from mobile devices? The days of focusing solely on desktop or laptop users are over. Mobile phones must now be our top priority. With our YouTube Ads Services, we address this shift to on-the-go browsing together. We use the right ad extensions, craft action-driven ad copies, create eye-catching designs, apply device modifiers that prioritize profits, and ensure your mobile landing page is perfectly optimized for your ads.",
  },
];

const YoutAdsTeam = () => {
  return (
    <div className="Youtubeourteam-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto heading-main text-center mb-4 mb-md-5">
            <h2>
              Our Team is <span>Your Team</span>
            </h2>
            <p>
              At WebGuruz, your growth is our main priority. Our core values are
              centered around delivering quality, driven by data insights.
              Here’s what you can expect from us:
            </p>
          </div>
        </div>
        <div className="row row-our-team">
          {teamData.map(({ img, alt, title, description }, index) => (
            <div className="col-md-6 col-12 mb-4" key={index}>
              <div className="our-team-box">
                <div className="team-icon">
                  <Image src={img} alt={alt} />
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutAdsTeam;
