function c(t) {
  return (
    (c =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          }),
    c(t)
  )
}
function y(t, e, n, f, i, a, o) {
  try {
    var u = t[a](o),
      r = u.value
  } catch (s) {
    n(s)
    return
  }
  u.done ? e(r) : Promise.resolve(r).then(f, i)
}
function l(t) {
  return function () {
    var e = this,
      n = arguments
    return new Promise(function (f, i) {
      var a = t.apply(e, n)
      function o(r) {
        y(a, f, i, o, u, 'next', r)
      }
      function u(r) {
        y(a, f, i, o, u, 'throw', r)
      }
      o(void 0)
    })
  }
}
function p(t, e, n) {
  return (
    e in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  )
}
export { l as _, p as a, c as b }
