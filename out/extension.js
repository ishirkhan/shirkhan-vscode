var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/shirkhan-alphabet/dist/shirkhan-alphabet.umd.js
var require_shirkhan_alphabet_umd = __commonJS({
  "node_modules/shirkhan-alphabet/dist/shirkhan-alphabet.umd.js"(exports2, module2) {
    (function(A, I) {
      typeof exports2 == "object" && typeof module2 != "undefined" ? I(exports2) : typeof define == "function" && define.amd ? define(["exports"], I) : (A = typeof globalThis != "undefined" ? globalThis : A || self, I(A["shirkhan-alphabet"] = {}));
    })(exports2, function(A) {
      "use strict";
      const I = "/", iu = "h", Uu = "`", Mu = "'", $ = "\u0626", x = [{ ug: "\u0626", uly: "x", khan: "x", volwes: false, punctuation: false }, { ug: "\u0627", uly: "a", khan: "a", volwes: true, punctuation: false }, { ug: "\u06D5", uly: "e", khan: "e", volwes: true, punctuation: false }, { ug: "\u06D0", uly: "\xEB", khan: "eh", volwes: true, punctuation: false }, { ug: "\u0649", uly: "i", khan: "i", volwes: true, punctuation: false }, { ug: "\u0648", uly: "o", khan: "o", volwes: true, punctuation: false }, { ug: "\u06C7", uly: "u", khan: "u", volwes: true, punctuation: false }, { ug: "\u06C6", uly: "\xF6", khan: "c", volwes: true, punctuation: false }, { ug: "\u06C8", uly: "\xFC", khan: "v", volwes: true, punctuation: false }, { ug: "\u0628", uly: "b", khan: "b", volwes: false, punctuation: false }, { ug: "\u067E", uly: "p", khan: "p", volwes: false, punctuation: false }, { ug: "\u062A", uly: "t", khan: "t", volwes: false, punctuation: false }, { ug: "\u062C", uly: "j", khan: "j", volwes: false, punctuation: false }, { ug: "\u0686", uly: "ch", khan: "ch", volwes: false, punctuation: false }, { ug: "\u062E", uly: "x", khan: "kh", volwes: false, punctuation: false }, { ug: "\u062F", uly: "d", khan: "d", volwes: false, punctuation: false }, { ug: "\u0631", uly: "r", khan: "r", volwes: false, punctuation: false }, { ug: "\u0632", uly: "z", khan: "z", volwes: false, punctuation: false }, { ug: "\u0698", uly: "zh", khan: "zh", volwes: false, punctuation: false }, { ug: "\u0633", uly: "s", khan: "s", volwes: false, punctuation: false }, { ug: "\u0634", uly: "sh", khan: "sh", volwes: false, punctuation: false }, { ug: "\u063A", uly: "gh", khan: "gh", volwes: false, punctuation: false }, { ug: "\u0642", uly: "q", khan: "q", volwes: false, punctuation: false }, { ug: "\u0641", uly: "f", khan: "f", volwes: false, punctuation: false }, { ug: "\u0643", uly: "k", khan: "k", volwes: false, punctuation: false }, { ug: "\u06AF", uly: "g", khan: "g", volwes: false, punctuation: false }, { ug: "\u06AD", uly: "ng", khan: "ng", volwes: false, punctuation: false }, { ug: "\u0644", uly: "l", khan: "l", volwes: false, punctuation: false }, { ug: "\u0645", uly: "m", khan: "m", volwes: false, punctuation: false }, { ug: "\u0646", uly: "n", khan: "n", volwes: false, punctuation: false }, { ug: "\u0646", uly: "n", khan: "n" + iu, volwes: false, punctuation: false }, { ug: "\u06BE", uly: "h", khan: "wh", volwes: false, punctuation: false }, { ug: "\u06CB", uly: "w", khan: "w", volwes: false, punctuation: false }, { ug: "\u064A", uly: "y", khan: "y", volwes: false, punctuation: false }, { ug: "\u061F", uly: "?", khan: "?", volwes: false, punctuation: true }];
      function ou() {
        return x.filter((u) => u.volwes);
      }
      function $u(u, e = "khan") {
        return ou().map((t) => t[e]).includes(u);
      }
      var Vu = Object.defineProperty, Ku = (u, e, t) => e in u ? Vu(u, e, { enumerable: true, configurable: true, writable: true, value: t }) : u[e] = t, V = (u, e, t) => (Ku(u, typeof e != "symbol" ? e + "" : e, t), t);
      function su(u) {
        if (u)
          throw u;
      }
      var Fu = function(e) {
        return e != null && e.constructor != null && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
      }, R = Object.prototype.hasOwnProperty, lu = Object.prototype.toString, au = Object.defineProperty, Eu = Object.getOwnPropertyDescriptor, cu = function(e) {
        return typeof Array.isArray == "function" ? Array.isArray(e) : lu.call(e) === "[object Array]";
      }, fu = function(e) {
        if (!e || lu.call(e) !== "[object Object]")
          return false;
        var t = R.call(e, "constructor"), n = e.constructor && e.constructor.prototype && R.call(e.constructor.prototype, "isPrototypeOf");
        if (e.constructor && !t && !n)
          return false;
        var D;
        for (D in e)
          ;
        return typeof D == "undefined" || R.call(e, D);
      }, Cu = function(e, t) {
        au && t.name === "__proto__" ? au(e, t.name, { enumerable: true, configurable: true, value: t.newValue, writable: true }) : e[t.name] = t.newValue;
      }, Au = function(e, t) {
        if (t === "__proto__")
          if (R.call(e, t)) {
            if (Eu)
              return Eu(e, t).value;
          } else
            return;
        return e[t];
      }, hu = function u() {
        var e, t, n, D, r, i, o = arguments[0], s = 1, F = arguments.length, C = false;
        for (typeof o == "boolean" && (C = o, o = arguments[1] || {}, s = 2), (o == null || typeof o != "object" && typeof o != "function") && (o = {}); s < F; ++s)
          if (e = arguments[s], e != null)
            for (t in e)
              n = Au(o, t), D = Au(e, t), o !== D && (C && D && (fu(D) || (r = cu(D))) ? (r ? (r = false, i = n && cu(n) ? n : []) : i = n && fu(n) ? n : {}, Cu(o, { name: t, newValue: u(C, i, D) })) : typeof D != "undefined" && Cu(o, { name: t, newValue: D }));
        return o;
      };
      function K(u) {
        if (Object.prototype.toString.call(u) !== "[object Object]")
          return false;
        const e = Object.getPrototypeOf(u);
        return e === null || e === Object.prototype;
      }
      function qu() {
        const u = [], e = { run: t, use: n };
        return e;
        function t(...D) {
          let r = -1;
          const i = D.pop();
          if (typeof i != "function")
            throw new TypeError("Expected function as last argument, not " + i);
          o(null, ...D);
          function o(s, ...F) {
            const C = u[++r];
            let p = -1;
            if (s) {
              i(s);
              return;
            }
            for (; ++p < D.length; )
              (F[p] === null || F[p] === void 0) && (F[p] = D[p]);
            D = F, C ? Yu(C, o)(...F) : i(null, ...F);
          }
        }
        function n(D) {
          if (typeof D != "function")
            throw new TypeError("Expected `middelware` to be a function, not " + D);
          return u.push(D), e;
        }
      }
      function Yu(u, e) {
        let t;
        return n;
        function n(...i) {
          const o = u.length > i.length;
          let s;
          o && i.push(D);
          try {
            s = u(...i);
          } catch (F) {
            const C = F;
            if (o && t)
              throw C;
            return D(C);
          }
          o || (s instanceof Promise ? s.then(r, D) : s instanceof Error ? D(s) : r(s));
        }
        function D(i, ...o) {
          t || (t = true, e(i, ...o));
        }
        function r(i) {
          D(null, i);
        }
      }
      var z = {}.hasOwnProperty;
      function Gu(u) {
        return !u || typeof u != "object" ? "" : z.call(u, "position") || z.call(u, "type") ? pu(u.position) : z.call(u, "start") || z.call(u, "end") ? pu(u) : z.call(u, "line") || z.call(u, "column") ? q(u) : "";
      }
      function q(u) {
        return Bu(u && u.line) + ":" + Bu(u && u.column);
      }
      function pu(u) {
        return q(u && u.start) + "-" + q(u && u.end);
      }
      function Bu(u) {
        return u && typeof u == "number" ? u : 1;
      }
      class k extends Error {
        constructor(e, t, n) {
          var D = [null, null], r = { start: { line: null, column: null }, end: { line: null, column: null } }, i;
          super();
          typeof t == "string" && (n = t, t = null), typeof n == "string" && (i = n.indexOf(":"), i === -1 ? D[1] = n : (D[0] = n.slice(0, i), D[1] = n.slice(i + 1))), t && ("type" in t || "position" in t ? t.position && (r = t.position) : "start" in t || "end" in t ? r = t : ("line" in t || "column" in t) && (r.start = t)), this.name = Gu(t) || "1:1", this.message = typeof e == "object" ? e.message : e, this.stack = typeof e == "object" ? e.stack : "", this.reason = this.message, this.line = r.start.line, this.column = r.start.column, this.source = D[0], this.ruleId = D[1], this.position = r, this.file, this.fatal, this.url, this.note;
        }
      }
      k.prototype.file = "", k.prototype.name = "", k.prototype.reason = "", k.prototype.message = "", k.prototype.stack = "", k.prototype.fatal = null, k.prototype.column = null, k.prototype.line = null, k.prototype.source = null, k.prototype.ruleId = null, k.prototype.position = null;
      const N = { basename: Hu, dirname: Zu, extname: Ju, join: Xu, sep: "/" };
      function Hu(u, e) {
        if (e !== void 0 && typeof e != "string")
          throw new TypeError('"ext" argument must be a string');
        _(u);
        let t = 0, n = -1, D = u.length, r;
        if (e === void 0 || e.length === 0 || e.length > u.length) {
          for (; D--; )
            if (u.charCodeAt(D) === 47) {
              if (r) {
                t = D + 1;
                break;
              }
            } else
              n < 0 && (r = true, n = D + 1);
          return n < 0 ? "" : u.slice(t, n);
        }
        if (e === u)
          return "";
        let i = -1, o = e.length - 1;
        for (; D--; )
          if (u.charCodeAt(D) === 47) {
            if (r) {
              t = D + 1;
              break;
            }
          } else
            i < 0 && (r = true, i = D + 1), o > -1 && (u.charCodeAt(D) === e.charCodeAt(o--) ? o < 0 && (n = D) : (o = -1, n = i));
        return t === n ? n = i : n < 0 && (n = u.length), u.slice(t, n);
      }
      function Zu(u) {
        if (_(u), u.length === 0)
          return ".";
        let e = -1, t = u.length, n;
        for (; --t; )
          if (u.charCodeAt(t) === 47) {
            if (n) {
              e = t;
              break;
            }
          } else
            n || (n = true);
        return e < 0 ? u.charCodeAt(0) === 47 ? "/" : "." : e === 1 && u.charCodeAt(0) === 47 ? "//" : u.slice(0, e);
      }
      function Ju(u) {
        _(u);
        let e = u.length, t = -1, n = 0, D = -1, r = 0, i;
        for (; e--; ) {
          const o = u.charCodeAt(e);
          if (o === 47) {
            if (i) {
              n = e + 1;
              break;
            }
            continue;
          }
          t < 0 && (i = true, t = e + 1), o === 46 ? D < 0 ? D = e : r !== 1 && (r = 1) : D > -1 && (r = -1);
        }
        return D < 0 || t < 0 || r === 0 || r === 1 && D === t - 1 && D === n + 1 ? "" : u.slice(D, t);
      }
      function Xu(...u) {
        let e = -1, t;
        for (; ++e < u.length; )
          _(u[e]), u[e] && (t = t === void 0 ? u[e] : t + "/" + u[e]);
        return t === void 0 ? "." : Qu(t);
      }
      function Qu(u) {
        _(u);
        const e = u.charCodeAt(0) === 47;
        let t = ue(u, !e);
        return t.length === 0 && !e && (t = "."), t.length > 0 && u.charCodeAt(u.length - 1) === 47 && (t += "/"), e ? "/" + t : t;
      }
      function ue(u, e) {
        let t = "", n = 0, D = -1, r = 0, i = -1, o, s;
        for (; ++i <= u.length; ) {
          if (i < u.length)
            o = u.charCodeAt(i);
          else {
            if (o === 47)
              break;
            o = 47;
          }
          if (o === 47) {
            if (!(D === i - 1 || r === 1))
              if (D !== i - 1 && r === 2) {
                if (t.length < 2 || n !== 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
                  if (t.length > 2) {
                    if (s = t.lastIndexOf("/"), s !== t.length - 1) {
                      s < 0 ? (t = "", n = 0) : (t = t.slice(0, s), n = t.length - 1 - t.lastIndexOf("/")), D = i, r = 0;
                      continue;
                    }
                  } else if (t.length > 0) {
                    t = "", n = 0, D = i, r = 0;
                    continue;
                  }
                }
                e && (t = t.length > 0 ? t + "/.." : "..", n = 2);
              } else
                t.length > 0 ? t += "/" + u.slice(D + 1, i) : t = u.slice(D + 1, i), n = i - D - 1;
            D = i, r = 0;
          } else
            o === 46 && r > -1 ? r++ : r = -1;
        }
        return t;
      }
      function _(u) {
        if (typeof u != "string")
          throw new TypeError("Path must be a string. Received " + JSON.stringify(u));
      }
      const ee = { cwd: te };
      function te() {
        return "/";
      }
      function Y(u) {
        return u !== null && typeof u == "object" && u.href && u.origin;
      }
      function ne(u) {
        if (typeof u == "string")
          u = new URL(u);
        else if (!Y(u)) {
          const e = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + u + "`");
          throw e.code = "ERR_INVALID_ARG_TYPE", e;
        }
        if (u.protocol !== "file:") {
          const e = new TypeError("The URL must be of scheme file");
          throw e.code = "ERR_INVALID_URL_SCHEME", e;
        }
        return De(u);
      }
      function De(u) {
        if (u.hostname !== "") {
          const n = new TypeError('File URL host must be "localhost" or empty on darwin');
          throw n.code = "ERR_INVALID_FILE_URL_HOST", n;
        }
        const e = u.pathname;
        let t = -1;
        for (; ++t < e.length; )
          if (e.charCodeAt(t) === 37 && e.charCodeAt(t + 1) === 50) {
            const n = e.charCodeAt(t + 2);
            if (n === 70 || n === 102) {
              const D = new TypeError("File URL path must not include encoded / characters");
              throw D.code = "ERR_INVALID_FILE_URL_PATH", D;
            }
          }
        return decodeURIComponent(e);
      }
      const G = ["history", "path", "basename", "stem", "extname", "dirname"];
      class re {
        constructor(e) {
          let t;
          e ? typeof e == "string" || Fu(e) ? t = { value: e } : Y(e) ? t = { path: e } : t = e : t = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = ee.cwd(), this.value, this.stored, this.result, this.map;
          let n = -1;
          for (; ++n < G.length; ) {
            const r = G[n];
            r in t && t[r] !== void 0 && (this[r] = r === "history" ? [...t[r]] : t[r]);
          }
          let D;
          for (D in t)
            G.includes(D) || (this[D] = t[D]);
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          Y(e) && (e = ne(e)), Z(e, "path"), this.path !== e && this.history.push(e);
        }
        get dirname() {
          return typeof this.path == "string" ? N.dirname(this.path) : void 0;
        }
        set dirname(e) {
          yu(this.basename, "dirname"), this.path = N.join(e || "", this.basename);
        }
        get basename() {
          return typeof this.path == "string" ? N.basename(this.path) : void 0;
        }
        set basename(e) {
          Z(e, "basename"), H(e, "basename"), this.path = N.join(this.dirname || "", e);
        }
        get extname() {
          return typeof this.path == "string" ? N.extname(this.path) : void 0;
        }
        set extname(e) {
          if (H(e, "extname"), yu(this.dirname, "extname"), e) {
            if (e.charCodeAt(0) !== 46)
              throw new Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw new Error("`extname` cannot contain multiple dots");
          }
          this.path = N.join(this.dirname, this.stem + (e || ""));
        }
        get stem() {
          return typeof this.path == "string" ? N.basename(this.path, this.extname) : void 0;
        }
        set stem(e) {
          Z(e, "stem"), H(e, "stem"), this.path = N.join(this.dirname || "", e + (this.extname || ""));
        }
        toString(e) {
          return (this.value || "").toString(e);
        }
        message(e, t, n) {
          const D = new k(e, t, n);
          return this.path && (D.name = this.path + ":" + D.name, D.file = this.path), D.fatal = false, this.messages.push(D), D;
        }
        info(e, t, n) {
          const D = this.message(e, t, n);
          return D.fatal = null, D;
        }
        fail(e, t, n) {
          const D = this.message(e, t, n);
          throw D.fatal = true, D;
        }
      }
      function H(u, e) {
        if (u && u.includes(N.sep))
          throw new Error("`" + e + "` cannot be a path: did not expect `" + N.sep + "`");
      }
      function Z(u, e) {
        if (!u)
          throw new Error("`" + e + "` cannot be empty");
      }
      function yu(u, e) {
        if (!u)
          throw new Error("Setting `" + e + "` requires `path` to be set too");
      }
      const ie = gu().freeze(), du = {}.hasOwnProperty;
      function gu() {
        const u = qu(), e = [];
        let t = {}, n, D = -1;
        return r.data = i, r.Parser = void 0, r.Compiler = void 0, r.freeze = o, r.attachers = e, r.use = s, r.parse = F, r.stringify = C, r.run = p, r.runSync = g, r.process = P, r.processSync = T, r;
        function r() {
          const l = gu();
          let E = -1;
          for (; ++E < e.length; )
            l.use(...e[E]);
          return l.data(hu(true, {}, t)), l;
        }
        function i(l, E) {
          return typeof l == "string" ? arguments.length === 2 ? (Q("data", n), t[l] = E, r) : du.call(t, l) && t[l] || null : l ? (Q("data", n), t = l, r) : t;
        }
        function o() {
          if (n)
            return r;
          for (; ++D < e.length; ) {
            const [l, ...E] = e[D];
            if (E[0] === false)
              continue;
            E[0] === true && (E[1] = void 0);
            const c = l.call(r, ...E);
            typeof c == "function" && u.use(c);
          }
          return n = true, D = Number.POSITIVE_INFINITY, r;
        }
        function s(l, ...E) {
          let c;
          if (Q("use", n), l != null)
            if (typeof l == "function")
              m(l, ...E);
            else if (typeof l == "object")
              Array.isArray(l) ? S(l) : w(l);
            else
              throw new TypeError("Expected usable value, not `" + l + "`");
          return c && (t.settings = Object.assign(t.settings || {}, c)), r;
          function y(a) {
            if (typeof a == "function")
              m(a);
            else if (typeof a == "object")
              if (Array.isArray(a)) {
                const [f, ...h] = a;
                m(f, ...h);
              } else
                w(a);
            else
              throw new TypeError("Expected usable value, not `" + a + "`");
          }
          function w(a) {
            S(a.plugins), a.settings && (c = Object.assign(c || {}, a.settings));
          }
          function S(a) {
            let f = -1;
            if (a != null)
              if (Array.isArray(a))
                for (; ++f < a.length; ) {
                  const h = a[f];
                  y(h);
                }
              else
                throw new TypeError("Expected a list of plugins, not `" + a + "`");
          }
          function m(a, f) {
            let h = -1, b;
            for (; ++h < e.length; )
              if (e[h][0] === a) {
                b = e[h];
                break;
              }
            b ? (K(b[1]) && K(f) && (f = hu(true, b[1], f)), b[1] = f) : e.push([...arguments]);
          }
        }
        function F(l) {
          r.freeze();
          const E = O(l), c = r.Parser;
          return J("parse", c), vu(c, "parse") ? new c(String(E), E).parse() : c(String(E), E);
        }
        function C(l, E) {
          r.freeze();
          const c = O(E), y = r.Compiler;
          return X("stringify", y), wu(l), vu(y, "compile") ? new y(l, c).compile() : y(l, c);
        }
        function p(l, E, c) {
          if (wu(l), r.freeze(), !c && typeof E == "function" && (c = E, E = void 0), !c)
            return new Promise(y);
          y(null, c);
          function y(w, S) {
            u.run(l, O(E), m);
            function m(a, f, h) {
              f = f || l, a ? S(a) : w ? w(f) : c(null, f, h);
            }
          }
        }
        function g(l, E) {
          let c, y;
          return r.run(l, E, w), mu("runSync", "run", y), c;
          function w(S, m) {
            su(S), c = m, y = true;
          }
        }
        function P(l, E) {
          if (r.freeze(), J("process", r.Parser), X("process", r.Compiler), !E)
            return new Promise(c);
          c(null, E);
          function c(y, w) {
            const S = O(l);
            r.run(r.parse(S), S, (a, f, h) => {
              if (a || !f || !h)
                m(a);
              else {
                const b = r.stringify(f, h);
                b == null || (Fe(b) ? h.value = b : h.result = b), m(a, h);
              }
            });
            function m(a, f) {
              a || !f ? w(a) : y ? y(f) : E(null, f);
            }
          }
        }
        function T(l) {
          let E;
          r.freeze(), J("processSync", r.Parser), X("processSync", r.Compiler);
          const c = O(l);
          return r.process(c, y), mu("processSync", "process", E), c;
          function y(w) {
            E = true, su(w);
          }
        }
      }
      function vu(u, e) {
        return typeof u == "function" && u.prototype && (oe(u.prototype) || e in u.prototype);
      }
      function oe(u) {
        let e;
        for (e in u)
          if (du.call(u, e))
            return true;
        return false;
      }
      function J(u, e) {
        if (typeof e != "function")
          throw new TypeError("Cannot `" + u + "` without `Parser`");
      }
      function X(u, e) {
        if (typeof e != "function")
          throw new TypeError("Cannot `" + u + "` without `Compiler`");
      }
      function Q(u, e) {
        if (e)
          throw new Error("Cannot call `" + u + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
      }
      function wu(u) {
        if (!K(u) || typeof u.type != "string")
          throw new TypeError("Expected node, got `" + u + "`");
      }
      function mu(u, e, t) {
        if (!t)
          throw new Error("`" + u + "` finished async. Use `" + e + "` instead");
      }
      function O(u) {
        return se(u) ? u : new re(u);
      }
      function se(u) {
        return Boolean(u && typeof u == "object" && "message" in u && "messages" in u);
      }
      function Fe(u) {
        return typeof u == "string" || Fu(u);
      }
      function le(u) {
        const e = class extends u {
        }, t = e.prototype;
        let n;
        for (n in t) {
          const D = t[n];
          D && typeof D == "object" && (t[n] = "concat" in D ? D.concat() : Object.assign({}, D));
        }
        return e;
      }
      var B = bu;
      function bu(u, e) {
        var t = e || "", n, D, r;
        if (!u || !("length" in u) && !u.type)
          throw new Error("Expected node, not `" + u + "`");
        if (typeof u.value == "string")
          return u.value;
        if (r = "length" in u ? u : u.children, D = r.length, D === 1 && "value" in r[0])
          return r[0].value;
        for (n = []; D--; )
          n[D] = bu(r[D], t);
        return n.join(t);
      }
      var ae = ce, Ee = {}.hasOwnProperty;
      function ce(u, e, t) {
        var n = -1, D;
        if (!u)
          throw new Error("Iterate requires that |this| not be " + u);
        if (!Ee.call(u, "length"))
          throw new Error("Iterate requires that |this| has a `length`");
        if (typeof e != "function")
          throw new Error("`callback` must be a function");
        for (; ++n < u.length; )
          n in u && (D = e.call(t, u[n], n, u), typeof D == "number" && (D < 0 && (n = 0), n = D - 1));
      }
      var fe = ae, Ce = Ae;
      function Ae(u) {
        return he(pe(u));
      }
      function he(u) {
        return e;
        function e(t) {
          var n = t && t.children;
          if (!n)
            throw new Error("Missing children in `parent` for `modifier`");
          fe(n, u, t);
        }
      }
      function pe(u) {
        return e;
        function e(t, n) {
          return u(t, n, this);
        }
      }
      var v = Ce, Be = v(function(u, e, t) {
        var n, D;
        if (!(u.type !== "SymbolNode" && u.type !== "PunctuationNode" || B(u) !== "&") && (n = t.children, D = n[e + 1], !(e > 0 && n[e - 1].type === "WordNode" || !(D && D.type === "WordNode"))))
          return n.splice(e, 1), D.children.unshift(u), D.position && u.position && (D.position.start = u.position.start), e - 1;
      }), ye = v(function(u, e, t) {
        var n, D, r;
        if (e > 0 && (u.type === "SymbolNode" || u.type === "PunctuationNode") && B(u) === "-" && (n = t.children, D = n[e - 1], r = n[e + 1], (!r || r.type !== "WordNode") && D && D.type === "WordNode"))
          return n.splice(e, 1), D.children.push(u), D.position && u.position && (D.position.end = u.position.end), e;
      }), de = /^([!"').?\u00BB\u0F3B\u0F3D\u169C\u2019\u201D\u2026\u203A\u203D\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21\u2E23\u2E25\u2E27\u2E29\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63\]}])\1*$/, ge = /^[ \t]*((\r?\n|\r)[\t ]*)+$/, ve = /^[ \t]*((\r?\n|\r)[\t ]*){2,}$/, ku = /^([!.?\u2026\u203D]+)$/, we = /^([&'\-.:=?@\u00AD\u00B7\u2010\u2011\u2019\u2027]|_+)$/, me = /^(?:[\d\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9])+$/, be = /^\d/, ke = /^(?:[a-z\u00B5\u00DF-\u00F6\u00F8-\u00FF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C3\uA7C8\uA7CA\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43])/, Se = /[\uD800-\uDFFF]/, Ne = /[!"'-),-/:;?[-\]_{}\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u201F\u2022-\u2027\u2032-\u203A\u203C-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, Pe = /[\dA-Za-z\u00AA\u00B2\u00B3\u00B5\u00B9\u00BA\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u17F0-\u17F9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1AC0\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u20D0-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA827\uA82C\uA830-\uA835\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE6\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC52-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF3B]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]|\uDB40[\uDD00-\uDDEF]/, Te = /[\t-\r \u0085\u00A0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, ze = v(function(u, e, t) {
        var n, D, r, i, o, s, F;
        if (e > 0 && (u.type === "SymbolNode" || u.type === "PunctuationNode") && (n = t.children, r = n[e - 1], r && r.type === "WordNode")) {
          for (o = e - 1, s = [], F = []; n[++o]; )
            if (D = n[o], D.type === "WordNode")
              s = s.concat(F, D.children), F = [];
            else if ((D.type === "SymbolNode" || D.type === "PunctuationNode") && we.test(B(D)))
              F.push(D);
            else
              break;
          if (s.length > 0)
            return F.length > 0 && (o -= F.length), n.splice(e, o - e), r.children = r.children.concat(s), i = s[s.length - 1], r.position && i.position && (r.position.end = i.position.end), e;
        }
      }), Ie = "/", _e = v(function(u, e, t) {
        var n = t.children, D, r, i, o, s, F, C;
        if (D = n[e - 1], r = n[e + 1], D && D.type === "WordNode" && (u.type === "SymbolNode" || u.type === "PunctuationNode") && B(u) === Ie && (i = B(D), F = u, s = [u], C = 1, r && r.type === "WordNode" && (o = B(r), F = r, s = s.concat(r.children), C++), i.length < 3 && (!o || o.length < 3)))
          return D.children = D.children.concat(s), n.splice(e, C), D.position && F.position && (D.position.end = F.position.end), e;
      }), Oe = v(function(u, e, t) {
        var n, D, r, i, o, s, F;
        if (e > 0 && B(u) === "." && (n = t.children, D = n[e - 1], r = D.children, D.type === "WordNode" && r && r.length !== 1 && r.length % 2 != 0)) {
          for (i = r.length, s = true; r[--i]; )
            if (o = r[i], F = B(o), i % 2 == 0) {
              if (F.length > 1)
                return;
              me.test(F) || (s = false);
            } else if (F !== ".") {
              if (i < r.length - 2)
                break;
              return;
            }
          if (!s)
            return n.splice(e, 1), r.push(u), D.position && u.position && (D.position.end = u.position.end), e;
        }
      }), We = v(function(u, e, t) {
        var n = t.children, D;
        if (u.type === "WordNode" && (D = n[e + 1], D && D.type === "WordNode"))
          return n.splice(e + 1, 1), u.children = u.children.concat(D.children), D.position && u.position && (u.position.end = D.position.end), e;
      }), xe = Re;
      function Re(u) {
        return e;
        function e(t) {
          var n = -1, D = t && t.children;
          if (!D)
            throw new Error("Missing children in `parent` for `visitor`");
          for (; ++n in D; )
            u(D[n], n, t);
        }
      }
      var uu = xe, eu = uu(function(u, e, t) {
        var n = t.children;
        !u.position || (e < 1 && (!t.position || !t.position.start) && (Su(t), t.position.start = u.position.start), e === n.length - 1 && (!t.position || !t.position.end) && (Su(t), t.position.end = u.position.end));
      });
      function Su(u) {
        u.position || (u.position = {});
      }
      var je = v(function(u, e, t) {
        for (var n = u.children, D = -1, r, i; n[++D]; )
          if (n[D].type === "WordNode")
            return;
        if (r = t.children[e - 1], r)
          return r.children = r.children.concat(n), t.children.splice(e, 1), r.position && u.position && (r.position.end = u.position.end), e;
        i = t.children[e + 1], i && (i.children = n.concat(i.children), i.position && u.position && (i.position.start = u.position.start), t.children.splice(e, 1));
      }), Le = v(function(u, e, t) {
        var n = u.children, D, r, i;
        if (n && n.length > 0 && e > 0 && (D = n[0], r = n[1], i = t.children[e - 1], (D.type === "SymbolNode" || D.type === "PunctuationNode") && de.test(B(D))))
          return i.children.push(n.shift()), D.position && i.position && (i.position.end = D.position.end), r && r.position && u.position && (u.position.start = r.position.start), e - 1;
      }), Ue = v(function(u, e, t) {
        var n = u.children, D, r, i, o;
        if (n && n.length > 0 && e > 0)
          for (D = -1; n[++D]; ) {
            if (r = n[D], r.type === "WordNode")
              return ke.test(B(r)) ? (i = t.children, o = i[e - 1], o.children = o.children.concat(n), i.splice(e, 1), o.position && u.position && (o.position.end = u.position.end), e) : void 0;
            if (r.type === "SymbolNode" || r.type === "PunctuationNode")
              return;
          }
      }), Me = v(function(u, e, t) {
        var n = u.children, D = t.children, r = D[e - 1], i = n[0];
        if (r && i && i.type === "WordNode" && be.test(B(i)))
          return r.children = r.children.concat(n), D.splice(e, 1), r.position && u.position && (r.position.end = u.position.end), e;
      }), $e = new RegExp("^([0-9]{1,3}|[a-z]|al|ca|cap|cca|cent|cf|cit|con|cp|cwt|ead|etc|ff|fl|ibid|id|nem|op|pro|seq|sic|stat|tem|viz)$"), Ve = v(function(u, e, t) {
        var n = u.children, D, r, i;
        if (n && n.length > 1 && (D = n[n.length - 1], D && B(D) === "." && (r = n[n.length - 2], r && r.type === "WordNode" && $e.test(B(r).toLowerCase()) && (r.children.push(D), n.pop(), D.position && r.position && (r.position.end = D.position.end), i = t.children[e + 1], i))))
          return u.children = n.concat(i.children), t.children.splice(e + 1, 1), i.position && u.position && (u.position.end = i.position.end), e - 1;
      }), Ke = v(function(u, e, t) {
        var n = u.children, D, r, i, o;
        if (!(!n || n.length === 0 || e < 1))
          for (r = -1; n[++r]; ) {
            if (D = n[r], D.type === "WordNode")
              return;
            if (D.type === "SymbolNode" || D.type === "PunctuationNode")
              return i = B(D), i !== "," && i !== ";" ? void 0 : (o = t.children[e - 1], o.children = o.children.concat(n), o.position && u.position && (o.position.end = u.position.end), t.children.splice(e, 1), e);
          }
      }), qe = uu(function(u) {
        for (var e = u.children, t = e.length, n = false, D, r, i, o; e[--t]; ) {
          if (D = e[t], D.type !== "SymbolNode" && D.type !== "PunctuationNode") {
            D.type === "WordNode" && (n = true);
            continue;
          }
          if (!!ku.test(B(D))) {
            if (!n) {
              n = true;
              continue;
            }
            if (B(D) === ".")
              if (r = e[t - 1], i = e[t + 1], r && r.type === "WordNode") {
                if (o = e[t + 2], i && o && i.type === "WhiteSpaceNode" && B(o) === ".")
                  continue;
                e.splice(t, 1), r.children.push(D), D.position && r.position && (r.position.end = D.position.end), t--;
              } else
                i && i.type === "WordNode" && (e.splice(t, 1), i.children.unshift(D), D.position && i.position && (i.position.start = D.position.start));
          }
        }
      }), Nu = uu(function(u, e, t) {
        var n = u.children, D;
        n && n.length > 0 && n[0].type === "WhiteSpaceNode" && (t.children.splice(e, 0, n.shift()), D = n[0], D && D.position && u.position && (u.position.start = D.position.start));
      }), Pu = v(function(u, e, t) {
        var n = u.children, D;
        if (n && n.length > 0 && n[n.length - 1].type === "WhiteSpaceNode")
          return t.children.splice(e + 1, 0, u.children.pop()), D = n[n.length - 1], D && D.position && u.position && (u.position.end = D.position.end), e;
      }), Ye = v(function(u, e, t) {
        var n, D, r, i, o, s, F;
        if (u.type === "SentenceNode") {
          for (n = u.children, D = 0; ++D < n.length - 1; )
            if (F = n[D], !(F.type !== "WhiteSpaceNode" || !ve.test(B(F))))
              return u.children = n.slice(0, D), s = { type: "SentenceNode", children: n.slice(D + 1) }, r = n[D - 1], i = n[D + 1], t.children.splice(e + 1, 0, F, s), u.position && r.position && i.position && (o = u.position.end, u.position.end = r.position.end, s.position = { start: i.position.start, end: o }), e + 1;
        }
      }), Tu = v(function(u, e, t) {
        if ("children" in u && u.children.length === 0)
          return t.children.splice(e, 1), e;
      });
      function Ge(u, e) {
        return t;
        function t(n) {
          for (var D = [], r = n.children, i = n.type, o = -1, s = r.length - 1, F = 0, C, p, g; ++o < r.length; )
            (o === s || r[o].type === u && e.test(B(r[o]))) && (C = r[F], p = r[o], g = { type: i, children: r.slice(F, o + 1) }, C.position && p.position && (g.position = { start: C.position.start, end: p.position.end }), D.push(g), F = o + 1);
          return D;
        }
      }
      function tu(u) {
        var e = u.type, t = u.tokenizer, n = u.delimiter, D = n && Ge(u.delimiterType, n);
        return r;
        function r(i) {
          var o = this[t](i);
          return { type: e, children: D ? D(o) : o };
        }
      }
      class d {
        constructor(e, t) {
          var n = t || e;
          this.doc = n ? String(n) : null;
        }
        run(e, t) {
          var n = e + "Plugins", D = this[n], r = -1;
          if (D)
            for (; D[++r]; )
              D[r](t);
          return t;
        }
        parse(e) {
          return this.tokenizeRoot(e || this.doc);
        }
        tokenize(e) {
          var t = this, n = [], D = 0, r = 0, i = 1, o = 1, s, F, C, p, g, P;
          if (e == null ? e = "" : e instanceof String && (e = e.toString()), typeof e != "string") {
            if ("length" in e && (!e[0] || e[0].type))
              return e;
            throw new Error("Illegal invocation: '" + e + "' is not a valid argument for 'ParseLatin'");
          }
          if (!e)
            return n;
          for (P = this.position ? l : E, C = "", F = ""; D < e.length; )
            s = e.charAt(D), Te.test(s) ? g = "WhiteSpace" : Ne.test(s) ? g = "Punctuation" : Pe.test(s) ? g = "Word" : g = "Symbol", T(), C = s, s = "", p = g, g = null, D++;
          return T(), n;
          function T() {
            p === g && (p === "Word" || p === "WhiteSpace" || s === C || Se.test(s)) ? F += s : (F && t["tokenize" + p](F, P), F = s);
          }
          function l(a) {
            var f = y();
            return w(a), h;
            function h(...b) {
              return f(c(...b));
            }
          }
          function E() {
            return c;
          }
          function c(a, f) {
            return f ? f.children.push(a) : n.push(a), a;
          }
          function y() {
            var a = m();
            function f(h) {
              return h.position = new S(a), h;
            }
            return f;
          }
          function w(a) {
            var f = -1, h = -1;
            for (r += a.length; ++f < a.length; )
              a.charAt(f) === `
` && (h = f, i++);
            h < 0 ? o += a.length : o = a.length - h;
          }
          function S(a) {
            this.start = a, this.end = m();
          }
          function m() {
            return { line: i, column: o, offset: r };
          }
        }
      }
      d.prototype.position = true, d.prototype.tokenizeSymbol = W("Symbol"), d.prototype.tokenizeWhiteSpace = W("WhiteSpace"), d.prototype.tokenizePunctuation = W("Punctuation"), d.prototype.tokenizeSource = W("Source"), d.prototype.tokenizeText = W("Text"), d.prototype.use = zu(function(u, e, t) {
        u[e] = u[e].concat(t);
      }), d.prototype.useFirst = zu(function(u, e, t) {
        u[e] = t.concat(u[e]);
      }), j(d, "tokenizeWord", function(u, e) {
        var t = (e || Iu)(""), n = { type: "WordNode", children: [] };
        return this.tokenizeText(u, e, n), t(n);
      }), j(d, "tokenizeSentence", tu({ type: "SentenceNode", tokenizer: "tokenize" })), j(d, "tokenizeParagraph", tu({ type: "ParagraphNode", delimiter: ku, delimiterType: "PunctuationNode", tokenizer: "tokenizeSentence" })), j(d, "tokenizeRoot", tu({ type: "RootNode", delimiter: ge, delimiterType: "WhiteSpaceNode", tokenizer: "tokenizeParagraph" })), d.prototype.use("tokenizeSentence", [Be, ye, ze, _e, Oe, We, eu]), d.prototype.use("tokenizeParagraph", [je, Le, Ue, Me, Ve, Ke, qe, Nu, Pu, Ye, Tu, eu]), d.prototype.use("tokenizeRoot", [Nu, Pu, Tu, eu]);
      function W(u) {
        return u += "Node", e;
        function e(t, n, D) {
          return t == null && (t = ""), (n || Iu)(t)({ type: u, value: String(t) }, D);
        }
      }
      function j(u, e, t) {
        u.prototype[e] = function(...n) {
          return this.run(e, t.apply(this, n));
        };
      }
      function zu(u) {
        return e;
        function e(t, n) {
          var D;
          if (!(t in this))
            throw new Error("Illegal Invocation: Unsupported `key` for `use(key, plugins)`. Make sure `key` is a supported function");
          !n || (D = t + "Plugins", n = typeof n == "function" ? [n] : n.concat(), this[D] || (this[D] = []), u(this, D, n));
        }
      }
      function He(u, e) {
        return e && e.children.push(u), u;
      }
      function Iu() {
        return He;
      }
      function Ze() {
        Object.assign(this, { Parser: le(d) });
      }
      function _u(u, e = "") {
        let t = -1;
        if (!u || !Array.isArray(u) && !u.type)
          throw new Error("Expected node, not `" + u + "`");
        if (typeof u.value == "string")
          return u.value;
        const n = (Array.isArray(u) ? u : u.children) || [];
        if (n.length === 1 && "value" in n[0])
          return n[0].value;
        const D = [];
        for (; ++t < n.length; )
          D[t] = _u(n[t], e);
        return D.join(e);
      }
      function Je() {
        Object.assign(this, { Compiler: Xe });
      }
      function Xe(u) {
        return _u(u);
      }
      const Qe = ie().use(Ze).use(Je).freeze(), Ou = function(u) {
        if (u == null)
          return nt;
        if (typeof u == "string")
          return tt(u);
        if (typeof u == "object")
          return Array.isArray(u) ? ut(u) : et(u);
        if (typeof u == "function")
          return L(u);
        throw new Error("Expected function, string, or object as test");
      };
      function ut(u) {
        const e = [];
        let t = -1;
        for (; ++t < u.length; )
          e[t] = Ou(u[t]);
        return L(n);
        function n(...D) {
          let r = -1;
          for (; ++r < e.length; )
            if (e[r].call(this, ...D))
              return true;
          return false;
        }
      }
      function et(u) {
        return L(e);
        function e(t) {
          let n;
          for (n in u)
            if (t[n] !== u[n])
              return false;
          return true;
        }
      }
      function tt(u) {
        return L(e);
        function e(t) {
          return t && t.type === u;
        }
      }
      function L(u) {
        return e;
        function e(...t) {
          return Boolean(u.call(this, ...t));
        }
      }
      function nt() {
        return true;
      }
      function Dt(u) {
        return u;
      }
      const rt = true, it = "skip", Wu = false, ot = function(u, e, t, n) {
        typeof e == "function" && typeof t != "function" && (n = t, t = e, e = null);
        const D = Ou(e), r = n ? -1 : 1;
        i(u, null, [])();
        function i(o, s, F) {
          const C = typeof o == "object" && o !== null ? o : {};
          let p;
          return typeof C.type == "string" && (p = typeof C.tagName == "string" ? C.tagName : typeof C.name == "string" ? C.name : void 0, Object.defineProperty(g, "name", { value: "node (" + Dt(C.type + (p ? "<" + p + ">" : "")) + ")" })), g;
          function g() {
            let P = [], T, l, E;
            if ((!e || D(o, s, F[F.length - 1] || null)) && (P = st(t(o, F)), P[0] === Wu))
              return P;
            if (o.children && P[0] !== it)
              for (l = (n ? o.children.length : -1) + r, E = F.concat(o); l > -1 && l < o.children.length; ) {
                if (T = i(o.children[l], l, E)(), T[0] === Wu)
                  return T;
                l = typeof T[1] == "number" ? T[1] : l + r;
              }
            return P;
          }
        }
      };
      function st(u) {
        return Array.isArray(u) ? u : typeof u == "number" ? [rt, u] : [u];
      }
      const Ft = function(u, e, t, n) {
        typeof e == "function" && typeof t != "function" && (n = t, t = e, e = null), ot(u, e, D, n);
        function D(r, i) {
          const o = i[i.length - 1];
          return t(r, o ? o.children.indexOf(r) : null, o);
        }
      }, lt = "/";
      let U = false;
      function at(u, e, t) {
        if (!(u.type !== "PunctuationNode" && u.type !== "SymbolNode") && u.value === lt) {
          if (e > 0) {
            const n = t.children[e - 1];
            if ((n == null ? void 0 : n.value) && n.value === "<")
              return;
          }
          U = !U, u.value = "";
        }
      }
      function xu(u, e, t, n) {
        return u.type === "WhiteSpaceNode" || (u.type === "PunctuationNode" && at(u, t, n), !U && (u == null ? void 0 : u.value) && (u.value = e(u.value)), !(u == null ? void 0 : u.children)) || u.children.forEach((D, r) => {
          xu(D, e, r, u);
        }), u;
      }
      function Et(u) {
        return U = false, (e) => {
          Ft(e, "SentenceNode", (t, n, D) => {
            xu(t, u, n, D);
          });
        };
      }
      function ct(u) {
        const e = /[\^\$\.\*\+\?\|\\\/\[\]\{\}\=\!\:\-\,\(\)]/gi, t = u.match(e);
        if (t)
          for (let n of t)
            u = u.replace(new RegExp(`\\${n}`, "gi"), `\\${n}`);
        return u;
      }
      function M(u, e, t) {
        return e = ct(e), u.replace(new RegExp(e, "ig"), t);
      }
      class nu {
        constructor(e, t = "x") {
          V(this, "type"), this.table = e, this.hemze = t;
        }
        orderedTable() {
          return this.table.sort((e, t) => {
            var n, D;
            return ((n = t[this.type]) == null ? void 0 : n.length) - ((D = e[this.type]) == null ? void 0 : D.length);
          });
        }
        getMap() {
          const e = {};
          return this.orderedTable().forEach((t) => e[t[this.type]] = t.ug), e;
        }
        fromUg(e) {
          return Object.entries(this.getMap()).forEach(([t, n]) => e = M(e, n, t)), e;
        }
        toUg(e) {
          return Object.entries(this.getMap()).forEach(([n, D]) => e = M(e, n, D)), this.table.filter((n) => n.volwes).map((n) => n.ug).includes(e[0]) ? this.hemze + e : e;
        }
        toUgText(e) {
          return Qe().use(Et, (t) => this.toUg(t)).processSync(e).value.toString();
        }
      }
      class Ru extends nu {
        constructor() {
          super(...arguments);
          V(this, "type", "khan");
        }
        fromUg(e) {
          e = M(e, "\u0646\u06AF", "\u0646h\u06AF");
          let t = super.fromUg(e);
          t = M(t, "nh", "n");
          const n = this.table.filter((D) => D.ug === this.hemze)[0].khan;
          return t && t[0] === n && (t = t.slice(1, t.length)), t;
        }
      }
      class ju extends nu {
        constructor() {
          super(...arguments);
          V(this, "type", "uly");
        }
      }
      const Du = new Ru(x, $);
      function ft(u) {
        return Du.fromUg(u);
      }
      function Ct(u) {
        return Du.toUg(u);
      }
      function At(u) {
        return Du.toUgText(u);
      }
      const ru = new ju(x, $);
      function ht(u) {
        return ru.fromUg(u);
      }
      function pt(u) {
        return ru.toUg(u);
      }
      function Bt(u) {
        return ru.toUgText(u);
      }
      var yt = Object.defineProperty, dt = (u, e, t) => e in u ? yt(u, e, { enumerable: true, configurable: true, writable: true, value: t }) : u[e] = t, gt = (u, e, t) => (dt(u, typeof e != "symbol" ? e + "" : e, t), t);
      const vt = String.fromCharCode(0), wt = [{ uchar: "\u0626", volwes: false, uly: vt, khan: "?" }, { uchar: "\u0627", volwes: true, uly: "a", khan: "a" }, { uchar: "\u06D5", volwes: true, uly: "e", khan: "e" }, { uchar: "\u06D0", volwes: true, uly: "\xEB", khan: "eh" }, { uchar: "\u0649", volwes: true, uly: "i", khan: "i" }, { uchar: "\u0648", volwes: true, uly: "o", khan: "o" }, { uchar: "\u06C7", volwes: true, uly: "u", khan: "u" }, { uchar: "\u06C6", volwes: true, uly: "\xF6", khan: "c" }, { uchar: "\u06C8", volwes: true, uly: "\xFC", khan: "v" }, { uchar: "\u0628", volwes: false, uly: "b", khan: "b" }, { uchar: "\u067E", volwes: false, uly: "p", khan: "p" }, { uchar: "\u062A", volwes: false, uly: "t", khan: "t" }, { uchar: "\u062C", volwes: false, uly: "j", khan: "j" }, { uchar: "\u0686", volwes: false, uly: "ch", khan: "ch" }, { uchar: "\u062E", volwes: false, uly: "x", khan: "kh" }, { uchar: "\u062F", volwes: false, uly: "d", khan: "d" }, { uchar: "\u0631", volwes: false, uly: "r", khan: "r" }, { uchar: "\u0632", volwes: false, uly: "z", khan: "z" }, { uchar: "\u0698", volwes: false, uly: "zh", khan: "zh" }, { uchar: "\u0633", volwes: false, uly: "s", khan: "s" }, { uchar: "\u0634", volwes: false, uly: "sh", khan: "sh" }, { uchar: "\u063A", volwes: false, uly: "gh", khan: "gh" }, { uchar: "\u0642", volwes: false, uly: "q", khan: "q" }, { uchar: "\u0641", volwes: false, uly: "f", khan: "f" }, { uchar: "\u0643", volwes: false, uly: "k", khan: "k" }, { uchar: "\u06AF", volwes: false, uly: "g", khan: "g" }, { uchar: "\u06AD", volwes: false, uly: "ng", khan: "ng" }, { uchar: "\u0644", volwes: false, uly: "l", khan: "l" }, { uchar: "\u0645", volwes: false, uly: "m", khan: "m" }, { uchar: "\u0646", volwes: false, uly: "n", khan: "n" }, { uchar: "\u06BE", volwes: false, uly: "h", khan: "x" }, { uchar: "\u06CB", volwes: false, uly: "w", khan: "w" }, { uchar: "\u064A", volwes: false, uly: "y", khan: "y" }];
      class Lu {
        constructor() {
          gt(this, "_table"), this._table = wt;
        }
        getTable() {
          return this._table;
        }
        tokenize(e) {
          const t = this._table.filter((n) => n.volwes).map((n) => n.uchar);
          return e.split("").map((n) => t.indexOf(n) !== -1 ? 1 : 0).join("");
        }
        tokenToGroup(e) {
          return e.replaceAll("1", "1#").split("#");
        }
        groupToPositional(e) {
          return e.reverse().map((t, n) => {
            if (n === 0 || n === e.length - 1)
              return t;
            switch (t.replace("1", "").length) {
              case 1:
                return "#" + t;
              case 2:
                return [t[0], "#", t.slice(1, 3)].join("");
              case 3:
                return [t[0], "#", t.slice(1, 3), t.slice(-1)].join("");
              case 4:
                return [t[0], "#", t.slice(1, 3), "#", t.slice(-1)].join("");
              case 5:
                return [t[0], "#", t.slice(1, 4), "#", t.slice(-1)].join("");
              default:
                return t;
            }
          }).reverse();
        }
        positinalGroupToWord(e, t) {
          const n = [];
          let D = 0;
          return e.join("").split("").forEach((r, i) => {
            if (r === "#") {
              D += 1, n.push("#");
              return;
            }
            n.push(t[i - D]);
          }), n.join("").split("#");
        }
        syllable(e) {
          const t = this.tokenize(e);
          let n = this.tokenToGroup(t);
          const D = this.groupToPositional(n);
          return this.positinalGroupToWord(D, e);
        }
      }
      function mt(u) {
        return new Lu().syllable(u);
      }
      A.BaseConverter = nu, A.HEMZE = $, A.KhanConverter = Ru, A.READABILITY_MARK = Mu, A.SEPARATE_MARK = iu, A.SYLLABIFY_MARK = Uu, A.TRANSLATIONAL_MARK = I, A.UlyConverter = ju, A.isVolwes = $u, A.khan2ug = Ct, A.khanText2ug = At, A.syllableUg = mt, A.table = x, A.ug2khan = ft, A.ug2uly = ht, A.ugSyllable = Lu, A.uly2ug = pt, A.ulyText2ug = Bt, A.volwes = ou, Object.defineProperty(A, "__esModule", { value: true }), A[Symbol.toStringTag] = "Module";
    });
  }
});

