import React from "react";

const RefundDetails = () => {
  return (
    <>
      <section className="webguruz-policies refund-details">
        <div className="container my-5">
          <div className="row">
            <div className="col-12 heading-main text-center">
              <h2 className="mb-4">
                Refund <span>Policy</span>
                <p className="mt-2">
                  <strong>Last Updated:</strong> March 13, 2025
                </p>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="">
                We want to make sure you have a rewarding experience while
                you’re exploring, evaluating, and purchasing our
                products/Services.
              </p>
              <p>
                As with any shopping experience, some terms and conditions apply
                to transactions at our company. By placing an order or making a
                purchase from us, you agree to the terms along with our Privacy
                Policy. If, for any reason, You are not completely satisfied
                with any good or service that we provide, don&apos;t hesitate to
                contact us and we will discuss any of the issues you are going
                through with our product.
              </p>
              <p>
                We provide a 15-day refund warranty for the purchase of our
                products/services
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3 className="mt-4 mb-3">Reasons to request a refund :</h3>

              <ul>
                <li>
                  The product has a major and unfixable flaw making it unusable.
                </li>
                <li>
                  Please send us an email to{" "}
                  <a
                    href="mailto:info@webguruz.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    info@webguruz.in
                  </a>{" "}
                  with an explanation of what the major flaws/issues are.
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3 className="mt-4 mb-3">
                Reasons why a refund will not be given :
              </h3>

              <ul>
                <li>You bought the product/service by mistake.</li>
                <li>You changed your mind.</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3 className="mt-4 mb-3">Always willing to help:</h3>
              <p>
                Please reach out to us at{" "}
                <a
                  href="mailto:info@webguruz.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@webguruz.in
                </a>{" "}
                for any theme/product or service questions. We&apos;ll be more
                than happy to provide detailed explanations and a walkthrough to
                ensure that the product you&apos;re purchasing meets your needs.
              </p>
              <p>
                We always push bug and issue fixes regularly. Please send us a
                screenshot and a short brief of the bug(s) if you find any, and
                our team will fix them in the next update.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h3 className="mt-4 mb-3">Contact</h3>
              <p>
                For queries and more information, feel free to reach out at:
              </p>
              <ul className="address">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@webguruz.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    info@webguruz.in
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:730 700 1777">(+91) 73070-01777</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundDetails;
