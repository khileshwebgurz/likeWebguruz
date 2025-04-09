import "../services/pay-per-click-management/style.css";
import "../contact-us/contact.css";
import "./style.css";
import "../seo-packages/style.css";
import WhmcBanner from "@/components/DevWhmc/01WhmcBanner";
import WhmcForm from "@/components/DevWhmc/02WhmcForm";
import WhmcCounter from "@/components/DevWhmc/03WhmcCounter";
import WhmcBusiness from "@/components/DevWhmc/04WhmcBusiness";
import WhmcServices from "@/components/DevWhmc/05WhmcServices";
import WhmcDevelopment from "@/components/DevWhmc/06WhmcDevelopment";
import WhmcTechTab from "@/components/DevWhmc/08WhmcTechTab";
import WhmcWhyChoose from "@/components/DevWhmc/09WhmcWhyChoose";
import WhmcSpeacialization from "@/components/DevWhmc/10WhmcSpeacialization";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { whmcsData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import WhmcMainSlider from "@/components/DevWhmc/07WhmcMainSlider";

const page = () => {
  return (
    <>
      <WhmcBanner />
      <WhmcForm />
      <WhmcCounter />
      <WhmcBusiness />
      <WhmcServices />
      <WhmcDevelopment />
      <WhmcMainSlider />
      <WhmcTechTab />
      <WhmcWhyChoose />
      <WhmcSpeacialization />
      <ServiceFaq accordionData={whmcsData} />
      <AddsPartner
        heading="Ready to Optimize Your Business with WHMCS?"
        paragraph="Start your journey toward streamlined success."
        linkHref="/contact-us"
        linkText="Get Started Today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Professional WHMCS Development Services Company in India | WebGuruz",
  description: "Offering expert WHMCS development services with WebGuruz in India to help businesses streamline client management, billing, and support with customized solutions.",
};