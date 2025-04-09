import Link from "next/link";
import Conversion from "../../../public/images/serviceImages/conversionbg.webp";

const AddsPartner = () => {
  return (
    <section
      className="addspartnr py-8"
      style={{
        backgroundImage: `url(${Conversion.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundPosition: "100% 50%",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
            <h2 className="color-wt mb-3">
            Take your business to the next level

            </h2>
            <p className="color-wt">
            Partner with WebGuruz for unparalleled SEO success!

              {/* <br /> spent on the campaign accounted for. */}
            </p>
            <Link className="explore-btn" href="/contact-us" aria-label="Connect Webguruz">
            Connect Now!

            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddsPartner;
