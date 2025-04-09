import React from "react";
import process1 from "../../../public/images/googleadsimg/google-monitor-1.webp";
import process2 from "../../../public/images/googleadsimg/google-monitor-2.webp";
import process3 from "../../../public/images/googleadsimg/google-monitor-3.webp";
import process4 from "../../../public/images/googleadsimg/google-monitor-4.webp";
import process5 from "../../../public/images/googleadsimg/google-monitor-5.webp";
import process6 from "../../../public/images/googleadsimg/google-monitor-6.webp";
import Image from "next/image";
const GoogleAdsManagement = () => {
  return (
    <div className="Ourgoogleprocess-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span>Our Google Ads </span> Management Process
            </h2>
            <p>
              Our process ensures that your campaigns are always optimized for
              success, using data-driven <br />
              strategies and real-time adjustments to maximize your ROI.
            </p>
          </div>
        </div>
        <div className="row Ourgoogleprocess one mb-4 mb-md-5">
          <div className="col-md-3 col-12">
            <div className="process-icon">
              <Image src={process1} alt="Google Ad Performance Icon" />
            </div>
          </div>
          <div className="col-md-9 col-12">
            <div className="process-text">
              <h4>Monitor Google Ad Performance</h4>
              <p>
                We don’t just launch Google Ads campaigns and leave them
                running. Our team actively monitors performance to ensure that
                every ad is performing as expected. We track key metrics like
                click-through rates (CTR), conversion rates, cost per click
                (CPC), and return on investment (ROI) to evaluate how
                effectively your ads are reaching your target audience and
                driving meaningful results. If we notice any areas for
                improvement, we immediately adjust your campaigns to keep them
                on track and ensure maximum performance.
              </p>
            </div>
          </div>
        </div>
        <div className="row Ourgoogleprocess two mb-4 mb-md-5">
          <div className="col-md-9 col-12">
            <div className="process-text">
              <h4>Ad Targeting</h4>
              <p>
                To make sure your ads are seen by the right people at the right
                time, we utilize advanced targeting strategies. This includes
                demographic targeting (age, gender, income level), geographic
                targeting (local, regional, or global), device targeting
                (desktop, mobile, tablet), and behavioral targeting (interests,
                online habits). By narrowing down your audience based on these
                criteria, we ensure that your ads reach potential customers who
                are most likely to be interested in your products or services.
                This not only increases engagement but also enhances your return
                on investment (ROI).
              </p>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="process-icon">
              <Image src={process2} alt="Ad Targeting Icon" />
            </div>
          </div>
        </div>
        <div className="row Ourgoogleprocess one mb-4 mb-md-5">
          <div className="col-md-3 col-12">
            <div className="process-icon">
              <Image src={process3} alt="A/B Testing Icon" />
            </div>
          </div>
          <div className="col-md-9 col-12">
            <div className="process-text">
              <h4>A/B Testing of Ad Copies & Design</h4>
              <p>
                To determine what resonates best with your audience, we
                continuously test variations of your ads. A/B testing involves
                creating multiple versions of your ads with slight variations in
                wording, design, or call-to-action (CTA) to see which one
                performs better. By testing different combinations and analyzing
                the results, we can pinpoint the most effective ad copy, design,
                and messaging that drives the highest engagement and
                conversions. This process helps us continually refine your
                campaign to ensure maximum impact.
              </p>
            </div>
          </div>
        </div>
        <div className="row Ourgoogleprocess two mb-4 mb-md-5">
          <div className="col-md-9 col-12">
            <div className="process-text">
              <h4>Updating Negative Keywords</h4>
              <p>
                One of the key ways we ensure your Google Ads campaigns remain
                cost-effective and highly targeted is by regularly updating
                negative keywords. Negative keywords are terms or phrases that
                you don’t want your ads to appear for. By carefully selecting
                and updating negative keywords, we help prevent your ads from
                showing up in irrelevant searches or low-quality traffic that’s
                unlikely to convert. This minimizes wasted ad spend and ensures
                that your budget is spent on reaching only the most relevant
                prospects.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="process-icon">
              <Image src={process4} alt="Negative Keywords Icon" />
            </div>
          </div>
        </div>
        <div className="row Ourgoogleprocess one mb-4 mb-md-5">
          <div className="col-md-3 col-12">
            <div className="process-icon">
              <Image src={process5} alt="Landing Page Optimization Icon" />
            </div>
          </div>
          <div className="col-md-9 col-12">
            <div className="process-text">
              <h4>Landing Page Optimization</h4>
              <p>
                The effectiveness of your Google Ads is not just determined by
                the ads themselves but also by the landing pages they direct
                users to. Our team works to continuously optimize your landing
                pages for better user experience and higher conversion rates.
                This involves improving the page layout, ensuring fast load
                times, creating compelling content, and ensuring the page is
                aligned with the ad&apos;s messaging. The goal is to create a
                seamless transition from the ad to the landing page, making it
                as easy as possible for visitors to take the desired action,
                whether it’s filling out a form, making a purchase, or
                subscribing.
              </p>
            </div>
          </div>
        </div>
        <div className="row Ourgoogleprocess two ">
          <div className="col-md-9 col-12">
            <div className="process-text">
              <h4>Analyze Switching To Automated Bidding</h4>
              <p>
                To maximize the efficiency of your ad spend, we evaluate whether
                automated bidding strategies would work better for your Google
                Ads campaigns. Automated bidding uses Google&apos;s machine
                learning algorithms to adjust your bids in real-time based on
                the likelihood of a conversion. We analyze your current bidding
                strategy and compare the results with automated bidding options
                like Target CPA (Cost Per Acquisition) or Target ROAS (Return on
                Ad Spend) to see if they can improve your results. By adopting
                the right automated bidding strategy, we can optimize your
                budget allocation and increase your overall campaign
                performance.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="process-icon">
              <Image src={process6} alt="Automated Bidding Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdsManagement;
