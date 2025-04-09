import NewAutomateBanner from "@/components/newAutomation/01NewAutomateBanner";
import NewAutomateForm from "@/components/newAutomation/02NewAutomateForm";
import "../services/pay-per-click-management/style.css";
import "../services/local-seo/style.css";
import './style.css'
import NewAutomateCounter from "@/components/newAutomation/03NewAutomateCounter";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ImageHubspot from "@/components/otherServices/hubspotDev/ImageHubspot";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { newhubAutomate } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import NewAutomateServices from "@/components/newAutomation/04NewAutomateServices";
import NewAutomateProcess from "@/components/newAutomation/05NewAutomateProcess";
import NewAutomateChoose from "@/components/newAutomation/06NewAutomateChoose";

const page = () => {
  return (
    <>
      <NewAutomateBanner />
      <NewAutomateForm />
      <NewAutomateCounter />
      <NewAutomateServices/>
      <NewAutomateProcess/>
      <NewAutomateChoose/>
      <CustomizeHome
        heading="Custom HubSpot Automation Solutions "
        subheading=" for Every Industry "
        paragraph="From e-commerce to healthcare, education to technology, our expertise spans a variety of industries. Whatever your niche, we tailor our services to your unique business needs."
      />

      <ImageHubspot />
      <ServiceFaq accordionData={newhubAutomate} />
      <AddsPartner
        heading="Partner with WebGuruz to Transform Your Marketing Strategy"
        paragraph="Don’t let outdated processes slow you down. Experience the power of HubSpot Marketing Automation with WebGuruz and watch your business soar to new heights."
        linkHref="/contact-us"
        linkText="Connect With Us Today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Expert HubSpot Marketing Automation Services for Your Business",
  description: "Enhance your business with expert HubSpot Marketing Automation services. As a Certified HubSpot Partner, we deliver customized solutions for optimal growth.",
};