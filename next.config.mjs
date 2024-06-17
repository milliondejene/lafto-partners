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
    ],
  },
  // other Next.js config
};

export default bundleAnalyzer(nextConfig);
