
import WebdevForm from "@/utils/formsHubspot/Webdeveform";
const BoostHubRank = () => {
  return (
    <>
      <section className="scrfrm hub-ranking py-5" id="hubrank-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 content-left heading-main">
              <h2 className="text-white">
                <strong>Fast-Track Business Growth</strong> with Hubspot
              </h2>
              <p className="mt-3 mb-4 text-white">
              HubSpot offers a wide range of benefits for businesses of all sizes. By leveraging HubSpot&apos;s powerful features, you can streamline your sales and marketing processes, improve customer relationships, and drive growth. Some of the key benefits include:
              </p>
              <div className="py-4 hub-icons">
                <ul>
                  <li>
                    <span className="number-hub">1</span>
                    <p>Expert Support and Maintenance</p>
                  </li>
                  <li>
                  <span className="number-hub">2</span>
                    <p>Extensive Experience and Expertise</p>
                  </li>
                  <li>
                  <span className="number-hub">3</span>
                    <p>Affordable and Scalable Solutions</p>
                  </li>
                  <li>
                  <span className="number-hub">4</span>
                    <p>Dedicated Team of Technical Experts</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              {/* <HubspotForm /> */}
              <WebdevForm/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoostHubRank;
