import { c as a } from './aos.e37f4dc9.js'
var o = { exports: {} }
;(function () {
  var r, t, e, i, p, s
  typeof performance < 'u' && performance !== null && performance.now
    ? (o.exports = function () {
        return performance.now()
      })
    : typeof process < 'u' && process !== null && process.hrtime
    ? ((o.exports = function () {
        return (r() - p) / 1e6
      }),
      (t = process.hrtime),
      (r = function () {
        var n
        return (n = t()), n[0] * 1e9 + n[1]
      }),
      (i = r()),
      (s = process.uptime() * 1e9),
      (p = i - s))
    : Date.now
    ? ((o.exports = function () {
        return Date.now() - e
      }),
      (e = Date.now()))
    : ((o.exports = function () {
        return new Date().getTime() - e
      }),
      (e = new Date().getTime()))
}).call(a)
export { o as p }
