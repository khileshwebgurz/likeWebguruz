import "../contact-us/contact.css";
import "./style.css";
import "../magento-development-services/style.css";
import "../shopify-development-services/style.css";
import "../magento-development-services/style.css";
import "../services/pay-per-click-management/style.css";
import "../services/remarketing-ads/style.css";
import DevWoCommerceBanner from "@/components/DevWoocommerce/01DevWoCommerceBanner";
import DevWoCommerceForm from "@/components/DevWoocommerce/02DevWoCommerceForm";
import DevWoCommerceCounter from "@/components/DevWoocommerce/03DevWoCommerceCounter";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import DevWoCommercePlatform from "@/components/DevWoocommerce/04DevWoCommercePlatform";
import DevWoCommercePoints from "@/components/DevWoocommerce/05DevWoCommercePoints";
import DevWoCommerceExpertise from "@/components/DevWoocommerce/06DevWoCommerceExpertise";
import DevWoCommerceNavigate from "@/components/DevWoocommerce/07DevWoCommerceNavigate";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import DevWoCommerceTech from "@/components/DevWoocommerce/08DevWoCommerceTech";
import DevWoCommerceBenefits from "@/components/DevWoocommerce/10DevWoCommerceBenefits";
import DevWoCommerceReasons from "@/components/DevWoocommerce/12DevWoCommerceReasons";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { hubspotAutomation, woocommData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import DevWoCommerceProcess from "@/components/DevWoocommerce/09DevWoCommerceProcess";
import DevWoCommerceWebguru from "@/components/DevWoocommerce/09DevWoCommerceWebguru";
import DevWoComDetails from "@/components/DevWoocommerce/11DevWoComDetails";

const page = () => {
  return (
    <>
      <DevWoCommerceBanner />
      <DevWoCommerceForm />
      <HubspotClients />
      <DevWoCommerceCounter />
      <DevWoCommercePlatform />
      <DevWoCommercePoints />
      <DevWoCommerceExpertise />
      <DevWoCommerceNavigate />
      <DevWoCommerceProcess />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="We have successfully delivered WooCommerce solutions to various industries, including retail, fashion, healthcare, automotive, education, and more."
      />
      <DevWoCommerceTech />
      <DevWoCommerceWebguru />
      <DevWoCommerceBenefits />
      <DevWoComDetails />
      <DevWoCommerceReasons />
      <ServiceFaq accordionData={woocommData} />
      <AddsPartner
        heading="Ready to Build Your Dream WooCommerce Store?"
        paragraph="Whether you're starting from scratch or migrating an existing store, our team of certified WooCommerce developers is here to help you succeed."
        linkHref="/contact-us"
        linkText="Discuss Your Project Today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Custom WooCommerce Development Services | WebGuruz",
  description: "With custom WooCommerce development services, WebGuruz, a top WooCommerce company, creates stores with expert WooCommerce developers to boost traffic and revenue.",
};
