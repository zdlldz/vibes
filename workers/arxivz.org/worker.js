export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/") {
      return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
    }

    // Map pretty source-style path to flat static subpage file.
    if (path === "/abs/2506.10953") {
      return env.ASSETS.fetch(new Request(new URL("/abs-2506-10953.html", url), request));
    }

    return env.ASSETS.fetch(request);
  },
};
