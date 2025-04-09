import React from "react";
import Image from "next/image";
import offer1 from "../../../public/images/keapimages/keap-grow-1.webp";
import offer2 from "../../../public/images/keapimages/keap-grow-2.webp";
import offer3 from "../../../public/images/keapimages/keap-grow-3.webp";
import offer4 from "../../../public/images/keapimages/keap-grow-4.webp";
const KeapOffer = () => {
  return (
    <div className="keapoffer-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4">
            <h2>
              Benefits of <span> Working with WebGuruz</span>
            </h2>
          </div>
          <div className="col-md-6 col-12">
            <div className="offer-card">
              <div className="offer-card-icon">
                <Image src={offer1} alt="marketing" />
              </div>
              <div className="card-text">
                <h4>Increased Operational Efficiency</h4>
                <p>
                  Our custom Keap solutions automate repetitive tasks,
                  streamline workflows, and free up your team to focus on
                  high-value activities that drive growth.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="offer-card">
              <div className="offer-card-icon">
                <Image src={offer2} alt="marketing" />
              </div>
              <div className="card-text">
                <h4>Improved ROI</h4>
                <p>
                  Maximize your investment in Keap with solutions that drive
                  measurable business results, from increased conversion rates
                  to higher customer lifetime value.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="offer-card">
              <div className="offer-card-icon">
                <Image src={offer3} alt="marketing" />
              </div>
              <div className="card-text">
                <h4>Enhanced Customer Experience</h4>
                <p>
                  Deliver personalized, timely communications that nurture leads
                  and strengthen customer relationships, resulting in higher
                  satisfaction and loyalty.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="offer-card">
              <div className="offer-card-icon">
                <Image src={offer4} alt="marketing" />
              </div>
              <div className="card-text">
                <h4>Scalable Growth</h4>
                <p>
                  Our Keap implementations are designed to grow with your
                  business, easily adapting to new requirements and expanding
                  capabilities as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeapOffer;
