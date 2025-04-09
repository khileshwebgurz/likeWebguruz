import React from "react";
import "./style.css";
import '../ecommerce-web-design-services/style.css'
import "../services/pay-per-click-management/style.css";
import "../services/local-seo/style.css";
import "../contact-us/contact.css";
import HubCrmBanner from "@/components/hubcrmmigration/01HubCrmBanner";
import HubCrmForm from "@/components/hubcrmmigration/02HubCrmForm";
import HubCrmCounter from "@/components/hubcrmmigration/03HubCrmCounter";
import ImageHubspot from "@/components/otherServices/hubspotDev/ImageHubspot";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import {  crmpagemigrate } from "@/utils/accordionData";
import HubCrmHelp from "@/components/hubcrmmigration/05CrmMigrateHelp";
import HubCrmProcess from "@/components/hubcrmmigration/06HubCrmProcess";
import CrmCmsOption from "@/components/hubcrmmigration/07CrmCmsProcess";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import HubCrmValues from "@/components/hubcrmmigration/08HubCrmValues";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import CrmAccordian from "@/components/hubcrmmigration/04CrmAccordian";
import HubCrmKeyword from "@/components/hubcrmmigration/09HubCrmKeyword";
const page = () => {
  return (
    <>
      <HubCrmBanner />
      <HubCrmForm />
      <HubCrmCounter />
      <CrmAccordian/>
      <HubCrmHelp />
      <HubCrmProcess />
      <CrmCmsOption />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="From startups to global enterprises, we serve a diverse range of industries, including:"
      />
      <HubCrmValues />
      <HubspotClients />
      <ImageHubspot />
      <HubCrmKeyword/>
      <ServiceFaq accordionData={crmpagemigrate} />
      <AddsPartner
        heading="Experience a smooth and successful transition with WebGuruz"
        paragraph="Get seamless HubSpot CRM Migration Solutions tailored to your business needs. Connect with the experts at WebGuruz today!"
        linkHref="/contact-us"
        linkText="Connect With Us!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Seamless HubSpot CRM Migration Services for Your Business",
  description:
    "Experience hassle-free HubSpot CRM development and migration services by WebGuruz. Ensure smooth data transfer, efficiency, and seamless integration for growth.",
};