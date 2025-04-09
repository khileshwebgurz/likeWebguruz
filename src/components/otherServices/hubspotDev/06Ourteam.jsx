import Image from "next/image";
import Hbteam from "../../../../public/images/hubspotimages/m-team.webp";

function OurTeamhubspot() {
  return (
    <section id="ourTeamhbspt">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h2>
                Why Choose <span> HubSpot?</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="hbstsct">
              <div className="hbstm">
                <Image
                  src={Hbteam}
                  className="img-fluid"
                  alt="Hubspot Professional Services"
                />
              </div>
              <div className="svypmng">
                <div className="svypmnginr">
                  <h3>All-in-one platform</h3>
                  <p>
                    HubSpot offers a comprehensive suite of tools for marketing,
                    sales, and customer service.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h3>User-friendly Interface</h3>
                  <p>HubSpot is easy to learn and use.</p>
                </div>
                <div className="svypmnginr">
                  <h3>Scalability</h3>
                  <p>HubSpot can grow with your business.</p>
                </div>
                <div className="svypmnginr">
                  <h3>Integration with other tools</h3>
                  <p>HubSpot can be integrated with your existing systems.</p>
                </div>
                <div className="svypmnginr">
                  <h3>Strong community and support</h3>
                  <p>HubSpot has a large and active community of users.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeamhubspot;
