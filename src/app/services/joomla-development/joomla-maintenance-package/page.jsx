import Featuredblog from "@/components/homeComponents/09Featuredblog";
import "../../pay-per-click-management/style.css";

import "../../wordpress-development/wordpress-maintenance-package/style.css";
import JoomlaMaintainBanner from "@/components/wordJoomlaMaintain/01JoomlaMaintainBanner";
import JooMaintainForm from "@/components/wordJoomlaMaintain/02JooMaintainForm";
import JooMaintainNumbers from "@/components/wordJoomlaMaintain/03JooMaintainNumbers";
import JooTabs from "@/components/wordJoomlaMaintain/04JooTabs";
import JooWorking from "@/components/wordJoomlaMaintain/05JooWorking";
import JooTable from "@/components/wordJoomlaMaintain/06JooTable";
import { joomlamaintaindata } from "@/utils/accordionData";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import AddsPartner from "@/components/contactComponents/06AddsPartner";

const page = () => {
  return (
    <>
      <JoomlaMaintainBanner />
      <JooMaintainForm />
      <JooMaintainNumbers />
      <JooTabs />
      <JooWorking />
      <JooTable />
      <ServiceFaq accordionData={joomlamaintaindata} />
      <AddsPartner
        heading="Don't wait until your Joomla website experiences problems to seek professional help."
        paragraph="Proactive maintenance is always more cost-effective than emergency repairs. Contact WebGuruz Technologies today to discuss your Joomla maintenance needs and discover how our expert support can keep your website secure, fast, and fully functional."
        linkHref="/contact-us"
        linkText="Call us now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Leading Joomla Maintenance and Support Company in India - WebGuruz",
  description: "Our cost-effective best Joomla maintenance services packages offer 24/7 Joomla maintenance services that cover planned and tested upgrades, hosting, backups, and security fixes.",
};
