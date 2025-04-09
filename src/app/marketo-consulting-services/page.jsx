import MarketoBanner from "@/components/marketopage/01MarketoBanner";
import "../services/pay-per-click-management/style.css";
import "./style.css";
import "../salesforce-consulting-services/style.css";
import MarketoForm from "@/components/marketopage/02MarketoForm";
import MarketoMeasure from "@/components/marketopage/03MarketoMeasure";
import MarketoService from "@/components/marketopage/04MarketoService";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import MarketoExperience from "@/components/marketopage/05MarketoExperience";
import MarketoHelp from "@/components/marketopage/06MarketoHelp";
import MarketoCapability from "@/components/marketopage/07MarketoCapability";
import MarketoModel from "@/components/marketopage/MarketoModel";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { marketodata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
const page = () => {
  return (
    <>
      <MarketoBanner />
      <MarketoForm />
      <MarketoMeasure />
      <MarketoModel />
      <MarketoService />
      <CustomizeHome
        heading="Industries We "
        subheading=" Cater To"
        paragraph="Marketing automation solutions for diverse industry verticals"
      />
      <MarketoExperience />
      <MarketoHelp />
      <MarketoCapability />
      <ServiceFaq accordionData={marketodata} />
      <AddsPartner
        heading="Ready to Transform Your Marketing?"
        paragraph="Take the first step towards marketing excellence. Contact WebGuruz Technologies today and unlock the full potential of your marketing automation strategy."
        linkHref="/contact-us"
        linkText="Contact with WebGuruz!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Marketo Audit Expert Professional Managed Consulting Services in India - WebGuruz",
  description: "Are you looking for expert marketo consulting Services in India. We at WebGuruz Offer managed expert Marketo audit consulting services at very affordable prices.",
};