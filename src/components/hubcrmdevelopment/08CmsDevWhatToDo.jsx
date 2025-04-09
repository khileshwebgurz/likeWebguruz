import Image from "next/image";
import Drpl from "../../../public/images/hubspotcmsdevimg/cms-dev-expect.webp";

// Array to store Drupal solution data
const drupalSolutions = [
  {
    number: "1",
    title: "Clear Communication",
    description:
      "We maintain constant communication throughout the project to ensure your requirements are being met.",
  },
  {
    number: "2",
    title: "Collaborative Design & Development",
    description:
      "We collaborate closely with you to create a design that aligns with your vision and business goals.",
  },
  {
    number: "3",
    title: "Regular Progress Updates",
    description:
      "You’ll receive regular updates to keep you informed of the project's progress and any necessary adjustments.",
  },
  {
    number: "4",
    title: "Comprehensive Testing",
    description:
      "Every aspect of your site is tested to ensure it functions smoothly across devices and browsers.",
  },
  {
    number: "5",
    title: "Launch & Post-Launch Support",
    description:
      "After launch, we provide continuous support to ensure the website operates flawlessly.",
  },
];

const CmsDevWhatToDo = () => {
  return (
    <>
      <section className="drplscl1 cms-dev-todo py-5 position-relative">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading-main text-center">
                <h2>
                  What to Expect <span>During CMS Development?</span>
                </h2>
                <span className="mb-2 d-inline-block">
                  During the CMS development process, you can expect a
                  collaborative, transparent approach from our team, who will
                  guide you every step of the way to ensure your goals are met.
                </span>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="ddrpl">
                <Image src={Drpl} className="img-fluid" alt="CMS Development" />
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

export default CmsDevWhatToDo;
