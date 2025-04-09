import ContentSeoBanner from "@/components/contentseo/01ContentSeoBanner";
import "./style.css";
import "../pay-per-click-management/style.css";
import ContentSeoForm from "@/components/contentseo/02ContentSeoForm";
import ContentWritingServices from "@/components/contentseo/03ContentWritingServices";
import ContentSeoWorking from "@/components/contentseo/04ContentSeoWorking";
import ContentSeoMatter from "@/components/contentseo/05ContentSeoMatter";
import ContentSeoType from "@/components/contentseo/06ContentSeoType";
import ContentSeoHire from "@/components/contentseo/07ContentSeoHire";
import ContentSeoTeam from "@/components/contentseo/08ContentSeoTeam";
import ContentSeoCounter from "@/components/contentseo/09ContentSeoCounter";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { contentseoData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import NewSeoPackage from "@/components/NewSeoPackage";
const page = () => {
  return (
    <>
      <ContentSeoBanner />
      <ContentSeoForm />
      <ContentWritingServices />
      <ContentSeoWorking />
      <ContentSeoMatter />
      <ContentSeoType />
      <ContentSeoHire />
      <ContentSeoTeam />
      <ContentSeoCounter />
      <NewSeoPackage/>
      <ServiceFaq accordionData={contentseoData} />
      <AddsPartner
        heading="Let Us Help You Grow with SEO Content Writing"
        paragraph="Contact us today to discuss your content needs and discover how we can drive your business forward."
        linkHref="/book-an-appointment"
        linkText="Book a Consultation today!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Maximize Visibility with SEO Content Marketing Services",
  description:
    "Increase your website visibility with WebGuruz SEO content marketing services. Improve rankings and attract more visitors for business growth and success.",
};
