import VoiceSeoBanner from "@/components/voicesearchseo/01VoiceSeoBanner";
import VoiceSeoForm from "@/components/voicesearchseo/02VoiceSeoForm";
import "../technical-seo/style.css";
import "./style.css";
import "../small-business-seo/style.css";
import "../pay-per-click-management/style.css";
import VoiceSeoProcess from "@/components/voicesearchseo/04VoiceSeoProcess";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { voiceseodata } from "@/utils/accordionData";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import VoiceSeoServices from "@/components/voicesearchseo/03VoiceSeoServices";
import VoiceSeoGrowth from "@/components/voicesearchseo/05VoiceSeoGrowth";
import VoiceSeoBusinessReady from "@/components/voicesearchseo/06VoiceSeoBusinessReady";
import VoiceSeoWhyChoose from "@/components/voicesearchseo/07VoiceSeoWhyChoose";

const page = () => {
  return (
    <>
      <VoiceSeoBanner />
      <VoiceSeoForm />
      <VoiceSeoServices />
      <VoiceSeoProcess />
      <VoiceSeoGrowth />
      <VoiceSeoBusinessReady />
      <VoiceSeoWhyChoose />
      <ServiceFaq accordionData={voiceseodata} />
      <AddsPartner
        heading="Take the First Step Towards Voice Search Success"
        paragraph="Discover how WebGuruz can transform your business with our Voice Search Optimization services."
        linkHref="/contact-us"
        linkText="Contact us now and stay ahead in the digital age!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Enhance SEO with Expert Voice Search Optimization Services",
  description:
    "Need voice search optimization services? Partner with WebGuruz and see how expert voice search SEO can boost your website’s visibility, traffic, and revenue.",
};
