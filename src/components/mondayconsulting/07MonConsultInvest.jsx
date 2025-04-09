import Image from "next/image";
import servTeam from "/public/images/mondayconsimages/why-invest.webp";

const teamQualities = [
  {
    title: "Faster Time to Value",
    description:
      "Skip the trial and error. Our consultants bring years of experience implementing Monday.com across various industries, helping you achieve results in weeks, not months.",
  },
  {
    title: "Custom Solutions for Your Business",
    description:
      "No two businesses are alike. We create tailored Monday.com solutions that address your specific challenges and align with your unique workflows.",
  },
  {
    title: "Long-term Success & Adoption",
    description:
      "Beyond the initial setup, we focus on ensuring your team embraces Monday.com as their go-to work platform, providing training, documentation, and ongoing support.",
  },
 
];

const MonConsultInvest = () => {
  return (
    <section className="teamservice monday-consulting-features py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
            <h2>
            Why Invest in <span>Monday.com Consulting?</span>
            </h2>
            <span className="d-inline-block mb-4 mt-2">
            Implementing Monday.com without expert guidance often leads to underutilized features, poor adoption, and frustrated team members. Our consulting services ensure you get the maximum return on your Monday.com investment by creating a system that truly works for your business.
            </span>
          </div>
        </div>
        <div className="row qteam">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="servteaminr">
              <Image src={servTeam} className="img-fluid" alt="Digital Marketing Agency" />
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

export default MonConsultInvest;
