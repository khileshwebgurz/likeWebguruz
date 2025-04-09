import Image from "next/image";
import magnet from "../../../public/images/joomlaimages/joomla-company.webp";
import MagnetoDrop from "../DevMagento/MagnetDrop";
import { joomlafirstaccordian } from "@/utils/accordionData";
const JoomlaHiring = () => {
  return (
    <>
      <section className="magento-dropdown-section joomla-hiring py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 heading-main">
              <div className="magento-service-heading">
                <h2 className="mb-3">
                  Why Work with a <span>Joomla Web Development Company?</span>
                </h2>
                <p className="mb-4">
                  A professional Joomla development company ensures your website
                  is scalable, secure, and feature-rich. Here’s why you should
                  work with us:
                </p>
              </div>
              <div className="magento-service-image">
                <Image src={magnet} alt="Study Icon" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <MagnetoDrop accordionData={joomlafirstaccordian} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoomlaHiring;
