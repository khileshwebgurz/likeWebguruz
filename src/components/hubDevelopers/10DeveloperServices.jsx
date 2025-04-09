import Image from "next/image";
import optimized1 from "../../../public/images/hubspot-developer-img/develop-point1.webp";
import optimized2 from "../../../public/images/hubspot-developer-img/develop-point2.webp";
import optimized3 from "../../../public/images/hubspot-developer-img/develop-point3.webp";
import optimized4 from "../../../public/images/hubspot-developer-img/develop-point4.webp";
const DeveloperServices = () => {
  return (
    <>
      <section className="digital-marketing hub-developer-services py-5 vector-digital">
        <div className="container">
          <div className="row bg-white">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
                Why Choose HubSpot Developers <br />
                <span>at WebGuruz?</span>
              </h2>
              <p>
                Being a certified Hubspot agency, WebGuruz combines technical
                expertise with a customer-first approach to deliver top-tier
                HubSpot solutions.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="card-content d-flex align-items-center ">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Client-Centric Focus</h3>
                <p>
                  We prioritize your business needs and tailor our solutions
                  accordingly.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={optimized1}
                  alt="Client-Centric Focus"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center  py-5">
            <div className="card-content reverse d-flex align-items-center ">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Certified Team</h3>
                <p>
                  Our developers hold multiple certifications, ensuring quality
                  outcomes.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={optimized2}
                  alt="Certified Team"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
          <div className="row  py-5">
            <div className="card-content d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Proven Track Record</h3>
                <p>Hundreds of successful projects highlight our excellence.</p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={optimized3}
                  alt="Proven Track Record"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
          <div className="row   py-5">
            <div className="card-content reverse d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Transparent Communication</h3>
                <p>
                  We maintain clear and consistent communication throughout the
                  project.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={optimized4}
                  alt="Transparent Communication"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeveloperServices;
