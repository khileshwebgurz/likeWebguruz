import HubConsBanner from "@/components/hubconsulting/01HubConsBanner";
import "./style.css";
import React from "react";
import ConsultServices from "@/components/hubconsulting/03ConsultServices";
import HubConsultPoints from "@/components/hubconsulting/04HubConsultPoints";
import HubspotBenifit from "@/components/hubconsulting/06HubSpotBenefit";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import "../contact-us/contact.css";
import HubConsAgency from "@/components/hubconsulting/05HubConsAgency";
import HubConsultSteps from "@/components/hubconsulting/HubConsultSteps";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import {hubConsult } from "@/utils/accordionData";
import HubConsultForm from "@/components/hubconsulting/02HubConsultForm";
import ConsultDisplay from "@/components/hubconsulting/ConsultDisplay";
import ConsultCertificate from "@/components/hubconsulting/ConsultCertificate";
import Featuredblog from "@/components/homeComponents/09Featuredblog";

const page = () => {
  return (
    <>
      <HubConsBanner />
      <HubConsultForm/>
      <ConsultDisplay/>
      <ConsultCertificate/>
      <HubConsultPoints />
      <ConsultServices />
      <HubConsAgency />
      <HubConsultSteps />
      <HubspotBenifit />
      <HubspotClients />
      <ServiceFaq accordionData={hubConsult} />
      <Featuredblog/>
    </>
  );
};

export default page;
export const metadata = {
  title: "Expert HubSpot Consulting Services for Business Growth",
  description: "Accelerate business growth with certified HubSpot consulting services from WebGuruz. Optimize your CRM, marketing, and sales strategies for maximum impact.",
};