import Image from "next/image";
import servTeam from "../../../public/images/keapimages/keap-expertise.webp";

const KeapHiring = () => {
  return (
    <section className="keap-hiring py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 heading-main mb-4 mb-md-0">
            <h2 className="mb-2">
              <span>Keap Integration </span> Expertise
            </h2>
            <p>
              One of the key strengths of our Keap development services is our
              ability to integrate the platform with your existing business
              tools and systems. We specialize in creating seamless connections
              between Keap and other essential business applications, ensuring
              data flows smoothly across your entire technology stack.
            </p>
            <p>
              Our integration expertise extends to popular platforms like
              Shopify, WooCommerce, QuickBooks, Zoom, and dozens of other tools
              that businesses rely on daily. Whether you need to sync customer
              data, automate order processing, or create unified reporting, our
              team has the technical knowledge to make it happen.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="servteaminr">
              <Image
                src={servTeam}
                className="img-fluid"
                alt="Organic SEO Agency"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeapHiring;
