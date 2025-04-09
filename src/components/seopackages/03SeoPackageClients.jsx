
import Image from "next/image";
import logo1 from "/public/images/contactimages/logo1.svg";
import logo2 from "/public/images/contactimages/logo2.svg";
import logo3 from "/public/images/contactimages/logo3.svg";
import logo4 from "/public/images/contactimages/logo4.svg";
import logo5 from "/public/images/contactimages/logo5.svg";
import logo6 from "/public/images/contactimages/logo6.svg";
import logo7 from "/public/images/contactimages/logo7.svg";
import logo8 from "/public/images/hubspotimages/fintalker.webp";
const logos = [
  { src: logo1, alt: "Marketing Cloud Logo" },
  { src: logo2, alt: "Service Max Logo" },
  { src: logo3, alt: "Klaviyo Logo" },
  { src: logo4, alt: "Marketo Logo" },
  { src: logo5, alt: "Constant Contact Logo" },
  { src: logo6, alt: "HubSpot Logo" },
  { src: logo7, alt: "VoRide Logo" },
  { src: logo8, alt: "FinTalker Logo" }
];

const SeoPackageClients = () => {
  return (
    <section className="contact-logo py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-3">
            <h2>
              Our <span>Clientele</span>
            </h2>
            <p>
            Our clientele includes some of the industry leaders, including-
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

export default SeoPackageClients;
