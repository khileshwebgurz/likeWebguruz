import ZohoCrmBanner from "@/components/zohocrmpage/01ZohoCrmBanner";
import "../services/pay-per-click-management/style.css";
import "./style.css";
import ZohoCrmForm from "@/components/zohocrmpage/02ZohoCrmForm";
import ZohoBusiness from "@/components/zohocrmpage/03ZohoBusiness";
import ZohoCrmProcess from "@/components/zohocrmpage/05ZohoCrmProcess";
import ZohoCrmBenifit from "@/components/zohocrmpage/06ZohoCrmBenefit";
import ZohoCrmServices from "@/components/zohocrmpage/07ZohoCrmServices";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ZohoCrmWhyChoose from "@/components/zohocrmpage/08ZohoCrmWhyChoose";
import ZohoCrmModel from "@/components/zohocrmpage/09ZohoCrmModal";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { zohocrm } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
// import ZohoImageSec from "@/components/zohocrmpage/04ZohoImageSec";

const page = () => {
  return (
    <>
      <ZohoCrmBanner />
      <ZohoCrmForm />
      <ZohoBusiness />
      {/* <ZohoImageSec /> */}
      <ZohoCrmProcess />
      <ZohoCrmBenifit />
      <ZohoCrmServices />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="We provide Zoho CRM Plus implementation for various industries, including:"
      />
      <ZohoCrmWhyChoose />
      <ZohoCrmModel />
      <ServiceFaq accordionData={zohocrm} />
      <AddsPartner
        heading="Let’s Optimize Your Business with Zoho CRM Plus!"
        paragraph="Partner with WebGuruz Technologies Pvt Ltd for expert Zoho CRM Plus implementation & consulting services. Let’s create a customized CRM strategy that fuels your business growth. "
        linkHref="/contact-us"
        linkText="Get in touch today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Zoho CRM Plus Consultant | Zoho Partners in India | Zoho service partner",
  description: "Are you looking for Zoho CRM Plus Consultant in India? WebGuruz Offer expert Zoho solution programs partners and onboarding specialist at very affordable prices.",
};
