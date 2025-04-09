import WhitePpcBanner from "@/components/whiteppcmanagement/01WhitePpcBanner";
import "../pay-per-click-management/style.css";
import "./style.css";
import WhitePpcForm from "@/components/whiteppcmanagement/02WhitePpcForm";
import WhitePpcCounter from "@/components/whiteppcmanagement/03WhitePpcCounter";
import WhitePpcServices from "@/components/whiteppcmanagement/04WhitePpcServices";
import WhiteLabelPpcProcess from "@/components/whiteppcmanagement/05WhiteLabelPpcProcess";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import WhitePpcSolution from "@/components/whiteppcmanagement/06WhitePpcSolution";
import WhiteLabelCampaign from "@/components/whiteppcmanagement/07WhiteLabelCampaign";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { whitelabelppcdata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";

const page = () => {
  return (
    <>
      <WhitePpcBanner />
      <WhitePpcForm />
      <WhitePpcCounter />
      <WhitePpcServices />
      <WhiteLabelPpcProcess />
      <CustomizeHome
        heading="Industry Verticals "
        subheading="We Can Help "
        paragraph="We cater to diverse industries, including but not limited to:"
      />
      <WhitePpcSolution />
      <WhiteLabelCampaign />
      <ServiceFaq accordionData={whitelabelppcdata} />
      <AddsPartner
        heading="Get Started with WebGuruz White Label PPC Services"
        paragraph="Take Your PPC Campaigns to the Next Level! Partner with us to deliver exceptional results under your brand name. Call us today or schedule a free consultation!"
        linkHref="/contact-us"
        linkText="Contact with WebGuruz Today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Enhance Your Business with Our White Label PPC Services",
  description:"Partner with our White Label PPC Experts to enhance your business. We offer expert White Label PPC services that drive growth, boost results, and maximize ROI.",
};