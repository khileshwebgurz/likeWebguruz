import React from "react";
import our1 from "../../../public/images/parichayimgs/parichay-connect-1.webp";
import our2 from "../../../public/images/parichayimgs/parichay-connect-2.webp";
import our3 from "../../../public/images/parichayimgs/parichay-connect-3.webp";
import Image from "next/image";

const ParichayConnect = () => {
  const stayCards = [
    {
      image: our1,
      title: "Expert Mentorship",
      description:
        "Learn directly from seasoned professionals with years of industry experience. Our trainers are committed to equipping you with the knowledge and skills needed to thrive in your chosen field.",
      alt:"Mentorship Icon",    
      },
    {
      image: our2,
      title: "Hands-On Learning",
      description:
        "Go beyond theory with practical, project-based learning. Gain firsthand experience by working on real-world projects, ensuring you’re job-ready by the end of the program.",
        alt:"Hands-On Learning Icon",
    },
    {
      image: our3,
      title: "Career Advancement Opportunities",
      description:
        "Build a strong portfolio, receive a prestigious certification, and open doors to exciting job prospects. Parichay is the stepping stone you need for a successful career.",
        alt:"Career Opportunities Icon",
    },
  ];

  return (
    <div className="Stayconnect-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center">
            <h2>
              Why <span>Enroll?</span>
            </h2>
          </div>
        </div>
        <div className="row stay pt-5">
          {stayCards.map((card, index) => (
            <div className="col-md-4 col-12" key={index}>
              <div className="stay-card">
                <Image src={card.image} alt={card.alt} />
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParichayConnect;
