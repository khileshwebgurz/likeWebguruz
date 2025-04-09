import Image from "next/image";
import web1 from "/public/images/webimages/web1.svg";
import web2 from "/public/images/webimages/web2.svg";
import web3 from "/public/images/webimages/web3.svg";
import web4 from "/public/images/webimages/web4.svg";

const processSteps = [
  { number: 1, image: web1, text: "Discovery" },
  { number: 2, image: web2, text: "Planning" },
  { number: 3, image: web3, text: "Implementation" },
  { number: 4, image: web4, text: "Training & Adoption" },
];

const ZohoServeWorking = () => {
  return (
    <section className="webdev-process">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-5">
            <h2>
            How <span> We Work?</span>
            </h2>
            <p className="mt-3 mb-4">
            We follow a structured and collaborative approach to ensure successful Zoho implementation for every client. Our methodology combines technical expertise with business understanding to deliver solutions that truly transform your operations. We maintain clear communication throughout the process, keep you involved at every stage, and focus on quick wins while building toward long-term success.
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

export default ZohoServeWorking;
