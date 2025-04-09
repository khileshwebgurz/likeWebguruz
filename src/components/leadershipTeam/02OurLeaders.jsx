import React from "react";
import jassteam from "../../../public/images/leadershipImages/jass-team.webp";
import vinny from "../../../public/images/leadershipImages/vinny.webp";
import gagan from "../../../public/images/leadershipImages/gagandeep.webp";
import bd1 from "../../../public/images/leadershipImages/bd1.webp";
import bd2 from "../../../public/images/leadershipImages/bd2.webp";
import bd3 from "../../../public/images/leadershipImages/bd3.webp";
import dev1 from "../../../public/images/leadershipImages/dev1.webp";
import dev2 from "../../../public/images/leadershipImages/dev2.webp";
import dev3 from "../../../public/images/leadershipImages/dev3.webp";
import test1 from "../../../public/images/leadershipImages/test1.webp";
import dots from "../../../public/images/leadershipImages/dots-pattern.webp";
import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faWhatsapp, faFacebook, faLinkedin, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";

const leaders = [
  {
    name: "Mr. Jaswinder Singh",
    title: "CEO, Co-Founder",
    email: "jaswinderchawla@gmail.com",
    phone: "999-999-9999",
    whatsapp: "999-999-9999",
    description:
      "Jaswinder Singh is the CEO of WebGuruz Technologies Pvt Ltd, a visionary leader with a track record of driving digital innovation. Certified in HubSpot Inbound Marketing, Google AdWords, and WooRank, Jaswinder’s expertise has been instrumental in shaping the digital marketing division at Webguruz. He excels in crafting tailored online marketing strategies that amplify brand visibility, making him a driving force in the success of numerous businesses. His mentorship inspires his team to push boundaries, setting a standard of excellence that makes WebGuruz a dynamic place to work.",
    image: jassteam,
    dotsImage: dots,
    socialLinks: {
      facebook: "https://www.facebook.com/webguruztechnologies/",
      twitter: "https://twitter.com/Webguruz",
      linkedin: "https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./",
      instagram: "https://www.instagram.com/webguruz",
    },
  },
  {
    name: "Mr. Gagandeep Singh",
    title: "Co-Founder & Investor",
    email: "jaswinderchawla@gmail.com",
    phone: "999-999-9999",
    whatsapp: "999-999-9999",
    description:
      "Gagandeep Singh, Co-Founder of WebGuruz Technologies Pvt Ltd, brings over 17 years of rich experience in IT infrastructure, DevOps, and agile methodologies. As a tech entrepreneur, he has also co-founded two other successful ventures, including a digital healthcare company. Gagandeep’s expertise in IT infrastructure and middleware makes him the backbone of Webguruz’s operations, where he fosters innovation and resilience. His leadership and deep technical insight create an empowering environment that encourages collaboration and cutting-edge solutions.",
    image: gagan,
    dotsImage: dots,
    socialLinks: {
      facebook: "https://www.facebook.com/webguruztechnologies/",
      twitter: "https://twitter.com/Webguruz",
      linkedin: "https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./",
      instagram: "https://www.instagram.com/webguruz",
    },
  },
  {
    name: "Mrs. Vinny Singh",
    title: "Head, People & Culture",
    email: "jaswinderchawla@gmail.com",
    phone: "999-999-9999",
    whatsapp: "999-999-9999",
    description:
      "Vinny Singh, an accomplished HR professional, brings a wealth of experience in managing the complete employee lifecycle, from recruitment to exit. Skilled in end-to-end recruitment for various sectors, including finance, manufacturing, and media, she also excels in learning and development and talent acquisition. Her holistic approach to HR nurtures a culture of growth and continuous improvement, making WebGuruz a place where every team member is supported and valued.",
    image: vinny,
    dotsImage: dots,
    socialLinks: {
      facebook: "https://www.facebook.com/webguruztechnologies/",
      twitter: "https://twitter.com/Webguruz",
      linkedin: "https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./",
      instagram: "https://www.instagram.com/webguruz",
    },
  },
  {
    name: "Mr. Suddit Kaura",
    title: "Head, Business Development",
    email: "jaswinderchawla@gmail.com",
    phone: "999-999-9999",
    whatsapp: "999-999-9999",
    description:
      "Suddit Kaura, Business Development Manager (BDM) at WebGuruz Technologies Pvt Ltd, is a seasoned digital marketing specialist with a proven track record in SEO, Google AdWords, and social media optimization. His expertise in online strategy and content creation has helped drive substantial growth in the IT sector. Suddit’s dedication to finding innovative solutions to complex challenges makes him an inspiring leader who fosters a high-energy, results-driven work environment.",
    image: bd1,
    dotsImage: dots,
    socialLinks: {
      facebook: "https://www.facebook.com/webguruztechnologies/",
      twitter: "https://twitter.com/Webguruz",
      linkedin: "https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./",
      instagram: "https://www.instagram.com/webguruz",
    },
  },
  {
    name: "Mr. Avtar Singh",
    title: "Business Development Manager",
    email: "jaswinderchawla@gmail.com",
    phone: "999-999-9999",
    whatsapp: "999-999-9999",
    description:
      "Avtar Singh, a Business Development Manager (BDM) at WebGuruz Technologies Pvt Ltd, is a pivotal member of the team with over a decade of experience in sales and business strategy. Known for identifying growth opportunities and scaling businesses, Avtar has been instrumental in expanding the reach of Webguruz’s digital services. His strategic approach and market insight make him a valuable mentor, encouraging a culture of excellence and innovation.",
    image: bd2,
    dotsImage: dots,
    socialLinks: {
      facebook: "https://www.facebook.com/webguruztechnologies/",
      twitter: "https://x.com/Webguruz",
      linkedin: "https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./",
      instagram: "https://www.instagram.com/webguruz",
    },
  },
  {
    name: "Mr. Jaspreet Singh",
    title: "Business Development Manager",
    email: "jaswinderchawla@gmail.com",
    phone: "999-999-9999",
    whatsapp: "999-999-9999",
    description:
      "Jaspreet Singh, a Business Development Manager (BDM) at WebGuruz Technologies Pvt Ltd, is passionate about building resilient teams and scalable systems. With a natural talent for mentoring, he is solution-focused, decisive, and dedicated to delivering results. Jaspreet’s commitment to organizational growth and his forward-thinking leadership make him an inspiring figure at Webguruz, where he nurtures a culture of problem-solving and teamwork.",
    image: bd3,
    dotsImage: dots,
    socialLinks: {
      facebook: "https://www.facebook.com/webguruztechnologies/",
      twitter: "https://twitter.com/Webguruz",
      linkedin: "https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./",
      instagram: "https://www.instagram.com/webguruz",
    },
  },
  {
    name: "Mrs. Parul Sen",
    title: "Web Development Project Manager",
    email: "jaswinderchawla@gmail.com",
    phone: "999-999-9999",
    whatsapp: "999-999-9999",
    description:
      "Parul Sen, a Project Manager at WebGuruz Technologies Pvt Ltd, has over a decade of experience in web development. Known for her dedication and technical expertise, Parul is both compassionate and highly skilled, setting a high standard in project management. Her blend of empathy and professionalism motivates her team, fostering a supportive and dynamic workplace where quality work thrives.",
    image: dev1,
    dotsImage: dots,
    socialLinks: {
      facebook: "https://www.facebook.com/webguruztechnologies/",
      twitter: "https://twitter.com/Webguruz",
      linkedin: "https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./",
      instagram: "https://www.instagram.com/webguruz",
    },
  },
  {
    name: "Mr. Yogesh Vohra",
    title: "Sr. Web Developer",
    email: "jaswinderchawla@gmail.com",
    phone: "999-999-9999",
    whatsapp: "999-999-9999",
    description:
      "Yogesh Vohra is a Senior Web Developer at WebGuruz Technologies Pvt Ltd, specializing in PHP and WordPress with over six years of experience. His technical skills and attention to detail have earned him a reputation as a talented young developer. Yogesh’s innovative approach and eagerness to learn bring fresh ideas to the team, making WebGuruz a place where talent and creativity are celebrated.",
    image: dev2,
    dotsImage: dots,
    socialLinks: {
      facebook: "https://www.facebook.com/webguruztechnologies/",
      twitter: "https://twitter.com/Webguruz",
      linkedin: "https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./",
      instagram: "https://www.instagram.com/webguruz",
    },
  },
  {
    name: "Mr. Sukhpal Singh",
    title: "Sr. Web Developer",
    email: "jaswinderchawla@gmail.com",
    phone: "999-999-9999",
    whatsapp: "999-999-9999",
    description:
      "Sukhpal Singh, a Senior Web Developer at WebGuruz Technologies Pvt Ltd, joined the team in 2018 and has consistently delivered top-notch work in web development. Known for his commitment to excellence, Sukhpal’s contributions have helped WebGuruz build a strong reputation for quality. His dedication to growth and continual improvement embodies the collaborative and innovative spirit that defines Webguruz.",
    image: dev3,
    dotsImage: dots,
    socialLinks: {
      facebook: "https://www.facebook.com/webguruztechnologies/",
      twitter: "https://twitter.com/Webguruz",
      linkedin: "https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./",
      instagram: "https://www.instagram.com/webguruz",
    },
  },
  {
    name: "Mrs. Paru Sharma",
    title: "Head, Quality & Testing",
    email: "jaswinderchawla@gmail.com",
    phone: "999-999-9999",
    whatsapp: "999-999-9999",
    description:
      "Paru Sharma is a senior Quality Analyst (QA) at WebGuruz Technologies Pvt Ltd, with a strong track record of precision and efficiency. Since joining in 2020, Paru’s expertise and attention to detail have quickly propelled her to a leadership position within the testing team. Her rigorous approach ensures high standards, making her an integral part of Webguruz’s commitment to delivering top-quality services.",
    image: test1,
    dotsImage: dots,
    socialLinks: {
      facebook: "https://www.facebook.com/webguruztechnologies/",
      twitter: "https://twitter.com/Webguruz",
      linkedin: "https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./",
      instagram: "https://www.instagram.com/webguruz",
    },
  },
];

