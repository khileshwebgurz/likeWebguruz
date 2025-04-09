import HubAutomateBanner from "@/components/hubmarketautomate/01HubAutomateBanner";
import HubAutomateForm from "@/components/hubmarketautomate/02HubAutomateForm";
import HubAutomateDisplay from "@/components/hubmarketautomate/03HubAutomateDisplay";
import HubAutomateGrowth from "@/components/hubmarketautomate/05HubAutomateGrowth";
import ProvenAutomate from "@/components/hubmarketautomate/06ProvenAutomate";
import HubAutomateChoose from "@/components/hubmarketautomate/08HubAutomateChoose";
import AutomateCertificate from "@/components/hubmarketautomate/09AutomateCertificate";
import HomeTestimonial from "../home2/components/homeComponents/07HomeTestimonial";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { hubspotAutomation } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import AutomateAchieve from "@/components/hubmarketautomate/04AutomateAchieve";
import "./style.css";

const page = () => {
  return (
    <>
      <HubAutomateBanner />
      <HubAutomateForm />
      <HubAutomateDisplay />
      <AutomateAchieve />
      <HubAutomateGrowth />
      <ProvenAutomate />
      <CustomizeHome
        heading="Industries We "
        subheading="Serve"
        paragraph="From startups to established enterprises, we serve businesses across a wide range of industries."
      />
      <HubAutomateChoose />
      <AutomateCertificate />
      <HomeTestimonial />
      <ServiceFaq accordionData={hubspotAutomation} />
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
  title: "Get HubSpot Automation Services from Trusted Solution Partner",
  description:
    "Boost your business with HubSpot Automation Services from WebGuruz. Streamline marketing, sales, and customer service to drive efficiency and growth effectively.",
};