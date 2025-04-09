import Image from "next/image";
import startup from "../../../public/images/mvpimages/startup.webp";

const MvpStartup = () => {
  return (
    <section className="organic-stratergy mvp-webguruz py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 heading-main">
            <h2 className="mb-3">
            <strong>We <span>Help</span> Small Startup Teams Do Big Things</strong>
            </h2>
            <p>
            Our MVP Development services at WebGuruz are designed to help you bring your product ideas to life quickly and effectively. By focusing on the essential features and functionalities, we create a “minimum viable product” (MVP) that provides value to your target audience without unnecessary complexity.
            </p>
            <p>
            Whether you&apos;re a startup launching your first product or an established business exploring new avenues, our MVP Development services can help you reduce risk, get to market faster, and gather valuable user feedback for future growth.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="servteaminr">
              <Image
                src={startup}
                className="img-fluid"
                alt="MVP Development Services"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MvpStartup;
