
import Image from "next/image";
import logo1 from "../../../../public/images/HomeTechExpert/techexpert01.svg";
import logo2 from "../../../../public/images/HomeTechExpert/techexpert2.svg";
import logo3 from "../../../../public/images/HomeTechExpert/techexpert3.svg";
import logo4 from "../../../../public/images/HomeTechExpert/techexpert5.svg";
import logo5 from "../../../../public/images/HomeTechExpert/techexpert6.svg";
import logo6 from "../../../../public/images/HomeTechExpert/techexpert8.svg";
import logo7 from "../../../../public/images/HomeTechExpert/techexpert15.svg";
import logo8 from "../../../../public/images/HomeTechExpert/techexpert10.svg";
const logos = [
  { src: logo1, alt: "HubSpot Logo" },
  { src: logo2, alt: "Marketo Logo" },
  { src: logo3, alt: "Pardot Logo" },
  { src: logo4, alt: "Active Campaign Logo" },
  { src: logo5, alt: "Omnisend Logo" },
  { src: logo6, alt: "Adobe Analytics Logo" },
  { src: logo7, alt: "SEMRush Logo" },
  { src: logo8, alt: "Hotjar Logo" }
];

const PpcLogos = () => {
  return (
    <section className="contact-logo ppc-contact-logo py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-3">
            <h2>
              Our <span>Clients</span>
            </h2>
            <p>
              Clients of immense value guide our commitment to exceptional
              service
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

export default PpcLogos;
