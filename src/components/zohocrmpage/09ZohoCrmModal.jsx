import React from "react";
import Image from "next/image";
import model1 from "../../../public/images/zohocrmimages/zoho-project-1.svg";
import model2 from "../../../public/images/zohocrmimages/zoho-project-2.svg";
const ZohoCrmModel = () => {
  return (
    <div className="zohomodel-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-2">
              Our Engagement <span> Models</span>
            </h2>
            <p>
              At WebGuruz Technologies, we understand that different businesses
              have unique needs and budgets. That&apos;s why we offer flexible
              engagement models to ensure you get the right level of Zoho CRM
              Plus implementation and consulting without unnecessary expenses.
              Whether you need on-demand support or a comprehensive CRM
              transformation, we have a model that fits your business.
            </p>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <div className="model-card">
              <div className="model-img">
                <Image src={model1} alt="model" />
              </div>
              <h3>Pay-as-You-Go</h3>
              <p>
                This model is ideal for businesses that require ad-hoc Zoho CRM
                support, troubleshooting, and consulting without committing to a
                long-term contract. You pay only for the services you use,
                making it a cost-effective and scalable option for startups,
                small businesses, or companies needing occasional CRM
                assistance. The key benefits of this model include flexible
                pricing based on usage, no long-term commitment, and on-demand
                support for quick fixes, CRM audits, and minor enhancements.
                Additionally, it provides a scalable solution that grows with
                your business needs.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 ">
            <div className="model-card">
              <div className="model-img">
                <Image src={model2} alt="model" />
              </div>
              <h3>Project-Based Engagement</h3>
              <p>
                Designed for companies seeking a full-scale Zoho CRM Plus
                implementation, customization, and optimization, this model
                follows a fixed-price structure with a clearly defined scope and
                timeline. Our team handles end-to-end CRM implementation,
                integrations, data migration, automation, and training, ensuring
                a seamless transition. The benefits of this model include a
                transparent project scope and deliverables, a custom-tailored
                CRM setup, and a dedicated team working on your project with a
                one-time investment. Additionally, we provide comprehensive
                post-implementation training and support to ensure successful
                adoption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZohoCrmModel;
