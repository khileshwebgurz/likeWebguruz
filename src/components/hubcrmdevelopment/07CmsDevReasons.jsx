import Image from "next/image";
import StationIcon1 from "../../../public/images/hubspotcmsdevimg/hub-crm-benefit1.webp";
import StationIcon2 from "/public/images/hubspotcmsdevimg/crmbenefit2.webp";
import StationIcon3 from "/public/images/hubspotcmsdevimg/crmbenefit3.webp";
import StationIcon4 from "/public/images/hubspotcmsdevimg/crmbenefit4.webp";
import StationIcon5 from "/public/images/hubspotcmsdevimg/crmbenefit5.webp";
import StationIcon6 from "/public/images/hubspotcmsdevimg/hub-crm-benefit6.webp";
const CmsDevReasons = () => {
  return (
    <div className="web-scalable cms-dev-reasons py-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-9 col-xs-12 heading-main text-center pb-3 pb-sm-5">
            <h2>
              Benefits of HubSpot <span>CMS Development</span>
            </h2>
            <span className="mb-2 d-inline-block">
              Enjoy a host of benefits that improve both the user experience and
              backend management. Here&apos;s why HubSpot CMS is a game-changer
              for your business:
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="web-development-stations-wrap">
              <div className="inner-flex-statins-list">
                <Image src={StationIcon1} alt="User Experience Icon" />
                <h3 className="station-develop-title">
                  Enhanced User Experience
                </h3>
                <p className="station-develop-peragraph">
                  HubSpot CMS delivers a seamless user experience, providing
                  fast, mobile-optimized, and engaging websites that keep
                  visitors coming back.
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon2} alt="Scalable Growth Icon" />
                <h3 className="station-develop-title">Scalable Growth</h3>
                <p className="station-develop-peragraph">
                  HubSpot CMS grows with your business, offering the flexibility
                  to add new features as your needs evolve.
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon3} alt="Content Management Icon" />
                <h3 className="station-develop-title">
                  Effortless Content Management
                </h3>
                <p className="station-develop-peragraph">
                  The drag-and-drop editor allows you to easily create and
                  manage content without requiring technical expertise.
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon4} alt="SEO-Friendly Features Icon" />
                <h3 className="station-develop-title">SEO-Friendly Features</h3>
                <p className="station-develop-peragraph">
                  Built-in SEO tools make it easier to optimize your site and
                  rank higher on search engines, driving organic traffic.
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image
                  src={StationIcon5}
                  alt="Integration with HubSpot CRM Icon"
                />
                <h3 className="station-develop-title">
                  Better Integration with HubSpot CRM
                </h3>
                <p className="station-develop-peragraph">
                  HubSpot CMS seamlessly integrates with HubSpot CRM, allowing
                  you to manage customer relationships and data more
                  effectively.
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon6} alt="Security & Reliability Icon" />
                <h3 className="station-develop-title">
                  Security & Reliability
                </h3>
                <p className="station-develop-peragraph">
                  HubSpot CMS ensures your website is secure, regularly updated,
                  and protected from cyber threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmsDevReasons;
