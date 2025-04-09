import Image from "next/image";
import Arrwcheck from "../../../public/images/hubspotimages/arrow-check.webp";
import Hbstcntr from "../../../public/images/shopifydevlpomentimg/shopify-trusted.webp";

function DevShopifyPoints() {
  return (
    <section id="hubsptcms" className="dev-shopify-points">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h2>
                Why Choose <span>WebGuruz?</span>
              </h2>
              <span className="d-inline-block mb-3 mt-2">
                We are your partner for e-commerce business excellence.
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="hbstexprts">
              <div className="hbstexprtsinr left">
                <div className="hbperfrm right">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Certified Shopify developers.</h3>
                </div>
                <div className="hbperfrm right">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Tailored solutions for every business.</h3>
                </div>
                <div className="hbperfrm right">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Proven track record of success.</h3>
                </div>
                <div className="hbperfrm right lst">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Transparent and collaborative approach.</h3>
                </div>
              </div>
              <div className="hbstexprtsinr center">
                <div className="hbbtmgs">
                  <Image
                    src={Hbstcntr}
                    className="img-fluid"
                    alt="Shopify Website Development"
                  />
                </div>
              </div>
              <div className="hbstexprtsinr right">
                <div className="hbperfrm left">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Competitive pricing.</h3>
                </div>
                <div className="hbperfrm left">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Global client base.</h3>
                </div>
                <div className="hbperfrm left">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Continuous innovation.</h3>
                </div>
                <div className="hbperfrm left lst">
                  <div className="hbperfimg">
                    <Image src={Arrwcheck} className="img-fluid" alt="Image" />
                  </div>
                  <h3>Exceptional customer support.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevShopifyPoints;
