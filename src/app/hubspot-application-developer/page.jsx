import React from "react";
import "./style.css";
import "../services/pay-per-click-management/style.css";
import "../contact-us/contact.css";
import '../hubspot-onboarding/style.css'
import AppDevBanner from "@/components/hubapplicationdev/01AppDevBanner";
import AppDevForm from "@/components/hubapplicationdev/02AppDevForm";
import AppDevCounter from "@/components/hubapplicationdev/03AppDevCounter";
import AppDevServices from "@/components/hubapplicationdev/04AppDevServices";
import AppDevProcessFollow from "@/components/hubapplicationdev/05AppDevProcessFollow";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import AppDevHire from "@/components/hubapplicationdev/06AppDevHire";
import ImageHubspot from "@/components/otherServices/hubspotDev/ImageHubspot";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { newcrmApp } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import AppDevPoints from "@/components/hubapplicationdev/07AppDevPoints";
const page = () => {
  return (
    <>
      <AppDevBanner />
      <AppDevForm />
      <AppDevCounter />
      <AppDevServices />
      <AppDevProcessFollow />
      <CustomizeHome
        heading="Industries We "
        subheading="cater to"
        paragraph="From e-commerce to healthcare, we serve diverse industries worldwide. Our experience spans across various sectors, ensuring tailored solutions for every business type."
      />
      <AppDevHire />
      <ImageHubspot />
      <AppDevPoints/>
      <HubspotClients />
      <ServiceFaq accordionData={newcrmApp} />
      <AddsPartner
        heading="Take the Next Step with WebGuruz"
        paragraph="Ready to migrate to HubSpot CMS? Contact WebGuruz today to unlock the full potential of your website with our expert migration services. Let’s build something extraordinary together!"
        linkHref="/contact-us"
        linkText="Let’s create something incredible, together!"
      />
    </>
  );
};

export default page;


export const metadata = {
  title: "Professional HubSpot Application Developers | WebGuruz Experts",
  description:
    "Hire expert HubSpot application developers at WebGuruz. Our skilled HubSpot app developers create custom solutions to drive business growth and success.",
};