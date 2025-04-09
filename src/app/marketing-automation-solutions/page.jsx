import "./style.css";
import "../services/pay-per-click-management/style.css";
import "../services/local-seo/style.css";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { marketgrowsol } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import MarketGrowForm from "@/components/marketGrowth/02MarketGrowForm";
import MarketGrowBanner from "@/components/marketGrowth/01MarketGrowBanner";
import MarketPerform from "@/components/marketGrowth/03MarketPerform";
import MarketGrowBrand from "@/components/marketGrowth/04MarketGrowBrand";
import MarketGrowEngage from "@/components/marketGrowth/05MarketGrowEngage";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import MarketGrowWork from "@/components/marketGrowth/06MarketGrowWork";
import MarketGrowTalent from "@/components/marketGrowth/07MarketGrowTalent";
import MarketScaleBusiness from "@/components/marketGrowth/MarketScaleBusiness";
const page = () => {
  return (
    <>
      <MarketGrowBanner />
      <MarketGrowForm />
      <MarketScaleBusiness />
      <MarketPerform />
      <MarketGrowBrand />
      <MarketGrowEngage />
      <CustomizeHome
        heading="Industries We "
        subheading=" Cater To"
        paragraph="Transforming Businesses Across Sectors"
      />
      <MarketGrowWork />
      <MarketGrowTalent />
      <ServiceFaq accordionData={marketgrowsol} />
      <AddsPartner
        heading="Take the first step toward smarter, more efficient marketing"
        paragraph="Contact WebGuruz today for a free consultation and discover how our Marketing Automation Solutions can drive your business growth."
        linkHref="/contact-us"
        linkText="Contact with WebGuruz!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Best B2B Marketing automation solutions for growth in India - WebGuruz",
  description: "Top Marketing automation solutions for growth in India. Our expert team delivers customized solutions to elevate your customer growth strategies with proven process.",
};