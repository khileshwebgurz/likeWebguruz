import Image from "next/image";
import magnet from "../../../public/images/automationtestimg/automate-working.webp";
import MagnetoDrop from "../DevMagento/MagnetDrop";
import { automationtestaccordian } from "@/utils/accordionData";
const AutomateAccordian = () => {
  return (
    <>
      <section className="magento-dropdown-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 heading-main">
              <div className="magento-service-heading">
                <h2 className="mb-3">
                  Why Work <span> with WebGuruz?</span>
                </h2>
                <p className="mb-4">
                  When you choose WebGuruz Technologies for your testing
                  automation needs, you&apos;re partnering with a team dedicated to
                  your success. We combine technical expertise with business
                  understanding to deliver testing solutions that drive real
                  results. Our collaborative approach ensures that our testing
                  strategies align with your business goals and help you deliver
                  exceptional products to your customers.
                </p>
              </div>
              <div className="magento-service-image">
                <Image src={magnet} alt="Magento Website Development" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <MagnetoDrop accordionData={automationtestaccordian} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AutomateAccordian;
