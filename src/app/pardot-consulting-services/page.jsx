import PardotBanner from "@/components/pardotconsultpage/01PardotBanner";
import PardotForm from "@/components/pardotconsultpage/02PardotForm";
import React from "react";
import "../services/pay-per-click-management/style.css";
import "../services/technical-seo/style.css";
import "./style.css";
import "../hubspot-onboarding/style.css";
import "../ecommerce-maintenance-support/style.css";
import PardotConsult from "@/components/pardotconsultpage/03PardotConsult";
import PardotImplement from "@/components/pardotconsultpage/04PardotImplement";
import PardotCampaign from "@/components/pardotconsultpage/05PardotCampaign";
import PardotArea from "@/components/pardotconsultpage/06PardotArea";
import PardotServices from "@/components/pardotconsultpage/07PardotServices";
import PardotTabs from "@/components/pardotconsultpage/08PardotTabs";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import PardotReason from "@/components/pardotconsultpage/09PardotReason";
import PardotSteps from "@/components/pardotconsultpage/10PardotSteps";
import PardotFeature from "@/components/pardotconsultpage/11PardotFeature";
import PardotWhyChoose from "@/components/pardotconsultpage/12PardotWhyChoose";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { pardotdata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
const page = () => {
  return (
    <>
      <PardotBanner />
      <PardotForm />
      <PardotConsult />
      <PardotImplement />
      <PardotCampaign />
      <PardotArea />
      <PardotServices />
      <PardotTabs />
      <CustomizeHome
        heading="Industries We "
        subheading="Serve"
        paragraph="We have expertise working with clients from different industry verticals."
      />
      <PardotReason />
      <PardotSteps />
      <PardotFeature />
      <PardotWhyChoose />
      <ServiceFaq accordionData={pardotdata} />
      <AddsPartner
        heading="Ready to Transform Your Marketing?"
        paragraph="Contact WebGuruz Technologies today and unlock the full potential of Pardot marketing automation!"
        linkHref="/contact-us"
        linkText="Contact with WebGuruz!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Top Pardot service consulting partner companies in India - WebGuruz",
  description: "Transform your business with best Pardot consulting partner companies in India. Our services includes Solutions, Consulting, onboarding, integration and training.",
};