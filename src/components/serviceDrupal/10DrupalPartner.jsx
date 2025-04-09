import Image from "next/image";
import promintimg from "/public/images/drupaldevimages/drupal-dev.webp";

// Array for features of the Drupal web development partner
const features = [
  {
    title: "Certified Drupal Experts with Proven Experience",
    description:
      "Our team consists of highly skilled and certified Drupal developers with years of experience in building dynamic and high-performing websites. We follow industry best practices to deliver robust and future-ready solutions.",
  },
  {
    title: "End-to-End Development & Continuous Support",
    description:
      "From initial consultation and development to deployment and ongoing maintenance, we offer a full-cycle Drupal development service. Our team ensures your website stays updated, secure, and optimized for long-term success.",
  },
  {
    title: "Tailored Solutions for Diverse Business Needs",
    description:
      "We understand that every business has unique requirements, which is why we craft custom Drupal solutions that align with your goals. Whether you need an enterprise portal, an eCommerce platform, or a content-driven website, we deliver precisely what your business needs.",
  },
  {
    title: "Competitive Pricing with Transparent Processes",
    description:
      "We believe in delivering high-quality solutions at cost-effective pricing, without hidden charges. Our transparent approach ensures you get the best value for your investment, making Drupal development both accessible and affordable for businesses of all sizes.",
  },
];

function DrupalPartner() {
  return (
    <section className="prminentprt drupal-partner py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h2 className="mb-2">
                We’re a Trusted <span>Drupal Development Company in India</span>
              </h2>
              <span className="d-inline-block mb-4">
                Being a leading Drupal Development Company, we are dedicated to
                providing cost-effective, reliable, and high-performing
                solutions that match your unique needs.
              </span>
            </div>

            <div className="hquality d-flex flex-wrap">
              <div className="hqualitinr ctnt">
                <div className="hqlt">
                  {features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="hqltinr">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hqualitinr imgc">
                <div className="prmntmg">
                  <Image
                    src={promintimg}
                    className="img-fluid"
                    alt="Drupal Icon"
                  />
                </div>
              </div>

              <div className="hqualitinr ctnt">
                <div className="hqlt">
                  {features.slice(2).map((feature, index) => (
                    <div key={index} className="hqltinr">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DrupalPartner;
