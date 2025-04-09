import AgileBanner from "@/components/agileDevelopemnt/01AgileBanner";
import ScalabilityAgile from "@/components/agileDevelopemnt/02ScalabilityAgile";
import AgileProducts from "@/components/agileDevelopemnt/03AgileProducts";
import AgileExpedite from "@/components/agileDevelopemnt/04AgileExpedite";
import AgileExpenditure from "@/components/agileDevelopemnt/05AgileExpenditure";
import "./style.css";
import "../how-we-work/style.css";
import AgileTech from "@/components/agileDevelopemnt/06AgileTech";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
const page = () => {
  return (
    <>
      <AgileBanner />
      <ScalabilityAgile />
      <AgileProducts />
      <AgileExpedite />
      <AgileExpenditure />
      <AgileTech />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Agile Software Development Services | WebGuruz",
  description:
    "Achieve faster results with WebGuruz agile software development. Our expert team combines cutting-edge technology, innovative solutions, and fast delivery.",
};