// node_modules/markdown-it-emoji/lib/data/full.json
var require_full = __commonJS({
  "node_modules/markdown-it-emoji/lib/data/full.json"(exports2, module2) {
    module2.exports = {
      "100": "\u{1F4AF}",
      "1234": "\u{1F522}",
      grinning: "\u{1F600}",
      smiley: "\u{1F603}",
      smile: "\u{1F604}",
      grin: "\u{1F601}",
      laughing: "\u{1F606}",
      satisfied: "\u{1F606}",
      sweat_smile: "\u{1F605}",
      rofl: "\u{1F923}",
      joy: "\u{1F602}",
      slightly_smiling_face: "\u{1F642}",
      upside_down_face: "\u{1F643}",
      wink: "\u{1F609}",
      blush: "\u{1F60A}",
      innocent: "\u{1F607}",
      smiling_face_with_three_hearts: "\u{1F970}",
      heart_eyes: "\u{1F60D}",
      star_struck: "\u{1F929}",
      kissing_heart: "\u{1F618}",
      kissing: "\u{1F617}",
      relaxed: "\u263A\uFE0F",
      kissing_closed_eyes: "\u{1F61A}",
      kissing_smiling_eyes: "\u{1F619}",
      smiling_face_with_tear: "\u{1F972}",
      yum: "\u{1F60B}",
      stuck_out_tongue: "\u{1F61B}",
      stuck_out_tongue_winking_eye: "\u{1F61C}",
      zany_face: "\u{1F92A}",
      stuck_out_tongue_closed_eyes: "\u{1F61D}",
      money_mouth_face: "\u{1F911}",
      hugs: "\u{1F917}",
      hand_over_mouth: "\u{1F92D}",
      shushing_face: "\u{1F92B}",
      thinking: "\u{1F914}",
      zipper_mouth_face: "\u{1F910}",
      raised_eyebrow: "\u{1F928}",
      neutral_face: "\u{1F610}",
      expressionless: "\u{1F611}",
      no_mouth: "\u{1F636}",
      smirk: "\u{1F60F}",
      unamused: "\u{1F612}",
      roll_eyes: "\u{1F644}",
      grimacing: "\u{1F62C}",
      lying_face: "\u{1F925}",
      relieved: "\u{1F60C}",
      pensive: "\u{1F614}",
      sleepy: "\u{1F62A}",
      drooling_face: "\u{1F924}",
      sleeping: "\u{1F634}",
      mask: "\u{1F637}",
      face_with_thermometer: "\u{1F912}",
      face_with_head_bandage: "\u{1F915}",
      nauseated_face: "\u{1F922}",
      vomiting_face: "\u{1F92E}",
      sneezing_face: "\u{1F927}",
      hot_face: "\u{1F975}",
      cold_face: "\u{1F976}",
      woozy_face: "\u{1F974}",
      dizzy_face: "\u{1F635}",
      exploding_head: "\u{1F92F}",
      cowboy_hat_face: "\u{1F920}",
      partying_face: "\u{1F973}",
      disguised_face: "\u{1F978}",
      sunglasses: "\u{1F60E}",
      nerd_face: "\u{1F913}",
      monocle_face: "\u{1F9D0}",
      confused: "\u{1F615}",
      worried: "\u{1F61F}",
      slightly_frowning_face: "\u{1F641}",
      frowning_face: "\u2639\uFE0F",
      open_mouth: "\u{1F62E}",
      hushed: "\u{1F62F}",
      astonished: "\u{1F632}",
      flushed: "\u{1F633}",
      pleading_face: "\u{1F97A}",
      frowning: "\u{1F626}",
      anguished: "\u{1F627}",
      fearful: "\u{1F628}",
      cold_sweat: "\u{1F630}",
      disappointed_relieved: "\u{1F625}",
      cry: "\u{1F622}",
      sob: "\u{1F62D}",
      scream: "\u{1F631}",
      confounded: "\u{1F616}",
      persevere: "\u{1F623}",
      disappointed: "\u{1F61E}",
      sweat: "\u{1F613}",
      weary: "\u{1F629}",
      tired_face: "\u{1F62B}",
      yawning_face: "\u{1F971}",
      triumph: "\u{1F624}",
      rage: "\u{1F621}",
      pout: "\u{1F621}",
      angry: "\u{1F620}",
      cursing_face: "\u{1F92C}",
      smiling_imp: "\u{1F608}",
      imp: "\u{1F47F}",
      skull: "\u{1F480}",
      skull_and_crossbones: "\u2620\uFE0F",
      hankey: "\u{1F4A9}",
      poop: "\u{1F4A9}",
      shit: "\u{1F4A9}",
      clown_face: "\u{1F921}",
      japanese_ogre: "\u{1F479}",
      japanese_goblin: "\u{1F47A}",
      ghost: "\u{1F47B}",
      alien: "\u{1F47D}",
      space_invader: "\u{1F47E}",
      robot: "\u{1F916}",
      smiley_cat: "\u{1F63A}",
      smile_cat: "\u{1F638}",
      joy_cat: "\u{1F639}",
      heart_eyes_cat: "\u{1F63B}",
      smirk_cat: "\u{1F63C}",
      kissing_cat: "\u{1F63D}",
      scream_cat: "\u{1F640}",
      crying_cat_face: "\u{1F63F}",
      pouting_cat: "\u{1F63E}",
      see_no_evil: "\u{1F648}",
      hear_no_evil: "\u{1F649}",
      speak_no_evil: "\u{1F64A}",
      kiss: "\u{1F48B}",
      love_letter: "\u{1F48C}",
      cupid: "\u{1F498}",
      gift_heart: "\u{1F49D}",
      sparkling_heart: "\u{1F496}",
      heartpulse: "\u{1F497}",
      heartbeat: "\u{1F493}",
      revolving_hearts: "\u{1F49E}",
      two_hearts: "\u{1F495}",
      heart_decoration: "\u{1F49F}",
      heavy_heart_exclamation: "\u2763\uFE0F",
      broken_heart: "\u{1F494}",
      heart: "\u2764\uFE0F",
      orange_heart: "\u{1F9E1}",
      yellow_heart: "\u{1F49B}",
      green_heart: "\u{1F49A}",
      blue_heart: "\u{1F499}",
      purple_heart: "\u{1F49C}",
      brown_heart: "\u{1F90E}",
      black_heart: "\u{1F5A4}",
      white_heart: "\u{1F90D}",
      anger: "\u{1F4A2}",
      boom: "\u{1F4A5}",
      collision: "\u{1F4A5}",
      dizzy: "\u{1F4AB}",
      sweat_drops: "\u{1F4A6}",
      dash: "\u{1F4A8}",
      hole: "\u{1F573}\uFE0F",
      bomb: "\u{1F4A3}",
      speech_balloon: "\u{1F4AC}",
      eye_speech_bubble: "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F",
      left_speech_bubble: "\u{1F5E8}\uFE0F",
      right_anger_bubble: "\u{1F5EF}\uFE0F",
      thought_balloon: "\u{1F4AD}",
      zzz: "\u{1F4A4}",
      wave: "\u{1F44B}",
      raised_back_of_hand: "\u{1F91A}",
      raised_hand_with_fingers_splayed: "\u{1F590}\uFE0F",
      hand: "\u270B",
      raised_hand: "\u270B",
      vulcan_salute: "\u{1F596}",
      ok_hand: "\u{1F44C}",
      pinched_fingers: "\u{1F90C}",
      pinching_hand: "\u{1F90F}",
      v: "\u270C\uFE0F",
      crossed_fingers: "\u{1F91E}",
      love_you_gesture: "\u{1F91F}",
      metal: "\u{1F918}",
      call_me_hand: "\u{1F919}",
      point_left: "\u{1F448}",
      point_right: "\u{1F449}",
      point_up_2: "\u{1F446}",
      middle_finger: "\u{1F595}",
      fu: "\u{1F595}",
      point_down: "\u{1F447}",
      point_up: "\u261D\uFE0F",
      "+1": "\u{1F44D}",
      thumbsup: "\u{1F44D}",
      "-1": "\u{1F44E}",
      thumbsdown: "\u{1F44E}",
      fist_raised: "\u270A",
      fist: "\u270A",
      fist_oncoming: "\u{1F44A}",
      facepunch: "\u{1F44A}",
      punch: "\u{1F44A}",
      fist_left: "\u{1F91B}",
      fist_right: "\u{1F91C}",
      clap: "\u{1F44F}",
      raised_hands: "\u{1F64C}",
      open_hands: "\u{1F450}",
      palms_up_together: "\u{1F932}",
      handshake: "\u{1F91D}",
      pray: "\u{1F64F}",
      writing_hand: "\u270D\uFE0F",
      nail_care: "\u{1F485}",
      selfie: "\u{1F933}",
      muscle: "\u{1F4AA}",
      mechanical_arm: "\u{1F9BE}",
      mechanical_leg: "\u{1F9BF}",
      leg: "\u{1F9B5}",
      foot: "\u{1F9B6}",
      ear: "\u{1F442}",
      ear_with_hearing_aid: "\u{1F9BB}",
      nose: "\u{1F443}",
      brain: "\u{1F9E0}",
      anatomical_heart: "\u{1FAC0}",
      lungs: "\u{1FAC1}",
      tooth: "\u{1F9B7}",
      bone: "\u{1F9B4}",
      eyes: "\u{1F440}",
      eye: "\u{1F441}\uFE0F",
      tongue: "\u{1F445}",
      lips: "\u{1F444}",
      baby: "\u{1F476}",
      child: "\u{1F9D2}",
      boy: "\u{1F466}",
      girl: "\u{1F467}",
      adult: "\u{1F9D1}",
      blond_haired_person: "\u{1F471}",
      man: "\u{1F468}",
      bearded_person: "\u{1F9D4}",
      red_haired_man: "\u{1F468}\u200D\u{1F9B0}",
      curly_haired_man: "\u{1F468}\u200D\u{1F9B1}",
      white_haired_man: "\u{1F468}\u200D\u{1F9B3}",
      bald_man: "\u{1F468}\u200D\u{1F9B2}",
      woman: "\u{1F469}",
      red_haired_woman: "\u{1F469}\u200D\u{1F9B0}",
      person_red_hair: "\u{1F9D1}\u200D\u{1F9B0}",
      curly_haired_woman: "\u{1F469}\u200D\u{1F9B1}",
      person_curly_hair: "\u{1F9D1}\u200D\u{1F9B1}",
      white_haired_woman: "\u{1F469}\u200D\u{1F9B3}",
      person_white_hair: "\u{1F9D1}\u200D\u{1F9B3}",
      bald_woman: "\u{1F469}\u200D\u{1F9B2}",
      person_bald: "\u{1F9D1}\u200D\u{1F9B2}",
      blond_haired_woman: "\u{1F471}\u200D\u2640\uFE0F",
      blonde_woman: "\u{1F471}\u200D\u2640\uFE0F",
      blond_haired_man: "\u{1F471}\u200D\u2642\uFE0F",
      older_adult: "\u{1F9D3}",
      older_man: "\u{1F474}",
      older_woman: "\u{1F475}",
      frowning_person: "\u{1F64D}",
      frowning_man: "\u{1F64D}\u200D\u2642\uFE0F",
      frowning_woman: "\u{1F64D}\u200D\u2640\uFE0F",
      pouting_face: "\u{1F64E}",
      pouting_man: "\u{1F64E}\u200D\u2642\uFE0F",
      pouting_woman: "\u{1F64E}\u200D\u2640\uFE0F",
      no_good: "\u{1F645}",
      no_good_man: "\u{1F645}\u200D\u2642\uFE0F",
      ng_man: "\u{1F645}\u200D\u2642\uFE0F",
      no_good_woman: "\u{1F645}\u200D\u2640\uFE0F",
      ng_woman: "\u{1F645}\u200D\u2640\uFE0F",
      ok_person: "\u{1F646}",
      ok_man: "\u{1F646}\u200D\u2642\uFE0F",
      ok_woman: "\u{1F646}\u200D\u2640\uFE0F",
      tipping_hand_person: "\u{1F481}",
      information_desk_person: "\u{1F481}",
      tipping_hand_man: "\u{1F481}\u200D\u2642\uFE0F",
      sassy_man: "\u{1F481}\u200D\u2642\uFE0F",
      tipping_hand_woman: "\u{1F481}\u200D\u2640\uFE0F",
      sassy_woman: "\u{1F481}\u200D\u2640\uFE0F",
      raising_hand: "\u{1F64B}",
      raising_hand_man: "\u{1F64B}\u200D\u2642\uFE0F",
      raising_hand_woman: "\u{1F64B}\u200D\u2640\uFE0F",
      deaf_person: "\u{1F9CF}",
      deaf_man: "\u{1F9CF}\u200D\u2642\uFE0F",
      deaf_woman: "\u{1F9CF}\u200D\u2640\uFE0F",
      bow: "\u{1F647}",
      bowing_man: "\u{1F647}\u200D\u2642\uFE0F",
      bowing_woman: "\u{1F647}\u200D\u2640\uFE0F",
      facepalm: "\u{1F926}",
      man_facepalming: "\u{1F926}\u200D\u2642\uFE0F",
      woman_facepalming: "\u{1F926}\u200D\u2640\uFE0F",
      shrug: "\u{1F937}",
      man_shrugging: "\u{1F937}\u200D\u2642\uFE0F",
      woman_shrugging: "\u{1F937}\u200D\u2640\uFE0F",
      health_worker: "\u{1F9D1}\u200D\u2695\uFE0F",
      man_health_worker: "\u{1F468}\u200D\u2695\uFE0F",
      woman_health_worker: "\u{1F469}\u200D\u2695\uFE0F",
      student: "\u{1F9D1}\u200D\u{1F393}",
      man_student: "\u{1F468}\u200D\u{1F393}",
      woman_student: "\u{1F469}\u200D\u{1F393}",
      teacher: "\u{1F9D1}\u200D\u{1F3EB}",
      man_teacher: "\u{1F468}\u200D\u{1F3EB}",
      woman_teacher: "\u{1F469}\u200D\u{1F3EB}",
      judge: "\u{1F9D1}\u200D\u2696\uFE0F",
      man_judge: "\u{1F468}\u200D\u2696\uFE0F",
      woman_judge: "\u{1F469}\u200D\u2696\uFE0F",
      farmer: "\u{1F9D1}\u200D\u{1F33E}",
      man_farmer: "\u{1F468}\u200D\u{1F33E}",
      woman_farmer: "\u{1F469}\u200D\u{1F33E}",
      cook: "\u{1F9D1}\u200D\u{1F373}",
      man_cook: "\u{1F468}\u200D\u{1F373}",
      woman_cook: "\u{1F469}\u200D\u{1F373}",
      mechanic: "\u{1F9D1}\u200D\u{1F527}",
      man_mechanic: "\u{1F468}\u200D\u{1F527}",
      woman_mechanic: "\u{1F469}\u200D\u{1F527}",
      factory_worker: "\u{1F9D1}\u200D\u{1F3ED}",
      man_factory_worker: "\u{1F468}\u200D\u{1F3ED}",
      woman_factory_worker: "\u{1F469}\u200D\u{1F3ED}",
      office_worker: "\u{1F9D1}\u200D\u{1F4BC}",
      man_office_worker: "\u{1F468}\u200D\u{1F4BC}",
      woman_office_worker: "\u{1F469}\u200D\u{1F4BC}",
      scientist: "\u{1F9D1}\u200D\u{1F52C}",
      man_scientist: "\u{1F468}\u200D\u{1F52C}",
      woman_scientist: "\u{1F469}\u200D\u{1F52C}",
      technologist: "\u{1F9D1}\u200D\u{1F4BB}",
      man_technologist: "\u{1F468}\u200D\u{1F4BB}",
      woman_technologist: "\u{1F469}\u200D\u{1F4BB}",
      singer: "\u{1F9D1}\u200D\u{1F3A4}",
      man_singer: "\u{1F468}\u200D\u{1F3A4}",
      woman_singer: "\u{1F469}\u200D\u{1F3A4}",
      artist: "\u{1F9D1}\u200D\u{1F3A8}",
      man_artist: "\u{1F468}\u200D\u{1F3A8}",
      woman_artist: "\u{1F469}\u200D\u{1F3A8}",
      pilot: "\u{1F9D1}\u200D\u2708\uFE0F",
      man_pilot: "\u{1F468}\u200D\u2708\uFE0F",
      woman_pilot: "\u{1F469}\u200D\u2708\uFE0F",
      astronaut: "\u{1F9D1}\u200D\u{1F680}",
      man_astronaut: "\u{1F468}\u200D\u{1F680}",
      woman_astronaut: "\u{1F469}\u200D\u{1F680}",
      firefighter: "\u{1F9D1}\u200D\u{1F692}",
      man_firefighter: "\u{1F468}\u200D\u{1F692}",
      woman_firefighter: "\u{1F469}\u200D\u{1F692}",
      police_officer: "\u{1F46E}",
      cop: "\u{1F46E}",
      policeman: "\u{1F46E}\u200D\u2642\uFE0F",
      policewoman: "\u{1F46E}\u200D\u2640\uFE0F",
      detective: "\u{1F575}\uFE0F",
      male_detective: "\u{1F575}\uFE0F\u200D\u2642\uFE0F",
      female_detective: "\u{1F575}\uFE0F\u200D\u2640\uFE0F",
      guard: "\u{1F482}",
      guardsman: "\u{1F482}\u200D\u2642\uFE0F",
      guardswoman: "\u{1F482}\u200D\u2640\uFE0F",
      ninja: "\u{1F977}",
      construction_worker: "\u{1F477}",
      construction_worker_man: "\u{1F477}\u200D\u2642\uFE0F",
      construction_worker_woman: "\u{1F477}\u200D\u2640\uFE0F",
      prince: "\u{1F934}",
      princess: "\u{1F478}",
      person_with_turban: "\u{1F473}",
      man_with_turban: "\u{1F473}\u200D\u2642\uFE0F",
      woman_with_turban: "\u{1F473}\u200D\u2640\uFE0F",
      man_with_gua_pi_mao: "\u{1F472}",
      woman_with_headscarf: "\u{1F9D5}",
      person_in_tuxedo: "\u{1F935}",
      man_in_tuxedo: "\u{1F935}\u200D\u2642\uFE0F",
      woman_in_tuxedo: "\u{1F935}\u200D\u2640\uFE0F",
      person_with_veil: "\u{1F470}",
      man_with_veil: "\u{1F470}\u200D\u2642\uFE0F",
      woman_with_veil: "\u{1F470}\u200D\u2640\uFE0F",
      bride_with_veil: "\u{1F470}\u200D\u2640\uFE0F",
      pregnant_woman: "\u{1F930}",
      breast_feeding: "\u{1F931}",
      woman_feeding_baby: "\u{1F469}\u200D\u{1F37C}",
      man_feeding_baby: "\u{1F468}\u200D\u{1F37C}",
      person_feeding_baby: "\u{1F9D1}\u200D\u{1F37C}",
      angel: "\u{1F47C}",
      santa: "\u{1F385}",
      mrs_claus: "\u{1F936}",
      mx_claus: "\u{1F9D1}\u200D\u{1F384}",
      superhero: "\u{1F9B8}",
      superhero_man: "\u{1F9B8}\u200D\u2642\uFE0F",
      superhero_woman: "\u{1F9B8}\u200D\u2640\uFE0F",
      supervillain: "\u{1F9B9}",
      supervillain_man: "\u{1F9B9}\u200D\u2642\uFE0F",
      supervillain_woman: "\u{1F9B9}\u200D\u2640\uFE0F",
      mage: "\u{1F9D9}",
      mage_man: "\u{1F9D9}\u200D\u2642\uFE0F",
      mage_woman: "\u{1F9D9}\u200D\u2640\uFE0F",
      fairy: "\u{1F9DA}",
      fairy_man: "\u{1F9DA}\u200D\u2642\uFE0F",
      fairy_woman: "\u{1F9DA}\u200D\u2640\uFE0F",
      vampire: "\u{1F9DB}",
      vampire_man: "\u{1F9DB}\u200D\u2642\uFE0F",
      vampire_woman: "\u{1F9DB}\u200D\u2640\uFE0F",
      merperson: "\u{1F9DC}",
      merman: "\u{1F9DC}\u200D\u2642\uFE0F",
      mermaid: "\u{1F9DC}\u200D\u2640\uFE0F",
      elf: "\u{1F9DD}",
      elf_man: "\u{1F9DD}\u200D\u2642\uFE0F",
      elf_woman: "\u{1F9DD}\u200D\u2640\uFE0F",
      genie: "\u{1F9DE}",
      genie_man: "\u{1F9DE}\u200D\u2642\uFE0F",
      genie_woman: "\u{1F9DE}\u200D\u2640\uFE0F",
      zombie: "\u{1F9DF}",
      zombie_man: "\u{1F9DF}\u200D\u2642\uFE0F",
      zombie_woman: "\u{1F9DF}\u200D\u2640\uFE0F",
      massage: "\u{1F486}",
      massage_man: "\u{1F486}\u200D\u2642\uFE0F",
      massage_woman: "\u{1F486}\u200D\u2640\uFE0F",
      haircut: "\u{1F487}",
      haircut_man: "\u{1F487}\u200D\u2642\uFE0F",
      haircut_woman: "\u{1F487}\u200D\u2640\uFE0F",
      walking: "\u{1F6B6}",
      walking_man: "\u{1F6B6}\u200D\u2642\uFE0F",
      walking_woman: "\u{1F6B6}\u200D\u2640\uFE0F",
      standing_person: "\u{1F9CD}",
      standing_man: "\u{1F9CD}\u200D\u2642\uFE0F",
      standing_woman: "\u{1F9CD}\u200D\u2640\uFE0F",
      kneeling_person: "\u{1F9CE}",
      kneeling_man: "\u{1F9CE}\u200D\u2642\uFE0F",
      kneeling_woman: "\u{1F9CE}\u200D\u2640\uFE0F",
      person_with_probing_cane: "\u{1F9D1}\u200D\u{1F9AF}",
      man_with_probing_cane: "\u{1F468}\u200D\u{1F9AF}",
      woman_with_probing_cane: "\u{1F469}\u200D\u{1F9AF}",
      person_in_motorized_wheelchair: "\u{1F9D1}\u200D\u{1F9BC}",
      man_in_motorized_wheelchair: "\u{1F468}\u200D\u{1F9BC}",
      woman_in_motorized_wheelchair: "\u{1F469}\u200D\u{1F9BC}",
      person_in_manual_wheelchair: "\u{1F9D1}\u200D\u{1F9BD}",
      man_in_manual_wheelchair: "\u{1F468}\u200D\u{1F9BD}",
      woman_in_manual_wheelchair: "\u{1F469}\u200D\u{1F9BD}",
      runner: "\u{1F3C3}",
      running: "\u{1F3C3}",
      running_man: "\u{1F3C3}\u200D\u2642\uFE0F",
      running_woman: "\u{1F3C3}\u200D\u2640\uFE0F",
      woman_dancing: "\u{1F483}",
      dancer: "\u{1F483}",
      man_dancing: "\u{1F57A}",
      business_suit_levitating: "\u{1F574}\uFE0F",
      dancers: "\u{1F46F}",
      dancing_men: "\u{1F46F}\u200D\u2642\uFE0F",
      dancing_women: "\u{1F46F}\u200D\u2640\uFE0F",
      sauna_person: "\u{1F9D6}",
      sauna_man: "\u{1F9D6}\u200D\u2642\uFE0F",
      sauna_woman: "\u{1F9D6}\u200D\u2640\uFE0F",
      climbing: "\u{1F9D7}",
      climbing_man: "\u{1F9D7}\u200D\u2642\uFE0F",
      climbing_woman: "\u{1F9D7}\u200D\u2640\uFE0F",
      person_fencing: "\u{1F93A}",
      horse_racing: "\u{1F3C7}",
      skier: "\u26F7\uFE0F",
      snowboarder: "\u{1F3C2}",
      golfing: "\u{1F3CC}\uFE0F",
      golfing_man: "\u{1F3CC}\uFE0F\u200D\u2642\uFE0F",
      golfing_woman: "\u{1F3CC}\uFE0F\u200D\u2640\uFE0F",
      surfer: "\u{1F3C4}",
      surfing_man: "\u{1F3C4}\u200D\u2642\uFE0F",
      surfing_woman: "\u{1F3C4}\u200D\u2640\uFE0F",
      rowboat: "\u{1F6A3}",
      rowing_man: "\u{1F6A3}\u200D\u2642\uFE0F",
      rowing_woman: "\u{1F6A3}\u200D\u2640\uFE0F",
      swimmer: "\u{1F3CA}",
      swimming_man: "\u{1F3CA}\u200D\u2642\uFE0F",
      swimming_woman: "\u{1F3CA}\u200D\u2640\uFE0F",
      bouncing_ball_person: "\u26F9\uFE0F",
      bouncing_ball_man: "\u26F9\uFE0F\u200D\u2642\uFE0F",
      basketball_man: "\u26F9\uFE0F\u200D\u2642\uFE0F",
      bouncing_ball_woman: "\u26F9\uFE0F\u200D\u2640\uFE0F",
      basketball_woman: "\u26F9\uFE0F\u200D\u2640\uFE0F",
      weight_lifting: "\u{1F3CB}\uFE0F",
      weight_lifting_man: "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F",
      weight_lifting_woman: "\u{1F3CB}\uFE0F\u200D\u2640\uFE0F",
      bicyclist: "\u{1F6B4}",
      biking_man: "\u{1F6B4}\u200D\u2642\uFE0F",
      biking_woman: "\u{1F6B4}\u200D\u2640\uFE0F",
      mountain_bicyclist: "\u{1F6B5}",
      mountain_biking_man: "\u{1F6B5}\u200D\u2642\uFE0F",
      mountain_biking_woman: "\u{1F6B5}\u200D\u2640\uFE0F",
      cartwheeling: "\u{1F938}",
      man_cartwheeling: "\u{1F938}\u200D\u2642\uFE0F",
      woman_cartwheeling: "\u{1F938}\u200D\u2640\uFE0F",
      wrestling: "\u{1F93C}",
      men_wrestling: "\u{1F93C}\u200D\u2642\uFE0F",
      women_wrestling: "\u{1F93C}\u200D\u2640\uFE0F",
      water_polo: "\u{1F93D}",
      man_playing_water_polo: "\u{1F93D}\u200D\u2642\uFE0F",
      woman_playing_water_polo: "\u{1F93D}\u200D\u2640\uFE0F",
      handball_person: "\u{1F93E}",
      man_playing_handball: "\u{1F93E}\u200D\u2642\uFE0F",
      woman_playing_handball: "\u{1F93E}\u200D\u2640\uFE0F",
      juggling_person: "\u{1F939}",
      man_juggling: "\u{1F939}\u200D\u2642\uFE0F",
      woman_juggling: "\u{1F939}\u200D\u2640\uFE0F",
      lotus_position: "\u{1F9D8}",
      lotus_position_man: "\u{1F9D8}\u200D\u2642\uFE0F",
      lotus_position_woman: "\u{1F9D8}\u200D\u2640\uFE0F",
      bath: "\u{1F6C0}",
      sleeping_bed: "\u{1F6CC}",
      people_holding_hands: "\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}",
      two_women_holding_hands: "\u{1F46D}",
      couple: "\u{1F46B}",
      two_men_holding_hands: "\u{1F46C}",
      couplekiss: "\u{1F48F}",
      couplekiss_man_woman: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}",
      couplekiss_man_man: "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}",
      couplekiss_woman_woman: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}",
      couple_with_heart: "\u{1F491}",
      couple_with_heart_woman_man: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}",
      couple_with_heart_man_man: "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}",
      couple_with_heart_woman_woman: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}",
      family: "\u{1F46A}",
      family_man_woman_boy: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}",
      family_man_woman_girl: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}",
      family_man_woman_girl_boy: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
      family_man_woman_boy_boy: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
      family_man_woman_girl_girl: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
      family_man_man_boy: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}",
      family_man_man_girl: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}",
      family_man_man_girl_boy: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}",
      family_man_man_boy_boy: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}",
      family_man_man_girl_girl: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}",
      family_woman_woman_boy: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}",
      family_woman_woman_girl: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}",
      family_woman_woman_girl_boy: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
      family_woman_woman_boy_boy: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
      family_woman_woman_girl_girl: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
      family_man_boy: "\u{1F468}\u200D\u{1F466}",
      family_man_boy_boy: "\u{1F468}\u200D\u{1F466}\u200D\u{1F466}",
      family_man_girl: "\u{1F468}\u200D\u{1F467}",
      family_man_girl_boy: "\u{1F468}\u200D\u{1F467}\u200D\u{1F466}",
      family_man_girl_girl: "\u{1F468}\u200D\u{1F467}\u200D\u{1F467}",
      family_woman_boy: "\u{1F469}\u200D\u{1F466}",
      family_woman_boy_boy: "\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
      family_woman_girl: "\u{1F469}\u200D\u{1F467}",
      family_woman_girl_boy: "\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
      family_woman_girl_girl: "\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
      speaking_head: "\u{1F5E3}\uFE0F",
      bust_in_silhouette: "\u{1F464}",
      busts_in_silhouette: "\u{1F465}",
      people_hugging: "\u{1FAC2}",
      footprints: "\u{1F463}",
      monkey_face: "\u{1F435}",
      monkey: "\u{1F412}",
      gorilla: "\u{1F98D}",
      orangutan: "\u{1F9A7}",
      dog: "\u{1F436}",
      dog2: "\u{1F415}",
      guide_dog: "\u{1F9AE}",
      service_dog: "\u{1F415}\u200D\u{1F9BA}",
      poodle: "\u{1F429}",
      wolf: "\u{1F43A}",
      fox_face: "\u{1F98A}",
      raccoon: "\u{1F99D}",
      cat: "\u{1F431}",
      cat2: "\u{1F408}",
      black_cat: "\u{1F408}\u200D\u2B1B",
      lion: "\u{1F981}",
      tiger: "\u{1F42F}",
      tiger2: "\u{1F405}",
      leopard: "\u{1F406}",
      horse: "\u{1F434}",
      racehorse: "\u{1F40E}",
      unicorn: "\u{1F984}",
      zebra: "\u{1F993}",
      deer: "\u{1F98C}",
      bison: "\u{1F9AC}",
      cow: "\u{1F42E}",
      ox: "\u{1F402}",
      water_buffalo: "\u{1F403}",
      cow2: "\u{1F404}",
      pig: "\u{1F437}",
      pig2: "\u{1F416}",
      boar: "\u{1F417}",
      pig_nose: "\u{1F43D}",
      ram: "\u{1F40F}",
      sheep: "\u{1F411}",
      goat: "\u{1F410}",
      dromedary_camel: "\u{1F42A}",
      camel: "\u{1F42B}",
      llama: "\u{1F999}",
      giraffe: "\u{1F992}",
      elephant: "\u{1F418}",
      mammoth: "\u{1F9A3}",
      rhinoceros: "\u{1F98F}",
      hippopotamus: "\u{1F99B}",
      mouse: "\u{1F42D}",
      mouse2: "\u{1F401}",
      rat: "\u{1F400}",
      hamster: "\u{1F439}",
      rabbit: "\u{1F430}",
      rabbit2: "\u{1F407}",
      chipmunk: "\u{1F43F}\uFE0F",
      beaver: "\u{1F9AB}",
      hedgehog: "\u{1F994}",
      bat: "\u{1F987}",
      bear: "\u{1F43B}",
      polar_bear: "\u{1F43B}\u200D\u2744\uFE0F",
      koala: "\u{1F428}",
      panda_face: "\u{1F43C}",
      sloth: "\u{1F9A5}",
      otter: "\u{1F9A6}",
      skunk: "\u{1F9A8}",
      kangaroo: "\u{1F998}",
      badger: "\u{1F9A1}",
      feet: "\u{1F43E}",
      paw_prints: "\u{1F43E}",
      turkey: "\u{1F983}",
      chicken: "\u{1F414}",
      rooster: "\u{1F413}",
      hatching_chick: "\u{1F423}",
      baby_chick: "\u{1F424}",
      hatched_chick: "\u{1F425}",
      bird: "\u{1F426}",
      penguin: "\u{1F427}",
      dove: "\u{1F54A}\uFE0F",
      eagle: "\u{1F985}",
      duck: "\u{1F986}",
      swan: "\u{1F9A2}",
      owl: "\u{1F989}",
      dodo: "\u{1F9A4}",
      feather: "\u{1FAB6}",
      flamingo: "\u{1F9A9}",
      peacock: "\u{1F99A}",
      parrot: "\u{1F99C}",
      frog: "\u{1F438}",
      crocodile: "\u{1F40A}",
      turtle: "\u{1F422}",
      lizard: "\u{1F98E}",
      snake: "\u{1F40D}",
      dragon_face: "\u{1F432}",
      dragon: "\u{1F409}",
      sauropod: "\u{1F995}",
      "t-rex": "\u{1F996}",
      whale: "\u{1F433}",
      whale2: "\u{1F40B}",
      dolphin: "\u{1F42C}",
      flipper: "\u{1F42C}",
      seal: "\u{1F9AD}",
      fish: "\u{1F41F}",
      tropical_fish: "\u{1F420}",
      blowfish: "\u{1F421}",
      shark: "\u{1F988}",
      octopus: "\u{1F419}",
      shell: "\u{1F41A}",
      snail: "\u{1F40C}",
      butterfly: "\u{1F98B}",
      bug: "\u{1F41B}",
      ant: "\u{1F41C}",
      bee: "\u{1F41D}",
      honeybee: "\u{1F41D}",
      beetle: "\u{1FAB2}",
      lady_beetle: "\u{1F41E}",
      cricket: "\u{1F997}",
      cockroach: "\u{1FAB3}",
      spider: "\u{1F577}\uFE0F",
      spider_web: "\u{1F578}\uFE0F",
      scorpion: "\u{1F982}",
      mosquito: "\u{1F99F}",
      fly: "\u{1FAB0}",
      worm: "\u{1FAB1}",
      microbe: "\u{1F9A0}",
      bouquet: "\u{1F490}",
      cherry_blossom: "\u{1F338}",
      white_flower: "\u{1F4AE}",
      rosette: "\u{1F3F5}\uFE0F",
      rose: "\u{1F339}",
      wilted_flower: "\u{1F940}",
      hibiscus: "\u{1F33A}",
      sunflower: "\u{1F33B}",
      blossom: "\u{1F33C}",
      tulip: "\u{1F337}",
      seedling: "\u{1F331}",
      potted_plant: "\u{1FAB4}",
      evergreen_tree: "\u{1F332}",
      deciduous_tree: "\u{1F333}",
      palm_tree: "\u{1F334}",
      cactus: "\u{1F335}",
      ear_of_rice: "\u{1F33E}",
      herb: "\u{1F33F}",
      shamrock: "\u2618\uFE0F",
      four_leaf_clover: "\u{1F340}",
      maple_leaf: "\u{1F341}",
      fallen_leaf: "\u{1F342}",
      leaves: "\u{1F343}",
      grapes: "\u{1F347}",
      melon: "\u{1F348}",
      watermelon: "\u{1F349}",
      tangerine: "\u{1F34A}",
      orange: "\u{1F34A}",
      mandarin: "\u{1F34A}",
      lemon: "\u{1F34B}",
      banana: "\u{1F34C}",
      pineapple: "\u{1F34D}",
      mango: "\u{1F96D}",
      apple: "\u{1F34E}",
      green_apple: "\u{1F34F}",
      pear: "\u{1F350}",
      peach: "\u{1F351}",
      cherries: "\u{1F352}",
      strawberry: "\u{1F353}",
      blueberries: "\u{1FAD0}",
      kiwi_fruit: "\u{1F95D}",
      tomato: "\u{1F345}",
      olive: "\u{1FAD2}",
      coconut: "\u{1F965}",
      avocado: "\u{1F951}",
      eggplant: "\u{1F346}",
      potato: "\u{1F954}",
      carrot: "\u{1F955}",
      corn: "\u{1F33D}",
      hot_pepper: "\u{1F336}\uFE0F",
      bell_pepper: "\u{1FAD1}",
      cucumber: "\u{1F952}",
      leafy_green: "\u{1F96C}",
      broccoli: "\u{1F966}",
      garlic: "\u{1F9C4}",
      onion: "\u{1F9C5}",
      mushroom: "\u{1F344}",
      peanuts: "\u{1F95C}",
      chestnut: "\u{1F330}",
      bread: "\u{1F35E}",
      croissant: "\u{1F950}",
      baguette_bread: "\u{1F956}",
      flatbread: "\u{1FAD3}",
      pretzel: "\u{1F968}",
      bagel: "\u{1F96F}",
      pancakes: "\u{1F95E}",
      waffle: "\u{1F9C7}",
      cheese: "\u{1F9C0}",
      meat_on_bone: "\u{1F356}",
      poultry_leg: "\u{1F357}",
      cut_of_meat: "\u{1F969}",
      bacon: "\u{1F953}",
      hamburger: "\u{1F354}",
      fries: "\u{1F35F}",
      pizza: "\u{1F355}",
      hotdog: "\u{1F32D}",
      sandwich: "\u{1F96A}",
      taco: "\u{1F32E}",
      burrito: "\u{1F32F}",
      tamale: "\u{1FAD4}",
      stuffed_flatbread: "\u{1F959}",
      falafel: "\u{1F9C6}",
      egg: "\u{1F95A}",
      fried_egg: "\u{1F373}",
      shallow_pan_of_food: "\u{1F958}",
      stew: "\u{1F372}",
      fondue: "\u{1FAD5}",
      bowl_with_spoon: "\u{1F963}",
      green_salad: "\u{1F957}",
      popcorn: "\u{1F37F}",
      butter: "\u{1F9C8}",
      salt: "\u{1F9C2}",
      canned_food: "\u{1F96B}",
      bento: "\u{1F371}",
      rice_cracker: "\u{1F358}",
      rice_ball: "\u{1F359}",
      rice: "\u{1F35A}",
      curry: "\u{1F35B}",
      ramen: "\u{1F35C}",
      spaghetti: "\u{1F35D}",
      sweet_potato: "\u{1F360}",
      oden: "\u{1F362}",
      sushi: "\u{1F363}",
      fried_shrimp: "\u{1F364}",
      fish_cake: "\u{1F365}",
      moon_cake: "\u{1F96E}",
      dango: "\u{1F361}",
      dumpling: "\u{1F95F}",
      fortune_cookie: "\u{1F960}",
      takeout_box: "\u{1F961}",
      crab: "\u{1F980}",
      lobster: "\u{1F99E}",
      shrimp: "\u{1F990}",
      squid: "\u{1F991}",
      oyster: "\u{1F9AA}",
      icecream: "\u{1F366}",
      shaved_ice: "\u{1F367}",
      ice_cream: "\u{1F368}",
      doughnut: "\u{1F369}",
      cookie: "\u{1F36A}",
      birthday: "\u{1F382}",
      cake: "\u{1F370}",
      cupcake: "\u{1F9C1}",
      pie: "\u{1F967}",
      chocolate_bar: "\u{1F36B}",
      candy: "\u{1F36C}",
      lollipop: "\u{1F36D}",
      custard: "\u{1F36E}",
      honey_pot: "\u{1F36F}",
      baby_bottle: "\u{1F37C}",
      milk_glass: "\u{1F95B}",
      coffee: "\u2615",
      teapot: "\u{1FAD6}",
      tea: "\u{1F375}",
      sake: "\u{1F376}",
      champagne: "\u{1F37E}",
      wine_glass: "\u{1F377}",
      cocktail: "\u{1F378}",
      tropical_drink: "\u{1F379}",
      beer: "\u{1F37A}",
      beers: "\u{1F37B}",
      clinking_glasses: "\u{1F942}",
      tumbler_glass: "\u{1F943}",
      cup_with_straw: "\u{1F964}",
      bubble_tea: "\u{1F9CB}",
      beverage_box: "\u{1F9C3}",
      mate: "\u{1F9C9}",
      ice_cube: "\u{1F9CA}",
      chopsticks: "\u{1F962}",
      plate_with_cutlery: "\u{1F37D}\uFE0F",
      fork_and_knife: "\u{1F374}",
      spoon: "\u{1F944}",
      hocho: "\u{1F52A}",
      knife: "\u{1F52A}",
      amphora: "\u{1F3FA}",
      earth_africa: "\u{1F30D}",
      earth_americas: "\u{1F30E}",
      earth_asia: "\u{1F30F}",
      globe_with_meridians: "\u{1F310}",
      world_map: "\u{1F5FA}\uFE0F",
      japan: "\u{1F5FE}",
      compass: "\u{1F9ED}",
      mountain_snow: "\u{1F3D4}\uFE0F",
      mountain: "\u26F0\uFE0F",
      volcano: "\u{1F30B}",
      mount_fuji: "\u{1F5FB}",
      camping: "\u{1F3D5}\uFE0F",
      beach_umbrella: "\u{1F3D6}\uFE0F",
      desert: "\u{1F3DC}\uFE0F",
      desert_island: "\u{1F3DD}\uFE0F",
      national_park: "\u{1F3DE}\uFE0F",
      stadium: "\u{1F3DF}\uFE0F",
      classical_building: "\u{1F3DB}\uFE0F",
      building_construction: "\u{1F3D7}\uFE0F",
      bricks: "\u{1F9F1}",
      rock: "\u{1FAA8}",
      wood: "\u{1FAB5}",
      hut: "\u{1F6D6}",
      houses: "\u{1F3D8}\uFE0F",
      derelict_house: "\u{1F3DA}\uFE0F",
      house: "\u{1F3E0}",
      house_with_garden: "\u{1F3E1}",
      office: "\u{1F3E2}",
      post_office: "\u{1F3E3}",
      european_post_office: "\u{1F3E4}",
      hospital: "\u{1F3E5}",
      bank: "\u{1F3E6}",
      hotel: "\u{1F3E8}",
      love_hotel: "\u{1F3E9}",
      convenience_store: "\u{1F3EA}",
      school: "\u{1F3EB}",
      department_store: "\u{1F3EC}",
      factory: "\u{1F3ED}",
      japanese_castle: "\u{1F3EF}",
      european_castle: "\u{1F3F0}",
      wedding: "\u{1F492}",
      tokyo_tower: "\u{1F5FC}",
      statue_of_liberty: "\u{1F5FD}",
      church: "\u26EA",
      mosque: "\u{1F54C}",
      hindu_temple: "\u{1F6D5}",
      synagogue: "\u{1F54D}",
      shinto_shrine: "\u26E9\uFE0F",
      kaaba: "\u{1F54B}",
      fountain: "\u26F2",
      tent: "\u26FA",
      foggy: "\u{1F301}",
      night_with_stars: "\u{1F303}",
      cityscape: "\u{1F3D9}\uFE0F",
      sunrise_over_mountains: "\u{1F304}",
      sunrise: "\u{1F305}",
      city_sunset: "\u{1F306}",
      city_sunrise: "\u{1F307}",
      bridge_at_night: "\u{1F309}",
      hotsprings: "\u2668\uFE0F",
      carousel_horse: "\u{1F3A0}",
      ferris_wheel: "\u{1F3A1}",
      roller_coaster: "\u{1F3A2}",
      barber: "\u{1F488}",
      circus_tent: "\u{1F3AA}",
      steam_locomotive: "\u{1F682}",
      railway_car: "\u{1F683}",
      bullettrain_side: "\u{1F684}",
      bullettrain_front: "\u{1F685}",
      train2: "\u{1F686}",
      metro: "\u{1F687}",
      light_rail: "\u{1F688}",
      station: "\u{1F689}",
      tram: "\u{1F68A}",
      monorail: "\u{1F69D}",
      mountain_railway: "\u{1F69E}",
      train: "\u{1F68B}",
      bus: "\u{1F68C}",
      oncoming_bus: "\u{1F68D}",
      trolleybus: "\u{1F68E}",
      minibus: "\u{1F690}",
      ambulance: "\u{1F691}",
      fire_engine: "\u{1F692}",
      police_car: "\u{1F693}",
      oncoming_police_car: "\u{1F694}",
      taxi: "\u{1F695}",
      oncoming_taxi: "\u{1F696}",
      car: "\u{1F697}",
      red_car: "\u{1F697}",
      oncoming_automobile: "\u{1F698}",
      blue_car: "\u{1F699}",
      pickup_truck: "\u{1F6FB}",
      truck: "\u{1F69A}",
      articulated_lorry: "\u{1F69B}",
      tractor: "\u{1F69C}",
      racing_car: "\u{1F3CE}\uFE0F",
      motorcycle: "\u{1F3CD}\uFE0F",
      motor_scooter: "\u{1F6F5}",
      manual_wheelchair: "\u{1F9BD}",
      motorized_wheelchair: "\u{1F9BC}",
      auto_rickshaw: "\u{1F6FA}",
      bike: "\u{1F6B2}",
      kick_scooter: "\u{1F6F4}",
      skateboard: "\u{1F6F9}",
      roller_skate: "\u{1F6FC}",
      busstop: "\u{1F68F}",
      motorway: "\u{1F6E3}\uFE0F",
      railway_track: "\u{1F6E4}\uFE0F",
      oil_drum: "\u{1F6E2}\uFE0F",
      fuelpump: "\u26FD",
      rotating_light: "\u{1F6A8}",
      traffic_light: "\u{1F6A5}",
      vertical_traffic_light: "\u{1F6A6}",
      stop_sign: "\u{1F6D1}",
      construction: "\u{1F6A7}",
      anchor: "\u2693",
      boat: "\u26F5",
      sailboat: "\u26F5",
      canoe: "\u{1F6F6}",
      speedboat: "\u{1F6A4}",
      passenger_ship: "\u{1F6F3}\uFE0F",
      ferry: "\u26F4\uFE0F",
      motor_boat: "\u{1F6E5}\uFE0F",
      ship: "\u{1F6A2}",
      airplane: "\u2708\uFE0F",
      small_airplane: "\u{1F6E9}\uFE0F",
      flight_departure: "\u{1F6EB}",
      flight_arrival: "\u{1F6EC}",
      parachute: "\u{1FA82}",
      seat: "\u{1F4BA}",
      helicopter: "\u{1F681}",
      suspension_railway: "\u{1F69F}",
      mountain_cableway: "\u{1F6A0}",
      aerial_tramway: "\u{1F6A1}",
      artificial_satellite: "\u{1F6F0}\uFE0F",
      rocket: "\u{1F680}",
      flying_saucer: "\u{1F6F8}",
      bellhop_bell: "\u{1F6CE}\uFE0F",
      luggage: "\u{1F9F3}",
      hourglass: "\u231B",
      hourglass_flowing_sand: "\u23F3",
      watch: "\u231A",
      alarm_clock: "\u23F0",
      stopwatch: "\u23F1\uFE0F",
      timer_clock: "\u23F2\uFE0F",
      mantelpiece_clock: "\u{1F570}\uFE0F",
      clock12: "\u{1F55B}",
      clock1230: "\u{1F567}",
      clock1: "\u{1F550}",
      clock130: "\u{1F55C}",
      clock2: "\u{1F551}",
      clock230: "\u{1F55D}",
      clock3: "\u{1F552}",
      clock330: "\u{1F55E}",
      clock4: "\u{1F553}",
      clock430: "\u{1F55F}",
      clock5: "\u{1F554}",
      clock530: "\u{1F560}",
      clock6: "\u{1F555}",
      clock630: "\u{1F561}",
      clock7: "\u{1F556}",
      clock730: "\u{1F562}",
      clock8: "\u{1F557}",
      clock830: "\u{1F563}",
      clock9: "\u{1F558}",
      clock930: "\u{1F564}",
      clock10: "\u{1F559}",
      clock1030: "\u{1F565}",
      clock11: "\u{1F55A}",
      clock1130: "\u{1F566}",
      new_moon: "\u{1F311}",
      waxing_crescent_moon: "\u{1F312}",
      first_quarter_moon: "\u{1F313}",
      moon: "\u{1F314}",
      waxing_gibbous_moon: "\u{1F314}",
      full_moon: "\u{1F315}",
      waning_gibbous_moon: "\u{1F316}",
      last_quarter_moon: "\u{1F317}",
      waning_crescent_moon: "\u{1F318}",
      crescent_moon: "\u{1F319}",
      new_moon_with_face: "\u{1F31A}",
      first_quarter_moon_with_face: "\u{1F31B}",
      last_quarter_moon_with_face: "\u{1F31C}",
      thermometer: "\u{1F321}\uFE0F",
      sunny: "\u2600\uFE0F",
      full_moon_with_face: "\u{1F31D}",
      sun_with_face: "\u{1F31E}",
      ringed_planet: "\u{1FA90}",
      star: "\u2B50",
      star2: "\u{1F31F}",
      stars: "\u{1F320}",
      milky_way: "\u{1F30C}",
      cloud: "\u2601\uFE0F",
      partly_sunny: "\u26C5",
      cloud_with_lightning_and_rain: "\u26C8\uFE0F",
      sun_behind_small_cloud: "\u{1F324}\uFE0F",
      sun_behind_large_cloud: "\u{1F325}\uFE0F",
      sun_behind_rain_cloud: "\u{1F326}\uFE0F",
      cloud_with_rain: "\u{1F327}\uFE0F",
      cloud_with_snow: "\u{1F328}\uFE0F",
      cloud_with_lightning: "\u{1F329}\uFE0F",
      tornado: "\u{1F32A}\uFE0F",
      fog: "\u{1F32B}\uFE0F",
      wind_face: "\u{1F32C}\uFE0F",
      cyclone: "\u{1F300}",
      rainbow: "\u{1F308}",
      closed_umbrella: "\u{1F302}",
      open_umbrella: "\u2602\uFE0F",
      umbrella: "\u2614",
      parasol_on_ground: "\u26F1\uFE0F",
      zap: "\u26A1",
      snowflake: "\u2744\uFE0F",
      snowman_with_snow: "\u2603\uFE0F",
      snowman: "\u26C4",
      comet: "\u2604\uFE0F",
      fire: "\u{1F525}",
      droplet: "\u{1F4A7}",
      ocean: "\u{1F30A}",
      jack_o_lantern: "\u{1F383}",
      christmas_tree: "\u{1F384}",
      fireworks: "\u{1F386}",
      sparkler: "\u{1F387}",
      firecracker: "\u{1F9E8}",
      sparkles: "\u2728",
      balloon: "\u{1F388}",
      tada: "\u{1F389}",
      confetti_ball: "\u{1F38A}",
      tanabata_tree: "\u{1F38B}",
      bamboo: "\u{1F38D}",
      dolls: "\u{1F38E}",
      flags: "\u{1F38F}",
      wind_chime: "\u{1F390}",
      rice_scene: "\u{1F391}",
      red_envelope: "\u{1F9E7}",
      ribbon: "\u{1F380}",
      gift: "\u{1F381}",
      reminder_ribbon: "\u{1F397}\uFE0F",
      tickets: "\u{1F39F}\uFE0F",
      ticket: "\u{1F3AB}",
      medal_military: "\u{1F396}\uFE0F",
      trophy: "\u{1F3C6}",
      medal_sports: "\u{1F3C5}",
      "1st_place_medal": "\u{1F947}",
      "2nd_place_medal": "\u{1F948}",
      "3rd_place_medal": "\u{1F949}",
      soccer: "\u26BD",
      baseball: "\u26BE",
      softball: "\u{1F94E}",
      basketball: "\u{1F3C0}",
      volleyball: "\u{1F3D0}",
      football: "\u{1F3C8}",
      rugby_football: "\u{1F3C9}",
      tennis: "\u{1F3BE}",
      flying_disc: "\u{1F94F}",
      bowling: "\u{1F3B3}",
      cricket_game: "\u{1F3CF}",
      field_hockey: "\u{1F3D1}",
      ice_hockey: "\u{1F3D2}",
      lacrosse: "\u{1F94D}",
      ping_pong: "\u{1F3D3}",
      badminton: "\u{1F3F8}",
      boxing_glove: "\u{1F94A}",
      martial_arts_uniform: "\u{1F94B}",
      goal_net: "\u{1F945}",
      golf: "\u26F3",
      ice_skate: "\u26F8\uFE0F",
      fishing_pole_and_fish: "\u{1F3A3}",
      diving_mask: "\u{1F93F}",
      running_shirt_with_sash: "\u{1F3BD}",
      ski: "\u{1F3BF}",
      sled: "\u{1F6F7}",
      curling_stone: "\u{1F94C}",
      dart: "\u{1F3AF}",
      yo_yo: "\u{1FA80}",
      kite: "\u{1FA81}",
      "8ball": "\u{1F3B1}",
      crystal_ball: "\u{1F52E}",
      magic_wand: "\u{1FA84}",
      nazar_amulet: "\u{1F9FF}",
      video_game: "\u{1F3AE}",
      joystick: "\u{1F579}\uFE0F",
      slot_machine: "\u{1F3B0}",
      game_die: "\u{1F3B2}",
      jigsaw: "\u{1F9E9}",
      teddy_bear: "\u{1F9F8}",
      pinata: "\u{1FA85}",
      nesting_dolls: "\u{1FA86}",
      spades: "\u2660\uFE0F",
      hearts: "\u2665\uFE0F",
      diamonds: "\u2666\uFE0F",
      clubs: "\u2663\uFE0F",
      chess_pawn: "\u265F\uFE0F",
      black_joker: "\u{1F0CF}",
      mahjong: "\u{1F004}",
      flower_playing_cards: "\u{1F3B4}",
      performing_arts: "\u{1F3AD}",
      framed_picture: "\u{1F5BC}\uFE0F",
      art: "\u{1F3A8}",
      thread: "\u{1F9F5}",
      sewing_needle: "\u{1FAA1}",
      yarn: "\u{1F9F6}",
      knot: "\u{1FAA2}",
      eyeglasses: "\u{1F453}",
      dark_sunglasses: "\u{1F576}\uFE0F",
      goggles: "\u{1F97D}",
      lab_coat: "\u{1F97C}",
      safety_vest: "\u{1F9BA}",
      necktie: "\u{1F454}",
      shirt: "\u{1F455}",
      tshirt: "\u{1F455}",
      jeans: "\u{1F456}",
      scarf: "\u{1F9E3}",
      gloves: "\u{1F9E4}",
      coat: "\u{1F9E5}",
      socks: "\u{1F9E6}",
      dress: "\u{1F457}",
      kimono: "\u{1F458}",
      sari: "\u{1F97B}",
      one_piece_swimsuit: "\u{1FA71}",
      swim_brief: "\u{1FA72}",
      shorts: "\u{1FA73}",
      bikini: "\u{1F459}",
      womans_clothes: "\u{1F45A}",
      purse: "\u{1F45B}",
      handbag: "\u{1F45C}",
      pouch: "\u{1F45D}",
      shopping: "\u{1F6CD}\uFE0F",
      school_satchel: "\u{1F392}",
      thong_sandal: "\u{1FA74}",
      mans_shoe: "\u{1F45E}",
      shoe: "\u{1F45E}",
      athletic_shoe: "\u{1F45F}",
      hiking_boot: "\u{1F97E}",
      flat_shoe: "\u{1F97F}",
      high_heel: "\u{1F460}",
      sandal: "\u{1F461}",
      ballet_shoes: "\u{1FA70}",
      boot: "\u{1F462}",
      crown: "\u{1F451}",
      womans_hat: "\u{1F452}",
      tophat: "\u{1F3A9}",
      mortar_board: "\u{1F393}",
      billed_cap: "\u{1F9E2}",
      military_helmet: "\u{1FA96}",
      rescue_worker_helmet: "\u26D1\uFE0F",
      prayer_beads: "\u{1F4FF}",
      lipstick: "\u{1F484}",
      ring: "\u{1F48D}",
      gem: "\u{1F48E}",
      mute: "\u{1F507}",
      speaker: "\u{1F508}",
      sound: "\u{1F509}",
      loud_sound: "\u{1F50A}",
      loudspeaker: "\u{1F4E2}",
      mega: "\u{1F4E3}",
      postal_horn: "\u{1F4EF}",
      bell: "\u{1F514}",
      no_bell: "\u{1F515}",
      musical_score: "\u{1F3BC}",
      musical_note: "\u{1F3B5}",
      notes: "\u{1F3B6}",
      studio_microphone: "\u{1F399}\uFE0F",
      level_slider: "\u{1F39A}\uFE0F",
      control_knobs: "\u{1F39B}\uFE0F",
      microphone: "\u{1F3A4}",
      headphones: "\u{1F3A7}",
      radio: "\u{1F4FB}",
      saxophone: "\u{1F3B7}",
      accordion: "\u{1FA97}",
      guitar: "\u{1F3B8}",
      musical_keyboard: "\u{1F3B9}",
      trumpet: "\u{1F3BA}",
      violin: "\u{1F3BB}",
      banjo: "\u{1FA95}",
      drum: "\u{1F941}",
      long_drum: "\u{1FA98}",
      iphone: "\u{1F4F1}",
      calling: "\u{1F4F2}",
      phone: "\u260E\uFE0F",
      telephone: "\u260E\uFE0F",
      telephone_receiver: "\u{1F4DE}",
      pager: "\u{1F4DF}",
      fax: "\u{1F4E0}",
      battery: "\u{1F50B}",
      electric_plug: "\u{1F50C}",
      computer: "\u{1F4BB}",
      desktop_computer: "\u{1F5A5}\uFE0F",
      printer: "\u{1F5A8}\uFE0F",
      keyboard: "\u2328\uFE0F",
      computer_mouse: "\u{1F5B1}\uFE0F",
      trackball: "\u{1F5B2}\uFE0F",
      minidisc: "\u{1F4BD}",
      floppy_disk: "\u{1F4BE}",
      cd: "\u{1F4BF}",
      dvd: "\u{1F4C0}",
      abacus: "\u{1F9EE}",
      movie_camera: "\u{1F3A5}",
      film_strip: "\u{1F39E}\uFE0F",
      film_projector: "\u{1F4FD}\uFE0F",
      clapper: "\u{1F3AC}",
      tv: "\u{1F4FA}",
      camera: "\u{1F4F7}",
      camera_flash: "\u{1F4F8}",
      video_camera: "\u{1F4F9}",
      vhs: "\u{1F4FC}",
      mag: "\u{1F50D}",
      mag_right: "\u{1F50E}",
      candle: "\u{1F56F}\uFE0F",
      bulb: "\u{1F4A1}",
      flashlight: "\u{1F526}",
      izakaya_lantern: "\u{1F3EE}",
      lantern: "\u{1F3EE}",
      diya_lamp: "\u{1FA94}",
      notebook_with_decorative_cover: "\u{1F4D4}",
      closed_book: "\u{1F4D5}",
      book: "\u{1F4D6}",
      open_book: "\u{1F4D6}",
      green_book: "\u{1F4D7}",
      blue_book: "\u{1F4D8}",
      orange_book: "\u{1F4D9}",
      books: "\u{1F4DA}",
      notebook: "\u{1F4D3}",
      ledger: "\u{1F4D2}",
      page_with_curl: "\u{1F4C3}",
      scroll: "\u{1F4DC}",
      page_facing_up: "\u{1F4C4}",
      newspaper: "\u{1F4F0}",
      newspaper_roll: "\u{1F5DE}\uFE0F",
      bookmark_tabs: "\u{1F4D1}",
      bookmark: "\u{1F516}",
      label: "\u{1F3F7}\uFE0F",
      moneybag: "\u{1F4B0}",
      coin: "\u{1FA99}",
      yen: "\u{1F4B4}",
      dollar: "\u{1F4B5}",
      euro: "\u{1F4B6}",
      pound: "\u{1F4B7}",
      money_with_wings: "\u{1F4B8}",
      credit_card: "\u{1F4B3}",
      receipt: "\u{1F9FE}",
      chart: "\u{1F4B9}",
      envelope: "\u2709\uFE0F",
      email: "\u{1F4E7}",
      "e-mail": "\u{1F4E7}",
      incoming_envelope: "\u{1F4E8}",
      envelope_with_arrow: "\u{1F4E9}",
      outbox_tray: "\u{1F4E4}",
      inbox_tray: "\u{1F4E5}",
      package: "\u{1F4E6}",
      mailbox: "\u{1F4EB}",
      mailbox_closed: "\u{1F4EA}",
      mailbox_with_mail: "\u{1F4EC}",
      mailbox_with_no_mail: "\u{1F4ED}",
      postbox: "\u{1F4EE}",
      ballot_box: "\u{1F5F3}\uFE0F",
      pencil2: "\u270F\uFE0F",
      black_nib: "\u2712\uFE0F",
      fountain_pen: "\u{1F58B}\uFE0F",
      pen: "\u{1F58A}\uFE0F",
      paintbrush: "\u{1F58C}\uFE0F",
      crayon: "\u{1F58D}\uFE0F",
      memo: "\u{1F4DD}",
      pencil: "\u{1F4DD}",
      briefcase: "\u{1F4BC}",
      file_folder: "\u{1F4C1}",
      open_file_folder: "\u{1F4C2}",
      card_index_dividers: "\u{1F5C2}\uFE0F",
      date: "\u{1F4C5}",
      calendar: "\u{1F4C6}",
      spiral_notepad: "\u{1F5D2}\uFE0F",
      spiral_calendar: "\u{1F5D3}\uFE0F",
      card_index: "\u{1F4C7}",
      chart_with_upwards_trend: "\u{1F4C8}",
      chart_with_downwards_trend: "\u{1F4C9}",
      bar_chart: "\u{1F4CA}",
      clipboard: "\u{1F4CB}",
      pushpin: "\u{1F4CC}",
      round_pushpin: "\u{1F4CD}",
      paperclip: "\u{1F4CE}",
      paperclips: "\u{1F587}\uFE0F",
      straight_ruler: "\u{1F4CF}",
      triangular_ruler: "\u{1F4D0}",
      scissors: "\u2702\uFE0F",
      card_file_box: "\u{1F5C3}\uFE0F",
      file_cabinet: "\u{1F5C4}\uFE0F",
      wastebasket: "\u{1F5D1}\uFE0F",
      lock: "\u{1F512}",
      unlock: "\u{1F513}",
      lock_with_ink_pen: "\u{1F50F}",
      closed_lock_with_key: "\u{1F510}",
      key: "\u{1F511}",
      old_key: "\u{1F5DD}\uFE0F",
      hammer: "\u{1F528}",
      axe: "\u{1FA93}",
      pick: "\u26CF\uFE0F",
      hammer_and_pick: "\u2692\uFE0F",
      hammer_and_wrench: "\u{1F6E0}\uFE0F",
      dagger: "\u{1F5E1}\uFE0F",
      crossed_swords: "\u2694\uFE0F",
      gun: "\u{1F52B}",
      boomerang: "\u{1FA83}",
      bow_and_arrow: "\u{1F3F9}",
      shield: "\u{1F6E1}\uFE0F",
      carpentry_saw: "\u{1FA9A}",
      wrench: "\u{1F527}",
      screwdriver: "\u{1FA9B}",
      nut_and_bolt: "\u{1F529}",
      gear: "\u2699\uFE0F",
      clamp: "\u{1F5DC}\uFE0F",
      balance_scale: "\u2696\uFE0F",
      probing_cane: "\u{1F9AF}",
      link: "\u{1F517}",
      chains: "\u26D3\uFE0F",
      hook: "\u{1FA9D}",
      toolbox: "\u{1F9F0}",
      magnet: "\u{1F9F2}",
      ladder: "\u{1FA9C}",
      alembic: "\u2697\uFE0F",
      test_tube: "\u{1F9EA}",
      petri_dish: "\u{1F9EB}",
      dna: "\u{1F9EC}",
      microscope: "\u{1F52C}",
      telescope: "\u{1F52D}",
      satellite: "\u{1F4E1}",
      syringe: "\u{1F489}",
      drop_of_blood: "\u{1FA78}",
      pill: "\u{1F48A}",
      adhesive_bandage: "\u{1FA79}",
      stethoscope: "\u{1FA7A}",
      door: "\u{1F6AA}",
      elevator: "\u{1F6D7}",
      mirror: "\u{1FA9E}",
      window: "\u{1FA9F}",
      bed: "\u{1F6CF}\uFE0F",
      couch_and_lamp: "\u{1F6CB}\uFE0F",
      chair: "\u{1FA91}",
      toilet: "\u{1F6BD}",
      plunger: "\u{1FAA0}",
      shower: "\u{1F6BF}",
      bathtub: "\u{1F6C1}",
      mouse_trap: "\u{1FAA4}",
      razor: "\u{1FA92}",
      lotion_bottle: "\u{1F9F4}",
      safety_pin: "\u{1F9F7}",
      broom: "\u{1F9F9}",
      basket: "\u{1F9FA}",
      roll_of_paper: "\u{1F9FB}",
      bucket: "\u{1FAA3}",
      soap: "\u{1F9FC}",
      toothbrush: "\u{1FAA5}",
      sponge: "\u{1F9FD}",
      fire_extinguisher: "\u{1F9EF}",
      shopping_cart: "\u{1F6D2}",
      smoking: "\u{1F6AC}",
      coffin: "\u26B0\uFE0F",
      headstone: "\u{1FAA6}",
      funeral_urn: "\u26B1\uFE0F",
      moyai: "\u{1F5FF}",
      placard: "\u{1FAA7}",
      atm: "\u{1F3E7}",
      put_litter_in_its_place: "\u{1F6AE}",
      potable_water: "\u{1F6B0}",
      wheelchair: "\u267F",
      mens: "\u{1F6B9}",
      womens: "\u{1F6BA}",
      restroom: "\u{1F6BB}",
      baby_symbol: "\u{1F6BC}",
      wc: "\u{1F6BE}",
      passport_control: "\u{1F6C2}",
      customs: "\u{1F6C3}",
      baggage_claim: "\u{1F6C4}",
      left_luggage: "\u{1F6C5}",
      warning: "\u26A0\uFE0F",
      children_crossing: "\u{1F6B8}",
      no_entry: "\u26D4",
      no_entry_sign: "\u{1F6AB}",
      no_bicycles: "\u{1F6B3}",
      no_smoking: "\u{1F6AD}",
      do_not_litter: "\u{1F6AF}",
      "non-potable_water": "\u{1F6B1}",
      no_pedestrians: "\u{1F6B7}",
      no_mobile_phones: "\u{1F4F5}",
      underage: "\u{1F51E}",
      radioactive: "\u2622\uFE0F",
      biohazard: "\u2623\uFE0F",
      arrow_up: "\u2B06\uFE0F",
      arrow_upper_right: "\u2197\uFE0F",
      arrow_right: "\u27A1\uFE0F",
      arrow_lower_right: "\u2198\uFE0F",
      arrow_down: "\u2B07\uFE0F",
      arrow_lower_left: "\u2199\uFE0F",
      arrow_left: "\u2B05\uFE0F",
      arrow_upper_left: "\u2196\uFE0F",
      arrow_up_down: "\u2195\uFE0F",
      left_right_arrow: "\u2194\uFE0F",
      leftwards_arrow_with_hook: "\u21A9\uFE0F",
      arrow_right_hook: "\u21AA\uFE0F",
      arrow_heading_up: "\u2934\uFE0F",
      arrow_heading_down: "\u2935\uFE0F",
      arrows_clockwise: "\u{1F503}",
      arrows_counterclockwise: "\u{1F504}",
      back: "\u{1F519}",
      end: "\u{1F51A}",
      on: "\u{1F51B}",
      soon: "\u{1F51C}",
      top: "\u{1F51D}",
      place_of_worship: "\u{1F6D0}",
      atom_symbol: "\u269B\uFE0F",
      om: "\u{1F549}\uFE0F",
      star_of_david: "\u2721\uFE0F",
      wheel_of_dharma: "\u2638\uFE0F",
      yin_yang: "\u262F\uFE0F",
      latin_cross: "\u271D\uFE0F",
      orthodox_cross: "\u2626\uFE0F",
      star_and_crescent: "\u262A\uFE0F",
      peace_symbol: "\u262E\uFE0F",
      menorah: "\u{1F54E}",
      six_pointed_star: "\u{1F52F}",
      aries: "\u2648",
      taurus: "\u2649",
      gemini: "\u264A",
      cancer: "\u264B",
      leo: "\u264C",
      virgo: "\u264D",
      libra: "\u264E",
      scorpius: "\u264F",
      sagittarius: "\u2650",
      capricorn: "\u2651",
      aquarius: "\u2652",
      pisces: "\u2653",
      ophiuchus: "\u26CE",
      twisted_rightwards_arrows: "\u{1F500}",
      repeat: "\u{1F501}",
      repeat_one: "\u{1F502}",
      arrow_forward: "\u25B6\uFE0F",
      fast_forward: "\u23E9",
      next_track_button: "\u23ED\uFE0F",
      play_or_pause_button: "\u23EF\uFE0F",
      arrow_backward: "\u25C0\uFE0F",
      rewind: "\u23EA",
      previous_track_button: "\u23EE\uFE0F",
      arrow_up_small: "\u{1F53C}",
      arrow_double_up: "\u23EB",
      arrow_down_small: "\u{1F53D}",
      arrow_double_down: "\u23EC",
      pause_button: "\u23F8\uFE0F",
      stop_button: "\u23F9\uFE0F",
      record_button: "\u23FA\uFE0F",
      eject_button: "\u23CF\uFE0F",
      cinema: "\u{1F3A6}",
      low_brightness: "\u{1F505}",
      high_brightness: "\u{1F506}",
      signal_strength: "\u{1F4F6}",
      vibration_mode: "\u{1F4F3}",
      mobile_phone_off: "\u{1F4F4}",
      female_sign: "\u2640\uFE0F",
      male_sign: "\u2642\uFE0F",
      transgender_symbol: "\u26A7\uFE0F",
      heavy_multiplication_x: "\u2716\uFE0F",
      heavy_plus_sign: "\u2795",
      heavy_minus_sign: "\u2796",
      heavy_division_sign: "\u2797",
      infinity: "\u267E\uFE0F",
      bangbang: "\u203C\uFE0F",
      interrobang: "\u2049\uFE0F",
      question: "\u2753",
      grey_question: "\u2754",
      grey_exclamation: "\u2755",
      exclamation: "\u2757",
      heavy_exclamation_mark: "\u2757",
      wavy_dash: "\u3030\uFE0F",
      currency_exchange: "\u{1F4B1}",
      heavy_dollar_sign: "\u{1F4B2}",
      medical_symbol: "\u2695\uFE0F",
      recycle: "\u267B\uFE0F",
      fleur_de_lis: "\u269C\uFE0F",
      trident: "\u{1F531}",
      name_badge: "\u{1F4DB}",
      beginner: "\u{1F530}",
      o: "\u2B55",
      white_check_mark: "\u2705",
      ballot_box_with_check: "\u2611\uFE0F",
      heavy_check_mark: "\u2714\uFE0F",
      x: "\u274C",
      negative_squared_cross_mark: "\u274E",
      curly_loop: "\u27B0",
      loop: "\u27BF",
      part_alternation_mark: "\u303D\uFE0F",
      eight_spoked_asterisk: "\u2733\uFE0F",
      eight_pointed_black_star: "\u2734\uFE0F",
      sparkle: "\u2747\uFE0F",
      copyright: "\xA9\uFE0F",
      registered: "\xAE\uFE0F",
      tm: "\u2122\uFE0F",
      hash: "#\uFE0F\u20E3",
      asterisk: "*\uFE0F\u20E3",
      zero: "0\uFE0F\u20E3",
      one: "1\uFE0F\u20E3",
      two: "2\uFE0F\u20E3",
      three: "3\uFE0F\u20E3",
      four: "4\uFE0F\u20E3",
      five: "5\uFE0F\u20E3",
      six: "6\uFE0F\u20E3",
      seven: "7\uFE0F\u20E3",
      eight: "8\uFE0F\u20E3",
      nine: "9\uFE0F\u20E3",
      keycap_ten: "\u{1F51F}",
      capital_abcd: "\u{1F520}",
      abcd: "\u{1F521}",
      symbols: "\u{1F523}",
      abc: "\u{1F524}",
      a: "\u{1F170}\uFE0F",
      ab: "\u{1F18E}",
      b: "\u{1F171}\uFE0F",
      cl: "\u{1F191}",
      cool: "\u{1F192}",
      free: "\u{1F193}",
      information_source: "\u2139\uFE0F",
      id: "\u{1F194}",
      m: "\u24C2\uFE0F",
      new: "\u{1F195}",
      ng: "\u{1F196}",
      o2: "\u{1F17E}\uFE0F",
      ok: "\u{1F197}",
      parking: "\u{1F17F}\uFE0F",
      sos: "\u{1F198}",
      up: "\u{1F199}",
      vs: "\u{1F19A}",
      koko: "\u{1F201}",
      sa: "\u{1F202}\uFE0F",
      ideograph_advantage: "\u{1F250}",
      accept: "\u{1F251}",
      congratulations: "\u3297\uFE0F",
      secret: "\u3299\uFE0F",
      u6e80: "\u{1F235}",
      red_circle: "\u{1F534}",
      orange_circle: "\u{1F7E0}",
      yellow_circle: "\u{1F7E1}",
      green_circle: "\u{1F7E2}",
      large_blue_circle: "\u{1F535}",
      purple_circle: "\u{1F7E3}",
      brown_circle: "\u{1F7E4}",
      black_circle: "\u26AB",
      white_circle: "\u26AA",
      red_square: "\u{1F7E5}",
      orange_square: "\u{1F7E7}",
      yellow_square: "\u{1F7E8}",
      green_square: "\u{1F7E9}",
      blue_square: "\u{1F7E6}",
      purple_square: "\u{1F7EA}",
      brown_square: "\u{1F7EB}",
      black_large_square: "\u2B1B",
      white_large_square: "\u2B1C",
      black_medium_square: "\u25FC\uFE0F",
      white_medium_square: "\u25FB\uFE0F",
      black_medium_small_square: "\u25FE",
      white_medium_small_square: "\u25FD",
      black_small_square: "\u25AA\uFE0F",
      white_small_square: "\u25AB\uFE0F",
      large_orange_diamond: "\u{1F536}",
      large_blue_diamond: "\u{1F537}",
      small_orange_diamond: "\u{1F538}",
      small_blue_diamond: "\u{1F539}",
      small_red_triangle: "\u{1F53A}",
      small_red_triangle_down: "\u{1F53B}",
      diamond_shape_with_a_dot_inside: "\u{1F4A0}",
      radio_button: "\u{1F518}",
      white_square_button: "\u{1F533}",
      black_square_button: "\u{1F532}",
      checkered_flag: "\u{1F3C1}",
      triangular_flag_on_post: "\u{1F6A9}",
      crossed_flags: "\u{1F38C}",
      black_flag: "\u{1F3F4}",
      white_flag: "\u{1F3F3}\uFE0F",
      rainbow_flag: "\u{1F3F3}\uFE0F\u200D\u{1F308}",
      transgender_flag: "\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F",
      pirate_flag: "\u{1F3F4}\u200D\u2620\uFE0F",
      ascension_island: "\u{1F1E6}\u{1F1E8}",
      andorra: "\u{1F1E6}\u{1F1E9}",
      united_arab_emirates: "\u{1F1E6}\u{1F1EA}",
      afghanistan: "\u{1F1E6}\u{1F1EB}",
      antigua_barbuda: "\u{1F1E6}\u{1F1EC}",
      anguilla: "\u{1F1E6}\u{1F1EE}",
      albania: "\u{1F1E6}\u{1F1F1}",
      armenia: "\u{1F1E6}\u{1F1F2}",
      angola: "\u{1F1E6}\u{1F1F4}",
      antarctica: "\u{1F1E6}\u{1F1F6}",
      argentina: "\u{1F1E6}\u{1F1F7}",
      american_samoa: "\u{1F1E6}\u{1F1F8}",
      austria: "\u{1F1E6}\u{1F1F9}",
      australia: "\u{1F1E6}\u{1F1FA}",
      aruba: "\u{1F1E6}\u{1F1FC}",
      aland_islands: "\u{1F1E6}\u{1F1FD}",
      azerbaijan: "\u{1F1E6}\u{1F1FF}",
      bosnia_herzegovina: "\u{1F1E7}\u{1F1E6}",
      barbados: "\u{1F1E7}\u{1F1E7}",
      bangladesh: "\u{1F1E7}\u{1F1E9}",
      belgium: "\u{1F1E7}\u{1F1EA}",
      burkina_faso: "\u{1F1E7}\u{1F1EB}",
      bulgaria: "\u{1F1E7}\u{1F1EC}",
      bahrain: "\u{1F1E7}\u{1F1ED}",
      burundi: "\u{1F1E7}\u{1F1EE}",
      benin: "\u{1F1E7}\u{1F1EF}",
      st_barthelemy: "\u{1F1E7}\u{1F1F1}",
      bermuda: "\u{1F1E7}\u{1F1F2}",
      brunei: "\u{1F1E7}\u{1F1F3}",
      bolivia: "\u{1F1E7}\u{1F1F4}",
      caribbean_netherlands: "\u{1F1E7}\u{1F1F6}",
      brazil: "\u{1F1E7}\u{1F1F7}",
      bahamas: "\u{1F1E7}\u{1F1F8}",
      bhutan: "\u{1F1E7}\u{1F1F9}",
      bouvet_island: "\u{1F1E7}\u{1F1FB}",
      botswana: "\u{1F1E7}\u{1F1FC}",
      belarus: "\u{1F1E7}\u{1F1FE}",
      belize: "\u{1F1E7}\u{1F1FF}",
      canada: "\u{1F1E8}\u{1F1E6}",
      cocos_islands: "\u{1F1E8}\u{1F1E8}",
      congo_kinshasa: "\u{1F1E8}\u{1F1E9}",
      central_african_republic: "\u{1F1E8}\u{1F1EB}",
      congo_brazzaville: "\u{1F1E8}\u{1F1EC}",
      switzerland: "\u{1F1E8}\u{1F1ED}",
      cote_divoire: "\u{1F1E8}\u{1F1EE}",
      cook_islands: "\u{1F1E8}\u{1F1F0}",
      chile: "\u{1F1E8}\u{1F1F1}",
      cameroon: "\u{1F1E8}\u{1F1F2}",
      cn: "\u{1F1E8}\u{1F1F3}",
      colombia: "\u{1F1E8}\u{1F1F4}",
      clipperton_island: "\u{1F1E8}\u{1F1F5}",
      costa_rica: "\u{1F1E8}\u{1F1F7}",
      cuba: "\u{1F1E8}\u{1F1FA}",
      cape_verde: "\u{1F1E8}\u{1F1FB}",
      curacao: "\u{1F1E8}\u{1F1FC}",
      christmas_island: "\u{1F1E8}\u{1F1FD}",
      cyprus: "\u{1F1E8}\u{1F1FE}",
      czech_republic: "\u{1F1E8}\u{1F1FF}",
      de: "\u{1F1E9}\u{1F1EA}",
      diego_garcia: "\u{1F1E9}\u{1F1EC}",
      djibouti: "\u{1F1E9}\u{1F1EF}",
      denmark: "\u{1F1E9}\u{1F1F0}",
      dominica: "\u{1F1E9}\u{1F1F2}",
      dominican_republic: "\u{1F1E9}\u{1F1F4}",
      algeria: "\u{1F1E9}\u{1F1FF}",
      ceuta_melilla: "\u{1F1EA}\u{1F1E6}",
      ecuador: "\u{1F1EA}\u{1F1E8}",
      estonia: "\u{1F1EA}\u{1F1EA}",
      egypt: "\u{1F1EA}\u{1F1EC}",
      western_sahara: "\u{1F1EA}\u{1F1ED}",
      eritrea: "\u{1F1EA}\u{1F1F7}",
      es: "\u{1F1EA}\u{1F1F8}",
      ethiopia: "\u{1F1EA}\u{1F1F9}",
      eu: "\u{1F1EA}\u{1F1FA}",
      european_union: "\u{1F1EA}\u{1F1FA}",
      finland: "\u{1F1EB}\u{1F1EE}",
      fiji: "\u{1F1EB}\u{1F1EF}",
      falkland_islands: "\u{1F1EB}\u{1F1F0}",
      micronesia: "\u{1F1EB}\u{1F1F2}",
      faroe_islands: "\u{1F1EB}\u{1F1F4}",
      fr: "\u{1F1EB}\u{1F1F7}",
      gabon: "\u{1F1EC}\u{1F1E6}",
      gb: "\u{1F1EC}\u{1F1E7}",
      uk: "\u{1F1EC}\u{1F1E7}",
      grenada: "\u{1F1EC}\u{1F1E9}",
      georgia: "\u{1F1EC}\u{1F1EA}",
      french_guiana: "\u{1F1EC}\u{1F1EB}",
      guernsey: "\u{1F1EC}\u{1F1EC}",
      ghana: "\u{1F1EC}\u{1F1ED}",
      gibraltar: "\u{1F1EC}\u{1F1EE}",
      greenland: "\u{1F1EC}\u{1F1F1}",
      gambia: "\u{1F1EC}\u{1F1F2}",
      guinea: "\u{1F1EC}\u{1F1F3}",
      guadeloupe: "\u{1F1EC}\u{1F1F5}",
      equatorial_guinea: "\u{1F1EC}\u{1F1F6}",
      greece: "\u{1F1EC}\u{1F1F7}",
      south_georgia_south_sandwich_islands: "\u{1F1EC}\u{1F1F8}",
      guatemala: "\u{1F1EC}\u{1F1F9}",
      guam: "\u{1F1EC}\u{1F1FA}",
      guinea_bissau: "\u{1F1EC}\u{1F1FC}",
      guyana: "\u{1F1EC}\u{1F1FE}",
      hong_kong: "\u{1F1ED}\u{1F1F0}",
      heard_mcdonald_islands: "\u{1F1ED}\u{1F1F2}",
      honduras: "\u{1F1ED}\u{1F1F3}",
      croatia: "\u{1F1ED}\u{1F1F7}",
      haiti: "\u{1F1ED}\u{1F1F9}",
      hungary: "\u{1F1ED}\u{1F1FA}",
      canary_islands: "\u{1F1EE}\u{1F1E8}",
      indonesia: "\u{1F1EE}\u{1F1E9}",
      ireland: "\u{1F1EE}\u{1F1EA}",
      israel: "\u{1F1EE}\u{1F1F1}",
      isle_of_man: "\u{1F1EE}\u{1F1F2}",
      india: "\u{1F1EE}\u{1F1F3}",
      british_indian_ocean_territory: "\u{1F1EE}\u{1F1F4}",
      iraq: "\u{1F1EE}\u{1F1F6}",
      iran: "\u{1F1EE}\u{1F1F7}",
      iceland: "\u{1F1EE}\u{1F1F8}",
      it: "\u{1F1EE}\u{1F1F9}",
      jersey: "\u{1F1EF}\u{1F1EA}",
      jamaica: "\u{1F1EF}\u{1F1F2}",
      jordan: "\u{1F1EF}\u{1F1F4}",
      jp: "\u{1F1EF}\u{1F1F5}",
      kenya: "\u{1F1F0}\u{1F1EA}",
      kyrgyzstan: "\u{1F1F0}\u{1F1EC}",
      cambodia: "\u{1F1F0}\u{1F1ED}",
      kiribati: "\u{1F1F0}\u{1F1EE}",
      comoros: "\u{1F1F0}\u{1F1F2}",
      st_kitts_nevis: "\u{1F1F0}\u{1F1F3}",
      north_korea: "\u{1F1F0}\u{1F1F5}",
      kr: "\u{1F1F0}\u{1F1F7}",
      kuwait: "\u{1F1F0}\u{1F1FC}",
      cayman_islands: "\u{1F1F0}\u{1F1FE}",
      kazakhstan: "\u{1F1F0}\u{1F1FF}",
      laos: "\u{1F1F1}\u{1F1E6}",
      lebanon: "\u{1F1F1}\u{1F1E7}",
      st_lucia: "\u{1F1F1}\u{1F1E8}",
      liechtenstein: "\u{1F1F1}\u{1F1EE}",
      sri_lanka: "\u{1F1F1}\u{1F1F0}",
      liberia: "\u{1F1F1}\u{1F1F7}",
      lesotho: "\u{1F1F1}\u{1F1F8}",
      lithuania: "\u{1F1F1}\u{1F1F9}",
      luxembourg: "\u{1F1F1}\u{1F1FA}",
      latvia: "\u{1F1F1}\u{1F1FB}",
      libya: "\u{1F1F1}\u{1F1FE}",
      morocco: "\u{1F1F2}\u{1F1E6}",
      monaco: "\u{1F1F2}\u{1F1E8}",
      moldova: "\u{1F1F2}\u{1F1E9}",
      montenegro: "\u{1F1F2}\u{1F1EA}",
      st_martin: "\u{1F1F2}\u{1F1EB}",
      madagascar: "\u{1F1F2}\u{1F1EC}",
      marshall_islands: "\u{1F1F2}\u{1F1ED}",
      macedonia: "\u{1F1F2}\u{1F1F0}",
      mali: "\u{1F1F2}\u{1F1F1}",
      myanmar: "\u{1F1F2}\u{1F1F2}",
      mongolia: "\u{1F1F2}\u{1F1F3}",
      macau: "\u{1F1F2}\u{1F1F4}",
      northern_mariana_islands: "\u{1F1F2}\u{1F1F5}",
      martinique: "\u{1F1F2}\u{1F1F6}",
      mauritania: "\u{1F1F2}\u{1F1F7}",
      montserrat: "\u{1F1F2}\u{1F1F8}",
      malta: "\u{1F1F2}\u{1F1F9}",
      mauritius: "\u{1F1F2}\u{1F1FA}",
      maldives: "\u{1F1F2}\u{1F1FB}",
      malawi: "\u{1F1F2}\u{1F1FC}",
      mexico: "\u{1F1F2}\u{1F1FD}",
      malaysia: "\u{1F1F2}\u{1F1FE}",
      mozambique: "\u{1F1F2}\u{1F1FF}",
      namibia: "\u{1F1F3}\u{1F1E6}",
      new_caledonia: "\u{1F1F3}\u{1F1E8}",
      niger: "\u{1F1F3}\u{1F1EA}",
      norfolk_island: "\u{1F1F3}\u{1F1EB}",
      nigeria: "\u{1F1F3}\u{1F1EC}",
      nicaragua: "\u{1F1F3}\u{1F1EE}",
      netherlands: "\u{1F1F3}\u{1F1F1}",
      norway: "\u{1F1F3}\u{1F1F4}",
      nepal: "\u{1F1F3}\u{1F1F5}",
      nauru: "\u{1F1F3}\u{1F1F7}",
      niue: "\u{1F1F3}\u{1F1FA}",
      new_zealand: "\u{1F1F3}\u{1F1FF}",
      oman: "\u{1F1F4}\u{1F1F2}",
      panama: "\u{1F1F5}\u{1F1E6}",
      peru: "\u{1F1F5}\u{1F1EA}",
      french_polynesia: "\u{1F1F5}\u{1F1EB}",
      papua_new_guinea: "\u{1F1F5}\u{1F1EC}",
      philippines: "\u{1F1F5}\u{1F1ED}",
      pakistan: "\u{1F1F5}\u{1F1F0}",
      poland: "\u{1F1F5}\u{1F1F1}",
      st_pierre_miquelon: "\u{1F1F5}\u{1F1F2}",
      pitcairn_islands: "\u{1F1F5}\u{1F1F3}",
      puerto_rico: "\u{1F1F5}\u{1F1F7}",
      palestinian_territories: "\u{1F1F5}\u{1F1F8}",
      portugal: "\u{1F1F5}\u{1F1F9}",
      palau: "\u{1F1F5}\u{1F1FC}",
      paraguay: "\u{1F1F5}\u{1F1FE}",
      qatar: "\u{1F1F6}\u{1F1E6}",
      reunion: "\u{1F1F7}\u{1F1EA}",
      romania: "\u{1F1F7}\u{1F1F4}",
      serbia: "\u{1F1F7}\u{1F1F8}",
      ru: "\u{1F1F7}\u{1F1FA}",
      rwanda: "\u{1F1F7}\u{1F1FC}",
      saudi_arabia: "\u{1F1F8}\u{1F1E6}",
      solomon_islands: "\u{1F1F8}\u{1F1E7}",
      seychelles: "\u{1F1F8}\u{1F1E8}",
      sudan: "\u{1F1F8}\u{1F1E9}",
      sweden: "\u{1F1F8}\u{1F1EA}",
      singapore: "\u{1F1F8}\u{1F1EC}",
      st_helena: "\u{1F1F8}\u{1F1ED}",
      slovenia: "\u{1F1F8}\u{1F1EE}",
      svalbard_jan_mayen: "\u{1F1F8}\u{1F1EF}",
      slovakia: "\u{1F1F8}\u{1F1F0}",
      sierra_leone: "\u{1F1F8}\u{1F1F1}",
      san_marino: "\u{1F1F8}\u{1F1F2}",
      senegal: "\u{1F1F8}\u{1F1F3}",
      somalia: "\u{1F1F8}\u{1F1F4}",
      suriname: "\u{1F1F8}\u{1F1F7}",
      south_sudan: "\u{1F1F8}\u{1F1F8}",
      sao_tome_principe: "\u{1F1F8}\u{1F1F9}",
      el_salvador: "\u{1F1F8}\u{1F1FB}",
      sint_maarten: "\u{1F1F8}\u{1F1FD}",
      syria: "\u{1F1F8}\u{1F1FE}",
      swaziland: "\u{1F1F8}\u{1F1FF}",
      tristan_da_cunha: "\u{1F1F9}\u{1F1E6}",
      turks_caicos_islands: "\u{1F1F9}\u{1F1E8}",
      chad: "\u{1F1F9}\u{1F1E9}",
      french_southern_territories: "\u{1F1F9}\u{1F1EB}",
      togo: "\u{1F1F9}\u{1F1EC}",
      thailand: "\u{1F1F9}\u{1F1ED}",
      tajikistan: "\u{1F1F9}\u{1F1EF}",
      tokelau: "\u{1F1F9}\u{1F1F0}",
      timor_leste: "\u{1F1F9}\u{1F1F1}",
      turkmenistan: "\u{1F1F9}\u{1F1F2}",
      tunisia: "\u{1F1F9}\u{1F1F3}",
      tonga: "\u{1F1F9}\u{1F1F4}",
      tr: "\u{1F1F9}\u{1F1F7}",
      trinidad_tobago: "\u{1F1F9}\u{1F1F9}",
      tuvalu: "\u{1F1F9}\u{1F1FB}",
      taiwan: "\u{1F1F9}\u{1F1FC}",
      tanzania: "\u{1F1F9}\u{1F1FF}",
      ukraine: "\u{1F1FA}\u{1F1E6}",
      uganda: "\u{1F1FA}\u{1F1EC}",
      us_outlying_islands: "\u{1F1FA}\u{1F1F2}",
      united_nations: "\u{1F1FA}\u{1F1F3}",
      us: "\u{1F1FA}\u{1F1F8}",
      uruguay: "\u{1F1FA}\u{1F1FE}",
      uzbekistan: "\u{1F1FA}\u{1F1FF}",
      vatican_city: "\u{1F1FB}\u{1F1E6}",
      st_vincent_grenadines: "\u{1F1FB}\u{1F1E8}",
      venezuela: "\u{1F1FB}\u{1F1EA}",
      british_virgin_islands: "\u{1F1FB}\u{1F1EC}",
      us_virgin_islands: "\u{1F1FB}\u{1F1EE}",
      vietnam: "\u{1F1FB}\u{1F1F3}",
      vanuatu: "\u{1F1FB}\u{1F1FA}",
      wallis_futuna: "\u{1F1FC}\u{1F1EB}",
      samoa: "\u{1F1FC}\u{1F1F8}",
      kosovo: "\u{1F1FD}\u{1F1F0}",
      yemen: "\u{1F1FE}\u{1F1EA}",
      mayotte: "\u{1F1FE}\u{1F1F9}",
      south_africa: "\u{1F1FF}\u{1F1E6}",
      zambia: "\u{1F1FF}\u{1F1F2}",
      zimbabwe: "\u{1F1FF}\u{1F1FC}",
      england: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}",
      scotland: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}",
      wales: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}"
    };
  }
});

