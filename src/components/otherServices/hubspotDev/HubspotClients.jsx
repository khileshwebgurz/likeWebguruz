
import Image from "next/image";
import logo1 from "../../../../public/images/hubspotimages/buddyins-logo.webp";
import logo2 from "../../../../public/images/hubspotimages/drive-insight.webp";
import logo3 from "../../../../public/images/hubspotimages/fintalker.webp";
import logo4 from "../../../../public/images/hubspotimages/inclusio_.webp";
import logo5 from "../../../../public/images/hubspotimages/NewsDirect_logo.webp";
import logo6 from "../../../../public/images/hubspotimages/radiness.webp";
import logo7 from "../../../../public/images/hubspotimages/StratXSims_logo.webp";
import logo8 from "../../../../public/images/hubspotimages/skin_consult_logo.svg";
const logos = [
  { src: logo1, alt: "Buddyins Logo" },
  { src: logo2, alt: "Drive Insight Logo" },
  { src: logo3, alt: "FinTalker Logo" },
  { src: logo4, alt: "Inclusio Logo" },
  { src: logo5, alt: "NewDirects Logo" },
  { src: logo6, alt: "Readiness Rounds Logo" },
  { src: logo7, alt: "StratXS Logo" },
  { src: logo8, alt: "The Skin Consult Logo" }
];

const HubspotClients = () => {
  return (
    <section className="contact-logo py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-3">
            <h2>
              Our <span>Clientele</span>
            </h2>
            <p>
            We have earned the trust of some of the leading organizations from across the globe with our results.
            </p>
          </div>
        </div>
        <div className="row">
          {logos.map((logo, index) => (
            <div className="col-sm-3 col-xs-12" key={index}>
              <div className="logo-card">
                <Image src={logo.src} alt={logo.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubspotClients;
