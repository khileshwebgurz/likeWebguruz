import process from "../../../public/images/serviceImages/work-intelligence.webp";
import Image from "next/image";

const ProcessStep = () => {
  return (
    <>
      <section className="process-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
              <h2>
              We are <span> Intelligence in Action</span>
              </h2>
              <span className="pt-0 pb-4 para">
              We follow a proven process to deliver exceptional digital marketing solutions. Our process involves:
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xs-12 image text-center">
              <Image src={process} alt="digital marketing solutions" />
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="content">
                <ul>
                  <li>
                    <span className="number">1</span>
                    <h3>Understanding Your Requirements</h3>
                    <p>
                    We work closely with you to understand your business goals and target audience.
                    </p>
                  </li>
                  <li>
                    <span className="number">2</span>
                    <h3>Analyzing Opportunities</h3>
                    <p>
                    We conduct a thorough analysis of your current online presence and identify areas for improvement.
                    </p>
                  </li>
                  <li>
                    <span className="number">3</span>
                    <h3>Strategizing</h3>
                    <p>
                    We develop a customized digital marketing strategy tailored to your specific needs.
                    </p>
                  </li>
                  <li>
                    <span className="number">4</span>
                    <h3>Updating Progress</h3>
                    <p>
                    We provide regular updates and make adjustments as needed to ensure your campaign is on track.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessStep;
