const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lafto.partners",
        port: "", // Optional, specify if necessary
        pathname: "**", // Use ** to allow any path under the hostname
      },
    ],
  },
  // other Next.js config
};

module.exports = withBundleAnalyzer(nextConfig);
