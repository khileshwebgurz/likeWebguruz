import Image from "next/image";
import web1 from "/public/images/webimages/web1.svg";
import web2 from "/public/images/webimages/web2.svg";
import web3 from "/public/images/webimages/web3.svg";
import web4 from "/public/images/webimages/web4.svg";
import web5 from "/public/images/webimages/web5.svg";
import web6 from "/public/images/webimages/web6.svg";
import web7 from "/public/images/webimages/web7.svg";

const processSteps = [
  { number: 1, image: web1, text: "Initial Consultation" },
  { number: 2, image: web2, text: "Planning and Strategy" },
  { number: 3, image: web3, text: "Design and Wireframing" },
  { number: 4, image: web4, text: "Development" },
  { number: 5, image: web5, text: "Testing and Quality Assurance" },
  { number: 6, image: web6, text: "Launch and Deployment" },
  { number: 7, image: web7, text: "Ongoing Maintenance and Support" },
];

const WebProcess = () => {
  return (
    <section className="webdev-process">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-5">
            <h2>
              <span>Web Development Process</span> We Follow
            </h2>
            <p className="mt-3 mb-4">
            Our streamlined website development process ensures a seamless and efficient project delivery. 
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <ul>
              {processSteps.map(({ number, image, text }) => (
                <li key={number}>
                  <div className="icon-content">
                    <span className="number">{number}</span>
                    <Image src={image} alt={`${text} Icon`} />
                    <p>{text}</p>
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

export default WebProcess;
