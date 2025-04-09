import React from "react";
import Image from "next/image";
import icon1 from "../../../public/images/mspimages/it-secure-1.webp";
import icon2 from "../../../public/images/mspimages/it-secure-2.webp";
import icon3 from "../../../public/images/mspimages/it-secure-3.webp";
import icon4 from "../../../public/images/mspimages/it-secure-4.webp";
import icon5 from "../../../public/images/mspimages/it-secure-5.webp";
import icon6 from "../../../public/images/mspimages/it-secure-6.webp";
const MspUnparallel = () => {
  return (
    <div className="mspmind-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4">
            <h2 className="mb-2">
              Benefits of <span> Our MSP Services </span>
            </h2>
            <p>How Our MSP Services Drive Efficiency and Growth</p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="mspmind-box">
              <Image src={icon1} alt="Security and Compliance Icon" />
              <div className="box-content">
                <h4>
                  Enhanced Security <br /> & Compliance
                </h4>
                <p>
                  We implement robust security measures and ensure compliance
                  with industry standards to protect your business data.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="mspmind-box">
              <Image src={icon2} alt="Scalable IT Solutions Icon" />
              <div className="box-content">
                <h4>
                  Scalable <br /> IT Solutions
                </h4>
                <p>
                  Easily scale your IT infrastructure as your business grows.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="mspmind-box">
              <Image src={icon3} alt="Cost Savings Icon" />
              <div className="box-content">
                <h4>
                  Cost Savings & <br /> Predictable Budgeting
                </h4>
                <p>
                  Reduce IT costs with a fixed monthly fee, eliminating
                  unexpected expenses.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="mspmind-box">
              <Image src={icon4} alt="24/7 Monitoring Icon" />
              <div className="box-content">
                <h4>
                  24/7 Monitoring <br /> & Support
                </h4>
                <p>
                  We proactively monitor your systems to detect and resolve
                  issues before they impact operations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="mspmind-box">
              <Image src={icon5} alt="Increased Efficiency Icon" />
              <div className="box-content">
                <h4>
                  Increased Efficiency <br /> & Productivity
                </h4>
                <p>
                  Our team streamlines IT processes, minimizing downtime and
                  boosting business efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="mspmind-box">
              <Image src={icon6} alt="Expert IT Professionals Icon" />
              <div className="box-content">
                <h4>
                  Access to <br /> Expert IT Professionals
                </h4>
                <p>
                  Leverage the expertise of seasoned IT professionals without
                  the cost of hiring in-house staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MspUnparallel;
