import Image from "next/image";
import Drpl from "../../../../public/images/drupalimg/cmsdevsol.webp";

// Array to store Drupal solution data
const drupalSolutions = [
  {
    number: "1",
    title: "Resource Planning",
    description:
      "Assessing your needs to allocate the right resources for a successful project.",
  },
  {
    number: "2",
    title: "Cost Estimation",
    description:
      "Providing transparent and competitive pricing based on project scope and requirements.",
  },
  {
    number: "3",
    title: "UX/UI Design",
    description:
      "Crafting intuitive and aesthetically pleasing designs to enhance user engagement.",
  },
  {
    number: "4",
    title: "Execution & Support",
    description:
      "Delivering the final product along with comprehensive support for smooth operation.",
  },
];

const CmsWebSolution = () => {
  return (
    <>
      <section className="drplscl1 py-5 position-relative">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading-main text-center">
                <h2>
                  Our Development <span>Practices</span>
                </h2>
                <span className="mb-2 d-inline-block">
                  We follow a structured approach to CMS Development
                </span>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="ddrpl">
                <Image
                  src={Drpl}
                  className="img-fluid"
                  alt="CMS Development Practices"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="cmsrgt right">
                {drupalSolutions.map((solution, index) => (
                  <div className="cmsrgtinr left" key={index}>
                    <div className="cmsnmbr">
                      <span className="nmbr">{solution.number}</span>
                    </div>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
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

export default CmsWebSolution;
