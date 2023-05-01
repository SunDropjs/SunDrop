/**
 * @popperjs/core v2.11.5 - MIT License
 */

!(function (e, t) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? t(exports)
    : typeof define === 'function' && define.amd
      ? define(['exports'], t)
      : t(
        ((e =
          typeof globalThis !== 'undefined' ? globalThis : e || self).Popper =
          {})
      )
})(this, function (e) {
  'use strict'
  function t (e) {
    if (e == null) return window
    if (e.toString() !== '[object Window]') {
      const t = e.ownerDocument
      return (t && t.defaultView) || window
    }
    return e
  }
  function n (e) {
    return e instanceof t(e).Element || e instanceof Element
  }
  function r (e) {
    return e instanceof t(e).HTMLElement || e instanceof HTMLElement
  }
  function o (e) {
    return (
      typeof ShadowRoot !== 'undefined' &&
      (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot)
    )
  }
  const i = Math.max
  const a = Math.min
  const s = Math.round
  function f (e, t) {
    void 0 === t && (t = !1)
    const n = e.getBoundingClientRect()
    let o = 1
    let i = 1
    if (r(e) && t) {
      const a = e.offsetHeight
      const f = e.offsetWidth
      f > 0 && (o = s(n.width) / f || 1), a > 0 && (i = s(n.height) / a || 1)
    }
    return {
      width: n.width / o,
      height: n.height / i,
      top: n.top / i,
      right: n.right / o,
      bottom: n.bottom / i,
      left: n.left / o,
      x: n.left / o,
      y: n.top / i
    }
  }
  function c (e) {
    const n = t(e)
    return { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset }
  }
  function p (e) {
    return e ? (e.nodeName || '').toLowerCase() : null
  }
  function u (e) {
    return (
      (n(e) ? e.ownerDocument : e.document) || window.document
    ).documentElement
  }
  function l (e) {
    return f(u(e)).left + c(e).scrollLeft
  }
  function d (e) {
    return t(e).getComputedStyle(e)
  }
  function h (e) {
    const t = d(e)
    const n = t.overflow
    const r = t.overflowX
    const o = t.overflowY
    return /auto|scroll|overlay|hidden/.test(n + o + r)
  }
  function m (e, n, o) {
    void 0 === o && (o = !1)
    let i
    let a
    const d = r(n)
    const m =
      r(n) &&
      (function (e) {
        const t = e.getBoundingClientRect()
        const n = s(t.width) / e.offsetWidth || 1
        const r = s(t.height) / e.offsetHeight || 1
        return n !== 1 || r !== 1
      })(n)
    const v = u(n)
    const g = f(e, m)
    let y = { scrollLeft: 0, scrollTop: 0 }
    let b = { x: 0, y: 0 }
    return (
      (d || (!d && !o)) &&
        ((p(n) !== 'body' || h(v)) &&
          (y =
            (i = n) !== t(i) && r(i)
              ? { scrollLeft: (a = i).scrollLeft, scrollTop: a.scrollTop }
              : c(i)),
        r(n)
          ? (((b = f(n, !0)).x += n.clientLeft), (b.y += n.clientTop))
          : v && (b.x = l(v))),
      {
        x: g.left + y.scrollLeft - b.x,
        y: g.top + y.scrollTop - b.y,
        width: g.width,
        height: g.height
      }
    )
  }
  function v (e) {
    const t = f(e)
    let n = e.offsetWidth
    let r = e.offsetHeight
    return (
      Math.abs(t.width - n) <= 1 && (n = t.width),
      Math.abs(t.height - r) <= 1 && (r = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
    )
  }
  function g (e) {
    return p(e) === 'html'
      ? e
      : e.assignedSlot || e.parentNode || (o(e) ? e.host : null) || u(e)
  }
  function y (e) {
    return ['html', 'body', '#document'].indexOf(p(e)) >= 0
      ? e.ownerDocument.body
      : r(e) && h(e)
        ? e
        : y(g(e))
  }
  function b (e, n) {
    let r
    void 0 === n && (n = [])
    const o = y(e)
    const i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
    const a = t(o)
    const s = i ? [a].concat(a.visualViewport || [], h(o) ? o : []) : o
    const f = n.concat(s)
    return i ? f : f.concat(b(g(s)))
  }
  function x (e) {
    return ['table', 'td', 'th'].indexOf(p(e)) >= 0
  }
  function w (e) {
    return r(e) && d(e).position !== 'fixed' ? e.offsetParent : null
  }
  function O (e) {
    for (var n = t(e), i = w(e); i && x(i) && d(i).position === 'static';) {
      i = w(i)
    }
    return i &&
      (p(i) === 'html' || (p(i) === 'body' && d(i).position === 'static'))
      ? n
      : i ||
          (function (e) {
            const t =
              navigator.userAgent.toLowerCase().indexOf('firefox') !== -1
            if (
              navigator.userAgent.indexOf('Trident') !== -1 &&
              r(e) &&
              d(e).position === 'fixed'
            ) {
              return null
            }
            let n = g(e)
            for (
              o(n) && (n = n.host);
              r(n) && ['html', 'body'].indexOf(p(n)) < 0;

            ) {
              const i = d(n)
              if (
                i.transform !== 'none' ||
                i.perspective !== 'none' ||
                i.contain === 'paint' ||
                ['transform', 'perspective'].indexOf(i.willChange) !== -1 ||
                (t && i.willChange === 'filter') ||
                (t && i.filter && i.filter !== 'none')
              ) {
                return n
              }
              n = n.parentNode
            }
            return null
          })(e) ||
          n
  }
  const j = 'top'
  const E = 'bottom'
  const D = 'right'
  const A = 'left'
  const L = 'auto'
  const P = [j, E, D, A]
  const M = 'start'
  const k = 'end'
  const W = 'viewport'
  const B = 'popper'
  const H = P.reduce(function (e, t) {
    return e.concat([t + '-' + M, t + '-' + k])
  }, [])
  const T = [].concat(P, [L]).reduce(function (e, t) {
    return e.concat([t, t + '-' + M, t + '-' + k])
  }, [])
  const R = [
    'beforeRead',
    'read',
    'afterRead',
    'beforeMain',
    'main',
    'afterMain',
    'beforeWrite',
    'write',
    'afterWrite'
  ]
  function S (e) {
    const t = new Map()
    const n = new Set()
    const r = []
    function o (e) {
      n.add(e.name),
      []
        .concat(e.requires || [], e.requiresIfExists || [])
        .forEach(function (e) {
          if (!n.has(e)) {
            const r = t.get(e)
            r && o(r)
          }
        }),
      r.push(e)
    }
    return (
      e.forEach(function (e) {
        t.set(e.name, e)
      }),
      e.forEach(function (e) {
        n.has(e.name) || o(e)
      }),
      r
    )
  }
  function C (e) {
    return e.split('-')[0]
  }
  function q (e, t) {
    const n = t.getRootNode && t.getRootNode()
    if (e.contains(t)) return !0
    if (n && o(n)) {
      let r = t
      do {
        if (r && e.isSameNode(r)) return !0
        r = r.parentNode || r.host
      } while (r)
    }
    return !1
  }
  function V (e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    })
  }
  function N (e, r) {
    return r === W
      ? V(
        (function (e) {
          const n = t(e)
          const r = u(e)
          const o = n.visualViewport
          let i = r.clientWidth
          let a = r.clientHeight
          let s = 0
          let f = 0
          return (
            o &&
                ((i = o.width),
                (a = o.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((s = o.offsetLeft), (f = o.offsetTop))),
            { width: i, height: a, x: s + l(e), y: f }
          )
        })(e)
      )
      : n(r)
        ? (function (e) {
            const t = f(e)
            return (
              (t.top = t.top + e.clientTop),
              (t.left = t.left + e.clientLeft),
              (t.bottom = t.top + e.clientHeight),
              (t.right = t.left + e.clientWidth),
              (t.width = e.clientWidth),
              (t.height = e.clientHeight),
              (t.x = t.left),
              (t.y = t.top),
              t
            )
          })(r)
        : V(
          (function (e) {
            let t
            const n = u(e)
            const r = c(e)
            const o = (t = e.ownerDocument) == null ? void 0 : t.body
            const a = i(
              n.scrollWidth,
              n.clientWidth,
              o ? o.scrollWidth : 0,
              o ? o.clientWidth : 0
            )
            const s = i(
              n.scrollHeight,
              n.clientHeight,
              o ? o.scrollHeight : 0,
              o ? o.clientHeight : 0
            )
            let f = -r.scrollLeft + l(e)
            const p = -r.scrollTop
            return (
              d(o || n).direction === 'rtl' &&
                (f += i(n.clientWidth, o ? o.clientWidth : 0) - a),
              { width: a, height: s, x: f, y: p }
            )
          })(u(e))
        )
  }
  function I (e, t, o) {
    const s =
      t === 'clippingParents'
        ? (function (e) {
            const t = b(g(e))
            const o =
              ['absolute', 'fixed'].indexOf(d(e).position) >= 0 && r(e)
                ? O(e)
                : e
            return n(o)
              ? t.filter(function (e) {
                return n(e) && q(e, o) && p(e) !== 'body'
              })
              : []
          })(e)
        : [].concat(t)
    const f = [].concat(s, [o])
    const c = f[0]
    const u = f.reduce(function (t, n) {
      const r = N(e, n)
      return (
        (t.top = i(r.top, t.top)),
        (t.right = a(r.right, t.right)),
        (t.bottom = a(r.bottom, t.bottom)),
        (t.left = i(r.left, t.left)),
        t
      )
    }, N(e, c))
    return (
      (u.width = u.right - u.left),
      (u.height = u.bottom - u.top),
      (u.x = u.left),
      (u.y = u.top),
      u
    )
  }
  function _ (e) {
    return e.split('-')[1]
  }
  function F (e) {
    return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
  }
  function U (e) {
    let t
    const n = e.reference
    const r = e.element
    const o = e.placement
    const i = o ? C(o) : null
    const a = o ? _(o) : null
    const s = n.x + n.width / 2 - r.width / 2
    const f = n.y + n.height / 2 - r.height / 2
    switch (i) {
      case j:
        t = { x: s, y: n.y - r.height }
        break
      case E:
        t = { x: s, y: n.y + n.height }
        break
      case D:
        t = { x: n.x + n.width, y: f }
        break
      case A:
        t = { x: n.x - r.width, y: f }
        break
      default:
        t = { x: n.x, y: n.y }
    }
    const c = i ? F(i) : null
    if (c != null) {
      const p = c === 'y' ? 'height' : 'width'
      switch (a) {
        case M:
          t[c] = t[c] - (n[p] / 2 - r[p] / 2)
          break
        case k:
          t[c] = t[c] + (n[p] / 2 - r[p] / 2)
      }
    }
    return t
  }
  function z (e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e)
  }
  function X (e, t) {
    return t.reduce(function (t, n) {
      return (t[n] = e), t
    }, {})
  }
  function Y (e, t) {
    void 0 === t && (t = {})
    const r = t
    const o = r.placement
    const i = void 0 === o ? e.placement : o
    const a = r.boundary
    const s = void 0 === a ? 'clippingParents' : a
    const c = r.rootBoundary
    const p = void 0 === c ? W : c
    const l = r.elementContext
    const d = void 0 === l ? B : l
    const h = r.altBoundary
    const m = void 0 !== h && h
    const v = r.padding
    const g = void 0 === v ? 0 : v
    const y = z(typeof g !== 'number' ? g : X(g, P))
    const b = d === B ? 'reference' : B
    const x = e.rects.popper
    const w = e.elements[m ? b : d]
    const O = I(n(w) ? w : w.contextElement || u(e.elements.popper), s, p)
    const A = f(e.elements.reference)
    const L = U({
      reference: A,
      element: x,
      strategy: 'absolute',
      placement: i
    })
    const M = V(Object.assign({}, x, L))
    const k = d === B ? M : A
    const H = {
      top: O.top - k.top + y.top,
      bottom: k.bottom - O.bottom + y.bottom,
      left: O.left - k.left + y.left,
      right: k.right - O.right + y.right
    }
    const T = e.modifiersData.offset
    if (d === B && T) {
      const R = T[i]
      Object.keys(H).forEach(function (e) {
        const t = [D, E].indexOf(e) >= 0 ? 1 : -1
        const n = [j, E].indexOf(e) >= 0 ? 'y' : 'x'
        H[e] += R[n] * t
      })
    }
    return H
  }
  const G = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
  function J () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
      t[n] = arguments[n]
    }
    return !t.some(function (e) {
      return !(e && typeof e.getBoundingClientRect === 'function')
    })
  }
  function K (e) {
    void 0 === e && (e = {})
    const t = e
    const r = t.defaultModifiers
    const o = void 0 === r ? [] : r
    const i = t.defaultOptions
    const a = void 0 === i ? G : i
    return function (e, t, r) {
      void 0 === r && (r = a)
      let i
      let s
      let f = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, G, a),
        modifiersData: {},
        elements: { reference: e, popper: t },
        attributes: {},
        styles: {}
      }
      let c = []
      let p = !1
      var u = {
        state: f,
        setOptions: function (r) {
          const i = typeof r === 'function' ? r(f.options) : r
          l(),
          (f.options = Object.assign({}, a, f.options, i)),
          (f.scrollParents = {
            reference: n(e)
              ? b(e)
              : e.contextElement
                ? b(e.contextElement)
                : [],
            popper: b(t)
          })
          let s
          let p
          const d = (function (e) {
            const t = S(e)
            return R.reduce(function (e, n) {
              return e.concat(
                t.filter(function (e) {
                  return e.phase === n
                })
              )
            }, [])
          })(
            ((s = [].concat(o, f.options.modifiers)),
            (p = s.reduce(function (e, t) {
              const n = e[t.name]
              return (
                (e[t.name] = n
                  ? Object.assign({}, n, t, {
                    options: Object.assign({}, n.options, t.options),
                    data: Object.assign({}, n.data, t.data)
                  })
                  : t),
                e
              )
            }, {})),
            Object.keys(p).map(function (e) {
              return p[e]
            }))
          )
          return (
            (f.orderedModifiers = d.filter(function (e) {
              return e.enabled
            })),
            f.orderedModifiers.forEach(function (e) {
              const t = e.name
              const n = e.options
              const r = void 0 === n ? {} : n
              const o = e.effect
              if (typeof o === 'function') {
                const i = o({ state: f, name: t, instance: u, options: r })
                const a = function () {}
                c.push(i || a)
              }
            }),
            u.update()
          )
        },
        forceUpdate: function () {
          if (!p) {
            const e = f.elements
            const t = e.reference
            const n = e.popper
            if (J(t, n)) {
              (f.rects = {
                reference: m(t, O(n), f.options.strategy === 'fixed'),
                popper: v(n)
              }),
              (f.reset = !1),
              (f.placement = f.options.placement),
              f.orderedModifiers.forEach(function (e) {
                return (f.modifiersData[e.name] = Object.assign({}, e.data))
              })
              for (let r = 0; r < f.orderedModifiers.length; r++) {
                if (!0 !== f.reset) {
                  const o = f.orderedModifiers[r]
                  const i = o.fn
                  const a = o.options
                  const s = void 0 === a ? {} : a
                  const c = o.name
                  typeof i === 'function' &&
                    (f =
                      i({ state: f, options: s, name: c, instance: u }) || f)
                } else (f.reset = !1), (r = -1)
              }
            }
          }
        },
        update:
          ((i = function () {
            return new Promise(function (e) {
              u.forceUpdate(), e(f)
            })
          }),
          function () {
            return (
              s ||
                (s = new Promise(function (e) {
                  Promise.resolve().then(function () {
                    (s = void 0), e(i())
                  })
                })),
              s
            )
          }),
        destroy: function () {
          l(), (p = !0)
        }
      }
      if (!J(e, t)) return u
      function l () {
        c.forEach(function (e) {
          return e()
        }),
        (c = [])
      }
      return (
        u.setOptions(r).then(function (e) {
          !p && r.onFirstUpdate && r.onFirstUpdate(e)
        }),
        u
      )
    }
  }
  const Q = { passive: !0 }
  const Z = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: function (e) {
      const n = e.state
      const r = e.instance
      const o = e.options
      const i = o.scroll
      const a = void 0 === i || i
      const s = o.resize
      const f = void 0 === s || s
      const c = t(n.elements.popper)
      const p = [].concat(n.scrollParents.reference, n.scrollParents.popper)
      return (
        a &&
          p.forEach(function (e) {
            e.addEventListener('scroll', r.update, Q)
          }),
        f && c.addEventListener('resize', r.update, Q),
        function () {
          a &&
            p.forEach(function (e) {
              e.removeEventListener('scroll', r.update, Q)
            }),
          f && c.removeEventListener('resize', r.update, Q)
        }
      )
    },
    data: {}
  }
  const $ = {
    name: 'popperOffsets',
    enabled: !0,
    phase: 'read',
    fn: function (e) {
      const t = e.state
      const n = e.name
      t.modifiersData[n] = U({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: 'absolute',
        placement: t.placement
      })
    },
    data: {}
  }
  const ee = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
  function te (e) {
    let n
    const r = e.popper
    const o = e.popperRect
    const i = e.placement
    const a = e.variation
    const f = e.offsets
    const c = e.position
    const p = e.gpuAcceleration
    const l = e.adaptive
    const h = e.roundOffsets
    const m = e.isFixed
    const v = f.x
    let g = void 0 === v ? 0 : v
    const y = f.y
    let b = void 0 === y ? 0 : y
    const x = typeof h === 'function' ? h({ x: g, y: b }) : { x: g, y: b };
    (g = x.x), (b = x.y)
    const w = f.hasOwnProperty('x')
    const L = f.hasOwnProperty('y')
    let P = A
    let M = j
    const W = window
    if (l) {
      let B = O(r)
      let H = 'clientHeight'
      let T = 'clientWidth'
      if (
        (B === t(r) &&
          d((B = u(r))).position !== 'static' &&
          c === 'absolute' &&
          ((H = 'scrollHeight'), (T = 'scrollWidth')),
        (B = B),
        i === j || ((i === A || i === D) && a === k))
      ) {
        (M = E),
        (b -=
            (m && B === W && W.visualViewport
              ? W.visualViewport.height
              : B[H]) - o.height),
        (b *= p ? 1 : -1)
      }
      if (i === A || ((i === j || i === E) && a === k)) {
        (P = D),
        (g -=
            (m && B === W && W.visualViewport ? W.visualViewport.width : B[T]) -
            o.width),
        (g *= p ? 1 : -1)
      }
    }
    let R
    const S = Object.assign({ position: c }, l && ee)
    const C =
      !0 === h
        ? (function (e) {
            const t = e.x
            const n = e.y
            const r = window.devicePixelRatio || 1
            return { x: s(t * r) / r || 0, y: s(n * r) / r || 0 }
          })({ x: g, y: b })
        : { x: g, y: b }
    return (
      (g = C.x),
      (b = C.y),
      p
        ? Object.assign(
          {},
          S,
          (((R = {})[M] = L ? '0' : ''),
          (R[P] = w ? '0' : ''),
          (R.transform =
              (W.devicePixelRatio || 1) <= 1
                ? 'translate(' + g + 'px, ' + b + 'px)'
                : 'translate3d(' + g + 'px, ' + b + 'px, 0)'),
          R)
        )
        : Object.assign(
          {},
          S,
          (((n = {})[M] = L ? b + 'px' : ''),
          (n[P] = w ? g + 'px' : ''),
          (n.transform = ''),
          n)
        )
    )
  }
  const ne = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: function (e) {
      const t = e.state
      const n = e.options
      const r = n.gpuAcceleration
      const o = void 0 === r || r
      const i = n.adaptive
      const a = void 0 === i || i
      const s = n.roundOffsets
      const f = void 0 === s || s
      const c = {
        placement: C(t.placement),
        variation: _(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: o,
        isFixed: t.options.strategy === 'fixed'
      }
      t.modifiersData.popperOffsets != null &&
        (t.styles.popper = Object.assign(
          {},
          t.styles.popper,
          te(
            Object.assign({}, c, {
              offsets: t.modifiersData.popperOffsets,
              position: t.options.strategy,
              adaptive: a,
              roundOffsets: f
            })
          )
        )),
      t.modifiersData.arrow != null &&
          (t.styles.arrow = Object.assign(
            {},
            t.styles.arrow,
            te(
              Object.assign({}, c, {
                offsets: t.modifiersData.arrow,
                position: 'absolute',
                adaptive: !1,
                roundOffsets: f
              })
            )
          )),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        'data-popper-placement': t.placement
      }))
    },
    data: {}
  }
  const re = {
    name: 'applyStyles',
    enabled: !0,
    phase: 'write',
    fn: function (e) {
      const t = e.state
      Object.keys(t.elements).forEach(function (e) {
        const n = t.styles[e] || {}
        const o = t.attributes[e] || {}
        const i = t.elements[e]
        r(i) &&
          p(i) &&
          (Object.assign(i.style, n),
          Object.keys(o).forEach(function (e) {
            const t = o[e]
            !1 === t
              ? i.removeAttribute(e)
              : i.setAttribute(e, !0 === t ? '' : t)
          }))
      })
    },
    effect: function (e) {
      const t = e.state
      const n = {
        popper: {
          position: t.options.strategy,
          left: '0',
          top: '0',
          margin: '0'
        },
        arrow: { position: 'absolute' },
        reference: {}
      }
      return (
        Object.assign(t.elements.popper.style, n.popper),
        (t.styles = n),
        t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function () {
          Object.keys(t.elements).forEach(function (e) {
            const o = t.elements[e]
            const i = t.attributes[e] || {}
            const a = Object.keys(
              t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
            ).reduce(function (e, t) {
              return (e[t] = ''), e
            }, {})
            r(o) &&
              p(o) &&
              (Object.assign(o.style, a),
              Object.keys(i).forEach(function (e) {
                o.removeAttribute(e)
              }))
          })
        }
      )
    },
    requires: ['computeStyles']
  }
  const oe = {
    name: 'offset',
    enabled: !0,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: function (e) {
      const t = e.state
      const n = e.options
      const r = e.name
      const o = n.offset
      const i = void 0 === o ? [0, 0] : o
      const a = T.reduce(function (e, n) {
        return (
          (e[n] = (function (e, t, n) {
            const r = C(e)
            const o = [A, j].indexOf(r) >= 0 ? -1 : 1
            const i =
              typeof n === 'function'
                ? n(Object.assign({}, t, { placement: e }))
                : n
            let a = i[0]
            let s = i[1]
            return (
              (a = a || 0),
              (s = (s || 0) * o),
              [A, D].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
            )
          })(n, t.rects, i)),
          e
        )
      }, {})
      const s = a[t.placement]
      const f = s.x
      const c = s.y
      t.modifiersData.popperOffsets != null &&
        ((t.modifiersData.popperOffsets.x += f),
        (t.modifiersData.popperOffsets.y += c)),
      (t.modifiersData[r] = a)
    }
  }
  const ie = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
  function ae (e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return ie[e]
    })
  }
  const se = { start: 'end', end: 'start' }
  function fe (e) {
    return e.replace(/start|end/g, function (e) {
      return se[e]
    })
  }
  function ce (e, t) {
    void 0 === t && (t = {})
    const n = t
    const r = n.placement
    const o = n.boundary
    const i = n.rootBoundary
    const a = n.padding
    const s = n.flipVariations
    const f = n.allowedAutoPlacements
    const c = void 0 === f ? T : f
    const p = _(r)
    const u = p
      ? s
        ? H
        : H.filter(function (e) {
          return _(e) === p
        })
      : P
    let l = u.filter(function (e) {
      return c.indexOf(e) >= 0
    })
    l.length === 0 && (l = u)
    const d = l.reduce(function (t, n) {
      return (
        (t[n] = Y(e, {
          placement: n,
          boundary: o,
          rootBoundary: i,
          padding: a
        })[C(n)]),
        t
      )
    }, {})
    return Object.keys(d).sort(function (e, t) {
      return d[e] - d[t]
    })
  }
  const pe = {
    name: 'flip',
    enabled: !0,
    phase: 'main',
    fn: function (e) {
      const t = e.state
      const n = e.options
      const r = e.name
      if (!t.modifiersData[r]._skip) {
        for (
          var o = n.mainAxis,
            i = void 0 === o || o,
            a = n.altAxis,
            s = void 0 === a || a,
            f = n.fallbackPlacements,
            c = n.padding,
            p = n.boundary,
            u = n.rootBoundary,
            l = n.altBoundary,
            d = n.flipVariations,
            h = void 0 === d || d,
            m = n.allowedAutoPlacements,
            v = t.options.placement,
            g = C(v),
            y =
              f ||
              (g === v || !h
                ? [ae(v)]
                : (function (e) {
                    if (C(e) === L) return []
                    const t = ae(e)
                    return [fe(e), t, fe(t)]
                  })(v)),
            b = [v].concat(y).reduce(function (e, n) {
              return e.concat(
                C(n) === L
                  ? ce(t, {
                    placement: n,
                    boundary: p,
                    rootBoundary: u,
                    padding: c,
                    flipVariations: h,
                    allowedAutoPlacements: m
                  })
                  : n
              )
            }, []),
            x = t.rects.reference,
            w = t.rects.popper,
            O = new Map(),
            P = !0,
            k = b[0],
            W = 0;
          W < b.length;
          W++
        ) {
          const B = b[W]
          const H = C(B)
          const T = _(B) === M
          const R = [j, E].indexOf(H) >= 0
          const S = R ? 'width' : 'height'
          const q = Y(t, {
            placement: B,
            boundary: p,
            rootBoundary: u,
            altBoundary: l,
            padding: c
          })
          let V = R ? (T ? D : A) : T ? E : j
          x[S] > w[S] && (V = ae(V))
          const N = ae(V)
          const I = []
          if (
            (i && I.push(q[H] <= 0),
            s && I.push(q[V] <= 0, q[N] <= 0),
            I.every(function (e) {
              return e
            }))
          ) {
            (k = B), (P = !1)
            break
          }
          O.set(B, I)
        }
        if (P) {
          for (
            let F = function (e) {
                const t = b.find(function (t) {
                  const n = O.get(t)
                  if (n) {
                    return n.slice(0, e).every(function (e) {
                      return e
                    })
                  }
                })
                if (t) return (k = t), 'break'
              },
              U = h ? 3 : 1;
            U > 0;
            U--
          ) {
            if (F(U) === 'break') break
          }
        }
        t.placement !== k &&
          ((t.modifiersData[r]._skip = !0), (t.placement = k), (t.reset = !0))
      }
    },
    requiresIfExists: ['offset'],
    data: { _skip: !1 }
  }
  function ue (e, t, n) {
    return i(e, a(t, n))
  }
  const le = {
    name: 'preventOverflow',
    enabled: !0,
    phase: 'main',
    fn: function (e) {
      const t = e.state
      const n = e.options
      const r = e.name
      const o = n.mainAxis
      const s = void 0 === o || o
      const f = n.altAxis
      const c = void 0 !== f && f
      const p = n.boundary
      const u = n.rootBoundary
      const l = n.altBoundary
      const d = n.padding
      const h = n.tether
      const m = void 0 === h || h
      const g = n.tetherOffset
      const y = void 0 === g ? 0 : g
      const b = Y(t, {
        boundary: p,
        rootBoundary: u,
        padding: d,
        altBoundary: l
      })
      const x = C(t.placement)
      const w = _(t.placement)
      const L = !w
      const P = F(x)
      const k = P === 'x' ? 'y' : 'x'
      const W = t.modifiersData.popperOffsets
      const B = t.rects.reference
      const H = t.rects.popper
      const T =
        typeof y === 'function'
          ? y(Object.assign({}, t.rects, { placement: t.placement }))
          : y
      const R =
        typeof T === 'number'
          ? { mainAxis: T, altAxis: T }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, T)
      const S = t.modifiersData.offset
        ? t.modifiersData.offset[t.placement]
        : null
      const q = { x: 0, y: 0 }
      if (W) {
        if (s) {
          let V
          const N = P === 'y' ? j : A
          const I = P === 'y' ? E : D
          const U = P === 'y' ? 'height' : 'width'
          const z = W[P]
          const X = z + b[N]
          const G = z - b[I]
          const J = m ? -H[U] / 2 : 0
          const K = w === M ? B[U] : H[U]
          const Q = w === M ? -H[U] : -B[U]
          const Z = t.elements.arrow
          const $ = m && Z ? v(Z) : { width: 0, height: 0 }
          const ee = t.modifiersData['arrow#persistent']
            ? t.modifiersData['arrow#persistent'].padding
            : { top: 0, right: 0, bottom: 0, left: 0 }
          const te = ee[N]
          const ne = ee[I]
          const re = ue(0, B[U], $[U])
          const oe = L
            ? B[U] / 2 - J - re - te - R.mainAxis
            : K - re - te - R.mainAxis
          const ie = L
            ? -B[U] / 2 + J + re + ne + R.mainAxis
            : Q + re + ne + R.mainAxis
          const ae = t.elements.arrow && O(t.elements.arrow)
          const se = ae
            ? P === 'y'
              ? ae.clientTop || 0
              : ae.clientLeft || 0
            : 0
          const fe = (V = S == null ? void 0 : S[P]) != null ? V : 0
          const ce = z + ie - fe
          const pe = ue(m ? a(X, z + oe - fe - se) : X, z, m ? i(G, ce) : G);
          (W[P] = pe), (q[P] = pe - z)
        }
        if (c) {
          let le
          const de = P === 'x' ? j : A
          const he = P === 'x' ? E : D
          const me = W[k]
          const ve = k === 'y' ? 'height' : 'width'
          const ge = me + b[de]
          const ye = me - b[he]
          const be = [j, A].indexOf(x) !== -1
          const xe = (le = S == null ? void 0 : S[k]) != null ? le : 0
          const we = be ? ge : me - B[ve] - H[ve] - xe + R.altAxis
          const Oe = be ? me + B[ve] + H[ve] - xe - R.altAxis : ye
          const je =
            m && be
              ? (function (e, t, n) {
                  const r = ue(e, t, n)
                  return r > n ? n : r
                })(we, me, Oe)
              : ue(m ? we : ge, me, m ? Oe : ye);
          (W[k] = je), (q[k] = je - me)
        }
        t.modifiersData[r] = q
      }
    },
    requiresIfExists: ['offset']
  }
  const de = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: function (e) {
      let t
      const n = e.state
      const r = e.name
      const o = e.options
      const i = n.elements.arrow
      const a = n.modifiersData.popperOffsets
      const s = C(n.placement)
      const f = F(s)
      const c = [A, D].indexOf(s) >= 0 ? 'height' : 'width'
      if (i && a) {
        const p = (function (e, t) {
          return z(
            typeof (e =
              typeof e === 'function'
                ? e(Object.assign({}, t.rects, { placement: t.placement }))
                : e) !== 'number'
              ? e
              : X(e, P)
          )
        })(o.padding, n)
        const u = v(i)
        const l = f === 'y' ? j : A
        const d = f === 'y' ? E : D
        const h =
          n.rects.reference[c] +
          n.rects.reference[f] -
          a[f] -
          n.rects.popper[c]
        const m = a[f] - n.rects.reference[f]
        const g = O(i)
        const y = g
          ? f === 'y'
            ? g.clientHeight || 0
            : g.clientWidth || 0
          : 0
        const b = h / 2 - m / 2
        const x = p[l]
        const w = y - u[c] - p[d]
        const L = y / 2 - u[c] / 2 + b
        const M = ue(x, L, w)
        const k = f
        n.modifiersData[r] = (((t = {})[k] = M), (t.centerOffset = M - L), t)
      }
    },
    effect: function (e) {
      const t = e.state
      const n = e.options.element
      let r = void 0 === n ? '[data-popper-arrow]' : n
      r != null &&
        (typeof r !== 'string' || (r = t.elements.popper.querySelector(r))) &&
        q(t.elements.popper, r) &&
        (t.elements.arrow = r)
    },
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  }
  function he (e, t, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x
      }
    )
  }
  function me (e) {
    return [j, D, E, A].some(function (t) {
      return e[t] >= 0
    })
  }
  const ve = {
    name: 'hide',
    enabled: !0,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: function (e) {
      const t = e.state
      const n = e.name
      const r = t.rects.reference
      const o = t.rects.popper
      const i = t.modifiersData.preventOverflow
      const a = Y(t, { elementContext: 'reference' })
      const s = Y(t, { altBoundary: !0 })
      const f = he(a, r)
      const c = he(s, o, i)
      const p = me(f)
      const u = me(c);
      (t.modifiersData[n] = {
        referenceClippingOffsets: f,
        popperEscapeOffsets: c,
        isReferenceHidden: p,
        hasPopperEscaped: u
      }),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        'data-popper-reference-hidden': p,
        'data-popper-escaped': u
      }))
    }
  }
  const ge = K({ defaultModifiers: [Z, $, ne, re] })
  const ye = [Z, $, ne, re, oe, pe, le, de, ve]
  const be = K({ defaultModifiers: ye });
  (e.applyStyles = re),
  (e.arrow = de),
  (e.computeStyles = ne),
  (e.createPopper = be),
  (e.createPopperLite = ge),
  (e.defaultModifiers = ye),
  (e.detectOverflow = Y),
  (e.eventListeners = Z),
  (e.flip = pe),
  (e.hide = ve),
  (e.offset = oe),
  (e.popperGenerator = K),
  (e.popperOffsets = $),
  (e.preventOverflow = le),
  Object.defineProperty(e, '__esModule', { value: !0 })
})
