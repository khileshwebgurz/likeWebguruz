import React from "react";
import SelectMeeting from "./SelectMeeting";

const MeetingBanner = () => {
  return (
    <>
      <section className="calender-cnsultaion py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center my-4 inner-page">
              <h1>
                Ready to Grow Your Business and Amplify Leads?{" "}
                <span>Let&apos;s Get Started! </span>
              </h1>
              <p>
                Your path to exceptional growth begins here- connect with
                WebGuruz and transform your digital presence.
              </p>
            </div>
            <div className="col-md-6 mx-auto col-xs-12 text-center  wgz-meet">
               <SelectMeeting/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetingBanner;
