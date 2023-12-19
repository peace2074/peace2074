import process from "node:process";
import type { ModuleOptions } from "@vite-pwa/nuxt";
import Client from "./client";
const appName = Client.app.businessName;
const appDescription = Client.app.businessDescription;
const scope = ".";
if (process.client) {
}
export const pwa: ModuleOptions = {
  registerType: "autoUpdate",
  base: scope,
  manifest: {
    name: appName,
    short_name: appName,
    description: appDescription,
    display: "standalone",
    orientation: "portrait",
    theme_color: "#1976d2",
    background_color: "#ffffff",
    scope,
    start_url: scope,
    icons: [
      {
        src: "icons/ios/192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icons/ios/512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "maskable-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
  workbox: {
    globPatterns: ["**/*.{js,css,html,txt,png,ico,svg}"],
    navigateFallbackDenylist: [/^\/api\//],
    navigateFallback: "/",
    cleanupOutdatedCaches: true,
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts.googleapis.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts.gstatic.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "gstatic-fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  registerWebManifestInRouteRules: true,
  writePlugin: true,
  devOptions: {
    enabled: process.env.VITE_PLUGIN_PWA === "true",
    navigateFallback: scope,
  },
};
