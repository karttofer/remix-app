// remix.config.js

import { flatRoutes } from "remix-flat-routes";

export default {
  ignoredRouteFiles: ["**/*"],
  async routes(defineRoutes) {
    return flatRoutes("routes", defineRoutes);
  },
  server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
  serverBuildPath: "api/index.js",

  serverModuleFormat: "cjs",
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  browserNodeBuiltinsPolyfill: {
    modules: {
      crypto: true,
      util: true,
      stream: true,
      buffer: true,
    },
  },
};
