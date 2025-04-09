import React from "react";
import colab from "../../../public/images/lifewebguruzimages/asus.webp";
import customer from "../../../public/images/lifewebguruzimages/Customer.webp";
import Innovation from "../../../public/images/lifewebguruzimages/Innovation.webp";
import Integrity from "../../../public/images/lifewebguruzimages/Integrity.webp";
import Image from "next/image";

const spiritItems = [
  {
    image: colab,
    alt: "Collaboration Icon",
    title: "Collaboration",
    description: "We believe in the power of teamwork. By working together, we achieve great things.",
  },
  {
    image: customer,
    alt: "Customer-centricity Icon",
    title: "Customer-centricity",
    description: "Our focus is always on the customer. We understand their needs and go above and beyond to meet them.",
  },
  {
    image: Innovation,
    alt: "Innovation Icon",
    title: "Innovation",
    description: "Innovation is at the heart of what we do. We are always looking for new ways to improve and solve problems.",
  },
  {
    image: Integrity,
    alt: "Integrity Icon",
    title: "Integrity",
    description: "We value honesty and transparency in everything we do, ensuring that trust is built in every relationship.",
  },
];

const SpritWebguruz = () => {
  return (
    <section className="SpritWebguruz-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-lg-auto col-12 text-center heading-main">
            <h2 className="mb-4">
              Spirit of <span> WebGuruz</span>
            </h2>
            <p>
              The spirit of WebGuruz is defined by our commitment to excellence,
              innovation, and collaboration. We work together to achieve common
              goals while nurturing creativity and learning. The energy at
              WebGuruz is infectious, and it inspires us to take on challenges
              and push boundaries.
            </p>
          </div>
        </div>
        <div className="row">
          {spiritItems.map((item, index) => (
            <div key={index} className="col-md-6 col-12 mb-0 mb-lg-3">
              <div className="sprit-card">
                <div className="title-img mb-0 mb-lg-2">
                  <div className="sprit-img">
                    <Image src={item.image} alt={item.alt} />
                  </div>
                  <div className="sprit-title">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpritWebguruz;
