import React from "react";
import Image from "next/image";
import traning2 from "../../../public/images/traningdevimg/training-big-img.svg";
function TrainOrganisation() {
  return (
    <div className="traning-org-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 heading-main text-center text-md-start mb-4 mb-md-0">
            <h2>
              Why Employee Training & <span>Development is Crucial? </span>
            </h2>
            <p className="mb-2">
              Employee Training & Development has emerged as the critical
              cornerstone of organizational resilience, driving innovation, and
              ensuring sustained growth in an era of unprecedented technological
              and market disruptions.
            </p>
            <p className="mb-2">
              By strategically investing in your workforce, you&apos;re not just
              teaching skills; you&apos;re fundamentally transforming your
              organization&apos;s DNA. This investment creates a powerful culture of
              excellence that permeates every level of your company. When
              employees feel supported through comprehensive training programs,
              their engagement levels soar, directly translating to improved
              retention rates and reduced recruitment costs. Moreover,
              continually upskilled employees become your most valuable assets,
              bringing enhanced productivity, creativity, and adaptability to
              complex business challenges.
            </p>
            <p className="mb-0">
              The benefits extend far beyond immediate performance metrics.
              Organizations that prioritize Employee Training & Development
              build a robust competitive advantage that distinguishes them in
              increasingly saturated markets. They become talent magnets,
              attracting top-tier professionals who seek environments committed
              to personal and professional growth. By demonstrating a genuine
              commitment to your team&apos;s development, you signal that your
              organization values its human capital, which resonates deeply in
              today&apos;s purpose-driven professional ecosystem. In an age where
              technological advancements render skills obsolete faster than ever
              before, companies that fail to invest in continuous learning risk
              becoming irrelevant. Training is no longer a peripheral HR
              function but a strategic imperative that directly impacts
              bottom-line results, organizational agility, and long-term
              sustainability.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <div className="traning-org-right">
              <Image src={traning2} alt="traning" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainOrganisation;
