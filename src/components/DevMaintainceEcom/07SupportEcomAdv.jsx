import React from "react";
import maint from "../../../public/images/ecommercemainteimg/maint.png";
import client1 from "../../../public/images/ecommercemainteimg/maintain-grow-1.webp";
import client2 from "../../../public/images/ecommercemainteimg/maintain-grow-2.webp";
import client3 from "../../../public/images/ecommercemainteimg/maintain-grow-3.webp";
import client4 from "../../../public/images/ecommercemainteimg/maintain-grow-4.webp";
import client5 from "../../../public/images/ecommercemainteimg/maintain-grow-5.webp";
import client6 from "../../../public/images/ecommercemainteimg/maintain-grow-6.webp";
import Image from "next/image";

const benefitsData = [
  {
    image: client1,
    title: "Enhanced Website Performance",
    alt:"Website Performance Icon",
    description:
      "A fast, smooth, and responsive website is critical for retaining customers and driving conversions. Regular maintenance ensures optimal speed, reliable functionality, and up-to-date features, enabling your website to handle heavy traffic seamlessly. By optimizing backend processes and resolving technical bottlenecks, we help deliver a superior shopping experience to your users.",
  },
  {
    image: client2,
    title: "Better Customer Experience",
    alt:"Customer ExperienceIcon",
    description:
      "A well-maintained website delivers an intuitive and enjoyable experience for your customers. From ensuring smooth navigation to fixing bugs in the checkout process, regular maintenance helps remove barriers to a seamless shopping journey. Satisfied customers are more likely to return, boosting loyalty and driving long-term growth.",
  },
  {
    image: client3,
    title: "Increased Security and Reduced Risks",
    alt:"Security and Reduced Risks Icon",
    description:
      "Cybersecurity threats can pose significant risks to your eCommerce business. Regular updates, security patches, and proactive monitoring safeguard your website from vulnerabilities and potential attacks. By implementing robust security protocols, we protect sensitive customer information and build trust in your brand.",
  },
  {
    image: client4,
    title: "Higher Search Engine Rankings",
    alt:"Search Engine Rankings Icon",
    description:
      "Search engines favor websites that are fast, secure, and provide valuable content. Regular maintenance enhances your website's performance, updates metadata, and resolves issues that could negatively impact your SEO. This proactive approach improves your visibility, attracts more traffic, and increases your chances of converting visitors into buyers.",
  },
  {
    image: client5,
    title: "Minimized Downtime",
    alt:"Minimized Downtime Icon",
    description:
      "Even a few minutes of downtime can result in lost revenue and frustrated customers. Regular support and maintenance services help prevent unexpected outages by identifying and addressing issues early. With 24/7 monitoring and quick resolutions, we keep your eCommerce store accessible at all times.",
  },
  {
    image: client6,
    title: "Scalable Solutions for Future Growth",
    alt:"Scalable Solutions Icon",
    description:
      "As your business evolves, so do its needs. Scalable support and maintenance solutions ensure your website can adapt to increased traffic, new features, and changing market trends. We provide the flexibility to grow your eCommerce platform in alignment with your long-term goals, ensuring sustained success.",
  },
];

const SupportEcomAdv = () => {
  return (
    <div className="maintenacechoosing py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12 heading-main">
            <h2 className="mb-3">
              Benefits of eCommerce{" "}
              <span> Website Support and Maintenance </span>
            </h2>
            <p className="mb-5">
              Investing in regular eCommerce website support and maintenance is
              essential to the long-term success of your online business. It
              ensures that your website functions seamlessly and stays protected
              from security threats. Furthermore, it enhances user experience
              and improves visibility on search engines. Here are some benefits
              of having expert support and maintenance services by your side:
            </p>
            <Image src={maint} alt="eCommerce Maintenance Services" />
          </div>
          <div className="col-lg-7 col-12 mt-5 mt-lg-0">
            <div className="row chooseing">
              {benefitsData.map((benefit, index) => (
                <div className="col-lg-6 col-12 mb-4" key={index}>
                  <div className="feature-text left-icon">
                    <div className="feature-icon">
                      <Image src={benefit.image} alt={benefit.alt} />
                    </div>
                    <div className="feature-info">
                      <h4>
                        <strong>{benefit.title}</strong>
                      </h4>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportEcomAdv;
