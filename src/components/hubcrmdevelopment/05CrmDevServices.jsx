import Image from "next/image";

import userfriendly from "../../../public/images/hubspotcmsdevimg/cms-dev-service1.webp";
import scalability from "../../../public/images/hubspotcmsdevimg/cms-dev-service2.webp";
import analytics from "../../../public/images/hubspotcmsdevimg/cms-dev-service6.webp";
import efficiency from "../../../public/images/hubspotcmsdevimg/cms-dev-service5.webp";
import seo from "../../../public/images/hubspotcmsdevimg/cms-dev-service4.webp";
import security from "../../../public/images/hubspotcmsdevimg/cms-dev-service3.webp";

const drupalComprehensiveServices = [
  {
    image: userfriendly,
    title: "Custom HubSpot CMS Website Design",
    description:
      "We create visually stunning, user-friendly websites that are fully optimized for performance and user experience. Our custom designs ensure your brand stands out while offering a seamless navigation experience.",
    alt: "Custom HubSpot CMS Website Design Icon",
  },
  {
    image: scalability,
    title: "HubSpot CMS Migration",
    description:
      "Migrate your website from any platform to HubSpot with minimal downtime and no data loss. We handle every detail of the migration, ensuring a smooth transition.",
    alt: "HubSpot CMS Migration Icon",
  },
  {
    image: security,
    title: "HubSpot CMS Training & Support",
    description:
      "After launch, we provide training to your team to ensure they can manage and update your website independently. Our ongoing support ensures your site stays up-to-date and functions smoothly.",
    alt: "HubSpot CMS Training & Support Icon",
  },
  {
    image: seo,
    title: "HubSpot CMS Implementation & Integration",
    description:
      "We integrate HubSpot CMS with your existing marketing stack, ensuring that all tools work harmoniously to boost performance and streamline processes.",
    alt: "HubSpot CMS Implementation Icon",
  },
  {
    image: efficiency,
    title: "SEO Optimization for HubSpot CMS",
    description:
      "We enhance your website's SEO with proven strategies that improve your rankings and drive organic traffic. Our team ensures your HubSpot CMS is fully optimized for search engines.",
    alt: "SEO Optimization for HubSpot CMS Icon",
  },
  {
    image: analytics,
    title: "HubSpot CMS Maintenance & Updates",
    description:
      "We offer regular maintenance and updates to ensure your website is running optimally, protected from security vulnerabilities, and fully aligned with your business objectives.",
    alt: "HubSpot CMS Maintenance Icon",
  },
];

const CmsDevServices = () => {
  return (
    <>
      <section className="comprhsvprt cms-dev-services py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading-main text-center">
                <h2>
                  <span>HubSpot CMS Development </span> Services We Offer
                </h2>
              </div>

              <div className="cmssct">
                {drupalComprehensiveServices.map((service, index) => (
                  <div className="cmssctinr" key={index}>
                    <div className="cmslimg">
                      <Image
                        src={service.image}
                        className="img-fluid"
                        alt={service.alt}
                      />
                    </div>
                    <div className="cmslcnt">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmsDevServices;
