import React from "react";
import choose from "../../../public/images/ecommerceconstimg/consult-company.webp";
import icon1 from "../../../public/images/ecommerceconstimg/consult-rate-1.webp";
import icon2 from "../../../public/images/ecommerceconstimg/consult-rate-2.webp";
import icon3 from "../../../public/images/ecommerceconstimg/consult-rate-3.webp";
import icon4 from "../../../public/images/ecommerceconstimg/consult-rate-4.webp";
import icon5 from "../../../public/images/ecommerceconstimg/consult-rate-5.webp";
import Image from "next/image";
const DevEcomConsultAdv = () => {
  return (
    <div className="Ecomchoosing-sec py-5">
      <div className="container">
        <div className="row">
          <div className=" col-lg-9 mx-auto col-12 heading-main text-center mb-5">
            <h2 className="mb-3">
              Benefits of Hiring an eCommerce{" "}
              <span> Consulting Services Company</span>
            </h2>
            <p>
              Hiring an expert consulting firm ensures that you have the right
              resources and strategies in place to optimize your eCommerce
              performance.
            </p>
          </div>
        </div>
        <div className="row choose-row">
          <div className="col-lg-6 col-12">
            <div className="choose-img mb-5">
              <Image src={choose} alt="eCommerce Consulting Services Company" />
            </div>
      
          </div>
          <div className="col-lg-6 col-12">
            <div className="row two-row">
              <div className="col-12">
                <div className="choosing-text-img">
                  <div className="choose-icon">
                    <Image src={icon2} alt="Cost Efficiency Icon" />
                  </div>
                  <div className="choosing-text">
                    <h4>Cost Efficiency</h4>
                    <p>
                      Our expertise helps you make well-informed decisions on
                      platform selection, technology integration, and marketing
                      strategies. We streamline your processes, eliminating
                      unnecessary expenses and allocating resources efficiently,
                      ensuring that your investments directly contribute to your
                      business’s growth and success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="choosing-text-img">
                  <div className="choose-icon">
                    <Image src={icon3} alt="Scalability Icon" />
                  </div>
                  <div className="choosing-text">
                    <h4>Scalability</h4>
                    <p>
                      Our consultants design and implement scalable solutions
                      that adapt to your needs, whether it’s managing a larger
                      inventory, handling increased website traffic, or
                      integrating new sales channels. With a strong and flexible
                      foundation in place, you can confidently pursue growth
                      opportunities without worrying about technical limitations
                      or operational bottlenecks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="choosing-text-img">
                  <div className="choose-icon">
                    <Image src={icon4} alt="Reduced Risk Icon" />
                  </div>
                  <div className="choosing-text">
                    <h4>Reduced Risk</h4>
                    <p>
                      With our guidance, you can navigate these challenges
                      effectively while minimizing risks. We help you anticipate
                      obstacles, develop contingency plans, and ensure that your
                      operations run smoothly, allowing you to focus on growing
                      your business without unnecessary disruptions.
                    </p>
                  </div>
                </div>
              </div>
        
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-6 col-12">
              <div className="choosing-text-img left-text">
                <div className="choose-icon">
                  <Image src={icon1} alt="Maximized ROI Icon" />
                </div>
                <div className="choosing-text">
                  <h4>Maximized ROI</h4>
                  <p>
                    From refining product pages and enhancing user experience to
                    implementing targeted marketing campaigns, we focus on
                    strategies that lead to measurable outcomes. By increasing
                    your conversion rates, improving customer retention, and
                    reducing acquisition costs, we help drive higher revenue
                    while maximizing the return on every dollar you invest in
                    your business.
                  </p>
                </div>
              </div>
            </div>
        <div className=" col-lg-6 col-12">
                <div className="choosing-text-img">
                  <div className="choose-icon">
                    <Image src={icon5} alt="Strategic Direction Icon" />
                  </div>
                  <div className="choosing-text">
                    <h4>Strategic Direction</h4>
                    <p>
                      Our consultants provide you with the strategic guidance
                      you need to align your business goals with actionable
                      steps. We help you prioritize initiatives, set measurable
                      objectives, and develop a roadmap that keeps you on track.
                      By providing clarity and direction, we empower you to make
                      confident decisions and achieve sustained success in the
                      competitive eCommerce marketplace.
                    </p>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default DevEcomConsultAdv;
