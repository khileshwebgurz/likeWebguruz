import GoogleAdsBanner from "@/components/googleadsComp/01GoogleAdsBanner";
import "../pay-per-click-management/style.css";
import "../../seo-packages/style.css";
import "./style.css";
import GoogleAdsForm from "@/components/googleadsComp/02GoogleAdsForm";
import GoogleAdsCounter from "@/components/googleadsComp/03GoogleAdsCounter";
import GoogleAdsServices from "@/components/googleadsComp/04GoogleAdsServices";
import GoogleAdsManagement from "@/components/googleadsComp/05GoogleAdsManagement";
import GoogleAdsCup from "@/components/googleadsComp/06GoogleAdsCup";
import GoogleAdsteam from "@/components/googleadsComp/07GoogleAdsTeam";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { googleadsdata} from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
const page = () => {
  return (
    <>
      <GoogleAdsBanner />
      <GoogleAdsForm />
      <GoogleAdsCounter />
      <GoogleAdsServices />
      <GoogleAdsManagement />
      <GoogleAdsCup />
      <GoogleAdsteam />
      <ServiceFaq accordionData={googleadsdata} />
      <AddsPartner
        heading="Ready to Boost Your Business?"
        paragraph="Contact us today to start your Google Ads campaign and watch your business grow. Let's work together to drive more traffic, leads, and sales with tailored ad strategies."
        linkHref="/contact-us"
        linkText="Contact with WebGuruz today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Google Ads Services | Google Ads Specialists | WebGuruz",
  description:
    "Give a boost to your business with expert Google Ads services. Our Google Ads specialists at WebGuruz drive targeted traffic and maximize your ROI.",
};