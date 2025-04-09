/* @type {import('next').NextConfig} */
const nextConfig = {  
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "webguruz.in",
          },
          {
            protocol: "https",
            hostname: "secure.gravatar.com",
          },
          {
            protocol:"https",
            hostname:"api.webguruz.in"
          }
        ],
      },
      async redirects() {
        return [
          {
            source: "/:path*",
            has: [
              {
                type: "host",
                value: "www.webguruz.in", // Replace with your domain
              },
            ],
            destination: "https://webguruz.in/:path*", // Replace with your domain
            permanent: true,
          },
        ];
      },
      webpack(config, { dev }) {
        if (!dev) {
          config.devtool = false; // Disable source maps in production
        }
        return config;
      },
    };
    
export default nextConfig;
