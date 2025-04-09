"use client";
import Image from "next/image";
import Slider from "react-slick";
import Portfolio1 from "../../../public/images/serviceImages/portf1.webp";
import Portfolio2 from "../../../public/images/serviceImages/portf2.webp";
import Portfolio3 from "../../../public/images/serviceImages/portf3.webp";
import Portfolio4 from "../../../public/images/serviceImages/toolsservice/Punjab-and-Haryana-High-Court-featured-img.webp";

import Arrowleft from "../../../public/images/serviceImages/arrow-left.webp";
import ArrowRight from "../../../public/images/serviceImages/arrow-right.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const portfolioItems = [
  {
    src: Portfolio1,
    alt:"Global IP Partners Portfolio",
    title: "Global IP Partners",
    link: "#",
  },
  {
    src: Portfolio2,
    alt: 'Robert James Realty Portfolio',
    title: "Robert James Realty",
    link: "#",
  },
  {
    src: Portfolio3,
    alt: 'Milwaukee House Buyers Portfolio',
    title: "Milwaukee House Buyers",
    link: "#",
  },
  {
    src: Portfolio4,
    alt: 'High Court of Punjab and Haryana Portfolio',
    title: "High Court of Punjab and Haryana",
    link: "#",
  },
];

const SamplePrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <Image src={Arrowleft} alt="Previous" />
  </div>
);

const SampleNextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <Image src={ArrowRight} alt="Next" />
  </div>
);

const CreativePortfolio = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="creativeportfolio py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="heading-main text-center pb-2 heading-content mb-3">
              <h2>
                Our <span>Portfolio</span>
              </h2>
              <span className="d-inline-block mb-2">
              Don&apos;t just take our word for it. Check out our portfolio to see examples of our work.
              </span>
            </div>

            <div className="creativeprtfl">
              <Slider {...settings}>
                {portfolioItems.map((item, index) => (
                  <div className="creativeprtflinr" key={index}>
                    <div className="crportflio">
                      <Link href={item.link}>
                        <Image src={item.src} className="img-fluid"  alt={item.alt}/>
                        <p>
                          <strong>{item.title}</strong>
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativePortfolio;
