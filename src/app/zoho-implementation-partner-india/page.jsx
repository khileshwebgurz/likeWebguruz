import ZohoServeBanner from "@/components/zohoimplement/01ZohoServeBanner";
import ZohoServeForm from "@/components/zohoimplement/02ZohoServeForm";
import "../services/pay-per-click-management/style.css";
import "./style.css";
import "../services/white-label-seo/style.css";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { zohoconsult } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import ZohoServeOffer from "@/components/zohoimplement/03ZohoServeOffer";
import ZohoServeSolution from "@/components/zohoimplement/04ZohoServeSolution";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ZohoServeWorking from "@/components/zohoimplement/05ZohoServeWorking";
import ZohoServeChoose from "@/components/zohoimplement/06ZohoServeChoose";
const page = () => {
  return (
    <>
      <ZohoServeBanner />
      <ZohoServeForm />
      <ZohoServeOffer />
      <ZohoServeSolution />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="We serve clients across various sectors including Manufacturing, Education, Retail, Healthcare, Professional Services, Real Estate, Financial Services, Technology, Hospitality, Non-profit, and E-commerce. Our industry-specific knowledge allows us to implement Zoho solutions that address the unique challenges and requirements of each sector."
      />
      <ZohoServeWorking />
      <ZohoServeChoose />
      <ServiceFaq accordionData={zohoconsult} />
      <AddsPartner
        heading="Take the first step towards operational excellence with WebGuruz, India's leading Zoho implementation partner."
        paragraph="Contact our expert team today for a free consultation and discover how our tailored Zoho solutions can address your specific business challenges. Let us help you unlock the full potential of Zoho's powerful applications."
        linkHref="/contact-us"
        linkText="Contact with WebGuruz!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Zoho Onboardng | Zoho Partner Program | Zoho service partner",
  description: "Are you looking for Zoho Onboarding service provider in India? WebGuruz Offer expert Zoho solution programs partners and onboarding specialist at very affordable prices.",
};
