import React from "react";

const WixProcess = () => {
  const googleAdsServices = [
    {
      title: "Understanding Requirements",
      description:
        "We begin by conducting an in-depth discussion to understand your business objectives, target audience, and website functionality needs. Our team carefully analyzes your requirements to create a strategic roadmap that aligns with your goals and ensures a seamless development process.",
    },
    {
      title: "SEO & Performance Optimization",
      description:
        "A beautiful website is ineffective without visibility and speed. We optimize your site for search engines by implementing on-page SEO strategies, improving page load times, and ensuring mobile responsiveness. Our goal is to help your website rank higher in search results and provide users with a seamless browsing experience.",
    },
    {
      title: "Wireframing & Design",
      description:
        "Once we have a clear understanding of your needs, we create detailed wireframes and design mockups that serve as a visual blueprint for your website. Our designers focus on user experience, branding consistency, and modern aesthetics to craft a design that is both visually appealing and highly functional.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Before launching your website, we conduct rigorous testing to identify and resolve any bugs, glitches, or usability issues. We ensure that your website functions smoothly across different devices and browsers, providing a flawless experience for every visitor.",
    },
    {
      title: "Development & Customization",
      description:
        "After finalizing the design, our expert developers bring your vision to life by coding and implementing custom features. Whether you need eCommerce functionality, interactive elements, or third-party integrations, we tailor your Wix website to meet your specific business needs while maintaining a smooth user experience.",
    },
    {
      title: "Launch & Support",
      description:
        "Once everything is tested and approved, we deploy your website, making it live for your audience. Our support doesn’t end there- we offer ongoing maintenance, updates, and technical assistance to ensure your website remains up-to-date, secure, and optimized for continued success.",
    },
  ];

  return (
    <div className="wix-development-process py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
            Our  <span> Wix Development Process</span>
            </h2>
            
          </div>
          {googleAdsServices.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
              <div className="google-card">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WixProcess;
