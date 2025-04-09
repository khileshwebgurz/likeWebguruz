import HubCmsMigrateBanner from "@/components/hubcmsmigrate/01HubCmsMigrateBanner";
import MigrateCmsForm from "@/components/hubcmsmigrate/02MigrateCmsForm";
import React from "react";
import "../services/pay-per-click-management/style.css";
import "./style.css";
import "../contact-us/contact.css";
import '../hubspot-crm-migration/style.css'
import MigrateCmsCounter from "@/components/hubcmsmigrate/03MigrateCmsCounter";
import CmsMigrateReason from "@/components/hubcmsmigrate/04CmsMigrateReason";
import VariousTechMigrate from "@/components/hubcmsmigrate/05VariousTechMigrate";
import CmsSlides from "@/components/hubcmsmigrate/06CmsSlides";
import CmsMigrateSteps from "@/components/hubcmsmigrate/07CmsMigrateSteps";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ImageHubspot from "@/components/otherServices/hubspotDev/ImageHubspot";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { cmsmigration } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import CmsMigratePoints from "@/components/hubcmsmigrate/08CmsMigratePoints";
const page = () => {
  return (
    <>
      <HubCmsMigrateBanner />
      <MigrateCmsForm />
      <MigrateCmsCounter />
      <CmsMigrateReason />
      <VariousTechMigrate />
      <CmsSlides />
      <CmsMigrateSteps />
      <CustomizeHome
        heading="Industries We "
        subheading="cater to"
        paragraph="From e-commerce to healthcare, we serve diverse industries worldwide. Our experience spans across various sectors, ensuring tailored solutions for every business type."
      />
      <ImageHubspot />
      <HubspotClients />
      <CmsMigratePoints />
      <ServiceFaq accordionData={cmsmigration} />
      <AddsPartner
        heading="Take the Next Step with WebGuruz"
        paragraph="Ready to migrate to HubSpot CMS? Contact WebGuruz today to unlock the full potential of your website with our expert migration services. Let’s build something extraordinary together!"
        linkHref="/contact-us"
        linkText="Let’s create something incredible, together!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Simplify Your HubSpot CMS Migration with Certified Experts",
  description:
    "Streamline your HubSpot CMS migration with certified experts at WebGuruz, ensuring a smooth transition and an optimized, fully functional website for your business.",
};