import DevBusiness from "@/components/otherServices/webDevelopment/01DevBusiness";
import WebCompany from "@/components/otherServices/webDevelopment/02WebCompany";
import WebFrameworks from "@/components/otherServices/webDevelopment/03WebFrameworks";
import WebProcess from "@/components/otherServices/webDevelopment/04WebProcess";
import WebScalable from "@/components/otherServices/webDevelopment/05WebScalable";
import Webpillar from "@/components/otherServices/webDevelopment/06Webpillar";
import OurSuccessStories from "@/components/otherServices/webDevelopment/08OurSuccessStories";
import Webpartnering from "@/components/otherServices/webDevelopment/09Webpartnering";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
// export const dynamic = 'force-dynamic'
import WebStation from "@/components/otherServices/webDevelopment/07WebStation";
import WebDevBanner from "@/components/otherServices/webDevelopment/00WebDevBanner";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import {accordionData} from "@/utils/accordionData";
import HomeHiring from "@/components/PopUpForms/HomeHiring";

const page = () => {
  return (
    <>
      <WebDevBanner />
      <DevBusiness />
      <WebCompany />
      <WebFrameworks />
      <WebProcess />
      <WebScalable />
      <Webpillar />
      <WebStation />
      <CustomizeHome
        heading="Crafting Unique Web Solutions for a"
        subheading="Wide Spectrum of Industries"
        paragraph="We cater to businesses across various sectors, delivering tailored solutions that drive success."
      />
      <OurSuccessStories />
      <Webpartnering />
      <ServiceFaq accordionData={accordionData} />
      <AddsPartner
        heading="Ready to transform your online presence?"
        paragraph="Let's create a website that exceeds user expectations. Contact us today for a free consultation."
        linkHref="/contact-us"
        linkText="Connect Now!"
      />
      <Featuredblog />
      <HomeHiring/>
    </>
  );
};

export default page;
export const metadata = {
  title: "Top Web Development Company & Services in India | WebGuruz",
  description:"Need a website development company in India? WebGuruz offers innovative web development services to create responsive, user-friendly websites for business success.",
};