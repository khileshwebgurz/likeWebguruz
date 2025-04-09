import React from "react";
import Image from "next/image";
import step1 from "../../../public/images/wordpressmaintenanceimg/main-rating-1.webp";
import step2 from "../../../public/images/wordpressmaintenanceimg/main-rating-2.webp";
import step3 from "../../../public/images/wordpressmaintenanceimg/main-rating-3.webp";
import step4 from "../../../public/images/wordpressmaintenanceimg/main-rating-5.webp";
const WebWorking = () => {
  return (
    <div className="wordpresssiteplain py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-0 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2 className="mb-2">
              Benefits of On-Time <span>Webflow Maintenance</span>
            </h2>
            <p>
              Regular maintenance is essential for the health and performance of
              your Webflow website.
            </p>
          </div>
        </div>
        <div className="row row-plain">
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step1} alt="Webflow maintenance services" />
              </div>
              <h5>Enhanced Security</h5>
              <p>
                Protect your website and customer data from potential threats.
                Regular maintenance includes security updates and vulnerability
                checks to keep your site safe from hackers and malware.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step3} alt="Maintenance Icon" />
              </div>
              <h5>Improved Performance</h5>
              <p>
                A well-maintained website loads faster and performs better. Our
                maintenance services optimize your site&apos;s speed and
                functionality, providing a better experience for your visitors.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step2} alt="Customer Satisfaction Icon" />
              </div>
              <h5>Reduced Downtime</h5>
              <p>
                Prevent unexpected outages and technical issues that can cost
                your business money. Proactive maintenance helps identify and
                resolve potential problems before they cause downtime.
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
                Investing in regular maintenance now saves you from costly
                emergency fixes and redesigns later. Our maintenance services
                help extend the life of your website and maximize your ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebWorking;
