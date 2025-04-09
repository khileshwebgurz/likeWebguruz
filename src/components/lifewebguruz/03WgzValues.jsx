import Image from "next/image";
import promintimg from "../../../public/images/lifewebguruzimages/values-life.webp";

// Array for features of the Drupal web development partner
const features = [
  {
    title: "Excellence",
    description:
      "We strive for the highest standards in all aspects of our work, ensuring quality and precision in every project, task, and interaction.",
  },
  {
    title: "Innovation",
    description:
      "We prioritize creative problem-solving and innovation, always looking for new ways to improve processes, technologies, and solutions for our clients.",
  },
  {
    title: "Customer-Centricity",
    description:
      "Our clients are our top priority. We listen, understand their needs, and tailor solutions to help them achieve their business objectives.",
  },
  {
    title: "Sustainability",
    description:
      "We are dedicated to promoting sustainable practices, both within our operations and through the solutions we provide, to ensure a positive impact on the environment and society.",
  },
  {
    title: "Integrity",
    description:
      "Honesty and transparency are at the core of our interactions with clients, employees, and stakeholders, ensuring trust and long-lasting relationships.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, where open communication and mutual respect allow us to achieve collective goals and deliver optimal results.",
  },    
];

function WgzValues() {
  return (
    <section className="prminentprt webguruz-values py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h2>
                Our <span> Values</span>
              </h2>
              <span className="d-inline-block mb-4">
                At WebGuruz, our values define the way we work, interact, and
                approach challenges. These core
                <br /> values guide our everyday actions and decisions, forming
                the foundation for how we operate as a team and deliver value to
                our clients.
              </span>
            </div>

            <div className="hquality new-life-points d-flex flex-wrap">
              <div className="hqualitinr ctnt">
                <div className="hqlt">
                  {features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="hqltinr">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hqualitinr new-life-image imgc">
                <div className="prmntmg">
                  <Image
                    src={promintimg}
                    className="img-fluid"
                    alt="WebGuruz Core Values"
                  />
                </div>
              </div>

              <div className="hqualitinr ctnt">
                <div className="hqlt">
                  {features.slice(3).map((feature, index) => (
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

export default WgzValues;
