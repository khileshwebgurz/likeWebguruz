import Image from "next/image";
import vorides from "../../../public/images/home-rent.svg";
import voridelogo from "../../../public/images/logo-white.webp";
import Link from "next/link";
import {
  Svg21Plus,
  SvgAustralia,
  SvgIOS,
  SvgKotlin,
} from "../../utils/08utilFeatProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AppData = [
  { 
    img: <Svg21Plus />,
    title: "21+",
  },
  {
    img: <SvgAustralia />,
    title: "Australia",
  },
  {
    img: <SvgIOS />,
    title: "IOS",
  },
  {
    img: <SvgKotlin />,
    title: "WordPress",
  },
];

const FeaturedProject = () => {
  return (
    <section className="featured-main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center mb-3">
            <h2>
              Featured <span>Projects</span>
            </h2>
            <p>
              Using the latest technology and industry expertise, we built
              top-end Android and iOS-based applications that add value to the
              business and user experience.
            </p>
          </div>
        </div>
        <div className="row featured-bg">
          <div className="col-sm-6 col-xs-12 featured-left-image text-center p-5 d-flex align-items-center justify-content-center">
            <Image src={vorides} alt="Robert James Realty Portfolio" className="center-img" />
            <Image src={voridelogo} alt="Robert James Realty Portfolio-logo" className="voridelogo" />
          </div>
          <div className="col-sm-6 col-xs-12 featured-right pe-5 pt-5 pb-5">
            <div className="featured-right-content">
              <h4 className="color-wt">Robert James Realty</h4>
              <p className="color-wt mb-4">
              RJR has been a real estate leader with offices and Agents servicing the Sunshine Coast in Queensland for many years. Born from a national franchise based in Noosa and Tewantin Robert James Realty was launched to break the restraints of a National group and their commitments to outdated marketing and print media.
              </p>
              <ul className="icon-content-main pb-4">
                {AppData.map((appdatacontent, index) => (
                  <li key={index}>
                    <div className="mb-4">{appdatacontent.img}</div>
                    <p className="mb-0 color-wt">{appdatacontent.title}</p>
                  </li>
                ))}
              </ul>
              <Link className="explore-btn" href="/" >
                View Case Study
                <FontAwesomeIcon
                  icon={faArrowRight}
                  role="img"
                  aria-label="Arrow Right"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
