!(function (t, e) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = e(require('@popperjs/core')))
    : typeof define === 'function' && define.amd
      ? define(['@popperjs/core'], e)
      : ((t = t || self).tippy = e(t.Popper))
})(this, function (t) {
  'use strict'
  const e = typeof window !== 'undefined' && typeof document !== 'undefined'
  const n = !!e && !!window.msCrypto
  const r = { passive: !0, capture: !0 }
  const o = function () {
    return document.body
  }
  function i (t, e, n) {
    if (Array.isArray(t)) {
      const r = t[e]
      return r == null ? (Array.isArray(n) ? n[e] : n) : r
    }
    return t
  }
  function a (t, e) {
    const n = {}.toString.call(t)
    return n.indexOf('[object') === 0 && n.indexOf(e + ']') > -1
  }
  function s (t, e) {
    return typeof t === 'function' ? t.apply(void 0, e) : t
  }
  function u (t, e) {
    return e === 0
      ? t
      : function (r) {
        clearTimeout(n),
        (n = setTimeout(function () {
          t(r)
        }, e))
      }
    let n
  }
  function p (t, e) {
    const n = Object.assign({}, t)
    return (
      e.forEach(function (t) {
        delete n[t]
      }),
      n
    )
  }
  function c (t) {
    return [].concat(t)
  }
  function f (t, e) {
    t.indexOf(e) === -1 && t.push(e)
  }
  function l (t) {
    return t.split('-')[0]
  }
  function d (t) {
    return [].slice.call(t)
  }
  function v (t) {
    return Object.keys(t).reduce(function (e, n) {
      return void 0 !== t[n] && (e[n] = t[n]), e
    }, {})
  }
  function m () {
    return document.createElement('div')
  }
  function g (t) {
    return ['Element', 'Fragment'].some(function (e) {
      return a(t, e)
    })
  }
  function h (t) {
    return a(t, 'MouseEvent')
  }
  function b (t) {
    return !(!t || !t._tippy || t._tippy.reference !== t)
  }
  function y (t) {
    return g(t)
      ? [t]
      : (function (t) {
          return a(t, 'NodeList')
        })(t)
          ? d(t)
          : Array.isArray(t)
            ? t
            : d(document.querySelectorAll(t))
  }
  function w (t, e) {
    t.forEach(function (t) {
      t && (t.style.transitionDuration = e + 'ms')
    })
  }
  function x (t, e) {
    t.forEach(function (t) {
      t && t.setAttribute('data-state', e)
    })
  }
  function E (t) {
    let e
    const n = c(t)[0]
    return n != null && (e = n.ownerDocument) != null && e.body
      ? n.ownerDocument
      : document
  }
  function O (t, e, n) {
    const r = e + 'EventListener';
    ['transitionend', 'webkitTransitionEnd'].forEach(function (e) {
      t[r](e, n)
    })
  }
  function C (t, e) {
    for (let n = e; n;) {
      var r
      if (t.contains(n)) return !0
      n =
        n.getRootNode == null || (r = n.getRootNode()) == null
          ? void 0
          : r.host
    }
    return !1
  }
  const T = { isTouch: !1 }
  let A = 0
  function L () {
    T.isTouch ||
      ((T.isTouch = !0),
      window.performance && document.addEventListener('mousemove', D))
  }
  function D () {
    const t = performance.now()
    t - A < 20 &&
      ((T.isTouch = !1), document.removeEventListener('mousemove', D)),
    (A = t)
  }
  function k () {
    const t = document.activeElement
    if (b(t)) {
      const e = t._tippy
      t.blur && !e.state.isVisible && t.blur()
    }
  }
  const R = Object.assign(
    {
      appendTo: o,
      aria: { content: 'auto', expanded: 'auto' },
      delay: 0,
      duration: [300, 250],
      getReferenceClientRect: null,
      hideOnClick: !0,
      ignoreAttributes: !1,
      interactive: !1,
      interactiveBorder: 2,
      interactiveDebounce: 0,
      moveTransition: '',
      offset: [0, 10],
      onAfterUpdate: function () {},
      onBeforeUpdate: function () {},
      onCreate: function () {},
      onDestroy: function () {},
      onHidden: function () {},
      onHide: function () {},
      onMount: function () {},
      onShow: function () {},
      onShown: function () {},
      onTrigger: function () {},
      onUntrigger: function () {},
      onClickOutside: function () {},
      placement: 'top',
      plugins: [],
      popperOptions: {},
      render: null,
      showOnCreate: !1,
      touch: !0,
      trigger: 'mouseenter focus',
      triggerTarget: null
    },
    { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
    {
      allowHTML: !1,
      animation: 'fade',
      arrow: !0,
      content: '',
      inertia: !1,
      maxWidth: 350,
      role: 'tooltip',
      theme: '',
      zIndex: 9999
    }
  )
  const P = Object.keys(R)
  function j (t) {
    const e = (t.plugins || []).reduce(function (e, n) {
      let r
      const o = n.name
      const i = n.defaultValue
      o && (e[o] = void 0 !== t[o] ? t[o] : (r = R[o]) != null ? r : i)
      return e
    }, {})
    return Object.assign({}, t, e)
  }
  function M (t, e) {
    const n = Object.assign(
      {},
      e,
      { content: s(e.content, [t]) },
      e.ignoreAttributes
        ? {}
        : (function (t, e) {
            return (
              e ? Object.keys(j(Object.assign({}, R, { plugins: e }))) : P
            ).reduce(function (e, n) {
              const r = (t.getAttribute('data-tippy-' + n) || '').trim()
              if (!r) return e
              if (n === 'content') e[n] = r
              else {
                try {
                  e[n] = JSON.parse(r)
                } catch (t) {
                  e[n] = r
                }
              }
              return e
            }, {})
          })(t, e.plugins)
    )
    return (
      (n.aria = Object.assign({}, R.aria, n.aria)),
      (n.aria = {
        expanded: n.aria.expanded === 'auto' ? e.interactive : n.aria.expanded,
        content:
          n.aria.content === 'auto'
            ? e.interactive
              ? null
              : 'describedby'
            : n.aria.content
      }),
      n
    )
  }
  function V (t, e) {
    t.innerHTML = e
  }
  function I (t) {
    const e = m()
    return (
      !0 === t
        ? (e.className = 'tippy-arrow')
        : ((e.className = 'tippy-svg-arrow'),
          g(t) ? e.appendChild(t) : V(e, t)),
      e
    )
  }
  function S (t, e) {
    g(e.content)
      ? (V(t, ''), t.appendChild(e.content))
      : typeof e.content !== 'function' &&
        (e.allowHTML ? V(t, e.content) : (t.textContent = e.content))
  }
  function B (t) {
    const e = t.firstElementChild
    const n = d(e.children)
    return {
      box: e,
      content: n.find(function (t) {
        return t.classList.contains('tippy-content')
      }),
      arrow: n.find(function (t) {
        return (
          t.classList.contains('tippy-arrow') ||
          t.classList.contains('tippy-svg-arrow')
        )
      }),
      backdrop: n.find(function (t) {
        return t.classList.contains('tippy-backdrop')
      })
    }
  }
  function N (t) {
    const e = m()
    const n = m();
    (n.className = 'tippy-box'),
    n.setAttribute('data-state', 'hidden'),
    n.setAttribute('tabindex', '-1')
    const r = m()
    function o (n, r) {
      const o = B(e)
      const i = o.box
      const a = o.content
      const s = o.arrow
      r.theme
        ? i.setAttribute('data-theme', r.theme)
        : i.removeAttribute('data-theme'),
      typeof r.animation === 'string'
        ? i.setAttribute('data-animation', r.animation)
        : i.removeAttribute('data-animation'),
      r.inertia
        ? i.setAttribute('data-inertia', '')
        : i.removeAttribute('data-inertia'),
      (i.style.maxWidth =
          typeof r.maxWidth === 'number' ? r.maxWidth + 'px' : r.maxWidth),
      r.role ? i.setAttribute('role', r.role) : i.removeAttribute('role'),
      (n.content === r.content && n.allowHTML === r.allowHTML) ||
          S(a, t.props),
      r.arrow
        ? s
          ? n.arrow !== r.arrow &&
              (i.removeChild(s), i.appendChild(I(r.arrow)))
          : i.appendChild(I(r.arrow))
        : s && i.removeChild(s)
    }
    return (
      (r.className = 'tippy-content'),
      r.setAttribute('data-state', 'hidden'),
      S(r, t.props),
      e.appendChild(n),
      n.appendChild(r),
      o(t.props, t.props),
      { popper: e, onUpdate: o }
    )
  }
  N.$$tippy = !0
  let H = 1
  let U = []
  let _ = []
  function z (e, a) {
    let p
    let g
    let b
    let y
    let A
    let L
    let D
    let k
    const P = M(e, Object.assign({}, R, j(v(a))))
    let V = !1
    let I = !1
    let S = !1
    let N = !1
    let z = []
    let F = u(wt, P.interactiveDebounce)
    const W = H++
    const X = (k = P.plugins).filter(function (t, e) {
      return k.indexOf(t) === e
    })
    var Y = {
      id: W,
      reference: e,
      popper: m(),
      popperInstance: null,
      props: P,
      state: {
        isEnabled: !0,
        isVisible: !1,
        isDestroyed: !1,
        isMounted: !1,
        isShown: !1
      },
      plugins: X,
      clearDelayTimeouts: function () {
        clearTimeout(p), clearTimeout(g), cancelAnimationFrame(b)
      },
      setProps: function (t) {
        if (Y.state.isDestroyed) return
        at('onBeforeUpdate', [Y, t]), bt()
        const n = Y.props
        const r = M(e, Object.assign({}, n, v(t), { ignoreAttributes: !0 }));
        (Y.props = r),
        ht(),
        n.interactiveDebounce !== r.interactiveDebounce &&
            (pt(), (F = u(wt, r.interactiveDebounce)))
        n.triggerTarget && !r.triggerTarget
          ? c(n.triggerTarget).forEach(function (t) {
            t.removeAttribute('aria-expanded')
          })
          : r.triggerTarget && e.removeAttribute('aria-expanded')
        ut(), it(), J && J(n, r)
        Y.popperInstance &&
          (Ct(),
          At().forEach(function (t) {
            requestAnimationFrame(t._tippy.popperInstance.forceUpdate)
          }))
        at('onAfterUpdate', [Y, t])
      },
      setContent: function (t) {
        Y.setProps({ content: t })
      },
      show: function () {
        const t = Y.state.isVisible
        const e = Y.state.isDestroyed
        const n = !Y.state.isEnabled
        const r = T.isTouch && !Y.props.touch
        const a = i(Y.props.duration, 0, R.duration)
        if (t || e || n || r) return
        if (et().hasAttribute('disabled')) return
        if ((at('onShow', [Y], !1), !1 === Y.props.onShow(Y))) return;
        (Y.state.isVisible = !0), tt() && ($.style.visibility = 'visible')
        it(), dt(), Y.state.isMounted || ($.style.transition = 'none')
        if (tt()) {
          const u = rt()
          const p = u.box
          const c = u.content
          w([p, c], 0)
        }
        (L = function () {
          let t
          if (Y.state.isVisible && !N) {
            if (
              ((N = !0),
              $.offsetHeight,
              ($.style.transition = Y.props.moveTransition),
              tt() && Y.props.animation)
            ) {
              const e = rt()
              const n = e.box
              const r = e.content
              w([n, r], a), x([n, r], 'visible')
            }
            st(),
            ut(),
            f(_, Y),
            (t = Y.popperInstance) == null || t.forceUpdate(),
            at('onMount', [Y]),
            Y.props.animation &&
                tt() &&
                (function (t, e) {
                  mt(t, e)
                })(a, function () {
                  (Y.state.isShown = !0), at('onShown', [Y])
                })
          }
        }),
        (function () {
          let t
          const e = Y.props.appendTo
          const n = et()
          t =
              (Y.props.interactive && e === o) || e === 'parent'
                ? n.parentNode
                : s(e, [n])
          t.contains($) || t.appendChild($);
          (Y.state.isMounted = !0), Ct()
        })()
      },
      hide: function () {
        const t = !Y.state.isVisible
        const e = Y.state.isDestroyed
        const n = !Y.state.isEnabled
        const r = i(Y.props.duration, 1, R.duration)
        if (t || e || n) return
        if ((at('onHide', [Y], !1), !1 === Y.props.onHide(Y))) return;
        (Y.state.isVisible = !1),
        (Y.state.isShown = !1),
        (N = !1),
        (V = !1),
        tt() && ($.style.visibility = 'hidden')
        if ((pt(), vt(), it(!0), tt())) {
          const o = rt()
          const a = o.box
          const s = o.content
          Y.props.animation && (w([a, s], r), x([a, s], 'hidden'))
        }
        st(),
        ut(),
        Y.props.animation
          ? tt() &&
              (function (t, e) {
                mt(t, function () {
                  !Y.state.isVisible &&
                    $.parentNode &&
                    $.parentNode.contains($) &&
                    e()
                })
              })(r, Y.unmount)
          : Y.unmount()
      },
      hideWithInteractivity: function (t) {
        nt().addEventListener('mousemove', F), f(U, F), F(t)
      },
      enable: function () {
        Y.state.isEnabled = !0
      },
      disable: function () {
        Y.hide(), (Y.state.isEnabled = !1)
      },
      unmount: function () {
        Y.state.isVisible && Y.hide()
        if (!Y.state.isMounted) return
        Tt(),
        At().forEach(function (t) {
          t._tippy.unmount()
        }),
        $.parentNode && $.parentNode.removeChild($);
        (_ = _.filter(function (t) {
          return t !== Y
        })),
        (Y.state.isMounted = !1),
        at('onHidden', [Y])
      },
      destroy: function () {
        if (Y.state.isDestroyed) return
        Y.clearDelayTimeouts(),
        Y.unmount(),
        bt(),
        delete e._tippy,
        (Y.state.isDestroyed = !0),
        at('onDestroy', [Y])
      }
    }
    if (!P.render) return Y
    const q = P.render(Y)
    var $ = q.popper
    var J = q.onUpdate
    $.setAttribute('data-tippy-root', ''),
    ($.id = 'tippy-' + Y.id),
    (Y.popper = $),
    (e._tippy = Y),
    ($._tippy = Y)
    const G = X.map(function (t) {
      return t.fn(Y)
    })
    const K = e.hasAttribute('aria-expanded')
    return (
      ht(),
      ut(),
      it(),
      at('onCreate', [Y]),
      P.showOnCreate && Lt(),
      $.addEventListener('mouseenter', function () {
        Y.props.interactive && Y.state.isVisible && Y.clearDelayTimeouts()
      }),
      $.addEventListener('mouseleave', function () {
        Y.props.interactive &&
          Y.props.trigger.indexOf('mouseenter') >= 0 &&
          nt().addEventListener('mousemove', F)
      }),
      Y
    )
    function Q () {
      const t = Y.props.touch
      return Array.isArray(t) ? t : [t, 0]
    }
    function Z () {
      return Q()[0] === 'hold'
    }
    function tt () {
      let t
      return !((t = Y.props.render) == null || !t.$$tippy)
    }
    function et () {
      return D || e
    }
    function nt () {
      const t = et().parentNode
      return t ? E(t) : document
    }
    function rt () {
      return B($)
    }
    function ot (t) {
      return (Y.state.isMounted && !Y.state.isVisible) ||
        T.isTouch ||
        (y && y.type === 'focus')
        ? 0
        : i(Y.props.delay, t ? 0 : 1, R.delay)
    }
    function it (t) {
      void 0 === t && (t = !1),
      ($.style.pointerEvents = Y.props.interactive && !t ? '' : 'none'),
      ($.style.zIndex = '' + Y.props.zIndex)
    }
    function at (t, e, n) {
      let r;
      (void 0 === n && (n = !0),
      G.forEach(function (n) {
        n[t] && n[t].apply(n, e)
      }),
      n) && (r = Y.props)[t].apply(r, e)
    }
    function st () {
      const t = Y.props.aria
      if (t.content) {
        const n = 'aria-' + t.content
        const r = $.id
        c(Y.props.triggerTarget || e).forEach(function (t) {
          const e = t.getAttribute(n)
          if (Y.state.isVisible) t.setAttribute(n, e ? e + ' ' + r : r)
          else {
            const o = e && e.replace(r, '').trim()
            o ? t.setAttribute(n, o) : t.removeAttribute(n)
          }
        })
      }
    }
    function ut () {
      !K &&
        Y.props.aria.expanded &&
        c(Y.props.triggerTarget || e).forEach(function (t) {
          Y.props.interactive
            ? t.setAttribute(
              'aria-expanded',
              Y.state.isVisible && t === et() ? 'true' : 'false'
            )
            : t.removeAttribute('aria-expanded')
        })
    }
    function pt () {
      nt().removeEventListener('mousemove', F),
      (U = U.filter(function (t) {
        return t !== F
      }))
    }
    function ct (t) {
      if (!T.isTouch || (!S && t.type !== 'mousedown')) {
        const n = (t.composedPath && t.composedPath()[0]) || t.target
        if (!Y.props.interactive || !C($, n)) {
          if (
            c(Y.props.triggerTarget || e).some(function (t) {
              return C(t, n)
            })
          ) {
            if (T.isTouch) return
            if (Y.state.isVisible && Y.props.trigger.indexOf('click') >= 0) {
              return
            }
          } else at('onClickOutside', [Y, t])
          !0 === Y.props.hideOnClick &&
            (Y.clearDelayTimeouts(),
            Y.hide(),
            (I = !0),
            setTimeout(function () {
              I = !1
            }),
            Y.state.isMounted || vt())
        }
      }
    }
    function ft () {
      S = !0
    }
    function lt () {
      S = !1
    }
    function dt () {
      const t = nt()
      t.addEventListener('mousedown', ct, !0),
      t.addEventListener('touchend', ct, r),
      t.addEventListener('touchstart', lt, r),
      t.addEventListener('touchmove', ft, r)
    }
    function vt () {
      const t = nt()
      t.removeEventListener('mousedown', ct, !0),
      t.removeEventListener('touchend', ct, r),
      t.removeEventListener('touchstart', lt, r),
      t.removeEventListener('touchmove', ft, r)
    }
    function mt (t, e) {
      const n = rt().box
      function r (t) {
        t.target === n && (O(n, 'remove', r), e())
      }
      if (t === 0) return e()
      O(n, 'remove', A), O(n, 'add', r), (A = r)
    }
    function gt (t, n, r) {
      void 0 === r && (r = !1),
      c(Y.props.triggerTarget || e).forEach(function (e) {
        e.addEventListener(t, n, r),
        z.push({ node: e, eventType: t, handler: n, options: r })
      })
    }
    function ht () {
      let t
      Z() &&
        (gt('touchstart', yt, { passive: !0 }),
        gt('touchend', xt, { passive: !0 })),
      ((t = Y.props.trigger), t.split(/\s+/).filter(Boolean)).forEach(
        function (t) {
          if (t !== 'manual') {
            switch ((gt(t, yt), t)) {
              case 'mouseenter':
                gt('mouseleave', xt)
                break
              case 'focus':
                gt(n ? 'focusout' : 'blur', Et)
                break
              case 'focusin':
                gt('focusout', Et)
            }
          }
        }
      )
    }
    function bt () {
      z.forEach(function (t) {
        const e = t.node
        const n = t.eventType
        const r = t.handler
        const o = t.options
        e.removeEventListener(n, r, o)
      }),
      (z = [])
    }
    function yt (t) {
      let e
      let n = !1
      if (Y.state.isEnabled && !Ot(t) && !I) {
        const r = ((e = y) == null ? void 0 : e.type) === 'focus';
        (y = t),
        (D = t.currentTarget),
        ut(),
        !Y.state.isVisible &&
            h(t) &&
            U.forEach(function (e) {
              return e(t)
            }),
        t.type === 'click' &&
          (Y.props.trigger.indexOf('mouseenter') < 0 || V) &&
          !1 !== Y.props.hideOnClick &&
          Y.state.isVisible
          ? (n = !0)
          : Lt(t),
        t.type === 'click' && (V = !n),
        n && !r && Dt(t)
      }
    }
    function wt (t) {
      const e = t.target
      const n = et().contains(e) || $.contains(e);
      (t.type === 'mousemove' && n) ||
        ((function (t, e) {
          const n = e.clientX
          const r = e.clientY
          return t.every(function (t) {
            const e = t.popperRect
            const o = t.popperState
            const i = t.props.interactiveBorder
            const a = l(o.placement)
            const s = o.modifiersData.offset
            if (!s) return !0
            const u = a === 'bottom' ? s.top.y : 0
            const p = a === 'top' ? s.bottom.y : 0
            const c = a === 'right' ? s.left.x : 0
            const f = a === 'left' ? s.right.x : 0
            const d = e.top - r + u > i
            const v = r - e.bottom - p > i
            const m = e.left - n + c > i
            const g = n - e.right - f > i
            return d || v || m || g
          })
        })(
          At()
            .concat($)
            .map(function (t) {
              let e
              const n =
                (e = t._tippy.popperInstance) == null ? void 0 : e.state
              return n
                ? {
                    popperRect: t.getBoundingClientRect(),
                    popperState: n,
                    props: P
                  }
                : null
            })
            .filter(Boolean),
          t
        ) &&
          (pt(), Dt(t)))
    }
    function xt (t) {
      Ot(t) ||
        (Y.props.trigger.indexOf('click') >= 0 && V) ||
        (Y.props.interactive ? Y.hideWithInteractivity(t) : Dt(t))
    }
    function Et (t) {
      (Y.props.trigger.indexOf('focusin') < 0 && t.target !== et()) ||
        (Y.props.interactive &&
          t.relatedTarget &&
          $.contains(t.relatedTarget)) ||
        Dt(t)
    }
    function Ot (t) {
      return !!T.isTouch && Z() !== t.type.indexOf('touch') >= 0
    }
    function Ct () {
      Tt()
      const n = Y.props
      const r = n.popperOptions
      const o = n.placement
      const i = n.offset
      const a = n.getReferenceClientRect
      const s = n.moveTransition
      const u = tt() ? B($).arrow : null
      const p = a
        ? {
            getBoundingClientRect: a,
            contextElement: a.contextElement || et()
          }
        : e
      const c = [
        { name: 'offset', options: { offset: i } },
        {
          name: 'preventOverflow',
          options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } }
        },
        { name: 'flip', options: { padding: 5 } },
        { name: 'computeStyles', options: { adaptive: !s } },
        {
          name: '$$tippy',
          enabled: !0,
          phase: 'beforeWrite',
          requires: ['computeStyles'],
          fn: function (t) {
            const e = t.state
            if (tt()) {
              const n = rt().box;
              ['placement', 'reference-hidden', 'escaped'].forEach(function (
                t
              ) {
                t === 'placement'
                  ? n.setAttribute('data-placement', e.placement)
                  : e.attributes.popper['data-popper-' + t]
                    ? n.setAttribute('data-' + t, '')
                    : n.removeAttribute('data-' + t)
              }),
              (e.attributes.popper = {})
            }
          }
        }
      ]
      tt() &&
        u &&
        c.push({ name: 'arrow', options: { element: u, padding: 3 } }),
      c.push.apply(c, (r == null ? void 0 : r.modifiers) || []),
      (Y.popperInstance = t.createPopper(
        p,
        $,
        Object.assign({}, r, { placement: o, onFirstUpdate: L, modifiers: c })
      ))
    }
    function Tt () {
      Y.popperInstance &&
        (Y.popperInstance.destroy(), (Y.popperInstance = null))
    }
    function At () {
      return d($.querySelectorAll('[data-tippy-root]'))
    }
    function Lt (t) {
      Y.clearDelayTimeouts(), t && at('onTrigger', [Y, t]), dt()
      let e = ot(!0)
      const n = Q()
      const r = n[0]
      const o = n[1]
      T.isTouch && r === 'hold' && o && (e = o),
      e
        ? (p = setTimeout(function () {
            Y.show()
          }, e))
        : Y.show()
    }
    function Dt (t) {
      if (
        (Y.clearDelayTimeouts(), at('onUntrigger', [Y, t]), Y.state.isVisible)
      ) {
        if (
          !(
            Y.props.trigger.indexOf('mouseenter') >= 0 &&
            Y.props.trigger.indexOf('click') >= 0 &&
            ['mouseleave', 'mousemove'].indexOf(t.type) >= 0 &&
            V
          )
        ) {
          const e = ot(!1)
          e
            ? (g = setTimeout(function () {
                Y.state.isVisible && Y.hide()
              }, e))
            : (b = requestAnimationFrame(function () {
                Y.hide()
              }))
        }
      } else vt()
    }
  }
  function F (t, e) {
    void 0 === e && (e = {})
    const n = R.plugins.concat(e.plugins || [])
    document.addEventListener('touchstart', L, r),
    window.addEventListener('blur', k)
    const o = Object.assign({}, e, { plugins: n })
    const i = y(t).reduce(function (t, e) {
      const n = e && z(e, o)
      return n && t.push(n), t
    }, [])
    return g(t) ? i[0] : i
  }
  (F.defaultProps = R),
  (F.setDefaultProps = function (t) {
    Object.keys(t).forEach(function (e) {
      R[e] = t[e]
    })
  }),
  (F.currentInput = T)
  const W = Object.assign({}, t.applyStyles, {
    effect: function (t) {
      const e = t.state
      const n = {
        popper: {
          position: e.options.strategy,
          left: '0',
          top: '0',
          margin: '0'
        },
        arrow: { position: 'absolute' },
        reference: {}
      }
      Object.assign(e.elements.popper.style, n.popper),
      (e.styles = n),
      e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow)
    }
  })
  const X = { mouseover: 'mouseenter', focusin: 'focus', click: 'click' }
  const Y = {
    name: 'animateFill',
    defaultValue: !1,
    fn: function (t) {
      let e
      if ((e = t.props.render) == null || !e.$$tippy) return {}
      const n = B(t.popper)
      const r = n.box
      const o = n.content
      const i = t.props.animateFill
        ? (function () {
            const t = m()
            return (t.className = 'tippy-backdrop'), x([t], 'hidden'), t
          })()
        : null
      return {
        onCreate: function () {
          i &&
            (r.insertBefore(i, r.firstElementChild),
            r.setAttribute('data-animatefill', ''),
            (r.style.overflow = 'hidden'),
            t.setProps({ arrow: !1, animation: 'shift-away' }))
        },
        onMount: function () {
          if (i) {
            const t = r.style.transitionDuration
            const e = Number(t.replace('ms', ''));
            (o.style.transitionDelay = Math.round(e / 10) + 'ms'),
            (i.style.transitionDuration = t),
            x([i], 'visible')
          }
        },
        onShow: function () {
          i && (i.style.transitionDuration = '0ms')
        },
        onHide: function () {
          i && x([i], 'hidden')
        }
      }
    }
  }
  let q = { clientX: 0, clientY: 0 }
  let $ = []
  function J (t) {
    const e = t.clientX
    const n = t.clientY
    q = { clientX: e, clientY: n }
  }
  const G = {
    name: 'followCursor',
    defaultValue: !1,
    fn: function (t) {
      const e = t.reference
      const n = E(t.props.triggerTarget || e)
      let r = !1
      let o = !1
      let i = !0
      let a = t.props
      function s () {
        return t.props.followCursor === 'initial' && t.state.isVisible
      }
      function u () {
        n.addEventListener('mousemove', f)
      }
      function p () {
        n.removeEventListener('mousemove', f)
      }
      function c () {
        (r = !0), t.setProps({ getReferenceClientRect: null }), (r = !1)
      }
      function f (n) {
        const r = !n.target || e.contains(n.target)
        const o = t.props.followCursor
        const i = n.clientX
        const a = n.clientY
        const s = e.getBoundingClientRect()
        const u = i - s.left
        const p = a - s.top;
        (!r && t.props.interactive) ||
          t.setProps({
            getReferenceClientRect: function () {
              const t = e.getBoundingClientRect()
              let n = i
              let r = a
              o === 'initial' && ((n = t.left + u), (r = t.top + p))
              const s = o === 'horizontal' ? t.top : r
              const c = o === 'vertical' ? t.right : n
              const f = o === 'horizontal' ? t.bottom : r
              const l = o === 'vertical' ? t.left : n
              return {
                width: c - l,
                height: f - s,
                top: s,
                right: c,
                bottom: f,
                left: l
              }
            }
          })
      }
      function l () {
        t.props.followCursor &&
          ($.push({ instance: t, doc: n }),
          (function (t) {
            t.addEventListener('mousemove', J)
          })(n))
      }
      function d () {
        ($ = $.filter(function (e) {
          return e.instance !== t
        })).filter(function (t) {
          return t.doc === n
        }).length === 0 &&
          (function (t) {
            t.removeEventListener('mousemove', J)
          })(n)
      }
      return {
        onCreate: l,
        onDestroy: d,
        onBeforeUpdate: function () {
          a = t.props
        },
        onAfterUpdate: function (e, n) {
          const i = n.followCursor
          r ||
            (void 0 !== i &&
              a.followCursor !== i &&
              (d(),
              i ? (l(), !t.state.isMounted || o || s() || u()) : (p(), c())))
        },
        onMount: function () {
          t.props.followCursor && !o && (i && (f(q), (i = !1)), s() || u())
        },
        onTrigger: function (t, e) {
          h(e) && (q = { clientX: e.clientX, clientY: e.clientY }),
          (o = e.type === 'focus')
        },
        onHidden: function () {
          t.props.followCursor && (c(), p(), (i = !0))
        }
      }
    }
  }
  const K = {
    name: 'inlinePositioning',
    defaultValue: !1,
    fn: function (t) {
      let e
      const n = t.reference
      let r = -1
      let o = !1
      let i = []
      const a = {
        name: 'tippyInlinePositioning',
        enabled: !0,
        phase: 'afterWrite',
        fn: function (o) {
          const a = o.state
          t.props.inlinePositioning &&
            (i.indexOf(a.placement) !== -1 && (i = []),
            e !== a.placement &&
              i.indexOf(a.placement) === -1 &&
              (i.push(a.placement),
              t.setProps({
                getReferenceClientRect: function () {
                  return (function (t) {
                    return (function (t, e, n, r) {
                      if (n.length < 2 || t === null) return e
                      if (n.length === 2 && r >= 0 && n[0].left > n[1].right) {
                        return n[r] || e
                      }
                      switch (t) {
                        case 'top':
                        case 'bottom':
                          var o = n[0]
                          var i = n[n.length - 1]
                          var a = t === 'top'
                          var s = o.top
                          var u = i.bottom
                          var p = a ? o.left : i.left
                          var c = a ? o.right : i.right
                          return {
                            top: s,
                            bottom: u,
                            left: p,
                            right: c,
                            width: c - p,
                            height: u - s
                          }
                        case 'left':
                        case 'right':
                          var f = Math.min.apply(
                            Math,
                            n.map(function (t) {
                              return t.left
                            })
                          )
                          var l = Math.max.apply(
                            Math,
                            n.map(function (t) {
                              return t.right
                            })
                          )
                          var d = n.filter(function (e) {
                            return t === 'left' ? e.left === f : e.right === l
                          })
                          var v = d[0].top
                          var m = d[d.length - 1].bottom
                          return {
                            top: v,
                            bottom: m,
                            left: f,
                            right: l,
                            width: l - f,
                            height: m - v
                          }
                        default:
                          return e
                      }
                    })(
                      l(t),
                      n.getBoundingClientRect(),
                      d(n.getClientRects()),
                      r
                    )
                  })(a.placement)
                }
              })),
            (e = a.placement))
        }
      }
      function s () {
        let e
        o ||
          ((e = (function (t, e) {
            let n
            return {
              popperOptions: Object.assign({}, t.popperOptions, {
                modifiers: [].concat(
                  (
                    ((n = t.popperOptions) == null ? void 0 : n.modifiers) || []
                  ).filter(function (t) {
                    return t.name !== e.name
                  }),
                  [e]
                )
              })
            }
          })(t.props, a)),
          (o = !0),
          t.setProps(e),
          (o = !1))
      }
      return {
        onCreate: s,
        onAfterUpdate: s,
        onTrigger: function (e, n) {
          if (h(n)) {
            const o = d(t.reference.getClientRects())
            const i = o.find(function (t) {
              return (
                t.left - 2 <= n.clientX &&
                t.right + 2 >= n.clientX &&
                t.top - 2 <= n.clientY &&
                t.bottom + 2 >= n.clientY
              )
            })
            const a = o.indexOf(i)
            r = a > -1 ? a : r
          }
        },
        onHidden: function () {
          r = -1
        }
      }
    }
  }
  const Q = {
    name: 'sticky',
    defaultValue: !1,
    fn: function (t) {
      const e = t.reference
      const n = t.popper
      function r (e) {
        return !0 === t.props.sticky || t.props.sticky === e
      }
      let o = null
      let i = null
      function a () {
        const s = r('reference')
          ? (t.popperInstance
              ? t.popperInstance.state.elements.reference
              : e
            ).getBoundingClientRect()
          : null
        const u = r('popper') ? n.getBoundingClientRect() : null;
        ((s && Z(o, s)) || (u && Z(i, u))) &&
          t.popperInstance &&
          t.popperInstance.update(),
        (o = s),
        (i = u),
        t.state.isMounted && requestAnimationFrame(a)
      }
      return {
        onMount: function () {
          t.props.sticky && a()
        }
      }
    }
  }
  function Z (t, e) {
    return (
      !t ||
      !e ||
      t.top !== e.top ||
      t.right !== e.right ||
      t.bottom !== e.bottom ||
      t.left !== e.left
    )
  }
  return (
    e &&
      (function (t) {
        const e = document.createElement('style');
        (e.textContent = t), e.setAttribute('data-tippy-stylesheet', '')
        const n = document.head
        const r = document.querySelector('head>style,head>link')
        r ? n.insertBefore(e, r) : n.appendChild(e)
      })(
        '.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}'
      ),
    F.setDefaultProps({ plugins: [Y, G, K, Q], render: N }),
    (F.createSingleton = function (t, e) {
      let n
      void 0 === e && (e = {})
      let r
      let o = t
      let i = []
      let a = []
      let s = e.overrides
      let u = []
      let f = !1
      function l () {
        a = o
          .map(function (t) {
            return c(t.props.triggerTarget || t.reference)
          })
          .reduce(function (t, e) {
            return t.concat(e)
          }, [])
      }
      function d () {
        i = o.map(function (t) {
          return t.reference
        })
      }
      function v (t) {
        o.forEach(function (e) {
          t ? e.enable() : e.disable()
        })
      }
      function g (t) {
        return o.map(function (e) {
          const n = e.setProps
          return (
            (e.setProps = function (o) {
              n(o), e.reference === r && t.setProps(o)
            }),
            function () {
              e.setProps = n
            }
          )
        })
      }
      function h (t, e) {
        const n = a.indexOf(e)
        if (e !== r) {
          r = e
          const u = (s || []).concat('content').reduce(function (t, e) {
            return (t[e] = o[n].props[e]), t
          }, {})
          t.setProps(
            Object.assign({}, u, {
              getReferenceClientRect:
                typeof u.getReferenceClientRect === 'function'
                  ? u.getReferenceClientRect
                  : function () {
                    let t
                    return (t = i[n]) == null
                      ? void 0
                      : t.getBoundingClientRect()
                  }
            })
          )
        }
      }
      v(!1), d(), l()
      const b = {
        fn: function () {
          return {
            onDestroy: function () {
              v(!0)
            },
            onHidden: function () {
              r = null
            },
            onClickOutside: function (t) {
              t.props.showOnCreate && !f && ((f = !0), (r = null))
            },
            onShow: function (t) {
              t.props.showOnCreate && !f && ((f = !0), h(t, i[0]))
            },
            onTrigger: function (t, e) {
              h(t, e.currentTarget)
            }
          }
        }
      }
      const y = F(
        m(),
        Object.assign({}, p(e, ['overrides']), {
          plugins: [b].concat(e.plugins || []),
          triggerTarget: a,
          popperOptions: Object.assign({}, e.popperOptions, {
            modifiers: [].concat(
              ((n = e.popperOptions) == null ? void 0 : n.modifiers) || [],
              [W]
            )
          })
        })
      )
      const w = y.show;
      (y.show = function (t) {
        if ((w(), !r && t == null)) return h(y, i[0])
        if (!r || t != null) {
          if (typeof t === 'number') return i[t] && h(y, i[t])
          if (o.indexOf(t) >= 0) {
            const e = t.reference
            return h(y, e)
          }
          return i.indexOf(t) >= 0 ? h(y, t) : void 0
        }
      }),
      (y.showNext = function () {
        const t = i[0]
        if (!r) return y.show(0)
        const e = i.indexOf(r)
        y.show(i[e + 1] || t)
      }),
      (y.showPrevious = function () {
        const t = i[i.length - 1]
        if (!r) return y.show(t)
        const e = i.indexOf(r)
        const n = i[e - 1] || t
        y.show(n)
      })
      const x = y.setProps
      return (
        (y.setProps = function (t) {
          (s = t.overrides || s), x(t)
        }),
        (y.setInstances = function (t) {
          v(!0),
          u.forEach(function (t) {
            return t()
          }),
          (o = t),
          v(!1),
          d(),
          l(),
          (u = g(y)),
          y.setProps({ triggerTarget: a })
        }),
        (u = g(y)),
        y
      )
    }),
    (F.delegate = function (t, e) {
      let n = []
      let o = []
      let i = !1
      const a = e.target
      const s = p(e, ['target'])
      const u = Object.assign({}, s, { trigger: 'manual', touch: !1 })
      const f = Object.assign({ touch: R.touch }, s, { showOnCreate: !0 })
      const l = F(t, u)
      function d (t) {
        if (t.target && !i) {
          const n = t.target.closest(a)
          if (n) {
            const r =
              n.getAttribute('data-tippy-trigger') || e.trigger || R.trigger
            if (
              !n._tippy &&
              !(
                (t.type === 'touchstart' && typeof f.touch === 'boolean') ||
                (t.type !== 'touchstart' && r.indexOf(X[t.type]) < 0)
              )
            ) {
              const s = F(n, f)
              s && (o = o.concat(s))
            }
          }
        }
      }
      function v (t, e, r, o) {
        void 0 === o && (o = !1),
        t.addEventListener(e, r, o),
        n.push({ node: t, eventType: e, handler: r, options: o })
      }
      return (
        c(l).forEach(function (t) {
          const e = t.destroy
          const a = t.enable
          const s = t.disable;
          (t.destroy = function (t) {
            void 0 === t && (t = !0),
            t &&
                o.forEach(function (t) {
                  t.destroy()
                }),
            (o = []),
            n.forEach(function (t) {
              const e = t.node
              const n = t.eventType
              const r = t.handler
              const o = t.options
              e.removeEventListener(n, r, o)
            }),
            (n = []),
            e()
          }),
          (t.enable = function () {
            a(),
            o.forEach(function (t) {
              return t.enable()
            }),
            (i = !1)
          }),
          (t.disable = function () {
            s(),
            o.forEach(function (t) {
              return t.disable()
            }),
            (i = !0)
          }),
          (function (t) {
            const e = t.reference
            v(e, 'touchstart', d, r),
            v(e, 'mouseover', d),
            v(e, 'focusin', d),
            v(e, 'click', d)
          })(t)
        }),
        l
      )
    }),
    (F.hideAll = function (t) {
      const e = void 0 === t ? {} : t
      const n = e.exclude
      const r = e.duration
      _.forEach(function (t) {
        let e = !1
        if ((n && (e = b(n) ? t.reference === n : t.popper === n.popper), !e)) {
          const o = t.props.duration
          t.setProps({ duration: r }),
          t.hide(),
          t.state.isDestroyed || t.setProps({ duration: o })
        }
      })
    }),
    (F.roundArrow =
      '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>'),
    F
  )
})
