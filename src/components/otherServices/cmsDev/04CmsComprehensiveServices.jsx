import Image from "next/image";

import userfriendly from "../../../../public/images/drupalimg/user-friendly.svg"
import scalability from "../../../../public/images/drupalimg/scalability.svg"
import analytics from "../../../../public/images/drupalimg/analytics.svg"
import efficiency from "../../../../public/images/drupalimg/efficiency.svg"
import seo from "../../../../public/images/drupalimg/seo.svg"
import security from "../../../../public/images/drupalimg/security.svg"

const drupalComprehensiveServices = [
  {
    image:userfriendly,
    title: "User-Friendly Interface",
    description: "Our CMS solutions are designed with simplicity in mind, providing a user-friendly interface that is easy to navigate and manage, even for those without technical expertise.",
    alt:"User-Friendly Interface Icon"
  },
  {
    image:scalability,
    title: "Scalability",
    description: "As your business grows, your website needs to be able to scale with it. Our CMS solutions are designed to be highly scalable, allowing you to easily expand your platform without the need for extensive reworks. ",
    alt:"Scalability Icon"
  },
  {
    image:security,
    title: "Security Features",
    description: "We employ advanced security technologies, regular updates, and best practices to safeguard your content and information from unauthorized access, hacking attempts, and other online threats.",
    alt:"Security Features Icon"
  },
  {
    image:seo,
    title: "SEO Optimization",
    description: "Our CMS platforms are equipped with built-in SEO features that help you optimize your content for search engines, such as meta tag management, URL optimization, and sitemap generation.",
    alt:"SEO Optimization Icon"
  },
  {
    image:efficiency,
    title: "Cost Efficiency",
    description: "By automating tasks, improving workflows, and minimizing maintenance requirements, you can focus on growing your business while controlling your expenses.",
    alt:"Cost Efficiency Icon"
  },
  {
    image:analytics,
    title: "Analytics and Reporting",
    description: "Our intuitive reporting tools provide clear and actionable insights that help you identify areas for improvement and measure the success of your CMS initiatives.",
    alt:"Analytics and Reporting Icon"
  },
];

const CmsComprehensiveServices = () => {
  return (
    <>
      <section className="comprhsvprt py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading-main text-center">
                <h2>
                Why Opt for CMS <span>Development Services</span>
                </h2>
                <span className="d-inline-block mb-3">
                Enhance user experience, improve collaboration, and reduce operational costs.
                </span>
              </div>

              <div className="cmssct">
                {drupalComprehensiveServices.map((service, index) => (
                  <div className="cmssctinr" key={index}>
                    <div className="cmslimg">
                      <Image src={service.image} className="img-fluid" alt={service.alt} />
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

export default CmsComprehensiveServices;
