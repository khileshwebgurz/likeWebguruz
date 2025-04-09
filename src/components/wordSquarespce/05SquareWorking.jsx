import React from "react";
import Image from "next/image";
import step1 from "../../../public/images/wordpressmaintenanceimg/main-rating-1.webp";
import step2 from "../../../public/images/wordpressmaintenanceimg/main-rating-2.webp";
import step3 from "../../../public/images/wordpressmaintenanceimg/main-rating-3.webp";
import step4 from "../../../public/images/wordpressmaintenanceimg/main-rating-6.webp";
const SquareWorking = () => {
  return (
    <div className="wordpresssiteplain py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-0 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2 className="mb-2">
              Benefits of On-Time <span>Squarespace Maintenance</span>
            </h2>
            <p>
              Regular, proactive maintenance of your Squarespace website offers
              numerous advantages that can significantly impact your business
              success.
            </p>
          </div>
        </div>
        <div className="row row-plain">
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step1} alt="pick" />
              </div>
              <h5>Enhanced Website Security</h5>
              <p>
                Regular maintenance includes security updates and vulnerability
                checks that protect your website and customer data from hackers
                and malicious attacks.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step3} alt="pick" />
              </div>
              <h5>Improved Loading Speed</h5>
              <p>
                Optimized images, cleaned-up code, and proper caching ensure
                your website loads quickly, providing visitors with a smooth
                browsing experience and boosting your search engine rankings.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step2} alt="pick" />
              </div>
              <h5>Reduced Downtime</h5>
              <p>
                Proactive maintenance prevents issues that could cause your
                website to crash or malfunction, ensuring your online presence
                remains available to customers 24/7.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step4} alt="pick" />
              </div>
              <h5>Better User Experience</h5>
              <p>
                Regular updates and maintenance ensure all website features work
                correctly, creating a seamless user experience that keeps
                visitors engaged and encourages conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareWorking;
