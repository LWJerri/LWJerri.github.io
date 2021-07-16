function t() {}
function n(t) {
  return t();
}
function e() {
  return Object.create(null);
}
function o(t) {
  t.forEach(n);
}
function r(t) {
  return "function" == typeof t;
}
function i(t, n) {
  return t != t ? n == n : t !== n || (t && "object" == typeof t) || "function" == typeof t;
}
let c,
  a = !1;
function l(t, n, e, o) {
  for (; t < n; ) {
    const r = t + ((n - t) >> 1);
    e(r) <= o ? (t = r + 1) : (n = r);
  }
  return t;
}
function s(t, n) {
  a
    ? (!(function (t) {
        if (t.hydrate_init) return;
        t.hydrate_init = !0;
        const n = t.childNodes,
          e = new Int32Array(n.length + 1),
          o = new Int32Array(n.length);
        e[0] = -1;
        let r = 0;
        for (let s = 0; s < n.length; s++) {
          const t = l(1, r + 1, (t) => n[e[t]].claim_order, n[s].claim_order) - 1;
          o[s] = e[t] + 1;
          const i = t + 1;
          (e[i] = s), (r = Math.max(i, r));
        }
        const i = [],
          c = [];
        let a = n.length - 1;
        for (let l = e[r] + 1; 0 != l; l = o[l - 1]) {
          for (i.push(n[l - 1]); a >= l; a--) c.push(n[a]);
          a--;
        }
        for (; a >= 0; a--) c.push(n[a]);
        i.reverse(), c.sort((t, n) => t.claim_order - n.claim_order);
        for (let l = 0, s = 0; l < c.length; l++) {
          for (; s < i.length && c[l].claim_order >= i[s].claim_order; ) s++;
          const n = s < i.length ? i[s] : null;
          t.insertBefore(c[l], n);
        }
      })(t),
      (void 0 === t.actual_end_child || (null !== t.actual_end_child && t.actual_end_child.parentElement !== t)) &&
        (t.actual_end_child = t.firstChild),
      n !== t.actual_end_child ? t.insertBefore(n, t.actual_end_child) : (t.actual_end_child = n.nextSibling))
    : n.parentNode !== t && t.appendChild(n);
}
function u(t, n, e) {
  a && !e ? s(t, n) : (n.parentNode !== t || (e && n.nextSibling !== e)) && t.insertBefore(n, e || null);
}
function f(t) {
  t.parentNode.removeChild(t);
}
function d(t, n) {
  for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function h(t) {
  return document.createElement(t);
}
function m(t) {
  return document.createTextNode(t);
}
function _() {
  return m(" ");
}
function p() {
  return m("");
}
function g(t, n, e) {
  null == e ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function $(t) {
  return Array.from(t.childNodes);
}
function b(t, n, e, o, r = !1) {
  void 0 === t.claim_info && (t.claim_info = { last_index: 0, total_claimed: 0 });
  const i = (() => {
    for (let o = t.claim_info.last_index; o < t.length; o++) {
      const i = t[o];
      if (n(i)) return e(i), t.splice(o, 1), r || (t.claim_info.last_index = o), i;
    }
    for (let o = t.claim_info.last_index - 1; o >= 0; o--) {
      const i = t[o];
      if (n(i)) return e(i), t.splice(o, 1), r ? t.claim_info.last_index-- : (t.claim_info.last_index = o), i;
    }
    return o();
  })();
  return (i.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), i;
}
function x(t, n, e, o) {
  return b(
    t,
    (t) => t.nodeName === n,
    (t) => {
      const n = [];
      for (let o = 0; o < t.attributes.length; o++) {
        const r = t.attributes[o];
        e[r.name] || n.push(r.name);
      }
      n.forEach((n) => t.removeAttribute(n));
    },
    () =>
      o
        ? (function (t) {
            return document.createElementNS("http://www.w3.org/2000/svg", t);
          })(n)
        : h(n),
  );
}
function y(t, n) {
  return b(
    t,
    (t) => 3 === t.nodeType,
    (t) => {
      t.data = "" + n;
    },
    () => m(n),
    !0,
  );
}
function w(t) {
  return y(t, " ");
}
function v(t, n, e) {
  for (let o = e; o < t.length; o += 1) {
    const e = t[o];
    if (8 === e.nodeType && e.textContent.trim() === n) return o;
  }
  return t.length;
}
function N(t) {
  const n = v(t, "HTML_TAG_START", 0),
    e = v(t, "HTML_TAG_END", n);
  if (n === e) return new k();
  const o = t.splice(n, e + 1);
  return f(o[0]), f(o[o.length - 1]), new k(o.slice(1, o.length - 1));
}
class k {
  constructor(t) {
    (this.e = this.n = null), (this.l = t);
  }
  m(t, n, e = null) {
    this.e || ((this.e = h(n.nodeName)), (this.t = n), this.l ? (this.n = this.l) : this.h(t)), this.i(e);
  }
  h(t) {
    (this.e.innerHTML = t), (this.n = Array.from(this.e.childNodes));
  }
  i(t) {
    for (let n = 0; n < this.n.length; n += 1) u(this.t, this.n[n], t);
  }
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  d() {
    this.n.forEach(f);
  }
}
function A(t) {
  c = t;
}
const E = [],
  T = [],
  S = [],
  M = [],
  C = Promise.resolve();
let H = !1;
function j(t) {
  S.push(t);
}
let B = !1;
const L = new Set();
function O() {
  if (!B) {
    B = !0;
    do {
      for (let t = 0; t < E.length; t += 1) {
        const n = E[t];
        A(n), V(n.$$);
      }
      for (A(null), E.length = 0; T.length; ) T.pop()();
      for (let t = 0; t < S.length; t += 1) {
        const n = S[t];
        L.has(n) || (L.add(n), n());
      }
      S.length = 0;
    } while (E.length);
    for (; M.length; ) M.pop()();
    (H = !1), (B = !1), L.clear();
  }
}
function V(t) {
  if (null !== t.fragment) {
    t.update(), o(t.before_update);
    const n = t.dirty;
    (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(j);
  }
}
const q = new Set();
function z(t, n) {
  t && t.i && (q.delete(t), t.i(n));
}
function G(t, n, e, o) {
  if (t && t.o) {
    if (q.has(t)) return;
    q.add(t),
      undefined.c.push(() => {
        q.delete(t), o && (e && t.d(1), o());
      }),
      t.o(n);
  }
}
function I(t) {
  t && t.c();
}
function D(t, n) {
  t && t.l(n);
}
function P(t, e, i, c) {
  const { fragment: a, on_mount: l, on_destroy: s, after_update: u } = t.$$;
  a && a.m(e, i),
    c ||
      j(() => {
        const e = l.map(n).filter(r);
        s ? s.push(...e) : o(e), (t.$$.on_mount = []);
      }),
    u.forEach(j);
}
function R(t, n) {
  const e = t.$$;
  null !== e.fragment && (o(e.on_destroy), e.fragment && e.fragment.d(n), (e.on_destroy = e.fragment = null), (e.ctx = []));
}
function F(t, n) {
  -1 === t.$$.dirty[0] && (E.push(t), H || ((H = !0), C.then(O)), t.$$.dirty.fill(0)), (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function J(n, r, i, l, s, u, d = [-1]) {
  const h = c;
  A(n);
  const m = (n.$$ = {
    fragment: null,
    ctx: null,
    props: u,
    update: t,
    not_equal: s,
    bound: e(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(h ? h.$$.context : r.context || []),
    callbacks: e(),
    dirty: d,
    skip_bound: !1,
  });
  let _ = !1;
  if (
    ((m.ctx = i
      ? i(n, r.props || {}, (t, e, ...o) => {
          const r = o.length ? o[0] : e;
          return m.ctx && s(m.ctx[t], (m.ctx[t] = r)) && (!m.skip_bound && m.bound[t] && m.bound[t](r), _ && F(n, t)), e;
        })
      : []),
    m.update(),
    (_ = !0),
    o(m.before_update),
    (m.fragment = !!l && l(m.ctx)),
    r.target)
  ) {
    if (r.hydrate) {
      a = !0;
      const t = $(r.target);
      m.fragment && m.fragment.l(t), t.forEach(f);
    } else m.fragment && m.fragment.c();
    r.intro && z(n.$$.fragment), P(n, r.target, r.anchor, r.customElement), (a = !1), O();
  }
  A(h);
}
class K {
  $destroy() {
    R(this, 1), (this.$destroy = t);
  }
  $on(t, n) {
    const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      e.push(n),
      () => {
        const t = e.indexOf(n);
        -1 !== t && e.splice(t, 1);
      }
    );
  }
  $set(t) {
    var n;
    this.$$set && ((n = t), 0 !== Object.keys(n).length) && ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */ var Q = {
  prefix: "far",
  iconName: "bookmark",
  icon: [
    384,
    512,
    [],
    "f02e",
    "M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z",
  ],
};
export {
  k as H,
  K as S,
  _ as a,
  $ as b,
  x as c,
  w as d,
  h as e,
  y as f,
  f as g,
  g as h,
  J as i,
  u as j,
  s as k,
  N as l,
  p as m,
  t as n,
  d as o,
  Q as p,
  I as q,
  D as r,
  i as s,
  m as t,
  P as u,
  z as v,
  G as w,
  R as x,
};
