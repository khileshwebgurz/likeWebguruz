import Image from "next/image";
import dollar from "../../../public/images/serviceImages/dollar-fig.webp";
import ServiceFormCl from "./ServiceFormCl";
import DigitalForm from "@/utils/formsHubspot/DigitalForm";

const BoostRanking = () => {
  return (
    <>
      <section className="boost-ranking py-5" id="boostrank">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 content-left heading-main">
              <h2>
                <span>Marketing Strategies </span> to Get You Growing
              </h2>
              <p className="mt-3 mb-4">
              People don&apos;t buy what you do, they buy why you do it. We&apos;ve got the right digital strategy to make the world talk about you.
              </p>
              <video
                autoPlay
                muted
                loop
                preload="auto"
                width={"100%"}
                playsInline
              >
                <source src="/video/video.webm" type="video/webm"></source>
              </video>
            </div>
            <div className="col-sm-6 col-xs-12 content-right form">
              <div className="quote-main">
                <h4>Get a Quote</h4>
              </div>
              <div className="quote-content ">
                <h5>
                  <Image src={dollar} alt="dollar-sign" />
                  Affordable Digital Marketing Services
                </h5>
                <p>
                  <b>Start your project</b>  with a custom quote designed to fit your requirements!

                </p>
                <ul className="mb-4">
                  <li>Transparent Pricing</li>
                  <li>Efficient Resource Allocation</li>
                  <li>Scalable Solutions</li>
                </ul>
                {/* <ServiceFormCl /> */}
                <DigitalForm/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoostRanking;
