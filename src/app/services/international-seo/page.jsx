import InternetSeoBanner from "@/components/internationalseo/01InternetSeoBanner";
import InternetSeoForm from "@/components/internationalseo/02InternetSeoForm";
import "../pay-per-click-management/style.css";
import "../small-business-seo/style.css";
import "./style.css";
import InternetCounter from "@/components/internationalseo/03InternetCounter";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { internationalData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import InternetServices from "@/components/internationalseo/04InternetServices";
import InternetTabs from "@/components/internationalseo/05InternetTabs";
import InternetStratergy from "@/components/internationalseo/06InternetStratergy";
import InternetWhyChoose from "@/components/internationalseo/07InternetWhyChoose";
const page = () => {
  return (
    <>
      <InternetSeoBanner />
      <InternetSeoForm />
      <InternetCounter />
      <InternetServices />
      <CustomizeHome
        heading="Industries We "
        subheading="Serve"
        paragraph="From startups to established enterprises, we serve businesses across a wide range of industries."
      />
      <InternetTabs />
      <InternetStratergy />
      <InternetWhyChoose />
      <ServiceFaq accordionData={internationalData} />
      <AddsPartner
        heading="Grow Your Business Globally with WebGuruz"
        paragraph="Start your journey to global success today. Contact us for a personalized international SEO strategy that will boost your website's performance across the world."
        linkHref="/contact-us"
        linkText="Contact us today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Expert International SEO Services for Global Business Growth",
  description:
    "Increase global visibility and business growth with expert International SEO services from WebGuruz, a top International SEO Agency. Expand your reach worldwide.",
};