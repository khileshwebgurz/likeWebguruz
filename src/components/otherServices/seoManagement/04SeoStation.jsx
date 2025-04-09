import Image from "next/image";
import StationIcon1 from "../../../../public/images/webimages/station-icon-1.svg";
import StationIcon2 from "../../../../public/images/webimages/station-icon-2.svg";
import StationIcon3 from "../../../../public/images/webimages/station-icon-3.svg";
import StationIcon4 from "../../../../public/images/webimages/station-icon-4.svg";
import StationIcon5 from "../../../../public/images/webimages/station-icon-5.svg";
import StationIcon6 from "../../../../public/images/webimages/station-icon-6.svg";
const SeoStation = () => {
  return (
    <div className="web-scalable py-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-9 col-xs-12 heading-main text-center pb-5">
            <h2>
              Why WebGuruz?
              <br />
              {/* <span>Web Development Service</span> */}
            </h2>
            <span className="mb-3 d-inline-block">
              Our agency stands out from the competition due to our unwavering
              commitment to delivering exceptional results, a client-centric
              approach, and a deep understanding of SEO’s evolving landscape. We
              pride ourselves on being more than just a service provider; we are
              your trusted partner in achieving long-term growth. Here’s why
              WebGuruz is the top choice for businesses seeking SEO expertise:
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="web-development-stations-wrap">
              <div className="inner-flex-statins-list">
                <Image src={StationIcon1} alt="Proven Track Record Icon" />
                <h3 className="station-develop-title">Proven Track Record</h3>
                <p className="station-develop-peragraph">
                  With 16+ years of experience, we’ve successfully ranked
                  thousands of keywords and delivered exceptional results to our
                  clients.
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon2} alt="Tailored Strategies Icon" />
                <h3 className="station-develop-title"> Tailored Strategies</h3>
                <p className="station-develop-peragraph">
                  We create custom SEO strategies tailored to each client’s
                  unique needs, ensuring a personalized approach to success.
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon3} alt="Experienced Team Icon" />
                <h3 className="station-develop-title"> Experienced Team </h3>
                <p className="station-develop-peragraph">
                  Our SEO specialists have a deep understanding of the latest
                  SEO trends and algorithms.
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon4} alt="Transparent Reporting Icon" />
                <h3 className="station-develop-title">Transparent Reporting</h3>
                <p className="station-develop-peragraph">
                  We believe in full transparency, providing detailed reports so
                  you can track your progress every step of the way.
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon5} alt="Holistic Approach Icon" />
                <h3 className="station-develop-title"> Holistic Approach </h3>
                <p className="station-develop-peragraph">
                  We offer a full spectrum of SEO services, from technical to
                  content optimization, covering every aspect of SEO.
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon6} alt=" Client-Centric Focus Icon" />
                <h3 className="station-develop-title">Client-Centric Focus</h3>
                <p className="station-develop-peragraph">
                  We prioritize your business goals, working closely with you to
                  achieve the results you desire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoStation;
