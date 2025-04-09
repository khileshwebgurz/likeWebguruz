import HubDeveloperBanner from "@/components/hubDevelopers/01HubDeveloperBanner";
import "./style.css";
import "../services/pay-per-click-management/style.css";
import "../services/technical-seo/style.css";

import HubDeveloperForm from "@/components/hubDevelopers/02HubDeveloperForm";
import HubDeveloperCounter from "@/components/hubDevelopers/03HubDeveloperCounter";
import DeveloperCertified from "@/components/hubDevelopers/04DeveloperCertified";
import DeveloperWhyHire from "@/components/hubDevelopers/05DeveloperWhyHire";
import DeveloperBoundary from "@/components/hubDevelopers/06DeveloperBoundary";
import ImageHubspot from "@/components/otherServices/hubspotDev/ImageHubspot";
import DeveloperTech from "@/components/hubDevelopers/08DeveloperTech";
import DeveloperKeys from "@/components/hubDevelopers/09DeveloperKeys";
import DeveloperServices from "@/components/hubDevelopers/10DeveloperServices";
import DeveloperProcess from "@/components/hubDevelopers/11DeveloperProcess";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import {  hubspotDevelopers } from "@/utils/accordionData";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
const page = () => {
  return (
    <>
      <HubDeveloperBanner />
      <HubDeveloperForm />
      <HubDeveloperCounter />
      <DeveloperCertified />
      <DeveloperWhyHire />
      <DeveloperBoundary />
      <ImageHubspot />
      <DeveloperTech />
      <DeveloperKeys />
      <DeveloperServices />
      <DeveloperProcess />
      <AddsPartner
        heading="Ready to Transform Your HubSpot Experience?"
        paragraph="Partner with a certified Hubspot agency and take your business to the next level with custom HubSpot development. Contact us today for a free consultation."
        linkHref="/contact-us"
        linkText="Connect With Us!"
      />
      <ServiceFaq accordionData={hubspotDevelopers} />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Hire Certified HubSpot CRM Developers | HubSpot Development Agency",
  description: "Partner with a certified HubSpot agency for expert CRM, app, and CMS solutions. Drive growth with custom strategies from our certified HubSpot CRM developers.",
};
