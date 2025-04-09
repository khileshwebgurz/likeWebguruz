const industries = [
  {
    title: "Healthcare",
    description:
      "We help healthcare providers attract new patients, manage online reputation, and promote telehealth services.",
  },
  {
    title: "Education",
    description:
      "The team at WebGuruz helps educational institutions recruit students, promote online courses, and establish a positive brand reputation.",
  },
  {
    title: "Lifestyle",
    description:
      "WebGuruz is helping lifestyle brands increase visibility, engage with customers, and leverage influencer marketing.",
  },
  {
    title: "eCommerce",
    description:
      "Our experts assist eCommerce businesses in driving traffic, optimizing conversions, and building a strong brand identity.",
  },
  {
    title: "Finance",
    description:
      "We assist financial institutions in generating leads, ensuring compliance, and improving customer retention.",
  },
  {
    title: "Real Estate",
    description:
      "Experts at our digital marketing agency assist real estate agents and agencies in promoting property listings, generating leads, and building a strong brand reputation.",
  },
];

const IndustriesServe = () => {
  return (
    <section className="industries-serve py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="heading-main text-center pb-2 heading-content">
              <h2>
              Industries We <span>Cater To</span>
              </h2>
              <span className="d-inline-block para">
              WebGuruz as a leading digital marketing agency, holds extensive experience working with clients across various industries, including:
              </span>
            </div>

            <div className="indstrsrv">
              {industries.map((industry, index) => (
                <div key={index} className="indstrsrvinr">
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServe;
