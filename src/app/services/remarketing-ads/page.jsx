import RemarkSeoBanner from "@/components/remarkingseo/01RemarkSeoBanner";
import "../pay-per-click-management/style.css";
import "../technical-seo/style.css";
import "./style.css";
import RemarkSeoForm from "@/components/remarkingseo/02RemarkSeoForm";
import RemarkSeoCounter from "@/components/remarkingseo/03RemarkSeoCounter";
import RemarkSeoProcess from "@/components/remarkingseo/04RemarkSeoProcess";
import RemarkSeoReasons from "@/components/remarkingseo/08RemarkSeoReasons";
import RemarkSeoServices from "@/components/remarkingseo/05RemarkSeoServices";
import RemarkSeoStratergy from "@/components/remarkingseo/06RemarkSeoStratergy";
import RemarkingTabber from "@/components/remarkingseo/08RemarkingTabber";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { remarketingData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import RemarkSeoNew from "@/components/remarkingseo/07RemarkSeoNew";

const page = () => {
  return (
    <>
      <RemarkSeoBanner />
      <RemarkSeoForm />
      <RemarkSeoCounter />
      <RemarkSeoProcess />
      <RemarkSeoServices />
      <RemarkSeoStratergy />
      <RemarkSeoNew/>
      <RemarkingTabber />
      <RemarkSeoReasons />
      <ServiceFaq accordionData={remarketingData} />
      <AddsPartner
        heading="Ready to Boost Your Conversions?"
        paragraph="Partner with a leading Google Ads Remarketing agency like WebGuruz that delivers results. "
        linkHref="/contact-us"
        linkText="Contact us now to start your journey!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Maximize ROI with Google Ads Remarketing Services | WebGuruz",
  description:
    "Increase ROI with WebGuruz Google Ads Remarketing Services. As a leading Google Ads Remarketing Company, we help boost conversions and grow your business.",
};
