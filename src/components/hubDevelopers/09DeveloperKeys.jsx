import React from "react";

const skills = [
  "In-depth knowledge of HubSpot CMS & CRM",
  "Expertise in HubSpot API integrations",
  "Advanced marketing automation skills",
  "Custom module development",
  "Responsive web design",
  "Data migration and syncing",
  "SEO optimization within HubSpot",
  "Analytics and Reporting",
];

const DeveloperKeys = () => {
  return (
    <div className="developer-key-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-3 mb-md-4">
            <h2>
            Key Skills Possessed by Our Certified 
              <br />
              <span>HubSpot CRM Developers</span>
            </h2>
          </div>
        </div>
        <div className="row keyskill">
          <div className="col-md-9 col-12 mx-md-auto">
            <ul className="key-list">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperKeys;
