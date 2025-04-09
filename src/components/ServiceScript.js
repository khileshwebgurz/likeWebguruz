"use client";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function ServiceScript() {
  const pathname = usePathname();

  let schemaData = null;

  if (pathname === "/huubspot-automation-services") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "HubSpot Development",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HubSpot",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "HubSpot Development",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "HubSpot Automation Services",
                  url: "https://webguruz.in/hubspot-automation-services",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/hubspot-consulting") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "HubSpot Development",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HubSpot",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "HubSpot Development",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "HubSpot Consulting Services",
                  url: "https://webguruz.in/hubspot-consulting",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/hubspot-application-developer") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "HubSpot Development",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HubSpot",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "HubSpot Development",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "HubSpot Application Developers",
                  url: "https://webguruz.in/hubspot-application-developer",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/hubspot-migration-services") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "HubSpot Development",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HubSpot",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "HubSpot Development",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "HubSpot Migration Services",
                  url: "https://webguruz.in/hubspot-migration-services",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/revenue-operations-services") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "HubSpot Development",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HubSpot",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "HubSpot Development",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "RevOps Services",
                  url: "https://webguruz.in/revenue-operations-services",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/hubspot-cms-migration") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "HubSpot Development",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HubSpot",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "HubSpot Development",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "HubSpot CMS Migration Services",
                  url: "https://webguruz.in/hubspot-cms-migration",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/hubspot-cms-development") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "HubSpot Development",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HubSpot",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "HubSpot Development",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "HubSpot CMS Development Services",
                  url: "https://webguruz.in/hubspot-cms-development",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/hubspot-onboarding") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "HubSpot Development",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HubSpot",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "HubSpot Development",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Hubspot Onboarding Services",
                  url: "https://webguruz.in/hubspot-onboarding",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/hubspot-crm-migration") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "HubSpot Development",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HubSpot",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "HubSpot Development",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "HubSpot CRM Migration Services",
                  url: "https://webguruz.in/hubspot-crm-migration",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/hubspot-services") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "HubSpot Development",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HubSpot",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "HubSpot Development",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "HubSpot Services",
                  url: "https://webguruz.in/hubspot-services",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/hubspot-developer") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "HubSpot Development",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HubSpot",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "HubSpot Development",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Hubspot CRM Developers",
                  url: "https://webguruz.in/hubspot-developer",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/hubspot-marketing-automation") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "HubSpot Development",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HubSpot",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "HubSpot Development",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "HubSpot Marketing Automation Services",
                  url: "https://webguruz.in/hubspot-marketing-automation",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/hubspot-crm-automation") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "HubSpot Development",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HubSpot",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "HubSpot Development",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "HubSpot CRM Automation Service",
                  url: "https://webguruz.in/hubspot-crm-automation",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/services/helpdesk-services") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "IT Support",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        Address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Helpdesk",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Helpdesk Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Helpdesk Services",
                  url: "https://webguruz.in/services/helpdesk-services",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/services/msp-managed-service-provider") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "IT Support",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        Address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "MSP Managed Service Providers",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Helpdesk Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "MSP Managed Service Providers",
                  url: "https://webguruz.in/services/msp-managed-service-provider",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/services/remote-monitoring-management") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "IT Support",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        Address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "RMM Solutions",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Remote Monitoring Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Remote Monitoring & Management (RMM) Services",
                  url: "https://webguruz.in/services/remote-monitoring-management",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/software-testing-company") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "Software Testing",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        Address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Testing Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Software Testing Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Software Testing Services",
                  url: "https://webguruz.in/software-testing-company",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/manual-software-testing-services") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "Software Testing",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        Address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Manual Software Testing",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Manual Software Testing",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Manual Software Testing Services",
                  url: "https://webguruz.in/manual-software-testing-services",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/automation-testing-services") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "Software Testing",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        Address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Automation Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Automation Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Testing Automation Services",
                  url: "https://webguruz.in/automation-testing-services",
                },
              },
            ],
          },
        ],
      },
    };
  }
  if (pathname === "/load-testing-consulting-company") {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "Service",
      serviceType: "Software Testing",
      provider: {
        "@type": "LocalBusiness",
        name: "Webguruz Technologies Pvt.Ltd.",
        Address:
          "C-205, 4th Floor, SM Heights, NH 5, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071 (India)",
        url: "https://webguruz.in/",
      },
      areaServed: {
        "@type": "State",
        name: "Punjab",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Load Testing",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Load Testing",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Load Testing Services",
                  url: "https://webguruz.in/load-testing-consulting-company",
                },
              },
            ],
          },
        ],
      },
    };
  }

  if (!schemaData) return null; // If pathname doesn't match, don't render anything

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
