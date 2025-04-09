import "./style.css";
import "../services/pay-per-click-management/style.css";
import "../ecommerce-web-design-services/style.css";
import ContInfoBanner from "@/components/contentInfograph/01ContInfoBanner";
import ContInfoForm from "@/components/contentInfograph/02ContInfoForm";
import ContInfoStory from "@/components/contentInfograph/03ContInfoStory";
import ContInfoAnimate from "@/components/contentInfograph/04ContInfoAnimate";
import ContInfoDiscovery from "@/components/contentInfograph/05ContInfoDiscovery";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ContInfoBusiness from "@/components/contentInfograph/08ContInfoBusiness";
import ContInfoService from "@/components/contentInfograph/09ContInfoService";
import ConstInfoSearch from "@/components/contentInfograph/10ConstInfoSearch";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { infographicmotiondata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import ContInfoDelivery from "@/components/contentInfograph/06ContInfoDelivery";
import ContInfoCompany from "@/components/contentInfograph/07ContInfoCompany";

const page = () => {
  return (
    <>
      <ContInfoBanner />
      <ContInfoForm />
      <ContInfoStory />
      <ContInfoAnimate />
      <ContInfoDiscovery />
      <ContInfoDelivery />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="We provide Infographics & Motion Graphics services for various industries, including:"
      />
      <ContInfoCompany />
      <ContInfoBusiness />
      <ContInfoService />
      <ConstInfoSearch />
      <ServiceFaq accordionData={infographicmotiondata} />
      <AddsPartner
        heading="Looking for top-tier Infographics & Motion Graphics Services?"
        paragraph="WebGuruz Technologies Pvt Ltd is here to help! Contact us today and let’s create visuals that captivate, inform, and convert."
        linkHref="/contact-us"
        linkText="Connect With Us Today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Infographic Design Services | Content, Design, Promotion | WebGuruz",
  description: "Looking for a custom infographic? WebGuruz, a leading Infographics & Motion Graphics company, offers competitive pricing and infographic promotion packages.",
};