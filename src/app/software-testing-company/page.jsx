import "./style.css";
import "../services/pay-per-click-management/style.css";
import SoftTestBanner from "@/components/testingSoftware/01SoftTestBanner";
import SoftTestForm from "@/components/testingSoftware/02SoftTestForm";
import SoftTestExperience from "@/components/testingSoftware/03SoftTestExperience";
import SoftTestQuality from "@/components/testingSoftware/04SoftTestQuality";
import SoftTestFlawless from "@/components/testingSoftware/05SoftTestFlawless";
import SoftTestType from "@/components/testingSoftware/06SoftTestType";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import SoftTestEffeciency from "@/components/testingSoftware/08SoftTestEffeciency";
import SoftTestPerform from "@/components/testingSoftware/07SoftTestPerform";
import SoftTestWhyChoose from "@/components/testingSoftware/09SoftTestWhyChoose";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { softwaretest } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
const page = () => {
  return (
    <>
      <SoftTestBanner />
      <SoftTestForm />
      <SoftTestExperience />
      <SoftTestQuality />
      <SoftTestFlawless />
      <SoftTestType />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater to"
        paragraph="Our industry-specific testing approaches help you deliver software that addresses the unique needs of your market while maintaining the highest quality standards."
      />
      <SoftTestPerform />
      <SoftTestEffeciency />
      <SoftTestWhyChoose />
      <ServiceFaq accordionData={softwaretest} />
      <AddsPartner
        heading="Don't let software bugs damage your business reputation or cost you valuable customers."
        paragraph="Partner with WebGuruz Technologies for comprehensive software testing services that help you deliver reliable, high-quality applications."
        linkHref="/contact-us"
        linkText="Contact us today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Software Testing Services Companies | Software Testing Tools - WebGuruz",
  description: "Top rated software testing comapny offer end to end quality software testing services and QA services in India at very affordable prices",
};