// node_modules/markdown-it-emoji/lib/data/shortcuts.js
var require_shortcuts = __commonJS({
  "node_modules/markdown-it-emoji/lib/data/shortcuts.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      angry: [">:(", ">:-("],
      blush: [':")', ':-")'],
      broken_heart: ["</3", "<\\3"],
      confused: [":/", ":-/"],
      cry: [":'(", ":'-(", ":,(", ":,-("],
      frowning: [":(", ":-("],
      heart: ["<3"],
      imp: ["]:(", "]:-("],
      innocent: ["o:)", "O:)", "o:-)", "O:-)", "0:)", "0:-)"],
      joy: [":')", ":'-)", ":,)", ":,-)", ":'D", ":'-D", ":,D", ":,-D"],
      kissing: [":*", ":-*"],
      laughing: ["x-)", "X-)"],
      neutral_face: [":|", ":-|"],
      open_mouth: [":o", ":-o", ":O", ":-O"],
      rage: [":@", ":-@"],
      smile: [":D", ":-D"],
      smiley: [":)", ":-)"],
      smiling_imp: ["]:)", "]:-)"],
      sob: [":,'(", ":,'-(", ";(", ";-("],
      stuck_out_tongue: [":P", ":-P"],
      sunglasses: ["8-)", "B-)"],
      sweat: [",:(", ",:-("],
      sweat_smile: [",:)", ",:-)"],
      unamused: [":s", ":-S", ":z", ":-Z", ":$", ":-$"],
      wink: [";)", ";-)"]
    };
  }
});

