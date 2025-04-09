import React from 'react'
import './style.css'
import '../contact-us/contact.css'
import SeoPackageBanner from '@/components/seopackages/01SeoPackageBanner'
import SeoBusinessNeeds from '@/components/seopackages/02SeoBusinessNeeds'
import SeoPackageClients from '@/components/seopackages/03SeoPackageClients'
import SeoWhyHire from '@/components/seopackages/04SeoWhyHire'
import SeoResults from '@/components/seopackages/05Seoresults'
import SeoWhyChoose from '@/components/seopackages/07SeoWhyChoose'
import SeoLeads from '@/components/seopackages/08SeoLeads'
import SeoBusinessSuccess from '@/components/seopackages/09SeoBusinessSuccess'
import ServiceFaq from '@/components/serviceComponent/12ServiceFaq'
import { seopackages } from '@/utils/accordionData'
import OurSeoPackages from '@/components/seopackages/06OurSeoPackages'
const page = () => {
  return (
    <>
      <SeoPackageBanner/>
      <SeoBusinessNeeds/>
      <SeoPackageClients/>
      <SeoWhyHire/>
      <SeoResults/>
      <OurSeoPackages/>
      <SeoWhyChoose/>
      <SeoLeads/>
      <SeoBusinessSuccess/>
      <ServiceFaq accordionData={seopackages}/>
    </>
  )
}

export default page
export const metadata = {
  title: "SEO Packages India | Best SEO Plans - WebGuruz", // Static title for this page
  description: "Get the best SEO packages in India with WebGuruz. Our tailored SEO plans boost rankings, drive targeted traffic, and help grow your business online effectively.",
};