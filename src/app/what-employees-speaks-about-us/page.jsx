import React from "react";
import "./style.css";
import EmployeeBanner from "@/components/emplyeespeakbanner/01EmployeeBanner";
import EmployeeWords from "@/components/emplyeespeakbanner/02EmployeeWords";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
const page = () => {
  return (
    <>
      <EmployeeBanner />
      <EmployeeWords />
      <AddsPartner
        heading="Be a Part of a Thriving Culture"
        paragraph="Join us at WebGuruz- Where Innovation, Growth, and Opportunity Await!"
        linkHref="/careers"
        linkText="I'm In!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "What Employees Speaks About Us | WebGuruz",
  description:
    "Read what our employees have to say about working at WebGuruz. Learn about our supportive work culture, growth opportunities, and team spirit.",
};