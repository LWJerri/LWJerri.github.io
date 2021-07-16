import {
  S as e,
  i as t,
  s,
  e as a,
  a as r,
  t as o,
  c as i,
  b as l,
  d as n,
  f as c,
  g as d,
  h as u,
  j as p,
  k as h,
  n as m,
  H as f,
  l as g,
  m as v,
  o as b,
  p as S,
  q as y,
  r as w,
  u as j,
  v as T,
  w as E,
  x as k,
} from "./vendor.43aaa1fb.js";
function $(e) {
  let t, s, f, g, v, b, S, y, w;
  return {
    c() {
      (t = a("div")),
        (s = a("img")),
        (g = r()),
        (v = a("h1")),
        (b = o("Andrey Zontov")),
        (S = r()),
        (y = a("p")),
        (w = o("Backend Node.js developer from Kyiv")),
        this.h();
    },
    l(e) {
      t = i(e, "DIV", { class: !0 });
      var a = l(t);
      (s = i(a, "IMG", { src: !0, alt: !0, class: !0 })), (g = n(a)), (v = i(a, "H1", { class: !0 }));
      var r = l(v);
      (b = c(r, "Andrey Zontov")), r.forEach(d), (S = n(a)), (y = i(a, "P", { class: !0 }));
      var o = l(y);
      (w = c(o, "Backend Node.js developer from Kyiv")), o.forEach(d), a.forEach(d), this.h();
    },
    h() {
      s.src !== (f = "/assets/logo.5c115cb0.png") && u(s, "src", "/assets/logo.5c115cb0.png"),
        u(s, "alt", "MY_AVATAR"),
        u(s, "class", "svelte-10mu2w8"),
        u(v, "class", "svelte-10mu2w8"),
        u(y, "class", "svelte-10mu2w8"),
        u(t, "class", "about svelte-10mu2w8");
    },
    m(e, a) {
      p(e, t, a), h(t, s), h(t, g), h(t, v), h(v, b), h(t, S), h(t, y), h(y, w);
    },
    p: m,
    i: m,
    o: m,
    d(e) {
      e && d(t);
    },
  };
}
class P extends e {
  constructor(e) {
    super(), t(this, e, null, $, s, {});
  }
}
function N(e) {
  let t, s, f, g, v, b, S, y, w, j, T, E, k, $, P;
  return {
    c() {
      (t = a("div")),
        (s = a("h1")),
        (f = o("LINKS")),
        (g = r()),
        (v = a("a")),
        (b = a("i")),
        (S = r()),
        (y = a("a")),
        (w = a("i")),
        (j = r()),
        (T = a("a")),
        (E = a("i")),
        (k = r()),
        ($ = a("a")),
        (P = a("i")),
        this.h();
    },
    l(e) {
      t = i(e, "DIV", { class: !0 });
      var a = l(t);
      s = i(a, "H1", {});
      var r = l(s);
      (f = c(r, "LINKS")), r.forEach(d), (g = n(a)), (v = i(a, "A", { href: !0, target: !0 }));
      var o = l(v);
      (b = i(o, "I", { class: !0 })), l(b).forEach(d), o.forEach(d), (S = n(a)), (y = i(a, "A", { href: !0, target: !0 }));
      var u = l(y);
      (w = i(u, "I", { class: !0 })), l(w).forEach(d), u.forEach(d), (j = n(a)), (T = i(a, "A", { href: !0, target: !0 }));
      var p = l(T);
      (E = i(p, "I", { class: !0 })), l(E).forEach(d), p.forEach(d), (k = n(a)), ($ = i(a, "A", { href: !0, target: !0 }));
      var h = l($);
      (P = i(h, "I", { class: !0 })), l(P).forEach(d), h.forEach(d), a.forEach(d), this.h();
    },
    h() {
      u(b, "class", "fab fa-vk fa-4x svelte-17o2sdd"),
        u(v, "href", "https://vk.com/LWJerri"),
        u(v, "target", "_blank"),
        u(w, "class", "fab fa-telegram-plane fa-4x svelte-17o2sdd"),
        u(y, "href", "https://t.me/LWJerri"),
        u(y, "target", "_blank"),
        u(E, "class", "fab fa-discord fa-4x svelte-17o2sdd"),
        u(T, "href", "https://dsc.bio/432085389948485633"),
        u(T, "target", "_blank"),
        u(P, "class", "fab fa-github fa-4x svelte-17o2sdd"),
        u($, "href", "https://github.com/LWJerri"),
        u($, "target", "_blank"),
        u(t, "class", "links svelte-17o2sdd");
    },
    m(e, a) {
      p(e, t, a),
        h(t, s),
        h(s, f),
        h(t, g),
        h(t, v),
        h(v, b),
        h(t, S),
        h(t, y),
        h(y, w),
        h(t, j),
        h(t, T),
        h(T, E),
        h(t, k),
        h(t, $),
        h($, P);
    },
    p: m,
    i: m,
    o: m,
    d(e) {
      e && d(t);
    },
  };
}
class M extends e {
  constructor(e) {
    super(), t(this, e, null, N, s, {});
  }
}
var C = [
  {
    title: "Lequille",
    description:
      "I maded this project for sync Discord and Telegram group chats. Bot can send animated emojis, create YouTube invite links, get user avatar, have more moderation commands, stats about user and level system.",
    uses: ["JavaScript", "TypeScript", "Node.js", "Express", "MongoDB", "CapRover", "Heroku", "Visual Studio Code", "Git"],
    url: "",
  },
  {
    title: "lwjerri.js.org",
    description: "My personal website with information about me and my projects.",
    uses: ["TypeScript", "Svelte", "CSS3", "HTML5", "Node.js", "Nginx", "Figma", "Git", "Visual Studio Code"],
    url: "https://lwjerri.js.org",
  },
  {
    title: "ManageGift website",
    description: "Website based on PHP with minimal design, support dark and light modes made special for Arabic discord ManageGift bot.",
    uses: ["JavaScript", "PHP", "Bootstrap", "CSS3", "HTML5", "Adobe Photoshop", "Git", "Visual Studio Code", "VPS"],
    url: "https://managegift.ga",
  },
  {
    title: "DartaCluster",
    description: "Simple parser images from VK, Instagram and Reddit with saving images to database.",
    uses: ["TypeScript", "Node.js", "MongoDB", "Heroku", "Git", "Visual Studio Code"],
    url: "",
  },
  {
    title: "Openner",
    description:
      "Private Discord bot with a lot of moderation commands, fun and more other features. Announce about new videos on YouTube, streams on Twitch, give role by reactions, create voice channels, auto-backup server and more other!",
    uses: [
      "JavaScript",
      "Svelte",
      "Bootstrap",
      "HTML5",
      "Node.js",
      "Express",
      "Nginx",
      "PostgreSQL",
      "Heroku",
      "Figma",
      "Postman",
      "Git",
      "Intellij IDEA",
      "TypeORM",
    ],
    url: "",
  },
  {
    title: "FreeBot",
    description: "Simple Discord bot with moderation commands and level system.",
    uses: ["TypeScript", "Node.js", "PostgreSQL", "Git", "Visual Studio Code", "TypeORM"],
    url: "https://github.com/LWJerri/FreeBot",
  },
  {
    title: "JAPI",
    description: "My own API for parse information about user on Twitch and Discord. Support generating short links.",
    uses: ["JavaScript", "TypeScript", "Node.js", "Express", "MongoDB", "GCP", "Heroku", "Vercel", "Postman", "Git", "Visual Studio Code"],
    url: "https://kappapride.ml",
  },
  {
    title: "VilStats",
    description:
      "Windows application for manage information about people maded special for accounting. Application now active uses in village territorial community.",
    uses: ["JavaScript", "PHP", "CSS3", "HTML5", "jQuery", "Node.js", "Electron", "Figma", "Postman", "Linux", "Git", "Visual Studio Code"],
    url: "",
  },
  {
    title: "JeelangaHelper",
    description:
      "Bot for help moderate Discord server. Support multi-language, moderate commands, join & leave messages, reaction triggers, and anti-spam system.",
    uses: ["TypeScript", "Node.js", "Heroku", "Git", "Visual Studio Code"],
    url: "https://github.com/Jeelanga/JeelangaHelper",
  },
  {
    title: "JeelangaMusic",
    description:
      "Discord music bot with many features. Support YouTube, YouTube Music, Spotify, VK Music, Deezer and radio stations. Play your favourite playlists and more other.",
    uses: ["JavaScript", "Node.js", "Heroku", "Git", "Visual Studio Code"],
    url: "https://github.com/Jeelanga/JeelangaMusic",
  },
  {
    title: "Riddea",
    description:
      "Massive project for view anime SFW/NSFW images in Telegram bot with features upload favorite user images to bot databse, set collection and view on website, desktop or mobile app. Very big thanks to Satont for helps me open new borders in programming!",
    uses: [
      "TypeScript",
      "Node.js",
      "Nginx",
      "PostgreSQL",
      "Docker",
      "CapRover",
      "Postman",
      "Git",
      "Visual Studio Code",
      "NestJS",
      "Fastify",
      "TypeORM",
    ],
    url: "https://github.com/Riddea/Riddea",
  },
  {
    title: "Riddea website",
    description:
      "Official Riddea project website. This website support Telegram authorization, view users public collections, images and more other!",
    uses: ["TypeScript", "Svelte", "CSS3", "HTML5", "Node.js", "Nginx", "Docker", "CapRover", "Figma", "Git", "Visual Studio Code", "Vite"],
    url: "https://riddea.ml",
  },
];
function V(e, t, s) {
  const a = e.slice();
  return (a[1] = t[s]), a;
}
function H(e) {
  let t,
    s,
    v,
    b,
    S,
    y,
    w,
    j,
    T,
    E,
    k,
    $,
    P,
    N = e[1].title + "",
    M = e[1].url ? "<a style='color: #5865F2' href=" + e[1].url + " target='_blank'>" + e[0] + "</a>" : "",
    C = e[1].description + "",
    V = e[1].uses.join(", ") + "";
  return {
    c() {
      (t = a("div")),
        (s = a("h1")),
        (v = o(N)),
        (b = r()),
        (S = new f()),
        (y = r()),
        (w = a("p")),
        (j = o(C)),
        (T = r()),
        (E = a("p")),
        (k = a("i")),
        ($ = o(V)),
        (P = r()),
        this.h();
    },
    l(e) {
      t = i(e, "DIV", { class: !0 });
      var a = l(t);
      s = i(a, "H1", { class: !0 });
      var r = l(s);
      (v = c(r, N)), (b = n(r)), (S = g(r)), r.forEach(d), (y = n(a)), (w = i(a, "P", { id: !0, class: !0 }));
      var o = l(w);
      (j = c(o, C)), o.forEach(d), (T = n(a)), (E = i(a, "P", { id: !0, class: !0 }));
      var u = l(E);
      k = i(u, "I", {});
      var p = l(k);
      ($ = c(p, V)), p.forEach(d), u.forEach(d), (P = n(a)), a.forEach(d), this.h();
    },
    h() {
      (S.a = null),
        u(s, "class", "svelte-1b92u4y"),
        u(w, "id", "description"),
        u(w, "class", "svelte-1b92u4y"),
        u(E, "id", "uses"),
        u(E, "class", "svelte-1b92u4y"),
        u(t, "class", "project svelte-1b92u4y");
    },
    m(e, a) {
      p(e, t, a), h(t, s), h(s, v), h(s, b), S.m(M, s), h(t, y), h(t, w), h(w, j), h(t, T), h(t, E), h(E, k), h(k, $), h(t, P);
    },
    p: m,
    d(e) {
      e && d(t);
    },
  };
}
function J(e) {
  let t,
    s,
    f,
    g,
    S = C,
    y = [];
  for (let a = 0; a < S.length; a += 1) y[a] = H(V(e, S, a));
  return {
    c() {
      (t = a("h1")), (s = o("PROJECTS")), (f = r());
      for (let e = 0; e < y.length; e += 1) y[e].c();
      (g = v()), this.h();
    },
    l(e) {
      t = i(e, "H1", { class: !0 });
      var a = l(t);
      (s = c(a, "PROJECTS")), a.forEach(d), (f = n(e));
      for (let t = 0; t < y.length; t += 1) y[t].l(e);
      (g = v()), this.h();
    },
    h() {
      u(t, "class", "svelte-1b92u4y");
    },
    m(e, a) {
      p(e, t, a), h(t, s), p(e, f, a);
      for (let t = 0; t < y.length; t += 1) y[t].m(e, a);
      p(e, g, a);
    },
    p(e, [t]) {
      if (1 & t) {
        let s;
        for (S = C, s = 0; s < S.length; s += 1) {
          const a = V(e, S, s);
          y[s] ? y[s].p(a, t) : ((y[s] = H(a)), y[s].c(), y[s].m(g.parentNode, g));
        }
        for (; s < y.length; s += 1) y[s].d(1);
        y.length = S.length;
      }
    },
    i: m,
    o: m,
    d(e) {
      e && d(t), e && d(f), b(y, e), e && d(g);
    },
  };
}
function x(e) {
  return [`<i class='${S.prefix} fa-${S.iconName} fa-xs'></i>`];
}
class I extends e {
  constructor(e) {
    super(), t(this, e, x, J, s, {});
  }
}
function A(e) {
  let t, s, o, c, f, g, v;
  return (
    (s = new P({})),
    (c = new M({})),
    (g = new I({})),
    {
      c() {
        (t = a("main")), y(s.$$.fragment), (o = r()), y(c.$$.fragment), (f = r()), y(g.$$.fragment), this.h();
      },
      l(e) {
        t = i(e, "MAIN", { class: !0 });
        var a = l(t);
        w(s.$$.fragment, a), (o = n(a)), w(c.$$.fragment, a), (f = n(a)), w(g.$$.fragment, a), a.forEach(d), this.h();
      },
      h() {
        u(t, "class", "svelte-wr1kbe");
      },
      m(e, a) {
        p(e, t, a), j(s, t, null), h(t, o), j(c, t, null), h(t, f), j(g, t, null), (v = !0);
      },
      p: m,
      i(e) {
        v || (T(s.$$.fragment, e), T(c.$$.fragment, e), T(g.$$.fragment, e), (v = !0));
      },
      o(e) {
        E(s.$$.fragment, e), E(c.$$.fragment, e), E(g.$$.fragment, e), (v = !1);
      },
      d(e) {
        e && d(t), k(s), k(c), k(g);
      },
    }
  );
}
new (class extends e {
  constructor(e) {
    super(), t(this, e, null, A, s, {});
  }
})({ target: document.getElementById("app") });
