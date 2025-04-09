import Image from "next/image";
import React from "react";
import zohocrm from "../../../public/images/zohocrmimages/zoho-crm-img.svg";

const ZohoImageSec = () => {
  return (
    <>
      <div className="zoho-application-details py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 heading-main text-center mb-4">
              <h2><span>Zoho CRM </span>Plus Applications</h2>
            </div>
            <div className="col-12 text-center">
              <Image src={zohocrm} alt="crm" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZohoImageSec;
