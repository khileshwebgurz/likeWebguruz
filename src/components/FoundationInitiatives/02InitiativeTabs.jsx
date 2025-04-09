"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";


const foundationData = [
  {
    eventKey: "experts",
    title: "Healthcare",
    alt: "Healthcare",
    content: `
      <h3>Healthcare</h3>
      <p>
        Primary healthcare, fundamental hygiene awareness, and the treatment of
        impoverished patients all demand attention.
      </p>
      <p>
        Along with that, we organized a vaccination camp that welcomed all our
        employees and their family members to get vaccinated in our office
        premises.
      </p>
      <h4 className="initative-tab-heading">Covaxin:</h4>
      <p>
        COVAXIN is included along with immune-potentiators, also known as
        vaccine adjuvants, which are added to the vaccine to increase and boost
        its immunogenicity.
      </p>
      <h4 className="initative-tab-heading">Vaccinated</h4>
      <div className="iniitiative-tab-image row">
        <div className="image-1">
          <img src="/images/foundationimages/vaccine-1.webp" alt="Vaccine Certificate 1" />
        </div>
        <div className="image-1">
          <img src="/images/foundationimages/vaccine-2.webp" alt="Vaccine Certificate 2" />
        </div>
        <div className="image-1">
           <img src="/images/foundationimages/vaccine-3.webp" alt="Vaccine Certificate 3" />
        </div>
        <div className="image-1">
          <img src="/images/foundationimages/vaccine-4.webp" alt="Vaccine Certificate 4" />
        </div>
        <div className="image-1">
          <img src="/images/foundationimages/vaccine-5.webp" alt="Vaccine Certificate 5" />
        </div>
        <div className="image-1">
           <img src="/images/foundationimages/vaccine-6.webp" alt="Vaccine Certificate 6" />
        </div>
        <div className="image-1">
           <img src="/images/foundationimages/vaccine-7.webp" alt="Vaccine Certificate 7" />
        </div>
        <div className="image-1">
          <img src="/images/foundationimages/vaccine-8.webp" alt="Vaccine Certificate 8" />
        </div>
      </div>
      <h4>Vaccination Camp at Webguruz</h4>
       <div className="iniitiative-tab-image iniitiative-tab-image-2 row">
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-1.webp" alt="Vaccination Camp 1" />
        </div>
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-2.webp" alt="Vaccination Camp 2" />
        </div>
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-3.webp" alt="Vaccination Camp 3" />
        </div>
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-4.webp" alt="Vaccination Camp 4" />
        </div>
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-5.webp" alt="Vaccination Camp 5" />
        </div>
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-6.webp" alt="Vaccination Camp 6" />
        </div>
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-7.webp" alt="Vaccination Camp 7" />
        </div>
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-8.webp" alt="Vaccination Camp 8" />
        </div>
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-9.webp" alt="Vaccination Camp 9" />
        </div>
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-10.webp" alt="Vaccination Camp 10" />
        </div>
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-11.webp" alt="Vaccination Camp 11" />
        </div>
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-12.webp" alt="Vaccination Camp 12" />
        </div>
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-13.webp" alt="Vaccination Camp 13" />
        </div>
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-14.webp" alt="Vaccination Camp 14" />
        </div>
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-15.webp" alt="Vaccination Camp 15" />
        </div>
        <div className="image-1 image-2">
          <img src="/images/foundationimages/foundation-16.webp" alt="Vaccination Camp 16" />
        </div>
      </div>
      `,
  },
  {
    eventKey: "Records",
    title: "Education",
    alt: "Custom Solution",
    content: `
      <h3>Education</h3>
      <p>
        Education provides a foundation for young people to reach their full
        potential. Millions of children, however, drop out of school due to
        financial constraints. Through global relationships, the Webguruz
        Foundation promotes primary education among poor children.
      </p>
      <p>
        We have sponsored a good amount of under privileged kids around the area
        and have successfully helped in their development.
      </p>
      <h4>Getting rid of hunger in the classroom</h4>
      <p>
        Feeding students so that they do not have to work to pay for their meals
        is one of the most effective ways to reduce school dropout rates.
      </p>
      <p>
        Anyone seeking help with education for any under privileged kids can get
        in touch with us at
        <a
          href="mailto:jp@webguruz.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          jp@webguruz.in
        </a>
      </p>`,
  },
  {
    eventKey: "Reviews",
    title: "Sports",
    alt: "Sports",
    content: `<h3>Sports</h3>
      <p>
        We are what we do over and over again. Excellence, then, is a habit, not
        an act. The Webguruz Foundation staff passionately believes in this
        proverb, as well as the idea that athletes who work hard to reach their
        full potential can inspire many others to do the same. We also encourage
        greater health and overall well-being for our athletes, a level playing
        field for all genders, and an inclusive society overall by supporting
        both able-bodied and differently-abled athletes through our work and the
        support we provide.
      </p>
      <p>
        We have formed a cricket team named PantherX1 which plays a lead role.
      </p>
      <strong>
        The team also have an official Facebook page:
        <a
          href="https://www.facebook.com/PantherX1"
          target="_blank"
          rel="noopener noreferrer"
        >
          @PantherX1
        </a>
      </strong>`,
  },
];

const InitiativeTabs = () => {
  return (
    <div className="found-section-tabs py-5">
      <div className="container">
        <div className="row found-tabs-row  ">
          <div className="col-md-8 col-12">
            <div className="tabs-section">
              <Tabs
                defaultActiveKey="experts"
                id="foundation-tab-example"
                className="foundation-tabs pb-0"
              >
                {foundationData.map((tab) => (
                  <Tab
                    eventKey={tab.eventKey}
                    title={tab.title}
                    key={tab.eventKey}
                  >
                    <div className="foundation-content image-content">
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: tab.content }}
                      />
                    </div>
                  </Tab>
                ))}
              </Tabs>
            </div>
          </div>

          <div className="col-md-4 col-12 mt-5 mt-md-0">
            <div className="aside">
              <div className="contant-info">
                <div className="mail">
                  <p>
                    <a
                      href="mailto:info@webguruz.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faEnvelope} height={20} />
                      write us
                    </a>
                  </p>
                  <p>
                    <a href="tel:01724666711">
                      {" "}
                      <FontAwesomeIcon icon={faPhone} height={20} />
                      0172 4666 711
                    </a>
                  </p>
                  <a href="#" className="explore-btn found-btn mt-2">
                    view gallery
                  </a>
                </div>
                <h3 className="mt-4">Disclaimer</h3>
                <p>
                  We are not a registered NGO yet; all the activities are being
                  performed under personal choice.
                </p>
                <p>
                  If you come across any fake messages circulating on social
                  media pertaining to the association with Webguruz, please
                  contact <a href="tel:01724666711">0172-4666711, 712</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitiativeTabs;
