import SmallBusinessBanner from "@/components/smallbusinessSeo/01SmallBusinessBanner";
import SmallBussForm from "@/components/smallbusinessSeo/02SmallBussForm";
import "../pay-per-click-management/style.css";
import "./style.css";
import SmallBussCounter from "@/components/smallbusinessSeo/03SmallBussCounter";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { smallbussData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import SmallBussFeatures from "@/components/smallbusinessSeo/04SmallBussFeatures";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import SmallBussRoll from "@/components/smallbusinessSeo/05SmallBussRoll";
import SmallBussWhyChoose from "@/components/smallbusinessSeo/06SmallBussWhyChoose";
const page = () => {
  return (
    <>
      <SmallBusinessBanner />
      <SmallBussForm />
      <SmallBussCounter />
      <SmallBussFeatures />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater To"
        paragraph="SEO Services for a Wide Range of Industries"
      />
      <SmallBussRoll />
      <SmallBussWhyChoose />
      <ServiceFaq accordionData={smallbussData} />
      <AddsPartner
        heading="Ready to Boost Your Small Business with SEO?"
        paragraph="Get in touch with WebGuruz today to learn how our Small Business SEO services can help you grow your online presence and reach your business goals!"
        linkHref="/contact-us"
        linkText="Connect Now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Expert Small Business SEO Services for Growth and Success",
  description:
    "Grow your business with expert Small Business SEO services. Work with WebGuruz, a top Small Business SEO Agency, for enhanced online visibility and success.",
};
