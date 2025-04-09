import React from "react";
import "./style.css";
import "../../life-at-webguruz/style.css";

import ParichayBanner from "@/components/parichayComp/01ParichayBanner";
import ParichayTabs from "@/components/parichayComp/02ParichayTabs";
import ParichayConnect from "@/components/parichayComp/03ParichayConnect";
const page = () => {
  return (
    <>
      <ParichayBanner />
      <ParichayTabs />
      <ParichayConnect />
    </>
  );
};

export default page;
export const metadata = {
  title: "Parichay Internship Program Details - WebGuruz Technologies",
  description:
    "Explore the Parichay Internship Program, learn about the application process, and start your transformative journey with WebGuruz Technologies. Join us now!",
};
