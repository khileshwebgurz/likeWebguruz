import YoutAdsBanner from "@/components/youtadsComp/01YoutAdsBanner";
import "../pay-per-click-management/style.css";
import "./style.css";
import YoutAdsForm from "@/components/youtadsComp/02YoutAdsForm";
import YoutAdsCounter from "@/components/youtadsComp/03YoutAdsCounter";
import YoutAdsServices from "@/components/youtadsComp/04YoutAdsServices";
import YoutAdsType from "@/components/youtadsComp/05YoutAdsType";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import YoutAdsTeam from "@/components/youtadsComp/07YoutAdsTeam";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { youtubeadsData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import YoutSlidesMain from "@/components/youtadsComp/06YoutSlidesMain";

const page = () => {
  return (
    <>
      <YoutAdsBanner />
      <YoutAdsForm />
      <YoutAdsCounter />
      <YoutAdsServices />
      <YoutAdsType />
      <YoutSlidesMain />
      <CustomizeHome
        heading="Top Sectors Benefiting from  "
        subheading="YouTube Advertising in India "
        paragraph="The skilled team at our YouTube Advertising company excels at creating innovative solutions for clients across a wide range of industries and sectors. With our YouTube Ads Services, we particularly recommend the following businesses in India that should not hesitate to invest in YouTube Ads for maximum impact and growth."
      />
      <YoutAdsTeam />
      <ServiceFaq accordionData={youtubeadsData} />
      <AddsPartner
        heading="Ready to Boost Your Brand with YouTube Ads? "
        paragraph="Partner with our expert digital marketing team to create high-impact campaigns that drive results. "
        linkHref="/contact-us"
        linkText="Contact us today to get started!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "YouTube Advertising Services | YouTube Advertising Agency | WebGuruz",
  description:
    "Grow your YouTube channel with WebGuruz YouTube Advertising services in India. Increase views, engagement, and subscribers with our tailored YouTube strategies.",
};