// node_modules/markdown-it-emoji/lib/render.js
var require_render = __commonJS({
  "node_modules/markdown-it-emoji/lib/render.js"(exports2, module2) {
    "use strict";
    module2.exports = function emoji_html(tokens, idx) {
      return tokens[idx].content;
    };
  }
});

// node_modules/markdown-it-emoji/lib/replace.js
var require_replace = __commonJS({
  "node_modules/markdown-it-emoji/lib/replace.js"(exports2, module2) {
    "use strict";
    module2.exports = function create_rule(md, emojies, shortcuts, scanRE, replaceRE) {
      var arrayReplaceAt = md.utils.arrayReplaceAt, ucm = md.utils.lib.ucmicro, ZPCc = new RegExp([ucm.Z.source, ucm.P.source, ucm.Cc.source].join("|"));
      function splitTextToken(text, level, Token) {
        var token, last_pos = 0, nodes = [];
        text.replace(replaceRE, function(match, offset, src) {
          var emoji_name;
          if (shortcuts.hasOwnProperty(match)) {
            emoji_name = shortcuts[match];
            if (offset > 0 && !ZPCc.test(src[offset - 1])) {
              return;
            }
            if (offset + match.length < src.length && !ZPCc.test(src[offset + match.length])) {
              return;
            }
          } else {
            emoji_name = match.slice(1, -1);
          }
          if (offset > last_pos) {
            token = new Token("text", "", 0);
            token.content = text.slice(last_pos, offset);
            nodes.push(token);
          }
          token = new Token("emoji", "", 0);
          token.markup = emoji_name;
          token.content = emojies[emoji_name];
          nodes.push(token);
          last_pos = offset + match.length;
        });
        if (last_pos < text.length) {
          token = new Token("text", "", 0);
          token.content = text.slice(last_pos);
          nodes.push(token);
        }
        return nodes;
      }
      return function emoji_replace(state) {
        var i, j, l, tokens, token, blockTokens = state.tokens, autolinkLevel = 0;
        for (j = 0, l = blockTokens.length; j < l; j++) {
          if (blockTokens[j].type !== "inline") {
            continue;
          }
          tokens = blockTokens[j].children;
          for (i = tokens.length - 1; i >= 0; i--) {
            token = tokens[i];
            if (token.type === "link_open" || token.type === "link_close") {
              if (token.info === "auto") {
                autolinkLevel -= token.nesting;
              }
            }
            if (token.type === "text" && autolinkLevel === 0 && scanRE.test(token.content)) {
              blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, splitTextToken(token.content, token.level, state.Token));
            }
          }
        }
      };
    };
  }
});

