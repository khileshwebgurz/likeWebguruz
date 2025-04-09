import LifeWgzBanner from "@/components/lifewebguruz/01LifeWgzBanner";
import "./style.css";
import "../what-employees-speaks-about-us/style.css";
import SpritWebguruz from "@/components/lifewebguruz/02SpiritWebguruz";
import WgzBringBest from "@/components/lifewebguruz/03WgzBringBest";
import WgzBusiness from "@/components/lifewebguruz/04WgzBusiness";
import WgzAreas from "@/components/lifewebguruz/05WgzAreas";
import WgzEnvironment from "@/components/lifewebguruz/06WgzEnvironment";
import WgzCulture from "@/components/lifewebguruz/07WgzCulture";
import WgzStayConnect from "@/components/lifewebguruz/08WgzStayConnect";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import WgzValues from "@/components/lifewebguruz/03WgzValues";
import EmployeeBanner from "@/components/emplyeespeakbanner/01EmployeeBanner";
import EmployeeWords from "@/components/emplyeespeakbanner/02EmployeeWords";

const page = () => {
  return (
    <>
      <LifeWgzBanner />
      <SpritWebguruz />
      <WgzValues />
      <WgzBringBest />
      <WgzBusiness />
      <WgzAreas />
      <WgzEnvironment />
      <WgzCulture />
      <EmployeeBanner />
      <EmployeeWords />
      <WgzStayConnect />
      <AddsPartner
        heading="Ready to take the next step?"
        paragraph="Let’s create something amazing together."
        linkHref="/contact-us"
        linkText="Connect Now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Life at WebGuruz: Join Our Dynamic Team and Grow with Us",
  description:
    "Discover life at WebGuruz! Join our dynamic team, enjoy a collaborative work culture, and grow your career with exciting opportunities and support.",
};
