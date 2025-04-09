import Image from "next/image";
import Hbteam from "../../../public/images/ecommerceimage/ecom-webgz.webp";

const teamStrategies = [
  {
    title: "Tailored Strategies",
    description: "Every business is unique, and so are our SEO plans.",
  },
  {
    title: "Experienced Team",
    description:
      "Our SEO specialists have years of experience in optimizing eCommerce stores.",
  },
  {
    title: "Proven Results",
    description: "We have a track record of delivering measurable success.",
  },
  {
    title: "Transparent Communication",
    description: "Stay updated with regular performance reports.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Your goals are our priorities, and we work tirelessly to achieve them.",
  },
];

function EcommerceTeaming() {
  return (
    <section id="ourTeamhbspt" className="ecommerce-team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h2>
                What Sets <span>Webguruz Apart?</span>
              </h2>
              <p>
                We’re not just another SEO agency- we’re your growth partner.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="hbstsct">
              <div className="hbstm">
                <Image
                  src={Hbteam}
                  className="img-fluid"
                  alt="eCommerce SEO Agency"
                />
              </div>
              <div className="svypmng">
                {teamStrategies.map((strategy, index) => (
                  <div key={index} className="svypmnginr">
                    <h3>{strategy.title}</h3>
                    <p>{strategy.description}</p>
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

export default EcommerceTeaming;
