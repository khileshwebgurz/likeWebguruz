import RefundBanner from "@/components/policyrefund/01RefundBanner";
import RefundDetails from "@/components/policyrefund/02RefundDetails";
import "../privacy-policy/style.css";

const page = () => {
  return (
    <>
      <RefundBanner />
      <RefundDetails />
    </>
  );
};

export default page;
export const metadata = {
  title: "Read Our Refund Policy | WebGuruz",
  description: "Read WebGuruz refund policy to understand the guidelines and policies governing the use of our services. Your trust and compliance are important to us",
};
