var U = Uint8Array,
  b = Uint16Array,
  rr = Uint32Array,
  er = new U([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0
  ]),
  fr = new U([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13,
    13, 0, 0
  ]),
  hr = new U([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
  Ar = function (r, a) {
    for (var v = new b(31), n = 0; n < 31; ++n) v[n] = a += 1 << r[n - 1]
    for (var f = new rr(v[30]), n = 1; n < 30; ++n)
      for (var i = v[n]; i < v[n + 1]; ++i) f[i] = ((i - v[n]) << 5) | n
    return [v, f]
  },
  Cr = Ar(er, 2),
  Er = Cr[0],
  ur = Cr[1]
;(Er[28] = 258), (ur[258] = 28)
var Or = Ar(fr, 0),
  br = Or[0],
  sr = Or[1],
  cr = new b(32768)
for (var c = 0; c < 32768; ++c) {
  var $ = ((c & 43690) >>> 1) | ((c & 21845) << 1)
  ;($ = (($ & 52428) >>> 2) | (($ & 13107) << 2)),
    ($ = (($ & 61680) >>> 4) | (($ & 3855) << 4)),
    (cr[c] = ((($ & 65280) >>> 8) | (($ & 255) << 8)) >>> 1)
}
var Y = function (r, a, v) {
    for (var n = r.length, f = 0, i = new b(a); f < n; ++f) ++i[r[f] - 1]
    var h = new b(a)
    for (f = 0; f < a; ++f) h[f] = (h[f - 1] + i[f - 1]) << 1
    var u
    if (v) {
      u = new b(1 << a)
      var l = 15 - a
      for (f = 0; f < n; ++f)
        if (r[f])
          for (
            var w = (f << 4) | r[f], e = a - r[f], g = h[r[f] - 1]++ << e, M = g | ((1 << e) - 1);
            g <= M;
            ++g
          )
            u[cr[g] >>> l] = w
    } else for (u = new b(n), f = 0; f < n; ++f) u[f] = cr[h[r[f] - 1]++] >>> (15 - r[f])
    return u
  },
  _ = new U(288)
for (var c = 0; c < 144; ++c) _[c] = 8
for (var c = 144; c < 256; ++c) _[c] = 9
for (var c = 256; c < 280; ++c) _[c] = 7
for (var c = 280; c < 288; ++c) _[c] = 8
var ar = new U(32)
for (var c = 0; c < 32; ++c) ar[c] = 5
var qr = Y(_, 9, 0),
  Br = Y(_, 9, 1),
  Tr = Y(ar, 5, 0),
  yr = Y(ar, 5, 1),
  lr = function (r) {
    for (var a = r[0], v = 1; v < r.length; ++v) r[v] > a && (a = r[v])
    return a
  },
  Q = function (r, a, v) {
    var n = (a / 8) >> 0
    return ((r[n] | (r[n + 1] << 8)) >>> (a & 7)) & v
  },
  or = function (r, a) {
    var v = (a / 8) >> 0
    return (r[v] | (r[v + 1] << 8) | (r[v + 2] << 16)) >>> (a & 7)
  },
  gr = function (r) {
    return ((r / 8) >> 0) + (r & 7 && 1)
  },
  Sr = function (r, a, v) {
    ;(a == null || a < 0) && (a = 0), (v == null || v > r.length) && (v = r.length)
    var n = new (r instanceof b ? b : r instanceof rr ? rr : U)(v - a)
    return n.set(r.subarray(a, v)), n
  },
  Dr = function (r, a, v) {
    var n = r.length,
      f = !a || v,
      i = !v || v.i
    v || (v = {}), a || (a = new U(n * 3))
    var h = function (vr) {
        var m = a.length
        if (vr > m) {
          var L = new U(Math.max(m * 2, vr))
          L.set(a), (a = L)
        }
      },
      u = v.f || 0,
      l = v.p || 0,
      w = v.b || 0,
      e = v.l,
      g = v.d,
      M = v.m,
      t = v.n,
      C = n * 8
    do {
      if (!e) {
        v.f = u = Q(r, l, 1)
        var z = Q(r, l + 1, 3)
        if (((l += 3), z))
          if (z == 1) (e = Br), (g = yr), (M = 9), (t = 5)
          else if (z == 2) {
            var R = Q(r, l, 31) + 257,
              K = Q(r, l + 10, 15) + 4,
              B = R + Q(r, l + 5, 31) + 1
            l += 14
            for (var A = new U(B), x = new U(19), o = 0; o < K; ++o) x[hr[o]] = Q(r, l + o * 3, 7)
            l += K * 3
            var N = lr(x),
              T = (1 << N) - 1
            if (!i && l + B * (N + 7) > C) break
            for (var j = Y(x, N, 1), o = 0; o < B; ) {
              var E = j[Q(r, l, T)]
              l += E & 15
              var F = E >>> 4
              if (F < 16) A[o++] = F
              else {
                var G = 0,
                  O = 0
                for (
                  F == 16
                    ? ((O = 3 + Q(r, l, 3)), (l += 2), (G = A[o - 1]))
                    : F == 17
                    ? ((O = 3 + Q(r, l, 7)), (l += 3))
                    : F == 18 && ((O = 11 + Q(r, l, 127)), (l += 7));
                  O--;

                )
                  A[o++] = G
              }
            }
            var y = A.subarray(0, R),
              s = A.subarray(R)
            ;(M = lr(y)), (t = lr(s)), (e = Y(y, M, 1)), (g = Y(s, t, 1))
          } else throw 'invalid block type'
        else {
          var F = gr(l) + 4,
            J = r[F - 4] | (r[F - 3] << 8),
            q = F + J
          if (q > n) {
            if (i) throw 'unexpected EOF'
            break
          }
          f && h(w + J), a.set(r.subarray(F, q), w), (v.b = w += J), (v.p = l = q * 8)
          continue
        }
        if (l > C) throw 'unexpected EOF'
      }
      f && h(w + 131072)
      for (var k = (1 << M) - 1, H = (1 << t) - 1, V = M + t + 18; i || l + V < C; ) {
        var G = e[or(r, l) & k],
          W = G >>> 4
        if (((l += G & 15), l > C)) throw 'unexpected EOF'
        if (!G) throw 'invalid length/literal'
        if (W < 256) a[w++] = W
        else if (W == 256) {
          e = null
          break
        } else {
          var I = W - 254
          if (W > 264) {
            var o = W - 257,
              P = er[o]
            ;(I = Q(r, l, (1 << P) - 1) + Er[o]), (l += P)
          }
          var X = g[or(r, l) & H],
            D = X >>> 4
          if (!X) throw 'invalid distance'
          l += X & 15
          var s = br[D]
          if (D > 3) {
            var P = fr[D]
            ;(s += or(r, l) & ((1 << P) - 1)), (l += P)
          }
          if (l > C) throw 'unexpected EOF'
          f && h(w + 131072)
          for (var S = w + I; w < S; w += 4)
            (a[w] = a[w - s]),
              (a[w + 1] = a[w + 1 - s]),
              (a[w + 2] = a[w + 2 - s]),
              (a[w + 3] = a[w + 3 - s])
          w = S
        }
      }
      ;(v.l = e), (v.p = l), (v.b = w), e && ((u = 1), (v.m = M), (v.d = g), (v.n = t))
    } while (!u)
    return w == a.length ? a : Sr(a, 0, w)
  },
  Z = function (r, a, v) {
    v <<= a & 7
    var n = (a / 8) >> 0
    ;(r[n] |= v), (r[n + 1] |= v >>> 8)
  },
  p = function (r, a, v) {
    v <<= a & 7
    var n = (a / 8) >> 0
    ;(r[n] |= v), (r[n + 1] |= v >>> 8), (r[n + 2] |= v >>> 16)
  },
  wr = function (r, a) {
    for (var v = [], n = 0; n < r.length; ++n) r[n] && v.push({ s: n, f: r[n] })
    var f = v.length,
      i = v.slice()
    if (!f) return [new U(0), 0]
    if (f == 1) {
      var h = new U(v[0].s + 1)
      return (h[v[0].s] = 1), [h, 1]
    }
    v.sort(function (B, A) {
      return B.f - A.f
    }),
      v.push({ s: -1, f: 25001 })
    var u = v[0],
      l = v[1],
      w = 0,
      e = 1,
      g = 2
    for (v[0] = { s: -1, f: u.f + l.f, l: u, r: l }; e != f - 1; )
      (u = v[v[w].f < v[g].f ? w++ : g++]),
        (l = v[w != e && v[w].f < v[g].f ? w++ : g++]),
        (v[e++] = { s: -1, f: u.f + l.f, l: u, r: l })
    for (var M = i[0].s, n = 1; n < f; ++n) i[n].s > M && (M = i[n].s)
    var t = new b(M + 1),
      C = tr(v[e - 1], t, 0)
    if (C > a) {
      var n = 0,
        z = 0,
        F = C - a,
        J = 1 << F
      for (
        i.sort(function (A, x) {
          return t[x.s] - t[A.s] || A.f - x.f
        });
        n < f;
        ++n
      ) {
        var q = i[n].s
        if (t[q] > a) (z += J - (1 << (C - t[q]))), (t[q] = a)
        else break
      }
      for (z >>>= F; z > 0; ) {
        var R = i[n].s
        t[R] < a ? (z -= 1 << (a - t[R]++ - 1)) : ++n
      }
      for (; n >= 0 && z; --n) {
        var K = i[n].s
        t[K] == a && (--t[K], ++z)
      }
      C = a
    }
    return [new U(t), C]
  },
  tr = function (r, a, v) {
    return r.s == -1 ? Math.max(tr(r.l, a, v + 1), tr(r.r, a, v + 1)) : (a[r.s] = v)
  },
  kr = function (r) {
    for (var a = r.length; a && !r[--a]; );
    for (
      var v = new b(++a),
        n = 0,
        f = r[0],
        i = 1,
        h = function (l) {
          v[n++] = l
        },
        u = 1;
      u <= a;
      ++u
    )
      if (r[u] == f && u != a) ++i
      else {
        if (!f && i > 2) {
          for (; i > 138; i -= 138) h(32754)
          i > 2 && (h(i > 10 ? ((i - 11) << 5) | 28690 : ((i - 3) << 5) | 12305), (i = 0))
        } else if (i > 3) {
          for (h(f), --i; i > 6; i -= 6) h(8304)
          i > 2 && (h(((i - 3) << 5) | 8208), (i = 0))
        }
        for (; i--; ) h(f)
        ;(i = 1), (f = r[u])
      }
    return [v.subarray(0, n), a]
  },
  d = function (r, a) {
    for (var v = 0, n = 0; n < a.length; ++n) v += r[n] * a[n]
    return v
  },
  nr = function (r, a, v) {
    var n = v.length,
      f = gr(a + 2)
    ;(r[f] = n & 255), (r[f + 1] = n >>> 8), (r[f + 2] = r[f] ^ 255), (r[f + 3] = r[f + 1] ^ 255)
    for (var i = 0; i < n; ++i) r[f + i + 4] = v[i]
    return (f + 4 + n) * 8
  },
  zr = function (r, a, v, n, f, i, h, u, l, w, e) {
    Z(a, e++, v), ++f[256]
    for (
      var g = wr(f, 15),
        M = g[0],
        t = g[1],
        C = wr(i, 15),
        z = C[0],
        F = C[1],
        J = kr(M),
        q = J[0],
        R = J[1],
        K = kr(z),
        B = K[0],
        A = K[1],
        x = new b(19),
        o = 0;
      o < q.length;
      ++o
    )
      x[q[o] & 31]++
    for (var o = 0; o < B.length; ++o) x[B[o] & 31]++
    for (var N = wr(x, 7), T = N[0], j = N[1], E = 19; E > 4 && !T[hr[E - 1]]; --E);
    var G = (w + 5) << 3,
      O = d(f, _) + d(i, ar) + h,
      y = d(f, M) + d(i, z) + h + 14 + 3 * E + d(x, T) + (2 * x[16] + 3 * x[17] + 7 * x[18])
    if (G <= O && G <= y) return nr(a, e, r.subarray(l, l + w))
    var s, k, H, V
    if ((Z(a, e, 1 + (y < O)), (e += 2), y < O)) {
      ;(s = Y(M, t, 0)), (k = M), (H = Y(z, F, 0)), (V = z)
      var W = Y(T, j, 0)
      Z(a, e, R - 257), Z(a, e + 5, A - 1), Z(a, e + 10, E - 4), (e += 14)
      for (var o = 0; o < E; ++o) Z(a, e + 3 * o, T[hr[o]])
      e += 3 * E
      for (var I = [q, B], P = 0; P < 2; ++P)
        for (var X = I[P], o = 0; o < X.length; ++o) {
          var D = X[o] & 31
          Z(a, e, W[D]), (e += T[D]), D > 15 && (Z(a, e, (X[o] >>> 5) & 127), (e += X[o] >>> 12))
        }
    } else (s = qr), (k = _), (H = Tr), (V = ar)
    for (var o = 0; o < u; ++o)
      if (n[o] > 255) {
        var D = (n[o] >>> 18) & 31
        p(a, e, s[D + 257]), (e += k[D + 257]), D > 7 && (Z(a, e, (n[o] >>> 23) & 31), (e += er[D]))
        var S = n[o] & 31
        p(a, e, H[S]), (e += V[S]), S > 3 && (p(a, e, (n[o] >>> 5) & 8191), (e += fr[S]))
      } else p(a, e, s[n[o]]), (e += k[n[o]])
    return p(a, e, s[256]), e + k[256]
  },
  Gr = new rr([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
  Hr = new U(0),
  Ir = function (r, a, v, n, f, i) {
    var h = r.length,
      u = new U(n + h + 5 * (1 + Math.floor(h / 7e3)) + f),
      l = u.subarray(n, u.length - f),
      w = 0
    if (!a || h < 8)
      for (var e = 0; e <= h; e += 65535) {
        var g = e + 65535
        g < h ? (w = nr(l, w, r.subarray(e, g))) : ((l[e] = i), (w = nr(l, w, r.subarray(e, h))))
      }
    else {
      for (
        var M = Gr[a - 1],
          t = M >>> 13,
          C = M & 8191,
          z = (1 << v) - 1,
          F = new b(32768),
          J = new b(z + 1),
          q = Math.ceil(v / 3),
          R = 2 * q,
          K = function (ir) {
            return (r[ir] ^ (r[ir + 1] << q) ^ (r[ir + 2] << R)) & z
          },
          B = new rr(25e3),
          A = new b(288),
          x = new b(32),
          o = 0,
          N = 0,
          e = 0,
          T = 0,
          j = 0,
          E = 0;
        e < h;
        ++e
      ) {
        var G = K(e),
          O = e & 32767,
          y = J[G]
        if (((F[O] = y), (J[G] = O), j <= e)) {
          var s = h - e
          if ((o > 7e3 || T > 24576) && s > 423) {
            ;(w = zr(r, l, 0, B, A, x, N, T, E, e - E, w)), (T = o = N = 0), (E = e)
            for (var k = 0; k < 286; ++k) A[k] = 0
            for (var k = 0; k < 30; ++k) x[k] = 0
          }
          var H = 2,
            V = 0,
            W = C,
            I = (O - y) & 32767
          if (s > 2 && G == K(e - I))
            for (
              var P = Math.min(t, s) - 1, X = Math.min(32767, e), D = Math.min(258, s);
              I <= X && --W && O != y;

            ) {
              if (r[e + H] == r[e + H - I]) {
                for (var S = 0; S < D && r[e + S] == r[e + S - I]; ++S);
                if (S > H) {
                  if (((H = S), (V = I), S > P)) break
                  for (var vr = Math.min(I, S - 2), m = 0, k = 0; k < vr; ++k) {
                    var L = (e - I + k + 32768) & 32767,
                      Ur = F[L],
                      Mr = (L - Ur + 32768) & 32767
                    Mr > m && ((m = Mr), (y = L))
                  }
                }
              }
              ;(O = y), (y = F[O]), (I += (O - y + 32768) & 32767)
            }
          if (V) {
            B[T++] = 268435456 | (ur[H] << 18) | sr[V]
            var Fr = ur[H] & 31,
              xr = sr[V] & 31
            ;(N += er[Fr] + fr[xr]), ++A[257 + Fr], ++x[xr], (j = e + H), ++o
          } else (B[T++] = r[e]), ++A[r[e]]
        }
      }
      ;(w = zr(r, l, i, B, A, x, N, T, E, e - E, w)), i || (w = nr(l, w, Hr))
    }
    return Sr(u, 0, n + gr(w) + f)
  },
  Jr = function () {
    var r = 1,
      a = 0
    return {
      p: function (v) {
        for (var n = r, f = a, i = v.length, h = 0; h != i; ) {
          for (var u = Math.min(h + 5552, i); h < u; ++h) (n += v[h]), (f += n)
          ;(n %= 65521), (f %= 65521)
        }
        ;(r = n), (a = f)
      },
      d: function () {
        return (((r >>> 8) << 16) | ((a & 255) << 8) | (a >>> 8)) + ((r & 255) << 23) * 2
      }
    }
  },
  Kr = function (r, a, v, n, f) {
    return Ir(
      r,
      a.level == null ? 6 : a.level,
      a.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(r.length))) * 1.5) : 12 + a.mem,
      v,
      n,
      !f
    )
  },
  Nr = function (r, a, v) {
    for (; v; ++a) (r[a] = v), (v >>>= 8)
  },
  Pr = function (r, a) {
    var v = a.level,
      n = v == 0 ? 0 : v < 6 ? 1 : v == 9 ? 3 : 2
    ;(r[0] = 120), (r[1] = (n << 6) | (n ? 32 - 2 * n : 1))
  },
  Qr = function (r) {
    if ((r[0] & 15) != 8 || r[0] >>> 4 > 7 || ((r[0] << 8) | r[1]) % 31) throw 'invalid zlib data'
    if (r[1] & 32) throw 'invalid zlib data: preset dictionaries not supported'
  }
function Rr(r, a) {
  a === void 0 && (a = {})
  var v = Jr()
  v.p(r)
  var n = Kr(r, a, 2, 4)
  return Pr(n, a), Nr(n, n.length - 4, v.d()), n
}
function Vr(r, a) {
  return Dr((Qr(r), r.subarray(2, -4)), a)
}
export { Vr as u, Rr as z }
