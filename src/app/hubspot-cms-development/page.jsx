import CrmDevBanner from "@/components/hubcrmdevelopment/01CrmDevBanner";
import CmsDevForm from "@/components/hubcrmdevelopment/02CmsDevForm";
import CmsDevCounter from "@/components/hubcrmdevelopment/03CmsDevCounter";
import CmsDevFeature from "@/components/hubcrmdevelopment/04CmsDevFeature";
import "./style.css";
import "../services/technical-seo/style.css";
import '../contact-us/contact.css'
import CmsDevChoose from "@/components/hubcrmdevelopment/05CmsDevChoose";
import CmsDevServices from "@/components/hubcrmdevelopment/05CrmDevServices";
import CmsDevSteps from "@/components/hubcrmdevelopment/06CmsDevSteps";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import CmsDevReasons from "@/components/hubcrmdevelopment/07CmsDevReasons";
import ImageHubspot from "@/components/otherServices/hubspotDev/ImageHubspot";
import CmsDevWhatToDo from "@/components/hubcrmdevelopment/08CmsDevWhatToDo";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import {  cmsDevHubspot } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
const page = () => {
  return (
    <>
      <CrmDevBanner />
      <CmsDevForm />
      <CmsDevCounter />
      <CmsDevFeature />
      <CmsDevServices />
      <CmsDevSteps />
      <CustomizeHome
        heading="Industries We "
        subheading="cater to"
        paragraph="We help businesses in various sectors enhance their online presence and achieve their digital goals."
      />
      <CmsDevReasons />
      <ImageHubspot />
      <CmsDevWhatToDo />
      <CmsDevChoose />
      <HubspotClients/>
      <ServiceFaq accordionData={cmsDevHubspot} />
      <AddsPartner
        heading="Ready to take your website to the next level with HubSpot CMS?"
        paragraph="Our team is here to help! Contact us today for a consultation and discover how we can create a high-performing, custom website that aligns with your business goals."
        linkHref="/contact-us"
        linkText="Connect With Us Today!"
      />
      <Featuredblog/>
    </>
  );
};

export default page;
export const metadata = {
  title: "Build Your Website with HubSpot CMS Development Services",
  description:
    "Create your website with HubSpot CMS development services from WebGuruz. Custom solutions, seamless integration, and expert support to enhance your online presence.",
};