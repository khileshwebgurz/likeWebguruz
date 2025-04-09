import React from "react";
import Image from "next/image";
import monday1 from "../../../public/images/mondaycomimages/mon-work-1.png";
import monday2 from "../../../public/images/mondaycomimages/mon-work-2.png";
import monday3 from "../../../public/images/mondaycomimages/mon-work-3.png";
import monday4 from "../../../public/images/mondaycomimages/mon-work-4.png";
const MonDotOffer = () => {
  return (
    <div className="mondayoffer py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              What Do <span> We Offer? </span>
            </h2>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <div className="mondayoffer-box ">
              <div className="mondayoffer-img">
                <Image src={monday1} alt="monday" />
              </div>
              <h3>Complete Monday.com Implementation</h3>
              <p>
                We handle the entire implementation process, from initial
                consultation to system setup, data migration, and user training.
                Our team configures custom workflows that match your exact
                business processes, ensuring a smooth transition to the
                Monday.com platform.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <div className="mondayoffer-box ">
              <div className="mondayoffer-img">
                <Image src={monday2} alt="monday" />
              </div>
              <h3>Custom Workflow Design</h3>
              <p>
                Our experts analyze your current processes and design optimized
                workflows on Monday.com that eliminate inefficiencies. We create
                intuitive systems that your team will actually use, with
                automations that reduce manual work and boost productivity
                across departments.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <div className="mondayoffer-box ">
              <div className="mondayoffer-img">
                <Image src={monday3} alt="monday" />
              </div>
              <h3>Integration Services</h3>
              <p>
                We seamlessly connect Monday.com with your existing business
                tools like CRM, accounting software, and communication
                platforms. These integrations create a unified ecosystem that
                prevents data silos and ensures information flows smoothly
                between systems.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <div className="mondayoffer-box ">
              <div className="mondayoffer-img">
                <Image src={monday4} alt="monday" />
              </div>
              <h3>Ongoing Support & Optimization</h3>
              <p>
                Our relationship doesn&apos;t end at implementation. We provide
                continuous support, regular performance reviews, and
                optimization services to ensure your Monday.com setup evolves
                with your business needs and consistently delivers maximum
                value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonDotOffer;
