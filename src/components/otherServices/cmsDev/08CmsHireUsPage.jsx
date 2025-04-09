import Image from "next/image";
import Whyrsimg from "../../../../public/images/drupalimg/whyrs.webp";

// Array to store reasons to hire the company
const reasonsToHire = [
  "16+ Years of Experience in CMS Development",
  "Tailored Solutions to Meet your Business Needs",
  "Timely Delivery Without Compromising Quality",
  "Comprehensive Support and Maintenance",
  "Cutting-Edge Technology",
  "Customer-Centric Approach",
  "Proven Track Record",
  "Competitive Pricing",
];

const CmsHireUsPage = () => {
  return (
    <>
      <section className="whyhrs py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
              <div className="heading-main">
                <h2 className="mb-2">
                Why Choose Us for{" "} 
                  <span> CMS Development Services?</span>
                </h2>
                <p>
                We are an award-winning CMS development company delivering advanced content management solutions to businesses around the world. Our custom solutions are poised to solve even the most complex of your challenges in a cost-effective manner.
                </p>
              </div>
              <div className="exphrs">
                <ul>
                  {reasonsToHire.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="whrsimg">
                <Image src={Whyrsimg} className="img-fluid" alt="CMS Development Services" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmsHireUsPage;
