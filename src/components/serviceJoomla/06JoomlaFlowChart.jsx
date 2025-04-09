"use client";

import React, { useState, useEffect } from "react";
import help1 from "../../../public/images/joomlaimages/agile.png";
import help2 from "../../../public/images/joomlaimages/help.png";
import help3 from "../../../public/images/joomlaimages/user.png";
import Image from "next/image";
const JoomlaFlowChart = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <section className="joomla-flowchart py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 heading-main text-center mb-4 mb-5">
              <h2>
                <span>WebGuruz </span> Development Process
              </h2>
            </div>
          </div>
          {windowWidth > 991 ? (
            <div className="row">
              {/* Your image div content here */}
              <div className="col-12">
                <div className="process-image-container">
                  <Image
                    src={help1}
                    alt="Study Icon"
                    width={800}
                    height={600}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-12 wbguru-process-main">
                <div className="wgt-process-one">
                  <div className="process-count">
                    <h3>1</h3>
                  </div>
                  <div className="process-description">
                    <h4>Requirement gathering</h4>
                    <p>
                      Our team of experts gathers every single detail regarding
                      your requirement. We review the details and get back to
                      you within 24 hours with our recommendations
                    </p>
                  </div>
                </div>
                <div className="wgt-process-one">
                  <div className="process-count">
                    <h3>2</h3>
                  </div>
                  <div className="process-description">
                    <h4>Finalizing the engagement model</h4>
                    <p>
                      Based on your requirement, we suggest the ideal engagement
                      model that would be feasible for you along with an
                      estimated budget and timeline
                    </p>
                  </div>
                </div>
                <div className="webguruz-hire-model">
                  <div className="hire-model-one">
                    <div className="hire-person-img">
                      <Image src={help1} alt="help" />
                    </div>
                    <div className="hire-details">
                      <h4>Hire Developer Model</h4>
                      <p>
                        In this model, dedicated resources are assigned to the
                        project who will be working exclusively for you
                      </p>
                    </div>
                  </div>
                  <div className="hire-model-one">
                    <div className="hire-person-img">
                      <Image src={help2} alt="help" />
                    </div>
                    <div className="hire-details">
                      <h4>DGR Model</h4>
                      <p>
                        This engagement model is exclusively designed for
                        enterprise projects where we provide a 24/7 production
                        support to the client
                      </p>
                    </div>
                  </div>
                  <div className="hire-model-one">
                    <div className="hire-person-img">
                      <Image src={help3} alt="help" />
                    </div>
                    <div className="hire-details">
                      <h4>Fixed Price Model</h4>
                      <p>
                        This engagement model is designed for those customers
                        who would like a budget-friendly product delivered to
                        them in a specific time frame
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hire-developer-model">
                  <div className="hire-main-title">
                    <h2 className="model-title">Hire Developer Model</h2>
                  </div>
                  <div className="hire-developer-one">
                    <div className="hire-count">
                      <h3>03</h3>
                    </div>
                    <div className="hire-dev-details">
                      <h4>Project Scope Assessment</h4>
                      <p>
                        Our team of experts create the entire project plan based
                        on the customer’s requirement. Every minute detail that
                        would contribute to the success of the project is
                        accounted for at this stage
                      </p>
                    </div>
                  </div>
                  <div className="hire-developer-one">
                    <div className="hire-count">
                      <h3>04</h3>
                    </div>
                    <div className="hire-dev-details">
                      <h4>Resource Allocation</h4>
                      <p>
                        We assign our highly skilled ASP.net core developers to
                        your project who would be working exclusively for you.
                        Each member of your team is well trained and equipped to
                        ensure a high-quality delivery within the project
                        timeline.
                      </p>
                    </div>
                  </div>
                  <div className="hire-developer-one">
                    <div className="hire-count">
                      <h3>05</h3>
                    </div>
                    <div className="hire-dev-details">
                      <h4>Project Kickoff</h4>
                      <p>
                        Project Kickoff is done by our Project Manager. Once the
                        developers are finalized, he will then set up the
                        development environment and communication channels to
                        the developers.
                      </p>
                    </div>
                  </div>
                  <div className="hire-developer-one">
                    <div className="hire-count">
                      <h3>06</h3>
                    </div>
                    <div className="hire-dev-details">
                      <h4>Daily/Weekly Project Updates</h4>
                      <p>
                        We keep you updated on the progress regarding the
                        projectevery week or on a daily basis(As per the
                        requirements of the client)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hire-developer-model dgr-model">
                  <div className="hire-main-title">
                    <h2 className="model-title">DGR Model</h2>
                  </div>
                  <div className="hire-developer-one">
                    <div className="hire-count">
                      <h3>03</h3>
                    </div>
                    <div className="hire-dev-details">
                      <h4>Project Scope Assessment</h4>
                      <p>
                        Our team of experts create the entire project plan based
                        on the customer’s requirement. Every minute detail that
                        would contribute to the success of the project is
                        accounted for at this stage
                      </p>
                    </div>
                  </div>
                  <div className="hire-developer-one">
                    <div className="hire-count">
                      <h3>04</h3>
                    </div>
                    <div className="hire-dev-details">
                      <h4>Resource Allocation (Offshore, Onsite)</h4>
                      <p>
                        We allocate a well trained and highly experienced team
                        of ASP.net developers onsite as well as offshore in
                        order to achieve effective communication with the client
                        throughout the project cycle.
                      </p>
                    </div>
                  </div>
                  <div className="hire-developer-one">
                    <div className="hire-count">
                      <h3>05</h3>
                    </div>
                    <div className="hire-dev-details">
                      <h4>Project Kickoff</h4>
                      <p>
                        Project Kickoff is done by our Project Manager. Once the
                        developers are finalized, he will then set up the
                        development environment and communication channels to
                        the developers.
                      </p>
                    </div>
                  </div>
                  <div className="hire-developer-one">
                    <div className="hire-count">
                      <h3>06</h3>
                    </div>
                    <div className="hire-dev-details">
                      <h4>Daily/Weekly Project Updates</h4>
                      <p>
                        We keep you updated on the progress regarding the
                        projectevery week or on a daily basis(As per the
                        requirements of the client)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hire-developer-model fixed-price-model">
                  <div className="hire-main-title">
                    <h2 className="model-title">Fixed Price Model</h2>
                  </div>
                  <div className="hire-developer-one">
                    <div className="hire-count">
                      <h3>03</h3>
                    </div>
                    <div className="hire-dev-details">
                      <h4>Project Scope Assessment</h4>
                      <p>
                        Our team of experts create the entire project plan based
                        on the customer’s requirement. Every minute detail that
                        would contribute to the success of the project is
                        accounted for at this stage
                      </p>
                    </div>
                  </div>
                  <div className="hire-developer-one">
                    <div className="hire-count">
                      <h3>04</h3>
                    </div>
                    <div className="hire-dev-details">
                      <h4>Project Kickoff</h4>
                      <p>
                        Project Kickoff is done by our Project Manager. Once the
                        estimate is finalized, he will set up the development
                        environment and communication channels to the
                        development team.
                      </p>
                    </div>
                  </div>
                  <div className="hire-developer-one">
                    <div className="hire-count">
                      <h3>05</h3>
                    </div>
                    <div className="hire-dev-details">
                      <h4>Development & QA</h4>
                      <p>
                        Our designers create a clickable prototype that would
                        represent your vision. Using scrum methodology, we
                        create a highly scalable and secure product within the
                        allocated timeline.
                      </p>
                    </div>
                  </div>
                  <div className="hire-developer-one">
                    <div className="hire-count">
                      <h3>06</h3>
                    </div>
                    <div className="hire-dev-details">
                      <h4>Agile Delivery</h4>
                      <p>
                        Using Agile methodology, we provide you a high level of
                        transparency throughout the project and delivers a
                        working product increment every two weeks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JoomlaFlowChart;