// node_modules/markdown-it-emoji/lib/normalize_opts.js
var require_normalize_opts = __commonJS({
  "node_modules/markdown-it-emoji/lib/normalize_opts.js"(exports2, module2) {
    "use strict";
    function quoteRE(str) {
      return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
    }
    module2.exports = function normalize_opts(options) {
      var emojies = options.defs, shortcuts;
      if (options.enabled.length) {
        emojies = Object.keys(emojies).reduce(function(acc, key) {
          if (options.enabled.indexOf(key) >= 0) {
            acc[key] = emojies[key];
          }
          return acc;
        }, {});
      }
      shortcuts = Object.keys(options.shortcuts).reduce(function(acc, key) {
        if (!emojies[key]) {
          return acc;
        }
        if (Array.isArray(options.shortcuts[key])) {
          options.shortcuts[key].forEach(function(alias) {
            acc[alias] = key;
          });
          return acc;
        }
        acc[options.shortcuts[key]] = key;
        return acc;
      }, {});
      var keys = Object.keys(emojies), names;
      if (keys.length === 0) {
        names = "^$";
      } else {
        names = keys.map(function(name) {
          return ":" + name + ":";
        }).concat(Object.keys(shortcuts)).sort().reverse().map(function(name) {
          return quoteRE(name);
        }).join("|");
      }
      var scanRE = RegExp(names);
      var replaceRE = RegExp(names, "g");
      return {
        defs: emojies,
        shortcuts,
        scanRE,
        replaceRE
      };
    };
  }
});

