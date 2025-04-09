import Image from "next/image";
import servTeam from "/public/images/technicalimages/techprocess.webp";

const teamQualities = [
  {
    title: "Initial Website Audit",
    description:
      "We start by analyzing your website for technical issues that may be affecting performance and SEO rankings.",
  },
  {
    title: "Technical Fixes & Implementation",
    description:
      "From fixing broken links to improving page speed, our team implements the necessary technical solutions to improve your website’s functionality.",
  },
  {
    title: "Issue Identification & Prioritization",
    description:
      "We identify key issues that need immediate attention and prioritize tasks based on their impact on your website’s SEO.",
  },
  {
    title: "Continuous Monitoring & Optimization",
    description:
      "Once the initial fixes are done, we continuously monitor your site’s performance and make ongoing optimizations for sustained success.",
  },
];

const TechnicalProcess = () => {
  return (
    <section className="teamservice py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
            <h2>
              Our Process for <span>Technical SEO Success</span>
            </h2>
            <span className="d-inline-block mb-4 mt-2">
              Our process for Technical SEO campaigns is thorough, ensuring
              every aspect of your website is optimized for peak performance.
              Here are the steps we follow:
            </span>
          </div>
        </div>
        <div className="row qteam">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="servteaminr">
              <Image
                src={servTeam}
                className="img-fluid"
                alt="Technical SEO Agency in India"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="teamquality">
              {teamQualities.map((quality, index) => (
                <div key={index} className="teamqualityinr">
                  <h4>{quality.title}</h4>
                  <p>{quality.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProcess;
