export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/") {
      return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
    }

    if (path === "/vsc/0001") {
      return env.ASSETS.fetch(new Request(new URL("/vsc-0001.html", url), request));
    }

    return env.ASSETS.fetch(request);
  },
};
