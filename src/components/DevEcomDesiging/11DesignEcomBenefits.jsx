const DesignEcomBenefits = () => {
  const benefits = [
    {
      title: "Improved User Engagement",
      description:
        "A professionally designed eCommerce website ensures an intuitive and visually appealing experience for users. From easy navigation to interactive features, the design keeps visitors engaged and encourages them to explore your products or services further.",
      listItems: [
        "Intuitive Navigation",
        "Engaging Visuals",
        "Personalized User Journeys",
        "Interactive Features",
        "Seamless Browsing Across Devices",
        "Easy Search Functionality",
      ],
    },
    {
      title: "Enhanced Brand Visibility",
      description:
        "Expert designers ensure your website is aligned with your brand identity, creating a cohesive and memorable presence. Additionally, SEO-friendly design practices enhance your online visibility, attracting more organic traffic and building trust with your audience.",
      listItems: [
        "Brand Consistency",
        "Search Engine Optimization",
        "Strategic Use of Visual Branding",
        "Clear Messaging",
        "Social Media Integration",
        "Reputation Building",
      ],
    },
    {
      title: "Higher Conversion Rates",
      description:
        "A well-designed website prioritizes user experience, guiding visitors seamlessly through the sales funnel. Strategic placement of call-to-actions, optimized product pages, and secure checkout processes all contribute to converting visitors into loyal customers.",
      listItems: [
        "Action-Oriented CTAs",
        "Optimized Product Pages",
        "Streamlined Checkout",
        "Trust Signals",
        "Fast Load Times",
        "Mobile Responsiveness",
      ],
    },
    {
      title: "Access to Cutting-Edge Tools",
      description:
        "Professional design companies utilize the latest tools and technologies to create modern, feature-rich websites. From integrating AI-driven personalization to leveraging analytics tools, these solutions provide a competitive edge and enhance your site’s performance.",
      listItems: [
        "AI-Driven Recommendations",
        "Advanced Analytics Integration",
        "Interactive Chatbots",
        "Dynamic Pricing Tools",
        "Augmented Reality Features",
        "Marketing Automation",
      ],
    },
    {
      title: "Seamless Scalability",
      description:
        "As your business grows, your website needs to evolve. eCommerce design companies build scalable platforms that can accommodate increased traffic, expanding product catalogs, and new functionalities, ensuring long-term sustainability.",
      listItems: [
        "Cloud-Based Hosting",
        "Modular Architecture",
        "Expandable Product Catalogs",
        "Integration Capabilities",
        "Global Accessibility",
        "Performance Optimization",
      ],
    },
    {
      title: "Dedicated Support",
      description:
        "With ongoing technical support, professional designers ensure your website remains functional and updated. From troubleshooting issues to implementing updates and enhancements, their expertise helps you focus on running your business without worrying about technical hiccups.",
      listItems: [
        "24/7 Assistance",
        "Proactive Monitoring",
        "Regular Maintenance",
        "Custom Feature Upgrades",
        "Bug Fixes and Troubleshooting",
        "Training and Guidance",
      ],
    },
  ];

  return (
    <div className="Ourecommerce-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Benefits of Hiring an <span> eCommerce Web Design Company </span>
            </h2>
          </div>
          {benefits.map((benefit, index) => (
            <div key={index} className="col-md-6 col-12 mb-4">
              <div className="our-card">
                <div className="our-content">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
                <div className="our-list">
                  {benefit.listItems.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignEcomBenefits;
