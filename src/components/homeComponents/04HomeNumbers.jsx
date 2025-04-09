
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import numbercards from "@/utils/04utilHomeNumbers";


const HomeNumbers = () => {
  

  return (
    <section className="number-main py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-5">
            <h2>
              Our <span>Portfolio</span>
            </h2>
            <span className="d-inline-block mb-4">
              Explore our diverse range of projects and see how we&apos;ve
              helped businesses of all sizes achieve their goals.
            </span>
            
          </div>
        </div>

        <div className="row numbercard-main">
          {numbercards.map((card, index) => (
            <div className="col col-sm-3 col-xs-12" key={index}>
              <div className="card text-center">
                <h3>{card.title}</h3>
                <span>{card.para}</span>
                <h4>{card.percentage}</h4>
                <Link className="btn-link about--btn" href="/">
                  {card.anchor}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ps-1"
                    role="image"
                    aria-label="Arrow Right"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeNumbers;
