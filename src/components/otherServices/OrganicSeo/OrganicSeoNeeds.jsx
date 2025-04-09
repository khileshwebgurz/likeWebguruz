import Image from "next/image";
import servTeam from "../../../../public/images/organicseoimages/organicneeds.webp";

const OrganicSeoNeeds = () => {
  return (
    <section className="organic-needs py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="servteaminr">
              <Image
                src={servTeam}
                className="img-fluid"
                alt="Organic SEO Strategy"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 heading-main">
            <h2>
              What&apos;s Needed for <span> Organic Seo Service</span>
            </h2>
            <p>
              Businesses should focus on quality content, mobile optimization,
              and building an authoritative backlink profile to boost their
              organic search rankings. At WebGuruz, we guide you through every
              step, helping you stay ahead of competitors by using proven
              strategies.
            </p>
            <p>
              From keyword targeting to technical SEO, we ensure that your
              website is optimized for search engines and delivers consistent,
              long-term results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganicSeoNeeds;
