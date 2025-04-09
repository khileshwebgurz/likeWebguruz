import React from "react";
import Image from "next/image";
import slideFirst from "../../../public/images/Seo-PackageImages/1.webp";
import slideTwo from "../../../public/images/Seo-PackageImages/2 .webp";
import slideThird from "../../../public/images/Seo-PackageImages/3.webp";
import slideFour from "../../../public/images/Seo-PackageImages/4.webp";
import slideFive from "../../../public/images/Seo-PackageImages/5.webp";
import slideSix from "../../../public/images/Seo-PackageImages/6.webp";

const seoResults = [
  { id: 1, img: slideFirst, alt: "Monica Jewelers Stats" },
  { id: 2, img: slideTwo, alt: "Farm House Kitchen Bath Stats" },
  { id: 3, img: slideThird, alt: "ADP Promotions Stats" },
  { id: 4, img: slideFour, alt: "Printed Originals Stats" },
  { id: 5, img: slideFive, alt: "Smokers Outlet Online Stats" },
  { id: 6, img: slideSix, alt: "The Skin Consult Stats" },
];

const SeoResults = () => {
  return (
    <div className="seo-result py-5 inner-page text-center">
      <div className="container">
        <div className="row col-12 heading-main mb-4">
          <h2>
            Proof of Brilliant <span>Results</span>
          </h2>
        </div>
        <div className="row">
          {seoResults.map((result) => (
            <div key={result.id} className="col-md-6 col-12 mb-4">
              <Image src={result.img} alt={result.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeoResults;
