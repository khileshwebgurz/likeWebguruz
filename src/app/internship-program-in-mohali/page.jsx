import InternProForm from "@/components/internProgram/01InternProForm";
import "./style.css";
import "../life-at-webguruz/style.css";
import "./parichay-application-process/style.css";
import "../services/pay-per-click-management/style.css";
import InternOpportunity from "@/components/internProgram/02InternOpportunity";
import InternCounter from "@/components/internProgram/03InternCounter";
import InternBenefits from "@/components/internProgram/04InternBenefits";
import InernIndusTrainy from "@/components/internProgram/05InernIndusTrainy";
import InternDifferentFrom from "@/components/internProgram/06InternDifferentFrom";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { internprogram } from "@/utils/accordionData";
import InternHiringExp from "@/components/internProgram/07InternHiringExp";
import InternDevelopers from "@/components/internProgram/08InternDevelopers";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import NewInternshipData from "@/components/internProgram/06NewInternshipData";
import ParichayTabs from "@/components/parichayComp/02ParichayTabs";
import ParichayConnect from "@/components/parichayComp/03ParichayConnect";
import ParichayBanner from "@/components/parichayComp/01ParichayBanner";
const page = () => {
  return (
    <>
      <InternProForm />
      <InternOpportunity />
      <InternCounter />
      <InternBenefits />
      <InernIndusTrainy />
      <ParichayBanner />
      <ParichayTabs />
      <ParichayConnect />
      <NewInternshipData />
      <InternDifferentFrom />
      <InternHiringExp />
      <InternDevelopers />
      <ServiceFaq accordionData={internprogram} />
      <AddsPartner
        heading="Take the first step towards a successful career"
        paragraph="Join our 3 months industrial training program in Mohali/Chandigarh and get hands-on experience in cutting-edge technologies."
        linkHref="/contact-us"
        linkText="Connect today!"
      />
    </>
  );
};

export default page;

export const metadata = {
  title: "The Best Internship Program in Mohali and Chandigarh | WebGuruz",
  description:
    "Join the best internship program in Mohali and Chandigarh at WebGuruz. Gain hands-on experience, mentorship, and valuable skills for your career growth.",
};
