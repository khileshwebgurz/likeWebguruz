import "../services/pay-per-click-management/style.css";
import "../magento-development-services/style.css";
import "../contact-us/contact.css";
import "./style.css";
import "../ecommerce-web-design-services/style.css";
import ImplementEcoBanner from "@/components/DecEcomImplement/01ImplementEcoBanner";
import ImplementEcoForm from "@/components/DecEcomImplement/02ImplementEcoForm";
import ImplementEcoCounter from "@/components/DecEcomImplement/03ImplementEcoCounter";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import ImplementEcoElevate from "@/components/DecEcomImplement/04ImplementEcoElevate";
import ImplementEcoServices from "@/components/DecEcomImplement/05ImplementEcoServices";
import ImplementEcoPlatform from "@/components/DecEcomImplement/06ImplementEcoPlatform";
import ImplementEcoProcess from "@/components/DecEcomImplement/08ImplementEcoProcess";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ImplementEcoTech from "@/components/DecEcomImplement/09ImplementEcoTech";
import ImplementEcoReasons from "@/components/DecEcomImplement/10ImplementEcoReasons";
import ImplementEcoBenefit from "@/components/DecEcomImplement/11ImplementEcoBenefit";
import ImplementEcoDtails from "@/components/DecEcomImplement/12ImplementEcoDetails";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { ecomimplementData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import ImplementEcoSolution from "@/components/DecEcomImplement/07ImplementEcoSolution";

const page = () => {
  return (
    <>
      <ImplementEcoBanner />
      <ImplementEcoForm />
      <HubspotClients />
      <ImplementEcoCounter />
      <ImplementEcoElevate />
      <ImplementEcoServices />
      <ImplementEcoPlatform />
      <ImplementEcoSolution />
      <ImplementEcoProcess />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater To"
        paragraph="We provide eCommerce implementation services across various industries, tailoring solutions to meet each of their needs. Our diverse client base includes businesses in retail, manufacturing, healthcare, fashion, and more. Whether you're in B2B, B2C, or D2C, we have the expertise to help you succeed. Our industry-specific solutions help businesses adapt to changing trends and customer demands, ensuring you're always one step ahead."
      />
      <ImplementEcoTech />
      <ImplementEcoReasons />
      <ImplementEcoBenefit />
      <ImplementEcoDtails />
      <ServiceFaq accordionData={ecomimplementData} />
      <AddsPartner
        heading="Ready to take your business online?"
        paragraph="Contact us today and let’s discuss how we can help you succeed."
        linkHref="/contact-us"
        linkText="Connect today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Professional eCommerce Implementation Services | WebGuruz",
  description: "Get professional eCommerce implementation services, with WebGuruz providing seamless, scalable solutions to help your business grow online effectively.",
};
