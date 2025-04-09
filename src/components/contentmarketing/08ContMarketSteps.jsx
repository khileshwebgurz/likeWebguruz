import Image from "next/image";
import Drpl from "../../../public/images/contentmarketingimg/marketing-process.svg";

// Array to store Drupal solution data
const drupalSolutions = [
  {
    number: "1",
    title: "Discovery & Research",
    description:
      "We start by understanding your brand, goals, and target audience through in-depth research.",
  },
  {
    number: "2",
    title: "Strategy Development",
    description:
      "Based on our findings, we create a tailored content strategy with clear goals and timelines.",
  },
  {
    number: "3",
    title: "Content Creation",
    description:
      "Our expert team crafts high-quality, SEO-friendly content that aligns with your brand’s voice.",
  },
  {
    number: "4",
    title: "Review & Optimization",
    description:
      "We continuously monitor performance and refine the content to ensure maximum engagement and conversion.",
  },
];

const ContMarketSteps = () => {
  return (
    <>
      <section className="drplscl1 content-msrketing-steps py-5 position-relative">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading-main text-center">
                <h2>
                  Our <span>Process</span>
                </h2>
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

export default ContMarketSteps;
