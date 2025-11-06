import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nof1.ai",
      },
    ],
  },
  typedRoutes: true,
  serverExternalPackages: ["lighter-sdk-ts"],
  // webpack: (config, { isServer }) => {
  //   // Exclude the SDK from webpack bundling since it uses Bun-specific APIs
  //   config.externals = config.externals || [];
  //   if (isServer) {
  //     config.externals.push({
  //       'bun:ffi': 'commonjs bun:ffi',
  //     });
  //   } else {
  //     // On client side, completely ignore the signer module
  //     config.resolve.alias = {
  //       ...config.resolve.alias,
  //       "../../lighter-sdk-ts/signer": false,
  //       "../lighter-sdk-ts/signer": false,
  //     };
  //   },
  //   return config;
  // },
  experimental: {
    cssChunking: true,
    viewTransition: true,
  },
  reactCompiler: true,
  cacheComponents: true,
};

export default nextConfig;

