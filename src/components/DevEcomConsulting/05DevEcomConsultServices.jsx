import Image from "next/image";
import promintimg from "../../../public/images/ecommerceconstimg/consult-servicz.webp";

// Array for features of the Drupal web development partner
const features = [
  {
    title: "Strategy Development",
    description:
      "Craft a comprehensive eCommerce strategy that aligns with your brand's goals and positions you for success.",
  },
  {
    title: "Customer Journey Optimization",
    description:
      "Enhance your customer experience from start to finish with expert advice on website design, navigation, and usability.",
  },
  {
    title: "Platform Selection & Integration",
    description:
      "Let us guide you in choosing the right eCommerce platform and integrating it seamlessly into your existing systems.",
  },
  {
    title: "Performance Analytics & Reporting",
    description:
      "We provide data-driven insights to improve your site’s performance and drive better decision-making.",
  },
];

function DevEcomConsultServices() {
  return (
    <section className="prminentprt ecommerce-consulting-services py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h2>
                Our <span> eCommerce Consulting Services</span>
              </h2>
              <span className="d-inline-block mb-4">
                Discover tailored eCommerce consulting solutions designed to
                optimize your business operations, enhance customer experiences,
                and drive measurable growth for long-term success.
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
                    alt="eCommerce Consulting Solutions"
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

export default DevEcomConsultServices;
