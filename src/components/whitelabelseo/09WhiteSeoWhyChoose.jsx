import wbg from "../../../public/images/whiteseoimg/choose-white-label.webp";
import Image from "next/image";

const WhiteSeoWhyChoose = () => {
  const reasons = [
    "Our team has years of experience delivering SEO results for businesses of all sizes.",
    "We tailor our services to meet your unique needs and goals.",
    "We ensure timely delivery and consistent results that help you grow.",
    "You’ll always be informed about your SEO progress and results.",
  ];

  return (
    <div className="Webguruzchoose-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 heading-main">
            <div className="choose-left">
              <h2 className="mb-3">
                <span>Why Choose</span> Us?
              </h2>
              <p>
                When you choose our White Label SEO company, you’re working with
                experts who care about your business’s success. We offer
                transparent services, proven strategies, and outstanding
                customer support. Here’s why we’re the best choice for your
                business:
              </p>
              <ul className="wchoose-list">
                {reasons.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="choose-big-img">
              <Image src={wbg} alt="White-Label SEO Agency" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteSeoWhyChoose;
