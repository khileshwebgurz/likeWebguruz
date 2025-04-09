import Image from "next/image";
import servTeam from "../../../public/images/mvpimages/mvp-benefit.svg";

const StartMvp = () => {
  return (
    <section className="organic-stratergy mvp-webguruz-startup py-5 position-relative">
      <div className="container">
        <div className="row align-items-center reverse">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 heading-main">
        <h2 className="mb-3"><strong>It All Starts With an <span>MVP</span></strong></h2>
        <p>
          MVP Development Services offer immense value, especially for
          startups and businesses looking to enter the market with minimal
          risk and cost. MVPs help companies test the waters, providing a
          realistic snapshot of how their product might perform before
          investing in full-scale development.
        </p>
        <p>
          For startups, MVPs are an invaluable strategy for attracting early
          adopters, securing funding, and validating their concepts. At
          WebGuruz, our MVP Development services give you the confidence to
          grow and scale, knowing you&apos;ve laid a strong foundation based on
          real feedback and market validation.
        </p>
      </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="servteaminr">
              <Image
                src={servTeam}
                className="img-fluid"
                alt="MVP Development for Startups"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartMvp;
