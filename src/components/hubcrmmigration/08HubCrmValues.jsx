import React from "react";
import Image from "next/image";
import Target1 from "../../../public/images/crmmigrationimages/crm-manage1.webp";
import Target2 from "../../../public/images/crmmigrationimages/crm-manage2.webp";
import Target3 from "../../../public/images/crmmigrationimages/crm-manage3.webp";
import Target4 from "../../../public/images/crmmigrationimages/crm-manage4.webp";

const HubCrmValues = () => {
  return (
    <>
      <seciton className="businesslocal-service hub-crm-values py-5 position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-5 col-xs-12 heading-main">
              <h2>
                Why Migrate to <span>HubSpot CRM?</span>
              </h2>
              <p>
                HubSpot CRM offers an all-in-one solution to manage customer
                relationships, automate processes, and drive sales growth.
                Here’s why businesses are making the switch:
              </p>
            </div>
            <div className="col-sm-7 col-xs-12 content">
              <div className="row">
                <div className="col-sm-6 col-xs-12 mb-4">
                  <div className="card p-3 py-4">
                    <Image src={Target1} alt="Centralized Data Management" />
                    <h3 className="mb-3">Centralized Data Management</h3>
                    <p>
                      Centralization simplifies data access and management,
                      ensuring that your teams can collaborate efficiently and
                      deliver a consistent customer experience.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12 mb-4">
                  <div className="card p-3 py-4">
                    <Image src={Target2} alt="Enhanced Automation" />
                    <h3 className="mb-3">Enhanced Automation</h3>
                    <p>
                      From automating email sequences and lead nurturing
                      workflows to managing follow-ups and task assignments,
                      HubSpot streamlines your processes with minimal manual
                      intervention.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12 mb-4">
                  <div className="card p-3 py-4">
                    <Image src={Target3} alt="Better Insights" />
                    <h3 className="mb-3">Better Insights</h3>
                    <p>
                      Hubspot CRM offers customizable dashboards that track key
                      metrics such as sales performance, marketing
                      effectiveness, and customer engagement.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12 mb-4">
                  <div className="card p-3 py-4">
                    <Image src={Target4} alt="Scalability" />
                    <h3 className="mb-3">Scalability</h3>
                    <p>
                      HubSpot provides flexible features and pricing tiers that
                      accommodate businesses of all sizes. As your organization
                      expands, you can add more tools, integrations, and users
                      without disruption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </seciton>
    </>
  );
};

export default HubCrmValues;
