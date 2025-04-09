import "../../wordpress-development/wordpress-maintenance-package/style.css";
import "../../pay-per-click-management/style.css";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { webflowmaintaindata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import WebMaintainBanner from "@/components/wordWebfloMain/01WebMaintainBanner";
import WebMaintainForm from "@/components/wordWebfloMain/02WebMaintainForm";
import WebMaintainNumbers from "@/components/wordWebfloMain/03WebMaintainNumbers";
import WebTabs from "@/components/wordWebfloMain/04WebTabs";
import WebWorking from "@/components/wordWebfloMain/05WebWorking";
import WebTable from "@/components/wordWebfloMain/06WebTable";

const page = () => {
  return (
    <>
      <WebMaintainBanner />
      <WebMaintainForm />
      <WebMaintainNumbers />
      <WebTabs />
      <WebWorking />
      <WebTable />
      <ServiceFaq accordionData={webflowmaintaindata} />
      <AddsPartner
        heading="Don't wait until technical issues affect your business."
        paragraph="Partner with WebGuruz Technologies for reliable Webflow maintenance and support. Our expert team will ensure your website stays secure, performs optimally, and continues to drive results for your business."
        linkHref="/book-an-appointment"
        linkText="Contact us today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Leading Webflow Maintenance and Support Company in India - WebGuruz",
  description: "Our cost-effective best Webflow maintenance services packages offer 24/7 Webflow maintenance services that cover planned and tested upgrades, hosting, backups, and security fixes.",
};