// node_modules/markdown-it-emoji/bare.js
var require_bare = __commonJS({
  "node_modules/markdown-it-emoji/bare.js"(exports2, module2) {
    "use strict";
    var emoji_html = require_render();
    var emoji_replace = require_replace();
    var normalize_opts = require_normalize_opts();
    module2.exports = function emoji_plugin(md, options) {
      var defaults = {
        defs: {},
        shortcuts: {},
        enabled: []
      };
      var opts = normalize_opts(md.utils.assign({}, defaults, options || {}));
      md.renderer.rules.emoji = emoji_html;
      md.core.ruler.push("emoji", emoji_replace(md, opts.defs, opts.shortcuts, opts.scanRE, opts.replaceRE));
    };
  }
});

// node_modules/markdown-it-emoji/index.js
var require_markdown_it_emoji = __commonJS({
  "node_modules/markdown-it-emoji/index.js"(exports2, module2) {
    "use strict";
    var emojies_defs = require_full();
    var emojies_shortcuts = require_shortcuts();
    var bare_emoji_plugin = require_bare();
    module2.exports = function emoji_plugin(md, options) {
      var defaults = {
        defs: emojies_defs,
        shortcuts: emojies_shortcuts,
        enabled: []
      };
      var opts = md.utils.assign({}, defaults, options || {});
      bare_emoji_plugin(md, opts);
    };
  }
});

