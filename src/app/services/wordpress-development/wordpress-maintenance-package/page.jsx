import WordMaintainTable from "@/components/wordpressmaintain/02WordMaintainTable";
import "../../pay-per-click-management/style.css";
import "./style.css";
import WordMaintainBanner from "@/components/wordpressmaintain/01WordMaintainBanner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import WordMaintainForm from "@/components/wordpressmaintain/02WordMaintainForm";
import WordMaintainNumbers from "@/components/wordpressmaintain/03WordMaintainNumbers";
import WordMainWorking from "@/components/wordpressmaintain/05WordMainWorking";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { wordmaintaindata } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import WordMainTabs from "@/components/wordpressmaintain/04WordMainTabs";

const page = () => {
  return (
    <>
      <WordMaintainBanner />
      <WordMaintainForm />
      <WordMaintainNumbers />
      <WordMainTabs />
      <WordMainWorking />
      <WordMaintainTable />
      <ServiceFaq accordionData={wordmaintaindata} />
      <AddsPartner
        heading="Don’t let technical issues slow down your business."
        paragraph="Contact us today and let our professionals take care of your website’s performance, security, and updates while you focus on growth."
        linkHref="/book-an-appointment"
        linkText="Get a Free Consultation Now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Leading WordPress Maintenance and Support Company in India - WebGuruz",
  description: "Our cost-effective best WordPress maintenance services packages offer 24/7 WordPress maintenance services that cover planned and tested upgrades, hosting, backups, and security fixes.",
};
