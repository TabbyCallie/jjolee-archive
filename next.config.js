/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/dd5mgem4p/**",
      },
    ],
  },
};

module.exports = nextConfig;
