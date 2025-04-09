import Image from "next/image";
import React from "react";
import servTeam from "../../../public/images/salesforceconsultimg/sales-why.webp";

const SalesExpert = () => {
  return (
    <>
      <section className="local-search-result salesforce-expertise py-5 position-relative text-center text-md-start">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 image">
              <Image src={servTeam} alt="dew" />
            </div>
            <div className="col-sm-6 col-xs-12 mb-4 mb-md-0 content heading-main ">
              <span>THE QUESTION</span>
              <h2 className="mb-4">
                Why is Salesforce Consulting a{" "}
                <span>Game-Changer for Your Business?</span>
              </h2>
              <p>
                Salesforce is powerful, but its true potential is unlocked only
                when it&apos;s properly customized to meet your specific business
                requirements. Professional Salesforce consulting helps you avoid
                common implementation pitfalls and ensures you get the most
                value from your investment. With expert guidance, you can
                leverage Salesforce&apos;s full capabilities without the steep
                learning curve or trial-and-error approach.
              </p>
              <p>
                Our consultants bring years of experience across various
                industries, allowing us to apply best practices while adapting
                solutions to your unique business context. The result is a
                faster implementation, better user adoption, and a significant
                competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SalesExpert;
