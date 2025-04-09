import React from "react";
import map from "../../../public/images/mobileseoimg/mapmob.png";
import Image from "next/image";
const MobileSeoClients = () => {
  return (
    <div className="Mobilelocalseo-section py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4">
            <h2>
              Mobile SEO for <span>Local and Global Clients</span>
            </h2>
            <p>
              Mobile SEO is crucial for both local and international businesses.
              We craft strategies that connect you with nearby customers or
              expand your reach to a global audience. Whether you’re a small
              business or a multinational corporation, we ensure your mobile
              presence stands out.
            </p>
          </div>
          <div className="col-12">
            <div className="map-image-section">
              <Image src={map} alt="Mobil SEO for Local and Global" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSeoClients;
