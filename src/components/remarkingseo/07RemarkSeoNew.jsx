import React from "react";
import key from "../../../public/images/remarketingimg/remarket-benefit.webp";
import Image from "next/image";
const RemarkSeoNew = () => {
  return (
    <div className="Remarketingmatric py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="remarketing-matric-img">
              <Image src={key} alt="Google Ads Remarketing Company" />
            </div>
          </div>
          <div className="col-md-6 col-12 heading-main ">
            <div className="remarketing-matric-content">
              <h2>
                Key Benefits of <span>Google Ads Remarketing</span>
              </h2>
              <p>Discover the advantages of remarketing for your business.</p>

              <ul className="pt-4">
                <li>Convert visitors into customers with targeted ads.</li>
                <li>Keep your business top-of-mind with repeated exposure.</li>
                <li>Focus on warm leads, reducing overall ad spend.</li>
                <li>
                  Deliver tailored messages that resonate with specific
                  audiences.
                </li>
                <li>Interact with users at the right time and place.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemarkSeoNew;
