import MobileSeoBanner from "@/components/mobileseoComp/01MobileSeoBanner";
import "./style.css";
import "../../contact-us/contact.css";
import "../pay-per-click-management/style.css";
import "../technical-seo/style.css";
import MobileSeoForm from "@/components/mobileseoComp/02MobileSeoForm";
import MobileSeoServices from "@/components/mobileseoComp/03MobileSeoServices";
import MobileSeoPlatform from "@/components/mobileseoComp/04MobileSeoPlatform";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import MobileSeoClients from "@/components/mobileseoComp/05MobileSeoClients";
import MobileSeoReasons from "@/components/mobileseoComp/06MobileSeoReasons";
import MobileSeoPoints from "@/components/mobileseoComp/07MobileSeoPoints";
import MobileSeoAchieve from "@/components/mobileseoComp/08MobileSeoAchieve";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { mobileseodata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";

const page = () => {
  return (
    <>
      <MobileSeoBanner />
      <MobileSeoForm />
      <MobileSeoServices />
      <MobileSeoPlatform />
      <CustomizeHome
        heading="Industries We "
        subheading="Serve"
        paragraph="From startups to established enterprises, we serve businesses across a wide range of industries."
      />
      <MobileSeoClients />
      <MobileSeoReasons />
      <MobileSeoPoints />
      <MobileSeoAchieve />
      <HubspotClients />
      <ServiceFaq accordionData={mobileseodata} />
      <AddsPartner
        heading="Take Your Website to the Next Level with Our Mobile SEO Services"
        paragraph="Contact Webguruz today to transform your mobile presence and achieve exceptional results. Let’s build a strategy that works for you!"
        linkHref="/contact-us"
        linkText="Connect Now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Enhance Rankings with Expert Mobile SEO Services for Success",
  description:
    "Improve your rankings with expert Mobile SEO services from WebGuruz, a leading Mobile SEO agency. Drive success and maximize visibility for your mobile website!",
};
