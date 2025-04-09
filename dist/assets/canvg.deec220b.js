import './core-js.390b83f9.js'
import { _ as R, a as ot } from './@babel.2898e469.js'
import { r as at } from './raf.83fd7dc6.js'
import { r as nt } from './rgbcolor.ee75fe19.js'
import { _ as q } from './svg-pathdata.7155e77f.js'
import { p as Wt } from './stackblur-canvas.f67d5add.js'
import './aos.e37f4dc9.js'
import './performance-now.81e75aad.js'
function jt() {
  var { DOMParser: o } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = {
      window: null,
      ignoreAnimation: !0,
      ignoreMouse: !0,
      DOMParser: o,
      createCanvas(e, r) {
        return new OffscreenCanvas(e, r)
      },
      createImage(e) {
        return R(function* () {
          var r = yield fetch(e),
            i = yield r.blob(),
            a = yield createImageBitmap(i)
          return a
        })()
      }
    }
  return (typeof DOMParser < 'u' || typeof o > 'u') && Reflect.deleteProperty(t, 'DOMParser'), t
}
function Yt(o) {
  var { DOMParser: t, canvas: e, fetch: r } = o
  return {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: t,
    fetch: r,
    createCanvas: e.createCanvas,
    createImage: e.loadImage
  }
}
var lr = Object.freeze({ __proto__: null, offscreen: jt, node: Yt })
function H(o) {
  return o.replace(/(?!\u3000)\s+/gm, ' ')
}
function Ht(o) {
  return o.replace(/^[\n \t]+/, '')
}
function $t(o) {
  return o.replace(/[\n \t]+$/, '')
}
function O(o) {
  var t = (o || '').match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || []
  return t.map(parseFloat)
}
var qt = /^[A-Z-]+$/
function Gt(o) {
  return qt.test(o) ? o.toLowerCase() : o
}
function Nt(o) {
  var t = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(o) || []
  return t[2] || t[3] || t[4]
}
function Qt(o) {
  if (!o.startsWith('rgb')) return o
  var t = 3,
    e = o.replace(/\d+(\.\d+)?/g, (r, i) => (t-- && i ? String(Math.round(parseFloat(r))) : r))
  return e
}
var Zt = /(\[[^\]]+\])/g,
  Jt = /(#[^\s+>~.[:]+)/g,
  Kt = /(\.[^\s+>~.[:]+)/g,
  te = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi,
  ee = /(:[\w-]+\([^)]*\))/gi,
  re = /(:[^\s+>~.[:]+)/g,
  ie = /([^\s+>~.[:]+)/g
function X(o, t) {
  var e = t.exec(o)
  return e ? [o.replace(t, ' '), e.length] : [o, 0]
}
function ae(o) {
  var t = [0, 0, 0],
    e = o.replace(/:not\(([^)]*)\)/g, '     $1 ').replace(/{[\s\S]*/gm, ' '),
    r = 0
  return (
    ([e, r] = X(e, Zt)),
    (t[1] += r),
    ([e, r] = X(e, Jt)),
    (t[0] += r),
    ([e, r] = X(e, Kt)),
    (t[1] += r),
    ([e, r] = X(e, te)),
    (t[2] += r),
    ([e, r] = X(e, ee)),
    (t[1] += r),
    ([e, r] = X(e, re)),
    (t[1] += r),
    (e = e.replace(/[*\s+>~]/g, ' ').replace(/[#.]/g, ' ')),
    ([e, r] = X(e, ie)),
    (t[2] += r),
    t.join('')
  )
}
var Y = 1e-8
function bt(o) {
  return Math.sqrt(Math.pow(o[0], 2) + Math.pow(o[1], 2))
}
function ht(o, t) {
  return (o[0] * t[0] + o[1] * t[1]) / (bt(o) * bt(t))
}
function xt(o, t) {
  return (o[0] * t[1] < o[1] * t[0] ? -1 : 1) * Math.acos(ht(o, t))
}
function wt(o) {
  return o * o * o
}
function St(o) {
  return 3 * o * o * (1 - o)
}
function At(o) {
  return 3 * o * (1 - o) * (1 - o)
}
function Pt(o) {
  return (1 - o) * (1 - o) * (1 - o)
}
function Ct(o) {
  return o * o
}
function Vt(o) {
  return 2 * o * (1 - o)
}
function Tt(o) {
  return (1 - o) * (1 - o)
}
class m {
  constructor(t, e, r) {
    ;(this.document = t), (this.name = e), (this.value = r), (this.isNormalizedColor = !1)
  }
  static empty(t) {
    return new m(t, 'EMPTY', '')
  }
  split() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ' ',
      { document: e, name: r } = this
    return H(this.getString())
      .trim()
      .split(t)
      .map(i => new m(e, r, i))
  }
  hasValue(t) {
    var { value: e } = this
    return e !== null && e !== '' && (t || e !== 0) && typeof e < 'u'
  }
  isString(t) {
    var { value: e } = this,
      r = typeof e == 'string'
    return !r || !t ? r : t.test(e)
  }
  isUrlDefinition() {
    return this.isString(/^url\(/)
  }
  isPixels() {
    if (!this.hasValue()) return !1
    var t = this.getString()
    switch (!0) {
      case t.endsWith('px'):
      case /^[0-9]+$/.test(t):
        return !0
      default:
        return !1
    }
  }
  setValue(t) {
    return (this.value = t), this
  }
  getValue(t) {
    return typeof t > 'u' || this.hasValue() ? this.value : t
  }
  getNumber(t) {
    if (!this.hasValue()) return typeof t > 'u' ? 0 : parseFloat(t)
    var { value: e } = this,
      r = parseFloat(e)
    return this.isString(/%$/) && (r /= 100), r
  }
  getString(t) {
    return typeof t > 'u' || this.hasValue()
      ? typeof this.value > 'u'
        ? ''
        : String(this.value)
      : String(t)
  }
  getColor(t) {
    var e = this.getString(t)
    return (
      this.isNormalizedColor || ((this.isNormalizedColor = !0), (e = Qt(e)), (this.value = e)), e
    )
  }
  getDpi() {
    return 96
  }
  getRem() {
    return this.document.rootEmSize
  }
  getEm() {
    return this.document.emSize
  }
  getUnits() {
    return this.getString().replace(/[0-9.-]/g, '')
  }
  getPixels(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    if (!this.hasValue()) return 0
    var [r, i] = typeof t == 'boolean' ? [void 0, t] : [t],
      { viewPort: a } = this.document.screen
    switch (!0) {
      case this.isString(/vmin$/):
        return (this.getNumber() / 100) * Math.min(a.computeSize('x'), a.computeSize('y'))
      case this.isString(/vmax$/):
        return (this.getNumber() / 100) * Math.max(a.computeSize('x'), a.computeSize('y'))
      case this.isString(/vw$/):
        return (this.getNumber() / 100) * a.computeSize('x')
      case this.isString(/vh$/):
        return (this.getNumber() / 100) * a.computeSize('y')
      case this.isString(/rem$/):
        return this.getNumber() * this.getRem()
      case this.isString(/em$/):
        return this.getNumber() * this.getEm()
      case this.isString(/ex$/):
        return (this.getNumber() * this.getEm()) / 2
      case this.isString(/px$/):
        return this.getNumber()
      case this.isString(/pt$/):
        return this.getNumber() * this.getDpi() * (1 / 72)
      case this.isString(/pc$/):
        return this.getNumber() * 15
      case this.isString(/cm$/):
        return (this.getNumber() * this.getDpi()) / 2.54
      case this.isString(/mm$/):
        return (this.getNumber() * this.getDpi()) / 25.4
      case this.isString(/in$/):
        return this.getNumber() * this.getDpi()
      case this.isString(/%$/) && i:
        return this.getNumber() * this.getEm()
      case this.isString(/%$/):
        return this.getNumber() * a.computeSize(r)
      default: {
        var s = this.getNumber()
        return e && s < 1 ? s * a.computeSize(r) : s
      }
    }
  }
  getMilliseconds() {
    return this.hasValue() ? (this.isString(/ms$/) ? this.getNumber() : this.getNumber() * 1e3) : 0
  }
  getRadians() {
    if (!this.hasValue()) return 0
    switch (!0) {
      case this.isString(/deg$/):
        return this.getNumber() * (Math.PI / 180)
      case this.isString(/grad$/):
        return this.getNumber() * (Math.PI / 200)
      case this.isString(/rad$/):
        return this.getNumber()
      default:
        return this.getNumber() * (Math.PI / 180)
    }
  }
  getDefinition() {
    var t = this.getString(),
      e = /#([^)'"]+)/.exec(t)
    return e && (e = e[1]), e || (e = t), this.document.definitions[e]
  }
  getFillStyleDefinition(t, e) {
    var r = this.getDefinition()
    if (!r) return null
    if (typeof r.createGradient == 'function') return r.createGradient(this.document.ctx, t, e)
    if (typeof r.createPattern == 'function') {
      if (r.getHrefAttribute().hasValue()) {
        var i = r.getAttribute('patternTransform')
        ;(r = r.getHrefAttribute().getDefinition()),
          i.hasValue() && r.getAttribute('patternTransform', !0).setValue(i.value)
      }
      return r.createPattern(this.document.ctx, t, e)
    }
    return null
  }
  getTextBaseline() {
    return this.hasValue() ? m.textBaselineMapping[this.getString()] : null
  }
  addOpacity(t) {
    for (
      var e = this.getColor(), r = e.length, i = 0, a = 0;
      a < r && (e[a] === ',' && i++, i !== 3);
      a++
    );
    if (t.hasValue() && this.isString() && i !== 3) {
      var s = new nt(e)
      s.ok && ((s.alpha = t.getNumber()), (e = s.toRGBA()))
    }
    return new m(this.document, this.name, e)
  }
}
m.textBaselineMapping = {
  baseline: 'alphabetic',
  'before-edge': 'top',
  'text-before-edge': 'top',
  middle: 'middle',
  central: 'middle',
  'after-edge': 'bottom',
  'text-after-edge': 'bottom',
  ideographic: 'ideographic',
  alphabetic: 'alphabetic',
  hanging: 'hanging',
  mathematical: 'alphabetic'
}
class se {
  constructor() {
    this.viewPorts = []
  }
  clear() {
    this.viewPorts = []
  }
  setCurrent(t, e) {
    this.viewPorts.push({ width: t, height: e })
  }
  removeCurrent() {
    this.viewPorts.pop()
  }
  getCurrent() {
    var { viewPorts: t } = this
    return t[t.length - 1]
  }
  get width() {
    return this.getCurrent().width
  }
  get height() {
    return this.getCurrent().height
  }
  computeSize(t) {
    return typeof t == 'number'
      ? t
      : t === 'x'
      ? this.width
      : t === 'y'
      ? this.height
      : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2)
  }
}
class V {
  constructor(t, e) {
    ;(this.x = t), (this.y = e)
  }
  static parse(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      [r = e, i = e] = O(t)
    return new V(r, i)
  }
  static parseScale(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1,
      [r = e, i = r] = O(t)
    return new V(r, i)
  }
  static parsePath(t) {
    for (var e = O(t), r = e.length, i = [], a = 0; a < r; a += 2) i.push(new V(e[a], e[a + 1]))
    return i
  }
  angleTo(t) {
    return Math.atan2(t.y - this.y, t.x - this.x)
  }
  applyTransform(t) {
    var { x: e, y: r } = this,
      i = e * t[0] + r * t[2] + t[4],
      a = e * t[1] + r * t[3] + t[5]
    ;(this.x = i), (this.y = a)
  }
}
class ne {
  constructor(t) {
    ;(this.screen = t),
      (this.working = !1),
      (this.events = []),
      (this.eventElements = []),
      (this.onClick = this.onClick.bind(this)),
      (this.onMouseMove = this.onMouseMove.bind(this))
  }
  isWorking() {
    return this.working
  }
  start() {
    if (!this.working) {
      var { screen: t, onClick: e, onMouseMove: r } = this,
        i = t.ctx.canvas
      ;(i.onclick = e), (i.onmousemove = r), (this.working = !0)
    }
  }
  stop() {
    if (!!this.working) {
      var t = this.screen.ctx.canvas
      ;(this.working = !1), (t.onclick = null), (t.onmousemove = null)
    }
  }
  hasEvents() {
    return this.working && this.events.length > 0
  }
  runEvents() {
    if (!!this.working) {
      var { screen: t, events: e, eventElements: r } = this,
        { style: i } = t.ctx.canvas
      i && (i.cursor = ''),
        e.forEach((a, s) => {
          for (var { run: n } = a, h = r[s]; h; ) n(h), (h = h.parent)
        }),
        (this.events = []),
        (this.eventElements = [])
    }
  }
  checkPath(t, e) {
    if (!(!this.working || !e)) {
      var { events: r, eventElements: i } = this
      r.forEach((a, s) => {
        var { x: n, y: h } = a
        !i[s] && e.isPointInPath && e.isPointInPath(n, h) && (i[s] = t)
      })
    }
  }
  checkBoundingBox(t, e) {
    if (!(!this.working || !e)) {
      var { events: r, eventElements: i } = this
      r.forEach((a, s) => {
        var { x: n, y: h } = a
        !i[s] && e.isPointInBox(n, h) && (i[s] = t)
      })
    }
  }
  mapXY(t, e) {
    for (var { window: r, ctx: i } = this.screen, a = new V(t, e), s = i.canvas; s; )
      (a.x -= s.offsetLeft), (a.y -= s.offsetTop), (s = s.offsetParent)
    return r.scrollX && (a.x += r.scrollX), r.scrollY && (a.y += r.scrollY), a
  }
  onClick(t) {
    var { x: e, y: r } = this.mapXY(t.clientX, t.clientY)
    this.events.push({
      type: 'onclick',
      x: e,
      y: r,
      run(i) {
        i.onClick && i.onClick()
      }
    })
  }
  onMouseMove(t) {
    var { x: e, y: r } = this.mapXY(t.clientX, t.clientY)
    this.events.push({
      type: 'onmousemove',
      x: e,
      y: r,
      run(i) {
        i.onMouseMove && i.onMouseMove()
      }
    })
  }
}
var Bt = typeof window < 'u' ? window : null,
  Dt = typeof fetch < 'u' ? fetch.bind(void 0) : null
class tt {
  constructor(t) {
    var { fetch: e = Dt, window: r = Bt } =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.ctx = t),
      (this.FRAMERATE = 30),
      (this.MAX_VIRTUAL_PIXELS = 3e4),
      (this.CLIENT_WIDTH = 800),
      (this.CLIENT_HEIGHT = 600),
      (this.viewPort = new se()),
      (this.mouse = new ne(this)),
      (this.animations = []),
      (this.waits = []),
      (this.frameDuration = 0),
      (this.isReadyLock = !1),
      (this.isFirstRender = !0),
      (this.intervalId = null),
      (this.window = r),
      (this.fetch = e)
  }
  wait(t) {
    this.waits.push(t)
  }
  ready() {
    return this.readyPromise ? this.readyPromise : Promise.resolve()
  }
  isReady() {
    if (this.isReadyLock) return !0
    var t = this.waits.every(e => e())
    return (
      t && ((this.waits = []), this.resolveReady && this.resolveReady()), (this.isReadyLock = t), t
    )
  }
  setDefaults(t) {
    ;(t.strokeStyle = 'rgba(0,0,0,0)'),
      (t.lineCap = 'butt'),
      (t.lineJoin = 'miter'),
      (t.miterLimit = 4)
  }
  setViewBox(t) {
    var {
        document: e,
        ctx: r,
        aspectRatio: i,
        width: a,
        desiredWidth: s,
        height: n,
        desiredHeight: h,
        minX: u = 0,
        minY: l = 0,
        refX: g,
        refY: v,
        clip: f = !1,
        clipX: d = 0,
        clipY: p = 0
      } = t,
      c = H(i).replace(/^defer\s/, ''),
      [y, x] = c.split(' '),
      w = y || 'xMidYMid',
      A = x || 'meet',
      M = a / s,
      k = n / h,
      C = Math.min(M, k),
      N = Math.max(M, k),
      _ = s,
      D = h
    A === 'meet' && ((_ *= C), (D *= C)), A === 'slice' && ((_ *= N), (D *= N))
    var $ = new m(e, 'refX', g),
      z = new m(e, 'refY', v),
      ft = $.hasValue() && z.hasValue()
    if ((ft && r.translate(-C * $.getPixels('x'), -C * z.getPixels('y')), f)) {
      var vt = C * d,
        dt = C * p
      r.beginPath(),
        r.moveTo(vt, dt),
        r.lineTo(a, dt),
        r.lineTo(a, n),
        r.lineTo(vt, n),
        r.closePath(),
        r.clip()
    }
    if (!ft) {
      var ct = A === 'meet' && C === k,
        pt = A === 'slice' && N === k,
        mt = A === 'meet' && C === M,
        yt = A === 'slice' && N === M
      w.startsWith('xMid') && (ct || pt) && r.translate(a / 2 - _ / 2, 0),
        w.endsWith('YMid') && (mt || yt) && r.translate(0, n / 2 - D / 2),
        w.startsWith('xMax') && (ct || pt) && r.translate(a - _, 0),
        w.endsWith('YMax') && (mt || yt) && r.translate(0, n - D)
    }
    switch (!0) {
      case w === 'none':
        r.scale(M, k)
        break
      case A === 'meet':
        r.scale(C, C)
        break
      case A === 'slice':
        r.scale(N, N)
        break
    }
    r.translate(-u, -l)
  }
  start(t) {
    var {
        enableRedraw: e = !1,
        ignoreMouse: r = !1,
        ignoreAnimation: i = !1,
        ignoreDimensions: a = !1,
        ignoreClear: s = !1,
        forceRedraw: n,
        scaleWidth: h,
        scaleHeight: u,
        offsetX: l,
        offsetY: g
      } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      { FRAMERATE: v, mouse: f } = this,
      d = 1e3 / v
    if (
      ((this.frameDuration = d),
      (this.readyPromise = new Promise(w => {
        this.resolveReady = w
      })),
      this.isReady() && this.render(t, a, s, h, u, l, g),
      !!e)
    ) {
      var p = Date.now(),
        c = p,
        y = 0,
        x = () => {
          ;(p = Date.now()),
            (y = p - c),
            y >= d &&
              ((c = p - (y % d)),
              this.shouldUpdate(i, n) && (this.render(t, a, s, h, u, l, g), f.runEvents())),
            (this.intervalId = at.exports(x))
        }
      r || f.start(), (this.intervalId = at.exports(x))
    }
  }
  stop() {
    this.intervalId && (at.exports.cancel(this.intervalId), (this.intervalId = null)),
      this.mouse.stop()
  }
  shouldUpdate(t, e) {
    if (!t) {
      var { frameDuration: r } = this,
        i = this.animations.reduce((a, s) => s.update(r) || a, !1)
      if (i) return !0
    }
    return !!(
      (typeof e == 'function' && e()) ||
      (!this.isReadyLock && this.isReady()) ||
      this.mouse.hasEvents()
    )
  }
  render(t, e, r, i, a, s, n) {
    var { CLIENT_WIDTH: h, CLIENT_HEIGHT: u, viewPort: l, ctx: g, isFirstRender: v } = this,
      f = g.canvas
    l.clear(), f.width && f.height ? l.setCurrent(f.width, f.height) : l.setCurrent(h, u)
    var d = t.getStyle('width'),
      p = t.getStyle('height')
    !e &&
      (v || (typeof i != 'number' && typeof a != 'number')) &&
      (d.hasValue() &&
        ((f.width = d.getPixels('x')), f.style && (f.style.width = ''.concat(f.width, 'px'))),
      p.hasValue() &&
        ((f.height = p.getPixels('y')), f.style && (f.style.height = ''.concat(f.height, 'px'))))
    var c = f.clientWidth || f.width,
      y = f.clientHeight || f.height
    if (
      (e && d.hasValue() && p.hasValue() && ((c = d.getPixels('x')), (y = p.getPixels('y'))),
      l.setCurrent(c, y),
      typeof s == 'number' && t.getAttribute('x', !0).setValue(s),
      typeof n == 'number' && t.getAttribute('y', !0).setValue(n),
      typeof i == 'number' || typeof a == 'number')
    ) {
      var x = O(t.getAttribute('viewBox').getString()),
        w = 0,
        A = 0
      if (typeof i == 'number') {
        var M = t.getStyle('width')
        M.hasValue() ? (w = M.getPixels('x') / i) : isNaN(x[2]) || (w = x[2] / i)
      }
      if (typeof a == 'number') {
        var k = t.getStyle('height')
        k.hasValue() ? (A = k.getPixels('y') / a) : isNaN(x[3]) || (A = x[3] / a)
      }
      w || (w = A),
        A || (A = w),
        t.getAttribute('width', !0).setValue(i),
        t.getAttribute('height', !0).setValue(a)
      var C = t.getStyle('transform', !0, !0)
      C.setValue(
        ''
          .concat(C.getString(), ' scale(')
          .concat(1 / w, ', ')
          .concat(1 / A, ')')
      )
    }
    r || g.clearRect(0, 0, c, y), t.render(g), v && (this.isFirstRender = !1)
  }
}
tt.defaultWindow = Bt
tt.defaultFetch = Dt
var { defaultFetch: he } = tt,
  ue = typeof DOMParser < 'u' ? DOMParser : null
class st {
  constructor() {
    var { fetch: t = he, DOMParser: e = ue } =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.fetch = t), (this.DOMParser = e)
  }
  parse(t) {
    var e = this
    return R(function* () {
      return t.startsWith('<') ? e.parseFromString(t) : e.load(t)
    })()
  }
  parseFromString(t) {
    var e = new this.DOMParser()
    try {
      return this.checkDocument(e.parseFromString(t, 'image/svg+xml'))
    } catch {
      return this.checkDocument(e.parseFromString(t, 'text/xml'))
    }
  }
  checkDocument(t) {
    var e = t.getElementsByTagName('parsererror')[0]
    if (e) throw new Error(e.textContent)
    return t
  }
  load(t) {
    var e = this
    return R(function* () {
      var r = yield e.fetch(t),
        i = yield r.text()
      return e.parseFromString(i)
    })()
  }
}
class oe {
  constructor(t, e) {
    ;(this.type = 'translate'), (this.point = null), (this.point = V.parse(e))
  }
  apply(t) {
    var { x: e, y: r } = this.point
    t.translate(e || 0, r || 0)
  }
  unapply(t) {
    var { x: e, y: r } = this.point
    t.translate(-1 * e || 0, -1 * r || 0)
  }
  applyToPoint(t) {
    var { x: e, y: r } = this.point
    t.applyTransform([1, 0, 0, 1, e || 0, r || 0])
  }
}
class le {
  constructor(t, e, r) {
    ;(this.type = 'rotate'),
      (this.angle = null),
      (this.originX = null),
      (this.originY = null),
      (this.cx = 0),
      (this.cy = 0)
    var i = O(e)
    ;(this.angle = new m(t, 'angle', i[0])),
      (this.originX = r[0]),
      (this.originY = r[1]),
      (this.cx = i[1] || 0),
      (this.cy = i[2] || 0)
  }
  apply(t) {
    var { cx: e, cy: r, originX: i, originY: a, angle: s } = this,
      n = e + i.getPixels('x'),
      h = r + a.getPixels('y')
    t.translate(n, h), t.rotate(s.getRadians()), t.translate(-n, -h)
  }
  unapply(t) {
    var { cx: e, cy: r, originX: i, originY: a, angle: s } = this,
      n = e + i.getPixels('x'),
      h = r + a.getPixels('y')
    t.translate(n, h), t.rotate(-1 * s.getRadians()), t.translate(-n, -h)
  }
  applyToPoint(t) {
    var { cx: e, cy: r, angle: i } = this,
      a = i.getRadians()
    t.applyTransform([1, 0, 0, 1, e || 0, r || 0]),
      t.applyTransform([Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0]),
      t.applyTransform([1, 0, 0, 1, -e || 0, -r || 0])
  }
}
class ge {
  constructor(t, e, r) {
    ;(this.type = 'scale'), (this.scale = null), (this.originX = null), (this.originY = null)
    var i = V.parseScale(e)
    ;(i.x === 0 || i.y === 0) && ((i.x = Y), (i.y = Y)),
      (this.scale = i),
      (this.originX = r[0]),
      (this.originY = r[1])
  }
  apply(t) {
    var {
        scale: { x: e, y: r },
        originX: i,
        originY: a
      } = this,
      s = i.getPixels('x'),
      n = a.getPixels('y')
    t.translate(s, n), t.scale(e, r || e), t.translate(-s, -n)
  }
  unapply(t) {
    var {
        scale: { x: e, y: r },
        originX: i,
        originY: a
      } = this,
      s = i.getPixels('x'),
      n = a.getPixels('y')
    t.translate(s, n), t.scale(1 / e, 1 / r || e), t.translate(-s, -n)
  }
  applyToPoint(t) {
    var { x: e, y: r } = this.scale
    t.applyTransform([e || 0, 0, 0, r || 0, 0, 0])
  }
}
class zt {
  constructor(t, e, r) {
    ;(this.type = 'matrix'),
      (this.matrix = []),
      (this.originX = null),
      (this.originY = null),
      (this.matrix = O(e)),
      (this.originX = r[0]),
      (this.originY = r[1])
  }
  apply(t) {
    var { originX: e, originY: r, matrix: i } = this,
      a = e.getPixels('x'),
      s = r.getPixels('y')
    t.translate(a, s), t.transform(i[0], i[1], i[2], i[3], i[4], i[5]), t.translate(-a, -s)
  }
  unapply(t) {
    var { originX: e, originY: r, matrix: i } = this,
      a = i[0],
      s = i[2],
      n = i[4],
      h = i[1],
      u = i[3],
      l = i[5],
      g = 0,
      v = 0,
      f = 1,
      d = 1 / (a * (u * f - l * v) - s * (h * f - l * g) + n * (h * v - u * g)),
      p = e.getPixels('x'),
      c = r.getPixels('y')
    t.translate(p, c),
      t.transform(
        d * (u * f - l * v),
        d * (l * g - h * f),
        d * (n * v - s * f),
        d * (a * f - n * g),
        d * (s * l - n * u),
        d * (n * h - a * l)
      ),
      t.translate(-p, -c)
  }
  applyToPoint(t) {
    t.applyTransform(this.matrix)
  }
}
class Lt extends zt {
  constructor(t, e, r) {
    super(t, e, r), (this.type = 'skew'), (this.angle = null), (this.angle = new m(t, 'angle', e))
  }
}
class fe extends Lt {
  constructor(t, e, r) {
    super(t, e, r),
      (this.type = 'skewX'),
      (this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0])
  }
}
class ve extends Lt {
  constructor(t, e, r) {
    super(t, e, r),
      (this.type = 'skewY'),
      (this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0])
  }
}
function de(o) {
  return H(o)
    .trim()
    .replace(/\)([a-zA-Z])/g, ') $1')
    .replace(/\)(\s?,\s?)/g, ') ')
    .split(/\s(?=[a-z])/)
}
function ce(o) {
  var [t, e] = o.split('(')
  return [t.trim(), e.trim().replace(')', '')]
}
class W {
  constructor(t, e, r) {
    ;(this.document = t), (this.transforms = [])
    var i = de(e)
    i.forEach(a => {
      if (a !== 'none') {
        var [s, n] = ce(a),
          h = W.transformTypes[s]
        typeof h < 'u' && this.transforms.push(new h(this.document, n, r))
      }
    })
  }
  static fromElement(t, e) {
    var r = e.getStyle('transform', !1, !0),
      [i, a = i] = e.getStyle('transform-origin', !1, !0).split(),
      s = [i, a]
    return r.hasValue() ? new W(t, r.getString(), s) : null
  }
  apply(t) {
    for (var { transforms: e } = this, r = e.length, i = 0; i < r; i++) e[i].apply(t)
  }
  unapply(t) {
    for (var { transforms: e } = this, r = e.length, i = r - 1; i >= 0; i--) e[i].unapply(t)
  }
  applyToPoint(t) {
    for (var { transforms: e } = this, r = e.length, i = 0; i < r; i++) e[i].applyToPoint(t)
  }
}
W.transformTypes = { translate: oe, rotate: le, scale: ge, matrix: zt, skewX: fe, skewY: ve }
class P {
  constructor(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
    if (
      ((this.document = t),
      (this.node = e),
      (this.captureTextNodes = r),
      (this.attributes = {}),
      (this.styles = {}),
      (this.stylesSpecificity = {}),
      (this.animationFrozen = !1),
      (this.animationFrozenValue = ''),
      (this.parent = null),
      (this.children = []),
      !(!e || e.nodeType !== 1))
    ) {
      if (
        (Array.from(e.attributes).forEach(n => {
          var h = Gt(n.nodeName)
          this.attributes[h] = new m(t, h, n.value)
        }),
        this.addStylesFromStyleDefinition(),
        this.getAttribute('style').hasValue())
      ) {
        var i = this.getAttribute('style')
          .getString()
          .split(';')
          .map(n => n.trim())
        i.forEach(n => {
          if (!!n) {
            var [h, u] = n.split(':').map(l => l.trim())
            this.styles[h] = new m(t, h, u)
          }
        })
      }
      var { definitions: a } = t,
        s = this.getAttribute('id')
      s.hasValue() && (a[s.getString()] || (a[s.getString()] = this)),
        Array.from(e.childNodes).forEach(n => {
          if (n.nodeType === 1) this.addChild(n)
          else if (r && (n.nodeType === 3 || n.nodeType === 4)) {
            var h = t.createTextNode(n)
            h.getText().length > 0 && this.addChild(h)
          }
        })
    }
  }
  getAttribute(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      r = this.attributes[t]
    if (!r && e) {
      var i = new m(this.document, t, '')
      return (this.attributes[t] = i), i
    }
    return r || m.empty(this.document)
  }
  getHrefAttribute() {
    for (var t in this.attributes)
      if (t === 'href' || t.endsWith(':href')) return this.attributes[t]
    return m.empty(this.document)
  }
  getStyle(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
      i = this.styles[t]
    if (i) return i
    var a = this.getAttribute(t)
    if (a != null && a.hasValue()) return (this.styles[t] = a), a
    if (!r) {
      var { parent: s } = this
      if (s) {
        var n = s.getStyle(t)
        if (n != null && n.hasValue()) return n
      }
    }
    if (e) {
      var h = new m(this.document, t, '')
      return (this.styles[t] = h), h
    }
    return i || m.empty(this.document)
  }
  render(t) {
    if (
      !(
        this.getStyle('display').getString() === 'none' ||
        this.getStyle('visibility').getString() === 'hidden'
      )
    ) {
      if ((t.save(), this.getStyle('mask').hasValue())) {
        var e = this.getStyle('mask').getDefinition()
        e && (this.applyEffects(t), e.apply(t, this))
      } else if (this.getStyle('filter').getValue('none') !== 'none') {
        var r = this.getStyle('filter').getDefinition()
        r && (this.applyEffects(t), r.apply(t, this))
      } else this.setContext(t), this.renderChildren(t), this.clearContext(t)
      t.restore()
    }
  }
  setContext(t) {}
  applyEffects(t) {
    var e = W.fromElement(this.document, this)
    e && e.apply(t)
    var r = this.getStyle('clip-path', !1, !0)
    if (r.hasValue()) {
      var i = r.getDefinition()
      i && i.apply(t)
    }
  }
  clearContext(t) {}
  renderChildren(t) {
    this.children.forEach(e => {
      e.render(t)
    })
  }
  addChild(t) {
    var e = t instanceof P ? t : this.document.createElement(t)
    ;(e.parent = this), P.ignoreChildTypes.includes(e.type) || this.children.push(e)
  }
  matchesSelector(t) {
    var e,
      { node: r } = this
    if (typeof r.matches == 'function') return r.matches(t)
    var i = (e = r.getAttribute) === null || e === void 0 ? void 0 : e.call(r, 'class')
    return !i || i === '' ? !1 : i.split(' ').some(a => '.'.concat(a) === t)
  }
  addStylesFromStyleDefinition() {
    var { styles: t, stylesSpecificity: e } = this.document
    for (var r in t)
      if (!r.startsWith('@') && this.matchesSelector(r)) {
        var i = t[r],
          a = e[r]
        if (i)
          for (var s in i) {
            var n = this.stylesSpecificity[s]
            typeof n > 'u' && (n = '000'),
              a >= n && ((this.styles[s] = i[s]), (this.stylesSpecificity[s] = a))
          }
      }
  }
  removeStyles(t, e) {
    var r = e.reduce((i, a) => {
      var s = t.getStyle(a)
      if (!s.hasValue()) return i
      var n = s.getString()
      return s.setValue(''), [...i, [a, n]]
    }, [])
    return r
  }
  restoreStyles(t, e) {
    e.forEach(r => {
      var [i, a] = r
      t.getStyle(i, !0).setValue(a)
    })
  }
  isFirstChild() {
    var t
    return ((t = this.parent) === null || t === void 0 ? void 0 : t.children.indexOf(this)) === 0
  }
}
P.ignoreChildTypes = ['title']
class pe extends P {
  constructor(t, e, r) {
    super(t, e, r)
  }
}
function me(o) {
  var t = o.trim()
  return /^('|")/.test(t) ? t : '"'.concat(t, '"')
}
function ye(o) {
  return typeof process > 'u' ? o : o.trim().split(',').map(me).join(',')
}
function be(o) {
  if (!o) return ''
  var t = o.trim().toLowerCase()
  switch (t) {
    case 'normal':
    case 'italic':
    case 'oblique':
    case 'inherit':
    case 'initial':
    case 'unset':
      return t
    default:
      return /^oblique\s+(-|)\d+deg$/.test(t) ? t : ''
  }
}
function xe(o) {
  if (!o) return ''
  var t = o.trim().toLowerCase()
  switch (t) {
    case 'normal':
    case 'bold':
    case 'lighter':
    case 'bolder':
    case 'inherit':
    case 'initial':
    case 'unset':
      return t
    default:
      return /^[\d.]+$/.test(t) ? t : ''
  }
}
class E {
  constructor(t, e, r, i, a, s) {
    var n = s ? (typeof s == 'string' ? E.parse(s) : s) : {}
    ;(this.fontFamily = a || n.fontFamily),
      (this.fontSize = i || n.fontSize),
      (this.fontStyle = t || n.fontStyle),
      (this.fontWeight = r || n.fontWeight),
      (this.fontVariant = e || n.fontVariant)
  }
  static parse() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '',
      e = arguments.length > 1 ? arguments[1] : void 0,
      r = '',
      i = '',
      a = '',
      s = '',
      n = '',
      h = H(t).trim().split(' '),
      u = { fontSize: !1, fontStyle: !1, fontWeight: !1, fontVariant: !1 }
    return (
      h.forEach(l => {
        switch (!0) {
          case !u.fontStyle && E.styles.includes(l):
            l !== 'inherit' && (r = l), (u.fontStyle = !0)
            break
          case !u.fontVariant && E.variants.includes(l):
            l !== 'inherit' && (i = l), (u.fontStyle = !0), (u.fontVariant = !0)
            break
          case !u.fontWeight && E.weights.includes(l):
            l !== 'inherit' && (a = l),
              (u.fontStyle = !0),
              (u.fontVariant = !0),
              (u.fontWeight = !0)
            break
          case !u.fontSize:
            l !== 'inherit' && ([s] = l.split('/')),
              (u.fontStyle = !0),
              (u.fontVariant = !0),
              (u.fontWeight = !0),
              (u.fontSize = !0)
            break
          default:
            l !== 'inherit' && (n += l)
        }
      }),
      new E(r, i, a, s, n, e)
    )
  }
  toString() {
    return [
      be(this.fontStyle),
      this.fontVariant,
      xe(this.fontWeight),
      this.fontSize,
      ye(this.fontFamily)
    ]
      .join(' ')
      .trim()
  }
}
E.styles = 'normal|italic|oblique|inherit'
E.variants = 'normal|small-caps|inherit'
E.weights = 'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit'
class B {
  constructor() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Number.NaN,
      e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.NaN,
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.NaN,
      i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Number.NaN
    ;(this.x1 = t),
      (this.y1 = e),
      (this.x2 = r),
      (this.y2 = i),
      this.addPoint(t, e),
      this.addPoint(r, i)
  }
  get x() {
    return this.x1
  }
  get y() {
    return this.y1
  }
  get width() {
    return this.x2 - this.x1
  }
  get height() {
    return this.y2 - this.y1
  }
  addPoint(t, e) {
    typeof t < 'u' &&
      ((isNaN(this.x1) || isNaN(this.x2)) && ((this.x1 = t), (this.x2 = t)),
      t < this.x1 && (this.x1 = t),
      t > this.x2 && (this.x2 = t)),
      typeof e < 'u' &&
        ((isNaN(this.y1) || isNaN(this.y2)) && ((this.y1 = e), (this.y2 = e)),
        e < this.y1 && (this.y1 = e),
        e > this.y2 && (this.y2 = e))
  }
  addX(t) {
    this.addPoint(t, null)
  }
  addY(t) {
    this.addPoint(null, t)
  }
  addBoundingBox(t) {
    if (!!t) {
      var { x1: e, y1: r, x2: i, y2: a } = t
      this.addPoint(e, r), this.addPoint(i, a)
    }
  }
  sumCubic(t, e, r, i, a) {
    return (
      Math.pow(1 - t, 3) * e +
      3 * Math.pow(1 - t, 2) * t * r +
      3 * (1 - t) * Math.pow(t, 2) * i +
      Math.pow(t, 3) * a
    )
  }
  bezierCurveAdd(t, e, r, i, a) {
    var s = 6 * e - 12 * r + 6 * i,
      n = -3 * e + 9 * r - 9 * i + 3 * a,
      h = 3 * r - 3 * e
    if (n === 0) {
      if (s === 0) return
      var u = -h / s
      0 < u &&
        u < 1 &&
        (t ? this.addX(this.sumCubic(u, e, r, i, a)) : this.addY(this.sumCubic(u, e, r, i, a)))
      return
    }
    var l = Math.pow(s, 2) - 4 * h * n
    if (!(l < 0)) {
      var g = (-s + Math.sqrt(l)) / (2 * n)
      0 < g &&
        g < 1 &&
        (t ? this.addX(this.sumCubic(g, e, r, i, a)) : this.addY(this.sumCubic(g, e, r, i, a)))
      var v = (-s - Math.sqrt(l)) / (2 * n)
      0 < v &&
        v < 1 &&
        (t ? this.addX(this.sumCubic(v, e, r, i, a)) : this.addY(this.sumCubic(v, e, r, i, a)))
    }
  }
  addBezierCurve(t, e, r, i, a, s, n, h) {
    this.addPoint(t, e),
      this.addPoint(n, h),
      this.bezierCurveAdd(!0, t, r, a, n),
      this.bezierCurveAdd(!1, e, i, s, h)
  }
  addQuadraticCurve(t, e, r, i, a, s) {
    var n = t + 0.6666666666666666 * (r - t),
      h = e + (2 / 3) * (i - e),
      u = n + (1 / 3) * (a - t),
      l = h + (1 / 3) * (s - e)
    this.addBezierCurve(t, e, n, u, h, l, a, s)
  }
  isPointInBox(t, e) {
    var { x1: r, y1: i, x2: a, y2: s } = this
    return r <= t && t <= a && i <= e && e <= s
  }
}
class b extends q {
  constructor(t) {
    super(t.replace(/([+\-.])\s+/gm, '$1').replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, '')),
      (this.control = null),
      (this.start = null),
      (this.current = null),
      (this.command = null),
      (this.commands = this.commands),
      (this.i = -1),
      (this.previousCommand = null),
      (this.points = []),
      (this.angles = [])
  }
  reset() {
    ;(this.i = -1),
      (this.command = null),
      (this.previousCommand = null),
      (this.start = new V(0, 0)),
      (this.control = new V(0, 0)),
      (this.current = new V(0, 0)),
      (this.points = []),
      (this.angles = [])
  }
  isEnd() {
    var { i: t, commands: e } = this
    return t >= e.length - 1
  }
  next() {
    var t = this.commands[++this.i]
    return (this.previousCommand = this.command), (this.command = t), t
  }
  getPoint() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'x',
      e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'y',
      r = new V(this.command[t], this.command[e])
    return this.makeAbsolute(r)
  }
  getAsControlPoint(t, e) {
    var r = this.getPoint(t, e)
    return (this.control = r), r
  }
  getAsCurrentPoint(t, e) {
    var r = this.getPoint(t, e)
    return (this.current = r), r
  }
  getReflectedControlPoint() {
    var t = this.previousCommand.type
    if (t !== q.CURVE_TO && t !== q.SMOOTH_CURVE_TO && t !== q.QUAD_TO && t !== q.SMOOTH_QUAD_TO)
      return this.current
    var {
        current: { x: e, y: r },
        control: { x: i, y: a }
      } = this,
      s = new V(2 * e - i, 2 * r - a)
    return s
  }
  makeAbsolute(t) {
    if (this.command.relative) {
      var { x: e, y: r } = this.current
      ;(t.x += e), (t.y += r)
    }
    return t
  }
  addMarker(t, e, r) {
    var { points: i, angles: a } = this
    r && a.length > 0 && !a[a.length - 1] && (a[a.length - 1] = i[i.length - 1].angleTo(r)),
      this.addMarkerAngle(t, e ? e.angleTo(t) : null)
  }
  addMarkerAngle(t, e) {
    this.points.push(t), this.angles.push(e)
  }
  getMarkerPoints() {
    return this.points
  }
  getMarkerAngles() {
    for (var { angles: t } = this, e = t.length, r = 0; r < e; r++)
      if (!t[r]) {
        for (var i = r + 1; i < e; i++)
          if (t[i]) {
            t[r] = t[i]
            break
          }
      }
    return t
  }
}
class j extends P {
  constructor() {
    super(...arguments), (this.modifiedEmSizeStack = !1)
  }
  calculateOpacity() {
    for (var t = 1, e = this; e; ) {
      var r = e.getStyle('opacity', !1, !0)
      r.hasValue(!0) && (t *= r.getNumber()), (e = e.parent)
    }
    return t
  }
  setContext(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    if (!e) {
      var r = this.getStyle('fill'),
        i = this.getStyle('fill-opacity'),
        a = this.getStyle('stroke'),
        s = this.getStyle('stroke-opacity')
      if (r.isUrlDefinition()) {
        var n = r.getFillStyleDefinition(this, i)
        n && (t.fillStyle = n)
      } else if (r.hasValue()) {
        r.getString() === 'currentColor' && r.setValue(this.getStyle('color').getColor())
        var h = r.getColor()
        h !== 'inherit' && (t.fillStyle = h === 'none' ? 'rgba(0,0,0,0)' : h)
      }
      if (i.hasValue()) {
        var u = new m(this.document, 'fill', t.fillStyle).addOpacity(i).getColor()
        t.fillStyle = u
      }
      if (a.isUrlDefinition()) {
        var l = a.getFillStyleDefinition(this, s)
        l && (t.strokeStyle = l)
      } else if (a.hasValue()) {
        a.getString() === 'currentColor' && a.setValue(this.getStyle('color').getColor())
        var g = a.getString()
        g !== 'inherit' && (t.strokeStyle = g === 'none' ? 'rgba(0,0,0,0)' : g)
      }
      if (s.hasValue()) {
        var v = new m(this.document, 'stroke', t.strokeStyle).addOpacity(s).getString()
        t.strokeStyle = v
      }
      var f = this.getStyle('stroke-width')
      if (f.hasValue()) {
        var d = f.getPixels()
        t.lineWidth = d || Y
      }
      var p = this.getStyle('stroke-linecap'),
        c = this.getStyle('stroke-linejoin'),
        y = this.getStyle('stroke-miterlimit'),
        x = this.getStyle('stroke-dasharray'),
        w = this.getStyle('stroke-dashoffset')
      if (
        (p.hasValue() && (t.lineCap = p.getString()),
        c.hasValue() && (t.lineJoin = c.getString()),
        y.hasValue() && (t.miterLimit = y.getNumber()),
        x.hasValue() && x.getString() !== 'none')
      ) {
        var A = O(x.getString())
        typeof t.setLineDash < 'u'
          ? t.setLineDash(A)
          : typeof t.webkitLineDash < 'u'
          ? (t.webkitLineDash = A)
          : typeof t.mozDash < 'u' && !(A.length === 1 && A[0] === 0) && (t.mozDash = A)
        var M = w.getPixels()
        typeof t.lineDashOffset < 'u'
          ? (t.lineDashOffset = M)
          : typeof t.webkitLineDashOffset < 'u'
          ? (t.webkitLineDashOffset = M)
          : typeof t.mozDashOffset < 'u' && (t.mozDashOffset = M)
      }
    }
    if (((this.modifiedEmSizeStack = !1), typeof t.font < 'u')) {
      var k = this.getStyle('font'),
        C = this.getStyle('font-style'),
        N = this.getStyle('font-variant'),
        _ = this.getStyle('font-weight'),
        D = this.getStyle('font-size'),
        $ = this.getStyle('font-family'),
        z = new E(
          C.getString(),
          N.getString(),
          _.getString(),
          D.hasValue() ? ''.concat(D.getPixels(!0), 'px') : '',
          $.getString(),
          E.parse(k.getString(), t.font)
        )
      C.setValue(z.fontStyle),
        N.setValue(z.fontVariant),
        _.setValue(z.fontWeight),
        D.setValue(z.fontSize),
        $.setValue(z.fontFamily),
        (t.font = z.toString()),
        D.isPixels() && ((this.document.emSize = D.getPixels()), (this.modifiedEmSizeStack = !0))
    }
    e || (this.applyEffects(t), (t.globalAlpha = this.calculateOpacity()))
  }
  clearContext(t) {
    super.clearContext(t), this.modifiedEmSizeStack && this.document.popEmSize()
  }
}
class S extends j {
  constructor(t, e, r) {
    super(t, e, r),
      (this.type = 'path'),
      (this.pathParser = null),
      (this.pathParser = new b(this.getAttribute('d').getString()))
  }
  path(t) {
    var { pathParser: e } = this,
      r = new B()
    for (e.reset(), t && t.beginPath(); !e.isEnd(); )
      switch (e.next().type) {
        case b.MOVE_TO:
          this.pathM(t, r)
          break
        case b.LINE_TO:
          this.pathL(t, r)
          break
        case b.HORIZ_LINE_TO:
          this.pathH(t, r)
          break
        case b.VERT_LINE_TO:
          this.pathV(t, r)
          break
        case b.CURVE_TO:
          this.pathC(t, r)
          break
        case b.SMOOTH_CURVE_TO:
          this.pathS(t, r)
          break
        case b.QUAD_TO:
          this.pathQ(t, r)
          break
        case b.SMOOTH_QUAD_TO:
          this.pathT(t, r)
          break
        case b.ARC:
          this.pathA(t, r)
          break
        case b.CLOSE_PATH:
          this.pathZ(t, r)
          break
      }
    return r
  }
  getBoundingBox(t) {
    return this.path()
  }
  getMarkers() {
    var { pathParser: t } = this,
      e = t.getMarkerPoints(),
      r = t.getMarkerAngles(),
      i = e.map((a, s) => [a, r[s]])
    return i
  }
  renderChildren(t) {
    this.path(t), this.document.screen.mouse.checkPath(this, t)
    var e = this.getStyle('fill-rule')
    t.fillStyle !== '' && (e.getString('inherit') !== 'inherit' ? t.fill(e.getString()) : t.fill()),
      t.strokeStyle !== '' &&
        (this.getAttribute('vector-effect').getString() === 'non-scaling-stroke'
          ? (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.stroke(), t.restore())
          : t.stroke())
    var r = this.getMarkers()
    if (r) {
      var i = r.length - 1,
        a = this.getStyle('marker-start'),
        s = this.getStyle('marker-mid'),
        n = this.getStyle('marker-end')
      if (a.isUrlDefinition()) {
        var h = a.getDefinition(),
          [u, l] = r[0]
        h.render(t, u, l)
      }
      if (s.isUrlDefinition())
        for (var g = s.getDefinition(), v = 1; v < i; v++) {
          var [f, d] = r[v]
          g.render(t, f, d)
        }
      if (n.isUrlDefinition()) {
        var p = n.getDefinition(),
          [c, y] = r[i]
        p.render(t, c, y)
      }
    }
  }
  static pathM(t) {
    var e = t.getAsCurrentPoint()
    return (t.start = t.current), { point: e }
  }
  pathM(t, e) {
    var { pathParser: r } = this,
      { point: i } = S.pathM(r),
      { x: a, y: s } = i
    r.addMarker(i), e.addPoint(a, s), t && t.moveTo(a, s)
  }
  static pathL(t) {
    var { current: e } = t,
      r = t.getAsCurrentPoint()
    return { current: e, point: r }
  }
  pathL(t, e) {
    var { pathParser: r } = this,
      { current: i, point: a } = S.pathL(r),
      { x: s, y: n } = a
    r.addMarker(a, i), e.addPoint(s, n), t && t.lineTo(s, n)
  }
  static pathH(t) {
    var { current: e, command: r } = t,
      i = new V((r.relative ? e.x : 0) + r.x, e.y)
    return (t.current = i), { current: e, point: i }
  }
  pathH(t, e) {
    var { pathParser: r } = this,
      { current: i, point: a } = S.pathH(r),
      { x: s, y: n } = a
    r.addMarker(a, i), e.addPoint(s, n), t && t.lineTo(s, n)
  }
  static pathV(t) {
    var { current: e, command: r } = t,
      i = new V(e.x, (r.relative ? e.y : 0) + r.y)
    return (t.current = i), { current: e, point: i }
  }
  pathV(t, e) {
    var { pathParser: r } = this,
      { current: i, point: a } = S.pathV(r),
      { x: s, y: n } = a
    r.addMarker(a, i), e.addPoint(s, n), t && t.lineTo(s, n)
  }
  static pathC(t) {
    var { current: e } = t,
      r = t.getPoint('x1', 'y1'),
      i = t.getAsControlPoint('x2', 'y2'),
      a = t.getAsCurrentPoint()
    return { current: e, point: r, controlPoint: i, currentPoint: a }
  }
  pathC(t, e) {
    var { pathParser: r } = this,
      { current: i, point: a, controlPoint: s, currentPoint: n } = S.pathC(r)
    r.addMarker(n, s, a),
      e.addBezierCurve(i.x, i.y, a.x, a.y, s.x, s.y, n.x, n.y),
      t && t.bezierCurveTo(a.x, a.y, s.x, s.y, n.x, n.y)
  }
  static pathS(t) {
    var { current: e } = t,
      r = t.getReflectedControlPoint(),
      i = t.getAsControlPoint('x2', 'y2'),
      a = t.getAsCurrentPoint()
    return { current: e, point: r, controlPoint: i, currentPoint: a }
  }
  pathS(t, e) {
    var { pathParser: r } = this,
      { current: i, point: a, controlPoint: s, currentPoint: n } = S.pathS(r)
    r.addMarker(n, s, a),
      e.addBezierCurve(i.x, i.y, a.x, a.y, s.x, s.y, n.x, n.y),
      t && t.bezierCurveTo(a.x, a.y, s.x, s.y, n.x, n.y)
  }
  static pathQ(t) {
    var { current: e } = t,
      r = t.getAsControlPoint('x1', 'y1'),
      i = t.getAsCurrentPoint()
    return { current: e, controlPoint: r, currentPoint: i }
  }
  pathQ(t, e) {
    var { pathParser: r } = this,
      { current: i, controlPoint: a, currentPoint: s } = S.pathQ(r)
    r.addMarker(s, a, a),
      e.addQuadraticCurve(i.x, i.y, a.x, a.y, s.x, s.y),
      t && t.quadraticCurveTo(a.x, a.y, s.x, s.y)
  }
  static pathT(t) {
    var { current: e } = t,
      r = t.getReflectedControlPoint()
    t.control = r
    var i = t.getAsCurrentPoint()
    return { current: e, controlPoint: r, currentPoint: i }
  }
  pathT(t, e) {
    var { pathParser: r } = this,
      { current: i, controlPoint: a, currentPoint: s } = S.pathT(r)
    r.addMarker(s, a, a),
      e.addQuadraticCurve(i.x, i.y, a.x, a.y, s.x, s.y),
      t && t.quadraticCurveTo(a.x, a.y, s.x, s.y)
  }
  static pathA(t) {
    var { current: e, command: r } = t,
      { rX: i, rY: a, xRot: s, lArcFlag: n, sweepFlag: h } = r,
      u = s * (Math.PI / 180),
      l = t.getAsCurrentPoint(),
      g = new V(
        (Math.cos(u) * (e.x - l.x)) / 2 + (Math.sin(u) * (e.y - l.y)) / 2,
        (-Math.sin(u) * (e.x - l.x)) / 2 + (Math.cos(u) * (e.y - l.y)) / 2
      ),
      v = Math.pow(g.x, 2) / Math.pow(i, 2) + Math.pow(g.y, 2) / Math.pow(a, 2)
    v > 1 && ((i *= Math.sqrt(v)), (a *= Math.sqrt(v)))
    var f =
      (n === h ? -1 : 1) *
      Math.sqrt(
        (Math.pow(i, 2) * Math.pow(a, 2) -
          Math.pow(i, 2) * Math.pow(g.y, 2) -
          Math.pow(a, 2) * Math.pow(g.x, 2)) /
          (Math.pow(i, 2) * Math.pow(g.y, 2) + Math.pow(a, 2) * Math.pow(g.x, 2))
      )
    isNaN(f) && (f = 0)
    var d = new V((f * i * g.y) / a, (f * -a * g.x) / i),
      p = new V(
        (e.x + l.x) / 2 + Math.cos(u) * d.x - Math.sin(u) * d.y,
        (e.y + l.y) / 2 + Math.sin(u) * d.x + Math.cos(u) * d.y
      ),
      c = xt([1, 0], [(g.x - d.x) / i, (g.y - d.y) / a]),
      y = [(g.x - d.x) / i, (g.y - d.y) / a],
      x = [(-g.x - d.x) / i, (-g.y - d.y) / a],
      w = xt(y, x)
    return (
      ht(y, x) <= -1 && (w = Math.PI),
      ht(y, x) >= 1 && (w = 0),
      { currentPoint: l, rX: i, rY: a, sweepFlag: h, xAxisRotation: u, centp: p, a1: c, ad: w }
    )
  }
  pathA(t, e) {
    var { pathParser: r } = this,
      {
        currentPoint: i,
        rX: a,
        rY: s,
        sweepFlag: n,
        xAxisRotation: h,
        centp: u,
        a1: l,
        ad: g
      } = S.pathA(r),
      v = 1 - n ? 1 : -1,
      f = l + v * (g / 2),
      d = new V(u.x + a * Math.cos(f), u.y + s * Math.sin(f))
    if (
      (r.addMarkerAngle(d, f - (v * Math.PI) / 2),
      r.addMarkerAngle(i, f - v * Math.PI),
      e.addPoint(i.x, i.y),
      t && !isNaN(l) && !isNaN(g))
    ) {
      var p = a > s ? a : s,
        c = a > s ? 1 : a / s,
        y = a > s ? s / a : 1
      t.translate(u.x, u.y),
        t.rotate(h),
        t.scale(c, y),
        t.arc(0, 0, p, l, l + g, Boolean(1 - n)),
        t.scale(1 / c, 1 / y),
        t.rotate(-h),
        t.translate(-u.x, -u.y)
    }
  }
  static pathZ(t) {
    t.current = t.start
  }
  pathZ(t, e) {
    S.pathZ(this.pathParser), t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath()
  }
}
class Rt extends S {
  constructor(t, e, r) {
    super(t, e, r),
      (this.type = 'glyph'),
      (this.horizAdvX = this.getAttribute('horiz-adv-x').getNumber()),
      (this.unicode = this.getAttribute('unicode').getString()),
      (this.arabicForm = this.getAttribute('arabic-form').getString())
  }
}
class F extends j {
  constructor(t, e, r) {
    super(t, e, new.target === F ? !0 : r),
      (this.type = 'text'),
      (this.x = 0),
      (this.y = 0),
      (this.measureCache = -1)
  }
  setContext(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    super.setContext(t, e)
    var r =
      this.getStyle('dominant-baseline').getTextBaseline() ||
      this.getStyle('alignment-baseline').getTextBaseline()
    r && (t.textBaseline = r)
  }
  initializeCoordinates() {
    ;(this.x = 0),
      (this.y = 0),
      (this.leafTexts = []),
      (this.textChunkStart = 0),
      (this.minX = Number.POSITIVE_INFINITY),
      (this.maxX = Number.NEGATIVE_INFINITY)
  }
  getBoundingBox(t) {
    if (this.type !== 'text') return this.getTElementBoundingBox(t)
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(t)
    var e = null
    return (
      this.children.forEach((r, i) => {
        var a = this.getChildBoundingBox(t, this, this, i)
        e ? e.addBoundingBox(a) : (e = a)
      }),
      e
    )
  }
  getFontSize() {
    var { document: t, parent: e } = this,
      r = E.parse(t.ctx.font).fontSize,
      i = e.getStyle('font-size').getNumber(r)
    return i
  }
  getTElementBoundingBox(t) {
    var e = this.getFontSize()
    return new B(this.x, this.y - e, this.x + this.measureText(t), this.y)
  }
  getGlyph(t, e, r) {
    var i = e[r],
      a = null
    if (t.isArabic) {
      var s = e.length,
        n = e[r - 1],
        h = e[r + 1],
        u = 'isolated'
      if (
        ((r === 0 || n === ' ') && r < s - 1 && h !== ' ' && (u = 'terminal'),
        r > 0 && n !== ' ' && r < s - 1 && h !== ' ' && (u = 'medial'),
        r > 0 && n !== ' ' && (r === s - 1 || h === ' ') && (u = 'initial'),
        typeof t.glyphs[i] < 'u')
      ) {
        var l = t.glyphs[i]
        a = l instanceof Rt ? l : l[u]
      }
    } else a = t.glyphs[i]
    return a || (a = t.missingGlyph), a
  }
  getText() {
    return ''
  }
  getTextFromNode(t) {
    var e = t || this.node,
      r = Array.from(e.parentNode.childNodes),
      i = r.indexOf(e),
      a = r.length - 1,
      s = H(e.textContent || '')
    return i === 0 && (s = Ht(s)), i === a && (s = $t(s)), s
  }
  renderChildren(t) {
    if (this.type !== 'text') {
      this.renderTElementChildren(t)
      return
    }
    this.initializeCoordinates(),
      this.adjustChildCoordinatesRecursive(t),
      this.children.forEach((r, i) => {
        this.renderChild(t, this, this, i)
      })
    var { mouse: e } = this.document.screen
    e.isWorking() && e.checkBoundingBox(this, this.getBoundingBox(t))
  }
  renderTElementChildren(t) {
    var { document: e, parent: r } = this,
      i = this.getText(),
      a = r.getStyle('font-family').getDefinition()
    if (a) {
      for (
        var { unitsPerEm: s } = a.fontFace,
          n = E.parse(e.ctx.font),
          h = r.getStyle('font-size').getNumber(n.fontSize),
          u = r.getStyle('font-style').getString(n.fontStyle),
          l = h / s,
          g = a.isRTL ? i.split('').reverse().join('') : i,
          v = O(r.getAttribute('dx').getString()),
          f = g.length,
          d = 0;
        d < f;
        d++
      ) {
        var p = this.getGlyph(a, g, d)
        t.translate(this.x, this.y), t.scale(l, -l)
        var c = t.lineWidth
        ;(t.lineWidth = (t.lineWidth * s) / h),
          u === 'italic' && t.transform(1, 0, 0.4, 1, 0, 0),
          p.render(t),
          u === 'italic' && t.transform(1, 0, -0.4, 1, 0, 0),
          (t.lineWidth = c),
          t.scale(1 / l, -1 / l),
          t.translate(-this.x, -this.y),
          (this.x += (h * (p.horizAdvX || a.horizAdvX)) / s),
          typeof v[d] < 'u' && !isNaN(v[d]) && (this.x += v[d])
      }
      return
    }
    var { x: y, y: x } = this
    t.fillStyle && t.fillText(i, y, x), t.strokeStyle && t.strokeText(i, y, x)
  }
  applyAnchoring() {
    if (!(this.textChunkStart >= this.leafTexts.length)) {
      var t = this.leafTexts[this.textChunkStart],
        e = t.getStyle('text-anchor').getString('start'),
        r = !1,
        i = 0
      ;(e === 'start' && !r) || (e === 'end' && r)
        ? (i = t.x - this.minX)
        : (e === 'end' && !r) || (e === 'start' && r)
        ? (i = t.x - this.maxX)
        : (i = t.x - (this.minX + this.maxX) / 2)
      for (var a = this.textChunkStart; a < this.leafTexts.length; a++) this.leafTexts[a].x += i
      ;(this.minX = Number.POSITIVE_INFINITY),
        (this.maxX = Number.NEGATIVE_INFINITY),
        (this.textChunkStart = this.leafTexts.length)
    }
  }
  adjustChildCoordinatesRecursive(t) {
    this.children.forEach((e, r) => {
      this.adjustChildCoordinatesRecursiveCore(t, this, this, r)
    }),
      this.applyAnchoring()
  }
  adjustChildCoordinatesRecursiveCore(t, e, r, i) {
    var a = r.children[i]
    a.children.length > 0
      ? a.children.forEach((s, n) => {
          e.adjustChildCoordinatesRecursiveCore(t, e, a, n)
        })
      : this.adjustChildCoordinates(t, e, r, i)
  }
  adjustChildCoordinates(t, e, r, i) {
    var a = r.children[i]
    if (typeof a.measureText != 'function') return a
    t.save(), a.setContext(t, !0)
    var s = a.getAttribute('x'),
      n = a.getAttribute('y'),
      h = a.getAttribute('dx'),
      u = a.getAttribute('dy'),
      l = a.getStyle('font-family').getDefinition(),
      g = Boolean(l) && l.isRTL
    i === 0 &&
      (s.hasValue() || s.setValue(a.getInheritedAttribute('x')),
      n.hasValue() || n.setValue(a.getInheritedAttribute('y')),
      h.hasValue() || h.setValue(a.getInheritedAttribute('dx')),
      u.hasValue() || u.setValue(a.getInheritedAttribute('dy')))
    var v = a.measureText(t)
    return (
      g && (e.x -= v),
      s.hasValue()
        ? (e.applyAnchoring(), (a.x = s.getPixels('x')), h.hasValue() && (a.x += h.getPixels('x')))
        : (h.hasValue() && (e.x += h.getPixels('x')), (a.x = e.x)),
      (e.x = a.x),
      g || (e.x += v),
      n.hasValue()
        ? ((a.y = n.getPixels('y')), u.hasValue() && (a.y += u.getPixels('y')))
        : (u.hasValue() && (e.y += u.getPixels('y')), (a.y = e.y)),
      (e.y = a.y),
      e.leafTexts.push(a),
      (e.minX = Math.min(e.minX, a.x, a.x + v)),
      (e.maxX = Math.max(e.maxX, a.x, a.x + v)),
      a.clearContext(t),
      t.restore(),
      a
    )
  }
  getChildBoundingBox(t, e, r, i) {
    var a = r.children[i]
    if (typeof a.getBoundingBox != 'function') return null
    var s = a.getBoundingBox(t)
    return s
      ? (a.children.forEach((n, h) => {
          var u = e.getChildBoundingBox(t, e, a, h)
          s.addBoundingBox(u)
        }),
        s)
      : null
  }
  renderChild(t, e, r, i) {
    var a = r.children[i]
    a.render(t),
      a.children.forEach((s, n) => {
        e.renderChild(t, e, a, n)
      })
  }
  measureText(t) {
    var { measureCache: e } = this
    if (~e) return e
    var r = this.getText(),
      i = this.measureTargetText(t, r)
    return (this.measureCache = i), i
  }
  measureTargetText(t, e) {
    if (!e.length) return 0
    var { parent: r } = this,
      i = r.getStyle('font-family').getDefinition()
    if (i) {
      for (
        var a = this.getFontSize(),
          s = i.isRTL ? e.split('').reverse().join('') : e,
          n = O(r.getAttribute('dx').getString()),
          h = s.length,
          u = 0,
          l = 0;
        l < h;
        l++
      ) {
        var g = this.getGlyph(i, s, l)
        ;(u += ((g.horizAdvX || i.horizAdvX) * a) / i.fontFace.unitsPerEm),
          typeof n[l] < 'u' && !isNaN(n[l]) && (u += n[l])
      }
      return u
    }
    if (!t.measureText) return e.length * 10
    t.save(), this.setContext(t, !0)
    var { width: v } = t.measureText(e)
    return this.clearContext(t), t.restore(), v
  }
  getInheritedAttribute(t) {
    for (var e = this; e instanceof F && e.isFirstChild(); ) {
      var r = e.parent.getAttribute(t)
      if (r.hasValue(!0)) return r.getValue('0')
      e = e.parent
    }
    return null
  }
}
class et extends F {
  constructor(t, e, r) {
    super(t, e, new.target === et ? !0 : r),
      (this.type = 'tspan'),
      (this.text = this.children.length > 0 ? '' : this.getTextFromNode())
  }
  getText() {
    return this.text
  }
}
class we extends et {
  constructor() {
    super(...arguments), (this.type = 'textNode')
  }
}
class Q extends j {
  constructor() {
    super(...arguments), (this.type = 'svg'), (this.root = !1)
  }
  setContext(t) {
    var e,
      { document: r } = this,
      { screen: i, window: a } = r,
      s = t.canvas
    if (
      (i.setDefaults(t), s.style && typeof t.font < 'u' && a && typeof a.getComputedStyle < 'u')
    ) {
      t.font = a.getComputedStyle(s).getPropertyValue('font')
      var n = new m(r, 'fontSize', E.parse(t.font).fontSize)
      n.hasValue() && ((r.rootEmSize = n.getPixels('y')), (r.emSize = r.rootEmSize))
    }
    this.getAttribute('x').hasValue() || this.getAttribute('x', !0).setValue(0),
      this.getAttribute('y').hasValue() || this.getAttribute('y', !0).setValue(0)
    var { width: h, height: u } = i.viewPort
    this.getStyle('width').hasValue() || this.getStyle('width', !0).setValue('100%'),
      this.getStyle('height').hasValue() || this.getStyle('height', !0).setValue('100%'),
      this.getStyle('color').hasValue() || this.getStyle('color', !0).setValue('black')
    var l = this.getAttribute('refX'),
      g = this.getAttribute('refY'),
      v = this.getAttribute('viewBox'),
      f = v.hasValue() ? O(v.getString()) : null,
      d = !this.root && this.getStyle('overflow').getValue('hidden') !== 'visible',
      p = 0,
      c = 0,
      y = 0,
      x = 0
    f && ((p = f[0]), (c = f[1])),
      this.root ||
        ((h = this.getStyle('width').getPixels('x')),
        (u = this.getStyle('height').getPixels('y')),
        this.type === 'marker' && ((y = p), (x = c), (p = 0), (c = 0))),
      i.viewPort.setCurrent(h, u),
      this.node &&
        (!this.parent ||
          ((e = this.node.parentNode) === null || e === void 0 ? void 0 : e.nodeName) ===
            'foreignObject') &&
        this.getStyle('transform', !1, !0).hasValue() &&
        !this.getStyle('transform-origin', !1, !0).hasValue() &&
        this.getStyle('transform-origin', !0, !0).setValue('50% 50%'),
      super.setContext(t),
      t.translate(this.getAttribute('x').getPixels('x'), this.getAttribute('y').getPixels('y')),
      f && ((h = f[2]), (u = f[3])),
      r.setViewBox({
        ctx: t,
        aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
        width: i.viewPort.width,
        desiredWidth: h,
        height: i.viewPort.height,
        desiredHeight: u,
        minX: p,
        minY: c,
        refX: l.getValue(),
        refY: g.getValue(),
        clip: d,
        clipX: y,
        clipY: x
      }),
      f && (i.viewPort.removeCurrent(), i.viewPort.setCurrent(h, u))
  }
  clearContext(t) {
    super.clearContext(t), this.document.screen.viewPort.removeCurrent()
  }
  resize(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
      i = this.getAttribute('width', !0),
      a = this.getAttribute('height', !0),
      s = this.getAttribute('viewBox'),
      n = this.getAttribute('style'),
      h = i.getNumber(0),
      u = a.getNumber(0)
    if (r)
      if (typeof r == 'string') this.getAttribute('preserveAspectRatio', !0).setValue(r)
      else {
        var l = this.getAttribute('preserveAspectRatio')
        l.hasValue() && l.setValue(l.getString().replace(/^\s*(\S.*\S)\s*$/, '$1'))
      }
    if (
      (i.setValue(t),
      a.setValue(e),
      s.hasValue() || s.setValue('0 0 '.concat(h || t, ' ').concat(u || e)),
      n.hasValue())
    ) {
      var g = this.getStyle('width'),
        v = this.getStyle('height')
      g.hasValue() && g.setValue(''.concat(t, 'px')), v.hasValue() && v.setValue(''.concat(e, 'px'))
    }
  }
}
class It extends S {
  constructor() {
    super(...arguments), (this.type = 'rect')
  }
  path(t) {
    var e = this.getAttribute('x').getPixels('x'),
      r = this.getAttribute('y').getPixels('y'),
      i = this.getStyle('width', !1, !0).getPixels('x'),
      a = this.getStyle('height', !1, !0).getPixels('y'),
      s = this.getAttribute('rx'),
      n = this.getAttribute('ry'),
      h = s.getPixels('x'),
      u = n.getPixels('y')
    if (
      (s.hasValue() && !n.hasValue() && (u = h),
      n.hasValue() && !s.hasValue() && (h = u),
      (h = Math.min(h, i / 2)),
      (u = Math.min(u, a / 2)),
      t)
    ) {
      var l = 4 * ((Math.sqrt(2) - 1) / 3)
      t.beginPath(),
        a > 0 &&
          i > 0 &&
          (t.moveTo(e + h, r),
          t.lineTo(e + i - h, r),
          t.bezierCurveTo(e + i - h + l * h, r, e + i, r + u - l * u, e + i, r + u),
          t.lineTo(e + i, r + a - u),
          t.bezierCurveTo(e + i, r + a - u + l * u, e + i - h + l * h, r + a, e + i - h, r + a),
          t.lineTo(e + h, r + a),
          t.bezierCurveTo(e + h - l * h, r + a, e, r + a - u + l * u, e, r + a - u),
          t.lineTo(e, r + u),
          t.bezierCurveTo(e, r + u - l * u, e + h - l * h, r, e + h, r),
          t.closePath())
    }
    return new B(e, r, e + i, r + a)
  }
  getMarkers() {
    return null
  }
}
class Se extends S {
  constructor() {
    super(...arguments), (this.type = 'circle')
  }
  path(t) {
    var e = this.getAttribute('cx').getPixels('x'),
      r = this.getAttribute('cy').getPixels('y'),
      i = this.getAttribute('r').getPixels()
    return (
      t && i > 0 && (t.beginPath(), t.arc(e, r, i, 0, Math.PI * 2, !1), t.closePath()),
      new B(e - i, r - i, e + i, r + i)
    )
  }
  getMarkers() {
    return null
  }
}
class Ae extends S {
  constructor() {
    super(...arguments), (this.type = 'ellipse')
  }
  path(t) {
    var e = 4 * ((Math.sqrt(2) - 1) / 3),
      r = this.getAttribute('rx').getPixels('x'),
      i = this.getAttribute('ry').getPixels('y'),
      a = this.getAttribute('cx').getPixels('x'),
      s = this.getAttribute('cy').getPixels('y')
    return (
      t &&
        r > 0 &&
        i > 0 &&
        (t.beginPath(),
        t.moveTo(a + r, s),
        t.bezierCurveTo(a + r, s + e * i, a + e * r, s + i, a, s + i),
        t.bezierCurveTo(a - e * r, s + i, a - r, s + e * i, a - r, s),
        t.bezierCurveTo(a - r, s - e * i, a - e * r, s - i, a, s - i),
        t.bezierCurveTo(a + e * r, s - i, a + r, s - e * i, a + r, s),
        t.closePath()),
      new B(a - r, s - i, a + r, s + i)
    )
  }
  getMarkers() {
    return null
  }
}
class Pe extends S {
  constructor() {
    super(...arguments), (this.type = 'line')
  }
  getPoints() {
    return [
      new V(this.getAttribute('x1').getPixels('x'), this.getAttribute('y1').getPixels('y')),
      new V(this.getAttribute('x2').getPixels('x'), this.getAttribute('y2').getPixels('y'))
    ]
  }
  path(t) {
    var [{ x: e, y: r }, { x: i, y: a }] = this.getPoints()
    return t && (t.beginPath(), t.moveTo(e, r), t.lineTo(i, a)), new B(e, r, i, a)
  }
  getMarkers() {
    var [t, e] = this.getPoints(),
      r = t.angleTo(e)
    return [
      [t, r],
      [e, r]
    ]
  }
}
class Ft extends S {
  constructor(t, e, r) {
    super(t, e, r),
      (this.type = 'polyline'),
      (this.points = []),
      (this.points = V.parsePath(this.getAttribute('points').getString()))
  }
  path(t) {
    var { points: e } = this,
      [{ x: r, y: i }] = e,
      a = new B(r, i)
    return (
      t && (t.beginPath(), t.moveTo(r, i)),
      e.forEach(s => {
        var { x: n, y: h } = s
        a.addPoint(n, h), t && t.lineTo(n, h)
      }),
      a
    )
  }
  getMarkers() {
    var { points: t } = this,
      e = t.length - 1,
      r = []
    return (
      t.forEach((i, a) => {
        a !== e && r.push([i, i.angleTo(t[a + 1])])
      }),
      r.length > 0 && r.push([t[t.length - 1], r[r.length - 1][1]]),
      r
    )
  }
}
class Ce extends Ft {
  constructor() {
    super(...arguments), (this.type = 'polygon')
  }
  path(t) {
    var e = super.path(t),
      [{ x: r, y: i }] = this.points
    return t && (t.lineTo(r, i), t.closePath()), e
  }
}
class Ve extends P {
  constructor() {
    super(...arguments), (this.type = 'pattern')
  }
  createPattern(t, e, r) {
    var i = this.getStyle('width').getPixels('x', !0),
      a = this.getStyle('height').getPixels('y', !0),
      s = new Q(this.document, null)
    ;(s.attributes.viewBox = new m(
      this.document,
      'viewBox',
      this.getAttribute('viewBox').getValue()
    )),
      (s.attributes.width = new m(this.document, 'width', ''.concat(i, 'px'))),
      (s.attributes.height = new m(this.document, 'height', ''.concat(a, 'px'))),
      (s.attributes.transform = new m(
        this.document,
        'transform',
        this.getAttribute('patternTransform').getValue()
      )),
      (s.children = this.children)
    var n = this.document.createCanvas(i, a),
      h = n.getContext('2d'),
      u = this.getAttribute('x'),
      l = this.getAttribute('y')
    u.hasValue() && l.hasValue() && h.translate(u.getPixels('x', !0), l.getPixels('y', !0)),
      r.hasValue()
        ? (this.styles['fill-opacity'] = r)
        : Reflect.deleteProperty(this.styles, 'fill-opacity')
    for (var g = -1; g <= 1; g++)
      for (var v = -1; v <= 1; v++)
        h.save(),
          (s.attributes.x = new m(this.document, 'x', g * n.width)),
          (s.attributes.y = new m(this.document, 'y', v * n.height)),
          s.render(h),
          h.restore()
    var f = t.createPattern(n, 'repeat')
    return f
  }
}
class Te extends P {
  constructor() {
    super(...arguments), (this.type = 'marker')
  }
  render(t, e, r) {
    if (!!e) {
      var { x: i, y: a } = e,
        s = this.getAttribute('orient').getString('auto'),
        n = this.getAttribute('markerUnits').getString('strokeWidth')
      t.translate(i, a),
        s === 'auto' && t.rotate(r),
        n === 'strokeWidth' && t.scale(t.lineWidth, t.lineWidth),
        t.save()
      var h = new Q(this.document, null)
      ;(h.type = this.type),
        (h.attributes.viewBox = new m(
          this.document,
          'viewBox',
          this.getAttribute('viewBox').getValue()
        )),
        (h.attributes.refX = new m(this.document, 'refX', this.getAttribute('refX').getValue())),
        (h.attributes.refY = new m(this.document, 'refY', this.getAttribute('refY').getValue())),
        (h.attributes.width = new m(
          this.document,
          'width',
          this.getAttribute('markerWidth').getValue()
        )),
        (h.attributes.height = new m(
          this.document,
          'height',
          this.getAttribute('markerHeight').getValue()
        )),
        (h.attributes.overflow = new m(
          this.document,
          'overflow',
          this.getAttribute('overflow').getValue()
        )),
        (h.attributes.fill = new m(
          this.document,
          'fill',
          this.getAttribute('fill').getColor('black')
        )),
        (h.attributes.stroke = new m(
          this.document,
          'stroke',
          this.getAttribute('stroke').getValue('none')
        )),
        (h.children = this.children),
        h.render(t),
        t.restore(),
        n === 'strokeWidth' && t.scale(1 / t.lineWidth, 1 / t.lineWidth),
        s === 'auto' && t.rotate(-r),
        t.translate(-i, -a)
    }
  }
}
class Me extends P {
  constructor() {
    super(...arguments), (this.type = 'defs')
  }
  render() {}
}
class lt extends j {
  constructor() {
    super(...arguments), (this.type = 'g')
  }
  getBoundingBox(t) {
    var e = new B()
    return (
      this.children.forEach(r => {
        e.addBoundingBox(r.getBoundingBox(t))
      }),
      e
    )
  }
}
class _t extends P {
  constructor(t, e, r) {
    super(t, e, r), (this.attributesToInherit = ['gradientUnits']), (this.stops = [])
    var { stops: i, children: a } = this
    a.forEach(s => {
      s.type === 'stop' && i.push(s)
    })
  }
  getGradientUnits() {
    return this.getAttribute('gradientUnits').getString('objectBoundingBox')
  }
  createGradient(t, e, r) {
    var i = this
    this.getHrefAttribute().hasValue() &&
      ((i = this.getHrefAttribute().getDefinition()), this.inheritStopContainer(i))
    var { stops: a } = i,
      s = this.getGradient(t, e)
    if (!s) return this.addParentOpacity(r, a[a.length - 1].color)
    if (
      (a.forEach(c => {
        s.addColorStop(c.offset, this.addParentOpacity(r, c.color))
      }),
      this.getAttribute('gradientTransform').hasValue())
    ) {
      var { document: n } = this,
        { MAX_VIRTUAL_PIXELS: h, viewPort: u } = n.screen,
        [l] = u.viewPorts,
        g = new It(n, null)
      ;(g.attributes.x = new m(n, 'x', -h / 3)),
        (g.attributes.y = new m(n, 'y', -h / 3)),
        (g.attributes.width = new m(n, 'width', h)),
        (g.attributes.height = new m(n, 'height', h))
      var v = new lt(n, null)
      ;(v.attributes.transform = new m(
        n,
        'transform',
        this.getAttribute('gradientTransform').getValue()
      )),
        (v.children = [g])
      var f = new Q(n, null)
      ;(f.attributes.x = new m(n, 'x', 0)),
        (f.attributes.y = new m(n, 'y', 0)),
        (f.attributes.width = new m(n, 'width', l.width)),
        (f.attributes.height = new m(n, 'height', l.height)),
        (f.children = [v])
      var d = n.createCanvas(l.width, l.height),
        p = d.getContext('2d')
      return (p.fillStyle = s), f.render(p), p.createPattern(d, 'no-repeat')
    }
    return s
  }
  inheritStopContainer(t) {
    this.attributesToInherit.forEach(e => {
      !this.getAttribute(e).hasValue() &&
        t.getAttribute(e).hasValue() &&
        this.getAttribute(e, !0).setValue(t.getAttribute(e).getValue())
    })
  }
  addParentOpacity(t, e) {
    if (t.hasValue()) {
      var r = new m(this.document, 'color', e)
      return r.addOpacity(t).getColor()
    }
    return e
  }
}
class Ee extends _t {
  constructor(t, e, r) {
    super(t, e, r),
      (this.type = 'linearGradient'),
      this.attributesToInherit.push('x1', 'y1', 'x2', 'y2')
  }
  getGradient(t, e) {
    var r = this.getGradientUnits() === 'objectBoundingBox',
      i = r ? e.getBoundingBox(t) : null
    if (r && !i) return null
    !this.getAttribute('x1').hasValue() &&
      !this.getAttribute('y1').hasValue() &&
      !this.getAttribute('x2').hasValue() &&
      !this.getAttribute('y2').hasValue() &&
      (this.getAttribute('x1', !0).setValue(0),
      this.getAttribute('y1', !0).setValue(0),
      this.getAttribute('x2', !0).setValue(1),
      this.getAttribute('y2', !0).setValue(0))
    var a = r
        ? i.x + i.width * this.getAttribute('x1').getNumber()
        : this.getAttribute('x1').getPixels('x'),
      s = r
        ? i.y + i.height * this.getAttribute('y1').getNumber()
        : this.getAttribute('y1').getPixels('y'),
      n = r
        ? i.x + i.width * this.getAttribute('x2').getNumber()
        : this.getAttribute('x2').getPixels('x'),
      h = r
        ? i.y + i.height * this.getAttribute('y2').getNumber()
        : this.getAttribute('y2').getPixels('y')
    return a === n && s === h ? null : t.createLinearGradient(a, s, n, h)
  }
}
class ke extends _t {
  constructor(t, e, r) {
    super(t, e, r),
      (this.type = 'radialGradient'),
      this.attributesToInherit.push('cx', 'cy', 'r', 'fx', 'fy', 'fr')
  }
  getGradient(t, e) {
    var r = this.getGradientUnits() === 'objectBoundingBox',
      i = e.getBoundingBox(t)
    if (r && !i) return null
    this.getAttribute('cx').hasValue() || this.getAttribute('cx', !0).setValue('50%'),
      this.getAttribute('cy').hasValue() || this.getAttribute('cy', !0).setValue('50%'),
      this.getAttribute('r').hasValue() || this.getAttribute('r', !0).setValue('50%')
    var a = r
        ? i.x + i.width * this.getAttribute('cx').getNumber()
        : this.getAttribute('cx').getPixels('x'),
      s = r
        ? i.y + i.height * this.getAttribute('cy').getNumber()
        : this.getAttribute('cy').getPixels('y'),
      n = a,
      h = s
    this.getAttribute('fx').hasValue() &&
      (n = r
        ? i.x + i.width * this.getAttribute('fx').getNumber()
        : this.getAttribute('fx').getPixels('x')),
      this.getAttribute('fy').hasValue() &&
        (h = r
          ? i.y + i.height * this.getAttribute('fy').getNumber()
          : this.getAttribute('fy').getPixels('y'))
    var u = r
        ? ((i.width + i.height) / 2) * this.getAttribute('r').getNumber()
        : this.getAttribute('r').getPixels(),
      l = this.getAttribute('fr').getPixels()
    return t.createRadialGradient(n, h, l, a, s, u)
  }
}
class Oe extends P {
  constructor(t, e, r) {
    super(t, e, r), (this.type = 'stop')
    var i = Math.max(0, Math.min(1, this.getAttribute('offset').getNumber())),
      a = this.getStyle('stop-opacity'),
      s = this.getStyle('stop-color', !0)
    s.getString() === '' && s.setValue('#000'),
      a.hasValue() && (s = s.addOpacity(a)),
      (this.offset = i),
      (this.color = s.getColor())
  }
}
class gt extends P {
  constructor(t, e, r) {
    super(t, e, r),
      (this.type = 'animate'),
      (this.duration = 0),
      (this.initialValue = null),
      (this.initialUnits = ''),
      (this.removed = !1),
      (this.frozen = !1),
      t.screen.animations.push(this),
      (this.begin = this.getAttribute('begin').getMilliseconds()),
      (this.maxDuration = this.begin + this.getAttribute('dur').getMilliseconds()),
      (this.from = this.getAttribute('from')),
      (this.to = this.getAttribute('to')),
      (this.values = new m(t, 'values', null))
    var i = this.getAttribute('values')
    i.hasValue() && this.values.setValue(i.getString().split(';'))
  }
  getProperty() {
    var t = this.getAttribute('attributeType').getString(),
      e = this.getAttribute('attributeName').getString()
    return t === 'CSS' ? this.parent.getStyle(e, !0) : this.parent.getAttribute(e, !0)
  }
  calcValue() {
    var { initialUnits: t } = this,
      { progress: e, from: r, to: i } = this.getProgress(),
      a = r.getNumber() + (i.getNumber() - r.getNumber()) * e
    return t === '%' && (a *= 100), ''.concat(a).concat(t)
  }
  update(t) {
    var { parent: e } = this,
      r = this.getProperty()
    if (
      (this.initialValue ||
        ((this.initialValue = r.getString()), (this.initialUnits = r.getUnits())),
      this.duration > this.maxDuration)
    ) {
      var i = this.getAttribute('fill').getString('remove')
      if (
        this.getAttribute('repeatCount').getString() === 'indefinite' ||
        this.getAttribute('repeatDur').getString() === 'indefinite'
      )
        this.duration = 0
      else if (i === 'freeze' && !this.frozen)
        (this.frozen = !0), (e.animationFrozen = !0), (e.animationFrozenValue = r.getString())
      else if (i === 'remove' && !this.removed)
        return (
          (this.removed = !0),
          r.setValue(e.animationFrozen ? e.animationFrozenValue : this.initialValue),
          !0
        )
      return !1
    }
    this.duration += t
    var a = !1
    if (this.begin < this.duration) {
      var s = this.calcValue(),
        n = this.getAttribute('type')
      if (n.hasValue()) {
        var h = n.getString()
        s = ''.concat(h, '(').concat(s, ')')
      }
      r.setValue(s), (a = !0)
    }
    return a
  }
  getProgress() {
    var { document: t, values: e } = this,
      r = { progress: (this.duration - this.begin) / (this.maxDuration - this.begin) }
    if (e.hasValue()) {
      var i = r.progress * (e.getValue().length - 1),
        a = Math.floor(i),
        s = Math.ceil(i)
      ;(r.from = new m(t, 'from', parseFloat(e.getValue()[a]))),
        (r.to = new m(t, 'to', parseFloat(e.getValue()[s]))),
        (r.progress = (i - a) / (s - a))
    } else (r.from = this.from), (r.to = this.to)
    return r
  }
}
class Ne extends gt {
  constructor() {
    super(...arguments), (this.type = 'animateColor')
  }
  calcValue() {
    var { progress: t, from: e, to: r } = this.getProgress(),
      i = new nt(e.getColor()),
      a = new nt(r.getColor())
    if (i.ok && a.ok) {
      var s = i.r + (a.r - i.r) * t,
        n = i.g + (a.g - i.g) * t,
        h = i.b + (a.b - i.b) * t
      return 'rgb('
        .concat(Math.floor(s), ', ')
        .concat(Math.floor(n), ', ')
        .concat(Math.floor(h), ')')
    }
    return this.getAttribute('from').getColor()
  }
}
class Be extends gt {
  constructor() {
    super(...arguments), (this.type = 'animateTransform')
  }
  calcValue() {
    var { progress: t, from: e, to: r } = this.getProgress(),
      i = O(e.getString()),
      a = O(r.getString()),
      s = i
        .map((n, h) => {
          var u = a[h]
          return n + (u - n) * t
        })
        .join(' ')
    return s
  }
}
class De extends P {
  constructor(t, e, r) {
    super(t, e, r),
      (this.type = 'font'),
      (this.glyphs = {}),
      (this.horizAdvX = this.getAttribute('horiz-adv-x').getNumber())
    var { definitions: i } = t,
      { children: a } = this
    for (var s of a)
      switch (s.type) {
        case 'font-face': {
          this.fontFace = s
          var n = s.getStyle('font-family')
          n.hasValue() && (i[n.getString()] = this)
          break
        }
        case 'missing-glyph':
          this.missingGlyph = s
          break
        case 'glyph': {
          var h = s
          h.arabicForm
            ? ((this.isRTL = !0),
              (this.isArabic = !0),
              typeof this.glyphs[h.unicode] > 'u' && (this.glyphs[h.unicode] = {}),
              (this.glyphs[h.unicode][h.arabicForm] = h))
            : (this.glyphs[h.unicode] = h)
          break
        }
      }
  }
  render() {}
}
class ze extends P {
  constructor(t, e, r) {
    super(t, e, r),
      (this.type = 'font-face'),
      (this.ascent = this.getAttribute('ascent').getNumber()),
      (this.descent = this.getAttribute('descent').getNumber()),
      (this.unitsPerEm = this.getAttribute('units-per-em').getNumber())
  }
}
class Le extends S {
  constructor() {
    super(...arguments), (this.type = 'missing-glyph'), (this.horizAdvX = 0)
  }
}
class Re extends F {
  constructor() {
    super(...arguments), (this.type = 'tref')
  }
  getText() {
    var t = this.getHrefAttribute().getDefinition()
    if (t) {
      var e = t.children[0]
      if (e) return e.getText()
    }
    return ''
  }
}
class Ie extends F {
  constructor(t, e, r) {
    super(t, e, r), (this.type = 'a')
    var { childNodes: i } = e,
      a = i[0],
      s = i.length > 0 && Array.from(i).every(n => n.nodeType === 3)
    ;(this.hasText = s), (this.text = s ? this.getTextFromNode(a) : '')
  }
  getText() {
    return this.text
  }
  renderChildren(t) {
    if (this.hasText) {
      super.renderChildren(t)
      var { document: e, x: r, y: i } = this,
        { mouse: a } = e.screen,
        s = new m(e, 'fontSize', E.parse(e.ctx.font).fontSize)
      a.isWorking() &&
        a.checkBoundingBox(this, new B(r, i - s.getPixels('y'), r + this.measureText(t), i))
    } else if (this.children.length > 0) {
      var n = new lt(this.document, null)
      ;(n.children = this.children), (n.parent = this), n.render(t)
    }
  }
  onClick() {
    var { window: t } = this.document
    t && t.open(this.getHrefAttribute().getString())
  }
  onMouseMove() {
    var t = this.document.ctx
    t.canvas.style.cursor = 'pointer'
  }
}
function Mt(o, t) {
  var e = Object.keys(o)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(o)
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(o, i).enumerable
      })),
      e.push.apply(e, r)
  }
  return e
}
function Z(o) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Mt(Object(e), !0).forEach(function (r) {
          ot(o, r, e[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e))
      : Mt(Object(e)).forEach(function (r) {
          Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(e, r))
        })
  }
  return o
}
class Fe extends F {
  constructor(t, e, r) {
    super(t, e, r),
      (this.type = 'textPath'),
      (this.textWidth = 0),
      (this.textHeight = 0),
      (this.pathLength = -1),
      (this.glyphInfo = null),
      (this.letterSpacingCache = []),
      (this.measuresCache = new Map([['', 0]]))
    var i = this.getHrefAttribute().getDefinition()
    ;(this.text = this.getTextFromNode()), (this.dataArray = this.parsePathData(i))
  }
  getText() {
    return this.text
  }
  path(t) {
    var { dataArray: e } = this
    t && t.beginPath(),
      e.forEach(r => {
        var { type: i, points: a } = r
        switch (i) {
          case b.LINE_TO:
            t && t.lineTo(a[0], a[1])
            break
          case b.MOVE_TO:
            t && t.moveTo(a[0], a[1])
            break
          case b.CURVE_TO:
            t && t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5])
            break
          case b.QUAD_TO:
            t && t.quadraticCurveTo(a[0], a[1], a[2], a[3])
            break
          case b.ARC: {
            var [s, n, h, u, l, g, v, f] = a,
              d = h > u ? h : u,
              p = h > u ? 1 : h / u,
              c = h > u ? u / h : 1
            t &&
              (t.translate(s, n),
              t.rotate(v),
              t.scale(p, c),
              t.arc(0, 0, d, l, l + g, Boolean(1 - f)),
              t.scale(1 / p, 1 / c),
              t.rotate(-v),
              t.translate(-s, -n))
            break
          }
          case b.CLOSE_PATH:
            t && t.closePath()
            break
        }
      })
  }
  renderChildren(t) {
    this.setTextData(t), t.save()
    var e = this.parent.getStyle('text-decoration').getString(),
      r = this.getFontSize(),
      { glyphInfo: i } = this,
      a = t.fillStyle
    e === 'underline' && t.beginPath(),
      i.forEach((s, n) => {
        var { p0: h, p1: u, rotation: l, text: g } = s
        t.save(),
          t.translate(h.x, h.y),
          t.rotate(l),
          t.fillStyle && t.fillText(g, 0, 0),
          t.strokeStyle && t.strokeText(g, 0, 0),
          t.restore(),
          e === 'underline' && (n === 0 && t.moveTo(h.x, h.y + r / 8), t.lineTo(u.x, u.y + r / 5))
      }),
      e === 'underline' && ((t.lineWidth = r / 20), (t.strokeStyle = a), t.stroke(), t.closePath()),
      t.restore()
  }
  getLetterSpacingAt() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0
    return this.letterSpacingCache[t] || 0
  }
  findSegmentToFitChar(t, e, r, i, a, s, n, h, u) {
    var l = s,
      g = this.measureText(t, h)
    h === ' ' && e === 'justify' && r < i && (g += (i - r) / a),
      u > -1 && (l += this.getLetterSpacingAt(u))
    var v = this.textHeight / 20,
      f = this.getEquidistantPointOnPath(l, v, 0),
      d = this.getEquidistantPointOnPath(l + g, v, 0),
      p = { p0: f, p1: d },
      c = f && d ? Math.atan2(d.y - f.y, d.x - f.x) : 0
    if (n) {
      var y = Math.cos(Math.PI / 2 + c) * n,
        x = Math.cos(-c) * n
      ;(p.p0 = Z(Z({}, f), {}, { x: f.x + y, y: f.y + x })),
        (p.p1 = Z(Z({}, d), {}, { x: d.x + y, y: d.y + x }))
    }
    return (l += g), { offset: l, segment: p, rotation: c }
  }
  measureText(t, e) {
    var { measuresCache: r } = this,
      i = e || this.getText()
    if (r.has(i)) return r.get(i)
    var a = this.measureTargetText(t, i)
    return r.set(i, a), a
  }
  setTextData(t) {
    if (!this.glyphInfo) {
      var e = this.getText(),
        r = e.split(''),
        i = e.split(' ').length - 1,
        a = this.parent
          .getAttribute('dx')
          .split()
          .map(A => A.getPixels('x')),
        s = this.parent.getAttribute('dy').getPixels('y'),
        n = this.parent.getStyle('text-anchor').getString('start'),
        h = this.getStyle('letter-spacing'),
        u = this.parent.getStyle('letter-spacing'),
        l = 0
      !h.hasValue() || h.getValue() === 'inherit'
        ? (l = u.getPixels())
        : h.hasValue() &&
          h.getValue() !== 'initial' &&
          h.getValue() !== 'unset' &&
          (l = h.getPixels())
      var g = [],
        v = e.length
      this.letterSpacingCache = g
      for (var f = 0; f < v; f++) g.push(typeof a[f] < 'u' ? a[f] : l)
      var d = g.reduce((A, M, k) => (k === 0 ? 0 : A + M || 0), 0),
        p = this.measureText(t),
        c = Math.max(p + d, 0)
      ;(this.textWidth = p), (this.textHeight = this.getFontSize()), (this.glyphInfo = [])
      var y = this.getPathLength(),
        x = this.getStyle('startOffset').getNumber(0) * y,
        w = 0
      ;(n === 'middle' || n === 'center') && (w = -c / 2),
        (n === 'end' || n === 'right') && (w = -c),
        (w += x),
        r.forEach((A, M) => {
          var {
            offset: k,
            segment: C,
            rotation: N
          } = this.findSegmentToFitChar(t, n, c, y, i, w, s, A, M)
          ;(w = k),
            !(!C.p0 || !C.p1) &&
              this.glyphInfo.push({ text: r[M], p0: C.p0, p1: C.p1, rotation: N })
        })
    }
  }
  parsePathData(t) {
    if (((this.pathLength = -1), !t)) return []
    var e = [],
      { pathParser: r } = t
    for (r.reset(); !r.isEnd(); ) {
      var { current: i } = r,
        a = i ? i.x : 0,
        s = i ? i.y : 0,
        n = r.next(),
        h = n.type,
        u = []
      switch (n.type) {
        case b.MOVE_TO:
          this.pathM(r, u)
          break
        case b.LINE_TO:
          h = this.pathL(r, u)
          break
        case b.HORIZ_LINE_TO:
          h = this.pathH(r, u)
          break
        case b.VERT_LINE_TO:
          h = this.pathV(r, u)
          break
        case b.CURVE_TO:
          this.pathC(r, u)
          break
        case b.SMOOTH_CURVE_TO:
          h = this.pathS(r, u)
          break
        case b.QUAD_TO:
          this.pathQ(r, u)
          break
        case b.SMOOTH_QUAD_TO:
          h = this.pathT(r, u)
          break
        case b.ARC:
          u = this.pathA(r)
          break
        case b.CLOSE_PATH:
          S.pathZ(r)
          break
      }
      n.type !== b.CLOSE_PATH
        ? e.push({
            type: h,
            points: u,
            start: { x: a, y: s },
            pathLength: this.calcLength(a, s, h, u)
          })
        : e.push({ type: b.CLOSE_PATH, points: [], pathLength: 0 })
    }
    return e
  }
  pathM(t, e) {
    var { x: r, y: i } = S.pathM(t).point
    e.push(r, i)
  }
  pathL(t, e) {
    var { x: r, y: i } = S.pathL(t).point
    return e.push(r, i), b.LINE_TO
  }
  pathH(t, e) {
    var { x: r, y: i } = S.pathH(t).point
    return e.push(r, i), b.LINE_TO
  }
  pathV(t, e) {
    var { x: r, y: i } = S.pathV(t).point
    return e.push(r, i), b.LINE_TO
  }
  pathC(t, e) {
    var { point: r, controlPoint: i, currentPoint: a } = S.pathC(t)
    e.push(r.x, r.y, i.x, i.y, a.x, a.y)
  }
  pathS(t, e) {
    var { point: r, controlPoint: i, currentPoint: a } = S.pathS(t)
    return e.push(r.x, r.y, i.x, i.y, a.x, a.y), b.CURVE_TO
  }
  pathQ(t, e) {
    var { controlPoint: r, currentPoint: i } = S.pathQ(t)
    e.push(r.x, r.y, i.x, i.y)
  }
  pathT(t, e) {
    var { controlPoint: r, currentPoint: i } = S.pathT(t)
    return e.push(r.x, r.y, i.x, i.y), b.QUAD_TO
  }
  pathA(t) {
    var { rX: e, rY: r, sweepFlag: i, xAxisRotation: a, centp: s, a1: n, ad: h } = S.pathA(t)
    return (
      i === 0 && h > 0 && (h -= 2 * Math.PI),
      i === 1 && h < 0 && (h += 2 * Math.PI),
      [s.x, s.y, e, r, n, h, a, i]
    )
  }
  calcLength(t, e, r, i) {
    var a = 0,
      s = null,
      n = null,
      h = 0
    switch (r) {
      case b.LINE_TO:
        return this.getLineLength(t, e, i[0], i[1])
      case b.CURVE_TO:
        for (
          a = 0,
            s = this.getPointOnCubicBezier(0, t, e, i[0], i[1], i[2], i[3], i[4], i[5]),
            h = 0.01;
          h <= 1;
          h += 0.01
        )
          (n = this.getPointOnCubicBezier(h, t, e, i[0], i[1], i[2], i[3], i[4], i[5])),
            (a += this.getLineLength(s.x, s.y, n.x, n.y)),
            (s = n)
        return a
      case b.QUAD_TO:
        for (
          a = 0, s = this.getPointOnQuadraticBezier(0, t, e, i[0], i[1], i[2], i[3]), h = 0.01;
          h <= 1;
          h += 0.01
        )
          (n = this.getPointOnQuadraticBezier(h, t, e, i[0], i[1], i[2], i[3])),
            (a += this.getLineLength(s.x, s.y, n.x, n.y)),
            (s = n)
        return a
      case b.ARC: {
        a = 0
        var u = i[4],
          l = i[5],
          g = i[4] + l,
          v = Math.PI / 180
        if (
          (Math.abs(u - g) < v && (v = Math.abs(u - g)),
          (s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0)),
          l < 0)
        )
          for (h = u - v; h > g; h -= v)
            (n = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], h, 0)),
              (a += this.getLineLength(s.x, s.y, n.x, n.y)),
              (s = n)
        else
          for (h = u + v; h < g; h += v)
            (n = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], h, 0)),
              (a += this.getLineLength(s.x, s.y, n.x, n.y)),
              (s = n)
        return (
          (n = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], g, 0)),
          (a += this.getLineLength(s.x, s.y, n.x, n.y)),
          a
        )
      }
    }
    return 0
  }
  getPointOnLine(t, e, r, i, a) {
    var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : e,
      n = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : r,
      h = (a - r) / (i - e + Y),
      u = Math.sqrt((t * t) / (1 + h * h))
    i < e && (u *= -1)
    var l = h * u,
      g = null
    if (i === e) g = { x: s, y: n + l }
    else if ((n - r) / (s - e + Y) === h) g = { x: s + u, y: n + l }
    else {
      var v = 0,
        f = 0,
        d = this.getLineLength(e, r, i, a)
      if (d < Y) return null
      var p = (s - e) * (i - e) + (n - r) * (a - r)
      ;(p /= d * d), (v = e + p * (i - e)), (f = r + p * (a - r))
      var c = this.getLineLength(s, n, v, f),
        y = Math.sqrt(t * t - c * c)
      ;(u = Math.sqrt((y * y) / (1 + h * h))),
        i < e && (u *= -1),
        (l = h * u),
        (g = { x: v + u, y: f + l })
    }
    return g
  }
  getPointOnPath(t) {
    var e = this.getPathLength(),
      r = 0,
      i = null
    if (t < -5e-5 || t - 5e-5 > e) return null
    var { dataArray: a } = this
    for (var s of a) {
      if (s && (s.pathLength < 5e-5 || r + s.pathLength + 5e-5 < t)) {
        r += s.pathLength
        continue
      }
      var n = t - r,
        h = 0
      switch (s.type) {
        case b.LINE_TO:
          i = this.getPointOnLine(
            n,
            s.start.x,
            s.start.y,
            s.points[0],
            s.points[1],
            s.start.x,
            s.start.y
          )
          break
        case b.ARC: {
          var u = s.points[4],
            l = s.points[5],
            g = s.points[4] + l
          if (((h = u + (n / s.pathLength) * l), (l < 0 && h < g) || (l >= 0 && h > g))) break
          i = this.getPointOnEllipticalArc(
            s.points[0],
            s.points[1],
            s.points[2],
            s.points[3],
            h,
            s.points[6]
          )
          break
        }
        case b.CURVE_TO:
          ;(h = n / s.pathLength),
            h > 1 && (h = 1),
            (i = this.getPointOnCubicBezier(
              h,
              s.start.x,
              s.start.y,
              s.points[0],
              s.points[1],
              s.points[2],
              s.points[3],
              s.points[4],
              s.points[5]
            ))
          break
        case b.QUAD_TO:
          ;(h = n / s.pathLength),
            h > 1 && (h = 1),
            (i = this.getPointOnQuadraticBezier(
              h,
              s.start.x,
              s.start.y,
              s.points[0],
              s.points[1],
              s.points[2],
              s.points[3]
            ))
          break
      }
      if (i) return i
      break
    }
    return null
  }
  getLineLength(t, e, r, i) {
    return Math.sqrt((r - t) * (r - t) + (i - e) * (i - e))
  }
  getPathLength() {
    return (
      this.pathLength === -1 &&
        (this.pathLength = this.dataArray.reduce(
          (t, e) => (e.pathLength > 0 ? t + e.pathLength : t),
          0
        )),
      this.pathLength
    )
  }
  getPointOnCubicBezier(t, e, r, i, a, s, n, h, u) {
    var l = h * wt(t) + s * St(t) + i * At(t) + e * Pt(t),
      g = u * wt(t) + n * St(t) + a * At(t) + r * Pt(t)
    return { x: l, y: g }
  }
  getPointOnQuadraticBezier(t, e, r, i, a, s, n) {
    var h = s * Ct(t) + i * Vt(t) + e * Tt(t),
      u = n * Ct(t) + a * Vt(t) + r * Tt(t)
    return { x: h, y: u }
  }
  getPointOnEllipticalArc(t, e, r, i, a, s) {
    var n = Math.cos(s),
      h = Math.sin(s),
      u = { x: r * Math.cos(a), y: i * Math.sin(a) }
    return { x: t + (u.x * n - u.y * h), y: e + (u.x * h + u.y * n) }
  }
  buildEquidistantCache(t, e) {
    var r = this.getPathLength(),
      i = e || 0.25,
      a = t || r / 100
    if (
      !this.equidistantCache ||
      this.equidistantCache.step !== a ||
      this.equidistantCache.precision !== i
    ) {
      this.equidistantCache = { step: a, precision: i, points: [] }
      for (var s = 0, n = 0; n <= r; n += i) {
        var h = this.getPointOnPath(n),
          u = this.getPointOnPath(n + i)
        !h ||
          !u ||
          ((s += this.getLineLength(h.x, h.y, u.x, u.y)),
          s >= a && (this.equidistantCache.points.push({ x: h.x, y: h.y, distance: n }), (s -= a)))
      }
    }
  }
  getEquidistantPointOnPath(t, e, r) {
    if ((this.buildEquidistantCache(e, r), t < 0 || t - this.getPathLength() > 5e-5)) return null
    var i = Math.round((t / this.getPathLength()) * (this.equidistantCache.points.length - 1))
    return this.equidistantCache.points[i] || null
  }
}
var _e = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i
class Xe extends j {
  constructor(t, e, r) {
    super(t, e, r), (this.type = 'image'), (this.loaded = !1)
    var i = this.getHrefAttribute().getString()
    if (!!i) {
      var a = i.endsWith('.svg') || /^\s*data:image\/svg\+xml/i.test(i)
      t.images.push(this), a ? this.loadSvg(i) : this.loadImage(i), (this.isSvg = a)
    }
  }
  loadImage(t) {
    var e = this
    return R(function* () {
      try {
        var r = yield e.document.createImage(t)
        e.image = r
      } catch (i) {
        console.error('Error while loading image "'.concat(t, '":'), i)
      }
      e.loaded = !0
    })()
  }
  loadSvg(t) {
    var e = this
    return R(function* () {
      var r = _e.exec(t)
      if (r) {
        var i = r[5]
        r[4] === 'base64' ? (e.image = atob(i)) : (e.image = decodeURIComponent(i))
      } else
        try {
          var a = yield e.document.fetch(t),
            s = yield a.text()
          e.image = s
        } catch (n) {
          console.error('Error while loading image "'.concat(t, '":'), n)
        }
      e.loaded = !0
    })()
  }
  renderChildren(t) {
    var { document: e, image: r, loaded: i } = this,
      a = this.getAttribute('x').getPixels('x'),
      s = this.getAttribute('y').getPixels('y'),
      n = this.getStyle('width').getPixels('x'),
      h = this.getStyle('height').getPixels('y')
    if (!(!i || !r || !n || !h)) {
      if ((t.save(), t.translate(a, s), this.isSvg)) {
        var u = e.canvg.forkString(t, this.image, {
          ignoreMouse: !0,
          ignoreAnimation: !0,
          ignoreDimensions: !0,
          ignoreClear: !0,
          offsetX: 0,
          offsetY: 0,
          scaleWidth: n,
          scaleHeight: h
        })
        ;(u.document.documentElement.parent = this), u.render()
      } else {
        var l = this.image
        e.setViewBox({
          ctx: t,
          aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
          width: n,
          desiredWidth: l.width,
          height: h,
          desiredHeight: l.height
        }),
          this.loaded && (typeof l.complete > 'u' || l.complete) && t.drawImage(l, 0, 0)
      }
      t.restore()
    }
  }
  getBoundingBox() {
    var t = this.getAttribute('x').getPixels('x'),
      e = this.getAttribute('y').getPixels('y'),
      r = this.getStyle('width').getPixels('x'),
      i = this.getStyle('height').getPixels('y')
    return new B(t, e, t + r, e + i)
  }
}
class Ue extends j {
  constructor() {
    super(...arguments), (this.type = 'symbol')
  }
  render(t) {}
}
class We {
  constructor(t) {
    ;(this.document = t), (this.loaded = !1), t.fonts.push(this)
  }
  load(t, e) {
    var r = this
    return R(function* () {
      try {
        var { document: i } = r,
          a = yield i.canvg.parser.load(e),
          s = a.getElementsByTagName('font')
        Array.from(s).forEach(n => {
          var h = i.createElement(n)
          i.definitions[t] = h
        })
      } catch (n) {
        console.error('Error while loading font "'.concat(e, '":'), n)
      }
      r.loaded = !0
    })()
  }
}
class Xt extends P {
  constructor(t, e, r) {
    super(t, e, r), (this.type = 'style')
    var i = H(
        Array.from(e.childNodes)
          .map(s => s.textContent)
          .join('')
          .replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, '')
          .replace(/@import.*;/g, '')
      ),
      a = i.split('}')
    a.forEach(s => {
      var n = s.trim()
      if (!!n) {
        var h = n.split('{'),
          u = h[0].split(','),
          l = h[1].split(';')
        u.forEach(g => {
          var v = g.trim()
          if (!!v) {
            var f = t.styles[v] || {}
            if (
              (l.forEach(c => {
                var y = c.indexOf(':'),
                  x = c.substr(0, y).trim(),
                  w = c.substr(y + 1, c.length - y).trim()
                x && w && (f[x] = new m(t, x, w))
              }),
              (t.styles[v] = f),
              (t.stylesSpecificity[v] = ae(v)),
              v === '@font-face')
            ) {
              var d = f['font-family'].getString().replace(/"|'/g, ''),
                p = f.src.getString().split(',')
              p.forEach(c => {
                if (c.indexOf('format("svg")') > 0) {
                  var y = Nt(c)
                  y && new We(t).load(d, y)
                }
              })
            }
          }
        })
      }
    })
  }
}
Xt.parseExternalUrl = Nt
class je extends j {
  constructor() {
    super(...arguments), (this.type = 'use')
  }
  setContext(t) {
    super.setContext(t)
    var e = this.getAttribute('x'),
      r = this.getAttribute('y')
    e.hasValue() && t.translate(e.getPixels('x'), 0),
      r.hasValue() && t.translate(0, r.getPixels('y'))
  }
  path(t) {
    var { element: e } = this
    e && e.path(t)
  }
  renderChildren(t) {
    var { document: e, element: r } = this
    if (r) {
      var i = r
      if (
        (r.type === 'symbol' &&
          ((i = new Q(e, null)),
          (i.attributes.viewBox = new m(e, 'viewBox', r.getAttribute('viewBox').getString())),
          (i.attributes.preserveAspectRatio = new m(
            e,
            'preserveAspectRatio',
            r.getAttribute('preserveAspectRatio').getString()
          )),
          (i.attributes.overflow = new m(e, 'overflow', r.getAttribute('overflow').getString())),
          (i.children = r.children),
          (r.styles.opacity = new m(e, 'opacity', this.calculateOpacity()))),
        i.type === 'svg')
      ) {
        var a = this.getStyle('width', !1, !0),
          s = this.getStyle('height', !1, !0)
        a.hasValue() && (i.attributes.width = new m(e, 'width', a.getString())),
          s.hasValue() && (i.attributes.height = new m(e, 'height', s.getString()))
      }
      var n = i.parent
      ;(i.parent = this), i.render(t), (i.parent = n)
    }
  }
  getBoundingBox(t) {
    var { element: e } = this
    return e ? e.getBoundingBox(t) : null
  }
  elementTransform() {
    var { document: t, element: e } = this
    return W.fromElement(t, e)
  }
  get element() {
    return (
      this.cachedElement || (this.cachedElement = this.getHrefAttribute().getDefinition()),
      this.cachedElement
    )
  }
}
function J(o, t, e, r, i, a) {
  return o[e * r * 4 + t * 4 + a]
}
function K(o, t, e, r, i, a, s) {
  o[e * r * 4 + t * 4 + a] = s
}
function T(o, t, e) {
  var r = o[t]
  return r * e
}
function L(o, t, e, r) {
  return t + Math.cos(o) * e + Math.sin(o) * r
}
class Ut extends P {
  constructor(t, e, r) {
    super(t, e, r), (this.type = 'feColorMatrix')
    var i = O(this.getAttribute('values').getString())
    switch (this.getAttribute('type').getString('matrix')) {
      case 'saturate': {
        var a = i[0]
        i = [
          0.213 + 0.787 * a,
          0.715 - 0.715 * a,
          0.072 - 0.072 * a,
          0,
          0,
          0.213 - 0.213 * a,
          0.715 + 0.285 * a,
          0.072 - 0.072 * a,
          0,
          0,
          0.213 - 0.213 * a,
          0.715 - 0.715 * a,
          0.072 + 0.928 * a,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1
        ]
        break
      }
      case 'hueRotate': {
        var s = (i[0] * Math.PI) / 180
        i = [
          L(s, 0.213, 0.787, -0.213),
          L(s, 0.715, -0.715, -0.715),
          L(s, 0.072, -0.072, 0.928),
          0,
          0,
          L(s, 0.213, -0.213, 0.143),
          L(s, 0.715, 0.285, 0.14),
          L(s, 0.072, -0.072, -0.283),
          0,
          0,
          L(s, 0.213, -0.213, -0.787),
          L(s, 0.715, -0.715, 0.715),
          L(s, 0.072, 0.928, 0.072),
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1
        ]
        break
      }
      case 'luminanceToAlpha':
        i = [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1
        ]
        break
    }
    ;(this.matrix = i), (this.includeOpacity = this.getAttribute('includeOpacity').hasValue())
  }
  apply(t, e, r, i, a) {
    for (
      var { includeOpacity: s, matrix: n } = this, h = t.getImageData(0, 0, i, a), u = 0;
      u < a;
      u++
    )
      for (var l = 0; l < i; l++) {
        var g = J(h.data, l, u, i, a, 0),
          v = J(h.data, l, u, i, a, 1),
          f = J(h.data, l, u, i, a, 2),
          d = J(h.data, l, u, i, a, 3),
          p = T(n, 0, g) + T(n, 1, v) + T(n, 2, f) + T(n, 3, d) + T(n, 4, 1),
          c = T(n, 5, g) + T(n, 6, v) + T(n, 7, f) + T(n, 8, d) + T(n, 9, 1),
          y = T(n, 10, g) + T(n, 11, v) + T(n, 12, f) + T(n, 13, d) + T(n, 14, 1),
          x = T(n, 15, g) + T(n, 16, v) + T(n, 17, f) + T(n, 18, d) + T(n, 19, 1)
        s && ((p = 0), (c = 0), (y = 0), (x *= d / 255)),
          K(h.data, l, u, i, a, 0, p),
          K(h.data, l, u, i, a, 1, c),
          K(h.data, l, u, i, a, 2, y),
          K(h.data, l, u, i, a, 3, x)
      }
    t.clearRect(0, 0, i, a), t.putImageData(h, 0, 0)
  }
}
class rt extends P {
  constructor() {
    super(...arguments), (this.type = 'mask')
  }
  apply(t, e) {
    var { document: r } = this,
      i = this.getAttribute('x').getPixels('x'),
      a = this.getAttribute('y').getPixels('y'),
      s = this.getStyle('width').getPixels('x'),
      n = this.getStyle('height').getPixels('y')
    if (!s && !n) {
      var h = new B()
      this.children.forEach(d => {
        h.addBoundingBox(d.getBoundingBox(t))
      }),
        (i = Math.floor(h.x1)),
        (a = Math.floor(h.y1)),
        (s = Math.floor(h.width)),
        (n = Math.floor(h.height))
    }
    var u = this.removeStyles(e, rt.ignoreStyles),
      l = r.createCanvas(i + s, a + n),
      g = l.getContext('2d')
    r.screen.setDefaults(g),
      this.renderChildren(g),
      new Ut(r, {
        nodeType: 1,
        childNodes: [],
        attributes: [
          { nodeName: 'type', value: 'luminanceToAlpha' },
          { nodeName: 'includeOpacity', value: 'true' }
        ]
      }).apply(g, 0, 0, i + s, a + n)
    var v = r.createCanvas(i + s, a + n),
      f = v.getContext('2d')
    r.screen.setDefaults(f),
      e.render(f),
      (f.globalCompositeOperation = 'destination-in'),
      (f.fillStyle = g.createPattern(l, 'no-repeat')),
      f.fillRect(0, 0, i + s, a + n),
      (t.fillStyle = f.createPattern(v, 'no-repeat')),
      t.fillRect(0, 0, i + s, a + n),
      this.restoreStyles(e, u)
  }
  render(t) {}
}
rt.ignoreStyles = ['mask', 'transform', 'clip-path']
var Et = () => {}
class Ye extends P {
  constructor() {
    super(...arguments), (this.type = 'clipPath')
  }
  apply(t) {
    var { document: e } = this,
      r = Reflect.getPrototypeOf(t),
      { beginPath: i, closePath: a } = t
    r && ((r.beginPath = Et), (r.closePath = Et)),
      Reflect.apply(i, t, []),
      this.children.forEach(s => {
        if (!(typeof s.path > 'u')) {
          var n = typeof s.elementTransform < 'u' ? s.elementTransform() : null
          n || (n = W.fromElement(e, s)),
            n && n.apply(t),
            s.path(t),
            r && (r.closePath = a),
            n && n.unapply(t)
        }
      }),
      Reflect.apply(a, t, []),
      t.clip(),
      r && ((r.beginPath = i), (r.closePath = a))
  }
  render(t) {}
}
class it extends P {
  constructor() {
    super(...arguments), (this.type = 'filter')
  }
  apply(t, e) {
    var { document: r, children: i } = this,
      a = e.getBoundingBox(t)
    if (!!a) {
      var s = 0,
        n = 0
      i.forEach(y => {
        var x = y.extraFilterDistance || 0
        ;(s = Math.max(s, x)), (n = Math.max(n, x))
      })
      var h = Math.floor(a.width),
        u = Math.floor(a.height),
        l = h + 2 * s,
        g = u + 2 * n
      if (!(l < 1 || g < 1)) {
        var v = Math.floor(a.x),
          f = Math.floor(a.y),
          d = this.removeStyles(e, it.ignoreStyles),
          p = r.createCanvas(l, g),
          c = p.getContext('2d')
        r.screen.setDefaults(c),
          c.translate(-v + s, -f + n),
          e.render(c),
          i.forEach(y => {
            typeof y.apply == 'function' && y.apply(c, 0, 0, l, g)
          }),
          t.drawImage(p, 0, 0, l, g, v - s, f - n, l, g),
          this.restoreStyles(e, d)
      }
    }
  }
  render(t) {}
}
it.ignoreStyles = ['filter', 'transform', 'clip-path']
class He extends P {
  constructor(t, e, r) {
    super(t, e, r), (this.type = 'feDropShadow'), this.addStylesFromStyleDefinition()
  }
  apply(t, e, r, i, a) {}
}
class $e extends P {
  constructor() {
    super(...arguments), (this.type = 'feMorphology')
  }
  apply(t, e, r, i, a) {}
}
class qe extends P {
  constructor() {
    super(...arguments), (this.type = 'feComposite')
  }
  apply(t, e, r, i, a) {}
}
class Ge extends P {
  constructor(t, e, r) {
    super(t, e, r),
      (this.type = 'feGaussianBlur'),
      (this.blurRadius = Math.floor(this.getAttribute('stdDeviation').getNumber())),
      (this.extraFilterDistance = this.blurRadius)
  }
  apply(t, e, r, i, a) {
    var { document: s, blurRadius: n } = this,
      h = s.window ? s.window.document.body : null,
      u = t.canvas
    ;(u.id = s.getUniqueId()),
      h && ((u.style.display = 'none'), h.appendChild(u)),
      Wt(u, e, r, i, a, n),
      h && h.removeChild(u)
  }
}
class Qe extends P {
  constructor() {
    super(...arguments), (this.type = 'title')
  }
}
class Ze extends P {
  constructor() {
    super(...arguments), (this.type = 'desc')
  }
}
var Je = {
  svg: Q,
  rect: It,
  circle: Se,
  ellipse: Ae,
  line: Pe,
  polyline: Ft,
  polygon: Ce,
  path: S,
  pattern: Ve,
  marker: Te,
  defs: Me,
  linearGradient: Ee,
  radialGradient: ke,
  stop: Oe,
  animate: gt,
  animateColor: Ne,
  animateTransform: Be,
  font: De,
  'font-face': ze,
  'missing-glyph': Le,
  glyph: Rt,
  text: F,
  tspan: et,
  tref: Re,
  a: Ie,
  textPath: Fe,
  image: Xe,
  g: lt,
  symbol: Ue,
  style: Xt,
  use: je,
  mask: rt,
  clipPath: Ye,
  filter: it,
  feDropShadow: He,
  feMorphology: $e,
  feComposite: qe,
  feColorMatrix: Ut,
  feGaussianBlur: Ge,
  title: Qe,
  desc: Ze
}
function kt(o, t) {
  var e = Object.keys(o)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(o)
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(o, i).enumerable
      })),
      e.push.apply(e, r)
  }
  return e
}
function Ke(o) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? kt(Object(e), !0).forEach(function (r) {
          ot(o, r, e[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e))
      : kt(Object(e)).forEach(function (r) {
          Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(e, r))
        })
  }
  return o
}
function tr(o, t) {
  var e = document.createElement('canvas')
  return (e.width = o), (e.height = t), e
}
function er(o) {
  return ut.apply(this, arguments)
}
function ut() {
  return (
    (ut = R(function* (o) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        e = document.createElement('img')
      return (
        t && (e.crossOrigin = 'Anonymous'),
        new Promise((r, i) => {
          ;(e.onload = () => {
            r(e)
          }),
            (e.onerror = (a, s, n, h, u) => {
              i(u)
            }),
            (e.src = o)
        })
      )
    })),
    ut.apply(this, arguments)
  )
}
class I {
  constructor(t) {
    var {
      rootEmSize: e = 12,
      emSize: r = 12,
      createCanvas: i = I.createCanvas,
      createImage: a = I.createImage,
      anonymousCrossOrigin: s
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.canvg = t),
      (this.definitions = {}),
      (this.styles = {}),
      (this.stylesSpecificity = {}),
      (this.images = []),
      (this.fonts = []),
      (this.emSizeStack = []),
      (this.uniqueId = 0),
      (this.screen = t.screen),
      (this.rootEmSize = e),
      (this.emSize = r),
      (this.createCanvas = i),
      (this.createImage = this.bindCreateImage(a, s)),
      this.screen.wait(this.isImagesLoaded.bind(this)),
      this.screen.wait(this.isFontsLoaded.bind(this))
  }
  bindCreateImage(t, e) {
    return typeof e == 'boolean' ? (r, i) => t(r, typeof i == 'boolean' ? i : e) : t
  }
  get window() {
    return this.screen.window
  }
  get fetch() {
    return this.screen.fetch
  }
  get ctx() {
    return this.screen.ctx
  }
  get emSize() {
    var { emSizeStack: t } = this
    return t[t.length - 1]
  }
  set emSize(t) {
    var { emSizeStack: e } = this
    e.push(t)
  }
  popEmSize() {
    var { emSizeStack: t } = this
    t.pop()
  }
  getUniqueId() {
    return 'canvg'.concat(++this.uniqueId)
  }
  isImagesLoaded() {
    return this.images.every(t => t.loaded)
  }
  isFontsLoaded() {
    return this.fonts.every(t => t.loaded)
  }
  createDocumentElement(t) {
    var e = this.createElement(t.documentElement)
    return (e.root = !0), e.addStylesFromStyleDefinition(), (this.documentElement = e), e
  }
  createElement(t) {
    var e = t.nodeName.replace(/^[^:]+:/, ''),
      r = I.elementTypes[e]
    return typeof r < 'u' ? new r(this, t) : new pe(this, t)
  }
  createTextNode(t) {
    return new we(this, t)
  }
  setViewBox(t) {
    this.screen.setViewBox(Ke({ document: this }, t))
  }
}
I.createCanvas = tr
I.createImage = er
I.elementTypes = Je
function Ot(o, t) {
  var e = Object.keys(o)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(o)
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(o, i).enumerable
      })),
      e.push.apply(e, r)
  }
  return e
}
function U(o) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Ot(Object(e), !0).forEach(function (r) {
          ot(o, r, e[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e))
      : Ot(Object(e)).forEach(function (r) {
          Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(e, r))
        })
  }
  return o
}
class G {
  constructor(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    ;(this.parser = new st(r)), (this.screen = new tt(t, r)), (this.options = r)
    var i = new I(this, r),
      a = i.createDocumentElement(e)
    ;(this.document = i), (this.documentElement = a)
  }
  static from(t, e) {
    var r = arguments
    return R(function* () {
      var i = r.length > 2 && r[2] !== void 0 ? r[2] : {},
        a = new st(i),
        s = yield a.parse(e)
      return new G(t, s, i)
    })()
  }
  static fromString(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = new st(r),
      a = i.parseFromString(e)
    return new G(t, a, r)
  }
  fork(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    return G.from(t, e, U(U({}, this.options), r))
  }
  forkString(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    return G.fromString(t, e, U(U({}, this.options), r))
  }
  ready() {
    return this.screen.ready()
  }
  isReady() {
    return this.screen.isReady()
  }
  render() {
    var t = arguments,
      e = this
    return R(function* () {
      var r = t.length > 0 && t[0] !== void 0 ? t[0] : {}
      e.start(U({ enableRedraw: !0, ignoreAnimation: !0, ignoreMouse: !0 }, r)),
        yield e.ready(),
        e.stop()
    })()
  }
  start() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      { documentElement: e, screen: r, options: i } = this
    r.start(e, U(U({ enableRedraw: !0 }, i), t))
  }
  stop() {
    this.screen.stop()
  }
  resize(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
    this.documentElement.resize(t, e, r)
  }
}
export {
  Ie as AElement,
  Ne as AnimateColorElement,
  gt as AnimateElement,
  Be as AnimateTransformElement,
  B as BoundingBox,
  wt as CB1,
  St as CB2,
  At as CB3,
  Pt as CB4,
  G as Canvg,
  Se as CircleElement,
  Ye as ClipPathElement,
  Me as DefsElement,
  Ze as DescElement,
  I as Document,
  P as Element,
  Ae as EllipseElement,
  Ut as FeColorMatrixElement,
  qe as FeCompositeElement,
  He as FeDropShadowElement,
  Ge as FeGaussianBlurElement,
  $e as FeMorphologyElement,
  it as FilterElement,
  E as Font,
  De as FontElement,
  ze as FontFaceElement,
  lt as GElement,
  Rt as GlyphElement,
  _t as GradientElement,
  Xe as ImageElement,
  Pe as LineElement,
  Ee as LinearGradientElement,
  Te as MarkerElement,
  rt as MaskElement,
  zt as Matrix,
  Le as MissingGlyphElement,
  ne as Mouse,
  Y as PSEUDO_ZERO,
  st as Parser,
  S as PathElement,
  b as PathParser,
  Ve as PatternElement,
  V as Point,
  Ce as PolygonElement,
  Ft as PolylineElement,
  m as Property,
  Ct as QB1,
  Vt as QB2,
  Tt as QB3,
  ke as RadialGradientElement,
  It as RectElement,
  j as RenderedElement,
  le as Rotate,
  Q as SVGElement,
  We as SVGFontLoader,
  ge as Scale,
  tt as Screen,
  Lt as Skew,
  fe as SkewX,
  ve as SkewY,
  Oe as StopElement,
  Xt as StyleElement,
  Ue as SymbolElement,
  Re as TRefElement,
  et as TSpanElement,
  F as TextElement,
  Fe as TextPathElement,
  Qe as TitleElement,
  W as Transform,
  oe as Translate,
  pe as UnknownElement,
  je as UseElement,
  se as ViewPort,
  H as compressSpaces,
  G as default,
  ae as getSelectorSpecificity,
  Gt as normalizeAttributeName,
  Qt as normalizeColor,
  Nt as parseExternalUrl,
  lr as presets,
  O as toNumbers,
  Ht as trimLeft,
  $t as trimRight,
  bt as vectorMagnitude,
  xt as vectorsAngle,
  ht as vectorsRatio
}
