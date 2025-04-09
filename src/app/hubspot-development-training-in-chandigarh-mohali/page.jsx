import Featuredblog from "@/components/homeComponents/09Featuredblog";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { hubspotTraining } from "@/utils/accordionData";
import "../digital-marketing-training-in-chandigarh-mohali/style.css";
import HubspotTrainForm from "@/components/commonTrainingProgram/01HubspotTrainForm";
import HubTrainDesc from "@/components/commonTrainingProgram/02HubTrainDesc";
import HubTrainFeat from "@/components/commonTrainingProgram/03HubTrainFeat";
import HubTrainBenefits from "@/components/commonTrainingProgram/04HubTrainBenefits";
import HubCertificates from "@/components/commonTrainingProgram/05HubCertificates";
import HubAfterCourse from "@/components/commonTrainingProgram/06HubafterCourse";
const page = () => {
  return (
    <>
      <HubspotTrainForm />
      <HubTrainDesc />
      <HubTrainFeat />
      <HubTrainBenefits />
      <HubCertificates />
      <HubAfterCourse />
      <ServiceFaq accordionData={hubspotTraining} />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Certified HubSpot Development Training in Mohali and Chandigarh",
  description:
    "Enroll in HubSpot Development Training in Mohali and Chandigarh with WebGuruz. Enhance your skills in CRM, marketing automation, and inbound strategies today!",
};
