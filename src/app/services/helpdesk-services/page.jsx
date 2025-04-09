import AddsPartner from "@/components/contactComponents/06AddsPartner";
import HelpDeskServices from "@/components/helpdeskservices/03HelpDeskServices";
import HelpDeskDifference from "@/components/helpdeskservices/04HelpDeskDifference";
import HelpDeskSupport from "@/components/helpdeskservices/05HelpDeskSupport";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { helpdeskData } from "@/utils/accordionData";
import React from "react";
import "./style.css";
import HelpDeskBanner from "@/components/helpdeskservices/01HelpDeskBanner";
import HelpDeskTechnical from "@/components/helpdeskservices/02HelpDeskTechnical";
const page = () => {
  return (
    <>
      <HelpDeskBanner />
      <HelpDeskTechnical />
      <HelpDeskServices />
      <HelpDeskDifference />
      <HelpDeskSupport />
      <ServiceFaq accordionData={helpdeskData} />
      <AddsPartner
        heading="Don’t let IT issues slow down your business!"
        paragraph="Partner with the experts at WebGuruz and experience world-class IT support!"
        linkHref="/book-an-appointment"
        linkText="Connect to Experts!"
      />
    </>
  );
};

export default page;
export const metadata = {
  title: "Top Helpdesk Services for Seamless Customer Support | WebGuruz",
  description:
    "Looking for seamless customer support? WebGuruz offers top helpdesk services that ensure fast, reliable, and efficient solutions for enhanced customer satisfaction.",
};
