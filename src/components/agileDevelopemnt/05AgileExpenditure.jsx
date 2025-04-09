import React from "react";
import Image from "next/image";
import process1 from "../../../public/images/agileimg/agileprocess1.webp";
import process2 from "../../../public/images/agileimg/agileprocess2.webp";
import process3 from "../../../public/images/agileimg/agileprocess3.webp";
import process4 from "../../../public/images/agileimg/agileprocess4.webp";

const AgileExpenditure = () => {
  return (
    <>
      <section className="agile-expenditure-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main mb-4 text-center">
              <h2 className="mb-3">
                Our agile process expedites your <br/> market launch
              </h2>
              <p>We don’t just develop apps using Agile Methodology. Being agile is in the atom of our cultural DNA.
              </p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-sm-3 col-xs-12 icon-contnt text-center">
              <Image src={process1} alt="Product Backlog Icon" />
              <p>
                <strong>Product Backlog</strong>
              </p>
            </div>
            <div className="col-sm-3 col-xs-12 icon-contnt text-center">
              <Image src={process2} alt="Sprint Backlog Icon" />
              <p>
                <strong>Sprint Backlog</strong>
              </p>
            </div>
            <div className="col-sm-3 col-xs-12 icon-contnt text-center">
              <Image src={process3} alt="Daily Scrum Meeting Icon" />
              <p>
                <strong>Daily Scrum Meeting</strong>
              </p>
            </div>
            <div className="col-sm-3 col-xs-12 icon-contnt text-center">
              <Image src={process4} alt="Potentially Shippable Product Increment Icon" />
              <p>
                <strong>Potentially Shippable Product Increment</strong>
              </p>
            </div>
            <p className="pt-4">Our Agile Culture is all about the creation of an environment, which is underpinned by the core behaviors, values, and practices that enable all levels in the organisation to efficiently adapt to the cultural changes. Agility resides in our team along with our structures, systems and processes.   </p>
            <p>Our agile culture helps us handle uncertainty more efficiently. Our teams are highly flexible, adaptive and innovative.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgileExpenditure;
