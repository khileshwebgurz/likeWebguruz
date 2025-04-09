import Featuredblog from "@/components/homeComponents/09Featuredblog";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { wixmaintaindata } from "@/utils/accordionData";
import "../../wordpress-development/wordpress-maintenance-package/style.css";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import WixMaintainBanner from "@/components/wordWixMain/01WixMaintainBanner";
import WixMaintainForm from "@/components/wordWixMain/02WixMaintainForm";
import WixMaintainNumbers from "@/components/wordWixMain/03WixMaintainNumbers";
import WixTabs from "@/components/wordWixMain/04WixTabs";
import WixWorking from "@/components/wordWixMain/05WixWorking";
import "../../pay-per-click-management/style.css";
import WixTable from "@/components/wordWixMain/06WixTable";

const page = () => {
  return (
    <>
      <WixMaintainBanner />
      <WixMaintainForm />
      <WixMaintainNumbers />
      <WixTabs />
      <WixWorking />
      <WixTable />
      <ServiceFaq accordionData={wixmaintaindata} />
      <AddsPartner
        heading="Ready to Keep Your Wix Website in Perfect Shape?"
        paragraph="Contact WebGuruz Technologies today for a free website assessment and discover how our Wix maintenance services can help your business thrive online."
        linkHref="/contact-us"
        linkText="Call us now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Leading Wix Maintenance and Support Company in India - WebGuruz",
  description: "Our cost-effective best Wix maintenance services packages offer 24/7 Wix maintenance services that cover planned and tested upgrades, hosting, backups, and security fixes.",
};
