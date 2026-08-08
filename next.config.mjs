/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    API_KEY: process.env.GEMINI_API_KEY,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
  // The site appears to be using static exports or standard build? The user didn't specify static export, standard SSR is fine and default.
};
export default nextConfig;
