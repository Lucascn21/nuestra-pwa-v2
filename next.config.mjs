// @ts-check
import withSerwistInit from "@serwist/next";
import { watch } from "fs";

const withSerwist = withSerwistInit({
  cacheOnFrontEndNav: true,
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
});

/** @type {import("next/dist/next-server/server/config").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuración para observar cambios en archivos CSS en public/css y recargar automáticamente la página
  webpack: (config, { isServer }) => {
    if (!isServer) {
      const cssWatcher = watch("public/css", { recursive: true }, (eventType, filename) => {
        if (filename && filename.endsWith(".css")) {
          console.log("CSS file changed, reloading page...");
          setTimeout(() => {
            process.send("reloadPage");
          }, 100);
        }
      });

      process.on("exit", () => {
        cssWatcher.close();
      });
    }
    return config;
  },
};

export default withSerwist(nextConfig);