const OurLeaders = () => {
  return (
    <section className="leadership-title py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
            Meet Our <strong>Leadership Team</strong>
            </h2>
            <p>Team us with us Today for an unfogettable Service experience.</p>
          </div>
        </div>

        {leaders.map((leader, index) => (
          <div key={index} className="row align-items-center py-3">
            {index % 2 === 0 ? (
              <>
                <div className="col-md-4">
                  <div className="leadership-left leader-img">
                    <div className="leader-main-img">
                      <Image src={leader.image} alt={leader.name} width={400} height={400} />
                    </div>
                    <div className="leader-ship-title text-center">
                      <h4 className=" m-0 name">{leader.name}</h4>
                      <span className="title">{leader.title}</span>
                    </div>
                    <div className="dot-image">
                      <Image src={leader.dotsImage} alt="dots" width={100} height={100} />
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <LeaderDetails leader={leader} />
                </div>
              </>
            ) : (
              <>
                <div className="col-md-8">
                  <LeaderDetails leader={leader} />
                </div>
                <div className="col-md-4">
                  <div className="leadership-left leader-img">
                    <div className="leader-main-img">
                      <Image src={leader.image} alt={leader.name} width={400} height={400} />
                    </div>
                    <div className="leader-ship-title text-center">
                      <h4 className=" m-0 name">{leader.name}</h4>
                      <span className="title">{leader.title}</span>
                    </div>
                    <div className="dot-image">
                      <Image src={leader.dotsImage} alt="dots" width={100} height={100} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const LeaderDetails = ({ leader }) => (
  <div className="leadership-right">
    <div className="leadership-title">
      <h3>Details</h3>
      <div className="leadership-details  mb-lg-3 mb-0 d-flex gap-3">
        {/* <a href={`mailto:${leader.email}`} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="list-text">{leader.email}</span>
        </a>
        <a href={`tel:${leader.phone}`} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPhone} />
          <span className="list-text">{leader.phone}</span>
        </a>
        <a href={`https://wa.me/${leader.whatsapp}`} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
          <span className="list-text">{leader.whatsapp}</span>
        </a> */}
      </div>
      <p>{leader.description}</p>
      <div className="social-media-icon">
        {/* <ul className="d-flex align-items-center justify-content-start">
          <li className="px-2">
            <a href={leader.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} height={20} />
            </a>
          </li>
          <li className="px-2">
            <a href={leader.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faXTwitter} height={20} />
            </a>
          </li>
          <li className="px-2">
            <a href={leader.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} height={20} />
            </a>
          </li>
          <li className="px-2">
            <a href={leader.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} height={20} />
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  </div>
);

export default OurLeaders;
