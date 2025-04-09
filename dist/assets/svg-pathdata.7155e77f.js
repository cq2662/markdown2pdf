/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var er = function (
  e,
  t
) {
  return (er =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (h, n) {
        h.__proto__ = n
      }) ||
    function (h, n) {
      for (var p in n) Object.prototype.hasOwnProperty.call(n, p) && (h[p] = n[p])
    })(e, t)
}
function tr(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null')
  function h() {
    this.constructor = e
  }
  er(e, t), (e.prototype = t === null ? Object.create(t) : ((h.prototype = t.prototype), new h()))
}
function sr(e) {
  var t = ''
  Array.isArray(e) || (e = [e])
  for (var h = 0; h < e.length; h++) {
    var n = e[h]
    if (n.type === c.CLOSE_PATH) t += 'z'
    else if (n.type === c.HORIZ_LINE_TO) t += (n.relative ? 'h' : 'H') + n.x
    else if (n.type === c.VERT_LINE_TO) t += (n.relative ? 'v' : 'V') + n.y
    else if (n.type === c.MOVE_TO) t += (n.relative ? 'm' : 'M') + n.x + ' ' + n.y
    else if (n.type === c.LINE_TO) t += (n.relative ? 'l' : 'L') + n.x + ' ' + n.y
    else if (n.type === c.CURVE_TO)
      t +=
        (n.relative ? 'c' : 'C') +
        n.x1 +
        ' ' +
        n.y1 +
        ' ' +
        n.x2 +
        ' ' +
        n.y2 +
        ' ' +
        n.x +
        ' ' +
        n.y
    else if (n.type === c.SMOOTH_CURVE_TO)
      t += (n.relative ? 's' : 'S') + n.x2 + ' ' + n.y2 + ' ' + n.x + ' ' + n.y
    else if (n.type === c.QUAD_TO)
      t += (n.relative ? 'q' : 'Q') + n.x1 + ' ' + n.y1 + ' ' + n.x + ' ' + n.y
    else if (n.type === c.SMOOTH_QUAD_TO) t += (n.relative ? 't' : 'T') + n.x + ' ' + n.y
    else {
      if (n.type !== c.ARC)
        throw new Error('Unexpected command type "' + n.type + '" at index ' + h + '.')
      t +=
        (n.relative ? 'a' : 'A') +
        n.rX +
        ' ' +
        n.rY +
        ' ' +
        n.xRot +
        ' ' +
        +n.lArcFlag +
        ' ' +
        +n.sweepFlag +
        ' ' +
        n.x +
        ' ' +
        n.y
    }
  }
  return t
}
function z(e, t) {
  var h = e[0],
    n = e[1]
  return [h * Math.cos(t) - n * Math.sin(t), h * Math.sin(t) + n * Math.cos(t)]
}
function U() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
  for (var h = 0; h < e.length; h++)
    if (typeof e[h] != 'number')
      throw new Error(
        'assertNumbers arguments[' + h + '] is not a number. ' + typeof e[h] + ' == typeof ' + e[h]
      )
  return !0
}
var Z = Math.PI
function j(e, t, h) {
  ;(e.lArcFlag = e.lArcFlag === 0 ? 0 : 1), (e.sweepFlag = e.sweepFlag === 0 ? 0 : 1)
  var n = e.rX,
    p = e.rY,
    l = e.x,
    f = e.y
  ;(n = Math.abs(e.rX)), (p = Math.abs(e.rY))
  var r = z([(t - l) / 2, (h - f) / 2], (-e.xRot / 180) * Z),
    s = r[0],
    i = r[1],
    o = Math.pow(s, 2) / Math.pow(n, 2) + Math.pow(i, 2) / Math.pow(p, 2)
  1 < o && ((n *= Math.sqrt(o)), (p *= Math.sqrt(o))), (e.rX = n), (e.rY = p)
  var y = Math.pow(n, 2) * Math.pow(i, 2) + Math.pow(p, 2) * Math.pow(s, 2),
    a =
      (e.lArcFlag !== e.sweepFlag ? 1 : -1) *
      Math.sqrt(Math.max(0, (Math.pow(n, 2) * Math.pow(p, 2) - y) / y)),
    u = ((n * i) / p) * a,
    T = ((-p * s) / n) * a,
    m = z([u, T], (e.xRot / 180) * Z)
  ;(e.cX = m[0] + (t + l) / 2),
    (e.cY = m[1] + (h + f) / 2),
    (e.phi1 = Math.atan2((i - T) / p, (s - u) / n)),
    (e.phi2 = Math.atan2((-i - T) / p, (-s - u) / n)),
    e.sweepFlag === 0 && e.phi2 > e.phi1 && (e.phi2 -= 2 * Z),
    e.sweepFlag === 1 && e.phi2 < e.phi1 && (e.phi2 += 2 * Z),
    (e.phi1 *= 180 / Z),
    (e.phi2 *= 180 / Z)
}
function K(e, t, h) {
  U(e, t, h)
  var n = e * e + t * t - h * h
  if (0 > n) return []
  if (n === 0) return [[(e * h) / (e * e + t * t), (t * h) / (e * e + t * t)]]
  var p = Math.sqrt(n)
  return [
    [(e * h + t * p) / (e * e + t * t), (t * h - e * p) / (e * e + t * t)],
    [(e * h - t * p) / (e * e + t * t), (t * h + e * p) / (e * e + t * t)]
  ]
}
var d,
  X = Math.PI / 180
