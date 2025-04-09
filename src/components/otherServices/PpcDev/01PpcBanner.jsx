"use client"
import Image from 'next/image';
import ppcbannerimage from '../../../../public/images/ppcimages/ppcservicebanner.svg'
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("ppc-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition = jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector('.hs-firstname input').focus();
  }
};
const PpcBanner = () => {
  return (
    <>
      <section className="ppcbanner py-5 service-banner inner-page">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-xs-12 banner-content-left heading-main">
              <h1>
              <span>Paid Advertising Agency</span> Helping You Acquire New Customers Predictably
              </h1>
              <p className='mb-3'>
              Businesses need effective strategies to attract new customers- and that&apos;s where our PPC Management Services come in. At WebGuruz, we specialize in creating targeted paid advertising campaigns that drive measurable results. 
              Our expert team leverages data-driven insights to optimize your ad spend, ensuring that every dollar you invest brings in new leads and sales. Get ready to transform your advertising approach and achieve predictable growth!
              </p>
              <button className="explore-btn" onClick={handleScrollToJobs}>Maximize Ads Return Now</button>
              {/* <ul className="ppcbutton d-flex">
                <li>
                  <button className="seaservice">
                    Seo Services
                    <Image src={whitearrow}  alt="Image" />
                  </button>
                </li>
                <li>
                  <button className="mediamarketing">
                    Social Media Marketing
                    <Image src={whitearrow}  alt="Image" />
                  </button>
                </li>
                <li>
                  <button className="contentmrkteing">
                    Content Marketing
                    <Image src={whitearrow}  alt="Image" />
                  </button>
                </li>
                <li>
                  <button className="contentwrting">
                    Content Writing
                    <Image src={whitearrow}  alt="Image" />
                  </button>
                </li>
              </ul> */}
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image src={ppcbannerimage} alt="Paid Advertising Agency" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PpcBanner;
