import Image from "next/image";
import Drpl from "../../../public/images/seoconsultingimg/seo-speacial.webp";

// Array to store Drupal solution data
const drupalSolutions = [
  {
    number: "1",
    title: "Comprehensive market and competitor analysis.",
    description:
      "We dive deep into your industry to identify opportunities and gain insights that shape our strategy.",
  },
  {
    number: "2",
    title: "Customized SEO roadmaps tailored to your goals.",
    description:
      "Every plan we create is unique to your business, ensuring maximum impact and efficiency.",
  },
  {
    number: "3",
    title: "Timely execution of proven SEO strategies.",
    description:
      "Our team works diligently to implement tactics that deliver quick wins and long-term gains.",
  },
  {
    number: "4",
    title: "Detailed reporting to track progress and results.",
    description:
      "We keep you informed with clear, actionable updates on your campaign’s performance.",
  },
  {
    number: "5",
    title: "Continuous optimization for sustained growth.",
    description:
      "As your business evolves, so do our strategies, ensuring ongoing success in a dynamic digital landscape.",
  },
];

const StraterhyTeam = () => {
  return (
    <>
      <section className="drplscl1 py-5 position-relative seo-consulting-team">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading-main text-center">
                <h2>
                  Our Team is <span>Your Team</span>
                </h2>
                <span className="mb-2 d-inline-block">
                  Our dedicated team of SEO specialists is here to help you
                  achieve your digital marketing goals. We act as an extension
                  of your team, ensuring seamless collaboration and tailored
                  strategies. We understand that every business is unique, so we
                  craft personalized solutions that align with your vision and
                  objectives. With a focus on transparency, communication, and
                  results, our team is committed to your success.
                </span>
              </div>
            </div>
          </div>

          <div className="row seo-row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="ddrpl">
                <Image
                  src={Drpl}
                  className="img-fluid"
                  alt="SEO Consulting Services"
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

export default StraterhyTeam;
