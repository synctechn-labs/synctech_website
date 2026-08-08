/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    API_KEY: process.env.GEMINI_API_KEY,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
  async redirects() {
    return [
      {
        source: '/services/ai-solutions',
        destination: '/services/ai-development-services/',
        permanent: true,
      },
      {
        source: '/services/ai-workflow-agent-development',
        destination: '/services/ai-workflow-agent-development-services/',
        permanent: true,
      },
      {
        source: '/services/custom-erp-development',
        destination: '/services/custom-erp-software-development-services/',
        permanent: true,
      },
      {
        source: '/services/custom-web-application-development',
        destination: '/services/custom-web-application-development-services/',
        permanent: true,
      },
      {
        source: '/services/legacy-software-modernization',
        destination: '/services/legacy-software-modernization-services/',
        permanent: true,
      },
      {
        source: '/services/mobile-application-development',
        destination: '/services/mobile-app-development/',
        permanent: true,
      },
      {
        source: '/services/white-label-software-development',
        destination: '/services/white-label-software-development-services/',
        permanent: true,
      },
    ];
  },
  // The site appears to be using static exports or standard build? The user didn't specify static export, standard SSR is fine and default.
};
export default nextConfig;
