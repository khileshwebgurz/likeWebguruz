
import DesignEcomSlides from "./DesignEcomSlides";

const DesignEcomTech = () => {
  return (
    <div className="Designdev-process-sec py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our Streamlined <span> Design Process</span>
            </h2>
            <p>
              Our design process is meticulously crafted to ensure a seamless
              experience from concept to completion. Here’s how we turn your
              vision into reality:
            </p>
          </div>
          <div className="col-12 slider-main">
            <DesignEcomSlides />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignEcomTech;
