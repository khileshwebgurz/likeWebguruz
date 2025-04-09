import EcommerceBanner from "@/components/ecommerceSeo/01EcommerceBanner";
import EcommerceForm from "@/components/ecommerceSeo/02EcommerceForm";
import "./style.css";
import "../pay-per-click-management/style.css";
import "../../contact-us/contact.css";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import EcommercePremier from "@/components/ecommerceSeo/03EcommercePremier";
import EcommercePlatform from "@/components/ecommerceSeo/04EcommercePlatform";
import EcommerceBenifits from "@/components/ecommerceSeo/05EcommerceBenefits";
import EcommerceReason from "@/components/ecommerceSeo/06EcommerceReason";
import EcommerceTeaming from "@/components/ecommerceSeo/07EcommerceTeaming";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { ecomseodata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import EcomSlideOuter from "@/components/ecommerceSeo/EcomSlideOuter";

const page = () => {
  return (
    <>
      <EcommerceBanner />
      <EcommerceForm />
      <HubspotClients />
      <EcommercePremier />
      <EcomSlideOuter />
      <EcommercePlatform />
      <EcommerceBenifits />
      <EcommerceReason />
      <EcommerceTeaming />
      <ServiceFaq accordionData={ecomseodata} />
      <AddsPartner
        heading="Ready to Grow Your eCommerce Business? "
        paragraph="Partner with Webguruz for exceptional eCommerce SEO services."
        linkHref="/contact-us"
        linkText="Contact us today to get started!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Trusted eCommerce SEO Services | eCommerce SEO Agency",
  description:
    "Get trusted eCommerce SEO services from WebGuruz. Our eCommerce SEO company provides effective strategies to increase visibility, traffic, and sales.",
};
