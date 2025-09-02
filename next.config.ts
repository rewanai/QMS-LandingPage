/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/qms",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
