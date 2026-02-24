export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/") {
      return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
    }

    // Pretty-route mapping to flat static file.
    if (
      path === "/2026/02/23/style/pickle-app-clothing-rental" ||
      path === "/2026/02/24/style/vibes-science-measurement-geneva"
    ) {
      return env.ASSETS.fetch(
        new Request(new URL("/2026-02-23-style-pickle-app-clothing-rental.html", url), request)
      );
    }

    return env.ASSETS.fetch(request);
  },
};
