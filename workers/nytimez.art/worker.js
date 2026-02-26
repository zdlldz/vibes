export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    const canonicalV1 = "/2026/02/24/world/europe/russia-war-economy";
    const canonicalV2 = "/2026/02/24/world/europe/russia-war-economy-v2";

    const redirectsToV1 = new Set([
      "/2026/02/23/style/pickle-app-clothing-rental",
      "/2026/02/23/style/pickle-app-clothing-rental/",
      "/2026/02/24/style/vibes-science-measurement-geneva",
      "/2026/02/24/style/vibes-science-measurement-geneva/",
      "/2026-02-23-style-pickle-app-clothing-rental.html",
    ]);

    const redirectsToV2 = new Set([
      "/2026-02-23-style-pickle-app-clothing-rental-v2.html",
    ]);

    if (path === "/") {
      return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
    }

    if (redirectsToV1.has(path)) {
      return Response.redirect(new URL(canonicalV1, url).toString(), 301);
    }

    if (redirectsToV2.has(path)) {
      return Response.redirect(new URL(canonicalV2, url).toString(), 301);
    }

    // Canonical pretty-route mapping to flat static files.
    if (path === canonicalV1 || path === `${canonicalV1}/`) {
      return env.ASSETS.fetch(
        new Request(new URL("/2026-02-23-style-pickle-app-clothing-rental.html", url), request)
      );
    }

    if (path === canonicalV2 || path === `${canonicalV2}/`) {
      return env.ASSETS.fetch(
        new Request(new URL("/2026-02-23-style-pickle-app-clothing-rental-v2.html", url), request)
      );
    }

    return env.ASSETS.fetch(request);
  },
};
