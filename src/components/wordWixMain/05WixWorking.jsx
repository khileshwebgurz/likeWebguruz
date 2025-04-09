import React from "react";
import Image from "next/image";
import step1 from "../../../public/images/wordpressmaintenanceimg/main-rating-1.webp";
import step2 from "../../../public/images/wordpressmaintenanceimg/main-rating-6.webp";
import step3 from "../../../public/images/wordpressmaintenanceimg/main-rating-3.webp";
import step4 from "../../../public/images/wordpressmaintenanceimg/main-rating-5.webp";
const WixWorking = () => {
  return (
    <div className="wordpresssiteplain py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-0 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2 className="mb-2">
              Benefits of On-Time <span>Wix Maintenance</span>
            </h2>
            <p>
              Regular maintenance isn&apos;t just about fixing problems- it&apos;s about
              preventing them and improving your overall online presence.
            </p>
          </div>
        </div>
        <div className="row row-plain">
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step1} alt="Wix maintenance services" />
              </div>
              <h5>Enhanced Security Protection</h5>
              <p>
                Regular updates and security patches protect your website and
                customer data from the latest threats. We implement best
                security practices to keep hackers at bay and ensure your
                website remains trusted by visitors.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step3} alt="Maintenance Icon" />
              </div>
              <h5>Improved Website Performance</h5>
              <p>
                Optimized loading speeds, streamlined code, and proper resource
                management ensure your website loads quickly and functions
                smoothly on all devices, reducing bounce rates and improving
                user experience.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step2} alt="Customer Satisfaction Icon" />
              </div>
              <h5>Consistent User Experience</h5>
              <p>
                Regular content updates, functional testing, and bug fixes
                ensure your visitors always have a positive experience on your
                site, increasing the likelihood of conversions and return
                visits.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step4} alt="Setting Icon" />
              </div>
              <h5>Long-term Cost Savings</h5>
              <p>
                Preventative maintenance is far more cost-effective than
                emergency repairs. Regular upkeep prevents small issues from
                becoming expensive problems that could take your site offline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WixWorking;
