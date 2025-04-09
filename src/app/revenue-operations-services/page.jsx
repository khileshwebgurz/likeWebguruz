import RevopsBanner from "@/components/revops/01RevopsBanner";
import "../services/pay-per-click-management/style.css";
import "./style.css";
import "../manual-software-testing-services/style.css";
import RevopsForm from "@/components/revops/02RevopsForm";
import RevGrowth from "@/components/revops/03RevopsGrowth";
import RevOffer from "@/components/revops/04RevopsOffer";
import RevoppsBussines from "@/components/revops/05RevopsBusiness";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { revopsdata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import RevoTalk from "@/components/revops/06RevopsTalk";
import RevopsResults from "@/components/revops/07RevopsResults";
import RevopsChoose from "@/components/revops/08RevopsChoose";
const page = () => {
  return (
    <>
      <RevopsBanner />
      <RevopsForm />
      <RevGrowth />
      <RevOffer />
      <RevoppsBussines />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="We work with businesses across various industries, including SaaS, eCommerce, B2B services, healthcare, finance, and more. No matter your industry, our RevOps strategies ensure sustainable revenue growth."
      />
      <RevoTalk />
      <RevopsResults />
      <RevopsChoose />
      <ServiceFaq accordionData={revopsdata} />
      <AddsPartner
        heading="Get Started with WebGuruz RevOps Services"
        paragraph="Let’s optimize your revenue operations for maximum efficiency and growth. Contact us today to discuss your RevOps needs and take your business to the next level!"
        linkHref="/contact-us"
        linkText="Contact with WebGuruz!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Revops Consulting Services | Top RevOps Companiess in India | RevOps Agency partner",
  description: "Are you looking for RevOps Consulting Services in India? WebGuruz is a certified RevOps specialist Agency partner Offering expert RevOps solutions at very affordable prices.",
};
