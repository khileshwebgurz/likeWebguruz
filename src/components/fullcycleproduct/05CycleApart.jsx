import React from "react";

const CycleApart = () => {
  return (
    <div>
      <section className="set-apart py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 set-apart-content heading-main">
              <h2 className="mb-3">
                What sets us apart?
              </h2>
              <p className="mb-4" style={{color:"#898787"}}>
                Through product management, we arrive at the crossroads of
                business, technology, and user experience and build a product
                that is feasible, valuable and usable.
              </p>
              <ul className="cycle-apart-lisiting">
                <li>
                  We are Keen observers. We look at things holistically - what
                  does the product mean to the customer, where it currently
                  stands and where it needs to go in the future. We have
                  unabashed confidence in your product and are quick to notice
                  opportunities where others see nothing but a wasteland.
                </li>
                <li>
                  Synergy - We believe in combined effort to bring optimum
                  results. Our Product Managers eliminate conflicts and
                  disconnects between different departments, and ensure your
                  product vision stays on track.
                </li>
                <li>
                  We are driven by innovation and creativity and build products
                  that form an indisputable niche in the market.
                </li>
                <li>
                  We have a stellar design taste and know how to use product
                  insights to materialize a breakthrough idea into a scalable
                  product.
                </li>
                <li>
                  We set measurable goals, generate invaluable insights on
                  industry trends, and provide clarity to the client and
                  stakeholders at any given point.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CycleApart;
