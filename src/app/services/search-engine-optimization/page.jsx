import SeoBanner from "@/components/otherServices/seoManagement/01SeoBanner";
import PpcServiceForm from "@/components/otherServices/PpcDev/02PpcServiceForm";
import "../pay-per-click-management/style.css";
import SeoCounter from "@/components/otherServices/seoManagement/02SeoCounter";
import SeoProfessional from "@/components/otherServices/seoManagement/03SeoProfessional";
import SeoStation from "@/components/otherServices/seoManagement/04SeoStation";
import SeoAdvertising from "@/components/otherServices/seoManagement/06SeoAdvertising";
import SeoDisplayCards from "@/components/otherServices/seoManagement/07SeoDisplayCards";
import AddsPartner from "@/components/serviceComponent/11AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import SeoSliderContent from "@/components/otherServices/seoManagement/SeoSliderContent";
import {seodata} from "@/utils/accordionData";
import SeoTeamSection from "@/components/otherServices/seoManagement/SeoTeamSection";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import HomeHiring from "@/components/PopUpForms/HomeHiring";
// export const dynamic = 'force-dynamic'

const page = () => {
  return (
    <>
      <SeoBanner />
      <PpcServiceForm heading={"Realize the true potential of your website with our"} subheading={"expert SEO services!"}
      paragraph={"With over a decade of experience, WebGuruz helps businesses dominate search engines through strategic, results-oriented SEO services. Our innovative approaches ensure you stay ahead of the competition, no matter the industry."}/>
      <SeoCounter />
      <SeoProfessional />
      <SeoSliderContent/>
      <SeoStation />
      <CustomizeHome
        heading="Industries We "
        subheading="Serve"
        paragraph="From startups to established enterprises, we serve businesses across a wide range of industries."
      />
      <SeoAdvertising />
      <SeoDisplayCards />
      <SeoTeamSection/>
      <ServiceFaq  accordionData={seodata} />
      <AddsPartner />
      <Featuredblog />
      <HomeHiring/>
    </>
  );
};

export default page;

export const metadata = {
  title: "Professional SEO Services and Marketing Agency India | WebGuruz",
  description:
    "Looking for a top SEO marketing agency? WebGuruz offers professional SEO services in India that enhance your online presence, drive traffic, and grow your business.",
};
