import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
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
      {
        protocol: "https",
        hostname: "milliondejene.github.io",
        port: "", // Optional, specify if necessary
        pathname: "/lafto-partners/public/images/*", // Update with the exact path to your image
      },
    ],
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default bundleAnalyzer(nextConfig);
