import SeoStratergyBanner from "@/components/consultingStratergy/01SeoStratergyBanner";
import SeoStratergyForm from "@/components/consultingStratergy/02SeoStratergyForm";
import "../pay-per-click-management/style.css";
import "./style.css";
import SeoStratergyCounter from "@/components/consultingStratergy/03SeoStratergyCounter";
import SeoStratergyServices from "@/components/consultingStratergy/04SeoStratergyServices";
import SeoStratergySlides from "@/components/consultingStratergy/05SeoStratergySlides";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import SeoStratergyWhyChoose from "@/components/consultingStratergy/06SeoStratergyWhyChoose";
import StraterhyTeam from "@/components/consultingStratergy/07StraterhyTeam";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { stratergyConslutData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";

const page = () => {
  return (
    <>
      <SeoStratergyBanner />
      <SeoStratergyForm />
      <SeoStratergyCounter />
      <SeoStratergyServices />
      <SeoStratergySlides />
      <CustomizeHome
        heading="Industries We "
        subheading="Serve"
        paragraph="From startups to established enterprises, we serve businesses across a wide range of industries."
      />
      <SeoStratergyWhyChoose />
      <StraterhyTeam />
      <ServiceFaq accordionData={stratergyConslutData} />
      <AddsPartner
        heading="Take Your Business to the Next Level"
        paragraph="Contact us today to start your journey toward online success!"
        linkHref="/contact-us"
        linkText="Contact us today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Get SEO Strategy and Consulting Services for Online Success",
  description:
    "Get tailored SEO strategy and consulting services to boost your online presence. Drive growth and visibility. Contact us to work with expert SEO consultants today.",
};