// extension.js
var vscode = require("vscode");
var { khanText2ug } = require_shirkhan_alphabet_umd();
var emoji = require_markdown_it_emoji();
var activeToConvert = vscode.workspace.getConfiguration("shirkhanMarkdown").get("activeConvert");
function shirkhanAlphabetPlugin(md) {
  md.use(emoji);
  const defaultRender = md.renderer.rules.text;
  md.renderer.rules.text = function(tokens, idx, options, env, slf) {
    const result = defaultRender(tokens, idx, options, env, slf);
    if (idx > 0 && tokens[idx - 1].type === "link_open") {
      return result;
    }
    return khanText2ug(result);
  };
  md.renderer.backuprender = md.renderer.render;
  md.renderer.render = function(tokens, options, env) {
    const result = md.renderer.backuprender(tokens, options, env);
    return `<div class="shirkhan-markdown-body">${result}</div>`;
  };
  return md;
}
function activate(context) {
  console.log('Congratulations, your extension "shirkhan-markdown" is now active!');
  let disposable = vscode.commands.registerCommand("shirkhan-markdown.shirkhan", function() {
    activeToConvert = !activeToConvert;
    const msg = activeToConvert ? "\u5F00\u542F" : "\u5173\u95ED";
    vscode.window.showInformationMessage("shirkhan-alphabet \u8F6C\u6362\u72B6\u6001\u53D8\u6210\u4E3A:" + msg + " from shirkhan-markdown!");
  });
  context.subscriptions.push(disposable);
  return {
    extendMarkdownIt(md) {
      md.use(shirkhanAlphabetPlugin);
      return md;
    }
  };
}
function deactivate() {
  activeToConvert = !activeToConvert;
  vscode.window.showInformationMessage("shirkhan-markdown deactivate");
}
module.exports = {
  activate,
  deactivate
};
/*!
* Determine if an object is a Buffer
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
//# sourceMappingURL=extension.js.map
