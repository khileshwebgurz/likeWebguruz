import Image from "next/image";
import Hbteam from "../../../public/images/ecommercewebdesignimg/design-exprt.webp";

const features = [
  {
    title: "Custom Solutions",
    description:
      "We understand that every business is unique, and so are its goals. That’s why we offer custom website design solutions specifically tailored to meet the needs of your industry and target audience.",
  },
  {
    title: "Expert Insights",
    description:
      "Our team of certified eCommerce designers brings years of experience and in-depth knowledge to the table. We stay updated with the latest trends, technologies, and industry standards.",
  },
  {
    title: "Time Efficiency",
    description:
      "Our streamlined processes and efficient project management ensure that your website is delivered quickly without compromising on quality or functionality.",
  },
  {
    title: "Cost-Effectiveness",
    description:
      "By focusing on designs that improve user engagement, boost conversions, and streamline operations, we help you achieve a strong return on investment, making every dollar count.",
  },
  {
    title: "Ongoing Support",
    description:
      "Our commitment doesn’t end with the delivery of your website- we offer ongoing support to ensure your platform continues to perform optimally. ",
  },
];

function DesignEocmServices() {
  return (
    <section id="ourTeamhbspt" className="design-ecommerce-team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-main text-center">
              <h2>
                Working with Certified <span> eCommerce Design Experts</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="hbstsct">
              <div className="hbstm">
                <Image
                  src={Hbteam}
                  className="img-fluid"
                  alt="Certified eCommerce Design Experts"
                />
              </div>
              <div className="svypmng">
                {features.map((feature, index) => (
                  <div className="svypmnginr" key={index}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignEocmServices;
