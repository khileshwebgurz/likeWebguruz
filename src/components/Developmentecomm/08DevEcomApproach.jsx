import Image from "next/image";
import deecom1 from "../../../public/images/devecomerceimg/ecom-kpi-1.webp";
import deecom2 from "../../../public/images/devecomerceimg/ecom-kpi-2.webp";
import deecom3 from "../../../public/images/devecomerceimg/ecom-kpi-3.webp";
import deecom4 from "../../../public/images/devecomerceimg/ecom-kpi-4.webp";
import deecom5 from "../../../public/images/devecomerceimg/ecom-kpi-5.webp";
import deecom6 from "../../../public/images/devecomerceimg/ecom-kpi-6.webp";
function DevEcomApproach() {
  return (
    <section
      id="hbstdvlpmnt"
      className="ecom-development-approach py5 Hubspotdevelopment"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center pb-0 pb-lg-5">
              <h2>
                Benefits of <span>E-Commerce Website Development</span>
              </h2>
              <p>
                Unlock the potential of online retail with an eCommerce website
                designed for success.
              </p>
            </div>

            <div className="webqstnt">
              <div className="webqstinnr left">
                <div className="qstbox right">
                  <div className="nmbrght">
                    <span className="nmmb">
                      <Image src={deecom1} alt="Wider Customer Reach Icon"/>
                    </span>
                    <span className="line"></span>
                  </div>
                  <h3>Wider Customer Reach</h3>
                  <p>
                    A wider reach allows you to reach customers beyond your
                    local area, breaking geographical barriers and offering your
                    products to potential buyers worldwide at any time,
                    increasing your market share.
                  </p>
                </div>
                <div className="qstbox left">
                  <div className="nmbrlft">
                    <span className="nmmb">
                      <Image src={deecom2} alt="Improved Customer Experience Icon"/>
                    </span>
                    <span className="line"></span>
                  </div>
                  <h3>Improved Customer Experience</h3>
                  <p>
                    By designing easy-to-navigate websites and offering features
                    like quick checkout and personalized recommendations,
                    customers are more likely to return and recommend your store
                    to others.
                  </p>
                </div>
                <div className="qstbox right wrfm">
                  <div className="nmbrght">
                    <span className="nmmb">
                    <Image src={deecom3} alt="Cost-Effective Marketing Icon"/>
                    </span>
                    <span className="line"></span>
                  </div>
                  <h3>Cost-Effective Marketing</h3>
                  <p>
                    With the right digital marketing strategies, you can target
                    specific audiences, optimize your search engine ranking, and
                    reach customers effectively while keeping marketing costs
                    manageable.
                  </p>
                </div>
                <div className="qstbox left wrfm">
                  <div className="nmbrlft">
                    <span className="nmmb">
                      <Image src={deecom4} alt="Increased Sales Icon"/>
                    </span>
                    <span className="line"></span>
                  </div>
                  <h3>Increased Sales Potential</h3>
                  <p>
                    Online marketing offers endless opportunities, from social
                    media campaigns to email marketing, enabling you to capture
                    new customers and encourage repeat purchases, which drives
                    sales growth.
                  </p>
                </div>
                <div className="qstbox right">
                  <div className="nmbrght">
                    <span className="nmmb">
                    <Image src={deecom5} alt="Automated Processes Icon"/>
                    </span>
                    <span className="line"></span>
                  </div>
                  <h3>Automated Processes</h3>
                  <p>
                    Automation not only saves time and reduces human error, but
                    it also ensures a streamlined workflow, allowing your
                    business to operate more efficiently while focusing on other
                    critical areas.
                  </p>
                </div>
                <div className="qstbox left">
                  <div className="nmbrlft">
                    <span className="nmmb">
                      <Image src={deecom6} alt="Better Insights and Analytics Icon"/>
                    </span>
                    <span className="line"></span>
                  </div>
                  <h3>Better Insights & Analytics</h3>
                  <p>
                    Make informed decisions, optimize your marketing strategies,
                    and improve your product offerings based on actual data,
                    which ultimately enhances your business’s overall
                    performance.
                  </p>
                </div>
              </div>
              <div className="webqstinnr center">
                <div className="linecenter"></div>
              </div>
              <div className="webqstinnr right">
                <div className="qstbox left">
                  <div className="nmbrlft">
                    <span className="nmmb">
                      <Image src={deecom2} alt="Improved Customer Experience Icon"/>
                    </span>
                    <span className="line"></span>
                  </div>
                  <h3>Improved Customer Experience</h3>
                  <p>
                    By designing easy-to-navigate websites and offering features
                    like quick checkout and personalized recommendations,
                    customers are more likely to return and recommend your store
                    to others.
                  </p>
                </div>

                <div className="qstbox left wrfm">
                  <div className="nmbrlft">
                    <span className="nmmb">
                      <Image src={deecom4} alt="Increased Sales Icon"/>
                    </span>
                    <span className="line"></span>
                  </div>
                  <h3>Increased Sales Potential</h3>
                  <p>
                    Online marketing offers endless opportunities, from social
                    media campaigns to email marketing, enabling you to capture
                    new customers and encourage repeat purchases, which drives
                    sales growth.
                  </p>
                </div>
                <div className="qstbox left">
                  <div className="nmbrlft">
                    <span className="nmmb">
                      <Image src={deecom6} alt="Better Insights and Analytics Icon"/>
                    </span>
                    <span className="line"></span>
                  </div>
                  <h3>Better Insights & Analytics</h3>
                  <p>
                    Make informed decisions, optimize your marketing strategies,
                    and improve your product offerings based on actual data,
                    which ultimately enhances your business’s overall
                    performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevEcomApproach;
