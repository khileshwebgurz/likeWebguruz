import Image from "next/image";
import sas from "../../../public/images/internproimg/digital-trainee-1.webp";
const TrainingDescription = () => {
  return (
    <>
      <div className="single-training-description py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12">
              <div className="single-training-image">
                <Image src={sas} alt="Digital Marketing Training" />
              </div>
            </div>
            <div className="col-md-6 col-12 heading-main">
              <div className="single-training-content">
                <h2 className="training-heading">
                  About <span> Our Training Program </span>
                </h2>
                <p>
                  Our Digital Marketing Training Course is tailored for
                  individuals ready to embrace the digital revolution. With an
                  emphasis on practical learning, real-world applications, and
                  industry-relevant techniques, we ensure you’re job-ready from
                  day one.
                </p>
                <p>
                  The 3 months program covers everything from search engine
                  optimization (SEO) and pay-per-click (PPC) to content
                  marketing, email campaigns, and analytics. Whether you’re a
                  student, professional, or business owner, our course equips
                  you with the knowledge and confidence to excel. Enroll today
                  and start building your future in digital marketing with
                  WebGuruz Technologies Pvt Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainingDescription;
