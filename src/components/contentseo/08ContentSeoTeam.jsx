import Image from "next/image";
import servTeam from "/public/images/contentseoimgages/content-team.webp";

const teamQualities = [
  {
    title: "Unmatched Quality",
    description:
      "We prioritize precision and excellence, ensuring every piece of content exceeds industry standards and meets your expectations.",
  },
  {
    title: "Proven Reliability",
    description:
      "Deadlines are non-negotiable for us. Count on our team to deliver on time, every time, without compromising quality.",
  },
  {
    title: "Unparalleled Versatility",
    description:
      "From blogs and web pages to technical content, we adapt to your needs and provide tailored solutions for any niche or audience.",
  },
  {
    title: "Expert Competence",
    description:
      "With years of experience and in-depth industry knowledge, we bring valuable insights and strategies to elevate your content game.",
  },
];

const ContentSeoTeam = () => {
  return (
    <section className="teamservice content-seo-team py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
            <h2>
              Our Team Is <span> Your Team</span>
            </h2>
            <span className="d-inline-block mb-4 mt-2">
              When you work with us, you’re not just hiring a service- you’re
              gaining a partner committed to helping your business grow. Our
              team seamlessly integrates with yours to deliver exceptional
              results.
            </span>
          </div>
        </div>
        <div className="row qteam">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="servteaminr">
              <Image
                src={servTeam}
                className="img-fluid"
                alt=" SEO Content Writing"
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

export default ContentSeoTeam;
