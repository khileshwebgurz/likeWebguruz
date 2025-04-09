import PolicyBanner from "@/components/privacyPolicy/01PolicyBanner";
import OurPolicies from "@/components/privacyPolicy/02OurPolicies";
import './style.css'
const page = () => {
  return (
    <>
      <PolicyBanner />
      <OurPolicies />
    </>
  );
};

export default page;
export const metadata = {
  title: "Check Out Our Privacy Policy | WebGuruz",
  description:
    "Read WebGuruz Privacy Policy to understand how we protect your data and ensure your privacy while using our services. Your security is our priority.",
};