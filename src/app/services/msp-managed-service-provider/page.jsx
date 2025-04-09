import MspEngineers from "@/components/helpdeskmsp/02MspEngineers";
import "./style.css";
import "../../shopify-development-services/style.css";
import "../../magento-development-services/style.css";
import MspBanner from "@/components/helpdeskmsp/01MspBanner";
import MspWorkLoad from "@/components/helpdeskmsp/03MspWorkLoad";
import MspUnparallel from "@/components/helpdeskmsp/04MspUnparallel";
import MspHowDifferent from "@/components/helpdeskmsp/03MspHowDifferent";
import MspWhyChoose from "@/components/helpdeskmsp/05MspWhyChoose";
import MspWorking from "@/components/helpdeskmsp/06MspWorking";
import MspTalent from "@/components/helpdeskmsp/07MspTalent";
import MspServices from "@/components/helpdeskmsp/08MspServices";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { mspdata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";

const page = () => {
  return (
    <>
      <MspBanner />
      <MspEngineers />
      <MspHowDifferent />
      <MspWorkLoad />
      <MspUnparallel />
      <MspWhyChoose />
      <MspWorking />
      <MspTalent />
      <MspServices />
      <ServiceFaq accordionData={mspdata} />
      <AddsPartner
        heading="Get Started with WebGuruz MSP Services Today!"
        paragraph="Let WebGuruz Technologies Pvt Ltd handle your IT management so you can focus on growing your business. Contact us today for a free consultation and discover how our MSP services can enhance your operations."
        linkHref="/book-an-appointment"
        linkText="Discover our MSP Services Now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Leading MSP Managed Service Providers for Reliable IT Support",
  description:
    "Optimize your business with WebGuruz’s expert MSP managed service providers. Enhance efficiency, boost security, and achieve long-term success. Contact us today!",
};
