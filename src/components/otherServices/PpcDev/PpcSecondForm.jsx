import Image from "next/image";
import logoppc from "../../../../public/images/ppcimages/google-task-manager.svg"
import logoppc2 from "../../../../public/images/ppcimages/google-ads.svg";
import logoppc3 from "../../../../public/images/ppcimages/google-analytics.svg";
import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const PpcSecondForm = ({heading, subheading,paragraph}) => {
 
  const points = [
    "Prover Expertise",
    "Results-Oriented Approach",
    "Strategic Ad Campaigns",
    "In-Depth Keyword Discovery",
    "Regular Campaign Reports",
    // "Regular Campaign Reports",
  ];

  const logos = [logoppc, logoppc2, logoppc3]; // List of logo images

  return (
    <>
      <section className="ppcbannerservice py-5" id="ppc-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              {/* <h2 className="color-wt">
                {heading} <span>{subHeading}</span>
              </h2> */}

              <h2 className="color-wt">
              {heading} <strong> {subheading}</strong>
              </h2>
              <p className="color-wt">
              {paragraph}
              </p>
              <ul className="ppctab-main d-flex align-items-center">
                {points.map((point, index) => (
                  <li key={index} className="color-wt">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="logoimage-main d-flex align-items-center pt-4">
                {logos.map((logo, index) => (
                  <Image key={index} src={logo} alt="logoppc" />
                ))}
              </div>
            </div>
            <div className="col-sm-6 col-xs-12 formppc hub-ranking">
              {/* <HubspotForm /> */}
              <WebdevForm/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PpcSecondForm;
