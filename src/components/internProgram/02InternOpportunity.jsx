"use client";
import React from "react";
import Image from "next/image";
import Careeropp from "../../../public/images/internproimg/intern-opportunity.webp";
import CareecheckMark from "../../../public/images/internproimg/caree-check-mark.webp";
import Link from "next/link";

const InternOpportunity = () => {
  const scrollToParichay = (e) => {
    e.preventDefault();
    const parichaySection = document.getElementById('parichay-processing');
    if (parichaySection) {
      window.scrollTo({
        top: parichaySection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const benefits = [
    "Practical exposure to industry-standard tools and technologies.",
    "Mentorship from experienced trainers with years of expertise.",
    "Certification that enhances your resume and career opportunities.",
  ];

  return (
    <div className="custom-career-opp-section py-5 new-custom-career-page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 ">
            <Image src={Careeropp} className="img-Careeropp" alt="Industrial Training Program Mohali" />
          </div>
          <div className="col-md-6">
            <div className="new-career-content">
              <p className="mb-0">About Us</p>
              <h2 className="provideceptional-head">
                Seize Exceptional Career Opportunities
              </h2>
              <p>
                Join our 3 Months industrial training program in Mohali/Chandigarh
                and get hands-on experience in leading technologies. Perfect for
                students looking to build their careers, our program equips you
                with practical skills in various domains to prepare you for
                real-world challenges.
              </p>
              <ul className="listing-industrial-certified">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <Image src={CareecheckMark} alt="check mark" /> {benefit}
                  </li>
                ))}
              </ul>
              <button className="explore-btn" onClick={scrollToParichay}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternOpportunity;
