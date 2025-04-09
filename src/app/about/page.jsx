import AboutBanner from "@/components/about/AboutBanner";
import Aboutvision from "@/components/about/Aboutvision";
import AboutWhoweare from "@/components/about/AboutWhoweare";
import CounterHome from "@/components/homeComponents/02CounterHome";
import HomeTestimonial from "../home2/components/homeComponents/07HomeTestimonial";
import WhyChoose from "@/components/serviceComponent/07WhyChoose";
import Aboutleaders from "@/components/about/Aboutleaders";
import "./style.css";
import AboutTabber from "@/components/about/AboutTabber";
import HomeHiring from "@/components/PopUpForms/HomeHiring";
import AboutTimeline from "@/components/about/AboutTimeline";

const page = () => {
  return (
    <div>
      <AboutBanner />
      <AboutWhoweare />
      <WhyChoose />
      <Aboutvision />
      <CounterHome />
      {/* <AboutTabber /> */}
      <AboutTimeline/>
      <HomeTestimonial />
      <Aboutleaders />
      <HomeHiring />
    </div>
  );
};

export default page;
export const metadata = {
  title: "About Us | WebGuruz - Top Web Development and Marketing Company",
  description:
    "Know more about Webguruz; We are India's top Web development & marketing company that focuses on providing the highest level of customer service. Call us today",
};
