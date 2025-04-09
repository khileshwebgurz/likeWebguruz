import React from "react";
import Image from "next/image";
import step1 from "../../../public/images/wordpressmaintenanceimg/main-rating-1.webp";
import step2 from "../../../public/images/wordpressmaintenanceimg/main-rating-2.webp";
import step3 from "../../../public/images/wordpressmaintenanceimg/main-rating-3.webp";
import step4 from "../../../public/images/wordpressmaintenanceimg/main-rating-4.webp";
const WordMainWorking = () => {
  return (
    <div className="wordpresssiteplain py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-0 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2 className="mb-2">
              Benefits of On-Time <span>WordPress Maintenance</span>
            </h2>
            <p>
              Regular maintenance is essential for keeping your WordPress
              website secure, fast, and reliable. Ignoring updates or delaying
              maintenance can lead to security vulnerabilities, performance
              issues, and costly downtime. By staying proactive with WordPress
              maintenance, you ensure that your website remains a powerful asset
              for your business, delivering a seamless experience to visitors
              while protecting your data and reputation. Here’s how timely
              maintenance benefits your website:
            </p>
          </div>
        </div>
        <div className="row row-plain">
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step1} alt="wordpress maintenance services" />
              </div>
              <h5>Enhanced Security</h5>
              <p>
                Regular updates and security patches prevent hacking attempts
                and malware infections.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step2} alt="System Icon" />
              </div>
              <h5>Minimal Downtime</h5>
              <p>
                Proactive monitoring helps prevent issues before they disrupt
                your business operations.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step3} alt="Customer Satisfaction Icon" />
              </div>
              <h5>Faster Loading Speed</h5>
              <p>
                Optimized performance means better user experience and improved
                SEO rankings.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step4} alt="Setting Icon" />
              </div>
              <h5>Improved User Experience</h5>
              <p>
                A well-maintained website ensures a seamless and engaging
                experience for your visitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordMainWorking;
