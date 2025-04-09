import LoadTestBanner from "@/components/testingLoadConsult/01LoadTestBanner";
import LoadTestForm from "@/components/testingLoadConsult/02LoadTestForm";
import "./style.css";
import "../services/pay-per-click-management/style.css";
import LoadTestPerformance from "@/components/testingLoadConsult/03LoadTestPerformance";
import LoadTestApproach from "@/components/testingLoadConsult/04LoadTestApproach";
import LoadTestSolution from "@/components/testingLoadConsult/05LoadTestSolution";
import LoadTestChallenge from "@/components/testingLoadConsult/06LoadTestChallenge";
import LoadBenefitFeature from "@/components/testingLoadConsult/08LoadBenefitFeature";
import LoadCapable from "@/components/testingLoadConsult/09LoadCapable";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { loadconsultData } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import LoadAnalysis from "@/components/testingLoadConsult/07LoadAnalysis";

const page = () => {
  return (
    <>
      <LoadTestBanner />
      <LoadTestForm />
      <LoadTestPerformance />
      <LoadTestApproach />
      <LoadTestSolution />
      <LoadTestChallenge />
      <LoadAnalysis />
      <LoadBenefitFeature />
      <LoadCapable />
      <ServiceFaq accordionData={loadconsultData} />
      <AddsPartner
        heading="Don't wait for performance issues to impact your business."
        paragraph="Contact WebGuruz Technologies today for a free consultation and discover how our load-testing services can help you deliver a seamless user experience even during your busiest periods."
        linkHref="/contact-us"
        linkText="Invest in performance today to protect your business tomorrow!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Load and Performance Testing Consulting Services | Software Performance Testing Services",
  description: "WebGuruz is one of the leading performance load testing companies, and we conduct load testing of apps, software and websites with latest testin tools for validating their optimum performance.",
};
