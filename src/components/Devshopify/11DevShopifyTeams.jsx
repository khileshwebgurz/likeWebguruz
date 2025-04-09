import Image from "next/image";
import Hbteam from "../../../public/images/shopifydevlpomentimg/shopify-experience.webp";

const features = [
  {
    title: "User-Friendly Interface",
    description:
      "Simplify your store’s navigation with intuitive layouts and easy-to-use menus.",
  },
  {
    title: "Secure and Hassle-Free Payments",
    description:
      "With multiple payment gateways and robust encryption, Shopify ensures every transaction is secure and smooth.",
  },
  {
    title: "Mobile-Optimized Stores",
    description:
      "Create responsive Shopify stores that adapt seamlessly to any screen size.",
  },
  {
    title: "Fast Page Load Speeds",
    description:
      "Reduce bounce rates and improve conversion rates with Shopify's optimized hosting and performance.",
  },
  {
    title: "Customizable Checkout Process",
    description:
      "Tailor the checkout process to your business, improving cart completion rates and user satisfaction.",
  },
];

function DevShopifyTeams() {
  return (
    <section id="ourTeamhbspt" className="shopify-development-team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-main text-center">
              <h2>
                How Shopify Enhances <span> Customer Experience?</span>
              </h2>
              <p>
                Deliver a seamless shopping journey for your customers with
                Shopify&apos;s advanced features and capabilities.
              </p>
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
                  alt="Shopify Customer Experience"
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

export default DevShopifyTeams;
