import React from "react";
import Image from "next/image";

// Service data
const services = [
  {
    src: "/images/whiteseoimg/white-seo-key-1.webp",
    alt: "Keyword Research Icon",
    title: "Keyword Research",
    description:
      "We conduct in-depth research to find the best keywords for your target audience. This ensures that your content is optimized & ranks higher on search engines.",
  },
  {
    src: "/images/whiteseoimg/white-seo-key-2.webp",
    alt: "Local SEO Icon",
    title: "Local SEO",
    description:
      "We optimize your business for local search results, helping you attract nearby customers who are more likely to convert.",
  },
  {
    src: "/images/whiteseoimg/white-seo-key-3.webp",
    alt: "On-Page SEO Icon",
    title: "On-Page SEO",
    description:
      "From optimizing content to improving website structure, we ensure that your website meets the latest SEO standards to improve ranking and user experience.",
  },
  {
    src: "/images/whiteseoimg/white-seo-key-4.webp",
    alt: "SEO Audits Icon",
    title: "SEO Audits",
    description:
      "We provide thorough SEO audits to identify areas for improvement and help you develop a strategy that enhances your site’s SEO performance.",
  },
  {
    src: "/images/whiteseoimg/white-seo-key-5.webp",
    alt: "Link Building Icon",
    title: "Link Building",
    description:
      "Our link-building strategies include securing high-quality backlinks to boost domain authority and enhance search engine rankings.",
  },
  {
    src: "/images/whiteseoimg/white-seo-key-6.webp",
    alt: "Content Marketing Icon",
    title: "Content Marketing",
    description:
      "Our content strategy ensures that your website offers high-quality, SEO-friendly content that attracts and retains customers.",
  },
  {
    src: "/images/whiteseoimg/white-seo-key-7.webp",
    alt: "Technical SEO Icon",
    title: "Technical SEO",
    description:
      "We address technical SEO issues such as website speed, mobile-friendliness, and crawl errors, which can affect your rankings and site performance.",
  },
  {
    src: "/images/whiteseoimg/white-seo-key-8.webp",
    alt: "Analytics and Reporting Icon",
    title: "Analytics & Reporting",
    description:
      "We provide regular reports to track the success of your SEO campaigns, offering insights on traffic, rankings, and conversions.",
  },
];

const WhiteSeoServices = () => {
  return (
    <div className="Webguruzservicess-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span>Comprehensive White Label SEO</span>
              <br /> Solutions Tailored for Your Business
            </h2>
            <p>
              Our White Label SEO services include a wide range of offerings
              designed to help businesses improve their online presence and
              achieve their digital marketing goals. We take care of the SEO
              work behind the scenes while you focus on growing your business.
              Whether you&apos;re looking to boost rankings, drive more traffic,
              or increase conversions, our services can be fully customized to
              meet your needs.
            </p>
          </div>
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-12 mb-4">
              <div className="webguruzseo-box">
                <div className="seo-icon-circle">
                  <Image
                    src={service.src}
                    alt={service.alt}
                    width={100}
                    height={100}
                  />
                </div>
                <h5>
                  {service.title.split(" ").map((word, idx) => (
                    <React.Fragment key={idx}>
                      {word}
                      {idx === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h5>

                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhiteSeoServices;
