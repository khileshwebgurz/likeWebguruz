"use client"
import React from "react";
import Image from "next/image";
import Benifitsicons from "../../../public/images/internproimg/checkbos-icons.webp";
import Link from "next/link";

const InternBenefits = () => {
  const scrollToAdvisor = (e) => {
    e.preventDefault();
    const parichaySection = document.getElementById('adivsor-connect');
    if (parichaySection) {
      window.scrollTo({
        top: parichaySection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const benefits = [
    "Real-World Experience",
    "Industry-Relevant Skills",
    "Professional Networking",
    "Career Guidance",
    "Certification",
    "Hands-on Projects",
    "Flexible Timings",
    "Affordable Fees",
    "Job Assistance",
  ];

  return (
    <div className="benifits-wrap-02">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-0">
            <h2>
              Benefits of <br />
              <span>Our Internship Program</span>
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="benefits-internship-list">
              {benefits.map((benefit, index) => (
                <div className="benefits-internship-listing" key={index}>
                  <Image src={Benifitsicons} alt="Benefit icon" />
                  <h6>{benefit}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="text-center col-12 mt-3">
            <button className="explore-btn"  onClick={scrollToAdvisor}>
              Connect with Our Program Advisor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternBenefits;
