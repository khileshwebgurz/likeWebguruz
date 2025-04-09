import MvpBanner from "@/components/mvpDevelopmentPage/01MvpBanner";
import "../about/style.css";
import "./style.css";
import MvpStartup from "@/components/mvpDevelopmentPage/02MvpStartup";
import StartMvp from "@/components/mvpDevelopmentPage/04StartMvp";
import MvpAmplify from "@/components/mvpDevelopmentPage/03MvpAmplify";
import MvpDevelopment from "@/components/mvpDevelopmentPage/05MvpDevelopment";
import MvpSmallStartups from "@/components/mvpDevelopmentPage/06MvpSmallStartups";
const page = () => {
  return (
    <>
      <MvpBanner />
      <MvpStartup />
      <MvpAmplify/>
      <StartMvp />
      <MvpDevelopment/>
      <MvpSmallStartups/>
    </>
  );
};

export default page;
export const metadata = {
  title: "MVP Development Services | WebGuruz",
  description:
    "WebGuruz is a trusted MVP development company, offering expert services to transform your idea into a successful product with speed and precision.",
};