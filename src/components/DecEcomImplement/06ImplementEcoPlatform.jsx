import React from "react";

const platformData = [
  {
    items: [
      { label: "Analytics", tools: "Google Analytics, Mixpanel, Kissmetrics" },
      { label: "CDN", tools: "Cloudflare, Akamai, Amazon CloudFront" },
      { label: "CMS", tools: "WordPress, Drupal, Joomla" },
      {
        label: "Search",
        tools:
          "Oracle Endeca, SOLR, ElasticSearch, Lucid Works, BloomReach, Reflektion, constructor.io",
      },
      { label: "Data", tools: "BigQuery, MongoDB, MySQL" },
      { label: "Email", tools: "Mailchimp, Constant Contact, SendGrid" },
      { label: "Reviews", tools: "Bazaarvoice, Power Reviews, Yotpo" },
      { label: "Subscription", tools: "Oracle Subscription Cloud" },
    ],
  },
  {
    items: [
      {
        label: "Product Information Management (PIM)",
        tools: "Salsify, Heiler (Informatica)",
      },
      { label: "ERP", tools: "SAP, Oracle, Microsoft Dynamics" },
      {
        label: "Address Validation",
        tools: "SmartyStreets, AddressDoctor, Melissa Data",
      },
      {
        label: "Identity Management",
        tools: "Okta, OneLogin, Auth0",
      },
      {
        label: "Internationalization",
        tools: "Transifex, Lokalise, Smartling",
      },
      {
        label: "Loyalty Programs",
        tools: "Yotpo, Smile.io, LoyaltyLion",
      },
      { label: "Tax", tools: "Avalara" },
      {
        label: "Product Recommendations",
        tools: "Oracle Endeca, Reflektion, Certona, Criteo",
      },
    ],
  },
  {
    items: [
      {
        label: "Order Management System",
        tools: "IBM Sterling, OrderDynamics, Kibo Commerce",
      },
      {
        label: "Payment",
        tools:
          "Worldpay, AmazonPay, PayPal, Apple Pay, Masterpass, Visa Checkout, CyberSource, Eigen, Ayden, Card Connect, MoIP, Forte, GetFinancing, PayU, Stripe, Cielo, MundiPagg",
      },
      { label: "Marketplace", tools: "Google Shopping" },
      {
        label: "Order Fulfillment",
        tools: "Microsoft Order Dynamics, Oracle EBS",
      },
      { label: "Personalization", tools: "Reflektion, SmartHQ" },
    ],
  },
];

const ImplementEcoPlatform = () => {
  return (
    <div className="Commerce-intigration py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span> Commerce Platform </span> Integrations
            </h2>
          </div>
          {platformData.map((platform, index) => (
            <div key={index} className="col-md-4 col-12">
              <div className="commerce-list">
                <ul>
                  {platform.items.map((item, i) => (
                    <li key={i}>
                      <strong>{item.label}:</strong> {item.tools}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImplementEcoPlatform;
