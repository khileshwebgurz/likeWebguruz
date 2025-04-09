
import Image from "next/image";
import SuccessIcons from "../../../../public/images/webimages/success-stories-next.svg";
import SuccessDevImg1 from "../../../../public/images/webimages/success-item-dev-1.svg";
import SuccessDevImg2 from "../../../../public/images/webimages/success-item-dev-2.svg";
import Link from "next/link";

const OurSuccessStories = () => {
  return (
    <div className="our-success-dev-wrap">
      <div className="container">
        <div className="row wrap-align-dev-succes">
          <div className="col-md-4">
            <h2 className="dev-stories-succes-title">
              Our <span> Portfolio </span>
            </h2>
            <p className="dev-stories-succes-peragraph">
            Explore our diverse range of successful projects.

            </p>
            <Link className="explore-btn" href="/" aria-label="Read More" >
              Explore More
            </Link>
          </div>

          <div className="col-md-8">
            <div className="succes-stories-item-2">
              <div className="inner-list-dev-succes-stories">
                <Image src={SuccessDevImg1} alt="success-stories" />
                <label> May 9, 2024 </label>
                <h5>
                  Automated Sales Workflows by Integrating HubSpot, Google
                  Sheets,…
                </h5>
                <p>
                  How a leading cask trading firm transformed sales operations,
                  achieving a 50% reduction in order processing time through
                  streamlined…
                </p>
                <Link href="#" className="arrow-click-success-stories" aria-label="Read More">
                  Read More <Image src={SuccessIcons} alt="icons" />{" "}
                </Link>
              </div>

              <div className="inner-list-dev-succes-stories">
                <Image src={SuccessDevImg2} alt="success-stories" />
                <label> Apr 10, 2024 </label>
                <h5>
                  Enabling Smooth Deal Tracking Within HubSpot for a Commercial
                  Roofing…
                </h5>
                <p>
                  How a commercial roofing company achieved seamless deal
                  management and enhanced efficiency within HubSpot CRM.
                </p>
                <Link href="#" className="arrow-click-success-stories" aria-label="Read More">                
                  Read More <Image src={SuccessIcons} alt="icons" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSuccessStories;
