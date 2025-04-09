import React from "react";
import our from "../../../public/images/lifewebguruzimages/team-our.webp";
import thumbup from "../../../public/images/lifewebguruzimages/thumb-up.webp";
import newsletter from "../../../public/images/lifewebguruzimages/newsletter.webp";
import Image from "next/image";

const WgzStayConnect = () => {
  const stayCards = [
    {
      image: our,
      title: "Join Our Team",
      description:
        "Are you ready to make a difference? Join WebGuruz and be part of a team that values innovation and collaboration.",
        alt:'Join Our Team Icon',
    },
    {
      image: thumbup,
      title: "Stay Upto Date",
      description:
        "Stay connected with the latest news, updates, and innovations from WebGuruz.",
        alt:'Stay Upto Date Icon'
    },
    {
      image: newsletter,
      title: "Email Newsletter",
      description:
        "Subscribe to our newsletter and get insights, news, and updates straight to your inbox.",
        alt:'Email Newsletter Icon'
    },
  ];

  return (
    <div className="Stayconnect-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center">
            <h2>
              Stay <span>Connected</span>
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

export default WgzStayConnect;
