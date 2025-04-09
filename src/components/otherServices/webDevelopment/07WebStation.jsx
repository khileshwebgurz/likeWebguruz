import Image from "next/image";
import StationIcon1 from "/public/images/webimages/station-icon-1.svg";
import StationIcon2 from "/public/images/webimages/station-icon-2.svg";
import StationIcon3 from "/public/images/webimages/station-icon-3.svg";
import StationIcon4 from "/public/images/webimages/station-icon-4.svg";
import StationIcon5 from "/public/images/webimages/station-icon-5.svg";
import StationIcon6 from "/public/images/webimages/station-icon-6.svg";
const WebStation = () => {
  return (
    <div className="web-scalable py-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-9 col-xs-12 heading-main text-center pb-5">
            <h2>
              Why <span>WebGuruz?</span>
            </h2>
            <span className="mb-2 d-inline-block">
              We&apos;re your one-stop destination for all your web development
              needs.
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="web-development-stations-wrap">
              <div className="inner-flex-statins-list">
                <Image src={StationIcon1} alt="Creative Team Icon" />
                <h3 className="station-develop-title">
                  Cost-Effective Process
                </h3>
                <p className="station-develop-peragraph">
                  We work closely with you to understand your budget constraints
                  and tailor our services accordingly, ensuring that you get the
                  most value for your investment.
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image
                  src={StationIcon2}
                  alt="All Services Under One Roof Icon"
                />
                <h3 className="station-develop-title">
                  {" "}
                  All Services Under One Roof{" "}
                </h3>
                <p className="station-develop-peragraph">
                  By partnering with WebGuruz, you can streamline your project
                  management process and enjoy the convenience of having a
                  single point of contact.
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon3} alt="Creative Team Icon" />
                <h3 className="station-develop-title"> Creative Team </h3>
                <p className="station-develop-peragraph">
                  Our creative experts will work closely with you to understand
                  your brand identity and target audience, and then develop a
                  unique and engaging online presence that sets you apart from
                  the competition.
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon4} alt="24/7 Support Icon" />
                <h3 className="station-develop-title"> 24/7 Support </h3>
                <p className="station-develop-peragraph">
                  Whether you need help troubleshooting a technical issue or
                  simply have a query about your website&apos;s performance,
                  we&apos;re here to provide prompt assistance.
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image
                  src={StationIcon5}
                  alt="New Technology Integration Icon"
                />
                <h3 className="station-develop-title">
                  New Technology Integration
                </h3>
                <p className="station-develop-peragraph">
                  We leverage innovative tools and techniques to enhance your
                  website&apos;s functionality, performance, and user
                  experience.
                </p>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon6} alt="Post-Deployment Services Icon" />
                <h3 className="station-develop-title">
                  Post-Deployment Services
                </h3>
                <p className="station-develop-peragraph">
                  Our commitment to your success doesn&apos;t end once your
                  website goes live. We offer ongoing maintenance and support
                  services to ensure that your website remains optimized,
                  secure, and up-to-date, always.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebStation;
