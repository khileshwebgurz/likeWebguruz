import Image from "next/image";
import optimized from "../../../../public/images/ppcimages/ppclead1.webp";
import socialmarketing from "../../../../public/images/ppcimages/ppclead2.webp";
import contentmarkt from "../../../../public/images/ppcimages/ppclead3.webp";

const PpcLeads = () => {
  return (
    <>
      <section className="digital-marketing py-5 vector-digital ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
              How Can <span> PPC Services Help?</span>
              </h2>
              <span>
              Unlock Business Growth with Our Strategic Paid Advertising Campaigns
              </span>
            </div>
          </div>
          <div className="row py-4">
          <div className="card-content d-flex align-items-center">
            <div className="col-sm-6 col-xs-12 content">
              <h3 className="mb-3">Immediate Results</h3>
              <p>
              PPC campaigns deliver instant visibility and traffic, allowing you to see results right away.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={optimized} alt="Immediate Results" />
            </div>
          </div>
          </div>
          <div className="row py-4">
          <div className="card-content reverse d-flex align-items-center">
            <div className="col-sm-6 col-xs-12 content">
              <h3 className="mb-3">Targeted Advertising</h3>
              <p>
              Reach specific audiences based on demographics, interests, and behavior, ensuring your ads are seen by the right people.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={socialmarketing} alt="Targeted Advertising" />
            </div>
          </div>
          </div>
          <div className="row py-4">
          <div className="card-content d-flex align-items-center">
            <div className="col-sm-6 col-xs-12 content">
              <h3 className="mb-3">Measurable ROI</h3>
              <p>
              Track and analyze performance metrics to understand the effectiveness of your campaigns, enabling data-driven decisions.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={contentmarkt} alt="Measurable ROI" />
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PpcLeads;
