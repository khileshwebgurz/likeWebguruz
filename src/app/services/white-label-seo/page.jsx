import WhiteSeoBanner from "@/components/whitelabelseo/01WhiteSeoBanner";
import WhiteSeoForm from "@/components/whitelabelseo/02WhiteSeoForm";
import "./style.css";
import "../../contact-us/contact.css";
import "../pay-per-click-management/style.css";
import WhiteSeoCounter from "@/components/whitelabelseo/03WhiteSeoCounter";
import WhiteSeoServices from "@/components/whitelabelseo/04WhiteSeoServices";
import WhiteSeoProcess from "@/components/whitelabelseo/05WhiteSeoProcess";
import WhiteSeoWorking from "@/components/whitelabelseo/06WhiteSeoWorking";
import WhiteSeoBenefits from "@/components/whitelabelseo/07WhiteSeoBenefits";
import WhiteSeoWhyChoose from "@/components/whitelabelseo/09WhiteSeoWhyChoose";
import WhiteSeoExperts from "@/components/whitelabelseo/10WhiteSeoExperts";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { whitelabelseodata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import WhiteSeoPhases from "@/components/whitelabelseo/08WhiteSeoPhases";
const page = () => {
  return (
    <>
      <WhiteSeoBanner />
      <WhiteSeoForm />
      <WhiteSeoCounter />
      <WhiteSeoServices />
      <WhiteSeoProcess />
      <WhiteSeoWorking />
      <WhiteSeoBenefits />
      <WhiteSeoPhases />
      <WhiteSeoWhyChoose />
      <WhiteSeoExperts />
      <ServiceFaq accordionData={whitelabelseodata} />
      <AddsPartner
        heading="Ready to Boost Your Rankings?"
        paragraph="Get in touch with us today and let’s discuss how our White Label SEO services can drive results for your business."
        linkHref="/contact-us"
        linkText="Connect with us!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "White Label SEO Services | Best White Label SEO Company",
  description:
    "Enhance your business with WebGuruz top White Label SEO services. Partner with the best White Label SEO Agency for expert solutions and improved online visibility.",
};
