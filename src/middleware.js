import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // List of paths to redirect to the home page
  const redirectPaths = [
    '/services/asp-net-development-company',
    '/services/php-development-company',
    '/services/ruby-on-rails-development-company',
    '/services/python-development',
    '/services/java-web-development',
    '/services/full-stack-js',
    '/services/mobile-app-development-company',
    '/services/iphone-app-development-company',
    '/services/ipad-app-development-company',
    '/services/android-app-development-company',
    '/services/html5-app-development',
    '/services/phonegap-development',
    '/services/titanium-development',
    '/services/ios-app-development-company',
    '/services/cms-development-services',
    '/services/wordpress-development-company-india',
    '/services/drupal-development-services',
    '/services/infusion-soft-services-and-consultingany',
    '/services/local-seo-agency',
    '/services/online-reputation-management-orm',
    '/services/google-remarketing',
    '/services/e-commerce-seo',
    '/services/social-media-marketing-smm',
    '/services/facebook-marketing-services',
    '/services/linkedin-marketing-agency',
    '/services/email-marketing-service-provider',
    '/services/brands-marketing',
    '/services/ecommerce',
    '/services/magento-development-services',
    '/services/woocommerce-development-services',
    '/services/e-commerce-development',
    '/services/shopify-development-services',
    '/services/web-designing',
    '/services/ux-ui-design',
    '/services/parallax-design',
    '/services/hire-html5-developers',
    '/our-portfolio',
    // pages to be created later
    '/services/marketing-analytics',
    '/services/marketing-automation',
    
  ];

  // Normalize the path by removing trailing slashes if present
  const normalizedPathname = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

  // Redirect if the path matches one in the list
  if (redirectPaths.includes(normalizedPathname)) {
    return NextResponse.redirect(new URL('/', req.url));
  }
   // Redirect from /sitemap to /sitemap.xml
   const headers = new Headers(req.headers);
   headers.set("x-current-path", req.nextUrl.pathname);
   return NextResponse.next({ headers });

  // return NextResponse.next();
}

// Specify the paths that the middleware should run on
export const config = {
  matcher: ['/:path*'], // Run middleware on all routes
};
