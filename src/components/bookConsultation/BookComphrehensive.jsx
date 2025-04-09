import Image from "next/image";

import userfriendly from "/public/images/drupalimg/user-friendly.svg";
import scalability from "/public/images/drupalimg/scalability.svg";
import analytics from "/public/images/drupalimg/analytics.svg";
import efficiency from "/public/images/drupalimg/efficiency.svg";
import seo from "/public/images/drupalimg/seo.svg";
import security from "/public/images/drupalimg/security.svg";

// Array to store comprehensive service data
const drupalComprehensiveServices = [
  {
    image: userfriendly,
    title: "Improve Online Visibility",
    description:
      "With targeted SEO and content strategies, we boost your brand's presence in search engines, making it easier for customers to find you.",
    alt: "User-Friendly Interface Icon",
  },
  {
    image: scalability,
    title: "Increase Lead Generation",
    description:
      "Our data-driven campaigns are crafted to attract and convert high-quality leads that have the potential to become loyal customers.",
    alt: "Scalability Icon",
  },
  {
    image: security,
    title: "Optimize User Experience",
    description:
      "A website designed for ease of use keeps visitors engaged, leading to more conversions and happier customers.",
    alt: "Security Features Icon",
  },
  {
    image: seo,
    title: "Boost Engagement",
    description:
      "Our social media and content marketing services increase engagement, helping you foster stronger relationships with your audience.",
    alt: "SEO Optimization Icon",
  },
  {
    image: efficiency,
    title: "Enhance Brand Credibility",
    description:
      "We build and maintain a professional digital presence that establishes your brand as trustworthy and reliable in your industry.",
    alt: "Cost Efficiency Icon",
  },
  {
    image: analytics,
    title: "Drive Long-Term Growth",
    description:
      "Our solutions don’t just offer short-term gains; we focus on creating strategies that deliver sustainable results for lasting growth.",
    alt: "Analytics and Reporting Icon",
  },
];

const BookComphrehensive = () => {
  return (
    <>
      <section className="comprhsvprt py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading-main text-center">
                <h2>
                  <span>Drive Your Business Forward </span> with Our Proven
                  Solutions
                </h2>
                <span className="d-inline-block mb-3">
                  Our customized digital solutions set you on the path to growth
                  by leveraging the power of the latest tools and tactics.
                </span>
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

export default BookComphrehensive;
