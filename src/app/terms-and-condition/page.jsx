import TermsBanner from "@/components/termsCondition/01TermsBanner";
import OurTerms from "@/components/termsCondition/02OurTerms";
import "./style.css";
const page = () => {
  return (
    <>
      <TermsBanner />
      <OurTerms />
    </>
  );
};

export default page;
export const metadata = {
  title: "Read Our Terms and Conditions | WebGuruz",
  description:
    "Read WebGuruz Terms and Conditions to understand the guidelines and policies governing the use of our services. Your trust and compliance are important to us.",
};