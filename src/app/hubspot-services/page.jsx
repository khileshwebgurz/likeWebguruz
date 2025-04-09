import HubServicesBanner from "@/components/hubspotservicescomp/01HubServicesBanner";
import "./style.css";
import "../services/pay-per-click-management/style.css";
import "../services/technical-seo/style.css";
import "../contact-us/contact.css";
import HubServicesForm from "@/components/hubspotservicescomp/02HubServicesForm";
import HubServicesCounter from "@/components/hubspotservicescomp/03HubServicesCounter";
import HubServicesPresent from "@/components/hubspotservicescomp/04HubServicesPresent";
import HubServiceProcesses from "@/components/hubspotservicescomp/05HubServiceProcesses";
import HubServicesSteps from "@/components/hubspotservicescomp/06HubServicesSteps";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import HubServiceWhyChoose from "@/components/hubspotservicescomp/07HubServiceWhyChoose";
import ImageHubspot from "@/components/otherServices/hubspotDev/ImageHubspot";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import {  hubspotServices } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
const page = () => {
  return (
    <>
      <HubServicesBanner />
      <HubServicesForm />
      <HubServicesCounter />
      <HubServicesPresent />
      <HubServiceProcesses />
      <HubServicesSteps />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater To"
        paragraph="From startups to large enterprises, we provide HubSpot services across diverse industries, including technology, healthcare, e-commerce, finance, and more."
      />
      <HubServiceWhyChoose />
      <ImageHubspot />
      <HubspotClients />
      <ServiceFaq accordionData={hubspotServices} />
      <AddsPartner
        heading="Ready to Transform Your Business with HubSpot?"
        paragraph="Let’s Elevate Your Business- Start Your HubSpot Journey with us! Contact us today and take the first step towards business excellence!"
        linkHref="/contact-us"
        linkText="Discover More With Webguruz!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Transform Your Business with Expert HubSpot Services",
  description:
    "Grow your business with expert HubSpot services from WebGuruz, a certified HubSpot partner. Optimize efficiency, marketing, and sales with our tailored solutions.",
};