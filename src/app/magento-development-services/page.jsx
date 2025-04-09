import DevMagnetoBanner from "@/components/DevMagento/01DevMagnetoBanner";
import "../contact-us/contact.css";
import "./style.css";
import "../services/pay-per-click-management/style.css";
import "../services/technical-seo/style.css";
import DevMagentoForm from "@/components/DevMagento/02DevMagentoForm";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import DevMagentoCounter from "@/components/DevMagento/03DevMagentoCounter";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import {  magentoData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import DevMagentoDiscovery from "@/components/DevMagento/04DevMagentoDiscovery";
import DevMagentoBenifit from "@/components/DevMagento/07DevMagentoBenefit";
import DevMagentoPlatform from "@/components/DevMagento/08DevMagentoPlatform";
import DevMagentoProcess from "@/components/DevMagento/09DevMagentoProcess";
import DevMagentoTech from "@/components/DevMagento/10DevMagentoTech";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import DevMagentoNavigate from "@/components/DevMagento/11DevMagentoNavigate";
import DevMagentoReasons from "@/components/DevMagento/12DevMagentoReasons";
import DevMagentoPossibility from "@/components/DevMagento/14DevMagentoPossibility";
import DevMagentoAccordian from "@/components/DevMagento/05DevMagentoAccordian";
import DevMagentoSolution from "@/components/DevMagento/06DevMagentoSolution";
import DevMagentoDetails from "@/components/DevMagento/13DevMagentoDetails";

const page = () => {
  return (
    <>
      <DevMagnetoBanner />
      <DevMagentoForm />
      <HubspotClients />
      <DevMagentoCounter />
      <DevMagentoDiscovery />
      <DevMagentoAccordian />
      <DevMagentoSolution />
      <DevMagentoBenifit />
      <DevMagentoPlatform />
      <DevMagentoProcess />
      <DevMagentoTech />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="From retail to healthcare, we bring Magento expertise to diverse sectors. Let us help you build eCommerce solutions that resonate with your audience."
      />
      <DevMagentoNavigate />
      <DevMagentoReasons />
      <DevMagentoDetails />
      <DevMagentoPossibility />
      <ServiceFaq accordionData={magentoData} />
      <AddsPartner
        heading="Need a powerful, scalable, and secure Magento store tailored to your needs?"
        paragraph="TakeLet’s build something extraordinary together! Discuss how we can elevate your eCommerce experience and drive business growth."
        linkHref="/contact-us"
        linkText="Request a Quote"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Magento Development Services | Magento eCommerce Development",
  description: "Get Magento development services from WebGuruz. Our certified Magento developers offer expert eCommerce solutions to help create a seamless, scalable online store.",
};
