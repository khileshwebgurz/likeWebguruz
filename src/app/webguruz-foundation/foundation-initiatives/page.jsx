import React from "react";
import "../style.css";
import InitiativeBanner from "@/components/FoundationInitiatives/01InitiativeBanner";
import InitiativeTabs from "@/components/FoundationInitiatives/02InitiativeTabs";
const page = () => {
  return (
    <>
      <InitiativeBanner />
      <InitiativeTabs />
    </>
  );
};

export default page;
export const metadata = {
  title: "WebGuruz Technologies Initiatives: Making a Difference",
  description:
    "Discover how WebGuruz initiatives are shaping a better future, combining technology prowess with impactful social foundation work.",
};