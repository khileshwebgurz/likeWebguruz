import Image from "next/image";
import Whyrsimg from "../../../public/images/drupalimg/whyrs.webp";

// Array to store reasons to hire the company
const reasonsToHire = [
  "Certified HubSpot Partner",
  "Proven Track Record of Success",
  "Tailored Automation Solutions",
  "24/7 Customer Support",
  "Experienced Team of Experts",
  "Seamless Integration Services",
  "Competitive Pricing",
  "Dedicated Account Managers",
];

const HubAutomateChoose = () => {
  return (
    <>
      <section className="whyhrs automatation-choose py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
              <div className="heading-main">
                <h2 className="mb-2">
                  WebGuruz as Your HubSpot{" "}
                  <span> Automation Services Partner</span>
                </h2>
                <p>
                  Choosing the right partner can make or break your automation
                  journey. With WebGuruz, you gain a trusted ally that
                  prioritizes your success. Our expertise, commitment, and
                  results-oriented approach ensure that your business maximizes
                  its HubSpot investment.
                </p>
              </div>
              <div className="exphrs">
                <ul>
                  {reasonsToHire.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="whrsimg">
                <Image
                  src={Whyrsimg}
                  className="img-fluid"
                  alt="CMS Development Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubAutomateChoose;
