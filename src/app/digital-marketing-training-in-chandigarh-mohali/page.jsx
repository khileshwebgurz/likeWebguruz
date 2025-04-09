import TrainingDescription from "@/components/commonTrainingProgram/02TrainingDescription";
import DigitalTrainingFeatures from "@/components/commonTrainingProgram/03DigitalTrainingFeatures";
import DigitalTrainingBenefits from "@/components/commonTrainingProgram/04DigitalTrainingBenefits";
import DigitalCertificate from "@/components/commonTrainingProgram/05DigitalCertificate";
import DigitalAfterCourse from "@/components/commonTrainingProgram/06DigitalAfterCourse";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import {  digitalTrainingProgram } from "@/utils/accordionData";
import "./style.css";
import DigitialTrainingForm from "@/components/commonTrainingProgram/01DigitialTrainingForm";
const page = () => {
  return (
    <>
      <DigitialTrainingForm />
      <TrainingDescription />
      <DigitalTrainingFeatures />
      <DigitalTrainingBenefits />
      <DigitalCertificate />
      <DigitalAfterCourse />
      <ServiceFaq accordionData={digitalTrainingProgram} />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Professional Digital Marketing Training in Mohali and Chandigarh",
  description: "Join WebGuruz for professional digital marketing training in Mohali and Chandigarh. Enhance your skills, earn certification, and boost your digital marketing career.",
};
