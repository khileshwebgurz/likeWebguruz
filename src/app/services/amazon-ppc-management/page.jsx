import AmazonPpcBanner from "@/components/amazonPpcComp/01AmazonPpcBanner";
import "../pay-per-click-management/style.css";
import "../white-label-seo/style.css";
import "./style.css";
import AmazonPpcForm from "@/components/amazonPpcComp/02AmazonPpcForm";
import AmazonPpcReturn from "@/components/amazonPpcComp/04AmazonPpcReturns";
import AmazonPpcServices from "@/components/amazonPpcComp/03AmazonPpcServices";
import AmazonPpcWorking from "@/components/amazonPpcComp/05AmazonPpcWorking";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import AmazonPpcWhyChoose from "@/components/amazonPpcComp/06AmazonPpcWhyChoose";
import AmazonPpcCounter from "@/components/amazonPpcComp/07AmazonPpcCounter";
import AmazonPpcBussines from "@/components/amazonPpcComp/08AmazonPpcBusiness";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { amazonppcData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";

const page = () => {
  return (
    <>
      <AmazonPpcBanner />
      <AmazonPpcForm />
      <AmazonPpcServices />
      <AmazonPpcReturn />
      <AmazonPpcWorking />
      <CustomizeHome
        heading="Industry Verticals  "
        subheading="We Can Help"
        paragraph="From startups to established enterprises, we serve businesses across a wide range of industries."
      />
      <AmazonPpcWhyChoose />
      <AmazonPpcCounter />
      <AmazonPpcBussines />
      <ServiceFaq accordionData={amazonppcData} />
      <AddsPartner
        heading="Ready to Maximize Your Amazon ROI?"
        paragraph="Focus on scaling your business while your advertising efforts consistently deliver measurable growth and sustained success. Contact us today to transform your Amazon sales strategy and achieve exceptional results."
        linkHref="/contact-us"
        linkText="Contact us today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Premier Amazon PPC Management Services to Drive Sales Growth",
  description:
    "Drive sales growth with WebGuruz premier Amazon PPC management services. Maximize ROI, target the right audience, and scale your business with expert strategies.",
};
