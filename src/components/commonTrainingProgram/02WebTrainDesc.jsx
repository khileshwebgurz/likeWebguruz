import Image from "next/image";
import sas from "../../../public/images/internproimg/digital-trainee-3.webp";
const WebTrainDesc = () => {
  return (
    <>
      <div className="single-training-description py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12">
              <div className="single-training-image">
                <Image src={sas} alt="Website Development Training" />
              </div>
            </div>
            <div className="col-md-6 col-12 heading-main">
              <div className="single-training-content">
                <h2 className="training-heading">
                  About the <span> Training Course </span>
                </h2>
                <p>
                  Our 3 months Website Development Training Course in Mohali &
                  Chandigarh is designed for aspiring web developers who want to
                  master the art of building responsive, user-friendly websites.
                  With a focus on real-world applications, you&apos;ll work on
                  live projects and get personalized mentorship from industry
                  experts. Whether you&apos;re just starting or looking to
                  enhance your skills, our course is perfect for anyone eager to
                  explore the exciting world of web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebTrainDesc;
