import Image from "next/image";
import promintimg from "../../../../public/images/drupalimg/prmnt.webp";

// Array for features of the Drupal web development partner
const features = [
  {
    title: "WordPress",
    description:
      "The world's leading CMS, perfect for blogs, business sites, and portfolios. It offers an extensive library of plugins and themes, ensuring flexibility and customization for any project.",
  },
  {
    title: "Joomla",
    description:
      "A versatile CMS that strikes a balance between user-friendliness and complexity, Joomla is perfect for social networking sites and e-commerce applications, offering extensive customization options.",
  },
  {
    title: "Magento",
    description:
      "An ideal choice for eCommerce solutions, Magento provides robust features and scalability, enabling businesses to create a powerful online store that can grow with their needs.",
  },
  {
    title: "Drupal",
    description:
      "Known for its flexibility and security, Drupal is excellent for large-scale, complex websites. It supports multiple users and roles, making it ideal for enterprise-level content management.",
  },
];

function ProminentPrtnr() {
  return (
    <section className="prminentprt py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h2>
                Our <span>Technology Stack</span>
              </h2>
              <span className="d-inline-block mb-4">
                At WebGuruz, we utilize a diverse tech stack to deliver
                exceptional <strong>CMS development services</strong>.
                <br />
                Our expertise spans popular platforms such as:
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
                    alt="Prominent Drupal Partner"
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

export default ProminentPrtnr;