function k(e, t, h) {
  return (1 - h) * e + h * t
}
function G(e, t, h, n) {
  return e + Math.cos((n / 180) * Z) * t + Math.sin((n / 180) * Z) * h
}
function J(e, t, h, n) {
  var p = 1e-6,
    l = t - e,
    f = h - t,
    r = 3 * l + 3 * (n - h) - 6 * f,
    s = 6 * (f - l),
    i = 3 * l
  return Math.abs(r) < p
    ? [-i / s]
    : (function (o, y, a) {
        a === void 0 && (a = 1e-6)
        var u = (o * o) / 4 - y
        if (u < -a) return []
        if (u <= a) return [-o / 2]
        var T = Math.sqrt(u)
        return [-o / 2 - T, -o / 2 + T]
      })(s / r, i / r, p)
}
function $(e, t, h, n, p) {
  var l = 1 - p
  return e * (l * l * l) + t * (3 * l * l * p) + h * (3 * l * p * p) + n * (p * p * p)
}
;(function (e) {
  function t() {
    return p(function (r, s, i) {
      return (
        r.relative &&
          (r.x1 !== void 0 && (r.x1 += s),
          r.y1 !== void 0 && (r.y1 += i),
          r.x2 !== void 0 && (r.x2 += s),
          r.y2 !== void 0 && (r.y2 += i),
          r.x !== void 0 && (r.x += s),
          r.y !== void 0 && (r.y += i),
          (r.relative = !1)),
        r
      )
    })
  }
  function h() {
    var r = NaN,
      s = NaN,
      i = NaN,
      o = NaN
    return p(function (y, a, u) {
      return (
        y.type & c.SMOOTH_CURVE_TO &&
          ((y.type = c.CURVE_TO),
          (r = isNaN(r) ? a : r),
          (s = isNaN(s) ? u : s),
          (y.x1 = y.relative ? a - r : 2 * a - r),
          (y.y1 = y.relative ? u - s : 2 * u - s)),
        y.type & c.CURVE_TO
          ? ((r = y.relative ? a + y.x2 : y.x2), (s = y.relative ? u + y.y2 : y.y2))
          : ((r = NaN), (s = NaN)),
        y.type & c.SMOOTH_QUAD_TO &&
          ((y.type = c.QUAD_TO),
          (i = isNaN(i) ? a : i),
          (o = isNaN(o) ? u : o),
          (y.x1 = y.relative ? a - i : 2 * a - i),
          (y.y1 = y.relative ? u - o : 2 * u - o)),
        y.type & c.QUAD_TO
          ? ((i = y.relative ? a + y.x1 : y.x1), (o = y.relative ? u + y.y1 : y.y1))
          : ((i = NaN), (o = NaN)),
        y
      )
    })
  }
  function n() {
    var r = NaN,
      s = NaN
    return p(function (i, o, y) {
      if (
        (i.type & c.SMOOTH_QUAD_TO &&
          ((i.type = c.QUAD_TO),
          (r = isNaN(r) ? o : r),
          (s = isNaN(s) ? y : s),
          (i.x1 = i.relative ? o - r : 2 * o - r),
          (i.y1 = i.relative ? y - s : 2 * y - s)),
        i.type & c.QUAD_TO)
      ) {
        ;(r = i.relative ? o + i.x1 : i.x1), (s = i.relative ? y + i.y1 : i.y1)
        var a = i.x1,
          u = i.y1
        ;(i.type = c.CURVE_TO),
          (i.x1 = ((i.relative ? 0 : o) + 2 * a) / 3),
          (i.y1 = ((i.relative ? 0 : y) + 2 * u) / 3),
          (i.x2 = (i.x + 2 * a) / 3),
          (i.y2 = (i.y + 2 * u) / 3)
      } else (r = NaN), (s = NaN)
      return i
    })
  }
  function p(r) {
    var s = 0,
      i = 0,
      o = NaN,
      y = NaN
    return function (a) {
      if (isNaN(o) && !(a.type & c.MOVE_TO)) throw new Error('path must start with moveto')
      var u = r(a, s, i, o, y)
      return (
        a.type & c.CLOSE_PATH && ((s = o), (i = y)),
        a.x !== void 0 && (s = a.relative ? s + a.x : a.x),
        a.y !== void 0 && (i = a.relative ? i + a.y : a.y),
        a.type & c.MOVE_TO && ((o = s), (y = i)),
        u
      )
    }
  }
  function l(r, s, i, o, y, a) {
    return (
      U(r, s, i, o, y, a),
      p(function (u, T, m, C) {
        var x = u.x1,
          g = u.x2,
          N = u.relative && !isNaN(C),
          _ = u.x !== void 0 ? u.x : N ? 0 : T,
          I = u.y !== void 0 ? u.y : N ? 0 : m
        function v(q) {
          return q * q
        }
        u.type & c.HORIZ_LINE_TO && s !== 0 && ((u.type = c.LINE_TO), (u.y = u.relative ? 0 : m)),
          u.type & c.VERT_LINE_TO && i !== 0 && ((u.type = c.LINE_TO), (u.x = u.relative ? 0 : T)),
          u.x !== void 0 && (u.x = u.x * r + I * i + (N ? 0 : y)),
          u.y !== void 0 && (u.y = _ * s + u.y * o + (N ? 0 : a)),
          u.x1 !== void 0 && (u.x1 = u.x1 * r + u.y1 * i + (N ? 0 : y)),
          u.y1 !== void 0 && (u.y1 = x * s + u.y1 * o + (N ? 0 : a)),
          u.x2 !== void 0 && (u.x2 = u.x2 * r + u.y2 * i + (N ? 0 : y)),
          u.y2 !== void 0 && (u.y2 = g * s + u.y2 * o + (N ? 0 : a))
        var O = r * o - s * i
        if (u.xRot !== void 0 && (r !== 1 || s !== 0 || i !== 0 || o !== 1))
          if (O === 0)
            delete u.rX,
              delete u.rY,
              delete u.xRot,
              delete u.lArcFlag,
              delete u.sweepFlag,
              (u.type = c.LINE_TO)
          else {
            var M = (u.xRot * Math.PI) / 180,
              R = Math.sin(M),
              P = Math.cos(M),
              S = 1 / v(u.rX),
              H = 1 / v(u.rY),
              Q = v(P) * S + v(R) * H,
              F = 2 * R * P * (S - H),
              b = v(R) * S + v(P) * H,
              D = Q * o * o - F * s * o + b * s * s,
              V = F * (r * o + s * i) - 2 * (Q * i * o + b * r * s),
              Y = Q * i * i - F * r * i + b * r * r,
              E = ((Math.atan2(V, D - Y) + Math.PI) % Math.PI) / 2,
              A = Math.sin(E),
              w = Math.cos(E)
            ;(u.rX = Math.abs(O) / Math.sqrt(D * v(w) + V * A * w + Y * v(A))),
              (u.rY = Math.abs(O) / Math.sqrt(D * v(A) - V * A * w + Y * v(w))),
              (u.xRot = (180 * E) / Math.PI)
          }
        return u.sweepFlag !== void 0 && 0 > O && (u.sweepFlag = +!u.sweepFlag), u
      })
    )
  }
  function f() {
    return function (r) {
      var s = {}
      for (var i in r) s[i] = r[i]
      return s
    }
  }
  ;(e.ROUND = function (r) {
    function s(i) {
      return Math.round(i * r) / r
    }
    return (
      r === void 0 && (r = 1e13),
      U(r),
      function (i) {
        return (
          i.x1 !== void 0 && (i.x1 = s(i.x1)),
          i.y1 !== void 0 && (i.y1 = s(i.y1)),
          i.x2 !== void 0 && (i.x2 = s(i.x2)),
          i.y2 !== void 0 && (i.y2 = s(i.y2)),
          i.x !== void 0 && (i.x = s(i.x)),
          i.y !== void 0 && (i.y = s(i.y)),
          i.rX !== void 0 && (i.rX = s(i.rX)),
          i.rY !== void 0 && (i.rY = s(i.rY)),
          i
        )
      }
    )
  }),
    (e.TO_ABS = t),
    (e.TO_REL = function () {
      return p(function (r, s, i) {
        return (
          r.relative ||
            (r.x1 !== void 0 && (r.x1 -= s),
            r.y1 !== void 0 && (r.y1 -= i),
            r.x2 !== void 0 && (r.x2 -= s),
            r.y2 !== void 0 && (r.y2 -= i),
            r.x !== void 0 && (r.x -= s),
            r.y !== void 0 && (r.y -= i),
            (r.relative = !0)),
          r
        )
      })
    }),
    (e.NORMALIZE_HVZ = function (r, s, i) {
      return (
        r === void 0 && (r = !0),
        s === void 0 && (s = !0),
        i === void 0 && (i = !0),
        p(function (o, y, a, u, T) {
          if (isNaN(u) && !(o.type & c.MOVE_TO)) throw new Error('path must start with moveto')
          return (
            s && o.type & c.HORIZ_LINE_TO && ((o.type = c.LINE_TO), (o.y = o.relative ? 0 : a)),
            i && o.type & c.VERT_LINE_TO && ((o.type = c.LINE_TO), (o.x = o.relative ? 0 : y)),
            r &&
              o.type & c.CLOSE_PATH &&
              ((o.type = c.LINE_TO),
              (o.x = o.relative ? u - y : u),
              (o.y = o.relative ? T - a : T)),
            o.type & c.ARC &&
              (o.rX === 0 || o.rY === 0) &&
              ((o.type = c.LINE_TO),
              delete o.rX,
              delete o.rY,
              delete o.xRot,
              delete o.lArcFlag,
              delete o.sweepFlag),
            o
          )
        })
      )
    }),
    (e.NORMALIZE_ST = h),
    (e.QT_TO_C = n),
    (e.INFO = p),
    (e.SANITIZE = function (r) {
      r === void 0 && (r = 0), U(r)
      var s = NaN,
        i = NaN,
        o = NaN,
        y = NaN
      return p(function (a, u, T, m, C) {
        var x = Math.abs,
          g = !1,
          N = 0,
          _ = 0
        if (
          (a.type & c.SMOOTH_CURVE_TO && ((N = isNaN(s) ? 0 : u - s), (_ = isNaN(i) ? 0 : T - i)),
          a.type & (c.CURVE_TO | c.SMOOTH_CURVE_TO)
            ? ((s = a.relative ? u + a.x2 : a.x2), (i = a.relative ? T + a.y2 : a.y2))
            : ((s = NaN), (i = NaN)),
          a.type & c.SMOOTH_QUAD_TO
            ? ((o = isNaN(o) ? u : 2 * u - o), (y = isNaN(y) ? T : 2 * T - y))
            : a.type & c.QUAD_TO
            ? ((o = a.relative ? u + a.x1 : a.x1), (y = a.relative ? T + a.y1 : a.y2))
            : ((o = NaN), (y = NaN)),
          a.type & c.LINE_COMMANDS ||
            (a.type & c.ARC && (a.rX === 0 || a.rY === 0 || !a.lArcFlag)) ||
            a.type & c.CURVE_TO ||
            a.type & c.SMOOTH_CURVE_TO ||
            a.type & c.QUAD_TO ||
            a.type & c.SMOOTH_QUAD_TO)
        ) {
          var I = a.x === void 0 ? 0 : a.relative ? a.x : a.x - u,
            v = a.y === void 0 ? 0 : a.relative ? a.y : a.y - T
          ;(N = isNaN(o) ? (a.x1 === void 0 ? N : a.relative ? a.x : a.x1 - u) : o - u),
            (_ = isNaN(y) ? (a.y1 === void 0 ? _ : a.relative ? a.y : a.y1 - T) : y - T)
          var O = a.x2 === void 0 ? 0 : a.relative ? a.x : a.x2 - u,
            M = a.y2 === void 0 ? 0 : a.relative ? a.y : a.y2 - T
          x(I) <= r && x(v) <= r && x(N) <= r && x(_) <= r && x(O) <= r && x(M) <= r && (g = !0)
        }
        return a.type & c.CLOSE_PATH && x(u - m) <= r && x(T - C) <= r && (g = !0), g ? [] : a
      })
    }),
    (e.MATRIX = l),
    (e.ROTATE = function (r, s, i) {
      s === void 0 && (s = 0), i === void 0 && (i = 0), U(r, s, i)
      var o = Math.sin(r),
        y = Math.cos(r)
      return l(y, o, -o, y, s - s * y + i * o, i - s * o - i * y)
    }),
    (e.TRANSLATE = function (r, s) {
      return s === void 0 && (s = 0), U(r, s), l(1, 0, 0, 1, r, s)
    }),
    (e.SCALE = function (r, s) {
      return s === void 0 && (s = r), U(r, s), l(r, 0, 0, s, 0, 0)
    }),
    (e.SKEW_X = function (r) {
      return U(r), l(1, 0, Math.atan(r), 1, 0, 0)
    }),
    (e.SKEW_Y = function (r) {
      return U(r), l(1, Math.atan(r), 0, 1, 0, 0)
    }),
    (e.X_AXIS_SYMMETRY = function (r) {
      return r === void 0 && (r = 0), U(r), l(-1, 0, 0, 1, r, 0)
    }),
    (e.Y_AXIS_SYMMETRY = function (r) {
      return r === void 0 && (r = 0), U(r), l(1, 0, 0, -1, 0, r)
    }),
    (e.A_TO_C = function () {
      return p(function (r, s, i) {
        return c.ARC === r.type
          ? (function (o, y, a) {
              var u, T, m, C
              o.cX || j(o, y, a)
              for (
                var x = Math.min(o.phi1, o.phi2),
                  g = Math.max(o.phi1, o.phi2) - x,
                  N = Math.ceil(g / 90),
                  _ = new Array(N),
                  I = y,
                  v = a,
                  O = 0;
                O < N;
                O++
              ) {
                var M = k(o.phi1, o.phi2, O / N),
                  R = k(o.phi1, o.phi2, (O + 1) / N),
                  P = R - M,
                  S = (4 / 3) * Math.tan((P * X) / 4),
                  H = [
                    Math.cos(M * X) - S * Math.sin(M * X),
                    Math.sin(M * X) + S * Math.cos(M * X)
                  ],
                  Q = H[0],
                  F = H[1],
                  b = [Math.cos(R * X), Math.sin(R * X)],
                  D = b[0],
                  V = b[1],
                  Y = [D + S * Math.sin(R * X), V - S * Math.cos(R * X)],
                  E = Y[0],
                  A = Y[1]
                _[O] = { relative: o.relative, type: c.CURVE_TO }
                var w = function (q, W) {
                  var B = z([q * o.rX, W * o.rY], o.xRot),
                    nr = B[0],
                    or = B[1]
                  return [o.cX + nr, o.cY + or]
                }
                ;(u = w(Q, F)),
                  (_[O].x1 = u[0]),
                  (_[O].y1 = u[1]),
                  (T = w(E, A)),
                  (_[O].x2 = T[0]),
                  (_[O].y2 = T[1]),
                  (m = w(D, V)),
                  (_[O].x = m[0]),
                  (_[O].y = m[1]),
                  o.relative &&
                    ((_[O].x1 -= I),
                    (_[O].y1 -= v),
                    (_[O].x2 -= I),
                    (_[O].y2 -= v),
                    (_[O].x -= I),
                    (_[O].y -= v)),
                  (I = (C = [_[O].x, _[O].y])[0]),
                  (v = C[1])
              }
              return _
            })(r, r.relative ? 0 : s, r.relative ? 0 : i)
          : r
      })
    }),
    (e.ANNOTATE_ARCS = function () {
      return p(function (r, s, i) {
        return r.relative && ((s = 0), (i = 0)), c.ARC === r.type && j(r, s, i), r
      })
    }),
    (e.CLONE = f),
    (e.CALCULATE_BOUNDS = function () {
      var r = function (a) {
          var u = {}
          for (var T in a) u[T] = a[T]
          return u
        },
        s = t(),
        i = n(),
        o = h(),
        y = p(function (a, u, T) {
          var m = o(i(s(r(a))))
          function C(A) {
            A > y.maxX && (y.maxX = A), A < y.minX && (y.minX = A)
          }
          function x(A) {
            A > y.maxY && (y.maxY = A), A < y.minY && (y.minY = A)
          }
          if (
            (m.type & c.DRAWING_COMMANDS && (C(u), x(T)),
            m.type & c.HORIZ_LINE_TO && C(m.x),
            m.type & c.VERT_LINE_TO && x(m.y),
            m.type & c.LINE_TO && (C(m.x), x(m.y)),
            m.type & c.CURVE_TO)
          ) {
            C(m.x), x(m.y)
            for (var g = 0, N = J(u, m.x1, m.x2, m.x); g < N.length; g++)
              0 < (E = N[g]) && 1 > E && C($(u, m.x1, m.x2, m.x, E))
            for (var _ = 0, I = J(T, m.y1, m.y2, m.y); _ < I.length; _++)
              0 < (E = I[_]) && 1 > E && x($(T, m.y1, m.y2, m.y, E))
          }
          if (m.type & c.ARC) {
            C(m.x), x(m.y), j(m, u, T)
            for (
              var v = (m.xRot / 180) * Math.PI,
                O = Math.cos(v) * m.rX,
                M = Math.sin(v) * m.rX,
                R = -Math.sin(v) * m.rY,
                P = Math.cos(v) * m.rY,
                S =
                  m.phi1 < m.phi2
                    ? [m.phi1, m.phi2]
                    : -180 > m.phi2
                    ? [m.phi2 + 360, m.phi1 + 360]
                    : [m.phi2, m.phi1],
                H = S[0],
                Q = S[1],
                F = function (A) {
                  var w = A[0],
                    q = A[1],
                    W = (180 * Math.atan2(q, w)) / Math.PI
                  return W < H ? W + 360 : W
                },
                b = 0,
                D = K(R, -O, 0).map(F);
              b < D.length;
              b++
            )
              (E = D[b]) > H && E < Q && C(G(m.cX, O, R, E))
            for (var V = 0, Y = K(P, -M, 0).map(F); V < Y.length; V++) {
              var E
              ;(E = Y[V]) > H && E < Q && x(G(m.cY, M, P, E))
            }
          }
          return a
        })
      return (y.minX = 1 / 0), (y.maxX = -1 / 0), (y.minY = 1 / 0), (y.maxY = -1 / 0), y
    })
})(d || (d = {}))
var L,
  ir = (function () {
    function e() {}
    return (
      (e.prototype.round = function (t) {
        return this.transform(d.ROUND(t))
      }),
      (e.prototype.toAbs = function () {
        return this.transform(d.TO_ABS())
      }),
      (e.prototype.toRel = function () {
        return this.transform(d.TO_REL())
      }),
      (e.prototype.normalizeHVZ = function (t, h, n) {
        return this.transform(d.NORMALIZE_HVZ(t, h, n))
      }),
      (e.prototype.normalizeST = function () {
        return this.transform(d.NORMALIZE_ST())
      }),
      (e.prototype.qtToC = function () {
        return this.transform(d.QT_TO_C())
      }),
      (e.prototype.aToC = function () {
        return this.transform(d.A_TO_C())
      }),
      (e.prototype.sanitize = function (t) {
        return this.transform(d.SANITIZE(t))
      }),
      (e.prototype.translate = function (t, h) {
        return this.transform(d.TRANSLATE(t, h))
      }),
      (e.prototype.scale = function (t, h) {
        return this.transform(d.SCALE(t, h))
      }),
      (e.prototype.rotate = function (t, h, n) {
        return this.transform(d.ROTATE(t, h, n))
      }),
      (e.prototype.matrix = function (t, h, n, p, l, f) {
        return this.transform(d.MATRIX(t, h, n, p, l, f))
      }),
      (e.prototype.skewX = function (t) {
        return this.transform(d.SKEW_X(t))
      }),
      (e.prototype.skewY = function (t) {
        return this.transform(d.SKEW_Y(t))
      }),
      (e.prototype.xSymmetry = function (t) {
        return this.transform(d.X_AXIS_SYMMETRY(t))
      }),
      (e.prototype.ySymmetry = function (t) {
        return this.transform(d.Y_AXIS_SYMMETRY(t))
      }),
      (e.prototype.annotateArcs = function () {
        return this.transform(d.ANNOTATE_ARCS())
      }),
      e
    )
  })(),
  ar = function (e) {
    return (
      e === ' ' ||
      e === '	' ||
      e === '\r' ||
      e ===
        `
`
    )
  },
  rr = function (e) {
    return '0'.charCodeAt(0) <= e.charCodeAt(0) && e.charCodeAt(0) <= '9'.charCodeAt(0)
  },
  ur = (function (e) {
    function t() {
      var h = e.call(this) || this
      return (
        (h.curNumber = ''),
        (h.curCommandType = -1),
        (h.curCommandRelative = !1),
        (h.canParseCommandOrComma = !0),
        (h.curNumberHasExp = !1),
        (h.curNumberHasExpDigits = !1),
        (h.curNumberHasDecimal = !1),
        (h.curArgs = []),
        h
      )
    }
    return (
      tr(t, e),
      (t.prototype.finish = function (h) {
        if (
          (h === void 0 && (h = []),
          this.parse(' ', h),
          this.curArgs.length !== 0 || !this.canParseCommandOrComma)
        )
          throw new SyntaxError('Unterminated command at the path end.')
        return h
      }),
      (t.prototype.parse = function (h, n) {
        var p = this
        n === void 0 && (n = [])
        for (
          var l = function (y) {
              n.push(y), (p.curArgs.length = 0), (p.canParseCommandOrComma = !0)
            },
            f = 0;
          f < h.length;
          f++
        ) {
          var r = h[f],
            s = !(
              this.curCommandType !== c.ARC ||
              (this.curArgs.length !== 3 && this.curArgs.length !== 4) ||
              this.curNumber.length !== 1 ||
              (this.curNumber !== '0' && this.curNumber !== '1')
            ),
            i = rr(r) && ((this.curNumber === '0' && r === '0') || s)
          if (!rr(r) || i)
            if (r !== 'e' && r !== 'E')
              if ((r !== '-' && r !== '+') || !this.curNumberHasExp || this.curNumberHasExpDigits)
                if (r !== '.' || this.curNumberHasExp || this.curNumberHasDecimal || s) {
                  if (this.curNumber && this.curCommandType !== -1) {
                    var o = Number(this.curNumber)
                    if (isNaN(o)) throw new SyntaxError('Invalid number ending at ' + f)
                    if (this.curCommandType === c.ARC) {
                      if (this.curArgs.length === 0 || this.curArgs.length === 1) {
                        if (0 > o)
                          throw new SyntaxError(
                            'Expected positive number, got "' + o + '" at index "' + f + '"'
                          )
                      } else if (
                        (this.curArgs.length === 3 || this.curArgs.length === 4) &&
                        this.curNumber !== '0' &&
                        this.curNumber !== '1'
                      )
                        throw new SyntaxError(
                          'Expected a flag, got "' + this.curNumber + '" at index "' + f + '"'
                        )
                    }
                    this.curArgs.push(o),
                      this.curArgs.length === cr[this.curCommandType] &&
                        (c.HORIZ_LINE_TO === this.curCommandType
                          ? l({ type: c.HORIZ_LINE_TO, relative: this.curCommandRelative, x: o })
                          : c.VERT_LINE_TO === this.curCommandType
                          ? l({ type: c.VERT_LINE_TO, relative: this.curCommandRelative, y: o })
                          : this.curCommandType === c.MOVE_TO ||
                            this.curCommandType === c.LINE_TO ||
                            this.curCommandType === c.SMOOTH_QUAD_TO
                          ? (l({
                              type: this.curCommandType,
                              relative: this.curCommandRelative,
                              x: this.curArgs[0],
                              y: this.curArgs[1]
                            }),
                            c.MOVE_TO === this.curCommandType && (this.curCommandType = c.LINE_TO))
                          : this.curCommandType === c.CURVE_TO
                          ? l({
                              type: c.CURVE_TO,
                              relative: this.curCommandRelative,
                              x1: this.curArgs[0],
                              y1: this.curArgs[1],
                              x2: this.curArgs[2],
                              y2: this.curArgs[3],
                              x: this.curArgs[4],
                              y: this.curArgs[5]
                            })
                          : this.curCommandType === c.SMOOTH_CURVE_TO
                          ? l({
                              type: c.SMOOTH_CURVE_TO,
                              relative: this.curCommandRelative,
                              x2: this.curArgs[0],
                              y2: this.curArgs[1],
                              x: this.curArgs[2],
                              y: this.curArgs[3]
                            })
                          : this.curCommandType === c.QUAD_TO
                          ? l({
                              type: c.QUAD_TO,
                              relative: this.curCommandRelative,
                              x1: this.curArgs[0],
                              y1: this.curArgs[1],
                              x: this.curArgs[2],
                              y: this.curArgs[3]
                            })
                          : this.curCommandType === c.ARC &&
                            l({
                              type: c.ARC,
                              relative: this.curCommandRelative,
                              rX: this.curArgs[0],
                              rY: this.curArgs[1],
                              xRot: this.curArgs[2],
                              lArcFlag: this.curArgs[3],
                              sweepFlag: this.curArgs[4],
                              x: this.curArgs[5],
                              y: this.curArgs[6]
                            })),
                      (this.curNumber = ''),
                      (this.curNumberHasExpDigits = !1),
                      (this.curNumberHasExp = !1),
                      (this.curNumberHasDecimal = !1),
                      (this.canParseCommandOrComma = !0)
                  }
                  if (!ar(r))
                    if (r === ',' && this.canParseCommandOrComma) this.canParseCommandOrComma = !1
                    else if (r !== '+' && r !== '-' && r !== '.')
                      if (i) (this.curNumber = r), (this.curNumberHasDecimal = !1)
                      else {
                        if (this.curArgs.length !== 0)
                          throw new SyntaxError('Unterminated command at index ' + f + '.')
                        if (!this.canParseCommandOrComma)
                          throw new SyntaxError(
                            'Unexpected character "' +
                              r +
                              '" at index ' +
                              f +
                              '. Command cannot follow comma'
                          )
                        if (((this.canParseCommandOrComma = !1), r !== 'z' && r !== 'Z'))
                          if (r === 'h' || r === 'H')
                            (this.curCommandType = c.HORIZ_LINE_TO),
                              (this.curCommandRelative = r === 'h')
                          else if (r === 'v' || r === 'V')
                            (this.curCommandType = c.VERT_LINE_TO),
                              (this.curCommandRelative = r === 'v')
                          else if (r === 'm' || r === 'M')
                            (this.curCommandType = c.MOVE_TO), (this.curCommandRelative = r === 'm')
                          else if (r === 'l' || r === 'L')
                            (this.curCommandType = c.LINE_TO), (this.curCommandRelative = r === 'l')
                          else if (r === 'c' || r === 'C')
                            (this.curCommandType = c.CURVE_TO),
                              (this.curCommandRelative = r === 'c')
                          else if (r === 's' || r === 'S')
                            (this.curCommandType = c.SMOOTH_CURVE_TO),
                              (this.curCommandRelative = r === 's')
                          else if (r === 'q' || r === 'Q')
                            (this.curCommandType = c.QUAD_TO), (this.curCommandRelative = r === 'q')
                          else if (r === 't' || r === 'T')
                            (this.curCommandType = c.SMOOTH_QUAD_TO),
                              (this.curCommandRelative = r === 't')
                          else {
                            if (r !== 'a' && r !== 'A')
                              throw new SyntaxError(
                                'Unexpected character "' + r + '" at index ' + f + '.'
                              )
                            ;(this.curCommandType = c.ARC), (this.curCommandRelative = r === 'a')
                          }
                        else
                          n.push({ type: c.CLOSE_PATH }),
                            (this.canParseCommandOrComma = !0),
                            (this.curCommandType = -1)
                      }
                    else (this.curNumber = r), (this.curNumberHasDecimal = r === '.')
                } else (this.curNumber += r), (this.curNumberHasDecimal = !0)
              else this.curNumber += r
            else (this.curNumber += r), (this.curNumberHasExp = !0)
          else (this.curNumber += r), (this.curNumberHasExpDigits = this.curNumberHasExp)
        }
        return n
      }),
      (t.prototype.transform = function (h) {
        return Object.create(this, {
          parse: {
            value: function (n, p) {
              p === void 0 && (p = [])
              for (
                var l = 0, f = Object.getPrototypeOf(this).parse.call(this, n);
                l < f.length;
                l++
              ) {
                var r = f[l],
                  s = h(r)
                Array.isArray(s) ? p.push.apply(p, s) : p.push(s)
              }
              return p
            }
          }
        })
      }),
      t
    )
  })(ir),
  c = (function (e) {
    function t(h) {
      var n = e.call(this) || this
      return (n.commands = typeof h == 'string' ? t.parse(h) : h), n
    }
    return (
      tr(t, e),
      (t.prototype.encode = function () {
        return t.encode(this.commands)
      }),
      (t.prototype.getBounds = function () {
        var h = d.CALCULATE_BOUNDS()
        return this.transform(h), h
      }),
      (t.prototype.transform = function (h) {
        for (var n = [], p = 0, l = this.commands; p < l.length; p++) {
          var f = h(l[p])
          Array.isArray(f) ? n.push.apply(n, f) : n.push(f)
        }
        return (this.commands = n), this
      }),
      (t.encode = function (h) {
        return sr(h)
      }),
      (t.parse = function (h) {
        var n = new ur(),
          p = []
        return n.parse(h, p), n.finish(p), p
      }),
      (t.CLOSE_PATH = 1),
      (t.MOVE_TO = 2),
      (t.HORIZ_LINE_TO = 4),
      (t.VERT_LINE_TO = 8),
      (t.LINE_TO = 16),
      (t.CURVE_TO = 32),
      (t.SMOOTH_CURVE_TO = 64),
      (t.QUAD_TO = 128),
      (t.SMOOTH_QUAD_TO = 256),
      (t.ARC = 512),
      (t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO),
      (t.DRAWING_COMMANDS =
        t.HORIZ_LINE_TO |
        t.VERT_LINE_TO |
        t.LINE_TO |
        t.CURVE_TO |
        t.SMOOTH_CURVE_TO |
        t.QUAD_TO |
        t.SMOOTH_QUAD_TO |
        t.ARC),
      t
    )
  })(ir),
  cr =
    (((L = {})[c.MOVE_TO] = 2),
    (L[c.LINE_TO] = 2),
    (L[c.HORIZ_LINE_TO] = 1),
    (L[c.VERT_LINE_TO] = 1),
    (L[c.CLOSE_PATH] = 0),
    (L[c.QUAD_TO] = 4),
    (L[c.SMOOTH_QUAD_TO] = 2),
    (L[c.CURVE_TO] = 6),
    (L[c.SMOOTH_CURVE_TO] = 4),
    (L[c.ARC] = 7),
    L)
export { c as _ }
