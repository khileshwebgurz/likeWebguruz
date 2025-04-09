import Image from "next/image";
import award1 from "/public/images/award1.svg";
import award2 from "/public/images/award2.svg";
import award3 from "/public/images/award3.svg";
import award4 from "/public/images/award4.svg";
import award5 from "/public/images/award5.svg";
import award7 from "/public/images/award7.svg";
import award6 from '../../../public/images/HomeTechExpert/techexpert15.svg';

import logo5 from "/public/images/hubspotlogo.svg"
// Add URLs to the awards data
const awardsData = [
  { src: award1, alt: "Upwork Logo", text: "UPWORK", link: "https://www.upwork.com/ag/webguruz" },
  { src: award2, alt: "Good Firms Logo", text: "GOOD FIRMS", link: "https://www.goodfirms.co/company/webguruz-technologies-pvt-ltd" },
  { src: award3, alt: "Design Rush Logo", text: "DESIGN RUSH", link: "https://www.designrush.com/agency/profile/webguruz-technologies" },
  { src: award5, alt: "TopSEOs Logo", text: "TopSEOs", link: "https://www.topseos.com/profile/webguruz-technologies-private-limited" },
  { src: award6, alt: "SEMrush Logo", text: "SEMrush", link: "https://www.semrush.com/agencies/webguruz-technologies-pvt-ltd/" },
  { src: award4, alt: "Clutch Logo", text: "CLUTCH", link: "https://clutch.co/profile/webguruz-technologies" },
  { src: award7, alt: "Google Partner Logo", text: "GOOGLE PARTNER", link: "https://skillshop.credential.net/8caff776-5cc0-440f-ad17-61d28706434c#gs.gu4xph" },
  {src: logo5, alt: "HubSpot Academy Solution Partner",text:"HubSpot Solutions Partner",link:"https://app.hubspot.com/academy/achievements/kdcxj2ml/en/1/jaswinder-singh/hubspot-solutions-partner"},
];

const Homeaward = () => {
  return (
    <section className="award-main py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-4">
            <h2>
              Award & <span>Recognition</span>
            </h2>
            <p>
              Our services are proven to help clients achieve success. And the awards we have won stand testament to this fact.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <ul className="award-list">
              {awardsData.map((award, index) => (
                <li key={index}>
                  <a href={award.link} target="_blank" rel="noopener noreferrer"> {/* Link added */}
                    <Image src={award.src} alt={award.alt} />
                    <p>{award.text}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeaward;
