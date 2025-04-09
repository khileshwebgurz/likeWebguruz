import HubmigrationBanner from "@/components/hubMigration/01HubMigrationBanner";
import HubMigrateForm from "@/components/hubMigration/02HubMigrateForm";
import React from "react";
import "../services/pay-per-click-management/style.css";
import "../services/technical-seo/style.css";
import "../contact-us/contact.css";
import "./style.css";
import HubMigrateCounter from "@/components/hubMigration/03HubMigrateCounter";
import MigrateCertificate from "@/components/hubMigration/04MigrateCertificate";
import MigrateProcess from "@/components/hubMigration/06MigrateProcess";
import MigrateSteps from "@/components/hubMigration/07MigrateSteps";
import MigrateReasons from "@/components/hubMigration/08MigrateReasons";
import WhyHubMigrate from "@/components/hubMigration/09WhyHubMigrate";
import Migratebenefits from "@/components/hubMigration/10MigrateBenefits";
import CustomizeHome from "@/components/homeComponents/06CustomizeHome";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import {hubservicemigrate } from "@/utils/accordionData";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import HubspotClients from "@/components/otherServices/hubspotDev/HubspotClients";
import HubMigrationServices from "@/components/hubMigration/05HubMigrationServices";
const page = () => {
  return (
    <>
      <HubmigrationBanner />
      <HubMigrateForm
        heading={"Trusted HubSpot "}
        subheading={"Migration Experts"}
        paragraph={
          "As a certified HubSpot partner, we’ve empowered countless organizations across industries to streamline their operations and enhance marketing and sales strategies. Trust us to deliver a migration experience tailored to your business needs. Connect with our team to learn more."
        }
      />
      <HubMigrateCounter />
      <MigrateCertificate />
      <HubMigrationServices />
      <MigrateProcess />
      <MigrateSteps />
      <MigrateReasons />
      <WhyHubMigrate />
      <Migratebenefits />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater To"
        paragraph="We provide HubSpot migration services for businesses across various industries, including technology, healthcare, finance, e-commerce, and more."
      />
      <HubspotClients />
      <ServiceFaq accordionData={hubservicemigrate} />
      <AddsPartner
        heading="Unlock the Power of HubSpot with Expert Migration Services"
        paragraph="Connect with our experts for a hassle-free HubSpot migration experience that drives business success."
        linkHref="/contact-us"
        linkText="Connect Now!"
      />
      <Featuredblog />
    </>
  );
};

export default page;
export const metadata = {
  title: "Expert HubSpot Migration Services for Seamless Transitions",
  description:
    "Ensure seamless HubSpot migration services with WebGuruz. Our experts handle smooth data transfers, custom CRM setups, and transitions for optimal business growth.",
};