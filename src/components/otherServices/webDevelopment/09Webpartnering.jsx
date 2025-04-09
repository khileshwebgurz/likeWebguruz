import Image from "next/image";
import experience from "../../../../public/images/webimages/experience.svg";
import certified from "../../../../public/images/webimages/certified.svg";
import successful from "../../../../public/images/webimages/successful.svg";
import presence from "../../../../public/images/webimages/presence.svg";
import clients from "../../../../public/images/webimages/clients.svg";

const Webpartnering = () => {
  return (
    <>
      <section className="partnering-main">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 partnering-left">
              <h2 className="color-wt">Benefits of Partnering with WebGuruz</h2>
              <span className="color-wt d-inline-block my-3">
                When you choose WebGuruz, you&apos;re not just getting a website;
                you&apos;re gaining a trusted partner who is dedicated to your
                success. Let&apos;s work together to build a digital presence that
                sets you apart.
              </span>
              <ul>
                <li>
                  <h6 className="color-wt">Enhanced Online Visibility</h6>
                  <p className="color-wt">
                    Our SEO expertise will help your website rank higher in
                    search engine results.
                  </p>
                </li>
                <li>
                  <h6 className="color-wt">Improved User Experience</h6>
                  <p className="color-wt">
                    We create websites that are easy to navigate and visually
                    appealing.
                  </p>
                </li>
                <li>
                  <h6 className="color-wt">Boosted Conversions</h6>
                  <p className="color-wt">
                    Our optimized designs and calls to action drive more leads
                    and sales.
                  </p>
                </li>
                <li>
                  <h6 className="color-wt">Scalability</h6>
                  <p className="color-wt">
                    Our solutions can grow with your business, ensuring
                    long-term success.
                  </p>
                </li>
                <li>
                  <h6 className="color-wt">Competitive Advantage</h6>
                  <p className="color-wt">
                    A well-designed website sets you apart from your
                    competitors.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-xs-12 partnering-right heading-main">
              <h2>
              Partner with the <span>Experts in Web Development</span>
              </h2>
              <ul className="mt-5">
                <li>
                  <div className="image-icon">
                    <Image src={experience} alt="Experience Icon" />
                  </div>
                  <div className="content-icon">
                    <h6>16+ Years</h6>
                    <p>of Experience delivering exceptional web solutions.</p>
                  </div>
                </li>
                <li>
                  <div className="image-icon">
                    <Image src={certified} alt="Certified Icon" />
                  </div>
                  <div className="content-icon">
                    <h6>Innovative Approach</h6>
                    <p>We embrace cutting-edge technologies and design trends.</p>
                  </div>
                </li>
                <li>
                  <div className="image-icon">
                    <Image src={successful} alt="Customer Focus Icon" />
                  </div>
                  <div className="content-icon">
                    <h6>Customer Focus</h6>
                    <p>Your satisfaction is our top priority.</p>
                  </div>
                </li>
                <li>
                  <div className="image-icon">
                    <Image src={clients} alt="Quality Assurance Icon" />
                  </div>
                  <div className="content-icon">
                    <h6>Quality Assurance</h6>
                    <p>We adhere to strict quality standards to ensure a flawless product.</p>
                  </div>
                </li>
                <li>
                  <div className="image-icon">
                    <Image src={presence} alt="Timely Delivery Icon" />
                  </div>
                  <div className="content-icon">
                    <h6>Timely Delivery</h6>
                    <p>We deliver projects on time and within budget.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webpartnering;
