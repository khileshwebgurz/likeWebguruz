import choose from "../../../public/images/mspimages/it-select-1.svg";
import Image from "next/image";

const MspWhyChoose = () => {
  const reasons = [
    {
      title: "Business Continuity",
      description:
        "Minimize disruptions and maintain seamless operations with proactive IT monitoring, rapid issue resolution, and strategic disaster recovery planning.",
    },
    {
      title: "Expert IT Guidance",
      description:
        "Leverage the expertise of seasoned IT professionals without the expense of maintaining an in-house team, ensuring your business stays ahead with the latest technology solutions.",
    },
    {
      title: "Improved Cybersecurity",
      description:
        "Safeguard your business from cyber threats with cutting-edge security protocols, real-time threat detection, and compliance support to keep your data and systems secure.",
    },
    {
      title: "Better Resource Allocation",
      description:
        "Optimize your workforce by shifting IT responsibilities to our dedicated team, allowing you to focus on innovation, customer engagement, and business growth.",
    },
  ];

  return (
    <div className="Whychoosemagento why-choose-msp py-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 mx-auto col-12 heading-main text-center mb-5">
            <h2 className="mb-2">
            <span> Why Choose  </span>  Managed Service Providers?
            </h2>
            <p>
              Managed Service Providers (MSPs) offer businesses a cost-effective
              and proactive approach to IT management. Rather than reacting to
              IT issues, MSPs provide continuous monitoring and support to
              ensure optimal performance and security.
            </p>
          </div>
        </div>
        <div className="row why-chose align-items-center">
          <div className="col-lg-5 col-md-6 col-12 mt-4 mt-md-0">
            <Image src={choose} alt="Managed Service Providers" />
          </div>
          <div className="col-lg-7 col-md-6 col-12 right-content">
            {reasons.map((item, index) => (
              <div key={index} className="why-choose-text mb-4">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MspWhyChoose;
