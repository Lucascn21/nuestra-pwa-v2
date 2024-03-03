// @ts-check
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  cacheOnFrontEndNav: true,
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
});

/** @type {import("next/dist/next-server/server/config").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Resto de tu configuración...
};

export default withSerwist(nextConfig);
