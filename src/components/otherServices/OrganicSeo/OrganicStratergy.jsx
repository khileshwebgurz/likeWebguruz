import Image from "next/image";
import servTeam from "../../../../public/images/organicseoimages/orgstratergies.webp";

const OrganicStratergy = () => {
  return (
    <section className="organic-stratergy py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 heading-main">
            <h2>
              <span>Key Strategies</span> We Follow
            </h2>
            <p>
              At WebGuruz, we emphasize a comprehensive approach to Organic SEO.
              Our strategies include optimizing website architecture, conducting
              in-depth keyword research, and building high-quality backlinks.
            </p>
            <p>
              We focus on technical SEO to improve website performance, ensuring
              your site loads quickly and is mobile-friendly. These methods help
              you achieve top rankings on the SERPs, which in turn, drives more
              traffic and increases conversions.
            </p>
            <p>
              We continually monitor and adjust our approach to stay ahead of
              algorithm changes, ensuring long-lasting results.
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

export default OrganicStratergy;
