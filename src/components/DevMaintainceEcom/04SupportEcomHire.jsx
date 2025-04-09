const SupportEcomHire = () => {
  const reasons = [
    {
      number: "01",
      title: "Expertise in Leading eCommerce Platforms",
      description:
        "Our team is well-versed in all major eCommerce platforms, including Shopify, Magento, WooCommerce, BigCommerce, and more. Whether it’s advanced customizations, integrations, or updates, our expertise helps you stay ahead of the competition. Trust us to provide platform-specific solutions tailored to your business needs.",
    },
    {
      number: "02",
      title: "Proactive Issue Resolution",
      description:
        "Our proactive approach ensures potential problems are identified and resolved before they impact your business. From monitoring vulnerabilities to conducting routine audits, we stay ahead of the curve to keep your website secure and operational. With our proactive support, you can avoid costly disruptions and maintain customer trust.",
    },
    {
      number: "03",
      title: "Round-the-clock Support and Monitoring",
      description:
        "Downtime or website issues can strike at any time, but our 24/7 support and monitoring ensure your business never skips a beat. With us on your side, you can rest assured knowing your eCommerce store is always running smoothly, providing an uninterrupted shopping experience for your customers.",
    },
    {
      number: "04",
      title: "Cost-Effective Services That Ensure Maximum ROI",
      description:
        "Our services are designed to deliver maximum value by optimizing performance, reducing downtime, and preventing costly issues. With transparent pricing and measurable results, we help you achieve a higher return on investment while keeping your operational costs under control.",
    },
    {
      number: "05",
      title: "Tailored Solutions to Meet Your Unique Business Needs",
      description:
        "Every eCommerce business is different, and so are its requirements. That’s why we offer customized support and maintenance services designed to fit your specific goals and challenges. Whether you need ongoing content updates, performance enhancements, or specialized integrations, our team will create a plan that works exclusively for you.",
    },
    {
      number: "06",
      title: "Scalability to Adapt to Your Growing Business",
      description:
        "As your eCommerce business grows, your website needs to evolve with it. Our scalable solutions ensure your platform is equipped to handle increased traffic, new features, and changing customer demands. From infrastructure upgrades to performance optimization, we help your website scale seamlessly. With our support, you’ll always be prepared to meet the demands of a growing business.",
    },
  ];

  return (
    <div className="Hireecommerce py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-3">
              Why Hire eCommerce Website Support{" "}
              <span>and Maintenance Experts? </span>
            </h2>
            <p>
              Outsourcing your website’s support and maintenance to seasoned
              professionals ensures reliability, security, and enhanced
              performance. At WebGuruz, we bring years of expertise and
              cutting-edge solutions to keep your online store ahead of the
              curve.
            </p>
          </div>
          {reasons.map((reason, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="hire-experts-card">
                <div className="expert-number">
                  <span>{reason.number}</span>
                </div>
                <div className="hire-description">
                  <h4>{reason.title}</h4>
                  <p>{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportEcomHire;
