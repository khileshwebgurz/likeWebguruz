
import Image from "next/image";
import frontendimg from "/public/images/webimages/frontendimg.svg";
import backendimg from "/public/images/webimages/backendimg.svg";
import frontend1 from "/public/images/webimages/frontend1.svg";
import frontend2 from "/public/images/webimages/frontend2.svg";
import frontend3 from "/public/images/webimages/frontend3.svg";
import frontend4 from "/public/images/webimages/frontend4.svg";
import frontend5 from "/public/images/webimages/frontend5.svg";
import frontend6 from "/public/images/webimages/frontend6.svg";
import frontend7 from "/public/images/webimages/frontend7.svg";
import frontend8 from "/public/images/webimages/frontend8.svg";
import frontend9 from "/public/images/webimages/frontend9.svg";
import frontend10 from "/public/images/webimages/frontend10.svg";

import backend1 from "/public/images/webimages/backend1.svg";
import backend2 from "/public/images/webimages/backend2.svg";
import backend3 from "/public/images/webimages/backend3.svg";
import backend4 from "/public/images/webimages/backend4.svg";
import backend5 from "/public/images/webimages/backend5.svg";
import backend6 from "/public/images/webimages/backend6.svg";
import backend7 from "/public/images/webimages/backend7.svg";
import backend8 from "/public/images/webimages/backend8.svg";
import backend9 from "/public/images/webimages/backend9.svg";



const frontendTech = [
  { image: frontend3, text: "React Js" },
  { image: frontend2, text: "Angular Js" },
  { image: frontend4, text: "Vue Js" },
  { image: frontend5, text: "Svelte" },
  { image: frontend6, text: "Solid" },
  { image: frontend7, text: "Qwik" },
  { image: frontend8, text: "Ember" },
  { image: frontend9, text: "Alpine Js" },
  { image: frontend10, text: "Preact" },
];

const backendTech = [
  { image: backend1, text: "ASP.NET Core" },
  { image: backend2, text: "Node Js" },
  { image: backend3, text: "Python (Django, Flask)" },
  { image: backend4, text: "Ruby on Rails" },
  { image: backend5, text: "Laravel" },
  { image: backend6, text: "Express Js" },
  { image: backend7, text: "CakePHP" },
  { image: backend8, text: "Spring Boot" },
  { image: backend9, text: "Phoenix" },
]

const TechSection = ({ title, techList, imgSrc, imgAlt, textAlign }) => (
  <div className={`row align-items-center ${textAlign === "end" ? "reverse" : ""}`}>
    <div className="col-sm-6 col-xs-12 image">
      <p className={`text-${textAlign}`}>{title}</p>
      <Image src={imgSrc} alt={imgAlt} />
    </div>
    <div className="col-sm-6 col-xs-12 logoicon-img">
      <ul>
        {techList.map(({ image, text }, index) => (
          <li key={index}>
            <div className="image">
              <Image src={image} alt={`${text} Icon`} />
            </div>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const WebScalable = () => {
  return (
    <section className="web-scalable py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-5">
            <h2>
            <span>Web Development Frameworks</span> We Use
            </h2>
            <p>
            Our expertise in popular frameworks empowers us to deliver efficient and scalable solutions.
            </p>
          </div>
        </div>
        <TechSection
          title="Frontend Development Framework"
          techList={frontendTech}
          imgSrc={frontendimg}
          imgAlt="Frontend Development Framework"
          textAlign="start"
        />
        <TechSection
          title="Backend Development Framework"
          techList={backendTech}
          imgSrc={backendimg}
          imgAlt="Backend Development Framework"
          textAlign="end"
        />
      </div>
    </section>
  );
};

export default WebScalable;
