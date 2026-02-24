export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/") {
      return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
    }

    if (path === "/program") {
      return env.ASSETS.fetch(new Request(new URL("/program.html", url), request));
    }

    return env.ASSETS.fetch(request);
  },
};
