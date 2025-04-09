import Image from "next/image";
import sas from "../../../public/images/internproimg/digital-trainee-2.webp";
const HubTrainDesc = () => {
  return (
    <>
      <div className="single-training-description py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12">
              <div className="single-training-image">
                <Image src={sas} alt="HubSpot Development Training" />
              </div>
            </div>
            <div className="col-md-6 col-12 heading-main">
              <div className="single-training-content">
                <h2 className="training-heading">
                  About the <span> Training Course </span>
                </h2>
                <p>
                  Our HubSpot Development Training Course is meticulously
                  designed to offer a comprehensive understanding of HubSpot’s
                  powerful tools and integrations. Delivered by seasoned
                  professionals, this 3 months program emphasizes hands-on experience,
                  covering topics from HubSpot API integration to building
                  custom modules.
                </p>
                <p>
                  With personalized mentorship, live projects, and access to
                  premium resources, you’ll not only learn the fundamentals but
                  also master advanced techniques that set you apart. This
                  course is perfect for anyone looking to build a robust career
                  in CRM development, marketing, or business analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HubTrainDesc;
