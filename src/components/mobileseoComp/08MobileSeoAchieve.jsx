import Image from "next/image";
import experience from "../../../public/images/webimages/experience.svg";
import certified from "../../../public/images/webimages/certified.svg";
import successful from "../../../public/images/webimages/successful.svg";
import presence from "../../../public/images/webimages/presence.svg";
import clients from "../../../public/images/webimages/clients.svg";

const MobileSeoAchieve = () => {
  const achievements = [
    {
      image: experience,
      alt: "SEO Professionals Icon",
      count: "50+",
      label: "SEO Professionals",
    },
    {
      image: clients,
      alt: "Clients Served Icon",
      count: "500+",
      label: "Clients Served",
    },
    {
      image: certified,
      alt: "Years Experience Icon",
      count: "16+",
      label: "Years of Experience",
    },
    {
      image: successful,
      alt: "Projects Completed Icon",
      count: "1000+",
      label: "Projects Completed",
    },
  ];

  return (
    <section className="partnering-main mobile-seo-achievement">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6 col-xs-12 partnering-left">
            <h2 className="color-wt">Our Team is Your Team</h2>
            <span className="color-wt d-inline-block my-3">
              When you work with Webguruz, you gain a dedicated partner in
              achieving your goals. Our team excels in delivering top-notch
              Mobile SEO services.
            </span>
            <ul>
              <li>
                <h6 className="color-wt">
                  Skilled in the latest mobile SEO tools and techniques.
                </h6>
              </li>
              <li>
                <h6 className="color-wt">
                  Dedicated to delivering exceptional user experiences.
                </h6>
              </li>
              <li>
                <h6 className="color-wt">
                  Focused on measurable results and ROI.
                </h6>
              </li>
              <li>
                <h6 className="color-wt">
                  Committed to understanding your business needs.
                </h6>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-xs-12 partnering-right heading-main">
            <h2>
              <span>Proven SEO Expertise </span> for Guaranteed Success
            </h2>
            <ul className="mt-5">
              {achievements.map((achievement, index) => (
                <li key={index}>
                  <div className="image-icon">
                    <Image src={achievement.image} alt={achievement.alt} />
                  </div>
                  <div className="content-icon">
                    <h6>{achievement.count}</h6>
                    <p>{achievement.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSeoAchieve;
