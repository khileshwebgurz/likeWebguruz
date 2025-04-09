import "../contact-us/contact.css";
import "./style.css";
import "../services/pay-per-click-management/style.css";
import "../services/technical-seo/style.css";
import "../magento-development-services/style.css";
import SupportEcomBanner from "@/components/DevMaintainceEcom/01SupportEcomBanner";
import SupportEcomForm from "@/components/DevMaintainceEcom/02SupportEcomForm";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import SupportEcomCounter from "@/components/DevMaintainceEcom/03SupportEcomCounter";
import SupportEcomHire from "@/components/DevMaintainceEcom/04SupportEcomHire";
import SupportEcomExplore from "@/components/DevMaintainceEcom/05SupportEcomExplore";
import SupportEcomProcess from "@/components/DevMaintainceEcom/06SupportEcomProcess";
import SupportEcomAdv from "@/components/DevMaintainceEcom/07SupportEcomAdv";
import SupportEcomTechy from "@/components/DevMaintainceEcom/08SupportEcomTechy";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import SupportEcomAgency from "@/components/DevMaintainceEcom/09SupportEcomAgency";
import SupportEcomBenfits from "@/components/DevMaintainceEcom/10SupportEcomBenefits";
import SupportEcomDetails from "@/components/DevMaintainceEcom/11SupportEcomDetails";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { ecommaintainData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";

const page = () => {
  return (
    <>
      <SupportEcomBanner />
      <SupportEcomForm />
      <HubspotClients />
      <SupportEcomCounter />
      <SupportEcomHire />
      <SupportEcomExplore />
      <SupportEcomProcess />
      <SupportEcomAdv />
      <SupportEcomTechy />
      <CustomizeHome
        heading="Industries We "
        subheading="Serve"
        paragraph="From retail and fashion to healthcare and technology, our services cater to diverse industries, ensuring tailored support for every niche."
      />
      <SupportEcomAgency />
      <SupportEcomBenfits />
      <SupportEcomDetails />
      <ServiceFaq accordionData={ecommaintainData} />
      <AddsPartner
        heading="Ready to Transform Your eCommerce Game?"
        paragraph="Contact WebGuruz today to experience unparalleled support and maintenance services that empower your online store’s success."
        linkHref="/contact-us"
        linkText="Start Today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Expert eCommerce Website Maintenance and Support Services | WebGuruz",
  description: "Access eCommerce website maintenance and support services by WebGuruz, ensuring your online store runs smoothly with regular updates, optimization, and troubleshooting.",
};
