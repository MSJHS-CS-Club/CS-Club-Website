/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "off",
  },
};

module.exports = nextConfig;
