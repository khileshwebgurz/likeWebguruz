import HubOnboardBanner from "@/components/hubspotonboard/01HubOnboardBanner";
import HubOnboardForm from "@/components/hubspotonboard/02HubOnboardForm";
import React from "react";
import "../services/pay-per-click-management/style.css";
import "../services/technical-seo/style.css";
import "../seo-packages/style.css";
import "../contact-us/contact.css";
import "./style.css";
import HubOnBoardCounter from "@/components/hubspotonboard/03HubOnboardCounter";
import HubOnboardProcess from "@/components/hubspotonboard/05HubOnboardProcess";
import OnboardingPhases from "@/components/hubspotonboard/06OnBoardingPhases";
import HubOnboardingSteps from "@/components/hubspotonboard/07HubOnboardingSteps";
import HubOnboardReasons from "@/components/hubspotonboard/08HubOnboardReasons";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ImageHubspot from "@/components/otherServices/hubspotDev/ImageHubspot";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import {hubonboard} from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import OnboardingTypes from "@/components/hubspotonboard/04OnboardingTypes";

const page = () => {
  return (
    <>
      <HubOnboardBanner />
      <HubOnboardForm />
      <HubOnBoardCounter />
      <OnboardingTypes />
      <HubOnboardProcess />
      <OnboardingPhases />
      <HubOnboardingSteps />
      <HubOnboardReasons />
      <CustomizeHome
        heading="Industries We "
        subheading="Serve"
        paragraph="From startups to established enterprises, we serve businesses across a wide range of industries."
      />
      <ImageHubspot />
      <HubspotClients />
      <ServiceFaq accordionData={hubonboard} />
      <AddsPartner
        heading="Start Your HubSpot Automation Journey with WebGuruz Today!"
        paragraph="Take the first step toward a streamlined, efficient, and successful future. Partner with WebGuruz for HubSpot automation services that deliver measurable results. "
        linkHref="/contact-us"
        linkText="Discuss Your Automation Goals Now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Custom HubSpot Onboarding by Certified HubSpot Solutions Partner",
  description:
    "Get seamless custom HubSpot onboarding services by WebGuruz, a Certified HubSpot Solutions Partner. Ensure smooth setup, quick adoption, and drive business growth.",
};