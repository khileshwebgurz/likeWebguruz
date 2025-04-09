import React from "react";
import Image from "next/image";
import work1 from "../../../public/images/mondaycomimages/mon-bus-1.png";
import work2 from "../../../public/images/mondaycomimages/mon-bus-2.png";
import work3 from "../../../public/images/mondaycomimages/mon-bus-3.png";
const MonDotWorkflow = () => {
  return (
    <div className="mondayworkflow py-5">
      <div className="container">
        <div className="row">
          <div className="xxl-10 max-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-2">
              We Transform Complex Processes into <br />{" "}
              <span> Streamlined Workflows</span>
            </h2>
            <p>
              We specialize in taking complicated business processes and turning
              them into efficient, automated workflows in Monday.com. Our
              solutions eliminate bottlenecks and create transparency across
              your organization.
            </p>
          </div>
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="workflow-card">
              <div className="work-icon">
                <Image src={work1} alt="work" />
              </div>
              <h3>Process Analysis & Mapping</h3>
              <p>
                Our team conducts thorough assessments of your current
                workflows, identifying pain points and opportunities for
                improvement. We map out optimized processes on Monday.com that
                address these challenges while maintaining the core elements
                that make your business unique.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="workflow-card">
              <div className="work-icon">
                <Image src={work2} alt="work" />
              </div>
              <h3>Automation Implementation</h3>
              <p>
                We build powerful automations that handle repetitive tasks
                without human intervention. This automation reduces errors,
                saves time, and allows your team to focus on high-value
                activities instead of mundane administrative work.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="workflow-card">
              <div className="work-icon">
                <Image src={work3} alt="work" />
              </div>
              <h3>Dashboard & Reporting Setup</h3>
              <p>
                We create customized dashboards that deliver real-time insights
                into your key performance indicators. These visual
                representations of your data make it easy to track progress,
                identify trends, and make data-driven decisions across all
                levels of your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonDotWorkflow;
