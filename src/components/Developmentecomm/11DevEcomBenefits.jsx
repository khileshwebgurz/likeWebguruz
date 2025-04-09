import Image from "next/image";
import deecom1 from "../../../public/images/devecomerceimg/ecom-secure-1.webp";
import deecom2 from "../../../public/images/devecomerceimg/ecom-secure-2.webp";
import deecom3 from "../../../public/images/devecomerceimg/ecom-secure-3.webp";
import deecom4 from "../../../public/images/devecomerceimg/ecom-secure-4.webp";
import deecom5 from "../../../public/images/devecomerceimg/ecom-secure-5.webp";
import deecom6 from "../../../public/images/devecomerceimg/ecom-secure-6.webp";

const benefits = [
  {
    image: deecom1,
    title: "Scalability",
    alt:"Scalability Icon",
    description:
      "Your website will be built to grow as your business expands. We ensure that the infrastructure can handle increased traffic and sales, allowing for seamless upgrades as your business requirements evolve.",
  },
  {
    image: deecom2,
    title: "User-Centric Design",
    alt:"User-Centric Design Icon",
    description:
      "Every design decision focuses on improving the user experience. We prioritize intuitive navigation, clear calls-to-action, and streamlined checkout processes to keep customers engaged and reduce abandonment rates.",
  },
  {
    image: deecom3,
    title: "SEO Integration",
    alt:"SEO Integration Icon",
    description:
      "We integrate SEO best practices for higher visibility in search engines. From keyword optimization to technical SEO, every aspect of your site is designed to improve search engine rankings and attract organic traffic.",
  },
  {
    image: deecom4,
    title: "Secure Transactions",
    alt:"Secure Transactions Icon",
    description:
      "Protect customer data with secure payment processing systems. We implement the latest encryption and compliance measures, ensuring that all transactions are safe and secure for both you and your customers.",
  },
  {
    image: deecom5,
    title: "Mobile Optimization",
    alt:"Mobile Optimization Icon",
    description:
      "Reach customers on any device with a fully mobile-optimized website. With responsive design and fast-loading pages, your site will deliver an excellent user experience, whether on smartphones, tablets, or desktops.",
  },
  {
    image: deecom6,
    title: "Cost Efficiency",
    alt:"Cost Efficiency Icon",
    description:
      "Get top-quality solutions at competitive prices. We focus on delivering high-value eCommerce websites that meet your goals while ensuring that you receive the best return on investment.",
  },
];

const DevEcomBenefits = () => {
  return (
    <section className="ecommerce-dev-benefits py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 text-center heading-main mb-4">
            <h2>
              Other Benefits of Our{" "}
              <span>eCommerce Development Services</span>
            </h2>
            <p>
              Our eCommerce development services offer more than just a
              website—they provide you with a powerful set of tools and
              features that drive growth. From seamless integrations to
              enhanced security, these benefits will ensure your business
              remains competitive and future-ready.
            </p>
          </div>
        </div>
        <div className="row">
          {benefits.map((benefit, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="ecom-benefits-card">
                <div className="ecom-bg-img">
                  <Image src={benefit.image} alt={benefit.alt} />
                </div>
                <div className="ecom-benefit-content">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevEcomBenefits;
