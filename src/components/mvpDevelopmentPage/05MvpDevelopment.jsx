import Image from "next/image";

import mvpmanage from "../../../public/images/mvpimages/manage.webp";
const MvpDevelopment = () => {
  return (
    <div>
      <section className="mvp-dev-process py-5">
        <div className="container">
          <div className="row ">
            <div className="col-sm-12 col-xs-12 heading-main text-center">
              <h2>A Look at Our MVP Development Process</h2>
            </div>
          </div>
          <div className="row align-items-center pt-4">
            <div className="col-xs-12 col-sm-5 image">
              <Image src={mvpmanage} alt="MVP Development Process" />
            </div>
            <div className="col-xs-12 col-sm-7 content">
              <p>
                We believe in building products iteratively and incrementally.
                We value customer feedback over intuition and iterative design
                over a big elaborate design.
              </p>
              <p>
                To deliver products that have a lasting impact, we believe in
                forming a hypothesis for arriving at a solution.
              </p>
              <ul>
                <li>Focus on solving a specific user problem.</li>
                <li>
                  Empathise with your target audience and understand what your
                  user group wants.
                </li>
                <li>
                  Conduct a research and analyze based on user interactions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MvpDevelopment;
