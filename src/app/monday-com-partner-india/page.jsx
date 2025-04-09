import MonDotBanner from "@/components/mondaydotcom/01MonDotBanner";
import "../services/pay-per-click-management/style.css";
import "../services/white-label-seo/style.css";
import "./style.css";
import MonDotForm from "@/components/mondaydotcom/02MonDotForm";
import MonDotResult from "@/components/mondaydotcom/03MonDotResult";
import MonDotOffer from "@/components/mondaydotcom/04MonDotOffer";
import MonDotWorkflow from "@/components/mondaydotcom/05MonDotWorkflow";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import MonDotChoose from "@/components/mondaydotcom/08MonDotChoose";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { mondaydotcom } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import MonDotTimeline from "@/components/mondaydotcom/07MonDotTimeline";
import MonDotApproach from "@/components/mondaydotcom/06MonDotApproach";
const page = () => {
  return (
    <>
      <MonDotBanner />
      <MonDotForm />
      <MonDotResult />
      <MonDotOffer />
      <MonDotWorkflow />
      <MonDotApproach />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="From Startups to Enterprises Across Diverse Sectors"
      />
      <MonDotTimeline />
      <MonDotChoose />

      <ServiceFaq accordionData={mondaydotcom} />
      <AddsPartner
        heading="Ready to Transform Your Business Operations with Monday.com?"
        paragraph="Contact WebGuruz today for a free consultation and discover how our Monday.com partner services can streamline your workflows, boost productivity, and drive growth for your business."
        linkHref="/contact-us"
        linkText="Contact with WebGuruz!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title:
    "Monday Expert Certified Licensing & Implementation Partner - WebGuruz",
  description:
    "Are you looking for certified partner with dedicated team of monday.com implementation specialists. WebGuruz Offer expert monday solutions programs and onboarding at very affordable prices.",
};
