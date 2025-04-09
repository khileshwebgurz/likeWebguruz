import Image from "next/image";
import Drpl from "../../../../public/images/organicseoimages/orgquality.webp";

const drupalSolutions = [
  {
    number: "1",
    title: "Increased Online Visibility",
    description:
      "Higher rankings lead to more organic traffic.",
  },
  {
    number: "2",
    title: "Qualified Leads",
    description:
      "Our strategies attract visitors who are more likely to convert.",
  },
  {
    number: "3",
    title: "Improved User Experience",
    description:
      "Faster, mobile-friendly websites rank better and engage users.",
  },
  {
    number: "4",
    title: "Ongoing Growth",
    description:
      "As we track and adjust strategies, your website’s performance will continuously improve.",
  },
];

const OrganicQuality = () => {
  return (
    <>
      <section className="drplscl1 py-5 position-relative">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading-main text-center">
                <h2>
                What to Expect with Our  <span>Organic Seo Services ?</span>
                </h2>
                <span className="mb-2 d-inline-block">
                When working with WebGuruz, you can expect:
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
                  alt="Top Organic SEO Agency in India"
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

export default OrganicQuality;
