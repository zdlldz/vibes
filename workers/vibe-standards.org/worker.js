export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/") {
      return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
    }

    // Single-page portal model: legacy standards routes resolve to index.
    if (
      path === "/vsc/0001" ||
      path === "/standards/iovs-1001" ||
      path === "/standards" ||
      path === "/faq" ||
      path === "/certification"
    ) {
      return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
    }

    return env.ASSETS.fetch(request);
  },
};
