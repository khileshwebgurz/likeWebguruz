import Image from "next/image";
import StationIcon1 from "/public/images/hubspotmigrationimages/stationicon1.webp";
import StationIcon2 from "/public/images/hubspotmigrationimages/stationicon2.webp";
import StationIcon3 from "/public/images/hubspotmigrationimages/stationicon3.webp";
import StationIcon4 from "/public/images/hubspotmigrationimages/stationicon4.webp";
import StationIcon5 from "/public/images/hubspotmigrationimages/stationicon5.webp";
import StationIcon6 from "/public/images/hubspotmigrationimages/stationicon6.webp";

const specialties = [
  {
    image: StationIcon1,
    title: "Expertise in complex data migrations",
    alt: "Data Migrations Icon",
  },
  {
    image: StationIcon2,
    title: "Robust data security protocols",
    alt: "Data Security Protocols Icon",
  },
  {
    image: StationIcon3,
    title: "Tailored workflows and automation",
    alt: "Workflows and Automation Icon",
  },
  {
    image: StationIcon4,
    title: "Comprehensive support and training",
    alt: "Support and Training Icon",
  },
  {
    image: StationIcon5,
    title: "Dedicated account managers",
    alt: "Account Managers Icon",
  },
  {
    image: StationIcon6,
    title: "Scalable solutions for growing businesses",
    alt: "Scalable Solutions Icon",
  },
];

const WhyHubMigrate = () => {
  return (
    <div className="web-scalable why-hub-migration py-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-9 col-xs-12 heading-main text-center pb-5">
            <h2>
              Our Specialties as a <span>HubSpot Migration Partner</span>
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="web-development-stations-wrap migration-wrap">
              {specialties.map((specialty, index) => (
                <div className="inner-flex-statins-list" key={index}>
                  <Image src={specialty.image} alt={specialty.alt} />
                  <h3 className="station-develop-title">{specialty.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHubMigrate;
