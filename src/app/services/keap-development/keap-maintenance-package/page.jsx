import Featuredblog from "@/components/homeComponents/09Featuredblog";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { keapmaintaindata } from "@/utils/accordionData";
import "../../wordpress-development/wordpress-maintenance-package/style.css";
import AddsPartner from "@/components/contactComponents/06AddsPartner";

import "../../pay-per-click-management/style.css";
import KeapMaintainBanner from "@/components/wordkeapmain/01KeapMaintainBanner";
import KeapMaintainForm from "@/components/wordkeapmain/02KeapMaintainForm";
import KeapMaintainNumbers from "@/components/wordkeapmain/03KeapMaintainNumbers";
import KeapTabs from "@/components/wordkeapmain/04KeapTabs";
import KeapWorking from "@/components/wordkeapmain/05KeapWorking";
import KeapTable from "@/components/wordkeapmain/06KeapTable";

const page = () => {
  return (
    <>
      <KeapMaintainBanner />
      <KeapMaintainForm />
      <KeapMaintainNumbers />
      <KeapTabs />
      <KeapWorking />
      <KeapTable />
      <ServiceFaq accordionData={keapmaintaindata} />
      <AddsPartner
        heading="Ready to Keep Your Business Running Smoothly?"
        paragraph="Contact WebGuruz Technologies today for a free system assessment and discover how our maintenance services can optimize your Keap performance. Our team of certified specialists is ready to help you maximize your return on investment and keep your marketing automation running flawlessly."
        linkHref="/contact-us"
        linkText="Call us now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Leading Keap Maintenance and Support Company in India - WebGuruz",
  description: "Our cost-effective best Keap maintenance services packages offer 24/7 Keap maintenance services that cover planned and tested upgrades, hosting, backups, and security fixes.",
};
