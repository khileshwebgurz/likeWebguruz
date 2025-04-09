import Image from "next/image";
import stepone from "../../../public/images/Hubspotcmsimages/downtime1.webp";
import steptwo from "../../../public/images/Hubspotcmsimages/downtime2.webp";
import stepthree from "../../../public/images/Hubspotcmsimages/downtime3.webp";

const CmsMigrateSteps = () => {
  return (
    <>
      <section className="team-card cms-migrate-steps pt-5 pb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12">
              <div className="team-sub-card">
                <h4>What to Expect from Our HubSpot CMS Migration Services</h4>
                <p>
                  Partnering with WebGuruz means receiving top-notch service and
                  attention to detail.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="icon-content forward d-flex align-items-center">
                <div className="icon">
                  <Image src={stepone} alt="Zero Downtime Migration Icon" />
                </div>
                <div className="content">
                  <span className="tag">Step 1</span>
                  <h4>Zero Downtime Migration</h4>
                  <p>
                    We ensure your website remains live throughout the migration
                    process.
                  </p>
                </div>
              </div>
              <div className="icon-content forward d-flex align-items-center">
                <div className="icon">
                  <Image src={steptwo} alt="SEO Preservation Icon" />
                </div>
                <div className="content">
                  <span className="tag">Step 2</span>
                  <h4>SEO Preservation</h4>
                  <p>
                    Our SEO specialists implement strategies to maintain your
                    search rankings.
                  </p>
                </div>
              </div>
              <div className="icon-content forward d-flex align-items-center">
                <div className="icon">
                  <Image src={stepthree} alt="Customized Solutions Icon" />
                </div>
                <div className="content">
                  <span className="tag">Step 3</span>
                  <h4>Customized Solutions</h4>
                  <p>
                    We tailor every aspect of the migration to meet your unique
                    business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmsMigrateSteps;
