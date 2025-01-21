/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: "http://localhost:5000",
  },
};

export default nextConfig;
