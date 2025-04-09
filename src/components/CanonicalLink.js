// components/CanonicalLink.js
"use client";

import { usePathname } from "next/navigation";
import Head from "next/head";

const CanonicalLink = () => {
  const pathname = usePathname();
  
  const canonicalUrl = `https://webguruz.in${pathname}`;
  return (
      <link rel="canonical" href={canonicalUrl} />
  );
};

export default CanonicalLink;
