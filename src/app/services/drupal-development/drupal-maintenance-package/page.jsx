import Featuredblog from "@/components/homeComponents/09Featuredblog";
import "../../pay-per-click-management/style.css";
import "../../wordpress-development/wordpress-maintenance-package/style.css";
import DrupalMaintainBanner from "@/components/worddrupalmaintain/01DrupalMaintainBanner";
import DruMaintainForm from "@/components/worddrupalmaintain/02DruMaintainForm";
import DruMaintainNumbers from "@/components/worddrupalmaintain/03DruMaintainNumbers";
import DruTabs from "@/components/worddrupalmaintain/04DruTabs";
import DruWorking from "@/components/worddrupalmaintain/05DruWorking";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { drumaintaindata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import DruTable from "@/components/worddrupalmaintain/06DruTable";

const page = () => {
  return (
    <>
      <DrupalMaintainBanner />
      <DruMaintainForm />
      <DruMaintainNumbers />
      <DruTabs />
      <DruWorking />
      <DruTable />
      <ServiceFaq accordionData={drumaintaindata} />
      <AddsPartner
        heading="Don’t let outdated software, slow performance, or security vulnerabilities impact your business."
        paragraph="Let WebGuruz Technologies Pvt Ltd handle your Drupal Maintenance & Support needs so you can focus on growth."
        linkHref="/book-an-appointment"
        linkText="Call us now or request a free consultation!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Leading Drupal Maintenance and Support Company in India - WebGuruz",
  description: "Our cost-effective best Drupal maintenance services packages offer 24/7 Drupal maintenance services that cover planned and tested upgrades, hosting, backups, and security fixes.",
};
