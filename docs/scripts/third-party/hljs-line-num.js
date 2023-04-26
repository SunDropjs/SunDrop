!(function (r, o) {
  'use strict'
  let e
  const l = 'hljs-ln'
  const s = 'hljs-ln-line'
  const f = 'hljs-ln-code'
  const c = 'hljs-ln-numbers'
  const u = 'hljs-ln-n'
  const h = 'data-line-number'
  const n = /\r\n|\r|\n/g
  function t (e) {
    for (var n = e.toString(), t = e.anchorNode; t.nodeName !== 'TD';) {
      t = t.parentNode
    }
    for (var r = e.focusNode; r.nodeName !== 'TD';) r = r.parentNode
    var e = parseInt(t.dataset.lineNumber)
    let o = parseInt(r.dataset.lineNumber)
    if (e == o) return n
    let a
    let i = t.textContent
    let l = r.textContent
    for (
      o < e && ((a = e), (e = o), (o = a), (a = i), (i = l), (l = a));
      n.indexOf(i) !== 0;

    ) {
      i = i.slice(1)
    }
    for (; n.lastIndexOf(l) === -1;) l = l.slice(0, -1)
    for (
      var s = i,
        c = (function (e) {
          for (var n = e; n.nodeName !== 'TABLE';) n = n.parentNode
          return n
        })(t),
        u = e + 1;
      u < o;
      ++u
    ) {
      const d = v('.{0}[{1}="{2}"]', [f, h, u])
      s += '\n' + c.querySelector(d).textContent
    }
    return (s += '\n' + l)
  }
  function a (e) {
    try {
      let n
      const t = o.querySelectorAll('code.hljs,code.nohighlight')
      for (n in t) {
        !t.hasOwnProperty(n) ||
          t[n].classList.contains('nohljsln') ||
          i(t[n], e)
      }
    } catch (e) {
      r.console.error('LineNumbers error: ', e)
    }
  }
  function i (e, n) {
    typeof e === 'object' &&
      r.setTimeout(function () {
        e.innerHTML = d(e, n)
      }, 0)
  }
  function d (e, n) {
    var n = {
      singleLine: (function (e) {
        return e.singleLine || !1
      })((n = (n = n) || {})),
      startFrom: (function (e, n) {
        let t = 1
        isFinite(n.startFrom) && (t = n.startFrom)
        n = (function (e, n) {
          return e.hasAttribute(n) ? e.getAttribute(n) : null
        })(e, 'data-ln-start-from')
        n !== null &&
          (t = (function (e, n) {
            if (!e) return n
            e = Number(e)
            return isFinite(e) ? e : n
          })(n, 1))
        return t
      })(e, n)
    }
    var e =
      (!(function e (n) {
        const t = n.childNodes
        for (let r in t) {
          !t.hasOwnProperty(r) ||
            (p((r = t[r]).textContent) > 0 &&
              (r.childNodes.length > 0 ? e(r) : m(r.parentNode)))
        }
      })(e),
      e.innerHTML)
    const t = n
    const r = g(e)
    if (
      (r[r.length - 1].trim() === '' && r.pop(), r.length > 1 || t.singleLine)
    ) {
      for (var o = '', a = 0, i = r.length; a < i; a++) {
        o += v(
          '<tr><td class="{0} {1}" {3}="{5}"></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',
          [s, c, u, h, f, a + t.startFrom, r[a].length > 0 ? r[a] : ' ']
        )
      }
      return v('<table class="{0}">{1}</table>', [l, o])
    }
    return e
  }
  function m (e) {
    const n = e.className
    if (/hljs-/.test(n)) {
      for (var t = g(e.innerHTML), r = 0, o = ''; r < t.length; r++) {
        o += v('<span class="{0}">{1}</span>\n', [
          n,
          t[r].length > 0 ? t[r] : ' '
        ])
      }
      e.innerHTML = o.trim()
    }
  }
  function g (e) {
    return e.length === 0 ? [] : e.split(n)
  }
  function p (e) {
    return (e.trim().match(n) || []).length
  }
  function v (e, t) {
    return e.replace(/\{(\d+)\}/g, function (e, n) {
      return void 0 !== t[n] ? t[n] : e
    })
  }
  r.hljs
    ? ((r.hljs.initLineNumbersOnLoad = function (e) {
        o.readyState === 'interactive' || o.readyState === 'complete'
          ? a(e)
          : r.addEventListener('DOMContentLoaded', function () {
            a(e)
          })
      }),
      (r.hljs.lineNumbersBlock = i),
      (r.hljs.lineNumbersValue = function (e, n) {
        let t
        if (typeof e === 'string') {
          return ((t = document.createElement('code')).innerHTML = e), d(t, n)
        }
      }),
      ((e = o.createElement('style')).type = 'text/css'),
      (e.innerHTML = v(
        '.{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}',
        [l, u, h]
      )),
      o.getElementsByTagName('head')[0].appendChild(e))
    : r.console.error('highlight.js not detected!'),
  document.addEventListener('copy', function (e) {
    let n = window.getSelection()
    !(function (e) {
      for (let n = e; n;) {
        if (n.className && n.className.indexOf('hljs-ln-code') !== -1) {
          return 1
        }
        n = n.parentNode
      }
    })(n.anchorNode) ||
        ((n =
          window.navigator.userAgent.indexOf('Edge') !== -1
            ? t(n)
            : n.toString()),
        e.clipboardData.setData('text/plain', n.replace(/(^\t)/gm, '')),
        e.preventDefault())
  })
})(window, document)
