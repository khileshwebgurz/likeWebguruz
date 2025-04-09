import Link from "next/link";

import ExploreIcon from "/public/images/blogimages/blogexplore1.svg";
import ExploreArrow from "/public/images/explore-next-icons.webp";

import Leftseo from "/public/images/blogimages/blogexplore2.svg";
import Leftppc from "/public/images/blogimages/blogexplore3.svg";
import Leftsocialmedia from "/public/images/blogimages/blogexplore4.svg";
import Leftwebdesign from "/public/images/blogimages/blogexplore5.svg";
import Leftinternet from "/public/images/blogimages/blogexplore6.svg";

import Image from "next/image";
const ExploreList = () => {
  return (
    <div className="row mt-4 explore-topics-card">
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card-flex_explore">
          <Image src={ExploreIcon} alt="Marketing Icon" />
          <div className="content_explore_wrap">
            <Link href="#">
              Marketing <Image src={ExploreArrow} alt="Image" />
            </Link>
            <p>Expert insights and strategies inside.</p>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card-flex_explore">
          <Image src={Leftseo} alt="SEO Icon" />
          <div className="content_explore_wrap">
            <Link href="#">
              SEO <Image src={ExploreArrow} alt="Image" />
            </Link>
            <p>Climb the SERPs with these proven SEO tactics.</p>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card-flex_explore">
          <Image src={Leftppc} alt="PPC Icon" />
          <div className="content_explore_wrap">
            <Link href="#">
              PPC <Image src={ExploreArrow} alt="Image" />
            </Link>
            <p>Maximize your RoI with PPC optimization tips.</p>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card-flex_explore">
          <Image src={Leftsocialmedia} alt="Social Media Icon" />
          <div className="content_explore_wrap">
            <Link href="#">
              Social Media <Image src={ExploreArrow} alt="Image" />
            </Link>
            <p>Explore strategies for social media growth.</p>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card-flex_explore">
          <Image src={Leftwebdesign} alt="Web Design Icon" />
          <div className="content_explore_wrap">
            <Link href="#">
              Web Design <Image src={ExploreArrow} alt="Image" />
            </Link>
            <p>Tips for effective and responsive web design.</p>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card-flex_explore">
          <Image src={Leftinternet} alt="Internet Icon" />
          <div className="content_explore_wrap">
            <Link href="#">
              Internet <Image src={ExploreArrow} alt="Image" />
            </Link>
            <p>
              Essential internet marketing tips for success in the online world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreList;
