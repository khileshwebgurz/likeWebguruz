import DevShopifyBanner from "@/components/Devshopify/01DevShopifyBanner";
import "../services/pay-per-click-management/style.css";
import DevShopifyForm from "@/components/Devshopify/02DevShopifyForm";
import "./style.css";
import "../magento-development-services/style.css";
import "../contact-us/contact.css";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import DevShopifyCounter from "@/components/Devshopify/03DevShopifyCounter";
import DevShopifyServices from "@/components/Devshopify/04DevShopifyServices";
import DevShopifyLeads from "@/components/Devshopify/06DevShopifyLeads";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import DevShopifyPoints from "@/components/Devshopify/08DevShopifyPoints";
import DevShopifyReasons from "@/components/Devshopify/09DevShopifyReasons";
import DevShopifyTeams from "@/components/Devshopify/11DevShopifyTeams";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { shopifydevelopment } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import DevShopifyOuterSlides from "@/components/Devshopify/10DevShopifyOuterSlides";
import DevShopifyProcess from "@/components/Devshopify/05DevShopifyProcess";
import DevShopifyTech from "@/components/Devshopify/07DevShopifyTech";

const page = () => {
  return (
    <>
      <DevShopifyBanner />
      <DevShopifyForm />
      <HubspotClients />
      <DevShopifyCounter />
      <DevShopifyServices />
      <DevShopifyProcess />
      <DevShopifyLeads />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater To"
        paragraph="From fashion to electronics, and health to home decor, we serve a diverse range of industries. Our expertise ensures tailored solutions for businesses in retail, wholesale, B2B, and beyond, making WebGuruz the perfect partner for your Shopify store."
      />
      <DevShopifyTech />
      <DevShopifyPoints />
      <DevShopifyReasons />
      <DevShopifyOuterSlides />
      <DevShopifyTeams />
      <ServiceFaq accordionData={shopifydevelopment} />
      <AddsPartner
        heading="Partner with WebGuruz for Your Shopify Success"
        paragraph="Start building your dream e-commerce store today! Contact us now for a free consultation."
        linkHref="/contact-us"
        linkText="Connect with us today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Shopify Website Development Services for E-Commerce | WebGuruz",
  description: "Create a robust online store with WebGuruz Shopify Website Development Services. As a top Shopify Development Company in India, we deliver custom solutions for success.",
};
