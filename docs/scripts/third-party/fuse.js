/**
 * Fuse.js v6.4.6 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2021 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
let e, t;
(e = this),
(t = function () {
  'use strict'
  function e (t) {
    return (e =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function (e) {
            return typeof e
          }
          : function (e) {
            return e &&
                typeof Symbol === 'function' &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          })(t)
  }
  function t (e, t) {
    if (!(e instanceof t)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function n (e, t) {
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r)
    }
  }
  function r (e, t, r) {
    return t && n(e.prototype, t), r && n(e, r), e
  }
  function i (e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
        : (e[t] = n),
      e
    )
  }
  function o (e, t) {
    const n = Object.keys(e)
    if (Object.getOwnPropertySymbols) {
      let r = Object.getOwnPropertySymbols(e)
      t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
      n.push.apply(n, r)
    }
    return n
  }
  function c (e) {
    for (let t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {}
      t % 2
        ? o(Object(n), !0).forEach(function (t) {
          i(e, t, n[t])
        })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : o(Object(n)).forEach(function (t) {
            Object.defineProperty(
              e,
              t,
              Object.getOwnPropertyDescriptor(n, t)
            )
          })
    }
    return e
  }
  function a (e, t) {
    if (typeof t !== 'function' && t !== null) {
      throw new TypeError(
        'Super expression must either be null or a function'
      )
    }
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 }
    })),
    t && u(e, t)
  }
  function s (e) {
    return (s = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
  }
  function u (e, t) {
    return (u =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e
        })(e, t)
  }
  function h (e, t) {
    return !t || (typeof t !== 'object' && typeof t !== 'function')
      ? (function (e) {
          if (void 0 === e) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          }
          return e
        })(e)
      : t
  }
  function f (e) {
    const t = (function () {
      if (typeof Reflect === 'undefined' || !Reflect.construct) return !1
      if (Reflect.construct.sham) return !1
      if (typeof Proxy === 'function') return !0
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        )
      } catch (e) {
        return !1
      }
    })()
    return function () {
      let n
      const r = s(e)
      if (t) {
        const i = s(this).constructor
        n = Reflect.construct(r, arguments, i)
      } else n = r.apply(this, arguments)
      return h(this, n)
    }
  }
  function l (e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return d(e)
      })(e) ||
        (function (e) {
          if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(e)) {
            return Array.from(e)
          }
        })(e) ||
        (function (e, t) {
          if (e) {
            if (typeof e === 'string') return d(e, t)
            let n = Object.prototype.toString.call(e).slice(8, -1)
            return (
              n === 'Object' && e.constructor && (n = e.constructor.name),
              n === 'Map' || n === 'Set'
                ? Array.from(e)
                : n === 'Arguments' ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? d(e, t)
                  : void 0
            )
          }
        })(e) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        })()
    )
  }
  function d (e, t) {
    (t == null || t > e.length) && (t = e.length)
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
    return r
  }
  function v (e) {
    return Array.isArray ? Array.isArray(e) : b(e) === '[object Array]'
  }
  function g (e) {
    return typeof e === 'string'
  }
  function y (e) {
    return typeof e === 'number'
  }
  function p (e) {
    return (
      !0 === e ||
        !1 === e ||
        ((function (e) {
          return m(e) && e !== null
        })(e) &&
          b(e) == '[object Boolean]')
    )
  }
  function m (t) {
    return e(t) === 'object'
  }
  function k (e) {
    return e != null
  }
  function M (e) {
    return !e.trim().length
  }
  function b (e) {
    return e == null
      ? void 0 === e
        ? '[object Undefined]'
        : '[object Null]'
      : Object.prototype.toString.call(e)
  }
  const x = function (e) {
    return 'Invalid value for key '.concat(e)
  }
  const L = function (e) {
    return 'Pattern length exceeds max of '.concat(e, '.')
  }
  const S = Object.prototype.hasOwnProperty
  const w = (function () {
    function e (n) {
      const r = this
      t(this, e), (this._keys = []), (this._keyMap = {})
      let i = 0
      n.forEach(function (e) {
        const t = _(e);
        (i += t.weight),
        r._keys.push(t),
        (r._keyMap[t.id] = t),
        (i += t.weight)
      }),
      this._keys.forEach(function (e) {
        e.weight /= i
      })
    }
    return (
      r(e, [
        {
          key: 'get',
          value: function (e) {
            return this._keyMap[e]
          }
        },
        {
          key: 'keys',
          value: function () {
            return this._keys
          }
        },
        {
          key: 'toJSON',
          value: function () {
            return JSON.stringify(this._keys)
          }
        }
      ]),
      e
    )
  })()
  function _ (e) {
    let t = null
    let n = null
    let r = null
    let i = 1
    if (g(e) || v(e)) (r = e), (t = O(e)), (n = j(e))
    else {
      if (!S.call(e, 'name')) {
        throw new Error(
          (function (e) {
            return 'Missing '.concat(e, ' property in key')
          })('name')
        )
      }
      const o = e.name
      if (((r = o), S.call(e, 'weight') && (i = e.weight) <= 0)) {
        throw new Error(
          (function (e) {
            return "Property 'weight' in key '".concat(
              e,
              "' must be a positive integer"
            )
          })(o)
        )
      }
      (t = O(o)), (n = j(o))
    }
    return { path: t, id: n, weight: i, src: r }
  }
  function O (e) {
    return v(e) ? e : e.split('.')
  }
  function j (e) {
    return v(e) ? e.join('.') : e
  }
  const A = c(
    {},
    {
      isCaseSensitive: !1,
      includeScore: !1,
      keys: [],
      shouldSort: !0,
      sortFn: function (e, t) {
        return e.score === t.score
          ? e.idx < t.idx
            ? -1
            : 1
          : e.score < t.score
            ? -1
            : 1
      }
    },
    {},
    { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 },
    {},
    { location: 0, threshold: 0.6, distance: 100 },
    {},
    {
      useExtendedSearch: !1,
      getFn: function (e, t) {
        const n = []
        let r = !1
        return (
          (function e (t, i, o) {
            if (k(t)) {
              if (i[o]) {
                const c = t[i[o]]
                if (!k(c)) return
                if (o === i.length - 1 && (g(c) || y(c) || p(c))) {
                  n.push(
                    (function (e) {
                      return e == null
                        ? ''
                        : (function (e) {
                            if (typeof e === 'string') return e
                            const t = e + ''
                            return t == '0' && 1 / e == -1 / 0 ? '-0' : t
                          })(e)
                    })(c)
                  )
                } else if (v(c)) {
                  r = !0
                  for (let a = 0, s = c.length; a < s; a += 1) {
                    e(c[a], i, o + 1)
                  }
                } else i.length && e(c, i, o + 1)
              } else n.push(t)
            }
          })(e, g(t) ? t.split('.') : t, 0),
          r ? n : n[0]
        )
      },
      ignoreLocation: !1,
      ignoreFieldNorm: !1
    }
  )
  const I = /[^ ]+/g
  function C () {
    const e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3
    const t = new Map()
    const n = Math.pow(10, e)
    return {
      get: function (e) {
        const r = e.match(I).length
        if (t.has(r)) return t.get(r)
        const i = 1 / Math.sqrt(r)
        const o = parseFloat(Math.round(i * n) / n)
        return t.set(r, o), o
      },
      clear: function () {
        t.clear()
      }
    }
  }
  const E = (function () {
    function e () {
      const n =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      const r = n.getFn
      const i = void 0 === r ? A.getFn : r
      t(this, e),
      (this.norm = C(3)),
      (this.getFn = i),
      (this.isCreated = !1),
      this.setIndexRecords()
    }
    return (
      r(e, [
        {
          key: 'setSources',
          value: function () {
            const e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : []
            this.docs = e
          }
        },
        {
          key: 'setIndexRecords',
          value: function () {
            const e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : []
            this.records = e
          }
        },
        {
          key: 'setKeys',
          value: function () {
            const e = this
            const t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
            (this.keys = t),
            (this._keysMap = {}),
            t.forEach(function (t, n) {
              e._keysMap[t.id] = n
            })
          }
        },
        {
          key: 'create',
          value: function () {
            const e = this
            !this.isCreated &&
                this.docs.length &&
                ((this.isCreated = !0),
                g(this.docs[0])
                  ? this.docs.forEach(function (t, n) {
                    e._addString(t, n)
                  })
                  : this.docs.forEach(function (t, n) {
                    e._addObject(t, n)
                  }),
                this.norm.clear())
          }
        },
        {
          key: 'add',
          value: function (e) {
            const t = this.size()
            g(e) ? this._addString(e, t) : this._addObject(e, t)
          }
        },
        {
          key: 'removeAt',
          value: function (e) {
            this.records.splice(e, 1)
            for (let t = e, n = this.size(); t < n; t += 1) {
              this.records[t].i -= 1
            }
          }
        },
        {
          key: 'getValueForItemAtKeyId',
          value: function (e, t) {
            return e[this._keysMap[t]]
          }
        },
        {
          key: 'size',
          value: function () {
            return this.records.length
          }
        },
        {
          key: '_addString',
          value: function (e, t) {
            if (k(e) && !M(e)) {
              const n = { v: e, i: t, n: this.norm.get(e) }
              this.records.push(n)
            }
          }
        },
        {
          key: '_addObject',
          value: function (e, t) {
            const n = this
            const r = { i: t, $: {} }
            this.keys.forEach(function (t, i) {
              const o = n.getFn(e, t.path)
              if (k(o)) {
                if (v(o)) {
                  !(function () {
                    for (
                      var e = [], t = [{ nestedArrIndex: -1, value: o }];
                      t.length;

                    ) {
                      const c = t.pop()
                      const a = c.nestedArrIndex
                      const s = c.value
                      if (k(s)) {
                        if (g(s) && !M(s)) {
                          const u = { v: s, i: a, n: n.norm.get(s) }
                          e.push(u)
                        } else {
                          v(s) &&
                              s.forEach(function (e, n) {
                                t.push({ nestedArrIndex: n, value: e })
                              })
                        }
                      }
                    }
                    r.$[i] = e
                  })()
                } else if (!M(o)) {
                  const c = { v: o, n: n.norm.get(o) }
                  r.$[i] = c
                }
              }
            }),
            this.records.push(r)
          }
        },
        {
          key: 'toJSON',
          value: function () {
            return { keys: this.keys, records: this.records }
          }
        }
      ]),
      e
    )
  })()
  function $ (e, t) {
    const n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
    const r = n.getFn
    const i = void 0 === r ? A.getFn : r
    const o = new E({ getFn: i })
    return o.setKeys(e.map(_)), o.setSources(t), o.create(), o
  }
  function R (e) {
    const t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
    const n = t.errors
    const r = void 0 === n ? 0 : n
    const i = t.currentLocation
    const o = void 0 === i ? 0 : i
    const c = t.expectedLocation
    const a = void 0 === c ? 0 : c
    const s = t.distance
    const u = void 0 === s ? A.distance : s
    const h = t.ignoreLocation
    const f = void 0 === h ? A.ignoreLocation : h
    const l = r / e.length
    if (f) return l
    const d = Math.abs(a - o)
    return u ? l + d / u : d ? 1 : l
  }
  function F () {
    for (
      var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : A.minMatchCharLength,
        n = [],
        r = -1,
        i = -1,
        o = 0,
        c = e.length;
      o < c;
      o += 1
    ) {
      const a = e[o]
      a && r === -1
        ? (r = o)
        : a ||
            r === -1 ||
            ((i = o - 1) - r + 1 >= t && n.push([r, i]), (r = -1))
    }
    return e[o - 1] && o - r >= t && n.push([r, o - 1]), n
  }
  function P (e) {
    for (var t = {}, n = 0, r = e.length; n < r; n += 1) {
      const i = e.charAt(n)
      t[i] = (t[i] || 0) | (1 << (r - n - 1))
    }
    return t
  }
  const N = (function () {
    function e (n) {
      const r = this
      const i =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      const o = i.location
      const c = void 0 === o ? A.location : o
      const a = i.threshold
      const s = void 0 === a ? A.threshold : a
      const u = i.distance
      const h = void 0 === u ? A.distance : u
      const f = i.includeMatches
      const l = void 0 === f ? A.includeMatches : f
      const d = i.findAllMatches
      const v = void 0 === d ? A.findAllMatches : d
      const g = i.minMatchCharLength
      const y = void 0 === g ? A.minMatchCharLength : g
      const p = i.isCaseSensitive
      const m = void 0 === p ? A.isCaseSensitive : p
      const k = i.ignoreLocation
      const M = void 0 === k ? A.ignoreLocation : k
      if (
        (t(this, e),
        (this.options = {
          location: c,
          threshold: s,
          distance: h,
          includeMatches: l,
          findAllMatches: v,
          minMatchCharLength: y,
          isCaseSensitive: m,
          ignoreLocation: M
        }),
        (this.pattern = m ? n : n.toLowerCase()),
        (this.chunks = []),
        this.pattern.length)
      ) {
        const b = function (e, t) {
          r.chunks.push({ pattern: e, alphabet: P(e), startIndex: t })
        }
        const x = this.pattern.length
        if (x > 32) {
          for (var L = 0, S = x % 32, w = x - S; L < w;) {
            b(this.pattern.substr(L, 32), L), (L += 32)
          }
          if (S) {
            const _ = x - 32
            b(this.pattern.substr(_), _)
          }
        } else b(this.pattern, 0)
      }
    }
    return (
      r(e, [
        {
          key: 'searchIn',
          value: function (e) {
            const t = this.options
            const n = t.isCaseSensitive
            const r = t.includeMatches
            if ((n || (e = e.toLowerCase()), this.pattern === e)) {
              const i = { isMatch: !0, score: 0 }
              return r && (i.indices = [[0, e.length - 1]]), i
            }
            const o = this.options
            const c = o.location
            const a = o.distance
            const s = o.threshold
            const u = o.findAllMatches
            const h = o.minMatchCharLength
            const f = o.ignoreLocation
            let d = []
            let v = 0
            let g = !1
            this.chunks.forEach(function (t) {
              const n = t.pattern
              const i = t.alphabet
              const o = t.startIndex
              const y = (function (e, t, n) {
                const r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {}
                const i = r.location
                const o = void 0 === i ? A.location : i
                const c = r.distance
                const a = void 0 === c ? A.distance : c
                const s = r.threshold
                const u = void 0 === s ? A.threshold : s
                const h = r.findAllMatches
                const f = void 0 === h ? A.findAllMatches : h
                const l = r.minMatchCharLength
                const d = void 0 === l ? A.minMatchCharLength : l
                const v = r.includeMatches
                const g = void 0 === v ? A.includeMatches : v
                const y = r.ignoreLocation
                const p = void 0 === y ? A.ignoreLocation : y
                if (t.length > 32) throw new Error(L(32))
                for (
                  var m,
                    k = t.length,
                    M = e.length,
                    b = Math.max(0, Math.min(o, M)),
                    x = u,
                    S = b,
                    w = d > 1 || g,
                    _ = w ? Array(M) : [];
                  (m = e.indexOf(t, S)) > -1;

                ) {
                  const O = R(t, {
                    currentLocation: m,
                    expectedLocation: b,
                    distance: a,
                    ignoreLocation: p
                  })
                  if (((x = Math.min(O, x)), (S = m + k), w)) {
                    for (let j = 0; j < k;) (_[m + j] = 1), (j += 1)
                  }
                }
                S = -1
                for (
                  var I = [], C = 1, E = k + M, $ = 1 << (k - 1), P = 0;
                  P < k;
                  P += 1
                ) {
                  for (var N = 0, D = E; N < D;) {
                    const z = R(t, {
                      errors: P,
                      currentLocation: b + D,
                      expectedLocation: b,
                      distance: a,
                      ignoreLocation: p
                    })
                    z <= x ? (N = D) : (E = D),
                    (D = Math.floor((E - N) / 2 + N))
                  }
                  E = D
                  let K = Math.max(1, b - D + 1)
                  const q = f ? M : Math.min(b + D, M) + k
                  const W = Array(q + 2)
                  W[q + 1] = (1 << P) - 1
                  for (let J = q; J >= K; J -= 1) {
                    const T = J - 1
                    const U = n[e.charAt(T)]
                    if (
                      (w && (_[T] = +!!U),
                      (W[J] = ((W[J + 1] << 1) | 1) & U),
                      P && (W[J] |= ((I[J + 1] | I[J]) << 1) | 1 | I[J + 1]),
                      W[J] & $ &&
                          (C = R(t, {
                            errors: P,
                            currentLocation: T,
                            expectedLocation: b,
                            distance: a,
                            ignoreLocation: p
                          })) <= x)
                    ) {
                      if (((x = C), (S = T) <= b)) break
                      K = Math.max(1, 2 * b - S)
                    }
                  }
                  const V = R(t, {
                    errors: P + 1,
                    currentLocation: b,
                    expectedLocation: b,
                    distance: a,
                    ignoreLocation: p
                  })
                  if (V > x) break
                  I = W
                }
                const B = { isMatch: S >= 0, score: Math.max(0.001, C) }
                if (w) {
                  const G = F(_, d)
                  G.length ? g && (B.indices = G) : (B.isMatch = !1)
                }
                return B
              })(e, n, i, {
                location: c + o,
                distance: a,
                threshold: s,
                findAllMatches: u,
                minMatchCharLength: h,
                includeMatches: r,
                ignoreLocation: f
              })
              const p = y.isMatch
              const m = y.score
              const k = y.indices
              p && (g = !0), (v += m), p && k && (d = [].concat(l(d), l(k)))
            })
            const y = { isMatch: g, score: g ? v / this.chunks.length : 1 }
            return g && r && (y.indices = d), y
          }
        }
      ]),
      e
    )
  })()
  const D = (function () {
    function e (n) {
      t(this, e), (this.pattern = n)
    }
    return (
      r(
        e,
        [{ key: 'search', value: function () {} }],
        [
          {
            key: 'isMultiMatch',
            value: function (e) {
              return z(e, this.multiRegex)
            }
          },
          {
            key: 'isSingleMatch',
            value: function (e) {
              return z(e, this.singleRegex)
            }
          }
        ]
      ),
      e
    )
  })()
  function z (e, t) {
    const n = e.match(t)
    return n ? n[1] : null
  }
  const K = (function (e) {
    a(i, e)
    const n = f(i)
    function i (e) {
      return t(this, i), n.call(this, e)
    }
    return (
      r(
        i,
        [
          {
            key: 'search',
            value: function (e) {
              const t = e === this.pattern
              return {
                isMatch: t,
                score: t ? 0 : 1,
                indices: [0, this.pattern.length - 1]
              }
            }
          }
        ],
        [
          {
            key: 'type',
            get: function () {
              return 'exact'
            }
          },
          {
            key: 'multiRegex',
            get: function () {
              return /^="(.*)"$/
            }
          },
          {
            key: 'singleRegex',
            get: function () {
              return /^=(.*)$/
            }
          }
        ]
      ),
      i
    )
  })(D)
  const q = (function (e) {
    a(i, e)
    const n = f(i)
    function i (e) {
      return t(this, i), n.call(this, e)
    }
    return (
      r(
        i,
        [
          {
            key: 'search',
            value: function (e) {
              const t = e.indexOf(this.pattern) === -1
              return {
                isMatch: t,
                score: t ? 0 : 1,
                indices: [0, e.length - 1]
              }
            }
          }
        ],
        [
          {
            key: 'type',
            get: function () {
              return 'inverse-exact'
            }
          },
          {
            key: 'multiRegex',
            get: function () {
              return /^!"(.*)"$/
            }
          },
          {
            key: 'singleRegex',
            get: function () {
              return /^!(.*)$/
            }
          }
        ]
      ),
      i
    )
  })(D)
  const W = (function (e) {
    a(i, e)
    const n = f(i)
    function i (e) {
      return t(this, i), n.call(this, e)
    }
    return (
      r(
        i,
        [
          {
            key: 'search',
            value: function (e) {
              const t = e.startsWith(this.pattern)
              return {
                isMatch: t,
                score: t ? 0 : 1,
                indices: [0, this.pattern.length - 1]
              }
            }
          }
        ],
        [
          {
            key: 'type',
            get: function () {
              return 'prefix-exact'
            }
          },
          {
            key: 'multiRegex',
            get: function () {
              return /^\^"(.*)"$/
            }
          },
          {
            key: 'singleRegex',
            get: function () {
              return /^\^(.*)$/
            }
          }
        ]
      ),
      i
    )
  })(D)
  const J = (function (e) {
    a(i, e)
    const n = f(i)
    function i (e) {
      return t(this, i), n.call(this, e)
    }
    return (
      r(
        i,
        [
          {
            key: 'search',
            value: function (e) {
              const t = !e.startsWith(this.pattern)
              return {
                isMatch: t,
                score: t ? 0 : 1,
                indices: [0, e.length - 1]
              }
            }
          }
        ],
        [
          {
            key: 'type',
            get: function () {
              return 'inverse-prefix-exact'
            }
          },
          {
            key: 'multiRegex',
            get: function () {
              return /^!\^"(.*)"$/
            }
          },
          {
            key: 'singleRegex',
            get: function () {
              return /^!\^(.*)$/
            }
          }
        ]
      ),
      i
    )
  })(D)
  const T = (function (e) {
    a(i, e)
    const n = f(i)
    function i (e) {
      return t(this, i), n.call(this, e)
    }
    return (
      r(
        i,
        [
          {
            key: 'search',
            value: function (e) {
              const t = e.endsWith(this.pattern)
              return {
                isMatch: t,
                score: t ? 0 : 1,
                indices: [e.length - this.pattern.length, e.length - 1]
              }
            }
          }
        ],
        [
          {
            key: 'type',
            get: function () {
              return 'suffix-exact'
            }
          },
          {
            key: 'multiRegex',
            get: function () {
              return /^"(.*)"\$$/
            }
          },
          {
            key: 'singleRegex',
            get: function () {
              return /^(.*)\$$/
            }
          }
        ]
      ),
      i
    )
  })(D)
  const U = (function (e) {
    a(i, e)
    const n = f(i)
    function i (e) {
      return t(this, i), n.call(this, e)
    }
    return (
      r(
        i,
        [
          {
            key: 'search',
            value: function (e) {
              const t = !e.endsWith(this.pattern)
              return {
                isMatch: t,
                score: t ? 0 : 1,
                indices: [0, e.length - 1]
              }
            }
          }
        ],
        [
          {
            key: 'type',
            get: function () {
              return 'inverse-suffix-exact'
            }
          },
          {
            key: 'multiRegex',
            get: function () {
              return /^!"(.*)"\$$/
            }
          },
          {
            key: 'singleRegex',
            get: function () {
              return /^!(.*)\$$/
            }
          }
        ]
      ),
      i
    )
  })(D)
  const V = (function (e) {
    a(i, e)
    const n = f(i)
    function i (e) {
      let r
      const o =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      const c = o.location
      const a = void 0 === c ? A.location : c
      const s = o.threshold
      const u = void 0 === s ? A.threshold : s
      const h = o.distance
      const f = void 0 === h ? A.distance : h
      const l = o.includeMatches
      const d = void 0 === l ? A.includeMatches : l
      const v = o.findAllMatches
      const g = void 0 === v ? A.findAllMatches : v
      const y = o.minMatchCharLength
      const p = void 0 === y ? A.minMatchCharLength : y
      const m = o.isCaseSensitive
      const k = void 0 === m ? A.isCaseSensitive : m
      const M = o.ignoreLocation
      const b = void 0 === M ? A.ignoreLocation : M
      return (
        t(this, i),
        ((r = n.call(this, e))._bitapSearch = new N(e, {
          location: a,
          threshold: u,
          distance: f,
          includeMatches: d,
          findAllMatches: g,
          minMatchCharLength: p,
          isCaseSensitive: k,
          ignoreLocation: b
        })),
        r
      )
    }
    return (
      r(
        i,
        [
          {
            key: 'search',
            value: function (e) {
              return this._bitapSearch.searchIn(e)
            }
          }
        ],
        [
          {
            key: 'type',
            get: function () {
              return 'fuzzy'
            }
          },
          {
            key: 'multiRegex',
            get: function () {
              return /^"(.*)"$/
            }
          },
          {
            key: 'singleRegex',
            get: function () {
              return /^(.*)$/
            }
          }
        ]
      ),
      i
    )
  })(D)
  const B = (function (e) {
    a(i, e)
    const n = f(i)
    function i (e) {
      return t(this, i), n.call(this, e)
    }
    return (
      r(
        i,
        [
          {
            key: 'search',
            value: function (e) {
              for (
                var t, n = 0, r = [], i = this.pattern.length;
                (t = e.indexOf(this.pattern, n)) > -1;

              ) {
                (n = t + i), r.push([t, n - 1])
              }
              const o = !!r.length
              return { isMatch: o, score: o ? 0 : 1, indices: r }
            }
          }
        ],
        [
          {
            key: 'type',
            get: function () {
              return 'include'
            }
          },
          {
            key: 'multiRegex',
            get: function () {
              return /^'"(.*)"$/
            }
          },
          {
            key: 'singleRegex',
            get: function () {
              return /^'(.*)$/
            }
          }
        ]
      ),
      i
    )
  })(D)
  const G = [K, B, W, J, U, T, q, V]
  const H = G.length
  const Q = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/
  function X (e) {
    const t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
    return e.split('|').map(function (e) {
      for (
        var n = e
            .trim()
            .split(Q)
            .filter(function (e) {
              return e && !!e.trim()
            }),
          r = [],
          i = 0,
          o = n.length;
        i < o;
        i += 1
      ) {
        for (var c = n[i], a = !1, s = -1; !a && ++s < H;) {
          const u = G[s]
          const h = u.isMultiMatch(c)
          h && (r.push(new u(h, t)), (a = !0))
        }
        if (!a) {
          for (s = -1; ++s < H;) {
            const f = G[s]
            const l = f.isSingleMatch(c)
            if (l) {
              r.push(new f(l, t))
              break
            }
          }
        }
      }
      return r
    })
  }
  const Y = new Set([V.type, B.type])
  const Z = (function () {
    function e (n) {
      const r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      const i = r.isCaseSensitive
      const o = void 0 === i ? A.isCaseSensitive : i
      const c = r.includeMatches
      const a = void 0 === c ? A.includeMatches : c
      const s = r.minMatchCharLength
      const u = void 0 === s ? A.minMatchCharLength : s
      const h = r.ignoreLocation
      const f = void 0 === h ? A.ignoreLocation : h
      const l = r.findAllMatches
      const d = void 0 === l ? A.findAllMatches : l
      const v = r.location
      const g = void 0 === v ? A.location : v
      const y = r.threshold
      const p = void 0 === y ? A.threshold : y
      const m = r.distance
      const k = void 0 === m ? A.distance : m
      t(this, e),
      (this.query = null),
      (this.options = {
        isCaseSensitive: o,
        includeMatches: a,
        minMatchCharLength: u,
        findAllMatches: d,
        ignoreLocation: f,
        location: g,
        threshold: p,
        distance: k
      }),
      (this.pattern = o ? n : n.toLowerCase()),
      (this.query = X(this.pattern, this.options))
    }
    return (
      r(
        e,
        [
          {
            key: 'searchIn',
            value: function (e) {
              const t = this.query
              if (!t) return { isMatch: !1, score: 1 }
              const n = this.options
              const r = n.includeMatches
              e = n.isCaseSensitive ? e : e.toLowerCase()
              for (
                let i = 0, o = [], c = 0, a = 0, s = t.length;
                a < s;
                a += 1
              ) {
                const u = t[a];
                (o.length = 0), (i = 0)
                for (let h = 0, f = u.length; h < f; h += 1) {
                  const d = u[h]
                  const v = d.search(e)
                  const g = v.isMatch
                  const y = v.indices
                  const p = v.score
                  if (!g) {
                    (c = 0), (i = 0), (o.length = 0)
                    break
                  }
                  if (((i += 1), (c += p), r)) {
                    const m = d.constructor.type
                    Y.has(m) ? (o = [].concat(l(o), l(y))) : o.push(y)
                  }
                }
                if (i) {
                  const k = { isMatch: !0, score: c / i }
                  return r && (k.indices = o), k
                }
              }
              return { isMatch: !1, score: 1 }
            }
          }
        ],
        [
          {
            key: 'condition',
            value: function (e, t) {
              return t.useExtendedSearch
            }
          }
        ]
      ),
      e
    )
  })()
  const ee = []
  function te (e, t) {
    for (let n = 0, r = ee.length; n < r; n += 1) {
      const i = ee[n]
      if (i.condition(e, t)) return new i(e, t)
    }
    return new N(e, t)
  }
  const ne = '$and'
  const re = '$or'
  const ie = '$path'
  const oe = '$val'
  const ce = function (e) {
    return !(!e[ne] && !e[re])
  }
  const ae = function (e) {
    return !!e[ie]
  }
  const se = function (e) {
    return !v(e) && m(e) && !ce(e)
  }
  const ue = function (e) {
    return i(
      {},
      ne,
      Object.keys(e).map(function (t) {
        return i({}, t, e[t])
      })
    )
  }
  function he (e, t) {
    const n = t.ignoreFieldNorm
    const r = void 0 === n ? A.ignoreFieldNorm : n
    e.forEach(function (e) {
      let t = 1
      e.matches.forEach(function (e) {
        const n = e.key
        const i = e.norm
        const o = e.score
        const c = n ? n.weight : null
        t *= Math.pow(
          o === 0 && c ? Number.EPSILON : o,
          (c || 1) * (r ? 1 : i)
        )
      }),
      (e.score = t)
    })
  }
  function fe (e, t) {
    const n = e.matches;
    (t.matches = []),
    k(n) &&
          n.forEach(function (e) {
            if (k(e.indices) && e.indices.length) {
              const n = { indices: e.indices, value: e.value }
              e.key && (n.key = e.key.src),
              e.idx > -1 && (n.refIndex = e.idx),
              t.matches.push(n)
            }
          })
  }
  function le (e, t) {
    t.score = e.score
  }
  function de (e, t) {
    const n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
    const r = n.includeMatches
    const i = void 0 === r ? A.includeMatches : r
    const o = n.includeScore
    const c = void 0 === o ? A.includeScore : o
    const a = []
    return (
      i && a.push(fe),
      c && a.push(le),
      e.map(function (e) {
        const n = e.idx
        const r = { item: t[n], refIndex: n }
        return (
          a.length &&
              a.forEach(function (t) {
                t(e, r)
              }),
          r
        )
      })
    )
  }
  const ve = (function () {
    function e (n) {
      const r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      const i = arguments.length > 2 ? arguments[2] : void 0
      t(this, e),
      (this.options = c({}, A, {}, r)),
      this.options.useExtendedSearch,
      (this._keyStore = new w(this.options.keys)),
      this.setCollection(n, i)
    }
    return (
      r(e, [
        {
          key: 'setCollection',
          value: function (e, t) {
            if (((this._docs = e), t && !(t instanceof E))) {
              throw new Error("Incorrect 'index' type")
            }
            this._myIndex =
                t ||
                $(this.options.keys, this._docs, { getFn: this.options.getFn })
          }
        },
        {
          key: 'add',
          value: function (e) {
            k(e) && (this._docs.push(e), this._myIndex.add(e))
          }
        },
        {
          key: 'remove',
          value: function () {
            for (
              var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : function () {
                        return !1
                      },
                t = [],
                n = 0,
                r = this._docs.length;
              n < r;
              n += 1
            ) {
              const i = this._docs[n]
              e(i, n) && (this.removeAt(n), (n -= 1), (r -= 1), t.push(i))
            }
            return t
          }
        },
        {
          key: 'removeAt',
          value: function (e) {
            this._docs.splice(e, 1), this._myIndex.removeAt(e)
          }
        },
        {
          key: 'getIndex',
          value: function () {
            return this._myIndex
          }
        },
        {
          key: 'search',
          value: function (e) {
            const t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
            const n = t.limit
            const r = void 0 === n ? -1 : n
            const i = this.options
            const o = i.includeMatches
            const c = i.includeScore
            const a = i.shouldSort
            const s = i.sortFn
            const u = i.ignoreFieldNorm
            let h = g(e)
              ? g(this._docs[0])
                ? this._searchStringList(e)
                : this._searchObjectList(e)
              : this._searchLogical(e)
            return (
              he(h, { ignoreFieldNorm: u }),
              a && h.sort(s),
              y(r) && r > -1 && (h = h.slice(0, r)),
              de(h, this._docs, { includeMatches: o, includeScore: c })
            )
          }
        },
        {
          key: '_searchStringList',
          value: function (e) {
            const t = te(e, this.options)
            const n = this._myIndex.records
            const r = []
            return (
              n.forEach(function (e) {
                const n = e.v
                const i = e.i
                const o = e.n
                if (k(n)) {
                  const c = t.searchIn(n)
                  const a = c.isMatch
                  const s = c.score
                  const u = c.indices
                  a &&
                      r.push({
                        item: n,
                        idx: i,
                        matches: [{ score: s, value: n, norm: o, indices: u }]
                      })
                }
              }),
              r
            )
          }
        },
        {
          key: '_searchLogical',
          value: function (e) {
            const t = this
            const n = (function (e, t) {
              const n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {}
              const r = n.auto
              const i = void 0 === r || r
              const o = function e (n) {
                const r = Object.keys(n)
                const o = ae(n)
                if (!o && r.length > 1 && !ce(n)) return e(ue(n))
                if (se(n)) {
                  const c = o ? n[ie] : r[0]
                  const a = o ? n[oe] : n[c]
                  if (!g(a)) throw new Error(x(c))
                  const s = { keyId: j(c), pattern: a }
                  return i && (s.searcher = te(a, t)), s
                }
                const u = { children: [], operator: r[0] }
                return (
                  r.forEach(function (t) {
                    const r = n[t]
                    v(r) &&
                        r.forEach(function (t) {
                          u.children.push(e(t))
                        })
                  }),
                  u
                )
              }
              return ce(e) || (e = ue(e)), o(e)
            })(e, this.options)
            const r = this._myIndex.records
            const i = {}
            const o = []
            return (
              r.forEach(function (e) {
                const r = e.$
                const c = e.i
                if (k(r)) {
                  const a = (function e (n, r, i) {
                    if (!n.children) {
                      const o = n.keyId
                      const c = n.searcher
                      const a = t._findMatches({
                        key: t._keyStore.get(o),
                        value: t._myIndex.getValueForItemAtKeyId(r, o),
                        searcher: c
                      })
                      return a && a.length
                        ? [{ idx: i, item: r, matches: a }]
                        : []
                    }
                    switch (n.operator) {
                      case ne:
                        for (
                          var s = [], u = 0, h = n.children.length;
                          u < h;
                          u += 1
                        ) {
                          const f = e(n.children[u], r, i)
                          if (!f.length) return []
                          s.push.apply(s, l(f))
                        }
                        return s
                      case re:
                        for (
                          var d = [], v = 0, g = n.children.length;
                          v < g;
                          v += 1
                        ) {
                          const y = e(n.children[v], r, i)
                          if (y.length) {
                            d.push.apply(d, l(y))
                            break
                          }
                        }
                        return d
                    }
                  })(n, r, c)
                  a.length &&
                      (i[c] ||
                        ((i[c] = { idx: c, item: r, matches: [] }),
                        o.push(i[c])),
                      a.forEach(function (e) {
                        let t
                        const n = e.matches;
                        (t = i[c].matches).push.apply(t, l(n))
                      }))
                }
              }),
              o
            )
          }
        },
        {
          key: '_searchObjectList',
          value: function (e) {
            const t = this
            const n = te(e, this.options)
            const r = this._myIndex
            const i = r.keys
            const o = r.records
            const c = []
            return (
              o.forEach(function (e) {
                const r = e.$
                const o = e.i
                if (k(r)) {
                  const a = []
                  i.forEach(function (e, i) {
                    a.push.apply(
                      a,
                      l(t._findMatches({ key: e, value: r[i], searcher: n }))
                    )
                  }),
                  a.length && c.push({ idx: o, item: r, matches: a })
                }
              }),
              c
            )
          }
        },
        {
          key: '_findMatches',
          value: function (e) {
            const t = e.key
            const n = e.value
            const r = e.searcher
            if (!k(n)) return []
            const i = []
            if (v(n)) {
              n.forEach(function (e) {
                const n = e.v
                const o = e.i
                const c = e.n
                if (k(n)) {
                  const a = r.searchIn(n)
                  const s = a.isMatch
                  const u = a.score
                  const h = a.indices
                  s &&
                      i.push({
                        score: u,
                        key: t,
                        value: n,
                        idx: o,
                        norm: c,
                        indices: h
                      })
                }
              })
            } else {
              const o = n.v
              const c = n.n
              const a = r.searchIn(o)
              const s = a.isMatch
              const u = a.score
              const h = a.indices
              s &&
                  i.push({ score: u, key: t, value: o, norm: c, indices: h })
            }
            return i
          }
        }
      ]),
      e
    )
  })()
  return (
    (ve.version = '6.4.6'),
    (ve.createIndex = $),
    (ve.parseIndex = function (e) {
      const t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      const n = t.getFn
      const r = void 0 === n ? A.getFn : n
      const i = e.keys
      const o = e.records
      const c = new E({ getFn: r })
      return c.setKeys(i), c.setIndexRecords(o), c
    }),
    (ve.config = A),
    (function () {
      ee.push.apply(ee, arguments)
    })(Z),
    ve
  )
}),
typeof exports === 'object' && typeof module !== 'undefined'
  ? (module.exports = t())
  : typeof define === 'function' && define.amd
    ? define(t)
    : ((e = e || self).Fuse = t())
