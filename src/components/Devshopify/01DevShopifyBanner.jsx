"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/shopifydevlpomentimg/shopify-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("shopifydev-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const DevShopifyBanner = () => {
  return (
    <>
      <section className="seobanner-main shopify-development-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                <span>Shopify Website Development</span> Services
              </h1>
              <p className="strong-contnt">
                Your e-commerce journey deserves a solid foundation, and Shopify
                is the perfect platform on which to build. At WebGuruz, our
                certified Shopify developers and consultants specialize in
                creating tailored online stores that not only look stunning but
                also perform seamlessly. Whether you’re a startup or an
                established business, we’re here to help you harness
                Shopify&apos;s full potential for your unique needs.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Get in Touch!
                </button>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image
                src={seobannertop}
                alt="Shopify Website Development Services"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevShopifyBanner;
