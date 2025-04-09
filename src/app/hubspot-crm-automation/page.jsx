import CrmAutomateBanner from "@/components/newCrmAutomate/01CrmAutomateBanner";
import CrmAutomateForm from "@/components/newCrmAutomate/02CrmAutomateForm";
import React from "react";
import "../services/pay-per-click-management/style.css";
import "../contact-us/contact.css";
import "./style.css";

import CrmAutoCounter from "@/components/newCrmAutomate/03CrmAutoCounter";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import CrmAutoProcess from "@/components/newCrmAutomate/07CrmAutoProcess";
import ImageHubspot from "@/components/otherServices/hubspotDev/ImageHubspot";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { newcrmAuto } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import CrmAutoServices from "@/components/newCrmAutomate/04CrmAutoServices";
import CrmAutoPlan from "@/components/newCrmAutomate/05CrmAutoPlan";
import CrmAutoWorking from "@/components/newCrmAutomate/06CrmAutoWorking";
import CrmAutoBenefits from "@/components/newCrmAutomate/08CrmAutoBenefits";

const page = () => {
  return (
    <>
      <CrmAutomateBanner />
      <CrmAutomateForm />
      <CrmAutoCounter />
      <CrmAutoServices />
      <CrmAutoPlan />
      <CrmAutoWorking />
      <CustomizeHome
        heading="Industries We "
        subheading="cater to"
        paragraph="From e-commerce to healthcare, we serve diverse industries worldwide. Our experience spans across various sectors, ensuring tailored solutions for every business type."
      />
      <CrmAutoProcess />
      <ImageHubspot />
      <CrmAutoBenefits />
      <HubspotClients />
      <ServiceFaq accordionData={newcrmAuto} />
      <AddsPartner
        heading="Ready to transform your business with HubSpot CRM Automation?"
        paragraph="Contact us today to schedule a free consultation. Our experts are here to help you streamline your processes and boost your growth."
        linkHref="/contact-us"
        linkText="Connect Now!"
      />
    </>
  );
};

export default page;


export const metadata = {
  title: "Get HubSpot CRM Automation for Streamlined Business Growth",
  description:
    "Streamline business processes with HubSpot CRM automation by WebGuruz, boosting efficiency and growth with tailored solutions and improved customer engagement.",
};