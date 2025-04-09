import {
  t as D,
  N as us,
  s as Ya,
  T as rt,
  a as ke,
  b as Xa,
  I as Qa,
  h as Za,
  c as pi,
  P as _a,
  p as eh,
  G as th,
  S as ih,
  d as nh,
  E as sh,
  e as rh
} from './@lezer.21bfad76.js'
import { c as R } from './crelt.67277586.js'
import { S as He } from './style-mod.a2e40363.js'
import { k as oh, b as lh, s as ah } from './w3c-keyname.30cf5eb3.js'
class B {
  constructor() {}
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`)
    return this.lineInner(e, !1, 1, 0)
  }
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`)
    return this.lineInner(e, !0, 1, 0)
  }
  replace(e, t, i) {
    let s = []
    return (
      this.decompose(0, e, s, 2),
      i.length && i.decompose(0, i.length, s, 3),
      this.decompose(t, this.length, s, 1),
      be.from(s, this.length - (t - e) + i.length)
    )
  }
  append(e) {
    return this.replace(this.length, this.length, e)
  }
  slice(e, t = this.length) {
    let i = []
    return this.decompose(e, t, i, 0), be.from(i, t - e)
  }
  eq(e) {
    if (e == this) return !0
    if (e.length != this.length || e.lines != this.lines) return !1
    let t = this.scanIdentical(e, 1),
      i = this.length - this.scanIdentical(e, -1),
      s = new Rt(this),
      r = new Rt(e)
    for (let o = t, l = t; ; ) {
      if (
        (s.next(o),
        r.next(o),
        (o = 0),
        s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value)
      )
        return !1
      if (((l += s.value.length), s.done || l >= i)) return !0
    }
  }
  iter(e = 1) {
    return new Rt(this, e)
  }
  iterRange(e, t = this.length) {
    return new po(this, e, t)
  }
  iterLines(e, t) {
    let i
    if (e == null) i = this.iter()
    else {
      t == null && (t = this.lines + 1)
      let s = this.line(e).from
      i = this.iterRange(
        s,
        Math.max(s, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to)
      )
    }
    return new mo(i)
  }
  toString() {
    return this.sliceString(0)
  }
  toJSON() {
    let e = []
    return this.flatten(e), e
  }
  static of(e) {
    if (e.length == 0) throw new RangeError('A document must have at least one line')
    return e.length == 1 && !e[0] ? B.empty : e.length <= 32 ? new H(e) : be.from(H.split(e, []))
  }
}
class H extends B {
  constructor(e, t = hh(e)) {
    super(), (this.text = e), (this.length = t)
  }
  get lines() {
    return this.text.length
  }
  get children() {
    return null
  }
  lineInner(e, t, i, s) {
    for (let r = 0; ; r++) {
      let o = this.text[r],
        l = s + o.length
      if ((t ? i : l) >= e) return new ch(s, l, i, o)
      ;(s = l + 1), i++
    }
  }
  decompose(e, t, i, s) {
    let r =
      e <= 0 && t >= this.length
        ? this
        : new H($s(this.text, e, t), Math.min(t, this.length) - Math.max(0, e))
    if (s & 1) {
      let o = i.pop(),
        l = mi(r.text, o.text.slice(), 0, r.length)
      if (l.length <= 32) i.push(new H(l, o.length + r.length))
      else {
        let a = l.length >> 1
        i.push(new H(l.slice(0, a)), new H(l.slice(a)))
      }
    } else i.push(r)
  }
  replace(e, t, i) {
    if (!(i instanceof H)) return super.replace(e, t, i)
    let s = mi(this.text, mi(i.text, $s(this.text, 0, e)), t),
      r = this.length + i.length - (t - e)
    return s.length <= 32 ? new H(s, r) : be.from(H.split(s, []), r)
  }
  sliceString(
    e,
    t = this.length,
    i = `
`
  ) {
    let s = ''
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let l = this.text[o],
        a = r + l.length
      r > e && o && (s += i),
        e < a && t > r && (s += l.slice(Math.max(0, e - r), t - r)),
        (r = a + 1)
    }
    return s
  }
  flatten(e) {
    for (let t of this.text) e.push(t)
  }
  scanIdentical() {
    return 0
  }
  static split(e, t) {
    let i = [],
      s = -1
    for (let r of e)
      i.push(r), (s += r.length + 1), i.length == 32 && (t.push(new H(i, s)), (i = []), (s = -1))
    return s > -1 && t.push(new H(i, s)), t
  }
}
class be extends B {
  constructor(e, t) {
    super(), (this.children = e), (this.length = t), (this.lines = 0)
    for (let i of e) this.lines += i.lines
  }
  lineInner(e, t, i, s) {
    for (let r = 0; ; r++) {
      let o = this.children[r],
        l = s + o.length,
        a = i + o.lines - 1
      if ((t ? a : l) >= e) return o.lineInner(e, t, i, s)
      ;(s = l + 1), (i = a + 1)
    }
  }
  decompose(e, t, i, s) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let l = this.children[r],
        a = o + l.length
      if (e <= a && t >= o) {
        let h = s & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0))
        o >= e && a <= t && !h ? i.push(l) : l.decompose(e - o, t - o, i, h)
      }
      o = a + 1
    }
  }
  replace(e, t, i) {
    if (i.lines < this.lines)
      for (let s = 0, r = 0; s < this.children.length; s++) {
        let o = this.children[s],
          l = r + o.length
        if (e >= r && t <= l) {
          let a = o.replace(e - r, t - r, i),
            h = this.lines - o.lines + a.lines
          if (a.lines < h >> (5 - 1) && a.lines > h >> (5 + 1)) {
            let c = this.children.slice()
            return (c[s] = a), new be(c, this.length - (t - e) + i.length)
          }
          return super.replace(r, l, a)
        }
        r = l + 1
      }
    return super.replace(e, t, i)
  }
  sliceString(
    e,
    t = this.length,
    i = `
`
  ) {
    let s = ''
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let l = this.children[r],
        a = o + l.length
      o > e && r && (s += i), e < a && t > o && (s += l.sliceString(e - o, t - o, i)), (o = a + 1)
    }
    return s
  }
  flatten(e) {
    for (let t of this.children) t.flatten(e)
  }
  scanIdentical(e, t) {
    if (!(e instanceof be)) return 0
    let i = 0,
      [s, r, o, l] =
        t > 0
          ? [0, 0, this.children.length, e.children.length]
          : [this.children.length - 1, e.children.length - 1, -1, -1]
    for (; ; s += t, r += t) {
      if (s == o || r == l) return i
      let a = this.children[s],
        h = e.children[r]
      if (a != h) return i + a.scanIdentical(h, t)
      i += a.length + 1
    }
  }
  static from(e, t = e.reduce((i, s) => i + s.length + 1, -1)) {
    let i = 0
    for (let d of e) i += d.lines
    if (i < 32) {
      let d = []
      for (let p of e) p.flatten(d)
      return new H(d, t)
    }
    let s = Math.max(32, i >> 5),
      r = s << 1,
      o = s >> 1,
      l = [],
      a = 0,
      h = -1,
      c = []
    function f(d) {
      let p
      if (d.lines > r && d instanceof be) for (let g of d.children) f(g)
      else
        d.lines > o && (a > o || !a)
          ? (u(), l.push(d))
          : d instanceof H && a && (p = c[c.length - 1]) instanceof H && d.lines + p.lines <= 32
          ? ((a += d.lines),
            (h += d.length + 1),
            (c[c.length - 1] = new H(p.text.concat(d.text), p.length + 1 + d.length)))
          : (a + d.lines > s && u(), (a += d.lines), (h += d.length + 1), c.push(d))
    }
    function u() {
      a != 0 && (l.push(c.length == 1 ? c[0] : be.from(c, h)), (h = -1), (a = c.length = 0))
    }
    for (let d of e) f(d)
    return u(), l.length == 1 ? l[0] : new be(l, t)
  }
}
B.empty = new H([''], 0)
function hh(n) {
  let e = -1
  for (let t of n) e += t.length + 1
  return e
}
function mi(n, e, t = 0, i = 1e9) {
  for (let s = 0, r = 0, o = !0; r < n.length && s <= i; r++) {
    let l = n[r],
      a = s + l.length
    a >= t &&
      (a > i && (l = l.slice(0, i - s)),
      s < t && (l = l.slice(t - s)),
      o ? ((e[e.length - 1] += l), (o = !1)) : e.push(l)),
      (s = a + 1)
  }
  return e
}
function $s(n, e, t) {
  return mi(n, [''], e, t)
}
class Rt {
  constructor(e, t = 1) {
    ;(this.dir = t),
      (this.done = !1),
      (this.lineBreak = !1),
      (this.value = ''),
      (this.nodes = [e]),
      (this.offsets = [t > 0 ? 1 : (e instanceof H ? e.text.length : e.children.length) << 1])
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1,
        s = this.nodes[i],
        r = this.offsets[i],
        o = r >> 1,
        l = s instanceof H ? s.text.length : s.children.length
      if (o == (t > 0 ? l : 0)) {
        if (i == 0) return (this.done = !0), (this.value = ''), this
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop()
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (((this.offsets[i] += t), e == 0))
          return (
            (this.lineBreak = !0),
            (this.value = `
`),
            this
          )
        e--
      } else if (s instanceof H) {
        let a = s.text[o + (t < 0 ? -1 : 0)]
        if (((this.offsets[i] += t), a.length > Math.max(0, e)))
          return (this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e)), this
        e -= a.length
      } else {
        let a = s.children[o + (t < 0 ? -1 : 0)]
        e > a.length
          ? ((e -= a.length), (this.offsets[i] += t))
          : (t < 0 && this.offsets[i]--,
            this.nodes.push(a),
            this.offsets.push(
              t > 0 ? 1 : (a instanceof H ? a.text.length : a.children.length) << 1
            ))
      }
    }
  }
  next(e = 0) {
    return (
      e < 0 && (this.nextInner(-e, -this.dir), (e = this.value.length)), this.nextInner(e, this.dir)
    )
  }
}
class po {
  constructor(e, t, i) {
    ;(this.value = ''),
      (this.done = !1),
      (this.cursor = new Rt(e, t > i ? -1 : 1)),
      (this.pos = t > i ? e.length : 0),
      (this.from = Math.min(t, i)),
      (this.to = Math.max(t, i))
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return (this.value = ''), (this.done = !0), this
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos)
    let i = t < 0 ? this.pos - this.from : this.to - this.pos
    e > i && (e = i), (i -= e)
    let { value: s } = this.cursor.next(e)
    return (
      (this.pos += (s.length + e) * t),
      (this.value = s.length <= i ? s : t < 0 ? s.slice(s.length - i) : s.slice(0, i)),
      (this.done = !this.value),
      this
    )
  }
  next(e = 0) {
    return (
      e < 0
        ? (e = Math.max(e, this.from - this.pos))
        : e > 0 && (e = Math.min(e, this.to - this.pos)),
      this.nextInner(e, this.cursor.dir)
    )
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != ''
  }
}
class mo {
  constructor(e) {
    ;(this.inner = e), (this.afterBreak = !0), (this.value = ''), (this.done = !1)
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: s } = this.inner.next(e)
    return (
      t
        ? ((this.done = !0), (this.value = ''))
        : i
        ? this.afterBreak
          ? (this.value = '')
          : ((this.afterBreak = !0), this.next())
        : ((this.value = s), (this.afterBreak = !1)),
      this
    )
  }
  get lineBreak() {
    return !1
  }
}
typeof Symbol < 'u' &&
  ((B.prototype[Symbol.iterator] = function () {
    return this.iter()
  }),
  (Rt.prototype[Symbol.iterator] =
    po.prototype[Symbol.iterator] =
    mo.prototype[Symbol.iterator] =
      function () {
        return this
      }))
class ch {
  constructor(e, t, i, s) {
    ;(this.from = e), (this.to = t), (this.number = i), (this.text = s)
  }
  get length() {
    return this.to - this.from
  }
}
let at =
  'lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o'
    .split(',')
    .map(n => (n ? parseInt(n, 36) : 1))
for (let n = 1; n < at.length; n++) at[n] += at[n - 1]
function fh(n) {
  for (let e = 1; e < at.length; e += 2) if (at[e] > n) return at[e - 1] <= n
  return !1
}
function Ks(n) {
  return n >= 127462 && n <= 127487
}
const js = 8205
function Z(n, e, t = !0, i = !0) {
  return (t ? go : uh)(n, e, i)
}
function go(n, e, t) {
  if (e == n.length) return e
  e && yo(n.charCodeAt(e)) && bo(n.charCodeAt(e - 1)) && e--
  let i = j(n, e)
  for (e += oe(i); e < n.length; ) {
    let s = j(n, e)
    if (i == js || s == js || (t && fh(s))) (e += oe(s)), (i = s)
    else if (Ks(s)) {
      let r = 0,
        o = e - 2
      for (; o >= 0 && Ks(j(n, o)); ) r++, (o -= 2)
      if (r % 2 == 0) break
      e += 2
    } else break
  }
  return e
}
function uh(n, e, t) {
  for (; e > 0; ) {
    let i = go(n, e - 2, t)
    if (i < e) return i
    e--
  }
  return 0
}
function yo(n) {
  return n >= 56320 && n < 57344
}
function bo(n) {
  return n >= 55296 && n < 56320
}
function j(n, e) {
  let t = n.charCodeAt(e)
  if (!bo(t) || e + 1 == n.length) return t
  let i = n.charCodeAt(e + 1)
  return yo(i) ? ((t - 55296) << 10) + (i - 56320) + 65536 : t
}
function ds(n) {
  return n <= 65535
    ? String.fromCharCode(n)
    : ((n -= 65536), String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320))
}
function oe(n) {
  return n < 65536 ? 1 : 2
}
const Dn = /\r\n?|\n/
var Q = (function (n) {
  return (
    (n[(n.Simple = 0)] = 'Simple'),
    (n[(n.TrackDel = 1)] = 'TrackDel'),
    (n[(n.TrackBefore = 2)] = 'TrackBefore'),
    (n[(n.TrackAfter = 3)] = 'TrackAfter'),
    n
  )
})(Q || (Q = {}))
class ve {
  constructor(e) {
    this.sections = e
  }
  get length() {
    let e = 0
    for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t]
    return e
  }
  get newLength() {
    let e = 0
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1]
      e += i < 0 ? this.sections[t] : i
    }
    return e
  }
  get empty() {
    return this.sections.length == 0 || (this.sections.length == 2 && this.sections[1] < 0)
  }
  iterGaps(e) {
    for (let t = 0, i = 0, s = 0; t < this.sections.length; ) {
      let r = this.sections[t++],
        o = this.sections[t++]
      o < 0 ? (e(i, s, r), (s += r)) : (s += o), (i += r)
    }
  }
  iterChangedRanges(e, t = !1) {
    Tn(this, e, t)
  }
  get invertedDesc() {
    let e = []
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++],
        s = this.sections[t++]
      s < 0 ? e.push(i, s) : e.push(s, i)
    }
    return new ve(e)
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : wo(this, e)
  }
  mapDesc(e, t = !1) {
    return e.empty ? this : On(this, e, t)
  }
  mapPos(e, t = -1, i = Q.Simple) {
    let s = 0,
      r = 0
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++],
        a = this.sections[o++],
        h = s + l
      if (a < 0) {
        if (h > e) return r + (e - s)
        r += l
      } else {
        if (
          i != Q.Simple &&
          h >= e &&
          ((i == Q.TrackDel && s < e && h > e) ||
            (i == Q.TrackBefore && s < e) ||
            (i == Q.TrackAfter && h > e))
        )
          return null
        if (h > e || (h == e && t < 0 && !l)) return e == s || t < 0 ? r : r + a
        r += a
      }
      s = h
    }
    if (e > s) throw new RangeError(`Position ${e} is out of range for changeset of length ${s}`)
    return r
  }
  touchesRange(e, t = e) {
    for (let i = 0, s = 0; i < this.sections.length && s <= t; ) {
      let r = this.sections[i++],
        o = this.sections[i++],
        l = s + r
      if (o >= 0 && s <= t && l >= e) return s < e && l > t ? 'cover' : !0
      s = l
    }
    return !1
  }
  toString() {
    let e = ''
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++],
        s = this.sections[t++]
      e += (e ? ' ' : '') + i + (s >= 0 ? ':' + s : '')
    }
    return e
  }
  toJSON() {
    return this.sections
  }
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some(t => typeof t != 'number'))
      throw new RangeError('Invalid JSON representation of ChangeDesc')
    return new ve(e)
  }
  static create(e) {
    return new ve(e)
  }
}
class z extends ve {
  constructor(e, t) {
    super(e), (this.inserted = t)
  }
  apply(e) {
    if (this.length != e.length)
      throw new RangeError('Applying change set to a document with the wrong length')
    return Tn(this, (t, i, s, r, o) => (e = e.replace(s, s + (i - t), o)), !1), e
  }
  mapDesc(e, t = !1) {
    return On(this, e, t, !0)
  }
  invert(e) {
    let t = this.sections.slice(),
      i = []
    for (let s = 0, r = 0; s < t.length; s += 2) {
      let o = t[s],
        l = t[s + 1]
      if (l >= 0) {
        ;(t[s] = l), (t[s + 1] = o)
        let a = s >> 1
        for (; i.length < a; ) i.push(B.empty)
        i.push(o ? e.slice(r, r + o) : B.empty)
      }
      r += o
    }
    return new z(t, i)
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : wo(this, e, !0)
  }
  map(e, t = !1) {
    return e.empty ? this : On(this, e, t, !0)
  }
  iterChanges(e, t = !1) {
    Tn(this, e, t)
  }
  get desc() {
    return ve.create(this.sections)
  }
  filter(e) {
    let t = [],
      i = [],
      s = [],
      r = new Vt(this)
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++]
      for (; l < a || (l == a && r.len == 0); ) {
        if (r.done) break e
        let c = Math.min(r.len, a - l)
        G(s, c, -1)
        let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0
        G(t, c, f), f > 0 && Ee(i, t, r.text), r.forward(c), (l += c)
      }
      let h = e[o++]
      for (; l < h; ) {
        if (r.done) break e
        let c = Math.min(r.len, h - l)
        G(t, c, -1), G(s, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(c), (l += c)
      }
    }
    return { changes: new z(t, i), filtered: ve.create(s) }
  }
  toJSON() {
    let e = []
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t],
        s = this.sections[t + 1]
      s < 0 ? e.push(i) : s == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()))
    }
    return e
  }
  static of(e, t, i) {
    let s = [],
      r = [],
      o = 0,
      l = null
    function a(c = !1) {
      if (!c && !s.length) return
      o < t && G(s, t - o, -1)
      let f = new z(s, r)
      ;(l = l ? l.compose(f.map(l)) : f), (s = []), (r = []), (o = 0)
    }
    function h(c) {
      if (Array.isArray(c)) for (let f of c) h(f)
      else if (c instanceof z) {
        if (c.length != t)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`)
        a(), (l = l ? l.compose(c.map(l)) : c)
      } else {
        let { from: f, to: u = f, insert: d } = c
        if (f > u || f < 0 || u > t)
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${t})`)
        let p = d ? (typeof d == 'string' ? B.of(d.split(i || Dn)) : d) : B.empty,
          g = p.length
        if (f == u && g == 0) return
        f < o && a(), f > o && G(s, f - o, -1), G(s, u - f, g), Ee(r, s, p), (o = u)
      }
    }
    return h(e), a(!l), l
  }
  static empty(e) {
    return new z(e ? [e, -1] : [], [])
  }
  static fromJSON(e) {
    if (!Array.isArray(e)) throw new RangeError('Invalid JSON representation of ChangeSet')
    let t = [],
      i = []
    for (let s = 0; s < e.length; s++) {
      let r = e[s]
      if (typeof r == 'number') t.push(r, -1)
      else {
        if (
          !Array.isArray(r) ||
          typeof r[0] != 'number' ||
          r.some((o, l) => l && typeof o != 'string')
        )
          throw new RangeError('Invalid JSON representation of ChangeSet')
        if (r.length == 1) t.push(r[0], 0)
        else {
          for (; i.length < s; ) i.push(B.empty)
          ;(i[s] = B.of(r.slice(1))), t.push(r[0], i[s].length)
        }
      }
    }
    return new z(t, i)
  }
  static createSet(e, t) {
    return new z(e, t)
  }
}
function G(n, e, t, i = !1) {
  if (e == 0 && t <= 0) return
  let s = n.length - 2
  s >= 0 && t <= 0 && t == n[s + 1]
    ? (n[s] += e)
    : e == 0 && n[s] == 0
    ? (n[s + 1] += t)
    : i
    ? ((n[s] += e), (n[s + 1] += t))
    : n.push(e, t)
}
function Ee(n, e, t) {
  if (t.length == 0) return
  let i = (e.length - 2) >> 1
  if (i < n.length) n[n.length - 1] = n[n.length - 1].append(t)
  else {
    for (; n.length < i; ) n.push(B.empty)
    n.push(t)
  }
}
function Tn(n, e, t) {
  let i = n.inserted
  for (let s = 0, r = 0, o = 0; o < n.sections.length; ) {
    let l = n.sections[o++],
      a = n.sections[o++]
    if (a < 0) (s += l), (r += l)
    else {
      let h = s,
        c = r,
        f = B.empty
      for (
        ;
        (h += l),
          (c += a),
          a && i && (f = f.append(i[(o - 2) >> 1])),
          !(t || o == n.sections.length || n.sections[o + 1] < 0);

      )
        (l = n.sections[o++]), (a = n.sections[o++])
      e(s, h, r, c, f), (s = h), (r = c)
    }
  }
}
function On(n, e, t, i = !1) {
  let s = [],
    r = i ? [] : null,
    o = new Vt(n),
    l = new Vt(e)
  for (let a = -1; ; )
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len)
      G(s, h, -1), o.forward(h), l.forward(h)
    } else if (
      l.ins >= 0 &&
      (o.ins < 0 || a == o.i || (o.off == 0 && (l.len < o.len || (l.len == o.len && !t))))
    ) {
      let h = l.len
      for (G(s, l.ins, -1); h; ) {
        let c = Math.min(o.len, h)
        o.ins >= 0 && a < o.i && o.len <= c && (G(s, 0, o.ins), r && Ee(r, s, o.text), (a = o.i)),
          o.forward(c),
          (h -= c)
      }
      l.next()
    } else if (o.ins >= 0) {
      let h = 0,
        c = o.len
      for (; c; )
        if (l.ins == -1) {
          let f = Math.min(c, l.len)
          ;(h += f), (c -= f), l.forward(f)
        } else if (l.ins == 0 && l.len < c) (c -= l.len), l.next()
        else break
      G(s, h, a < o.i ? o.ins : 0),
        r && a < o.i && Ee(r, s, o.text),
        (a = o.i),
        o.forward(o.len - c)
    } else {
      if (o.done && l.done) return r ? z.createSet(s, r) : ve.create(s)
      throw new Error('Mismatched change set lengths')
    }
}
function wo(n, e, t = !1) {
  let i = [],
    s = t ? [] : null,
    r = new Vt(n),
    o = new Vt(e)
  for (let l = !1; ; ) {
    if (r.done && o.done) return s ? z.createSet(i, s) : ve.create(i)
    if (r.ins == 0) G(i, r.len, 0, l), r.next()
    else if (o.len == 0 && !o.done) G(i, 0, o.ins, l), s && Ee(s, i, o.text), o.next()
    else {
      if (r.done || o.done) throw new Error('Mismatched change set lengths')
      {
        let a = Math.min(r.len2, o.len),
          h = i.length
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins
          G(i, a, c, l), s && c && Ee(s, i, o.text)
        } else
          o.ins == -1
            ? (G(i, r.off ? 0 : r.len, a, l), s && Ee(s, i, r.textBit(a)))
            : (G(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), s && !o.off && Ee(s, i, o.text))
        ;(l = (r.ins > a || (o.ins >= 0 && o.len > a)) && (l || i.length > h)),
          r.forward2(a),
          o.forward(a)
      }
    }
  }
}
class Vt {
  constructor(e) {
    ;(this.set = e), (this.i = 0), this.next()
  }
  next() {
    let { sections: e } = this.set
    this.i < e.length
      ? ((this.len = e[this.i++]), (this.ins = e[this.i++]))
      : ((this.len = 0), (this.ins = -2)),
      (this.off = 0)
  }
  get done() {
    return this.ins == -2
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins
  }
  get text() {
    let { inserted: e } = this.set,
      t = (this.i - 2) >> 1
    return t >= e.length ? B.empty : e[t]
  }
  textBit(e) {
    let { inserted: t } = this.set,
      i = (this.i - 2) >> 1
    return i >= t.length && !e ? B.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e)
  }
  forward(e) {
    e == this.len ? this.next() : ((this.len -= e), (this.off += e))
  }
  forward2(e) {
    this.ins == -1
      ? this.forward(e)
      : e == this.ins
      ? this.next()
      : ((this.ins -= e), (this.off += e))
  }
}
class Je {
  constructor(e, t, i) {
    ;(this.from = e), (this.to = t), (this.flags = i)
  }
  get anchor() {
    return this.flags & 16 ? this.to : this.from
  }
  get head() {
    return this.flags & 16 ? this.from : this.to
  }
  get empty() {
    return this.from == this.to
  }
  get assoc() {
    return this.flags & 4 ? -1 : this.flags & 8 ? 1 : 0
  }
  get bidiLevel() {
    let e = this.flags & 3
    return e == 3 ? null : e
  }
  get goalColumn() {
    let e = this.flags >> 5
    return e == 33554431 ? void 0 : e
  }
  map(e, t = -1) {
    let i, s
    return (
      this.empty
        ? (i = s = e.mapPos(this.from, t))
        : ((i = e.mapPos(this.from, 1)), (s = e.mapPos(this.to, -1))),
      i == this.from && s == this.to ? this : new Je(i, s, this.flags)
    )
  }
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor) return y.range(e, t)
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t
    return y.range(this.anchor, i)
  }
  eq(e) {
    return this.anchor == e.anchor && this.head == e.head
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head }
  }
  static fromJSON(e) {
    if (!e || typeof e.anchor != 'number' || typeof e.head != 'number')
      throw new RangeError('Invalid JSON representation for SelectionRange')
    return y.range(e.anchor, e.head)
  }
  static create(e, t, i) {
    return new Je(e, t, i)
  }
}
class y {
  constructor(e, t) {
    ;(this.ranges = e), (this.mainIndex = t)
  }
  map(e, t = -1) {
    return e.empty
      ? this
      : y.create(
          this.ranges.map(i => i.map(e, t)),
          this.mainIndex
        )
  }
  eq(e) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) return !1
    for (let t = 0; t < this.ranges.length; t++) if (!this.ranges[t].eq(e.ranges[t])) return !1
    return !0
  }
  get main() {
    return this.ranges[this.mainIndex]
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new y([this.main], 0)
  }
  addRange(e, t = !0) {
    return y.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1)
  }
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice()
    return (i[t] = e), y.create(i, this.mainIndex)
  }
  toJSON() {
    return { ranges: this.ranges.map(e => e.toJSON()), main: this.mainIndex }
  }
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != 'number' || e.main >= e.ranges.length)
      throw new RangeError('Invalid JSON representation for EditorSelection')
    return new y(
      e.ranges.map(t => Je.fromJSON(t)),
      e.main
    )
  }
  static single(e, t = e) {
    return new y([y.range(e, t)], 0)
  }
  static create(e, t = 0) {
    if (e.length == 0) throw new RangeError('A selection needs at least one range')
    for (let i = 0, s = 0; s < e.length; s++) {
      let r = e[s]
      if (r.empty ? r.from <= i : r.from < i) return y.normalized(e.slice(), t)
      i = r.to
    }
    return new y(e, t)
  }
  static cursor(e, t = 0, i, s) {
    return Je.create(
      e,
      e,
      (t == 0 ? 0 : t < 0 ? 4 : 8) |
        (i == null ? 3 : Math.min(2, i)) |
        ((s != null ? s : 33554431) << 5)
    )
  }
  static range(e, t, i) {
    let s = (i != null ? i : 33554431) << 5
    return t < e ? Je.create(t, e, 16 | s | 8) : Je.create(e, t, s | (t > e ? 4 : 0))
  }
  static normalized(e, t = 0) {
    let i = e[t]
    e.sort((s, r) => s.from - r.from), (t = e.indexOf(i))
    for (let s = 1; s < e.length; s++) {
      let r = e[s],
        o = e[s - 1]
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from,
          a = Math.max(r.to, o.to)
        s <= t && t--, e.splice(--s, 2, r.anchor > r.head ? y.range(a, l) : y.range(l, a))
      }
    }
    return new y(e, t)
  }
}
function xo(n, e) {
  for (let t of n.ranges) if (t.to > e) throw new RangeError('Selection points outside of document')
}
let ps = 0
class x {
  constructor(e, t, i, s, r) {
    ;(this.combine = e),
      (this.compareInput = t),
      (this.compare = i),
      (this.isStatic = s),
      (this.id = ps++),
      (this.default = e([])),
      (this.extensions = typeof r == 'function' ? r(this) : r)
  }
  static define(e = {}) {
    return new x(
      e.combine || (t => t),
      e.compareInput || ((t, i) => t === i),
      e.compare || (e.combine ? (t, i) => t === i : ms),
      !!e.static,
      e.enables
    )
  }
  of(e) {
    return new gi([], this, 0, e)
  }
  compute(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet")
    return new gi(e, this, 1, t)
  }
  computeN(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet")
    return new gi(e, this, 2, t)
  }
  from(e, t) {
    return t || (t = i => i), this.compute([e], i => t(i.field(e)))
  }
}
function ms(n, e) {
  return n == e || (n.length == e.length && n.every((t, i) => t === e[i]))
}
class gi {
  constructor(e, t, i, s) {
    ;(this.dependencies = e), (this.facet = t), (this.type = i), (this.value = s), (this.id = ps++)
  }
  dynamicSlot(e) {
    var t
    let i = this.value,
      s = this.facet.compareInput,
      r = this.id,
      o = e[r] >> 1,
      l = this.type == 2,
      a = !1,
      h = !1,
      c = []
    for (let f of this.dependencies)
      f == 'doc'
        ? (a = !0)
        : f == 'selection'
        ? (h = !0)
        : (((t = e[f.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && c.push(e[f.id])
    return {
      create(f) {
        return (f.values[o] = i(f)), 1
      },
      update(f, u) {
        if ((a && u.docChanged) || (h && (u.docChanged || u.selection)) || Bn(f, c)) {
          let d = i(f)
          if (l ? !Us(d, f.values[o], s) : !s(d, f.values[o])) return (f.values[o] = d), 1
        }
        return 0
      },
      reconfigure: (f, u) => {
        let d = i(f),
          p = u.config.address[r]
        if (p != null) {
          let g = ki(u, p)
          if (
            this.dependencies.every(m =>
              m instanceof x
                ? u.facet(m) === f.facet(m)
                : m instanceof U
                ? u.field(m, !1) == f.field(m, !1)
                : !0
            ) ||
            (l ? Us(d, g, s) : s(d, g))
          )
            return (f.values[o] = g), 0
        }
        return (f.values[o] = d), 1
      }
    }
  }
}
function Us(n, e, t) {
  if (n.length != e.length) return !1
  for (let i = 0; i < n.length; i++) if (!t(n[i], e[i])) return !1
  return !0
}
function Bn(n, e) {
  let t = !1
  for (let i of e) Et(n, i) & 1 && (t = !0)
  return t
}
function dh(n, e, t) {
  let i = t.map(a => n[a.id]),
    s = t.map(a => a.type),
    r = i.filter(a => !(a & 1)),
    o = n[e.id] >> 1
  function l(a) {
    let h = []
    for (let c = 0; c < i.length; c++) {
      let f = ki(a, i[c])
      if (s[c] == 2) for (let u of f) h.push(u)
      else h.push(f)
    }
    return e.combine(h)
  }
  return {
    create(a) {
      for (let h of i) Et(a, h)
      return (a.values[o] = l(a)), 1
    },
    update(a, h) {
      if (!Bn(a, r)) return 0
      let c = l(a)
      return e.compare(c, a.values[o]) ? 0 : ((a.values[o] = c), 1)
    },
    reconfigure(a, h) {
      let c = Bn(a, i),
        f = h.config.facets[e.id],
        u = h.facet(e)
      if (f && !c && ms(t, f)) return (a.values[o] = u), 0
      let d = l(a)
      return e.compare(d, u) ? ((a.values[o] = u), 0) : ((a.values[o] = d), 1)
    }
  }
}
const Gs = x.define({ static: !0 })
class U {
  constructor(e, t, i, s, r) {
    ;(this.id = e),
      (this.createF = t),
      (this.updateF = i),
      (this.compareF = s),
      (this.spec = r),
      (this.provides = void 0)
  }
  static define(e) {
    let t = new U(ps++, e.create, e.update, e.compare || ((i, s) => i === s), e)
    return e.provide && (t.provides = e.provide(t)), t
  }
  create(e) {
    let t = e.facet(Gs).find(i => i.field == this)
    return ((t == null ? void 0 : t.create) || this.createF)(e)
  }
  slot(e) {
    let t = e[this.id] >> 1
    return {
      create: i => ((i.values[t] = this.create(i)), 1),
      update: (i, s) => {
        let r = i.values[t],
          o = this.updateF(r, s)
        return this.compareF(r, o) ? 0 : ((i.values[t] = o), 1)
      },
      reconfigure: (i, s) =>
        s.config.address[this.id] != null
          ? ((i.values[t] = s.field(this)), 0)
          : ((i.values[t] = this.create(i)), 1)
    }
  }
  init(e) {
    return [this, Gs.of({ field: this, create: e })]
  }
  get extension() {
    return this
  }
}
const Ue = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 }
function St(n) {
  return e => new vo(e, n)
}
const xt = {
  highest: St(Ue.highest),
  high: St(Ue.high),
  default: St(Ue.default),
  low: St(Ue.low),
  lowest: St(Ue.lowest)
}
class vo {
  constructor(e, t) {
    ;(this.inner = e), (this.prec = t)
  }
}
class Ki {
  of(e) {
    return new Ln(this, e)
  }
  reconfigure(e) {
    return Ki.reconfigure.of({ compartment: this, extension: e })
  }
  get(e) {
    return e.config.compartments.get(this)
  }
}
class Ln {
  constructor(e, t) {
    ;(this.compartment = e), (this.inner = t)
  }
}
class vi {
  constructor(e, t, i, s, r, o) {
    for (
      this.base = e,
        this.compartments = t,
        this.dynamicSlots = i,
        this.address = s,
        this.staticValues = r,
        this.facets = o,
        this.statusTemplate = [];
      this.statusTemplate.length < i.length;

    )
      this.statusTemplate.push(0)
  }
  staticFacet(e) {
    let t = this.address[e.id]
    return t == null ? e.default : this.staticValues[t >> 1]
  }
  static resolve(e, t, i) {
    let s = [],
      r = Object.create(null),
      o = new Map()
    for (let u of ph(e, t, o))
      u instanceof U ? s.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u)
    let l = Object.create(null),
      a = [],
      h = []
    for (let u of s) (l[u.id] = h.length << 1), h.push(d => u.slot(d))
    let c = i == null ? void 0 : i.config.facets
    for (let u in r) {
      let d = r[u],
        p = d[0].facet,
        g = (c && c[u]) || []
      if (d.every(m => m.type == 0))
        if (((l[p.id] = (a.length << 1) | 1), ms(g, d))) a.push(i.facet(p))
        else {
          let m = p.combine(d.map(b => b.value))
          a.push(i && p.compare(m, i.facet(p)) ? i.facet(p) : m)
        }
      else {
        for (let m of d)
          m.type == 0
            ? ((l[m.id] = (a.length << 1) | 1), a.push(m.value))
            : ((l[m.id] = h.length << 1), h.push(b => m.dynamicSlot(b)))
        ;(l[p.id] = h.length << 1), h.push(m => dh(m, p, d))
      }
    }
    let f = h.map(u => u(l))
    return new vi(e, o, f, l, a, r)
  }
}
function ph(n, e, t) {
  let i = [[], [], [], [], []],
    s = new Map()
  function r(o, l) {
    let a = s.get(o)
    if (a != null) {
      if (a <= l) return
      let h = i[a].indexOf(o)
      h > -1 && i[a].splice(h, 1), o instanceof Ln && t.delete(o.compartment)
    }
    if ((s.set(o, l), Array.isArray(o))) for (let h of o) r(h, l)
    else if (o instanceof Ln) {
      if (t.has(o.compartment)) throw new RangeError('Duplicate use of compartment in extensions')
      let h = e.get(o.compartment) || o.inner
      t.set(o.compartment, h), r(h, l)
    } else if (o instanceof vo) r(o.inner, o.prec)
    else if (o instanceof U) i[l].push(o), o.provides && r(o.provides, l)
    else if (o instanceof gi) i[l].push(o), o.facet.extensions && r(o.facet.extensions, Ue.default)
    else {
      let h = o.extension
      if (!h)
        throw new Error(
          `Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`
        )
      r(h, l)
    }
  }
  return r(n, Ue.default), i.reduce((o, l) => o.concat(l))
}
function Et(n, e) {
  if (e & 1) return 2
  let t = e >> 1,
    i = n.status[t]
  if (i == 4) throw new Error('Cyclic dependency between fields and/or facets')
  if (i & 2) return i
  n.status[t] = 4
  let s = n.computeSlot(n, n.config.dynamicSlots[t])
  return (n.status[t] = 2 | s)
}
function ki(n, e) {
  return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1]
}
const ko = x.define(),
  So = x.define({ combine: n => n.some(e => e), static: !0 }),
  Co = x.define({ combine: n => (n.length ? n[0] : void 0), static: !0 }),
  Ao = x.define(),
  Mo = x.define(),
  Do = x.define(),
  To = x.define({ combine: n => (n.length ? n[0] : !1) })
class et {
  constructor(e, t) {
    ;(this.type = e), (this.value = t)
  }
  static define() {
    return new mh()
  }
}
class mh {
  of(e) {
    return new et(this, e)
  }
}
class gh {
  constructor(e) {
    this.map = e
  }
  of(e) {
    return new A(this, e)
  }
}
class A {
  constructor(e, t) {
    ;(this.type = e), (this.value = t)
  }
  map(e) {
    let t = this.type.map(this.value, e)
    return t === void 0 ? void 0 : t == this.value ? this : new A(this.type, t)
  }
  is(e) {
    return this.type == e
  }
  static define(e = {}) {
    return new gh(e.map || (t => t))
  }
  static mapEffects(e, t) {
    if (!e.length) return e
    let i = []
    for (let s of e) {
      let r = s.map(t)
      r && i.push(r)
    }
    return i
  }
}
A.reconfigure = A.define()
A.appendConfig = A.define()
class q {
  constructor(e, t, i, s, r, o) {
    ;(this.startState = e),
      (this.changes = t),
      (this.selection = i),
      (this.effects = s),
      (this.annotations = r),
      (this.scrollIntoView = o),
      (this._doc = null),
      (this._state = null),
      i && xo(i, t.newLength),
      r.some(l => l.type == q.time) || (this.annotations = r.concat(q.time.of(Date.now())))
  }
  static create(e, t, i, s, r, o) {
    return new q(e, t, i, s, r, o)
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc))
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes)
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state
  }
  annotation(e) {
    for (let t of this.annotations) if (t.type == e) return t.value
  }
  get docChanged() {
    return !this.changes.empty
  }
  get reconfigured() {
    return this.startState.config != this.state.config
  }
  isUserEvent(e) {
    let t = this.annotation(q.userEvent)
    return !!(
      t &&
      (t == e || (t.length > e.length && t.slice(0, e.length) == e && t[e.length] == '.'))
    )
  }
}
q.time = et.define()
q.userEvent = et.define()
q.addToHistory = et.define()
q.remote = et.define()
function yh(n, e) {
  let t = []
  for (let i = 0, s = 0; ; ) {
    let r, o
    if (i < n.length && (s == e.length || e[s] >= n[i])) (r = n[i++]), (o = n[i++])
    else if (s < e.length) (r = e[s++]), (o = e[s++])
    else return t
    !t.length || t[t.length - 1] < r ? t.push(r, o) : t[t.length - 1] < o && (t[t.length - 1] = o)
  }
}
function Oo(n, e, t) {
  var i
  let s, r, o
  return (
    t
      ? ((s = e.changes), (r = z.empty(e.changes.length)), (o = n.changes.compose(e.changes)))
      : ((s = e.changes.map(n.changes)),
        (r = n.changes.mapDesc(e.changes, !0)),
        (o = n.changes.compose(s))),
    {
      changes: o,
      selection: e.selection
        ? e.selection.map(r)
        : (i = n.selection) === null || i === void 0
        ? void 0
        : i.map(s),
      effects: A.mapEffects(n.effects, s).concat(A.mapEffects(e.effects, r)),
      annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations,
      scrollIntoView: n.scrollIntoView || e.scrollIntoView
    }
  )
}
function Rn(n, e, t) {
  let i = e.selection,
    s = ht(e.annotations)
  return (
    e.userEvent && (s = s.concat(q.userEvent.of(e.userEvent))),
    {
      changes: e.changes instanceof z ? e.changes : z.of(e.changes || [], t, n.facet(Co)),
      selection: i && (i instanceof y ? i : y.single(i.anchor, i.head)),
      effects: ht(e.effects),
      annotations: s,
      scrollIntoView: !!e.scrollIntoView
    }
  )
}
function Bo(n, e, t) {
  let i = Rn(n, e.length ? e[0] : {}, n.doc.length)
  e.length && e[0].filter === !1 && (t = !1)
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1)
    let o = !!e[r].sequential
    i = Oo(i, Rn(n, e[r], o ? i.changes.newLength : n.doc.length), o)
  }
  let s = q.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView)
  return wh(t ? bh(s) : s)
}
function bh(n) {
  let e = n.startState,
    t = !0
  for (let s of e.facet(Ao)) {
    let r = s(n)
    if (r === !1) {
      t = !1
      break
    }
    Array.isArray(r) && (t = t === !0 ? r : yh(t, r))
  }
  if (t !== !0) {
    let s, r
    if (t === !1) (r = n.changes.invertedDesc), (s = z.empty(e.doc.length))
    else {
      let o = n.changes.filter(t)
      ;(s = o.changes), (r = o.filtered.mapDesc(o.changes).invertedDesc)
    }
    n = q.create(
      e,
      s,
      n.selection && n.selection.map(r),
      A.mapEffects(n.effects, r),
      n.annotations,
      n.scrollIntoView
    )
  }
  let i = e.facet(Mo)
  for (let s = i.length - 1; s >= 0; s--) {
    let r = i[s](n)
    r instanceof q
      ? (n = r)
      : Array.isArray(r) && r.length == 1 && r[0] instanceof q
      ? (n = r[0])
      : (n = Bo(e, ht(r), !1))
  }
  return n
}
function wh(n) {
  let e = n.startState,
    t = e.facet(Do),
    i = n
  for (let s = t.length - 1; s >= 0; s--) {
    let r = t[s](n)
    r && Object.keys(r).length && (i = Oo(i, Rn(e, r, n.changes.newLength), !0))
  }
  return i == n
    ? n
    : q.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView)
}
const xh = []
function ht(n) {
  return n == null ? xh : Array.isArray(n) ? n : [n]
}
var N = (function (n) {
  return (n[(n.Word = 0)] = 'Word'), (n[(n.Space = 1)] = 'Space'), (n[(n.Other = 2)] = 'Other'), n
})(N || (N = {}))
const vh =
  /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
let En
try {
  En = new RegExp('[\\p{Alphabetic}\\p{Number}_]', 'u')
} catch {}
function kh(n) {
  if (En) return En.test(n)
  for (let e = 0; e < n.length; e++) {
    let t = n[e]
    if (/\w/.test(t) || (t > '\x80' && (t.toUpperCase() != t.toLowerCase() || vh.test(t))))
      return !0
  }
  return !1
}
function Sh(n) {
  return e => {
    if (!/\S/.test(e)) return N.Space
    if (kh(e)) return N.Word
    for (let t = 0; t < n.length; t++) if (e.indexOf(n[t]) > -1) return N.Word
    return N.Other
  }
}
class O {
  constructor(e, t, i, s, r, o) {
    ;(this.config = e),
      (this.doc = t),
      (this.selection = i),
      (this.values = s),
      (this.status = e.statusTemplate.slice()),
      (this.computeSlot = r),
      o && (o._state = this)
    for (let l = 0; l < this.config.dynamicSlots.length; l++) Et(this, l << 1)
    this.computeSlot = null
  }
  field(e, t = !0) {
    let i = this.config.address[e.id]
    if (i == null) {
      if (t) throw new RangeError('Field is not present in this state')
      return
    }
    return Et(this, i), ki(this, i)
  }
  update(...e) {
    return Bo(this, e, !0)
  }
  applyTransaction(e) {
    let t = this.config,
      { base: i, compartments: s } = t
    for (let o of e.effects)
      o.is(Ki.reconfigure)
        ? (t && ((s = new Map()), t.compartments.forEach((l, a) => s.set(a, l)), (t = null)),
          s.set(o.value.compartment, o.value.extension))
        : o.is(A.reconfigure)
        ? ((t = null), (i = o.value))
        : o.is(A.appendConfig) && ((t = null), (i = ht(i).concat(o.value)))
    let r
    t
      ? (r = e.startState.values.slice())
      : ((t = vi.resolve(i, s, this)),
        (r = new O(
          t,
          this.doc,
          this.selection,
          t.dynamicSlots.map(() => null),
          (l, a) => a.reconfigure(l, this),
          null
        ).values)),
      new O(t, e.newDoc, e.newSelection, r, (o, l) => l.update(o, e), e)
  }
  replaceSelection(e) {
    return (
      typeof e == 'string' && (e = this.toText(e)),
      this.changeByRange(t => ({
        changes: { from: t.from, to: t.to, insert: e },
        range: y.cursor(t.from + e.length)
      }))
    )
  }
  changeByRange(e) {
    let t = this.selection,
      i = e(t.ranges[0]),
      s = this.changes(i.changes),
      r = [i.range],
      o = ht(i.effects)
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]),
        h = this.changes(a.changes),
        c = h.map(s)
      for (let u = 0; u < l; u++) r[u] = r[u].map(c)
      let f = s.mapDesc(h, !0)
      r.push(a.range.map(f)),
        (s = s.compose(c)),
        (o = A.mapEffects(o, c).concat(A.mapEffects(ht(a.effects), f)))
    }
    return { changes: s, selection: y.create(r, t.mainIndex), effects: o }
  }
  changes(e = []) {
    return e instanceof z ? e : z.of(e, this.doc.length, this.facet(O.lineSeparator))
  }
  toText(e) {
    return B.of(e.split(this.facet(O.lineSeparator) || Dn))
  }
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak)
  }
  facet(e) {
    let t = this.config.address[e.id]
    return t == null ? e.default : (Et(this, t), ki(this, t))
  }
  toJSON(e) {
    let t = { doc: this.sliceDoc(), selection: this.selection.toJSON() }
    if (e)
      for (let i in e) {
        let s = e[i]
        s instanceof U &&
          this.config.address[s.id] != null &&
          (t[i] = s.spec.toJSON(this.field(e[i]), this))
      }
    return t
  }
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != 'string')
      throw new RangeError('Invalid JSON representation for EditorState')
    let s = []
    if (i) {
      for (let r in i)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let o = i[r],
            l = e[r]
          s.push(o.init(a => o.spec.fromJSON(l, a)))
        }
    }
    return O.create({
      doc: e.doc,
      selection: y.fromJSON(e.selection),
      extensions: t.extensions ? s.concat([t.extensions]) : s
    })
  }
  static create(e = {}) {
    let t = vi.resolve(e.extensions || [], new Map()),
      i =
        e.doc instanceof B
          ? e.doc
          : B.of((e.doc || '').split(t.staticFacet(O.lineSeparator) || Dn)),
      s = e.selection
        ? e.selection instanceof y
          ? e.selection
          : y.single(e.selection.anchor, e.selection.head)
        : y.single(0)
    return (
      xo(s, i.length),
      t.staticFacet(So) || (s = s.asSingle()),
      new O(
        t,
        i,
        s,
        t.dynamicSlots.map(() => null),
        (r, o) => o.create(r),
        null
      )
    )
  }
  get tabSize() {
    return this.facet(O.tabSize)
  }
  get lineBreak() {
    return (
      this.facet(O.lineSeparator) ||
      `
`
    )
  }
  get readOnly() {
    return this.facet(To)
  }
  phrase(e, ...t) {
    for (let i of this.facet(O.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e]
        break
      }
    return (
      t.length &&
        (e = e.replace(/\$(\$|\d*)/g, (i, s) => {
          if (s == '$') return '$'
          let r = +(s || 1)
          return !r || r > t.length ? i : t[r - 1]
        })),
      e
    )
  }
  languageDataAt(e, t, i = -1) {
    let s = []
    for (let r of this.facet(ko))
      for (let o of r(this, t, i)) Object.prototype.hasOwnProperty.call(o, e) && s.push(o[e])
    return s
  }
  charCategorizer(e) {
    return Sh(this.languageDataAt('wordChars', e).join(''))
  }
  wordAt(e) {
    let { text: t, from: i, length: s } = this.doc.lineAt(e),
      r = this.charCategorizer(e),
      o = e - i,
      l = e - i
    for (; o > 0; ) {
      let a = Z(t, o, !1)
      if (r(t.slice(a, o)) != N.Word) break
      o = a
    }
    for (; l < s; ) {
      let a = Z(t, l)
      if (r(t.slice(l, a)) != N.Word) break
      l = a
    }
    return o == l ? null : y.range(o + i, l + i)
  }
}
O.allowMultipleSelections = So
O.tabSize = x.define({ combine: n => (n.length ? n[0] : 4) })
O.lineSeparator = Co
O.readOnly = To
O.phrases = x.define({
  compare(n, e) {
    let t = Object.keys(n),
      i = Object.keys(e)
    return t.length == i.length && t.every(s => n[s] == e[s])
  }
})
O.languageData = ko
O.changeFilter = Ao
O.transactionFilter = Mo
O.transactionExtender = Do
Ki.reconfigure = A.define()
function Ce(n, e, t = {}) {
  let i = {}
  for (let s of n)
    for (let r of Object.keys(s)) {
      let o = s[r],
        l = i[r]
      if (l === void 0) i[r] = o
      else if (!(l === o || o === void 0))
        if (Object.hasOwnProperty.call(t, r)) i[r] = t[r](l, o)
        else throw new Error('Config merge conflict for field ' + r)
    }
  for (let s in e) i[s] === void 0 && (i[s] = e[s])
  return i
}
class Qe {
  eq(e) {
    return this == e
  }
  range(e, t = e) {
    return Ft.create(e, t, this)
  }
}
Qe.prototype.startSide = Qe.prototype.endSide = 0
Qe.prototype.point = !1
Qe.prototype.mapMode = Q.TrackDel
class Ft {
  constructor(e, t, i) {
    ;(this.from = e), (this.to = t), (this.value = i)
  }
  static create(e, t, i) {
    return new Ft(e, t, i)
  }
}
function Pn(n, e) {
  return n.from - e.from || n.value.startSide - e.value.startSide
}
class gs {
  constructor(e, t, i, s) {
    ;(this.from = e), (this.to = t), (this.value = i), (this.maxPoint = s)
  }
  get length() {
    return this.to[this.to.length - 1]
  }
  findIndex(e, t, i, s = 0) {
    let r = i ? this.to : this.from
    for (let o = s, l = r.length; ; ) {
      if (o == l) return o
      let a = (o + l) >> 1,
        h = r[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t
      if (a == o) return h >= 0 ? o : l
      h >= 0 ? (l = a) : (o = a + 1)
    }
  }
  between(e, t, i, s) {
    for (let r = this.findIndex(t, -1e9, !0), o = this.findIndex(i, 1e9, !1, r); r < o; r++)
      if (s(this.from[r] + e, this.to[r] + e, this.value[r]) === !1) return !1
  }
  map(e, t) {
    let i = [],
      s = [],
      r = [],
      o = -1,
      l = -1
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a],
        c = this.from[a] + e,
        f = this.to[a] + e,
        u,
        d
      if (c == f) {
        let p = t.mapPos(c, h.startSide, h.mapMode)
        if (
          p == null ||
          ((u = d = p), h.startSide != h.endSide && ((d = t.mapPos(c, h.endSide)), d < u))
        )
          continue
      } else if (
        ((u = t.mapPos(c, h.startSide)),
        (d = t.mapPos(f, h.endSide)),
        u > d || (u == d && h.startSide > 0 && h.endSide <= 0))
      )
        continue
      ;(d - u || h.endSide - h.startSide) < 0 ||
        (o < 0 && (o = u),
        h.point && (l = Math.max(l, d - u)),
        i.push(h),
        s.push(u - o),
        r.push(d - o))
    }
    return { mapped: i.length ? new gs(s, r, i, l) : null, pos: o }
  }
}
class L {
  constructor(e, t, i, s) {
    ;(this.chunkPos = e), (this.chunk = t), (this.nextLayer = i), (this.maxPoint = s)
  }
  static create(e, t, i, s) {
    return new L(e, t, i, s)
  }
  get length() {
    let e = this.chunk.length - 1
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length)
  }
  get size() {
    if (this.isEmpty) return 0
    let e = this.nextLayer.size
    for (let t of this.chunk) e += t.value.length
    return e
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length
  }
  update(e) {
    let { add: t = [], sort: i = !1, filterFrom: s = 0, filterTo: r = this.length } = e,
      o = e.filter
    if (t.length == 0 && !o) return this
    if ((i && (t = t.slice().sort(Pn)), this.isEmpty)) return t.length ? L.of(t) : this
    let l = new Lo(this, null, -1).goto(0),
      a = 0,
      h = [],
      c = new We()
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let f = t[a++]
        c.addInner(f.from, f.to, f.value) || h.push(f)
      } else
        l.rangeIndex == 1 &&
        l.chunkIndex < this.chunk.length &&
        (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) &&
        (!o || s > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) &&
        c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex])
          ? l.nextChunk()
          : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) &&
              (c.addInner(l.from, l.to, l.value) || h.push(Ft.create(l.from, l.to, l.value))),
            l.next())
    return c.finishInner(
      this.nextLayer.isEmpty && !h.length
        ? L.empty
        : this.nextLayer.update({ add: h, filter: o, filterFrom: s, filterTo: r })
    )
  }
  map(e) {
    if (e.empty || this.isEmpty) return this
    let t = [],
      i = [],
      s = -1
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o],
        a = this.chunk[o],
        h = e.touchesRange(l, l + a.length)
      if (h === !1) (s = Math.max(s, a.maxPoint)), t.push(a), i.push(e.mapPos(l))
      else if (h === !0) {
        let { mapped: c, pos: f } = a.map(l, e)
        c && ((s = Math.max(s, c.maxPoint)), t.push(c), i.push(f))
      }
    }
    let r = this.nextLayer.map(e)
    return t.length == 0 ? r : new L(i, t, r || L.empty, s)
  }
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let r = this.chunkPos[s],
          o = this.chunk[s]
        if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, i) === !1) return
      }
      this.nextLayer.between(e, t, i)
    }
  }
  iter(e = 0) {
    return Ht.from([this]).goto(e)
  }
  get isEmpty() {
    return this.nextLayer == this
  }
  static iter(e, t = 0) {
    return Ht.from(e).goto(t)
  }
  static compare(e, t, i, s, r = -1) {
    let o = e.filter(f => f.maxPoint > 0 || (!f.isEmpty && f.maxPoint >= r)),
      l = t.filter(f => f.maxPoint > 0 || (!f.isEmpty && f.maxPoint >= r)),
      a = Js(o, l, i),
      h = new Ct(o, a, r),
      c = new Ct(l, a, r)
    i.iterGaps((f, u, d) => Ys(h, f, c, u, d, s)), i.empty && i.length == 0 && Ys(h, 0, c, 0, 0, s)
  }
  static eq(e, t, i = 0, s) {
    s == null && (s = 1e9)
    let r = e.filter(c => !c.isEmpty && t.indexOf(c) < 0),
      o = t.filter(c => !c.isEmpty && e.indexOf(c) < 0)
    if (r.length != o.length) return !1
    if (!r.length) return !0
    let l = Js(r, o),
      a = new Ct(r, l, 0).goto(i),
      h = new Ct(o, l, 0).goto(i)
    for (;;) {
      if (
        a.to != h.to ||
        !In(a.active, h.active) ||
        (a.point && (!h.point || !a.point.eq(h.point)))
      )
        return !1
      if (a.to > s) return !0
      a.next(), h.next()
    }
  }
  static spans(e, t, i, s, r = -1) {
    let o = new Ct(e, null, r).goto(t),
      l = t,
      a = o.openStart
    for (;;) {
      let h = Math.min(o.to, i)
      if (
        (o.point
          ? (s.point(l, h, o.point, o.activeForPoint(o.to), a, o.pointRank),
            (a = o.openEnd(h) + (o.to > h ? 1 : 0)))
          : h > l && (s.span(l, h, o.active, a), (a = o.openEnd(h))),
        o.to > i)
      )
        break
      ;(l = o.to), o.next()
    }
    return a
  }
  static of(e, t = !1) {
    let i = new We()
    for (let s of e instanceof Ft ? [e] : t ? Ch(e) : e) i.add(s.from, s.to, s.value)
    return i.finish()
  }
}
L.empty = new L([], [], null, -1)
function Ch(n) {
  if (n.length > 1)
    for (let e = n[0], t = 1; t < n.length; t++) {
      let i = n[t]
      if (Pn(e, i) > 0) return n.slice().sort(Pn)
      e = i
    }
  return n
}
L.empty.nextLayer = L.empty
class We {
  constructor() {
    ;(this.chunks = []),
      (this.chunkPos = []),
      (this.chunkStart = -1),
      (this.last = null),
      (this.lastFrom = -1e9),
      (this.lastTo = -1e9),
      (this.from = []),
      (this.to = []),
      (this.value = []),
      (this.maxPoint = -1),
      (this.setMaxPoint = -1),
      (this.nextLayer = null)
  }
  finishChunk(e) {
    this.chunks.push(new gs(this.from, this.to, this.value, this.maxPoint)),
      this.chunkPos.push(this.chunkStart),
      (this.chunkStart = -1),
      (this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint)),
      (this.maxPoint = -1),
      e && ((this.from = []), (this.to = []), (this.value = []))
  }
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new We())).add(e, t, i)
  }
  addInner(e, t, i) {
    let s = e - this.lastTo || i.startSide - this.last.endSide
    if (s <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error('Ranges must be added sorted by `from` position and `startSide`')
    return s < 0
      ? !1
      : (this.from.length == 250 && this.finishChunk(!0),
        this.chunkStart < 0 && (this.chunkStart = e),
        this.from.push(e - this.chunkStart),
        this.to.push(t - this.chunkStart),
        (this.last = i),
        (this.lastFrom = e),
        (this.lastTo = t),
        this.value.push(i),
        i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)),
        !0)
  }
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0) return !1
    this.from.length && this.finishChunk(!0),
      (this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint)),
      this.chunks.push(t),
      this.chunkPos.push(e)
    let i = t.value.length - 1
    return (
      (this.last = t.value[i]), (this.lastFrom = t.from[i] + e), (this.lastTo = t.to[i] + e), !0
    )
  }
  finish() {
    return this.finishInner(L.empty)
  }
  finishInner(e) {
    if ((this.from.length && this.finishChunk(!1), this.chunks.length == 0)) return e
    let t = L.create(
      this.chunkPos,
      this.chunks,
      this.nextLayer ? this.nextLayer.finishInner(e) : e,
      this.setMaxPoint
    )
    return (this.from = null), t
  }
}
function Js(n, e, t) {
  let i = new Map()
  for (let r of n)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o])
  let s = new Set()
  for (let r of e)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = i.get(r.chunk[o])
      l != null &&
        (t ? t.mapPos(l) : l) == r.chunkPos[o] &&
        !(t != null && t.touchesRange(l, l + r.chunk[o].length)) &&
        s.add(r.chunk[o])
    }
  return s
}
class Lo {
  constructor(e, t, i, s = 0) {
    ;(this.layer = e), (this.skip = t), (this.minPoint = i), (this.rank = s)
  }
  get startSide() {
    return this.value ? this.value.startSide : 0
  }
  get endSide() {
    return this.value ? this.value.endSide : 0
  }
  goto(e, t = -1e9) {
    return (this.chunkIndex = this.rangeIndex = 0), this.gotoInner(e, t, !1), this
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex]
      if (
        !(
          (this.skip && this.skip.has(s)) ||
          this.layer.chunkEnd(this.chunkIndex) < e ||
          s.maxPoint < this.minPoint
        )
      )
        break
      this.chunkIndex++, (i = !1)
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(
        e - this.layer.chunkPos[this.chunkIndex],
        t,
        !0
      )
      ;(!i || this.rangeIndex < s) && this.setRangeIndex(s)
    }
    this.next()
  }
  forward(e, t) {
    ;(this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0)
  }
  next() {
    for (;;)
      if (this.chunkIndex == this.layer.chunk.length) {
        ;(this.from = this.to = 1e9), (this.value = null)
        break
      } else {
        let e = this.layer.chunkPos[this.chunkIndex],
          t = this.layer.chunk[this.chunkIndex],
          i = e + t.from[this.rangeIndex]
        if (
          ((this.from = i),
          (this.to = e + t.to[this.rangeIndex]),
          (this.value = t.value[this.rangeIndex]),
          this.setRangeIndex(this.rangeIndex + 1),
          this.minPoint < 0 || (this.value.point && this.to - this.from >= this.minPoint))
        )
          break
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if ((this.chunkIndex++, this.skip))
        for (
          ;
          this.chunkIndex < this.layer.chunk.length &&
          this.skip.has(this.layer.chunk[this.chunkIndex]);

        )
          this.chunkIndex++
      this.rangeIndex = 0
    } else this.rangeIndex = e
  }
  nextChunk() {
    this.chunkIndex++, (this.rangeIndex = 0), this.next()
  }
  compare(e) {
    return (
      this.from - e.from ||
      this.startSide - e.startSide ||
      this.rank - e.rank ||
      this.to - e.to ||
      this.endSide - e.endSide
    )
  }
}
class Ht {
  constructor(e) {
    this.heap = e
  }
  static from(e, t = null, i = -1) {
    let s = []
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer) o.maxPoint >= i && s.push(new Lo(o, t, i, r))
    return s.length == 1 ? s[0] : new Ht(s)
  }
  get startSide() {
    return this.value ? this.value.startSide : 0
  }
  goto(e, t = -1e9) {
    for (let i of this.heap) i.goto(e, t)
    for (let i = this.heap.length >> 1; i >= 0; i--) rn(this.heap, i)
    return this.next(), this
  }
  forward(e, t) {
    for (let i of this.heap) i.forward(e, t)
    for (let i = this.heap.length >> 1; i >= 0; i--) rn(this.heap, i)
    ;(this.to - e || this.value.endSide - t) < 0 && this.next()
  }
  next() {
    if (this.heap.length == 0) (this.from = this.to = 1e9), (this.value = null), (this.rank = -1)
    else {
      let e = this.heap[0]
      ;(this.from = e.from),
        (this.to = e.to),
        (this.value = e.value),
        (this.rank = e.rank),
        e.value && e.next(),
        rn(this.heap, 0)
    }
  }
}
function rn(n, e) {
  for (let t = n[e]; ; ) {
    let i = (e << 1) + 1
    if (i >= n.length) break
    let s = n[i]
    if ((i + 1 < n.length && s.compare(n[i + 1]) >= 0 && ((s = n[i + 1]), i++), t.compare(s) < 0))
      break
    ;(n[i] = t), (n[e] = s), (e = i)
  }
}
class Ct {
  constructor(e, t, i) {
    ;(this.minPoint = i),
      (this.active = []),
      (this.activeTo = []),
      (this.activeRank = []),
      (this.minActive = -1),
      (this.point = null),
      (this.pointFrom = 0),
      (this.pointRank = 0),
      (this.to = -1e9),
      (this.endSide = 0),
      (this.openStart = -1),
      (this.cursor = Ht.from(e, t, i))
  }
  goto(e, t = -1e9) {
    return (
      this.cursor.goto(e, t),
      (this.active.length = this.activeTo.length = this.activeRank.length = 0),
      (this.minActive = -1),
      (this.to = e),
      (this.endSide = t),
      (this.openStart = -1),
      this.next(),
      this
    )
  }
  forward(e, t) {
    for (
      ;
      this.minActive > -1 &&
      (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0;

    )
      this.removeActive(this.minActive)
    this.cursor.forward(e, t)
  }
  removeActive(e) {
    ti(this.active, e),
      ti(this.activeTo, e),
      ti(this.activeRank, e),
      (this.minActive = Xs(this.active, this.activeTo))
  }
  addActive(e) {
    let t = 0,
      { value: i, to: s, rank: r } = this.cursor
    for (; t < this.activeRank.length && this.activeRank[t] <= r; ) t++
    ii(this.active, t, i),
      ii(this.activeTo, t, s),
      ii(this.activeRank, t, r),
      e && ii(e, t, this.cursor.from),
      (this.minActive = Xs(this.active, this.activeTo))
  }
  next() {
    let e = this.to,
      t = this.point
    this.point = null
    let i = this.openStart < 0 ? [] : null,
      s = 0
    for (;;) {
      let r = this.minActive
      if (
        r > -1 &&
        (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0
      ) {
        if (this.activeTo[r] > e) {
          ;(this.to = this.activeTo[r]), (this.endSide = this.active[r].endSide)
          break
        }
        this.removeActive(r), i && ti(i, r)
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          ;(this.to = this.cursor.from), (this.endSide = this.cursor.startSide)
          break
        } else {
          let o = this.cursor.value
          if (!o.point)
            this.addActive(i), this.cursor.from < e && this.cursor.to > e && s++, this.cursor.next()
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next()
          else {
            ;(this.point = o),
              (this.pointFrom = this.cursor.from),
              (this.pointRank = this.cursor.rank),
              (this.to = this.cursor.to),
              (this.endSide = o.endSide),
              this.cursor.from < e && (s = 1),
              this.cursor.next(),
              this.forward(this.to, this.endSide)
            break
          }
        }
      else {
        this.to = this.endSide = 1e9
        break
      }
    }
    if (i) {
      let r = 0
      for (; r < i.length && i[r] < e; ) r++
      this.openStart = r + s
    }
  }
  activeForPoint(e) {
    if (!this.active.length) return this.active
    let t = []
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e ||
        (this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide)) &&
        t.push(this.active[i])
    return t.reverse()
  }
  openEnd(e) {
    let t = 0
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--) t++
    return t
  }
}
function Ys(n, e, t, i, s, r) {
  n.goto(e), t.goto(i)
  let o = i + s,
    l = i,
    a = i - e
  for (;;) {
    let h = n.to + a - t.to || n.endSide - t.endSide,
      c = h < 0 ? n.to + a : t.to,
      f = Math.min(c, o)
    if (
      (n.point || t.point
        ? (n.point &&
            t.point &&
            (n.point == t.point || n.point.eq(t.point)) &&
            In(n.activeForPoint(n.to + a), t.activeForPoint(t.to))) ||
          r.comparePoint(l, f, n.point, t.point)
        : f > l && !In(n.active, t.active) && r.compareRange(l, f, n.active, t.active),
      c > o)
    )
      break
    ;(l = c), h <= 0 && n.next(), h >= 0 && t.next()
  }
}
function In(n, e) {
  if (n.length != e.length) return !1
  for (let t = 0; t < n.length; t++) if (n[t] != e[t] && !n[t].eq(e[t])) return !1
  return !0
}
function ti(n, e) {
  for (let t = e, i = n.length - 1; t < i; t++) n[t] = n[t + 1]
  n.pop()
}
function ii(n, e, t) {
  for (let i = n.length - 1; i >= e; i--) n[i + 1] = n[i]
  n[e] = t
}
function Xs(n, e) {
  let t = -1,
    i = 1e9
  for (let s = 0; s < e.length; s++)
    (e[s] - i || n[s].endSide - n[t].endSide) < 0 && ((t = s), (i = e[s]))
  return t
}
function Jt(n, e, t = n.length) {
  let i = 0
  for (let s = 0; s < t; ) n.charCodeAt(s) == 9 ? ((i += e - (i % e)), s++) : (i++, (s = Z(n, s)))
  return i
}
function Nn(n, e, t, i) {
  for (let s = 0, r = 0; ; ) {
    if (r >= e) return s
    if (s == n.length) break
    ;(r += n.charCodeAt(s) == 9 ? t - (r % t) : 1), (s = Z(n, s))
  }
  return i === !0 ? -1 : n.length
}
function Si(n) {
  let e
  return n.nodeType == 11 ? (e = n.getSelection ? n : n.ownerDocument) : (e = n), e.getSelection()
}
function dt(n, e) {
  return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : !1
}
function Ah(n) {
  let e = n.activeElement
  for (; e && e.shadowRoot; ) e = e.shadowRoot.activeElement
  return e
}
function yi(n, e) {
  if (!e.anchorNode) return !1
  try {
    return dt(n, e.anchorNode)
  } catch {
    return !1
  }
}
function Wt(n) {
  return n.nodeType == 3
    ? pt(n, 0, n.nodeValue.length).getClientRects()
    : n.nodeType == 1
    ? n.getClientRects()
    : []
}
function Ci(n, e, t, i) {
  return t ? Qs(n, e, t, i, -1) || Qs(n, e, t, i, 1) : !1
}
function Ai(n) {
  for (var e = 0; ; e++) if (((n = n.previousSibling), !n)) return e
}
function Qs(n, e, t, i, s) {
  for (;;) {
    if (n == t && e == i) return !0
    if (e == (s < 0 ? 0 : zt(n))) {
      if (n.nodeName == 'DIV') return !1
      let r = n.parentNode
      if (!r || r.nodeType != 1) return !1
      ;(e = Ai(n) + (s < 0 ? 0 : 1)), (n = r)
    } else if (n.nodeType == 1) {
      if (
        ((n = n.childNodes[e + (s < 0 ? -1 : 0)]), n.nodeType == 1 && n.contentEditable == 'false')
      )
        return !1
      e = s < 0 ? zt(n) : 0
    } else return !1
  }
}
function zt(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length
}
const Ro = { left: 0, right: 0, top: 0, bottom: 0 }
function ys(n, e) {
  let t = e ? n.left : n.right
  return { left: t, right: t, top: n.top, bottom: n.bottom }
}
function Mh(n) {
  return { left: 0, right: n.innerWidth, top: 0, bottom: n.innerHeight }
}
function Dh(n, e, t, i, s, r, o, l) {
  let a = n.ownerDocument,
    h = a.defaultView || window
  for (let c = n; c; )
    if (c.nodeType == 1) {
      let f,
        u = c == a.body
      if (u) f = Mh(h)
      else {
        if (c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode
          continue
        }
        let g = c.getBoundingClientRect()
        f = {
          left: g.left,
          right: g.left + c.clientWidth,
          top: g.top,
          bottom: g.top + c.clientHeight
        }
      }
      let d = 0,
        p = 0
      if (s == 'nearest')
        e.top < f.top
          ? ((p = -(f.top - e.top + o)),
            t > 0 && e.bottom > f.bottom + p && (p = e.bottom - f.bottom + p + o))
          : e.bottom > f.bottom &&
            ((p = e.bottom - f.bottom + o),
            t < 0 && e.top - p < f.top && (p = -(f.top + p - e.top + o)))
      else {
        let g = e.bottom - e.top,
          m = f.bottom - f.top
        p =
          (s == 'center' && g <= m
            ? e.top + g / 2 - m / 2
            : s == 'start' || (s == 'center' && t < 0)
            ? e.top - o
            : e.bottom - m + o) - f.top
      }
      if (
        (i == 'nearest'
          ? e.left < f.left
            ? ((d = -(f.left - e.left + r)),
              t > 0 && e.right > f.right + d && (d = e.right - f.right + d + r))
            : e.right > f.right &&
              ((d = e.right - f.right + r),
              t < 0 && e.left < f.left + d && (d = -(f.left + d - e.left + r)))
          : (d =
              (i == 'center'
                ? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2
                : (i == 'start') == l
                ? e.left - r
                : e.right - (f.right - f.left) + r) - f.left),
        d || p)
      )
        if (u) h.scrollBy(d, p)
        else {
          let g = 0,
            m = 0
          if (p) {
            let b = c.scrollTop
            ;(c.scrollTop += p), (m = c.scrollTop - b)
          }
          if (d) {
            let b = c.scrollLeft
            ;(c.scrollLeft += d), (g = c.scrollLeft - b)
          }
          ;(e = { left: e.left - g, top: e.top - m, right: e.right - g, bottom: e.bottom - m }),
            g && Math.abs(g - d) < 1 && (i = 'nearest'),
            m && Math.abs(m - p) < 1 && (s = 'nearest')
        }
      if (u) break
      c = c.assignedSlot || c.parentNode
    } else if (c.nodeType == 11) c = c.host
    else break
}
class Th {
  constructor() {
    ;(this.anchorNode = null),
      (this.anchorOffset = 0),
      (this.focusNode = null),
      (this.focusOffset = 0)
  }
  eq(e) {
    return (
      this.anchorNode == e.anchorNode &&
      this.anchorOffset == e.anchorOffset &&
      this.focusNode == e.focusNode &&
      this.focusOffset == e.focusOffset
    )
  }
  setRange(e) {
    this.set(e.anchorNode, e.anchorOffset, e.focusNode, e.focusOffset)
  }
  set(e, t, i, s) {
    ;(this.anchorNode = e), (this.anchorOffset = t), (this.focusNode = i), (this.focusOffset = s)
  }
}
let it = null
function Eo(n) {
  if (n.setActive) return n.setActive()
  if (it) return n.focus(it)
  let e = []
  for (
    let t = n;
    t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument);
    t = t.parentNode
  );
  if (
    (n.focus(
      it == null
        ? {
            get preventScroll() {
              return (it = { preventScroll: !0 }), !0
            }
          }
        : void 0
    ),
    !it)
  ) {
    it = !1
    for (let t = 0; t < e.length; ) {
      let i = e[t++],
        s = e[t++],
        r = e[t++]
      i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != r && (i.scrollLeft = r)
    }
  }
}
let Zs
function pt(n, e, t = e) {
  let i = Zs || (Zs = document.createRange())
  return i.setEnd(n, t), i.setStart(n, e), i
}
function ct(n, e, t) {
  let i = { key: e, code: e, keyCode: t, which: t, cancelable: !0 },
    s = new KeyboardEvent('keydown', i)
  ;(s.synthetic = !0), n.dispatchEvent(s)
  let r = new KeyboardEvent('keyup', i)
  return (r.synthetic = !0), n.dispatchEvent(r), s.defaultPrevented || r.defaultPrevented
}
function Oh(n) {
  for (; n; ) {
    if (n && (n.nodeType == 9 || (n.nodeType == 11 && n.host))) return n
    n = n.assignedSlot || n.parentNode
  }
  return null
}
function Po(n) {
  for (; n.attributes.length; ) n.removeAttributeNode(n.attributes[0])
}
function Bh(n, e) {
  let t = e.focusNode,
    i = e.focusOffset
  if (!t || e.anchorNode != t || e.anchorOffset != i) return !1
  for (;;)
    if (i) {
      if (t.nodeType != 1) return !1
      let s = t.childNodes[i - 1]
      s.contentEditable == 'false' ? i-- : ((t = s), (i = zt(t)))
    } else {
      if (t == n) return !0
      ;(i = Ai(t)), (t = t.parentNode)
    }
}
class J {
  constructor(e, t, i = !0) {
    ;(this.node = e), (this.offset = t), (this.precise = i)
  }
  static before(e, t) {
    return new J(e.parentNode, Ai(e), t)
  }
  static after(e, t) {
    return new J(e.parentNode, Ai(e) + 1, t)
  }
}
const bs = []
class I {
  constructor() {
    ;(this.parent = null), (this.dom = null), (this.dirty = 2)
  }
  get editorView() {
    if (!this.parent) throw new Error('Accessing view in orphan content view')
    return this.parent.editorView
  }
  get overrideDOMText() {
    return null
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0
  }
  get posAtEnd() {
    return this.posAtStart + this.length
  }
  posBefore(e) {
    let t = this.posAtStart
    for (let i of this.children) {
      if (i == e) return t
      t += i.length + i.breakAfter
    }
    throw new RangeError('Invalid child in posBefore')
  }
  posAfter(e) {
    return this.posBefore(e) + e.length
  }
  coordsAt(e, t) {
    return null
  }
  sync(e) {
    if (this.dirty & 2) {
      let t = this.dom,
        i = null,
        s
      for (let r of this.children) {
        if (r.dirty) {
          if (!r.dom && (s = i ? i.nextSibling : t.firstChild)) {
            let o = I.get(s)
            ;(!o || (!o.parent && o.canReuseDOM(r))) && r.reuseDOM(s)
          }
          r.sync(e), (r.dirty = 0)
        }
        if (
          ((s = i ? i.nextSibling : t.firstChild),
          e && !e.written && e.node == t && s != r.dom && (e.written = !0),
          r.dom.parentNode == t)
        )
          for (; s && s != r.dom; ) s = _s(s)
        else t.insertBefore(r.dom, s)
        i = r.dom
      }
      for (s = i ? i.nextSibling : t.firstChild, s && e && e.node == t && (e.written = !0); s; )
        s = _s(s)
    } else if (this.dirty & 1) for (let t of this.children) t.dirty && (t.sync(e), (t.dirty = 0))
  }
  reuseDOM(e) {}
  localPosFromDOM(e, t) {
    let i
    if (e == this.dom) i = this.dom.childNodes[t]
    else {
      let s = zt(e) == 0 ? 0 : t == 0 ? -1 : 1
      for (;;) {
        let r = e.parentNode
        if (r == this.dom) break
        s == 0 && r.firstChild != r.lastChild && (e == r.firstChild ? (s = -1) : (s = 1)), (e = r)
      }
      s < 0 ? (i = e) : (i = e.nextSibling)
    }
    if (i == this.dom.firstChild) return 0
    for (; i && !I.get(i); ) i = i.nextSibling
    if (!i) return this.length
    for (let s = 0, r = 0; ; s++) {
      let o = this.children[s]
      if (o.dom == i) return r
      r += o.length + o.breakAfter
    }
  }
  domBoundsAround(e, t, i = 0) {
    let s = -1,
      r = -1,
      o = -1,
      l = -1
    for (let a = 0, h = i, c = i; a < this.children.length; a++) {
      let f = this.children[a],
        u = h + f.length
      if (h < e && u > t) return f.domBoundsAround(e, t, h)
      if ((u >= e && s == -1 && ((s = a), (r = h)), h > t && f.dom.parentNode == this.dom)) {
        ;(o = a), (l = c)
        break
      }
      ;(c = u), (h = u + f.breakAfter)
    }
    return {
      from: r,
      to: l < 0 ? i + this.length : l,
      startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
    }
  }
  markDirty(e = !1) {
    ;(this.dirty |= 2), this.markParentsDirty(e)
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if ((e && (t.dirty |= 2), t.dirty & 1)) return
      ;(t.dirty |= 1), (e = !1)
    }
  }
  setParent(e) {
    this.parent != e && ((this.parent = e), this.dirty && this.markParentsDirty(!0))
  }
  setDOM(e) {
    this.dom && (this.dom.cmView = null), (this.dom = e), (e.cmView = this)
  }
  get rootView() {
    for (let e = this; ; ) {
      let t = e.parent
      if (!t) return e
      e = t
    }
  }
  replaceChildren(e, t, i = bs) {
    this.markDirty()
    for (let s = e; s < t; s++) {
      let r = this.children[s]
      r.parent == this && r.destroy()
    }
    this.children.splice(e, t - e, ...i)
    for (let s = 0; s < i.length; s++) i[s].setParent(this)
  }
  ignoreMutation(e) {
    return !1
  }
  ignoreEvent(e) {
    return !1
  }
  childCursor(e = this.length) {
    return new Io(this.children, e, this.children.length)
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t)
  }
  toString() {
    let e = this.constructor.name.replace('View', '')
    return (
      e +
      (this.children.length
        ? '(' + this.children.join() + ')'
        : this.length
        ? '[' + (e == 'Text' ? this.text : this.length) + ']'
        : '') +
      (this.breakAfter ? '#' : '')
    )
  }
  static get(e) {
    return e.cmView
  }
  get isEditable() {
    return !0
  }
  merge(e, t, i, s, r, o) {
    return !1
  }
  become(e) {
    return !1
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor
  }
  getSide() {
    return 0
  }
  destroy() {
    this.parent = null
  }
}
I.prototype.breakAfter = 0
function _s(n) {
  let e = n.nextSibling
  return n.parentNode.removeChild(n), e
}
class Io {
  constructor(e, t, i) {
    ;(this.children = e), (this.pos = t), (this.i = i), (this.off = 0)
  }
  findPos(e, t = 1) {
    for (;;) {
      if (
        e > this.pos ||
        (e == this.pos && (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
      )
        return (this.off = e - this.pos), this
      let i = this.children[--this.i]
      this.pos -= i.length + i.breakAfter
    }
  }
}
function No(n, e, t, i, s, r, o, l, a) {
  let { children: h } = n,
    c = h.length ? h[e] : null,
    f = r.length ? r[r.length - 1] : null,
    u = f ? f.breakAfter : o
  if (
    !(e == i && c && !o && !u && r.length < 2 && c.merge(t, s, r.length ? f : null, t == 0, l, a))
  ) {
    if (i < h.length) {
      let d = h[i]
      d && s < d.length
        ? (e == i && ((d = d.split(s)), (s = 0)),
          !u && f && d.merge(0, s, f, !0, 0, a)
            ? (r[r.length - 1] = d)
            : (s && d.merge(0, s, null, !1, 0, a), r.push(d)))
        : d != null && d.breakAfter && (f ? (f.breakAfter = 1) : (o = 1)),
        i++
    }
    for (
      c &&
      ((c.breakAfter = o),
      t > 0 &&
        (!o && r.length && c.merge(t, c.length, r[0], !1, l, 0)
          ? (c.breakAfter = r.shift().breakAfter)
          : (t < c.length ||
              (c.children.length && c.children[c.children.length - 1].length == 0)) &&
            c.merge(t, c.length, null, !1, l, 0),
        e++));
      e < i && r.length;

    )
      if (h[i - 1].become(r[r.length - 1])) i--, r.pop(), (a = r.length ? 0 : l)
      else if (h[e].become(r[0])) e++, r.shift(), (l = r.length ? 0 : a)
      else break
    !r.length &&
      e &&
      i < h.length &&
      !h[e - 1].breakAfter &&
      h[i].merge(0, 0, h[e - 1], !1, l, a) &&
      e--,
      (e < i || r.length) && n.replaceChildren(e, i, r)
  }
}
function Vo(n, e, t, i, s, r) {
  let o = n.childCursor(),
    { i: l, off: a } = o.findPos(t, 1),
    { i: h, off: c } = o.findPos(e, -1),
    f = e - t
  for (let u of i) f += u.length
  ;(n.length += f), No(n, h, c, l, a, i, 0, s, r)
}
let le = typeof navigator < 'u' ? navigator : { userAgent: '', vendor: '', platform: '' },
  Vn = typeof document < 'u' ? document : { documentElement: { style: {} } }
const Fn = /Edge\/(\d+)/.exec(le.userAgent),
  Fo = /MSIE \d/.test(le.userAgent),
  Hn = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(le.userAgent),
  ji = !!(Fo || Hn || Fn),
  er = !ji && /gecko\/(\d+)/i.test(le.userAgent),
  on = !ji && /Chrome\/(\d+)/.exec(le.userAgent),
  tr = 'webkitFontSmoothing' in Vn.documentElement.style,
  Ho = !ji && /Apple Computer/.test(le.vendor),
  ir = Ho && (/Mobile\/\w+/.test(le.userAgent) || le.maxTouchPoints > 2)
var w = {
  mac: ir || /Mac/.test(le.platform),
  windows: /Win/.test(le.platform),
  linux: /Linux|X11/.test(le.platform),
  ie: ji,
  ie_version: Fo ? Vn.documentMode || 6 : Hn ? +Hn[1] : Fn ? +Fn[1] : 0,
  gecko: er,
  gecko_version: er ? +(/Firefox\/(\d+)/.exec(le.userAgent) || [0, 0])[1] : 0,
  chrome: !!on,
  chrome_version: on ? +on[1] : 0,
  ios: ir,
  android: /Android\b/.test(le.userAgent),
  webkit: tr,
  safari: Ho,
  webkit_version: tr ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
  tabSize: Vn.documentElement.style.tabSize != null ? 'tab-size' : '-moz-tab-size'
}
const Lh = 256
class ze extends I {
  constructor(e) {
    super(), (this.text = e)
  }
  get length() {
    return this.text.length
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text))
  }
  sync(e) {
    this.dom || this.createDOM(),
      this.dom.nodeValue != this.text &&
        (e && e.node == this.dom && (e.written = !0), (this.dom.nodeValue = this.text))
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e)
  }
  merge(e, t, i) {
    return i && (!(i instanceof ze) || this.length - (t - e) + i.length > Lh)
      ? !1
      : ((this.text = this.text.slice(0, e) + (i ? i.text : '') + this.text.slice(t)),
        this.markDirty(),
        !0)
  }
  split(e) {
    let t = new ze(this.text.slice(e))
    return (this.text = this.text.slice(0, e)), this.markDirty(), t
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0
  }
  domAtPos(e) {
    return new J(this.dom, e)
  }
  domBoundsAround(e, t, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling }
  }
  coordsAt(e, t) {
    return Wn(this.dom, e, t)
  }
}
class Se extends I {
  constructor(e, t = [], i = 0) {
    super(), (this.mark = e), (this.children = t), (this.length = i)
    for (let s of t) s.setParent(this)
  }
  setAttrs(e) {
    if ((Po(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs))
      for (let t in this.mark.attrs) e.setAttribute(t, this.mark.attrs[t])
    return e
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), (this.dirty |= 6))
  }
  sync(e) {
    this.dom
      ? this.dirty & 4 && this.setAttrs(this.dom)
      : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),
      super.sync(e)
  }
  merge(e, t, i, s, r, o) {
    return i &&
      (!(i instanceof Se && i.mark.eq(this.mark)) || (e && r <= 0) || (t < this.length && o <= 0))
      ? !1
      : (Vo(this, e, t, i ? i.children : [], r - 1, o - 1), this.markDirty(), !0)
  }
  split(e) {
    let t = [],
      i = 0,
      s = -1,
      r = 0
    for (let l of this.children) {
      let a = i + l.length
      a > e && t.push(i < e ? l.split(e - i) : l), s < 0 && i >= e && (s = r), (i = a), r++
    }
    let o = this.length - e
    return (
      (this.length = e),
      s > -1 && ((this.children.length = s), this.markDirty()),
      new Se(this.mark, t, o)
    )
  }
  domAtPos(e) {
    return qo(this, e)
  }
  coordsAt(e, t) {
    return Ko(this, e, t)
  }
}
function Wn(n, e, t) {
  let i = n.nodeValue.length
  e > i && (e = i)
  let s = e,
    r = e,
    o = 0
  ;(e == 0 && t < 0) || (e == i && t >= 0)
    ? w.chrome || w.gecko || (e ? (s--, (o = 1)) : r < i && (r++, (o = -1)))
    : t < 0
    ? s--
    : r < i && r++
  let l = pt(n, s, r).getClientRects()
  if (!l.length) return Ro
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1]
  return (
    w.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, h => h.width) || a),
    o ? ys(a, o < 0) : a || null
  )
}
class Pe extends I {
  constructor(e, t, i) {
    super(), (this.widget = e), (this.length = t), (this.side = i), (this.prevWidget = null)
  }
  static create(e, t, i) {
    return new (e.customView || Pe)(e, t, i)
  }
  split(e) {
    let t = Pe.create(this.widget, this.length - e, this.side)
    return (this.length -= e), t
  }
  sync() {
    ;(!this.dom || !this.widget.updateDOM(this.dom)) &&
      (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
      (this.prevWidget = null),
      this.setDOM(this.widget.toDOM(this.editorView)),
      (this.dom.contentEditable = 'false'))
  }
  getSide() {
    return this.side
  }
  merge(e, t, i, s, r, o) {
    return i &&
      (!(i instanceof Pe) ||
        !this.widget.compare(i.widget) ||
        (e > 0 && r <= 0) ||
        (t < this.length && o <= 0))
      ? !1
      : ((this.length = e + (i ? i.length : 0) + (this.length - t)), !0)
  }
  become(e) {
    return e.length == this.length &&
      e instanceof Pe &&
      e.side == this.side &&
      this.widget.constructor == e.widget.constructor
      ? (this.widget.eq(e.widget) || this.markDirty(!0),
        this.dom && !this.prevWidget && (this.prevWidget = this.widget),
        (this.widget = e.widget),
        !0)
      : !1
  }
  ignoreMutation() {
    return !0
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e)
  }
  get overrideDOMText() {
    if (this.length == 0) return B.empty
    let e = this
    for (; e.parent; ) e = e.parent
    let t = e.editorView,
      i = t && t.state.doc,
      s = this.posAtStart
    return i ? i.slice(s, s + this.length) : B.empty
  }
  domAtPos(e) {
    return e == 0 ? J.before(this.dom) : J.after(this.dom, e == this.length)
  }
  domBoundsAround() {
    return null
  }
  coordsAt(e, t) {
    let i = this.dom.getClientRects(),
      s = null
    if (!i.length) return Ro
    for (
      let r = e > 0 ? i.length - 1 : 0;
      (s = i[r]), !(e > 0 ? r == 0 : r == i.length - 1 || s.top < s.bottom);
      r += e > 0 ? -1 : 1
    );
    return ys(s, this.side > 0)
  }
  get isEditable() {
    return !1
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom)
  }
}
class Wo extends Pe {
  domAtPos(e) {
    let { topView: t, text: i } = this.widget
    return t
      ? zn(
          e,
          0,
          t,
          i,
          (s, r) => s.domAtPos(r),
          s => new J(i, Math.min(s, i.nodeValue.length))
        )
      : new J(i, Math.min(e, i.nodeValue.length))
  }
  sync() {
    this.setDOM(this.widget.toDOM())
  }
  localPosFromDOM(e, t) {
    let { topView: i, text: s } = this.widget
    return i ? zo(e, t, i, s) : Math.min(t, this.length)
  }
  ignoreMutation() {
    return !1
  }
  get overrideDOMText() {
    return null
  }
  coordsAt(e, t) {
    let { topView: i, text: s } = this.widget
    return i
      ? zn(
          e,
          t,
          i,
          s,
          (r, o, l) => r.coordsAt(o, l),
          (r, o) => Wn(s, r, o)
        )
      : Wn(s, e, t)
  }
  destroy() {
    var e
    super.destroy(), (e = this.widget.topView) === null || e === void 0 || e.destroy()
  }
  get isEditable() {
    return !0
  }
  canReuseDOM() {
    return !0
  }
}
function zn(n, e, t, i, s, r) {
  if (t instanceof Se) {
    for (let o = t.dom.firstChild; o; o = o.nextSibling) {
      let l = I.get(o)
      if (!l) return r(n, e)
      let a = dt(o, i),
        h = l.length + (a ? i.nodeValue.length : 0)
      if (n < h || (n == h && l.getSide() <= 0)) return a ? zn(n, e, l, i, s, r) : s(l, n, e)
      n -= h
    }
    return s(t, t.length, -1)
  } else return t.dom == i ? r(n, e) : s(t, n, e)
}
function zo(n, e, t, i) {
  if (t instanceof Se)
    for (let s of t.children) {
      let r = 0,
        o = dt(s.dom, i)
      if (dt(s.dom, n)) return r + (o ? zo(n, e, s, i) : s.localPosFromDOM(n, e))
      r += o ? i.nodeValue.length : s.length
    }
  else if (t.dom == i) return Math.min(e, i.nodeValue.length)
  return t.localPosFromDOM(n, e)
}
class mt extends I {
  constructor(e) {
    super(), (this.side = e)
  }
  get length() {
    return 0
  }
  merge() {
    return !1
  }
  become(e) {
    return e instanceof mt && e.side == this.side
  }
  split() {
    return new mt(this.side)
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement('img')
      ;(e.className = 'cm-widgetBuffer'), e.setAttribute('aria-hidden', 'true'), this.setDOM(e)
    }
  }
  getSide() {
    return this.side
  }
  domAtPos(e) {
    return J.before(this.dom)
  }
  localPosFromDOM() {
    return 0
  }
  domBoundsAround() {
    return null
  }
  coordsAt(e) {
    let t = this.dom.getBoundingClientRect(),
      i = Rh(this, this.side > 0 ? -1 : 1)
    return i && i.top < t.bottom && i.bottom > t.top
      ? { left: t.left, right: t.right, top: i.top, bottom: i.bottom }
      : t
  }
  get overrideDOMText() {
    return B.empty
  }
}
ze.prototype.children = Pe.prototype.children = mt.prototype.children = bs
function Rh(n, e) {
  let t = n.parent,
    i = t ? t.children.indexOf(n) : -1
  for (; t && i >= 0; )
    if (e < 0 ? i > 0 : i < t.children.length) {
      let s = t.children[i + e]
      if (s instanceof ze) {
        let r = s.coordsAt(e < 0 ? s.length : 0, e)
        if (r) return r
      }
      i += e
    } else if (t instanceof Se && t.parent)
      (i = t.parent.children.indexOf(t) + (e < 0 ? 0 : 1)), (t = t.parent)
    else {
      let s = t.dom.lastChild
      if (s && s.nodeName == 'BR') return s.getClientRects()[0]
      break
    }
}
function qo(n, e) {
  let t = n.dom,
    { children: i } = n,
    s = 0
  for (let r = 0; s < i.length; s++) {
    let o = i[s],
      l = r + o.length
    if (!(l == r && o.getSide() <= 0)) {
      if (e > r && e < l && o.dom.parentNode == t) return o.domAtPos(e - r)
      if (e <= r) break
      r = l
    }
  }
  for (let r = s; r > 0; r--) {
    let o = i[r - 1]
    if (o.dom.parentNode == t) return o.domAtPos(o.length)
  }
  for (let r = s; r < i.length; r++) {
    let o = i[r]
    if (o.dom.parentNode == t) return o.domAtPos(0)
  }
  return new J(t, 0)
}
function $o(n, e, t) {
  let i,
    { children: s } = n
  t > 0 && e instanceof Se && s.length && (i = s[s.length - 1]) instanceof Se && i.mark.eq(e.mark)
    ? $o(i, e.children[0], t - 1)
    : (s.push(e), e.setParent(n)),
    (n.length += e.length)
}
function Ko(n, e, t) {
  let i = null,
    s = -1,
    r = null,
    o = -1
  function l(h, c) {
    for (let f = 0, u = 0; f < h.children.length && u <= c; f++) {
      let d = h.children[f],
        p = u + d.length
      p >= c &&
        (d.children.length
          ? l(d, c - u)
          : !r && (p > c || (u == p && d.getSide() > 0))
          ? ((r = d), (o = c - u))
          : (u < c || (u == p && d.getSide() < 0)) && ((i = d), (s = c - u))),
        (u = p)
    }
  }
  l(n, e)
  let a = (t < 0 ? i : r) || i || r
  return a ? a.coordsAt(Math.max(0, a == i ? s : o), t) : Eh(n)
}
function Eh(n) {
  let e = n.dom.lastChild
  if (!e) return n.dom.getBoundingClientRect()
  let t = Wt(e)
  return t[t.length - 1] || null
}
function qn(n, e) {
  for (let t in n)
    t == 'class' && e.class
      ? (e.class += ' ' + n.class)
      : t == 'style' && e.style
      ? (e.style += ';' + n.style)
      : (e[t] = n[t])
  return e
}
function ws(n, e) {
  if (n == e) return !0
  if (!n || !e) return !1
  let t = Object.keys(n),
    i = Object.keys(e)
  if (t.length != i.length) return !1
  for (let s of t) if (i.indexOf(s) == -1 || n[s] !== e[s]) return !1
  return !0
}
function $n(n, e, t) {
  let i = null
  if (e) for (let s in e) (t && s in t) || n.removeAttribute((i = s))
  if (t) for (let s in t) (e && e[s] == t[s]) || n.setAttribute((i = s), t[s])
  return !!i
}
class Te {
  eq(e) {
    return !1
  }
  updateDOM(e) {
    return !1
  }
  compare(e) {
    return this == e || (this.constructor == e.constructor && this.eq(e))
  }
  get estimatedHeight() {
    return -1
  }
  ignoreEvent(e) {
    return !0
  }
  get customView() {
    return null
  }
  destroy(e) {}
}
var E = (function (n) {
  return (
    (n[(n.Text = 0)] = 'Text'),
    (n[(n.WidgetBefore = 1)] = 'WidgetBefore'),
    (n[(n.WidgetAfter = 2)] = 'WidgetAfter'),
    (n[(n.WidgetRange = 3)] = 'WidgetRange'),
    n
  )
})(E || (E = {}))
class k extends Qe {
  constructor(e, t, i, s) {
    super(), (this.startSide = e), (this.endSide = t), (this.widget = i), (this.spec = s)
  }
  get heightRelevant() {
    return !1
  }
  static mark(e) {
    return new Ui(e)
  }
  static widget(e) {
    let t = e.side || 0,
      i = !!e.block
    return (
      (t += i ? (t > 0 ? 3e8 : -4e8) : t > 0 ? 1e8 : -1e8), new Ze(e, t, t, i, e.widget || null, !1)
    )
  }
  static replace(e) {
    let t = !!e.block,
      i,
      s
    if (e.isBlockGap) (i = -5e8), (s = 4e8)
    else {
      let { start: r, end: o } = jo(e, t)
      ;(i = (r ? (t ? -3e8 : -1) : 5e8) - 1), (s = (o ? (t ? 2e8 : 1) : -6e8) + 1)
    }
    return new Ze(e, i, s, t, e.widget || null, !0)
  }
  static line(e) {
    return new Yt(e)
  }
  static set(e, t = !1) {
    return L.of(e, t)
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1
  }
}
k.none = L.empty
class Ui extends k {
  constructor(e) {
    let { start: t, end: i } = jo(e)
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e),
      (this.tagName = e.tagName || 'span'),
      (this.class = e.class || ''),
      (this.attrs = e.attributes || null)
  }
  eq(e) {
    return (
      this == e ||
      (e instanceof Ui &&
        this.tagName == e.tagName &&
        this.class == e.class &&
        ws(this.attrs, e.attrs))
    )
  }
  range(e, t = e) {
    if (e >= t) throw new RangeError('Mark decorations may not be empty')
    return super.range(e, t)
  }
}
Ui.prototype.point = !1
class Yt extends k {
  constructor(e) {
    super(-2e8, -2e8, null, e)
  }
  eq(e) {
    return e instanceof Yt && ws(this.spec.attributes, e.spec.attributes)
  }
  range(e, t = e) {
    if (t != e) throw new RangeError('Line decoration ranges must be zero-length')
    return super.range(e, t)
  }
}
Yt.prototype.mapMode = Q.TrackBefore
Yt.prototype.point = !0
class Ze extends k {
  constructor(e, t, i, s, r, o) {
    super(t, i, r, e),
      (this.block = s),
      (this.isReplace = o),
      (this.mapMode = s ? (t <= 0 ? Q.TrackBefore : Q.TrackAfter) : Q.TrackDel)
  }
  get type() {
    return this.startSide < this.endSide
      ? E.WidgetRange
      : this.startSide <= 0
      ? E.WidgetBefore
      : E.WidgetAfter
  }
  get heightRelevant() {
    return this.block || (!!this.widget && this.widget.estimatedHeight >= 5)
  }
  eq(e) {
    return (
      e instanceof Ze &&
      Ph(this.widget, e.widget) &&
      this.block == e.block &&
      this.startSide == e.startSide &&
      this.endSide == e.endSide
    )
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || (e == t && this.startSide > 0 && this.endSide <= 0)))
      throw new RangeError('Invalid range for replacement decoration')
    if (!this.isReplace && t != e)
      throw new RangeError('Widget decorations can only have zero-length ranges')
    return super.range(e, t)
  }
}
Ze.prototype.point = !0
function jo(n, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = n
  return (
    t == null && (t = n.inclusive),
    i == null && (i = n.inclusive),
    { start: t != null ? t : e, end: i != null ? i : e }
  )
}
function Ph(n, e) {
  return n == e || !!(n && e && n.compare(e))
}
function Kn(n, e, t, i = 0) {
  let s = t.length - 1
  s >= 0 && t[s] + i >= n ? (t[s] = Math.max(t[s], e)) : t.push(n, e)
}
class _ extends I {
  constructor() {
    super(...arguments),
      (this.children = []),
      (this.length = 0),
      (this.prevAttrs = void 0),
      (this.attrs = null),
      (this.breakAfter = 0)
  }
  merge(e, t, i, s, r, o) {
    if (i) {
      if (!(i instanceof _)) return !1
      this.dom || i.transferDOM(this)
    }
    return s && this.setDeco(i ? i.attrs : null), Vo(this, e, t, i ? i.children : [], r, o), !0
  }
  split(e) {
    let t = new _()
    if (((t.breakAfter = this.breakAfter), this.length == 0)) return t
    let { i, off: s } = this.childPos(e)
    s &&
      (t.append(this.children[i].split(s), 0),
      this.children[i].merge(s, this.children[i].length, null, !1, 0, 0),
      i++)
    for (let r = i; r < this.children.length; r++) t.append(this.children[r], 0)
    for (; i > 0 && this.children[i - 1].length == 0; ) this.children[--i].destroy()
    return (this.children.length = i), this.markDirty(), (this.length = e), t
  }
  transferDOM(e) {
    !this.dom ||
      (this.markDirty(),
      e.setDOM(this.dom),
      (e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs),
      (this.prevAttrs = void 0),
      (this.dom = null))
  }
  setDeco(e) {
    ws(this.attrs, e) ||
      (this.dom && ((this.prevAttrs = this.attrs), this.markDirty()), (this.attrs = e))
  }
  append(e, t) {
    $o(this, e, t)
  }
  addLineDeco(e) {
    let t = e.spec.attributes,
      i = e.spec.class
    t && (this.attrs = qn(t, this.attrs || {})),
      i && (this.attrs = qn({ class: i }, this.attrs || {}))
  }
  domAtPos(e) {
    return qo(this, e)
  }
  reuseDOM(e) {
    e.nodeName == 'DIV' && (this.setDOM(e), (this.dirty |= 6))
  }
  sync(e) {
    var t
    this.dom
      ? this.dirty & 4 &&
        (Po(this.dom),
        (this.dom.className = 'cm-line'),
        (this.prevAttrs = this.attrs ? null : void 0))
      : (this.setDOM(document.createElement('div')),
        (this.dom.className = 'cm-line'),
        (this.prevAttrs = this.attrs ? null : void 0)),
      this.prevAttrs !== void 0 &&
        ($n(this.dom, this.prevAttrs, this.attrs),
        this.dom.classList.add('cm-line'),
        (this.prevAttrs = void 0)),
      super.sync(e)
    let i = this.dom.lastChild
    for (; i && I.get(i) instanceof Se; ) i = i.lastChild
    if (
      !i ||
      !this.length ||
      (i.nodeName != 'BR' &&
        ((t = I.get(i)) === null || t === void 0 ? void 0 : t.isEditable) == !1 &&
        (!w.ios || !this.children.some(s => s instanceof ze)))
    ) {
      let s = document.createElement('BR')
      ;(s.cmIgnore = !0), this.dom.appendChild(s)
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20) return null
    let e = 0
    for (let t of this.children) {
      if (!(t instanceof ze) || /[^ -~]/.test(t.text)) return null
      let i = Wt(t.dom)
      if (i.length != 1) return null
      e += i[0].width
    }
    return e
      ? { lineHeight: this.dom.getBoundingClientRect().height, charWidth: e / this.length }
      : null
  }
  coordsAt(e, t) {
    return Ko(this, e, t)
  }
  become(e) {
    return !1
  }
  get type() {
    return E.Text
  }
  static find(e, t) {
    for (let i = 0, s = 0; i < e.children.length; i++) {
      let r = e.children[i],
        o = s + r.length
      if (o >= t) {
        if (r instanceof _) return r
        if (o > t) break
      }
      s = o + r.breakAfter
    }
    return null
  }
}
class Xe extends I {
  constructor(e, t, i) {
    super(),
      (this.widget = e),
      (this.length = t),
      (this.type = i),
      (this.breakAfter = 0),
      (this.prevWidget = null)
  }
  merge(e, t, i, s, r, o) {
    return i &&
      (!(i instanceof Xe) ||
        !this.widget.compare(i.widget) ||
        (e > 0 && r <= 0) ||
        (t < this.length && o <= 0))
      ? !1
      : ((this.length = e + (i ? i.length : 0) + (this.length - t)), !0)
  }
  domAtPos(e) {
    return e == 0 ? J.before(this.dom) : J.after(this.dom, e == this.length)
  }
  split(e) {
    let t = this.length - e
    this.length = e
    let i = new Xe(this.widget, t, this.type)
    return (i.breakAfter = this.breakAfter), i
  }
  get children() {
    return bs
  }
  sync() {
    ;(!this.dom || !this.widget.updateDOM(this.dom)) &&
      (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
      (this.prevWidget = null),
      this.setDOM(this.widget.toDOM(this.editorView)),
      (this.dom.contentEditable = 'false'))
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : B.empty
  }
  domBoundsAround() {
    return null
  }
  become(e) {
    return e instanceof Xe && e.type == this.type && e.widget.constructor == this.widget.constructor
      ? (e.widget.eq(this.widget) || this.markDirty(!0),
        this.dom && !this.prevWidget && (this.prevWidget = this.widget),
        (this.widget = e.widget),
        (this.length = e.length),
        (this.breakAfter = e.breakAfter),
        !0)
      : !1
  }
  ignoreMutation() {
    return !0
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e)
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom)
  }
}
class xs {
  constructor(e, t, i, s) {
    ;(this.doc = e),
      (this.pos = t),
      (this.end = i),
      (this.disallowBlockEffectsFor = s),
      (this.content = []),
      (this.curLine = null),
      (this.breakAtStart = 0),
      (this.pendingBuffer = 0),
      (this.atCursorPos = !0),
      (this.openStart = -1),
      (this.openEnd = -1),
      (this.text = ''),
      (this.textOff = 0),
      (this.cursor = e.iter()),
      (this.skip = t)
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos
    let e = this.content[this.content.length - 1]
    return !e.breakAfter && !(e instanceof Xe && e.type == E.WidgetBefore)
  }
  getLine() {
    return (
      this.curLine || (this.content.push((this.curLine = new _())), (this.atCursorPos = !0)),
      this.curLine
    )
  }
  flushBuffer(e) {
    this.pendingBuffer &&
      (this.curLine.append(ni(new mt(-1), e), e.length), (this.pendingBuffer = 0))
  }
  addBlockWidget(e) {
    this.flushBuffer([]), (this.curLine = null), this.content.push(e)
  }
  finish(e) {
    e ? (this.pendingBuffer = 0) : this.flushBuffer([]), this.posCovered() || this.getLine()
  }
  buildText(e, t, i) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: r, lineBreak: o, done: l } = this.cursor.next(this.skip)
        if (((this.skip = 0), l))
          throw new Error('Ran out of text content when drawing inline views')
        if (o) {
          this.posCovered() || this.getLine(),
            this.content.length
              ? (this.content[this.content.length - 1].breakAfter = 1)
              : (this.breakAtStart = 1),
            this.flushBuffer([]),
            (this.curLine = null),
            e--
          continue
        } else (this.text = r), (this.textOff = 0)
      }
      let s = Math.min(this.text.length - this.textOff, e, 512)
      this.flushBuffer(t.slice(0, i)),
        this.getLine().append(ni(new ze(this.text.slice(this.textOff, this.textOff + s)), t), i),
        (this.atCursorPos = !0),
        (this.textOff += s),
        (e -= s),
        (i = 0)
    }
  }
  span(e, t, i, s) {
    this.buildText(t - e, i, s), (this.pos = t), this.openStart < 0 && (this.openStart = s)
  }
  point(e, t, i, s, r, o) {
    if (this.disallowBlockEffectsFor[o] && i instanceof Ze) {
      if (i.block) throw new RangeError('Block decorations may not be specified via plugins')
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError(
          'Decorations that replace line breaks may not be specified via plugins'
        )
    }
    let l = t - e
    if (i instanceof Ze)
      if (i.block) {
        let { type: a } = i
        a == E.WidgetAfter && !this.posCovered() && this.getLine(),
          this.addBlockWidget(new Xe(i.widget || new nr('div'), l, a))
      } else {
        let a = Pe.create(i.widget || new nr('span'), l, l ? 0 : i.startSide),
          h = this.atCursorPos && !a.isEditable && r <= s.length && (e < t || i.startSide > 0),
          c = !a.isEditable && (e < t || i.startSide <= 0),
          f = this.getLine()
        this.pendingBuffer == 2 && !h && (this.pendingBuffer = 0),
          this.flushBuffer(s),
          h && (f.append(ni(new mt(1), s), r), (r = s.length + Math.max(0, r - s.length))),
          f.append(ni(a, s), r),
          (this.atCursorPos = c),
          (this.pendingBuffer = c ? (e < t ? 1 : 2) : 0)
      }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i)
    l &&
      (this.textOff + l <= this.text.length
        ? (this.textOff += l)
        : ((this.skip += l - (this.text.length - this.textOff)),
          (this.text = ''),
          (this.textOff = 0)),
      (this.pos = t)),
      this.openStart < 0 && (this.openStart = r)
  }
  static build(e, t, i, s, r) {
    let o = new xs(e, t, i, r)
    return (
      (o.openEnd = L.spans(s, t, i, o)),
      o.openStart < 0 && (o.openStart = o.openEnd),
      o.finish(o.openEnd),
      o
    )
  }
}
function ni(n, e) {
  for (let t of e) n = new Se(t, [n], n.length)
  return n
}
class nr extends Te {
  constructor(e) {
    super(), (this.tag = e)
  }
  eq(e) {
    return e.tag == this.tag
  }
  toDOM() {
    return document.createElement(this.tag)
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag
  }
}
const Uo = x.define(),
  Go = x.define(),
  Jo = x.define(),
  Yo = x.define(),
  jn = x.define(),
  Xo = x.define(),
  Qo = x.define({ combine: n => n.some(e => e) })
class Mi {
  constructor(e, t = 'nearest', i = 'nearest', s = 5, r = 5) {
    ;(this.range = e), (this.y = t), (this.x = i), (this.yMargin = s), (this.xMargin = r)
  }
  map(e) {
    return e.empty ? this : new Mi(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin)
  }
}
const sr = A.define({ map: (n, e) => n.map(e) })
function he(n, e, t) {
  let i = n.facet(Yo)
  i.length
    ? i[0](e)
    : window.onerror
    ? window.onerror(String(e), t, void 0, void 0, e)
    : t
    ? console.error(t + ':', e)
    : console.error(e)
}
const Gi = x.define({ combine: n => (n.length ? n[0] : !0) })
let Ih = 0
const Dt = x.define()
class W {
  constructor(e, t, i, s) {
    ;(this.id = e), (this.create = t), (this.domEventHandlers = i), (this.extension = s(this))
  }
  static define(e, t) {
    const { eventHandlers: i, provide: s, decorations: r } = t || {}
    return new W(Ih++, e, i, o => {
      let l = [Dt.of(o)]
      return (
        r &&
          l.push(
            qt.of(a => {
              let h = a.plugin(o)
              return h ? r(h) : k.none
            })
          ),
        s && l.push(s(o)),
        l
      )
    })
  }
  static fromClass(e, t) {
    return W.define(i => new e(i), t)
  }
}
class ln {
  constructor(e) {
    ;(this.spec = e), (this.mustUpdate = null), (this.value = null)
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate
        if (((this.mustUpdate = null), this.value.update))
          try {
            this.value.update(t)
          } catch (i) {
            if ((he(t.state, i, 'CodeMirror plugin crashed'), this.value.destroy))
              try {
                this.value.destroy()
              } catch {}
            this.deactivate()
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(e)
      } catch (t) {
        he(e.state, t, 'CodeMirror plugin crashed'), this.deactivate()
      }
    return this
  }
  destroy(e) {
    var t
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy()
      } catch (i) {
        he(e.state, i, 'CodeMirror plugin crashed')
      }
  }
  deactivate() {
    this.spec = this.value = null
  }
}
const Zo = x.define(),
  _o = x.define(),
  qt = x.define(),
  el = x.define(),
  tl = x.define(),
  Tt = x.define()
class Me {
  constructor(e, t, i, s) {
    ;(this.fromA = e), (this.toA = t), (this.fromB = i), (this.toB = s)
  }
  join(e) {
    return new Me(
      Math.min(this.fromA, e.fromA),
      Math.max(this.toA, e.toA),
      Math.min(this.fromB, e.fromB),
      Math.max(this.toB, e.toB)
    )
  }
  addToSet(e) {
    let t = e.length,
      i = this
    for (; t > 0; t--) {
      let s = e[t - 1]
      if (!(s.fromA > i.toA)) {
        if (s.toA < i.fromA) break
        ;(i = i.join(s)), e.splice(t - 1, 1)
      }
    }
    return e.splice(t, 0, i), e
  }
  static extendWithRanges(e, t) {
    if (t.length == 0) return e
    let i = []
    for (let s = 0, r = 0, o = 0, l = 0; ; s++) {
      let a = s == e.length ? null : e[s],
        h = o - l,
        c = a ? a.fromB : 1e9
      for (; r < t.length && t[r] < c; ) {
        let f = t[r],
          u = t[r + 1],
          d = Math.max(l, f),
          p = Math.min(c, u)
        if ((d <= p && new Me(d + h, p + h, d, p).addToSet(i), u > c)) break
        r += 2
      }
      if (!a) return i
      new Me(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), (o = a.toA), (l = a.toB)
    }
  }
}
class Di {
  constructor(e, t, i) {
    ;(this.view = e),
      (this.state = t),
      (this.transactions = i),
      (this.flags = 0),
      (this.startState = e.state),
      (this.changes = z.empty(this.startState.doc.length))
    for (let o of i) this.changes = this.changes.compose(o.changes)
    let s = []
    this.changes.iterChangedRanges((o, l, a, h) => s.push(new Me(o, l, a, h))),
      (this.changedRanges = s)
    let r = e.hasFocus
    r != e.inputState.notifiedFocused && ((e.inputState.notifiedFocused = r), (this.flags |= 1))
  }
  static create(e, t, i) {
    return new Di(e, t, i)
  }
  get viewportChanged() {
    return (this.flags & 4) > 0
  }
  get heightChanged() {
    return (this.flags & 2) > 0
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 10) > 0
  }
  get focusChanged() {
    return (this.flags & 1) > 0
  }
  get docChanged() {
    return !this.changes.empty
  }
  get selectionSet() {
    return this.transactions.some(e => e.selection)
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0
  }
}
var F = (function (n) {
  return (n[(n.LTR = 0)] = 'LTR'), (n[(n.RTL = 1)] = 'RTL'), n
})(F || (F = {}))
const Un = F.LTR,
  Nh = F.RTL
function il(n) {
  let e = []
  for (let t = 0; t < n.length; t++) e.push(1 << +n[t])
  return e
}
const Vh = il(
    '88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008'
  ),
  Fh = il(
    '4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333'
  ),
  Gn = Object.create(null),
  ye = []
for (let n of ['()', '[]', '{}']) {
  let e = n.charCodeAt(0),
    t = n.charCodeAt(1)
  ;(Gn[e] = t), (Gn[t] = -e)
}
function Hh(n) {
  return n <= 247
    ? Vh[n]
    : 1424 <= n && n <= 1524
    ? 2
    : 1536 <= n && n <= 1785
    ? Fh[n - 1536]
    : 1774 <= n && n <= 2220
    ? 4
    : 8192 <= n && n <= 8203
    ? 256
    : 64336 <= n && n <= 65023
    ? 4
    : n == 8204
    ? 256
    : 1
}
const Wh = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/
class ft {
  constructor(e, t, i) {
    ;(this.from = e), (this.to = t), (this.level = i)
  }
  get dir() {
    return this.level % 2 ? Nh : Un
  }
  side(e, t) {
    return (this.dir == t) == e ? this.to : this.from
  }
  static find(e, t, i, s) {
    let r = -1
    for (let o = 0; o < e.length; o++) {
      let l = e[o]
      if (l.from <= t && l.to >= t) {
        if (l.level == i) return o
        ;(r < 0 || (s != 0 ? (s < 0 ? l.from < t : l.to > t) : e[r].level > l.level)) && (r = o)
      }
    }
    if (r < 0) throw new RangeError('Index out of range')
    return r
  }
}
const V = []
function zh(n, e) {
  let t = n.length,
    i = e == Un ? 1 : 2,
    s = e == Un ? 2 : 1
  if (!n || (i == 1 && !Wh.test(n))) return nl(t)
  for (let o = 0, l = i, a = i; o < t; o++) {
    let h = Hh(n.charCodeAt(o))
    h == 512 ? (h = l) : h == 8 && a == 4 && (h = 16),
      (V[o] = h == 4 ? 2 : h),
      h & 7 && (a = h),
      (l = h)
  }
  for (let o = 0, l = i, a = i; o < t; o++) {
    let h = V[o]
    if (h == 128) o < t - 1 && l == V[o + 1] && l & 24 ? (h = V[o] = l) : (V[o] = 256)
    else if (h == 64) {
      let c = o + 1
      for (; c < t && V[c] == 64; ) c++
      let f = (o && l == 8) || (c < t && V[c] == 8) ? (a == 1 ? 1 : 8) : 256
      for (let u = o; u < c; u++) V[u] = f
      o = c - 1
    } else h == 8 && a == 1 && (V[o] = 1)
    ;(l = h), h & 7 && (a = h)
  }
  for (let o = 0, l = 0, a = 0, h, c, f; o < t; o++)
    if ((c = Gn[(h = n.charCodeAt(o))]))
      if (c < 0) {
        for (let u = l - 3; u >= 0; u -= 3)
          if (ye[u + 1] == -c) {
            let d = ye[u + 2],
              p = d & 2 ? i : d & 4 ? (d & 1 ? s : i) : 0
            p && (V[o] = V[ye[u]] = p), (l = u)
            break
          }
      } else {
        if (ye.length == 189) break
        ;(ye[l++] = o), (ye[l++] = h), (ye[l++] = a)
      }
    else if ((f = V[o]) == 2 || f == 1) {
      let u = f == i
      a = u ? 0 : 1
      for (let d = l - 3; d >= 0; d -= 3) {
        let p = ye[d + 2]
        if (p & 2) break
        if (u) ye[d + 2] |= 2
        else {
          if (p & 4) break
          ye[d + 2] |= 4
        }
      }
    }
  for (let o = 0; o < t; o++)
    if (V[o] == 256) {
      let l = o + 1
      for (; l < t && V[l] == 256; ) l++
      let a = (o ? V[o - 1] : i) == 1,
        h = (l < t ? V[l] : i) == 1,
        c = a == h ? (a ? 1 : 2) : i
      for (let f = o; f < l; f++) V[f] = c
      o = l - 1
    }
  let r = []
  if (i == 1)
    for (let o = 0; o < t; ) {
      let l = o,
        a = V[o++] != 1
      for (; o < t && a == (V[o] != 1); ) o++
      if (a)
        for (let h = o; h > l; ) {
          let c = h,
            f = V[--h] != 2
          for (; h > l && f == (V[h - 1] != 2); ) h--
          r.push(new ft(h, c, f ? 2 : 1))
        }
      else r.push(new ft(l, o, 0))
    }
  else
    for (let o = 0; o < t; ) {
      let l = o,
        a = V[o++] == 2
      for (; o < t && a == (V[o] == 2); ) o++
      r.push(new ft(l, o, a ? 1 : 2))
    }
  return r
}
function nl(n) {
  return [new ft(0, n, 0)]
}
let sl = ''
function qh(n, e, t, i, s) {
  var r
  let o = i.head - n.from,
    l = -1
  if (o == 0) {
    if (!s || !n.length) return null
    e[0].level != t && ((o = e[0].side(!1, t)), (l = 0))
  } else if (o == n.length) {
    if (s) return null
    let u = e[e.length - 1]
    u.level != t && ((o = u.side(!0, t)), (l = e.length - 1))
  }
  l < 0 && (l = ft.find(e, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc))
  let a = e[l]
  o == a.side(s, t) && ((a = e[(l += s ? 1 : -1)]), (o = a.side(!s, t)))
  let h = s == (a.dir == t),
    c = Z(n.text, o, h)
  if (((sl = n.text.slice(Math.min(o, c), Math.max(o, c))), c != a.side(s, t)))
    return y.cursor(c + n.from, h ? -1 : 1, a.level)
  let f = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)]
  return !f && a.level != t
    ? y.cursor(s ? n.to : n.from, s ? -1 : 1, t)
    : f && f.level < a.level
    ? y.cursor(f.side(!s, t) + n.from, s ? 1 : -1, f.level)
    : y.cursor(c + n.from, s ? -1 : 1, a.level)
}
const Ie = '\uFFFF'
class rl {
  constructor(e, t) {
    ;(this.points = e), (this.text = ''), (this.lineSeparator = t.facet(O.lineSeparator))
  }
  append(e) {
    this.text += e
  }
  lineBreak() {
    this.text += Ie
  }
  readRange(e, t) {
    if (!e) return this
    let i = e.parentNode
    for (let s = e; ; ) {
      this.findPointBefore(i, s), this.readNode(s)
      let r = s.nextSibling
      if (r == t) break
      let o = I.get(s),
        l = I.get(r)
      ;(o && l
        ? o.breakAfter
        : (o ? o.breakAfter : rr(s)) || (rr(r) && (s.nodeName != 'BR' || s.cmIgnore))) &&
        this.lineBreak(),
        (s = r)
    }
    return this.findPointBefore(i, t), this
  }
  readTextNode(e) {
    let t = e.nodeValue
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length))
    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1,
        o = 1,
        l
      if (
        (this.lineSeparator
          ? ((r = t.indexOf(this.lineSeparator, i)), (o = this.lineSeparator.length))
          : (l = s.exec(t)) && ((r = l.index), (o = l[0].length)),
        this.append(t.slice(i, r < 0 ? t.length : r)),
        r < 0)
      )
        break
      if ((this.lineBreak(), o > 1))
        for (let a of this.points) a.node == e && a.pos > this.text.length && (a.pos -= o - 1)
      i = r + o
    }
  }
  readNode(e) {
    if (e.cmIgnore) return
    let t = I.get(e),
      i = t && t.overrideDOMText
    if (i != null) {
      this.findPointInside(e, i.length)
      for (let s = i.iter(); !s.next().done; ) s.lineBreak ? this.lineBreak() : this.append(s.value)
    } else
      e.nodeType == 3
        ? this.readTextNode(e)
        : e.nodeName == 'BR'
        ? e.nextSibling && this.lineBreak()
        : e.nodeType == 1 && this.readRange(e.firstChild, null)
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length)
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) &&
        (i.pos = this.text.length + Math.min(t, i.offset))
  }
}
function rr(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName)
}
class or {
  constructor(e, t) {
    ;(this.node = e), (this.offset = t), (this.pos = -1)
  }
}
class lr extends I {
  constructor(e) {
    super(),
      (this.view = e),
      (this.compositionDeco = k.none),
      (this.decorations = []),
      (this.dynamicDecorationMap = []),
      (this.minWidth = 0),
      (this.minWidthFrom = 0),
      (this.minWidthTo = 0),
      (this.impreciseAnchor = null),
      (this.impreciseHead = null),
      (this.forceSelection = !1),
      (this.lastUpdate = Date.now()),
      this.setDOM(e.contentDOM),
      (this.children = [new _()]),
      this.children[0].setParent(this),
      this.updateDeco(),
      this.updateInner([new Me(0, 0, 0, e.state.doc.length)], 0)
  }
  get editorView() {
    return this.view
  }
  get length() {
    return this.view.state.doc.length
  }
  update(e) {
    let t = e.changedRanges
    this.minWidth > 0 &&
      t.length &&
      (t.every(({ fromA: o, toA: l }) => l < this.minWidthFrom || o > this.minWidthTo)
        ? ((this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1)),
          (this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)))
        : (this.minWidth = this.minWidthFrom = this.minWidthTo = 0)),
      this.view.inputState.composing < 0
        ? (this.compositionDeco = k.none)
        : (e.transactions.length || this.dirty) &&
          (this.compositionDeco = Kh(this.view, e.changes)),
      (w.ie || w.chrome) &&
        !this.compositionDeco.size &&
        e &&
        e.state.doc.lines != e.startState.doc.lines &&
        (this.forceSelection = !0)
    let i = this.decorations,
      s = this.updateDeco(),
      r = Jh(i, s, e.changes)
    return (
      (t = Me.extendWithRanges(t, r)),
      this.dirty == 0 && t.length == 0
        ? !1
        : (this.updateInner(t, e.startState.doc.length),
          e.transactions.length && (this.lastUpdate = Date.now()),
          !0)
    )
  }
  updateInner(e, t) {
    ;(this.view.viewState.mustMeasureContent = !0), this.updateChildren(e, t)
    let { observer: i } = this.view
    i.ignore(() => {
      ;(this.dom.style.height = this.view.viewState.contentHeight + 'px'),
        (this.dom.style.flexBasis = this.minWidth ? this.minWidth + 'px' : '')
      let r = w.chrome || w.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0
      this.sync(r),
        (this.dirty = 0),
        r && (r.written || i.selectionRange.focusNode != r.node) && (this.forceSelection = !0),
        (this.dom.style.height = '')
    })
    let s = []
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let r of this.children) r instanceof Xe && r.widget instanceof ar && s.push(r.dom)
    i.updateGaps(s)
  }
  updateChildren(e, t) {
    let i = this.childCursor(t)
    for (let s = e.length - 1; ; s--) {
      let r = s >= 0 ? e[s] : null
      if (!r) break
      let { fromA: o, toA: l, fromB: a, toB: h } = r,
        {
          content: c,
          breakAtStart: f,
          openStart: u,
          openEnd: d
        } = xs.build(this.view.state.doc, a, h, this.decorations, this.dynamicDecorationMap),
        { i: p, off: g } = i.findPos(l, 1),
        { i: m, off: b } = i.findPos(o, -1)
      No(this, m, b, p, g, c, f, u, d)
    }
  }
  updateSelection(e = !1, t = !1) {
    if (
      ((e || !this.view.observer.selectionRange.focusNode) &&
        this.view.observer.readSelectionRange(),
      !(t || this.mayControlSelection()))
    )
      return
    let i = this.forceSelection
    this.forceSelection = !1
    let s = this.view.state.selection.main,
      r = this.domAtPos(s.anchor),
      o = s.empty ? r : this.domAtPos(s.head)
    if (w.gecko && s.empty && $h(r)) {
      let a = document.createTextNode('')
      this.view.observer.ignore(() => r.node.insertBefore(a, r.node.childNodes[r.offset] || null)),
        (r = o = new J(a, 0)),
        (i = !0)
    }
    let l = this.view.observer.selectionRange
    ;(i ||
      !l.focusNode ||
      !Ci(r.node, r.offset, l.anchorNode, l.anchorOffset) ||
      !Ci(o.node, o.offset, l.focusNode, l.focusOffset)) &&
      (this.view.observer.ignore(() => {
        w.android &&
          w.chrome &&
          this.dom.contains(l.focusNode) &&
          Yh(l.focusNode, this.dom) &&
          (this.dom.blur(), this.dom.focus({ preventScroll: !0 }))
        let a = Si(this.view.root)
        if (a)
          if (s.empty) {
            if (w.gecko) {
              let h = Uh(r.node, r.offset)
              if (h && h != 3) {
                let c = ll(r.node, r.offset, h == 1 ? 1 : -1)
                c && (r = new J(c, h == 1 ? 0 : c.nodeValue.length))
              }
            }
            a.collapse(r.node, r.offset),
              s.bidiLevel != null && l.cursorBidiLevel != null && (l.cursorBidiLevel = s.bidiLevel)
          } else if (a.extend) {
            a.collapse(r.node, r.offset)
            try {
              a.extend(o.node, o.offset)
            } catch {}
          } else {
            let h = document.createRange()
            s.anchor > s.head && ([r, o] = [o, r]),
              h.setEnd(o.node, o.offset),
              h.setStart(r.node, r.offset),
              a.removeAllRanges(),
              a.addRange(h)
          }
      }),
      this.view.observer.setSelectionRange(r, o)),
      (this.impreciseAnchor = r.precise ? null : new J(l.anchorNode, l.anchorOffset)),
      (this.impreciseHead = o.precise ? null : new J(l.focusNode, l.focusOffset))
  }
  enforceCursorAssoc() {
    if (this.compositionDeco.size) return
    let e = this.view.state.selection.main,
      t = Si(this.view.root)
    if (!t || !e.empty || !e.assoc || !t.modify) return
    let i = _.find(this, e.head)
    if (!i) return
    let s = i.posAtStart
    if (e.head == s || e.head == s + i.length) return
    let r = this.coordsAt(e.head, -1),
      o = this.coordsAt(e.head, 1)
    if (!r || !o || r.bottom > o.top) return
    let l = this.domAtPos(e.head + e.assoc)
    t.collapse(l.node, l.offset),
      t.modify('move', e.assoc < 0 ? 'forward' : 'backward', 'lineboundary')
  }
  mayControlSelection() {
    let e = this.view.root.activeElement
    return (
      e == this.dom ||
      (yi(this.dom, this.view.observer.selectionRange) && !(e && this.dom.contains(e)))
    )
  }
  nearest(e) {
    for (let t = e; t; ) {
      let i = I.get(t)
      if (i && i.rootView == this) return i
      t = t.parentNode
    }
    return null
  }
  posFromDOM(e, t) {
    let i = this.nearest(e)
    if (!i)
      throw new RangeError('Trying to find position for a DOM position outside of the document')
    return i.localPosFromDOM(e, t) + i.posAtStart
  }
  domAtPos(e) {
    let { i: t, off: i } = this.childCursor().findPos(e, -1)
    for (; t < this.children.length - 1; ) {
      let s = this.children[t]
      if (i < s.length || s instanceof _) break
      t++, (i = 0)
    }
    return this.children[t].domAtPos(i)
  }
  coordsAt(e, t) {
    for (let i = this.length, s = this.children.length - 1; ; s--) {
      let r = this.children[s],
        o = i - r.breakAfter - r.length
      if (
        e > o ||
        (e == o &&
          r.type != E.WidgetBefore &&
          r.type != E.WidgetAfter &&
          (!s ||
            t == 2 ||
            this.children[s - 1].breakAfter ||
            (this.children[s - 1].type == E.WidgetBefore && t > -2)))
      )
        return r.coordsAt(e - o, t)
      i = o
    }
  }
  measureVisibleLineHeights(e) {
    let t = [],
      { from: i, to: s } = e,
      r = this.view.contentDOM.clientWidth,
      o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
      l = -1,
      a = this.view.textDirection == F.LTR
    for (let h = 0, c = 0; c < this.children.length; c++) {
      let f = this.children[c],
        u = h + f.length
      if (u > s) break
      if (h >= i) {
        let d = f.dom.getBoundingClientRect()
        if ((t.push(d.height), o)) {
          let p = f.dom.lastChild,
            g = p ? Wt(p) : []
          if (g.length) {
            let m = g[g.length - 1],
              b = a ? m.right - d.left : d.right - m.left
            b > l && ((l = b), (this.minWidth = r), (this.minWidthFrom = h), (this.minWidthTo = u))
          }
        }
      }
      h = u + f.breakAfter
    }
    return t
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1)
    return getComputedStyle(this.children[t].dom).direction == 'rtl' ? F.RTL : F.LTR
  }
  measureTextSize() {
    for (let s of this.children)
      if (s instanceof _) {
        let r = s.measureTextSize()
        if (r) return r
      }
    let e = document.createElement('div'),
      t,
      i
    return (
      (e.className = 'cm-line'),
      (e.style.width = '99999px'),
      (e.textContent = 'abc def ghi jkl mno pqr stu'),
      this.view.observer.ignore(() => {
        this.dom.appendChild(e)
        let s = Wt(e.firstChild)[0]
        ;(t = e.getBoundingClientRect().height), (i = s ? s.width / 27 : 7), e.remove()
      }),
      { lineHeight: t, charWidth: i }
    )
  }
  childCursor(e = this.length) {
    let t = this.children.length
    return t && (e -= this.children[--t].length), new Io(this.children, e, t)
  }
  computeBlockGapDeco() {
    let e = [],
      t = this.view.viewState
    for (let i = 0, s = 0; ; s++) {
      let r = s == t.viewports.length ? null : t.viewports[s],
        o = r ? r.from - 1 : this.length
      if (o > i) {
        let l = t.lineBlockAt(o).bottom - t.lineBlockAt(i).top
        e.push(
          k.replace({ widget: new ar(l), block: !0, inclusive: !0, isBlockGap: !0 }).range(i, o)
        )
      }
      if (!r) break
      i = r.to + 1
    }
    return k.set(e)
  }
  updateDeco() {
    let e = this.view.state
      .facet(qt)
      .map((t, i) => ((this.dynamicDecorationMap[i] = typeof t == 'function') ? t(this.view) : t))
    for (let t = e.length; t < e.length + 3; t++) this.dynamicDecorationMap[t] = !1
    return (this.decorations = [
      ...e,
      this.compositionDeco,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ])
  }
  scrollIntoView(e) {
    let { range: t } = e,
      i = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1),
      s
    if (!i) return
    !t.empty &&
      (s = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) &&
      (i = {
        left: Math.min(i.left, s.left),
        top: Math.min(i.top, s.top),
        right: Math.max(i.right, s.right),
        bottom: Math.max(i.bottom, s.bottom)
      })
    let r = 0,
      o = 0,
      l = 0,
      a = 0
    for (let c of this.view.state.facet(tl).map(f => f(this.view)))
      if (c) {
        let { left: f, right: u, top: d, bottom: p } = c
        f != null && (r = Math.max(r, f)),
          u != null && (o = Math.max(o, u)),
          d != null && (l = Math.max(l, d)),
          p != null && (a = Math.max(a, p))
      }
    let h = { left: i.left - r, top: i.top - l, right: i.right + o, bottom: i.bottom + a }
    Dh(
      this.view.scrollDOM,
      h,
      t.head < t.anchor ? -1 : 1,
      e.x,
      e.y,
      e.xMargin,
      e.yMargin,
      this.view.textDirection == F.LTR
    )
  }
}
function $h(n) {
  return (
    n.node.nodeType == 1 &&
    n.node.firstChild &&
    (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == 'false') &&
    (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == 'false')
  )
}
class ar extends Te {
  constructor(e) {
    super(), (this.height = e)
  }
  toDOM() {
    let e = document.createElement('div')
    return this.updateDOM(e), e
  }
  eq(e) {
    return e.height == this.height
  }
  updateDOM(e) {
    return (e.style.height = this.height + 'px'), !0
  }
  get estimatedHeight() {
    return this.height
  }
}
function ol(n) {
  let e = n.observer.selectionRange,
    t = e.focusNode && ll(e.focusNode, e.focusOffset, 0)
  if (!t) return null
  let i = n.docView.nearest(t)
  if (!i) return null
  if (i instanceof _) {
    let s = t
    for (; s.parentNode != i.dom; ) s = s.parentNode
    let r = s.previousSibling
    for (; r && !I.get(r); ) r = r.previousSibling
    let o = r ? I.get(r).posAtEnd : i.posAtStart
    return { from: o, to: o, node: s, text: t }
  } else {
    for (;;) {
      let { parent: r } = i
      if (!r) return null
      if (r instanceof _) break
      i = r
    }
    let s = i.posAtStart
    return { from: s, to: s + i.length, node: i.dom, text: t }
  }
}
function Kh(n, e) {
  let t = ol(n)
  if (!t) return k.none
  let { from: i, to: s, node: r, text: o } = t,
    l = e.mapPos(i, 1),
    a = Math.max(l, e.mapPos(s, -1)),
    { state: h } = n,
    c = r.nodeType == 3 ? r.nodeValue : new rl([], h).readRange(r.firstChild, null).text
  if (a - l < c.length)
    if (h.doc.sliceString(l, Math.min(h.doc.length, l + c.length), Ie) == c) a = l + c.length
    else if (h.doc.sliceString(Math.max(0, a - c.length), a, Ie) == c) l = a - c.length
    else return k.none
  else if (h.doc.sliceString(l, a, Ie) != c) return k.none
  let f = I.get(r)
  return (
    f instanceof Wo ? (f = f.widget.topView) : f && (f.parent = null),
    k.set(k.replace({ widget: new jh(r, o, f), inclusive: !0 }).range(l, a))
  )
}
class jh extends Te {
  constructor(e, t, i) {
    super(), (this.top = e), (this.text = t), (this.topView = i)
  }
  eq(e) {
    return this.top == e.top && this.text == e.text
  }
  toDOM() {
    return this.top
  }
  ignoreEvent() {
    return !1
  }
  get customView() {
    return Wo
  }
}
function ll(n, e, t) {
  for (;;) {
    if (n.nodeType == 3) return n
    if (n.nodeType == 1 && e > 0 && t <= 0) (n = n.childNodes[e - 1]), (e = zt(n))
    else if (n.nodeType == 1 && e < n.childNodes.length && t >= 0) (n = n.childNodes[e]), (e = 0)
    else return null
  }
}
function Uh(n, e) {
  return n.nodeType != 1
    ? 0
    : (e && n.childNodes[e - 1].contentEditable == 'false' ? 1 : 0) |
        (e < n.childNodes.length && n.childNodes[e].contentEditable == 'false' ? 2 : 0)
}
class Gh {
  constructor() {
    this.changes = []
  }
  compareRange(e, t) {
    Kn(e, t, this.changes)
  }
  comparePoint(e, t) {
    Kn(e, t, this.changes)
  }
}
function Jh(n, e, t) {
  let i = new Gh()
  return L.compare(n, e, t, i), i.changes
}
function Yh(n, e) {
  for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == 'false') return !0
  return !1
}
function Xh(n, e, t = 1) {
  let i = n.charCategorizer(e),
    s = n.doc.lineAt(e),
    r = e - s.from
  if (s.length == 0) return y.cursor(e)
  r == 0 ? (t = 1) : r == s.length && (t = -1)
  let o = r,
    l = r
  t < 0 ? (o = Z(s.text, r, !1)) : (l = Z(s.text, r))
  let a = i(s.text.slice(o, l))
  for (; o > 0; ) {
    let h = Z(s.text, o, !1)
    if (i(s.text.slice(h, o)) != a) break
    o = h
  }
  for (; l < s.length; ) {
    let h = Z(s.text, l)
    if (i(s.text.slice(l, h)) != a) break
    l = h
  }
  return y.range(o + s.from, l + s.from)
}
function Qh(n, e) {
  return e.left > n ? e.left - n : Math.max(0, n - e.right)
}
function Zh(n, e) {
  return e.top > n ? e.top - n : Math.max(0, n - e.bottom)
}
function an(n, e) {
  return n.top < e.bottom - 1 && n.bottom > e.top + 1
}
function hr(n, e) {
  return e < n.top ? { top: e, left: n.left, right: n.right, bottom: n.bottom } : n
}
function cr(n, e) {
  return e > n.bottom ? { top: n.top, left: n.left, right: n.right, bottom: e } : n
}
function Jn(n, e, t) {
  let i,
    s,
    r,
    o,
    l = !1,
    a,
    h,
    c,
    f
  for (let p = n.firstChild; p; p = p.nextSibling) {
    let g = Wt(p)
    for (let m = 0; m < g.length; m++) {
      let b = g[m]
      s && an(s, b) && (b = hr(cr(b, s.bottom), s.top))
      let v = Qh(e, b),
        C = Zh(t, b)
      if (v == 0 && C == 0) return p.nodeType == 3 ? fr(p, e, t) : Jn(p, e, t)
      ;(!i || o > C || (o == C && r > v)) &&
        ((i = p), (s = b), (r = v), (o = C), (l = !v || (v > 0 ? m < g.length - 1 : m > 0))),
        v == 0
          ? t > b.bottom && (!c || c.bottom < b.bottom)
            ? ((a = p), (c = b))
            : t < b.top && (!f || f.top > b.top) && ((h = p), (f = b))
          : c && an(c, b)
          ? (c = cr(c, b.bottom))
          : f && an(f, b) && (f = hr(f, b.top))
    }
  }
  if ((c && c.bottom >= t ? ((i = a), (s = c)) : f && f.top <= t && ((i = h), (s = f)), !i))
    return { node: n, offset: 0 }
  let u = Math.max(s.left, Math.min(s.right, e))
  if (i.nodeType == 3) return fr(i, u, t)
  if (l && i.contentEditable != 'false') return Jn(i, u, t)
  let d = Array.prototype.indexOf.call(n.childNodes, i) + (e >= (s.left + s.right) / 2 ? 1 : 0)
  return { node: n, offset: d }
}
function fr(n, e, t) {
  let i = n.nodeValue.length,
    s = -1,
    r = 1e9,
    o = 0
  for (let l = 0; l < i; l++) {
    let a = pt(n, l, l + 1).getClientRects()
    for (let h = 0; h < a.length; h++) {
      let c = a[h]
      if (c.top == c.bottom) continue
      o || (o = e - c.left)
      let f = (c.top > t ? c.top - t : t - c.bottom) - 1
      if (c.left - 1 <= e && c.right + 1 >= e && f < r) {
        let u = e >= (c.left + c.right) / 2,
          d = u
        if (
          ((w.chrome || w.gecko) && pt(n, l).getBoundingClientRect().left == c.right && (d = !u),
          f <= 0)
        )
          return { node: n, offset: l + (d ? 1 : 0) }
        ;(s = l + (d ? 1 : 0)), (r = f)
      }
    }
  }
  return { node: n, offset: s > -1 ? s : o > 0 ? n.nodeValue.length : 0 }
}
function al(n, { x: e, y: t }, i, s = -1) {
  var r
  let o = n.contentDOM.getBoundingClientRect(),
    l = o.top + n.viewState.paddingTop,
    a,
    { docHeight: h } = n.viewState,
    c = t - l
  if (c < 0) return 0
  if (c > h) return n.state.doc.length
  for (let b = n.defaultLineHeight / 2, v = !1; (a = n.elementAtHeight(c)), a.type != E.Text; )
    for (; (c = s > 0 ? a.bottom + b : a.top - b), !(c >= 0 && c <= h); ) {
      if (v) return i ? null : 0
      ;(v = !0), (s = -s)
    }
  t = l + c
  let f = a.from
  if (f < n.viewport.from) return n.viewport.from == 0 ? 0 : i ? null : ur(n, o, a, e, t)
  if (f > n.viewport.to)
    return n.viewport.to == n.state.doc.length ? n.state.doc.length : i ? null : ur(n, o, a, e, t)
  let u = n.dom.ownerDocument,
    d = n.root.elementFromPoint ? n.root : u,
    p = d.elementFromPoint(e, t)
  p && !n.contentDOM.contains(p) && (p = null),
    p ||
      ((e = Math.max(o.left + 1, Math.min(o.right - 1, e))),
      (p = d.elementFromPoint(e, t)),
      p && !n.contentDOM.contains(p) && (p = null))
  let g,
    m = -1
  if (p && ((r = n.docView.nearest(p)) === null || r === void 0 ? void 0 : r.isEditable) != !1) {
    if (u.caretPositionFromPoint) {
      let b = u.caretPositionFromPoint(e, t)
      b && ({ offsetNode: g, offset: m } = b)
    } else if (u.caretRangeFromPoint) {
      let b = u.caretRangeFromPoint(e, t)
      b &&
        (({ startContainer: g, startOffset: m } = b),
        (!n.contentDOM.contains(g) || (w.safari && _h(g, m, e)) || (w.chrome && ec(g, m, e))) &&
          (g = void 0))
    }
  }
  if (!g || !n.docView.dom.contains(g)) {
    let b = _.find(n.docView, f)
    if (!b) return c > a.top + a.height / 2 ? a.to : a.from
    ;({ node: g, offset: m } = Jn(b.dom, e, t))
  }
  return n.docView.posFromDOM(g, m)
}
function ur(n, e, t, i, s) {
  let r = Math.round((i - e.left) * n.defaultCharacterWidth)
  if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
    let l = Math.floor((s - t.top) / n.defaultLineHeight)
    r += l * n.viewState.heightOracle.lineLength
  }
  let o = n.state.sliceDoc(t.from, t.to)
  return t.from + Nn(o, r, n.state.tabSize)
}
function _h(n, e, t) {
  let i
  if (n.nodeType != 3 || e != (i = n.nodeValue.length)) return !1
  for (let s = n.nextSibling; s; s = s.nextSibling)
    if (s.nodeType != 1 || s.nodeName != 'BR') return !1
  return pt(n, i - 1, i).getBoundingClientRect().left > t
}
function ec(n, e, t) {
  if (e != 0) return !1
  for (let s = n; ; ) {
    let r = s.parentNode
    if (!r || r.nodeType != 1 || r.firstChild != s) return !1
    if (r.classList.contains('cm-line')) break
    s = r
  }
  let i =
    n.nodeType == 1
      ? n.getBoundingClientRect()
      : pt(n, 0, Math.max(n.nodeValue.length, 1)).getBoundingClientRect()
  return t - i.left > 5
}
function tc(n, e, t, i) {
  let s = n.state.doc.lineAt(e.head),
    r =
      !i || !n.lineWrapping
        ? null
        : n.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head)
  if (r) {
    let a = n.dom.getBoundingClientRect(),
      h = n.textDirectionAt(s.from),
      c = n.posAtCoords({
        x: t == (h == F.LTR) ? a.right - 1 : a.left + 1,
        y: (r.top + r.bottom) / 2
      })
    if (c != null) return y.cursor(c, t ? -1 : 1)
  }
  let o = _.find(n.docView, e.head),
    l = o ? (t ? o.posAtEnd : o.posAtStart) : t ? s.to : s.from
  return y.cursor(l, t ? -1 : 1)
}
function dr(n, e, t, i) {
  let s = n.state.doc.lineAt(e.head),
    r = n.bidiSpans(s),
    o = n.textDirectionAt(s.from)
  for (let l = e, a = null; ; ) {
    let h = qh(s, r, o, l, t),
      c = sl
    if (!h) {
      if (s.number == (t ? n.state.doc.lines : 1)) return l
      ;(c = `
`),
        (s = n.state.doc.line(s.number + (t ? 1 : -1))),
        (r = n.bidiSpans(s)),
        (h = y.cursor(t ? s.from : s.to))
    }
    if (a) {
      if (!a(c)) return l
    } else {
      if (!i) return h
      a = i(c)
    }
    l = h
  }
}
function ic(n, e, t) {
  let i = n.state.charCategorizer(e),
    s = i(t)
  return r => {
    let o = i(r)
    return s == N.Space && (s = o), s == o
  }
}
function nc(n, e, t, i) {
  let s = e.head,
    r = t ? 1 : -1
  if (s == (t ? n.state.doc.length : 0)) return y.cursor(s, e.assoc)
  let o = e.goalColumn,
    l,
    a = n.contentDOM.getBoundingClientRect(),
    h = n.coordsAtPos(s),
    c = n.documentTop
  if (h) o == null && (o = h.left - a.left), (l = r < 0 ? h.top : h.bottom)
  else {
    let d = n.viewState.lineBlockAt(s)
    o == null && (o = Math.min(a.right - a.left, n.defaultCharacterWidth * (s - d.from))),
      (l = (r < 0 ? d.top : d.bottom) + c)
  }
  let f = a.left + o,
    u = i != null ? i : n.defaultLineHeight >> 1
  for (let d = 0; ; d += 10) {
    let p = l + (u + d) * r,
      g = al(n, { x: f, y: p }, !1, r)
    if (p < a.top || p > a.bottom || (r < 0 ? g < s : g > s)) return y.cursor(g, e.assoc, void 0, o)
  }
}
function hn(n, e, t) {
  let i = n.state.facet(el).map(s => s(n))
  for (;;) {
    let s = !1
    for (let r of i)
      r.between(t.from - 1, t.from + 1, (o, l, a) => {
        t.from > o &&
          t.from < l &&
          ((t = e.head > t.from ? y.cursor(o, 1) : y.cursor(l, -1)), (s = !0))
      })
    if (!s) return t
  }
}
class sc {
  constructor(e) {
    ;(this.lastKeyCode = 0),
      (this.lastKeyTime = 0),
      (this.lastTouchTime = 0),
      (this.lastFocusTime = 0),
      (this.lastScrollTop = 0),
      (this.lastScrollLeft = 0),
      (this.chromeScrollHack = -1),
      (this.pendingIOSKey = void 0),
      (this.lastSelectionOrigin = null),
      (this.lastSelectionTime = 0),
      (this.lastEscPress = 0),
      (this.lastContextMenu = 0),
      (this.scrollHandlers = []),
      (this.registeredEvents = []),
      (this.customHandlers = []),
      (this.composing = -1),
      (this.compositionFirstChange = null),
      (this.compositionEndedAt = 0),
      (this.mouseSelection = null)
    for (let t in $) {
      let i = $[t]
      e.contentDOM.addEventListener(
        t,
        s => {
          !pr(e, s) ||
            this.ignoreDuringComposition(s) ||
            (t == 'keydown' && this.keydown(e, s)) ||
            (this.mustFlushObserver(s) && e.observer.forceFlush(),
            this.runCustomHandlers(t, e, s) ? s.preventDefault() : i(e, s))
        },
        Yn[t]
      ),
        this.registeredEvents.push(t)
    }
    w.chrome &&
      w.chrome_version == 102 &&
      e.scrollDOM.addEventListener(
        'wheel',
        () => {
          this.chromeScrollHack < 0
            ? (e.contentDOM.style.pointerEvents = 'none')
            : window.clearTimeout(this.chromeScrollHack),
            (this.chromeScrollHack = setTimeout(() => {
              ;(this.chromeScrollHack = -1), (e.contentDOM.style.pointerEvents = '')
            }, 100))
        },
        { passive: !0 }
      ),
      (this.notifiedFocused = e.hasFocus),
      w.safari && e.contentDOM.addEventListener('input', () => null)
  }
  setSelectionOrigin(e) {
    ;(this.lastSelectionOrigin = e), (this.lastSelectionTime = Date.now())
  }
  ensureHandlers(e, t) {
    var i
    let s
    this.customHandlers = []
    for (let r of t)
      if ((s = (i = r.update(e).spec) === null || i === void 0 ? void 0 : i.domEventHandlers)) {
        this.customHandlers.push({ plugin: r.value, handlers: s })
        for (let o in s)
          this.registeredEvents.indexOf(o) < 0 &&
            o != 'scroll' &&
            (this.registeredEvents.push(o),
            e.contentDOM.addEventListener(o, l => {
              !pr(e, l) || (this.runCustomHandlers(o, e, l) && l.preventDefault())
            }))
      }
  }
  runCustomHandlers(e, t, i) {
    for (let s of this.customHandlers) {
      let r = s.handlers[e]
      if (r)
        try {
          if (r.call(s.plugin, i, t) || i.defaultPrevented) return !0
        } catch (o) {
          he(t.state, o)
        }
    }
    return !1
  }
  runScrollHandlers(e, t) {
    ;(this.lastScrollTop = e.scrollDOM.scrollTop), (this.lastScrollLeft = e.scrollDOM.scrollLeft)
    for (let i of this.customHandlers) {
      let s = i.handlers.scroll
      if (s)
        try {
          s.call(i.plugin, t, e)
        } catch (r) {
          he(e.state, r)
        }
    }
  }
  keydown(e, t) {
    if (
      ((this.lastKeyCode = t.keyCode),
      (this.lastKeyTime = Date.now()),
      t.keyCode == 9 && Date.now() < this.lastEscPress + 2e3)
    )
      return !0
    if (w.android && w.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8))
      return e.observer.delayAndroidKey(t.key, t.keyCode), !0
    let i
    return w.ios &&
      !t.synthetic &&
      !t.altKey &&
      !t.metaKey &&
      (((i = hl.find(s => s.keyCode == t.keyCode)) && !t.ctrlKey) ||
        (rc.indexOf(t.key) > -1 && t.ctrlKey && !t.shiftKey))
      ? ((this.pendingIOSKey = i || t), setTimeout(() => this.flushIOSKey(e), 250), !0)
      : !1
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey
    return t ? ((this.pendingIOSKey = void 0), ct(e.contentDOM, t.key, t.keyCode)) : !1
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type)
      ? this.composing > 0
        ? !0
        : w.safari && !w.ios && Date.now() - this.compositionEndedAt < 100
        ? ((this.compositionEndedAt = 0), !0)
        : !1
      : !1
  }
  mustFlushObserver(e) {
    return e.type == 'keydown' && e.keyCode != 229
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), (this.mouseSelection = e)
  }
  update(e) {
    this.mouseSelection && this.mouseSelection.update(e),
      e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy()
  }
}
const hl = [
    { key: 'Backspace', keyCode: 8, inputType: 'deleteContentBackward' },
    { key: 'Enter', keyCode: 13, inputType: 'insertParagraph' },
    { key: 'Delete', keyCode: 46, inputType: 'deleteContentForward' }
  ],
  rc = 'dthko',
  cl = [16, 17, 18, 20, 91, 92, 224, 225]
class oc {
  constructor(e, t, i, s) {
    ;(this.view = e), (this.style = i), (this.mustSelect = s), (this.lastEvent = t)
    let r = e.contentDOM.ownerDocument
    r.addEventListener('mousemove', (this.move = this.move.bind(this))),
      r.addEventListener('mouseup', (this.up = this.up.bind(this))),
      (this.extend = t.shiftKey),
      (this.multiple = e.state.facet(O.allowMultipleSelections) && lc(e, t)),
      (this.dragMove = ac(e, t)),
      (this.dragging = hc(e, t) && pl(t) == 1 ? null : !1),
      this.dragging === !1 && (t.preventDefault(), this.select(t))
  }
  move(e) {
    if (e.buttons == 0) return this.destroy()
    this.dragging === !1 && this.select((this.lastEvent = e))
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent),
      this.dragging || e.preventDefault(),
      this.destroy()
  }
  destroy() {
    let e = this.view.contentDOM.ownerDocument
    e.removeEventListener('mousemove', this.move),
      e.removeEventListener('mouseup', this.up),
      (this.view.inputState.mouseSelection = null)
  }
  select(e) {
    let t = this.style.get(e, this.extend, this.multiple)
    ;(this.mustSelect ||
      !t.eq(this.view.state.selection) ||
      t.main.assoc != this.view.state.selection.main.assoc) &&
      this.view.dispatch({ selection: t, userEvent: 'select.pointer', scrollIntoView: !0 }),
      (this.mustSelect = !1)
  }
  update(e) {
    e.docChanged && this.dragging && (this.dragging = this.dragging.map(e.changes)),
      this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20)
  }
}
function lc(n, e) {
  let t = n.state.facet(Uo)
  return t.length ? t[0](e) : w.mac ? e.metaKey : e.ctrlKey
}
function ac(n, e) {
  let t = n.state.facet(Go)
  return t.length ? t[0](e) : w.mac ? !e.altKey : !e.ctrlKey
}
function hc(n, e) {
  let { main: t } = n.state.selection
  if (t.empty) return !1
  let i = Si(n.root)
  if (!i || i.rangeCount == 0) return !0
  let s = i.getRangeAt(0).getClientRects()
  for (let r = 0; r < s.length; r++) {
    let o = s[r]
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0
  }
  return !1
}
function pr(n, e) {
  if (!e.bubbles) return !0
  if (e.defaultPrevented) return !1
  for (let t = e.target, i; t != n.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || ((i = I.get(t)) && i.ignoreEvent(e))) return !1
  return !0
}
const $ = Object.create(null),
  Yn = Object.create(null),
  fl = (w.ie && w.ie_version < 15) || (w.ios && w.webkit_version < 604)
function cc(n) {
  let e = n.dom.parentNode
  if (!e) return
  let t = e.appendChild(document.createElement('textarea'))
  ;(t.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
    t.focus(),
    setTimeout(() => {
      n.focus(), t.remove(), ul(n, t.value)
    }, 50)
}
function ul(n, e) {
  let { state: t } = n,
    i,
    s = 1,
    r = t.toText(e),
    o = r.lines == t.selection.ranges.length
  if (Xn != null && t.selection.ranges.every(a => a.empty) && Xn == r.toString()) {
    let a = -1
    i = t.changeByRange(h => {
      let c = t.doc.lineAt(h.from)
      if (c.from == a) return { range: h }
      a = c.from
      let f = t.toText((o ? r.line(s++).text : e) + t.lineBreak)
      return { changes: { from: c.from, insert: f }, range: y.cursor(h.from + f.length) }
    })
  } else
    o
      ? (i = t.changeByRange(a => {
          let h = r.line(s++)
          return {
            changes: { from: a.from, to: a.to, insert: h.text },
            range: y.cursor(a.from + h.length)
          }
        }))
      : (i = t.replaceSelection(r))
  n.dispatch(i, { userEvent: 'input.paste', scrollIntoView: !0 })
}
$.keydown = (n, e) => {
  n.inputState.setSelectionOrigin('select'),
    e.keyCode == 27
      ? (n.inputState.lastEscPress = Date.now())
      : cl.indexOf(e.keyCode) < 0 && (n.inputState.lastEscPress = 0)
}
$.touchstart = (n, e) => {
  ;(n.inputState.lastTouchTime = Date.now()), n.inputState.setSelectionOrigin('select.pointer')
}
$.touchmove = n => {
  n.inputState.setSelectionOrigin('select.pointer')
}
Yn.touchstart = Yn.touchmove = { passive: !0 }
$.mousedown = (n, e) => {
  if ((n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3)) return
  let t = null
  for (let i of n.state.facet(Jo)) if (((t = i(n, e)), t)) break
  if ((!t && e.button == 0 && (t = dc(n, e)), t)) {
    let i = n.root.activeElement != n.contentDOM
    i && n.observer.ignore(() => Eo(n.contentDOM)),
      n.inputState.startMouseSelection(new oc(n, e, t, i))
  }
}
function mr(n, e, t, i) {
  if (i == 1) return y.cursor(e, t)
  if (i == 2) return Xh(n.state, e, t)
  {
    let s = _.find(n.docView, e),
      r = n.state.doc.lineAt(s ? s.posAtEnd : e),
      o = s ? s.posAtStart : r.from,
      l = s ? s.posAtEnd : r.to
    return l < n.state.doc.length && l == r.to && l++, y.range(o, l)
  }
}
let dl = (n, e) => n >= e.top && n <= e.bottom,
  gr = (n, e, t) => dl(e, t) && n >= t.left && n <= t.right
function fc(n, e, t, i) {
  let s = _.find(n.docView, e)
  if (!s) return 1
  let r = e - s.posAtStart
  if (r == 0) return 1
  if (r == s.length) return -1
  let o = s.coordsAt(r, -1)
  if (o && gr(t, i, o)) return -1
  let l = s.coordsAt(r, 1)
  return l && gr(t, i, l) ? 1 : o && dl(i, o) ? -1 : 1
}
function yr(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1)
  return { pos: t, bias: fc(n, t, e.clientX, e.clientY) }
}
const uc = w.ie && w.ie_version <= 11
let br = null,
  wr = 0,
  xr = 0
function pl(n) {
  if (!uc) return n.detail
  let e = br,
    t = xr
  return (
    (br = n),
    (xr = Date.now()),
    (wr =
      !e ||
      (t > Date.now() - 400 &&
        Math.abs(e.clientX - n.clientX) < 2 &&
        Math.abs(e.clientY - n.clientY) < 2)
        ? (wr + 1) % 3
        : 1)
  )
}
function dc(n, e) {
  let t = yr(n, e),
    i = pl(e),
    s = n.state.selection,
    r = t,
    o = e
  return {
    update(l) {
      l.docChanged && ((t.pos = l.changes.mapPos(t.pos)), (s = s.map(l.changes)), (o = null))
    },
    get(l, a, h) {
      let c
      o && l.clientX == o.clientX && l.clientY == o.clientY
        ? (c = r)
        : ((c = r = yr(n, l)), (o = l))
      let f = mr(n, c.pos, c.bias, i)
      if (t.pos != c.pos && !a) {
        let u = mr(n, t.pos, t.bias, i),
          d = Math.min(u.from, f.from),
          p = Math.max(u.to, f.to)
        f = d < f.from ? y.range(d, p) : y.range(p, d)
      }
      return a
        ? s.replaceRange(s.main.extend(f.from, f.to))
        : h && s.ranges.length > 1 && s.ranges.some(u => u.eq(f))
        ? pc(s, f)
        : h
        ? s.addRange(f)
        : y.create([f])
    }
  }
}
function pc(n, e) {
  for (let t = 0; ; t++)
    if (n.ranges[t].eq(e))
      return y.create(
        n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)),
        n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0)
      )
}
$.dragstart = (n, e) => {
  let {
      selection: { main: t }
    } = n.state,
    { mouseSelection: i } = n.inputState
  i && (i.dragging = t),
    e.dataTransfer &&
      (e.dataTransfer.setData('Text', n.state.sliceDoc(t.from, t.to)),
      (e.dataTransfer.effectAllowed = 'copyMove'))
}
function vr(n, e, t, i) {
  if (!t) return
  let s = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1)
  e.preventDefault()
  let { mouseSelection: r } = n.inputState,
    o = i && r && r.dragging && r.dragMove ? { from: r.dragging.from, to: r.dragging.to } : null,
    l = { from: s, insert: t },
    a = n.state.changes(o ? [o, l] : l)
  n.focus(),
    n.dispatch({
      changes: a,
      selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) },
      userEvent: o ? 'move.drop' : 'input.drop'
    })
}
$.drop = (n, e) => {
  if (!e.dataTransfer) return
  if (n.state.readOnly) return e.preventDefault()
  let t = e.dataTransfer.files
  if (t && t.length) {
    e.preventDefault()
    let i = Array(t.length),
      s = 0,
      r = () => {
        ++s == t.length && vr(n, e, i.filter(o => o != null).join(n.state.lineBreak), !1)
      }
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader()
      ;(l.onerror = r),
        (l.onload = () => {
          ;/[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r()
        }),
        l.readAsText(t[o])
    }
  } else vr(n, e, e.dataTransfer.getData('Text'), !0)
}
$.paste = (n, e) => {
  if (n.state.readOnly) return e.preventDefault()
  n.observer.flush()
  let t = fl ? null : e.clipboardData
  t ? (ul(n, t.getData('text/plain')), e.preventDefault()) : cc(n)
}
function mc(n, e) {
  let t = n.dom.parentNode
  if (!t) return
  let i = t.appendChild(document.createElement('textarea'))
  ;(i.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
    (i.value = e),
    i.focus(),
    (i.selectionEnd = e.length),
    (i.selectionStart = 0),
    setTimeout(() => {
      i.remove(), n.focus()
    }, 50)
}
function gc(n) {
  let e = [],
    t = [],
    i = !1
  for (let s of n.selection.ranges) s.empty || (e.push(n.sliceDoc(s.from, s.to)), t.push(s))
  if (!e.length) {
    let s = -1
    for (let { from: r } of n.selection.ranges) {
      let o = n.doc.lineAt(r)
      o.number > s &&
        (e.push(o.text), t.push({ from: o.from, to: Math.min(n.doc.length, o.to + 1) })),
        (s = o.number)
    }
    i = !0
  }
  return { text: e.join(n.lineBreak), ranges: t, linewise: i }
}
let Xn = null
$.copy = $.cut = (n, e) => {
  let { text: t, ranges: i, linewise: s } = gc(n.state)
  if (!t && !s) return
  Xn = s ? t : null
  let r = fl ? null : e.clipboardData
  r ? (e.preventDefault(), r.clearData(), r.setData('text/plain', t)) : mc(n, t),
    e.type == 'cut' &&
      !n.state.readOnly &&
      n.dispatch({ changes: i, scrollIntoView: !0, userEvent: 'delete.cut' })
}
function ml(n) {
  setTimeout(() => {
    n.hasFocus != n.inputState.notifiedFocused && n.update([])
  }, 10)
}
$.focus = n => {
  ;(n.inputState.lastFocusTime = Date.now()),
    !n.scrollDOM.scrollTop &&
      (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) &&
      ((n.scrollDOM.scrollTop = n.inputState.lastScrollTop),
      (n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft)),
    ml(n)
}
$.blur = n => {
  n.observer.clearSelectionRange(), ml(n)
}
$.compositionstart = $.compositionupdate = n => {
  n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = !0),
    n.inputState.composing < 0 && (n.inputState.composing = 0)
}
$.compositionend = n => {
  ;(n.inputState.composing = -1),
    (n.inputState.compositionEndedAt = Date.now()),
    (n.inputState.compositionFirstChange = null),
    w.chrome && w.android && n.observer.flushSoon(),
    setTimeout(() => {
      n.inputState.composing < 0 && n.docView.compositionDeco.size && n.update([])
    }, 50)
}
$.contextmenu = n => {
  n.inputState.lastContextMenu = Date.now()
}
$.beforeinput = (n, e) => {
  var t
  let i
  if (
    w.chrome &&
    w.android &&
    (i = hl.find(s => s.inputType == e.inputType)) &&
    (n.observer.delayAndroidKey(i.key, i.keyCode), i.key == 'Backspace' || i.key == 'Delete')
  ) {
    let s = ((t = window.visualViewport) === null || t === void 0 ? void 0 : t.height) || 0
    setTimeout(() => {
      var r
      ;(((r = window.visualViewport) === null || r === void 0 ? void 0 : r.height) || 0) > s + 10 &&
        n.hasFocus &&
        (n.contentDOM.blur(), n.focus())
    }, 100)
  }
}
const kr = ['pre-wrap', 'normal', 'pre-line', 'break-spaces']
class yc {
  constructor() {
    ;(this.doc = B.empty),
      (this.lineWrapping = !1),
      (this.heightSamples = {}),
      (this.lineHeight = 14),
      (this.charWidth = 7),
      (this.lineLength = 30),
      (this.heightChanged = !1)
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1
    return (
      this.lineWrapping && (i += Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength)),
      this.lineHeight * i
    )
  }
  heightForLine(e) {
    return this.lineWrapping
      ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) *
          this.lineHeight
      : this.lineHeight
  }
  setDoc(e) {
    return (this.doc = e), this
  }
  mustRefreshForWrapping(e) {
    return kr.indexOf(e) > -1 != this.lineWrapping
  }
  mustRefreshForHeights(e) {
    let t = !1
    for (let i = 0; i < e.length; i++) {
      let s = e[i]
      s < 0
        ? i++
        : this.heightSamples[Math.floor(s * 10)] ||
          ((t = !0), (this.heightSamples[Math.floor(s * 10)] = !0))
    }
    return t
  }
  refresh(e, t, i, s, r) {
    let o = kr.indexOf(e) > -1,
      l = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != o
    if (
      ((this.lineWrapping = o),
      (this.lineHeight = t),
      (this.charWidth = i),
      (this.lineLength = s),
      l)
    ) {
      this.heightSamples = {}
      for (let a = 0; a < r.length; a++) {
        let h = r[a]
        h < 0 ? a++ : (this.heightSamples[Math.floor(h * 10)] = !0)
      }
    }
    return l
  }
}
class bc {
  constructor(e, t) {
    ;(this.from = e), (this.heights = t), (this.index = 0)
  }
  get more() {
    return this.index < this.heights.length
  }
}
class Ne {
  constructor(e, t, i, s, r) {
    ;(this.from = e), (this.length = t), (this.top = i), (this.height = s), (this.type = r)
  }
  get to() {
    return this.from + this.length
  }
  get bottom() {
    return this.top + this.height
  }
  join(e) {
    let t = (Array.isArray(this.type) ? this.type : [this]).concat(
      Array.isArray(e.type) ? e.type : [e]
    )
    return new Ne(this.from, this.length + e.length, this.top, this.height + e.height, t)
  }
}
var P = (function (n) {
  return (
    (n[(n.ByPos = 0)] = 'ByPos'),
    (n[(n.ByHeight = 1)] = 'ByHeight'),
    (n[(n.ByPosNoHeight = 2)] = 'ByPosNoHeight'),
    n
  )
})(P || (P = {}))
const bi = 0.001
class ie {
  constructor(e, t, i = 2) {
    ;(this.length = e), (this.height = t), (this.flags = i)
  }
  get outdated() {
    return (this.flags & 2) > 0
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | (this.flags & -3)
  }
  setHeight(e, t) {
    this.height != t &&
      (Math.abs(this.height - t) > bi && (e.heightChanged = !0), (this.height = t))
  }
  replace(e, t, i) {
    return ie.of(i)
  }
  decomposeLeft(e, t) {
    t.push(this)
  }
  decomposeRight(e, t) {
    t.push(this)
  }
  applyChanges(e, t, i, s) {
    let r = this
    for (let o = s.length - 1; o >= 0; o--) {
      let { fromA: l, toA: a, fromB: h, toB: c } = s[o],
        f = r.lineAt(l, P.ByPosNoHeight, t, 0, 0),
        u = f.to >= a ? f : r.lineAt(a, P.ByPosNoHeight, t, 0, 0)
      for (c += u.to - a, a = u.to; o > 0 && f.from <= s[o - 1].toA; )
        (l = s[o - 1].fromA),
          (h = s[o - 1].fromB),
          o--,
          l < f.from && (f = r.lineAt(l, P.ByPosNoHeight, t, 0, 0))
      ;(h += f.from - l), (l = f.from)
      let d = vs.build(i, e, h, c)
      r = r.replace(l, a, d)
    }
    return r.updateHeight(i, 0)
  }
  static empty() {
    return new re(0, 0)
  }
  static of(e) {
    if (e.length == 1) return e[0]
    let t = 0,
      i = e.length,
      s = 0,
      r = 0
    for (;;)
      if (t == i)
        if (s > r * 2) {
          let l = e[t - 1]
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right),
            (i += 1 + l.break),
            (s -= l.size)
        } else if (r > s * 2) {
          let l = e[i]
          l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right),
            (i += 2 + l.break),
            (r -= l.size)
        } else break
      else if (s < r) {
        let l = e[t++]
        l && (s += l.size)
      } else {
        let l = e[--i]
        l && (r += l.size)
      }
    let o = 0
    return (
      e[t - 1] == null ? ((o = 1), t--) : e[t] == null && ((o = 1), i++),
      new wc(ie.of(e.slice(0, t)), o, ie.of(e.slice(i)))
    )
  }
}
ie.prototype.size = 1
class gl extends ie {
  constructor(e, t, i) {
    super(e, t), (this.type = i)
  }
  blockAt(e, t, i, s) {
    return new Ne(s, this.length, i, this.height, this.type)
  }
  lineAt(e, t, i, s, r) {
    return this.blockAt(0, i, s, r)
  }
  forEachLine(e, t, i, s, r, o) {
    e <= r + this.length && t >= r && o(this.blockAt(0, i, s, r))
  }
  updateHeight(e, t = 0, i = !1, s) {
    return (
      s && s.from <= t && s.more && this.setHeight(e, s.heights[s.index++]),
      (this.outdated = !1),
      this
    )
  }
  toString() {
    return `block(${this.length})`
  }
}
class re extends gl {
  constructor(e, t) {
    super(e, t, E.Text), (this.collapsed = 0), (this.widgetHeight = 0)
  }
  replace(e, t, i) {
    let s = i[0]
    return i.length == 1 &&
      (s instanceof re || (s instanceof K && s.flags & 4)) &&
      Math.abs(this.length - s.length) < 10
      ? (s instanceof K ? (s = new re(s.length, this.height)) : (s.height = this.height),
        this.outdated || (s.outdated = !1),
        s)
      : ie.of(i)
  }
  updateHeight(e, t = 0, i = !1, s) {
    return (
      s && s.from <= t && s.more
        ? this.setHeight(e, s.heights[s.index++])
        : (i || this.outdated) &&
          this.setHeight(
            e,
            Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed))
          ),
      (this.outdated = !1),
      this
    )
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ''}${
      this.widgetHeight ? ':' + this.widgetHeight : ''
    })`
  }
}
class K extends ie {
  constructor(e) {
    super(e, 0)
  }
  lines(e, t) {
    let i = e.lineAt(t).number,
      s = e.lineAt(t + this.length).number
    return { firstLine: i, lastLine: s, lineHeight: this.height / (s - i + 1) }
  }
  blockAt(e, t, i, s) {
    let { firstLine: r, lastLine: o, lineHeight: l } = this.lines(t, s),
      a = Math.max(0, Math.min(o - r, Math.floor((e - i) / l))),
      { from: h, length: c } = t.line(r + a)
    return new Ne(h, c, i + l * a, l, E.Text)
  }
  lineAt(e, t, i, s, r) {
    if (t == P.ByHeight) return this.blockAt(e, i, s, r)
    if (t == P.ByPosNoHeight) {
      let { from: f, to: u } = i.lineAt(e)
      return new Ne(f, u - f, 0, 0, E.Text)
    }
    let { firstLine: o, lineHeight: l } = this.lines(i, r),
      { from: a, length: h, number: c } = i.lineAt(e)
    return new Ne(a, h, s + l * (c - o), l, E.Text)
  }
  forEachLine(e, t, i, s, r, o) {
    let { firstLine: l, lineHeight: a } = this.lines(i, r)
    for (let h = Math.max(e, r), c = Math.min(r + this.length, t); h <= c; ) {
      let f = i.lineAt(h)
      h == e && (s += a * (f.number - l)),
        o(new Ne(f.from, f.length, s, a, E.Text)),
        (s += a),
        (h = f.to + 1)
    }
  }
  replace(e, t, i) {
    let s = this.length - t
    if (s > 0) {
      let r = i[i.length - 1]
      r instanceof K ? (i[i.length - 1] = new K(r.length + s)) : i.push(null, new K(s - 1))
    }
    if (e > 0) {
      let r = i[0]
      r instanceof K ? (i[0] = new K(e + r.length)) : i.unshift(new K(e - 1), null)
    }
    return ie.of(i)
  }
  decomposeLeft(e, t) {
    t.push(new K(e - 1), null)
  }
  decomposeRight(e, t) {
    t.push(null, new K(this.length - e - 1))
  }
  updateHeight(e, t = 0, i = !1, s) {
    let r = t + this.length
    if (s && s.from <= t + this.length && s.more) {
      let o = [],
        l = Math.max(t, s.from),
        a = -1,
        h = e.heightChanged
      for (s.from > t && o.push(new K(s.from - t - 1).updateHeight(e, t)); l <= r && s.more; ) {
        let f = e.doc.lineAt(l).length
        o.length && o.push(null)
        let u = s.heights[s.index++]
        a == -1 ? (a = u) : Math.abs(u - a) >= bi && (a = -2)
        let d = new re(f, u)
        ;(d.outdated = !1), o.push(d), (l += f + 1)
      }
      l <= r && o.push(null, new K(r - l).updateHeight(e, l))
      let c = ie.of(o)
      return (
        (e.heightChanged =
          h ||
          a < 0 ||
          Math.abs(c.height - this.height) >= bi ||
          Math.abs(a - this.lines(e.doc, t).lineHeight) >= bi),
        c
      )
    } else
      (i || this.outdated) &&
        (this.setHeight(e, e.heightForGap(t, t + this.length)), (this.outdated = !1))
    return this
  }
  toString() {
    return `gap(${this.length})`
  }
}
class wc extends ie {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)),
      (this.left = e),
      (this.right = i),
      (this.size = e.size + i.size)
  }
  get break() {
    return this.flags & 1
  }
  blockAt(e, t, i, s) {
    let r = i + this.left.height
    return e < r
      ? this.left.blockAt(e, t, i, s)
      : this.right.blockAt(e, t, r, s + this.left.length + this.break)
  }
  lineAt(e, t, i, s, r) {
    let o = s + this.left.height,
      l = r + this.left.length + this.break,
      a = t == P.ByHeight ? e < o : e < l,
      h = a ? this.left.lineAt(e, t, i, s, r) : this.right.lineAt(e, t, i, o, l)
    if (this.break || (a ? h.to < l : h.from > l)) return h
    let c = t == P.ByPosNoHeight ? P.ByPosNoHeight : P.ByPos
    return a ? h.join(this.right.lineAt(l, c, i, o, l)) : this.left.lineAt(l, c, i, s, r).join(h)
  }
  forEachLine(e, t, i, s, r, o) {
    let l = s + this.left.height,
      a = r + this.left.length + this.break
    if (this.break)
      e < a && this.left.forEachLine(e, t, i, s, r, o),
        t >= a && this.right.forEachLine(e, t, i, l, a, o)
    else {
      let h = this.lineAt(a, P.ByPos, i, s, r)
      e < h.from && this.left.forEachLine(e, h.from - 1, i, s, r, o),
        h.to >= e && h.from <= t && o(h),
        t > h.to && this.right.forEachLine(h.to + 1, t, i, l, a, o)
    }
  }
  replace(e, t, i) {
    let s = this.left.length + this.break
    if (t < s) return this.balanced(this.left.replace(e, t, i), this.right)
    if (e > this.left.length) return this.balanced(this.left, this.right.replace(e - s, t - s, i))
    let r = []
    e > 0 && this.decomposeLeft(e, r)
    let o = r.length
    for (let l of i) r.push(l)
    if ((e > 0 && Sr(r, o - 1), t < this.length)) {
      let l = r.length
      this.decomposeRight(t, r), Sr(r, l)
    }
    return ie.of(r)
  }
  decomposeLeft(e, t) {
    let i = this.left.length
    if (e <= i) return this.left.decomposeLeft(e, t)
    t.push(this.left),
      this.break && (i++, e >= i && t.push(null)),
      e > i && this.right.decomposeLeft(e - i, t)
  }
  decomposeRight(e, t) {
    let i = this.left.length,
      s = i + this.break
    if (e >= s) return this.right.decomposeRight(e - s, t)
    e < i && this.left.decomposeRight(e, t), this.break && e < s && t.push(null), t.push(this.right)
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size
      ? ie.of(this.break ? [e, null, t] : [e, t])
      : ((this.left = e),
        (this.right = t),
        (this.height = e.height + t.height),
        (this.outdated = e.outdated || t.outdated),
        (this.size = e.size + t.size),
        (this.length = e.length + this.break + t.length),
        this)
  }
  updateHeight(e, t = 0, i = !1, s) {
    let { left: r, right: o } = this,
      l = t + r.length + this.break,
      a = null
    return (
      s && s.from <= t + r.length && s.more
        ? (a = r = r.updateHeight(e, t, i, s))
        : r.updateHeight(e, t, i),
      s && s.from <= l + o.length && s.more
        ? (a = o = o.updateHeight(e, l, i, s))
        : o.updateHeight(e, l, i),
      a
        ? this.balanced(r, o)
        : ((this.height = this.left.height + this.right.height), (this.outdated = !1), this)
    )
  }
  toString() {
    return this.left + (this.break ? ' ' : '-') + this.right
  }
}
function Sr(n, e) {
  let t, i
  n[e] == null &&
    (t = n[e - 1]) instanceof K &&
    (i = n[e + 1]) instanceof K &&
    n.splice(e - 1, 3, new K(t.length + 1 + i.length))
}
const xc = 5
class vs {
  constructor(e, t) {
    ;(this.pos = e),
      (this.oracle = t),
      (this.nodes = []),
      (this.lineStart = -1),
      (this.lineEnd = -1),
      (this.covering = null),
      (this.writtenTo = e)
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd),
        s = this.nodes[this.nodes.length - 1]
      s instanceof re
        ? (s.length += i - this.pos)
        : (i > this.pos || !this.isCovered) && this.nodes.push(new re(i - this.pos, -1)),
        (this.writtenTo = i),
        t > i && (this.nodes.push(null), this.writtenTo++, (this.lineStart = -1))
    }
    this.pos = t
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let s = i.widget ? i.widget.estimatedHeight : 0
      s < 0 && (s = this.oracle.lineHeight)
      let r = t - e
      i.block ? this.addBlock(new gl(r, s, i.type)) : (r || s >= xc) && this.addLineDeco(s, r)
    } else t > e && this.span(e, t)
    this.lineEnd > -1 &&
      this.lineEnd < this.pos &&
      (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
  }
  enterLine() {
    if (this.lineStart > -1) return
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos)
    ;(this.lineStart = e),
      (this.lineEnd = t),
      this.writtenTo < e &&
        ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) &&
          this.nodes.push(this.blankContent(this.writtenTo, e - 1)),
        this.nodes.push(null)),
      this.pos > e && this.nodes.push(new re(this.pos - e, -1)),
      (this.writtenTo = this.pos)
  }
  blankContent(e, t) {
    let i = new K(t - e)
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i
  }
  ensureLine() {
    this.enterLine()
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null
    if (e instanceof re) return e
    let t = new re(0, -1)
    return this.nodes.push(t), t
  }
  addBlock(e) {
    this.enterLine(),
      e.type == E.WidgetAfter && !this.isCovered && this.ensureLine(),
      this.nodes.push(e),
      (this.writtenTo = this.pos = this.pos + e.length),
      e.type != E.WidgetBefore && (this.covering = e)
  }
  addLineDeco(e, t) {
    let i = this.ensureLine()
    ;(i.length += t),
      (i.collapsed += t),
      (i.widgetHeight = Math.max(i.widgetHeight, e)),
      (this.writtenTo = this.pos = this.pos + t)
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1]
    this.lineStart > -1 && !(t instanceof re) && !this.isCovered
      ? this.nodes.push(new re(0, -1))
      : (this.writtenTo < this.pos || t == null) &&
        this.nodes.push(this.blankContent(this.writtenTo, this.pos))
    let i = e
    for (let s of this.nodes)
      s instanceof re && s.updateHeight(this.oracle, i), (i += s ? s.length : 1)
    return this.nodes
  }
  static build(e, t, i, s) {
    let r = new vs(i, e)
    return L.spans(t, i, s, r, 0), r.finish(i)
  }
}
function vc(n, e, t) {
  let i = new kc()
  return L.compare(n, e, t, i, 0), i.changes
}
class kc {
  constructor() {
    this.changes = []
  }
  compareRange() {}
  comparePoint(e, t, i, s) {
    ;(e < t || (i && i.heightRelevant) || (s && s.heightRelevant)) && Kn(e, t, this.changes, 5)
  }
}
function Sc(n, e) {
  let t = n.getBoundingClientRect(),
    i = n.ownerDocument,
    s = i.defaultView || window,
    r = Math.max(0, t.left),
    o = Math.min(s.innerWidth, t.right),
    l = Math.max(0, t.top),
    a = Math.min(s.innerHeight, t.bottom)
  for (let h = n.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let c = h,
        f = window.getComputedStyle(c)
      if (
        (c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) &&
        f.overflow != 'visible'
      ) {
        let u = c.getBoundingClientRect()
        ;(r = Math.max(r, u.left)),
          (o = Math.min(o, u.right)),
          (l = Math.max(l, u.top)),
          (a = h == n.parentNode ? u.bottom : Math.min(a, u.bottom))
      }
      h = f.position == 'absolute' || f.position == 'fixed' ? c.offsetParent : c.parentNode
    } else if (h.nodeType == 11) h = h.host
    else break
  return {
    left: r - t.left,
    right: Math.max(r, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e)
  }
}
function Cc(n, e) {
  let t = n.getBoundingClientRect()
  return { left: 0, right: t.right - t.left, top: e, bottom: t.bottom - (t.top + e) }
}
class cn {
  constructor(e, t, i) {
    ;(this.from = e), (this.to = t), (this.size = i)
  }
  static same(e, t) {
    if (e.length != t.length) return !1
    for (let i = 0; i < e.length; i++) {
      let s = e[i],
        r = t[i]
      if (s.from != r.from || s.to != r.to || s.size != r.size) return !1
    }
    return !0
  }
  draw(e) {
    return k.replace({ widget: new Ac(this.size, e) }).range(this.from, this.to)
  }
}
class Ac extends Te {
  constructor(e, t) {
    super(), (this.size = e), (this.vertical = t)
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical
  }
  toDOM() {
    let e = document.createElement('div')
    return (
      this.vertical
        ? (e.style.height = this.size + 'px')
        : ((e.style.width = this.size + 'px'),
          (e.style.height = '2px'),
          (e.style.display = 'inline-block')),
      e
    )
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1
  }
}
class Cr {
  constructor(e) {
    ;(this.state = e),
      (this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }),
      (this.inView = !0),
      (this.paddingTop = 0),
      (this.paddingBottom = 0),
      (this.contentDOMWidth = 0),
      (this.contentDOMHeight = 0),
      (this.editorHeight = 0),
      (this.editorWidth = 0),
      (this.heightOracle = new yc()),
      (this.scaler = Ar),
      (this.scrollTarget = null),
      (this.printing = !1),
      (this.mustMeasureContent = !0),
      (this.defaultTextDirection = F.RTL),
      (this.visibleRanges = []),
      (this.mustEnforceCursorAssoc = !1),
      (this.stateDeco = e.facet(qt).filter(t => typeof t != 'function')),
      (this.heightMap = ie
        .empty()
        .applyChanges(this.stateDeco, B.empty, this.heightOracle.setDoc(e.doc), [
          new Me(0, 0, 0, e.doc.length)
        ])),
      (this.viewport = this.getViewport(0, null)),
      this.updateViewportLines(),
      this.updateForViewport(),
      (this.lineGaps = this.ensureLineGaps([])),
      (this.lineGapDeco = k.set(this.lineGaps.map(t => t.draw(!1)))),
      this.computeVisibleRanges()
  }
  updateForViewport() {
    let e = [this.viewport],
      { main: t } = this.state.selection
    for (let i = 0; i <= 1; i++) {
      let s = i ? t.head : t.anchor
      if (!e.some(({ from: r, to: o }) => s >= r && s <= o)) {
        let { from: r, to: o } = this.lineBlockAt(s)
        e.push(new si(r, o))
      }
    }
    ;(this.viewports = e.sort((i, s) => i.from - s.from)),
      (this.scaler =
        this.heightMap.height <= 7e6
          ? Ar
          : new Tc(this.heightOracle.doc, this.heightMap, this.viewports))
  }
  updateViewportLines() {
    ;(this.viewportLines = []),
      this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.state.doc, 0, 0, e => {
        this.viewportLines.push(this.scaler.scale == 1 ? e : Ot(e, this.scaler))
      })
  }
  update(e, t = null) {
    this.state = e.state
    let i = this.stateDeco
    this.stateDeco = this.state.facet(qt).filter(h => typeof h != 'function')
    let s = e.changedRanges,
      r = Me.extendWithRanges(
        s,
        vc(i, this.stateDeco, e ? e.changes : z.empty(this.state.doc.length))
      ),
      o = this.heightMap.height
    ;(this.heightMap = this.heightMap.applyChanges(
      this.stateDeco,
      e.startState.doc,
      this.heightOracle.setDoc(this.state.doc),
      r
    )),
      this.heightMap.height != o && (e.flags |= 2)
    let l = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport
    ;((t && (t.range.head < l.from || t.range.head > l.to)) || !this.viewportIsAppropriate(l)) &&
      (l = this.getViewport(0, t))
    let a =
      !e.changes.empty || e.flags & 2 || l.from != this.viewport.from || l.to != this.viewport.to
    ;(this.viewport = l),
      this.updateForViewport(),
      a && this.updateViewportLines(),
      (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1) &&
        this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))),
      (e.flags |= this.computeVisibleRanges()),
      t && (this.scrollTarget = t),
      !this.mustEnforceCursorAssoc &&
        e.selectionSet &&
        e.view.lineWrapping &&
        e.state.selection.main.empty &&
        e.state.selection.main.assoc &&
        (this.mustEnforceCursorAssoc = !0)
  }
  measure(e) {
    let t = e.contentDOM,
      i = window.getComputedStyle(t),
      s = this.heightOracle,
      r = i.whiteSpace
    this.defaultTextDirection = i.direction == 'rtl' ? F.RTL : F.LTR
    let o = this.heightOracle.mustRefreshForWrapping(r),
      l = o || this.mustMeasureContent || this.contentDOMHeight != t.clientHeight
    ;(this.contentDOMHeight = t.clientHeight), (this.mustMeasureContent = !1)
    let a = 0,
      h = 0,
      c = parseInt(i.paddingTop) || 0,
      f = parseInt(i.paddingBottom) || 0
    ;(this.paddingTop != c || this.paddingBottom != f) &&
      ((this.paddingTop = c), (this.paddingBottom = f), (a |= 10)),
      this.editorWidth != e.scrollDOM.clientWidth &&
        (s.lineWrapping && (l = !0), (this.editorWidth = e.scrollDOM.clientWidth), (a |= 8))
    let u = (this.printing ? Cc : Sc)(t, this.paddingTop),
      d = u.top - this.pixelViewport.top,
      p = u.bottom - this.pixelViewport.bottom
    this.pixelViewport = u
    let g =
      this.pixelViewport.bottom > this.pixelViewport.top &&
      this.pixelViewport.right > this.pixelViewport.left
    if (
      (g != this.inView && ((this.inView = g), g && (l = !0)), !this.inView && !this.scrollTarget)
    )
      return 0
    let m = t.clientWidth
    if (
      ((this.contentDOMWidth != m || this.editorHeight != e.scrollDOM.clientHeight) &&
        ((this.contentDOMWidth = m), (this.editorHeight = e.scrollDOM.clientHeight), (a |= 8)),
      l)
    ) {
      let v = e.docView.measureVisibleLineHeights(this.viewport)
      if (
        (s.mustRefreshForHeights(v) && (o = !0),
        o || (s.lineWrapping && Math.abs(m - this.contentDOMWidth) > s.charWidth))
      ) {
        let { lineHeight: C, charWidth: M } = e.docView.measureTextSize()
        ;(o = C > 0 && s.refresh(r, C, M, m / M, v)), o && ((e.docView.minWidth = 0), (a |= 8))
      }
      d > 0 && p > 0 ? (h = Math.max(d, p)) : d < 0 && p < 0 && (h = Math.min(d, p)),
        (s.heightChanged = !1)
      for (let C of this.viewports) {
        let M = C.from == this.viewport.from ? v : e.docView.measureVisibleLineHeights(C)
        this.heightMap = this.heightMap.updateHeight(s, 0, o, new bc(C.from, M))
      }
      s.heightChanged && (a |= 2)
    }
    let b =
      !this.viewportIsAppropriate(this.viewport, h) ||
      (this.scrollTarget &&
        (this.scrollTarget.range.head < this.viewport.from ||
          this.scrollTarget.range.head > this.viewport.to))
    return (
      b && (this.viewport = this.getViewport(h, this.scrollTarget)),
      this.updateForViewport(),
      (a & 2 || b) && this.updateViewportLines(),
      (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1) &&
        this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)),
      (a |= this.computeVisibleRanges()),
      this.mustEnforceCursorAssoc &&
        ((this.mustEnforceCursorAssoc = !1), e.docView.enforceCursorAssoc()),
      a
    )
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top)
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom)
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)),
      s = this.heightMap,
      r = this.state.doc,
      { visibleTop: o, visibleBottom: l } = this,
      a = new si(
        s.lineAt(o - i * 1e3, P.ByHeight, r, 0, 0).from,
        s.lineAt(l + (1 - i) * 1e3, P.ByHeight, r, 0, 0).to
      )
    if (t) {
      let { head: h } = t.range
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
          f = s.lineAt(h, P.ByPos, r, 0, 0),
          u
        t.y == 'center'
          ? (u = (f.top + f.bottom) / 2 - c / 2)
          : t.y == 'start' || (t.y == 'nearest' && h < a.from)
          ? (u = f.top)
          : (u = f.bottom - c),
          (a = new si(
            s.lineAt(u - 1e3 / 2, P.ByHeight, r, 0, 0).from,
            s.lineAt(u + c + 1e3 / 2, P.ByHeight, r, 0, 0).to
          ))
      }
    }
    return a
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1),
      s = t.mapPos(e.to, 1)
    return new si(
      this.heightMap.lineAt(i, P.ByPos, this.state.doc, 0, 0).from,
      this.heightMap.lineAt(s, P.ByPos, this.state.doc, 0, 0).to
    )
  }
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView) return !0
    let { top: s } = this.heightMap.lineAt(e, P.ByPos, this.state.doc, 0, 0),
      { bottom: r } = this.heightMap.lineAt(t, P.ByPos, this.state.doc, 0, 0),
      { visibleTop: o, visibleBottom: l } = this
    return (
      (e == 0 || s <= o - Math.max(10, Math.min(-i, 250))) &&
      (t == this.state.doc.length || r >= l + Math.max(10, Math.min(i, 250))) &&
      s > o - 2 * 1e3 &&
      r < l + 2 * 1e3
    )
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty) return e
    let i = []
    for (let s of e)
      t.touchesRange(s.from, s.to) || i.push(new cn(t.mapPos(s.from), t.mapPos(s.to), s.size))
    return i
  }
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping,
      s = i ? 1e4 : 2e3,
      r = s >> 1,
      o = s << 1
    if (this.defaultTextDirection != F.LTR && !i) return []
    let l = [],
      a = (h, c, f, u) => {
        if (c - h < r) return
        let d = this.state.selection.main,
          p = [d.from]
        d.empty || p.push(d.to)
        for (let m of p)
          if (m > h && m < c) {
            a(h, m - 10, f, u), a(m + 10, c, f, u)
            return
          }
        let g = Dc(
          e,
          m =>
            m.from >= f.from &&
            m.to <= f.to &&
            Math.abs(m.from - h) < r &&
            Math.abs(m.to - c) < r &&
            !p.some(b => m.from < b && m.to > b)
        )
        if (!g) {
          if (c < f.to && t && i && t.visibleRanges.some(m => m.from <= c && m.to >= c)) {
            let m = t.moveToLineBoundary(y.cursor(c), !1, !0).head
            m > h && (c = m)
          }
          g = new cn(h, c, this.gapSize(f, h, c, u))
        }
        l.push(g)
      }
    for (let h of this.viewportLines) {
      if (h.length < o) continue
      let c = Mc(h.from, h.to, this.stateDeco)
      if (c.total < o) continue
      let f = this.scrollTarget ? this.scrollTarget.range.head : null,
        u,
        d
      if (i) {
        let p = (s / this.heightOracle.lineLength) * this.heightOracle.lineHeight,
          g,
          m
        if (f != null) {
          let b = oi(c, f),
            v = ((this.visibleBottom - this.visibleTop) / 2 + p) / h.height
          ;(g = b - v), (m = b + v)
        } else
          (g = (this.visibleTop - h.top - p) / h.height),
            (m = (this.visibleBottom - h.top + p) / h.height)
        ;(u = ri(c, g)), (d = ri(c, m))
      } else {
        let p = c.total * this.heightOracle.charWidth,
          g = s * this.heightOracle.charWidth,
          m,
          b
        if (f != null) {
          let v = oi(c, f),
            C = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + g) / p
          ;(m = v - C), (b = v + C)
        } else (m = (this.pixelViewport.left - g) / p), (b = (this.pixelViewport.right + g) / p)
        ;(u = ri(c, m)), (d = ri(c, b))
      }
      u > h.from && a(h.from, u, h, c), d < h.to && a(d, h.to, h, c)
    }
    return l
  }
  gapSize(e, t, i, s) {
    let r = oi(s, i) - oi(s, t)
    return this.heightOracle.lineWrapping ? e.height * r : s.total * this.heightOracle.charWidth * r
  }
  updateLineGaps(e) {
    cn.same(e, this.lineGaps) ||
      ((this.lineGaps = e),
      (this.lineGapDeco = k.set(e.map(t => t.draw(this.heightOracle.lineWrapping)))))
  }
  computeVisibleRanges() {
    let e = this.stateDeco
    this.lineGaps.length && (e = e.concat(this.lineGapDeco))
    let t = []
    L.spans(
      e,
      this.viewport.from,
      this.viewport.to,
      {
        span(s, r) {
          t.push({ from: s, to: r })
        },
        point() {}
      },
      20
    )
    let i =
      t.length != this.visibleRanges.length ||
      this.visibleRanges.some((s, r) => s.from != t[r].from || s.to != t[r].to)
    return (this.visibleRanges = t), i ? 4 : 0
  }
  lineBlockAt(e) {
    return (
      (e >= this.viewport.from &&
        e <= this.viewport.to &&
        this.viewportLines.find(t => t.from <= e && t.to >= e)) ||
      Ot(this.heightMap.lineAt(e, P.ByPos, this.state.doc, 0, 0), this.scaler)
    )
  }
  lineBlockAtHeight(e) {
    return Ot(
      this.heightMap.lineAt(this.scaler.fromDOM(e), P.ByHeight, this.state.doc, 0, 0),
      this.scaler
    )
  }
  elementAtHeight(e) {
    return Ot(this.heightMap.blockAt(this.scaler.fromDOM(e), this.state.doc, 0, 0), this.scaler)
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height)
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom
  }
}
class si {
  constructor(e, t) {
    ;(this.from = e), (this.to = t)
  }
}
function Mc(n, e, t) {
  let i = [],
    s = n,
    r = 0
  return (
    L.spans(
      t,
      n,
      e,
      {
        span() {},
        point(o, l) {
          o > s && (i.push({ from: s, to: o }), (r += o - s)), (s = l)
        }
      },
      20
    ),
    s < e && (i.push({ from: s, to: e }), (r += e - s)),
    { total: r, ranges: i }
  )
}
function ri({ total: n, ranges: e }, t) {
  if (t <= 0) return e[0].from
  if (t >= 1) return e[e.length - 1].to
  let i = Math.floor(n * t)
  for (let s = 0; ; s++) {
    let { from: r, to: o } = e[s],
      l = o - r
    if (i <= l) return r + i
    i -= l
  }
}
function oi(n, e) {
  let t = 0
  for (let { from: i, to: s } of n.ranges) {
    if (e <= s) {
      t += e - i
      break
    }
    t += s - i
  }
  return t / n.total
}
function Dc(n, e) {
  for (let t of n) if (e(t)) return t
}
const Ar = {
  toDOM(n) {
    return n
  },
  fromDOM(n) {
    return n
  },
  scale: 1
}
class Tc {
  constructor(e, t, i) {
    let s = 0,
      r = 0,
      o = 0
    ;(this.viewports = i.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, P.ByPos, e, 0, 0).top,
        c = t.lineAt(a, P.ByPos, e, 0, 0).bottom
      return (s += c - h), { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 }
    })),
      (this.scale = (7e6 - s) / (t.height - s))
    for (let l of this.viewports)
      (l.domTop = o + (l.top - r) * this.scale),
        (o = l.domBottom = l.domTop + (l.bottom - l.top)),
        (r = l.bottom)
  }
  toDOM(e) {
    for (let t = 0, i = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null
      if (!r || e < r.top) return s + (e - i) * this.scale
      if (e <= r.bottom) return r.domTop + (e - r.top)
      ;(i = r.bottom), (s = r.domBottom)
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null
      if (!r || e < r.domTop) return i + (e - s) / this.scale
      if (e <= r.domBottom) return r.top + (e - r.domTop)
      ;(i = r.bottom), (s = r.domBottom)
    }
  }
}
function Ot(n, e) {
  if (e.scale == 1) return n
  let t = e.toDOM(n.top),
    i = e.toDOM(n.bottom)
  return new Ne(
    n.from,
    n.length,
    t,
    i - t,
    Array.isArray(n.type) ? n.type.map(s => Ot(s, e)) : n.type
  )
}
const li = x.define({ combine: n => n.join(' ') }),
  Qn = x.define({ combine: n => n.indexOf(!0) > -1 }),
  Zn = He.newName(),
  yl = He.newName(),
  bl = He.newName(),
  wl = { '&light': '.' + yl, '&dark': '.' + bl }
function _n(n, e, t) {
  return new He(e, {
    finish(i) {
      return /&/.test(i)
        ? i.replace(/&\w*/, s => {
            if (s == '&') return n
            if (!t || !t[s]) throw new RangeError(`Unsupported selector: ${s}`)
            return t[s]
          })
        : n + ' ' + i
    }
  })
}
const Oc = _n(
  '.' + Zn,
  {
    '&.cm-editor': {
      position: 'relative !important',
      boxSizing: 'border-box',
      '&.cm-focused': { outline: '1px dotted #212121' },
      display: 'flex !important',
      flexDirection: 'column'
    },
    '.cm-scroller': {
      display: 'flex !important',
      alignItems: 'flex-start !important',
      fontFamily: 'monospace',
      lineHeight: 1.4,
      height: '100%',
      overflowX: 'auto',
      position: 'relative',
      zIndex: 0
    },
    '.cm-content': {
      margin: 0,
      flexGrow: 2,
      flexShrink: 0,
      minHeight: '100%',
      display: 'block',
      whiteSpace: 'pre',
      wordWrap: 'normal',
      boxSizing: 'border-box',
      padding: '4px 0',
      outline: 'none',
      '&[contenteditable=true]': { WebkitUserModify: 'read-write-plaintext-only' }
    },
    '.cm-lineWrapping': {
      whiteSpace_fallback: 'pre-wrap',
      whiteSpace: 'break-spaces',
      wordBreak: 'break-word',
      overflowWrap: 'anywhere',
      flexShrink: 1
    },
    '&light .cm-content': { caretColor: 'black' },
    '&dark .cm-content': { caretColor: 'white' },
    '.cm-line': { display: 'block', padding: '0 2px 0 4px' },
    '.cm-selectionLayer': { zIndex: -1, contain: 'size style' },
    '.cm-selectionBackground': { position: 'absolute' },
    '&light .cm-selectionBackground': { background: '#d9d9d9' },
    '&dark .cm-selectionBackground': { background: '#222' },
    '&light.cm-focused .cm-selectionBackground': { background: '#d7d4f0' },
    '&dark.cm-focused .cm-selectionBackground': { background: '#233' },
    '.cm-cursorLayer': { zIndex: 100, contain: 'size style', pointerEvents: 'none' },
    '&.cm-focused .cm-cursorLayer': { animation: 'steps(1) cm-blink 1.2s infinite' },
    '@keyframes cm-blink': { '0%': {}, '50%': { opacity: 0 }, '100%': {} },
    '@keyframes cm-blink2': { '0%': {}, '50%': { opacity: 0 }, '100%': {} },
    '.cm-cursor, .cm-dropCursor': {
      position: 'absolute',
      borderLeft: '1.2px solid black',
      marginLeft: '-0.6px',
      pointerEvents: 'none'
    },
    '.cm-cursor': { display: 'none' },
    '&dark .cm-cursor': { borderLeftColor: '#444' },
    '&.cm-focused .cm-cursor': { display: 'block' },
    '&light .cm-activeLine': { backgroundColor: '#cceeff44' },
    '&dark .cm-activeLine': { backgroundColor: '#99eeff33' },
    '&light .cm-specialChar': { color: 'red' },
    '&dark .cm-specialChar': { color: '#f78' },
    '.cm-gutters': {
      flexShrink: 0,
      display: 'flex',
      height: '100%',
      boxSizing: 'border-box',
      left: 0,
      zIndex: 200
    },
    '&light .cm-gutters': {
      backgroundColor: '#f5f5f5',
      color: '#6c6c6c',
      borderRight: '1px solid #ddd'
    },
    '&dark .cm-gutters': { backgroundColor: '#333338', color: '#ccc' },
    '.cm-gutter': {
      display: 'flex !important',
      flexDirection: 'column',
      flexShrink: 0,
      boxSizing: 'border-box',
      minHeight: '100%',
      overflow: 'hidden'
    },
    '.cm-gutterElement': { boxSizing: 'border-box' },
    '.cm-lineNumbers .cm-gutterElement': {
      padding: '0 3px 0 5px',
      minWidth: '20px',
      textAlign: 'right',
      whiteSpace: 'nowrap'
    },
    '&light .cm-activeLineGutter': { backgroundColor: '#e2f2ff' },
    '&dark .cm-activeLineGutter': { backgroundColor: '#222227' },
    '.cm-panels': { boxSizing: 'border-box', position: 'sticky', left: 0, right: 0 },
    '&light .cm-panels': { backgroundColor: '#f5f5f5', color: 'black' },
    '&light .cm-panels-top': { borderBottom: '1px solid #ddd' },
    '&light .cm-panels-bottom': { borderTop: '1px solid #ddd' },
    '&dark .cm-panels': { backgroundColor: '#333338', color: 'white' },
    '.cm-tab': { display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' },
    '.cm-widgetBuffer': { verticalAlign: 'text-top', height: '1em', width: 0, display: 'inline' },
    '.cm-placeholder': { color: '#888', display: 'inline-block', verticalAlign: 'top' },
    '.cm-button': {
      verticalAlign: 'middle',
      color: 'inherit',
      fontSize: '70%',
      padding: '.2em 1em',
      borderRadius: '1px'
    },
    '&light .cm-button': {
      backgroundImage: 'linear-gradient(#eff1f5, #d9d9df)',
      border: '1px solid #888',
      '&:active': { backgroundImage: 'linear-gradient(#b4b4b4, #d0d3d6)' }
    },
    '&dark .cm-button': {
      backgroundImage: 'linear-gradient(#393939, #111)',
      border: '1px solid #888',
      '&:active': { backgroundImage: 'linear-gradient(#111, #333)' }
    },
    '.cm-textfield': {
      verticalAlign: 'middle',
      color: 'inherit',
      fontSize: '70%',
      border: '1px solid silver',
      padding: '.2em .5em'
    },
    '&light .cm-textfield': { backgroundColor: 'white' },
    '&dark .cm-textfield': { border: '1px solid #555', backgroundColor: 'inherit' }
  },
  wl
)
class Bc {
  constructor(e, t, i, s) {
    ;(this.typeOver = s), (this.bounds = null), (this.text = '')
    let { impreciseHead: r, impreciseAnchor: o } = e.docView
    if (t > -1 && !e.state.readOnly && (this.bounds = e.docView.domBoundsAround(t, i, 0))) {
      let l = r || o ? [] : Rc(e),
        a = new rl(l, e.state)
      a.readRange(this.bounds.startDOM, this.bounds.endDOM),
        (this.text = a.text),
        (this.newSel = Ec(l, this.bounds.from))
    } else {
      let l = e.observer.selectionRange,
        a =
          (r && r.node == l.focusNode && r.offset == l.focusOffset) ||
          !dt(e.contentDOM, l.focusNode)
            ? e.state.selection.main.head
            : e.docView.posFromDOM(l.focusNode, l.focusOffset),
        h =
          (o && o.node == l.anchorNode && o.offset == l.anchorOffset) ||
          !dt(e.contentDOM, l.anchorNode)
            ? e.state.selection.main.anchor
            : e.docView.posFromDOM(l.anchorNode, l.anchorOffset)
      this.newSel = y.single(h, a)
    }
  }
}
function xl(n, e) {
  let t,
    { newSel: i } = e,
    s = n.state.selection.main
  if (e.bounds) {
    let { from: r, to: o } = e.bounds,
      l = s.from,
      a = null
    ;((n.inputState.lastKeyCode === 8 && n.inputState.lastKeyTime > Date.now() - 100) ||
      (w.android && e.text.length < o - r)) &&
      ((l = s.to), (a = 'end'))
    let h = Lc(n.state.doc.sliceString(r, o, Ie), e.text, l - r, a)
    h &&
      (w.chrome &&
        n.inputState.lastKeyCode == 13 &&
        h.toB == h.from + 2 &&
        e.text.slice(h.from, h.toB) == Ie + Ie &&
        h.toB--,
      (t = {
        from: r + h.from,
        to: r + h.toA,
        insert: B.of(e.text.slice(h.from, h.toB).split(Ie))
      }))
  } else i && (!n.hasFocus || !n.state.facet(Gi) || i.main.eq(s)) && (i = null)
  if (!t && !i) return !1
  if (
    (!t && e.typeOver && !s.empty && i && i.main.empty
      ? (t = { from: s.from, to: s.to, insert: n.state.doc.slice(s.from, s.to) })
      : t &&
        t.from >= s.from &&
        t.to <= s.to &&
        (t.from != s.from || t.to != s.to) &&
        s.to - s.from - (t.to - t.from) <= 4
      ? (t = {
          from: s.from,
          to: s.to,
          insert: n.state.doc
            .slice(s.from, t.from)
            .append(t.insert)
            .append(n.state.doc.slice(t.to, s.to))
        })
      : (w.mac || w.android) &&
        t &&
        t.from == t.to &&
        t.from == s.head - 1 &&
        /^\. ?$/.test(t.insert.toString())
      ? (i && t.insert.length == 2 && (i = y.single(i.main.anchor - 1, i.main.head - 1)),
        (t = { from: s.from, to: s.to, insert: B.of([' ']) }))
      : w.chrome &&
        t &&
        t.from == t.to &&
        t.from == s.head &&
        t.insert.toString() ==
          `
 ` &&
        n.lineWrapping &&
        (i && (i = y.single(i.main.anchor - 1, i.main.head - 1)),
        (t = { from: s.from, to: s.to, insert: B.of([' ']) })),
    t)
  ) {
    let r = n.state
    if (
      (w.ios && n.inputState.flushIOSKey(n)) ||
      (w.android &&
        ((t.from == s.from &&
          t.to == s.to &&
          t.insert.length == 1 &&
          t.insert.lines == 2 &&
          ct(n.contentDOM, 'Enter', 13)) ||
          (t.from == s.from - 1 &&
            t.to == s.to &&
            t.insert.length == 0 &&
            ct(n.contentDOM, 'Backspace', 8)) ||
          (t.from == s.from &&
            t.to == s.to + 1 &&
            t.insert.length == 0 &&
            ct(n.contentDOM, 'Delete', 46))))
    )
      return !0
    let o = t.insert.toString()
    if (n.state.facet(Xo).some(h => h(n, t.from, t.to, o))) return !0
    n.inputState.composing >= 0 && n.inputState.composing++
    let l
    if (
      t.from >= s.from &&
      t.to <= s.to &&
      t.to - t.from >= (s.to - s.from) / 3 &&
      (!i || (i.main.empty && i.main.from == t.from + t.insert.length)) &&
      n.inputState.composing < 0
    ) {
      let h = s.from < t.from ? r.sliceDoc(s.from, t.from) : '',
        c = s.to > t.to ? r.sliceDoc(t.to, s.to) : ''
      l = r.replaceSelection(
        n.state.toText(h + t.insert.sliceString(0, void 0, n.state.lineBreak) + c)
      )
    } else {
      let h = r.changes(t),
        c = i && !r.selection.main.eq(i.main) && i.main.to <= h.newLength ? i.main : void 0
      if (
        r.selection.ranges.length > 1 &&
        n.inputState.composing >= 0 &&
        t.to <= s.to &&
        t.to >= s.to - 10
      ) {
        let f = n.state.sliceDoc(t.from, t.to),
          u = ol(n) || n.state.doc.lineAt(s.head),
          d = s.to - t.to,
          p = s.to - s.from
        l = r.changeByRange(g => {
          if (g.from == s.from && g.to == s.to) return { changes: h, range: c || g.map(h) }
          let m = g.to - d,
            b = m - f.length
          if (
            g.to - g.from != p ||
            n.state.sliceDoc(b, m) != f ||
            (u && g.to >= u.from && g.from <= u.to)
          )
            return { range: g }
          let v = r.changes({ from: b, to: m, insert: t.insert }),
            C = g.to - s.to
          return {
            changes: v,
            range: c ? y.range(Math.max(0, c.anchor + C), Math.max(0, c.head + C)) : g.map(v)
          }
        })
      } else l = { changes: h, selection: c && r.selection.replaceRange(c) }
    }
    let a = 'input.type'
    return (
      n.composing &&
        ((a += '.compose'),
        n.inputState.compositionFirstChange &&
          ((a += '.start'), (n.inputState.compositionFirstChange = !1))),
      n.dispatch(l, { scrollIntoView: !0, userEvent: a }),
      !0
    )
  } else if (i && !i.main.eq(s)) {
    let r = !1,
      o = 'select'
    return (
      n.inputState.lastSelectionTime > Date.now() - 50 &&
        (n.inputState.lastSelectionOrigin == 'select' && (r = !0),
        (o = n.inputState.lastSelectionOrigin)),
      n.dispatch({ selection: i, scrollIntoView: r, userEvent: o }),
      !0
    )
  } else return !1
}
function Lc(n, e, t, i) {
  let s = Math.min(n.length, e.length),
    r = 0
  for (; r < s && n.charCodeAt(r) == e.charCodeAt(r); ) r++
  if (r == s && n.length == e.length) return null
  let o = n.length,
    l = e.length
  for (; o > 0 && l > 0 && n.charCodeAt(o - 1) == e.charCodeAt(l - 1); ) o--, l--
  if (i == 'end') {
    let a = Math.max(0, r - Math.min(o, l))
    t -= o + a - r
  }
  if (o < r && n.length < e.length) {
    let a = t <= r && t >= o ? r - t : 0
    ;(r -= a), (l = r + (l - o)), (o = r)
  } else if (l < r) {
    let a = t <= r && t >= l ? r - t : 0
    ;(r -= a), (o = r + (o - l)), (l = r)
  }
  return { from: r, toA: o, toB: l }
}
function Rc(n) {
  let e = []
  if (n.root.activeElement != n.contentDOM) return e
  let { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: r } = n.observer.selectionRange
  return t && (e.push(new or(t, i)), (s != t || r != i) && e.push(new or(s, r))), e
}
function Ec(n, e) {
  if (n.length == 0) return null
  let t = n[0].pos,
    i = n.length == 2 ? n[1].pos : t
  return t > -1 && i > -1 ? y.single(t + e, i + e) : null
}
const Pc = {
    childList: !0,
    characterData: !0,
    subtree: !0,
    attributes: !0,
    characterDataOldValue: !0
  },
  fn = w.ie && w.ie_version <= 11
class Ic {
  constructor(e) {
    ;(this.view = e),
      (this.active = !1),
      (this.selectionRange = new Th()),
      (this.selectionChanged = !1),
      (this.delayedFlush = -1),
      (this.resizeTimeout = -1),
      (this.queue = []),
      (this.delayedAndroidKey = null),
      (this.flushingAndroidKey = -1),
      (this.lastChange = 0),
      (this.scrollTargets = []),
      (this.intersection = null),
      (this.resize = null),
      (this.intersecting = !1),
      (this.gapIntersection = null),
      (this.gaps = []),
      (this.parentCheck = -1),
      (this.dom = e.contentDOM),
      (this.observer = new MutationObserver(t => {
        for (let i of t) this.queue.push(i)
        ;((w.ie && w.ie_version <= 11) || (w.ios && e.composing)) &&
        t.some(
          i =>
            (i.type == 'childList' && i.removedNodes.length) ||
            (i.type == 'characterData' && i.oldValue.length > i.target.nodeValue.length)
        )
          ? this.flushSoon()
          : this.flush()
      })),
      fn &&
        (this.onCharData = t => {
          this.queue.push({ target: t.target, type: 'characterData', oldValue: t.prevValue }),
            this.flushSoon()
        }),
      (this.onSelectionChange = this.onSelectionChange.bind(this)),
      (this.onResize = this.onResize.bind(this)),
      (this.onPrint = this.onPrint.bind(this)),
      (this.onScroll = this.onScroll.bind(this)),
      typeof ResizeObserver == 'function' &&
        ((this.resize = new ResizeObserver(() => {
          this.view.docView.lastUpdate < Date.now() - 75 && this.onResize()
        })),
        this.resize.observe(e.scrollDOM)),
      this.addWindowListeners((this.win = e.win)),
      this.start(),
      typeof IntersectionObserver == 'function' &&
        ((this.intersection = new IntersectionObserver(t => {
          this.parentCheck < 0 &&
            (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)),
            t.length > 0 &&
              t[t.length - 1].intersectionRatio > 0 != this.intersecting &&
              ((this.intersecting = !this.intersecting),
              this.intersecting != this.view.inView &&
                this.onScrollChanged(document.createEvent('Event')))
        }, {})),
        this.intersection.observe(this.dom),
        (this.gapIntersection = new IntersectionObserver(t => {
          t.length > 0 &&
            t[t.length - 1].intersectionRatio > 0 &&
            this.onScrollChanged(document.createEvent('Event'))
        }, {}))),
      this.listenForScroll(),
      this.readSelectionRange()
  }
  onScrollChanged(e) {
    this.view.inputState.runScrollHandlers(this.view, e), this.intersecting && this.view.measure()
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.onScrollChanged(e)
  }
  onResize() {
    this.resizeTimeout < 0 &&
      (this.resizeTimeout = setTimeout(() => {
        ;(this.resizeTimeout = -1), this.view.requestMeasure()
      }, 50))
  }
  onPrint() {
    ;(this.view.viewState.printing = !0),
      this.view.measure(),
      setTimeout(() => {
        ;(this.view.viewState.printing = !1), this.view.requestMeasure()
      }, 500)
  }
  updateGaps(e) {
    if (
      this.gapIntersection &&
      (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))
    ) {
      this.gapIntersection.disconnect()
      for (let t of e) this.gapIntersection.observe(t)
      this.gaps = e
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged
    if (!this.readSelectionRange() || this.delayedAndroidKey) return
    let { view: i } = this,
      s = this.selectionRange
    if (i.state.facet(Gi) ? i.root.activeElement != this.dom : !yi(i.dom, s)) return
    let r = s.anchorNode && i.docView.nearest(s.anchorNode)
    if (r && r.ignoreEvent(e)) {
      t || (this.selectionChanged = !1)
      return
    }
    ;((w.ie && w.ie_version <= 11) || (w.android && w.chrome)) &&
    !i.state.selection.main.empty &&
    s.focusNode &&
    Ci(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset)
      ? this.flushSoon()
      : this.flush(!1)
  }
  readSelectionRange() {
    let { view: e } = this,
      t =
        (w.safari &&
          e.root.nodeType == 11 &&
          Ah(this.dom.ownerDocument) == this.dom &&
          Nc(this.view)) ||
        Si(e.root)
    if (!t || this.selectionRange.eq(t)) return !1
    let i = yi(this.dom, t)
    return i &&
      !this.selectionChanged &&
      e.inputState.lastFocusTime > Date.now() - 200 &&
      e.inputState.lastTouchTime < Date.now() - 300 &&
      Bh(this.dom, t)
      ? ((this.view.inputState.lastFocusTime = 0), e.docView.updateSelection(), !1)
      : (this.selectionRange.setRange(t), i && (this.selectionChanged = !0), !0)
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), (this.selectionChanged = !1)
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0)
  }
  listenForScroll() {
    this.parentCheck = -1
    let e = 0,
      t = null
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == i
          ? e++
          : t || (t = this.scrollTargets.slice(0, e)),
          t && t.push(i),
          (i = i.assignedSlot || i.parentNode)
      else if (i.nodeType == 11) i = i.host
      else break
    if ((e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t)) {
      for (let i of this.scrollTargets) i.removeEventListener('scroll', this.onScroll)
      for (let i of (this.scrollTargets = t)) i.addEventListener('scroll', this.onScroll)
    }
  }
  ignore(e) {
    if (!this.active) return e()
    try {
      return this.stop(), e()
    } finally {
      this.start(), this.clear()
    }
  }
  start() {
    this.active ||
      (this.observer.observe(this.dom, Pc),
      fn && this.dom.addEventListener('DOMCharacterDataModified', this.onCharData),
      (this.active = !0))
  }
  stop() {
    !this.active ||
      ((this.active = !1),
      this.observer.disconnect(),
      fn && this.dom.removeEventListener('DOMCharacterDataModified', this.onCharData))
  }
  clear() {
    this.processRecords(), (this.queue.length = 0), (this.selectionChanged = !1)
  }
  delayAndroidKey(e, t) {
    var i
    if (!this.delayedAndroidKey) {
      let s = () => {
        let r = this.delayedAndroidKey
        r &&
          (this.clearDelayedAndroidKey(),
          !this.flush() && r.force && ct(this.dom, r.key, r.keyCode))
      }
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s)
    }
    ;(!this.delayedAndroidKey || e == 'Enter') &&
      (this.delayedAndroidKey = {
        key: e,
        keyCode: t,
        force:
          this.lastChange < Date.now() - 50 ||
          !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
      })
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey),
      (this.delayedAndroidKey = null),
      (this.flushingAndroidKey = -1)
  }
  flushSoon() {
    this.delayedFlush < 0 &&
      (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
        ;(this.delayedFlush = -1), this.flush()
      }))
  }
  forceFlush() {
    this.delayedFlush >= 0 &&
      (this.view.win.cancelAnimationFrame(this.delayedFlush), (this.delayedFlush = -1)),
      this.flush()
  }
  processRecords() {
    let e = this.queue
    for (let r of this.observer.takeRecords()) e.push(r)
    e.length && (this.queue = [])
    let t = -1,
      i = -1,
      s = !1
    for (let r of e) {
      let o = this.readMutation(r)
      !o ||
        (o.typeOver && (s = !0),
        t == -1 ? ({ from: t, to: i } = o) : ((t = Math.min(o.from, t)), (i = Math.max(o.to, i))))
    }
    return { from: t, to: i, typeOver: s }
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(),
      s = this.selectionChanged && yi(this.dom, this.selectionRange)
    return e < 0 && !s
      ? null
      : (e > -1 && (this.lastChange = Date.now()),
        (this.view.inputState.lastFocusTime = 0),
        (this.selectionChanged = !1),
        new Bc(this.view, e, t, i))
  }
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1
    e && this.readSelectionRange()
    let t = this.readChange()
    if (!t) return !1
    let i = this.view.state,
      s = xl(this.view, t)
    return this.view.state == i && this.view.update([]), s
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target)
    if (!t || t.ignoreMutation(e)) return null
    if (
      (t.markDirty(e.type == 'attributes'),
      e.type == 'attributes' && (t.dirty |= 4),
      e.type == 'childList')
    ) {
      let i = Mr(t, e.previousSibling || e.target.previousSibling, -1),
        s = Mr(t, e.nextSibling || e.target.nextSibling, 1)
      return {
        from: i ? t.posAfter(i) : t.posAtStart,
        to: s ? t.posBefore(s) : t.posAtEnd,
        typeOver: !1
      }
    } else
      return e.type == 'characterData'
        ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue }
        : null
  }
  setWindow(e) {
    e != this.win &&
      (this.removeWindowListeners(this.win), (this.win = e), this.addWindowListeners(this.win))
  }
  addWindowListeners(e) {
    e.addEventListener('resize', this.onResize),
      e.addEventListener('beforeprint', this.onPrint),
      e.addEventListener('scroll', this.onScroll),
      e.document.addEventListener('selectionchange', this.onSelectionChange)
  }
  removeWindowListeners(e) {
    e.removeEventListener('scroll', this.onScroll),
      e.removeEventListener('resize', this.onResize),
      e.removeEventListener('beforeprint', this.onPrint),
      e.document.removeEventListener('selectionchange', this.onSelectionChange)
  }
  destroy() {
    var e, t, i
    this.stop(),
      (e = this.intersection) === null || e === void 0 || e.disconnect(),
      (t = this.gapIntersection) === null || t === void 0 || t.disconnect(),
      (i = this.resize) === null || i === void 0 || i.disconnect()
    for (let s of this.scrollTargets) s.removeEventListener('scroll', this.onScroll)
    this.removeWindowListeners(this.win),
      clearTimeout(this.parentCheck),
      clearTimeout(this.resizeTimeout),
      this.win.cancelAnimationFrame(this.delayedFlush),
      this.win.cancelAnimationFrame(this.flushingAndroidKey)
  }
}
function Mr(n, e, t) {
  for (; e; ) {
    let i = I.get(e)
    if (i && i.parent == n) return i
    let s = e.parentNode
    e = s != n.dom ? s : t > 0 ? e.nextSibling : e.previousSibling
  }
  return null
}
function Nc(n) {
  let e = null
  function t(a) {
    a.preventDefault(), a.stopImmediatePropagation(), (e = a.getTargetRanges()[0])
  }
  if (
    (n.contentDOM.addEventListener('beforeinput', t, !0),
    n.dom.ownerDocument.execCommand('indent'),
    n.contentDOM.removeEventListener('beforeinput', t, !0),
    !e)
  )
    return null
  let i = e.startContainer,
    s = e.startOffset,
    r = e.endContainer,
    o = e.endOffset,
    l = n.docView.domAtPos(n.state.selection.main.anchor)
  return (
    Ci(l.node, l.offset, r, o) && ([i, s, r, o] = [r, o, i, s]),
    { anchorNode: i, anchorOffset: s, focusNode: r, focusOffset: o }
  )
}
class S {
  constructor(e = {}) {
    ;(this.plugins = []),
      (this.pluginMap = new Map()),
      (this.editorAttrs = {}),
      (this.contentAttrs = {}),
      (this.bidiCache = []),
      (this.destroyed = !1),
      (this.updateState = 2),
      (this.measureScheduled = -1),
      (this.measureRequests = []),
      (this.contentDOM = document.createElement('div')),
      (this.scrollDOM = document.createElement('div')),
      (this.scrollDOM.tabIndex = -1),
      (this.scrollDOM.className = 'cm-scroller'),
      this.scrollDOM.appendChild(this.contentDOM),
      (this.announceDOM = document.createElement('div')),
      (this.announceDOM.style.cssText = 'position: absolute; top: -10000px'),
      this.announceDOM.setAttribute('aria-live', 'polite'),
      (this.dom = document.createElement('div')),
      this.dom.appendChild(this.announceDOM),
      this.dom.appendChild(this.scrollDOM),
      (this._dispatch = e.dispatch || (t => this.update([t]))),
      (this.dispatch = this.dispatch.bind(this)),
      (this._root = e.root || Oh(e.parent) || document),
      (this.viewState = new Cr(e.state || O.create(e))),
      (this.plugins = this.state.facet(Dt).map(t => new ln(t)))
    for (let t of this.plugins) t.update(this)
    ;(this.observer = new Ic(this)),
      (this.inputState = new sc(this)),
      this.inputState.ensureHandlers(this, this.plugins),
      (this.docView = new lr(this)),
      this.mountStyles(),
      this.updateAttrs(),
      (this.updateState = 0),
      this.requestMeasure(),
      e.parent && e.parent.appendChild(this.dom)
  }
  get state() {
    return this.viewState.state
  }
  get viewport() {
    return this.viewState.viewport
  }
  get visibleRanges() {
    return this.viewState.visibleRanges
  }
  get inView() {
    return this.viewState.inView
  }
  get composing() {
    return this.inputState.composing > 0
  }
  get compositionStarted() {
    return this.inputState.composing >= 0
  }
  get root() {
    return this._root
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window
  }
  dispatch(...e) {
    this._dispatch(e.length == 1 && e[0] instanceof q ? e[0] : this.state.update(...e))
  }
  update(e) {
    if (this.updateState != 0)
      throw new Error('Calls to EditorView.update are not allowed while an update is in progress')
    let t = !1,
      i = !1,
      s,
      r = this.state
    for (let h of e) {
      if (h.startState != r)
        throw new RangeError(
          "Trying to update state with a transaction that doesn't start from the previous state."
        )
      r = h.state
    }
    if (this.destroyed) {
      this.viewState.state = r
      return
    }
    let o = this.observer.delayedAndroidKey,
      l = null
    if (
      (o
        ? (this.observer.clearDelayedAndroidKey(),
          (l = this.observer.readChange()),
          ((l && !this.state.doc.eq(r.doc)) || !this.state.selection.eq(r.selection)) && (l = null))
        : this.observer.clear(),
      r.facet(O.phrases) != this.state.facet(O.phrases))
    )
      return this.setState(r)
    s = Di.create(this, r, e)
    let a = this.viewState.scrollTarget
    try {
      this.updateState = 2
      for (let h of e) {
        if ((a && (a = a.map(h.changes)), h.scrollIntoView)) {
          let { main: c } = h.state.selection
          a = new Mi(c.empty ? c : y.cursor(c.head, c.head > c.anchor ? -1 : 1))
        }
        for (let c of h.effects) c.is(sr) && (a = c.value)
      }
      this.viewState.update(s, a),
        (this.bidiCache = Ti.update(this.bidiCache, s.changes)),
        s.empty || (this.updatePlugins(s), this.inputState.update(s)),
        (t = this.docView.update(s)),
        this.state.facet(Tt) != this.styleModules && this.mountStyles(),
        (i = this.updateAttrs()),
        this.showAnnouncements(e),
        this.docView.updateSelection(
          t,
          e.some(h => h.isUserEvent('select.pointer'))
        )
    } finally {
      this.updateState = 0
    }
    if (
      (s.startState.facet(li) != s.state.facet(li) && (this.viewState.mustMeasureContent = !0),
      (t || i || a || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) &&
        this.requestMeasure(),
      !s.empty)
    )
      for (let h of this.state.facet(jn)) h(s)
    l && !xl(this, l) && o.force && ct(this.contentDOM, o.key, o.keyCode)
  }
  setState(e) {
    if (this.updateState != 0)
      throw new Error('Calls to EditorView.setState are not allowed while an update is in progress')
    if (this.destroyed) {
      this.viewState.state = e
      return
    }
    this.updateState = 2
    let t = this.hasFocus
    try {
      for (let i of this.plugins) i.destroy(this)
      ;(this.viewState = new Cr(e)),
        (this.plugins = e.facet(Dt).map(i => new ln(i))),
        this.pluginMap.clear()
      for (let i of this.plugins) i.update(this)
      ;(this.docView = new lr(this)),
        this.inputState.ensureHandlers(this, this.plugins),
        this.mountStyles(),
        this.updateAttrs(),
        (this.bidiCache = [])
    } finally {
      this.updateState = 0
    }
    t && this.focus(), this.requestMeasure()
  }
  updatePlugins(e) {
    let t = e.startState.facet(Dt),
      i = e.state.facet(Dt)
    if (t != i) {
      let s = []
      for (let r of i) {
        let o = t.indexOf(r)
        if (o < 0) s.push(new ln(r))
        else {
          let l = this.plugins[o]
          ;(l.mustUpdate = e), s.push(l)
        }
      }
      for (let r of this.plugins) r.mustUpdate != e && r.destroy(this)
      ;(this.plugins = s),
        this.pluginMap.clear(),
        this.inputState.ensureHandlers(this, this.plugins)
    } else for (let s of this.plugins) s.mustUpdate = e
    for (let s = 0; s < this.plugins.length; s++) this.plugins[s].update(this)
  }
  measure(e = !0) {
    if (this.destroyed) return
    this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled),
      (this.measureScheduled = 0),
      e && this.observer.forceFlush()
    let t = null,
      { scrollHeight: i, scrollTop: s, clientHeight: r } = this.scrollDOM,
      o = s > i - r - 4 ? i : s
    try {
      for (let l = 0; ; l++) {
        this.updateState = 1
        let a = this.viewport,
          h = this.viewState.lineBlockAtHeight(o),
          c = this.viewState.measure(this)
        if (!c && !this.measureRequests.length && this.viewState.scrollTarget == null) break
        if (l > 5) {
          console.warn(
            this.measureRequests.length
              ? 'Measure loop restarted more than 5 times'
              : 'Viewport failed to stabilize'
          )
          break
        }
        let f = []
        c & 4 || ([this.measureRequests, f] = [f, this.measureRequests])
        let u = f.map(m => {
            try {
              return m.read(this)
            } catch (b) {
              return he(this.state, b), Dr
            }
          }),
          d = Di.create(this, this.state, []),
          p = !1,
          g = !1
        ;(d.flags |= c),
          t ? (t.flags |= c) : (t = d),
          (this.updateState = 2),
          d.empty ||
            (this.updatePlugins(d),
            this.inputState.update(d),
            this.updateAttrs(),
            (p = this.docView.update(d)))
        for (let m = 0; m < f.length; m++)
          if (u[m] != Dr)
            try {
              let b = f[m]
              b.write && b.write(u[m], this)
            } catch (b) {
              he(this.state, b)
            }
        if (this.viewState.editorHeight)
          if (this.viewState.scrollTarget)
            this.docView.scrollIntoView(this.viewState.scrollTarget),
              (this.viewState.scrollTarget = null),
              (g = !0)
          else {
            let m = this.viewState.lineBlockAt(h.from).top - h.top
            ;(m > 1 || m < -1) && ((this.scrollDOM.scrollTop += m), (g = !0))
          }
        if (
          (p && this.docView.updateSelection(!0),
          this.viewport.from == a.from &&
            this.viewport.to == a.to &&
            !g &&
            this.measureRequests.length == 0)
        )
          break
      }
    } finally {
      ;(this.updateState = 0), (this.measureScheduled = -1)
    }
    if (t && !t.empty) for (let l of this.state.facet(jn)) l(t)
  }
  get themeClasses() {
    return Zn + ' ' + (this.state.facet(Qn) ? bl : yl) + ' ' + this.state.facet(li)
  }
  updateAttrs() {
    let e = Tr(this, Zo, {
        class: 'cm-editor' + (this.hasFocus ? ' cm-focused ' : ' ') + this.themeClasses
      }),
      t = {
        spellcheck: 'false',
        autocorrect: 'off',
        autocapitalize: 'off',
        translate: 'no',
        contenteditable: this.state.facet(Gi) ? 'true' : 'false',
        class: 'cm-content',
        style: `${w.tabSize}: ${this.state.tabSize}`,
        role: 'textbox',
        'aria-multiline': 'true'
      }
    this.state.readOnly && (t['aria-readonly'] = 'true'), Tr(this, _o, t)
    let i = this.observer.ignore(() => {
      let s = $n(this.contentDOM, this.contentAttrs, t),
        r = $n(this.dom, this.editorAttrs, e)
      return s || r
    })
    return (this.editorAttrs = e), (this.contentAttrs = t), i
  }
  showAnnouncements(e) {
    let t = !0
    for (let i of e)
      for (let s of i.effects)
        if (s.is(S.announce)) {
          t && (this.announceDOM.textContent = ''), (t = !1)
          let r = this.announceDOM.appendChild(document.createElement('div'))
          r.textContent = s.value
        }
  }
  mountStyles() {
    ;(this.styleModules = this.state.facet(Tt)),
      He.mount(this.root, this.styleModules.concat(Oc).reverse())
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update")
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1)
  }
  requestMeasure(e) {
    if (
      (this.measureScheduled < 0 &&
        (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())),
      e)
    ) {
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e
            return
          }
      }
      this.measureRequests.push(e)
    }
  }
  plugin(e) {
    let t = this.pluginMap.get(e)
    return (
      (t === void 0 || (t && t.spec != e)) &&
        this.pluginMap.set(e, (t = this.plugins.find(i => i.spec == e) || null)),
      t && t.update(this).value
    )
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom }
  }
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e)
  }
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e)
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines
  }
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e)
  }
  get contentHeight() {
    return this.viewState.contentHeight
  }
  moveByChar(e, t, i) {
    return hn(this, e, dr(this, e, t, i))
  }
  moveByGroup(e, t) {
    return hn(
      this,
      e,
      dr(this, e, t, i => ic(this, e.head, i))
    )
  }
  moveToLineBoundary(e, t, i = !0) {
    return tc(this, e, t, i)
  }
  moveVertically(e, t, i) {
    return hn(this, e, nc(this, e, t, i))
  }
  domAtPos(e) {
    return this.docView.domAtPos(e)
  }
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t)
  }
  posAtCoords(e, t = !0) {
    return this.readMeasured(), al(this, e, t)
  }
  coordsAtPos(e, t = 1) {
    this.readMeasured()
    let i = this.docView.coordsAt(e, t)
    if (!i || i.left == i.right) return i
    let s = this.state.doc.lineAt(e),
      r = this.bidiSpans(s),
      o = r[ft.find(r, e - s.from, -1, t)]
    return ys(i, (o.dir == F.LTR) == t > 0)
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight
  }
  get textDirection() {
    return this.viewState.defaultTextDirection
  }
  textDirectionAt(e) {
    return !this.state.facet(Qo) || e < this.viewport.from || e > this.viewport.to
      ? this.textDirection
      : (this.readMeasured(), this.docView.textDirectionAt(e))
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping
  }
  bidiSpans(e) {
    if (e.length > Vc) return nl(e.length)
    let t = this.textDirectionAt(e.from)
    for (let s of this.bidiCache) if (s.from == e.from && s.dir == t) return s.order
    let i = zh(e.text, t)
    return this.bidiCache.push(new Ti(e.from, e.to, t, i)), i
  }
  get hasFocus() {
    var e
    return (
      (this.dom.ownerDocument.hasFocus() ||
        (w.safari &&
          ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) >
            Date.now() - 3e4)) &&
      this.root.activeElement == this.contentDOM
    )
  }
  focus() {
    this.observer.ignore(() => {
      Eo(this.contentDOM), this.docView.updateSelection()
    })
  }
  setRoot(e) {
    this._root != e &&
      ((this._root = e),
      this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window),
      this.mountStyles())
  }
  destroy() {
    for (let e of this.plugins) e.destroy(this)
    ;(this.plugins = []),
      this.inputState.destroy(),
      this.dom.remove(),
      this.observer.destroy(),
      this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled),
      (this.destroyed = !0)
  }
  static scrollIntoView(e, t = {}) {
    return sr.of(new Mi(typeof e == 'number' ? y.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin))
  }
  static domEventHandlers(e) {
    return W.define(() => ({}), { eventHandlers: e })
  }
  static theme(e, t) {
    let i = He.newName(),
      s = [li.of(i), Tt.of(_n(`.${i}`, e))]
    return t && t.dark && s.push(Qn.of(!0)), s
  }
  static baseTheme(e) {
    return xt.lowest(Tt.of(_n('.' + Zn, e, wl)))
  }
  static findFromDOM(e) {
    var t
    let i = e.querySelector('.cm-content'),
      s = (i && I.get(i)) || I.get(e)
    return (
      ((t = s == null ? void 0 : s.rootView) === null || t === void 0 ? void 0 : t.view) || null
    )
  }
}
S.styleModule = Tt
S.inputHandler = Xo
S.perLineTextDirection = Qo
S.exceptionSink = Yo
S.updateListener = jn
S.editable = Gi
S.mouseSelectionStyle = Jo
S.dragMovesSelection = Go
S.clickAddsSelectionRange = Uo
S.decorations = qt
S.atomicRanges = el
S.scrollMargins = tl
S.darkTheme = Qn
S.contentAttributes = _o
S.editorAttributes = Zo
S.lineWrapping = S.contentAttributes.of({ class: 'cm-lineWrapping' })
S.announce = A.define()
const Vc = 4096,
  Dr = {}
class Ti {
  constructor(e, t, i, s) {
    ;(this.from = e), (this.to = t), (this.dir = i), (this.order = s)
  }
  static update(e, t) {
    if (t.empty) return e
    let i = [],
      s = e.length ? e[e.length - 1].dir : F.LTR
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r]
      o.dir == s &&
        !t.touchesRange(o.from, o.to) &&
        i.push(new Ti(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.order))
    }
    return i
  }
}
function Tr(n, e, t) {
  for (let i = n.state.facet(e), s = i.length - 1; s >= 0; s--) {
    let r = i[s],
      o = typeof r == 'function' ? r(n) : r
    o && qn(o, t)
  }
  return t
}
const Fc = w.mac ? 'mac' : w.windows ? 'win' : w.linux ? 'linux' : 'key'
function Hc(n, e) {
  const t = n.split(/-(?!$)/)
  let i = t[t.length - 1]
  i == 'Space' && (i = ' ')
  let s, r, o, l
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a]
    if (/^(cmd|meta|m)$/i.test(h)) l = !0
    else if (/^a(lt)?$/i.test(h)) s = !0
    else if (/^(c|ctrl|control)$/i.test(h)) r = !0
    else if (/^s(hift)?$/i.test(h)) o = !0
    else if (/^mod$/i.test(h)) e == 'mac' ? (l = !0) : (r = !0)
    else throw new Error('Unrecognized modifier name: ' + h)
  }
  return (
    s && (i = 'Alt-' + i),
    r && (i = 'Ctrl-' + i),
    l && (i = 'Meta-' + i),
    o && (i = 'Shift-' + i),
    i
  )
}
function ai(n, e, t) {
  return (
    e.altKey && (n = 'Alt-' + n),
    e.ctrlKey && (n = 'Ctrl-' + n),
    e.metaKey && (n = 'Meta-' + n),
    t !== !1 && e.shiftKey && (n = 'Shift-' + n),
    n
  )
}
const Wc = xt.default(
    S.domEventHandlers({
      keydown(n, e) {
        return Sl(kl(e.state), n, e, 'editor')
      }
    })
  ),
  vl = x.define({ enables: Wc }),
  Or = new WeakMap()
function kl(n) {
  let e = n.facet(vl),
    t = Or.get(e)
  return t || Or.set(e, (t = $c(e.reduce((i, s) => i.concat(s), [])))), t
}
function zc(n, e, t) {
  return Sl(kl(n.state), e, n, t)
}
let Re = null
const qc = 4e3
function $c(n, e = Fc) {
  let t = Object.create(null),
    i = Object.create(null),
    s = (o, l) => {
      let a = i[o]
      if (a == null) i[o] = l
      else if (a != l)
        throw new Error(
          'Key binding ' + o + ' is used both as a regular binding and as a multi-stroke prefix'
        )
    },
    r = (o, l, a, h) => {
      var c, f
      let u = t[o] || (t[o] = Object.create(null)),
        d = l.split(/ (?!$)/).map(m => Hc(m, e))
      for (let m = 1; m < d.length; m++) {
        let b = d.slice(0, m).join(' ')
        s(b, !0),
          u[b] ||
            (u[b] = {
              preventDefault: !0,
              run: [
                v => {
                  let C = (Re = { view: v, prefix: b, scope: o })
                  return (
                    setTimeout(() => {
                      Re == C && (Re = null)
                    }, qc),
                    !0
                  )
                }
              ]
            })
      }
      let p = d.join(' ')
      s(p, !1)
      let g =
        u[p] ||
        (u[p] = {
          preventDefault: !1,
          run:
            ((f = (c = u._any) === null || c === void 0 ? void 0 : c.run) === null || f === void 0
              ? void 0
              : f.slice()) || []
        })
      a && g.run.push(a), h && (g.preventDefault = !0)
    }
  for (let o of n) {
    let l = o.scope ? o.scope.split(' ') : ['editor']
    if (o.any)
      for (let h of l) {
        let c = t[h] || (t[h] = Object.create(null))
        c._any || (c._any = { preventDefault: !1, run: [] })
        for (let f in c) c[f].run.push(o.any)
      }
    let a = o[e] || o.key
    if (!!a)
      for (let h of l)
        r(h, a, o.run, o.preventDefault), o.shift && r(h, 'Shift-' + a, o.shift, o.preventDefault)
  }
  return t
}
function Sl(n, e, t, i) {
  let s = oh(e),
    r = j(s, 0),
    o = oe(r) == s.length && s != ' ',
    l = '',
    a = !1
  Re &&
    Re.view == t &&
    Re.scope == i &&
    ((l = Re.prefix + ' '), (a = cl.indexOf(e.keyCode) < 0) && (Re = null))
  let h = new Set(),
    c = p => {
      if (p) {
        for (let g of p.run) if (!h.has(g) && (h.add(g), g(t, e))) return !0
        p.preventDefault && (a = !0)
      }
      return !1
    },
    f = n[i],
    u,
    d
  if (f) {
    if (c(f[l + ai(s, e, !o)])) return !0
    if (o && (e.shiftKey || e.altKey || e.metaKey || r > 127) && (u = lh[e.keyCode]) && u != s) {
      if (c(f[l + ai(u, e, !0)])) return !0
      if (e.shiftKey && (d = ah[e.keyCode]) != s && d != u && c(f[l + ai(d, e, !1)])) return !0
    } else if (o && e.shiftKey && c(f[l + ai(s, e, !0)])) return !0
    if (c(f._any)) return !0
  }
  return a
}
const Cl = !w.ios,
  Bt = x.define({
    combine(n) {
      return Ce(
        n,
        { cursorBlinkRate: 1200, drawRangeCursor: !0 },
        { cursorBlinkRate: (e, t) => Math.min(e, t), drawRangeCursor: (e, t) => e || t }
      )
    }
  })
function Up(n = {}) {
  return [Bt.of(n), Kc, jc]
}
class Al {
  constructor(e, t, i, s, r) {
    ;(this.left = e), (this.top = t), (this.width = i), (this.height = s), (this.className = r)
  }
  draw() {
    let e = document.createElement('div')
    return (e.className = this.className), this.adjust(e), e
  }
  adjust(e) {
    ;(e.style.left = this.left + 'px'),
      (e.style.top = this.top + 'px'),
      this.width >= 0 && (e.style.width = this.width + 'px'),
      (e.style.height = this.height + 'px')
  }
  eq(e) {
    return (
      this.left == e.left &&
      this.top == e.top &&
      this.width == e.width &&
      this.height == e.height &&
      this.className == e.className
    )
  }
}
const Kc = W.fromClass(
    class {
      constructor(n) {
        ;(this.view = n),
          (this.rangePieces = []),
          (this.cursors = []),
          (this.measureReq = { read: this.readPos.bind(this), write: this.drawSel.bind(this) }),
          (this.selectionLayer = n.scrollDOM.appendChild(document.createElement('div'))),
          (this.selectionLayer.className = 'cm-selectionLayer'),
          this.selectionLayer.setAttribute('aria-hidden', 'true'),
          (this.cursorLayer = n.scrollDOM.appendChild(document.createElement('div'))),
          (this.cursorLayer.className = 'cm-cursorLayer'),
          this.cursorLayer.setAttribute('aria-hidden', 'true'),
          n.requestMeasure(this.measureReq),
          this.setBlinkRate()
      }
      setBlinkRate() {
        this.cursorLayer.style.animationDuration = this.view.state.facet(Bt).cursorBlinkRate + 'ms'
      }
      update(n) {
        let e = n.startState.facet(Bt) != n.state.facet(Bt)
        ;(e || n.selectionSet || n.geometryChanged || n.viewportChanged) &&
          this.view.requestMeasure(this.measureReq),
          n.transactions.some(t => t.scrollIntoView) &&
            (this.cursorLayer.style.animationName =
              this.cursorLayer.style.animationName == 'cm-blink' ? 'cm-blink2' : 'cm-blink'),
          e && this.setBlinkRate()
      }
      readPos() {
        let { state: n } = this.view,
          e = n.facet(Bt),
          t = n.selection.ranges
            .map(s => (s.empty ? [] : Uc(this.view, s)))
            .reduce((s, r) => s.concat(r)),
          i = []
        for (let s of n.selection.ranges) {
          let r = s == n.selection.main
          if (s.empty ? !r || Cl : e.drawRangeCursor) {
            let o = Gc(this.view, s, r)
            o && i.push(o)
          }
        }
        return { rangePieces: t, cursors: i }
      }
      drawSel({ rangePieces: n, cursors: e }) {
        if (n.length != this.rangePieces.length || n.some((t, i) => !t.eq(this.rangePieces[i]))) {
          this.selectionLayer.textContent = ''
          for (let t of n) this.selectionLayer.appendChild(t.draw())
          this.rangePieces = n
        }
        if (e.length != this.cursors.length || e.some((t, i) => !t.eq(this.cursors[i]))) {
          let t = this.cursorLayer.children
          if (t.length !== e.length) {
            this.cursorLayer.textContent = ''
            for (const i of e) this.cursorLayer.appendChild(i.draw())
          } else e.forEach((i, s) => i.adjust(t[s]))
          this.cursors = e
        }
      }
      destroy() {
        this.selectionLayer.remove(), this.cursorLayer.remove()
      }
    }
  ),
  Ml = {
    '.cm-line': {
      '& ::selection': { backgroundColor: 'transparent !important' },
      '&::selection': { backgroundColor: 'transparent !important' }
    }
  }
Cl && (Ml['.cm-line'].caretColor = 'transparent !important')
const jc = xt.highest(S.theme(Ml))
function Dl(n) {
  let e = n.scrollDOM.getBoundingClientRect()
  return {
    left:
      (n.textDirection == F.LTR ? e.left : e.right - n.scrollDOM.clientWidth) -
      n.scrollDOM.scrollLeft,
    top: e.top - n.scrollDOM.scrollTop
  }
}
function Br(n, e, t) {
  let i = y.cursor(e)
  return {
    from: Math.max(t.from, n.moveToLineBoundary(i, !1, !0).from),
    to: Math.min(t.to, n.moveToLineBoundary(i, !0, !0).from),
    type: E.Text
  }
}
function Lr(n, e) {
  let t = n.lineBlockAt(e)
  if (Array.isArray(t.type)) {
    for (let i of t.type)
      if (i.to > e || (i.to == e && (i.to == t.to || i.type == E.Text))) return i
  }
  return t
}
function Uc(n, e) {
  if (e.to <= n.viewport.from || e.from >= n.viewport.to) return []
  let t = Math.max(e.from, n.viewport.from),
    i = Math.min(e.to, n.viewport.to),
    s = n.textDirection == F.LTR,
    r = n.contentDOM,
    o = r.getBoundingClientRect(),
    l = Dl(n),
    a = window.getComputedStyle(r.firstChild),
    h = o.left + parseInt(a.paddingLeft) + Math.min(0, parseInt(a.textIndent)),
    c = o.right - parseInt(a.paddingRight),
    f = Lr(n, t),
    u = Lr(n, i),
    d = f.type == E.Text ? f : null,
    p = u.type == E.Text ? u : null
  if (
    (n.lineWrapping && (d && (d = Br(n, t, d)), p && (p = Br(n, i, p))), d && p && d.from == p.from)
  )
    return m(b(e.from, e.to, d))
  {
    let C = d ? b(e.from, null, d) : v(f, !1),
      M = p ? b(null, e.to, p) : v(u, !0),
      T = []
    return (
      (d || f).to < (p || u).from - 1
        ? T.push(g(h, C.bottom, c, M.top))
        : C.bottom < M.top &&
          n.elementAtHeight((C.bottom + M.top) / 2).type == E.Text &&
          (C.bottom = M.top = (C.bottom + M.top) / 2),
      m(C).concat(T).concat(m(M))
    )
  }
  function g(C, M, T, ne) {
    return new Al(C - l.left, M - l.top - 0.01, T - C, ne - M + 0.01, 'cm-selectionBackground')
  }
  function m({ top: C, bottom: M, horizontal: T }) {
    let ne = []
    for (let ce = 0; ce < T.length; ce += 2) ne.push(g(T[ce], C, T[ce + 1], M))
    return ne
  }
  function b(C, M, T) {
    let ne = 1e9,
      ce = -1e9,
      Zt = []
    function qs(Ke, Oe, tt, je, kt) {
      let Be = n.coordsAtPos(Ke, Ke == T.to ? -2 : 2),
        Le = n.coordsAtPos(tt, tt == T.from ? 2 : -2)
      ;(ne = Math.min(Be.top, Le.top, ne)),
        (ce = Math.max(Be.bottom, Le.bottom, ce)),
        kt == F.LTR
          ? Zt.push(s && Oe ? h : Be.left, s && je ? c : Le.right)
          : Zt.push(!s && je ? h : Le.left, !s && Oe ? c : Be.right)
    }
    let _t = C != null ? C : T.from,
      ei = M != null ? M : T.to
    for (let Ke of n.visibleRanges)
      if (Ke.to > _t && Ke.from < ei)
        for (let Oe = Math.max(Ke.from, _t), tt = Math.min(Ke.to, ei); ; ) {
          let je = n.state.doc.lineAt(Oe)
          for (let kt of n.bidiSpans(je)) {
            let Be = kt.from + je.from,
              Le = kt.to + je.from
            if (Be >= tt) break
            Le > Oe &&
              qs(
                Math.max(Be, Oe),
                C == null && Be <= _t,
                Math.min(Le, tt),
                M == null && Le >= ei,
                kt.dir
              )
          }
          if (((Oe = je.to + 1), Oe >= tt)) break
        }
    return (
      Zt.length == 0 && qs(_t, C == null, ei, M == null, n.textDirection),
      { top: ne, bottom: ce, horizontal: Zt }
    )
  }
  function v(C, M) {
    let T = o.top + (M ? C.top : C.bottom)
    return { top: T, bottom: T, horizontal: [] }
  }
}
function Gc(n, e, t) {
  let i = n.coordsAtPos(e.head, e.assoc || 1)
  if (!i) return null
  let s = Dl(n)
  return new Al(
    i.left - s.left,
    i.top - s.top,
    -1,
    i.bottom - i.top,
    t ? 'cm-cursor cm-cursor-primary' : 'cm-cursor cm-cursor-secondary'
  )
}
const Tl = A.define({
    map(n, e) {
      return n == null ? null : e.mapPos(n)
    }
  }),
  Lt = U.define({
    create() {
      return null
    },
    update(n, e) {
      return (
        n != null && (n = e.changes.mapPos(n)),
        e.effects.reduce((t, i) => (i.is(Tl) ? i.value : t), n)
      )
    }
  }),
  Jc = W.fromClass(
    class {
      constructor(n) {
        ;(this.view = n),
          (this.cursor = null),
          (this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) })
      }
      update(n) {
        var e
        let t = n.state.field(Lt)
        t == null
          ? this.cursor != null &&
            ((e = this.cursor) === null || e === void 0 || e.remove(), (this.cursor = null))
          : (this.cursor ||
              ((this.cursor = this.view.scrollDOM.appendChild(document.createElement('div'))),
              (this.cursor.className = 'cm-dropCursor')),
            (n.startState.field(Lt) != t || n.docChanged || n.geometryChanged) &&
              this.view.requestMeasure(this.measureReq))
      }
      readPos() {
        let n = this.view.state.field(Lt),
          e = n != null && this.view.coordsAtPos(n)
        if (!e) return null
        let t = this.view.scrollDOM.getBoundingClientRect()
        return {
          left: e.left - t.left + this.view.scrollDOM.scrollLeft,
          top: e.top - t.top + this.view.scrollDOM.scrollTop,
          height: e.bottom - e.top
        }
      }
      drawCursor(n) {
        this.cursor &&
          (n
            ? ((this.cursor.style.left = n.left + 'px'),
              (this.cursor.style.top = n.top + 'px'),
              (this.cursor.style.height = n.height + 'px'))
            : (this.cursor.style.left = '-100000px'))
      }
      destroy() {
        this.cursor && this.cursor.remove()
      }
      setDropPos(n) {
        this.view.state.field(Lt) != n && this.view.dispatch({ effects: Tl.of(n) })
      }
    },
    {
      eventHandlers: {
        dragover(n) {
          this.setDropPos(this.view.posAtCoords({ x: n.clientX, y: n.clientY }))
        },
        dragleave(n) {
          ;(n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) &&
            this.setDropPos(null)
        },
        dragend() {
          this.setDropPos(null)
        },
        drop() {
          this.setDropPos(null)
        }
      }
    }
  )
function Gp() {
  return [Lt, Jc]
}
function Rr(n, e, t, i, s) {
  e.lastIndex = 0
  for (let r = n.iterRange(t, i), o = t, l; !r.next().done; o += r.value.length)
    if (!r.lineBreak) for (; (l = e.exec(r.value)); ) s(o + l.index, l)
}
function Yc(n, e) {
  let t = n.visibleRanges
  if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to) return t
  let i = []
  for (let { from: s, to: r } of t)
    (s = Math.max(n.state.doc.lineAt(s).from, s - e)),
      (r = Math.min(n.state.doc.lineAt(r).to, r + e)),
      i.length && i[i.length - 1].to >= s ? (i[i.length - 1].to = r) : i.push({ from: s, to: r })
  return i
}
class Xc {
  constructor(e) {
    const { regexp: t, decoration: i, decorate: s, boundary: r, maxLength: o = 1e3 } = e
    if (!t.global)
      throw new RangeError(
        "The regular expression given to MatchDecorator should have its 'g' flag set"
      )
    if (((this.regexp = t), s)) this.addMatch = (l, a, h, c) => s(c, h, h + l[0].length, l, a)
    else if (typeof i == 'function')
      this.addMatch = (l, a, h, c) => {
        let f = i(l, a, h)
        f && c(h, h + l[0].length, f)
      }
    else if (i) this.addMatch = (l, a, h, c) => c(h, h + l[0].length, i)
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator")
    ;(this.boundary = r), (this.maxLength = o)
  }
  createDeco(e) {
    let t = new We(),
      i = t.add.bind(t)
    for (let { from: s, to: r } of Yc(e, this.maxLength))
      Rr(e.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, e, o, i))
    return t.finish()
  }
  updateDeco(e, t) {
    let i = 1e9,
      s = -1
    return (
      e.docChanged &&
        e.changes.iterChanges((r, o, l, a) => {
          a > e.view.viewport.from &&
            l < e.view.viewport.to &&
            ((i = Math.min(l, i)), (s = Math.max(a, s)))
        }),
      e.viewportChanged || s - i > 1e3
        ? this.createDeco(e.view)
        : s > -1
        ? this.updateRange(e.view, t.map(e.changes), i, s)
        : t
    )
  }
  updateRange(e, t, i, s) {
    for (let r of e.visibleRanges) {
      let o = Math.max(r.from, i),
        l = Math.min(r.to, s)
      if (l > o) {
        let a = e.state.doc.lineAt(o),
          h = a.to < l ? e.state.doc.lineAt(l) : a,
          c = Math.max(r.from, a.from),
          f = Math.min(r.to, h.to)
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              c = o
              break
            }
          for (; l < h.to; l++)
            if (this.boundary.test(h.text[l - h.from])) {
              f = l
              break
            }
        }
        let u = [],
          d,
          p = (g, m, b) => u.push(b.range(g, m))
        if (a == h)
          for (
            this.regexp.lastIndex = c - a.from;
            (d = this.regexp.exec(a.text)) && d.index < f - a.from;

          )
            this.addMatch(d, e, d.index + a.from, p)
        else Rr(e.state.doc, this.regexp, c, f, (g, m) => this.addMatch(m, e, g, p))
        t = t.update({ filterFrom: c, filterTo: f, filter: (g, m) => g < c || m > f, add: u })
      }
    }
    return t
  }
}
const es = /x/.unicode != null ? 'gu' : 'g',
  Qc = new RegExp(
    `[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\u2066\u2067\u2069\uFEFF\uFFF9-\uFFFC]`,
    es
  ),
  Zc = {
    0: 'null',
    7: 'bell',
    8: 'backspace',
    10: 'newline',
    11: 'vertical tab',
    13: 'carriage return',
    27: 'escape',
    8203: 'zero width space',
    8204: 'zero width non-joiner',
    8205: 'zero width joiner',
    8206: 'left-to-right mark',
    8207: 'right-to-left mark',
    8232: 'line separator',
    8237: 'left-to-right override',
    8238: 'right-to-left override',
    8294: 'left-to-right isolate',
    8295: 'right-to-left isolate',
    8297: 'pop directional isolate',
    8233: 'paragraph separator',
    65279: 'zero width no-break space',
    65532: 'object replacement'
  }
let un = null
function _c() {
  var n
  if (un == null && typeof document < 'u' && document.body) {
    let e = document.body.style
    un = ((n = e.tabSize) !== null && n !== void 0 ? n : e.MozTabSize) != null
  }
  return un || !1
}
const wi = x.define({
  combine(n) {
    let e = Ce(n, { render: null, specialChars: Qc, addSpecialChars: null })
    return (
      (e.replaceTabs = !_c()) && (e.specialChars = new RegExp('	|' + e.specialChars.source, es)),
      e.addSpecialChars &&
        (e.specialChars = new RegExp(e.specialChars.source + '|' + e.addSpecialChars.source, es)),
      e
    )
  }
})
function Jp(n = {}) {
  return [wi.of(n), ef()]
}
let Er = null
function ef() {
  return (
    Er ||
    (Er = W.fromClass(
      class {
        constructor(n) {
          ;(this.view = n),
            (this.decorations = k.none),
            (this.decorationCache = Object.create(null)),
            (this.decorator = this.makeDecorator(n.state.facet(wi))),
            (this.decorations = this.decorator.createDeco(n))
        }
        makeDecorator(n) {
          return new Xc({
            regexp: n.specialChars,
            decoration: (e, t, i) => {
              let { doc: s } = t.state,
                r = j(e[0], 0)
              if (r == 9) {
                let o = s.lineAt(i),
                  l = t.state.tabSize,
                  a = Jt(o.text, l, i - o.from)
                return k.replace({
                  widget: new rf((l - (a % l)) * this.view.defaultCharacterWidth)
                })
              }
              return (
                this.decorationCache[r] ||
                (this.decorationCache[r] = k.replace({ widget: new sf(n, r) }))
              )
            },
            boundary: n.replaceTabs ? void 0 : /[^]/
          })
        }
        update(n) {
          let e = n.state.facet(wi)
          n.startState.facet(wi) != e
            ? ((this.decorator = this.makeDecorator(e)),
              (this.decorations = this.decorator.createDeco(n.view)))
            : (this.decorations = this.decorator.updateDeco(n, this.decorations))
        }
      },
      { decorations: n => n.decorations }
    ))
  )
}
const tf = '\u2022'
function nf(n) {
  return n >= 32 ? tf : n == 10 ? '\u2424' : String.fromCharCode(9216 + n)
}
class sf extends Te {
  constructor(e, t) {
    super(), (this.options = e), (this.code = t)
  }
  eq(e) {
    return e.code == this.code
  }
  toDOM(e) {
    let t = nf(this.code),
      i =
        e.state.phrase('Control character') +
        ' ' +
        (Zc[this.code] || '0x' + this.code.toString(16)),
      s = this.options.render && this.options.render(this.code, i, t)
    if (s) return s
    let r = document.createElement('span')
    return (
      (r.textContent = t),
      (r.title = i),
      r.setAttribute('aria-label', i),
      (r.className = 'cm-specialChar'),
      r
    )
  }
  ignoreEvent() {
    return !1
  }
}
class rf extends Te {
  constructor(e) {
    super(), (this.width = e)
  }
  eq(e) {
    return e.width == this.width
  }
  toDOM() {
    let e = document.createElement('span')
    return (e.textContent = '	'), (e.className = 'cm-tab'), (e.style.width = this.width + 'px'), e
  }
  ignoreEvent() {
    return !1
  }
}
function Yp() {
  return lf
}
const of = k.line({ class: 'cm-activeLine' }),
  lf = W.fromClass(
    class {
      constructor(n) {
        this.decorations = this.getDeco(n)
      }
      update(n) {
        ;(n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view))
      }
      getDeco(n) {
        let e = -1,
          t = []
        for (let i of n.state.selection.ranges) {
          let s = n.lineBlockAt(i.head)
          s.from > e && (t.push(of.range(s.from)), (e = s.from))
        }
        return k.set(t)
      }
    },
    { decorations: n => n.decorations }
  )
class af extends Te {
  constructor(e) {
    super(), (this.content = e)
  }
  toDOM() {
    let e = document.createElement('span')
    return (
      (e.className = 'cm-placeholder'),
      (e.style.pointerEvents = 'none'),
      e.appendChild(
        typeof this.content == 'string' ? document.createTextNode(this.content) : this.content
      ),
      typeof this.content == 'string'
        ? e.setAttribute('aria-label', 'placeholder ' + this.content)
        : e.setAttribute('aria-hidden', 'true'),
      e
    )
  }
  ignoreEvent() {
    return !1
  }
}
function Xp(n) {
  return W.fromClass(
    class {
      constructor(e) {
        ;(this.view = e),
          (this.placeholder = k.set([k.widget({ widget: new af(n), side: 1 }).range(0)]))
      }
      get decorations() {
        return this.view.state.doc.length ? k.none : this.placeholder
      }
    },
    { decorations: e => e.decorations }
  )
}
const ts = 2e3
function hf(n, e, t) {
  let i = Math.min(e.line, t.line),
    s = Math.max(e.line, t.line),
    r = []
  if (e.off > ts || t.off > ts || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off),
      l = Math.max(e.off, t.off)
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a)
      h.length <= l && r.push(y.range(h.from + o, h.to + l))
    }
  } else {
    let o = Math.min(e.col, t.col),
      l = Math.max(e.col, t.col)
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a),
        c = Nn(h.text, o, n.tabSize, !0)
      if (c < 0) r.push(y.cursor(h.to))
      else {
        let f = Nn(h.text, l, n.tabSize)
        r.push(y.range(h.from + c, h.from + f))
      }
    }
  }
  return r
}
function cf(n, e) {
  let t = n.coordsAtPos(n.viewport.from)
  return t ? Math.round(Math.abs((t.left - e) / n.defaultCharacterWidth)) : -1
}
function Pr(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
    i = n.state.doc.lineAt(t),
    s = t - i.from,
    r = s > ts ? -1 : s == i.length ? cf(n, e.clientX) : Jt(i.text, n.state.tabSize, t - i.from)
  return { line: i.number, col: r, off: s }
}
function ff(n, e) {
  let t = Pr(n, e),
    i = n.state.selection
  return t
    ? {
        update(s) {
          if (s.docChanged) {
            let r = s.changes.mapPos(s.startState.doc.line(t.line).from),
              o = s.state.doc.lineAt(r)
            ;(t = { line: o.number, col: t.col, off: Math.min(t.off, o.length) }),
              (i = i.map(s.changes))
          }
        },
        get(s, r, o) {
          let l = Pr(n, s)
          if (!l) return i
          let a = hf(n.state, t, l)
          return a.length ? (o ? y.create(a.concat(i.ranges)) : y.create(a)) : i
        }
      }
    : null
}
function Qp(n) {
  let e = (n == null ? void 0 : n.eventFilter) || (t => t.altKey && t.button == 0)
  return S.mouseSelectionStyle.of((t, i) => (e(i) ? ff(t, i) : null))
}
const uf = {
    Alt: [18, n => n.altKey],
    Control: [17, n => n.ctrlKey],
    Shift: [16, n => n.shiftKey],
    Meta: [91, n => n.metaKey]
  },
  df = { style: 'cursor: crosshair' }
function Zp(n = {}) {
  let [e, t] = uf[n.key || 'Alt'],
    i = W.fromClass(
      class {
        constructor(s) {
          ;(this.view = s), (this.isDown = !1)
        }
        set(s) {
          this.isDown != s && ((this.isDown = s), this.view.update([]))
        }
      },
      {
        eventHandlers: {
          keydown(s) {
            this.set(s.keyCode == e || t(s))
          },
          keyup(s) {
            ;(s.keyCode == e || !t(s)) && this.set(!1)
          }
        }
      }
    )
  return [
    i,
    S.contentAttributes.of(s => {
      var r
      return !((r = s.plugin(i)) === null || r === void 0) && r.isDown ? df : null
    })
  ]
}
const dn = '-10000px'
class Ol {
  constructor(e, t, i) {
    ;(this.facet = t),
      (this.createTooltipView = i),
      (this.input = e.state.facet(t)),
      (this.tooltips = this.input.filter(s => s)),
      (this.tooltipViews = this.tooltips.map(i))
  }
  update(e) {
    var t
    let i = e.state.facet(this.facet),
      s = i.filter(o => o)
    if (i === this.input) {
      for (let o of this.tooltipViews) o.update && o.update(e)
      return !1
    }
    let r = []
    for (let o = 0; o < s.length; o++) {
      let l = s[o],
        a = -1
      if (!!l) {
        for (let h = 0; h < this.tooltips.length; h++) {
          let c = this.tooltips[h]
          c && c.create == l.create && (a = h)
        }
        if (a < 0) r[o] = this.createTooltipView(l)
        else {
          let h = (r[o] = this.tooltipViews[a])
          h.update && h.update(e)
        }
      }
    }
    for (let o of this.tooltipViews)
      r.indexOf(o) < 0 && (o.dom.remove(), (t = o.destroy) === null || t === void 0 || t.call(o))
    return (this.input = i), (this.tooltips = s), (this.tooltipViews = r), !0
  }
}
function pf(n) {
  let { win: e } = n
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth }
}
const pn = x.define({
    combine: n => {
      var e, t, i
      return {
        position: w.ios
          ? 'absolute'
          : ((e = n.find(s => s.position)) === null || e === void 0 ? void 0 : e.position) ||
            'fixed',
        parent: ((t = n.find(s => s.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
        tooltipSpace:
          ((i = n.find(s => s.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) ||
          pf
      }
    }
  }),
  Bl = W.fromClass(
    class {
      constructor(n) {
        ;(this.view = n), (this.inView = !0), (this.lastTransaction = 0), (this.measureTimeout = -1)
        let e = n.state.facet(pn)
        ;(this.position = e.position),
          (this.parent = e.parent),
          (this.classes = n.themeClasses),
          this.createContainer(),
          (this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }),
          (this.manager = new Ol(n, ks, t => this.createTooltip(t))),
          (this.intersectionObserver =
            typeof IntersectionObserver == 'function'
              ? new IntersectionObserver(
                  t => {
                    Date.now() > this.lastTransaction - 50 &&
                      t.length > 0 &&
                      t[t.length - 1].intersectionRatio < 1 &&
                      this.measureSoon()
                  },
                  { threshold: [1] }
                )
              : null),
          this.observeIntersection(),
          n.win.addEventListener('resize', (this.measureSoon = this.measureSoon.bind(this))),
          this.maybeMeasure()
      }
      createContainer() {
        this.parent
          ? ((this.container = document.createElement('div')),
            (this.container.style.position = 'relative'),
            (this.container.className = this.view.themeClasses),
            this.parent.appendChild(this.container))
          : (this.container = this.view.dom)
      }
      observeIntersection() {
        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect()
          for (let n of this.manager.tooltipViews) this.intersectionObserver.observe(n.dom)
        }
      }
      measureSoon() {
        this.measureTimeout < 0 &&
          (this.measureTimeout = setTimeout(() => {
            ;(this.measureTimeout = -1), this.maybeMeasure()
          }, 50))
      }
      update(n) {
        n.transactions.length && (this.lastTransaction = Date.now())
        let e = this.manager.update(n)
        e && this.observeIntersection()
        let t = e || n.geometryChanged,
          i = n.state.facet(pn)
        if (i.position != this.position) {
          this.position = i.position
          for (let s of this.manager.tooltipViews) s.dom.style.position = this.position
          t = !0
        }
        if (i.parent != this.parent) {
          this.parent && this.container.remove(), (this.parent = i.parent), this.createContainer()
          for (let s of this.manager.tooltipViews) this.container.appendChild(s.dom)
          t = !0
        } else
          this.parent &&
            this.view.themeClasses != this.classes &&
            (this.classes = this.container.className = this.view.themeClasses)
        t && this.maybeMeasure()
      }
      createTooltip(n) {
        let e = n.create(this.view)
        if (
          (e.dom.classList.add('cm-tooltip'),
          n.arrow && !e.dom.querySelector('.cm-tooltip > .cm-tooltip-arrow'))
        ) {
          let t = document.createElement('div')
          ;(t.className = 'cm-tooltip-arrow'), e.dom.appendChild(t)
        }
        return (
          (e.dom.style.position = this.position),
          (e.dom.style.top = dn),
          this.container.appendChild(e.dom),
          e.mount && e.mount(this.view),
          e
        )
      }
      destroy() {
        var n, e
        this.view.win.removeEventListener('resize', this.measureSoon)
        for (let t of this.manager.tooltipViews)
          t.dom.remove(), (n = t.destroy) === null || n === void 0 || n.call(t)
        ;(e = this.intersectionObserver) === null || e === void 0 || e.disconnect(),
          clearTimeout(this.measureTimeout)
      }
      readMeasure() {
        let n = this.view.dom.getBoundingClientRect()
        return {
          editor: n,
          parent: this.parent ? this.container.getBoundingClientRect() : n,
          pos: this.manager.tooltips.map((e, t) => {
            let i = this.manager.tooltipViews[t]
            return i.getCoords ? i.getCoords(e.pos) : this.view.coordsAtPos(e.pos)
          }),
          size: this.manager.tooltipViews.map(({ dom: e }) => e.getBoundingClientRect()),
          space: this.view.state.facet(pn).tooltipSpace(this.view)
        }
      }
      writeMeasure(n) {
        let { editor: e, space: t } = n,
          i = []
        for (let s = 0; s < this.manager.tooltips.length; s++) {
          let r = this.manager.tooltips[s],
            o = this.manager.tooltipViews[s],
            { dom: l } = o,
            a = n.pos[s],
            h = n.size[s]
          if (
            !a ||
            a.bottom <= Math.max(e.top, t.top) ||
            a.top >= Math.min(e.bottom, t.bottom) ||
            a.right < Math.max(e.left, t.left) - 0.1 ||
            a.left > Math.min(e.right, t.right) + 0.1
          ) {
            l.style.top = dn
            continue
          }
          let c = r.arrow ? o.dom.querySelector('.cm-tooltip-arrow') : null,
            f = c ? 7 : 0,
            u = h.right - h.left,
            d = h.bottom - h.top,
            p = o.offset || gf,
            g = this.view.textDirection == F.LTR,
            m =
              h.width > t.right - t.left
                ? g
                  ? t.left
                  : t.right - h.width
                : g
                ? Math.min(a.left - (c ? 14 : 0) + p.x, t.right - u)
                : Math.max(t.left, a.left - u + (c ? 14 : 0) - p.x),
            b = !!r.above
          !r.strictSide &&
            (b
              ? a.top - (h.bottom - h.top) - p.y < t.top
              : a.bottom + (h.bottom - h.top) + p.y > t.bottom) &&
            b == t.bottom - a.bottom > a.top - t.top &&
            (b = !b)
          let v = b ? a.top - d - f - p.y : a.bottom + f + p.y,
            C = m + u
          if (o.overlap !== !0)
            for (let M of i)
              M.left < C &&
                M.right > m &&
                M.top < v + d &&
                M.bottom > v &&
                (v = b ? M.top - d - 2 - f : M.bottom + f + 2)
          this.position == 'absolute'
            ? ((l.style.top = v - n.parent.top + 'px'), (l.style.left = m - n.parent.left + 'px'))
            : ((l.style.top = v + 'px'), (l.style.left = m + 'px')),
            c && (c.style.left = `${a.left + (g ? p.x : -p.x) - (m + 14 - 7)}px`),
            o.overlap !== !0 && i.push({ left: m, top: v, right: C, bottom: v + d }),
            l.classList.toggle('cm-tooltip-above', b),
            l.classList.toggle('cm-tooltip-below', !b),
            o.positioned && o.positioned()
        }
      }
      maybeMeasure() {
        if (
          this.manager.tooltips.length &&
          (this.view.inView && this.view.requestMeasure(this.measureReq),
          this.inView != this.view.inView && ((this.inView = this.view.inView), !this.inView))
        )
          for (let n of this.manager.tooltipViews) n.dom.style.top = dn
      }
    },
    {
      eventHandlers: {
        scroll() {
          this.maybeMeasure()
        }
      }
    }
  ),
  mf = S.baseTheme({
    '.cm-tooltip': { zIndex: 100 },
    '&light .cm-tooltip': { border: '1px solid #bbb', backgroundColor: '#f5f5f5' },
    '&light .cm-tooltip-section:not(:first-child)': { borderTop: '1px solid #bbb' },
    '&dark .cm-tooltip': { backgroundColor: '#333338', color: 'white' },
    '.cm-tooltip-arrow': {
      height: `${7}px`,
      width: `${7 * 2}px`,
      position: 'absolute',
      zIndex: -1,
      overflow: 'hidden',
      '&:before, &:after': {
        content: "''",
        position: 'absolute',
        width: 0,
        height: 0,
        borderLeft: `${7}px solid transparent`,
        borderRight: `${7}px solid transparent`
      },
      '.cm-tooltip-above &': {
        bottom: `-${7}px`,
        '&:before': { borderTop: `${7}px solid #bbb` },
        '&:after': { borderTop: `${7}px solid #f5f5f5`, bottom: '1px' }
      },
      '.cm-tooltip-below &': {
        top: `-${7}px`,
        '&:before': { borderBottom: `${7}px solid #bbb` },
        '&:after': { borderBottom: `${7}px solid #f5f5f5`, top: '1px' }
      }
    },
    '&dark .cm-tooltip .cm-tooltip-arrow': {
      '&:before': { borderTopColor: '#333338', borderBottomColor: '#333338' },
      '&:after': { borderTopColor: 'transparent', borderBottomColor: 'transparent' }
    }
  }),
  gf = { x: 0, y: 0 },
  ks = x.define({ enables: [Bl, mf] }),
  Oi = x.define()
class Ss {
  constructor(e) {
    ;(this.view = e),
      (this.mounted = !1),
      (this.dom = document.createElement('div')),
      this.dom.classList.add('cm-tooltip-hover'),
      (this.manager = new Ol(e, Oi, t => this.createHostedView(t)))
  }
  static create(e) {
    return new Ss(e)
  }
  createHostedView(e) {
    let t = e.create(this.view)
    return (
      t.dom.classList.add('cm-tooltip-section'),
      this.dom.appendChild(t.dom),
      this.mounted && t.mount && t.mount(this.view),
      t
    )
  }
  mount(e) {
    for (let t of this.manager.tooltipViews) t.mount && t.mount(e)
    this.mounted = !0
  }
  positioned() {
    for (let e of this.manager.tooltipViews) e.positioned && e.positioned()
  }
  update(e) {
    this.manager.update(e)
  }
}
const yf = ks.compute([Oi], n => {
  let e = n.facet(Oi).filter(t => t)
  return e.length === 0
    ? null
    : {
        pos: Math.min(...e.map(t => t.pos)),
        end: Math.max(...e.filter(t => t.end != null).map(t => t.end)),
        create: Ss.create,
        above: e[0].above,
        arrow: e.some(t => t.arrow)
      }
})
class bf {
  constructor(e, t, i, s, r) {
    ;(this.view = e),
      (this.source = t),
      (this.field = i),
      (this.setHover = s),
      (this.hoverTime = r),
      (this.hoverTimeout = -1),
      (this.restartTimeout = -1),
      (this.pending = null),
      (this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }),
      (this.checkHover = this.checkHover.bind(this)),
      e.dom.addEventListener('mouseleave', (this.mouseleave = this.mouseleave.bind(this))),
      e.dom.addEventListener('mousemove', (this.mousemove = this.mousemove.bind(this)))
  }
  update() {
    this.pending &&
      ((this.pending = null),
      clearTimeout(this.restartTimeout),
      (this.restartTimeout = setTimeout(() => this.startHover(), 20)))
  }
  get active() {
    return this.view.state.field(this.field)
  }
  checkHover() {
    if (((this.hoverTimeout = -1), this.active)) return
    let e = Date.now() - this.lastMove.time
    e < this.hoverTime
      ? (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e))
      : this.startHover()
  }
  startHover() {
    clearTimeout(this.restartTimeout)
    let { lastMove: e } = this,
      t = this.view.contentDOM.contains(e.target) ? this.view.posAtCoords(e) : null
    if (t == null) return
    let i = this.view.coordsAtPos(t)
    if (
      i == null ||
      e.y < i.top ||
      e.y > i.bottom ||
      e.x < i.left - this.view.defaultCharacterWidth ||
      e.x > i.right + this.view.defaultCharacterWidth
    )
      return
    let s = this.view.bidiSpans(this.view.state.doc.lineAt(t)).find(l => l.from <= t && l.to >= t),
      r = s && s.dir == F.RTL ? -1 : 1,
      o = this.source(this.view, t, e.x < i.left ? -r : r)
    if (o != null && o.then) {
      let l = (this.pending = { pos: t })
      o.then(
        a => {
          this.pending == l &&
            ((this.pending = null), a && this.view.dispatch({ effects: this.setHover.of(a) }))
        },
        a => he(this.view.state, a, 'hover tooltip')
      )
    } else o && this.view.dispatch({ effects: this.setHover.of(o) })
  }
  mousemove(e) {
    var t
    ;(this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }),
      this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime))
    let i = this.active
    if ((i && !wf(this.lastMove.target)) || this.pending) {
      let { pos: s } = i || this.pending,
        r = (t = i == null ? void 0 : i.end) !== null && t !== void 0 ? t : s
      ;(s == r
        ? this.view.posAtCoords(this.lastMove) != s
        : !xf(this.view, s, r, e.clientX, e.clientY, 6)) &&
        (this.view.dispatch({ effects: this.setHover.of(null) }), (this.pending = null))
    }
  }
  mouseleave() {
    clearTimeout(this.hoverTimeout),
      (this.hoverTimeout = -1),
      this.active && this.view.dispatch({ effects: this.setHover.of(null) })
  }
  destroy() {
    clearTimeout(this.hoverTimeout),
      this.view.dom.removeEventListener('mouseleave', this.mouseleave),
      this.view.dom.removeEventListener('mousemove', this.mousemove)
  }
}
function wf(n) {
  for (let e = n; e; e = e.parentNode)
    if (e.nodeType == 1 && e.classList.contains('cm-tooltip')) return !0
  return !1
}
function xf(n, e, t, i, s, r) {
  let o = document.createRange(),
    l = n.domAtPos(e),
    a = n.domAtPos(t)
  o.setEnd(a.node, a.offset), o.setStart(l.node, l.offset)
  let h = o.getClientRects()
  o.detach()
  for (let c = 0; c < h.length; c++) {
    let f = h[c]
    if (Math.max(f.top - s, s - f.bottom, f.left - i, i - f.right) <= r) return !0
  }
  return !1
}
function vf(n, e = {}) {
  let t = A.define(),
    i = U.define({
      create() {
        return null
      },
      update(s, r) {
        if (
          s &&
          ((e.hideOnChange && (r.docChanged || r.selection)) || (e.hideOn && e.hideOn(r, s)))
        )
          return null
        if (s && r.docChanged) {
          let o = r.changes.mapPos(s.pos, -1, Q.TrackDel)
          if (o == null) return null
          let l = Object.assign(Object.create(null), s)
          ;(l.pos = o), s.end != null && (l.end = r.changes.mapPos(s.end)), (s = l)
        }
        for (let o of r.effects) o.is(t) && (s = o.value), o.is(Sf) && (s = null)
        return s
      },
      provide: s => Oi.from(s)
    })
  return [i, W.define(s => new bf(s, n, i, t, e.hoverTime || 300)), yf]
}
function kf(n, e) {
  let t = n.plugin(Bl)
  if (!t) return null
  let i = t.manager.tooltips.indexOf(e)
  return i < 0 ? null : t.manager.tooltipViews[i]
}
const Sf = A.define(),
  Ir = x.define({
    combine(n) {
      let e, t
      for (let i of n) (e = e || i.topContainer), (t = t || i.bottomContainer)
      return { topContainer: e, bottomContainer: t }
    }
  })
function $t(n, e) {
  let t = n.plugin(Ll),
    i = t ? t.specs.indexOf(e) : -1
  return i > -1 ? t.panels[i] : null
}
const Ll = W.fromClass(
  class {
    constructor(n) {
      ;(this.input = n.state.facet(Kt)),
        (this.specs = this.input.filter(t => t)),
        (this.panels = this.specs.map(t => t(n)))
      let e = n.state.facet(Ir)
      ;(this.top = new hi(n, !0, e.topContainer)),
        (this.bottom = new hi(n, !1, e.bottomContainer)),
        this.top.sync(this.panels.filter(t => t.top)),
        this.bottom.sync(this.panels.filter(t => !t.top))
      for (let t of this.panels) t.dom.classList.add('cm-panel'), t.mount && t.mount()
    }
    update(n) {
      let e = n.state.facet(Ir)
      this.top.container != e.topContainer &&
        (this.top.sync([]), (this.top = new hi(n.view, !0, e.topContainer))),
        this.bottom.container != e.bottomContainer &&
          (this.bottom.sync([]), (this.bottom = new hi(n.view, !1, e.bottomContainer))),
        this.top.syncClasses(),
        this.bottom.syncClasses()
      let t = n.state.facet(Kt)
      if (t != this.input) {
        let i = t.filter(a => a),
          s = [],
          r = [],
          o = [],
          l = []
        for (let a of i) {
          let h = this.specs.indexOf(a),
            c
          h < 0 ? ((c = a(n.view)), l.push(c)) : ((c = this.panels[h]), c.update && c.update(n)),
            s.push(c),
            (c.top ? r : o).push(c)
        }
        ;(this.specs = i), (this.panels = s), this.top.sync(r), this.bottom.sync(o)
        for (let a of l) a.dom.classList.add('cm-panel'), a.mount && a.mount()
      } else for (let i of this.panels) i.update && i.update(n)
    }
    destroy() {
      this.top.sync([]), this.bottom.sync([])
    }
  },
  {
    provide: n =>
      S.scrollMargins.of(e => {
        let t = e.plugin(n)
        return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() }
      })
  }
)
class hi {
  constructor(e, t, i) {
    ;(this.view = e),
      (this.top = t),
      (this.container = i),
      (this.dom = void 0),
      (this.classes = ''),
      (this.panels = []),
      this.syncClasses()
  }
  sync(e) {
    for (let t of this.panels) t.destroy && e.indexOf(t) < 0 && t.destroy()
    ;(this.panels = e), this.syncDOM()
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), (this.dom = void 0))
      return
    }
    if (!this.dom) {
      ;(this.dom = document.createElement('div')),
        (this.dom.className = this.top ? 'cm-panels cm-panels-top' : 'cm-panels cm-panels-bottom'),
        (this.dom.style[this.top ? 'top' : 'bottom'] = '0')
      let t = this.container || this.view.dom
      t.insertBefore(this.dom, this.top ? t.firstChild : null)
    }
    let e = this.dom.firstChild
    for (let t of this.panels)
      if (t.dom.parentNode == this.dom) {
        for (; e != t.dom; ) e = Nr(e)
        e = e.nextSibling
      } else this.dom.insertBefore(t.dom, e)
    for (; e; ) e = Nr(e)
  }
  scrollMargin() {
    return !this.dom || this.container
      ? 0
      : Math.max(
          0,
          this.top
            ? this.dom.getBoundingClientRect().bottom -
                Math.max(0, this.view.scrollDOM.getBoundingClientRect().top)
            : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) -
                this.dom.getBoundingClientRect().top
        )
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(' ')) e && this.container.classList.remove(e)
      for (let e of (this.classes = this.view.themeClasses).split(' '))
        e && this.container.classList.add(e)
    }
  }
}
function Nr(n) {
  let e = n.nextSibling
  return n.remove(), e
}
const Kt = x.define({ enables: Ll })
class De extends Qe {
  compare(e) {
    return this == e || (this.constructor == e.constructor && this.eq(e))
  }
  eq(e) {
    return !1
  }
  destroy(e) {}
}
De.prototype.elementClass = ''
De.prototype.toDOM = void 0
De.prototype.mapMode = Q.TrackBefore
De.prototype.startSide = De.prototype.endSide = -1
De.prototype.point = !0
const xi = x.define(),
  Cf = {
    class: '',
    renderEmptyElements: !1,
    elementStyle: '',
    markers: () => L.empty,
    lineMarker: () => null,
    lineMarkerChange: null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {}
  },
  Pt = x.define()
function Af(n) {
  return [Rl(), Pt.of(Object.assign(Object.assign({}, Cf), n))]
}
const is = x.define({ combine: n => n.some(e => e) })
function Rl(n) {
  let e = [Mf]
  return n && n.fixed === !1 && e.push(is.of(!0)), e
}
const Mf = W.fromClass(
  class {
    constructor(n) {
      ;(this.view = n),
        (this.prevViewport = n.viewport),
        (this.dom = document.createElement('div')),
        (this.dom.className = 'cm-gutters'),
        this.dom.setAttribute('aria-hidden', 'true'),
        (this.dom.style.minHeight = this.view.contentHeight + 'px'),
        (this.gutters = n.state.facet(Pt).map(e => new Fr(n, e)))
      for (let e of this.gutters) this.dom.appendChild(e.dom)
      ;(this.fixed = !n.state.facet(is)),
        this.fixed && (this.dom.style.position = 'sticky'),
        this.syncGutters(!1),
        n.scrollDOM.insertBefore(this.dom, n.contentDOM)
    }
    update(n) {
      if (this.updateGutters(n)) {
        let e = this.prevViewport,
          t = n.view.viewport,
          i = Math.min(e.to, t.to) - Math.max(e.from, t.from)
        this.syncGutters(i < (t.to - t.from) * 0.8)
      }
      n.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight + 'px'),
        this.view.state.facet(is) != !this.fixed &&
          ((this.fixed = !this.fixed), (this.dom.style.position = this.fixed ? 'sticky' : '')),
        (this.prevViewport = n.view.viewport)
    }
    syncGutters(n) {
      let e = this.dom.nextSibling
      n && this.dom.remove()
      let t = L.iter(this.view.state.facet(xi), this.view.viewport.from),
        i = [],
        s = this.gutters.map(r => new Df(r, this.view.viewport, -this.view.documentPadding.top))
      for (let r of this.view.viewportLineBlocks) {
        let o
        if (Array.isArray(r.type)) {
          for (let l of r.type)
            if (l.type == E.Text) {
              o = l
              break
            }
        } else o = r.type == E.Text ? r : void 0
        if (!!o) {
          i.length && (i = []), El(t, i, r.from)
          for (let l of s) l.line(this.view, o, i)
        }
      }
      for (let r of s) r.finish()
      n && this.view.scrollDOM.insertBefore(this.dom, e)
    }
    updateGutters(n) {
      let e = n.startState.facet(Pt),
        t = n.state.facet(Pt),
        i =
          n.docChanged ||
          n.heightChanged ||
          n.viewportChanged ||
          !L.eq(n.startState.facet(xi), n.state.facet(xi), n.view.viewport.from, n.view.viewport.to)
      if (e == t) for (let s of this.gutters) s.update(n) && (i = !0)
      else {
        i = !0
        let s = []
        for (let r of t) {
          let o = e.indexOf(r)
          o < 0
            ? s.push(new Fr(this.view, r))
            : (this.gutters[o].update(n), s.push(this.gutters[o]))
        }
        for (let r of this.gutters) r.dom.remove(), s.indexOf(r) < 0 && r.destroy()
        for (let r of s) this.dom.appendChild(r.dom)
        this.gutters = s
      }
      return i
    }
    destroy() {
      for (let n of this.gutters) n.destroy()
      this.dom.remove()
    }
  },
  {
    provide: n =>
      S.scrollMargins.of(e => {
        let t = e.plugin(n)
        return !t || t.gutters.length == 0 || !t.fixed
          ? null
          : e.textDirection == F.LTR
          ? { left: t.dom.offsetWidth }
          : { right: t.dom.offsetWidth }
      })
  }
)
function Vr(n) {
  return Array.isArray(n) ? n : [n]
}
function El(n, e, t) {
  for (; n.value && n.from <= t; ) n.from == t && e.push(n.value), n.next()
}
class Df {
  constructor(e, t, i) {
    ;(this.gutter = e),
      (this.height = i),
      (this.localMarkers = []),
      (this.i = 0),
      (this.cursor = L.iter(e.markers, t.from))
  }
  line(e, t, i) {
    this.localMarkers.length && (this.localMarkers = []), El(this.cursor, this.localMarkers, t.from)
    let s = i.length ? this.localMarkers.concat(i) : this.localMarkers,
      r = this.gutter.config.lineMarker(e, t, s)
    r && s.unshift(r)
    let o = this.gutter
    if (s.length == 0 && !o.config.renderEmptyElements) return
    let l = t.top - this.height
    if (this.i == o.elements.length) {
      let a = new Pl(e, t.height, l, s)
      o.elements.push(a), o.dom.appendChild(a.dom)
    } else o.elements[this.i].update(e, t.height, l, s)
    ;(this.height = t.bottom), this.i++
  }
  finish() {
    let e = this.gutter
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop()
      e.dom.removeChild(t.dom), t.destroy()
    }
  }
}
class Fr {
  constructor(e, t) {
    ;(this.view = e),
      (this.config = t),
      (this.elements = []),
      (this.spacer = null),
      (this.dom = document.createElement('div')),
      (this.dom.className = 'cm-gutter' + (this.config.class ? ' ' + this.config.class : ''))
    for (let i in t.domEventHandlers)
      this.dom.addEventListener(i, s => {
        let r = e.lineBlockAtHeight(s.clientY - e.documentTop)
        t.domEventHandlers[i](e, r, s) && s.preventDefault()
      })
    ;(this.markers = Vr(t.markers(e))),
      t.initialSpacer &&
        ((this.spacer = new Pl(e, 0, 0, [t.initialSpacer(e)])),
        this.dom.appendChild(this.spacer.dom),
        (this.spacer.dom.style.cssText += 'visibility: hidden; pointer-events: none'))
  }
  update(e) {
    let t = this.markers
    if (
      ((this.markers = Vr(this.config.markers(e.view))), this.spacer && this.config.updateSpacer)
    ) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e)
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s])
    }
    let i = e.view.viewport
    return (
      !L.eq(this.markers, t, i.from, i.to) ||
      (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1)
    )
  }
  destroy() {
    for (let e of this.elements) e.destroy()
  }
}
class Pl {
  constructor(e, t, i, s) {
    ;(this.height = -1),
      (this.above = 0),
      (this.markers = []),
      (this.dom = document.createElement('div')),
      (this.dom.className = 'cm-gutterElement'),
      this.update(e, t, i, s)
  }
  update(e, t, i, s) {
    this.height != t && (this.dom.style.height = (this.height = t) + 'px'),
      this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + 'px' : ''),
      Tf(this.markers, s) || this.setMarkers(e, s)
  }
  setMarkers(e, t) {
    let i = 'cm-gutterElement',
      s = this.dom.firstChild
    for (let r = 0, o = 0; ; ) {
      let l = o,
        a = r < t.length ? t[r++] : null,
        h = !1
      if (a) {
        let c = a.elementClass
        c && (i += ' ' + c)
        for (let f = o; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            ;(l = f), (h = !0)
            break
          }
      } else l = this.markers.length
      for (; o < l; ) {
        let c = this.markers[o++]
        if (c.toDOM) {
          c.destroy(s)
          let f = s.nextSibling
          s.remove(), (s = f)
        }
      }
      if (!a) break
      a.toDOM && (h ? (s = s.nextSibling) : this.dom.insertBefore(a.toDOM(e), s)), h && o++
    }
    ;(this.dom.className = i), (this.markers = t)
  }
  destroy() {
    this.setMarkers(null, [])
  }
}
function Tf(n, e) {
  if (n.length != e.length) return !1
  for (let t = 0; t < n.length; t++) if (!n[t].compare(e[t])) return !1
  return !0
}
const Of = x.define(),
  ot = x.define({
    combine(n) {
      return Ce(
        n,
        { formatNumber: String, domEventHandlers: {} },
        {
          domEventHandlers(e, t) {
            let i = Object.assign({}, e)
            for (let s in t) {
              let r = i[s],
                o = t[s]
              i[s] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o
            }
            return i
          }
        }
      )
    }
  })
class mn extends De {
  constructor(e) {
    super(), (this.number = e)
  }
  eq(e) {
    return this.number == e.number
  }
  toDOM() {
    return document.createTextNode(this.number)
  }
}
function gn(n, e) {
  return n.state.facet(ot).formatNumber(e, n.state)
}
const Bf = Pt.compute([ot], n => ({
  class: 'cm-lineNumbers',
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(Of)
  },
  lineMarker(e, t, i) {
    return i.some(s => s.toDOM) ? null : new mn(gn(e, e.state.doc.lineAt(t.from).number))
  },
  lineMarkerChange: e => e.startState.facet(ot) != e.state.facet(ot),
  initialSpacer(e) {
    return new mn(gn(e, Hr(e.state.doc.lines)))
  },
  updateSpacer(e, t) {
    let i = gn(t.view, Hr(t.view.state.doc.lines))
    return i == e.number ? e : new mn(i)
  },
  domEventHandlers: n.facet(ot).domEventHandlers
}))
function _p(n = {}) {
  return [ot.of(n), Rl(), Bf]
}
function Hr(n) {
  let e = 9
  for (; e < n; ) e = e * 10 + 9
  return e
}
const Lf = new (class extends De {
    constructor() {
      super(...arguments), (this.elementClass = 'cm-activeLineGutter')
    }
  })(),
  Rf = xi.compute(['selection'], n => {
    let e = [],
      t = -1
    for (let i of n.selection.ranges) {
      let s = n.doc.lineAt(i.head).from
      s > t && ((t = s), e.push(Lf.range(s)))
    }
    return L.of(e)
  })
function em() {
  return Rf
}
var yn
const gt = new ke()
function Il(n) {
  return x.define({ combine: n ? e => e.concat(n) : void 0 })
}
class ue {
  constructor(e, t, i = [], s = '') {
    ;(this.data = e),
      (this.name = s),
      O.prototype.hasOwnProperty('tree') ||
        Object.defineProperty(O.prototype, 'tree', {
          get() {
            return Y(this)
          }
        }),
      (this.parser = t),
      (this.extension = [qe.of(this), O.languageData.of((r, o, l) => r.facet(Wr(r, o, l)))].concat(
        i
      ))
  }
  isActiveAt(e, t, i = -1) {
    return Wr(e, t, i) == this.data
  }
  findRegions(e) {
    let t = e.facet(qe)
    if ((t == null ? void 0 : t.data) == this.data) return [{ from: 0, to: e.doc.length }]
    if (!t || !t.allowsNesting) return []
    let i = [],
      s = (r, o) => {
        if (r.prop(gt) == this.data) {
          i.push({ from: o, to: o + r.length })
          return
        }
        let l = r.prop(ke.mounted)
        if (l) {
          if (l.tree.prop(gt) == this.data) {
            if (l.overlay) for (let a of l.overlay) i.push({ from: a.from + o, to: a.to + o })
            else i.push({ from: o, to: o + r.length })
            return
          } else if (l.overlay) {
            let a = i.length
            if ((s(l.tree, l.overlay[0].from + o), i.length > a)) return
          }
        }
        for (let a = 0; a < r.children.length; a++) {
          let h = r.children[a]
          h instanceof rt && s(h, r.positions[a] + o)
        }
      }
    return s(Y(e), 0), i
  }
  get allowsNesting() {
    return !0
  }
}
ue.setState = A.define()
function Wr(n, e, t) {
  let i = n.facet(qe)
  if (!i) return null
  let s = i.data
  if (i.allowsNesting)
    for (let r = Y(n).topNode; r; r = r.enter(e, t, Qa.ExcludeBuffers)) s = r.type.prop(gt) || s
  return s
}
class Bi extends ue {
  constructor(e, t, i) {
    super(e, t, [], i), (this.parser = t)
  }
  static define(e) {
    let t = Il(e.languageData)
    return new Bi(t, e.parser.configure({ props: [gt.add(i => (i.isTop ? t : void 0))] }), e.name)
  }
  configure(e, t) {
    return new Bi(this.data, this.parser.configure(e), t || this.name)
  }
  get allowsNesting() {
    return this.parser.hasWrappers()
  }
}
function Y(n) {
  let e = n.field(ue.state, !1)
  return e ? e.tree : rt.empty
}
class Ef {
  constructor(e, t = e.length) {
    ;(this.doc = e),
      (this.length = t),
      (this.cursorPos = 0),
      (this.string = ''),
      (this.cursor = e.iter())
  }
  syncTo(e) {
    return (
      (this.string = this.cursor.next(e - this.cursorPos).value),
      (this.cursorPos = e + this.string.length),
      this.cursorPos - this.string.length
    )
  }
  chunk(e) {
    return this.syncTo(e), this.string
  }
  get lineChunks() {
    return !0
  }
  read(e, t) {
    let i = this.cursorPos - this.string.length
    return e < i || t >= this.cursorPos
      ? this.doc.sliceString(e, t)
      : this.string.slice(e - i, t - i)
  }
}
let At = null
class Li {
  constructor(e, t, i = [], s, r, o, l, a) {
    ;(this.parser = e),
      (this.state = t),
      (this.fragments = i),
      (this.tree = s),
      (this.treeLen = r),
      (this.viewport = o),
      (this.skipped = l),
      (this.scheduleOn = a),
      (this.parse = null),
      (this.tempSkipped = [])
  }
  static create(e, t, i) {
    return new Li(e, t, [], rt.empty, 0, i, [], null)
  }
  startParse() {
    return this.parser.startParse(new Ef(this.state.doc), this.fragments)
  }
  work(e, t) {
    return (
      t != null && t >= this.state.doc.length && (t = void 0),
      this.tree != rt.empty && this.isDone(t != null ? t : this.state.doc.length)
        ? (this.takeTree(), !0)
        : this.withContext(() => {
            var i
            if (typeof e == 'number') {
              let s = Date.now() + e
              e = () => Date.now() > s
            }
            for (
              this.parse || (this.parse = this.startParse()),
                t != null &&
                  (this.parse.stoppedAt == null || this.parse.stoppedAt > t) &&
                  t < this.state.doc.length &&
                  this.parse.stopAt(t);
              ;

            ) {
              let s = this.parse.advance()
              if (s)
                if (
                  ((this.fragments = this.withoutTempSkipped(
                    pi.addTree(s, this.fragments, this.parse.stoppedAt != null)
                  )),
                  (this.treeLen =
                    (i = this.parse.stoppedAt) !== null && i !== void 0
                      ? i
                      : this.state.doc.length),
                  (this.tree = s),
                  (this.parse = null),
                  this.treeLen < (t != null ? t : this.state.doc.length))
                )
                  this.parse = this.startParse()
                else return !0
              if (e()) return !1
            }
          })
    )
  }
  takeTree() {
    let e, t
    this.parse &&
      (e = this.parse.parsedPos) >= this.treeLen &&
      ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e),
      this.withContext(() => {
        for (; !(t = this.parse.advance()); );
      }),
      (this.treeLen = e),
      (this.tree = t),
      (this.fragments = this.withoutTempSkipped(pi.addTree(this.tree, this.fragments, !0))),
      (this.parse = null))
  }
  withContext(e) {
    let t = At
    At = this
    try {
      return e()
    } finally {
      At = t
    }
  }
  withoutTempSkipped(e) {
    for (let t; (t = this.tempSkipped.pop()); ) e = zr(e, t.from, t.to)
    return e
  }
  changes(e, t) {
    let { fragments: i, tree: s, treeLen: r, viewport: o, skipped: l } = this
    if ((this.takeTree(), !e.empty)) {
      let a = []
      if (
        (e.iterChangedRanges((h, c, f, u) => a.push({ fromA: h, toA: c, fromB: f, toB: u })),
        (i = pi.applyChanges(i, a)),
        (s = rt.empty),
        (r = 0),
        (o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }),
        this.skipped.length)
      ) {
        l = []
        for (let h of this.skipped) {
          let c = e.mapPos(h.from, 1),
            f = e.mapPos(h.to, -1)
          c < f && l.push({ from: c, to: f })
        }
      }
    }
    return new Li(this.parser, t, i, s, r, o, l, this.scheduleOn)
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to) return !1
    this.viewport = e
    let t = this.skipped.length
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: s, to: r } = this.skipped[i]
      s < e.to &&
        r > e.from &&
        ((this.fragments = zr(this.fragments, s, r)), this.skipped.splice(i--, 1))
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0)
  }
  reset() {
    this.parse && (this.takeTree(), (this.parse = null))
  }
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t })
  }
  static getSkippingParser(e) {
    return new (class extends _a {
      createParse(t, i, s) {
        let r = s[0].from,
          o = s[s.length - 1].to
        return {
          parsedPos: r,
          advance() {
            let a = At
            if (a) {
              for (let h of s) a.tempSkipped.push(h)
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e)
            }
            return (this.parsedPos = o), new rt(us.none, [], [], o - r)
          },
          stoppedAt: null,
          stopAt() {}
        }
      }
    })()
  }
  isDone(e) {
    e = Math.min(e, this.state.doc.length)
    let t = this.fragments
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e
  }
  static get() {
    return At
  }
}
function zr(n, e, t) {
  return pi.applyChanges(n, [{ fromA: e, toA: t, fromB: e, toB: t }])
}
class yt {
  constructor(e) {
    ;(this.context = e), (this.tree = e.tree)
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree) return this
    let t = this.context.changes(e.changes, e.state),
      i =
        this.context.treeLen == e.startState.doc.length
          ? void 0
          : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to)
    return t.work(20, i) || t.takeTree(), new yt(t)
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length),
      i = Li.create(e.facet(qe).parser, e, { from: 0, to: t })
    return i.work(20, t) || i.takeTree(), new yt(i)
  }
}
ue.state = U.define({
  create: yt.init,
  update(n, e) {
    for (let t of e.effects) if (t.is(ue.setState)) return t.value
    return e.startState.facet(qe) != e.state.facet(qe) ? yt.init(e.state) : n.apply(e)
  }
})
let Nl = n => {
  let e = setTimeout(() => n(), 500)
  return () => clearTimeout(e)
}
typeof requestIdleCallback < 'u' &&
  (Nl = n => {
    let e = -1,
      t = setTimeout(() => {
        e = requestIdleCallback(n, { timeout: 500 - 100 })
      }, 100)
    return () => (e < 0 ? clearTimeout(t) : cancelIdleCallback(e))
  })
const bn =
    typeof navigator < 'u' &&
    ((yn = navigator.scheduling) === null || yn === void 0 ? void 0 : yn.isInputPending)
      ? () => navigator.scheduling.isInputPending()
      : null,
  Pf = W.fromClass(
    class {
      constructor(e) {
        ;(this.view = e),
          (this.working = null),
          (this.workScheduled = 0),
          (this.chunkEnd = -1),
          (this.chunkBudget = -1),
          (this.work = this.work.bind(this)),
          this.scheduleWork()
      }
      update(e) {
        let t = this.view.state.field(ue.state).context
        ;(t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) &&
          this.scheduleWork(),
          e.docChanged && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()),
          this.checkAsyncSchedule(t)
      }
      scheduleWork() {
        if (this.working) return
        let { state: e } = this.view,
          t = e.field(ue.state)
        ;(t.tree != t.context.tree || !t.context.isDone(e.doc.length)) &&
          (this.working = Nl(this.work))
      }
      work(e) {
        this.working = null
        let t = Date.now()
        if (
          (this.chunkEnd < t &&
            (this.chunkEnd < 0 || this.view.hasFocus) &&
            ((this.chunkEnd = t + 3e4), (this.chunkBudget = 3e3)),
          this.chunkBudget <= 0)
        )
          return
        let {
            state: i,
            viewport: { to: s }
          } = this.view,
          r = i.field(ue.state)
        if (r.tree == r.context.tree && r.context.isDone(s + 1e5)) return
        let o =
            Date.now() +
            Math.min(this.chunkBudget, 100, e && !bn ? Math.max(25, e.timeRemaining() - 5) : 1e9),
          l = r.context.treeLen < s && i.doc.length > s + 1e3,
          a = r.context.work(() => (bn && bn()) || Date.now() > o, s + (l ? 0 : 1e5))
        ;(this.chunkBudget -= Date.now() - t),
          (a || this.chunkBudget <= 0) &&
            (r.context.takeTree(),
            this.view.dispatch({ effects: ue.setState.of(new yt(r.context)) })),
          this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(),
          this.checkAsyncSchedule(r.context)
      }
      checkAsyncSchedule(e) {
        e.scheduleOn &&
          (this.workScheduled++,
          e.scheduleOn
            .then(() => this.scheduleWork())
            .catch(t => he(this.view.state, t))
            .then(() => this.workScheduled--),
          (e.scheduleOn = null))
      }
      destroy() {
        this.working && this.working()
      }
      isWorking() {
        return !!(this.working || this.workScheduled > 0)
      }
    },
    {
      eventHandlers: {
        focus() {
          this.scheduleWork()
        }
      }
    }
  ),
  qe = x.define({
    combine(n) {
      return n.length ? n[0] : null
    },
    enables: n => [
      ue.state,
      Pf,
      S.contentAttributes.compute([n], e => {
        let t = e.facet(n)
        return t && t.name ? { 'data-language': t.name } : {}
      })
    ]
  }),
  If = x.define(),
  Cs = x.define({
    combine: n => {
      if (!n.length) return '  '
      if (!/^(?: +|\t+)$/.test(n[0]))
        throw new Error('Invalid indent unit: ' + JSON.stringify(n[0]))
      return n[0]
    }
  })
function Ri(n) {
  let e = n.facet(Cs)
  return e.charCodeAt(0) == 9 ? n.tabSize * e.length : e.length
}
function jt(n, e) {
  let t = '',
    i = n.tabSize
  if (n.facet(Cs).charCodeAt(0) == 9) for (; e >= i; ) (t += '	'), (e -= i)
  for (let s = 0; s < e; s++) t += ' '
  return t
}
function As(n, e) {
  n instanceof O && (n = new Ji(n))
  for (let i of n.state.facet(If)) {
    let s = i(n, e)
    if (s != null) return s
  }
  let t = Y(n.state)
  return t ? Nf(n, t, e) : null
}
class Ji {
  constructor(e, t = {}) {
    ;(this.state = e), (this.options = t), (this.unit = Ri(e))
  }
  lineAt(e, t = 1) {
    let i = this.state.doc.lineAt(e),
      { simulateBreak: s, simulateDoubleBreak: r } = this.options
    return s != null && s >= i.from && s <= i.to
      ? r && s == e
        ? { text: '', from: e }
        : (t < 0 ? s < e : s <= e)
        ? { text: i.text.slice(s - i.from), from: s }
        : { text: i.text.slice(0, s - i.from), from: i.from }
      : i
  }
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak) return ''
    let { text: i, from: s } = this.lineAt(e, t)
    return i.slice(e - s, Math.min(i.length, e + 100 - s))
  }
  column(e, t = 1) {
    let { text: i, from: s } = this.lineAt(e, t),
      r = this.countColumn(i, e - s),
      o = this.options.overrideIndentation ? this.options.overrideIndentation(s) : -1
    return o > -1 && (r += o - this.countColumn(i, i.search(/\S|$/))), r
  }
  countColumn(e, t = e.length) {
    return Jt(e, this.state.tabSize, t)
  }
  lineIndent(e, t = 1) {
    let { text: i, from: s } = this.lineAt(e, t),
      r = this.options.overrideIndentation
    if (r) {
      let o = r(s)
      if (o > -1) return o
    }
    return this.countColumn(i, i.search(/\S|$/))
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null
  }
}
const Ms = new ke()
function Nf(n, e, t) {
  return Vl(e.resolveInner(t).enterUnfinishedNodesBefore(t), t, n)
}
function Vf(n) {
  return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak
}
function Ff(n) {
  let e = n.type.prop(Ms)
  if (e) return e
  let t = n.firstChild,
    i
  if (t && (i = t.type.prop(ke.closedBy))) {
    let s = n.lastChild,
      r = s && i.indexOf(s.name) > -1
    return o => qf(o, !0, 1, void 0, r && !Vf(o) ? s.from : void 0)
  }
  return n.parent == null ? Hf : null
}
function Vl(n, e, t) {
  for (; n; n = n.parent) {
    let i = Ff(n)
    if (i) return i(Ds.create(t, e, n))
  }
  return null
}
function Hf() {
  return 0
}
class Ds extends Ji {
  constructor(e, t, i) {
    super(e.state, e.options), (this.base = e), (this.pos = t), (this.node = i)
  }
  static create(e, t, i) {
    return new Ds(e, t, i)
  }
  get textAfter() {
    return this.textAfterPos(this.pos)
  }
  get baseIndent() {
    let e = this.state.doc.lineAt(this.node.from)
    for (;;) {
      let t = this.node.resolve(e.from)
      for (; t.parent && t.parent.from == t.from; ) t = t.parent
      if (Wf(t, this.node)) break
      e = this.state.doc.lineAt(t.from)
    }
    return this.lineIndent(e.from)
  }
  continue() {
    let e = this.node.parent
    return e ? Vl(e, this.pos, this.base) : 0
  }
}
function Wf(n, e) {
  for (let t = e; t; t = t.parent) if (n == t) return !0
  return !1
}
function zf(n) {
  let e = n.node,
    t = e.childAfter(e.from),
    i = e.lastChild
  if (!t) return null
  let s = n.options.simulateBreak,
    r = n.state.doc.lineAt(t.from),
    o = s == null || s <= r.from ? r.to : Math.min(r.to, s)
  for (let l = t.to; ; ) {
    let a = e.childAfter(l)
    if (!a || a == i) return null
    if (!a.type.isSkipped) return a.from < o ? t : null
    l = a.to
  }
}
function qf(n, e, t, i, s) {
  let r = n.textAfter,
    o = r.match(/^\s*/)[0].length,
    l = (i && r.slice(o, o + i.length) == i) || s == n.pos + o,
    a = e ? zf(n) : null
  return a ? (l ? n.column(a.from) : n.column(a.to)) : n.baseIndent + (l ? 0 : n.unit * t)
}
function $f({ except: n, units: e = 1 } = {}) {
  return t => {
    let i = n && n.test(t.textAfter)
    return t.baseIndent + (i ? 0 : e * t.unit)
  }
}
const Kf = 200
function im() {
  return O.transactionFilter.of(n => {
    if (!n.docChanged || (!n.isUserEvent('input.type') && !n.isUserEvent('input.complete')))
      return n
    let e = n.startState.languageDataAt('indentOnInput', n.startState.selection.main.head)
    if (!e.length) return n
    let t = n.newDoc,
      { head: i } = n.newSelection.main,
      s = t.lineAt(i)
    if (i > s.from + Kf) return n
    let r = t.sliceString(s.from, i)
    if (!e.some(h => h.test(r))) return n
    let { state: o } = n,
      l = -1,
      a = []
    for (let { head: h } of o.selection.ranges) {
      let c = o.doc.lineAt(h)
      if (c.from == l) continue
      l = c.from
      let f = As(o, c.from)
      if (f == null) continue
      let u = /^\s*/.exec(c.text)[0],
        d = jt(o, f)
      u != d && a.push({ from: c.from, to: c.from + u.length, insert: d })
    }
    return a.length ? [n, { changes: a, sequential: !0 }] : n
  })
}
const jf = x.define(),
  Ts = new ke()
function Uf(n) {
  let e = n.firstChild,
    t = n.lastChild
  return e && e.to < t.from ? { from: e.to, to: t.type.isError ? n.to : t.from } : null
}
function Gf(n, e, t) {
  let i = Y(n)
  if (i.length < t) return null
  let s = i.resolveInner(t),
    r = null
  for (let o = s; o; o = o.parent) {
    if (o.to <= t || o.from > t) continue
    if (r && o.from < e) break
    let l = o.type.prop(Ts)
    if (l && (o.to < i.length - 50 || i.length == n.doc.length || !Jf(o))) {
      let a = l(o, n)
      a && a.from <= t && a.from >= e && a.to > t && (r = a)
    }
  }
  return r
}
function Jf(n) {
  let e = n.lastChild
  return e && e.to == n.to && e.type.isError
}
function Ei(n, e, t) {
  for (let i of n.facet(jf)) {
    let s = i(n, e, t)
    if (s) return s
  }
  return Gf(n, e, t)
}
function Fl(n, e) {
  let t = e.mapPos(n.from, 1),
    i = e.mapPos(n.to, -1)
  return t >= i ? void 0 : { from: t, to: i }
}
const Yi = A.define({ map: Fl }),
  Xt = A.define({ map: Fl })
function Hl(n) {
  let e = []
  for (let { head: t } of n.state.selection.ranges)
    e.some(i => i.from <= t && i.to >= t) || e.push(n.lineBlockAt(t))
  return e
}
const _e = U.define({
  create() {
    return k.none
  },
  update(n, e) {
    n = n.map(e.changes)
    for (let t of e.effects)
      t.is(Yi) && !Yf(n, t.value.from, t.value.to)
        ? (n = n.update({ add: [qr.range(t.value.from, t.value.to)] }))
        : t.is(Xt) &&
          (n = n.update({
            filter: (i, s) => t.value.from != i || t.value.to != s,
            filterFrom: t.value.from,
            filterTo: t.value.to
          }))
    if (e.selection) {
      let t = !1,
        { head: i } = e.selection.main
      n.between(i, i, (s, r) => {
        s < i && r > i && (t = !0)
      }),
        t && (n = n.update({ filterFrom: i, filterTo: i, filter: (s, r) => r <= i || s >= i }))
    }
    return n
  },
  provide: n => S.decorations.from(n),
  toJSON(n, e) {
    let t = []
    return (
      n.between(0, e.doc.length, (i, s) => {
        t.push(i, s)
      }),
      t
    )
  },
  fromJSON(n) {
    if (!Array.isArray(n) || n.length % 2) throw new RangeError('Invalid JSON for fold state')
    let e = []
    for (let t = 0; t < n.length; ) {
      let i = n[t++],
        s = n[t++]
      if (typeof i != 'number' || typeof s != 'number')
        throw new RangeError('Invalid JSON for fold state')
      e.push(qr.range(i, s))
    }
    return k.set(e, !0)
  }
})
function Pi(n, e, t) {
  var i
  let s = null
  return (
    (i = n.field(_e, !1)) === null ||
      i === void 0 ||
      i.between(e, t, (r, o) => {
        ;(!s || s.from > r) && (s = { from: r, to: o })
      }),
    s
  )
}
function Yf(n, e, t) {
  let i = !1
  return (
    n.between(e, e, (s, r) => {
      s == e && r == t && (i = !0)
    }),
    i
  )
}
function Wl(n, e) {
  return n.field(_e, !1) ? e : e.concat(A.appendConfig.of($l()))
}
const Xf = n => {
    for (let e of Hl(n)) {
      let t = Ei(n.state, e.from, e.to)
      if (t) return n.dispatch({ effects: Wl(n.state, [Yi.of(t), zl(n, t)]) }), !0
    }
    return !1
  },
  Qf = n => {
    if (!n.state.field(_e, !1)) return !1
    let e = []
    for (let t of Hl(n)) {
      let i = Pi(n.state, t.from, t.to)
      i && e.push(Xt.of(i), zl(n, i, !1))
    }
    return e.length && n.dispatch({ effects: e }), e.length > 0
  }
function zl(n, e, t = !0) {
  let i = n.state.doc.lineAt(e.from).number,
    s = n.state.doc.lineAt(e.to).number
  return S.announce.of(
    `${n.state.phrase(t ? 'Folded lines' : 'Unfolded lines')} ${i} ${n.state.phrase('to')} ${s}.`
  )
}
const Zf = n => {
    let { state: e } = n,
      t = []
    for (let i = 0; i < e.doc.length; ) {
      let s = n.lineBlockAt(i),
        r = Ei(e, s.from, s.to)
      r && t.push(Yi.of(r)), (i = (r ? n.lineBlockAt(r.to) : s).to + 1)
    }
    return t.length && n.dispatch({ effects: Wl(n.state, t) }), !!t.length
  },
  _f = n => {
    let e = n.state.field(_e, !1)
    if (!e || !e.size) return !1
    let t = []
    return (
      e.between(0, n.state.doc.length, (i, s) => {
        t.push(Xt.of({ from: i, to: s }))
      }),
      n.dispatch({ effects: t }),
      !0
    )
  },
  nm = [
    { key: 'Ctrl-Shift-[', mac: 'Cmd-Alt-[', run: Xf },
    { key: 'Ctrl-Shift-]', mac: 'Cmd-Alt-]', run: Qf },
    { key: 'Ctrl-Alt-[', run: Zf },
    { key: 'Ctrl-Alt-]', run: _f }
  ],
  eu = { placeholderDOM: null, placeholderText: '\u2026' },
  ql = x.define({
    combine(n) {
      return Ce(n, eu)
    }
  })
function $l(n) {
  let e = [_e, iu]
  return n && e.push(ql.of(n)), e
}
const qr = k.replace({
    widget: new (class extends Te {
      toDOM(n) {
        let { state: e } = n,
          t = e.facet(ql),
          i = r => {
            let o = n.lineBlockAt(n.posAtDOM(r.target)),
              l = Pi(n.state, o.from, o.to)
            l && n.dispatch({ effects: Xt.of(l) }), r.preventDefault()
          }
        if (t.placeholderDOM) return t.placeholderDOM(n, i)
        let s = document.createElement('span')
        return (
          (s.textContent = t.placeholderText),
          s.setAttribute('aria-label', e.phrase('folded code')),
          (s.title = e.phrase('unfold')),
          (s.className = 'cm-foldPlaceholder'),
          (s.onclick = i),
          s
        )
      }
    })()
  }),
  tu = {
    openText: '\u2304',
    closedText: '\u203A',
    markerDOM: null,
    domEventHandlers: {},
    foldingChanged: () => !1
  }
class wn extends De {
  constructor(e, t) {
    super(), (this.config = e), (this.open = t)
  }
  eq(e) {
    return this.config == e.config && this.open == e.open
  }
  toDOM(e) {
    if (this.config.markerDOM) return this.config.markerDOM(this.open)
    let t = document.createElement('span')
    return (
      (t.textContent = this.open ? this.config.openText : this.config.closedText),
      (t.title = e.state.phrase(this.open ? 'Fold line' : 'Unfold line')),
      t
    )
  }
}
function sm(n = {}) {
  let e = Object.assign(Object.assign({}, tu), n),
    t = new wn(e, !0),
    i = new wn(e, !1),
    s = W.fromClass(
      class {
        constructor(o) {
          ;(this.from = o.viewport.from), (this.markers = this.buildMarkers(o))
        }
        update(o) {
          ;(o.docChanged ||
            o.viewportChanged ||
            o.startState.facet(qe) != o.state.facet(qe) ||
            o.startState.field(_e, !1) != o.state.field(_e, !1) ||
            Y(o.startState) != Y(o.state) ||
            e.foldingChanged(o)) &&
            (this.markers = this.buildMarkers(o.view))
        }
        buildMarkers(o) {
          let l = new We()
          for (let a of o.viewportLineBlocks) {
            let h = Pi(o.state, a.from, a.to) ? i : Ei(o.state, a.from, a.to) ? t : null
            h && l.add(a.from, a.from, h)
          }
          return l.finish()
        }
      }
    ),
    { domEventHandlers: r } = e
  return [
    s,
    Af({
      class: 'cm-foldGutter',
      markers(o) {
        var l
        return ((l = o.plugin(s)) === null || l === void 0 ? void 0 : l.markers) || L.empty
      },
      initialSpacer() {
        return new wn(e, !1)
      },
      domEventHandlers: Object.assign(Object.assign({}, r), {
        click: (o, l, a) => {
          if (r.click && r.click(o, l, a)) return !0
          let h = Pi(o.state, l.from, l.to)
          if (h) return o.dispatch({ effects: Xt.of(h) }), !0
          let c = Ei(o.state, l.from, l.to)
          return c ? (o.dispatch({ effects: Yi.of(c) }), !0) : !1
        }
      })
    }),
    $l()
  ]
}
const iu = S.baseTheme({
  '.cm-foldPlaceholder': {
    backgroundColor: '#eee',
    border: '1px solid #ddd',
    color: '#888',
    borderRadius: '.2em',
    margin: '0 1px',
    padding: '0 1px',
    cursor: 'pointer'
  },
  '.cm-foldGutter span': { padding: '0 1px', cursor: 'pointer' }
})
class Xi {
  constructor(e, t) {
    this.specs = e
    let i
    function s(l) {
      let a = He.newName()
      return ((i || (i = Object.create(null)))['.' + a] = l), a
    }
    const r = typeof t.all == 'string' ? t.all : t.all ? s(t.all) : void 0,
      o = t.scope
    ;(this.scope = o instanceof ue ? l => l.prop(gt) == o.data : o ? l => l == o : void 0),
      (this.style = Xa(
        e.map(l => ({ tag: l.tag, class: l.class || s(Object.assign({}, l, { tag: null })) })),
        { all: r }
      ).style),
      (this.module = i ? new He(i) : null),
      (this.themeType = t.themeType)
  }
  static define(e, t) {
    return new Xi(e, t || {})
  }
}
const ns = x.define(),
  Kl = x.define({
    combine(n) {
      return n.length ? [n[0]] : null
    }
  })
function xn(n) {
  let e = n.facet(ns)
  return e.length ? e : n.facet(Kl)
}
function rm(n, e) {
  let t = [su],
    i
  return (
    n instanceof Xi && (n.module && t.push(S.styleModule.of(n.module)), (i = n.themeType)),
    e != null && e.fallback
      ? t.push(Kl.of(n))
      : i
      ? t.push(ns.computeN([S.darkTheme], s => (s.facet(S.darkTheme) == (i == 'dark') ? [n] : [])))
      : t.push(ns.of(n)),
    t
  )
}
class nu {
  constructor(e) {
    ;(this.markCache = Object.create(null)),
      (this.tree = Y(e.state)),
      (this.decorations = this.buildDeco(e, xn(e.state)))
  }
  update(e) {
    let t = Y(e.state),
      i = xn(e.state),
      s = i != xn(e.startState)
    t.length < e.view.viewport.to && !s && t.type == this.tree.type
      ? (this.decorations = this.decorations.map(e.changes))
      : (t != this.tree || e.viewportChanged || s) &&
        ((this.tree = t), (this.decorations = this.buildDeco(e.view, i)))
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length) return k.none
    let i = new We()
    for (let { from: s, to: r } of e.visibleRanges)
      Za(
        this.tree,
        t,
        (o, l, a) => {
          i.add(o, l, this.markCache[a] || (this.markCache[a] = k.mark({ class: a })))
        },
        s,
        r
      )
    return i.finish()
  }
}
const su = xt.high(W.fromClass(nu, { decorations: n => n.decorations })),
  om = Xi.define([
    { tag: D.meta, color: '#7a757a' },
    { tag: D.link, textDecoration: 'underline' },
    { tag: D.heading, textDecoration: 'underline', fontWeight: 'bold' },
    { tag: D.emphasis, fontStyle: 'italic' },
    { tag: D.strong, fontWeight: 'bold' },
    { tag: D.strikethrough, textDecoration: 'line-through' },
    { tag: D.keyword, color: '#708' },
    { tag: [D.atom, D.bool, D.url, D.contentSeparator, D.labelName], color: '#219' },
    { tag: [D.literal, D.inserted], color: '#164' },
    { tag: [D.string, D.deleted], color: '#a11' },
    { tag: [D.regexp, D.escape, D.special(D.string)], color: '#e40' },
    { tag: D.definition(D.variableName), color: '#00f' },
    { tag: D.local(D.variableName), color: '#30a' },
    { tag: [D.typeName, D.namespace], color: '#085' },
    { tag: D.className, color: '#167' },
    { tag: [D.special(D.variableName), D.macroName], color: '#256' },
    { tag: D.definition(D.propertyName), color: '#00c' },
    { tag: D.comment, color: '#940' },
    { tag: D.invalid, color: '#f00' }
  ]),
  ru = S.baseTheme({
    '&.cm-focused .cm-matchingBracket': { backgroundColor: '#328c8252' },
    '&.cm-focused .cm-nonmatchingBracket': { backgroundColor: '#bb555544' }
  }),
  jl = 1e4,
  Ul = '()[]{}',
  Gl = x.define({
    combine(n) {
      return Ce(n, { afterCursor: !0, brackets: Ul, maxScanDistance: jl, renderMatch: au })
    }
  }),
  ou = k.mark({ class: 'cm-matchingBracket' }),
  lu = k.mark({ class: 'cm-nonmatchingBracket' })
function au(n) {
  let e = [],
    t = n.matched ? ou : lu
  return (
    e.push(t.range(n.start.from, n.start.to)), n.end && e.push(t.range(n.end.from, n.end.to)), e
  )
}
const hu = U.define({
    create() {
      return k.none
    },
    update(n, e) {
      if (!e.docChanged && !e.selection) return n
      let t = [],
        i = e.state.facet(Gl)
      for (let s of e.state.selection.ranges) {
        if (!s.empty) continue
        let r =
          we(e.state, s.head, -1, i) ||
          (s.head > 0 && we(e.state, s.head - 1, 1, i)) ||
          (i.afterCursor &&
            (we(e.state, s.head, 1, i) ||
              (s.head < e.state.doc.length && we(e.state, s.head + 1, -1, i))))
        r && (t = t.concat(i.renderMatch(r, e.state)))
      }
      return k.set(t, !0)
    },
    provide: n => S.decorations.from(n)
  }),
  cu = [hu, ru]
function lm(n = {}) {
  return [Gl.of(n), cu]
}
function ss(n, e, t) {
  let i = n.prop(e < 0 ? ke.openedBy : ke.closedBy)
  if (i) return i
  if (n.name.length == 1) {
    let s = t.indexOf(n.name)
    if (s > -1 && s % 2 == (e < 0 ? 1 : 0)) return [t[s + e]]
  }
  return null
}
function we(n, e, t, i = {}) {
  let s = i.maxScanDistance || jl,
    r = i.brackets || Ul,
    o = Y(n),
    l = o.resolveInner(e, t)
  for (let a = l; a; a = a.parent) {
    let h = ss(a.type, t, r)
    if (h && a.from < a.to) return fu(n, e, t, a, h, r)
  }
  return uu(n, e, t, o, l.type, s, r)
}
function fu(n, e, t, i, s, r) {
  let o = i.parent,
    l = { from: i.from, to: i.to },
    a = 0,
    h = o == null ? void 0 : o.cursor()
  if (h && (t < 0 ? h.childBefore(i.from) : h.childAfter(i.to)))
    do
      if (t < 0 ? h.to <= i.from : h.from >= i.to) {
        if (a == 0 && s.indexOf(h.type.name) > -1 && h.from < h.to)
          return { start: l, end: { from: h.from, to: h.to }, matched: !0 }
        if (ss(h.type, t, r)) a++
        else if (ss(h.type, -t, r)) {
          if (a == 0)
            return {
              start: l,
              end: h.from == h.to ? void 0 : { from: h.from, to: h.to },
              matched: !1
            }
          a--
        }
      }
    while (t < 0 ? h.prevSibling() : h.nextSibling())
  return { start: l, matched: !1 }
}
function uu(n, e, t, i, s, r, o) {
  let l = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1),
    a = o.indexOf(l)
  if (a < 0 || (a % 2 == 0) != t > 0) return null
  let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e },
    c = n.doc.iterRange(e, t > 0 ? n.doc.length : 0),
    f = 0
  for (let u = 0; !c.next().done && u <= r; ) {
    let d = c.value
    t < 0 && (u += d.length)
    let p = e + u * t
    for (let g = t > 0 ? 0 : d.length - 1, m = t > 0 ? d.length : -1; g != m; g += t) {
      let b = o.indexOf(d[g])
      if (!(b < 0 || i.resolveInner(p + g, 1).type != s))
        if ((b % 2 == 0) == t > 0) f++
        else {
          if (f == 1)
            return { start: h, end: { from: p + g, to: p + g + 1 }, matched: b >> 1 == a >> 1 }
          f--
        }
    }
    t > 0 && (u += d.length)
  }
  return c.done ? { start: h, matched: !1 } : null
}
const du = Object.create(null),
  $r = [us.none],
  Kr = [],
  pu = Object.create(null)
for (let [n, e] of [
  ['variable', 'variableName'],
  ['variable-2', 'variableName.special'],
  ['string-2', 'string.special'],
  ['def', 'variableName.definition'],
  ['tag', 'tagName'],
  ['attribute', 'attributeName'],
  ['type', 'typeName'],
  ['builtin', 'variableName.standard'],
  ['qualifier', 'modifier'],
  ['error', 'invalid'],
  ['header', 'heading'],
  ['property', 'propertyName']
])
  pu[n] = mu(du, e)
function vn(n, e) {
  Kr.indexOf(n) > -1 || (Kr.push(n), console.warn(e))
}
function mu(n, e) {
  let t = null
  for (let r of e.split('.')) {
    let o = n[r] || D[r]
    o
      ? typeof o == 'function'
        ? t
          ? (t = o(t))
          : vn(r, `Modifier ${r} used at start of tag`)
        : t
        ? vn(r, `Tag ${r} used as modifier`)
        : (t = o)
      : vn(r, `Unknown highlighting tag ${r}`)
  }
  if (!t) return 0
  let i = e.replace(/ /g, '_'),
    s = us.define({ id: $r.length, name: i, props: [Ya({ [i]: t })] })
  return $r.push(s), s.id
}
const gu = n => {
  let e = Bs(n.state)
  return e.line ? yu(n) : e.block ? wu(n) : !1
}
function Os(n, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly) return !1
    let s = n(e, t)
    return s ? (i(t.update(s)), !0) : !1
  }
}
const yu = Os(ku, 0),
  bu = Os(Jl, 0),
  wu = Os((n, e) => Jl(n, e, vu(e)), 0)
function Bs(n, e = n.selection.main.head) {
  let t = n.languageDataAt('commentTokens', e)
  return t.length ? t[0] : {}
}
const Mt = 50
function xu(n, { open: e, close: t }, i, s) {
  let r = n.sliceDoc(i - Mt, i),
    o = n.sliceDoc(s, s + Mt),
    l = /\s*$/.exec(r)[0].length,
    a = /^\s*/.exec(o)[0].length,
    h = r.length - l
  if (r.slice(h - e.length, h) == e && o.slice(a, a + t.length) == t)
    return { open: { pos: i - l, margin: l && 1 }, close: { pos: s + a, margin: a && 1 } }
  let c, f
  s - i <= 2 * Mt
    ? (c = f = n.sliceDoc(i, s))
    : ((c = n.sliceDoc(i, i + Mt)), (f = n.sliceDoc(s - Mt, s)))
  let u = /^\s*/.exec(c)[0].length,
    d = /\s*$/.exec(f)[0].length,
    p = f.length - d - t.length
  return c.slice(u, u + e.length) == e && f.slice(p, p + t.length) == t
    ? {
        open: { pos: i + u + e.length, margin: /\s/.test(c.charAt(u + e.length)) ? 1 : 0 },
        close: { pos: s - d - t.length, margin: /\s/.test(f.charAt(p - 1)) ? 1 : 0 }
      }
    : null
}
function vu(n) {
  let e = []
  for (let t of n.selection.ranges) {
    let i = n.doc.lineAt(t.from),
      s = t.to <= i.to ? i : n.doc.lineAt(t.to),
      r = e.length - 1
    r >= 0 && e[r].to > i.from ? (e[r].to = s.to) : e.push({ from: i.from, to: s.to })
  }
  return e
}
function Jl(n, e, t = e.selection.ranges) {
  let i = t.map(r => Bs(e, r.from).block)
  if (!i.every(r => r)) return null
  let s = t.map((r, o) => xu(e, i[o], r.from, r.to))
  if (n != 2 && !s.every(r => r))
    return {
      changes: e.changes(
        t.map((r, o) =>
          s[o]
            ? []
            : [
                { from: r.from, insert: i[o].open + ' ' },
                { from: r.to, insert: ' ' + i[o].close }
              ]
        )
      )
    }
  if (n != 1 && s.some(r => r)) {
    let r = []
    for (let o = 0, l; o < s.length; o++)
      if ((l = s[o])) {
        let a = i[o],
          { open: h, close: c } = l
        r.push(
          { from: h.pos - a.open.length, to: h.pos + h.margin },
          { from: c.pos - c.margin, to: c.pos + a.close.length }
        )
      }
    return { changes: r }
  }
  return null
}
function ku(n, e, t = e.selection.ranges) {
  let i = [],
    s = -1
  for (let { from: r, to: o } of t) {
    let l = i.length,
      a = 1e9
    for (let h = r; h <= o; ) {
      let c = e.doc.lineAt(h)
      if (c.from > s && (r == o || o > c.from)) {
        s = c.from
        let f = Bs(e, h).line
        if (!f) continue
        let u = /^\s*/.exec(c.text)[0].length,
          d = u == c.length,
          p = c.text.slice(u, u + f.length) == f ? u : -1
        u < c.text.length && u < a && (a = u),
          i.push({ line: c, comment: p, token: f, indent: u, empty: d, single: !1 })
      }
      h = c.to + 1
    }
    if (a < 1e9)
      for (let h = l; h < i.length; h++) i[h].indent < i[h].line.text.length && (i[h].indent = a)
    i.length == l + 1 && (i[l].single = !0)
  }
  if (n != 2 && i.some(r => r.comment < 0 && (!r.empty || r.single))) {
    let r = []
    for (let { line: l, token: a, indent: h, empty: c, single: f } of i)
      (f || !c) && r.push({ from: l.from + h, insert: a + ' ' })
    let o = e.changes(r)
    return { changes: o, selection: e.selection.map(o, 1) }
  } else if (n != 1 && i.some(r => r.comment >= 0)) {
    let r = []
    for (let { line: o, comment: l, token: a } of i)
      if (l >= 0) {
        let h = o.from + l,
          c = h + a.length
        o.text[c - o.from] == ' ' && c++, r.push({ from: h, to: c })
      }
    return { changes: r }
  }
  return null
}
const rs = et.define(),
  Su = et.define(),
  Cu = x.define(),
  Yl = x.define({
    combine(n) {
      return Ce(
        n,
        { minDepth: 100, newGroupDelay: 500 },
        { minDepth: Math.max, newGroupDelay: Math.min }
      )
    }
  })
function Au(n) {
  let e = 0
  return n.iterChangedRanges((t, i) => (e = i)), e
}
const Xl = U.define({
  create() {
    return xe.empty
  },
  update(n, e) {
    let t = e.state.facet(Yl),
      i = e.annotation(rs)
    if (i) {
      let a = e.docChanged ? y.single(Au(e.changes)) : void 0,
        h = te.fromTransaction(e, a),
        c = i.side,
        f = c == 0 ? n.undone : n.done
      return (
        h ? (f = Ii(f, f.length, t.minDepth, h)) : (f = _l(f, e.startState.selection)),
        new xe(c == 0 ? i.rest : f, c == 0 ? f : i.rest)
      )
    }
    let s = e.annotation(Su)
    if (((s == 'full' || s == 'before') && (n = n.isolate()), e.annotation(q.addToHistory) === !1))
      return e.changes.empty ? n : n.addMapping(e.changes.desc)
    let r = te.fromTransaction(e),
      o = e.annotation(q.time),
      l = e.annotation(q.userEvent)
    return (
      r
        ? (n = n.addChanges(r, o, l, t.newGroupDelay, t.minDepth))
        : e.selection && (n = n.addSelection(e.startState.selection, o, l, t.newGroupDelay)),
      (s == 'full' || s == 'after') && (n = n.isolate()),
      n
    )
  },
  toJSON(n) {
    return { done: n.done.map(e => e.toJSON()), undone: n.undone.map(e => e.toJSON()) }
  },
  fromJSON(n) {
    return new xe(n.done.map(te.fromJSON), n.undone.map(te.fromJSON))
  }
})
function am(n = {}) {
  return [
    Xl,
    Yl.of(n),
    S.domEventHandlers({
      beforeinput(e, t) {
        let i = e.inputType == 'historyUndo' ? Ql : e.inputType == 'historyRedo' ? os : null
        return i ? (e.preventDefault(), i(t)) : !1
      }
    })
  ]
}
function Qi(n, e) {
  return function ({ state: t, dispatch: i }) {
    if (!e && t.readOnly) return !1
    let s = t.field(Xl, !1)
    if (!s) return !1
    let r = s.pop(n, t, e)
    return r ? (i(r), !0) : !1
  }
}
const Ql = Qi(0, !1),
  os = Qi(1, !1),
  Mu = Qi(0, !0),
  Du = Qi(1, !0)
class te {
  constructor(e, t, i, s, r) {
    ;(this.changes = e),
      (this.effects = t),
      (this.mapped = i),
      (this.startSelection = s),
      (this.selectionsAfter = r)
  }
  setSelAfter(e) {
    return new te(this.changes, this.effects, this.mapped, this.startSelection, e)
  }
  toJSON() {
    var e, t, i
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map(s => s.toJSON())
    }
  }
  static fromJSON(e) {
    return new te(
      e.changes && z.fromJSON(e.changes),
      [],
      e.mapped && ve.fromJSON(e.mapped),
      e.startSelection && y.fromJSON(e.startSelection),
      e.selectionsAfter.map(y.fromJSON)
    )
  }
  static fromTransaction(e, t) {
    let i = de
    for (let s of e.startState.facet(Cu)) {
      let r = s(e)
      r.length && (i = i.concat(r))
    }
    return !i.length && e.changes.empty
      ? null
      : new te(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, de)
  }
  static selection(e) {
    return new te(void 0, de, void 0, void 0, e)
  }
}
function Ii(n, e, t, i) {
  let s = e + 1 > t + 20 ? e - t - 1 : 0,
    r = n.slice(s, e)
  return r.push(i), r
}
function Tu(n, e) {
  let t = [],
    i = !1
  return (
    n.iterChangedRanges((s, r) => t.push(s, r)),
    e.iterChangedRanges((s, r, o, l) => {
      for (let a = 0; a < t.length; ) {
        let h = t[a++],
          c = t[a++]
        l >= h && o <= c && (i = !0)
      }
    }),
    i
  )
}
function Ou(n, e) {
  return (
    n.ranges.length == e.ranges.length &&
    n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0
  )
}
function Zl(n, e) {
  return n.length ? (e.length ? n.concat(e) : n) : e
}
const de = [],
  Bu = 200
function _l(n, e) {
  if (n.length) {
    let t = n[n.length - 1],
      i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - Bu))
    return i.length && i[i.length - 1].eq(e)
      ? n
      : (i.push(e), Ii(n, n.length - 1, 1e9, t.setSelAfter(i)))
  } else return [te.selection([e])]
}
function Lu(n) {
  let e = n[n.length - 1],
    t = n.slice()
  return (
    (t[n.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1))), t
  )
}
function kn(n, e) {
  if (!n.length) return n
  let t = n.length,
    i = de
  for (; t; ) {
    let s = Ru(n[t - 1], e, i)
    if ((s.changes && !s.changes.empty) || s.effects.length) {
      let r = n.slice(0, t)
      return (r[t - 1] = s), r
    } else (e = s.mapped), t--, (i = s.selectionsAfter)
  }
  return i.length ? [te.selection(i)] : de
}
function Ru(n, e, t) {
  let i = Zl(n.selectionsAfter.length ? n.selectionsAfter.map(l => l.map(e)) : de, t)
  if (!n.changes) return te.selection(i)
  let s = n.changes.map(e),
    r = e.mapDesc(n.changes, !0),
    o = n.mapped ? n.mapped.composeDesc(r) : r
  return new te(s, A.mapEffects(n.effects, e), o, n.startSelection.map(r), i)
}
const Eu = /^(input\.type|delete)($|\.)/
class xe {
  constructor(e, t, i = 0, s = void 0) {
    ;(this.done = e), (this.undone = t), (this.prevTime = i), (this.prevUserEvent = s)
  }
  isolate() {
    return this.prevTime ? new xe(this.done, this.undone) : this
  }
  addChanges(e, t, i, s, r) {
    let o = this.done,
      l = o[o.length - 1]
    return (
      l &&
      l.changes &&
      !l.changes.empty &&
      e.changes &&
      (!i || Eu.test(i)) &&
      ((!l.selectionsAfter.length && t - this.prevTime < s && Tu(l.changes, e.changes)) ||
        i == 'input.type.compose')
        ? (o = Ii(
            o,
            o.length - 1,
            r,
            new te(
              e.changes.compose(l.changes),
              Zl(e.effects, l.effects),
              l.mapped,
              l.startSelection,
              de
            )
          ))
        : (o = Ii(o, o.length, r, e)),
      new xe(o, de, t, i)
    )
  }
  addSelection(e, t, i, s) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : de
    return r.length > 0 &&
      t - this.prevTime < s &&
      i == this.prevUserEvent &&
      i &&
      /^select($|\.)/.test(i) &&
      Ou(r[r.length - 1], e)
      ? this
      : new xe(_l(this.done, e), this.undone, t, i)
  }
  addMapping(e) {
    return new xe(kn(this.done, e), kn(this.undone, e), this.prevTime, this.prevUserEvent)
  }
  pop(e, t, i) {
    let s = e == 0 ? this.done : this.undone
    if (s.length == 0) return null
    let r = s[s.length - 1]
    if (i && r.selectionsAfter.length)
      return t.update({
        selection: r.selectionsAfter[r.selectionsAfter.length - 1],
        annotations: rs.of({ side: e, rest: Lu(s) }),
        userEvent: e == 0 ? 'select.undo' : 'select.redo',
        scrollIntoView: !0
      })
    if (r.changes) {
      let o = s.length == 1 ? de : s.slice(0, s.length - 1)
      return (
        r.mapped && (o = kn(o, r.mapped)),
        t.update({
          changes: r.changes,
          selection: r.startSelection,
          effects: r.effects,
          annotations: rs.of({ side: e, rest: o }),
          filter: !1,
          userEvent: e == 0 ? 'undo' : 'redo',
          scrollIntoView: !0
        })
      )
    } else return null
  }
}
xe.empty = new xe(de, de)
const hm = [
  { key: 'Mod-z', run: Ql, preventDefault: !0 },
  { key: 'Mod-y', mac: 'Mod-Shift-z', run: os, preventDefault: !0 },
  { linux: 'Ctrl-Shift-z', run: os, preventDefault: !0 },
  { key: 'Mod-u', run: Mu, preventDefault: !0 },
  { key: 'Alt-u', mac: 'Mod-Shift-u', run: Du, preventDefault: !0 }
]
function vt(n, e) {
  return y.create(n.ranges.map(e), n.mainIndex)
}
function Ae(n, e) {
  return n.update({ selection: e, scrollIntoView: !0, userEvent: 'select' })
}
function ge({ state: n, dispatch: e }, t) {
  let i = vt(n.selection, t)
  return i.eq(n.selection) ? !1 : (e(Ae(n, i)), !0)
}
function Zi(n, e) {
  return y.cursor(e ? n.to : n.from)
}
function ea(n, e) {
  return ge(n, t => (t.empty ? n.moveByChar(t, e) : Zi(t, e)))
}
function X(n) {
  return n.textDirectionAt(n.state.selection.main.head) == F.LTR
}
const ta = n => ea(n, !X(n)),
  ia = n => ea(n, X(n))
function na(n, e) {
  return ge(n, t => (t.empty ? n.moveByGroup(t, e) : Zi(t, e)))
}
const Pu = n => na(n, !X(n)),
  Iu = n => na(n, X(n))
function Nu(n, e, t) {
  if (e.type.prop(t)) return !0
  let i = e.to - e.from
  return (i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to)))) || e.firstChild
}
function _i(n, e, t) {
  let i = Y(n).resolveInner(e.head),
    s = t ? ke.closedBy : ke.openedBy
  for (let a = e.head; ; ) {
    let h = t ? i.childAfter(a) : i.childBefore(a)
    if (!h) break
    Nu(n, h, s) ? (i = h) : (a = t ? h.to : h.from)
  }
  let r = i.type.prop(s),
    o,
    l
  return (
    r && (o = t ? we(n, i.from, 1) : we(n, i.to, -1)) && o.matched
      ? (l = t ? o.end.to : o.end.from)
      : (l = t ? i.to : i.from),
    y.cursor(l, t ? -1 : 1)
  )
}
const Vu = n => ge(n, e => _i(n.state, e, !X(n))),
  Fu = n => ge(n, e => _i(n.state, e, X(n)))
function sa(n, e) {
  return ge(n, t => {
    if (!t.empty) return Zi(t, e)
    let i = n.moveVertically(t, e)
    return i.head != t.head ? i : n.moveToLineBoundary(t, e)
  })
}
const ra = n => sa(n, !1),
  oa = n => sa(n, !0)
function la(n) {
  return Math.max(n.defaultLineHeight, Math.min(n.dom.clientHeight, innerHeight) - 5)
}
function aa(n, e) {
  let { state: t } = n,
    i = vt(t.selection, l => (l.empty ? n.moveVertically(l, e, la(n)) : Zi(l, e)))
  if (i.eq(t.selection)) return !1
  let s = n.coordsAtPos(t.selection.main.head),
    r = n.scrollDOM.getBoundingClientRect(),
    o
  return (
    s &&
      s.top > r.top &&
      s.bottom < r.bottom &&
      s.top - r.top <=
        n.scrollDOM.scrollHeight - n.scrollDOM.scrollTop - n.scrollDOM.clientHeight &&
      (o = S.scrollIntoView(i.main.head, { y: 'start', yMargin: s.top - r.top })),
    n.dispatch(Ae(t, i), { effects: o }),
    !0
  )
}
const jr = n => aa(n, !1),
  ls = n => aa(n, !0)
function $e(n, e, t) {
  let i = n.lineBlockAt(e.head),
    s = n.moveToLineBoundary(e, t)
  if (
    (s.head == e.head && s.head != (t ? i.to : i.from) && (s = n.moveToLineBoundary(e, t, !1)),
    !t && s.head == i.from && i.length)
  ) {
    let r = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length
    r && e.head != i.from + r && (s = y.cursor(i.from + r))
  }
  return s
}
const Hu = n => ge(n, e => $e(n, e, !0)),
  Wu = n => ge(n, e => $e(n, e, !1)),
  zu = n => ge(n, e => $e(n, e, !X(n))),
  qu = n => ge(n, e => $e(n, e, X(n))),
  $u = n => ge(n, e => y.cursor(n.lineBlockAt(e.head).from, 1)),
  Ku = n => ge(n, e => y.cursor(n.lineBlockAt(e.head).to, -1))
function ju(n, e, t) {
  let i = !1,
    s = vt(n.selection, r => {
      let o =
        we(n, r.head, -1) ||
        we(n, r.head, 1) ||
        (r.head > 0 && we(n, r.head - 1, 1)) ||
        (r.head < n.doc.length && we(n, r.head + 1, -1))
      if (!o || !o.end) return r
      i = !0
      let l = o.start.from == r.head ? o.end.to : o.end.from
      return t ? y.range(r.anchor, l) : y.cursor(l)
    })
  return i ? (e(Ae(n, s)), !0) : !1
}
const Uu = ({ state: n, dispatch: e }) => ju(n, e, !1)
function me(n, e) {
  let t = vt(n.state.selection, i => {
    let s = e(i)
    return y.range(i.anchor, s.head, s.goalColumn)
  })
  return t.eq(n.state.selection) ? !1 : (n.dispatch(Ae(n.state, t)), !0)
}
function ha(n, e) {
  return me(n, t => n.moveByChar(t, e))
}
const ca = n => ha(n, !X(n)),
  fa = n => ha(n, X(n))
function ua(n, e) {
  return me(n, t => n.moveByGroup(t, e))
}
const Gu = n => ua(n, !X(n)),
  Ju = n => ua(n, X(n)),
  Yu = n => me(n, e => _i(n.state, e, !X(n))),
  Xu = n => me(n, e => _i(n.state, e, X(n)))
function da(n, e) {
  return me(n, t => n.moveVertically(t, e))
}
const pa = n => da(n, !1),
  ma = n => da(n, !0)
function ga(n, e) {
  return me(n, t => n.moveVertically(t, e, la(n)))
}
const Ur = n => ga(n, !1),
  Gr = n => ga(n, !0),
  Qu = n => me(n, e => $e(n, e, !0)),
  Zu = n => me(n, e => $e(n, e, !1)),
  _u = n => me(n, e => $e(n, e, !X(n))),
  ed = n => me(n, e => $e(n, e, X(n))),
  td = n => me(n, e => y.cursor(n.lineBlockAt(e.head).from)),
  id = n => me(n, e => y.cursor(n.lineBlockAt(e.head).to)),
  Jr = ({ state: n, dispatch: e }) => (e(Ae(n, { anchor: 0 })), !0),
  Yr = ({ state: n, dispatch: e }) => (e(Ae(n, { anchor: n.doc.length })), !0),
  Xr = ({ state: n, dispatch: e }) => (e(Ae(n, { anchor: n.selection.main.anchor, head: 0 })), !0),
  Qr = ({ state: n, dispatch: e }) => (
    e(Ae(n, { anchor: n.selection.main.anchor, head: n.doc.length })), !0
  ),
  nd = ({ state: n, dispatch: e }) => (
    e(n.update({ selection: { anchor: 0, head: n.doc.length }, userEvent: 'select' })), !0
  ),
  sd = ({ state: n, dispatch: e }) => {
    let t = tn(n).map(({ from: i, to: s }) => y.range(i, Math.min(s + 1, n.doc.length)))
    return e(n.update({ selection: y.create(t), userEvent: 'select' })), !0
  },
  rd = ({ state: n, dispatch: e }) => {
    let t = vt(n.selection, i => {
      var s
      let r = Y(n).resolveInner(i.head, 1)
      for (
        ;
        !(
          (r.from < i.from && r.to >= i.to) ||
          (r.to > i.to && r.from <= i.from) ||
          !(!((s = r.parent) === null || s === void 0) && s.parent)
        );

      )
        r = r.parent
      return y.range(r.to, r.from)
    })
    return e(Ae(n, t)), !0
  },
  od = ({ state: n, dispatch: e }) => {
    let t = n.selection,
      i = null
    return (
      t.ranges.length > 1
        ? (i = y.create([t.main]))
        : t.main.empty || (i = y.create([y.cursor(t.main.head)])),
      i ? (e(Ae(n, i)), !0) : !1
    )
  }
function en(n, e) {
  if (n.state.readOnly) return !1
  let t = 'delete.selection',
    { state: i } = n,
    s = i.changeByRange(r => {
      let { from: o, to: l } = r
      if (o == l) {
        let a = e(o)
        a < o
          ? ((t = 'delete.backward'), (a = ci(n, a, !1)))
          : a > o && ((t = 'delete.forward'), (a = ci(n, a, !0))),
          (o = Math.min(o, a)),
          (l = Math.max(l, a))
      } else (o = ci(n, o, !1)), (l = ci(n, l, !0))
      return o == l ? { range: r } : { changes: { from: o, to: l }, range: y.cursor(o) }
    })
  return s.changes.empty
    ? !1
    : (n.dispatch(
        i.update(s, {
          scrollIntoView: !0,
          userEvent: t,
          effects: t == 'delete.selection' ? S.announce.of(i.phrase('Selection deleted')) : void 0
        })
      ),
      !0)
}
function ci(n, e, t) {
  if (n instanceof S)
    for (let i of n.state.facet(S.atomicRanges).map(s => s(n)))
      i.between(e, e, (s, r) => {
        s < e && r > e && (e = t ? r : s)
      })
  return e
}
const ya = (n, e) =>
    en(n, t => {
      let { state: i } = n,
        s = i.doc.lineAt(t),
        r,
        o
      if (
        !e &&
        t > s.from &&
        t < s.from + 200 &&
        !/[^ \t]/.test((r = s.text.slice(0, t - s.from)))
      ) {
        if (r[r.length - 1] == '	') return t - 1
        let l = Jt(r, i.tabSize),
          a = l % Ri(i) || Ri(i)
        for (let h = 0; h < a && r[r.length - 1 - h] == ' '; h++) t--
        o = t
      } else
        (o = Z(s.text, t - s.from, e, e) + s.from),
          o == t && s.number != (e ? i.doc.lines : 1) && (o += e ? 1 : -1)
      return o
    }),
  as = n => ya(n, !1),
  ba = n => ya(n, !0),
  wa = (n, e) =>
    en(n, t => {
      let i = t,
        { state: s } = n,
        r = s.doc.lineAt(i),
        o = s.charCategorizer(i)
      for (let l = null; ; ) {
        if (i == (e ? r.to : r.from)) {
          i == t && r.number != (e ? s.doc.lines : 1) && (i += e ? 1 : -1)
          break
        }
        let a = Z(r.text, i - r.from, e) + r.from,
          h = r.text.slice(Math.min(i, a) - r.from, Math.max(i, a) - r.from),
          c = o(h)
        if (l != null && c != l) break
        ;(h != ' ' || i != t) && (l = c), (i = a)
      }
      return i
    }),
  xa = n => wa(n, !1),
  ld = n => wa(n, !0),
  va = n =>
    en(n, e => {
      let t = n.lineBlockAt(e).to
      return e < t ? t : Math.min(n.state.doc.length, e + 1)
    }),
  ad = n =>
    en(n, e => {
      let t = n.lineBlockAt(e).from
      return e > t ? t : Math.max(0, e - 1)
    }),
  hd = ({ state: n, dispatch: e }) => {
    if (n.readOnly) return !1
    let t = n.changeByRange(i => ({
      changes: { from: i.from, to: i.to, insert: B.of(['', '']) },
      range: y.cursor(i.from)
    }))
    return e(n.update(t, { scrollIntoView: !0, userEvent: 'input' })), !0
  },
  cd = ({ state: n, dispatch: e }) => {
    if (n.readOnly) return !1
    let t = n.changeByRange(i => {
      if (!i.empty || i.from == 0 || i.from == n.doc.length) return { range: i }
      let s = i.from,
        r = n.doc.lineAt(s),
        o = s == r.from ? s - 1 : Z(r.text, s - r.from, !1) + r.from,
        l = s == r.to ? s + 1 : Z(r.text, s - r.from, !0) + r.from
      return {
        changes: { from: o, to: l, insert: n.doc.slice(s, l).append(n.doc.slice(o, s)) },
        range: y.cursor(l)
      }
    })
    return t.changes.empty
      ? !1
      : (e(n.update(t, { scrollIntoView: !0, userEvent: 'move.character' })), !0)
  }
function tn(n) {
  let e = [],
    t = -1
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.from),
      r = n.doc.lineAt(i.to)
    if ((!i.empty && i.to == r.from && (r = n.doc.lineAt(i.to - 1)), t >= s.number)) {
      let o = e[e.length - 1]
      ;(o.to = r.to), o.ranges.push(i)
    } else e.push({ from: s.from, to: r.to, ranges: [i] })
    t = r.number + 1
  }
  return e
}
function ka(n, e, t) {
  if (n.readOnly) return !1
  let i = [],
    s = []
  for (let r of tn(n)) {
    if (t ? r.to == n.doc.length : r.from == 0) continue
    let o = n.doc.lineAt(t ? r.to + 1 : r.from - 1),
      l = o.length + 1
    if (t) {
      i.push({ from: r.to, to: o.to }, { from: r.from, insert: o.text + n.lineBreak })
      for (let a of r.ranges)
        s.push(y.range(Math.min(n.doc.length, a.anchor + l), Math.min(n.doc.length, a.head + l)))
    } else {
      i.push({ from: o.from, to: r.from }, { from: r.to, insert: n.lineBreak + o.text })
      for (let a of r.ranges) s.push(y.range(a.anchor - l, a.head - l))
    }
  }
  return i.length
    ? (e(
        n.update({
          changes: i,
          scrollIntoView: !0,
          selection: y.create(s, n.selection.mainIndex),
          userEvent: 'move.line'
        })
      ),
      !0)
    : !1
}
const fd = ({ state: n, dispatch: e }) => ka(n, e, !1),
  ud = ({ state: n, dispatch: e }) => ka(n, e, !0)
function Sa(n, e, t) {
  if (n.readOnly) return !1
  let i = []
  for (let s of tn(n))
    t
      ? i.push({ from: s.from, insert: n.doc.slice(s.from, s.to) + n.lineBreak })
      : i.push({ from: s.to, insert: n.lineBreak + n.doc.slice(s.from, s.to) })
  return e(n.update({ changes: i, scrollIntoView: !0, userEvent: 'input.copyline' })), !0
}
const dd = ({ state: n, dispatch: e }) => Sa(n, e, !1),
  pd = ({ state: n, dispatch: e }) => Sa(n, e, !0),
  md = n => {
    if (n.state.readOnly) return !1
    let { state: e } = n,
      t = e.changes(
        tn(e).map(
          ({ from: s, to: r }) => (s > 0 ? s-- : r < e.doc.length && r++, { from: s, to: r })
        )
      ),
      i = vt(e.selection, s => n.moveVertically(s, !0)).map(t)
    return (
      n.dispatch({ changes: t, selection: i, scrollIntoView: !0, userEvent: 'delete.line' }), !0
    )
  }
function gd(n, e) {
  if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1))) return { from: e, to: e }
  let t = Y(n).resolveInner(e),
    i = t.childBefore(e),
    s = t.childAfter(e),
    r
  return i &&
    s &&
    i.to <= e &&
    s.from >= e &&
    (r = i.type.prop(ke.closedBy)) &&
    r.indexOf(s.name) > -1 &&
    n.doc.lineAt(i.to).from == n.doc.lineAt(s.from).from
    ? { from: i.to, to: s.from }
    : null
}
const yd = Ca(!1),
  bd = Ca(!0)
function Ca(n) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly) return !1
    let i = e.changeByRange(s => {
      let { from: r, to: o } = s,
        l = e.doc.lineAt(r),
        a = !n && r == o && gd(e, r)
      n && (r = o = (o <= l.to ? l : e.doc.lineAt(o)).to)
      let h = new Ji(e, { simulateBreak: r, simulateDoubleBreak: !!a }),
        c = As(h, r)
      for (
        c == null && (c = /^\s*/.exec(e.doc.lineAt(r).text)[0].length);
        o < l.to && /\s/.test(l.text[o - l.from]);

      )
        o++
      a
        ? ({ from: r, to: o } = a)
        : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from)
      let f = ['', jt(e, c)]
      return (
        a && f.push(jt(e, h.lineIndent(l.from, -1))),
        { changes: { from: r, to: o, insert: B.of(f) }, range: y.cursor(r + 1 + f[1].length) }
      )
    })
    return t(e.update(i, { scrollIntoView: !0, userEvent: 'input' })), !0
  }
}
function Ls(n, e) {
  let t = -1
  return n.changeByRange(i => {
    let s = []
    for (let o = i.from; o <= i.to; ) {
      let l = n.doc.lineAt(o)
      l.number > t && (i.empty || i.to > l.from) && (e(l, s, i), (t = l.number)), (o = l.to + 1)
    }
    let r = n.changes(s)
    return { changes: s, range: y.range(r.mapPos(i.anchor, 1), r.mapPos(i.head, 1)) }
  })
}
const wd = ({ state: n, dispatch: e }) => {
    if (n.readOnly) return !1
    let t = Object.create(null),
      i = new Ji(n, {
        overrideIndentation: r => {
          let o = t[r]
          return o == null ? -1 : o
        }
      }),
      s = Ls(n, (r, o, l) => {
        let a = As(i, r.from)
        if (a == null) return
        ;/\S/.test(r.text) || (a = 0)
        let h = /^\s*/.exec(r.text)[0],
          c = jt(n, a)
        ;(h != c || l.from < r.from + h.length) &&
          ((t[r.from] = a), o.push({ from: r.from, to: r.from + h.length, insert: c }))
      })
    return s.changes.empty || e(n.update(s, { userEvent: 'indent' })), !0
  },
  Aa = ({ state: n, dispatch: e }) =>
    n.readOnly
      ? !1
      : (e(
          n.update(
            Ls(n, (t, i) => {
              i.push({ from: t.from, insert: n.facet(Cs) })
            }),
            { userEvent: 'input.indent' }
          )
        ),
        !0),
  Ma = ({ state: n, dispatch: e }) =>
    n.readOnly
      ? !1
      : (e(
          n.update(
            Ls(n, (t, i) => {
              let s = /^\s*/.exec(t.text)[0]
              if (!s) return
              let r = Jt(s, n.tabSize),
                o = 0,
                l = jt(n, Math.max(0, r - Ri(n)))
              for (; o < s.length && o < l.length && s.charCodeAt(o) == l.charCodeAt(o); ) o++
              i.push({ from: t.from + o, to: t.from + s.length, insert: l.slice(o) })
            }),
            { userEvent: 'delete.dedent' }
          )
        ),
        !0),
  xd = [
    { key: 'Ctrl-b', run: ta, shift: ca, preventDefault: !0 },
    { key: 'Ctrl-f', run: ia, shift: fa },
    { key: 'Ctrl-p', run: ra, shift: pa },
    { key: 'Ctrl-n', run: oa, shift: ma },
    { key: 'Ctrl-a', run: $u, shift: td },
    { key: 'Ctrl-e', run: Ku, shift: id },
    { key: 'Ctrl-d', run: ba },
    { key: 'Ctrl-h', run: as },
    { key: 'Ctrl-k', run: va },
    { key: 'Ctrl-Alt-h', run: xa },
    { key: 'Ctrl-o', run: hd },
    { key: 'Ctrl-t', run: cd },
    { key: 'Ctrl-v', run: ls }
  ],
  vd = [
    { key: 'ArrowLeft', run: ta, shift: ca, preventDefault: !0 },
    { key: 'Mod-ArrowLeft', mac: 'Alt-ArrowLeft', run: Pu, shift: Gu, preventDefault: !0 },
    { mac: 'Cmd-ArrowLeft', run: zu, shift: _u, preventDefault: !0 },
    { key: 'ArrowRight', run: ia, shift: fa, preventDefault: !0 },
    { key: 'Mod-ArrowRight', mac: 'Alt-ArrowRight', run: Iu, shift: Ju, preventDefault: !0 },
    { mac: 'Cmd-ArrowRight', run: qu, shift: ed, preventDefault: !0 },
    { key: 'ArrowUp', run: ra, shift: pa, preventDefault: !0 },
    { mac: 'Cmd-ArrowUp', run: Jr, shift: Xr },
    { mac: 'Ctrl-ArrowUp', run: jr, shift: Ur },
    { key: 'ArrowDown', run: oa, shift: ma, preventDefault: !0 },
    { mac: 'Cmd-ArrowDown', run: Yr, shift: Qr },
    { mac: 'Ctrl-ArrowDown', run: ls, shift: Gr },
    { key: 'PageUp', run: jr, shift: Ur },
    { key: 'PageDown', run: ls, shift: Gr },
    { key: 'Home', run: Wu, shift: Zu, preventDefault: !0 },
    { key: 'Mod-Home', run: Jr, shift: Xr },
    { key: 'End', run: Hu, shift: Qu, preventDefault: !0 },
    { key: 'Mod-End', run: Yr, shift: Qr },
    { key: 'Enter', run: yd },
    { key: 'Mod-a', run: nd },
    { key: 'Backspace', run: as, shift: as },
    { key: 'Delete', run: ba },
    { key: 'Mod-Backspace', mac: 'Alt-Backspace', run: xa },
    { key: 'Mod-Delete', mac: 'Alt-Delete', run: ld },
    { mac: 'Mod-Backspace', run: ad },
    { mac: 'Mod-Delete', run: va }
  ].concat(xd.map(n => ({ mac: n.key, run: n.run, shift: n.shift }))),
  cm = [
    { key: 'Alt-ArrowLeft', mac: 'Ctrl-ArrowLeft', run: Vu, shift: Yu },
    { key: 'Alt-ArrowRight', mac: 'Ctrl-ArrowRight', run: Fu, shift: Xu },
    { key: 'Alt-ArrowUp', run: fd },
    { key: 'Shift-Alt-ArrowUp', run: dd },
    { key: 'Alt-ArrowDown', run: ud },
    { key: 'Shift-Alt-ArrowDown', run: pd },
    { key: 'Escape', run: od },
    { key: 'Mod-Enter', run: bd },
    { key: 'Alt-l', mac: 'Ctrl-l', run: sd },
    { key: 'Mod-i', run: rd, preventDefault: !0 },
    { key: 'Mod-[', run: Ma },
    { key: 'Mod-]', run: Aa },
    { key: 'Mod-Alt-\\', run: wd },
    { key: 'Shift-Mod-k', run: md },
    { key: 'Shift-Mod-\\', run: Uu },
    { key: 'Mod-/', run: gu },
    { key: 'Alt-A', run: bu }
  ].concat(vd),
  fm = { key: 'Tab', run: Aa, shift: Ma },
  Zr = typeof String.prototype.normalize == 'function' ? n => n.normalize('NFKD') : n => n
class bt {
  constructor(e, t, i = 0, s = e.length, r, o) {
    ;(this.test = o),
      (this.value = { from: 0, to: 0 }),
      (this.done = !1),
      (this.matches = []),
      (this.buffer = ''),
      (this.bufferPos = 0),
      (this.iter = e.iterRange(i, s)),
      (this.bufferStart = i),
      (this.normalize = r ? l => r(Zr(l)) : Zr),
      (this.query = this.normalize(t))
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (((this.bufferStart += this.buffer.length), this.iter.next(), this.iter.done)) return -1
      ;(this.bufferPos = 0), (this.buffer = this.iter.value)
    }
    return j(this.buffer, this.bufferPos)
  }
  next() {
    for (; this.matches.length; ) this.matches.pop()
    return this.nextOverlapping()
  }
  nextOverlapping() {
    for (;;) {
      let e = this.peek()
      if (e < 0) return (this.done = !0), this
      let t = ds(e),
        i = this.bufferStart + this.bufferPos
      this.bufferPos += oe(e)
      let s = this.normalize(t)
      for (let r = 0, o = i; ; r++) {
        let l = s.charCodeAt(r),
          a = this.match(l, o)
        if (a) return (this.value = a), this
        if (r == s.length - 1) break
        o == i && r < t.length && t.charCodeAt(r) == l && o++
      }
    }
  }
  match(e, t) {
    let i = null
    for (let s = 0; s < this.matches.length; s += 2) {
      let r = this.matches[s],
        o = !1
      this.query.charCodeAt(r) == e &&
        (r == this.query.length - 1
          ? (i = { from: this.matches[s + 1], to: t + 1 })
          : (this.matches[s]++, (o = !0))),
        o || (this.matches.splice(s, 2), (s -= 2))
    }
    return (
      this.query.charCodeAt(0) == e &&
        (this.query.length == 1 ? (i = { from: t, to: t + 1 }) : this.matches.push(1, t)),
      i && this.test && !this.test(i.from, i.to, this.buffer, this.bufferPos) && (i = null),
      i
    )
  }
}
typeof Symbol < 'u' &&
  (bt.prototype[Symbol.iterator] = function () {
    return this
  })
const Da = { from: -1, to: -1, match: /.*/.exec('') },
  Rs = 'gm' + (/x/.unicode == null ? '' : 'u')
class Ta {
  constructor(e, t, i, s = 0, r = e.length) {
    if (
      ((this.text = e),
      (this.to = r),
      (this.curLine = ''),
      (this.done = !1),
      (this.value = Da),
      /\\[sWDnr]|\n|\r|\[\^/.test(t))
    )
      return new Oa(e, t, i, s, r)
    ;(this.re = new RegExp(t, Rs + (i != null && i.ignoreCase ? 'i' : ''))),
      (this.test = i == null ? void 0 : i.test),
      (this.iter = e.iter())
    let o = e.lineAt(s)
    ;(this.curLineStart = o.from), (this.matchPos = Ni(e, s)), this.getLine(this.curLineStart)
  }
  getLine(e) {
    this.iter.next(e),
      this.iter.lineBreak
        ? (this.curLine = '')
        : ((this.curLine = this.iter.value),
          this.curLineStart + this.curLine.length > this.to &&
            (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)),
          this.iter.next())
  }
  nextLine() {
    ;(this.curLineStart = this.curLineStart + this.curLine.length + 1),
      this.curLineStart > this.to ? (this.curLine = '') : this.getLine(0)
  }
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e
      let t = this.matchPos <= this.to && this.re.exec(this.curLine)
      if (t) {
        let i = this.curLineStart + t.index,
          s = i + t[0].length
        if (
          ((this.matchPos = Ni(this.text, s + (i == s ? 1 : 0))),
          i == this.curLineStart + this.curLine.length && this.nextLine(),
          (i < s || i > this.value.to) && (!this.test || this.test(i, s, t)))
        )
          return (this.value = { from: i, to: s, match: t }), this
        e = this.matchPos - this.curLineStart
      } else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), (e = 0)
      else return (this.done = !0), this
    }
  }
}
const Sn = new WeakMap()
class ut {
  constructor(e, t) {
    ;(this.from = e), (this.text = t)
  }
  get to() {
    return this.from + this.text.length
  }
  static get(e, t, i) {
    let s = Sn.get(e)
    if (!s || s.from >= i || s.to <= t) {
      let l = new ut(t, e.sliceString(t, i))
      return Sn.set(e, l), l
    }
    if (s.from == t && s.to == i) return s
    let { text: r, from: o } = s
    return (
      o > t && ((r = e.sliceString(t, o) + r), (o = t)),
      s.to < i && (r += e.sliceString(s.to, i)),
      Sn.set(e, new ut(o, r)),
      new ut(t, r.slice(t - o, i - o))
    )
  }
}
class Oa {
  constructor(e, t, i, s, r) {
    ;(this.text = e),
      (this.to = r),
      (this.done = !1),
      (this.value = Da),
      (this.matchPos = Ni(e, s)),
      (this.re = new RegExp(t, Rs + (i != null && i.ignoreCase ? 'i' : ''))),
      (this.test = i == null ? void 0 : i.test),
      (this.flat = ut.get(e, s, this.chunkEnd(s + 5e3)))
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to
  }
  next() {
    for (;;) {
      let e = (this.re.lastIndex = this.matchPos - this.flat.from),
        t = this.re.exec(this.flat.text)
      if (
        (t &&
          !t[0] &&
          t.index == e &&
          ((this.re.lastIndex = e + 1), (t = this.re.exec(this.flat.text))),
        t)
      ) {
        let i = this.flat.from + t.index,
          s = i + t[0].length
        if (
          (this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) &&
          (!this.test || this.test(i, s, t))
        )
          return (
            (this.value = { from: i, to: s, match: t }),
            (this.matchPos = Ni(this.text, s + (i == s ? 1 : 0))),
            this
          )
      }
      if (this.flat.to == this.to) return (this.done = !0), this
      this.flat = ut.get(
        this.text,
        this.flat.from,
        this.chunkEnd(this.flat.from + this.flat.text.length * 2)
      )
    }
  }
}
typeof Symbol < 'u' &&
  (Ta.prototype[Symbol.iterator] = Oa.prototype[Symbol.iterator] =
    function () {
      return this
    })
function kd(n) {
  try {
    return new RegExp(n, Rs), !0
  } catch {
    return !1
  }
}
function Ni(n, e) {
  if (e >= n.length) return e
  let t = n.lineAt(e),
    i
  for (; e < t.to && (i = t.text.charCodeAt(e - t.from)) >= 56320 && i < 57344; ) e++
  return e
}
function hs(n) {
  let e = R('input', { class: 'cm-textfield', name: 'line' }),
    t = R(
      'form',
      {
        class: 'cm-gotoLine',
        onkeydown: s => {
          s.keyCode == 27
            ? (s.preventDefault(), n.dispatch({ effects: Vi.of(!1) }), n.focus())
            : s.keyCode == 13 && (s.preventDefault(), i())
        },
        onsubmit: s => {
          s.preventDefault(), i()
        }
      },
      R('label', n.state.phrase('Go to line'), ': ', e),
      ' ',
      R('button', { class: 'cm-button', type: 'submit' }, n.state.phrase('go'))
    )
  function i() {
    let s = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value)
    if (!s) return
    let { state: r } = n,
      o = r.doc.lineAt(r.selection.main.head),
      [, l, a, h, c] = s,
      f = h ? +h.slice(1) : 0,
      u = a ? +a : o.number
    if (a && c) {
      let p = u / 100
      l && (p = p * (l == '-' ? -1 : 1) + o.number / r.doc.lines), (u = Math.round(r.doc.lines * p))
    } else a && l && (u = u * (l == '-' ? -1 : 1) + o.number)
    let d = r.doc.line(Math.max(1, Math.min(r.doc.lines, u)))
    n.dispatch({
      effects: Vi.of(!1),
      selection: y.cursor(d.from + Math.max(0, Math.min(f, d.length))),
      scrollIntoView: !0
    }),
      n.focus()
  }
  return { dom: t }
}
const Vi = A.define(),
  _r = U.define({
    create() {
      return !0
    },
    update(n, e) {
      for (let t of e.effects) t.is(Vi) && (n = t.value)
      return n
    },
    provide: n => Kt.from(n, e => (e ? hs : null))
  }),
  Sd = n => {
    let e = $t(n, hs)
    if (!e) {
      let t = [Vi.of(!0)]
      n.state.field(_r, !1) == null && t.push(A.appendConfig.of([_r, Cd])),
        n.dispatch({ effects: t }),
        (e = $t(n, hs))
    }
    return e && e.dom.querySelector('input').focus(), !0
  },
  Cd = S.baseTheme({
    '.cm-panel.cm-gotoLine': { padding: '2px 6px 4px', '& label': { fontSize: '80%' } }
  }),
  Ad = { highlightWordAroundCursor: !1, minSelectionLength: 1, maxMatches: 100, wholeWords: !1 },
  Ba = x.define({
    combine(n) {
      return Ce(n, Ad, {
        highlightWordAroundCursor: (e, t) => e || t,
        minSelectionLength: Math.min,
        maxMatches: Math.min
      })
    }
  })
function um(n) {
  let e = [Bd, Od]
  return n && e.push(Ba.of(n)), e
}
const Md = k.mark({ class: 'cm-selectionMatch' }),
  Dd = k.mark({ class: 'cm-selectionMatch cm-selectionMatch-main' })
function eo(n, e, t, i) {
  return (
    (t == 0 || n(e.sliceDoc(t - 1, t)) != N.Word) &&
    (i == e.doc.length || n(e.sliceDoc(i, i + 1)) != N.Word)
  )
}
function Td(n, e, t, i) {
  return n(e.sliceDoc(t, t + 1)) == N.Word && n(e.sliceDoc(i - 1, i)) == N.Word
}
const Od = W.fromClass(
    class {
      constructor(n) {
        this.decorations = this.getDeco(n)
      }
      update(n) {
        ;(n.selectionSet || n.docChanged || n.viewportChanged) &&
          (this.decorations = this.getDeco(n.view))
      }
      getDeco(n) {
        let e = n.state.facet(Ba),
          { state: t } = n,
          i = t.selection
        if (i.ranges.length > 1) return k.none
        let s = i.main,
          r,
          o = null
        if (s.empty) {
          if (!e.highlightWordAroundCursor) return k.none
          let a = t.wordAt(s.head)
          if (!a) return k.none
          ;(o = t.charCategorizer(s.head)), (r = t.sliceDoc(a.from, a.to))
        } else {
          let a = s.to - s.from
          if (a < e.minSelectionLength || a > 200) return k.none
          if (e.wholeWords) {
            if (
              ((r = t.sliceDoc(s.from, s.to)),
              (o = t.charCategorizer(s.head)),
              !(eo(o, t, s.from, s.to) && Td(o, t, s.from, s.to)))
            )
              return k.none
          } else if (((r = t.sliceDoc(s.from, s.to).trim()), !r)) return k.none
        }
        let l = []
        for (let a of n.visibleRanges) {
          let h = new bt(t.doc, r, a.from, a.to)
          for (; !h.next().done; ) {
            let { from: c, to: f } = h.value
            if (
              (!o || eo(o, t, c, f)) &&
              (s.empty && c <= s.from && f >= s.to
                ? l.push(Dd.range(c, f))
                : (c >= s.to || f <= s.from) && l.push(Md.range(c, f)),
              l.length > e.maxMatches)
            )
              return k.none
          }
        }
        return k.set(l)
      }
    },
    { decorations: n => n.decorations }
  ),
  Bd = S.baseTheme({
    '.cm-selectionMatch': { backgroundColor: '#99ff7780' },
    '.cm-searchMatch .cm-selectionMatch': { backgroundColor: 'transparent' }
  }),
  Ld = ({ state: n, dispatch: e }) => {
    let { selection: t } = n,
      i = y.create(
        t.ranges.map(s => n.wordAt(s.head) || y.cursor(s.head)),
        t.mainIndex
      )
    return i.eq(t) ? !1 : (e(n.update({ selection: i })), !0)
  }
function Rd(n, e) {
  let { main: t, ranges: i } = n.selection,
    s = n.wordAt(t.head),
    r = s && s.from == t.from && s.to == t.to
  for (let o = !1, l = new bt(n.doc, e, i[i.length - 1].to); ; )
    if ((l.next(), l.done)) {
      if (o) return null
      ;(l = new bt(n.doc, e, 0, Math.max(0, i[i.length - 1].from - 1))), (o = !0)
    } else {
      if (o && i.some(a => a.from == l.value.from)) continue
      if (r) {
        let a = n.wordAt(l.value.from)
        if (!a || a.from != l.value.from || a.to != l.value.to) continue
      }
      return l.value
    }
}
const Ed = ({ state: n, dispatch: e }) => {
    let { ranges: t } = n.selection
    if (t.some(r => r.from === r.to)) return Ld({ state: n, dispatch: e })
    let i = n.sliceDoc(t[0].from, t[0].to)
    if (n.selection.ranges.some(r => n.sliceDoc(r.from, r.to) != i)) return !1
    let s = Rd(n, i)
    return s
      ? (e(
          n.update({
            selection: n.selection.addRange(y.range(s.from, s.to), !1),
            effects: S.scrollIntoView(s.to)
          })
        ),
        !0)
      : !1
  },
  Es = x.define({
    combine(n) {
      return Ce(n, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        wholeWord: !1,
        createPanel: e => new Kd(e)
      })
    }
  })
class La {
  constructor(e) {
    ;(this.search = e.search),
      (this.caseSensitive = !!e.caseSensitive),
      (this.literal = !!e.literal),
      (this.regexp = !!e.regexp),
      (this.replace = e.replace || ''),
      (this.valid = !!this.search && (!this.regexp || kd(this.search))),
      (this.unquoted = this.unquote(this.search)),
      (this.wholeWord = !!e.wholeWord)
  }
  unquote(e) {
    return this.literal
      ? e
      : e.replace(/\\([nrt\\])/g, (t, i) =>
          i == 'n'
            ? `
`
            : i == 'r'
            ? '\r'
            : i == 't'
            ? '	'
            : '\\'
        )
  }
  eq(e) {
    return (
      this.search == e.search &&
      this.replace == e.replace &&
      this.caseSensitive == e.caseSensitive &&
      this.regexp == e.regexp &&
      this.wholeWord == e.wholeWord
    )
  }
  create() {
    return this.regexp ? new Vd(this) : new Id(this)
  }
  getCursor(e, t = 0, i) {
    let s = e.doc ? e : O.create({ doc: e })
    return i == null && (i = s.doc.length), this.regexp ? st(this, s, t, i) : nt(this, s, t, i)
  }
}
class Ra {
  constructor(e) {
    this.spec = e
  }
}
function nt(n, e, t, i) {
  return new bt(
    e.doc,
    n.unquoted,
    t,
    i,
    n.caseSensitive ? void 0 : s => s.toLowerCase(),
    n.wholeWord ? Pd(e.doc, e.charCategorizer(e.selection.main.head)) : void 0
  )
}
function Pd(n, e) {
  return (t, i, s, r) => (
    (r > t || r + s.length < i) &&
      ((r = Math.max(0, t - 2)), (s = n.sliceString(r, Math.min(n.length, i + 2)))),
    (e(Fi(s, t - r)) != N.Word || e(Hi(s, t - r)) != N.Word) &&
      (e(Hi(s, i - r)) != N.Word || e(Fi(s, i - r)) != N.Word)
  )
}
class Id extends Ra {
  constructor(e) {
    super(e)
  }
  nextMatch(e, t, i) {
    let s = nt(this.spec, e, i, e.doc.length).nextOverlapping()
    return s.done && (s = nt(this.spec, e, 0, t).nextOverlapping()), s.done ? null : s.value
  }
  prevMatchInRange(e, t, i) {
    for (let s = i; ; ) {
      let r = Math.max(t, s - 1e4 - this.spec.unquoted.length),
        o = nt(this.spec, e, r, s),
        l = null
      for (; !o.nextOverlapping().done; ) l = o.value
      if (l) return l
      if (r == t) return null
      s -= 1e4
    }
  }
  prevMatch(e, t, i) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length)
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace)
  }
  matchAll(e, t) {
    let i = nt(this.spec, e, 0, e.doc.length),
      s = []
    for (; !i.next().done; ) {
      if (s.length >= t) return null
      s.push(i.value)
    }
    return s
  }
  highlight(e, t, i, s) {
    let r = nt(
      this.spec,
      e,
      Math.max(0, t - this.spec.unquoted.length),
      Math.min(i + this.spec.unquoted.length, e.doc.length)
    )
    for (; !r.next().done; ) s(r.value.from, r.value.to)
  }
}
function st(n, e, t, i) {
  return new Ta(
    e.doc,
    n.search,
    {
      ignoreCase: !n.caseSensitive,
      test: n.wholeWord ? Nd(e.charCategorizer(e.selection.main.head)) : void 0
    },
    t,
    i
  )
}
function Fi(n, e) {
  return n.slice(Z(n, e, !1), e)
}
function Hi(n, e) {
  return n.slice(e, Z(n, e))
}
function Nd(n) {
  return (e, t, i) =>
    !i[0].length ||
    ((n(Fi(i.input, i.index)) != N.Word || n(Hi(i.input, i.index)) != N.Word) &&
      (n(Hi(i.input, i.index + i[0].length)) != N.Word ||
        n(Fi(i.input, i.index + i[0].length)) != N.Word))
}
class Vd extends Ra {
  nextMatch(e, t, i) {
    let s = st(this.spec, e, i, e.doc.length).next()
    return s.done && (s = st(this.spec, e, 0, t).next()), s.done ? null : s.value
  }
  prevMatchInRange(e, t, i) {
    for (let s = 1; ; s++) {
      let r = Math.max(t, i - s * 1e4),
        o = st(this.spec, e, r, i),
        l = null
      for (; !o.next().done; ) l = o.value
      if (l && (r == t || l.from > r + 10)) return l
      if (r == t) return null
    }
  }
  prevMatch(e, t, i) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length)
  }
  getReplacement(e) {
    return this.spec.unquote(
      this.spec.replace.replace(/\$([$&\d+])/g, (t, i) =>
        i == '$' ? '$' : i == '&' ? e.match[0] : i != '0' && +i < e.match.length ? e.match[i] : t
      )
    )
  }
  matchAll(e, t) {
    let i = st(this.spec, e, 0, e.doc.length),
      s = []
    for (; !i.next().done; ) {
      if (s.length >= t) return null
      s.push(i.value)
    }
    return s
  }
  highlight(e, t, i, s) {
    let r = st(this.spec, e, Math.max(0, t - 250), Math.min(i + 250, e.doc.length))
    for (; !r.next().done; ) s(r.value.from, r.value.to)
  }
}
const Ut = A.define(),
  Ps = A.define(),
  Ve = U.define({
    create(n) {
      return new Cn(cs(n).create(), null)
    },
    update(n, e) {
      for (let t of e.effects)
        t.is(Ut)
          ? (n = new Cn(t.value.create(), n.panel))
          : t.is(Ps) && (n = new Cn(n.query, t.value ? Is : null))
      return n
    },
    provide: n => Kt.from(n, e => e.panel)
  })
class Cn {
  constructor(e, t) {
    ;(this.query = e), (this.panel = t)
  }
}
const Fd = k.mark({ class: 'cm-searchMatch' }),
  Hd = k.mark({ class: 'cm-searchMatch cm-searchMatch-selected' }),
  Wd = W.fromClass(
    class {
      constructor(n) {
        ;(this.view = n), (this.decorations = this.highlight(n.state.field(Ve)))
      }
      update(n) {
        let e = n.state.field(Ve)
        ;(e != n.startState.field(Ve) || n.docChanged || n.selectionSet || n.viewportChanged) &&
          (this.decorations = this.highlight(e))
      }
      highlight({ query: n, panel: e }) {
        if (!e || !n.spec.valid) return k.none
        let { view: t } = this,
          i = new We()
        for (let s = 0, r = t.visibleRanges, o = r.length; s < o; s++) {
          let { from: l, to: a } = r[s]
          for (; s < o - 1 && a > r[s + 1].from - 2 * 250; ) a = r[++s].to
          n.highlight(t.state, l, a, (h, c) => {
            let f = t.state.selection.ranges.some(u => u.from == h && u.to == c)
            i.add(h, c, f ? Hd : Fd)
          })
        }
        return i.finish()
      }
    },
    { decorations: n => n.decorations }
  )
function Qt(n) {
  return e => {
    let t = e.state.field(Ve, !1)
    return t && t.query.spec.valid ? n(e, t) : Ea(e)
  }
}
const Wi = Qt((n, { query: e }) => {
    let { to: t } = n.state.selection.main,
      i = e.nextMatch(n.state, t, t)
    return i
      ? (n.dispatch({
          selection: { anchor: i.from, head: i.to },
          scrollIntoView: !0,
          effects: Ns(n, i),
          userEvent: 'select.search'
        }),
        !0)
      : !1
  }),
  zi = Qt((n, { query: e }) => {
    let { state: t } = n,
      { from: i } = t.selection.main,
      s = e.prevMatch(t, i, i)
    return s
      ? (n.dispatch({
          selection: { anchor: s.from, head: s.to },
          scrollIntoView: !0,
          effects: Ns(n, s),
          userEvent: 'select.search'
        }),
        !0)
      : !1
  }),
  zd = Qt((n, { query: e }) => {
    let t = e.matchAll(n.state, 1e3)
    return !t || !t.length
      ? !1
      : (n.dispatch({
          selection: y.create(t.map(i => y.range(i.from, i.to))),
          userEvent: 'select.search.matches'
        }),
        !0)
  }),
  qd = ({ state: n, dispatch: e }) => {
    let t = n.selection
    if (t.ranges.length > 1 || t.main.empty) return !1
    let { from: i, to: s } = t.main,
      r = [],
      o = 0
    for (let l = new bt(n.doc, n.sliceDoc(i, s)); !l.next().done; ) {
      if (r.length > 1e3) return !1
      l.value.from == i && (o = r.length), r.push(y.range(l.value.from, l.value.to))
    }
    return e(n.update({ selection: y.create(r, o), userEvent: 'select.search.matches' })), !0
  },
  to = Qt((n, { query: e }) => {
    let { state: t } = n,
      { from: i, to: s } = t.selection.main
    if (t.readOnly) return !1
    let r = e.nextMatch(t, i, i)
    if (!r) return !1
    let o = [],
      l,
      a,
      h = []
    if (
      (r.from == i &&
        r.to == s &&
        ((a = t.toText(e.getReplacement(r))),
        o.push({ from: r.from, to: r.to, insert: a }),
        (r = e.nextMatch(t, r.from, r.to)),
        h.push(S.announce.of(t.phrase('replaced match on line $', t.doc.lineAt(i).number) + '.'))),
      r)
    ) {
      let c = o.length == 0 || o[0].from >= r.to ? 0 : r.to - r.from - a.length
      ;(l = { anchor: r.from - c, head: r.to - c }), h.push(Ns(n, r))
    }
    return (
      n.dispatch({
        changes: o,
        selection: l,
        scrollIntoView: !!l,
        effects: h,
        userEvent: 'input.replace'
      }),
      !0
    )
  }),
  $d = Qt((n, { query: e }) => {
    if (n.state.readOnly) return !1
    let t = e.matchAll(n.state, 1e9).map(s => {
      let { from: r, to: o } = s
      return { from: r, to: o, insert: e.getReplacement(s) }
    })
    if (!t.length) return !1
    let i = n.state.phrase('replaced $ matches', t.length) + '.'
    return n.dispatch({ changes: t, effects: S.announce.of(i), userEvent: 'input.replace.all' }), !0
  })
function Is(n) {
  return n.state.facet(Es).createPanel(n)
}
function cs(n, e) {
  var t, i, s, r
  let o = n.selection.main,
    l = o.empty || o.to > o.from + 100 ? '' : n.sliceDoc(o.from, o.to)
  if (e && !l) return e
  let a = n.facet(Es)
  return new La({
    search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : a.literal)
      ? l
      : l.replace(/\n/g, '\\n'),
    caseSensitive:
      (i = e == null ? void 0 : e.caseSensitive) !== null && i !== void 0 ? i : a.caseSensitive,
    literal: (s = e == null ? void 0 : e.literal) !== null && s !== void 0 ? s : a.literal,
    wholeWord: (r = e == null ? void 0 : e.wholeWord) !== null && r !== void 0 ? r : a.wholeWord
  })
}
const Ea = n => {
    let e = n.state.field(Ve, !1)
    if (e && e.panel) {
      let t = $t(n, Is)
      if (!t) return !1
      let i = t.dom.querySelector('[main-field]')
      if (i && i != n.root.activeElement) {
        let s = cs(n.state, e.query.spec)
        s.valid && n.dispatch({ effects: Ut.of(s) }), i.focus(), i.select()
      }
    } else
      n.dispatch({
        effects: [Ps.of(!0), e ? Ut.of(cs(n.state, e.query.spec)) : A.appendConfig.of(Ud)]
      })
    return !0
  },
  Pa = n => {
    let e = n.state.field(Ve, !1)
    if (!e || !e.panel) return !1
    let t = $t(n, Is)
    return (
      t && t.dom.contains(n.root.activeElement) && n.focus(), n.dispatch({ effects: Ps.of(!1) }), !0
    )
  },
  dm = [
    { key: 'Mod-f', run: Ea, scope: 'editor search-panel' },
    { key: 'F3', run: Wi, shift: zi, scope: 'editor search-panel', preventDefault: !0 },
    { key: 'Mod-g', run: Wi, shift: zi, scope: 'editor search-panel', preventDefault: !0 },
    { key: 'Escape', run: Pa, scope: 'editor search-panel' },
    { key: 'Mod-Shift-l', run: qd },
    { key: 'Alt-g', run: Sd },
    { key: 'Mod-d', run: Ed, preventDefault: !0 }
  ]
class Kd {
  constructor(e) {
    this.view = e
    let t = (this.query = e.state.field(Ve).query.spec)
    ;(this.commit = this.commit.bind(this)),
      (this.searchField = R('input', {
        value: t.search,
        placeholder: se(e, 'Find'),
        'aria-label': se(e, 'Find'),
        class: 'cm-textfield',
        name: 'search',
        form: '',
        'main-field': 'true',
        onchange: this.commit,
        onkeyup: this.commit
      })),
      (this.replaceField = R('input', {
        value: t.replace,
        placeholder: se(e, 'Replace'),
        'aria-label': se(e, 'Replace'),
        class: 'cm-textfield',
        name: 'replace',
        form: '',
        onchange: this.commit,
        onkeyup: this.commit
      })),
      (this.caseField = R('input', {
        type: 'checkbox',
        name: 'case',
        form: '',
        checked: t.caseSensitive,
        onchange: this.commit
      })),
      (this.reField = R('input', {
        type: 'checkbox',
        name: 're',
        form: '',
        checked: t.regexp,
        onchange: this.commit
      })),
      (this.wordField = R('input', {
        type: 'checkbox',
        name: 'word',
        form: '',
        checked: t.wholeWord,
        onchange: this.commit
      }))
    function i(s, r, o) {
      return R('button', { class: 'cm-button', name: s, onclick: r, type: 'button' }, o)
    }
    this.dom = R('div', { onkeydown: s => this.keydown(s), class: 'cm-search' }, [
      this.searchField,
      i('next', () => Wi(e), [se(e, 'next')]),
      i('prev', () => zi(e), [se(e, 'previous')]),
      i('select', () => zd(e), [se(e, 'all')]),
      R('label', null, [this.caseField, se(e, 'match case')]),
      R('label', null, [this.reField, se(e, 'regexp')]),
      R('label', null, [this.wordField, se(e, 'by word')]),
      ...(e.state.readOnly
        ? []
        : [
            R('br'),
            this.replaceField,
            i('replace', () => to(e), [se(e, 'replace')]),
            i('replaceAll', () => $d(e), [se(e, 'replace all')]),
            R(
              'button',
              { name: 'close', onclick: () => Pa(e), 'aria-label': se(e, 'close'), type: 'button' },
              ['\xD7']
            )
          ])
    ])
  }
  commit() {
    let e = new La({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    })
    e.eq(this.query) || ((this.query = e), this.view.dispatch({ effects: Ut.of(e) }))
  }
  keydown(e) {
    zc(this.view, e, 'search-panel')
      ? e.preventDefault()
      : e.keyCode == 13 && e.target == this.searchField
      ? (e.preventDefault(), (e.shiftKey ? zi : Wi)(this.view))
      : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), to(this.view))
  }
  update(e) {
    for (let t of e.transactions)
      for (let i of t.effects) i.is(Ut) && !i.value.eq(this.query) && this.setQuery(i.value)
  }
  setQuery(e) {
    ;(this.query = e),
      (this.searchField.value = e.search),
      (this.replaceField.value = e.replace),
      (this.caseField.checked = e.caseSensitive),
      (this.reField.checked = e.regexp),
      (this.wordField.checked = e.wholeWord)
  }
  mount() {
    this.searchField.select()
  }
  get pos() {
    return 80
  }
  get top() {
    return this.view.state.facet(Es).top
  }
}
function se(n, e) {
  return n.state.phrase(e)
}
const fi = 30,
  ui = /[\s\.,:;?!]/
function Ns(n, { from: e, to: t }) {
  let i = n.state.doc.lineAt(e),
    s = n.state.doc.lineAt(t).to,
    r = Math.max(i.from, e - fi),
    o = Math.min(s, t + fi),
    l = n.state.sliceDoc(r, o)
  if (r != i.from) {
    for (let a = 0; a < fi; a++)
      if (!ui.test(l[a + 1]) && ui.test(l[a])) {
        l = l.slice(a)
        break
      }
  }
  if (o != s) {
    for (let a = l.length - 1; a > l.length - fi; a--)
      if (!ui.test(l[a - 1]) && ui.test(l[a])) {
        l = l.slice(0, a)
        break
      }
  }
  return S.announce.of(
    `${n.state.phrase('current match')}. ${l} ${n.state.phrase('on line')} ${i.number}.`
  )
}
const jd = S.baseTheme({
    '.cm-panel.cm-search': {
      padding: '2px 6px 4px',
      position: 'relative',
      '& [name=close]': {
        position: 'absolute',
        top: '0',
        right: '4px',
        backgroundColor: 'inherit',
        border: 'none',
        font: 'inherit',
        padding: 0,
        margin: 0
      },
      '& input, & button, & label': { margin: '.2em .6em .2em 0' },
      '& input[type=checkbox]': { marginRight: '.2em' },
      '& label': { fontSize: '80%', whiteSpace: 'pre' }
    },
    '&light .cm-searchMatch': { backgroundColor: '#ffff0054' },
    '&dark .cm-searchMatch': { backgroundColor: '#00ffff8a' },
    '&light .cm-searchMatch-selected': { backgroundColor: '#ff6a0054' },
    '&dark .cm-searchMatch-selected': { backgroundColor: '#ff00ff8a' }
  }),
  Ud = [Ve, xt.lowest(Wd), jd]
class Ia {
  constructor(e, t, i) {
    ;(this.state = e), (this.pos = t), (this.explicit = i), (this.abortListeners = [])
  }
  tokenBefore(e) {
    let t = Y(this.state).resolveInner(this.pos, -1)
    for (; t && e.indexOf(t.name) < 0; ) t = t.parent
    return t
      ? { from: t.from, to: this.pos, text: this.state.sliceDoc(t.from, this.pos), type: t.type }
      : null
  }
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos),
      i = Math.max(t.from, this.pos - 250),
      s = t.text.slice(i - t.from, this.pos - t.from),
      r = s.search(Na(e, !1))
    return r < 0 ? null : { from: i + r, to: this.pos, text: s.slice(r) }
  }
  get aborted() {
    return this.abortListeners == null
  }
  addEventListener(e, t) {
    e == 'abort' && this.abortListeners && this.abortListeners.push(t)
  }
}
function io(n) {
  let e = Object.keys(n).join(''),
    t = /\w/.test(e)
  return t && (e = e.replace(/\w/g, '')), `[${t ? '\\w' : ''}${e.replace(/[^\w\s]/g, '\\$&')}]`
}
function Gd(n) {
  let e = Object.create(null),
    t = Object.create(null)
  for (let { label: s } of n) {
    e[s[0]] = !0
    for (let r = 1; r < s.length; r++) t[s[r]] = !0
  }
  let i = io(e) + io(t) + '*$'
  return [new RegExp('^' + i), new RegExp(i)]
}
function Jd(n) {
  let e = n.map(s => (typeof s == 'string' ? { label: s } : s)),
    [t, i] = e.every(s => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : Gd(e)
  return s => {
    let r = s.matchBefore(i)
    return r || s.explicit ? { from: r ? r.from : s.pos, options: e, validFor: t } : null
  }
}
class no {
  constructor(e, t, i) {
    ;(this.completion = e), (this.source = t), (this.match = i)
  }
}
function Fe(n) {
  return n.selection.main.head
}
function Na(n, e) {
  var t
  let { source: i } = n,
    s = e && i[0] != '^',
    r = i[i.length - 1] != '$'
  return !s && !r
    ? n
    : new RegExp(
        `${s ? '^' : ''}(?:${i})${r ? '$' : ''}`,
        (t = n.flags) !== null && t !== void 0 ? t : n.ignoreCase ? 'i' : ''
      )
}
function Yd(n, e, t, i) {
  return Object.assign(
    Object.assign(
      {},
      n.changeByRange(s => {
        if (s == n.selection.main)
          return { changes: { from: t, to: i, insert: e }, range: y.cursor(t + e.length) }
        let r = i - t
        return !s.empty || (r && n.sliceDoc(s.from - r, s.from) != n.sliceDoc(t, i))
          ? { range: s }
          : {
              changes: { from: s.from - r, to: s.from, insert: e },
              range: y.cursor(s.from - r + e.length)
            }
      })
    ),
    { userEvent: 'input.complete' }
  )
}
function Va(n, e) {
  const t = e.completion.apply || e.completion.label
  let i = e.source
  typeof t == 'string' ? n.dispatch(Yd(n.state, t, i.from, i.to)) : t(n, e.completion, i.from, i.to)
}
const so = new WeakMap()
function Xd(n) {
  if (!Array.isArray(n)) return n
  let e = so.get(n)
  return e || so.set(n, (e = Jd(n))), e
}
class Qd {
  constructor(e) {
    ;(this.pattern = e),
      (this.chars = []),
      (this.folded = []),
      (this.any = []),
      (this.precise = []),
      (this.byWord = [])
    for (let t = 0; t < e.length; ) {
      let i = j(e, t),
        s = oe(i)
      this.chars.push(i)
      let r = e.slice(t, t + s),
        o = r.toUpperCase()
      this.folded.push(j(o == r ? r.toLowerCase() : o, 0)), (t += s)
    }
    this.astral = e.length != this.chars.length
  }
  match(e) {
    if (this.pattern.length == 0) return [0]
    if (e.length < this.pattern.length) return null
    let { chars: t, folded: i, any: s, precise: r, byWord: o } = this
    if (t.length == 1) {
      let v = j(e, 0)
      return v == t[0] ? [0, 0, oe(v)] : v == i[0] ? [-200, 0, oe(v)] : null
    }
    let l = e.indexOf(this.pattern)
    if (l == 0) return [0, 0, this.pattern.length]
    let a = t.length,
      h = 0
    if (l < 0) {
      for (let v = 0, C = Math.min(e.length, 200); v < C && h < a; ) {
        let M = j(e, v)
        ;(M == t[h] || M == i[h]) && (s[h++] = v), (v += oe(M))
      }
      if (h < a) return null
    }
    let c = 0,
      f = 0,
      u = !1,
      d = 0,
      p = -1,
      g = -1,
      m = /[a-z]/.test(e),
      b = !0
    for (let v = 0, C = Math.min(e.length, 200), M = 0; v < C && f < a; ) {
      let T = j(e, v)
      l < 0 &&
        (c < a && T == t[c] && (r[c++] = v),
        d < a && (T == t[d] || T == i[d] ? (d == 0 && (p = v), (g = v + 1), d++) : (d = 0)))
      let ne,
        ce =
          T < 255
            ? (T >= 48 && T <= 57) || (T >= 97 && T <= 122)
              ? 2
              : T >= 65 && T <= 90
              ? 1
              : 0
            : (ne = ds(T)) != ne.toLowerCase()
            ? 1
            : ne != ne.toUpperCase()
            ? 2
            : 0
      ;(!v || (ce == 1 && m) || (M == 0 && ce != 0)) &&
        (t[f] == T || (i[f] == T && (u = !0)) ? (o[f++] = v) : o.length && (b = !1)),
        (M = ce),
        (v += oe(T))
    }
    return f == a && o[0] == 0 && b
      ? this.result(-100 + (u ? -200 : 0), o, e)
      : d == a && p == 0
      ? [-200 - e.length, 0, g]
      : l > -1
      ? [-700 - e.length, l, l + this.pattern.length]
      : d == a
      ? [-200 + -700 - e.length, p, g]
      : f == a
      ? this.result(-100 + (u ? -200 : 0) + -700 + (b ? 0 : -1100), o, e)
      : t.length == 2
      ? null
      : this.result((s[0] ? -700 : 0) + -200 + -1100, s, e)
  }
  result(e, t, i) {
    let s = [e - i.length],
      r = 1
    for (let o of t) {
      let l = o + (this.astral ? oe(j(i, o)) : 1)
      r > 1 && s[r - 1] == o ? (s[r - 1] = l) : ((s[r++] = o), (s[r++] = l))
    }
    return s
  }
}
const pe = x.define({
  combine(n) {
    return Ce(
      n,
      {
        activateOnTyping: !0,
        selectOnOpen: !0,
        override: null,
        closeOnBlur: !0,
        maxRenderedOptions: 100,
        defaultKeymap: !0,
        optionClass: () => '',
        aboveCursor: !1,
        icons: !0,
        addToOptions: [],
        compareCompletions: (e, t) => e.label.localeCompare(t.label),
        interactionDelay: 75
      },
      {
        defaultKeymap: (e, t) => e && t,
        closeOnBlur: (e, t) => e && t,
        icons: (e, t) => e && t,
        optionClass: (e, t) => i => Zd(e(i), t(i)),
        addToOptions: (e, t) => e.concat(t)
      }
    )
  }
})
function Zd(n, e) {
  return n ? (e ? n + ' ' + e : n) : e
}
function _d(n) {
  let e = n.addToOptions.slice()
  return (
    n.icons &&
      e.push({
        render(t) {
          let i = document.createElement('div')
          return (
            i.classList.add('cm-completionIcon'),
            t.type && i.classList.add(...t.type.split(/\s+/g).map(s => 'cm-completionIcon-' + s)),
            i.setAttribute('aria-hidden', 'true'),
            i
          )
        },
        position: 20
      }),
    e.push(
      {
        render(t, i, s) {
          let r = document.createElement('span')
          r.className = 'cm-completionLabel'
          let { label: o } = t,
            l = 0
          for (let a = 1; a < s.length; ) {
            let h = s[a++],
              c = s[a++]
            h > l && r.appendChild(document.createTextNode(o.slice(l, h)))
            let f = r.appendChild(document.createElement('span'))
            f.appendChild(document.createTextNode(o.slice(h, c))),
              (f.className = 'cm-completionMatchedText'),
              (l = c)
          }
          return l < o.length && r.appendChild(document.createTextNode(o.slice(l))), r
        },
        position: 50
      },
      {
        render(t) {
          if (!t.detail) return null
          let i = document.createElement('span')
          return (i.className = 'cm-completionDetail'), (i.textContent = t.detail), i
        },
        position: 80
      }
    ),
    e.sort((t, i) => t.position - i.position).map(t => t.render)
  )
}
function ro(n, e, t) {
  if (n <= t) return { from: 0, to: n }
  if ((e < 0 && (e = 0), e <= n >> 1)) {
    let s = Math.floor(e / t)
    return { from: s * t, to: (s + 1) * t }
  }
  let i = Math.floor((n - e) / t)
  return { from: n - (i + 1) * t, to: n - i * t }
}
class ep {
  constructor(e, t) {
    ;(this.view = e),
      (this.stateField = t),
      (this.info = null),
      (this.placeInfo = {
        read: () => this.measureInfo(),
        write: l => this.positionInfo(l),
        key: this
      })
    let i = e.state.field(t),
      { options: s, selected: r } = i.open,
      o = e.state.facet(pe)
    ;(this.optionContent = _d(o)),
      (this.optionClass = o.optionClass),
      (this.range = ro(s.length, r, o.maxRenderedOptions)),
      (this.dom = document.createElement('div')),
      (this.dom.className = 'cm-tooltip-autocomplete'),
      this.dom.addEventListener('mousedown', l => {
        for (let a = l.target, h; a && a != this.dom; a = a.parentNode)
          if (a.nodeName == 'LI' && (h = /-(\d+)$/.exec(a.id)) && +h[1] < s.length) {
            Va(e, s[+h[1]]), l.preventDefault()
            return
          }
      }),
      (this.list = this.dom.appendChild(this.createListBox(s, i.id, this.range))),
      this.list.addEventListener('scroll', () => {
        this.info && this.view.requestMeasure(this.placeInfo)
      })
  }
  mount() {
    this.updateSel()
  }
  update(e) {
    e.state.field(this.stateField) != e.startState.field(this.stateField) && this.updateSel()
  }
  positioned() {
    this.info && this.view.requestMeasure(this.placeInfo)
  }
  updateSel() {
    let e = this.view.state.field(this.stateField),
      t = e.open
    if (
      (((t.selected > -1 && t.selected < this.range.from) || t.selected >= this.range.to) &&
        ((this.range = ro(
          t.options.length,
          t.selected,
          this.view.state.facet(pe).maxRenderedOptions
        )),
        this.list.remove(),
        (this.list = this.dom.appendChild(this.createListBox(t.options, e.id, this.range))),
        this.list.addEventListener('scroll', () => {
          this.info && this.view.requestMeasure(this.placeInfo)
        })),
      this.updateSelectedOption(t.selected))
    ) {
      this.info && (this.info.remove(), (this.info = null))
      let { completion: i } = t.options[t.selected],
        { info: s } = i
      if (!s) return
      let r = typeof s == 'string' ? document.createTextNode(s) : s(i)
      if (!r) return
      'then' in r
        ? r
            .then(o => {
              o && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(o)
            })
            .catch(o => he(this.view.state, o, 'completion info'))
        : this.addInfoPane(r)
    }
  }
  addInfoPane(e) {
    let t = (this.info = document.createElement('div'))
    ;(t.className = 'cm-tooltip cm-completionInfo'),
      t.appendChild(e),
      this.dom.appendChild(t),
      this.view.requestMeasure(this.placeInfo)
  }
  updateSelectedOption(e) {
    let t = null
    for (let i = this.list.firstChild, s = this.range.from; i; i = i.nextSibling, s++)
      s == e
        ? i.hasAttribute('aria-selected') || (i.setAttribute('aria-selected', 'true'), (t = i))
        : i.hasAttribute('aria-selected') && i.removeAttribute('aria-selected')
    return t && ip(this.list, t), t
  }
  measureInfo() {
    let e = this.dom.querySelector('[aria-selected]')
    if (!e || !this.info) return null
    let t = this.dom.ownerDocument.defaultView || window,
      i = this.dom.getBoundingClientRect(),
      s = this.info.getBoundingClientRect(),
      r = e.getBoundingClientRect()
    if (r.top > Math.min(t.innerHeight, i.bottom) - 10 || r.bottom < Math.max(0, i.top) + 10)
      return null
    let o = this.view.textDirection == F.RTL,
      l = o,
      a = !1,
      h,
      c = '',
      f = '',
      u = i.left,
      d = t.innerWidth - i.right
    if (
      (l && u < Math.min(s.width, d) ? (l = !1) : !l && d < Math.min(s.width, u) && (l = !0),
      s.width <= (l ? u : d))
    )
      (c = Math.max(0, Math.min(r.top, t.innerHeight - s.height)) - i.top + 'px'),
        (h = Math.min(400, l ? u : d) + 'px')
    else {
      ;(a = !0), (h = Math.min(400, (o ? i.right : t.innerWidth - i.left) - 30) + 'px')
      let p = t.innerHeight - i.bottom
      p >= s.height || p > i.top ? (c = r.bottom - i.top + 'px') : (f = i.bottom - r.top + 'px')
    }
    return {
      top: c,
      bottom: f,
      maxWidth: h,
      class: a ? (o ? 'left-narrow' : 'right-narrow') : l ? 'left' : 'right'
    }
  }
  positionInfo(e) {
    this.info &&
      (e
        ? ((this.info.style.top = e.top),
          (this.info.style.bottom = e.bottom),
          (this.info.style.maxWidth = e.maxWidth),
          (this.info.className = 'cm-tooltip cm-completionInfo cm-completionInfo-' + e.class))
        : (this.info.style.top = '-1e6px'))
  }
  createListBox(e, t, i) {
    const s = document.createElement('ul')
    ;(s.id = t),
      s.setAttribute('role', 'listbox'),
      s.setAttribute('aria-expanded', 'true'),
      s.setAttribute('aria-label', this.view.state.phrase('Completions'))
    for (let r = i.from; r < i.to; r++) {
      let { completion: o, match: l } = e[r]
      const a = s.appendChild(document.createElement('li'))
      ;(a.id = t + '-' + r), a.setAttribute('role', 'option')
      let h = this.optionClass(o)
      h && (a.className = h)
      for (let c of this.optionContent) {
        let f = c(o, this.view.state, l)
        f && a.appendChild(f)
      }
    }
    return (
      i.from && s.classList.add('cm-completionListIncompleteTop'),
      i.to < e.length && s.classList.add('cm-completionListIncompleteBottom'),
      s
    )
  }
}
function tp(n) {
  return e => new ep(e, n)
}
function ip(n, e) {
  let t = n.getBoundingClientRect(),
    i = e.getBoundingClientRect()
  i.top < t.top
    ? (n.scrollTop -= t.top - i.top)
    : i.bottom > t.bottom && (n.scrollTop += i.bottom - t.bottom)
}
function oo(n) {
  return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0)
}
function np(n, e) {
  let t = [],
    i = 0
  for (let l of n)
    if (l.hasResult())
      if (l.result.filter === !1) {
        let a = l.result.getMatch
        for (let h of l.result.options) {
          let c = [1e9 - i++]
          if (a) for (let f of a(h)) c.push(f)
          t.push(new no(h, l, c))
        }
      } else {
        let a = new Qd(e.sliceDoc(l.from, l.to)),
          h
        for (let c of l.result.options)
          (h = a.match(c.label)) && (c.boost != null && (h[0] += c.boost), t.push(new no(c, l, h)))
      }
  let s = [],
    r = null,
    o = e.facet(pe).compareCompletions
  for (let l of t.sort((a, h) => h.match[0] - a.match[0] || o(a.completion, h.completion)))
    !r ||
    r.label != l.completion.label ||
    r.detail != l.completion.detail ||
    (r.type != null && l.completion.type != null && r.type != l.completion.type) ||
    r.apply != l.completion.apply
      ? s.push(l)
      : oo(l.completion) > oo(r) && (s[s.length - 1] = l),
      (r = l.completion)
  return s
}
class It {
  constructor(e, t, i, s, r) {
    ;(this.options = e),
      (this.attrs = t),
      (this.tooltip = i),
      (this.timestamp = s),
      (this.selected = r)
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length
      ? this
      : new It(this.options, lo(t, e), this.tooltip, this.timestamp, e)
  }
  static build(e, t, i, s, r) {
    let o = np(e, t)
    if (!o.length) return null
    let l = t.facet(pe).selectOnOpen ? 0 : -1
    if (s && s.selected != l && s.selected != -1) {
      let a = s.options[s.selected].completion
      for (let h = 0; h < o.length; h++)
        if (o[h].completion == a) {
          l = h
          break
        }
    }
    return new It(
      o,
      lo(i, l),
      {
        pos: e.reduce((a, h) => (h.hasResult() ? Math.min(a, h.from) : a), 1e8),
        create: tp(fe),
        above: r.aboveCursor
      },
      s ? s.timestamp : Date.now(),
      l
    )
  }
  map(e) {
    return new It(
      this.options,
      this.attrs,
      Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }),
      this.timestamp,
      this.selected
    )
  }
}
class qi {
  constructor(e, t, i) {
    ;(this.active = e), (this.id = t), (this.open = i)
  }
  static start() {
    return new qi(op, 'cm-ac-' + Math.floor(Math.random() * 2e6).toString(36), null)
  }
  update(e) {
    let { state: t } = e,
      i = t.facet(pe),
      r = (i.override || t.languageDataAt('autocomplete', Fe(t)).map(Xd)).map(l =>
        (
          this.active.find(h => h.source == l) ||
          new ee(l, this.active.some(h => h.state != 0) ? 1 : 0)
        ).update(e, i)
      )
    r.length == this.active.length && r.every((l, a) => l == this.active[a]) && (r = this.active)
    let o =
      e.selection ||
      r.some(l => l.hasResult() && e.changes.touchesRange(l.from, l.to)) ||
      !sp(r, this.active)
        ? It.build(r, t, this.id, this.open, i)
        : this.open && e.docChanged
        ? this.open.map(e.changes)
        : this.open
    !o &&
      r.every(l => l.state != 1) &&
      r.some(l => l.hasResult()) &&
      (r = r.map(l => (l.hasResult() ? new ee(l.source, 0) : l)))
    for (let l of e.effects) l.is(Ha) && (o = o && o.setSelected(l.value, this.id))
    return r == this.active && o == this.open ? this : new qi(r, this.id, o)
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null
  }
  get attrs() {
    return this.open ? this.open.attrs : rp
  }
}
function sp(n, e) {
  if (n == e) return !0
  for (let t = 0, i = 0; ; ) {
    for (; t < n.length && !n[t].hasResult; ) t++
    for (; i < e.length && !e[i].hasResult; ) i++
    let s = t == n.length,
      r = i == e.length
    if (s || r) return s == r
    if (n[t++].result != e[i++].result) return !1
  }
}
const rp = { 'aria-autocomplete': 'list' }
function lo(n, e) {
  let t = { 'aria-autocomplete': 'list', 'aria-haspopup': 'listbox', 'aria-controls': n }
  return e > -1 && (t['aria-activedescendant'] = n + '-' + e), t
}
const op = []
function fs(n) {
  return n.isUserEvent('input.type') ? 'input' : n.isUserEvent('delete.backward') ? 'delete' : null
}
class ee {
  constructor(e, t, i = -1) {
    ;(this.source = e), (this.state = t), (this.explicitPos = i)
  }
  hasResult() {
    return !1
  }
  update(e, t) {
    let i = fs(e),
      s = this
    i
      ? (s = s.handleUserEvent(e, i, t))
      : e.docChanged
      ? (s = s.handleChange(e))
      : e.selection && s.state != 0 && (s = new ee(s.source, 0))
    for (let r of e.effects)
      if (r.is(Vs)) s = new ee(s.source, 1, r.value ? Fe(e.state) : -1)
      else if (r.is($i)) s = new ee(s.source, 0)
      else if (r.is(Fa)) for (let o of r.value) o.source == s.source && (s = o)
    return s
  }
  handleUserEvent(e, t, i) {
    return t == 'delete' || !i.activateOnTyping ? this.map(e.changes) : new ee(this.source, 1)
  }
  handleChange(e) {
    return e.changes.touchesRange(Fe(e.startState)) ? new ee(this.source, 0) : this.map(e.changes)
  }
  map(e) {
    return e.empty || this.explicitPos < 0
      ? this
      : new ee(this.source, this.state, e.mapPos(this.explicitPos))
  }
}
class Nt extends ee {
  constructor(e, t, i, s, r) {
    super(e, 2, t), (this.result = i), (this.from = s), (this.to = r)
  }
  hasResult() {
    return !0
  }
  handleUserEvent(e, t, i) {
    var s
    let r = e.changes.mapPos(this.from),
      o = e.changes.mapPos(this.to, 1),
      l = Fe(e.state)
    if (
      (this.explicitPos < 0 ? l <= r : l < this.from) ||
      l > o ||
      (t == 'delete' && Fe(e.startState) == this.from)
    )
      return new ee(this.source, t == 'input' && i.activateOnTyping ? 1 : 0)
    let a = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos),
      h
    return lp(this.result.validFor, e.state, r, o)
      ? new Nt(this.source, a, this.result, r, o)
      : this.result.update &&
        (h = this.result.update(this.result, r, o, new Ia(e.state, l, a >= 0)))
      ? new Nt(this.source, a, h, h.from, (s = h.to) !== null && s !== void 0 ? s : Fe(e.state))
      : new ee(this.source, 1, a)
  }
  handleChange(e) {
    return e.changes.touchesRange(this.from, this.to) ? new ee(this.source, 0) : this.map(e.changes)
  }
  map(e) {
    return e.empty
      ? this
      : new Nt(
          this.source,
          this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos),
          this.result,
          e.mapPos(this.from),
          e.mapPos(this.to, 1)
        )
  }
}
function lp(n, e, t, i) {
  if (!n) return !1
  let s = e.sliceDoc(t, i)
  return typeof n == 'function' ? n(s, t, i, e) : Na(n, !0).test(s)
}
const Vs = A.define(),
  $i = A.define(),
  Fa = A.define({
    map(n, e) {
      return n.map(t => t.map(e))
    }
  }),
  Ha = A.define(),
  fe = U.define({
    create() {
      return qi.start()
    },
    update(n, e) {
      return n.update(e)
    },
    provide: n => [ks.from(n, e => e.tooltip), S.contentAttributes.from(n, e => e.attrs)]
  })
function di(n, e = 'option') {
  return t => {
    let i = t.state.field(fe, !1)
    if (!i || !i.open || Date.now() - i.open.timestamp < t.state.facet(pe).interactionDelay)
      return !1
    let s = 1,
      r
    e == 'page' &&
      (r = kf(t, i.open.tooltip)) &&
      (s = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector('li').offsetHeight) - 1))
    let { length: o } = i.open.options,
      l = i.open.selected > -1 ? i.open.selected + s * (n ? 1 : -1) : n ? 0 : o - 1
    return (
      l < 0 ? (l = e == 'page' ? 0 : o - 1) : l >= o && (l = e == 'page' ? o - 1 : 0),
      t.dispatch({ effects: Ha.of(l) }),
      !0
    )
  }
}
const ap = n => {
    let e = n.state.field(fe, !1)
    return n.state.readOnly ||
      !e ||
      !e.open ||
      e.open.selected < 0 ||
      Date.now() - e.open.timestamp < n.state.facet(pe).interactionDelay
      ? !1
      : (Va(n, e.open.options[e.open.selected]), !0)
  },
  hp = n => (n.state.field(fe, !1) ? (n.dispatch({ effects: Vs.of(!0) }), !0) : !1),
  cp = n => {
    let e = n.state.field(fe, !1)
    return !e || !e.active.some(t => t.state != 0) ? !1 : (n.dispatch({ effects: $i.of(null) }), !0)
  }
class fp {
  constructor(e, t) {
    ;(this.active = e),
      (this.context = t),
      (this.time = Date.now()),
      (this.updates = []),
      (this.done = void 0)
  }
}
const ao = 50,
  up = 50,
  dp = 1e3,
  pp = W.fromClass(
    class {
      constructor(n) {
        ;(this.view = n),
          (this.debounceUpdate = -1),
          (this.running = []),
          (this.debounceAccept = -1),
          (this.composing = 0)
        for (let e of n.state.field(fe).active) e.state == 1 && this.startQuery(e)
      }
      update(n) {
        let e = n.state.field(fe)
        if (!n.selectionSet && !n.docChanged && n.startState.field(fe) == e) return
        let t = n.transactions.some(i => (i.selection || i.docChanged) && !fs(i))
        for (let i = 0; i < this.running.length; i++) {
          let s = this.running[i]
          if (t || (s.updates.length + n.transactions.length > up && Date.now() - s.time > dp)) {
            for (let r of s.context.abortListeners)
              try {
                r()
              } catch (o) {
                he(this.view.state, o)
              }
            ;(s.context.abortListeners = null), this.running.splice(i--, 1)
          } else s.updates.push(...n.transactions)
        }
        if (
          (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate),
          (this.debounceUpdate = e.active.some(
            i => i.state == 1 && !this.running.some(s => s.active.source == i.source)
          )
            ? setTimeout(() => this.startUpdate(), ao)
            : -1),
          this.composing != 0)
        )
          for (let i of n.transactions)
            fs(i) == 'input'
              ? (this.composing = 2)
              : this.composing == 2 && i.selection && (this.composing = 3)
      }
      startUpdate() {
        this.debounceUpdate = -1
        let { state: n } = this.view,
          e = n.field(fe)
        for (let t of e.active)
          t.state == 1 && !this.running.some(i => i.active.source == t.source) && this.startQuery(t)
      }
      startQuery(n) {
        let { state: e } = this.view,
          t = Fe(e),
          i = new Ia(e, t, n.explicitPos == t),
          s = new fp(n, i)
        this.running.push(s),
          Promise.resolve(n.source(i)).then(
            r => {
              s.context.aborted || ((s.done = r || null), this.scheduleAccept())
            },
            r => {
              this.view.dispatch({ effects: $i.of(null) }), he(this.view.state, r)
            }
          )
      }
      scheduleAccept() {
        this.running.every(n => n.done !== void 0)
          ? this.accept()
          : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), ao))
      }
      accept() {
        var n
        this.debounceAccept > -1 && clearTimeout(this.debounceAccept), (this.debounceAccept = -1)
        let e = [],
          t = this.view.state.facet(pe)
        for (let i = 0; i < this.running.length; i++) {
          let s = this.running[i]
          if (s.done === void 0) continue
          if ((this.running.splice(i--, 1), s.done)) {
            let o = new Nt(
              s.active.source,
              s.active.explicitPos,
              s.done,
              s.done.from,
              (n = s.done.to) !== null && n !== void 0
                ? n
                : Fe(s.updates.length ? s.updates[0].startState : this.view.state)
            )
            for (let l of s.updates) o = o.update(l, t)
            if (o.hasResult()) {
              e.push(o)
              continue
            }
          }
          let r = this.view.state.field(fe).active.find(o => o.source == s.active.source)
          if (r && r.state == 1)
            if (s.done == null) {
              let o = new ee(s.active.source, 0)
              for (let l of s.updates) o = o.update(l, t)
              o.state != 1 && e.push(o)
            } else this.startQuery(r)
        }
        e.length && this.view.dispatch({ effects: Fa.of(e) })
      }
    },
    {
      eventHandlers: {
        blur() {
          let n = this.view.state.field(fe, !1)
          n &&
            n.tooltip &&
            this.view.state.facet(pe).closeOnBlur &&
            this.view.dispatch({ effects: $i.of(null) })
        },
        compositionstart() {
          this.composing = 1
        },
        compositionend() {
          this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Vs.of(!1) }), 20),
            (this.composing = 0)
        }
      }
    }
  ),
  mp = S.baseTheme({
    '.cm-tooltip.cm-tooltip-autocomplete': {
      '& > ul': {
        fontFamily: 'monospace',
        whiteSpace: 'nowrap',
        overflow: 'hidden auto',
        maxWidth_fallback: '700px',
        maxWidth: 'min(700px, 95vw)',
        minWidth: '250px',
        maxHeight: '10em',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        '& > li': {
          overflowX: 'hidden',
          textOverflow: 'ellipsis',
          cursor: 'pointer',
          padding: '1px 3px',
          lineHeight: 1.2
        }
      }
    },
    '&light .cm-tooltip-autocomplete ul li[aria-selected]': { background: '#17c', color: 'white' },
    '&dark .cm-tooltip-autocomplete ul li[aria-selected]': { background: '#347', color: 'white' },
    '.cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after': {
      content: '"\xB7\xB7\xB7"',
      opacity: 0.5,
      display: 'block',
      textAlign: 'center'
    },
    '.cm-tooltip.cm-completionInfo': {
      position: 'absolute',
      padding: '3px 9px',
      width: 'max-content',
      maxWidth: `${400}px`,
      boxSizing: 'border-box'
    },
    '.cm-completionInfo.cm-completionInfo-left': { right: '100%' },
    '.cm-completionInfo.cm-completionInfo-right': { left: '100%' },
    '.cm-completionInfo.cm-completionInfo-left-narrow': { right: `${30}px` },
    '.cm-completionInfo.cm-completionInfo-right-narrow': { left: `${30}px` },
    '&light .cm-snippetField': { backgroundColor: '#00000022' },
    '&dark .cm-snippetField': { backgroundColor: '#ffffff22' },
    '.cm-snippetFieldPosition': {
      verticalAlign: 'text-top',
      width: 0,
      height: '1.15em',
      display: 'inline-block',
      margin: '0 -0.7px -.7em',
      borderLeft: '1.4px dotted #888'
    },
    '.cm-completionMatchedText': { textDecoration: 'underline' },
    '.cm-completionDetail': { marginLeft: '0.5em', fontStyle: 'italic' },
    '.cm-completionIcon': {
      fontSize: '90%',
      width: '.8em',
      display: 'inline-block',
      textAlign: 'center',
      paddingRight: '.6em',
      opacity: '0.6'
    },
    '.cm-completionIcon-function, .cm-completionIcon-method': {
      '&:after': { content: "'\u0192'" }
    },
    '.cm-completionIcon-class': { '&:after': { content: "'\u25CB'" } },
    '.cm-completionIcon-interface': { '&:after': { content: "'\u25CC'" } },
    '.cm-completionIcon-variable': { '&:after': { content: "'\u{1D465}'" } },
    '.cm-completionIcon-constant': { '&:after': { content: "'\u{1D436}'" } },
    '.cm-completionIcon-type': { '&:after': { content: "'\u{1D461}'" } },
    '.cm-completionIcon-enum': { '&:after': { content: "'\u222A'" } },
    '.cm-completionIcon-property': { '&:after': { content: "'\u25A1'" } },
    '.cm-completionIcon-keyword': { '&:after': { content: "'\u{1F511}\uFE0E'" } },
    '.cm-completionIcon-namespace': { '&:after': { content: "'\u25A2'" } },
    '.cm-completionIcon-text': {
      '&:after': { content: "'abc'", fontSize: '50%', verticalAlign: 'middle' }
    }
  }),
  Gt = { brackets: ['(', '[', '{', "'", '"'], before: ')]}:;>', stringPrefixes: [] },
  Ye = A.define({
    map(n, e) {
      let t = e.mapPos(n, -1, Q.TrackAfter)
      return t == null ? void 0 : t
    }
  }),
  Fs = A.define({
    map(n, e) {
      return e.mapPos(n)
    }
  }),
  Hs = new (class extends Qe {})()
Hs.startSide = 1
Hs.endSide = -1
const Wa = U.define({
  create() {
    return L.empty
  },
  update(n, e) {
    if (e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head).from,
        i = e.startState.doc.lineAt(e.startState.selection.main.head).from
      t != e.changes.mapPos(i, -1) && (n = L.empty)
    }
    n = n.map(e.changes)
    for (let t of e.effects)
      t.is(Ye)
        ? (n = n.update({ add: [Hs.range(t.value, t.value + 1)] }))
        : t.is(Fs) && (n = n.update({ filter: i => i != t.value }))
    return n
  }
})
function pm() {
  return [yp, Wa]
}
const An = '()[]{}<>'
function za(n) {
  for (let e = 0; e < An.length; e += 2) if (An.charCodeAt(e) == n) return An.charAt(e + 1)
  return ds(n < 128 ? n : n + 1)
}
function qa(n, e) {
  return n.languageDataAt('closeBrackets', e)[0] || Gt
}
const gp = typeof navigator == 'object' && /Android\b/.test(navigator.userAgent),
  yp = S.inputHandler.of((n, e, t, i) => {
    if ((gp ? n.composing : n.compositionStarted) || n.state.readOnly) return !1
    let s = n.state.selection.main
    if (i.length > 2 || (i.length == 2 && oe(j(i, 0)) == 1) || e != s.from || t != s.to) return !1
    let r = wp(n.state, i)
    return r ? (n.dispatch(r), !0) : !1
  }),
  bp = ({ state: n, dispatch: e }) => {
    if (n.readOnly) return !1
    let i = qa(n, n.selection.main.head).brackets || Gt.brackets,
      s = null,
      r = n.changeByRange(o => {
        if (o.empty) {
          let l = xp(n.doc, o.head)
          for (let a of i)
            if (a == l && nn(n.doc, o.head) == za(j(a, 0)))
              return {
                changes: { from: o.head - a.length, to: o.head + a.length },
                range: y.cursor(o.head - a.length)
              }
        }
        return { range: (s = o) }
      })
    return s || e(n.update(r, { scrollIntoView: !0, userEvent: 'delete.backward' })), !s
  },
  mm = [{ key: 'Backspace', run: bp }]
function wp(n, e) {
  let t = qa(n, n.selection.main.head),
    i = t.brackets || Gt.brackets
  for (let s of i) {
    let r = za(j(s, 0))
    if (e == s)
      return r == s ? Sp(n, s, i.indexOf(s + s + s) > -1, t) : vp(n, s, r, t.before || Gt.before)
    if (e == r && $a(n, n.selection.main.from)) return kp(n, s, r)
  }
  return null
}
function $a(n, e) {
  let t = !1
  return (
    n.field(Wa).between(0, n.doc.length, i => {
      i == e && (t = !0)
    }),
    t
  )
}
function nn(n, e) {
  let t = n.sliceString(e, e + 2)
  return t.slice(0, oe(j(t, 0)))
}
function xp(n, e) {
  let t = n.sliceString(e - 2, e)
  return oe(j(t, 0)) == t.length ? t : t.slice(1)
}
function vp(n, e, t, i) {
  let s = null,
    r = n.changeByRange(o => {
      if (!o.empty)
        return {
          changes: [
            { insert: e, from: o.from },
            { insert: t, from: o.to }
          ],
          effects: Ye.of(o.to + e.length),
          range: y.range(o.anchor + e.length, o.head + e.length)
        }
      let l = nn(n.doc, o.head)
      return !l || /\s/.test(l) || i.indexOf(l) > -1
        ? {
            changes: { insert: e + t, from: o.head },
            effects: Ye.of(o.head + e.length),
            range: y.cursor(o.head + e.length)
          }
        : { range: (s = o) }
    })
  return s ? null : n.update(r, { scrollIntoView: !0, userEvent: 'input.type' })
}
function kp(n, e, t) {
  let i = null,
    s = n.selection.ranges.map(r =>
      r.empty && nn(n.doc, r.head) == t ? y.cursor(r.head + t.length) : (i = r)
    )
  return i
    ? null
    : n.update({
        selection: y.create(s, n.selection.mainIndex),
        scrollIntoView: !0,
        effects: n.selection.ranges.map(({ from: r }) => Fs.of(r))
      })
}
function Sp(n, e, t, i) {
  let s = i.stringPrefixes || Gt.stringPrefixes,
    r = null,
    o = n.changeByRange(l => {
      if (!l.empty)
        return {
          changes: [
            { insert: e, from: l.from },
            { insert: e, from: l.to }
          ],
          effects: Ye.of(l.to + e.length),
          range: y.range(l.anchor + e.length, l.head + e.length)
        }
      let a = l.head,
        h = nn(n.doc, a),
        c
      if (h == e) {
        if (ho(n, a))
          return {
            changes: { insert: e + e, from: a },
            effects: Ye.of(a + e.length),
            range: y.cursor(a + e.length)
          }
        if ($a(n, a)) {
          let f = t && n.sliceDoc(a, a + e.length * 3) == e + e + e
          return { range: y.cursor(a + e.length * (f ? 3 : 1)), effects: Fs.of(a) }
        }
      } else {
        if (
          t &&
          n.sliceDoc(a - 2 * e.length, a) == e + e &&
          (c = co(n, a - 2 * e.length, s)) > -1 &&
          ho(n, c)
        )
          return {
            changes: { insert: e + e + e + e, from: a },
            effects: Ye.of(a + e.length),
            range: y.cursor(a + e.length)
          }
        if (n.charCategorizer(a)(h) != N.Word && co(n, a, s) > -1 && !Cp(n, a, e, s))
          return {
            changes: { insert: e + e, from: a },
            effects: Ye.of(a + e.length),
            range: y.cursor(a + e.length)
          }
      }
      return { range: (r = l) }
    })
  return r ? null : n.update(o, { scrollIntoView: !0, userEvent: 'input.type' })
}
function ho(n, e) {
  let t = Y(n).resolveInner(e + 1)
  return t.parent && t.from == e
}
function Cp(n, e, t, i) {
  let s = Y(n).resolveInner(e, -1),
    r = i.reduce((o, l) => Math.max(o, l.length), 0)
  for (let o = 0; o < 5; o++) {
    let l = n.sliceDoc(s.from, Math.min(s.to, s.from + t.length + r)),
      a = l.indexOf(t)
    if (!a || (a > -1 && i.indexOf(l.slice(0, a)) > -1)) {
      let c = s.firstChild
      for (; c && c.from == s.from && c.to - c.from > t.length + a; ) {
        if (n.sliceDoc(c.to - t.length, c.to) == t) return !1
        c = c.firstChild
      }
      return !0
    }
    let h = s.to == e && s.parent
    if (!h) break
    s = h
  }
  return !1
}
function co(n, e, t) {
  let i = n.charCategorizer(e)
  if (i(n.sliceDoc(e - 1, e)) != N.Word) return e
  for (let s of t) {
    let r = e - s.length
    if (n.sliceDoc(r, e) == s && i(n.sliceDoc(r - 1, r)) != N.Word) return r
  }
  return -1
}
function gm(n = {}) {
  return [fe, pe.of(n), pp, Mp, mp]
}
const Ap = [
    { key: 'Ctrl-Space', run: hp },
    { key: 'Escape', run: cp },
    { key: 'ArrowDown', run: di(!0) },
    { key: 'ArrowUp', run: di(!1) },
    { key: 'PageDown', run: di(!0, 'page') },
    { key: 'PageUp', run: di(!1, 'page') },
    { key: 'Enter', run: ap }
  ],
  Mp = xt.highest(vl.computeN([pe], n => (n.facet(pe).defaultKeymap ? [Ap] : [])))
class Dp {
  constructor(e, t, i) {
    ;(this.from = e), (this.to = t), (this.diagnostic = i)
  }
}
class Ge {
  constructor(e, t, i) {
    ;(this.diagnostics = e), (this.panel = t), (this.selected = i)
  }
  static init(e, t, i) {
    let s = e,
      r = i.facet(lt).markerFilter
    r && (s = r(s))
    let o = k.set(
      s.map(l =>
        l.from == l.to || (l.from == l.to - 1 && i.doc.lineAt(l.from).to == l.from)
          ? k.widget({ widget: new Np(l), diagnostic: l }).range(l.from)
          : k
              .mark({
                attributes: { class: 'cm-lintRange cm-lintRange-' + l.severity },
                diagnostic: l
              })
              .range(l.from, l.to)
      ),
      !0
    )
    return new Ge(o, t, wt(o))
  }
}
function wt(n, e = null, t = 0) {
  let i = null
  return (
    n.between(t, 1e9, (s, r, { spec: o }) => {
      if (!(e && o.diagnostic != e)) return (i = new Dp(s, r, o.diagnostic)), !1
    }),
    i
  )
}
function Tp(n, e) {
  return !!(n.effects.some(t => t.is(Ws)) || n.changes.touchesRange(e.pos))
}
function Ka(n, e) {
  return n.field(ae, !1)
    ? e
    : e.concat(
        A.appendConfig.of([
          ae,
          S.decorations.compute([ae], t => {
            let { selected: i, panel: s } = t.field(ae)
            return !i || !s || i.from == i.to ? k.none : k.set([Bp.range(i.from, i.to)])
          }),
          vf(Lp, { hideOn: Tp }),
          Fp
        ])
      )
}
function Op(n, e) {
  return { effects: Ka(n, [Ws.of(e)]) }
}
const Ws = A.define(),
  zs = A.define(),
  ja = A.define(),
  ae = U.define({
    create() {
      return new Ge(k.none, null, null)
    },
    update(n, e) {
      if (e.docChanged) {
        let t = n.diagnostics.map(e.changes),
          i = null
        if (n.selected) {
          let s = e.changes.mapPos(n.selected.from, 1)
          i = wt(t, n.selected.diagnostic, s) || wt(t, null, s)
        }
        n = new Ge(t, n.panel, i)
      }
      for (let t of e.effects)
        t.is(Ws)
          ? (n = Ge.init(t.value, n.panel, e.state))
          : t.is(zs)
          ? (n = new Ge(n.diagnostics, t.value ? sn.open : null, n.selected))
          : t.is(ja) && (n = new Ge(n.diagnostics, n.panel, t.value))
      return n
    },
    provide: n => [Kt.from(n, e => e.panel), S.decorations.from(n, e => e.diagnostics)]
  }),
  Bp = k.mark({ class: 'cm-lintRange cm-lintRange-active' })
function Lp(n, e, t) {
  let { diagnostics: i } = n.state.field(ae),
    s = [],
    r = 2e8,
    o = 0
  i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, h, { spec: c }) => {
    e >= a &&
      e <= h &&
      (a == h || ((e > a || t > 0) && (e < h || t < 0))) &&
      (s.push(c.diagnostic), (r = Math.min(a, r)), (o = Math.max(h, o)))
  })
  let l = n.state.facet(lt).tooltipFilter
  return (
    l && (s = l(s)),
    s.length
      ? {
          pos: r,
          end: o,
          above: n.state.doc.lineAt(r).to < o,
          create() {
            return { dom: Rp(n, s) }
          }
        }
      : null
  )
}
function Rp(n, e) {
  return R(
    'ul',
    { class: 'cm-tooltip-lint' },
    e.map(t => Ga(n, t, !1))
  )
}
const Ep = n => {
    let e = n.state.field(ae, !1)
    ;(!e || !e.panel) && n.dispatch({ effects: Ka(n.state, [zs.of(!0)]) })
    let t = $t(n, sn.open)
    return t && t.dom.querySelector('.cm-panel-lint ul').focus(), !0
  },
  fo = n => {
    let e = n.state.field(ae, !1)
    return !e || !e.panel ? !1 : (n.dispatch({ effects: zs.of(!1) }), !0)
  },
  Pp = n => {
    let e = n.state.field(ae, !1)
    if (!e) return !1
    let t = n.state.selection.main,
      i = e.diagnostics.iter(t.to + 1)
    return !i.value && ((i = e.diagnostics.iter(0)), !i.value || (i.from == t.from && i.to == t.to))
      ? !1
      : (n.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: !0 }), !0)
  },
  ym = [
    { key: 'Mod-Shift-m', run: Ep },
    { key: 'F8', run: Pp }
  ],
  Ip = W.fromClass(
    class {
      constructor(n) {
        ;(this.view = n), (this.timeout = -1), (this.set = !0)
        let { delay: e } = n.state.facet(lt)
        ;(this.lintTime = Date.now() + e),
          (this.run = this.run.bind(this)),
          (this.timeout = setTimeout(this.run, e))
      }
      run() {
        let n = Date.now()
        if (n < this.lintTime - 10) setTimeout(this.run, this.lintTime - n)
        else {
          this.set = !1
          let { state: e } = this.view,
            { sources: t } = e.facet(lt)
          Promise.all(t.map(i => Promise.resolve(i(this.view)))).then(
            i => {
              let s = i.reduce((r, o) => r.concat(o))
              this.view.state.doc == e.doc && this.view.dispatch(Op(this.view.state, s))
            },
            i => {
              he(this.view.state, i)
            }
          )
        }
      }
      update(n) {
        let e = n.state.facet(lt)
        ;(n.docChanged || e != n.startState.facet(lt)) &&
          ((this.lintTime = Date.now() + e.delay),
          this.set || ((this.set = !0), (this.timeout = setTimeout(this.run, e.delay))))
      }
      force() {
        this.set && ((this.lintTime = Date.now()), this.run())
      }
      destroy() {
        clearTimeout(this.timeout)
      }
    }
  ),
  lt = x.define({
    combine(n) {
      return Object.assign(
        { sources: n.map(e => e.source) },
        Ce(
          n.map(e => e.config),
          { delay: 750, markerFilter: null, tooltipFilter: null }
        )
      )
    },
    enables: Ip
  })
function Ua(n) {
  let e = []
  if (n)
    e: for (let { name: t } of n) {
      for (let i = 0; i < t.length; i++) {
        let s = t[i]
        if (/[a-zA-Z]/.test(s) && !e.some(r => r.toLowerCase() == s.toLowerCase())) {
          e.push(s)
          continue e
        }
      }
      e.push('')
    }
  return e
}
function Ga(n, e, t) {
  var i
  let s = t ? Ua(e.actions) : []
  return R(
    'li',
    { class: 'cm-diagnostic cm-diagnostic-' + e.severity },
    R('span', { class: 'cm-diagnosticText' }, e.renderMessage ? e.renderMessage() : e.message),
    (i = e.actions) === null || i === void 0
      ? void 0
      : i.map((r, o) => {
          let l = f => {
              f.preventDefault()
              let u = wt(n.state.field(ae).diagnostics, e)
              u && r.apply(n, u.from, u.to)
            },
            { name: a } = r,
            h = s[o] ? a.indexOf(s[o]) : -1,
            c = h < 0 ? a : [a.slice(0, h), R('u', a.slice(h, h + 1)), a.slice(h + 1)]
          return R(
            'button',
            {
              type: 'button',
              class: 'cm-diagnosticAction',
              onclick: l,
              onmousedown: l,
              'aria-label': ` Action: ${a}${h < 0 ? '' : ` (access key "${s[o]})"`}.`
            },
            c
          )
        }),
    e.source && R('div', { class: 'cm-diagnosticSource' }, e.source)
  )
}
class Np extends Te {
  constructor(e) {
    super(), (this.diagnostic = e)
  }
  eq(e) {
    return e.diagnostic == this.diagnostic
  }
  toDOM() {
    return R('span', { class: 'cm-lintPoint cm-lintPoint-' + this.diagnostic.severity })
  }
}
class uo {
  constructor(e, t) {
    ;(this.diagnostic = t),
      (this.id = 'item_' + Math.floor(Math.random() * 4294967295).toString(16)),
      (this.dom = Ga(e, t, !0)),
      (this.dom.id = this.id),
      this.dom.setAttribute('role', 'option')
  }
}
class sn {
  constructor(e) {
    ;(this.view = e), (this.items = [])
    let t = s => {
        if (s.keyCode == 27) fo(this.view), this.view.focus()
        else if (s.keyCode == 38 || s.keyCode == 33)
          this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length)
        else if (s.keyCode == 40 || s.keyCode == 34)
          this.moveSelection((this.selectedIndex + 1) % this.items.length)
        else if (s.keyCode == 36) this.moveSelection(0)
        else if (s.keyCode == 35) this.moveSelection(this.items.length - 1)
        else if (s.keyCode == 13) this.view.focus()
        else if (s.keyCode >= 65 && s.keyCode <= 90 && this.selectedIndex >= 0) {
          let { diagnostic: r } = this.items[this.selectedIndex],
            o = Ua(r.actions)
          for (let l = 0; l < o.length; l++)
            if (o[l].toUpperCase().charCodeAt(0) == s.keyCode) {
              let a = wt(this.view.state.field(ae).diagnostics, r)
              a && r.actions[l].apply(e, a.from, a.to)
            }
        } else return
        s.preventDefault()
      },
      i = s => {
        for (let r = 0; r < this.items.length; r++)
          this.items[r].dom.contains(s.target) && this.moveSelection(r)
      }
    ;(this.list = R('ul', {
      tabIndex: 0,
      role: 'listbox',
      'aria-label': this.view.state.phrase('Diagnostics'),
      onkeydown: t,
      onclick: i
    })),
      (this.dom = R(
        'div',
        { class: 'cm-panel-lint' },
        this.list,
        R(
          'button',
          {
            type: 'button',
            name: 'close',
            'aria-label': this.view.state.phrase('close'),
            onclick: () => fo(this.view)
          },
          '\xD7'
        )
      )),
      this.update()
  }
  get selectedIndex() {
    let e = this.view.state.field(ae).selected
    if (!e) return -1
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic) return t
    return -1
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(ae),
      i = 0,
      s = !1,
      r = null
    for (
      e.between(0, this.view.state.doc.length, (o, l, { spec: a }) => {
        let h = -1,
          c
        for (let f = i; f < this.items.length; f++)
          if (this.items[f].diagnostic == a.diagnostic) {
            h = f
            break
          }
        h < 0
          ? ((c = new uo(this.view, a.diagnostic)), this.items.splice(i, 0, c), (s = !0))
          : ((c = this.items[h]), h > i && (this.items.splice(i, h - i), (s = !0))),
          t && c.diagnostic == t.diagnostic
            ? c.dom.hasAttribute('aria-selected') ||
              (c.dom.setAttribute('aria-selected', 'true'), (r = c))
            : c.dom.hasAttribute('aria-selected') && c.dom.removeAttribute('aria-selected'),
          i++
      });
      i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0);

    )
      (s = !0), this.items.pop()
    this.items.length == 0 &&
      (this.items.push(
        new uo(this.view, {
          from: -1,
          to: -1,
          severity: 'info',
          message: this.view.state.phrase('No diagnostics')
        })
      ),
      (s = !0)),
      r
        ? (this.list.setAttribute('aria-activedescendant', r.id),
          this.view.requestMeasure({
            key: this,
            read: () => ({
              sel: r.dom.getBoundingClientRect(),
              panel: this.list.getBoundingClientRect()
            }),
            write: ({ sel: o, panel: l }) => {
              o.top < l.top
                ? (this.list.scrollTop -= l.top - o.top)
                : o.bottom > l.bottom && (this.list.scrollTop += o.bottom - l.bottom)
            }
          }))
        : this.selectedIndex < 0 && this.list.removeAttribute('aria-activedescendant'),
      s && this.sync()
  }
  sync() {
    let e = this.list.firstChild
    function t() {
      let i = e
      ;(e = i.nextSibling), i.remove()
    }
    for (let i of this.items)
      if (i.dom.parentNode == this.list) {
        for (; e != i.dom; ) t()
        e = i.dom.nextSibling
      } else this.list.insertBefore(i.dom, e)
    for (; e; ) t()
  }
  moveSelection(e) {
    if (this.selectedIndex < 0) return
    let t = this.view.state.field(ae),
      i = wt(t.diagnostics, this.items[e].diagnostic)
    !i ||
      this.view.dispatch({
        selection: { anchor: i.from, head: i.to },
        scrollIntoView: !0,
        effects: ja.of(i)
      })
  }
  static open(e) {
    return new sn(e)
  }
}
function Vp(n, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(
    n
  )}</svg>')`
}
function Mn(n) {
  return Vp(
    `<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`,
    'width="6" height="3"'
  )
}
const Fp = S.baseTheme({
    '.cm-diagnostic': {
      padding: '3px 6px 3px 8px',
      marginLeft: '-1px',
      display: 'block',
      whiteSpace: 'pre-wrap'
    },
    '.cm-diagnostic-error': { borderLeft: '5px solid #d11' },
    '.cm-diagnostic-warning': { borderLeft: '5px solid orange' },
    '.cm-diagnostic-info': { borderLeft: '5px solid #999' },
    '.cm-diagnosticAction': {
      font: 'inherit',
      border: 'none',
      padding: '2px 4px',
      backgroundColor: '#444',
      color: 'white',
      borderRadius: '3px',
      marginLeft: '8px'
    },
    '.cm-diagnosticSource': { fontSize: '70%', opacity: 0.7 },
    '.cm-lintRange': {
      backgroundPosition: 'left bottom',
      backgroundRepeat: 'repeat-x',
      paddingBottom: '0.7px'
    },
    '.cm-lintRange-error': { backgroundImage: Mn('#d11') },
    '.cm-lintRange-warning': { backgroundImage: Mn('orange') },
    '.cm-lintRange-info': { backgroundImage: Mn('#999') },
    '.cm-lintRange-active': { backgroundColor: '#ffdd9980' },
    '.cm-tooltip-lint': { padding: 0, margin: 0 },
    '.cm-lintPoint': {
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '-2px',
        borderLeft: '3px solid transparent',
        borderRight: '3px solid transparent',
        borderBottom: '4px solid #d11'
      }
    },
    '.cm-lintPoint-warning': { '&:after': { borderBottomColor: 'orange' } },
    '.cm-lintPoint-info': { '&:after': { borderBottomColor: '#999' } },
    '.cm-panel.cm-panel-lint': {
      position: 'relative',
      '& ul': {
        maxHeight: '100px',
        overflowY: 'auto',
        '& [aria-selected]': { backgroundColor: '#ddd', '& u': { textDecoration: 'underline' } },
        '&:focus [aria-selected]': {
          background_fallback: '#bdf',
          backgroundColor: 'Highlight',
          color_fallback: 'white',
          color: 'HighlightText'
        },
        '& u': { textDecoration: 'none' },
        padding: 0,
        margin: 0
      },
      '& [name=close]': {
        position: 'absolute',
        top: '0',
        right: '2px',
        background: 'inherit',
        border: 'none',
        font: 'inherit',
        padding: 0,
        margin: 0
      }
    }
  }),
  bm = Bi.define({
    name: 'css',
    parser: eh.configure({ props: [Ms.add({ Declaration: $f() }), Ts.add({ Block: Uf })] }),
    languageData: {
      commentTokens: { block: { open: '/*', close: '*/' } },
      indentOnInput: /^\s*\}$/,
      wordChars: '-'
    }
  }),
  Ja = Il({ block: { open: '<!--', close: '-->' } }),
  Hp = rh.configure({
    props: [
      Ts.add(n => {
        if (!(!n.is('Block') || n.is('Document')))
          return (e, t) => ({ from: t.doc.lineAt(e.from).to, to: e.to })
      }),
      Ms.add({ Document: () => null }),
      gt.add({ Document: Ja })
    ]
  })
function Wp(n) {
  return new ue(Ja, n, [], 'markdown')
}
const zp = Hp.configure([th, ih, nh, sh]),
  wm = Wp(zp)
export {
  fm as A,
  Cs as B,
  Xp as C,
  Ki as D,
  O as E,
  bm as F,
  wm as G,
  A as S,
  Jp as a,
  am as b,
  Gp as c,
  Up as d,
  lm as e,
  sm as f,
  pm as g,
  em as h,
  im as i,
  gm as j,
  Zp as k,
  _p as l,
  Yp as m,
  um as n,
  vl as o,
  mm as p,
  cm as q,
  Qp as r,
  rm as s,
  dm as t,
  hm as u,
  nm as v,
  Ap as w,
  ym as x,
  om as y,
  S as z
}
