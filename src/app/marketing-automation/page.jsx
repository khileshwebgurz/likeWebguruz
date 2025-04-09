import "./style.css";
import "../services/pay-per-click-management/style.css";
import "../services/technical-seo/style.css";
import MarketAutoBanner from "@/components/marketingAutomate/01MarketAutoBanner";
import MarketAutoForm from "@/components/marketingAutomate/02MarketAutoForm";
import MarketAutoReason from "@/components/marketingAutomate/03MarketAutoReason";
import MarketAutoNeed from "@/components/marketingAutomate/04MarketAutoNeed";
import MarketAutoPlatform from "@/components/marketingAutomate/05MarketAutoPlatform";
import MarketAutoOffer from "@/components/marketingAutomate/06MarketAutoOffer";
import MarketAutoService from "@/components/marketingAutomate/07MarketAutoService";
import MarketAutoWork from "@/components/marketingAutomate/08MarketAutoWork";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { marketauto } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import MarketAutoHire from "@/components/marketingAutomate/09MarketAutoHire";

const page = () => {
  return (
    <>
      <MarketAutoBanner />
      <MarketAutoForm />
      <MarketAutoReason />
      <MarketAutoNeed />
      <MarketAutoPlatform />
      <MarketAutoOffer />
      <MarketAutoService />
      <MarketAutoWork />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="We Deliver Specialized Marketing Automation Solutions Across Sectors"
      />
      <MarketAutoHire />
      <ServiceFaq accordionData={marketauto} />
      <AddsPartner
        heading="Take the first step toward marketing excellence by scheduling a free consultation with our automation experts."
        paragraph="Don't let your competition get ahead- partner with India's leading marketing automation provider and start growing your business smarter, not harder."
        linkHref="/contact-us"
        linkText="Request a Quote"
      />
      <Featuredblog />
    </>
  );
};

export default page;
