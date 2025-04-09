import Image from "next/image";
import magnet from "../../../public/images/magentoimg/magento-services.webp";
import MagnetoDrop from "./MagnetDrop";
import { magentofirstaccordian } from "@/utils/accordionData";
const DevMagentoAccordian = () => {
  return (
    <>
      <section className="magento-dropdown-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 heading-main">
              <div className="magento-service-heading">
                <h2 className="mb-3">
                  Comprehensive <span>Magento Development Services</span>
                </h2>
                <p className="mb-4">
                  Discover the potential of your eCommerce business with
                  tailored Magento solutions designed to address every unique
                  challenge and meet your business goals effectively. Our
                  expertise ensures a seamless, robust, and high-performing
                  online presence for your brand.
                </p>
              </div>
              <div className="magento-service-image">
                <Image src={magnet} alt="Magento Website Development" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <MagnetoDrop accordionData={magentofirstaccordian} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevMagentoAccordian;
