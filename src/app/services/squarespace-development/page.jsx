import "./style.css";
import "../../magento-development-services/style.css";
import "../pay-per-click-management/style.css";
import SquareBanner from "@/components/serviceSquareSpace/01SquareBanner";
import SquareForm from "@/components/serviceSquareSpace/02SquareForm";
import SquareCounter from "@/components/serviceSquareSpace/03SquareCounter";
import SquareServices from "@/components/serviceSquareSpace/04SquareServices";
import SquareSolutions from "@/components/serviceSquareSpace/05SquareSolutions";
import SquareProcess from "@/components/serviceSquareSpace/06SquareProcess";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import SquareChoseReason from "@/components/serviceSquareSpace/07SquareChoseReason";
import SquareAdvantages from "@/components/serviceSquareSpace/08SquareAdvantages";
import SquareDetails from "@/components/serviceSquareSpace/09SquareDetails";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { squarespaceData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";

const page = () => {
  return (
    <>
      <SquareBanner />
      <SquareForm />
      <SquareCounter />
      <SquareServices />
      <SquareSolutions />
      <SquareProcess />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater To"
        paragraph="Our Squarespace development services serve businesses across various industries, including eCommerce, healthcare, education, real estate, fashion, hospitality, technology, and more."
      />
      <SquareChoseReason />
      <SquareAdvantages />
      <SquareDetails />
      <ServiceFaq accordionData={squarespaceData} />
      <AddsPartner
        heading="Ready to Build Your Squarespace Website?"
        paragraph="Take your business to the next level with a professionally designed Squarespace website. Contact WebGuruz Technologies Pvt Ltd today for a consultation and let’s create a website that drives results!"
        linkHref="/contact-us"
        linkText="Connect with Webguruz!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title:
    "Squarespace Web Development Services Company in India - WebGuruz Technologies",
  description:
    "Are you looking for Squarespace Web Development Services Company in India? Our expert Squarespace developers create responsive, user-friendly websites for business success.",
};
