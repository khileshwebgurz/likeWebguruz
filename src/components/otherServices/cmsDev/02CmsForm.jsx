import Image from "next/image";
import icn1 from "../../../../public/images/drupalimg/d1.svg";
import icn2 from "../../../../public/images/drupalimg/d2.svg";
import icn3 from "../../../../public/images/drupalimg/d3.svg";
import icn4 from "../../../../public/images/drupalimg/d4.svg";
import icn5 from "../../../../public/images/drupalimg/d5.svg";
import cl1 from "../../../../public/images/drupalimg/clsa.webp";
import cl2 from "../../../../public/images/award1.svg";
import cl3 from "../../../../public/images/drupalimg/cl3.webp";
import cl4 from "../../../../public/images/drupalimg/cl4.webp";
import cl5 from "../../../../public/images/aboutimages/clutch-logo.webp";

import WebdevForm from "@/utils/formsHubspot/Webdeveform";

// Data arrays for development options and client logos


const devOptions = [
  { icon: icn1, text: "CMS 8 Development"},
  { icon: icn2, text: "CMS 10 Development" },
  { icon: icn3, text: "CMS UI/UX"},
  { icon: icn4, text: "CMS Theme Development" },
  { icon: icn5, text: "CMS Migration" },
];

const clientLogos = [
  { cl: cl1, alt: "Good Firms Logo"},
  { cl: cl2, alt: "Upwork Logo" },
  { cl: cl3, alt: "Top IT Service Logo"},
  { cl: cl5, alt: "CMS Migration" },
  { cl: cl4, alt: "WARC Logo" },
];

const CmsForm = () => {
  return (
    <>
      <section className="scrfrm py-5" id="cms-form">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="heading-main">
                <h2 className="text-white">
                  <strong>
                  Your Trusted CMS Web Development Partner
                  </strong>
                </h2>
                <p className="text-white">
                We are dedicated to crafting innovative content management systems that cater to your unique needs. With a team of expert developers and designers, we bring your vision to life, ensuring your platform is robust, scalable, and user-friendly.
                </p>
              </div>
              <div className="drpldvlpmnt">
                <ul>
                  {devOptions.map((option, index) => (
                    <li key={index}>
                        <Image src={option.icon} className="img-fluid"  alt="Image" />
                        <p>{option.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cltchmg">
                <ul>
                  {clientLogos.map((logo, index) => (
                    <li key={index}>
                      <div className="climg">
                        <Image src={logo.cl} className="img-fluid"  alt={logo.alt} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 hub-ranking">
           
              <WebdevForm/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmsForm;
