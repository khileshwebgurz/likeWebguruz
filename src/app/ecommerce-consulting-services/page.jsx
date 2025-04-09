import DevEcomConsultBanner from "@/components/DevEcomConsulting/01DevEcomConsultBanner";
import DevEcomConsultForm from "@/components/DevEcomConsulting/02DevEcomConsultForm";
import DevEcomConsultCounter from "@/components/DevEcomConsulting/03DevEcomConsultCounter";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import "../contact-us/contact.css";
import "./style.css";
import "../magento-development-services/style.css";
import "../services/pay-per-click-management/style.css";
import DevEcomConsultNeeds from "@/components/DevEcomConsulting/04DevEcomConsultNeeds";
import DevEcomConsultSolutions from "@/components/DevEcomConsulting/06DevEcomConsultSolutions";
import DevEcomConsultStratergy from "@/components/DevEcomConsulting/07DevEcomConsultStratergy";
import DevEcomConsultProcess from "@/components/DevEcomConsulting/08DevEcomConsultProcess";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import DevEcomConsultTech from "@/components/DevEcomConsulting/09DevEcomConsultTech";
import DevEcomConsultAdv from "@/components/DevEcomConsulting/11DevEcomConsultAdv";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { consultecomData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import DevEcomConsultServices from "@/components/DevEcomConsulting/05DevEcomConsultServices";
import DevEcomConsultReasons from "@/components/DevEcomConsulting/10DevEcomConsultReasons";
import DevEcomConsultDetails from "@/components/DevEcomConsulting/12DevEcomConsultDetails";

const page = () => {
  return (
    <>
      <DevEcomConsultBanner />
      <DevEcomConsultForm />
      <HubspotClients />
      <DevEcomConsultCounter />
      <DevEcomConsultNeeds />
      <DevEcomConsultServices />
      <DevEcomConsultSolutions />
      <DevEcomConsultStratergy />
      <DevEcomConsultProcess />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="We serve a wide range of industries, offering specialized consulting services for businesses in retail, fashion, electronics, food & beverage, health & wellness, and more. Whether you’re an emerging brand or a well-established enterprise, our team tailors solutions to meet your unique needs."
      />
      <DevEcomConsultTech />
      <DevEcomConsultReasons />
      <DevEcomConsultAdv />
      <DevEcomConsultDetails />
      <ServiceFaq accordionData={consultecomData} />
      <AddsPartner
        heading="Ready to Transform Your eCommerce Strategy?"
        paragraph="Contact WebGuruz today and discover how our certified eCommerce consultants can help your business thrive in the digital marketplace!"
        linkHref="/contact-us"
        linkText="Discuss Your Goals Now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "eCommerce Consulting Services | eCommerce Consultants | WebGuruz",
  description:
    "Enhance your online business with eCommerce consulting services. WebGuruz, certified eCommerce consultants, offers expert solutions in CRO, SEO, design, and audits.",
};
