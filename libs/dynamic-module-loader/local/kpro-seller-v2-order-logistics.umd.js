var $e = Object.defineProperty
  , We = Object.defineProperties;
var Ge = Object.getOwnPropertyDescriptors;
var ae = Object.getOwnPropertySymbols;
var Ie = Object.prototype.hasOwnProperty
  , Re = Object.prototype.propertyIsEnumerable;
var Ce = (M, A, D) => A in M ? $e(M, A, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: D
}) : M[A] = D
  , se = (M, A) => {
    for (var D in A || (A = {}))
        Ie.call(A, D) && Ce(M, D, A[D]);
    if (ae)
        for (var D of ae(A))
            Re.call(A, D) && Ce(M, D, A[D]);
    return M
}
  , Te = (M, A) => We(M, Ge(A));
var le = (M, A) => {
    var D = {};
    for (var F in M)
        Ie.call(M, F) && A.indexOf(F) < 0 && (D[F] = M[F]);
    if (M != null && ae)
        for (var F of ae(M))
            A.indexOf(F) < 0 && Re.call(M, F) && (D[F] = M[F]);
    return D
}
;
(function(A, D) {
    if (typeof exports == "object" && typeof module == "object")
        module.exports = D(require("react"), require("@es/kpro-seller-layout-container"), require("@es/kpro-seller-diagnose-suggestion"), require("@es/kpro-data-datacard-new"));
    else if (typeof define == "function" && define.amd)
        define(["react", "@es/kpro-seller-layout-container", "@es/kpro-seller-diagnose-suggestion", "@es/kpro-data-datacard-new"], D);
    else {
        var F = typeof exports == "object" ? D(require("react"), require("@es/kpro-seller-layout-container"), require("@es/kpro-seller-diagnose-suggestion"), require("@es/kpro-data-datacard-new")) : D(A.React, A["@es/kpro-seller-layout-container"], A["@es/kpro-seller-diagnose-suggestion"], A["@es/kpro-data-datacard-new"]);
        for (var ee in F)
            (typeof exports == "object" ? exports : A)[ee] = F[ee]
    }
}
)(self, (M, A, D, F) => ( () => {
    var ee = {
        5340: function(t, s, e) {
            (function(o, n) {
                n(s, e(9787))
            }
            )(this, function(o, n) {
                "use strict";
                function r(f) {
                    if (f && f.__esModule)
                        return f;
                    var g = Object.create(null);
                    return f && Object.keys(f).forEach(function(h) {
                        if (h !== "default") {
                            var y = Object.getOwnPropertyDescriptor(f, h);
                            Object.defineProperty(g, h, y.get ? y : {
                                enumerable: !0,
                                get: function() {
                                    return f[h]
                                }
                            })
                        }
                    }),
                    g.default = f,
                    Object.freeze(g)
                }
                var a = r(n);
                function l(f, g) {
                    return l = Object.setPrototypeOf || function(y, _) {
                        return y.__proto__ = _,
                        y
                    }
                    ,
                    l(f, g)
                }
                function u(f, g) {
                    f.prototype = Object.create(g.prototype),
                    f.prototype.constructor = f,
                    l(f, g)
                }
                var i = function(g, h) {
                    return g === void 0 && (g = []),
                    h === void 0 && (h = []),
                    g.length !== h.length || g.some(function(y, _) {
                        return !Object.is(y, h[_])
                    })
                }
                  , c = {
                    error: null
                }
                  , v = function(f) {
                    u(g, f);
                    function g() {
                        for (var y, _ = arguments.length, b = new Array(_), C = 0; C < _; C++)
                            b[C] = arguments[C];
                        return y = f.call.apply(f, [this].concat(b)) || this,
                        y.state = c,
                        y.resetErrorBoundary = function() {
                            for (var E, S = arguments.length, R = new Array(S), K = 0; K < S; K++)
                                R[K] = arguments[K];
                            y.props.onReset == null || (E = y.props).onReset.apply(E, R),
                            y.reset()
                        }
                        ,
                        y
                    }
                    g.getDerivedStateFromError = function(_) {
                        return {
                            error: _
                        }
                    }
                    ;
                    var h = g.prototype;
                    return h.reset = function() {
                        this.setState(c)
                    }
                    ,
                    h.componentDidCatch = function(_, b) {
                        var C, E;
                        (C = (E = this.props).onError) == null || C.call(E, _, b)
                    }
                    ,
                    h.componentDidUpdate = function(_, b) {
                        var C = this.state.error
                          , E = this.props.resetKeys;
                        if (C !== null && b.error !== null && i(_.resetKeys, E)) {
                            var S, R;
                            (S = (R = this.props).onResetKeysChange) == null || S.call(R, _.resetKeys, E),
                            this.reset()
                        }
                    }
                    ,
                    h.render = function() {
                        var _ = this.state.error
                          , b = this.props
                          , C = b.fallbackRender
                          , E = b.FallbackComponent
                          , S = b.fallback;
                        if (_ !== null) {
                            var R = {
                                error: _,
                                resetErrorBoundary: this.resetErrorBoundary
                            };
                            if (a.isValidElement(S))
                                return S;
                            if (typeof C == "function")
                                return C(R);
                            if (E)
                                return a.createElement(E, R);
                            throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")
                        }
                        return this.props.children
                    }
                    ,
                    g
                }(a.Component);
                function m(f, g) {
                    var h = function(b) {
                        return a.createElement(v, g, a.createElement(f, b))
                    }
                      , y = f.displayName || f.name || "Unknown";
                    return h.displayName = "withErrorBoundary(" + y + ")",
                    h
                }
                function p(f) {
                    var g = a.useState(null)
                      , h = g[0]
                      , y = g[1];
                    if (f != null)
                        throw f;
                    if (h != null)
                        throw h;
                    return y
                }
                o.ErrorBoundary = v,
                o.useErrorHandler = p,
                o.withErrorBoundary = m,
                Object.defineProperty(o, "__esModule", {
                    value: !0
                })
            })
        },
        6457: (t, s, e) => {
            var o = e(5470)
              , n = e(2786)
              , r = TypeError;
            t.exports = function(a) {
                if (o(a))
                    return a;
                throw r(n(a) + " is not a function")
            }
        }
        ,
        8081: (t, s, e) => {
            var o = e(625)
              , n = String
              , r = TypeError;
            t.exports = function(a) {
                if (o(a))
                    return a;
                throw r(n(a) + " is not an object")
            }
        }
        ,
        3138: (t, s, e) => {
            var o = e(2309)
              , n = e(9683)
              , r = e(2925)
              , a = function(l) {
                return function(u, i, c) {
                    var v = o(u), m = r(v), p = n(c, m), f;
                    if (l && i != i) {
                        for (; m > p; )
                            if (f = v[p++],
                            f != f)
                                return !0
                    } else
                        for (; m > p; p++)
                            if ((l || p in v) && v[p] === i)
                                return l || p || 0;
                    return !l && -1
                }
            };
            t.exports = {
                includes: a(!0),
                indexOf: a(!1)
            }
        }
        ,
        8004: (t, s, e) => {
            var o = e(9944)
              , n = e(8633)
              , r = e(5036)
              , a = e(5856)
              , l = e(2925)
              , u = e(6762)
              , i = n([].push)
              , c = function(v) {
                var m = v == 1
                  , p = v == 2
                  , f = v == 3
                  , g = v == 4
                  , h = v == 6
                  , y = v == 7
                  , _ = v == 5 || h;
                return function(b, C, E, S) {
                    for (var R = a(b), K = r(R), J = o(C, E), ie = l(K), U = 0, re = S || u, Z = m ? re(b, ie) : p || y ? re(b, 0) : void 0, $, z; ie > U; U++)
                        if ((_ || U in K) && ($ = K[U],
                        z = J($, U, R),
                        v))
                            if (m)
                                Z[U] = z;
                            else if (z)
                                switch (v) {
                                case 3:
                                    return !0;
                                case 5:
                                    return $;
                                case 6:
                                    return U;
                                case 2:
                                    i(Z, $)
                                }
                            else
                                switch (v) {
                                case 4:
                                    return !1;
                                case 7:
                                    i(Z, $)
                                }
                    return h ? -1 : f || g ? g : Z
                }
            };
            t.exports = {
                forEach: c(0),
                map: c(1),
                filter: c(2),
                some: c(3),
                every: c(4),
                find: c(5),
                findIndex: c(6),
                filterReject: c(7)
            }
        }
        ,
        6542: (t, s, e) => {
            var o = e(596)
              , n = e(8893)
              , r = e(1811)
              , a = n("species");
            t.exports = function(l) {
                return r >= 51 || !o(function() {
                    var u = []
                      , i = u.constructor = {};
                    return i[a] = function() {
                        return {
                            foo: 1
                        }
                    }
                    ,
                    u[l](Boolean).foo !== 1
                })
            }
        }
        ,
        5267: (t, s, e) => {
            var o = e(22)
              , n = e(1851)
              , r = e(625)
              , a = e(8893)
              , l = a("species")
              , u = Array;
            t.exports = function(i) {
                var c;
                return o(i) && (c = i.constructor,
                n(c) && (c === u || o(c.prototype)) ? c = void 0 : r(c) && (c = c[l],
                c === null && (c = void 0))),
                c === void 0 ? u : c
            }
        }
        ,
        6762: (t, s, e) => {
            var o = e(5267);
            t.exports = function(n, r) {
                return new (o(n))(r === 0 ? 0 : r)
            }
        }
        ,
        2323: (t, s, e) => {
            var o = e(8633)
              , n = o({}.toString)
              , r = o("".slice);
            t.exports = function(a) {
                return r(n(a), 8, -1)
            }
        }
        ,
        1231: (t, s, e) => {
            var o = e(14)
              , n = e(5470)
              , r = e(2323)
              , a = e(8893)
              , l = a("toStringTag")
              , u = Object
              , i = r(function() {
                return arguments
            }()) == "Arguments"
              , c = function(v, m) {
                try {
                    return v[m]
                } catch (p) {}
            };
            t.exports = o ? r : function(v) {
                var m, p, f;
                return v === void 0 ? "Undefined" : v === null ? "Null" : typeof (p = c(m = u(v), l)) == "string" ? p : i ? r(m) : (f = r(m)) == "Object" && n(m.callee) ? "Arguments" : f
            }
        }
        ,
        5620: (t, s, e) => {
            var o = e(1114)
              , n = e(1983)
              , r = e(6815)
              , a = e(9870);
            t.exports = function(l, u, i) {
                for (var c = n(u), v = a.f, m = r.f, p = 0; p < c.length; p++) {
                    var f = c[p];
                    !o(l, f) && !(i && o(i, f)) && v(l, f, m(u, f))
                }
            }
        }
        ,
        6652: (t, s, e) => {
            var o = e(4879)
              , n = e(9870)
              , r = e(3967);
            t.exports = o ? function(a, l, u) {
                return n.f(a, l, r(1, u))
            }
            : function(a, l, u) {
                return a[l] = u,
                a
            }
        }
        ,
        3967: t => {
            t.exports = function(s, e) {
                return {
                    enumerable: !(s & 1),
                    configurable: !(s & 2),
                    writable: !(s & 4),
                    value: e
                }
            }
        }
        ,
        5890: (t, s, e) => {
            var o = e(5470)
              , n = e(9870)
              , r = e(7373)
              , a = e(7862);
            t.exports = function(l, u, i, c) {
                c || (c = {});
                var v = c.enumerable
                  , m = c.name !== void 0 ? c.name : u;
                if (o(i) && r(i, m, c),
                c.global)
                    v ? l[u] = i : a(u, i);
                else {
                    try {
                        c.unsafe ? l[u] && (v = !0) : delete l[u]
                    } catch (p) {}
                    v ? l[u] = i : n.f(l, u, {
                        value: i,
                        enumerable: !1,
                        configurable: !c.nonConfigurable,
                        writable: !c.nonWritable
                    })
                }
                return l
            }
        }
        ,
        7862: (t, s, e) => {
            var o = e(8280)
              , n = Object.defineProperty;
            t.exports = function(r, a) {
                try {
                    n(o, r, {
                        value: a,
                        configurable: !0,
                        writable: !0
                    })
                } catch (l) {
                    o[r] = a
                }
                return a
            }
        }
        ,
        4879: (t, s, e) => {
            var o = e(596);
            t.exports = !o(function() {
                return Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1] != 7
            })
        }
        ,
        6701: t => {
            var s = typeof document == "object" && document.all
              , e = typeof s == "undefined" && s !== void 0;
            t.exports = {
                all: s,
                IS_HTMLDDA: e
            }
        }
        ,
        3229: (t, s, e) => {
            var o = e(8280)
              , n = e(625)
              , r = o.document
              , a = n(r) && n(r.createElement);
            t.exports = function(l) {
                return a ? r.createElement(l) : {}
            }
        }
        ,
        4467: t => {
            t.exports = typeof navigator != "undefined" && String(navigator.userAgent) || ""
        }
        ,
        1811: (t, s, e) => {
            var o = e(8280), n = e(4467), r = o.process, a = o.Deno, l = r && r.versions || a && a.version, u = l && l.v8, i, c;
            u && (i = u.split("."),
            c = i[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
            !c && n && (i = n.match(/Edge\/(\d+)/),
            (!i || i[1] >= 74) && (i = n.match(/Chrome\/(\d+)/),
            i && (c = +i[1]))),
            t.exports = c
        }
        ,
        9170: t => {
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }
        ,
        6742: (t, s, e) => {
            var o = e(8280)
              , n = e(6815).f
              , r = e(6652)
              , a = e(5890)
              , l = e(7862)
              , u = e(5620)
              , i = e(4938);
            t.exports = function(c, v) {
                var m = c.target, p = c.global, f = c.stat, g, h, y, _, b, C;
                if (p ? h = o : f ? h = o[m] || l(m, {}) : h = (o[m] || {}).prototype,
                h)
                    for (y in v) {
                        if (b = v[y],
                        c.dontCallGetSet ? (C = n(h, y),
                        _ = C && C.value) : _ = h[y],
                        g = i(p ? y : m + (f ? "." : "#") + y, c.forced),
                        !g && _ !== void 0) {
                            if (typeof b == typeof _)
                                continue;
                            u(b, _)
                        }
                        (c.sham || _ && _.sham) && r(b, "sham", !0),
                        a(h, y, b, c)
                    }
            }
        }
        ,
        596: t => {
            t.exports = function(s) {
                try {
                    return !!s()
                } catch (e) {
                    return !0
                }
            }
        }
        ,
        9944: (t, s, e) => {
            var o = e(8573)
              , n = e(6457)
              , r = e(9293)
              , a = o(o.bind);
            t.exports = function(l, u) {
                return n(l),
                u === void 0 ? l : r ? a(l, u) : function() {
                    return l.apply(u, arguments)
                }
            }
        }
        ,
        9293: (t, s, e) => {
            var o = e(596);
            t.exports = !o(function() {
                var n = function() {}
                .bind();
                return typeof n != "function" || n.hasOwnProperty("prototype")
            })
        }
        ,
        1677: (t, s, e) => {
            var o = e(9293)
              , n = Function.prototype.call;
            t.exports = o ? n.bind(n) : function() {
                return n.apply(n, arguments)
            }
        }
        ,
        455: (t, s, e) => {
            var o = e(4879)
              , n = e(1114)
              , r = Function.prototype
              , a = o && Object.getOwnPropertyDescriptor
              , l = n(r, "name")
              , u = l && function() {}
            .name === "something"
              , i = l && (!o || o && a(r, "name").configurable);
            t.exports = {
                EXISTS: l,
                PROPER: u,
                CONFIGURABLE: i
            }
        }
        ,
        8573: (t, s, e) => {
            var o = e(2323)
              , n = e(8633);
            t.exports = function(r) {
                if (o(r) === "Function")
                    return n(r)
            }
        }
        ,
        8633: (t, s, e) => {
            var o = e(9293)
              , n = Function.prototype
              , r = n.call
              , a = o && n.bind.bind(r, r);
            t.exports = o ? a : function(l) {
                return function() {
                    return r.apply(l, arguments)
                }
            }
        }
        ,
        6141: (t, s, e) => {
            var o = e(8280)
              , n = e(5470)
              , r = function(a) {
                return n(a) ? a : void 0
            };
            t.exports = function(a, l) {
                return arguments.length < 2 ? r(o[a]) : o[a] && o[a][l]
            }
        }
        ,
        9068: (t, s, e) => {
            var o = e(6457)
              , n = e(1307);
            t.exports = function(r, a) {
                var l = r[a];
                return n(l) ? void 0 : o(l)
            }
        }
        ,
        8280: (t, s, e) => {
            var o = function(n) {
                return n && n.Math == Math && n
            };
            t.exports = o(typeof globalThis == "object" && globalThis) || o(typeof window == "object" && window) || o(typeof self == "object" && self) || o(typeof e.g == "object" && e.g) || function() {
                return this
            }() || Function("return this")()
        }
        ,
        1114: (t, s, e) => {
            var o = e(8633)
              , n = e(5856)
              , r = o({}.hasOwnProperty);
            t.exports = Object.hasOwn || function(l, u) {
                return r(n(l), u)
            }
        }
        ,
        856: t => {
            t.exports = {}
        }
        ,
        5042: (t, s, e) => {
            var o = e(4879)
              , n = e(596)
              , r = e(3229);
            t.exports = !o && !n(function() {
                return Object.defineProperty(r("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a != 7
            })
        }
        ,
        5036: (t, s, e) => {
            var o = e(8633)
              , n = e(596)
              , r = e(2323)
              , a = Object
              , l = o("".split);
            t.exports = n(function() {
                return !a("z").propertyIsEnumerable(0)
            }) ? function(u) {
                return r(u) == "String" ? l(u, "") : a(u)
            }
            : a
        }
        ,
        314: (t, s, e) => {
            var o = e(8633)
              , n = e(5470)
              , r = e(4722)
              , a = o(Function.toString);
            n(r.inspectSource) || (r.inspectSource = function(l) {
                return a(l)
            }
            ),
            t.exports = r.inspectSource
        }
        ,
        3171: (t, s, e) => {
            var o = e(7466), n = e(8280), r = e(625), a = e(6652), l = e(1114), u = e(4722), i = e(8763), c = e(856), v = "Object already initialized", m = n.TypeError, p = n.WeakMap, f, g, h, y = function(E) {
                return h(E) ? g(E) : f(E, {})
            }, _ = function(E) {
                return function(S) {
                    var R;
                    if (!r(S) || (R = g(S)).type !== E)
                        throw m("Incompatible receiver, " + E + " required");
                    return R
                }
            };
            if (o || u.state) {
                var b = u.state || (u.state = new p);
                b.get = b.get,
                b.has = b.has,
                b.set = b.set,
                f = function(E, S) {
                    if (b.has(E))
                        throw m(v);
                    return S.facade = E,
                    b.set(E, S),
                    S
                }
                ,
                g = function(E) {
                    return b.get(E) || {}
                }
                ,
                h = function(E) {
                    return b.has(E)
                }
            } else {
                var C = i("state");
                c[C] = !0,
                f = function(E, S) {
                    if (l(E, C))
                        throw m(v);
                    return S.facade = E,
                    a(E, C, S),
                    S
                }
                ,
                g = function(E) {
                    return l(E, C) ? E[C] : {}
                }
                ,
                h = function(E) {
                    return l(E, C)
                }
            }
            t.exports = {
                set: f,
                get: g,
                has: h,
                enforce: y,
                getterFor: _
            }
        }
        ,
        22: (t, s, e) => {
            var o = e(2323);
            t.exports = Array.isArray || function(r) {
                return o(r) == "Array"
            }
        }
        ,
        5470: (t, s, e) => {
            var o = e(6701)
              , n = o.all;
            t.exports = o.IS_HTMLDDA ? function(r) {
                return typeof r == "function" || r === n
            }
            : function(r) {
                return typeof r == "function"
            }
        }
        ,
        1851: (t, s, e) => {
            var o = e(8633)
              , n = e(596)
              , r = e(5470)
              , a = e(1231)
              , l = e(6141)
              , u = e(314)
              , i = function() {}
              , c = []
              , v = l("Reflect", "construct")
              , m = /^\s*(?:class|function)\b/
              , p = o(m.exec)
              , f = !m.exec(i)
              , g = function(_) {
                if (!r(_))
                    return !1;
                try {
                    return v(i, c, _),
                    !0
                } catch (b) {
                    return !1
                }
            }
              , h = function(_) {
                if (!r(_))
                    return !1;
                switch (a(_)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                    return !1
                }
                try {
                    return f || !!p(m, u(_))
                } catch (b) {
                    return !0
                }
            };
            h.sham = !0,
            t.exports = !v || n(function() {
                var y;
                return g(g.call) || !g(Object) || !g(function() {
                    y = !0
                }) || y
            }) ? h : g
        }
        ,
        4938: (t, s, e) => {
            var o = e(596)
              , n = e(5470)
              , r = /#|\.prototype\./
              , a = function(v, m) {
                var p = u[l(v)];
                return p == c ? !0 : p == i ? !1 : n(m) ? o(m) : !!m
            }
              , l = a.normalize = function(v) {
                return String(v).replace(r, ".").toLowerCase()
            }
              , u = a.data = {}
              , i = a.NATIVE = "N"
              , c = a.POLYFILL = "P";
            t.exports = a
        }
        ,
        1307: t => {
            t.exports = function(s) {
                return s == null
            }
        }
        ,
        625: (t, s, e) => {
            var o = e(5470)
              , n = e(6701)
              , r = n.all;
            t.exports = n.IS_HTMLDDA ? function(a) {
                return typeof a == "object" ? a !== null : o(a) || a === r
            }
            : function(a) {
                return typeof a == "object" ? a !== null : o(a)
            }
        }
        ,
        358: t => {
            t.exports = !1
        }
        ,
        6137: (t, s, e) => {
            var o = e(6141)
              , n = e(5470)
              , r = e(813)
              , a = e(7717)
              , l = Object;
            t.exports = a ? function(u) {
                return typeof u == "symbol"
            }
            : function(u) {
                var i = o("Symbol");
                return n(i) && r(i.prototype, l(u))
            }
        }
        ,
        2925: (t, s, e) => {
            var o = e(65);
            t.exports = function(n) {
                return o(n.length)
            }
        }
        ,
        7373: (t, s, e) => {
            var o = e(8633)
              , n = e(596)
              , r = e(5470)
              , a = e(1114)
              , l = e(4879)
              , u = e(455).CONFIGURABLE
              , i = e(314)
              , c = e(3171)
              , v = c.enforce
              , m = c.get
              , p = String
              , f = Object.defineProperty
              , g = o("".slice)
              , h = o("".replace)
              , y = o([].join)
              , _ = l && !n(function() {
                return f(function() {}, "length", {
                    value: 8
                }).length !== 8
            })
              , b = String(String).split("String")
              , C = t.exports = function(E, S, R) {
                g(p(S), 0, 7) === "Symbol(" && (S = "[" + h(p(S), /^Symbol\(([^)]*)\)/, "$1") + "]"),
                R && R.getter && (S = "get " + S),
                R && R.setter && (S = "set " + S),
                (!a(E, "name") || u && E.name !== S) && (l ? f(E, "name", {
                    value: S,
                    configurable: !0
                }) : E.name = S),
                _ && R && a(R, "arity") && E.length !== R.arity && f(E, "length", {
                    value: R.arity
                });
                try {
                    R && a(R, "constructor") && R.constructor ? l && f(E, "prototype", {
                        writable: !1
                    }) : E.prototype && (E.prototype = void 0)
                } catch (J) {}
                var K = v(E);
                return a(K, "source") || (K.source = y(b, typeof S == "string" ? S : "")),
                E
            }
            ;
            Function.prototype.toString = C(function() {
                return r(this) && m(this).source || i(this)
            }, "toString")
        }
        ,
        7287: t => {
            var s = Math.ceil
              , e = Math.floor;
            t.exports = Math.trunc || function(n) {
                var r = +n;
                return (r > 0 ? e : s)(r)
            }
        }
        ,
        9870: (t, s, e) => {
            var o = e(4879)
              , n = e(5042)
              , r = e(479)
              , a = e(8081)
              , l = e(8053)
              , u = TypeError
              , i = Object.defineProperty
              , c = Object.getOwnPropertyDescriptor
              , v = "enumerable"
              , m = "configurable"
              , p = "writable";
            s.f = o ? r ? function(g, h, y) {
                if (a(g),
                h = l(h),
                a(y),
                typeof g == "function" && h === "prototype" && "value"in y && p in y && !y[p]) {
                    var _ = c(g, h);
                    _ && _[p] && (g[h] = y.value,
                    y = {
                        configurable: m in y ? y[m] : _[m],
                        enumerable: v in y ? y[v] : _[v],
                        writable: !1
                    })
                }
                return i(g, h, y)
            }
            : i : function(g, h, y) {
                if (a(g),
                h = l(h),
                a(y),
                n)
                    try {
                        return i(g, h, y)
                    } catch (_) {}
                if ("get"in y || "set"in y)
                    throw u("Accessors not supported");
                return "value"in y && (g[h] = y.value),
                g
            }
        }
        ,
        6815: (t, s, e) => {
            var o = e(4879)
              , n = e(1677)
              , r = e(2089)
              , a = e(3967)
              , l = e(2309)
              , u = e(8053)
              , i = e(1114)
              , c = e(5042)
              , v = Object.getOwnPropertyDescriptor;
            s.f = o ? v : function(p, f) {
                if (p = l(p),
                f = u(f),
                c)
                    try {
                        return v(p, f)
                    } catch (g) {}
                if (i(p, f))
                    return a(!n(r.f, p, f), p[f])
            }
        }
        ,
        9187: (t, s, e) => {
            var o = e(1975)
              , n = e(9170)
              , r = n.concat("length", "prototype");
            s.f = Object.getOwnPropertyNames || function(l) {
                return o(l, r)
            }
        }
        ,
        859: (t, s) => {
            s.f = Object.getOwnPropertySymbols
        }
        ,
        813: (t, s, e) => {
            var o = e(8633);
            t.exports = o({}.isPrototypeOf)
        }
        ,
        1975: (t, s, e) => {
            var o = e(8633)
              , n = e(1114)
              , r = e(2309)
              , a = e(3138).indexOf
              , l = e(856)
              , u = o([].push);
            t.exports = function(i, c) {
                var v = r(i), m = 0, p = [], f;
                for (f in v)
                    !n(l, f) && n(v, f) && u(p, f);
                for (; c.length > m; )
                    n(v, f = c[m++]) && (~a(p, f) || u(p, f));
                return p
            }
        }
        ,
        2089: (t, s) => {
            "use strict";
            var e = {}.propertyIsEnumerable
              , o = Object.getOwnPropertyDescriptor
              , n = o && !e.call({
                1: 2
            }, 1);
            s.f = n ? function(a) {
                var l = o(this, a);
                return !!l && l.enumerable
            }
            : e
        }
        ,
        4787: (t, s, e) => {
            var o = e(1677)
              , n = e(5470)
              , r = e(625)
              , a = TypeError;
            t.exports = function(l, u) {
                var i, c;
                if (u === "string" && n(i = l.toString) && !r(c = o(i, l)) || n(i = l.valueOf) && !r(c = o(i, l)) || u !== "string" && n(i = l.toString) && !r(c = o(i, l)))
                    return c;
                throw a("Can't convert object to primitive value")
            }
        }
        ,
        1983: (t, s, e) => {
            var o = e(6141)
              , n = e(8633)
              , r = e(9187)
              , a = e(859)
              , l = e(8081)
              , u = n([].concat);
            t.exports = o("Reflect", "ownKeys") || function(c) {
                var v = r.f(l(c))
                  , m = a.f;
                return m ? u(v, m(c)) : v
            }
        }
        ,
        1662: (t, s, e) => {
            var o = e(1307)
              , n = TypeError;
            t.exports = function(r) {
                if (o(r))
                    throw n("Can't call method on " + r);
                return r
            }
        }
        ,
        8763: (t, s, e) => {
            var o = e(103)
              , n = e(8866)
              , r = o("keys");
            t.exports = function(a) {
                return r[a] || (r[a] = n(a))
            }
        }
        ,
        4722: (t, s, e) => {
            var o = e(8280)
              , n = e(7862)
              , r = "__core-js_shared__"
              , a = o[r] || n(r, {});
            t.exports = a
        }
        ,
        103: (t, s, e) => {
            var o = e(358)
              , n = e(4722);
            (t.exports = function(r, a) {
                return n[r] || (n[r] = a !== void 0 ? a : {})
            }
            )("versions", []).push({
                version: "3.29.1",
                mode: o ? "pure" : "global",
                copyright: "\xA9 2014-2023 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        }
        ,
        3111: (t, s, e) => {
            var o = e(1811)
              , n = e(596);
            t.exports = !!Object.getOwnPropertySymbols && !n(function() {
                var r = Symbol();
                return !String(r) || !(Object(r)instanceof Symbol) || !Symbol.sham && o && o < 41
            })
        }
        ,
        9683: (t, s, e) => {
            var o = e(3553)
              , n = Math.max
              , r = Math.min;
            t.exports = function(a, l) {
                var u = o(a);
                return u < 0 ? n(u + l, 0) : r(u, l)
            }
        }
        ,
        2309: (t, s, e) => {
            var o = e(5036)
              , n = e(1662);
            t.exports = function(r) {
                return o(n(r))
            }
        }
        ,
        3553: (t, s, e) => {
            var o = e(7287);
            t.exports = function(n) {
                var r = +n;
                return r !== r || r === 0 ? 0 : o(r)
            }
        }
        ,
        65: (t, s, e) => {
            var o = e(3553)
              , n = Math.min;
            t.exports = function(r) {
                return r > 0 ? n(o(r), 9007199254740991) : 0
            }
        }
        ,
        5856: (t, s, e) => {
            var o = e(1662)
              , n = Object;
            t.exports = function(r) {
                return n(o(r))
            }
        }
        ,
        2988: (t, s, e) => {
            var o = e(1677)
              , n = e(625)
              , r = e(6137)
              , a = e(9068)
              , l = e(4787)
              , u = e(8893)
              , i = TypeError
              , c = u("toPrimitive");
            t.exports = function(v, m) {
                if (!n(v) || r(v))
                    return v;
                var p = a(v, c), f;
                if (p) {
                    if (m === void 0 && (m = "default"),
                    f = o(p, v, m),
                    !n(f) || r(f))
                        return f;
                    throw i("Can't convert object to primitive value")
                }
                return m === void 0 && (m = "number"),
                l(v, m)
            }
        }
        ,
        8053: (t, s, e) => {
            var o = e(2988)
              , n = e(6137);
            t.exports = function(r) {
                var a = o(r, "string");
                return n(a) ? a : a + ""
            }
        }
        ,
        14: (t, s, e) => {
            var o = e(8893)
              , n = o("toStringTag")
              , r = {};
            r[n] = "z",
            t.exports = String(r) === "[object z]"
        }
        ,
        2786: t => {
            var s = String;
            t.exports = function(e) {
                try {
                    return s(e)
                } catch (o) {
                    return "Object"
                }
            }
        }
        ,
        8866: (t, s, e) => {
            var o = e(8633)
              , n = 0
              , r = Math.random()
              , a = o(1.toString);
            t.exports = function(l) {
                return "Symbol(" + (l === void 0 ? "" : l) + ")_" + a(++n + r, 36)
            }
        }
        ,
        7717: (t, s, e) => {
            var o = e(3111);
            t.exports = o && !Symbol.sham && typeof Symbol.iterator == "symbol"
        }
        ,
        479: (t, s, e) => {
            var o = e(4879)
              , n = e(596);
            t.exports = o && n(function() {
                return Object.defineProperty(function() {}, "prototype", {
                    value: 42,
                    writable: !1
                }).prototype != 42
            })
        }
        ,
        7466: (t, s, e) => {
            var o = e(8280)
              , n = e(5470)
              , r = o.WeakMap;
            t.exports = n(r) && /native code/.test(String(r))
        }
        ,
        8893: (t, s, e) => {
            var o = e(8280)
              , n = e(103)
              , r = e(1114)
              , a = e(8866)
              , l = e(3111)
              , u = e(7717)
              , i = o.Symbol
              , c = n("wks")
              , v = u ? i.for || i : i && i.withoutSetter || a;
            t.exports = function(m) {
                return r(c, m) || (c[m] = l && r(i, m) ? i[m] : v("Symbol." + m)),
                c[m]
            }
        }
        ,
        6040: (t, s, e) => {
            "use strict";
            var o = e(6742)
              , n = e(8004).map
              , r = e(6542)
              , a = r("map");
            o({
                target: "Array",
                proto: !0,
                forced: !a
            }, {
                map: function(u) {
                    return n(this, u, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }
        ,
        225: (t, s, e) => {
            "use strict";
            e.r(s),
            e.d(s, {
                default: () => u
            });
            var o = e(1858)
              , n = e.n(o)
              , r = e(7836)
              , a = e.n(r)
              , l = a()(n());
            l.push([t.id, ".kpro-common-event-collector-error-boundary-button{background:#326bfb;border-radius:4px;color:#fff;cursor:pointer;height:32px;margin-top:24px;padding:5px 15px}", ""]);
            const u = l
        }
        ,
        591: (t, s, e) => {
            "use strict";
            e.r(s),
            e.d(s, {
                default: () => u
            });
            var o = e(1858)
              , n = e.n(o)
              , r = e(7836)
              , a = e.n(r)
              , l = a()(n());
            l.push([t.id, ".kpro-common-event-collector-mobile-result-container{align-items:center;display:flex;flex-direction:column;height:100%;width:100%}.kpro-common-event-collector-mobile-result-notice-png{height:84px;margin-top:20%;width:84px}.kpro-common-event-collector-mobile-result-info{color:#9c9c9c;font-size:14px;line-height:22px;margin:16px 0;text-align:center;width:80%}.kpro-common-event-collector-mobile-result-title{font-size:18px;font-weight:600;margin:22px 0 4px}", ""]);
            const u = l
        }
        ,
        3658: (t, s, e) => {
            "use strict";
            e.r(s),
            e.d(s, {
                default: () => u
            });
            var o = e(1858)
              , n = e.n(o)
              , r = e(7836)
              , a = e.n(r)
              , l = a()(n());
            l.push([t.id, ".kpro-common-event-collector-pc-result-container{align-items:center;display:flex;flex-direction:column;height:100%;width:100%}.kpro-common-event-collector-pc-result-icon{margin-top:20%}.kpro-common-event-collector-pc-result-title{font-size:18px;font-weight:600;margin:22px 0 4px}.kpro-common-event-collector-pc-result-subTitle{color:#8c8c8c;line-height:22px}", ""]);
            const u = l
        }
        ,
        2791: (t, s, e) => {
            "use strict";
            e.r(s),
            e.d(s, {
                default: () => u
            });
            var o = e(1858)
              , n = e.n(o)
              , r = e(7836)
              , a = e.n(r)
              , l = a()(n());
            l.push([t.id, ".KSV2-order-logistics_summary{display:flex;height:125px;justify-content:space-between;margin-bottom:24px}.KSV2-order-logistics_summary_item{background-color:#f6faff;border-radius:12px;cursor:pointer;flex:1 1;margin-right:16px;padding:16px}.KSV2-order-logistics_summary_item:last-child{margin-right:0}.KSV2-order-logistics_summary_title{color:#1d1d1f;font-size:14px;font-weight:500;line-height:20px;margin-bottom:12px}.KSV2-order-logistics_summary_value{color:#1d1d1f;font-family:SF Pro;font-size:24px;font-weight:700;line-height:29px;margin-bottom:12px}.KSV2-order-logistics_summary_action{height:20px}.KSV2-order-logistics_summary_action a{color:#326bfb;font-size:14px;font-weight:500;line-height:20px;-webkit-text-decoration-line:none;text-decoration-line:none;-webkit-text-decoration-style:none;text-decoration-style:none}.KSV2-order-logistics_time{color:#a5a5ab;font-size:12px;line-height:14px;margin-bottom:16px}.KSV2-order-logistics_radio{display:flex;flex-wrap:wrap}.KSV2-order-logistics_data_card{flex-basis:calc(50% - 8px);margin-bottom:24px}.KSV2-order-logistics_data_card:nth-child(odd){margin-right:16px}", ""]);
            const u = l
        }
        ,
        7836: t => {
            "use strict";
            t.exports = function(s) {
                var e = [];
                return e.toString = function() {
                    return this.map(function(n) {
                        var r = ""
                          , a = typeof n[5] != "undefined";
                        return n[4] && (r += "@supports (".concat(n[4], ") {")),
                        n[2] && (r += "@media ".concat(n[2], " {")),
                        a && (r += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")),
                        r += s(n),
                        a && (r += "}"),
                        n[2] && (r += "}"),
                        n[4] && (r += "}"),
                        r
                    }).join("")
                }
                ,
                e.i = function(n, r, a, l, u) {
                    typeof n == "string" && (n = [[null, n, void 0]]);
                    var i = {};
                    if (a)
                        for (var c = 0; c < this.length; c++) {
                            var v = this[c][0];
                            v != null && (i[v] = !0)
                        }
                    for (var m = 0; m < n.length; m++) {
                        var p = [].concat(n[m]);
                        a && i[p[0]] || (typeof u != "undefined" && (typeof p[5] == "undefined" || (p[1] = "@layer".concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {").concat(p[1], "}")),
                        p[5] = u),
                        r && (p[2] && (p[1] = "@media ".concat(p[2], " {").concat(p[1], "}")),
                        p[2] = r),
                        l && (p[4] ? (p[1] = "@supports (".concat(p[4], ") {").concat(p[1], "}"),
                        p[4] = l) : p[4] = "".concat(l)),
                        e.push(p))
                    }
                }
                ,
                e
            }
        }
        ,
        1858: t => {
            "use strict";
            t.exports = function(s) {
                return s[1]
            }
        }
        ,
        1836: (t, s, e) => {
            var o = e(3646)
              , n = e(9767)
              , r = e(8110)
              , a = e(8406)
              , l = e(4305)
              , u = e(6948)
              , i = e(225);
            i = i.__esModule ? i.default : i;
            var c = {};
            c.styleTagTransform = u,
            c.setAttributes = a,
            c.insert = r.bind(null, "head"),
            c.domAPI = n,
            c.insertStyleElement = l;
            var v = o(i, c);
            t.exports = i && i.locals || {}
        }
        ,
        7196: (t, s, e) => {
            var o = e(3646)
              , n = e(9767)
              , r = e(8110)
              , a = e(8406)
              , l = e(4305)
              , u = e(6948)
              , i = e(591);
            i = i.__esModule ? i.default : i;
            var c = {};
            c.styleTagTransform = u,
            c.setAttributes = a,
            c.insert = r.bind(null, "head"),
            c.domAPI = n,
            c.insertStyleElement = l;
            var v = o(i, c);
            t.exports = i && i.locals || {}
        }
        ,
        8607: (t, s, e) => {
            var o = e(3646)
              , n = e(9767)
              , r = e(8110)
              , a = e(8406)
              , l = e(4305)
              , u = e(6948)
              , i = e(3658);
            i = i.__esModule ? i.default : i;
            var c = {};
            c.styleTagTransform = u,
            c.setAttributes = a,
            c.insert = r.bind(null, "head"),
            c.domAPI = n,
            c.insertStyleElement = l;
            var v = o(i, c);
            t.exports = i && i.locals || {}
        }
        ,
        3032: (t, s, e) => {
            var o = e(3646)
              , n = e(9767)
              , r = e(8110)
              , a = e(8406)
              , l = e(4305)
              , u = e(6948)
              , i = e(2791);
            i = i.__esModule ? i.default : i;
            var c = {};
            c.styleTagTransform = u,
            c.setAttributes = a,
            c.insert = r.bind(null, "head"),
            c.domAPI = n,
            c.insertStyleElement = l;
            var v = o(i, c);
            t.exports = i && i.locals || {}
        }
        ,
        3646: t => {
            "use strict";
            var s = [];
            function e(r) {
                for (var a = -1, l = 0; l < s.length; l++)
                    if (s[l].identifier === r) {
                        a = l;
                        break
                    }
                return a
            }
            function o(r, a) {
                for (var l = {}, u = [], i = 0; i < r.length; i++) {
                    var c = r[i]
                      , v = a.base ? c[0] + a.base : c[0]
                      , m = l[v] || 0
                      , p = "".concat(v, " ").concat(m);
                    l[v] = m + 1;
                    var f = e(p)
                      , g = {
                        css: c[1],
                        media: c[2],
                        sourceMap: c[3],
                        supports: c[4],
                        layer: c[5]
                    };
                    if (f !== -1)
                        s[f].references++,
                        s[f].updater(g);
                    else {
                        var h = n(g, a);
                        a.byIndex = i,
                        s.splice(i, 0, {
                            identifier: p,
                            updater: h,
                            references: 1
                        })
                    }
                    u.push(p)
                }
                return u
            }
            function n(r, a) {
                var l = a.domAPI(a);
                l.update(r);
                var u = function(c) {
                    if (c) {
                        if (c.css === r.css && c.media === r.media && c.sourceMap === r.sourceMap && c.supports === r.supports && c.layer === r.layer)
                            return;
                        l.update(r = c)
                    } else
                        l.remove()
                };
                return u
            }
            t.exports = function(r, a) {
                a = a || {},
                r = r || [];
                var l = o(r, a);
                return function(i) {
                    i = i || [];
                    for (var c = 0; c < l.length; c++) {
                        var v = l[c]
                          , m = e(v);
                        s[m].references--
                    }
                    for (var p = o(i, a), f = 0; f < l.length; f++) {
                        var g = l[f]
                          , h = e(g);
                        s[h].references === 0 && (s[h].updater(),
                        s.splice(h, 1))
                    }
                    l = p
                }
            }
        }
        ,
        8110: t => {
            "use strict";
            var s = {};
            function e(n) {
                if (typeof s[n] == "undefined") {
                    var r = document.querySelector(n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                        try {
                            r = r.contentDocument.head
                        } catch (a) {
                            r = null
                        }
                    s[n] = r
                }
                return s[n]
            }
            function o(n, r) {
                var a = e(n);
                if (!a)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                a.appendChild(r)
            }
            t.exports = o
        }
        ,
        4305: t => {
            "use strict";
            function s(e) {
                var o = document.createElement("style");
                return e.setAttributes(o, e.attributes),
                e.insert(o, e.options),
                o
            }
            t.exports = s
        }
        ,
        8406: (t, s, e) => {
            "use strict";
            function o(n) {
                var r = e.nc;
                r && n.setAttribute("nonce", r)
            }
            t.exports = o
        }
        ,
        9767: t => {
            "use strict";
            function s(n, r, a) {
                var l = "";
                a.supports && (l += "@supports (".concat(a.supports, ") {")),
                a.media && (l += "@media ".concat(a.media, " {"));
                var u = typeof a.layer != "undefined";
                u && (l += "@layer".concat(a.layer.length > 0 ? " ".concat(a.layer) : "", " {")),
                l += a.css,
                u && (l += "}"),
                a.media && (l += "}"),
                a.supports && (l += "}");
                var i = a.sourceMap;
                i && typeof btoa != "undefined" && (l += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
                r.styleTagTransform(l, n, r.options)
            }
            function e(n) {
                if (n.parentNode === null)
                    return !1;
                n.parentNode.removeChild(n)
            }
            function o(n) {
                if (typeof document == "undefined")
                    return {
                        update: function() {},
                        remove: function() {}
                    };
                var r = n.insertStyleElement(n);
                return {
                    update: function(l) {
                        s(r, n, l)
                    },
                    remove: function() {
                        e(r)
                    }
                }
            }
            t.exports = o
        }
        ,
        6948: t => {
            "use strict";
            function s(e, o) {
                if (o.styleSheet)
                    o.styleSheet.cssText = e;
                else {
                    for (; o.firstChild; )
                        o.removeChild(o.firstChild);
                    o.appendChild(document.createTextNode(e))
                }
            }
            t.exports = s
        }
        ,
        5055: t => {
            "use strict";
            t.exports = F
        }
        ,
        8999: t => {
            "use strict";
            t.exports = D
        }
        ,
        3078: t => {
            "use strict";
            t.exports = A
        }
        ,
        9787: t => {
            "use strict";
            t.exports = M
        }
    }
      , pe = {};
    function T(t) {
        var s = pe[t];
        if (s !== void 0)
            return s.exports;
        var e = pe[t] = {
            id: t,
            exports: {}
        };
        return ee[t].call(e.exports, e, e.exports, T),
        e.exports
    }
    T.n = t => {
        var s = t && t.__esModule ? () => t.default : () => t;
        return T.d(s, {
            a: s
        }),
        s
    }
    ,
    T.d = (t, s) => {
        for (var e in s)
            T.o(s, e) && !T.o(t, e) && Object.defineProperty(t, e, {
                enumerable: !0,
                get: s[e]
            })
    }
    ,
    T.g = function() {
        if (typeof globalThis == "object")
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if (typeof window == "object")
                return window
        }
    }(),
    T.o = (t, s) => Object.prototype.hasOwnProperty.call(t, s),
    T.r = t => {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    T.nc = void 0;
    var ce = {};
    return ( () => {
        "use strict";
        T.r(ce),
        T.d(ce, {
            OrderLogistics: () => _e,
            default: () => Be
        });
        var t = T(9787)
          , s = T.n(t)
          , e = T(6040)
          , o = T(3078)
          , n = T.n(o)
          , r = T(8999)
          , a = T.n(r)
          , l = T(5055)
          , u = T.n(l);
        function i(d) {
            return "KSV2-order-logistics_".concat(d)
        }
        function c(d) {
            if (d) {
                var x = window.open(d);
                x != null && x.opener && (x.opener = null)
            }
        }
        var v = T(3032)
          , m = function(d) {
            return d[d.RISE = 1] = "RISE",
            d[d.FALL = 2] = "FALL",
            d[d.FLAT = 3] = "FLAT",
            d[d.UNKNOWN = 4] = "UNKNOWN",
            d
        }({});
        function p(d) {
            var x, O, I, L = d.style, N = d.layoutConfig, w = d.suggestionConfigFrameImplant, B = d.logisticsData, j = d.ratioData, G = d.collectClick, V = d.webloger;
            return !B || !j ? null : s().createElement(n(), {
                layoutConfig: N,
                style: L,
                noteList: j == null || (x = j.ratioInfo) === null || x === void 0 ? void 0 : x.map(function(P) {
                    return {
                        label: P.title,
                        value: P.hoverText
                    }
                })
            }, s().createElement("div", {
                className: i("summary")
            }, B == null || (O = B.deliveryInfo) === null || O === void 0 ? void 0 : O.map(function(P) {
                return s().createElement("div", {
                    key: P.title,
                    className: i("summary_item"),
                    onClick: function() {
                        G == null || G("ORDER_AND_LOGISTICS", {
                            click_type: 1,
                            click_area: P.title,
                            jump_url: P.actionUrl
                        }),
                        c(P.actionUrl)
                    }
                }, s().createElement("div", {
                    className: i("summary_title")
                }, P.title), s().createElement("div", {
                    className: i("summary_value")
                }, P.quantity), s().createElement("div", {
                    className: i("summary_action")
                }, s().createElement("a", {
                    href: P.actionUrl,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, P.actionText)))
            })), s().createElement("div", {
                className: i("time")
            }, j.updateTimeDesc), s().createElement("div", {
                className: i("radio")
            }, j == null || (I = j.ratioInfo) === null || I === void 0 ? void 0 : I.map(function(P) {
                var k = P.title
                  , Y = P.ratio
                  , q = P.changeRate
                  , H = P.changeRateType;
                return s().createElement(u(), {
                    customClass: i("data_card"),
                    cardKey: k,
                    key: k,
                    size: "small",
                    padding: 0,
                    title: k,
                    value: Y,
                    timeCompare: {
                        valueLeftSlot: "\u8F83\u524D1\u5929",
                        value: H !== m.UNKNOWN ? q : {
                            value: null,
                            valueType: "PERCENT"
                        },
                        isWithArrow: !0,
                        valueTrend: H === m.RISE ? "positive" : H === m.FALL ? "negative" : "hold"
                    }
                })
            })), s().createElement(a(), {
                suggestionConfig: w,
                logger: V,
                moduleName: N == null ? void 0 : N.title
            }))
        }
        var f = T(5340);
        function g() {
            return g = Object.assign ? Object.assign.bind() : function(d) {
                for (var x = 1; x < arguments.length; x++) {
                    var O = arguments[x];
                    for (var I in O)
                        Object.prototype.hasOwnProperty.call(O, I) && (d[I] = O[I])
                }
                return d
            }
            ,
            g.apply(this, arguments)
        }
        let h;
        (function(d) {
            d.Click = "CLICK",
            d.Show = "SHOW",
            d.Custom = "CUSTOM",
            d.DoubleClick = "DOUBLE_CLICK",
            d.TripleClick = "TRIPLE_CLICK",
            d.LongPress = "LONG_PRESS",
            d.Pull = "PULL",
            d.Drag = "DRAG",
            d.Scale = "SCALE",
            d.PullDown = "PULL_DOWN",
            d.PullUP = "PULL_UP",
            d.RightClick = "RIGHT_CLICK",
            d.Auto = "AUTO"
        }
        )(h || (h = {}));
        const y = (d, x) => {}
          , _ = t.createContext({
            collect: y
        });
        _.displayName = "KproContext";
        const b = d => {
            const j = d || {}
              , {children: x} = j
              , G = le(j, ["children"]) || {}
              , {collect: I} = G
              , L = le(G, ["collect"]);
            let N = I;
            typeof N != "function" && (N = y);
            const w = {}
              , B = (V, P) => {
                N(V.toLocaleUpperCase(), P)
            }
            ;
            return ["Click", "Show", "Custom"].forEach(V => {
                w[`collect${V}`] = P => {
                    P && I(V, P)
                }
            }
            ),
            React.createElement(_.Provider, {
                value: se(Te(se({}, L), {
                    collect: B
                }), w)
            }, x)
        }
          , C = () => (0,
        t.useContext)(_)
          , E = ({children: d}) => React.createElement(_.Consumer, null, x => React.createElement(React.Fragment, null, typeof d == "function" ? d(x) : null))
          , S = d => x => {
            const N = C()
              , {collect: O} = N
              , I = le(N, ["collect"]);
            "collectShow"in I || ["Click", "Show", "Custom"].forEach(w => {
                I[`collect${w}`] = B => {
                    B && O(w.toLocaleUpperCase(), B)
                }
            }
            );
            const L = se({}, x);
            return Object.keys(I).forEach(w => {
                w in L ? console.warn(`Key '${w}' and component conflict in KproContext value, and will be discarded`) : L[w] = I[w]
            }
            ),
            t.createElement(d, g({}, L, {
                collect: O
            }))
        }
          , R = d => S(d)
          , K = location && location.hostname || ""
          , J = ".kwaigobuy.com"
          , U = new RegExp(J.replace(/\./g, "\\.") + "$").test(K);
        function re(d) {
            let O = "" + (window && window.DOMAINS || "")[d];
            return /^(?:[\w\-]+\.)+\w{2,}$/.test(O) || (O = d),
            O
        }
        function Z(d) {
            let x = "";
            try {
                x = new URL(fillProtocol(d))
            } catch (I) {
                return d
            }
            x.hostname = re(x.hostname),
            U && (x.hostname = x.hostname.replace(/\.kwaixiaodian\.com$/, J));
            let O = x.toString();
            return x.pathname === "/" && !/\/$/.test(d) ? O.replace(/\/$/, "") : O
        }
        function $(d) {
            return /^\/\//.test(d) ? "https:" + d : d
        }
        let z = 3
          , me = 0
          , ye = !0;
        const ge = {}
          , ue = null
          , te = null;
        function Ae(d) {
            const x = d.hostname
              , O = d.toString()
              , L = x.match(te)[2]
              , N = ge[O] = {
                retry: !0,
                queue: []
            };
            for (let w = 0; w < ue.length; w++)
                ue[w] !== L && (d.hostname = x.replace(te, `$1${ue[w]}$3$4$5`),
                N.queue.push(d.toString()));
            return d.hostname = x.replace(te, "$1$2$3b$4$5"),
            N.queue.push(d.toString()),
            N
        }
        function he(d) {
            if (!d.retry)
                return "";
            let x = d.queue.shift();
            return d.queue.length === 0 && (d.retry = !1,
            me++,
            me >= z && (ye = !1)),
            x
        }
        function Ve(d) {
            let x = ge[d];
            if (x)
                return he(x);
            let O;
            try {
                O = new URL(fillProtocol(d))
            } catch (I) {
                return ""
            }
            return !te.test(O.hostname) || !ye ? "" : (x = Ae(O),
            he(x))
        }
        function He(d) {
            z = d
        }
        function ne(d) {
            let x = "";
            try {
                x = new URL($(d))
            } catch (L) {
                return d
            }
            let O = window && window._CDN_HOST_ || "";
            if (!O)
                return d;
            let I = "";
            try {
                I = new URL($(O))
            } catch (L) {
                return d
            }
            return x.hostname = I.hostname,
            x.toString()
        }
        const W = navigator.userAgent.toLowerCase()
          , De = ( () => {
            if (/applewebkit/g.test(W)) {
                if (/edge/g.test(W))
                    return !0;
                if (/opr/g.test(W))
                    return !0;
                if (/chrome/g.test(W))
                    return !0;
                if (/safari/g.test(W))
                    return !1
            } else {
                if (/gecko/g.test(W) && /firefox/g.test(W))
                    return !0;
                if (/presto/g.test(W))
                    return !0
            }
            return !1
        }
        )()
          , xe = ne("https://w2.eckwai.com/udata/pkg/eshop")
          , Me = /macintosh|mac os x/i.test(navigator.userAgent.toLocaleLowerCase()) ? `${xe}/googlechrome-mac.dmg` : `${xe}/83.0.4103.106_chrome64_stable_windows_installer.exe`
          , Ee = d => {
            console.warn("[kpro-tech-common-event-collector]", d)
        }
        ;
        var ze = T(8607);
        const X = "kpro-common-event-collector-pc-result"
          , Le = "https://w2.eckwai.com/kos/nlav12333/kp-assets/SystemErrorCircleFill.ec01864498cdb85c.png"
          , Ne = ({icon: d="", title: x, subTitle: O, extra: I}) => {
            let L = s().createElement("img", {
                src: ne(Le),
                className: `${X}-icon`
            });
            return d && (typeof d == "string" ? L = s().createElement("img", {
                src: ne(d),
                className: `${X}-icon`
            }) : L = d),
            s().createElement("div", {
                className: `${X}-container`
            }, L, x ? s().createElement("div", {
                className: `${X}-title`
            }, x) : null, O ? s().createElement("div", {
                className: `${X}-subTitle`
            }, O) : null, I ? s().createElement("div", {
                className: `${X}-extra`
            }, I) : null)
        }
        ;
        var ke = T(7196);
        const Q = "kpro-common-event-collector-mobile-result"
          , we = d => {
            const {icon: x, subTitle: O, extra: I, title: L} = d;
            return s().createElement("div", {
                className: `${Q}-container`
            }, x != null ? x : s().createElement("img", {
                src: ne("https://w2.eckwai.com/kos/nlav12333/kp-assets/notice-icon.28374b6a74a1109e.png"),
                className: `${Q}-notice-png`
            }), L ? s().createElement("div", {
                className: `${Q}-title`
            }, L) : null, s().createElement("div", {
                className: `${Q}-info`
            }, O), I && s().createElement("div", {
                className: `${Q}-extra`
            }, I))
        }
        ;
        var Ze = T(1836);
        const Fe = "ESHOP_FRONTEND_PC_ERROR"
          , je = "kpro-common-event-collector-error-boundary"
          , Ke = R( ({content: d, logger: x, project: O, collect: I, captureException: L, renderContent: N, device: w, children: B, type: j, extraInfo: G={}}) => {
            const V = ({error: P, resetErrorBoundary: k}) => {
                var Y, q, H, de, fe;
                const be = (Y = x == null || (q = x.collect) === null || q === void 0 ? void 0 : q.bind(x)) !== null && Y !== void 0 ? Y : I;
                typeof be == "function" ? be("CUSTOM", {
                    key: Fe,
                    value: {
                        project: O || "UNKNOWN",
                        errMsg: P == null ? void 0 : P.message,
                        errorStack: P == null ? void 0 : P.stack,
                        type: j,
                        extraInfo: G
                    }
                }) : Ee("ErrorBoundary\u7F3A\u5C11\u81EA\u5B9A\u4E49\u6570\u636E\u4E0A\u62A5\u65B9\u6CD5");
                const oe = x == null || (H = x.plugins) === null || H === void 0 ? void 0 : H.radar
                  , Se = (de = oe == null || (fe = oe.captureException) === null || fe === void 0 ? void 0 : fe.bind(oe)) !== null && de !== void 0 ? de : L;
                if (typeof Se == "function" ? Se(P) : Ee("ErrorBoundary\u7F3A\u5C11\u9519\u8BEF\u6355\u83B7\u4E0A\u62A5\u65B9\u6CD5"),
                d !== void 0)
                    return d;
                if (j === "component" && !d && !N)
                    return null;
                if (typeof N == "function")
                    return N(P);
                function Ue() {
                    var ve;
                    typeof ((ve = location) === null || ve === void 0 ? void 0 : ve.reload) == "function" ? location.reload() : k()
                }
                const Oe = /Loading (CSS )?chunk [\d]+ failed/.test(P == null ? void 0 : P.message) ? "\u8D44\u6E90\u52A0\u8F7D\u5931\u8D25" : "\u9875\u9762\u5F02\u5E38"
                  , Pe = "\u975E\u5E38\u62B1\u6B49\u7ED9\u60A8\u9020\u6210\u7684\u4E0D\u4FBF\uFF0C\u6211\u4EEC\u7684\u5DE5\u7A0B\u5E08\u4F1A\u5C3D\u5FEB\u4FEE\u590D\uFF0C\u5982\u679C\u65B9\u4FBF\u8BF7\u8054\u7CFB\u6211\u4EEC\u7684\u5BA2\u670D\u628A\u60A8\u7684\u6D4F\u89C8\u5668\u7248\u672C\u3001\u9875\u9762\u5730\u5740\u4EE5\u53CA\u7528\u6237Id\u53CD\u9988\u7ED9\u6211\u4EEC\uFF0C\u8C22\u8C22";
                return w === "h5" ? s().createElement(we, {
                    subTitle: `${Oe}\uFF0C${Pe}`
                }) : s().createElement(Ne, {
                    title: Oe,
                    subTitle: De ? Pe : s().createElement(s().Fragment, null, "\u3010\u6E29\u99A8\u63D0\u793A\u3011\u4E3A\u4E86\u4E0D\u5F71\u54CD\u60A8\u7684\u6B63\u5E38\u4F7F\u7528\uFF0C\u63A8\u8350\u4F7F\u7528chrome\u6D4F\u89C8\u5668\uFF0C", s().createElement("a", {
                        target: "_blank",
                        rel: "noreferrer noopener",
                        href: Me
                    }, "\u70B9\u51FB\u4E0B\u8F7D")),
                    extra: s().createElement("div", {
                        className: `${je}-button`,
                        onClick: Ue
                    }, "\u5237\u65B0\u9875\u9762")
                })
            }
            ;
            return s().createElement(f.ErrorBoundary, {
                fallbackRender: V
            }, B)
        }
        );
        function _e(d) {
            return s().createElement(Ke, {
                type: "component",
                project: "@es/kpro-seller-v2-order-logistics",
                extraInfo: {
                    version: "1.1.0"
                }
            }, s().createElement(p, d))
        }
        const Be = _e
    }
    )(),
    ce
}
)());