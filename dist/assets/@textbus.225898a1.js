import {
  I as j,
  a as yt,
  P as on,
  S as $n,
  b as F,
  m as it,
  c as ft,
  d as Lt,
  s as Un,
  e as Ht,
  R as Kn,
  N as Wn,
  n as Jn,
  f as vt,
  g as zs,
  O as Gn,
  h as _t,
  i as I,
  j as We,
  k as ue,
  C as Xn,
  l as Yn,
  o as rn,
  p as Zn,
  q as Ye,
  r as Qn,
  t as to,
  u as eo,
  v as so,
  w as no,
  x as Le
} from './@tanbo.bd87cea7.js'
import './reflect-metadata.e8f3e0d5.js'
import { T as oo, f as an, p as js } from './immer.10fc837a.js'
import { k as io } from './katex.32438624.js'
import { p as $ } from './prismjs.a393ff7a.js'
function jt(r) {
  return function (e) {
    const s = new Error(e)
    return (s.name = `[TextbusError: ${r}]`), (s.stack = s.stack.replace(/\n.*?(?=\n)/, '')), s
  }
}
class Je {}
class st {}
const ds = new vt('COMPONENT_LIST'),
  ln = new vt('FORMATTER_LIST'),
  cn = new vt('ATTRIBUTE_LIST'),
  hn = new vt('ZEN_CODING_DETECT'),
  un = new vt('HISTORY_STACK_SIZE'),
  dn = new vt('READONLY')
function ct(r, t, e, s) {
  var n = arguments.length,
    o = n < 3 ? t : s === null ? (s = Object.getOwnPropertyDescriptor(t, e)) : s,
    i
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    o = Reflect.decorate(r, t, e, s)
  else
    for (var a = r.length - 1; a >= 0; a--)
      (i = r[a]) && (o = (n < 3 ? i(o) : n > 3 ? i(t, e, o) : i(t, e)) || o)
  return n > 3 && o && Object.defineProperty(t, e, o), o
}
function Mt(r, t) {
  return function (e, s) {
    t(e, s, r)
  }
}
function ht(r, t) {
  if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
    return Reflect.metadata(r, t)
}
function ro(r, t, e, s) {
  function n(o) {
    return o instanceof e
      ? o
      : new e(function (i) {
          i(o)
        })
  }
  return new (e || (e = Promise))(function (o, i) {
    function a(h) {
      try {
        c(s.next(h))
      } catch (u) {
        i(u)
      }
    }
    function l(h) {
      try {
        c(s.throw(h))
      } catch (u) {
        i(u)
      }
    }
    function c(h) {
      h.done ? o(h.value) : n(h.value).then(a, l)
    }
    c((s = s.apply(r, t || [])).next())
  })
}
class fn {
  constructor() {
    ;(this._dirty = !0),
      (this._changed = !0),
      (this._outputDirty = !0),
      (this._outputChanged = !0),
      (this.changeEvent = new F()),
      (this.childComponentRemovedEvent = new F()),
      (this.forceChangeEvent = new F()),
      (this.onChange = this.changeEvent.asObservable()),
      (this.onChildComponentRemoved = this.childComponentRemovedEvent.asObservable()),
      (this.onForceChange = this.forceChangeEvent.asObservable())
  }
  get dirty() {
    return this._dirty
  }
  get changed() {
    return this._changed
  }
  get outputDirty() {
    return this._outputDirty
  }
  get outputChanged() {
    return this._outputChanged
  }
  forceMarkDirtied() {
    this._dirty || ((this._dirty = !0), this.forceMarkChanged())
  }
  forceMarkChanged() {
    this._changed || ((this._changed = !0), this.forceChangeEvent.next())
  }
  markAsDirtied(t) {
    ;(this._dirty = !0), (this._outputDirty = !0), this.markAsChanged(t)
  }
  markAsChanged(t) {
    ;(this._changed = !0), (this._outputChanged = !0), this.changeEvent.next(t)
  }
  rendered() {
    this._dirty = this._changed = !1
  }
  outputRendered() {
    this._outputDirty = this._outputChanged = !1
  }
  reset() {
    this._changed = this._dirty = this._outputChanged = this._outputDirty = !0
  }
  recordComponentRemoved(t) {
    this.childComponentRemovedEvent.next(t)
  }
}
class ao {
  constructor() {
    this.data = []
  }
  get length() {
    return this.data.reduce((t, e) => t + e.length, 0)
  }
  correctIndex(t, e) {
    if (t === 0 || t === this.length) return t
    let s = 0
    for (const n of this.data) {
      const o = n.length
      if (typeof n == 'string' && t > s && t < s + o) {
        const l = [...new Intl.Segmenter().segment(n)]
        let c = 0
        for (const h of l) {
          const u = h.segment.length
          if (t > s + c && t < s + c + u) return e ? s + c + u : s + c
          c += u
        }
      }
      if (((s += o), s >= t)) break
    }
    return t
  }
  insert(t, e) {
    if (t >= this.length) this.append(e)
    else {
      let s = 0,
        n = 0
      for (const o of this.data) {
        if (t >= s) {
          if (typeof o == 'string') {
            if (t >= s && t < s + o.length) {
              const i = [o.slice(0, t - s), e, o.slice(t - s)].filter(a => a)
              typeof e == 'string'
                ? this.data.splice(n, 1, i.join(''))
                : this.data.splice(n, 1, ...i)
              break
            }
          } else if (t === s) {
            const i = this.data[n - 1]
            typeof i == 'string' && typeof e == 'string'
              ? (this.data[n - 1] = i + e)
              : s === 0
              ? this.data.unshift(e)
              : this.data.splice(n, 0, e)
            break
          }
        }
        n++, (s += o.length)
      }
    }
  }
  append(t) {
    const e = this.data.length - 1,
      s = this.data[e]
    typeof s == 'string' && typeof t == 'string' ? (this.data[e] = s + t) : this.data.push(t)
  }
  cut(t = 0, e = this.length) {
    if (e <= t) return []
    const s = this.slice(t, e),
      n = this.slice(0, t).concat(this.slice(e, this.length))
    return (this.data = []), n.forEach(o => this.append(o)), s
  }
  slice(t = 0, e = this.length) {
    if (t >= e) return []
    ;(t = this.correctIndex(t, !1)), (e = this.correctIndex(e, !0))
    let s = 0
    const n = []
    for (const o of this.data) {
      const i = s,
        a = o.length,
        l = s + a
      if (((s += a), t < l && e > i))
        if (typeof o == 'string') {
          const c = Math.max(0, t - i),
            h = Math.min(l, e) - i
          n.push(o.slice(c, h))
        } else n.push(o)
    }
    return n
  }
  toJSON() {
    return this.data.map(t => (typeof t == 'string' ? t : t.toJSON()))
  }
  indexOf(t) {
    let e = 0
    for (const s of this.data) {
      if (s === t) return e
      e += s.length
    }
    return -1
  }
  getContentAtIndex(t) {
    return this.slice(t, t + 1)[0]
  }
  toGrid() {
    const t = [0]
    let e = 0
    return (
      this.data.forEach(s => {
        ;(e += s.length), t.push(e)
      }),
      [...t]
    )
  }
  toString() {
    return this.data.map(t => (typeof t == 'string' ? t : t.toString())).join('')
  }
}
class pn {
  constructor(t, e = []) {
    ;(this.host = t),
      (this.slots = []),
      (this._index = 0),
      (this.changeEvent = new F()),
      (this.childSlotChangeEvent = new F()),
      (this.childSlotRemoveEvent = new F()),
      (this.changeListeners = new WeakMap()),
      (this.onChange = this.changeEvent.asObservable()),
      (this.onChildSlotChange = this.childSlotChangeEvent.asObservable()),
      (this.onChildSlotRemove = this.childSlotRemoveEvent.asObservable()),
      this.insert(...Array.from(new Set(e)))
  }
  get length() {
    return this.slots.length
  }
  get last() {
    return this.slots[this.length - 1] || null
  }
  get first() {
    return this.slots[0] || null
  }
  get index() {
    return this._index
  }
  indexOf(t) {
    return this.slots.indexOf(t)
  }
  remove(t) {
    const e = this.slots.indexOf(t)
    return e > -1 ? (this.retain(e), this.delete(1), !0) : !1
  }
  insertAfter(t, e) {
    const s = this.slots.indexOf(e)
    s > -1 && this.insertByIndex(t, s + 1)
  }
  insertBefore(t, e) {
    const s = this.slots.indexOf(e)
    s > -1 && this.insertByIndex(t, s)
  }
  insertByIndex(t, e) {
    e < 0 && (e = 0), e > this.slots.length && (e = this.slots.length), this.retain(e)
    const s = Array.isArray(t) ? t : [t]
    this.insert(...s)
  }
  push(...t) {
    this.retain(this.length), this.insert(...t)
  }
  pop() {
    if (this.length > 0) {
      const t = this.last
      return this.retain(this.length - 1), this.delete(1), t
    }
    return null
  }
  shift() {
    if (this.length > 0) {
      const t = this.first
      return this.retain(0), this.delete(1), t
    }
    return null
  }
  unshift(...t) {
    this.retain(0), this.insert(...t)
  }
  get(t) {
    return this.slots[t] || null
  }
  replace(t, e) {
    const s = this.indexOf(t)
    s > 0 && (this.retain(s), this.delete(1), this.insert(e))
  }
  toJSON() {
    return this.slots.map(t => t.toJSON())
  }
  toArray() {
    return [...this.slots]
  }
  clean() {
    this.retain(0), this.delete(this.length)
  }
  insert(...t) {
    if (t.length === 0) return
    const e = this._index
    this.slots.splice(e, 0, ...t),
      t.forEach(s => {
        s.parent && s.parent.slots.remove(s), s.changeMarker.reset(), (s.parent = this.host)
        const n = s.changeMarker.onChange.subscribe(o => {
          o.path.unshift(this.indexOf(s)),
            s.changeMarker.dirty
              ? this.host.changeMarker.markAsDirtied(o)
              : this.host.changeMarker.markAsChanged(o),
            this.childSlotChangeEvent.next(s)
        })
        n.add(
          s.changeMarker.onChildComponentRemoved.subscribe(o => {
            this.host.changeMarker.recordComponentRemoved(o)
          })
        ),
          n.add(
            s.changeMarker.onForceChange.subscribe(() => {
              s.changeMarker.dirty
                ? this.host.changeMarker.forceMarkDirtied()
                : this.host.changeMarker.forceMarkChanged()
            })
          ),
          this.changeListeners.set(s, n)
      }),
      (this._index += t.length),
      this.changeEvent.next({
        path: [],
        apply: [
          { type: 'retain', offset: e },
          ...t.map(s => ({ type: 'insertSlot', slot: s.toJSON(), ref: s }))
        ],
        unApply: [
          { type: 'retain', offset: e },
          { type: 'delete', count: t.length }
        ]
      })
  }
  retain(t) {
    t < 0 ? (this._index = 0) : t > this.length ? (this._index = this.length) : (this._index = t)
  }
  delete(t) {
    const e = this._index,
      s = this.slots.splice(e, t)
    s.forEach(n => {
      var o
      ;(o = this.changeListeners.get(n)) === null || o === void 0 || o.unsubscribe(),
        this.changeListeners.delete(n)
    }),
      this.changeEvent.next({
        path: [],
        apply: [
          { type: 'retain', offset: e },
          { type: 'delete', count: t }
        ],
        unApply: s
          .map(
            (n, o) => (
              (n.parent = null),
              [
                { type: 'retain', offset: e + o },
                { type: 'insertSlot', slot: n.toJSON(), ref: n }
              ]
            )
          )
          .flat()
      }),
      this.childSlotRemoveEvent.next(s)
  }
  cut(t = 0, e = this.length) {
    if (t >= e) return []
    const s = this.slots.slice(t, e)
    return this.retain(t), this.delete(e - t), s
  }
  slice(t, e) {
    return this.slots.slice(t, e)
  }
  has(t) {
    return this.indexOf(t) > -1
  }
  toString() {
    return this.slots.map(t => t.toString()).join('')
  }
}
oo()
const fs = jt('DefineComponent')
class os {
  constructor(t = null) {
    this.current = t
  }
}
class lo {
  constructor() {
    this.listeners = new Map()
  }
  add(t, e) {
    let s = this.listeners.get(t)
    s || ((s = []), this.listeners.set(t, s)), s.push(e)
  }
  get(t) {
    return this.listeners.get(t) || []
  }
  clean(t) {
    this.listeners.delete(t)
  }
}
const qe = new WeakMap(),
  He = []
function de() {
  const r = He[He.length - 1]
  if (!r) throw fs('cannot be called outside the component!')
  return r
}
function K(r) {
  const t = {
    name: r.name,
    separable: !!r.separable,
    instanceType: r.type,
    zenCoding: r.zenCoding,
    createInstance(e, s) {
      const n = new fn(),
        o = new F(),
        i = o.asObservable(),
        a = {
          update(d, f = !0) {
            return l.updateState(d, f)
          },
          onChange: i.pipe(it(d => d.newState))
        },
        l = {
          name: t.name,
          type: t.instanceType,
          separable: t.separable,
          changeMarker: n,
          parent: null,
          get parentComponent() {
            var d
            return ((d = l.parent) === null || d === void 0 ? void 0 : d.parent) || null
          },
          get state() {
            return h
          },
          length: 1,
          onStateChange: i,
          slots: null,
          extends: null,
          shortcutList: null,
          updateState(d, f = !0) {
            let p, m
            const g = h,
              x = an(g, d, (S, N) => {
                ;(p = S), (m = N)
              })
            return p.length === 0 && m.length === 0
              ? g
              : ((h = x),
                n.markAsDirtied({
                  path: [],
                  apply: [{ type: 'apply', patches: p, value: x, record: f }],
                  unApply: [{ type: 'apply', patches: m, value: g, record: f }]
                }),
                o.next({ oldState: g, newState: x, record: f }),
                x)
          },
          toJSON() {
            return { name: t.name, state: h != null ? h : null, slots: l.slots.toJSON() }
          },
          toString() {
            return l.slots.toString()
          }
        },
        c = {
          contextInjector: e,
          changeController: a,
          componentInstance: l,
          dynamicShortcut: [],
          eventCache: new lo()
        }
      He.push(c),
        (l.extends = r.setup(s)),
        pt(() => {
          qe.delete(l), u.forEach(d => d.unsubscribe())
        }),
        qe.set(l, c.eventCache),
        He.pop(),
        (l.slots = c.slots || new pn(l)),
        (l.shortcutList = c.dynamicShortcut)
      let h = Reflect.has(c, 'initState') ? c.initState : s == null ? void 0 : s.state
      const u = [
        l.slots.onChange.subscribe(d => {
          n.markAsDirtied(d)
        })
      ]
      return l
    }
  }
  return t
}
function G(r = ft, t, e) {
  return de().contextInjector.get(r, t, e)
}
function kt() {
  return de().componentInstance
}
function Z(r) {
  const t = de()
  if (Reflect.has(t, 'slots')) throw fs('only one unique slots is allowed for a component!')
  const e = new pn(t.componentInstance, r)
  return (t.slots = e), e
}
function ut(r) {
  const t = de()
  if (Reflect.has(t, 'initState')) throw fs('only one unique state is allowed for a component!')
  return (t.initState = r), t.changeController
}
function ps(r = null) {
  return new os(r)
}
function co(r) {
  de().dynamicShortcut.push(r)
}
class J {
  constructor(t, e) {
    ;(this.target = t), (this.data = e), (this._isPrevented = !1)
  }
  get isPrevented() {
    return this._isPrevented
  }
  preventDefault() {
    this._isPrevented = !0
  }
}
class ho extends J {
  constructor(t, e) {
    super(t, null), (this.getMenus = e), (this.isStopped = !1)
  }
  get stopped() {
    return this.isStopped
  }
  stopPropagation() {
    this.isStopped = !0
  }
  useMenus(t) {
    this.getMenus(t)
  }
}
class uo extends J {
  constructor(t, e) {
    super(t, null), (this.getRanges = e)
  }
  useRanges(t) {
    this.getRanges(t)
  }
}
function M(r, t, e) {
  if (typeof r != 'object' || r === null) return
  const s = qe.get(r)
  if (s) {
    if ((s.get(t).forEach(o => o(e)), t === 'onViewChecked')) {
      const o = s.get('onViewInit')
      s.clean('onViewInit'),
        o.forEach(i => {
          i(e)
        })
    }
    t === 'onDestroy' && qe.delete(r)
  }
}
function At(r) {
  return function (t) {
    const e = de()
    e && e.eventCache.add(r, t)
  }
}
function fo(r) {
  var t
  let e = r
  const s = []
  for (; e; ) {
    const n = new ho(e, o => {
      s.push(o)
    })
    if ((M(e, 'onContextMenu', n), n.stopped)) break
    e = ((t = e.parent) === null || t === void 0 ? void 0 : t.parent) || null
  }
  return s
}
const po = At('onPaste'),
  Ae = At('onContextMenu'),
  mn = At('onViewInit'),
  ms = At('onSlotRemove'),
  fe = At('onBreak'),
  mo = At('onContentInsert'),
  pt = At('onDestroy'),
  go = At('onGetRanges')
var gn, bn
const $s = jt('VElement'),
  Et = Symbol('parentNode')
class rt {
  constructor(t = '') {
    ;(this.textContent = t), (this[gn] = null)
  }
  get parentNode() {
    return this[Et]
  }
}
gn = Et
function yn(r, t = {}) {
  const e = t.children
  return Reflect.deleteProperty(t, 'children'), e ? C.createElement(r, t, e) : C.createElement(r, t)
}
class bo {
  constructor(t) {
    this.children = t
  }
}
function xn(r, t) {
  if (t instanceof C) r.push(t)
  else if (t instanceof rt) t.textContent && r.push(t)
  else if (typeof t == 'string' && t.length > 0) r.push(new rt(t))
  else if (t instanceof bo) for (const e of t.children.flat()) xn(r, e)
  else t !== !1 && t !== !0 && t !== null && typeof t < 'u' && r.push(new rt(String(t)))
}
class C {
  constructor(t, e = null, s = []) {
    ;(this.tagName = t),
      (this[bn] = null),
      (this.attrs = new Map()),
      (this.styles = new Map()),
      (this._children = []),
      (e = e || {})
    const n = (e.class || '').trim()
    ;(this.classes = new Set(n ? n.split(/\s+/g) : [])), Reflect.deleteProperty(e, 'class')
    const o = e.style || '',
      i = new Map()
    typeof o == 'string'
      ? o
          .split(';')
          .map(a => a.split(':'))
          .forEach(a => {
            !a[0] || !a[1] || i.set(a[0].trim(), a[1].trim())
          })
      : typeof o == 'object' &&
        Object.keys(o).forEach(a => {
          i.set(a, o[a])
        }),
      (this.styles = i),
      Reflect.deleteProperty(e, 'style'),
      Reflect.deleteProperty(e, 'slot'),
      (this.listeners = {}),
      Object.keys(e).forEach(a => {
        if (/^on[A-Z]/.test(a)) {
          const l = e[a]
          typeof l == 'function' && (this.listeners[a.replace(/^on/, '').toLowerCase()] = l)
        } else this.attrs.set(a, e[a])
      }),
      this.appendChild(...s)
  }
  static createElement(t, e = null, ...s) {
    const n = []
    return (
      s.flat(2).forEach(o => {
        xn(n, o)
      }),
      typeof t == 'function'
        ? t(Object.assign(Object.assign({}, e), { children: n }))
        : new C(t, e, n)
    )
  }
  get parentNode() {
    return this[Et]
  }
  get children() {
    return [...this._children]
  }
  appendChild(...t) {
    t.forEach(e => {
      var s
      ;(s = e.parentNode) === null || s === void 0 || s.removeChild(e),
        (e[Et] = this),
        this._children.push(e)
    })
  }
  removeChild(t) {
    const e = this._children.indexOf(t)
    if (e > -1) {
      this._children.splice(e, 1), (t[Et] = null)
      return
    }
    throw $s('node to be deleted is not a child of the current node.')
  }
  replaceChild(t, e) {
    var s
    const n = this._children.indexOf(e)
    if (n > -1) {
      ;(s = t.parentNode) === null || s === void 0 || s.removeChild(t),
        this._children.splice(n, 1, t),
        (e[Et] = null),
        (t[Et] = this)
      return
    }
    throw $s('node to be replaced is not a child of the current node.')
  }
}
bn = Et
function Us(r) {
  return r === null || typeof r > 'u'
}
class Pt {
  constructor(t) {
    ;(this.slot = t), (this.map = new Map())
  }
  merge(t, e) {
    let s = this.map.get(t)
    if (!s) {
      const o = e.value
      return Us(o) ? this : ((s = [e]), this.map.set(t, s), this)
    }
    const n = this.normalizeFormatRange(s, e)
    return n.length ? this.map.set(t, n) : this.map.delete(t), this
  }
  stretch(t, e) {
    return (
      this.map.forEach(s => {
        s.forEach(n => {
          n.endIndex < t || ((n.endIndex += e), n.startIndex >= t && (n.startIndex += e))
        })
      }),
      this
    )
  }
  split(t, e) {
    const s = Array.from({ length: e })
    return (
      Array.from(this.map).forEach(([n, o]) => {
        const i = this.tileRanges(o)
        i.splice(t, 0, ...s)
        const a = Pt.toRanges(i)
        this.map.set(n, a)
      }),
      this
    )
  }
  shrink(t, e) {
    return (
      this.map.forEach(s => {
        s.forEach(n => {
          n.endIndex <= t ||
            ((n.endIndex = Math.max(t, n.endIndex - e)),
            n.startIndex > t && (n.startIndex = Math.max(t, n.startIndex - e)))
        })
      }),
      Array.from(this.map.keys()).forEach(s => {
        const n = this.map.get(s),
          o = this.normalizeFormatRange(n)
        o.length ? this.map.set(s, o) : this.map.delete(s)
      }),
      this
    )
  }
  extract(t, e) {
    const s = new Pt(this.slot)
    return (
      this.map.forEach((n, o) => {
        const i = this.extractFormatRangesByFormatter(t, e, o)
        i.length && s.map.set(o, i)
      }),
      s
    )
  }
  createFormatByRange(t, e, s) {
    const n = new Pt(t)
    return (
      this.map.forEach((o, i) => {
        const a = this.extractFormatRangesByFormatter(e, s, i)
        a.length &&
          n.map.set(
            i,
            a.map(l => ((l.startIndex -= e), (l.endIndex -= e), l))
          )
      }),
      n
    )
  }
  extractFormatRangesByFormatter(t, e, s) {
    const n = []
    return (
      (this.map.get(s) || []).forEach(i => {
        if (i.startIndex > e || i.endIndex < t) return
        const a = Math.max(i.startIndex, t),
          l = Math.min(i.endIndex, e)
        a < l && n.push({ startIndex: a, endIndex: l, value: i.value })
      }),
      n
    )
  }
  discard(t, e, s) {
    const n = this.map.get(t)
    return n && this.normalizeFormatRange(n, { startIndex: e, endIndex: s, value: null }), this
  }
  extractFormatsByIndex(t) {
    const e = []
    return (
      t === 0
        ? this.map.forEach((s, n) => {
            s.forEach(o => {
              o.startIndex === 0 && e.push([n, o.value])
            })
          })
        : this.map.forEach((s, n) => {
            s.forEach(o => {
              o.startIndex < t && o.endIndex >= t && e.push([n, o.value])
            })
          }),
      e
    )
  }
  toGrid() {
    const t = new Set()
    return (
      t.add(0),
      t.add(this.slot.length),
      this.map.forEach(e => {
        e.forEach(s => {
          t.add(s.startIndex), t.add(s.endIndex)
        })
      }),
      [...t].sort((e, s) => e - s)
    )
  }
  toJSON() {
    const t = {}
    return (
      this.map.forEach((e, s) => {
        t[s.name] = e.map(n => Object.assign({}, n))
      }),
      t
    )
  }
  toTree(t, e) {
    const s = this.extract(t, e),
      n = { startIndex: t, endIndex: e }
    let o = e,
      i = t
    const a = [],
      l = []
    if (
      (Array.from(s.map.keys()).forEach(h => {
        s.map.get(h).forEach(d => {
          d.startIndex === t && d.endIndex === e
            ? h.columned
              ? l.push(Object.assign({ formatter: h }, d))
              : (a.push(Object.assign({ formatter: h }, d)), s.map.delete(h))
            : d.startIndex < o
            ? ((o = d.startIndex), (i = d.endIndex))
            : d.startIndex === o && (i = Math.max(i, d.endIndex))
        })
      }),
      s.map.size > l.length)
    ) {
      if (((n.children = []), t < o))
        if (l.length) {
          const d = s.extract(t, o).toTree(t, o)
          n.children.push(d)
        } else n.children.push({ startIndex: t, endIndex: o })
      const h = function (d, f) {
          f.formats
            ? d.children.push(f)
            : f.children
            ? d.children.push(...f.children)
            : d.children.push(f)
        },
        u = s.toTree(o, i)
      if ((h(n, u), i < e)) {
        const f = s.extract(i, e).toTree(i, e)
        h(n, f)
      }
    } else a.push(...l)
    return a.length && (n.formats = a), n
  }
  toArray() {
    const t = []
    return (
      Array.from(this.map).forEach(e => {
        const s = e[0]
        e[1].forEach(n => {
          t.push(Object.assign(Object.assign({}, n), { formatter: s }))
        })
      }),
      t
    )
  }
  normalizeFormatRange(t, e) {
    e && (t = [...t, e])
    const s = this.tileRanges(t)
    return Pt.toRanges(s)
  }
  tileRanges(t) {
    const e = []
    return (
      t.forEach(s => {
        ;(e.length = Math.max(e.length, s.endIndex)), e.fill(s.value, s.startIndex, s.endIndex)
      }),
      (e.length = Math.min(e.length, this.slot.length)),
      e
    )
  }
  static toRanges(t) {
    const e = []
    let s = null
    for (let n = 0; n < t.length; n++) {
      const o = t[n]
      if (Us(o)) {
        s = null
        continue
      }
      if (Pt.equal(s == null ? void 0 : s.value, o)) {
        s.endIndex = n + 1
        continue
      }
      ;(s = { startIndex: n, endIndex: n + 1, value: o }), e.push(s)
    }
    return e
  }
  static equal(t, e) {
    if (t === e) return !0
    if (typeof t == 'object' && typeof e == 'object') {
      const s = Object.keys(t),
        n = Object.keys(e)
      if (s.length === n.length) return s.every(o => n.includes(o) && e[o] === t[o])
    }
    return !1
  }
}
var b
;(function (r) {
  ;(r[(r.Text = 1)] = 'Text'),
    (r[(r.InlineComponent = 2)] = 'InlineComponent'),
    (r[(r.BlockComponent = 3)] = 'BlockComponent')
})(b || (b = {}))
class vn extends Array {
  constructor() {
    super(...arguments), (this.attributes = new Map())
  }
}
class T {
  constructor(t, e) {
    ;(this.state = e),
      (this.parent = null),
      (this.changeMarker = new fn()),
      (this.componentChangeListeners = new WeakMap()),
      (this.childComponentRemoveEvent = new F()),
      (this.id = Math.random()),
      (this._index = 0),
      (this.content = new ao()),
      (this.format = new Pt(this)),
      (this.attributes = new Map()),
      (this.contentChangeEvent = new F()),
      (this.stateChangeEvent = new F()),
      (this.schema = t.sort()),
      (this.onContentChange = this.contentChangeEvent.asObservable()),
      (this.onStateChange = this.stateChangeEvent.asObservable()),
      (this.onChildComponentRemove = this.childComponentRemoveEvent.asObservable()),
      this.content.append(T.emptyPlaceholder),
      (this._index = 0)
  }
  static get emptyPlaceholder() {
    return `
`
  }
  get parentSlot() {
    var t
    return ((t = this.parent) === null || t === void 0 ? void 0 : t.parent) || null
  }
  get length() {
    return this.content.length
  }
  get isEmpty() {
    return this.length === 1 && this.getContentAtIndex(0) === T.emptyPlaceholder
  }
  get index() {
    return this.isEmpty ? 0 : this._index
  }
  setAttribute(t, e) {
    const s = this.attributes.has(t),
      n = this.attributes.get(t)
    this.attributes.set(t, e)
    const o = [{ type: 'attrSet', name: t.name, value: e }]
    this.sliceContent().forEach(i => {
      typeof i != 'string' &&
        i.slots.toArray().forEach(a => {
          a.setAttribute(t, e)
        })
    }),
      this.changeMarker.markAsDirtied({
        path: [],
        apply: o,
        unApply: [
          s ? { type: 'attrSet', name: t.name, value: n } : { type: 'attrRemove', name: t.name }
        ]
      }),
      this.contentChangeEvent.next(o)
  }
  getAttribute(t) {
    var e
    return (e = this.attributes.get(t)) !== null && e !== void 0 ? e : null
  }
  getAttributes() {
    return Array.from(this.attributes.entries())
  }
  removeAttribute(t) {
    if (
      (this.sliceContent().forEach(o => {
        typeof o != 'string' &&
          o.slots.toArray().forEach(i => {
            i.removeAttribute(t)
          })
      }),
      !this.attributes.has(t))
    )
      return
    const s = this.attributes.get(t)
    this.attributes.delete(t)
    const n = [{ type: 'attrRemove', name: t.name }]
    this.changeMarker.markAsDirtied({
      path: [],
      apply: n,
      unApply: [{ type: 'attrSet', name: t.name, value: s }]
    }),
      this.contentChangeEvent.next(n)
  }
  hasAttribute(t) {
    return this.attributes.has(t)
  }
  updateState(t, e = !0) {
    let s, n
    const o = this.state,
      i = an(o, t, (l, c) => {
        ;(s = l), (n = c)
      })
    if (s.length === 0 && n.length === 0) return o
    this.state = i
    const a = { type: 'apply', patches: s, value: i, record: e }
    return (
      this.changeMarker.markAsDirtied({
        path: [],
        apply: [a],
        unApply: [{ type: 'apply', patches: n, value: o, record: e }]
      }),
      this.stateChangeEvent.next({ newState: i, oldState: o, record: e }),
      i
    )
  }
  write(t, e, s) {
    const n = this.index,
      i = (this.isEmpty || n === 0 ? this.format.extract(0, 1) : this.format.extract(n - 1, n))
        .toArray()
        .map(a => [a.formatter, a.value])
    return e && (Array.isArray(e) ? i.push(...e) : i.push([e, s])), this.insert(t, i)
  }
  insert(t, e, s) {
    const n = typeof t == 'string' ? b.Text : t.type
    if (!this.schema.includes(n)) return !1
    this.getContentAtIndex(this.index - 1) === T.placeholder &&
      (this.retain(this.index - 1), this.delete(1))
    const i = this.isEmpty
    let a, l
    const c = this.index
    if (typeof t == 'string') {
      if (t.length === 0) return !0
      ;(a = t), (l = t.length)
    } else {
      ;(l = 1), (a = t.toJSON()), t.parent && t.parent.removeComponent(t), (t.parent = this)
      const d = t.changeMarker.onChange.subscribe(f => {
        f.path.unshift(this.indexOf(t)), this.changeMarker.markAsChanged(f)
      })
      d.add(
        t.changeMarker.onChildComponentRemoved.subscribe(f => {
          this.changeMarker.recordComponentRemoved(f)
        })
      ),
        d.add(
          t.changeMarker.onForceChange.subscribe(() => {
            this.changeMarker.forceMarkChanged()
          })
        ),
        this.componentChangeListeners.set(t, d)
    }
    let h = []
    if (
      (e && (Array.isArray(e) ? (h = e) : h.push([e, s])),
      this.format.split(c, l),
      this.content.insert(c, t),
      this.applyFormats(h, c, l),
      i && this._index === 0)
    ) {
      const d = this.length - 1
      this.content.cut(d), this.format.shrink(d, 1)
    }
    this._index = c + l
    const u = [
      { type: 'retain', offset: c },
      h.length
        ? {
            type: 'insert',
            content: a,
            ref: t,
            formats: h.reduce((d, f) => ((d[f[0].name] = f[1]), d), {})
          }
        : { type: 'insert', content: a, ref: t }
    ]
    return (
      this.changeMarker.markAsDirtied({
        path: [],
        apply: u,
        unApply: [
          { type: 'retain', offset: c },
          { type: 'delete', count: l }
        ]
      }),
      this.contentChangeEvent.next(u),
      !0
    )
  }
  retain(t, e, s) {
    let n = []
    if (e)
      if (Array.isArray(e)) {
        if (e.length === 0) return !0
        n = e
      } else n.push([e, s])
    const o = this.length
    if (n.length === 0)
      return (
        t < 0 && (t = 0), t > o && (t = o), (this._index = this.content.correctIndex(t, !1)), !0
      )
    const i = this._index
    let a = this.content.correctIndex(i + t, !0)
    a > o && (a = o)
    let l = i
    const c = [],
      h = [],
      u = n.reduce((f, p) => ((f[p[0].name] = p[1]), f), {}),
      d = n.reduce((f, p) => ((f[p[0].name] = null), f), {})
    if (a - i === 1) {
      const f = this.getContentAtIndex(i)
      typeof f != 'string' && f.type === b.InlineComponent && f.changeMarker.forceMarkDirtied()
    }
    return (
      this.content.slice(i, a).forEach(f => {
        const p = f.length
        if (typeof f == 'string' || f.type !== b.BlockComponent) {
          const m = this.format.extract(l, l + p)
          this.applyFormats(n, l, p),
            c.push(
              { type: 'retain', offset: l },
              { type: 'retain', offset: p, formats: Object.assign({}, u) }
            ),
            h.push(
              { type: 'retain', offset: l },
              { type: 'retain', offset: p, formats: d },
              ...T.createActionByFormat(m)
            )
        } else
          f.slots.toArray().forEach(m => {
            m.retain(0), m.retain(m.length, n)
          })
        l += p
      }),
      (c.length || h.length) &&
        (this.changeMarker.markAsDirtied({ path: [], apply: c, unApply: h }),
        c.length && this.contentChangeEvent.next(c)),
      !0
    )
  }
  delete(t) {
    if (t <= 0) return !1
    const e = this._index
    let s = this.content.correctIndex(this._index + t, !0)
    ;(t = s - e), s > this.length && (s = this.length)
    const n = this.content.cut(e, s),
      o = this.format.extract(e, s)
    this.format.shrink(e, t),
      this.length === 0 &&
        (this.content.append(T.emptyPlaceholder), (this.format = o.extract(0, 1)))
    const i = [
        { type: 'retain', offset: e },
        { type: 'delete', count: t }
      ],
      a = []
    return (
      this.changeMarker.markAsDirtied({
        path: [],
        apply: i,
        unApply: [
          { type: 'retain', offset: e },
          ...n.map(l => {
            var c
            return typeof l == 'string'
              ? { type: 'insert', content: l, ref: l }
              : (a.push(l),
                this.changeMarker.recordComponentRemoved(l),
                (c = this.componentChangeListeners.get(l)) === null ||
                  c === void 0 ||
                  c.unsubscribe(),
                this.componentChangeListeners.delete(l),
                (l.parent = null),
                { type: 'insert', content: l.toJSON(), ref: l })
          }),
          ...T.createActionByFormat(o)
        ]
      }),
      this.contentChangeEvent.next(i),
      a.length && this.childComponentRemoveEvent.next(a),
      !0
    )
  }
  applyFormat(t, e) {
    this.retain(e.startIndex), this.retain(e.endIndex - e.startIndex, t, e.value)
  }
  removeComponent(t) {
    const e = this.indexOf(t)
    return e > -1 ? (this.retain(e), this.delete(1)) : !1
  }
  cut(t = 0, e = this.length) {
    const s = this.cutTo(new T(this.schema, this.state), t, e)
    return (
      this.attributes.forEach((n, o) => {
        s.setAttribute(o, n)
      }),
      s
    )
  }
  cutTo(t, e = 0, s = this.length) {
    e < 0 && (e = 0)
    const n = this.length
    if ((s > n && (s = n), e > s)) return t
    if (
      (t.getAttributes().length === 0 &&
        this.attributes.forEach((l, c) => {
          t.setAttribute(c, l)
        }),
      (e = this.content.correctIndex(e, !1)),
      (s = this.content.correctIndex(s, !0)),
      this.isEmpty)
    )
      return (
        (t.format = this.format.createFormatByRange(t, 0, 1)), this.retain(e), this.delete(s - e), t
      )
    if (
      e === n ||
      (e === n - 1 &&
        this.content.getContentAtIndex(n - 1) ===
          `
`)
    )
      return (
        (t.format = this.format.createFormatByRange(t, e - 1, e)),
        this.retain(e),
        this.delete(s - e),
        t
      )
    this.retain(e)
    const o = this.content.slice(this.index, s),
      i = this.format.createFormatByRange(t, this.index, s)
    this.delete(s - this.index)
    const a = new T([...t.schema])
    return (
      o.forEach(l => {
        a.insert(l)
      }),
      (a.format = i.createFormatByRange(a, 0, a.length)),
      a.toDelta().forEach(l => {
        t.insert(l.insert, l.formats)
      }),
      t
    )
  }
  indexOf(t) {
    return this.content.indexOf(t)
  }
  getContentAtIndex(t) {
    return this.content.getContentAtIndex(t)
  }
  sliceContent(t = 0, e = this.length) {
    return this.content.slice(t, e)
  }
  createFormatTree() {
    return this.format.toTree(0, this.length)
  }
  getFormatRangesByFormatter(t, e, s) {
    return this.format.extractFormatRangesByFormatter(e, s, t)
  }
  getFormats() {
    return this.format.toArray()
  }
  extractFormatsByIndex(t) {
    return this.format.extractFormatsByIndex(t)
  }
  toJSON() {
    var t
    const e = {}
    return (
      this.attributes.forEach((s, n) => {
        e[n.name] = s
      }),
      {
        schema: this.schema,
        content: this.content.toJSON(),
        attributes: e,
        formats: this.format.toJSON(),
        state: (t = this.state) !== null && t !== void 0 ? t : null
      }
    )
  }
  toString() {
    return this.content.toString()
  }
  toDelta() {
    const t = new vn()
    if (this.length === 0) return t
    const e = this.format.toGrid(),
      s = this.content.toGrid(),
      o = [...new Set([...e, ...s])].sort((a, l) => a - l)
    this.attributes.forEach((a, l) => {
      t.attributes.set(l, a)
    })
    let i = o.shift()
    for (; o.length; ) {
      const a = o.shift()
      t.push({
        insert: this.content.slice(i, a)[0],
        formats: this.format
          .extract(i, a)
          .toArray()
          .map(l => [l.formatter, l.value])
      }),
        (i = a)
    }
    return t
  }
  insertDelta(t) {
    for (
      t.attributes.forEach((e, s) => {
        this.setAttribute(s, e)
      });
      t.length;

    ) {
      const e = t[0]
      if (this.insert(e.insert, e.formats)) t.shift()
      else break
    }
    return t
  }
  cleanFormats(t = [], e = 0, s = this.length) {
    const n = this.getFormats()
    n.length
      ? n.forEach(o => {
          ;(typeof t == 'function' ? t(o.formatter) : t.includes(o.formatter)) ||
            (this.retain(e), this.retain(s - e, o.formatter, null))
        })
      : this.sliceContent(e, s).forEach(o => {
          typeof o != 'string' &&
            o.slots.toArray().forEach(i => {
              i.cleanFormats(t)
            })
        })
  }
  cleanAttributes(t = []) {
    Array.from(this.attributes.keys()).forEach(e => {
      ;(typeof t == 'function' ? t(e) : t.includes(e)) || this.removeAttribute(e)
    }),
      this.sliceContent().forEach(e => {
        typeof e != 'string' &&
          e.slots.toArray().forEach(s => {
            s.cleanAttributes(t)
          })
      })
  }
  applyFormats(t, e, s) {
    t.forEach(n => {
      const o = n[0],
        i = n[1]
      this.format.merge(o, { startIndex: e, endIndex: e + s, value: i })
    })
  }
  static createActionByFormat(t) {
    return t
      .toArray()
      .map(e => [
        { type: 'retain', offset: e.startIndex },
        {
          type: 'retain',
          offset: e.endIndex - e.startIndex,
          formats: { [e.formatter.name]: e.value }
        }
      ])
      .flat()
  }
}
T.placeholder = '\u200B'
var X
;(function (r) {
  ;(r.Output = 'Output'), (r.Readonly = 'Readonly'), (r.Editing = 'Editing')
})(X || (X = {}))
let Y = class {
  constructor(t) {
    ;(this._readonly = !1),
      (this.readonlyStateChangeEvent = new F()),
      (this.onReadonlyStateChange = this.readonlyStateChangeEvent.asObservable().pipe(Lt())),
      (this._readonly = t)
  }
  get readonly() {
    return this._readonly
  }
  set readonly(t) {
    ;(this._readonly = t), this.readonlyStateChangeEvent.next(t)
  }
}
Y = ct([j(), Mt(0, yt(dn)), ht('design:paramtypes', [Boolean])], Y)
var ot
class gs {}
let P = (ot = class {
  constructor(t, e) {
    ;(this.root = t),
      (this.controller = e),
      (this.connector = {
        setSelection: i => {
          if (i === null) {
            if (
              this.startSlot === null &&
              this.endSlot === null &&
              this.startOffset === null &&
              this.endOffset === null
            )
              return
            this.unSelect()
            return
          }
          const { focusOffset: a, focusSlot: l, anchorOffset: c, anchorSlot: h } = i
          ;(l === this.focusSlot &&
            h === this.anchorSlot &&
            a === this.focusOffset &&
            c === this.anchorOffset) ||
            this.setBaseAndExtent(h, c, l, a)
        }
      }),
      (this._commonAncestorSlot = null),
      (this._commonAncestorComponent = null),
      (this._startSlot = null),
      (this._endSlot = null),
      (this._startOffset = null),
      (this._endOffset = null),
      (this._anchorSlot = null),
      (this._anchorOffset = null),
      (this._focusSlot = null),
      (this._focusOffset = null),
      (this.changeEvent = new F()),
      (this._nativeSelectionDelegate = !0),
      (this.subscriptions = []),
      (this.customRanges = null)
    let s
    this.onChange = this.changeEvent.asObservable().pipe(
      Lt((i, a) =>
        i && a
          ? !(
              i.focusOffset === a.focusOffset &&
              i.anchorOffset === a.anchorOffset &&
              i.focusSlot === a.focusSlot &&
              i.anchorSlot === a.anchorSlot
            )
          : i !== a
      ),
      Un()
    )
    let n = null
    const o = []
    this.subscriptions.push(
      e.onReadonlyStateChange.subscribe(i => {
        i ? this.bridge.disConnect() : this.bridge.connect(this.connector)
      }),
      this.onChange
        .pipe(
          it(() => this.commonAncestorComponent),
          Lt()
        )
        .subscribe(i => {
          for (; o.length; ) {
            const a = o.shift()
            let l = a
            for (; l; ) l === t.component && M(a, 'onFocusOut'), (l = l.parentComponent)
          }
          for (; i; ) o.push(i), M(i, 'onFocusIn'), (i = i.parentComponent)
        }),
      this.onChange.pipe(it(() => this.commonAncestorComponent)).subscribe(i => {
        let a = null
        i &&
          M(
            i,
            'onGetRanges',
            new uo(i, l => {
              a = l
            })
          ),
          (this.customRanges = a)
      }),
      this.onChange
        .pipe(
          it(() => {
            var i, a, l
            return (
              (((i = this.startSlot) === null || i === void 0 ? void 0 : i.parent) ===
                ((a = this.endSlot) === null || a === void 0 ? void 0 : a.parent) &&
                ((l = this.startSlot) === null || l === void 0 ? void 0 : l.parent)) ||
              null
            )
          }),
          Lt()
        )
        .subscribe(i => {
          if (s) {
            let a = s
            for (; a; ) a === t.component && M(s, 'onBlur'), (a = a.parentComponent)
          }
          i && M(i, 'onFocus'), (s = i)
        }),
      this.onChange
        .pipe(
          it(() => {
            if (n) {
              let i = n.parentComponent
              for (; i; ) i === t.component && M(n, 'onUnselect'), (i = i.parentComponent)
              n = null
            }
            if (!this.isSelected) return null
            if (this.startSlot === this.endSlot && this.endOffset - this.startOffset === 1) {
              const i = this.startSlot.getContentAtIndex(this.startOffset)
              if (typeof i != 'string') return i
            }
            return null
          }),
          Lt()
        )
        .subscribe(i => {
          i && (M(i, 'onSelected'), (n = i))
        })
    ),
      Promise.resolve().then(() => (this.nativeSelectionDelegate = !0))
  }
  get isSelected() {
    return ![this.startSlot, this.startOffset, this.endSlot, this.endOffset].includes(null)
  }
  get isCollapsed() {
    return this.isSelected && this.startSlot === this.endSlot && this.startOffset === this.endOffset
  }
  get startSlot() {
    return this._startSlot
  }
  get startOffset() {
    return this._startOffset
  }
  get endSlot() {
    return this._endSlot
  }
  get endOffset() {
    return this._endOffset
  }
  get anchorSlot() {
    return this._anchorSlot
  }
  get anchorOffset() {
    return this._anchorOffset
  }
  get focusSlot() {
    return this._focusSlot
  }
  get focusOffset() {
    return this._focusOffset
  }
  get commonAncestorSlot() {
    return this._commonAncestorSlot
  }
  get commonAncestorComponent() {
    return this._commonAncestorComponent
  }
  get nativeSelectionDelegate() {
    return this._nativeSelectionDelegate
  }
  set nativeSelectionDelegate(t) {
    ;(this._nativeSelectionDelegate = t),
      !this.controller.readonly &&
        (t ? this.bridge.connect(this.connector) : this.bridge.disConnect())
  }
  createSnapshot() {
    const { anchorSlot: t, anchorOffset: e, focusSlot: s, focusOffset: n } = this
    return {
      restore: o => {
        ;(this._anchorSlot = t),
          (this._anchorOffset = e),
          (this._focusSlot = s),
          (this._focusOffset = n),
          this.resetStartAndEndPosition(),
          o && this.restore(!0)
      }
    }
  }
  destroy() {
    this.subscriptions.forEach(t => t.unsubscribe()), (this.subscriptions = [])
  }
  setBaseAndExtent(t, e, s, n) {
    this.controller.readonly ||
      ((this._anchorSlot = t),
      t.retain(e),
      (this._anchorOffset = t.index),
      (this._focusSlot = s),
      s.retain(n),
      (this._focusOffset = s.index),
      this.resetStartAndEndPosition())
  }
  getRanges() {
    return this.customRanges
      ? this.customRanges.map(t => ({
          startOffset: t.startIndex,
          endOffset: t.endIndex,
          startSlot: t.slot,
          endSlot: t.slot
        }))
      : this.isSelected
      ? [
          {
            startSlot: this.startSlot,
            endSlot: this.endSlot,
            startOffset: this.startOffset,
            endOffset: this.endOffset
          }
        ]
      : []
  }
  setAnchor(t, e) {
    this.controller.readonly ||
      ((this._anchorSlot = t),
      t.retain(e),
      (this._anchorOffset = t.index),
      this.resetStartAndEndPosition())
  }
  setFocus(t, e) {
    this.controller.readonly ||
      ((this._focusSlot = t),
      t.retain(e),
      (this._focusOffset = t.index),
      this.resetStartAndEndPosition())
  }
  setPosition(t, e) {
    this.controller.readonly ||
      ((this._focusSlot = this._anchorSlot = t),
      t.retain(e),
      (this._focusOffset = this._anchorOffset = t.index),
      this.resetStartAndEndPosition())
  }
  selectSlot(t) {
    this.setBaseAndExtent(t, 0, t, t.length)
  }
  selectFirstPosition(t, e = !1) {
    const s = t.slots
    if (s.length) {
      const n = s.first,
        { slot: o, offset: i } = this.findFirstPosition(n, !1)
      this.setBaseAndExtent(o, i, o, i)
    } else this.selectComponentFront(t)
    e && this.restore()
  }
  selectLastPosition(t, e = !1) {
    const s = t.slots
    if (s.length) {
      const n = s.last,
        { slot: o, offset: i } = this.findLastPosition(n, !1)
      this.setBaseAndExtent(o, i, o, i)
    } else this.selectComponentEnd(t)
    e && this.restore()
  }
  selectComponentFront(t, e = !1) {
    const s = t.parent
    if (s) {
      const n = s.indexOf(t)
      this.setBaseAndExtent(s, n, s, n)
    } else this.unSelect()
    e && this.restore()
  }
  selectComponentEnd(t, e = !1) {
    const s = t.parent
    if (s) {
      const n = s.indexOf(t)
      this.setBaseAndExtent(s, n + 1, s, n + 1)
    } else this.unSelect()
    e && this.restore()
  }
  selectChildSlots(t, e = !1) {
    const s = t.slots
    if (s.length) {
      const n = this.findFirstPosition(s.first, !1),
        o = this.findLastPosition(s.last, !1)
      this.setBaseAndExtent(n.slot, n.offset, o.slot, o.offset)
    } else this.selectComponent(t, !1)
    e && this.restore()
  }
  selectComponent(t, e = !1) {
    const s = t.parent
    if (s) {
      const n = s.indexOf(t)
      this.setBaseAndExtent(s, n, s, n + 1), e && this.restore()
    }
  }
  getSelectedScopes(t = !1) {
    if (!this.isSelected) return []
    if (this.isCollapsed)
      return [{ slot: this.startSlot, startIndex: this.startOffset, endIndex: this.startOffset }]
    const e = this.getScopes(this.startSlot, this.startOffset, this.endSlot, this.endOffset, !0)
    if (t) {
      const s = []
      return (
        e.forEach(n => {
          s.push(...this.decomposeSlotRange(n.slot, n.startIndex, n.endIndex))
        }),
        s
      )
    }
    return e
  }
  toPrevious() {
    var t, e
    if (!this.isCollapsed) {
      this.collapse(!0), this.restore()
      return
    }
    const { startSlot: s, startOffset: n } = this,
      o = this.getPreviousPosition()
    if (o) {
      this.setPosition(o.slot, o.offset)
      let i = null
      if (s === this.startSlot)
        if (n === this.startOffset) {
          const a = this.root.component.slots.first
          this.setPosition(a, 0)
        } else n - this.startOffset === 1 && (i = s.getContentAtIndex(this.startOffset))
      else
        (s == null ? void 0 : s.parent) !==
          ((t = this.startSlot) === null || t === void 0 ? void 0 : t.parent) &&
          (i = ((e = this.endSlot) === null || e === void 0 ? void 0 : e.parent) || null)
      if (i && typeof i != 'string') {
        const a = new J(i, null)
        M(i, 'onSelectionFromEnd', a),
          a.isPrevented ? this.setPosition(s, n) : i.slots.length === 0 && this.selectComponent(i)
      }
      this.restore()
    }
  }
  toNext() {
    var t, e
    if (!this.isCollapsed) {
      this.collapse(), this.restore()
      return
    }
    const { endSlot: s, endOffset: n } = this,
      o = this.getNextPosition()
    if (o) {
      let i = o.offset
      const a = o.slot
      for (; i <= a.length && (this.setPosition(a, i), a.index < i); ) i++
      let l = null
      if (s === this.endSlot)
        if (n === this.endOffset) {
          const c = this.root.component.slots.last
          this.setPosition(c, c.length)
        } else this.endOffset - n === 1 && (l = s.getContentAtIndex(n))
      else
        (s == null ? void 0 : s.parent) !==
          ((t = this.endSlot) === null || t === void 0 ? void 0 : t.parent) &&
          (l = ((e = this.endSlot) === null || e === void 0 ? void 0 : e.parent) || null)
      if (l && typeof l != 'string') {
        const c = new J(l, null)
        M(l, 'onSelectionFromFront', c),
          c.isPrevented ? this.setPosition(s, n) : l.slots.length === 0 && this.selectComponent(l)
      }
      this.restore()
    }
  }
  toPreviousLine() {
    const t = this.bridge.getPreviousLinePositionByCurrent({
      slot: this.focusSlot,
      offset: this.focusOffset
    })
    t && (this.setPosition(t.slot, t.offset), this.restore())
  }
  toNextLine() {
    const t = this.bridge.getNextLinePositionByCurrent({
      slot: this.focusSlot,
      offset: this.focusOffset
    })
    t && (this.setPosition(t.slot, t.offset), this.restore())
  }
  wrapToAfter() {
    this.wrapTo(!1)
  }
  wrapToBefore() {
    this.wrapTo(!0)
  }
  wrapToPreviousLine() {
    const t = this.bridge.getPreviousLinePositionByCurrent({
      slot: this.focusSlot,
      offset: this.focusOffset
    })
    t && (this.setFocus(t.slot, t.offset), this.restore())
  }
  wrapToNextLine() {
    const t = this.bridge.getNextLinePositionByCurrent({
      slot: this.focusSlot,
      offset: this.focusOffset
    })
    t && (this.setFocus(t.slot, t.offset), this.restore())
  }
  collapse(t = !1) {
    t
      ? this.setPosition(this.startSlot, this.startOffset)
      : this.setPosition(this.endSlot, this.endOffset)
  }
  restore(t = !0) {
    if (this.nativeSelectionDelegate) {
      const e = this.focusSlot,
        s = this.focusOffset,
        n = this.anchorSlot,
        o = this.anchorOffset
      e && n
        ? (e.retain(s),
          n.retain(o),
          this.bridge.restore({ focusOffset: s, focusSlot: e, anchorOffset: o, anchorSlot: n }, t))
        : this.bridge.restore(null, t)
    }
  }
  getPaths() {
    if (!this.isSelected) return { anchor: [], focus: [] }
    const t = this.getPathsBySlot(this.anchorSlot) || []
    t.push(this.anchorOffset)
    const e = this.getPathsBySlot(this.focusSlot) || []
    return e.push(this.focusOffset), { anchor: t, focus: e }
  }
  usePaths(t) {
    const e = this.findPositionByPath(t.anchor),
      s = this.findPositionByPath(t.focus)
    e && s && this.setBaseAndExtent(e.slot, e.offset, s.slot, s.offset)
  }
  unSelect() {
    ;(this._anchorSlot = this._focusSlot = this._anchorOffset = this._focusOffset = null),
      this.resetStartAndEndPosition(),
      this.restore()
  }
  selectAll() {
    const t = this.root.component.slots.get(0)
    this.setBaseAndExtent(t, 0, t, t.length), this.restore()
  }
  getNextPosition() {
    return this.isSelected ? this.getNextPositionByPosition(this.focusSlot, this.focusOffset) : null
  }
  getPreviousPosition() {
    return this.isSelected
      ? this.getPreviousPositionByPosition(this.focusSlot, this.focusOffset)
      : null
  }
  findSlotByPaths(t) {
    const e = ot.findTreeNode(t, this.root.component)
    return e instanceof T ? e : null
  }
  findComponentByPaths(t) {
    if (t.length === 0) return this.root.component
    const e = ot.findTreeNode(t, this.root.component)
    return e instanceof T ? null : e
  }
  getBlocks() {
    const t = []
    return (
      this.isSelected &&
        this.getGreedyRanges().forEach(s => {
          t.push(...this.decomposeSlotRange(s.slot, s.startIndex, s.endIndex))
        }),
      t
    )
  }
  getSlotRangeInCommonAncestorComponent() {
    const t = this.commonAncestorComponent
    if (!t) return null
    let e = this.startSlot,
      s = this.endSlot,
      n,
      o
    for (;;) {
      const i = e.parent
      if (i === t) {
        n = i.slots.indexOf(e)
        break
      }
      if (i != null && i.parent) e = i.parent
      else return null
    }
    for (;;) {
      const i = s.parent
      if (i === t) {
        o = i.slots.indexOf(s) + 1
        break
      }
      if (i != null && i.parent) s = i.parent
      else return null
    }
    return n >= 0 && o >= 1 ? { startOffset: n, endOffset: o, component: t } : null
  }
  getGreedyRanges() {
    return this.isSelected
      ? this.getScopes(
          this.startSlot,
          ot.getInlineContentStartIndex(this.startSlot, this.startOffset),
          this.endSlot,
          ot.getInlineContentEndIndex(this.endSlot, this.endOffset)
        )
      : []
  }
  findFirstPosition(t, e = !0) {
    const s = t.getContentAtIndex(0)
    if (e && s && typeof s != 'string') {
      const n = s.slots.first
      if (n) return this.findFirstPosition(n)
    }
    return { offset: 0, slot: t }
  }
  findLastPosition(t, e = !0) {
    const s = t.getContentAtIndex(t.length - 1)
    if (e && s && typeof s != 'string') {
      const n = s.slots.last
      if (n) return this.findLastPosition(n)
    }
    return {
      offset:
        s ===
        `
`
          ? t.length - 1
          : t.length,
      slot: t
    }
  }
  getCommonAncestorSlotScope() {
    if (!this.isSelected) return null
    let t = this.startSlot,
      e = this.endSlot,
      s = this.startSlot,
      n = this.endSlot,
      o = this.startOffset,
      i = this.endOffset
    const a = this.commonAncestorSlot,
      l = this.commonAncestorComponent
    let c = null,
      h = null
    for (; t !== a; ) (c = t.parent), c === l && (s = t), (t = c.parent), (o = t.indexOf(c))
    for (; e !== a; ) (h = e.parent), h === l && (n = e), (e = h.parent), (i = e.indexOf(h))
    return {
      startOffset: o,
      startSlot: t,
      startChildComponent: c,
      endOffset: i + 1,
      endSlot: e,
      endChildComponent: h,
      startChildSlot: s,
      endChildSlot: n
    }
  }
  getPathsBySlot(t) {
    const e = []
    for (;;) {
      const s = t.parent
      if (!s) return null
      const n = s.slots.indexOf(t)
      e.push(n)
      const o = s.parent
      if (!o) {
        if (s !== this.root.component) return null
        break
      }
      const i = o.indexOf(s)
      e.push(i), (t = o)
    }
    return e.length ? e.reverse() : null
  }
  getNextPositionByPosition(t, e) {
    if (
      (e === t.length - 1 &&
        t.getContentAtIndex(e) ===
          `
` &&
        e++,
      e < t.length)
    ) {
      const n = t.getContentAtIndex(e)
      if (typeof n != 'string') {
        const o = n.slots.get(0)
        if (o) return this.findFirstPosition(o)
      }
      return { slot: t, offset: e + n.length }
    }
    const s = t
    for (; t; ) {
      const n = t.parent,
        o = n.slots.indexOf(t)
      if (o < n.slots.length - 1) return this.findFirstPosition(n.slots.get(o + 1))
      const i = n.parent
      if (!i) {
        const l = s.length,
          c = s.getContentAtIndex(l - 1)
        return {
          slot: s,
          offset:
            c ===
            `
`
              ? l - 1
              : l
        }
      }
      const a = i.indexOf(n)
      if (a < i.length - 1) {
        const l = i.getContentAtIndex(a + 1)
        if (typeof l != 'string') {
          const c = l.slots.first
          if (c) return this.findFirstPosition(c)
        }
        return { slot: i, offset: a + 1 }
      }
      t = i
    }
    return { slot: s, offset: this.endOffset }
  }
  getPreviousPositionByPosition(t, e) {
    if (e > 0) {
      const n = t.getContentAtIndex(e - 1)
      if (n && typeof n != 'string') {
        const o = n.slots.last
        if (o) return this.findLastPosition(o)
      }
      return { slot: t, offset: e - n.length }
    }
    const s = t
    for (; t; ) {
      const n = t.parent,
        o = n.slots,
        i = o.indexOf(t)
      if (i > 0) return this.findLastPosition(o.get(i - 1))
      const a = n.parent
      if (!a) return { slot: s, offset: 0 }
      const l = a.indexOf(n)
      if (l > 0) {
        const c = a.getContentAtIndex(l - 1)
        if (c && typeof c != 'string') {
          const h = c.slots.last
          if (h) return this.findLastPosition(h)
        }
        return {
          slot: a,
          offset:
            c ===
            `
`
              ? l - 1
              : l
        }
      }
      t = a
    }
    return { slot: s, offset: 0 }
  }
  getScopes(t, e, s, n, o = !1) {
    const i = ot.getCommonAncestorSlot(t, s),
      a = ot.getCommonAncestorComponent(t, s)
    return this.getScopesByRange(t, e, s, n, i, a, o)
  }
  static getCommonAncestorComponent(t, e) {
    let s = t == null ? void 0 : t.parent,
      n = e == null ? void 0 : e.parent
    if (s === n) return s || null
    const o = [],
      i = []
    for (; s; ) {
      o.push(s)
      const l = s.parent
      if (!l) break
      s = l.parent
    }
    for (; n; ) {
      i.push(n)
      const l = n.parent
      if (!l) break
      n = l.parent
    }
    let a = null
    for (; o.length && i.length; ) {
      const l = o.pop(),
        c = i.pop()
      if (l === c) a = l
      else break
    }
    return a
  }
  static getCommonAncestorSlot(t, e) {
    if (t === e) return t
    const s = [],
      n = []
    for (; t; ) {
      s.push(t)
      const i = t.parent
      if (!i) break
      t = i.parent
    }
    for (; e; ) {
      n.push(e)
      const i = e.parent
      if (!i) break
      e = i.parent
    }
    let o = null
    for (; s.length && n.length; ) {
      const i = s.pop(),
        a = n.pop()
      if (i === a) o = i
      else break
    }
    return o
  }
  static compareSelectionPaths(t, e, s = !0) {
    let n = !0,
      o = 0
    for (;;)
      if (o < e.length)
        if (o < t.length) {
          const i = t[o],
            a = e[o]
          if (i === a) {
            if (o === e.length - 1 && o === t.length - 1) return s
            o++
            continue
          }
          n = i < a
          break
        } else {
          n = !0
          break
        }
      else {
        n = !1
        break
      }
    return n
  }
  static getInlineContentStartIndex(t, e) {
    const s = t.sliceContent(0, e),
      n = s.length
    for (let o = n - 1; o >= 0; o--) {
      const i = s[o]
      if (typeof i != 'string' && i.type === b.BlockComponent) break
      e -= i.length
    }
    return e
  }
  static getInlineContentEndIndex(t, e) {
    const s = t.sliceContent(e)
    for (let n = 0; n < s.length; n++) {
      const o = s[n]
      if (typeof o != 'string' && o.type === b.BlockComponent) break
      e += o.length
    }
    return e
  }
  decomposeSlotRange(t, e, s) {
    const n = []
    if (e >= s) return n
    let o = null,
      i = 0
    return (
      t.sliceContent(e, s).forEach(l => {
        typeof l != 'string' && l.type === b.BlockComponent
          ? ((o = null),
            l.slots.toArray().forEach(c => {
              n.push(...this.decomposeSlotRange(c, 0, c.length))
            }))
          : o
          ? (o.endIndex = e + i + l.length)
          : ((o = { startIndex: e + i, endIndex: e + i + l.length, slot: t }), n.push(o)),
          (i += l.length)
      }),
      n
    )
  }
  resetStartAndEndPosition() {
    let t = [],
      e = []
    if (this.focusSlot) {
      const n = this.getPathsBySlot(this.focusSlot)
      n ? ((t = n), t.push(this.focusOffset)) : (this._focusSlot = this._focusOffset = null)
    }
    if (this.anchorSlot) {
      const n = this.getPathsBySlot(this.anchorSlot)
      n ? ((e = n), e.push(this.anchorOffset)) : (this._anchorSlot = this._anchorOffset = null)
    }
    ot.compareSelectionPaths(e, t)
      ? ((this._startSlot = this.anchorSlot),
        (this._startOffset = this.anchorOffset),
        (this._endSlot = this.focusSlot),
        (this._endOffset = this.focusOffset))
      : ((this._endSlot = this.anchorSlot),
        (this._endOffset = this.anchorOffset),
        (this._startSlot = this.focusSlot),
        (this._startOffset = this.focusOffset)),
      (this._commonAncestorSlot = ot.getCommonAncestorSlot(this.startSlot, this.endSlot)),
      (this._commonAncestorComponent = ot.getCommonAncestorComponent(this.startSlot, this.endSlot)),
      this.broadcastChanged()
  }
  wrapTo(t) {
    if (!this.isSelected) return
    const e = t
      ? this.getPreviousPositionByPosition(this.focusSlot, this.focusOffset)
      : this.getNextPositionByPosition(this.focusSlot, this.focusOffset)
    this.setBaseAndExtent(this.anchorSlot, this.anchorOffset, e.slot, e.offset), this.restore()
  }
  findPositionByPath(t) {
    const e = [...t],
      s = e.pop(),
      n = this.findSlotByPaths(e)
    return n ? { slot: n, offset: s } : null
  }
  broadcastChanged() {
    this.changeEvent.next(
      this.isSelected
        ? {
            focusSlot: this.focusSlot,
            anchorSlot: this.anchorSlot,
            focusOffset: this.focusOffset,
            anchorOffset: this.anchorOffset
          }
        : null
    )
  }
  getScopesByRange(t, e, s, n, o, i, a = !1) {
    const l = [],
      c = []
    let h = null,
      u = null,
      d = null,
      f = null
    if (this.customRanges) return this.customRanges
    for (; t !== o; ) {
      l.push({ startIndex: e, endIndex: t.length, slot: t }), (h = t.parent)
      const m = h.slots,
        g = m.indexOf(s)
      if (
        ((d = m.indexOf(t)),
        h !== i &&
          g === -1 &&
          l.push(
            ...m.slice(d + 1, m.length).map(x => ({ startIndex: 0, endIndex: x.length, slot: x }))
          ),
        !h.parent)
      )
        break
      ;(t = h.parent), (e = t.indexOf(h) + 1)
    }
    for (; s !== o && (c.push({ startIndex: 0, endIndex: n, slot: s }), (u = s.parent), !!u); ) {
      const m = u.slots,
        g = m.indexOf(t)
      if (
        ((f = m.indexOf(s)),
        u !== i &&
          g === -1 &&
          c.push(
            ...m
              .slice(0, f)
              .map(x => ({ startIndex: 0, endIndex: x.length, slot: x }))
              .reverse()
          ),
        !u.parent)
      )
        break
      ;(s = u.parent), (n = s.indexOf(u))
    }
    const p = [...l]
    if (h && h === u) {
      const m = h.slots.slice(d + 1, f)
      p.push(...m.map(g => ({ startIndex: 0, endIndex: g.length, slot: g })))
    } else p.push({ startIndex: e, endIndex: n, slot: o })
    return p.push(...c.reverse()), a ? p.filter(m => m.slot && m.startIndex < m.endIndex) : p
  }
  static findTreeNode(t, e) {
    if (typeof e != 'object') return null
    const s = t.shift(),
      n = e.slots.get(s)
    if (t.length === 0 || !n) return n || null
    const o = t.shift()
    return (e = n.getContentAtIndex(o)), t.length === 0 || !e ? e || null : ot.findTreeNode(t, e)
  }
})
ct([on(), ht('design:type', gs)], P.prototype, 'bridge', void 0)
P = ot = ct([j(), ht('design:paramtypes', [st, Y])], P)
let Rt = class {
  constructor(t, e, s, n) {
    ;(this.contextInjector = t),
      (this.components = e),
      (this.attributes = s),
      (this.formatters = n),
      (this.componentMap = new Map()),
      (this.formatMap = new Map()),
      (this.attributeMap = new Map()),
      e.reverse().forEach(o => {
        this.componentMap.set(o.name, o)
      }),
      s.reverse().forEach(o => {
        this.attributeMap.set(o.name, o)
      }),
      n.reverse().forEach(o => {
        this.formatMap.set(o.name, o)
      })
  }
  getComponent(t) {
    return this.componentMap.get(t) || null
  }
  getFormatter(t) {
    return this.formatMap.get(t) || null
  }
  getAttribute(t) {
    return this.attributeMap.get(t) || null
  }
  createComponentByData(t, e) {
    const s = this.getComponent(t)
    return s ? s.createInstance(this.contextInjector, e) : null
  }
  createSlot(t, e) {
    const s = new T(t.schema, t.state)
    return this.loadSlot(s, t, e)
  }
  createComponent(t, e) {
    const s = this.getComponent(t.name)
    return s ? this.createComponentByFactory(t, s, e) : null
  }
  createComponentByFactory(t, e, s) {
    const n = t.slots.map(s || (o => this.createSlot(o)))
    return e.createInstance(this.contextInjector, { state: t.state, slots: n })
  }
  fillSlot(t, e) {
    return this.loadSlot(e, t)
  }
  loadSlot(t, e, s) {
    return (
      e.content.forEach((n, o) => {
        if (typeof n != 'string') {
          const i = s ? s(n, o) : this.createComponent(n)
          i && t.insert(i)
          return
        }
        t.insert(n)
      }),
      Object.keys(e.formats).forEach(n => {
        const o = this.getFormatter(n)
        o &&
          e.formats[n].forEach(i => {
            t.retain(i.startIndex), t.retain(i.endIndex - i.startIndex, o, i.value)
          })
      }),
      e.attributes !== null &&
        typeof e.attributes == 'object' &&
        Object.keys(e.attributes).forEach(n => {
          const o = this.attributeMap.get(n)
          o && t.setAttribute(o, e.attributes[n])
        }),
      t
    )
  }
}
Rt = ct(
  [
    j(),
    Mt(1, yt(ds)),
    Mt(2, yt(cn)),
    Mt(3, yt(ln)),
    ht('design:paramtypes', [ft, Array, Array, Array])
  ],
  Rt
)
function ge(r, t, e, s = []) {
  return bs(e, r) ? { slot: r, offset: t } : (s.push(r), is(r, e, s))
}
function bs(r, t) {
  const e = typeof r == 'string' ? b.Text : r.type
  return t.schema.includes(e)
}
function is(r, t, e) {
  const s = r.parent,
    n = s.slots.indexOf(r)
  if (r !== s.slots.last) return ge(s.slots.get(n + 1), 0, t, e)
  const o = s.parent
  if (!o) return null
  if (e.includes(o)) return is(o, t, e)
  const i = o.indexOf(s),
    a = ge(o, i + 1, t, e)
  if (a) return a
  e.push(o)
  const c = o
    .sliceContent(i + 1)
    .filter(h => typeof h != 'string')
    .shift()
  return c && c.slots.length ? ge(c.slots.get(0), 0, t, e) : is(o, t, e)
}
function Gt(r, t, e, s, n) {
  const o = t.parent
  if (!o) return { slot: t, offset: e }
  const i = o.parent
  if (!i) return { slot: t, offset: e }
  const a = i.indexOf(o)
  if (o.slots.length === 1) {
    if (o === s) return { slot: t, offset: e }
    const u = new J(i, { index: a, count: 1, toEnd: !n })
    return (
      M(i.parent, 'onContentDelete', u),
      u.isPrevented
        ? { slot: t, offset: e }
        : (i.retain(a),
          i.delete(1),
          M(i.parent, 'onContentDeleted', new J(i, null)),
          i.isEmpty ? Gt(r, i, a, s, n) : { slot: i, offset: i.index })
    )
  }
  const l = o.slots.indexOf(t),
    c = l === 0 ? { slot: i, offset: a } : r.findLastPosition(o.slots.get(l - 1), !0),
    h = new J(o, { index: l, count: 1, toEnd: !n })
  return (
    M(o, 'onSlotRemove', h),
    h.isPrevented
      ? { slot: t, offset: e }
      : (o.slots.remove(t) && M(o, 'onSlotRemoved', new J(o, null)), c)
  )
}
function _e(r, t, e, s, n, o) {
  const i = t.parent,
    a = { slotState: t.state, parentComponentName: i.name, parentComponentState: i.state }
  let l = s.slotFactory(a)
  e.attributes.forEach((u, d) => {
    l.setAttribute(d, u)
  })
  const c = [l]
  let h = 0
  for (; e.length; ) {
    const { insert: u, formats: d } = e.shift(),
      f = bs(u, l),
      p = h
    if (((h += u.length), f)) {
      l.insert(u, d),
        t === n.anchorSlot &&
          n.anchorOffset - o >= p &&
          n.anchorOffset - o <= h &&
          ((n.anchorSlot = l), (n.anchorOffset -= o)),
        t === n.focusSlot &&
          n.focusOffset - o >= p &&
          n.focusOffset - o <= h &&
          ((n.focusSlot = l), (n.focusOffset -= o))
      continue
    }
    if (
      (n.anchorOffset > h && (n.anchorOffset -= h),
      n.focusOffset > h && (n.focusOffset -= h),
      typeof u != 'string')
    ) {
      const m = u.slots
        .toArray()
        .map(g => _e(r, t, g.toDelta(), s, n, o))
        .flat()
      c.push(...m)
    }
    ;(l = s.slotFactory(a)),
      e.attributes.forEach((m, g) => {
        l.setAttribute(g, m)
      })
  }
  return c
}
function pe(r, t, e) {
  var s
  const n = []
  return (
    t.length &&
      (e.multipleSlot
        ? n.push(
            e.target.createInstance(r, {
              state: (s = e.stateFactory) === null || s === void 0 ? void 0 : s.call(e),
              slots: t
            })
          )
        : t.forEach(o => {
            var i
            n.push(
              e.target.createInstance(r, {
                state: (i = e.stateFactory) === null || i === void 0 ? void 0 : i.call(e),
                slots: [o]
              })
            )
          })),
    n
  )
}
function yo(r, t, e) {
  let s = e
  const n = t.sliceContent(0, e)
  for (; n.length; ) {
    const o = n.pop()
    if (typeof o != 'string' && o.type === b.BlockComponent) break
    s -= o.length
  }
  return { slot: t, startIndex: s, endIndex: e }
}
let L = class {
  constructor(t, e, s, n) {
    ;(this.selection = t), (this.injector = e), (this.factory = s), (this.rootComponentRef = n)
  }
  transform(t) {
    const e = this.selection
    if (!e.isSelected) return !1
    const s = {
        anchorSlot: e.anchorSlot,
        anchorOffset: e.anchorOffset,
        focusSlot: e.focusSlot,
        focusOffset: e.focusOffset
      },
      n = e.getRanges()
    for (let o = 0; o < n.length; o++) {
      const i = n[o]
      if (!this.transformByRange(t, s, i)) break
    }
    return e.setBaseAndExtent(s.anchorSlot, s.anchorOffset, s.focusSlot, s.focusOffset), !0
  }
  write(t, e, s) {
    const n = this.selection
    if (!(n.isCollapsed ? !0 : this.delete())) return !1
    const i = ge(n.startSlot, n.startOffset, t)
    if (!i) return !1
    let a = i.slot.extractFormatsByIndex(i.offset)
    return e && (Array.isArray(e) ? (a = [...a, ...e]) : a.push([e, s])), this.insert(t, a)
  }
  insert(t, e, s) {
    const n = this.selection
    if (!(n.isCollapsed ? !0 : this.delete())) return !1
    let i = []
    e && (Array.isArray(e) ? (i = e) : i.push([e, s]))
    const a = ge(n.startSlot, n.startOffset, t)
    if (!a) return !1
    const { slot: l, offset: c } = a,
      h = new J(l, { index: c, content: t, formats: i })
    if ((M(l.parent, 'onContentInsert', h), !h.isPrevented)) {
      l.retain(c), l.insert(t, i)
      const u = new J(l, { index: c, content: t, formats: i })
      M(l.parent, 'onContentInserted', h),
        u.isPrevented || n.setBaseAndExtent(l, l.index, l, l.index)
    }
    return !h.isPrevented
  }
  delete(t, e = !0) {
    typeof t == 'boolean'
      ? ((e = t), (t = function () {}))
      : typeof t != 'function' && (t = function () {})
    const s = this.selection
    if (!s.isSelected) return !1
    let n = s.endSlot,
      o = s.endOffset,
      i = s.startSlot,
      a = s.startOffset
    if (s.isCollapsed)
      if (e) {
        const h = s.getPreviousPosition()
        ;(i = h.slot), (a = h.offset)
      } else {
        const h = s.getNextPosition()
        ;(n = h.slot), (o = h.offset)
      }
    if (i === n && a === o) {
      if (i.isEmpty) {
        t(i.cut())
        const h = Gt(s, i, a, this.rootComponentRef.component, e)
        return (
          s.setBaseAndExtent(h.slot, h.offset, h.slot, h.offset), h.slot !== i || h.offset !== a
        )
      }
      return !1
    }
    const l = s.getScopes(i, a, n, o, !0)
    let c = o
    for (; l.length; ) {
      const h = l.pop(),
        { slot: u, startIndex: d } = h,
        f = h.endIndex,
        p = s.focusSlot === u && s.focusOffset === f,
        m = new J(u, { index: d, count: f - d, toEnd: !e })
      if ((M(u.parent, 'onContentDelete', m), m.isPrevented)) return !1
      const g = u.cut(d, f)
      t(g)
      const x = new J(u, null)
      if ((M(u.parent, 'onContentDeleted', x), x.isPrevented))
        return p ? s.setFocus(u, f) : s.setAnchor(u, f), !1
      if ((u === n && (c = d), u !== i && u !== n && u.isEmpty)) {
        const S = Gt(s, u, d, this.rootComponentRef.component, e)
        S.slot === n && (c = S.offset)
      }
    }
    if (i !== n) {
      const h = new J(n, { index: c, count: n.length, toEnd: !e })
      if ((M(n.parent, 'onContentDelete', h), h.isPrevented)) return !1
      const u = n.cut(c)
      t(u)
      const d = new J(n, null)
      if (
        (M(n.parent, 'onContentDeleted', d),
        d.isPrevented || (n.isEmpty && Gt(s, n, 0, this.rootComponentRef.component, e)),
        !u.isEmpty)
      ) {
        const f = u.toDelta()
        s.setPosition(i, a),
          f.forEach(p => {
            this.insert(p.insert, p.formats)
          })
      }
      if (d.isPrevented) return !1
    }
    return s.setBaseAndExtent(i, a, i, a), !0
  }
  break() {
    const t = this.selection
    if (!t.isSelected || (!t.isCollapsed && !this.delete(!1))) return !1
    const e = this.selection.startSlot,
      s = new J(e, { index: this.selection.startOffset })
    if ((M(e.parent, 'onBreak', s), !s.isPrevented)) {
      const n = this.selection.startOffset,
        o = n === e.length || e.isEmpty,
        i = o
          ? `

`
          : `
`
      this.write(i) && o && this.selection.setPosition(e, n + 1)
    }
    return !s.isPrevented
  }
  insertBefore(t, e) {
    const s = e == null ? void 0 : e.parent
    if (s) {
      const n = s.indexOf(e)
      return this.selection.setBaseAndExtent(s, n, s, n), this.insert(t)
    }
    return !1
  }
  insertAfter(t, e) {
    const s = e == null ? void 0 : e.parent
    if (s) {
      const n = s.indexOf(e) + 1
      return this.selection.setBaseAndExtent(s, n, s, n), this.insert(t)
    }
    return !1
  }
  replaceComponent(t, e) {
    return this.insertBefore(e, t) ? this.removeComponent(t) : !1
  }
  copy() {
    this.injector.get(Je).copy()
  }
  cut() {
    return this.copy(), this.selection.isCollapsed ? !1 : this.delete()
  }
  paste(t, e) {
    if (!this.selection.isSelected) return !1
    this.selection.isCollapsed || this.delete()
    const s = this.selection.commonAncestorComponent,
      n = this.selection.commonAncestorSlot,
      o = new J(n, { index: this.selection.startOffset, data: t, text: e })
    if ((M(s, 'onPaste', o), !o.isPrevented)) {
      const i = t.toDelta(),
        a = new vn()
      for (; i.length; ) {
        const { insert: c, formats: h } = i.shift(),
          u = this.selection.commonAncestorSlot
        if (bs(c, u)) {
          this.insert(c, h)
          continue
        }
        a.push(...u.cut(this.selection.startOffset).toDelta())
        const d = u.parent
        if (u === d.slots.last) {
          this.insert(c, h)
          continue
        }
        if (d.separable) {
          const f = d.slots.indexOf(u),
            p = d.slots.cut(f + 1),
            m = this.factory.createComponentByData(d.name, {
              state:
                typeof d.state == 'object' && d.state !== null
                  ? JSON.parse(JSON.stringify(d.state))
                  : d.state,
              slots: p
            })
          i.push({ insert: m, formats: [] }), this.insert(c, h)
          continue
        }
        if (typeof c == 'string') {
          this.insert(c, h)
          continue
        }
        for (const f of c.slots.toArray()) i.unshift(...f.toDelta())
      }
      const l = this.selection.createSnapshot()
      for (; a.length; ) {
        const { insert: c, formats: h } = a.shift()
        this.insert(c, h)
      }
      l.restore()
    }
    return !o.isPrevented
  }
  cleanFormats(t = []) {
    this.selection.getSelectedScopes().forEach(e => {
      const s = e.slot
      e.startIndex === 0 &&
        e.endIndex === s.length - 1 &&
        s.getContentAtIndex(s.length - 1) ===
          `
` &&
        e.endIndex++,
        s.cleanFormats(t, e.startIndex, e.endIndex)
    })
  }
  applyFormat(t, e) {
    if (this.selection.isCollapsed) {
      const s = this.selection.commonAncestorSlot
      if (s.isEmpty) s.retain(0), s.retain(s.length, t, e)
      else {
        this.write(T.placeholder)
        const n = this.selection.startOffset
        s.retain(n - 1), s.retain(1, t, e)
      }
      return
    }
    this.selection.getSelectedScopes().forEach(s => {
      s.slot.retain(s.startIndex), s.slot.retain(s.endIndex - s.startIndex, t, e)
    })
  }
  unApplyFormat(t) {
    if (this.selection.isCollapsed) {
      const e = this.selection.commonAncestorSlot
      if (e.isEmpty) e.retain(0), e.retain(e.length, t, null)
      else {
        const s = this.selection.startOffset
        e.getContentAtIndex(s - 1) === T.placeholder
          ? (e.retain(s - 1), e.retain(1, t, null))
          : (this.write(T.placeholder), e.retain(s), e.retain(1, t, null))
      }
      return
    }
    this.selection.getSelectedScopes().forEach(e => {
      e.slot.retain(e.startIndex), e.slot.retain(e.endIndex - e.startIndex, t, null)
    })
  }
  applyAttribute(t, e) {
    if (this.selection.isCollapsed) {
      this.selection.commonAncestorSlot.setAttribute(t, e)
      return
    }
    this.selection.getSelectedScopes().forEach(s => {
      const n = s.slot.sliceContent(s.startIndex, s.endIndex),
        o = []
      let i = !1
      n.forEach(a => {
        typeof a == 'string' || a.type === b.InlineComponent ? (i = !0) : o.push(a)
      }),
        i
          ? s.slot.setAttribute(t, e)
          : o.forEach(a => {
              a.slots.toArray().forEach(l => {
                l.setAttribute(t, e)
              })
            })
    })
  }
  unApplyAttribute(t) {
    if (this.selection.isCollapsed) {
      this.selection.commonAncestorSlot.removeAttribute(t)
      return
    }
    this.selection.getSelectedScopes().forEach(e => {
      const s = e.slot.sliceContent(e.startIndex, e.endIndex),
        n = []
      let o = !1
      s.forEach(i => {
        typeof i != 'string' ? n.push(i) : (o = !0)
      }),
        o
          ? e.slot.removeAttribute(t)
          : n.forEach(i => {
              i.slots.toArray().forEach(a => {
                a.removeAttribute(t)
              })
            })
    })
  }
  cleanAttributes(t = []) {
    this.selection.getSelectedScopes().forEach(e => {
      const s = e.slot.sliceContent(e.startIndex, e.endIndex),
        n = []
      let o = !1
      s.forEach(i => {
        typeof i != 'string' ? n.push(i) : (o = !0)
      }),
        o
          ? e.slot.cleanAttributes(t)
          : n.forEach(i => {
              i.slots.toArray().forEach(a => {
                a.cleanAttributes(t)
              })
            })
    })
  }
  removeComponent(t) {
    const e = t == null ? void 0 : t.parent
    if (e) {
      const s = e.indexOf(t)
      return this.selection.setBaseAndExtent(e, s, e, s + 1), this.delete()
    }
    return !1
  }
  transformByRange(t, e, s) {
    const { startSlot: n, startOffset: o, endSlot: i, endOffset: a } = s,
      l = this.selection,
      c = P.getCommonAncestorSlot(n, i),
      h = P.getCommonAncestorComponent(n, i)
    if (!c || !h) return !1
    let u
    c.parent !== h || (e.anchorSlot === c && e.focusSlot === c) ? (u = h.parentComponent) : (u = h)
    const d = { slot: n, offset: P.getInlineContentStartIndex(n, o) }
    let f = { slot: i, offset: P.getInlineContentEndIndex(i, a) }
    const p = f.slot.parent
    if (p.separable && f.slot !== p.slots.last) {
      const S = p.slots.indexOf(f.slot),
        N = p.slots.length - S,
        E = new J(p, { index: S + 1, count: N - 1, toEnd: !1 })
      if ((M(p, 'onSlotRemove', E), !E.isPrevented)) {
        const k = p.slots.cut(S + 1, S + N),
          w = this.factory.createComponentByData(p.name, {
            state:
              p.state !== null && typeof p.state == 'object'
                ? JSON.parse(JSON.stringify(p.state))
                : p.state,
            slots: k
          })
        this.insertAfter(w, p)
      }
    }
    let m = [],
      g = null
    for (;;) {
      const S = l.getPathsBySlot(f.slot)
      if (!S) break
      S.push(f.offset)
      const N = l.getPathsBySlot(d.slot)
      if (!N || (N.push(d.offset), !P.compareSelectionPaths(N, S))) break
      const E = f.slot.isEmpty
          ? { slot: f.slot, startIndex: 0, endIndex: 0 }
          : yo(l, f.slot, f.offset),
        { slot: k, startIndex: w, endIndex: O } = E,
        A = k.parent
      if (!A.separable && A.slots.length > 1 && !k.schema.includes(t.target.instanceType)) {
        pe(this.injector, m, t).forEach(_ => {
          this.insert(_)
        }),
          (m = []),
          (f = l.getPreviousPositionByPosition(k, 0)),
          (g = null)
        continue
      }
      if ((l.setBaseAndExtent(k, w, k, O), k.isEmpty))
        if (((f = l.getPreviousPositionByPosition(k, 0)), A.separable || A.slots.length === 1)) {
          const B = k.toDelta()
          m.unshift(..._e(l, k, B, t, e, 0)), (g = Gt(l, k, 0, u, !1))
        } else {
          const B = pe(this.injector, m, t)
          ;(m = []),
            l.selectComponentEnd(A),
            B.forEach(_ => {
              this.insert(_)
            }),
            (g = null)
        }
      else {
        if (((f = l.getPreviousPositionByPosition(k, w)), w === O)) continue
        this.delete(B => {
          if (A.separable || A.slots.length === 1) {
            const H = B.toDelta()
            if ((m.unshift(..._e(l, k, H, t, e, w)), w > 0)) {
              ;(f = l.getPreviousPositionByPosition(k, w)), (g = { slot: k, offset: w })
              return
            }
            g = Gt(l, k, 0, u, !1)
            return
          }
          g = null
          let _ = pe(this.injector, m, t)
          ;(m = []),
            l.selectComponentEnd(A),
            _.forEach(H => {
              this.insert(H)
            })
          const V = B.toDelta(),
            q = _e(l, k, V, t, e, w)
          ;(_ = pe(this.injector, q, t)),
            _.forEach((H, tt) => {
              l.setPosition(k, tt + w), this.insert(H)
            }),
            w > 0 && ((f = l.getPreviousPositionByPosition(k, w)), (g = { slot: k, offset: w }))
        })
      }
      if ((g && l.setPosition(g.slot, g.offset), E.slot === d.slot && E.endIndex === d.offset))
        break
    }
    return (
      pe(this.injector, m, t).forEach(S => {
        this.insert(S)
      }),
      !0
    )
  }
}
L = ct([j(), ht('design:paramtypes', [P, ft, Rt, st])], L)
const Be = jt('Renderer')
function Ze(r, t) {
  r.attrs.set(t ? 'textbus-slot-root' : 'textbus-component-root', '')
}
function xo(r, t) {
  const e = { remove: [], add: [] }
  return (
    Object.keys(r).forEach(s => {
      const n = r[s]
      if (!Reflect.has(t, s)) {
        e.add.push([s, n])
        return
      }
      const o = t[s]
      n !== o && (e.add.push([s, n]), e.remove.push([s, o]))
    }),
    Object.keys(t).forEach(s => {
      Reflect.has(r, s) || e.remove.push([s, t[s]])
    }),
    e
  )
}
function Ks(r, t) {
  const e = { remove: [], set: [] }
  return (
    r.forEach((s, n) => {
      const o = t.get(n)
      s !== o && e.set.push([n, s])
    }),
    t.forEach((s, n) => {
      r.has(n) || e.remove.push(n)
    }),
    e
  )
}
function vo(r, t) {
  const e = { add: [], remove: [] }
  return (
    r.forEach(s => {
      t.has(s) || e.add.push(s)
    }),
    t.forEach(s => {
      r.has(s) || e.remove.push(s)
    }),
    e
  )
}
function Qe(r, t) {
  const e = Ks(r.styles, t.styles),
    s = Ks(r.attrs, t.attrs),
    n = vo(r.classes, t.classes),
    o = xo(r.listeners, t.listeners)
  return {
    styleChanges: e,
    attrChanges: s,
    classesChanges: n,
    listenerChanges: o,
    isChanged:
      [
        s.set.length,
        s.remove.length,
        e.set.length,
        e.remove.length,
        n.add.length,
        n.remove.length,
        o.add.length,
        o.remove.length
      ].join('') !== '0'.repeat(8)
  }
}
class Co {
  constructor() {
    ;(this.nativeVDomMapping = new WeakMap()), (this.vDomNativeMapping = new WeakMap())
  }
  set(t, e) {
    this.get(t) && this.delete(t),
      this.get(e) && this.delete(e),
      t instanceof C || t instanceof rt
        ? (this.vDomNativeMapping.set(t, e), this.nativeVDomMapping.set(e, t))
        : (this.vDomNativeMapping.set(e, t), this.nativeVDomMapping.set(t, e))
  }
  get(t) {
    return t instanceof rt || t instanceof C
      ? this.vDomNativeMapping.get(t)
      : this.nativeVDomMapping.get(t)
  }
  delete(t) {
    if (t instanceof rt || t instanceof C) {
      const e = this.vDomNativeMapping.get(t)
      this.vDomNativeMapping.delete(t), this.nativeVDomMapping.delete(e)
    } else {
      const e = this.nativeVDomMapping.get(t)
      this.nativeVDomMapping.delete(t), this.vDomNativeMapping.delete(e)
    }
  }
}
let nt = class {
  constructor(t, e) {
    ;(this.controller = t),
      (this.rootComponentRef = e),
      (this.componentVNode = new WeakMap()),
      (this.slotRootVNodeCaches = new WeakMap()),
      (this.vNodeLocation = new WeakMap()),
      (this.renderedVNode = new WeakMap()),
      (this.slotVNodesCaches = new WeakMap()),
      (this.slotRenderFactory = new WeakMap()),
      (this.nativeNodeCaches = new Co()),
      (this.viewUpdatedEvent = new F()),
      (this.viewUpdateBeforeEvent = new F()),
      (this.oldVDom = null),
      (this.slotIdAttrKey = '__textbus-slot-id__'),
      (this.readonlyStateChanged = !1),
      (this.subscription = new Ht()),
      (this.renderedComponents = []),
      (this.onViewUpdated = this.viewUpdatedEvent.asObservable()),
      (this.onViewUpdateBefore = this.viewUpdateBeforeEvent.asObservable()),
      (this.subscription = t.onReadonlyStateChange.subscribe(() => {
        e.component &&
          ((this.readonlyStateChanged = !0), this.render(), (this.readonlyStateChanged = !1))
      }))
  }
  render() {
    const t = this.rootComponentRef.component
    if ((this.viewUpdateBeforeEvent.next(), t.changeMarker.changed || this.readonlyStateChanged)) {
      const e = t.changeMarker.dirty,
        s = this.componentRender(t)
      if ((new C('html', null, [s]), e || this.readonlyStateChanged))
        if (this.oldVDom) {
          const n = this.nativeNodeCaches.get(this.oldVDom),
            o = this.diffAndUpdate(s, this.oldVDom, t)
          n !== o && this.nativeRenderer.replace(o, n)
        } else {
          const n = this.patch(s)
          this.nativeRenderer.appendChild(this.rootComponentRef.host, n)
        }
      this.oldVDom = s
    }
    Promise.resolve().then(() => {
      let e = this.renderedComponents.length - 1
      for (; e > -1; ) {
        const s = this.renderedComponents[e]
        e--, M(s, 'onViewChecked')
      }
      ;(this.renderedComponents = []), this.viewUpdatedEvent.next()
    })
  }
  getVNodeByComponent(t) {
    return this.componentVNode.get(t)
  }
  getVNodeBySlot(t) {
    return this.slotRootVNodeCaches.get(t)
  }
  getNativeNodeByVNode(t) {
    return this.nativeNodeCaches.get(t)
  }
  getVNodeByNativeNode(t) {
    return this.nativeNodeCaches.get(t)
  }
  getLocationByVNode(t) {
    return t instanceof T && (t = this.slotRootVNodeCaches.get(t)), this.vNodeLocation.get(t)
  }
  getLocationByNativeNode(t) {
    const e = this.nativeNodeCaches.get(t)
    return this.vNodeLocation.get(e) || null
  }
  getVNodesBySlot(t) {
    return this.slotVNodesCaches.get(t) || []
  }
  destroy() {
    this.subscription.unsubscribe()
  }
  sortAndCleanNativeNode(t, e, s) {
    let n = 0
    for (;;) {
      const o = e[n]
      if (!o) break
      const i = this.nativeRenderer.getChildByIndex(t, n)
      if ((n++, !i)) {
        this.nativeRenderer.appendChild(t, o)
        continue
      }
      i !== o && this.nativeRenderer.insertBefore(o, i)
    }
    for (;;) {
      const o = this.nativeRenderer.getChildByIndex(t, n)
      if (!o) break
      const i = new J(s, o)
      if ((M(s, 'onDirtyViewClean', i), i.isPrevented)) {
        n++
        continue
      }
      this.nativeRenderer.remove(o)
    }
    return t
  }
  diffAndUpdate(t, e, s) {
    const n = this.diffNodeAndUpdate(t, e),
      o = this.diffChildrenAndUpdate(t, e, s)
    return this.sortAndCleanNativeNode(n, o, s)
  }
  diffChildrenAndUpdate(t, e, s) {
    const n = t.children,
      o = e.children,
      i = this.diffIdenticalChildrenToEnd(n, o, s),
      a = this.diffIdenticalChildrenToBegin(n, o, s),
      l = this.diffChildrenToEnd(n, o, s),
      c = this.diffChildrenToBegin(n, o, s)
    return (
      o.forEach(h => {
        const u = this.nativeNodeCaches.get(h)
        u && this.nativeRenderer.remove(u)
      }),
      [
        ...i,
        ...l,
        ...n.map(h => (this.renderedVNode.has(h) ? this.nativeNodeCaches.get(h) : this.patch(h))),
        ...c,
        ...a
      ]
    )
  }
  diffIdenticalChildrenToEnd(t, e, s) {
    const n = []
    for (; t.length && e.length; ) {
      const o = t[0],
        i = e[0]
      if (o instanceof C && i instanceof C) {
        if (this.renderedVNode.has(o)) {
          t.shift(), n.push(this.nativeNodeCaches.get(o))
          continue
        }
        if (o.tagName !== i.tagName) break
        const { isChanged: a } = Qe(o, i)
        if (a) break
        t.shift(), e.shift()
        let l = this.nativeNodeCaches.get(i)
        l
          ? (this.nativeNodeCaches.set(o, l), this.renderedVNode.set(o, !0))
          : (l = this.createElement(o))
        const c = this.diffChildrenAndUpdate(o, i, s)
        n.push(this.sortAndCleanNativeNode(l, c, s))
      } else break
    }
    return n
  }
  diffIdenticalChildrenToBegin(t, e, s) {
    const n = []
    for (; t.length && e.length; ) {
      const o = t[t.length - 1],
        i = e[e.length - 1]
      if (o instanceof C && i instanceof C) {
        if (this.renderedVNode.has(o)) {
          t.pop(), n.push(this.nativeNodeCaches.get(o))
          continue
        }
        if (o.tagName !== i.tagName) break
        const { isChanged: a } = Qe(o, i)
        if (a) break
        t.pop(), e.pop()
        let l = this.nativeNodeCaches.get(i)
        l
          ? (this.nativeNodeCaches.set(o, l), this.renderedVNode.set(o, !0))
          : (l = this.createElement(o))
        const c = this.diffChildrenAndUpdate(o, i, s)
        n.push(this.sortAndCleanNativeNode(l, c, s))
      } else break
    }
    return n.reverse()
  }
  diffChildrenToEnd(t, e, s) {
    const n = []
    for (; t.length && e.length; ) {
      const o = t[0],
        i = e[0]
      if (o instanceof C) {
        if (this.renderedVNode.has(o)) {
          t.shift(), n.push(this.nativeNodeCaches.get(o))
          continue
        }
        if (i instanceof C && o.tagName === i.tagName) {
          const a = this.diffAndUpdate(o, i, s)
          n.push(a), t.shift(), e.shift()
        } else break
      } else {
        if (this.renderedVNode.has(o)) {
          t.shift(), n.push(this.nativeNodeCaches.get(o))
          continue
        }
        if (i instanceof rt && o.textContent === i.textContent) {
          const a = this.nativeNodeCaches.get(i)
          this.nativeNodeCaches.set(o, a),
            n.push(a),
            this.nativeRenderer.syncTextContent(a, o.textContent),
            t.shift(),
            e.shift()
        } else break
      }
    }
    return n
  }
  diffChildrenToBegin(t, e, s) {
    const n = []
    for (; t.length && e.length; ) {
      const o = t[t.length - 1],
        i = e[e.length - 1]
      if (o instanceof C) {
        if (this.renderedVNode.has(o)) {
          t.pop(), n.push(this.nativeNodeCaches.get(o))
          continue
        }
        if (i instanceof C && o.tagName === i.tagName) {
          const a = this.diffAndUpdate(o, i, s)
          n.push(a), t.pop(), e.pop()
        } else break
      } else {
        if (this.renderedVNode.has(o)) {
          t.pop(), n.push(this.nativeNodeCaches.get(o))
          continue
        }
        if (i instanceof rt && o.textContent === i.textContent) {
          const a = this.nativeNodeCaches.get(i)
          this.nativeNodeCaches.set(o, a),
            n.push(a),
            this.nativeRenderer.syncTextContent(a, o.textContent),
            t.pop(),
            e.pop()
        } else break
      }
    }
    return n.reverse()
  }
  diffNodeAndUpdate(t, e) {
    let s = this.nativeNodeCaches.get(e)
    if (e.tagName !== t.tagName) s = this.createElement(t)
    else {
      const { styleChanges: n, attrChanges: o, classesChanges: i, listenerChanges: a } = Qe(t, e)
      n.remove.forEach(l => this.nativeRenderer.removeStyle(s, l)),
        n.set.forEach(l => this.nativeRenderer.setStyle(s, l[0], l[1])),
        o.remove.forEach(l => this.nativeRenderer.removeAttribute(s, l)),
        o.set.forEach(([l, c]) => {
          if (l !== this.slotIdAttrKey) {
            if (l === 'ref' && c instanceof os) {
              c.current = s
              return
            }
            this.nativeRenderer.setAttribute(s, l, c)
          }
        }),
        i.remove.forEach(l => this.nativeRenderer.removeClass(s, l)),
        i.add.forEach(l => this.nativeRenderer.addClass(s, l)),
        a.remove.forEach(l => {
          this.nativeRenderer.unListen(s, l[0], l[1])
        }),
        this.controller.readonly ||
          a.add.forEach(l => {
            this.nativeRenderer.listen(s, l[0], l[1])
          }),
        this.renderedVNode.set(t, !0),
        this.nativeNodeCaches.set(t, s)
    }
    return s
  }
  patch(t) {
    if (t instanceof C) {
      const e = this.createElement(t)
      return (
        t.children.forEach(s => {
          this.renderedVNode.get(s)
            ? this.nativeRenderer.appendChild(e, this.nativeNodeCaches.get(s))
            : this.nativeRenderer.appendChild(e, this.patch(s))
        }),
        e
      )
    }
    return this.createTextNode(t)
  }
  extractVNodesBySlot(t, e, s) {
    for (const n of e) {
      const o = this.getLocationByVNode(n)
      if (o) {
        if (o.slot === t) s.push(n)
        else break
        n instanceof C && this.extractVNodesBySlot(t, n.children, s)
      }
    }
    return s
  }
  componentRender(t) {
    if ((this.renderedComponents.push(t), t.changeMarker.dirty || this.readonlyStateChanged)) {
      const e = t.extends.render(
        (s, n) =>
          this.slotRender(t, s, o => {
            const i = this.extractVNodesBySlot(s, o, [])
            return this.slotVNodesCaches.set(s, i), n(o)
          }),
        this.controller.readonly ? X.Readonly : X.Editing
      )
      return Ze(e, !1), this.componentVNode.set(t, e), t.changeMarker.rendered(), e
    }
    if (t.changeMarker.changed) {
      const e = this.componentVNode.get(t)
      t.slots.toArray().forEach(s => {
        if (!s.changeMarker.changed) return
        const n = s.changeMarker.dirty,
          o = this.slotRootVNodeCaches.get(s),
          i = this.slotRenderFactory.get(s),
          a = this.slotRender(t, s, i)
        if (n) {
          e === o && (this.componentVNode.set(t, a), Ze(a, !1)), o.parentNode.replaceChild(a, o)
          const l = this.nativeNodeCaches.get(o),
            c = this.diffAndUpdate(a, o, t)
          this.nativeNodeCaches.set(c, a),
            this.slotRootVNodeCaches.set(s, a),
            l !== c && this.nativeRenderer.replace(c, l)
        }
      }),
        t.changeMarker.rendered()
    }
    return this.componentVNode.get(t)
  }
  slotRender(t, e, s) {
    if (!(e instanceof T)) throw Be(`${e} of the component \`${t.name}\` is not a Slot instance.`)
    if (typeof s != 'function') throw Be(`component \`${t.name}\` slot render is not a function.`)
    if (e.changeMarker.dirty || this.readonlyStateChanged) {
      this.slotRenderFactory.set(e, s)
      const n = e.createFormatTree()
      let o = n.children
        ? this.createVDomByFormatTree(e, n.children)
        : this.createVDomByContent(e, n.startIndex, n.endIndex)
      n.formats && (o = [this.createVDomByOverlapFormats(n.formats, o, e)])
      const i = s(o)
      if (!(i instanceof C))
        throw Be(`component \`${t.name}\` slot rendering does not return a VElement.`)
      for (const [a, l] of e.getAttributes())
        a.render(i, l, this.controller.readonly ? X.Readonly : X.Editing)
      return (
        i.attrs.set(this.slotIdAttrKey, e.id),
        Ze(i, !0),
        this.vNodeLocation.set(i, { slot: e, startIndex: 0, endIndex: e.length }),
        e.changeMarker.rendered(),
        this.slotRootVNodeCaches.set(e, i),
        i
      )
    }
    return (
      e
        .sliceContent()
        .filter(n => typeof n != 'string')
        .forEach(n => {
          if (!n.changeMarker.changed) return
          const o = n.changeMarker.dirty,
            i = this.componentVNode.get(n),
            a = this.componentRender(n),
            l = e.indexOf(n)
          if ((this.vNodeLocation.set(a, { slot: e, startIndex: l, endIndex: l + 1 }), o)) {
            i.parentNode.replaceChild(a, i)
            const c = this.nativeNodeCaches.get(i),
              h = this.diffAndUpdate(a, i, n)
            c !== h && this.nativeRenderer.replace(h, c)
          }
        }),
      e.changeMarker.rendered(),
      this.slotRootVNodeCaches.get(e)
    )
  }
  createVDomByFormatTree(t, e) {
    var s
    const n = []
    for (const o of e)
      if (!((s = o.formats) === null || s === void 0) && s.length) {
        const i = o.children
            ? this.createVDomByFormatTree(t, o.children)
            : this.createVDomByContent(t, o.startIndex, o.endIndex),
          a = this.createVDomByOverlapFormats(o.formats, i, t)
        n.push(a)
      } else n.push(...this.createVDomByContent(t, o.startIndex, o.endIndex))
    return n
  }
  createVDomByOverlapFormats(t, e, s) {
    const n = []
    let o = null
    for (let i = t.length - 1; i > -1; i--) {
      const a = t[i],
        l = a.formatter.render(e, a.value, this.controller.readonly ? X.Readonly : X.Editing)
      if (!l) throw Be(`Formatter \`${a.formatter.name}\` must return an VElement!`)
      if (!(l instanceof C)) {
        n.push({ item: a, render: l })
        continue
      }
      ;(o = l),
        this.vNodeLocation.set(l, { slot: s, startIndex: a.startIndex, endIndex: a.endIndex }),
        (e = [l])
    }
    for (const i of n) {
      const { render: a, item: l } = i
      o ||
        ((o = yn(a.fallbackTagName)),
        o.appendChild(...e),
        this.vNodeLocation.set(o, { slot: s, startIndex: l.startIndex, endIndex: l.endIndex })),
        a.attach(o)
    }
    return o
  }
  createVDomByContent(t, e, s) {
    return t
      .sliceContent(e, s)
      .map(o => (typeof o == 'string' ? o.match(/\n|[^\n]+/g) : o))
      .flat()
      .map(o => {
        let i, a
        return (
          typeof o == 'string'
            ? o ===
              `
`
              ? ((i = new C('br')), (a = 1))
              : ((i = new rt(o)), (a = o.length))
            : ((a = 1), (i = this.componentRender(o))),
          this.vNodeLocation.set(i, { slot: t, startIndex: e, endIndex: e + a }),
          (e += a),
          i
        )
      })
  }
  createElement(t) {
    this.renderedVNode.set(t, !0)
    const e = this.nativeRenderer.createElement(t.tagName)
    return (
      t.attrs.forEach((s, n) => {
        if (n !== this.slotIdAttrKey) {
          if (n === 'ref') {
            s instanceof os && (s.current = e)
            return
          }
          this.nativeRenderer.setAttribute(e, n, s)
        }
      }),
      t.styles.forEach((s, n) => {
        this.nativeRenderer.setStyle(e, n, s)
      }),
      t.classes.forEach(s => this.nativeRenderer.addClass(e, s)),
      this.controller.readonly ||
        Object.keys(t.listeners).forEach(s => {
          this.nativeRenderer.listen(e, s, t.listeners[s])
        }),
      this.nativeNodeCaches.set(e, t),
      e
    )
  }
  createTextNode(t) {
    this.renderedVNode.set(t, !0)
    const e = this.nativeRenderer.createTextNode(t.textContent)
    return this.nativeNodeCaches.set(e, t), e
  }
}
ct([on(), ht('design:type', Je)], nt.prototype, 'nativeRenderer', void 0)
nt = ct([j(), ht('design:paramtypes', [Y, st])], nt)
var me, Bt
;(function (r) {
  ;(r[(r.History = 0)] = 'History'), (r[(r.Local = 1)] = 'Local'), (r[(r.Remote = 2)] = 'Remote')
})(Bt || (Bt = {}))
let St = (me = class {
  constructor(t, e, s) {
    ;(this.rootComponentRef = t),
      (this.selection = e),
      (this.renderer = s),
      (this._lastChangesHasLocalUpdate = !0),
      (this._lastChangesHasRemoteUpdate = !1),
      (this.changeFromRemote = !1),
      (this.changeFromHistory = !1),
      (this.instanceList = new Set()),
      (this.docChangedEvent = new F()),
      (this.docChangeEvent = new F()),
      (this.subs = []),
      (this.onDocChanged = this.docChangedEvent.asObservable()),
      (this.onDocChange = this.docChangeEvent.asObservable())
  }
  get lastChangesHasLocalUpdate() {
    return this._lastChangesHasLocalUpdate
  }
  get lastChangesHasRemoteUpdate() {
    return this._lastChangesHasRemoteUpdate
  }
  remoteUpdateTransact(t) {
    ;(this.changeFromRemote = !0), t(), (this.changeFromRemote = !1)
  }
  historyApplyTransact(t) {
    ;(this.changeFromHistory = !0), t(), (this.changeFromHistory = !1)
  }
  run() {
    const t = this.rootComponentRef.component,
      e = t.changeMarker
    this.renderer.render()
    let s = !0
    this.subs.push(
      e.onForceChange.pipe(zs()).subscribe(() => {
        this.renderer.render()
      }),
      e.onChange
        .pipe(
          it(
            n => (
              s && ((s = !1), this.docChangeEvent.next()),
              {
                from: this.changeFromRemote
                  ? Bt.Remote
                  : this.changeFromHistory
                  ? Bt.History
                  : Bt.Local,
                operation: n
              }
            )
          ),
          zs()
        )
        .subscribe(n => {
          ;(s = !0),
            this.renderer.render(),
            (this._lastChangesHasRemoteUpdate = !1),
            (this._lastChangesHasLocalUpdate = !1),
            n.forEach(o => {
              o.from === Bt.Remote
                ? (this._lastChangesHasRemoteUpdate = !0)
                : (this._lastChangesHasLocalUpdate = !0)
            }),
            this.selection.restore(this._lastChangesHasLocalUpdate),
            this.docChangedEvent.next(n)
        }),
      e.onChildComponentRemoved.subscribe(n => {
        this.instanceList.add(n)
      }),
      this.renderer.onViewUpdated.subscribe(() => {
        this.instanceList.forEach(n => {
          let o = n
          for (; o; ) {
            const i = o.parentComponent
            if (i) o = i
            else break
          }
          o !== t && me.invokeChildComponentDestroyHook(o)
        }),
          this.instanceList.clear()
      })
    )
  }
  destroy() {
    this.subs.forEach(t => t.unsubscribe()),
      me.invokeChildComponentDestroyHook(this.rootComponentRef.component),
      (this.subs = [])
  }
  static invokeChildComponentDestroyHook(t) {
    t.slots.toArray().forEach(e => {
      e.sliceContent().forEach(s => {
        typeof s != 'string' && me.invokeChildComponentDestroyHook(s)
      })
    }),
      M(t, 'onDestroy')
  }
})
St = me = ct([j(), ht('design:paramtypes', [st, P, nt])], St)
class Dt {}
function Ws(r, t) {
  const e = []
  return (
    Object.keys(r).forEach(s => {
      const n = t.getFormatter(s)
      if (n) {
        const o = r[s]
        Array.isArray(o)
          ? o.forEach(i => {
              e.push([n, i])
            })
          : e.push([n, r[s]])
      }
    }),
    e
  )
}
let rs = class extends Dt {
  constructor(t, e, s, n, o) {
    super(),
      (this.stackSize = t),
      (this.root = e),
      (this.scheduler = s),
      (this.selection = n),
      (this.factory = o),
      (this.index = 0),
      (this.historySequence = []),
      (this.changeEvent = new F()),
      (this.backEvent = new F()),
      (this.forwardEvent = new F()),
      (this.pushEvent = new F()),
      (this.subscription = null),
      (this.forceChangeSubscription = null),
      (this.onChange = this.changeEvent.asObservable()),
      (this.onBack = this.backEvent.asObservable()),
      (this.onForward = this.forwardEvent.asObservable()),
      (this.onPush = this.pushEvent.asObservable())
  }
  get canBack() {
    return this.historySequence.length > 0 && this.index > 0
  }
  get canForward() {
    return this.historySequence.length > 0 && this.index < this.historySequence.length
  }
  listen() {
    this.record()
  }
  forward() {
    this.canForward &&
      (this.scheduler.historyApplyTransact(() => {
        const t = this.historySequence[this.index]
        this.apply(t, !1), this.selection.usePaths(t.afterPaths)
      }),
      this.index++,
      this.forwardEvent.next(),
      this.changeEvent.next())
  }
  back() {
    this.canBack &&
      (this.scheduler.historyApplyTransact(() => {
        const t = this.historySequence[this.index - 1]
        this.apply(t, !0), this.selection.usePaths(t.beforePaths)
      }),
      this.index--,
      this.backEvent.next(),
      this.changeEvent.next())
  }
  clear() {
    ;(this.historySequence = []), (this.index = 0), this.changeEvent.next()
  }
  destroy() {
    var t
    ;(this.historySequence = []),
      (t = this.forceChangeSubscription) === null || t === void 0 || t.unsubscribe(),
      this.subscription && this.subscription.unsubscribe()
  }
  record() {
    let t = this.selection.getPaths()
    this.scheduler.onDocChanged
      .pipe(
        it(e => {
          const s = []
          for (const n of e) {
            if (n.from !== Bt.Local) continue
            const o = n.operation,
              i = o.apply.filter(l => l.type !== 'apply' || l.record),
              a = o.unApply.filter(l => l.type !== 'apply' || l.record)
            i.length && a.length && s.push({ path: o.path, apply: i, unApply: a })
          }
          return s
        })
      )
      .subscribe(e => {
        if (!e.length) return
        ;(this.historySequence.length = this.index), this.index++
        const s = this.selection.getPaths()
        this.historySequence.push({
          operations: e.map(n => ({
            path: [...n.path],
            apply: n.apply.map(o =>
              o.type === 'insert' || o.type === 'insertSlot'
                ? Object.assign(Object.assign({}, o), { ref: null })
                : o
            ),
            unApply: n.unApply.map(o =>
              o.type === 'insert' || o.type === 'insertSlot'
                ? Object.assign(Object.assign({}, o), { ref: null })
                : o
            )
          })),
          beforePaths: t,
          afterPaths: s
        }),
          this.historySequence.length > this.stackSize &&
            (this.historySequence.shift(), this.index--),
          (t = s),
          this.pushEvent.next(),
          this.changeEvent.next()
      })
  }
  apply(t, e) {
    let s = t.operations
    e && (s = [...s].reverse()),
      s.forEach(n => {
        const o = [...n.path],
          i = o.length % 2 === 1,
          a = e ? n.unApply : n.apply
        if (i) {
          const l = this.selection.findSlotByPaths(o)
          a.forEach(c => {
            if (c.type === 'retain') {
              const h = c.formats
              if (h) {
                const u = Ws(h, this.factory)
                l.retain(c.offset, u)
              } else l.retain(c.offset)
              return
            }
            if (c.type === 'delete') {
              l.delete(c.count)
              return
            }
            if (c.type === 'apply') {
              l.updateState(h => {
                js(h, c.patches)
              })
              return
            }
            if (c.type === 'attrSet') {
              const h = this.factory.getAttribute(c.name)
              h && l.setAttribute(h, c.value)
              return
            }
            if (c.type === 'attrRemove') {
              const h = this.factory.getAttribute(c.name)
              h && l.removeAttribute(h)
              return
            }
            if (c.type === 'insert') {
              const h = c.formats
              let u
              h && (u = Ws(h, this.factory))
              const d =
                typeof c.content == 'string' ? c.content : this.factory.createComponent(c.content)
              u ? l.insert(d, u) : l.insert(d)
            }
          })
        } else {
          const l = this.selection.findComponentByPaths(o)
          a.forEach(c => {
            if (c.type === 'retain') {
              l.slots.retain(c.offset)
              return
            }
            if (c.type === 'delete') {
              l.slots.delete(c.count)
              return
            }
            if (c.type === 'insertSlot') {
              const h = this.factory.createSlot(c.slot)
              l.slots.insert(h)
            }
            if (c.type === 'apply') {
              l.updateState(h => js(h, c.patches))
              return
            }
          })
        }
      })
  }
}
rs = ct([j(), Mt(0, yt(un)), ht('design:paramtypes', [Number, st, St, P, Rt])], rs)
let lt = class {
  constructor(t, e, s, n, o) {
    ;(this.components = t),
      (this.markdownDetect = e),
      (this.commander = s),
      (this.injector = n),
      (this.selection = o),
      (this.shortcutList = []),
      (this.zenCodingInterceptors = []),
      t.forEach(i => {
        const a = i.zenCoding
        a && this.zenCodingInterceptors.push(this.createZenCodingEx(i, a))
      })
  }
  addZenCodingInterceptor(t) {
    return (
      this.zenCodingInterceptors.unshift(t),
      {
        remove: () => {
          const e = this.zenCodingInterceptors.indexOf(t)
          e > -1 && this.zenCodingInterceptors.splice(e, 1)
        }
      }
    )
  }
  execShortcut(t) {
    if (!this.selection.isSelected) return !1
    const e = t.key,
      s = this.selection.commonAncestorSlot
    if (
      this.markdownDetect &&
      !t.ctrlKey &&
      !t.shiftKey &&
      !t.altKey &&
      s === this.selection.startSlot &&
      s === this.selection.endSlot
    ) {
      for (const o of this.zenCodingInterceptors)
        if (o.try(e)) {
          const a = s.sliceContent()
          let l = a[0]
          if (a.length > 1 || typeof l != 'string') continue
          if (((l = l.replace(/\n$/, '')), o.match(l))) {
            if (!o.action(l)) break
            return !0
          }
        }
    }
    const n = this.selection.commonAncestorComponent
    return n &&
      this.handleShortcut(
        t,
        n.shortcutList.map(i => this.createShortcutEx(i))
      )
      ? !0
      : this.handleShortcut(t, this.shortcutList)
  }
  addShortcut(t) {
    const e = this.createShortcutEx(t)
    return (
      this.shortcutList.unshift(e),
      {
        remove: () => {
          const s = this.shortcutList.indexOf(e)
          s > -1 && this.shortcutList.splice(s, 1)
        }
      }
    )
  }
  handleShortcut(t, e) {
    for (const s of e) {
      const n = s.config
      if (
        s.test(t.key) &&
        !!n.keymap.altKey === t.altKey &&
        !!n.keymap.shiftKey === t.shiftKey &&
        !!n.keymap.ctrlKey === t.ctrlKey &&
        n.action(t.key) !== !1
      )
        return !0
    }
    return !1
  }
  createZenCodingEx(t, e) {
    const s = this.selection,
      n = this.commander
    return {
      match(o) {
        return typeof e.match == 'function' ? e.match(o) : e.match.test(o)
      },
      try(o) {
        return typeof e.key == 'string'
          ? o.toLowerCase() === e.key.toLowerCase()
          : typeof e.key == 'function'
          ? e.key(o)
          : Array.isArray(e.key)
          ? e.key.some(i => i.toLowerCase() === o.toLowerCase())
          : e.key.test(o)
      },
      action: o => {
        const i = s.commonAncestorSlot,
          a = e.generateInitData(o, this.injector),
          l = t.createInstance(this.injector, a)
        if (i.schema.includes(l.type)) s.selectSlot(i), n.delete(), n.insert(l)
        else {
          const h = i.parent
          if ((h && h.slots.length > 1) || !(h == null ? void 0 : h.parent)) return !1
          s.selectComponent(h), n.delete(), n.insert(l)
        }
        const c = l.slots.first
        if (c) s.setPosition(c, 0)
        else if (l.parent) {
          const h = l.parent.indexOf(l)
          s.setPosition(l.parent, h + 1)
        }
        return !0
      }
    }
  }
  createShortcutEx(t) {
    const e = t.keymap.key
    return {
      config: t,
      test(s) {
        return typeof e == 'string'
          ? s.toLowerCase() === e.toLowerCase()
          : Array.isArray(e)
          ? e.some(n => s.toLowerCase() === n.toLowerCase())
          : typeof e.match == 'function'
          ? e.match(s)
          : e.match.test(s)
      }
    }
  }
}
lt = ct(
  [j(), Mt(0, yt(ds)), Mt(1, yt(hn)), ht('design:paramtypes', [Array, Boolean, L, ft, P])],
  lt
)
let ze = class {
  constructor(t) {
    ;(this.rootComponentRef = t),
      (this.componentVNode = new WeakMap()),
      (this.slotVNodeCaches = new WeakMap()),
      (this.slotRenderFactory = new WeakMap())
  }
  render() {
    const t = this.componentRender(this.rootComponentRef.component)
    return new C('body', null, [t]), t
  }
  componentRender(t) {
    if (t.changeMarker.outputDirty) {
      const s = t.extends.render((n, o) => this.slotRender(n, o), X.Output)
      return t.changeMarker.outputRendered(), this.componentVNode.set(t, s), s
    }
    const e = this.componentVNode.get(t)
    return (
      t.slots.toArray().forEach(s => {
        if (!s.changeMarker.outputChanged) return
        const n = s.changeMarker.outputDirty,
          o = this.slotVNodeCaches.get(s),
          i = this.slotRenderFactory.get(s),
          a = this.slotRender(s, i)
        n &&
          (e === o && this.componentVNode.set(t, a),
          o.parentNode.replaceChild(a, o),
          this.slotVNodeCaches.set(s, a))
      }),
      t.changeMarker.outputRendered(),
      this.componentVNode.get(t)
    )
  }
  slotRender(t, e) {
    if (t.changeMarker.outputDirty) {
      this.slotRenderFactory.set(t, e)
      const s = t.createFormatTree()
      let n = s.children
        ? this.createVDomByFormatTree(t, s.children)
        : this.createVDomByContent(t, s.startIndex, s.endIndex)
      s.formats && (n = [this.createVDomByOverlapFormats(s.formats, n)])
      const o = e(n)
      for (const [i, a] of t.getAttributes()) i.render(o, a, X.Output)
      return t.changeMarker.outputRendered(), this.slotVNodeCaches.set(t, o), o
    }
    return (
      t
        .sliceContent()
        .filter(s => typeof s != 'string')
        .forEach(s => {
          if (!s.changeMarker.outputChanged) return
          const n = s.changeMarker.outputDirty,
            o = this.componentVNode.get(s),
            i = this.componentRender(s)
          n && o.parentNode.replaceChild(i, o)
        }),
      t.changeMarker.outputRendered(),
      this.slotVNodeCaches.get(t)
    )
  }
  createVDomByFormatTree(t, e) {
    var s
    const n = []
    for (const o of e)
      if (!((s = o.formats) === null || s === void 0) && s.length) {
        const i = o.children
            ? this.createVDomByFormatTree(t, o.children)
            : this.createVDomByContent(t, o.startIndex, o.endIndex),
          a = this.createVDomByOverlapFormats(o.formats, i)
        n.push(a)
      } else n.push(...this.createVDomByContent(t, o.startIndex, o.endIndex))
    return n
  }
  createVDomByOverlapFormats(t, e) {
    const s = []
    let n = null
    for (let o = t.length - 1; o > -1; o--) {
      const i = t[o],
        a = i.formatter.render(e, i.value, X.Output)
      if (!(a instanceof C)) {
        s.push(a)
        continue
      }
      ;(n = a), (e = [a])
    }
    for (const o of s) n || ((n = yn(o.fallbackTagName)), n.appendChild(...e)), o.attach(n)
    return n
  }
  createVDomByContent(t, e, s) {
    return t
      .sliceContent(e, s)
      .map(o => (typeof o == 'string' ? o.match(/\n|[^\n]+/g) : o))
      .flat()
      .map(o => {
        let i, a
        return (
          typeof o == 'string'
            ? o ===
              `
`
              ? ((i = new C('br')), (a = 1))
              : ((i = new rt(o)), (a = o.length))
            : ((a = 1), (i = this.componentRender(o))),
          (e += a),
          i
        )
      })
  }
}
ze = ct([j(), ht('design:paramtypes', [st])], ze)
var v
;(function (r) {
  ;(r.Normal = 'Normal'), (r.Disabled = 'Disabled'), (r.Enabled = 'Enabled')
})(v || (v = {}))
let D = class {
  constructor(t) {
    this.selection = t
  }
  queryFormat(t) {
    if (!this.selection.isSelected) return { state: v.Normal, value: null }
    const e = this.selection
      .getSelectedScopes()
      .map(s => this.getStatesByRange(s.slot, t, s.startIndex, s.endIndex))
    return this.mergeState(e)
  }
  queryAttribute(t) {
    if (!this.selection.isSelected) return { state: v.Normal, value: null }
    let e
    if (this.selection.isCollapsed) {
      const n = this.selection.commonAncestorSlot
      e = [{ slot: n, startIndex: 0, endIndex: n.length }]
    } else e = this.selection.getSelectedScopes()
    const s = e.map(n => {
      const o = n.slot.sliceContent(n.startIndex, n.endIndex),
        i = []
      let a = !1
      if (
        (o.forEach(c => {
          typeof c != 'string' ? i.push(c) : (a = !0)
        }),
        a)
      )
        return n.slot.hasAttribute(t)
          ? { state: v.Enabled, value: n.slot.getAttribute(t) }
          : { state: v.Normal, value: null }
      const l = []
      for (const c of i) {
        const h = c.slots
        if (h.length === 0)
          if (n.slot.hasAttribute(t)) l.push({ state: v.Enabled, value: n.slot.getAttribute(t) })
          else return { state: v.Normal, value: null }
        for (const u of h.toArray())
          if (u.hasAttribute(t)) l.push({ state: v.Enabled, value: u.getAttribute(t) })
          else return { state: v.Normal, value: null }
      }
      return this.mergeState(l)
    })
    return this.mergeState(s)
  }
  queryComponent(t, e) {
    if (!this.selection.isSelected) return { state: v.Normal, value: null }
    const n = this.selection.getRanges().map(o => {
      var i
      let a = P.getCommonAncestorComponent(o.startSlot, o.endSlot)
      for (; a; ) {
        if (a.name === t.name && (!e || e(a))) return { state: v.Enabled, value: a }
        a = ((i = a.parent) === null || i === void 0 ? void 0 : i.parent) || null
      }
      return { state: v.Normal, value: null }
    })
    return this.mergeState(n)
  }
  queryWrappedComponent(t) {
    const e = this.selection
    if (!e.isSelected || e.isCollapsed) return { state: v.Normal, value: null }
    const s = e.getRanges(),
      n = []
    for (const o of s) {
      const { startSlot: i, endSlot: a, startOffset: l, endOffset: c } = o
      if (i !== a || c - l > 1) return { state: v.Normal, value: null }
      const h = i.getContentAtIndex(l)
      if (typeof h != 'string' && h.name === t.name) n.push(h)
      else return { state: v.Normal, value: null }
    }
    return { state: v.Enabled, value: n[0] }
  }
  getStatesByRange(t, e, s, n) {
    if (s === n) {
      const l =
        s === 0
          ? t.getFormatRangesByFormatter(e, 0, 1).shift()
          : t.getFormatRangesByFormatter(e, s - 1, n).shift()
      return l ? { state: v.Enabled, value: l.value } : null
    }
    const o = t.sliceContent(s, n),
      i = []
    let a = s
    for (const l of o) {
      if (typeof l == 'string' || l.slots.length === 0) {
        const c = t.getFormatRangesByFormatter(e, a, a + l.length)
        let h = a
        for (const u of c) {
          if (h !== u.startIndex) return { state: v.Normal, value: null }
          i.push({ state: v.Enabled, value: u.value }), (h = u.endIndex)
        }
        if (h !== a + l.length) return { state: v.Normal, value: null }
      } else
        l.slots.toArray().forEach(c => {
          i.push(this.getStatesByRange(c, e, 0, c.length))
        })
      a += l.length
    }
    return this.mergeState(i)
  }
  mergeState(t) {
    const s = t.filter(n => n).filter(n => n.state !== v.Normal)
    return t.length !== s.length
      ? { state: v.Normal, value: null }
      : s.length
      ? { state: v.Enabled, value: s[0].value }
      : { state: v.Normal, value: null }
  }
}
D = ct([j(), ht('design:paramtypes', [P])], D)
const Js = jt('Starter')
class Te extends Kn {
  constructor(t) {
    super(new Wn(), [], Te.diScope),
      (this.config = t),
      (this.beforeDestroyCallbacks = []),
      (this.isDestroyed = !1)
    const { plugins: e, providers: s } = this.mergeModules(t)
    ;(this.plugins = e.map(n => n())),
      (this.staticProviders = s),
      (this.normalizedProviders = this.staticProviders.map(n => Jn(n)))
  }
  mount(t, e) {
    var s, n, o
    return ro(this, void 0, void 0, function* () {
      const i = this.get(st)
      ;(i.component = e), (i.host = t)
      const a = []
      ;(s = this.config.imports) === null ||
        s === void 0 ||
        s.forEach(u => {
          if (typeof u.setup == 'function') {
            const d = u.setup(this)
            a.push(d || null)
          }
        }),
        a.push(
          ((o = (n = this.config).setup) === null || o === void 0 ? void 0 : o.call(n, this)) ||
            null
        )
      const l = yield Promise.all(a)
      if (this.isDestroyed) return this
      l.forEach(u => {
        u && this.beforeDestroyCallbacks.push(u)
      })
      const c = this.get(St)
      return this.get(Dt).listen(), c.run(), this.plugins.forEach(u => u.setup(this)), this
    })
  }
  destroy() {
    ;(this.isDestroyed = !0),
      this.plugins.forEach(t => {
        var e
        return (e = t.onDestroy) === null || e === void 0 ? void 0 : e.call(t)
      }),
      this.beforeDestroyCallbacks.forEach(t => {
        t()
      }),
      [this.get(Dt), this.get(P), this.get(St), this.get(nt)].forEach(t => {
        t.destroy()
      })
  }
  mergeModules(t) {
    var e
    const s = [...(t.providers || [])],
      n = [...(t.components || [])],
      o = [...(t.attributes || [])],
      i = [...(t.formatters || [])],
      a = [...(t.plugins || [])]
    return (
      (e = t.imports) === null ||
        e === void 0 ||
        e.forEach(c => {
          s.push(...(c.providers || [])),
            n.push(...(c.components || [])),
            i.push(...(c.formatters || [])),
            a.push(...(c.plugins || []))
        }),
      {
        providers: [
          ...s,
          { provide: dn, useValue: !!t.readonly },
          {
            provide: un,
            useValue: typeof t.historyStackSize == 'number' ? t.historyStackSize : 500
          },
          { provide: ds, useValue: n },
          { provide: cn, useValue: o },
          { provide: ln, useValue: i },
          { provide: hn, useValue: t.zenCoding },
          { provide: st, useValue: {} },
          { provide: Dt, useClass: rs },
          Y,
          St,
          L,
          lt,
          ze,
          D,
          nt,
          P,
          Rt,
          { provide: Te, useFactory: () => this },
          { provide: ft, useFactory: () => this },
          {
            provide: gs,
            useFactory() {
              throw Js('You must implement the `NativeSelectionBridge` interface to start Textbus!')
            }
          },
          {
            provide: Je,
            useFactory() {
              throw Js('You must implement the `NativeRenderer` interface to start Textbus!')
            }
          }
        ],
        plugins: a
      }
    )
  }
}
Te.diScope = new $n('Textbus')
function y(r, t = {}) {
  const e = document.createElement(r)
  return (
    t.classes && e.classList.add(...t.classes),
    t.attrs &&
      Object.keys(t.attrs).forEach(s => {
        e.setAttribute(s, t.attrs[s])
      }),
    t.props &&
      Object.keys(t.props).forEach(s => {
        e[s] = t.props[s]
      }),
    t.styles && Object.assign(e.style, t.styles),
    t.children &&
      t.children
        .filter(s => s)
        .forEach(s => {
          e.appendChild(s)
        }),
    t.on &&
      Object.keys(t.on).forEach(s => {
        e.addEventListener(s, t.on[s])
      }),
    e
  )
}
function U(r) {
  return document.createTextNode(r)
}
function ys(r) {
  let { startContainer: t, startOffset: e } = r
  if (t.nodeType === Node.TEXT_NODE) {
    if (e > 0) return r.getBoundingClientRect()
    const l = t.parentNode
    ;(e = Array.from(l.childNodes).indexOf(t)), (t = l)
  }
  const s = t.childNodes[e - 1]
  if (s) {
    if (s.nodeType === Node.ELEMENT_NODE && s.nodeName.toLowerCase() !== 'br') {
      const l = s.getBoundingClientRect()
      return { left: l.right, top: l.top, width: l.width, height: l.height }
    } else if (s.nodeType === Node.TEXT_NODE) {
      const l = document.createRange()
      return (
        l.setStart(s, s.textContent.length),
        l.setEnd(s, s.textContent.length),
        l.getBoundingClientRect()
      )
    }
  }
  const n = t.childNodes[e]
  let o = !1
  if (!n) {
    const l = t.lastChild
    if (l && l.nodeType === Node.ELEMENT_NODE) {
      const c = l.getBoundingClientRect()
      return { left: c.right, top: c.top, width: c.width, height: c.height }
    }
  }
  if (n) {
    if (n.nodeType === Node.ELEMENT_NODE && n.nodeName.toLowerCase() !== 'br')
      return n.getBoundingClientRect()
    o = !0
  }
  const i = t.ownerDocument.createElement('span')
  ;(i.innerText = '\u200B'),
    (i.style.display = 'inline-block'),
    o ? t.insertBefore(i, n) : t.appendChild(i)
  const a = i.getBoundingClientRect()
  return t.removeChild(i), a
}
const wo = () => /win(dows|32|64)/i.test(navigator.userAgent),
  xs = () => /mac os/i.test(navigator.userAgent),
  Cn = () => /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
function $t(r, t, e, s) {
  var n = arguments.length,
    o = n < 3 ? t : s === null ? (s = Object.getOwnPropertyDescriptor(t, e)) : s,
    i
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    o = Reflect.decorate(r, t, e, s)
  else
    for (var a = r.length - 1; a >= 0; a--)
      (i = r[a]) && (o = (n < 3 ? i(o) : n > 3 ? i(t, e, o) : i(t, e)) || o)
  return n > 3 && o && Object.defineProperty(t, e, o), o
}
function vs(r, t) {
  return function (e, s) {
    t(e, s, r)
  }
}
function Oe(r, t) {
  if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
    return Reflect.metadata(r, t)
}
function So(r, t, e, s) {
  function n(o) {
    return o instanceof e
      ? o
      : new e(function (i) {
          i(o)
        })
  }
  return new (e || (e = Promise))(function (o, i) {
    function a(h) {
      try {
        c(s.next(h))
      } catch (u) {
        i(u)
      }
    }
    function l(h) {
      try {
        c(s.throw(h))
      } catch (u) {
        i(u)
      }
    }
    function c(h) {
      h.done ? o(h.value) : n(h.value).then(a, l)
    }
    c((s = s.apply(r, t || [])).next())
  })
}
const Ie = new vt('EDITOR_OPTIONS'),
  zt = new vt('VIEW_CONTAINER'),
  Vt = new vt('VIEW_DOCUMENT'),
  je = new vt('VIEW_MASK')
class qt {}
let ne = class {
  constructor(t, e, s, n, o, i, a) {
    ;(this.config = t),
      (this.injector = e),
      (this.controller = s),
      (this.selection = n),
      (this.rootComponentRef = o),
      (this.input = i),
      (this.renderer = a),
      (this.nativeSelection = document.getSelection()),
      (this.selectionMaskElement = y('style')),
      (this.selectionChangeEvent = new F()),
      (this.subs = []),
      (this.connector = null),
      (this.ignoreSelectionChange = !1),
      (this.changeFromUser = !1),
      (this.docContainer = e.get(Vt)),
      (this.maskContainer = e.get(je)),
      (this.onSelectionChange = this.selectionChangeEvent
        .asObservable()
        .pipe(_t(() => !s.readonly))),
      document.head.appendChild(this.selectionMaskElement),
      (this.sub = this.onSelectionChange.subscribe(l => {
        l ? i.focus(l, this.changeFromUser) : i.blur()
      })),
      this.sub.add(
        I(document, 'focusin').subscribe(l => {
          let c = l.target
          if (/^(input|textarea|select)$/i.test(c.nodeName)) {
            if (c.tagName.toLowerCase() === 'input' && /^(range|date)$/.test(c.type)) return
            this.ignoreSelectionChange = !0
            return
          }
          if (!t.useContentEditable)
            for (; c; ) {
              if (c.contentEditable === 'true') {
                this.ignoreSelectionChange = !0
                return
              }
              c = c.parentNode
            }
        })
      ),
      this.sub.add(
        I(document, 'focusout').subscribe(() => {
          this.ignoreSelectionChange = !1
        })
      )
  }
  connect(t) {
    this.disConnect(), (this.connector = t), this.syncSelection(t), this.listen(t)
  }
  disConnect() {
    ;(this.connector = null), this.unListen()
  }
  getRect(t) {
    const { focus: e, anchor: s } = this.getPositionByRange({
      focusOffset: t.offset,
      anchorOffset: t.offset,
      focusSlot: t.slot,
      anchorSlot: t.slot
    })
    if (!e || !s) return null
    const n = document.createRange()
    return n.setStart(e.node, e.offset), n.collapse(), ys(n)
  }
  restore(t, e) {
    if (((this.changeFromUser = e), this.ignoreSelectionChange || !this.connector)) return
    if ((this.unListen(), !t)) {
      this.nativeSelection.removeAllRanges(),
        this.selectionChangeEvent.next(null),
        this.listen(this.connector)
      return
    }
    const { focus: s, anchor: n } = this.getPositionByRange(t)
    if (!s || !n) {
      this.nativeSelection.removeAllRanges(),
        this.selectionChangeEvent.next(null),
        this.listen(this.connector)
      return
    }
    if (
      (this.nativeSelection.setBaseAndExtent(n.node, n.offset, s.node, s.offset),
      this.nativeSelection.rangeCount)
    ) {
      const i = this.nativeSelection.getRangeAt(0)
      this.selectionChangeEvent.next(i)
    } else this.selectionChangeEvent.next(null)
    const o = () => {
      this.connector && this.listen(this.connector)
    }
    typeof requestIdleCallback == 'function' ? requestIdleCallback(o) : setTimeout(o, 30)
  }
  destroy() {
    this.sub.unsubscribe()
  }
  getPositionByRange(t) {
    let e, s
    try {
      return (
        (e = this.findSelectedNodeAndOffset(t.focusSlot, t.focusOffset)),
        (s = e),
        (t.anchorSlot !== t.focusSlot || t.anchorOffset !== t.focusOffset) &&
          (s = this.findSelectedNodeAndOffset(t.anchorSlot, t.anchorOffset)),
        { focus: e, anchor: s }
      )
    } catch {
      return { focus: null, anchor: null }
    }
  }
  getPreviousLinePositionByCurrent(t) {
    return this.getLinePosition(t, !1)
  }
  getNextLinePositionByCurrent(t) {
    return this.getLinePosition(t, !0)
  }
  getLinePosition(t, e) {
    clearTimeout(this.cacheCaretPositionTimer)
    let s
    return (
      this.oldCaretPosition
        ? (s = e
            ? this.getNextLinePositionByOffset(t, this.oldCaretPosition.left)
            : this.getPreviousLinePositionByOffset(t, this.oldCaretPosition.left))
        : ((this.oldCaretPosition = this.getRect(t)),
          (s = e
            ? this.getNextLinePositionByOffset(t, this.oldCaretPosition.left)
            : this.getPreviousLinePositionByOffset(t, this.oldCaretPosition.left))),
      (this.cacheCaretPositionTimer = setTimeout(() => {
        this.oldCaretPosition = null
      }, 3e3)),
      s
    )
  }
  getPreviousLinePositionByOffset(t, e) {
    let s = !1,
      n = 0,
      o = e,
      i = t.slot,
      a = t.offset,
      l = this.getRect({ slot: i, offset: a }).top,
      c,
      h,
      u = 0
    for (;;) {
      n++, (c = this.selection.getPreviousPositionByPosition(i, a)), (i = c.slot), (a = c.offset)
      const d = this.getRect(c)
      if (!s) {
        if (d.left > o || d.top < l) s = !0
        else if (d.left === o && d.top === l) return c
        ;(o = d.left), (l = d.top)
      }
      if (s) {
        if (d.left < e) return c
        if (h && d.left >= u) return h
        ;(u = d.left), (h = c)
      }
      if (n > 1e4) break
    }
    return c || { offset: 0, slot: i }
  }
  getNextLinePositionByOffset(t, e) {
    let s = !1,
      n = 0,
      o = e,
      i = t.slot,
      a = t.offset,
      l = this.getRect({ slot: i, offset: a }).top,
      c,
      h = 0
    for (;;) {
      n++
      const u = this.selection.getNextPositionByPosition(i, a)
      ;(i = u.slot), (a = u.offset)
      const d = this.getRect(u)
      if (!s) {
        if (d.left < o || d.top > l) s = !0
        else if (d.left === o && d.top === l) return u
        ;(o = d.left), (l = d.top), (c = u)
      }
      if (s) {
        if (d.left > e || (c && d.left <= h)) return c
        ;(c = u), (h = d.left)
      }
      if (n > 1e4) break
    }
    return c || { offset: i.length, slot: i }
  }
  unListen() {
    this.subs.forEach(t => t.unsubscribe()), (this.subs = [])
  }
  listen(t) {
    if (!this.config.useContentEditable) {
      const e = this.nativeSelection
      this.subs.push(
        I(this.docContainer, 'mousedown').subscribe(s => {
          this.ignoreSelectionChange || s.button === 2 || s.shiftKey || e.removeAllRanges()
        })
      )
    }
    this.subs.push(
      I(document, 'selectionchange').subscribe(() => {
        this.syncSelection(t)
      })
    )
  }
  syncSelection(t) {
    var e
    const s = this.nativeSelection
    if (
      ((this.changeFromUser = !0),
      this.ignoreSelectionChange ||
        this.input.composition ||
        s.rangeCount === 0 ||
        !this.docContainer.contains(s.anchorNode))
    )
      return
    const n = s.getRangeAt(0),
      o = n.cloneRange(),
      i = s.focusNode === o.endContainer && s.focusOffset === o.endOffset,
      a = s.focusNode === o.startContainer && s.focusOffset === o.startOffset
    if (!this.docContainer.contains(s.focusNode))
      if (i) {
        const h = this.renderer.getVNodeBySlot(this.rootComponentRef.component.slots.first),
          u = this.renderer.getNativeNodeByVNode(h)
        o.setEndAfter(u.lastChild)
      } else {
        const h = this.renderer.getVNodeBySlot(this.rootComponentRef.component.slots.last),
          u = this.renderer.getNativeNodeByVNode(h)
        o.setStartBefore(u.firstChild)
      }
    const l = this.getCorrectedPosition(o.startContainer, o.startOffset, a),
      c = o.collapsed ? l : this.getCorrectedPosition(o.endContainer, o.endOffset, i)
    if (
      [Node.ELEMENT_NODE, Node.TEXT_NODE].includes(
        (e = o.commonAncestorContainer) === null || e === void 0 ? void 0 : e.nodeType
      ) &&
      l &&
      c
    ) {
      const h = i
          ? { anchorSlot: l.slot, anchorOffset: l.offset, focusSlot: c.slot, focusOffset: c.offset }
          : {
              focusSlot: l.slot,
              focusOffset: l.offset,
              anchorSlot: c.slot,
              anchorOffset: c.offset
            },
        { focus: u, anchor: d } = this.getPositionByRange(h)
      if (u && d) {
        let f = d,
          p = u
        a && ((f = u), (p = d)),
          (o.startContainer !== f.node || o.startOffset !== f.offset) &&
            o.setStart(f.node, f.offset),
          (o.endContainer !== p.node || o.endOffset !== p.offset) && o.setEnd(p.node, p.offset),
          t.setSelection(h),
          s.isCollapsed && (n.setStart(f.node, f.offset), n.setEnd(p.node, p.offset)),
          this.selectionChangeEvent.next(o)
      } else t.setSelection(null)
      return
    }
    t.setSelection(null)
  }
  findSelectedNodeAndOffset(t, e) {
    const s = t.getContentAtIndex(e - 1),
      n = this.renderer.getVNodesBySlot(t)
    if (s) {
      if (typeof s != 'string') {
        const i = this.renderer.getVNodeByComponent(s),
          a = this.renderer.getNativeNodeByVNode(i)
        return { node: a.parentNode, offset: Array.from(a.parentNode.childNodes).indexOf(a) + 1 }
      } else if (
        s ===
        `
`
      ) {
        for (const i of n)
          if (!(i instanceof rt) && i.tagName === 'br') {
            const a = this.renderer.getLocationByVNode(i)
            if (a && a.endIndex === e) {
              const l = this.renderer.getNativeNodeByVNode(i),
                c = l.parentNode
              return { node: c, offset: Array.from(c.childNodes).indexOf(l) + 1 }
            }
          }
      }
    }
    const o = t.getContentAtIndex(e)
    if (o && typeof o != 'string') {
      const i = this.renderer.getVNodeByComponent(o),
        a = this.renderer.getNativeNodeByVNode(i)
      return { node: a.parentNode, offset: Array.from(a.parentNode.childNodes).indexOf(a) }
    }
    for (const i of n) {
      if (i instanceof C) {
        if (i.tagName === 'br') {
          const l = this.renderer.getLocationByVNode(i)
          if (l && l.startIndex === e) {
            const c = this.renderer.getNativeNodeByVNode(i),
              h = c.parentNode
            return { node: h, offset: Array.from(h.childNodes).indexOf(c) }
          }
        }
        continue
      }
      const a = this.renderer.getLocationByVNode(i)
      if (a && e >= a.startIndex && e <= a.endIndex)
        return { node: this.renderer.getNativeNodeByVNode(i), offset: e - a.startIndex }
    }
    return null
  }
  getCorrectedPosition(t, e, s, n = []) {
    if ((n.push(t), t.nodeType === Node.ELEMENT_NODE)) {
      const o = this.renderer.getLocationByNativeNode(t),
        i = t.childNodes[e]
      if (i) {
        const c = this.renderer.getLocationByNativeNode(i)
        return c
          ? o
            ? { slot: c.slot, offset: c.startIndex }
            : this.findFocusNode(i, s, n)
          : this.findFocusNode(i, s, n)
      }
      const a = t.childNodes[e - 1]
      if (a) {
        const c = this.renderer.getLocationByNativeNode(a)
        if (c && o) return { slot: c.slot, offset: c.endIndex }
      }
      if (o) return { slot: o.slot, offset: o.endIndex }
      const l = s ? t.nextSibling : t.previousSibling
      return l ? this.findFocusNode(l, s, n) : this.findFocusNodeByParent(t, s, n)
    } else if (t.nodeType === Node.TEXT_NODE) {
      const o = this.renderer.getLocationByNativeNode(t)
      if (o) return { slot: o.slot, offset: o.startIndex + e }
      const i = s ? t.nextSibling : t.previousSibling
      return i ? this.findFocusNode(i, s, n) : this.findFocusNodeByParent(t, s, n)
    }
    return null
  }
  findFocusNode(t, e = !1, s = []) {
    if (s.includes(t)) {
      const a = e ? t.nextSibling : t.previousSibling
      return a ? this.findFocusNode(a, e, s) : this.findFocusNodeByParent(t, e, s)
    }
    s.push(t)
    const n = this.renderer.getLocationByNativeNode(t)
    if (n) return { slot: n.slot, offset: e ? n.startIndex : n.endIndex }
    const o = e ? t.firstChild : t.lastChild
    if (o) return this.findFocusNode(o, e, s)
    const i = e ? t.nextSibling : t.previousSibling
    return i ? this.findFocusNode(i, e, s) : this.findFocusNodeByParent(t, e, s)
  }
  findFocusNodeByParent(t, e, s) {
    const n = t.parentNode
    if (n) {
      const o = this.renderer.getLocationByNativeNode(n)
      return o
        ? { slot: o.slot, offset: e ? o.endIndex : o.startIndex }
        : (s.push(t), this.findFocusNode(n, e, s))
    }
    return null
  }
}
ne = $t([j(), vs(0, yt(Ie)), Oe('design:paramtypes', [Object, ft, Y, P, st, qt, nt])], ne)
class wn {}
let as = class {
  constructor(t, e, s, n, o) {
    ;(this.injector = t),
      (this.nativeSelection = e),
      (this.scheduler = s),
      (this.selection = n),
      (this.awarenessDelegate = o),
      (this.host = y('div', {
        styles: {
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }
      })),
      (this.canvasContainer = y('div', {
        styles: {
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }
      })),
      (this.canvas = y('canvas', {
        styles: {
          position: 'absolute',
          opacity: 0.5,
          left: 0,
          top: 0,
          width: '100%',
          height: document.documentElement.clientHeight + 'px',
          pointerEvents: 'none'
        }
      })),
      (this.context = this.canvas.getContext('2d')),
      (this.tooltips = y('div', {
        styles: {
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          fontSize: '12px',
          zIndex: 10
        }
      })),
      (this.onRectsChange = new F()),
      (this.subscription = new Ht()),
      (this.currentSelection = []),
      (this.container = t.get(zt)),
      this.canvasContainer.append(this.canvas),
      this.host.append(this.canvasContainer, this.tooltips),
      this.container.prepend(this.host),
      this.subscription.add(
        this.onRectsChange.subscribe(i => {
          for (const a of i)
            (this.context.fillStyle = a.color),
              this.context.beginPath(),
              this.context.rect(a.left, a.top, a.width, a.height),
              this.context.fill(),
              this.context.closePath()
        }),
        I(window, 'resize').subscribe(() => {
          ;(this.canvas.style.height = document.documentElement.clientHeight + 'px'), this.refresh()
        }),
        this.scheduler.onDocChanged.subscribe(() => {
          this.refresh()
        })
      )
  }
  refresh() {
    this.draw(this.currentSelection)
  }
  destroy() {
    this.subscription.unsubscribe()
  }
  draw(t) {
    this.currentSelection = t
    const e = this.container.getBoundingClientRect()
    ;(this.canvas.style.top = e.top * -1 + 'px'),
      (this.canvas.width = this.canvas.offsetWidth),
      (this.canvas.height = this.canvas.offsetHeight),
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    const s = []
    t
      .filter(n => n.paths.anchor.length && n.paths.focus.length)
      .forEach(n => {
        const o = [...n.paths.anchor],
          i = [...n.paths.focus],
          a = o.pop(),
          l = this.selection.findSlotByPaths(o),
          c = i.pop(),
          h = this.selection.findSlotByPaths(i)
        if (!l || !h) return
        const { focus: u, anchor: d } = this.nativeSelection.getPositionByRange({
          focusOffset: c,
          anchorOffset: a,
          focusSlot: h,
          anchorSlot: l
        })
        if (!u || !d) return
        const f = document.createRange()
        f.setStart(d.node, d.offset),
          f.setEnd(u.node, u.offset),
          (d.node !== u.node || d.offset !== u.offset) &&
            f.collapsed &&
            (f.setStart(u.node, u.offset), f.setEnd(d.node, d.offset))
        let p = !1
        this.awarenessDelegate &&
          (p = this.awarenessDelegate.getRects(
            { focusOffset: c, anchorOffset: a, focusSlot: h, anchorSlot: l },
            f
          )),
          p || (p = f.getClientRects())
        const m = []
        for (let N = p.length - 1; N >= 0; N--) {
          const E = p[N]
          m.push({
            id: n.id,
            color: n.color,
            username: n.username,
            left: E.left - e.left,
            top: E.top,
            width: E.width,
            height: E.height
          })
        }
        this.onRectsChange.next(m)
        const g = f.cloneRange()
        g.setStart(u.node, u.offset), g.collapse(!0)
        const x = ys(g),
          S = {
            id: n.id,
            username: n.username,
            color: n.color,
            left: x.left - e.left,
            top: x.top - e.top,
            width: 1,
            height: x.height
          }
        S.left < 0 || S.top < 0 || S.left > e.width || s.push(S)
      }),
      this.drawUserCursor(s)
  }
  drawUserCursor(t) {
    for (let e = 0; e < t.length; e++) {
      const s = t[e],
        { cursor: n, userTip: o, anchor: i } = this.getUserCursor(e)
      Object.assign(n.style, {
        left: s.left + 'px',
        top: s.top + 'px',
        width: s.width + 'px',
        height: s.height + 'px',
        background: s.color,
        display: 'block'
      }),
        (i.style.background = s.color),
        (o.innerText = s.username),
        (o.style.background = s.color)
    }
    for (let e = t.length; e < this.tooltips.children.length; e++)
      this.tooltips.removeChild(this.tooltips.children[e])
  }
  getUserCursor(t) {
    let e = this.tooltips.children[t]
    if (e) {
      const o = e.children[0]
      return { cursor: e, anchor: o, userTip: o.children[0] }
    }
    const s = y('span', {
        styles: {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: '2px',
          bottom: '100%',
          whiteSpace: 'nowrap',
          color: '#fff',
          boxShadow: '0 1px 2px rgba(0,0,0,.1)',
          opacity: 0.8,
          borderRadius: '3px',
          padding: '3px 5px',
          pointerEvents: 'none'
        }
      }),
      n = y('span', {
        styles: {
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          pointerEvents: 'auto',
          pointer: 'cursor'
        },
        children: [s]
      })
    return (
      (e = y('span', { styles: { position: 'absolute' }, children: [n] })),
      this.tooltips.append(e),
      { cursor: e, anchor: n, userTip: s }
    )
  }
}
as = $t([j(), vs(4, Gn()), Oe('design:paramtypes', [ft, ne, St, P, wn])], as)
var ls
let $e = (ls = class {
  constructor() {
    ;(this.isSVG = new RegExp(
      `^(${[
        'animate',
        'animateMotion',
        'animateTransform',
        'circle',
        'clipPath',
        'defs',
        'desc',
        'ellipse',
        'feBlend',
        'feColorMatrix',
        'feComponentTransfer',
        'feComposite',
        'feConvolveMatrix',
        'feDiffuseLighting',
        'feDisplacementMap',
        'feDistantLight',
        'feDropShadow',
        'feFlood',
        'feFuncA',
        'feFuncB',
        'feFuncG',
        'feFuncR',
        'feGaussianBlur',
        'feImage',
        'feMerge',
        'feMergeNode',
        'feMorphology',
        'feOffset',
        'fePointLight',
        'feSpecularLighting',
        'feSpotLight',
        'feTile',
        'feTurbulence',
        'filter',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'marker',
        'mask',
        'metadata',
        'mpath',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'set',
        'stop',
        'svg',
        'switch',
        'symbol',
        'text',
        'textPath',
        'title',
        'tspan',
        'use',
        'view'
      ].join('|')})$`,
      'i'
    )),
      (this.xlinkNameSpace = 'http://www.w3.org/1999/xlink'),
      (this.possibleXlinkNames = {
        xlinkActuate: 'xlink:actuate',
        xlinkactuate: 'xlink:actuate',
        'xlink:actuate': 'xlink:actuate',
        xlinkArcrole: 'xlink:arcrole',
        xlinkarcrole: 'xlink:arcrole',
        'xlink:arcrole': 'xlink:arcrole',
        xlinkHref: 'xlink:href',
        xlinkhref: 'xlink:href',
        'xlink:href': 'xlink:href',
        xlinkRole: 'xlink:role',
        xlinkrole: 'xlink:role',
        'xlink:role': 'xlink:role',
        xlinkShow: 'xlink:show',
        xlinkshow: 'xlink:show',
        'xlink:show': 'xlink:show',
        xlinkTitle: 'xlink:title',
        xlinktitle: 'xlink:title',
        'xlink:title': 'xlink:title',
        xlinkType: 'xlink:type',
        xlinktype: 'xlink:type',
        'xlink:type': 'xlink:type'
      }),
      (this.formElement = {
        input: ['disabled', 'readonly', 'value'],
        select: ['disabled', 'readonly'],
        option: ['disabled', 'selected', 'value'],
        button: ['disabled'],
        video: ['controls', 'autoplay', 'loop', 'muted'],
        audio: ['controls', 'autoplay', 'loop', 'muted']
      })
  }
  listen(t, e, s) {
    t.addEventListener(e, s)
  }
  unListen(t, e, s) {
    t.removeEventListener(e, s)
  }
  createTextNode(t) {
    return document.createTextNode(ls.replaceEmpty(t, '\xA0'))
  }
  createElement(t) {
    return this.isSVG.test(t)
      ? document.createElementNS('http://www.w3.org/2000/svg', t)
      : document.createElement(t)
  }
  appendChild(t, e) {
    t.appendChild(e)
  }
  remove(t) {
    var e
    ;(e = t.parentNode) === null || e === void 0 || e.removeChild(t)
  }
  insertBefore(t, e) {
    e.parentNode.insertBefore(t, e)
  }
  getChildByIndex(t, e) {
    return t.childNodes[e] || null
  }
  addClass(t, e) {
    t.classList.add(e)
  }
  removeClass(t, e) {
    t.classList.remove(e)
  }
  setStyle(t, e, s) {
    t.style[e] = s != null ? s : ''
  }
  syncTextContent(t, e) {
    t.textContent !== e && (t.textContent = e)
  }
  removeStyle(t, e) {
    t.style[e] = ''
  }
  setAttribute(t, e, s) {
    if (this.possibleXlinkNames[e]) {
      this.setXlinkAttribute(t, this.possibleXlinkNames[e], s)
      return
    }
    t.setAttribute(e, s)
    const n = this.formElement[t.tagName.toLowerCase()]
    n && n.includes(e) && (t[e] = Boolean(s))
  }
  removeAttribute(t, e) {
    this.possibleXlinkNames[e] && this.removeXlinkAttribute(t, this.possibleXlinkNames[e]),
      t.removeAttribute(e)
    const s = this.formElement[t.tagName.toLowerCase()]
    s && s.includes(e) && (t[e] = !1)
  }
  setXlinkAttribute(t, e, s) {
    t.setAttributeNS(this.xlinkNameSpace, e, s)
  }
  removeXlinkAttribute(t, e) {
    t.removeAttributeNS(this.xlinkNameSpace, e)
  }
  replace(t, e) {
    e.parentNode.replaceChild(t, e)
  }
  copy() {
    document.execCommand('copy')
  }
  static replaceEmpty(t, e) {
    return t
      .replace(
        /\s\s+/g,
        s =>
          ' ' +
          Array.from({ length: s.length - 1 })
            .fill(e)
            .join('')
      )
      .replace(/^\s|\s$/g, e)
  }
})
$e = ls = $t([j()], $e)
var Me
let Tt = (Me = class {
  constructor(t, e) {
    var s
    ;(this.options = t), (this.injector = e)
    const n = [...(t.componentLoaders || [])],
      o = [...(t.formatLoaders || [])],
      i = [...(t.attributeLoaders || [])]
    ;(s = t.imports) === null ||
      s === void 0 ||
      s.forEach(a => {
        n.push(...(a.componentLoaders || [])), o.push(...(a.formatLoaders || []))
      }),
      (this.componentLoaders = n),
      (this.formatLoaders = o),
      (this.attributeLoaders = i)
  }
  static parseHTML(t) {
    return new DOMParser().parseFromString(t, 'text/html').body
  }
  parseDoc(t, e) {
    const s = Me.parseHTML(t)
    return e.read(s, this.injector, (n, o, i = o) => this.readSlot(n, o, i))
  }
  parse(t, e) {
    const s = Me.parseHTML(t),
      n = this.readFormats(s, e, [])
    return this.applyFormats(e, n), e
  }
  readComponent(t, e, s) {
    if (t.nodeType === Node.ELEMENT_NODE) {
      if (t.tagName === 'BR') {
        e.insert(`
`)
        return
      }
      for (const n of this.componentLoaders)
        if (n.match(t)) {
          const o = n.read(t, this.injector, (i, a, l = a) => this.readSlot(i, a, l))
          if (o instanceof T) {
            o.toDelta().forEach(i => e.insert(i.insert, i.formats))
            return
          }
          e.insert(o)
          return
        }
      this.readFormats(t, e, s)
    } else if (t.nodeType === Node.TEXT_NODE) {
      const n = t.textContent
      if (/^\s*[\r\n]+\s*$/.test(n)) return
      e.insert(n)
    }
  }
  readFormats(t, e, s) {
    const n = this.formatLoaders.filter(a => a.match(t)).map(a => a.read(t)),
      o = e.index
    Array.from(t.childNodes).forEach(a => {
      this.readComponent(a, e, s)
    })
    const i = e.index
    return (
      s.unshift(
        ...n.map(a => ({ formatter: a.formatter, value: a.value, startIndex: o, endIndex: i }))
      ),
      s
    )
  }
  readSlot(t, e, s) {
    this.attributeLoaders
      .filter(o => o.match(e))
      .forEach(o => {
        const i = o.read(e)
        t.setAttribute(i.attribute, i.value)
      })
    const n = this.readFormats(s, t, [])
    return this.applyFormats(t, n), t
  }
  applyFormats(t, e) {
    e.forEach(s => {
      t.retain(s.startIndex), t.retain(s.endIndex - s.startIndex, s.formatter, s.value)
    })
  }
})
Tt = Me = $t([j(), vs(0, yt(Ie)), Oe('design:paramtypes', [Object, ft])], Tt)
const ko = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Textbus</title>
  <style>
    html {position: fixed; left:0; overflow: hidden}
    html, body{height: 100%;width:100%}
    body{margin:0; overflow: hidden}
    textarea{width: 2000px;height: 100%;opacity: 0; padding: 0; outline: none; border: none; position: absolute; left:0; top:0;}
  </style>
</head>
<body>
</body>
</html>
`
class Eo {
  constructor(t, e) {
    ;(this.scheduler = t),
      (this.editorMask = e),
      (this.timer = null),
      (this.oldPosition = null),
      (this._display = !0),
      (this.flashing = !0),
      (this.subs = []),
      (this.positionChangeEvent = new F()),
      (this.styleChangeEvent = new F()),
      (this.oldRange = null),
      (this.isFixed = !1),
      (this.onPositionChange = this.positionChangeEvent.pipe(Lt())),
      (this.onStyleChange = this.styleChangeEvent.asObservable()),
      (this.elementRef = y('div', {
        styles: { position: 'absolute', width: '2px', pointerEvents: 'none' },
        children: [
          (this.caret = y('span', {
            styles: { width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }
          }))
        ]
      })),
      this.subs.push(
        I(document, 'mousedown').subscribe(() => {
          this.flashing = !1
        }),
        I(document, 'mouseup').subscribe(() => {
          this.flashing = !0
        })
      ),
      this.editorMask.appendChild(this.elementRef)
  }
  get rect() {
    return this.caret.getBoundingClientRect()
  }
  set display(t) {
    ;(this._display = t), (this.caret.style.visibility = t ? 'visible' : 'hidden')
  }
  get display() {
    return this._display
  }
  refresh(t = !1) {
    ;(this.isFixed = t), this.oldRange && this.show(this.oldRange, !1), (this.isFixed = !1)
  }
  show(t, e) {
    const s = this.elementRef.getBoundingClientRect()
    if (
      ((this.oldPosition = { top: s.top, left: s.left, height: s.height }),
      (this.oldRange = t),
      (e || this.scheduler.lastChangesHasLocalUpdate) && clearTimeout(this.timer),
      this.updateCursorPosition(t),
      t.collapsed)
    ) {
      if (e || this.scheduler.lastChangesHasLocalUpdate) {
        this.display = !0
        const n = () => {
          ;(this.display = !this.display || !this.flashing), (this.timer = setTimeout(n, 400))
        }
        clearTimeout(this.timer), (this.timer = setTimeout(n, 400))
      }
    } else (this.display = !1), clearTimeout(this.timer)
  }
  hide() {
    ;(this.display = !1), clearTimeout(this.timer), this.positionChangeEvent.next(null)
  }
  destroy() {
    clearTimeout(this.timer), this.subs.forEach(t => t.unsubscribe())
  }
  correctScrollTop(t) {
    this.subs.forEach(i => i.unsubscribe()), (this.subs = [])
    const e = this.scheduler
    let s = !0
    function n(i) {
      const { top: a, bottom: l } = t.getLimit(),
        c = i.top
      if (c + i.height > l) {
        const h = c - l + i.height
        t.setOffset(h)
      } else i.top < a && t.setOffset(-(a - i.top))
    }
    let o = !1
    this.subs.push(
      t.onScroll.subscribe(() => {
        if (this.oldPosition) {
          const i = this.rect
          ;(this.oldPosition.top = i.top),
            (this.oldPosition.left = i.left),
            (this.oldPosition.height = i.height)
        }
      }),
      I(document, 'mousedown', !0).subscribe(() => {
        o = !0
      }),
      I(document, 'mouseup', !0).subscribe(() => {
        o = !1
      }),
      e.onDocChange.subscribe(() => {
        s = !0
      }),
      this.onPositionChange.subscribe(i => {
        if (i) {
          if (s) {
            if (e.lastChangesHasLocalUpdate) n(i)
            else if (this.oldPosition) {
              const a = Math.floor(i.top - this.oldPosition.top)
              t.setOffset(a)
            }
          } else if (!o)
            if (this.isFixed && this.oldPosition) {
              const a = Math.floor(i.top - this.oldPosition.top)
              t.setOffset(a)
            } else n(i)
        }
        s = !1
      })
    )
  }
  updateCursorPosition(t) {
    const e = t.startContainer,
      s = e.nodeType === Node.ELEMENT_NODE ? e : e.parentNode
    if ((s == null ? void 0 : s.nodeType) !== Node.ELEMENT_NODE || !t.collapsed) {
      this.positionChangeEvent.next(null)
      return
    }
    const n = ys(t),
      { fontSize: o, lineHeight: i, color: a } = getComputedStyle(s)
    let l
    if (isNaN(+i)) {
      const p = parseFloat(i)
      isNaN(p) ? (l = parseFloat(o)) : (l = p)
    } else l = parseFloat(o) * parseFloat(i)
    const c = Math.floor(Math.max(l, n.height))
    let h = n.top
    n.height < l && (h -= (l - n.height) / 2), (h = Math.floor(h))
    const u = this.editorMask.getBoundingClientRect(),
      d = Math.floor(h - u.top),
      f = Math.floor(n.left - u.left)
    Object.assign(this.elementRef.style, {
      left: f + 'px',
      top: d + 'px',
      height: c + 'px',
      lineHeight: c + 'px',
      fontSize: o
    }),
      (this.caret.style.backgroundColor = a),
      this.styleChangeEvent.next({ height: c + 'px', lineHeight: c + 'px', fontSize: o }),
      this.positionChangeEvent.next({ left: f, top: h, height: c })
  }
}
let cs = class extends qt {
  constructor(t, e, s, n, o, i, a) {
    super(),
      (this.parser = t),
      (this.keyboard = e),
      (this.commander = s),
      (this.selection = n),
      (this.controller = o),
      (this.scheduler = i),
      (this.injector = a),
      (this.composition = !1),
      (this.caret = new Eo(this.scheduler, this.injector.get(je))),
      (this.container = this.createEditableFrame()),
      (this.subscription = new Ht()),
      (this.textarea = null),
      (this.isFocus = !1),
      (this.nativeFocus = !1),
      (this.isSafari = Cn()),
      (this.isMac = xs()),
      (this.isWindows = wo()),
      (this.isSougouPinYin = !1),
      (this.onReady = new Promise(l => {
        this.subscription.add(
          I(this.container, 'load').subscribe(() => {
            const c = this.container.contentDocument
            c.open(), c.write(ko), c.close(), (this.doc = c), this.init(), l()
          }),
          o.onReadonlyStateChange.subscribe(() => {
            o.readonly && this.blur()
          })
        )
      })),
      this.caret.elementRef.append(this.container)
  }
  focus(t, e) {
    var s
    this.caret.show(t, e),
      !this.controller.readonly &&
        (this.isFocus ||
          ((s = this.textarea) === null || s === void 0 || s.focus(),
          setTimeout(() => {
            var n, o, i
            !this.nativeFocus &&
              this.isFocus &&
              (this.subscription.unsubscribe(),
              (o = (n = this.textarea) === null || n === void 0 ? void 0 : n.parentNode) === null ||
                o === void 0 ||
                o.removeChild(this.textarea),
              (this.subscription = new Ht()),
              this.init(),
              (i = this.textarea) === null || i === void 0 || i.focus())
          })),
        (this.isFocus = !0))
  }
  blur() {
    var t
    this.caret.hide(), (t = this.textarea) === null || t === void 0 || t.blur(), (this.isFocus = !1)
  }
  destroy() {
    this.caret.destroy(), this.subscription.unsubscribe()
  }
  init() {
    const t = this.doc,
      e = t.body,
      s = t.createElement('textarea')
    e.appendChild(s),
      (this.textarea = s),
      this.subscription.add(
        I(s, 'blur').subscribe(() => {
          ;(this.isFocus = !1), (this.nativeFocus = !1), this.caret.hide()
        }),
        I(s, 'focus').subscribe(() => {
          this.nativeFocus = !0
        }),
        this.caret.onStyleChange.subscribe(n => {
          Object.assign(s.style, n)
        })
      ),
      this.handleInput(s),
      this.handleShortcut(s),
      this.handleDefaultActions(s)
  }
  handleDefaultActions(t) {
    this.subscription.add(
      I(document, 'copy').subscribe(e => {
        const s = this.selection
        if (
          !!s.isSelected &&
          s.startSlot === s.endSlot &&
          s.endOffset - s.startOffset === 1 &&
          typeof s.startSlot.getContentAtIndex(s.startOffset) == 'object'
        ) {
          const o = e.clipboardData,
            a = document.getSelection().getRangeAt(0),
            l = document.createElement('div'),
            c = a.cloneContents()
          l.append(c),
            o.setData('text/html', l.innerHTML),
            o.setData('text', l.innerText),
            e.preventDefault()
        }
      }),
      I(t, 'paste').subscribe(e => {
        const s = e.clipboardData.getData('Text'),
          n = Array.from(e.clipboardData.files)
        if (n.length) {
          Promise.all(
            n
              .filter(i => /image/i.test(i.type))
              .map(i => {
                const a = new FileReader()
                return new Promise(l => {
                  ;(a.onload = c => {
                    l(c.target.result)
                  }),
                    a.readAsDataURL(i)
                })
              })
          ).then(i => {
            const a = i.map(l => `<img src=${l}>`).join('')
            this.handlePaste(a, s)
          }),
            e.preventDefault()
          return
        }
        const o = this.doc.createElement('div')
        ;(o.style.cssText =
          'width:1px; height:10px; overflow: hidden; position: fixed; left: 50%; top: 50%; opacity:0'),
          (o.contentEditable = 'true'),
          this.doc.body.appendChild(o),
          o.focus(),
          setTimeout(() => {
            const i = o.innerHTML
            this.handlePaste(i, s), this.doc.body.removeChild(o)
          })
      })
    )
  }
  handlePaste(t, e) {
    const s = this.parser.parse(t, new T([b.BlockComponent, b.InlineComponent, b.Text]))
    this.commander.paste(s, e)
  }
  handleShortcut(t) {
    let e = !1,
      s = !1
    this.subscription.add(
      I(t, 'compositionstart').subscribe(() => {
        e = !0
      }),
      I(t, 'compositionend').subscribe(() => {
        e = !1
      }),
      I(t, 'beforeinput').subscribe(n => {
        this.isSafari && n.inputType === 'insertFromComposition' && (s = !0)
      }),
      I(t, 'keydown')
        .pipe(_t(() => (this.isSafari && s ? ((s = !1), !1) : !e)))
        .subscribe(n => {
          let o = n.key
          o === 'Process' &&
            n.code === 'Digit2' &&
            ((o = '@'), (this.isSougouPinYin = !0), n.preventDefault()),
            this.keyboard.execShortcut({
              key: o,
              altKey: n.altKey,
              shiftKey: n.shiftKey,
              ctrlKey: this.isMac ? n.metaKey : n.ctrlKey
            }) && n.preventDefault()
        })
    )
  }
  handleInput(t) {
    this.subscription.add(
      We(
        I(t, 'beforeinput').pipe(
          _t(
            e => (
              e.preventDefault(),
              this.isSafari
                ? e.inputType === 'insertText' || e.inputType === 'insertFromComposition'
                : !e.isComposing && !!e.data
            )
          ),
          it(e => e.data)
        ),
        this.isSafari
          ? new ue()
          : I(t, 'compositionend').pipe(
              it(e => (e.preventDefault(), (t.value = ''), e.data)),
              _t(() => {
                const e = this.isSougouPinYin
                return (this.isSougouPinYin = !1), !e
              })
            )
      ).subscribe(e => {
        e && this.commander.write(e)
      })
    )
  }
  createEditableFrame() {
    return y('iframe', {
      attrs: { scrolling: 'no' },
      styles: {
        border: 'none',
        width: '100%',
        display: 'block',
        height: '100%',
        position: 'relative',
        top: this.isWindows ? '6px' : '0'
      }
    })
  }
}
cs = $t([j(), Oe('design:paramtypes', [Tt, lt, L, P, Y, St, ft])], cs)
class To {
  constructor(t) {
    ;(this.scheduler = t),
      (this.onPositionChange = new F()),
      (this.oldPosition = null),
      (this._nativeRange = null),
      (this.subs = [])
  }
  set nativeRange(t) {
    ;(this._nativeRange = t),
      t && t.collapsed && this.onPositionChange.next(t.getBoundingClientRect())
  }
  get nativeRange() {
    return this._nativeRange
  }
  get rect() {
    return this.nativeRange
      ? this.nativeRange.getBoundingClientRect()
      : { left: 0, top: 0, width: 0, height: 0 }
  }
  refresh() {}
  correctScrollTop(t) {
    this.destroy()
    const e = this.scheduler
    let s = !0
    function n(i) {
      const { top: a, bottom: l } = t.getLimit(),
        c = i.top
      if (c + i.height > l) {
        const h = c - l + i.height
        t.setOffset(h)
      } else i.top < a && t.setOffset(-(a - i.top))
    }
    let o = !1
    this.subs.push(
      t.onScroll.subscribe(() => {
        if (this.oldPosition) {
          const i = this.rect
          ;(this.oldPosition.top = i.top),
            (this.oldPosition.left = i.left),
            (this.oldPosition.height = i.height)
        }
      }),
      I(document, 'mousedown', !0).subscribe(() => {
        o = !0
      }),
      I(document, 'mouseup', !0).subscribe(() => {
        o = !1
      }),
      e.onDocChange.subscribe(() => {
        s = !0
      }),
      this.onPositionChange.subscribe(i => {
        if (i) {
          if (s) {
            if (e.lastChangesHasLocalUpdate) n(i)
            else if (this.oldPosition) {
              const a = Math.floor(i.top - this.oldPosition.top)
              t.setOffset(a)
            }
          } else if (!o)
            if (this.oldPosition) {
              const a = Math.floor(i.top - this.oldPosition.top)
              t.setOffset(a)
            } else n(i)
        }
        s = !1
      })
    )
  }
  destroy() {
    this.subs.forEach(t => t.unsubscribe()), (this.subs = [])
  }
}
let hs = class extends qt {
  constructor(t, e, s, n, o, i, a) {
    super(),
      (this.injector = t),
      (this.parser = e),
      (this.scheduler = s),
      (this.selection = n),
      (this.keyboard = o),
      (this.commander = i),
      (this.controller = a),
      (this.caret = new To(this.scheduler)),
      (this.composition = !1),
      (this.onReady = Promise.resolve()),
      (this.nativeSelection = document.getSelection()),
      (this.subscription = new Ht()),
      (this.nativeRange = null),
      (this.isSafari = Cn()),
      (this.isMac = xs()),
      (this.isSougouPinYin = !1),
      (this.documentView = t.get(Vt)),
      a.readonly || (this.documentView.contentEditable = 'true'),
      this.subscription.add(
        a.onReadonlyStateChange.subscribe(() => {
          this.documentView.contentEditable = a.readonly ? 'false' : 'true'
        })
      ),
      this.handleShortcut(this.documentView),
      this.handleInput(this.documentView),
      this.handleDefaultActions(this.documentView)
  }
  focus(t) {
    this.controller.readonly || ((this.caret.nativeRange = t), (this.nativeRange = t))
  }
  blur() {
    if (
      this.nativeRange &&
      this.nativeSelection.rangeCount > 0 &&
      this.nativeSelection.getRangeAt(0) === this.nativeRange
    ) {
      this.nativeSelection.removeAllRanges(), (this.nativeRange = null)
      return
    }
  }
  destroy() {
    this.caret.destroy(), this.subscription.unsubscribe()
  }
  handleDefaultActions(t) {
    this.subscription.add(
      I(document, 'copy').subscribe(e => {
        const s = this.selection
        if (
          !!s.isSelected &&
          s.startSlot === s.endSlot &&
          s.endOffset - s.startOffset === 1 &&
          typeof s.startSlot.getContentAtIndex(s.startOffset) == 'object'
        ) {
          const o = e.clipboardData,
            a = document.getSelection().getRangeAt(0),
            l = document.createElement('div'),
            c = a.cloneContents()
          l.append(c),
            o.setData('text/html', l.innerHTML),
            o.setData('text', l.innerText),
            e.preventDefault()
        }
      }),
      I(t, 'paste').subscribe(e => {
        const s = e.clipboardData.getData('Text'),
          n = Array.from(e.clipboardData.files)
        if (n.length) {
          Promise.all(
            n
              .filter(i => /image/i.test(i.type))
              .map(i => {
                const a = new FileReader()
                return new Promise(l => {
                  ;(a.onload = c => {
                    l(c.target.result)
                  }),
                    a.readAsDataURL(i)
                })
              })
          ).then(i => {
            const a = i.map(l => `<img src=${l}>`).join('')
            this.handlePaste(a, s)
          }),
            e.preventDefault()
          return
        }
        const o = document.createElement('div')
        ;(o.style.cssText =
          'width:1px; height:10px; overflow: hidden; position: fixed; left: 50%; top: 50%; opacity:0'),
          (o.contentEditable = 'true'),
          document.body.appendChild(o),
          o.focus(),
          setTimeout(() => {
            const i = o.innerHTML
            this.handlePaste(i, s), document.body.removeChild(o)
          })
      })
    )
  }
  handlePaste(t, e) {
    const s = this.parser.parse(t, new T([b.BlockComponent, b.InlineComponent, b.Text]))
    this.commander.paste(s, e)
  }
  handleShortcut(t) {
    let e = !1,
      s = !1
    this.subscription.add(
      I(t, 'compositionstart').subscribe(() => {
        e = !0
      }),
      I(t, 'compositionend').subscribe(() => {
        e = !1
      }),
      I(t, 'beforeinput').subscribe(n => {
        this.isSafari && n.inputType === 'insertFromComposition' && (s = !0)
      }),
      I(t, 'keydown')
        .pipe(_t(() => (this.isSafari && s ? ((s = !1), !1) : !e)))
        .subscribe(n => {
          let o = n.key
          o === 'Process' &&
            n.code === 'Digit2' &&
            ((o = '@'), (this.isSougouPinYin = !0), n.preventDefault()),
            this.keyboard.execShortcut({
              key: o,
              altKey: n.altKey,
              shiftKey: n.shiftKey,
              ctrlKey: this.isMac ? n.metaKey : n.ctrlKey
            }) && n.preventDefault()
        })
    )
  }
  handleInput(t) {
    this.subscription.add(
      I(t, 'compositionstart').subscribe(() => {
        this.composition = !0
      }),
      We(
        I(t, 'beforeinput').pipe(
          _t(
            e => (
              e.preventDefault(),
              this.isSafari
                ? e.inputType === 'insertText' || e.inputType === 'insertFromComposition'
                : !e.isComposing && !!e.data
            )
          ),
          it(e => e.data)
        ),
        this.isSafari
          ? new ue()
          : I(t, 'compositionend').pipe(
              it(e => (e.preventDefault(), e.data)),
              _t(() => {
                const e = this.isSougouPinYin
                return (this.isSougouPinYin = !1), !e
              })
            )
      ).subscribe(e => {
        ;(this.composition = !1), e && this.commander.write(e)
      })
    )
  }
}
hs = $t([j(), Oe('design:paramtypes', [ft, Tt, St, P, lt, L, Y])], hs)
var De
let oe = (De = class {
  constructor() {
    this.singleTagTest = new RegExp(`^(${De.singleTags.join('|')})$`, 'i')
  }
  transform(t) {
    return t.children.map(e => this.vDomToHTMLString(e)).join('')
  }
  vDomToHTMLString(t) {
    const e = De.simpleXSSFilter
    if (t instanceof rt) return this.replaceEmpty(e.text(t.textContent), '&nbsp;')
    const s = Array.from(t.styles.keys())
        .filter(a => {
          const l = t.styles.get(a)
          return !(l == null || l === '')
        })
        .map(a => {
          const l = a.replace(/(?=[A-Z])/g, '-').toLowerCase()
          return e.attrValue(`${l}:${t.styles.get(a)}`)
        })
        .join(';'),
      n = Array.from(t.attrs.keys())
        .filter(a => a !== 'ref' && t.attrs.get(a) !== !1)
        .map(a => {
          const l = e.attrName(a),
            c = t.attrs.get(a)
          return c === !0 ? `${l}` : `${l}="${e.attrValue(`${c}`)}"`
        })
    s && n.push(`style="${s}"`),
      t.classes &&
        t.classes.size &&
        n.push(`class="${e.attrValue(Array.from(t.classes).join(' '))}"`)
    let o = n.join(' ')
    if (((o = o ? ' ' + o : ''), this.singleTagTest.test(t.tagName))) return `<${t.tagName}${o}>`
    const i = t.children.map(a => this.vDomToHTMLString(a)).join('')
    return [`<${t.tagName}${o}>`, i, `</${t.tagName}>`].join('')
  }
  replaceEmpty(t, e) {
    return t
      .replace(
        /\s\s+/g,
        s =>
          ' ' +
          Array.from({ length: s.length - 1 })
            .fill(e)
            .join('')
      )
      .replace(/^\s|\s$/g, e)
  }
})
oe.singleTags = 'br,img,hr'.split(',')
oe.simpleXSSFilter = {
  text(r) {
    return r.replace(/[><&]/g, t => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[t]))
  },
  attrName(r) {
    return r.replace(
      /[><"'&]/g,
      t => ({ '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '&': '&amp;' }[t])
    )
  },
  attrValue(r) {
    return r.replace(/["']/g, t => ({ '"': '&quot;', "'": '&#x27;' }[t]))
  }
}
oe = De = $t([j()], oe)
class No {
  setup(t) {
    const e = t.get(P),
      s = t.get(lt),
      n = t.get(Dt),
      o = t.get(L)
    s.addShortcut({
      keymap: { key: 'Enter' },
      action: () => {
        o.break()
      }
    }),
      s.addShortcut({
        keymap: { key: 'Enter', shiftKey: !0 },
        action: () => {
          const i = e.startOffset,
            a = e.startSlot,
            l = i === a.length || a.isEmpty,
            c = l
              ? `

`
              : `
`
          o.insert(c) && l && e.setPosition(a, i + 1)
        }
      }),
      s.addShortcut({
        keymap: { key: ['Delete', 'Backspace'] },
        action: i => {
          o.delete(i === 'Backspace')
        }
      }),
      s.addShortcut({
        keymap: { key: ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'] },
        action: i => {
          switch (i) {
            case 'ArrowLeft':
              e.toPrevious()
              break
            case 'ArrowRight':
              e.toNext()
              break
            case 'ArrowUp':
              e.toPreviousLine()
              break
            case 'ArrowDown':
              e.toNextLine()
              break
          }
        }
      }),
      s.addShortcut({
        keymap: { key: ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'], shiftKey: !0 },
        action: i => {
          switch (i) {
            case 'ArrowLeft':
              e.wrapToBefore()
              break
            case 'ArrowRight':
              e.wrapToAfter()
              break
            case 'ArrowUp':
              e.wrapToPreviousLine()
              break
            case 'ArrowDown':
              e.wrapToNextLine()
              break
          }
        }
      }),
      s.addShortcut({
        keymap: { key: 'Tab' },
        action: () => {
          o.insert('    ')
        }
      }),
      s.addShortcut({
        keymap: { key: 'a', ctrlKey: !0 },
        action: () => {
          e.selectAll()
        }
      }),
      s.addShortcut({
        keymap: { key: 'c', ctrlKey: !0 },
        action: () => {
          o.copy()
        }
      }),
      s.addShortcut({
        keymap: { key: 'x', ctrlKey: !0 },
        action: () => {
          o.cut()
        }
      }),
      s.addShortcut({
        keymap: { key: 'z', ctrlKey: !0 },
        action: () => {
          n.back()
        }
      }),
      s.addShortcut({
        keymap: { key: 'z', ctrlKey: !0, shiftKey: !0 },
        action: () => {
          n.forward()
        }
      })
  }
}
const ts = jt('CoreEditor')
class Xt extends Te {
  constructor(t, e, s = {}) {
    const n = 'textbus-' + Number((Math.random() + '').substring(2)).toString(16),
      { doc: o, mask: i, wrapper: a } = Xt.createLayout(n, s.minHeight),
      l = [
        { provide: Ie, useValue: s },
        { provide: zt, useValue: a },
        { provide: Vt, useValue: o },
        { provide: je, useValue: i },
        { provide: Je, useExisting: $e },
        { provide: gs, useExisting: ne },
        { provide: qt, useClass: s.useContentEditable ? hs : cs },
        { provide: Xt, useFactory: () => this }
      ]
    super(
      Object.assign(Object.assign({}, s), {
        plugins: [() => new No(), ...(s.plugins || [])],
        providers: [...(s.providers || []), ...l, $e, Tt, ne, oe, as],
        setup: s.setup
      })
    ),
      (this.rootComponent = t),
      (this.rootComponentLoader = e),
      (this.options = s),
      (this.destroyed = !1),
      (this.isReady = !1),
      (this.changeEvent = new F()),
      (this.subs = []),
      (this._isFocus = !1),
      (this.resourceNodes = []),
      (this.focusEvent = new F()),
      (this.blurEvent = new F()),
      (this.saveEvent = new F()),
      (this.styleSheet = ''),
      (this.scripts = []),
      (this.links = []),
      (this.id = n),
      (this.workbench = a),
      (this.onChange = this.changeEvent.asObservable()),
      (this.onFocus = this.focusEvent.asObservable()),
      (this.onBlur = this.blurEvent.asObservable()),
      (this.onSave = this.saveEvent.asObservable()),
      (this.controller = this.get(Y))
  }
  get readonly() {
    return this.controller.readonly
  }
  set readonly(t) {
    this.controller.readonly = t
  }
  isFocus() {
    return this._isFocus
  }
  mount(t) {
    const e = Object.create(null, { mount: { get: () => super.mount } })
    return So(this, void 0, void 0, function* () {
      if (this.destroyed) throw ts('the editor instance is destroyed!')
      if (this.destroyed) return this
      const s = this.get(Tt),
        n = this.get(Rt),
        o = this.get(Vt)
      this.get(lt).addShortcut({
        keymap: { key: 's', ctrlKey: !0 },
        action: () => {
          this.saveEvent.next()
        }
      })
      let a
      const l = this.options.content
      l
        ? typeof l == 'string'
          ? (a = s.parseDoc(l, this.rootComponentLoader))
          : (a = n.createComponentByFactory(l, this.rootComponent))
        : (a = this.rootComponent.createInstance(this)),
        this.initDocStyleSheetsAndScripts(this.options),
        t.appendChild(this.workbench),
        yield e.mount.call(this, o, a)
      const c = this.get(nt),
        h = this.get(qt)
      return (
        this.subs.push(
          c.onViewUpdated.subscribe(() => {
            this.changeEvent.next()
          }),
          h.caret.onPositionChange
            .pipe(
              it(u => !!u),
              Lt()
            )
            .subscribe(u => {
              u
                ? ((this._isFocus = !0), this.focusEvent.next())
                : ((this._isFocus = !1), this.blurEvent.next())
            })
        ),
        (this.isReady = !0),
        this.options.autoFocus &&
          h.onReady.then(() => {
            this.focus()
          }),
        this
      )
    })
  }
  focus() {
    this.guardReady()
    const t = this.get(P),
      e = this.get(st)
    if (t.commonAncestorSlot) {
      t.restore()
      return
    }
    const s = t.findFirstPosition(e.component.slots.get(0))
    t.setPosition(s.slot, s.offset), t.restore()
  }
  blur() {
    if (this.isReady) {
      const t = this.get(P)
      t.unSelect(), t.restore()
    }
  }
  getResources() {
    var t
    return {
      styleSheets: ((t = this.options) === null || t === void 0 ? void 0 : t.styleSheets) || [],
      styleSheet: this.styleSheet,
      links: this.links,
      scripts: this.scripts
    }
  }
  getContent() {
    this.guardReady()
    const t = this.get(ze),
      e = this.get(oe),
      s = t.render()
    return e.transform(s)
  }
  getJSON() {
    return this.guardReady(), this.get(st).component.toJSON()
  }
  destroy() {
    var t
    if (this.destroyed) return
    ;(this.destroyed = !0),
      this.subs.forEach(s => s.unsubscribe()),
      [qt].forEach(s => {
        this.get(s).destroy()
      }),
      super.destroy(),
      (t = this.workbench.parentNode) === null || t === void 0 || t.removeChild(this.workbench),
      this.resourceNodes.forEach(s => {
        var n
        ;(n = s.parentNode) === null || n === void 0 || n.removeChild(s)
      })
  }
  replaceContent(t) {
    this.guardReady()
    const e = this.get(Tt),
      s = this.get(Rt),
      n = this.get(st),
      o = this.get(P),
      i = this.rootComponentLoader
    let a
    typeof t == 'string'
      ? (a = e.parseDoc(t, i))
      : (a = s.createComponentByFactory(t, this.rootComponent)),
      o.unSelect(),
      n.component.slots.clean(),
      n.component.slots.push(...a.slots.toArray()),
      M(a, 'onDestroy')
  }
  guardReady() {
    if (this.destroyed) throw ts('the editor instance is destroyed!')
    if (!this.isReady)
      throw ts('please wait for the editor to initialize before getting the content!')
  }
  initDocStyleSheetsAndScripts(t) {
    var e
    const s = []
    ;(e = t.imports) === null ||
      e === void 0 ||
      e.forEach(l => {
        s.push(...(l.componentLoaders || []))
      }),
      s.push(...(t.componentLoaders || []))
    const n = s.filter(l => l.resources).map(l => l.resources),
      o = [],
      i = []
    n.forEach(l => {
      var c, h
      Array.isArray(l.links) && this.links.push(...l.links),
        o.push(((c = l.styles) === null || c === void 0 ? void 0 : c.join('')) || ''),
        i.push(((h = l.editModeStyles) === null || h === void 0 ? void 0 : h.join('')) || '')
    }),
      this.links.forEach(l => {
        const c = document.createElement('link')
        Object.assign(c, l), this.resourceNodes.push(c), document.head.appendChild(c)
      })
    const a = document.createElement('style')
    o.push(...(t.styleSheets || [])),
      i.push(
        `#${this.id} *::selection{background-color: rgba(18, 150, 219, .2); color:inherit}`,
        ...(t.editingStyleSheets || [])
      ),
      (this.styleSheet = Xt.cssMin(o.join(''))),
      (a.innerHTML = this.styleSheet + Xt.cssMin(i.join(''))),
      this.resourceNodes.push(a),
      document.head.append(a),
      n
        .filter(l => {
          var c
          return (c = l.scripts) === null || c === void 0 ? void 0 : c.length
        })
        .map(l => l.scripts)
        .flat()
        .forEach(l => {
          if (l) {
            const c = document.createElement('script')
            ;(c.src = l),
              this.scripts.push(l),
              document.head.appendChild(c),
              this.resourceNodes.push(c)
          }
        })
  }
  static createLayout(t, e = '100%') {
    const s = y('div', {
        styles: {
          cursor: 'text',
          wordBreak: 'break-all',
          boxSizing: 'border-box',
          minHeight: e,
          flex: 1,
          outline: 'none'
        },
        attrs: { 'data-textbus-view': Vt },
        props: { id: t }
      }),
      n = y('div', {
        attrs: { 'data-textbus-view': je },
        styles: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 1,
          pointerEvents: 'none',
          overflow: 'hidden'
        }
      })
    return {
      wrapper: y('div', {
        attrs: { 'data-textbus-view': zt },
        styles: {
          display: 'flex',
          minHeight: '100%',
          position: 'relative',
          flexDirection: 'column'
        },
        children: [s, n]
      }),
      doc: s,
      mask: n
    }
  }
  static cssMin(t) {
    return t
      .replace(/\s*(?=[>{}:;,[])/g, '')
      .replace(/([>{}:;,])\s*/g, '$1')
      .replace(/;}/g, '}')
      .replace(/\s+/, ' ')
      .trim()
  }
}
const Sn = document.createElement('div'),
  Cs = []
for (let r = 0; r < 8; r++) {
  const t = document.createElement('button')
  ;(t.type = 'button'), Cs.push(t)
}
const Ot = y('div', { classes: ['textbus-image-video-resize'], children: [...Cs, Sn] })
let mt = null
function kn(r, t) {
  const e = G(),
    s = kt(),
    n = e.get(P),
    o = e.get(zt),
    i = e.get(nt),
    a = kt()
  let l = !1
  const c = []
  c.push(
    i.onViewUpdated.subscribe(() => {
      l && mt && es(mt.current, o.getBoundingClientRect())
    }),
    n.onChange.subscribe(() => {
      var h, u
      const d = (h = a.parent) === null || h === void 0 ? void 0 : h.indexOf(a)
      ;(n.startSlot !== a.parent ||
        n.endSlot !== a.parent ||
        n.startOffset !== d ||
        n.endOffset !== d + 1) &&
        ((l = !1), (u = Ot.parentNode) === null || u === void 0 || u.removeChild(Ot))
    }),
    I(Ot, 'mousedown').subscribe(h => {
      if (mt !== r || !(mt != null && mt.current)) return
      o.style.pointerEvents = 'none'
      const u = r.current.getBoundingClientRect(),
        d = h.clientX,
        f = h.clientY,
        p = u.width,
        m = u.height,
        g = Math.sqrt(p * p + m * m)
      let x = p,
        S = m
      const N = Cs.indexOf(h.target),
        E = I(document, 'mousemove').subscribe(w => {
          const O = w.clientX,
            A = w.clientY,
            B = O - d,
            _ = A - f
          let V, q, H, tt
          switch (N) {
            case 0:
            case 4:
              ;(H = p + B),
                (tt = m + _),
                (V = Math.sqrt(H * H + tt * tt)),
                (q = V / g),
                N === 0 && (q = 1 - (q - 1)),
                (x = p * q),
                (S = m * q)
              break
            case 2:
              ;(H = p + B),
                (tt = m - _),
                (V = Math.sqrt(H * H + tt * tt)),
                (q = V / g),
                (x = p * q),
                (S = m * q)
              break
            case 6:
              ;(H = p - B),
                (tt = m + _),
                (V = Math.sqrt(H * H + tt * tt)),
                (V = Math.sqrt(H * H + tt * tt)),
                (q = V / g),
                (x = p * q),
                (S = m * q)
              break
            case 1:
              S = m - _
              break
            case 5:
              S = m + _
              break
            case 3:
              x = p + B
              break
            case 7:
              x = p - B
              break
          }
          ;(mt.current.style.width = x + 'px'),
            (mt.current.style.height = S + 'px'),
            es(mt.current, o.getBoundingClientRect())
        }),
        k = I(document, 'mouseup').subscribe(() => {
          t({ width: x + 'px', height: S + 'px' }),
            (o.style.pointerEvents = ''),
            E.unsubscribe(),
            k.unsubscribe()
        })
    })
  ),
    mn(() => {
      c.push(
        I(r.current, 'click').subscribe(h => {
          ;(mt = r),
            (l = !0),
            n.selectComponent(s, !0),
            es(r.current, o.getBoundingClientRect()),
            o.appendChild(Ot),
            h.stopPropagation()
        })
      )
    }),
    pt(() => {
      var h
      ;(l = !1),
        (h = Ot.parentNode) === null || h === void 0 || h.removeChild(Ot),
        c.forEach(u => u.unsubscribe())
    })
}
function es(r, t) {
  const e = r.getBoundingClientRect()
  ;(Ot.style.cssText = `left: ${e.left - t.left}px; top: ${e.top - t.top}px; width: ${
    e.width
  }px; height: ${e.height}px;`),
    (Sn.innerText = `${Math.round(e.width)}px * ${Math.round(e.height)}px`)
}
const z = K({
    type: b.BlockComponent,
    name: 'ParagraphComponent',
    setup(r) {
      const t = G(),
        e = Z((r == null ? void 0 : r.slots) || [new T([b.Text, b.InlineComponent])])
      return (
        e.length || e.push(new T([b.Text, b.InlineComponent])),
        ws(t, e),
        {
          render(s) {
            return s(e.get(0), n => C.createElement('p', null, n))
          }
        }
      )
    }
  }),
  Ro = {
    match(r) {
      return r.tagName === 'P'
    },
    read(r, t, e) {
      const s = e(new T([b.Text, b.InlineComponent]), r)
      return z.createInstance(t, { slots: [s] })
    }
  }
class Ut {
  constructor(t, e) {
    ;(this.target = t),
      (this.rule = e),
      (this.validators = []),
      (this.excludeValidators = []),
      e.tags && this.validators.push(this.makeTagsMatcher(e.tags)),
      e.styles && this.validators.push(this.makeStyleMatcher(e.styles)),
      e.attrs && this.validators.push(this.makeAttrsMatcher(e.attrs)),
      e.excludeStyles && this.excludeValidators.push(this.makeStyleMatcher(e.excludeStyles)),
      e.excludeAttrs && this.excludeValidators.push(this.makeAttrsMatcher(e.excludeAttrs))
  }
  match(t) {
    return (this.rule.filter && !this.rule.filter(t)) ||
      this.excludeValidators.map(s => s(t)).includes(!0)
      ? !1
      : this.validators.map(s => s(t)).includes(!0)
  }
  extractFormatData(t, e) {
    const s = {}
    e.attrs &&
      e.attrs.forEach(o => {
        s[o] = t.getAttribute(o)
      })
    const n = {}
    return (
      e.styleName &&
        (Array.isArray(e.styleName) ? e.styleName : [e.styleName]).forEach(o => {
          const i = t.style[o]
          i && (n[o] = i)
        }),
      {
        tag: e.tag ? t.nodeName.toLowerCase() : null,
        attrs: Object.keys(s).length ? s : null,
        styles: n
      }
    )
  }
  makeTagsMatcher(t) {
    return e => {
      const s = e.nodeName.toLowerCase()
      return Array.isArray(t) ? t.includes(s) : t.test(s)
    }
  }
  makeAttrsMatcher(t) {
    return e =>
      t.map(s => (s.value ? e.getAttribute(s.key) === s.value : e.hasAttribute(s.key))).includes(!0)
  }
  makeStyleMatcher(t) {
    return e =>
      !Object.keys(t)
        .map(s => {
          const n = Array.isArray(t[s]) ? t[s] : [t[s]]
          let o = e.style[s]
          return (
            s === 'fontFamily' && typeof o == 'string' && (o = o.replace(/['"]/g, '')),
            o ? n.map(i => (i instanceof RegExp ? i.test(o) : i === o)).includes(!0) : !1
          )
        })
        .includes(!1)
  }
}
class Ao extends Ut {
  constructor(t) {
    super(t, { tags: ['a'] })
  }
  read(t) {
    return {
      formatter: this.target,
      value: this.extractFormatData(t, { attrs: ['target', 'href', 'data-href'] }).attrs
    }
  }
}
class Oo {
  constructor() {
    ;(this.name = 'link'), (this.columned = !1)
  }
  render(t, e, s) {
    return s !== X.Editing
      ? new C('a', { target: e.target, href: e.href || e['data-href'] }, t)
      : new C('a', { target: e.target, 'data-href': e.href || e['data-href'] }, t)
  }
}
const et = new Oo(),
  Io = new Ao(et)
function ws(r, t) {
  const e = r.get(P),
    s = r.get(L),
    n = kt()
  fe(o => {
    var i
    const a = n.parent,
      l = a.indexOf(n)
    a.retain(l + 1)
    const c = t.get(0),
      h = c.cut(o.data.index).toDelta(),
      u = new T([b.Text, b.InlineComponent])
    let d = 0
    for (; d < h.length; ) {
      const m = h[d]
      if (u.insert(m.insert, m.formats)) {
        d++
        continue
      }
      break
    }
    u.isEmpty && u.applyFormat(et, { startIndex: 0, endIndex: 1, value: null })
    const f = z.createInstance(r, { slots: [u] }),
      p = a.getContentAtIndex(l - 1)
    if (
      l === a.length - 1 &&
      p &&
      typeof p != 'string' &&
      ['BlockComponent', 'ParagraphComponent', 'HeadingComponent'].includes(p.name) &&
      ((i = p.slots.get(0)) === null || i === void 0 ? void 0 : i.isEmpty) &&
      c.isEmpty &&
      u.isEmpty
    ) {
      const m = a.parentSlot
      if (m) {
        const g = m.indexOf(n.parentComponent)
        a.retain(a.index - 2), a.delete(2), m.retain(g + 1), m.insert(f)
      }
    }
    for (f.parent || a.insert(f), e.selectLastPosition(f); d < h.length; ) {
      const m = h[d]
      d++, s.insert(m.insert, m.formats)
    }
    e.setPosition(f.slots.get(0), 0), o.preventDefault()
  })
}
function dt(r = 1, t = 1) {
  return new T([b.InlineComponent, b.Text], { rowspan: t, colspan: r })
}
function Gs(r, t) {
  let e, s, n, o
  t: for (let i = 0; i < t.length; i++) {
    const a = t[i].cellsPosition
    for (let l = 0; l < a.length; l++)
      if (a[l].cell === r) {
        ;(e = i), (n = l)
        break t
      }
  }
  t: for (let i = t.length - 1; i > -1; i--) {
    const a = t[i].cellsPosition
    for (let l = a.length - 1; l > -1; l--)
      if (a[l].cell === r) {
        ;(s = i), (o = l)
        break t
      }
  }
  return { minRow: e, maxRow: s, minColumn: n, maxColumn: o }
}
function En(r, t, e, s, n) {
  const o = -Math.max(...n.slice(r, e + 1).map(d => d.cellsPosition[t].offsetColumn)),
    i = Math.max(
      ...n
        .slice(r, e + 1)
        .map(d => d.cellsPosition[s].cell.state.colspan - (d.cellsPosition[s].offsetColumn + 1))
    ),
    a = -Math.max(...n[r].cellsPosition.slice(t, s + 1).map(d => d.offsetRow)),
    l = Math.max(
      ...n[e].cellsPosition.slice(t, s + 1).map(d => d.cell.state.rowspan - (d.offsetRow + 1))
    )
  if (o || a || i || l) return En(r + a, t + o, e + l, s + i, n)
  const c = n[r].cellsPosition[t],
    h = n[e].cellsPosition[s],
    u = n
      .slice(c.rowIndex, h.rowIndex + 1)
      .map(d => d.cellsPosition.slice(c.columnIndex, h.columnIndex + 1))
      .reduce((d, f) => d.concat(f))
      .map(d => d.cell)
  return { selectedCells: Array.from(new Set(u)), startPosition: c, endPosition: h }
}
function Po(r) {
  const t = []
  r.forEach((n, o) => {
    t[o] || (t[o] = [])
    const i = t[o]
    let a = 0
    n.forEach(l => {
      for (; i[a]; ) a++
      let c = 1
      for (; c < l.state.colspan && !i[a + c]; ) c++
      l.updateState(h => {
        ;(h.rowspan = l.state.rowspan), (h.colspan = c)
      })
      for (let h = o, u = l.state.rowspan + o; h < u; h++) {
        t[h] || (t[h] = [])
        const d = t[h]
        for (let f = a, p = a + c; f < p; f++) d[f] = l
      }
      a += c
    })
  })
  const e = Math.max(...t.map(n => n.length))
  t.forEach(n => {
    for (let o = 0; o < e; o++) n[o] || (n[o] = dt())
  })
  const s = []
  return t.map(n => n.filter(o => (s.includes(o) ? !1 : (s.push(o), !0))))
}
function Ve(r, t) {
  const e = []
  let s = 0,
    n = 0
  for (let i = 0; i < r.length; i++) {
    const a = r[i],
      l = a.state,
      c = e[s]
    if (c) {
      let h = !0
      for (let u = 0; u < t; u++)
        if (!c[u]) {
          ;(n = u), (h = !1)
          break
        }
      if (h) {
        ;(n = 0), s++, i--
        continue
      }
    }
    for (let h = s; h < l.rowspan + s; h++) {
      e[h] || (e[h] = [])
      const u = e[h]
      for (let d = n; d < l.colspan + n; d++) u[d] = a
    }
    ;(n = l.colspan + n - 1), n === t - 1 && ((n = 0), s++)
  }
  const o = []
  return e.map(i => i.filter(a => (o.includes(a) ? !1 : (o.push(a), !0))))
}
function It(r) {
  const t = []
  for (let o = 0; o < r.length; o++) {
    const i = []
    r[o].forEach((a, l) => {
      i.push({
        row: r[o],
        beforeCell: r[o][l - 1],
        afterCell: r[o][l + 1],
        offsetColumn: 0,
        offsetRow: 0,
        columnIndex: l,
        rowIndex: o,
        cell: a
      })
    }),
      t.push({
        beforeRow: r[o - 1] || null,
        afterRow: r[o + 1] || null,
        cellsPosition: i,
        cells: r[o]
      })
  }
  let e = !1,
    s = 0
  const n = []
  do {
    let o = 0
    for (e = !1; o < t.length; ) {
      const i = t[o],
        a = i.cellsPosition[s]
      if (a) {
        let l
        if (
          ((a.rowIndex = o),
          (a.columnIndex = s),
          a.offsetColumn + 1 < a.cell.state.colspan &&
            ((l = `${o}*${s + 1}`),
            n.indexOf(l) === -1 &&
              (i.cellsPosition.splice(s + 1, 0, {
                beforeCell: a.beforeCell,
                afterCell: a.afterCell,
                cell: a.cell,
                row: i.cells,
                rowIndex: o,
                columnIndex: s,
                offsetColumn: a.offsetColumn + 1,
                offsetRow: a.offsetRow
              }),
              n.push(l))),
          a.offsetRow + 1 < a.cell.state.rowspan && ((l = `${o + 1}*${s}`), n.indexOf(l) === -1))
        ) {
          let c = t[o + 1]
          c ||
            ((c = Object.assign(Object.assign({}, i), { cells: [], cellsPosition: [] })), t.push(c))
          const h = c.cellsPosition[s - 1],
            u = c.cellsPosition[s]
          c.cellsPosition.splice(s, 0, {
            beforeCell: h ? h.cell : null,
            afterCell: u ? u.cell : null,
            row: c.cells,
            cell: a.cell,
            offsetColumn: a.offsetColumn,
            offsetRow: a.offsetRow + 1,
            rowIndex: o,
            columnIndex: s
          }),
            n.push(l)
        }
        e = !0
      }
      o++
    }
    s++
  } while (e)
  return t
}
function Ue(r, t) {
  for (var e; t; ) {
    if (r.slots.has(t)) return t
    t = (e = t.parent) === null || e === void 0 ? void 0 : e.parent
  }
  return null
}
function Tn(r, t, e, s) {
  const n = It(Ve(e.slots.toArray(), s)),
    o = e.slots
  if (r === o.first && t === o.last) {
    const d = n[n.length - 1].cellsPosition,
      f = n
        .map(p => p.cellsPosition)
        .flat()
        .map(p => p.cell)
    return {
      startPosition: n[0].cellsPosition[0],
      endPosition: d[d.length - 1],
      selectedCells: Array.from(new Set(f))
    }
  }
  const i = Gs(r, n),
    a = Gs(t, n),
    l = Math.min(i.minRow, a.minRow),
    c = Math.min(i.minColumn, a.minColumn),
    h = Math.max(i.maxRow, a.maxRow),
    u = Math.max(i.maxColumn, a.maxColumn)
  return En(l, c, h, u, n)
}
function Lo(r, t, e, s) {
  const n = G(),
    o = n.get(nt),
    i = n.get(P),
    a = n.get(zt),
    l = new Xn(0.25, 0.1, 0.25, 0.1),
    c = kt(),
    h = [
      t.onChange.subscribe(N => {
        e = N
      })
    ],
    u = y('div', { classes: ['textbus-table-editor-mask'] })
  let d = !1,
    f
  function p() {
    a.appendChild(u), (d = !0)
  }
  function m() {
    var N
    ;(d = !1), (N = u.parentNode) === null || N === void 0 || N.removeChild(u)
  }
  function g(N, E) {
    cancelAnimationFrame(f)
    function k(B) {
      return B < 0 ? Math.ceil(B) : Math.floor(B)
    }
    let w = 0
    const O = 6,
      A = () => {
        w++
        const B = l.update(w / O).y,
          _ = N.left + k((E.left - N.left) * B),
          V = N.top + k((E.top - N.top) * B),
          q = N.width + k((E.width - N.width) * B),
          H = N.height + k((E.height - N.height) * B)
        ;(u.style.left = _ + 'px'),
          (u.style.top = V + 'px'),
          (u.style.width = q + 'px'),
          (u.style.height = H + 'px'),
          w < O && (f = requestAnimationFrame(A))
      }
    f = requestAnimationFrame(A)
  }
  function x(N, E, k) {
    const w = Tn(N, E, c, e.columnCount)
    s(w)
    const O = w.startPosition,
      A = w.endPosition,
      B = o.getNativeNodeByVNode(o.getVNodeBySlot(O.cell)),
      _ = o.getNativeNodeByVNode(o.getVNodeBySlot(A.cell))
    if (!B || !_) return w
    const V = B.getBoundingClientRect(),
      q = _.getBoundingClientRect(),
      H = u.getBoundingClientRect()
    return (
      N === E ? (u.style.background = 'none') : (u.style.background = ''),
      d
        ? g(
            { left: H.left - k.left, top: H.top - k.top, width: H.width, height: H.height },
            {
              left: V.left - k.left,
              top: V.top - k.top,
              width: q.left + q.width - V.left,
              height: q.top + q.height - V.top
            }
          )
        : (p(),
          (u.style.left = V.left - k.left + 'px'),
          (u.style.top = V.top - k.top + 'px'),
          (u.style.width = q.left + q.width - V.left + 'px'),
          (u.style.height = q.top + q.height - V.top + 'px')),
      w
    )
  }
  function S(N) {
    if (i.commonAncestorComponent === c) {
      const k = a.getBoundingClientRect(),
        w = Ue(c, i.startSlot),
        O = Ue(c, i.endSlot)
      if (w && O) {
        const A = x(w, O, k)
        w !== O &&
          (N == null ||
            N.useRanges(A.selectedCells.map(B => ({ slot: B, startIndex: 0, endIndex: B.length }))))
      }
    } else m()
  }
  go(N => {
    S(N)
  }),
    h.push(
      We(i.onChange, o.onViewUpdated)
        .pipe(Yn(1))
        .subscribe(() => {
          S()
        })
    ),
    pt(() => {
      h.forEach(N => N.unsubscribe()), m()
    })
}
var Bo =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, s) {
      var n = arguments.length,
        o = n < 3 ? t : s === null ? (s = Object.getOwnPropertyDescriptor(t, e)) : s,
        i
      if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
        o = Reflect.decorate(r, t, e, s)
      else
        for (var a = r.length - 1; a >= 0; a--)
          (i = r[a]) && (o = (n < 3 ? i(o) : n > 3 ? i(t, e, o) : i(t, e)) || o)
      return n > 3 && o && Object.defineProperty(t, e, o), o
    },
  Fo =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
        return Reflect.metadata(r, t)
    },
  us
let R = (us = class {
  constructor(t, e) {
    ;(this.defaultConfig = t), (this.customConfig = e)
  }
  get(t) {
    const e = this.parse(t),
      s = this.getLabelByTokens(this.customConfig, e)
    if (typeof s == 'string') return s
    const n = this.getLabelByTokens(this.defaultConfig, e)
    return typeof n == 'string' ? n : ''
  }
  getContext(t) {
    const e = this.parse(t),
      s = this.getLabelByTokens(this.customConfig, e) || {},
      n = this.getLabelByTokens(this.defaultConfig, e) || {}
    return new us(n, s)
  }
  joinTemplate(t, ...e) {
    return t.replace(/{\d+}/g, s => e[s.replace(/{\s*|\s*}/g, '')] || s)
  }
  parse(t) {
    return t
      .split(/[.\[\]'"]+/g)
      .map(e => e.trim())
      .filter(e => e)
  }
  getLabelByTokens(t, e) {
    if (!t || e.length === 0) return null
    let s = t
    for (let n = 0; n < e.length; n++) if (((s = s[e[n]]), typeof s > 'u')) return null
    return s
  }
})
R = us = Bo([j(), Fo('design:paramtypes', [Object, Object])], R)
const Ss = K({
    type: b.BlockComponent,
    name: 'AlertComponent',
    setup(r) {
      const t = Z((r == null ? void 0 : r.slots) || [])
      let e = (r == null ? void 0 : r.state) || { type: 'primary', fill: !1 }
      const s = ut(e),
        o = G().get(R),
        i = s.onChange.subscribe(l => {
          e = l
        })
      pt(() => {
        i.unsubscribe()
      }),
        t.length === 0 && t.push(new T([b.InlineComponent, b.Text]))
      const a = o.getContext('components.alertComponent.contextMenu')
      return (
        Ae(l => {
          l.useMenus([
            {
              label: e.fill ? a.get('noFill') : a.get('fill'),
              onClick() {
                s.update(c => {
                  c.fill = !e.fill
                })
              }
            },
            {
              label: a.get('type'),
              submenu: 'default,primary,info,success,warning,danger,dark,gray'
                .split(',')
                .map(c => ({
                  label: c,
                  onClick() {
                    s.update(h => {
                      h.type = c
                    })
                  }
                }))
            }
          ])
        }),
        {
          render(l) {
            const c = ['tb-alert']
            return (
              e.fill && c.push('tb-alert-fill'),
              e.type && c.push('tb-alert-' + e.type),
              C.createElement(
                'tb-alert',
                { 'data-type': e.type, class: c.join(' ') },
                l(t.get(0), h => C.createElement('div', null, h))
              )
            )
          }
        }
      )
    }
  }),
  _o = {
    resources: {
      styles: [
        `
.tb-alert {
  display: block;
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid #e9eaec;
  background-color: #f8f8f9;
  margin-top: 1em;
  margin-bottom: 1em
}

.tb-alert.tb-alert-primary {
  border-color: rgba(18, 150, 219, 0.3);
  background-color: rgba(18, 150, 219, 0.15)
}

.tb-alert.tb-alert-primary.tb-alert-fill {
  color: #fff;
  background-color: #1296db
}

.tb-alert.tb-alert-success {
  border-color: rgba(21, 189, 154, 0.3);
  background-color: rgba(21, 189, 154, 0.15)
}

.tb-alert.tb-alert-success.tb-alert-fill {
  color: #fff;
  background-color: #15bd9a
}

.tb-alert.tb-alert-info {
  border-color: rgba(106, 209, 236, 0.3);
  background-color: rgba(106, 209, 236, 0.15)
}

.tb-alert.tb-alert-info.tb-alert-fill {
  color: #fff;
  background-color: #6ad1ec
}

.tb-alert.tb-alert-warning {
  border-color: rgba(255, 153, 0, 0.3);
  background-color: rgba(255, 153, 0, 0.15)
}

.tb-alert.tb-alert-warning.tb-alert-fill {
  color: #fff;
  background-color: #f90
}

.tb-alert.tb-alert-danger {
  border-color: rgba(231, 79, 94, 0.3);
  background-color: rgba(231, 79, 94, 0.15)
}

.tb-alert.tb-alert-danger.tb-alert-fill {
  color: #fff;
  background-color: #E74F5E
}

.tb-alert.tb-alert-dark {
  border-color: rgba(73, 80, 96, 0.3);
  background-color: rgba(73, 80, 96, 0.15)
}

.tb-alert.tb-alert-dark.tb-alert-fill {
  color: #fff;
  background-color: #495060
}

.tb-alert.tb-alert-gray {
  border-color: rgba(187, 190, 196, 0.3);
  background-color: rgba(187, 190, 196, 0.15)
}

.tb-alert.tb-alert-gray.tb-alert-fill {
  color: #fff;
  background-color: #bbbec4
}

.tb-alert-fill code {
  background-color: rgba(255, 255, 255, 0.2);
  border: none
}`
      ]
    },
    match(r) {
      return r.tagName.toLowerCase() === 'tb-alert'
    },
    read(r, t, e) {
      return Ss.createInstance(t, {
        state: { fill: r.classList.contains('tb-alert-fill'), type: r.dataset.type || '' },
        slots: [
          e(new T([b.InlineComponent, b.Text]), r.children[0] || document.createElement('div'))
        ]
      })
    }
  },
  be = K({
    name: 'AudioComponent',
    type: b.InlineComponent,
    setup(r) {
      let t = (r == null ? void 0 : r.state) || { src: '', autoplay: !1, controls: !0 }
      const e = ut(t)
      return (
        e.onChange.subscribe(s => {
          t = s
        }),
        {
          render() {
            return C.createElement('audio', {
              src: t.src,
              autoplay: t.autoplay,
              controls: t.controls
            })
          },
          toJSON() {
            return Object.assign({}, t)
          },
          mergeProps(s) {
            t = e.update(n => {
              Object.assign(n, s)
            })
          }
        }
      )
    }
  }),
  Mo = {
    match(r) {
      return r.nodeName.toLowerCase() === 'audio'
    },
    read(r, t) {
      return be.createInstance(t, {
        state: { src: r.src, autoplay: r.autoplay, controls: r.controls }
      })
    }
  },
  ie = K({
    type: b.BlockComponent,
    name: 'BlockComponent',
    setup(r) {
      const t = G(),
        e = Z(
          (r == null ? void 0 : r.slots) || [new T([b.Text, b.InlineComponent, b.BlockComponent])]
        )
      return (
        e.length || e.push(new T([b.Text, b.InlineComponent, b.BlockComponent])),
        ws(t, e),
        {
          render(s) {
            return s(e.get(0), n => C.createElement('div', null, n))
          }
        }
      )
    }
  }),
  Do = {
    match(r) {
      return r.tagName === 'DIV'
    },
    read(r, t, e) {
      const s = e(new T([b.Text, b.BlockComponent, b.InlineComponent]), r)
      return s.sliceContent().some(i => typeof i == 'string' || i.type === b.InlineComponent)
        ? ie.createInstance(t, { slots: [s] })
        : s
    }
  },
  ye = K({
    type: b.BlockComponent,
    name: 'BlockquoteComponent',
    zenCoding: {
      key: ' ',
      match: /^>$/,
      generateInitData() {
        return { slots: [new T([b.Text, b.InlineComponent, b.BlockComponent])] }
      }
    },
    setup(r) {
      const t = Z(
        (r == null ? void 0 : r.slots) || [new T([b.Text, b.InlineComponent, b.BlockComponent])]
      )
      return (
        t.length || t.push(new T([b.Text, b.InlineComponent, b.BlockComponent])),
        {
          render(e) {
            return e(t.get(0), s => C.createElement('div', { class: 'tb-blockquote' }, s))
          }
        }
      )
    }
  }),
  Vo = {
    resources: {
      styles: [
        '.tb-blockquote {padding: 10px 15px; border-left: 10px solid #dddee1; background-color: #f8f8f9; margin: 1em 0; border-radius: 4px;} .tb-blockquote>*:first-child{margin-top:0}blockquote>*:last-child{margin-bottom:0}'
      ]
    },
    match(r) {
      return r.tagName === 'BLOCKQUOTE'
    },
    read(r, t, e) {
      const s = e(new T([b.Text, b.BlockComponent, b.InlineComponent]), r)
      return ye.createInstance(t, { slots: [s] })
    }
  },
  re = K({
    type: b.BlockComponent,
    name: 'HeadingComponent',
    zenCoding: {
      key: ' ',
      match(r) {
        return /^#{1,6}$/.test(r)
      },
      generateInitData(r) {
        return { state: 'h' + r.length }
      }
    },
    setup(r) {
      const t = G(),
        e = Z((r == null ? void 0 : r.slots) || [new T([b.Text, b.InlineComponent])])
      return (
        e.length || e.push(new T([b.Text, b.InlineComponent])),
        ws(t, e),
        {
          type: (r == null ? void 0 : r.state) || 'h1',
          render(s) {
            return s(e.get(0), n => {
              const o = (r == null ? void 0 : r.state) || 'h1'
              return C.createElement(o, null, n)
            })
          }
        }
      )
    }
  }),
  qo = {
    match(r) {
      return /^h[1-6]$/i.test(r.tagName)
    },
    read(r, t, e) {
      const s = e(new T([b.Text, b.InlineComponent]), r)
      return re.createInstance(t, { slots: [s], state: r.tagName.toLowerCase() })
    }
  }
class Ct {
  constructor(t) {
    ;(this.config = t),
      (this.completeEvent = new F()),
      (this.cancelEvent = new F()),
      (this.onComplete = this.completeEvent.asObservable()),
      (this.onCancel = this.cancelEvent.asObservable()),
      (this.elementRef = y('form', {
        classes: [t.mini ? 'textbus-form-mini' : 'textbus-form'],
        attrs: { novalidate: !0, autocomplete: 'off' }
      })),
      t.title &&
        this.elementRef.appendChild(
          y('h3', { classes: ['textbus-form-title'], children: [U(t.title)] })
        ),
      this.elementRef.appendChild(
        (this.body = y('div', {
          attrs: { novalidate: 'novalidate' },
          classes: t.mini ? [] : ['textbus-form-body'],
          children: t.items.map(s => s.elementRef)
        }))
      )
    const e = t.mini
      ? [
          y('button', {
            attrs: { type: 'submit' },
            classes: ['textbus-btn', 'textbus-btn-block', 'textbus-btn-primary'],
            children: [U(this.config.confirmBtnText || '\u786E\u5B9A')]
          })
        ]
      : [
          y('button', {
            attrs: { type: 'submit' },
            classes: ['textbus-btn', 'textbus-btn-primary'],
            children: [U(this.config.confirmBtnText || '\u786E\u5B9A')]
          }),
          (() => {
            const s = y('button', {
              classes: ['textbus-btn', 'textbus-btn-default'],
              attrs: { type: 'button' },
              children: [U(this.config.cancelBtnText || '\u53D6\u6D88')]
            })
            return (
              s.addEventListener('click', () => {
                this.cancelEvent.next()
              }),
              s
            )
          })()
        ]
    this.elementRef.appendChild(
      (this.footer = y('div', { classes: ['textbus-form-footer'], children: e }))
    ),
      this.elementRef.addEventListener('submit', s => {
        s.preventDefault()
        const n = {}
        for (const o of t.items) {
          if (!o.validate()) return
          const i = o.getAttr()
          i && (n[i.name] = i.value)
        }
        this.completeEvent.next(n)
      })
  }
  addItem(t, e) {
    if (typeof e == 'number') {
      const s = this.config.items[e]
      if (s) {
        this.config.items.splice(e, 0, t), this.elementRef.insertBefore(t.elementRef, s.elementRef)
        return
      }
    }
    this.config.items.push(t), this.body.appendChild(t.elementRef)
  }
  removeItem(t) {
    var e
    const s = this.config.items.indexOf(t)
    s > -1 &&
      (this.config.items.splice(s, 1),
      (e = t.elementRef.parentNode) === null || e === void 0 || e.removeChild(t.elementRef))
  }
  reset() {
    this.config.items.forEach(t => {
      t.reset()
    })
  }
  update(t) {
    Object.keys(t).forEach(e => {
      this.config.items.forEach(s => {
        s.name === e && s.update(t[e])
      })
    })
  }
}
class Ho {
  constructor(t) {
    ;(this.config = t),
      (this.elementRef = y('div', {
        classes: ['textbus-form-group'],
        children: [
          y('div', { classes: ['textbus-control-label'], children: [U(this.config.label)] }),
          y('div', {
            classes: ['textbus-control-value'],
            children: [
              y('button', {
                classes: ['textbus-btn', 'textbus-btn-dark'],
                attrs: { type: 'button' },
                on: {
                  click: () => {
                    this.config.onClick()
                  }
                },
                children: [
                  y('span', { classes: this.config.iconClasses }),
                  U(' ' + this.config.btnText)
                ]
              })
            ]
          })
        ]
      })),
      (this.name = this.config.name)
  }
  reset() {}
  update() {}
  getAttr() {
    return { name: this.name, value: this.config.value }
  }
  validate() {
    return !0
  }
}
class Nn {
  constructor(t) {
    ;(this.config = t),
      (this.elementRef = document.createElement('input')),
      (this.name = t.name),
      (this.value = t.value),
      (this.elementRef.type = 'hidden'),
      (this.elementRef.value = t.value + '')
  }
  reset() {}
  update() {}
  getAttr() {
    return { name: this.name, value: this.value }
  }
  validate() {
    return !0
  }
}
class Xs {
  constructor(t) {
    ;(this.config = t),
      (this.elementRef = document.createElement('div')),
      (this.name = t.name),
      this.elementRef.classList.add('textbus-form-group'),
      (this.elementRef.innerHTML = `
    <div class="textbus-control-label">${t.label}</div>
    <div class="textbus-control-value">
      <div class="textbus-input-group textbus-input-block">
        <input name="${t.name}" class="textbus-form-control textbus-input-block" placeholder="${
        t.placeholder || ''
      }" type="number" value="${t.value || ''}">
     </div>
     <div class="textbus-control-feedback-invalid"></div>
   </div>`),
      (this.input = this.elementRef.querySelector('input')),
      (this.feedbackEle = this.elementRef.querySelector('.textbus-control-feedback-invalid'))
  }
  reset() {
    this.input.value = this.config.value || null
  }
  update(t) {
    this.input.value = (t != null ? t : this.config.value) || ''
  }
  getAttr() {
    return { name: this.config.name, value: Number(this.input.value) }
  }
  validate() {
    var t, e
    const s =
      (e = (t = this.config).validateFn) === null || e === void 0
        ? void 0
        : e.call(t, this.getAttr().value)
    return (this.feedbackEle.innerText = s || ''), !s
  }
}
class Rn {
  constructor(t) {
    ;(this.config = t),
      (this.elementRef = document.createElement('div')),
      (this.name = t.name),
      this.elementRef.classList.add('textbus-form-group'),
      (this.elementRef.innerHTML = `
    <div class="textbus-control-label">${t.label}</div>
    <div class="textbus-control-static">
    <div>${t.values
      .map(
        e => `<label>
                  <input type="radio" ${e.default ? 'checked="checked"' : ''} name="${
          t.name
        }" value="${e.value}">
                  ${e.label}
                 </label>`
      )
      .join('')}</div>
    <div class="textbus-control-feedback-invalid"></div>
    </div>
    `),
      (this.inputs = Array.from(this.elementRef.querySelectorAll('input'))),
      (this.feedbackEle = this.elementRef.querySelector('.textbus-control-feedback-invalid'))
  }
  reset() {
    const t = this.config.values
    for (let e = 0; e < t.length; e++) this.inputs[e].checked = !!t[e].default
  }
  update(t) {
    const e = this.config.values
    let s = !1
    for (let n = 0; n < e.length; n++)
      if (e[n].value === t) {
        ;(this.inputs[n].checked = !0), (s = !0)
        break
      } else this.inputs[n].checked = !0
    s ||
      this.config.values.forEach((n, o) => {
        n.default && (this.inputs[o].checked = !0)
      })
  }
  getAttr() {
    const t = this.inputs
    let e
    for (let s = 0; s < t.length; s++)
      if (t[s].checked) {
        e = this.config.values[s].value
        break
      }
    return { name: this.config.name, value: e }
  }
  validate() {
    var t, e
    const s =
      (e = (t = this.config).validateFn) === null || e === void 0
        ? void 0
        : e.call(t, this.getAttr().value)
    return (this.feedbackEle.innerText = s || ''), !s
  }
}
class ks {
  constructor(t) {
    ;(this.config = t),
      (this.elementRef = document.createElement('div')),
      (this.name = t.name),
      this.elementRef.classList.add('textbus-form-group'),
      (this.elementRef.innerHTML = `
    <div class="textbus-control-label"></div>
    <div class="textbus-control-static">
      <label><input name="${t.name}" type="checkbox" ${t.checked ? 'checked="checked"' : ''}> ${
        t.label
      }</label>
      <div class="textbus-control-feedback-invalid"></div>
    </div>
    `),
      (this.input = this.elementRef.querySelector('input')),
      (this.feedbackEle = this.elementRef.querySelector('.textbus-control-feedback-invalid'))
  }
  reset() {
    this.input.checked = this.config.checked
  }
  update(t) {
    this.input.checked = typeof t == 'boolean' ? t : this.config.checked
  }
  getAttr() {
    return { name: this.name, value: this.input.checked }
  }
  validate() {
    var t, e
    const s =
      (e = (t = this.config).validateFn) === null || e === void 0
        ? void 0
        : e.call(t, this.getAttr().value)
    return (this.feedbackEle.innerText = s || ''), !s
  }
}
class at {
  constructor(t) {
    ;(this.config = t),
      (this.elementRef = document.createElement('div')),
      (this.name = t.name),
      this.elementRef.classList.add('textbus-form-group'),
      (this.elementRef.innerHTML = `
    <div class="textbus-control-label">${t.label}</div>
    <div class="textbus-control-value">
      <div class="textbus-input-group textbus-input-block">
        <input name="${t.name}" class="textbus-form-control textbus-input-block" placeholder="${
        t.placeholder || ''
      }" type="text" value="${t.value || ''}">${
        t.canUpload
          ? `<button type="button" class="textbus-btn textbus-btn-dark" title="${
              t.uploadBtnText || ''
            }">
        <span class="textbus-icon-upload"></span>
       </button>`
          : ''
      }
     </div>
     <div class="textbus-control-feedback-invalid"></div>
   </div>`),
      (this.input = this.elementRef.querySelector('input')),
      (this.feedbackEle = this.elementRef.querySelector('.textbus-control-feedback-invalid')),
      t.canUpload &&
        ((this.btn = this.elementRef.querySelector('button')),
        this.btn.addEventListener('click', () => {
          var e
          this.btn.classList.add('textbus-btn-loading'),
            (this.input.disabled = !0),
            (this.btn.children[0].className = 'textbus-icon-loading'),
            this.sub && this.sub.unsubscribe(),
            (this.sub =
              (e = this.config.fileUploader) === null || e === void 0
                ? void 0
                : e
                    .upload({
                      uploadType: this.config.uploadType,
                      currentValue: this.input.value,
                      multiple: !1
                    })
                    .subscribe({
                      next: s => {
                        this.update(s)
                      },
                      error: () => {
                        this.uploaded()
                      },
                      complete: () => {
                        this.uploaded()
                      }
                    }))
        }))
  }
  reset() {
    this.input.value = this.config.value || ''
  }
  update(t) {
    this.uploaded(), (this.input.value = (t != null ? t : this.config.value) || '')
  }
  getAttr() {
    return { name: this.config.name, value: this.input.value }
  }
  validate() {
    var t, e
    const s =
      (e = (t = this.config).validateFn) === null || e === void 0
        ? void 0
        : e.call(t, this.getAttr().value)
    return (this.feedbackEle.innerText = s || ''), !s
  }
  uploaded() {
    this.sub && this.sub.unsubscribe(),
      (this.input.disabled = !1),
      this.btn &&
        (this.btn.classList.remove('textbus-btn-loading'),
        (this.btn.children[0].className = 'textbus-icon-upload'))
  }
}
class zo {
  constructor(t) {
    ;(this.config = t),
      (this.elementRef = document.createElement('div')),
      (this.name = t.name),
      this.elementRef.classList.add('textbus-form-group'),
      (this.elementRef.innerHTML = `
    <div class="textbus-control-label">${t.label}</div>
    <div class="textbus-control-value">
      <div class="textbus-input-group textbus-input-block">
        <textarea name="${t.name}" style="width: ${t.width || 'auto'}; height: ${
        t.height || 'auto'
      }" class="textbus-form-control textbus-input-block" placeholder="${t.placeholder || ''}">${
        t.value || ''
      }</textarea>
     </div>
     <div class="textbus-control-feedback-invalid"></div>
   </div>`),
      (this.input = this.elementRef.querySelector('textarea')),
      (this.feedbackEle = this.elementRef.querySelector('.textbus-control-feedback-invalid'))
  }
  reset() {
    this.input.value = this.config.value
  }
  update(t) {
    this.uploaded(), (this.input.value = (t != null ? t : this.config.value) || '')
  }
  getAttr() {
    return { name: this.config.name, value: this.input.value }
  }
  validate() {
    var t, e
    const s =
      (e = (t = this.config).validateFn) === null || e === void 0
        ? void 0
        : e.call(t, this.getAttr().value)
    return (this.feedbackEle.innerText = s || ''), !s
  }
  uploaded() {
    this.sub && this.sub.unsubscribe(),
      (this.input.disabled = !1),
      this.btn &&
        (this.btn.classList.remove('textbus-btn-loading'),
        (this.btn.children[0].className = 'textbus-icon-upload'))
  }
}
class Kt {}
var jo =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, s) {
      var n = arguments.length,
        o = n < 3 ? t : s === null ? (s = Object.getOwnPropertyDescriptor(t, e)) : s,
        i
      if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
        o = Reflect.decorate(r, t, e, s)
      else
        for (var a = r.length - 1; a >= 0; a--)
          (i = r[a]) && (o = (n < 3 ? i(o) : n > 3 ? i(t, e, o) : i(t, e)) || o)
      return n > 3 && o && Object.defineProperty(t, e, o), o
    },
  $o =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
        return Reflect.metadata(r, t)
    }
let xt = class {
  constructor(t) {
    ;(this.controller = t),
      (this.timer = null),
      (this.subs = []),
      (this.elementRef = y('div', {
        classes: ['textbus-dialog'],
        children: [(this.dialogWrapper = y('div', { classes: ['textbus-dialog-wrapper'] }))]
      })),
      document.body.appendChild(this.elementRef),
      this.subs.push(
        this.controller.onReadonlyStateChange.subscribe(() => {
          this.controller.readonly && this.hide()
        })
      )
  }
  show(t) {
    ;(this.dialogWrapper.innerHTML = ''),
      this.dialogWrapper.appendChild(t),
      this.elementRef.classList.add('textbus-dialog-active'),
      (this.timer = setTimeout(() => {
        this.dialogWrapper.classList.add('textbus-dialog-wrapper-active')
      }, 200))
  }
  hide() {
    this.dialogWrapper.classList.remove('textbus-dialog-wrapper-active'),
      (this.timer = setTimeout(() => {
        this.elementRef.classList.remove('textbus-dialog-active'),
          (this.dialogWrapper.innerHTML = '')
      }, 200))
  }
  destroy() {
    var t
    clearTimeout(this.timer),
      this.subs.forEach(e => e.unsubscribe()),
      (t = this.elementRef.parentNode) === null || t === void 0 || t.removeChild(this.elementRef)
  }
}
xt = jo([j(), $o('design:paramtypes', [Y])], xt)
class Uo {
  constructor(t) {
    ;(this.name = 'margin'),
      (this.inputs = []),
      (this.elementRef = y('div', {
        classes: ['textbus-form-group'],
        children: [
          y('label', { classes: ['textbus-control-label'], children: [U(t)] }),
          y('div', {
            classes: ['textbus-control-static'],
            children: [
              y('div', {
                classes: ['textbus-toolbar-image-margin-setter'],
                children: Array.from({ length: 4 })
                  .fill(null)
                  .map(() =>
                    y('input', {
                      attrs: { type: 'text', value: '0' },
                      classes: ['textbus-form-control']
                    })
                  )
              })
            ]
          })
        ]
      })),
      (this.inputs = Array.from(this.elementRef.querySelectorAll('input')))
  }
  reset() {
    this.inputs.forEach(t => (t.value = ''))
  }
  update(t) {
    this.reset(),
      t &&
        (t + '').split(/\s+/g).forEach((s, n) => {
          this.inputs[n].value = s
        })
  }
  getAttr() {
    return {
      name: this.name,
      value: this.inputs.map(t => (Number(t.value) ? t.value + 'px' : t.value || '0')).join(' ')
    }
  }
  validate() {
    return !0
  }
}
class Ys {
  constructor(t, e) {
    ;(this.name = t),
      (this.i18n = e),
      (this.inputs = []),
      (this.elementRef = y('div', {
        classes: ['textbus-form-group'],
        children: [
          y('label', { classes: ['textbus-control-label'], children: [U(e.get('label'))] }),
          y('div', {
            classes: ['textbus-control-value'],
            children: [
              y('div', {
                classes: ['textbus-toolbar-image-size-setter'],
                children: [
                  y('input', {
                    attrs: { type: 'text', placeholder: e.get('widthPlaceholder') },
                    classes: ['textbus-form-control']
                  }),
                  U(' * '),
                  y('input', {
                    attrs: { type: 'text', placeholder: e.get('heightPlaceholder') },
                    classes: ['textbus-form-control']
                  })
                ]
              })
            ]
          })
        ]
      })),
      (this.inputs = Array.from(this.elementRef.querySelectorAll('input')))
  }
  reset() {
    this.inputs.forEach(t => (t.value = ''))
  }
  update(t) {
    ;(this.inputs[0].value = (t == null ? void 0 : t.width) || ''),
      (this.inputs[1].value = (t == null ? void 0 : t.height) || '')
  }
  getAttr() {
    return { name: this.name, value: { width: this.inputs[0].value, height: this.inputs[1].value } }
  }
  validate() {
    return !0
  }
}
const Ke = K({
    type: b.InlineComponent,
    name: 'ImgComponent',
    setup(r) {
      let t = (r == null ? void 0 : r.state) || { src: '' }
      const e = ut(t)
      e.onChange.subscribe(c => {
        t = c
      })
      const s = ps()
      kn(s, c => {
        e.update(h => {
          Object.assign(h, c)
        })
      })
      const n = G(),
        o = n.get(Kt),
        i = n.get(R),
        a = n.get(xt),
        l = i.getContext('components.imageComponent.contextMenu')
      return (
        Ae(c => {
          c.useMenus([
            {
              label: l.get('title'),
              iconClasses: ['textbus-icon-image'],
              onClick() {
                const h = new Ct({
                  title: l.get('title'),
                  cancelBtnText: l.get('cancelBtnText'),
                  confirmBtnText: l.get('confirmBtnText'),
                  items: [
                    new at({
                      label: l.get('linkLabel'),
                      name: 'src',
                      placeholder: l.get('linkInputPlaceholder'),
                      canUpload: !0,
                      uploadType: 'image',
                      uploadBtnText: l.get('uploadBtnText'),
                      fileUploader: o,
                      validateFn(d) {
                        return d ? !1 : l.get('validateErrorMessage')
                      }
                    }),
                    new Ys('size', l.getContext('sizeSetter')),
                    new Ys('maxSize', l.getContext('maxSizeSetter')),
                    new Rn({
                      label: l.get('float.label'),
                      name: 'float',
                      values: [
                        { label: l.get('float.noFloatLabel'), value: 'none', default: !0 },
                        { label: l.get('float.floatToLeftLabel'), value: 'left' },
                        { label: l.get('float.floatToRightLabel'), value: 'right' }
                      ]
                    }),
                    new Uo(l.get('marginLabel'))
                  ]
                })
                h.update({
                  src: t.src,
                  margin: t.margin,
                  float: t.float,
                  size: { width: t.width, height: t.height },
                  maxSize: { width: t.maxWidth, height: t.maxHeight }
                }),
                  a.show(h.elementRef)
                const u = new Ht()
                u.add(
                  h.onComplete.subscribe(d => {
                    const f = {
                      src: d.src,
                      margin: d.margin,
                      float: d.float,
                      maxWidth: d.maxSize.width,
                      maxHeight: d.maxSize.height,
                      width: d.size.width,
                      height: d.size.height
                    }
                    e.update(p => {
                      Object.assign(p, f)
                    }),
                      a.hide(),
                      u.unsubscribe()
                  })
                ),
                  u.add(
                    h.onCancel.subscribe(() => {
                      a.hide(), u.unsubscribe()
                    })
                  )
              }
            }
          ])
        }),
        {
          render() {
            return C.createElement('img', {
              src: t.src,
              ref: s,
              class: 'tb-img',
              style: {
                width: t.width,
                height: t.height,
                maxWidth: t.maxWidth,
                maxHeight: t.maxHeight,
                margin: t.margin,
                float: t.float
              }
            })
          }
        }
      )
    }
  }),
  Ko = {
    resources: { styles: ['.tb-img{max-width: 100%}'] },
    match(r) {
      return r.tagName === 'IMG'
    },
    read(r, t) {
      const e = r.style
      return Ke.createInstance(t, {
        state: {
          src: r.getAttribute('src') || '',
          width: e.width,
          height: e.height,
          margin: e.margin,
          float: e.float,
          maxWidth: e.maxWidth,
          maxHeight: e.maxHeight
        }
      })
    }
  },
  Wo =
    '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><g><rect fill="#555" height="100%" width="100%"/></g><g><text font-family="Helvetica, Arial, sans-serif" font-size="24" y="50%" x="50%" text-anchor="middle" dominant-baseline="middle" stroke-width="0" stroke="#000" fill="#000000">Image</text></g></svg>',
  Jo = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(Wo),
  Es = K({
    type: b.BlockComponent,
    separable: !1,
    name: 'ImageCardComponent',
    setup(r) {
      let t = (r == null ? void 0 : r.state) || { src: Jo, height: '200px' }
      const e = ut(t),
        s = G(),
        n = s.get(xt),
        o = s.get(L),
        i = s.get(P),
        a = s.get(R),
        l = s.get(Kt),
        c = Z((r == null ? void 0 : r.slots) || [])
      if (c.length === 0) {
        const p = new T([b.Text])
        p.insert('\u56FE\u7247\u540D\u79F0'), c.push(p)
      }
      const h = e.onChange.subscribe(p => {
        t = p
      })
      pt(() => {
        h.unsubscribe()
      })
      const u = kt()
      fe(p => {
        const m = p.target.cutTo(new T([b.InlineComponent, b.Text]), p.data.index),
          g = z.createInstance(s, { slots: [m] })
        o.insertAfter(g, u), p.preventDefault(), i.selectFirstPosition(g)
      })
      const d = a.getContext('components.imageCardComponent.setting')
      function f() {
        const p = new Ct({
          title: d.get('title'),
          confirmBtnText: d.get('confirmBtnText'),
          cancelBtnText: d.get('cancelBtnText'),
          items: [
            new at({
              label: d.get('srcLabel'),
              uploadType: 'image',
              canUpload: !0,
              value: t.src,
              name: 'src',
              placeholder: d.get('srcPlaceholder'),
              fileUploader: l
            }),
            new at({
              label: d.get('heightLabel'),
              name: 'height',
              value: t.height,
              placeholder: d.get('heightPlaceholder')
            })
          ]
        })
        n.show(p.elementRef),
          p.onComplete.subscribe(m => {
            e.update(g => {
              Object.assign(g, m)
            }),
              n.hide()
          }),
          p.onCancel.subscribe(() => {
            n.hide()
          })
      }
      return {
        render(p) {
          return C.createElement(
            'tb-image-card',
            { 'data-src': t.src, 'data-height': t.height },
            C.createElement(
              'div',
              { onClick: f },
              C.createElement('img', { src: t.src, style: { height: t.height } })
            ),
            p(c.get(0), m => C.createElement('p', null, m))
          )
        }
      }
    }
  }),
  Go = {
    resources: {
      styles: [
        `
tb-image-card {
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, .1);
  border-radius: 3px;
  overflow: hidden;
}
tb-image-card > div > img {
  width: 100%;
  display: block;
  min-height: 40px;
}
tb-image-card > p {
  margin: 0;
  text-align: center;
  font-size: 15px;
  color: #aaa;
  height: 24px;
  line-height: 24px;
  padding: 6px 20px;
  box-sizing: content-box;
}
`
      ]
    },
    match(r) {
      return r.nodeName.toLowerCase() === 'tb-image-card'
    },
    read(r, t, e) {
      const s = r.querySelector('p'),
        n = new T([b.Text])
      return Es.createInstance(t, {
        state: { height: r.dataset.height, src: r.dataset.src },
        slots: [s ? e(n, s) : n]
      })
    }
  }
function Xo(r) {
  const t = new T([b.Text, b.InlineComponent, b.BlockComponent]),
    e = re.createInstance(r)
  e.slots.first.insert('Hello, world!')
  const s = z.createInstance(r)
  s.slots.first.insert(
    '\u4F60\u597D\uFF0C\u6211\u662F Textbus\uFF0C\u4E00\u4E2A\u7ED9\u4F60\u5E26\u6765\u5168\u65B0\u4F53\u9A8C\u7684\u5BCC\u6587\u672C\u5F00\u53D1\u6846\u67B6\u3002'
  )
  const n = z.createInstance(r)
  return (
    n.slots.first.insert('\u73B0\u5728\u6211\u4EEC\u5F00\u59CB\u5427\uFF01'),
    t.insert(e),
    t.insert(s),
    t.insert(n),
    t
  )
}
const Ts = K({
    type: b.BlockComponent,
    name: 'JumbotronComponent',
    setup(r) {
      const t = Z((r == null ? void 0 : r.slots) || []),
        e = G(),
        s = e.get(xt),
        n = e.get(R),
        o = e.get(Kt)
      t.length === 0 && t.push(Xo(e))
      let i = (r == null ? void 0 : r.state) || {
        minHeight: '200px',
        backgroundImage: '',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
      const a = ut(i),
        l = a.onChange.subscribe(d => {
          i = d
        })
      pt(() => {
        l.unsubscribe()
      })
      const h = n.getContext('components.jumbotronComponent').getContext('setting.form')
      function u() {
        const d = new Ct({
          title: h.get('title'),
          confirmBtnText: h.get('confirmBtnText'),
          cancelBtnText: h.get('cancelBtnText'),
          items: [
            new at({
              name: 'minHeight',
              value: '200px',
              placeholder: h.get('minHeightInputPlaceholder'),
              label: h.get('minHeightLabel')
            }),
            new at({
              label: h.get('backgroundImageLabel'),
              name: 'backgroundImage',
              value: i.backgroundImage,
              placeholder: h.get('backgroundImageInputPlaceholder'),
              canUpload: !0,
              uploadType: 'image',
              fileUploader: o,
              uploadBtnText: h.get('uploadBtnText'),
              validateFn(m) {
                return m ? !1 : h.get('validateErrorMessage')
              }
            })
          ]
        })
        s.show(d.elementRef)
        const f = d.onComplete.subscribe(m => {
            a.update(g => {
              Object.assign(g, m)
            }),
              s.hide(),
              f.unsubscribe(),
              p.unsubscribe()
          }),
          p = d.onCancel.subscribe(() => {
            s.hide(), f.unsubscribe(), p.unsubscribe()
          })
      }
      return {
        render(d, f) {
          return C.createElement(
            'tb-jumbotron',
            {
              style: {
                backgroundImage: i.backgroundImage ? `url("${i.backgroundImage}")` : null,
                backgroundSize: i.backgroundSize || 'cover',
                backgroundPosition: i.backgroundPosition || 'center',
                minHeight: i.minHeight
              }
            },
            f === X.Editing &&
              C.createElement(
                'button',
                { type: 'button', class: 'tb-jumbotron-setting', onClick: u },
                C.createElement('span', { class: 'textbus-icon-setting' })
              ),
            d(t.get(0), p => C.createElement('div', null, p))
          )
        }
      }
    }
  }),
  Yo = {
    resources: {
      styles: [
        `
tb-jumbotron {
  display: block;
  min-height: 200px;
  margin-bottom: 1em;
  background-color: #eee;
  padding: 20px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
`
      ],
      editModeStyles: [
        '.tb-jumbotron-setting { display:none; border-radius: 4px; font-size: 14px;position: absolute; right: 10px; top: 10px; background: #fff; box-shadow: 1px 2px 3px rgba(0,0,0,.1); color: #333; border: 0; outline: none; cursor: pointer;}.tb-jumbotron-setting:hover{color: #1296db} tb-jumbotron:hover .tb-jumbotron-setting{display:block} '
      ]
    },
    match(r) {
      return r.nodeName.toLowerCase() === 'tb-jumbotron'
    },
    read(r, t, e) {
      const s = r.style
      return Ts.createInstance(t, {
        state: {
          backgroundImage: (s.backgroundImage || '').replace(/^url\(['"]?|['"]?\)$/g, ''),
          backgroundSize: s.backgroundSize,
          backgroundPosition: s.backgroundPosition,
          minHeight: s.minHeight
        },
        slots: [
          e(
            new T([b.BlockComponent, b.InlineComponent, b.Text]),
            r.children[0] || document.createElement('div')
          )
        ]
      })
    }
  },
  Zs = `% \\f is defined as #1f(#2) using the macro
\\f\\relax{x} = \\int_{-\\infty}^\\infty
    \\f\\hat\\xi\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`
function An(r) {
  const t = {}
  return (
    r.getAttributeNames().forEach(e => {
      t[e] = r.getAttribute(e)
    }),
    C.createElement(
      r.tagName.toLowerCase(),
      t,
      Array.from(r.childNodes).map(e =>
        e.nodeType === Node.ELEMENT_NODE ? An(e) : e.textContent || ''
      )
    )
  )
}
const Ns = K({
    type: b.InlineComponent,
    name: 'KatexComponent',
    setup(r) {
      let t = (r == null ? void 0 : r.state) || { source: Zs }
      t.source = t.source || Zs
      const e = ut(t),
        s = e.onChange.subscribe(c => {
          t = c
        }),
        n = G(),
        o = n.get(R),
        i = n.get(xt),
        a = o.getContext('components.katexComponent.setter')
      function l() {
        const c = new Ct({
          title: a.get('title'),
          cancelBtnText: a.get('cancelBtnText'),
          confirmBtnText: a.get('confirmBtnText'),
          items: [
            new zo({
              name: 'source',
              value: t.source,
              placeholder: a.get('placeholder'),
              label: a.get('label'),
              height: '260px',
              width: '400px'
            })
          ]
        })
        i.show(c.elementRef),
          c.onComplete.subscribe(h => {
            e.update(u => {
              u.source = h.source
            }),
              i.hide()
          }),
          c.onCancel.subscribe(() => i.hide())
      }
      return (
        pt(() => {
          s.unsubscribe()
        }),
        {
          render() {
            let c
            try {
              c = io.renderToString(t.source, {
                displayMode: !0,
                leqno: !1,
                fleqn: !1,
                throwOnError: !0,
                errorColor: '#cc0000',
                strict: 'warn',
                output: 'html',
                trust: !1,
                macros: { '\\f': '#1f(#2)' }
              })
            } catch (u) {
              c = `<span style="color: red">${u.stack
                .split(
                  `
`
                )
                .join('<br>')}</span>`
            }
            const h = new DOMParser().parseFromString(c, 'text/html').body.children[0]
            return C.createElement(
              'tb-katex',
              { source: encodeURIComponent(t.source), onClick: l },
              h ? [An(h)] : []
            )
          }
        }
      )
    }
  }),
  Zo = {
    resources: {
      styles: [
        'tb-katex, .katex-display, .katex, .katex-html{display: inline-block} tb-katex{margin-left: 0.5em; margin-right: 0.5em}'
      ]
    },
    match(r) {
      return r.tagName.toLowerCase() === 'tb-katex'
    },
    read(r, t) {
      return Ns.createInstance(t, {
        state: { source: decodeURIComponent(r.getAttribute('source') || '') }
      })
    }
  },
  ae = K({
    type: b.BlockComponent,
    name: 'ListComponent',
    separable: !0,
    zenCoding: {
      key: ' ',
      match: /^(1\.|[+*])$/,
      generateInitData(r) {
        return { state: /[-+*]/.test(r) ? 'ul' : 'ol' }
      }
    },
    setup(r) {
      const t = G(),
        e = t.get(P)
      let s = (r == null ? void 0 : r.state) || 'ul'
      const o = ut(s).onChange.subscribe(a => {
        s = a
      })
      pt(() => {
        o.unsubscribe()
      })
      const i = Z((r == null ? void 0 : r.slots) || [new T([b.Text, b.InlineComponent])])
      return (
        fe(a => {
          if (a.target.isEmpty && a.target === i.last) {
            const c = z.createInstance(t),
              h = e.commonAncestorComponent,
              u = h.parent,
              d = u.indexOf(h)
            u.retain(d + 1),
              i.length > 1 && i.remove(i.last),
              u.insert(c),
              e.setPosition(c.slots.get(0), 0),
              a.preventDefault()
            return
          }
          const l = a.target.cut(a.data.index)
          i.insertAfter(l, a.target), e.setPosition(l, 0), a.preventDefault()
        }),
        {
          type: s,
          render(a) {
            const l = s
            return C.createElement(
              l,
              null,
              i.toArray().map(c => a(c, h => C.createElement('li', { class: 'tb-list-item' }, h)))
            )
          },
          split(a, l) {
            return { before: i.slice(0, a), middle: i.slice(a, l), after: i.slice(l) }
          }
        }
      )
    }
  }),
  Qo = {
    match(r) {
      return r.tagName === 'OL' || r.tagName === 'UL'
    },
    resources: { styles: ['.tb-list-item {margin-top: 0.5em; margin-bottom: 0.5em}'] },
    read(r, t, e) {
      const s = [],
        n = Array.from(r.childNodes)
      for (; n.length; ) {
        const o = new T([b.Text, b.InlineComponent])
        let i = n.shift(),
          a = null
        for (; i; ) {
          if (/^li$/i.test(i.nodeName)) {
            s.push(o), e(o, i)
            break
          }
          if (!a) {
            if (
              i.nodeType === Node.TEXT_NODE &&
              (/^\s+$/.test(i.textContent) || i.textContent === '')
            )
              break
            a = document.createElement('li')
          }
          a.appendChild(i), (i = n.shift())
        }
        a && (s.push(o), e(o, a), (a = null))
      }
      return ae.createInstance(t, { slots: s, state: r.tagName.toLowerCase() })
    }
  },
  ti = {
    keyword: 'keyword',
    string: 'string',
    function: 'function',
    number: 'number',
    tag: 'tag',
    comment: 'comment',
    boolean: 'boolean',
    operator: !1,
    builtin: 'builtin',
    punctuation: !1,
    regex: 'regex',
    selector: 'selector',
    property: 'attr-name',
    'class-name': 'class-name',
    'attr-name': 'attr-name',
    'attr-value': 'attr-value',
    'template-punctuation': 'string'
  },
  Fe = [
    { label: 'JavaScript', value: 'JavaScript' },
    { label: 'HTML', value: 'HTML' },
    { label: 'CSS', value: 'CSS' },
    { label: 'TypeScript', value: 'TypeScript' },
    { label: 'Java', value: 'Java' },
    { label: 'C', value: 'C' },
    { label: 'C++', value: 'CPP' },
    { label: 'C#', value: 'CSharp' },
    { label: 'Swift', value: 'Swift' },
    { label: 'Go', value: 'Go' },
    { label: 'JSON', value: 'JSON' },
    { label: 'Less', value: 'Less' },
    { label: 'SCSS', value: 'SCSS' },
    { label: 'Stylus', value: 'Stylus' },
    { label: 'Jsx', value: 'Jsx' },
    { label: 'Tsx', value: 'Tsx' },
    { label: '', value: '' }
  ]
class ei {
  constructor() {
    ;(this.name = 'code' + Math.random()), (this.columned = !1)
  }
  render(t, e) {
    return new C('span', { class: 'tb-hl-' + e }, t)
  }
}
const Rs = new ei()
function Qs(r) {
  return (
    {
      HTML: ['<!--', '-->'],
      JavaScript: ['/*', '*/'],
      CSS: ['/*', '*/'],
      TypeScript: ['/*', '*/'],
      Java: ['/*', '*/'],
      Swift: ['/*', '*/'],
      Go: ['/*', '*/'],
      JSON: ['', ''],
      Less: ['/*', '*/'],
      SCSS: ['/*', '*/'],
      Stylus: ['/*', '*/'],
      C: ['/*', '*/'],
      CPP: ['/*', '*/'],
      CSharp: ['/*', '*/'],
      Tsx: ['/*', '*/'],
      Jsx: ['/*', '*/']
    }[r] || ['', '']
  )
}
function tn(r) {
  return (
    {
      HTML: $.exports.languages.html,
      JavaScript: $.exports.languages.javascript,
      CSS: $.exports.languages.css,
      TypeScript: $.exports.languages.typescript,
      Java: $.exports.languages.java,
      Swift: $.exports.languages.swift,
      JSON: $.exports.languages.json,
      Go: $.exports.languages.go,
      Ruby: $.exports.languages.ruby,
      Less: $.exports.languages.less,
      SCSS: $.exports.languages.scss,
      Stylus: $.exports.languages.stylus,
      C: $.exports.languages.c,
      CPP: $.exports.languages.cpp,
      CSharp: $.exports.languages.csharp,
      Jsx: $.exports.languages.jsx,
      Tsx: $.exports.languages.tsx
    }[r] || null
  )
}
function As(r, t, e) {
  r.forEach(s => {
    if (s instanceof $.exports.Token) {
      const n = ti[s.type]
      t.retain(e),
        t.retain(s.length, Rs, n || null),
        Array.isArray(s.content) && As(s.content, t, e)
    }
    e += s.length
  })
}
function en(r, t, e, s, n) {
  return r.map(o => {
    let i = o.code
    const a = gt()
    if (
      (a.updateState(l => {
        ;(l.blockCommentStart = t), (l.emphasize = o.emphasize)
      }),
      a.state.blockCommentStart && (i = e + i),
      a.insert(i),
      n)
    ) {
      const l = $.exports.tokenize(i, n)
      As(l, a, 0), a.state.blockCommentStart && (a.retain(0), a.delete(2))
      const c = l.pop()
      if (c && typeof c != 'string' && c.type === 'comment' && c.content.indexOf(e) === 0) {
        const h = s.replace(new RegExp(`[${s}]`, 'g'), u => '\\' + u)
        a.updateState(u => {
          u.blockCommentEnd = new RegExp(h + '$').test(c.content)
        }),
          (t = !a.state.blockCommentEnd)
      } else t = !1
    } else
      a.updateState(l => {
        l.blockCommentEnd = !0
      })
    return a
  })
}
function ss(r, t, e, s, n, o = !1) {
  const i = r.toArray()
  let a = i.indexOf(t)
  for (; a < i.length; a++) {
    const l = i[a]
    let c = l.sliceContent()[0]
    l.state.blockCommentStart && (c = s + c)
    const h = new T([b.Text])
    h.insert(c)
    const u = $.exports.tokenize(c, e)
    As(u, h, 0),
      l.state.blockCommentStart && (h.retain(0), h.delete(2)),
      l.retain(0),
      l.retain(l.length, Rs, null),
      h.getFormats().forEach(p => {
        l.retain(p.startIndex), l.retain(p.endIndex - p.startIndex, p.formatter, p.value)
      })
    const d = u.pop()
    if (d && typeof d != 'string' && d.type === 'comment' && d.content.indexOf(s) === 0) {
      const p = n.replace(new RegExp(`[${n}]`, 'g'), m => '\\' + m)
      l.updateState(m => {
        m.blockCommentEnd = new RegExp(p + '$').test(d.content)
      })
    } else
      l.updateState(p => {
        p.blockCommentEnd = !0
      })
    const f = i[a + 1]
    if (f) {
      if (!o && f.state.blockCommentStart === !l.state.blockCommentEnd) break
      f.updateState(p => {
        p.blockCommentStart = !l.state.blockCommentEnd
      })
    }
  }
}
function gt() {
  return new T([b.Text], { blockCommentEnd: !0, blockCommentStart: !1, emphasize: !1 })
}
const xe = K({
    type: b.BlockComponent,
    name: 'PreComponent',
    separable: !1,
    zenCoding: {
      key: 'Enter',
      match(r) {
        const t = Fe.map(s => s.label || s.value)
          .concat('js', 'ts')
          .join('|')
          .replace(/\+/, '\\+')
        return new RegExp(`^\`\`\`(${t})$`, 'i').test(r)
      },
      generateInitData(r) {
        const t = r.replace(/`/g, '').replace(/\+/, '\\+')
        for (const e of Fe)
          if (new RegExp(`^${t}$`, 'i').test(e.label || e.value))
            return { state: { lang: e.value, theme: '' }, slots: [gt()] }
        return /^js$/i.test(t)
          ? { state: { lang: 'JavaScript', theme: '' }, slots: [gt()] }
          : /^ts$/i.test(t)
          ? { state: { lang: 'TypeScript', theme: '' }, slots: [gt()] }
          : { state: { lang: '', theme: '' }, slots: [gt()] }
      }
    },
    setup(r = { slots: [], state: { lang: '', theme: '' } }) {
      let t = tn(r.state.lang),
        [e, s] = Qs(r.state.lang)
      const n = ut({ lang: r.state.lang, theme: r.state.theme }),
        o = G(),
        i = o.get(R),
        a = o.get(P)
      n.onChange.subscribe(d => {
        ;(r.state.lang = d.lang),
          (r.state.theme = d.theme),
          (t = tn(d.lang)),
          ([e, s] = Qs(d.lang)),
          (u = !0),
          h.toArray().forEach(f => {
            f.updateState(p => {
              ;(p.blockCommentStart = !1), (p.blockCommentEnd = !1)
            })
          }),
          t
            ? ss(h, h.get(0), t, e, s, !0)
            : h.toArray().forEach(f => {
                f.retain(0), f.retain(f.length, Rs, null)
              }),
          (u = !1)
      })
      const l = (r.slots || [gt()]).map(d => {
          var f
          return {
            emphasize: ((f = d.state) === null || f === void 0 ? void 0 : f.emphasize) || !1,
            code: d.toString()
          }
        }),
        c = en(l, !1, e, s, t),
        h = Z(c)
      let u = !1
      return (
        h.onChildSlotChange.subscribe(d => {
          if (t && !u) {
            u = !0
            const f = d.index
            ss(h, d, t, e, s), d.retain(f), (u = !1)
          }
        }),
        co({
          keymap: { key: '/', ctrlKey: !0 },
          action: () => {
            const d = h.indexOf(a.startSlot),
              f = h.indexOf(a.endSlot),
              p = h.slice(d, f + 1)
            p.every(g => /^\s*\/\//.test(g.toString()))
              ? p.forEach(g => {
                  const x = g.toString(),
                    S = x.indexOf('// '),
                    N = x.indexOf('//')
                  S >= 0
                    ? (g.cut(S, S + 3),
                      g === a.anchorSlot && a.setAnchor(g, a.startOffset - 3),
                      g === a.focusSlot && a.setFocus(g, a.endOffset - 3))
                    : (g.cut(N, N + 2),
                      g === a.anchorSlot && a.setAnchor(g, a.startOffset - 2),
                      g === a.focusSlot && a.setFocus(g, a.endOffset - 2))
                })
              : (p.forEach(g => {
                  g.retain(0), g.insert('// ')
                }),
                a.setBaseAndExtent(a.startSlot, a.startOffset + 3, a.endSlot, a.endOffset + 3))
          }
        }),
        fe(d => {
          if (d.target.isEmpty && d.target === h.last) {
            const p = h.get(h.length - 2)
            if (p != null && p.isEmpty) {
              const m = z.createInstance(o),
                g = a.commonAncestorComponent,
                x = g.parent,
                S = x.indexOf(g)
              x.retain(S + 1),
                h.remove(h.last),
                h.length > 1 && h.remove(p),
                x.insert(m),
                a.setPosition(m.slots.get(0), 0),
                d.preventDefault()
              return
            }
          }
          const f = d.target.cutTo(gt(), d.data.index)
          if ((h.insertAfter(f, d.target), t && !u)) {
            u = !0
            const p = f.index
            ss(h, f, t, e, s), f.retain(p), (u = !1)
          }
          a.setPosition(f, 0), d.preventDefault()
        }),
        Ae(d => {
          d.useMenus([
            {
              iconClasses: ['textbus-icon-terminal'],
              label: i.get('components.preComponent.contextMenuLabel'),
              submenu: Fe.map(f => ({
                label: f.label || i.get('components.preComponent.defaultLang'),
                onClick() {
                  f.value !== r.state.lang &&
                    ((r.state.lang = f.value),
                    n.update(p => {
                      p.lang = f.value
                    }))
                }
              }))
            },
            {
              label: i.get('components.preComponent.changeTheme'),
              submenu: [
                {
                  label: 'Light',
                  onClick() {
                    n.update(f => {
                      f.theme = 'light'
                    })
                  }
                },
                {
                  label: 'Dark',
                  onClick() {
                    n.update(f => {
                      f.theme = 'dark'
                    })
                  }
                }
              ]
            },
            {
              label: i.get('components.preComponent.emphasize'),
              disabled: !a.isSelected,
              onClick() {
                var f
                const { startSlot: p, endSlot: m } = a
                let g = h.indexOf(p)
                const x = h.indexOf(m) + 1
                for (; g < x; g++)
                  (f = h.get(g)) === null ||
                    f === void 0 ||
                    f.updateState(S => {
                      S.emphasize = !0
                    })
              }
            },
            {
              label: i.get('components.preComponent.cancelEmphasize'),
              disabled: !a.isSelected,
              onClick() {
                var f
                const { startSlot: p, endSlot: m } = a
                let g = h.indexOf(p)
                const x = h.indexOf(m) + 1
                for (; g < x; g++)
                  (f = h.get(g)) === null ||
                    f === void 0 ||
                    f.updateState(S => {
                      S.emphasize = !1
                    })
              }
            }
          ])
        }),
        po(d => {
          const f = [],
            p = d.data.text
          let m = '',
            g = !0
          for (let E = 0; E < p.length; E++) {
            const k = p[E]
            k === '\r'
              ? (p[E + 1] ===
                  `
` && E++,
                m && (f.push(m), (m = '')),
                g ? (g = !1) : f.push(''))
              : k ===
                `
`
              ? (m && (f.push(m), (m = '')), g ? (g = !1) : f.push(''))
              : ((g = !0), (m += k))
          }
          m && f.push(m)
          const x = f.shift(),
            S = d.target
          x && S.insert(x)
          const N = h.indexOf(S)
          if (f.length) {
            h.retain(N + 1)
            const E = en(
                f.map(w => ({ code: w, emphasize: !1 })),
                !S.state.blockCommentEnd,
                e,
                s,
                t
              ),
              k = E[E.length - 1]
            h.insert(...E), a.setPosition(k, k.length)
          } else a.setPosition(S, S.index)
          d.preventDefault()
        }),
        {
          render(d) {
            let f = ''
            Fe.forEach(m => {
              m.value === r.state.lang && (f = m.label)
            })
            const p = h.toArray().some(m => {
              var g
              return ((g = m.state) === null || g === void 0 ? void 0 : g.emphasize) === !0
            })
            return C.createElement(
              'pre',
              { class: 'tb-pre', lang: f, theme: r.state.theme || null },
              C.createElement('div', {
                class: 'tb-code-line-number-bg',
                style: { width: Math.max(String(h.length).length, 2.5) + 'em' }
              }),
              C.createElement(
                'div',
                { class: 'tb-code-content' + (p ? ' tb-color-content-highlight' : '') },
                h.toArray().map(m =>
                  d(m, g => {
                    var x
                    return C.createElement(
                      'div',
                      {
                        class:
                          (!((x = m.state) === null || x === void 0) && x.emphasize
                            ? 'tb-code-line-emphasize '
                            : '') + 'tb-code-line'
                      },
                      g
                    )
                  })
                )
              ),
              C.createElement('span', { class: 'tb-pre-lang' }, f)
            )
          }
        }
      )
    }
  }),
  si = {
    resources: {
      styles: [
        `
    code, .tb-pre {background-color: #fefefe;}
   .tb-pre code {padding: 0; border: none; background: none; border-radius: 0; vertical-align: inherit;}
   code {padding: 1px 5px; border-radius: 3px; vertical-align: middle; border: 1px solid rgba(0, 0, 0, .08);}
   .tb-pre {line-height: 1.418em; display: flex; border-radius: 5px; border: 1px solid #efefef; word-break: break-all; word-wrap: break-word; white-space: pre-wrap; overflow: hidden; position: relative}
   code, kbd, pre, samp {font-family: Microsoft YaHei Mono, Menlo, Monaco, Consolas, Courier New, monospace;}
   .tb-code-line-number-bg { background-color: #f9f9f9; border-right: 1px solid #eee; width: 3em; }
   .tb-code-content { flex: 1; padding: 15px 0 15px 0; counter-reset: codeNum; }
   .tb-color-content-highlight { background-color: #eee }
   .tb-color-content-highlight .tb-code-line { opacity: 0.56; }
   .tb-code-line { position: relative; display: block; padding: 0 15px 0 0.5em}
   .tb-code-line::before { counter-increment: codeNum; content: counter(codeNum); position: absolute; left: -5.3em; top: 0; width: 4em; text-align: right; padding: 0 0.8em 0 0.5em; overflow: hidden; white-space: nowrap; color: #aeaeae;}
   .tb-color-content-highlight .tb-code-line-emphasize { opacity: 1; background-color: #fefefe}
   .tb-pre-lang { position: absolute; right: 0; top: 0; opacity: 0.5; pointer-events: none; font-size: 13px; padding: 4px 10px;}
  .tb-hl-keyword { font-weight: bold; }
  .tb-hl-string { color: rgb(221, 17, 68) }
  .tb-hl-function { color: rgb(0, 134, 179); }
  .tb-hl-number { color: #388138 }
  .tb-hl-tag { color: rgb(0, 0, 128) }
  .tb-hl-comment { color: rgb(153, 153, 136); font-style: italic; }
  .tb-hl-boolean { color: #388138; font-weight: bold }
  .tb-hl-builtin { color: rgb(0, 134, 179); }
  .tb-hl-regex { color: #f60; }
  .tb-hl-attr-name { color: rgb(0, 134, 179); }
  .tb-hl-attr-value { color: rgb(221, 17, 68) }
  .tb-hl-class-name { color: rgb(0, 134, 179); font-weight: bold }
  .tb-hl-selector { color: rgb(0, 134, 179); font-weight: bold }
  .tb-pre[theme=dark] {color: #a9aeb2; background-color: #1c2838; border-color: #353535 }
  .tb-pre[theme=dark] .tb-color-content-highlight { background-color: #263140;}
  .tb-pre[theme=dark] .tb-color-content-highlight .tb-code-line-emphasize { opacity: 1; background-color: #1c2838}
  .tb-pre[theme=dark] .tb-hl-keyword {color: rgb(0, 134, 179);}
  .tb-pre[theme=dark] .tb-hl-tag {color: rgb(0, 134, 179);}
  .tb-pre[theme=dark] .tb-hl-comment {color: #4c5156;}
  .tb-pre[theme=dark] .tb-hl-string {color: #ce5a70;}
  .tb-pre[theme=dark] .tb-hl-attr-value {color: #ce5a70;}
  .tb-pre[theme=dark] .tb-hl-regex {color: #af741d;}
  .tb-pre[theme=dark] .tb-hl-selector {color: #ce5a70; font-weight: normal}
  .tb-pre[theme=dark] .tb-code-line::before { color: #536171}
  .tb-pre[theme=dark] .tb-code-line-number-bg {background-color: #2d3a48; border-right-color: #292929; }`
      ]
    },
    match(r) {
      return r.tagName === 'PRE'
    },
    read(r, t) {
      const e = r.querySelectorAll('.tb-code-line')
      let s = []
      return (
        e.length
          ? (s = Array.from(e).map(n => {
              const o = n.innerText.replace(/[\s\n]+$/, ''),
                i = gt()
              return (
                i.updateState(a => {
                  a.emphasize = n.classList.contains('tb-code-line-emphasize')
                }),
                i.insert(o),
                i
              )
            }))
          : (r.querySelectorAll('br').forEach(n => {
              n.parentNode.replaceChild(
                document.createTextNode(`
`),
                n
              )
            }),
            (s = r.innerText
              .split(
                `
`
              )
              .map(n => {
                const o = gt()
                return o.insert(n), o
              }))),
        xe.createInstance(t, {
          state: { lang: r.getAttribute('lang') || '', theme: r.getAttribute('theme') || '' },
          slots: s
        })
      )
    }
  },
  On = 'div,p,h1,h2,h3,h4,h5,h6,nav,header,footer,td,th,li,article'.split(','),
  In = 'span,em,i,s,del,sup,sub,u,strong,img'.split(',')
class ni extends Ut {
  constructor(t, e, s) {
    super(e, s), (this.attrName = t)
  }
  match(t) {
    return new RegExp(`^(${On.join('|')})$`, 'i').test(t.tagName) ? super.match(t) : !1
  }
  read(t) {
    var e
    return {
      attribute: this.target,
      value:
        (e = this.extractFormatData(t, { attrs: [this.attrName] }).attrs) === null || e === void 0
          ? void 0
          : e[this.attrName]
    }
  }
}
class oi {
  constructor(t, e) {
    ;(this.name = t), (this.attrName = e)
  }
  render(t, e) {
    t.attrs.set(this.attrName, e)
  }
}
const bt = new oi('dir', 'dir'),
  ii = new ni('dir', bt, { attrs: [{ key: 'dir', value: ['ltr', 'rtl'] }] })
class Os extends Ut {
  constructor(t, e, s) {
    super(e, s), (this.styleName = t)
  }
  match(t) {
    return new RegExp(`^(${On.join('|')})$`, 'i').test(t.tagName) ? super.match(t) : !1
  }
  read(t) {
    return {
      attribute: this.target,
      value: this.extractFormatData(t, { styleName: this.styleName }).styles[this.styleName]
    }
  }
}
class Is {
  constructor(t, e) {
    ;(this.name = t), (this.styleName = e)
  }
  render(t, e) {
    t.styles.set(this.styleName, e)
  }
}
const ve = new Is('textIndent', 'textIndent'),
  le = new Is('textAlign', 'textAlign'),
  Pn = new Is('blockBackgroundColor', 'backgroundColor'),
  ri = new Os('textIndent', ve, { styles: { textIndent: /.+/ } }),
  ai = new Os('textAlign', le, { styles: { textAlign: /.+/ } }),
  li = new Os('backgroundColor', Pn, { styles: { backgroundColor: /.+/ } })
class Wt extends Ut {
  constructor(t, e) {
    super(t, e)
  }
  read() {
    return { formatter: this.target, value: !0 }
  }
}
class Jt {
  constructor(t, e) {
    ;(this.name = t), (this.tagName = e), (this.columned = !1)
  }
  render(t) {
    return new C(this.tagName, null, t)
  }
}
const wt = new Jt('bold', 'strong'),
  Yt = new Jt('italic', 'em'),
  Zt = new Jt('strikeThrough', 'del'),
  Qt = new Jt('underline', 'u'),
  te = new Jt('subscript', 'sub'),
  ee = new Jt('superscript', 'sup'),
  se = new Jt('code', 'code'),
  ci = new Wt(wt, {
    tags: ['strong', 'b'],
    styles: { fontWeight: ['bold', '500', '600', '700', '800', '900'] },
    excludeStyles: { fontWeight: ['normal', 'lighter', '100', '200', '300', '400'] }
  }),
  hi = new Wt(Yt, {
    tags: ['em', 'i'],
    styles: { fontStyle: ['italic'] },
    excludeStyles: { fontStyle: /(?!italic).+/ }
  }),
  ui = new Wt(Zt, { tags: ['strike', 'del', 's'], styles: { textDecoration: /\bline-through\b/ } }),
  di = new Wt(Qt, { tags: ['u'], styles: { textDecoration: /\bunderline\b/ } }),
  fi = new Wt(te, { tags: ['sub'] }),
  pi = new Wt(ee, { tags: ['sup'] }),
  mi = new Wt(se, { tags: ['code'] })
class Ps extends Ut {
  constructor(t, e, s) {
    super(e, s), (this.styleName = t)
  }
  read(t) {
    return {
      formatter: this.target,
      value: this.extractFormatData(t, { styleName: this.styleName }).styles[this.styleName]
    }
  }
}
class Ls {
  constructor(t, e) {
    ;(this.name = t), (this.styleName = e), (this.columned = !1)
  }
  render(t, e) {
    return {
      fallbackTagName: 'span',
      attach: s => {
        s.styles.set(this.styleName, e)
      }
    }
  }
}
const Ce = new Ls('letterSpacing', 'letterSpacing'),
  we = new Ls('fontFamily', 'fontFamily'),
  Se = new Ls('lineHeight', 'lineHeight'),
  gi = new Ps('letterSpacing', Ce, { styles: { letterSpacing: /.+/ } }),
  bi = new Ps('fontFamily', we, { styles: { fontFamily: /.+/ } }),
  yi = new Ps('lineHeight', Se, { styles: { lineHeight: /.+/ } })
class Ln extends Ut {
  constructor(t, e, s) {
    super(e, s), (this.styleName = t)
  }
  read(t) {
    return {
      formatter: this.target,
      value: this.extractFormatData(t, { styleName: this.styleName }).styles[this.styleName]
    }
  }
}
class Bn {
  constructor(t, e) {
    ;(this.name = t), (this.styleName = e), (this.columned = !1)
  }
  render(t, e) {
    return {
      fallbackTagName: 'span',
      attach: s => {
        s.styles.set(this.styleName, e)
      }
    }
  }
}
const Ge = new Bn('color', 'color'),
  xi = new Ln('color', Ge, { styles: { color: /.+/ } }),
  Nt = new Bn('fontSize', 'fontSize'),
  vi = new Ln('fontSize', Nt, { styles: { fontSize: /.+/ } })
class Fn extends Ut {
  constructor(t, e, s, n = !1) {
    super(e, s), (this.styleName = t), (this.forceMatchTags = n)
  }
  match(t) {
    return this.forceMatchTags && !new RegExp(`^(${In.join('|')})$`, 'i').test(t.tagName)
      ? !1
      : super.match(t)
  }
  read(t) {
    return {
      formatter: this.target,
      value: this.extractFormatData(t, { styleName: this.styleName }).styles[this.styleName]
    }
  }
}
class _n {
  constructor(t, e) {
    ;(this.name = t), (this.styleName = e), (this.columned = !1)
  }
  render(t, e) {
    if (t.length === 1 && t[0] instanceof C) {
      const s = t[0]
      if (s instanceof C) {
        const n = new RegExp(`^(${In.join('|')})$`, 'i')
        if (s && n.test(s.tagName)) return s.styles.set(this.styleName, e), s
      }
    }
    return new C('span', { style: { [this.styleName]: e } }, t)
  }
}
class Ci extends _n {
  constructor() {
    super(...arguments), (this.columned = !0)
  }
}
const Mn = new _n('verticalAlign', 'verticalAlign'),
  Bs = new Ci('textBackgroundColor', 'backgroundColor'),
  wi = new Fn('verticalAlign', Mn, { styles: { verticalAlign: /.+/ } }, !0),
  Si = new Fn('backgroundColor', Bs, { styles: { backgroundColor: /.+/ } }, !0)
function sn(r) {
  const t = new T([b.Text, b.InlineComponent, b.BlockComponent]),
    e = ie.createInstance(r)
  e.slots.first.insert('\u6807\u9898', [
    [Nt, '18px'],
    [wt, !0]
  ])
  const s = z.createInstance(r)
  return s.slots.first.insert('\u63CF\u8FF0\u4FE1\u606F...'), t.insert(e), t.insert(s), t
}
const Fs = K({
    type: b.BlockComponent,
    name: 'StepComponent',
    setup(r) {
      let t = (r == null ? void 0 : r.state) || { step: 0 }
      const e = G(),
        s = Z((r == null ? void 0 : r.slots) || [])
      s.length === 0 && s.push(sn(e))
      const n = ut(t),
        o = n.onChange.subscribe(i => {
          t = i
        })
      return (
        pt(() => {
          o.unsubscribe()
        }),
        {
          render(i, a) {
            const l = t.step
            return C.createElement(
              'tb-step',
              { step: t.step },
              s.toArray().map((c, h) => {
                let u = 'tb-waiting'
                return (
                  h < l ? (u = 'tb-complete') : h === l && (u = 'tb-current'),
                  C.createElement(
                    'div',
                    { class: 'tb-step-item ' + u },
                    C.createElement(
                      'div',
                      { class: 'tb-step-item-header' },
                      C.createElement('div', { class: 'tb-step-item-line' }),
                      C.createElement(
                        'div',
                        {
                          class: 'tb-step-item-icon',
                          onClick: () => {
                            let d
                            h === l ? (d = h + 1) : h + 1 === l ? (d = h - 1) : (d = h),
                              n.update(f => {
                                f.step = d
                              })
                          }
                        },
                        h + 1
                      )
                    ),
                    i(c, d => C.createElement('div', { class: 'tb-step-item-content' }, d)),
                    a === X.Editing &&
                      C.createElement('span', {
                        class: 'tb-step-item-add',
                        onClick: () => {
                          s.insertByIndex(sn(e), h + 1)
                        }
                      })
                  )
                )
              })
            )
          }
        }
      )
    }
  }),
  ki = {
    resources: {
      styles: [
        `
tb-step {
  display: flex;
}
.tb-step-item {
  position: relative;
  flex: 1;
}

.tb-step-item:last-child .tb-step-item-line {
  display: none;
}

.tb-step-item.tb-complete .tb-step-item-line {
  border-top-color: #15bd9a;
}
.tb-step-item.tb-complete .tb-step-item-icon {
  background-color: #15bd9a;
}

.tb-step-item.tb-current .tb-step-item-line {
  border-top-style: dashed;
}
.tb-step-item.tb-current .tb-step-item-icon {
  background-color: #1296db;
}

.tb-step-item.tb-waiting .tb-step-item-line {
  border-top-style: dashed;
}

.tb-step-item.tb-waiting .tb-step-item-icon {
  background-color: #bbbec4;
}
.tb-step-item.tb-waiting .tb-step-item-content {
  opacity: .8;
}

.tb-step-item-header {
  position: relative;
  margin-bottom: 1em;
}

.tb-step-item-icon {
  width: 1.6em;
  height: 1.6em;
  border-radius: 50%;
  position: relative;
  text-align: center;
  line-height: 1.6em;
  color: #fff;
  font-weight: 500;
}

.tb-step-item-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  border-top: 1px solid #dddee1;
}

.tb-step-item-content {
  padding-right: 15px;
}

.tb-step-title {
  font-weight: 500;
  margin: 0;
  font-size: 1.2em;
}

.tb-step-title > small {
  font-weight: normal;
  opacity: .8;
}

.tb-step-content {
  font-weight: normal;
  margin: 0;
}
`
      ],
      editModeStyles: [
        `
.tb-step-item-add {
  position: absolute;
  right:0;
  top: 0;
  display: none;
  cursor: pointer;
}

.tb-step-item-add:hover {
  transform: scale(1.2);
}

.tb-step-item-add:after {
  content: "+"
}
.tb-step-item:hover .tb-step-item-add {
  display: block;
}

.tb-step-item-icon {
  cursor: pointer;
}
`
      ]
    },
    match(r) {
      return r.nodeName.toLowerCase() === 'tb-step'
    },
    read(r, t, e) {
      return Fs.createInstance(t, {
        state: { step: Number(r.getAttribute('step')) || 0 },
        slots: Array.from(r.children).map(s =>
          e(
            new T([b.BlockComponent, b.InlineComponent, b.Text]),
            s.querySelector('.tb-step-item-content')
          )
        )
      })
    }
  }
var Ei =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, s) {
      var n = arguments.length,
        o = n < 3 ? t : s === null ? (s = Object.getOwnPropertyDescriptor(t, e)) : s,
        i
      if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
        o = Reflect.decorate(r, t, e, s)
      else
        for (var a = r.length - 1; a >= 0; a--)
          (i = r[a]) && (o = (n < 3 ? i(o) : n > 3 ? i(t, e, o) : i(t, e)) || o)
      return n > 3 && o && Object.defineProperty(t, e, o), o
    },
  Ti =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
        return Reflect.metadata(r, t)
    }
let nn = class extends wn {
  constructor(t, e) {
    super(), (this.renderer = t), (this.selection = e)
  }
  getRects(t) {
    const { focusSlot: e, anchorSlot: s } = t,
      n = this.selection.getPathsBySlot(e),
      o = this.selection.getPathsBySlot(s),
      i = P.compareSelectionPaths(n, o)
    let a, l
    i ? ((a = e), (l = s)) : ((a = s), (l = e))
    const c = P.getCommonAncestorComponent(a, l)
    if ((c == null ? void 0 : c.name) !== ce.name) return !1
    const h = Ue(c, a),
      u = Ue(c, l),
      d = c.state,
      { startPosition: f, endPosition: p } = Tn(h, u, c, d.columnCount),
      m = this.renderer,
      g = m.getNativeNodeByVNode(m.getVNodeBySlot(f.cell)).getBoundingClientRect(),
      x = m.getNativeNodeByVNode(m.getVNodeBySlot(p.cell)).getBoundingClientRect()
    return [
      {
        left: g.left,
        top: g.top,
        width: x.left + x.width - g.left,
        height: x.top + x.height - g.top
      }
    ]
  }
}
nn = Ei([j(), Ti('design:paramtypes', [nt, P])], nn)
const ce = K({
    type: b.BlockComponent,
    name: 'TableComponent',
    separable: !1,
    setup(
      r = {
        slots: Array.from({ length: 9 })
          .fill(null)
          .map(() => dt()),
        state: { columnCount: 3, rowCount: 3, useTextbusStyle: !1 }
      }
    ) {
      var t
      let e = Ve(r.slots || [], r.state.columnCount)
      const s = G(),
        n = s.get(R),
        o = s.get(P),
        i = s.get(L)
      let a = {
        columnCount: e[0].map(m => m.state.colspan).reduce((m, g) => m + g, 0),
        useTextbusStyle:
          ((t = r.state) === null || t === void 0 ? void 0 : t.useTextbusStyle) || !1,
        rowCount: e.length
      }
      const l = ut(a)
      l.onChange.subscribe(m => {
        a = m
      })
      const c = kt(),
        h = Z(e.flat())
      let u,
        d,
        f = !1
      Lo(h, l, a, m => {
        ;(u = m.startPosition), (d = m.endPosition)
        const g = m.selectedCells.length > 1
        g !== f && ((f = g), c.changeMarker.forceMarkDirtied())
      }),
        ms(m => {
          m.preventDefault()
        }),
        Ae(m => {
          m.useMenus([
            {
              iconClasses: ['textbus-icon-table'],
              label: n.get('components.tableComponent.contextMenuLabel'),
              submenu: [
                {
                  iconClasses: ['textbus-icon-table-add-column-left'],
                  label: n.get('components.tableComponent.addColumnToLeft'),
                  onClick() {
                    p.addColumnToLeft()
                  }
                },
                {
                  iconClasses: ['textbus-icon-table-add-column-right'],
                  label: n.get('components.tableComponent.addColumnToRight'),
                  onClick() {
                    p.addColumnToRight()
                  }
                },
                {
                  iconClasses: ['textbus-icon-table-add-row-top'],
                  label: n.get('components.tableComponent.insertRowBefore'),
                  onClick() {
                    p.addRowToTop()
                  }
                },
                {
                  iconClasses: ['textbus-icon-table-add-row-bottom'],
                  label: n.get('components.tableComponent.insertRowAfter'),
                  onClick() {
                    p.addRowToBottom()
                  }
                },
                {
                  iconClasses: ['textbus-icon-table-delete-column-left'],
                  label: n.get('components.tableComponent.deleteColumns'),
                  onClick() {
                    p.deleteColumns()
                  }
                },
                {
                  iconClasses: ['textbus-icon-table-delete-row-top'],
                  label: n.get('components.tableComponent.deleteRows'),
                  onClick() {
                    p.deleteRows()
                  }
                },
                {
                  iconClasses: ['textbus-icon-table-split-columns'],
                  label: n.get('components.tableComponent.mergeCells'),
                  onClick() {
                    p.mergeCells()
                  }
                },
                {
                  iconClasses: ['textbus-icon-table'],
                  label: n.get('components.tableComponent.splitCells'),
                  onClick() {
                    p.splitCells()
                  }
                }
              ]
            },
            {
              iconClasses: ['textbus-icon-table-remove'],
              label: n.get('components.tableComponent.contextMenuRemoveTable'),
              onClick() {
                i.removeComponent(c)
              }
            }
          ])
        })
      const p = {
        mergeCells() {
          if (!u || !d) return
          const m = It(e),
            g = u.rowIndex,
            x = u.columnIndex,
            S = d.rowIndex + 1,
            N = d.columnIndex + 1,
            E = m
              .slice(g, S)
              .map(O =>
                O.cellsPosition.slice(x, N).filter(A => A.offsetRow === 0 && A.offsetColumn === 0)
              )
              .reduce((O, A) => O.concat(A)),
            k = E.shift()
          k.cell.updateState(O => {
            ;(O.rowspan = S - g), (O.colspan = N - x)
          }),
            E.forEach(O => {
              var A
              h.remove(O.cell)
              const B = O.cell.getContentAtIndex(O.cell.length - 1)
              if (
                O.cell.isEmpty ||
                (O.cell.length === 1 &&
                  typeof B != 'string' &&
                  ((A = B.slots.last) === null || A === void 0 ? void 0 : A.isEmpty))
              )
                return
              const _ = k.cell,
                V = _.isEmpty ? 0 : _.length
              _.retain(V), O.cell.cutTo(_), _.retain(V)
            })
          const w = k.cell.getContentAtIndex(k.cell.length - 1)
          if (typeof w != 'string') {
            const O = w.slots.first
            o.setPosition(O, O.length)
          } else o.setPosition(k.cell, 0)
        },
        splitCells() {
          if (!u || !d) return
          const m = It(e),
            g = u.rowIndex,
            x = u.columnIndex,
            S = d.rowIndex + 1,
            N = d.columnIndex + 1,
            E = m.map((w, O) =>
              O < g || O >= S
                ? w.cellsPosition.map(A => A.cell)
                : w.cellsPosition.map((A, B) => {
                    if (B < x || B >= N) return A.cell
                    if (A.offsetRow === 0 && A.offsetColumn === 0) {
                      const _ = A.cell.state
                      return (
                        (_.rowspan > 1 || _.colspan > 1) &&
                          A.cell.updateState(V => {
                            ;(V.rowspan = 1), (V.colspan = 1)
                          }),
                        A.cell
                      )
                    }
                    return dt()
                  })
            )
          Array.from(new Set(E.flat())).forEach((w, O) => {
            h.get(O) !== w && h.insertByIndex(w, O)
          })
        },
        deleteColumns() {
          if (!u || !d) return
          const m = u.columnIndex,
            g = d.columnIndex
          p.deleteColumnByIndex(m, g)
        },
        deleteRows() {
          if (!u || !d) return
          const m = u.rowIndex,
            g = d.rowIndex
          p.deleteRowByIndex(m, g)
        },
        addRowToBottom() {
          !u || !d || this.insertRow(d.rowIndex + 1)
        },
        addRowToTop() {
          !u || !d || this.insertRow(u.rowIndex)
        },
        addColumnToRight() {
          !u || !d || this.insertColumn(d.columnIndex + 1)
        },
        addColumnToLeft() {
          !u || !d || this.insertColumn(u.columnIndex)
        },
        deleteColumnByIndex(m, g) {
          var x, S
          if (a.columnCount === 1) {
            ;(x = c.parent) === null || x === void 0 || x.removeComponent(c)
            return
          }
          const N = It(e)
          l.update(E => {
            E.columnCount = a.columnCount - (g - m + 1)
          }),
            N.forEach(E => {
              for (let k = m; k <= g; k++) {
                const w = E.cellsPosition[k],
                  O = w.columnIndex - w.offsetColumn
                if (O < m)
                  O + w.cell.state.colspan > g
                    ? w.cell.updateState(A => {
                        A.colspan = w.cell.state.colspan - (g - m + 1)
                      })
                    : w.cell.updateState(A => {
                        A.colspan = m - w.columnIndex
                      })
                else if (O + w.cell.state.colspan - 1 > g)
                  w.cell.updateState(A => {
                    A.colspan = w.cell.state.colspan - (g - m + 1)
                  }),
                    w.cell.cut()
                else {
                  const A = w.row.indexOf(w.cell)
                  A > -1 && w.row.splice(A, 1), h.remove(w.cell)
                }
              }
            }),
            h.length === 0 && ((S = c.parent) === null || S === void 0 || S.removeComponent(c))
        },
        deleteRowByIndex(m, g) {
          var x, S
          if (a.rowCount === 1) {
            ;(x = c.parent) === null || x === void 0 || x.removeComponent(c)
            return
          }
          const N = It(e)
          l.update(E => {
            E.rowCount = a.rowCount - (g - m + 1)
          })
          for (let E = m; E <= g; E++)
            N[E].cellsPosition.forEach(w => {
              const O = w.rowIndex - w.offsetRow
              if (O < m)
                O + w.cell.state.rowspan > g
                  ? w.cell.updateState(A => {
                      A.rowspan = w.cell.state.rowspan - (g - m + 1)
                    })
                  : w.cell.updateState(A => {
                      A.rowspan = m - w.rowIndex
                    })
              else if (O + w.cell.state.rowspan - 1 > g) {
                w.cell.updateState(_ => {
                  _.rowspan = w.cell.state.rowspan - (g - m + 1)
                }),
                  w.cell.cut()
                const B = N[E + 1].cellsPosition.find(_ => _.cell === w.cell)
                B.row.splice(B.row.indexOf(B.cell), 0, w.cell)
              } else h.remove(w.cell)
            })
          h.length === 0 && ((S = c.parent) === null || S === void 0 || S.removeComponent(c))
        },
        insertRow(m) {
          const g = It(e),
            x = []
          if (
            (l.update(E => {
              E.rowCount = a.rowCount + 1
            }),
            m === 0 || m === g.length)
          ) {
            for (let E = 0; E < a.columnCount; E++) x.push(dt())
            m === 0 ? h.insertByIndex(x, 0) : h.insertByIndex(x, h.length)
            return
          }
          const S = g[m]
          S.cellsPosition.forEach(E => {
            E.offsetRow > 0
              ? E.offsetColumn === 0 &&
                E.cell.updateState(k => {
                  k.rowspan = E.cell.state.rowspan + 1
                })
              : x.push(dt())
          }),
            e.splice(e.indexOf(S.cells), 0, x),
            Array.from(new Set(e.flat())).forEach((E, k) => {
              h.get(k) !== E && h.insertByIndex(E, k)
            })
        },
        insertColumn(m) {
          m < 0 && (m = 0), m > a.columnCount && (m = a.columnCount)
          const g = It(e),
            x = g.map(k => k.cellsPosition.map(w => w.cell)),
            S = []
          g.forEach((k, w) => {
            if (m === 0) x[w].unshift(dt())
            else if (m === a.columnCount) x[w].push(dt())
            else {
              const O = k.cellsPosition[m]
              if (O.offsetColumn > 0) {
                if (S.includes(O.cell)) return
                O.cell.updateState(A => {
                  A.colspan = O.cell.state.colspan + 1
                }),
                  S.push(O.cell)
              } else x[w].splice(m, 0, dt())
            }
          })
          const N = x.flat()
          Array.from(new Set(N)).forEach((k, w) => {
            h.get(w) !== k && h.insertByIndex(k, w)
          }),
            l.update(k => {
              k.columnCount = a.columnCount + 1
            }),
            (e = Ve(h.toArray(), a.columnCount))
        },
        render(m) {
          return (
            (e = Ve(h.toArray(), a.columnCount)),
            C.createElement(
              'table',
              {
                class:
                  'tb-table' +
                  (r.state.useTextbusStyle ? ' tb-table-textbus' : '') +
                  (f ? ' td-table-multiple-select' : '')
              },
              C.createElement(
                'tbody',
                null,
                e.map(g =>
                  C.createElement(
                    'tr',
                    null,
                    g.map(x =>
                      m(x, S => {
                        var N, E
                        return C.createElement(
                          'td',
                          {
                            colSpan: (N = x.state) === null || N === void 0 ? void 0 : N.colspan,
                            rowSpan: (E = x.state) === null || E === void 0 ? void 0 : E.rowspan
                          },
                          S
                        )
                      })
                    )
                  )
                )
              )
            )
          )
        }
      }
      return p
    }
  }),
  Ni = {
    resources: {
      styles: [
        `
    .tb-table td,.tb-table th{border-width: 1px; border-style: solid; padding:3px 8px}
   .tb-table {border-spacing: 0; border-collapse: collapse; width: 100%; }
   .tb-table-textbus td, th {border-color: #aaa;}`
      ],
      editModeStyles: [
        '.td-table-multiple-select *::selection{background-color: transparent!important}'
      ]
    },
    match(r) {
      return r.tagName === 'TABLE'
    },
    read(r, t, e) {
      const { tHead: s, tBodies: n, tFoot: o } = r,
        i = [],
        a = []
      s &&
        Array.from(s.rows).forEach(c => {
          const h = []
          i.push(h),
            Array.from(c.cells).forEach(u => {
              const d = dt(u.colSpan, u.rowSpan)
              h.push(d), e(d, u)
            })
        }),
        n &&
          Array.of(...Array.from(n), o || { rows: [] })
            .reduce((c, h) => c.concat(Array.from(h.rows)), [])
            .forEach(c => {
              const h = []
              a.push(h),
                Array.from(c.cells).forEach(u => {
                  const d = dt(u.colSpan, u.rowSpan)
                  h.push(d), e(d, u)
                })
            }),
        a.unshift(...i)
      const l = Po(a)
      return ce.createInstance(t, {
        slots: a.flat(),
        state: {
          useTextbusStyle: r.classList.contains('tb-table-textbus'),
          columnCount: l[0].map(c => c.state.colspan).reduce((c, h) => c + h, 0),
          rowCount: l.length
        }
      })
    }
  },
  Ft = ['primary', 'info', 'success', 'warning', 'danger', 'dark', 'gray'],
  Ri = ['#1296db', '#6ad1ec', '#15bd9a', '#ff9900', '#E74F5E', '#495060', '#bbbec4']
function ns(r, t = 'primary') {
  const e = new T([b.BlockComponent, b.Text, b.InlineComponent], { type: t }),
    s = ie.createInstance(r)
  s.slots.first.insert('\u65F6\u95F4\u4E3B\u9898', [
    [Nt, '18px'],
    [wt, !0]
  ]),
    s.slots.first.insert(' 2020-02-02', [
      [Nt, '15px'],
      [Ge, '#777']
    ])
  const n = z.createInstance(r)
  return n.slots.first.insert('\u63CF\u8FF0\u4FE1\u606F...'), e.insert(s), e.insert(n), e
}
const _s = K({
    type: b.BlockComponent,
    name: 'TimelineComponent',
    setup(r) {
      const t = G(),
        e = Z((r == null ? void 0 : r.slots) || [ns(t)])
      return (
        e.length === 0 && e.push(ns(t)),
        {
          render(s, n) {
            return C.createElement(
              'tb-timeline',
              null,
              e.toArray().map(o => {
                const i = o.state.type,
                  a = ['tb-timeline-item']
                return (
                  i && a.push('tb-timeline-item-' + i),
                  C.createElement(
                    'div',
                    { class: a.join(' ') },
                    C.createElement('div', { class: 'tb-timeline-line' }),
                    C.createElement('div', {
                      class: 'tb-timeline-icon',
                      title: n === X.Editing ? null : '\u70B9\u51FB\u5207\u6362\u989C\u8272',
                      onClick: () => {
                        i
                          ? o.updateState(l => {
                              l.type = Ft[Ft.indexOf(i) + 1] || null
                            })
                          : o.updateState(l => {
                              l.type = Ft[0]
                            })
                      }
                    }),
                    n === X.Editing &&
                      C.createElement('span', {
                        class: 'tb-timeline-add',
                        onClick: () => {
                          const l = e.indexOf(o) + 1
                          e.insertByIndex(ns(t, i), l)
                        }
                      }),
                    s(o, l => C.createElement('div', { class: 'tb-timeline-content' }, l))
                  )
                )
              })
            )
          }
        }
      )
    }
  }),
  Ai = {
    resources: {
      styles: [
        `
tb-timeline {
  display: block;
  padding-top: 1em;
  padding-left: 5px;
}
.tb-timeline-item {
  display: block;
  position: relative;
  padding-left: 1.5em;
  padding-bottom: 0.5em;
  opacity: .76;
}

.tb-timeline-item:first-of-type > .tb-timeline-line{
  top: 1em;
}

.tb-timeline-item:last-of-type > .tb-timeline-line{
  bottom: calc(100% - 1em);
}

.tb-timeline-line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  border-left: 1px solid #dddee1;
}

.tb-timeline-icon {
  box-sizing: border-box;
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  left: -4px;
  top: .5em;
  background-color: #fff;
  border: 1px solid #bbbec4;
}

` +
          Ri.map(
            (r, t) => `
  .tb-timeline-item-${Ft[t]} {
    opacity: 1;
  }
  .tb-timeline-item-${Ft[t]} >.tb-timeline-icon {
    border-color: ${r};
    background-color: ${r};
  }
  .tb-timeline-item-${Ft[t]} >.tb-timeline-line {
    border-color: ${r};
  }
  `
          ).join(`
`)
      ],
      editModeStyles: [
        `
.tb-timeline-icon:hover {
  transform: scale(1.2);
  cursor: pointer;
}
.tb-timeline-add {
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
}
.tb-timeline-add:before {
  content: "+";
}
.tb-timeline-add:hover {
  transform: scale(1.2);
}

.tb-timeline-item:hover .tb-timeline-add {
  display: block;
}
.tb-timeline-content {
  overflow: hidden;
}
`
      ]
    },
    match(r) {
      return r.nodeName.toLowerCase() === 'tb-timeline'
    },
    read(r, t, e) {
      return _s.createInstance(t, {
        slots: Array.from(r.children).map(s => {
          let n = 'primary'
          for (const i of Ft)
            if (s.classList.contains('tb-timeline-item-' + i)) {
              n = i
              break
            }
          const o = new T([b.InlineComponent, b.Text, b.BlockComponent], { type: n })
          return e(o, s.querySelector('div.tb-timeline-content') || document.createElement('div'))
        })
      })
    }
  },
  Ne = K({
    type: b.BlockComponent,
    name: 'TodolistComponent',
    separable: !0,
    zenCoding: {
      match: /^-\s\[(x|\s)?\\]$/,
      key: ' ',
      generateInitData(r) {
        const t = r.charAt(3) === 'x'
        return { slots: [new T([b.Text, b.InlineComponent], { active: t, disabled: !1 })] }
      }
    },
    setup(r) {
      const { Text: t, InlineComponent: e } = b,
        s = Z(r.slots || [new T([t, e])])
      s.length === 0 && s.push(new T([t, e]))
      const n = G(),
        o = kt(),
        i = n.get(P),
        a = n.get(L)
      fe(h => {
        const u = h.target,
          d = h.data.index
        if ((h.preventDefault(), u.isEmpty && d === 0 && s.length > 1 && u === s.last)) {
          const f = z.createInstance(n)
          a.insertAfter(f, o), s.remove(u)
          const p = f.slots.get(0)
          i.setPosition(p, 0)
        } else {
          const f = u.cut(d)
          s.insertAfter(f, u), i.setPosition(f, 0)
        }
      })
      const l = [
        { active: !1, disabled: !1 },
        { active: !0, disabled: !1 },
        { active: !1, disabled: !0 },
        { active: !0, disabled: !0 }
      ]
      function c(h, u) {
        for (let d = 0; d < 4; d++) {
          const f = l[d]
          if (f.active === h && f.disabled === u) return d
        }
        return -1
      }
      return {
        render(h) {
          return C.createElement(
            'tb-todolist',
            null,
            s.toArray().map(u => {
              const d = u.state,
                f = ['tb-todolist-state']
              return (
                d.active && f.push('tb-todolist-state-active'),
                d.disabled && f.push('tb-todolist-state-disabled'),
                C.createElement(
                  'div',
                  { class: 'tb-todolist-item' },
                  C.createElement(
                    'div',
                    { class: 'tb-todolist-btn' },
                    C.createElement('div', {
                      class: f.join(' '),
                      onClick: () => {
                        const p = (c(d.active, d.disabled) + 1) % 4,
                          m = l[p]
                        u.updateState(g => {
                          ;(g.active = m.active), (g.disabled = m.disabled)
                        })
                      }
                    })
                  ),
                  h(u, p => C.createElement('div', { class: 'tb-todolist-content' }, p))
                )
              )
            })
          )
        }
      }
    }
  }),
  Oi = {
    resources: {
      styles: [
        `
tb-todolist {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
}
.tb-todolist-item {
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  display: flex;
}
.tb-todolist-btn {
  margin-right: 0.6em;
}
.tb-todolist-state {
  display: inline-block;
  margin-top: 3px;
  width: 12px;
  height: 12px;
  border: 2px solid #1296db;
  background: #fff;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
}
.tb-todolist-state:after {
  content: "";
  position: absolute;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  box-sizing: content-box;
  left: 3px;
  top: 1px;
  width: 4px;
  height: 6px;
  transform: rotateZ(45deg);
}
.tb-todolist-state-active:after {
  border-color: #1296db;
}
.tb-todolist-state-disabled {
  opacity: 0.5;
}
.tb-todolist-content {
  flex: 1;
}
`
      ]
    },
    match(r) {
      return r.nodeName.toLowerCase() === 'tb-todolist'
    },
    read(r, t, e) {
      const s = Array.from(r.children).map(n => {
        const o = n.querySelector('.tb-todolist-state')
        return {
          childSlot: n.querySelector('.tb-todolist-content'),
          slot: new T([b.Text, b.InlineComponent], {
            active: !!(o != null && o.classList.contains('tb-todolist-state-active')),
            disabled: !!(o != null && o.classList.contains('tb-todolist-state-disabled'))
          })
        }
      })
      return Ne.createInstance(t, { slots: s.map(n => e(n.slot, n.childSlot)) })
    }
  },
  ke = K({
    name: 'VideoComponent',
    type: b.InlineComponent,
    setup(r) {
      let t = (r == null ? void 0 : r.state) || {
        src: '',
        autoplay: !1,
        controls: !0,
        width: '100%',
        height: ''
      }
      const e = ut(t)
      e.onChange.subscribe(n => {
        t = n
      })
      const s = ps()
      return (
        kn(s, n => {
          t = e.update(o => {
            Object.assign(o, n)
          })
        }),
        {
          render() {
            return C.createElement('video', {
              src: t.src,
              ref: s,
              autoPlay: t.autoplay,
              controls: t.controls,
              style: { width: t.width, height: t.height }
            })
          },
          mergeProps(n) {
            t = e.update(o => {
              Object.assign(o, n)
            })
          }
        }
      )
    }
  }),
  Ii = {
    match(r) {
      return r.nodeName.toLowerCase() === 'video'
    },
    read(r, t) {
      return ke.createInstance(t, {
        state: {
          src: r.src,
          width: r.style.width || r.width + '',
          height: r.style.height || r.height + '',
          autoplay: r.autoplay,
          controls: r.controls
        }
      })
    }
  },
  Ms = K({
    type: b.BlockComponent,
    name: 'WordExplainComponent',
    separable: !1,
    setup(r) {
      const t = Z((r == null ? void 0 : r.slots) || [])
      let e = (r == null ? void 0 : r.state) || { width: '140px' }
      for (; t.length < 3; ) t.push(new T([b.Text, b.InlineComponent]))
      const s = ut(e),
        n = s.onChange.subscribe(d => {
          e = d
        }),
        o = G(),
        i = o.get(L),
        a = o.get(R),
        l = o.get(xt),
        c = kt()
      pt(() => {
        n.unsubscribe()
      }),
        ms(d => {
          d.preventDefault()
        })
      const h = a.getContext('components.wordExplainComponent.setter')
      function u() {
        const d = new Ct({
          title: h.get('title'),
          confirmBtnText: h.get('confirmBtnText'),
          cancelBtnText: h.get('cancelBtnText'),
          items: [
            new at({
              name: 'width',
              value: e.width,
              placeholder: h.get('widthInputPlaceholder'),
              label: h.get('widthLabel')
            })
          ]
        })
        l.show(d.elementRef)
        const f = d.onComplete.subscribe(p => {
          s.update(m => {
            m.width = p.width
          }),
            l.hide(),
            f.unsubscribe()
        })
        f.add(
          d.onCancel.subscribe(() => {
            l.hide(), f.unsubscribe()
          })
        )
      }
      return (
        Ae(d => {
          d.useMenus([
            {
              label: h.get('title'),
              onClick() {
                u()
              }
            }
          ])
        }),
        {
          render(d, f) {
            return C.createElement(
              'tb-word-explain',
              null,
              C.createElement(
                'div',
                { class: 'tb-word-explain-title-group', style: { width: e.width } },
                d(t.get(0), p => C.createElement('div', { class: 'tb-word-explain-title' }, p)),
                d(t.get(1), p => C.createElement('div', { class: 'tb-word-explain-subtitle' }, p))
              ),
              d(t.get(2), p => C.createElement('div', { class: 'tb-word-explain-detail' }, p)),
              f === X.Editing &&
                C.createElement('span', {
                  class: 'tb-word-explain-close',
                  onClick: () => {
                    i.removeComponent(c)
                  }
                })
            )
          }
        }
      )
    }
  }),
  Pi = {
    resources: {
      styles: [
        `
tb-word-explain {
  display: flex;
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 10px 20px;
  background-color: #f8f8f9;
  border-radius: 10px;
}

.tb-word-explain-title-group {
  width: 140px;
  padding-right: 20px;
}
.tb-word-explain-title {
  margin:0;
  font-size: inherit;
}
.tb-word-explain-subtitle {
  margin: 0;
  font-weight: 300;
  font-size: 0.9em;
}
.tb-word-explain-detail {
  flex: 1;
  padding-left: 20px;
  border-left: 1px solid #ddd;
}
@media screen and (max-width: 767px) {
  tb-word-explain {
    display: block;
  }
  .tb-word-explain-title-group {
    width: auto !important;
    padding-right: 0;
    display: flex;
    align-items: baseline;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
  }
  .tb-word-explain-subtitle {
    margin-left: 0.5em;
    font-weight: 300;
    font-size: 0.9em;
  }
  .tb-word-explain-detail {
    padding-left: 0;
    border-left: none;
  }
}
`
      ],
      editModeStyles: [
        `
tb-word-explain {
  position: relative;
}
tb-word-explain:hover .tb-word-explain-close {
  display: block;
}
.tb-word-explain-close {
  display: none;
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
}
.tb-word-explain-close:hover {
  transform: scale(1.2);
}
.tb-word-explain-close:before {
  content: "\xD7";
}
`
      ]
    },
    match(r) {
      return r.nodeName.toLowerCase() === 'tb-word-explain'
    },
    read(r, t, e) {
      const s = r.querySelector('.tb-word-explain-title'),
        n = r.querySelector('.tb-word-explain-subtitle'),
        o = r.querySelector('.tb-word-explain-detail'),
        { Text: i, InlineComponent: a } = b,
        l = new T([i, a]),
        c = new T([i, a]),
        h = new T([i, a]),
        u = r.querySelector('.tb-word-explain-title-group').style.width
      return (
        e(l, s), e(c, n), e(h, o), Ms.createInstance(t, { state: { width: u }, slots: [l, c, h] })
      )
    }
  },
  Li = {
    editor: {
      noSelection: '\u8BF7\u5148\u9009\u62E9\u63D2\u5165\u8D44\u6E90\u4F4D\u7F6E\uFF01',
      copy: '\u590D\u5236',
      paste: '\u7C98\u8D34',
      cut: '\u526A\u5207',
      selectAll: '\u5168\u9009',
      insertParagraphAfter: '\u5728\u540E\u9762\u63D2\u5165\u6BB5\u843D',
      insertParagraphBefore: '\u5728\u524D\u9762\u63D2\u5165\u6BB5\u843D',
      input: { canNotAccessClipboard: '\u65E0\u6CD5\u8BBF\u95EE\u526A\u5207\u677F\uFF01' },
      noUploader:
        '\u4F60\u6CA1\u6709\u5728\u7F16\u8F91\u5668\u7684\u914D\u7F6E\u9879\u4E2D\u6DFB\u52A0 uploader \u65B9\u6CD5\uFF01'
    },
    plugins: {
      toolbar: {
        audioTool: {
          tooltip: '\u97F3\u9891',
          view: {
            title: '\u97F3\u9891\u8BBE\u7F6E',
            addressLabel: '\u97F3\u9891\u94FE\u63A5\u5730\u5740',
            addressPlaceholder: '\u8BF7\u8F93\u5165\u94FE\u63A5\u5730\u5740',
            uploadBtnText: '\u4E0A\u4F20\u65B0\u97F3\u9891',
            errorMessage: '\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A',
            switchLabel: '\u81EA\u52A8\u64AD\u653E',
            confirmBtnText: '\u786E\u5B9A',
            cancelBtnText: '\u53D6\u6D88'
          }
        },
        blockBackgroundColorTool: {
          tooltip: '\u5757\u80CC\u666F\u989C\u8272',
          view: { btnText: '\u786E\u5B9A' }
        },
        blockMarginTool: {
          label: '\u5757\u5916\u8FB9\u8DDD',
          tooltip: '\u5757\u5916\u8FB9\u8DDD',
          view: {
            topLabel: '\u4E0A\u8FB9\u8DDD',
            topPlaceholder: '\u8BF7\u8F93\u5165\u4E0A\u8FB9\u8DDD',
            rightLabel: '\u53F3\u8FB9\u8DDD',
            rightPlaceholder: '\u8BF7\u8F93\u5165\u53F3\u8FB9\u8DDD',
            bottomLabel: '\u4E0B\u8FB9\u8DDD',
            bottomPlaceholder: '\u8BF7\u8F93\u5165\u4E0B\u8FB9\u8DDD',
            leftLabel: '\u5DE6\u8FB9\u8DDD',
            leftPlaceholder: '\u8BF7\u8F93\u5165\u5DE6\u8FB9\u8DDD',
            confirmBtnText: '\u786E\u5B9A',
            cancelBtnText: '\u53D6\u6D88'
          }
        },
        blockPaddingTool: {
          label: '\u5757\u5185\u8FB9\u8DDD',
          tooltip: '\u5757\u5185\u8FB9\u8DDD',
          view: {
            topLabel: '\u4E0A\u8FB9\u8DDD',
            topPlaceholder: '\u8BF7\u8F93\u5165\u4E0A\u8FB9\u8DDD',
            rightLabel: '\u53F3\u8FB9\u8DDD',
            rightPlaceholder: '\u8BF7\u8F93\u5165\u53F3\u8FB9\u8DDD',
            bottomLabel: '\u4E0B\u8FB9\u8DDD',
            bottomPlaceholder: '\u8BF7\u8F93\u5165\u4E0B\u8FB9\u8DDD',
            leftLabel: '\u5DE6\u8FB9\u8DDD',
            leftPlaceholder: '\u8BF7\u8F93\u5165\u5DE6\u8FB9\u8DDD',
            confirmBtnText: '\u786E\u5B9A',
            cancelBtnText: '\u53D6\u6D88'
          }
        },
        blockquoteTool: { tooltip: '\u5F15\u7528' },
        formatPainterTool: { tooltip: '\u683C\u5F0F\u5237' },
        boldTool: { tooltip: '\u52A0\u7C97' },
        cleanTool: { tooltip: '\u6E05\u9664\u683C\u5F0F' },
        codeTool: { tooltip: '\u4EE3\u7801' },
        colorTool: {
          tooltip: '\u6587\u5B57\u989C\u8272',
          view: {
            btnText: '\u786E\u5B9A',
            recentText: '\u6700\u8FD1\u4F7F\u7528',
            backText: '\u8FD4\u56DE',
            paletteText: '\u8C03\u8272\u76D8'
          }
        },
        emojiTool: { tooltip: '\u8868\u60C5' },
        findTool: {
          tooltip: '\u67E5\u627E\u4E0E\u66FF\u6362',
          view: {
            findLabel: '\u67E5\u627E',
            findPlaceholder: '\u8BF7\u8F93\u5165\u67E5\u627E\u5185\u5BB9',
            nextBtnText: '\u4E0B\u4E00\u4E2A',
            replaceLabel: '\u66FF\u6362',
            replacePlaceholder: '\u66FF\u6362\u6210',
            replaceBtnText: '\u66FF\u6362',
            replaceAllBtnText: '\u5168\u90E8\u66FF\u6362'
          }
        },
        fontFamilyTool: { tooltip: '\u5B57\u4F53', defaultFamilyText: '\u9ED8\u8BA4\u5B57\u4F53' },
        fontSizeTool: { tooltip: '\u5B57\u4F53\u5927\u5C0F', defaultSizeText: '\u9ED8\u8BA4' },
        headingTool: {
          tooltip: '\u6BB5\u843D\u4E0E\u6807\u9898',
          h1: '\u6807\u98981',
          h2: '\u6807\u98982',
          h3: '\u6807\u98983',
          h4: '\u6807\u98984',
          h5: '\u6807\u98985',
          h6: '\u6807\u98986',
          div: 'div',
          paragraph: '\u6B63\u6587'
        },
        historyBackTool: { tooltip: '\u64A4\u9500' },
        historyForwardTool: { tooltip: '\u91CD\u505A' },
        imageTool: {
          tooltip: '\u56FE\u7247',
          view: {
            linkLabel: '\u56FE\u7247\u94FE\u63A5\u5730\u5740',
            linkInputPlaceholder: '\u8BF7\u8F93\u5165\u94FE\u63A5\u5730\u5740',
            uploadLabel: '\u4E0A\u4F20\u56FE\u7247',
            uploadBtnText: ' \u70B9\u51FB\u4E0A\u4F20',
            confirmBtnText: '\u786E\u5B9A'
          }
        },
        inlineMarginTool: {
          label: '\u5916\u8FB9\u8DDD',
          tooltip: '\u5916\u8FB9\u8DDD',
          view: {
            topLabel: '\u4E0A\u8FB9\u8DDD',
            topPlaceholder: '\u8BF7\u8F93\u5165\u4E0A\u8FB9\u8DDD',
            rightLabel: '\u53F3\u8FB9\u8DDD',
            rightPlaceholder: '\u8BF7\u8F93\u5165\u53F3\u8FB9\u8DDD',
            bottomLabel: '\u4E0B\u8FB9\u8DDD',
            bottomPlaceholder: '\u8BF7\u8F93\u5165\u4E0B\u8FB9\u8DDD',
            leftLabel: '\u5DE6\u8FB9\u8DDD',
            leftPlaceholder: '\u8BF7\u8F93\u5165\u5DE6\u8FB9\u8DDD',
            confirmBtnText: '\u786E\u5B9A',
            cancelBtnText: '\u53D6\u6D88'
          }
        },
        inlinePaddingTool: {
          label: '\u5185\u8FB9\u8DDD',
          tooltip: '\u5185\u8FB9\u8DDD',
          view: {
            topLabel: '\u4E0A\u8FB9\u8DDD',
            topPlaceholder: '\u8BF7\u8F93\u5165\u4E0A\u8FB9\u8DDD',
            rightLabel: '\u53F3\u8FB9\u8DDD',
            rightPlaceholder: '\u8BF7\u8F93\u5165\u53F3\u8FB9\u8DDD',
            bottomLabel: '\u4E0B\u8FB9\u8DDD',
            bottomPlaceholder: '\u8BF7\u8F93\u5165\u4E0B\u8FB9\u8DDD',
            leftLabel: '\u5DE6\u8FB9\u8DDD',
            leftPlaceholder: '\u8BF7\u8F93\u5165\u5DE6\u8FB9\u8DDD',
            confirmBtnText: '\u786E\u5B9A',
            cancelBtnText: '\u53D6\u6D88'
          }
        },
        insertObjectTool: {
          sourceCode: '\u6E90\u4EE3\u7801',
          lineHeight: '\u884C\u9AD8',
          letterSpacing: '\u5B57\u95F4\u8DDD',
          blockBackgroundColor: '\u533A\u5757\u80CC\u666F\u989C\u8272',
          emoji: '\u8868\u60C5',
          audio: '\u97F3\u9891...',
          video: '\u89C6\u9891...',
          subscript: '\u4E0B\u6807',
          superscript: '\u4E0A\u6807',
          code: 'Code',
          blockquote: '\u5F15\u7528',
          leftToRight: '\u4ECE\u5DE6\u5411\u53F3',
          rightToLeft: '\u4ECE\u53F3\u5411\u5DE6'
        },
        insertParagraphAfterTool: { tooltip: '\u5728\u540E\u9762\u63D2\u5165\u6BB5\u843D' },
        insertParagraphBeforeTool: { tooltip: '\u5728\u524D\u9762\u63D2\u5165\u6BB5\u843D' },
        italicTool: { tooltip: '\u659C\u4F53' },
        leftToRightTool: { tooltip: '\u4ECE\u5DE6\u5411\u53F3' },
        letterSpacingTool: { tooltip: '\u5B57\u95F4\u8DDD', defaultValueLabel: '\u9ED8\u8BA4' },
        lineHeightTool: { tooltip: '\u884C\u9AD8', defaultValueLabel: '\u9ED8\u8BA4' },
        linkTool: {
          tooltip: '\u8D85\u94FE\u63A5',
          view: {
            linkLabel: '\u8DF3\u8F6C\u94FE\u63A5\u5730\u5740',
            linkInputPlaceholder: '\u8BF7\u8F93\u5165\u94FE\u63A5\u5730\u5740',
            jumpLabel: '\u8DF3\u8F6C\u65B9\u5F0F',
            jumpSelfLabel: '\u5F53\u524D\u7A97\u53E3',
            jumpBlankLabel: '\u65B0\u7A97\u53E3',
            invalidMessage: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u94FE\u63A5\u5730\u5740'
          }
        },
        olTool: { tooltip: '\u6709\u5E8F\u5217\u8868' },
        preTool: { tooltip: '\u4EE3\u7801\u5757', defaultLang: '\u5176\u5B83' },
        rightToLeftTool: { tooltip: '\u4ECE\u53F3\u5411\u5DE6' },
        strikeThrough: { tooltip: '\u5220\u9664\u7EBF' },
        subscript: { tooltip: '\u4E0B\u6807' },
        superscript: { tooltip: '\u4E0A\u6807' },
        tableTool: {
          tooltip: '\u8868\u683C',
          createTable: '\u521B\u5EFA\u8868\u683C',
          editTable: '\u7F16\u8F91\u8868\u683C',
          cellBorderColor: '\u8BBE\u7F6E\u5355\u5143\u683C\u8FB9\u6846\u989C\u8272',
          deleteTable: '\u5220\u9664\u8868\u683C'
        },
        tableAddTool: {
          tooltip: '\u63D2\u5165\u8868\u683C',
          view: {
            confirmBtnText: '\u786E\u5B9A',
            rowLabel: '\u8868\u683C\u884C\u6570',
            rowPlaceholder: '\u8BF7\u8F93\u5165\u8868\u683C\u884C\u6570',
            columnLabel: '\u8868\u683C\u5217\u6570',
            columnPlaceholder: '\u8BF7\u8F93\u5165\u8868\u683C\u5217\u6570',
            useTextbusStyleLabel: '\u4F7F\u7528 Textbus \u6837\u5F0F'
          }
        },
        tableEditTool: {
          tooltip: '\u7F16\u8F91\u8868\u683C',
          addColumnToLeft: '\u5728\u5DE6\u8FB9\u6DFB\u52A0\u5217',
          addColumnToRight: '\u5728\u53F3\u8FB9\u6DFB\u52A0\u5217',
          insertRowBefore: '\u5728\u524D\u9762\u6DFB\u52A0\u884C',
          insertRowAfter: '\u5728\u540E\u9762\u6DFB\u52A0\u884C',
          deleteLeftColumn: '\u5220\u9664\u5DE6\u8FB9\u5217',
          deleteRightColumn: '\u5220\u9664\u53F3\u8FB9\u5217',
          deletePrevRow: '\u5220\u9664\u524D\u4E00\u884C',
          deleteNextRow: '\u5220\u9664\u540E\u4E00\u884C',
          mergeCells: '\u5408\u5E76\u5355\u5143\u683C',
          splitCells: '\u53D6\u6D88\u5408\u5E76\u5355\u5143\u683C'
        },
        tableRemoveTool: { tooltip: '\u5220\u9664\u8868\u683C' },
        tdBorderColorTool: {
          tooltip: '\u8868\u683C\u8FB9\u6846\u989C\u8272',
          view: { confirmBtnText: '\u786E\u5B9A' }
        },
        textAlignTool: {
          tooltip: '\u5BF9\u9F50\u65B9\u5F0F',
          left: '\u5DE6\u5BF9\u9F50',
          right: '\u53F3\u5BF9\u9F50',
          center: '\u5C45\u4E2D\u5BF9\u9F50',
          justify: '\u5206\u6563\u5BF9\u9F50'
        },
        textBackgroundColorTool: {
          tooltip: '\u6587\u5B57\u80CC\u666F\u989C\u8272',
          view: {
            btnText: '\u786E\u5B9A',
            recentText: '\u6700\u8FD1\u4F7F\u7528',
            backText: '\u8FD4\u56DE',
            paletteText: '\u8C03\u8272\u76D8'
          }
        },
        textIndentTool: { tooltip: '\u9996\u884C\u7F29\u8FDB' },
        ulTool: { tooltip: '\u65E0\u5E8F\u5217\u8868' },
        underlineTool: { tooltip: '\u4E0B\u5212\u7EBF' },
        unlinkTool: { tooltip: '\u53D6\u6D88\u8D85\u94FE\u63A5' },
        verticalAlignTool: {
          tooltip: '\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F',
          baseline: '\u57FA\u7EBF\u5BF9\u9F50',
          super: '\u6587\u672C\u4E0A\u6807',
          sub: '\u6587\u672C\u4E0B\u6807',
          top: '\u9876\u7AEF\u5BF9\u9F50',
          middle: '\u5C45\u4E2D',
          bottom: '\u5E95\u7AEF\u5BF9\u9F50',
          textTop: '\u5B57\u4F53\u9876\u7AEF\u5BF9\u9F50',
          textBottom: '\u5B57\u4F53\u5E95\u7AEF\u5BF9\u9F50'
        },
        videoTool: {
          tooltip: '\u89C6\u9891',
          view: {
            title: '\u89C6\u9891\u8BBE\u7F6E',
            confirmBtnText: '\u786E\u5B9A',
            cancelBtnText: '\u53D6\u6D88',
            linkLabel: '\u89C6\u9891\u94FE\u63A5\u5730\u5740',
            linkInputPlaceholder: '\u8BF7\u8F93\u5165\u94FE\u63A5\u5730\u5740',
            uploadBtnText: '\u4E0A\u4F20\u65B0\u89C6\u9891',
            validateErrorMessage: '\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A',
            videoWidthLabel: '\u89C6\u9891\u5BBD\u5EA6',
            videoWidthInputPlaceholder: '\u652F\u6301\u4EFB\u610F CSS \u5355\u4F4D',
            videoHeightLabel: '\u89C6\u9891\u9AD8\u5EA6',
            videoHeightInputPlaceholder: '\u652F\u6301\u4EFB\u610F CSS \u5355\u4F4D',
            autoplayLabel: '\u81EA\u52A8\u64AD\u653E'
          }
        },
        componentsTool: { tooltip: '\u7EC4\u4EF6\u5E93' }
      },
      linkJump: { accessLink: '\u8DF3\u8F6C' },
      pasteHandle: {
        title: '\u8D44\u6E90\u4E0A\u4F20',
        confirmBtnText: '\u786E\u5B9A',
        cancelBtnText: '\u5B8C\u6210',
        uploadBtnText: '\u4E0A\u4F20',
        imageLabel: '\u7B2C {0} \u5F20\u56FE\u7247',
        videoLabel: '\u7B2C {0} \u4E2A\u89C6\u9891',
        audioLabel: '\u7B2C {0} \u4E2A\u97F3\u9891',
        imagePlaceholder: '\u8BF7\u8F93\u5165\u56FE\u7247\u5730\u5740',
        videoPlaceholder: '\u8BF7\u8F93\u5165\u89C6\u9891\u5730\u5740',
        audioPlaceholder: '\u8BF7\u8F93\u5165\u97F3\u9891\u5730\u5740'
      }
    },
    components: {
      imageComponent: {
        contextMenu: {
          title: '\u56FE\u7247\u8BBE\u7F6E',
          linkLabel: '\u56FE\u7247\u94FE\u63A5\u5730\u5740',
          linkInputPlaceholder: '\u8BF7\u8F93\u5165\u94FE\u63A5\u5730\u5740',
          uploadBtnText: '\u4E0A\u4F20',
          validateErrorMessage: '\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A',
          sizeSetter: {
            label: '\u5BBD\u9AD8\u8BBE\u7F6E',
            widthPlaceholder: '\u5BBD\u5EA6',
            heightPlaceholder: '\u9AD8\u5EA6'
          },
          maxSizeSetter: {
            label: '\u6700\u5927\u5C3A\u5BF8',
            widthPlaceholder: '\u5BBD\u5EA6',
            heightPlaceholder: '\u9AD8\u5EA6'
          },
          float: {
            label: '\u6D6E\u52A8\u8BBE\u7F6E',
            noFloatLabel: '\u4E0D\u6D6E\u52A8',
            floatToLeftLabel: '\u5230\u5DE6\u8FB9',
            floatToRightLabel: '\u5230\u53F3\u8FB9'
          },
          marginLabel: '\u8FB9\u8DDD\u8BBE\u7F6E',
          confirmBtnText: '\u786E\u5B9A',
          cancelBtnText: '\u53D6\u6D88'
        }
      },
      tableComponent: {
        addColumnToLeft: '\u5728\u5DE6\u8FB9\u6DFB\u52A0\u5217',
        addColumnToRight: '\u5728\u53F3\u8FB9\u6DFB\u52A0\u5217',
        insertRowBefore: '\u5728\u524D\u9762\u6DFB\u52A0\u884C',
        insertRowAfter: '\u5728\u540E\u9762\u6DFB\u52A0\u884C',
        deleteColumns: '\u5220\u9664\u5217',
        deleteRows: '\u5220\u9664\u884C',
        mergeCells: '\u5408\u5E76\u5355\u5143\u683C',
        splitCells: '\u62C6\u5206\u5355\u5143\u683C',
        contextMenuLabel: '\u8868\u683C',
        contextMenuRemoveTable: '\u5220\u9664\u8868\u683C'
      },
      preComponent: {
        defaultLang: '\u5176\u5B83',
        contextMenuLabel: '\u5207\u6362\u4EE3\u7801\u5757\u8BED\u8A00',
        changeTheme: '\u5207\u6362\u4EE3\u7801\u5757\u4E3B\u9898',
        emphasize: '\u5F3A\u8C03',
        cancelEmphasize: '\u53D6\u6D88\u5F3A\u8C03'
      },
      alertComponent: {
        creator: { name: '\u8B66\u544A\u6846' },
        contextMenu: {
          fill: '\u586B\u5145\u8B66\u544A\u6846',
          noFill: '\u53D6\u6D88\u586B\u5145\u8B66\u544A\u6846',
          type: '\u8B66\u544A\u6846\u98CE\u683C'
        }
      },
      imageCardComponent: {
        creator: { name: '\u5361\u7247' },
        setting: {
          title: '\u5361\u7247\u8BBE\u7F6E',
          srcLabel: '\u56FE\u7247\u5730\u5740',
          srcPlaceholder: '\u8BF7\u8F93\u5165\u56FE\u7247\u5730\u5740',
          heightLabel: '\u56FE\u7247\u9AD8\u5EA6',
          heightPlaceholder: '\u8BF7\u8F93\u5165\u56FE\u7247\u9AD8\u5EA6',
          confirmBtnText: '\u786E\u5B9A',
          cancelBtnText: '\u53D6\u6D88'
        }
      },
      jumbotronComponent: {
        settingBtn: '\u8BBE\u7F6E',
        creator: { name: '\u5DE8\u5E55' },
        setting: {
          name: '\u5DE8\u5E55',
          form: {
            title: '\u5DE8\u5E55\u8BBE\u7F6E',
            confirmBtnText: '\u786E\u5B9A',
            cancelBtnText: '\u53D6\u6D88',
            minHeightLabel: '\u5DE8\u5E55\u6700\u5C0F\u9AD8\u5EA6',
            minHeightInputPlaceholder: '\u8BF7\u8F93\u5165\u5DE8\u5E55\u6700\u5C0F\u9AD8\u5EA6',
            backgroundImageLabel: '\u80CC\u666F\u56FE\u7247\u5730\u5740',
            backgroundImageInputPlaceholder:
              '\u8BF7\u8F93\u5165\u80CC\u666F\u56FE\u7247\u5730\u5740',
            uploadBtnText: '\u4E0A\u4F20\u65B0\u56FE\u7247',
            validateErrorMessage: '\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A'
          }
        }
      },
      katexComponent: {
        creator: { name: '\u6570\u5B66\u516C\u5F0F' },
        setter: {
          title: '\u6570\u5B66\u516C\u5F0F\u8BBE\u7F6E',
          label: '\u6E90\u4EE3\u7801',
          placeholder: '\u8BF7\u8F93\u5165\u4EE3\u7801',
          confirmBtnText: '\u786E\u5B9A',
          cancelBtnText: '\u53D6\u6D88'
        }
      },
      stepsComponent: { creator: { name: '\u6B65\u9AA4\u6761' } },
      timelineComponent: { creator: { name: '\u65F6\u95F4\u8F74' } },
      todoListComponent: { creator: { name: '\u5F85\u529E\u4E8B\u9879\u5217\u8868' } },
      wordExplainComponent: {
        creator: { name: '\u540D\u8BCD\u91CA\u4E49' },
        setter: {
          title: '\u540D\u8BCD\u91CA\u4E49\u8BBE\u7F6E',
          confirmBtnText: '\u786E\u5B9A',
          cancelBtnText: '\u53D6\u6D88',
          widthInputPlaceholder: '\u8BF7\u8F93\u5165\u6807\u9898\u5BBD\u5EA6',
          widthLabel: '\u6807\u9898\u5BBD\u5EA6'
        }
      }
    }
  }
class Bi {
  constructor() {
    ;(this.link = document.createElement('a')), (this.subs = [])
  }
  setup(t) {
    const e = t.get(P),
      s = t.get(ne),
      n = t.get(zt),
      o = t.get(R)
    ;(this.link.innerText = o.get('plugins.linkJump.accessLink') || '\u8DF3\u8F6C'),
      (this.link.target = '_blank'),
      (this.link.className = 'textbus-link-jump-plugin'),
      this.subs.push(
        e.onChange.pipe(rn()).subscribe(() => {
          this.onSelectionChange(document, e, s, n)
        })
      )
  }
  onDestroy() {
    this.subs.forEach(t => t.unsubscribe())
  }
  onSelectionChange(t, e, s, n) {
    var o
    const i = t.getSelection(),
      a = i.rangeCount ? i.getRangeAt(0) : null
    if (a) {
      const l = a.commonAncestorContainer
      if (l) {
        const c = l.nodeType === Node.TEXT_NODE ? l.parentNode : l,
          h = this.getLinkByDOMTree(c)
        if (h && (h.href || h.dataset.href)) {
          this.link.href = h.href || h.dataset.href || ''
          const u = s.getRect({ slot: e.startSlot, offset: e.startOffset }),
            d = n.getBoundingClientRect()
          if (i.isCollapsed)
            Object.assign(this.link.style, {
              left: u.left - d.left + 'px',
              top: u.top - d.top + 'px'
            })
          else {
            const f = s.getRect({ slot: e.endSlot, offset: e.endOffset })
            Object.assign(this.link.style, {
              left: (u.left + f.left) / 2 - d.left + 'px',
              top: u.top - d.top + 'px'
            })
          }
          this.link.parentNode || n.appendChild(this.link)
          return
        }
      }
    }
    ;(o = this.link.parentNode) === null || o === void 0 || o.removeChild(this.link)
  }
  getLinkByDOMTree(t) {
    if (t.nodeType === Node.ELEMENT_NODE) {
      if (t.tagName.toLowerCase() === 'a') return t
      if (t.parentNode) return this.getLinkByDOMTree(t.parentNode)
    }
    return null
  }
}
function Fi(r) {
  const t = y('button', {
      classes: ['textbus-toolbar-button'],
      attrs: { title: r.tooltip || '', type: 'button', 'data-keymap': JSON.stringify(r.keymap) },
      children: [
        y('span', {
          classes: r.iconClasses
            ? [...r.iconClasses, 'textbus-toolbar-button-icon']
            : ['textbus-toolbar-button-icon']
        }),
        y('span', { classes: ['textbus-toolbar-label'], children: [r.label ? U(r.label) : null] })
      ],
      on: {
        click() {
          r.onClick()
        }
      }
    }),
    e = y('span', { classes: ['textbus-toolbar-item'], children: [t] })
  let s = !1,
    n = !1
  return {
    elementRef: e,
    get highlight() {
      return s
    },
    set highlight(o) {
      ;(s = o),
        o
          ? t.classList.add('textbus-toolbar-button-active')
          : t.classList.remove('textbus-toolbar-button-active')
    },
    get disabled() {
      return n
    },
    set disabled(o) {
      ;(n = o), (t.disabled = o)
    }
  }
}
function _i(r, t, e) {
  const s = e.getBoundingClientRect(),
    n = s.left + s.width - (r.getBoundingClientRect().left + t.offsetWidth)
  t.style.left = `${Math.min(0, n)}px`
}
function Ds(r, t, e) {
  const s = y('div', {
      classes: ['textbus-toolbar-dropdown-menu'],
      children: [t],
      on: {
        mousedown(l) {
          l.stopPropagation()
        }
      }
    }),
    n = y('div', {
      classes: ['textbus-toolbar-dropdown'],
      children: [y('div', { classes: ['textbus-toolbar-dropdown-button'], children: [r] }), s]
    })
  function o() {
    n.classList.contains('textbus-toolbar-dropdown-open') || _i(n, s, e)
  }
  const i = I(window, 'resize').subscribe(() => {
      o()
    }),
    a = {
      elementRef: n,
      toggle() {
        if (n.classList.contains('textbus-toolbar-dropdown-open')) {
          a.hide()
          return
        }
        a.open()
      },
      open() {
        o(), n.classList.add('textbus-toolbar-dropdown-open')
      },
      hide() {
        n.classList.remove('textbus-toolbar-dropdown-open')
      },
      destroy() {
        i.unsubscribe()
      }
    }
  return a
}
function Mi(r) {
  const t = r.iconClasses ? y('span', { classes: r.iconClasses }) : null,
    e = r.label ? y('span', { classes: ['textbus-dropdown-label'], children: [U(r.label)] }) : null,
    s = y('button', {
      classes: ['textbus-toolbar-button', 'textbus-toolbar-dropdown-left-button'],
      attrs: { type: 'button' },
      children: [t, e],
      on: {
        click() {
          ;(a = !0), i.hide(), r.onLeftButtonClick()
        }
      }
    }),
    n = y('button', {
      classes: ['textbus-toolbar-button', 'textbus-toolbar-dropdown-right-button'],
      attrs: { type: 'button' },
      children: [y('span', { classes: ['textbus-dropdown-caret'] })],
      on: {
        mousedown() {
          ;(a = !0), i.toggle()
        }
      }
    }),
    o = y('span', {
      classes: ['textbus-toolbar-item', 'textbus-toolbar-dropdown-button-wrap'],
      attrs: { title: r.tooltip || '' },
      children: [s, n]
    }),
    i = Ds(o, r.menuView, r.stickyElement)
  let a = !1
  const l = I(document, 'mousedown').subscribe(() => {
    a || i.hide(), (a = !1)
  })
  let c = !1,
    h = !1
  return {
    elementRef: i.elementRef,
    leftButton: s,
    destroy() {
      l.unsubscribe(), i.destroy()
    },
    hide() {
      i.hide()
    },
    get highlight() {
      return c
    },
    set highlight(u) {
      ;(c = u),
        u
          ? s.classList.add('textbus-toolbar-button-active')
          : s.classList.remove('textbus-toolbar-button-active')
    },
    get disabled() {
      return h
    },
    set disabled(u) {
      ;(h = u), (s.disabled = u), (n.disabled = u)
    }
  }
}
function Dn(r) {
  const t = y('span', {
    classes: ['textbus-toolbar-dropdown-label'],
    children: [r.label ? U(r.label) : null]
  })
  let e = !1
  const s = y('button', {
      classes: ['textbus-toolbar-button'],
      attrs: { title: r.tooltip || '', type: 'button' },
      children: [
        r.iconClasses ? y('span', { classes: [...r.iconClasses] }) : null,
        t,
        y('span', { classes: ['textbus-dropdown-caret'] })
      ],
      on: {
        mousedown() {
          ;(e = !0), i.toggle()
        }
      }
    }),
    n = I(document, 'mousedown').subscribe(() => {
      e || i.hide(), (e = !1)
    }),
    o = y('span', { classes: ['textbus-toolbar-item', 'textbus-toolbar-dropdown'], children: [s] }),
    i = Ds(o, r.menuView, r.stickyElement)
  let a = !1,
    l = !1
  return {
    elementRef: i.elementRef,
    hide() {
      i.hide()
    },
    destroy() {
      i.destroy(), n.unsubscribe()
    },
    get highlight() {
      return a
    },
    set highlight(c) {
      ;(a = c),
        c
          ? s.classList.add('textbus-toolbar-button-active')
          : s.classList.remove('textbus-toolbar-button-active')
    },
    get disabled() {
      return l
    },
    set disabled(c) {
      ;(l = c), (s.disabled = c)
    }
  }
}
function Vs(r) {
  const t = xs(),
    e = []
  r.ctrlKey && e.push(t ? 'textbus-icon-command' : 'Ctrl'),
    r.shiftKey && e.push(t ? 'textbus-icon-shift' : 'Shift'),
    r.altKey && e.push(t ? 'textbus-icon-opt' : 'Alt')
  const s = Array.isArray(r.key)
      ? r.key.map(o => o.toUpperCase()).join('/')
      : typeof r.key == 'string'
      ? r.key.toUpperCase()
      : Array.isArray(r.key.name)
      ? r.key.name.map(o => o.toUpperCase()).join('/')
      : r.key.name.toLowerCase(),
    n = []
  return (
    t
      ? n.push(...e.map(o => y('span', { classes: [o] })), U(s))
      : (e.push(s),
        e.forEach((o, i) => {
          i - 1 > -1 &&
            n.push(y('span', { classes: ['textbus-toolbar-keymap-join'], children: [U('+')] })),
            n.push(U(o))
        })),
    n
  )
}
function Vn(r) {
  return y('button', {
    classes: ['textbus-toolbar-option', ...(r.disabled ? ['textbus-toolbar-option-disabled'] : [])],
    children: [
      r.iconClasses
        ? y('span', { classes: ['textbus-toolbar-option-icon', ...(r.iconClasses || [])] })
        : null,
      y('span', {
        classes: ['textbus-toolbar-option-label', ...(r.classes || [])],
        children: r.label ? [U(r.label)] : []
      }),
      r.keymap
        ? y('span', { classes: ['textbus-toolbar-option-keymap'], children: Vs(r.keymap) })
        : null
    ],
    on: r.disabled
      ? {}
      : {
          click() {
            r.onClick()
          }
        }
  })
}
function Di(r) {
  const t = y('span', {
    classes: ['textbus-toolbar-select-label'].concat(
      r.mini ? ['textbus-toolbar-select-label-mini'] : []
    )
  })
  let e = !1
  const s = y('button', {
      classes: ['textbus-toolbar-button'],
      attrs: { title: r.tooltip || '', type: 'button' },
      children: [
        r.iconClasses
          ? y('span', { classes: [...r.iconClasses, 'textbus-toolbar-select-icon'] })
          : null,
        t,
        y('span', { classes: ['textbus-dropdown-caret'] })
      ],
      on: {
        click() {
          ;(e = !0), a.toggle()
        }
      }
    }),
    n = I(document, 'click').subscribe(() => {
      e || a.hide(), (e = !1)
    }),
    o = y('span', { classes: ['textbus-toolbar-item', 'textbus-toolbar-dropdown'], children: [s] }),
    i = y('div', {
      classes: ['textbus-toolbar-select-options'],
      children: r.options.map(
        h => (
          h.default && (t.innerText = h.label),
          Vn(
            Object.assign(Object.assign({}, h), {
              onClick() {
                a.hide(), r.onSelected(h.value)
              }
            })
          )
        )
      )
    }),
    a = Ds(o, i, r.stickyElement)
  let l = !1,
    c = !1
  return {
    elementRef: a.elementRef,
    destroy() {
      a.destroy(), n.unsubscribe()
    },
    setLabel(h) {
      t.innerText = h
    },
    get highlight() {
      return l
    },
    set highlight(h) {
      ;(l = h),
        h
          ? s.classList.add('textbus-toolbar-button-active')
          : s.classList.remove('textbus-toolbar-button-active')
    },
    get disabled() {
      return c
    },
    set disabled(h) {
      ;(c = h), (s.disabled = h)
    }
  }
}
class Q {
  constructor(t) {
    this.factory = t
  }
  setup(t) {
    ;(this.config = this.factory(t)), (this.controller = t.get(Y))
    const e = t.get(lt),
      s = Fi(
        Object.assign(Object.assign({}, this.config), {
          onClick: () => {
            this.config.onClick()
          }
        })
      )
    return (
      this.config.keymap &&
        e.addShortcut({
          keymap: this.config.keymap,
          action: () => {
            this.config.onClick()
          }
        }),
      (this.viewer = s),
      s.elementRef
    )
  }
  refreshState() {
    if (!this.config.queryState) return
    const t = this.viewer
    if (this.controller.readonly) {
      ;(t.disabled = !0), (t.highlight = !1)
      return
    }
    switch (this.config.queryState().state) {
      case v.Disabled:
        ;(t.disabled = !0), (t.highlight = !1)
        break
      case v.Enabled:
        ;(t.disabled = !1), (t.highlight = !0)
        break
      case v.Normal:
        ;(t.disabled = !1), (t.highlight = !1)
    }
  }
  disabled(t) {
    t && ((this.viewer.disabled = !0), (this.viewer.highlight = !1))
  }
  onDestroy() {
    var t, e
    ;(e = (t = this.config).onDestroy) === null || e === void 0 || e.call(t)
  }
}
class Xe {
  constructor(t) {
    ;(this.factory = t), (this.subs = [])
  }
  setup(t, e) {
    const s = this.factory(t)
    ;(this.config = s), (this.controller = t.get(Y))
    const n = t.get(lt),
      o = {}
    let i = o
    this.subs.push(
      s.viewController.onComplete.subscribe(l => {
        ;(i = l), a.hide(), s.useValue(i)
      })
    )
    const a = Dn(
      Object.assign(Object.assign({}, s), {
        stickyElement: e,
        menuView: s.viewController.elementRef
      })
    )
    return (
      s.keymap &&
        n.addShortcut({
          keymap: s.keymap,
          action() {
            !a.disabled && i !== o && s.useValue(i)
          }
        }),
      (this.viewer = a),
      a.elementRef
    )
  }
  refreshState() {
    const t = this.viewer
    if (this.controller.readonly) {
      ;(t.disabled = !0), (t.highlight = !1)
      return
    }
    const e = this.config.queryState()
    switch (
      (e.value ? this.config.viewController.update(e.value) : this.config.viewController.reset(),
      e.state)
    ) {
      case v.Enabled:
        ;(t.disabled = !1), (t.highlight = !0)
        break
      case v.Normal:
        ;(t.disabled = !1), (t.highlight = !1)
        break
      case v.Disabled:
        ;(t.disabled = !0), (t.highlight = !1)
        break
    }
  }
  disabled(t) {
    t && ((this.viewer.disabled = !0), (this.viewer.highlight = !1))
  }
  onDestroy() {
    var t, e
    this.subs.forEach(s => s.unsubscribe()),
      (e = (t = this.config).onDestroy) === null || e === void 0 || e.call(t)
  }
}
var W
;(function (r) {
  ;(r[(r.Select = 0)] = 'Select'),
    (r[(r.Button = 1)] = 'Button'),
    (r[(r.Dropdown = 2)] = 'Dropdown'),
    (r[(r.Dialog = 3)] = 'Dialog')
})(W || (W = {}))
class Vi {
  constructor(t) {
    ;(this.factory = t), (this.menus = [])
  }
  setup(t, e) {
    const s = this.factory(t),
      n = t.get(lt),
      o = t.get(xt)
    ;(this.controller = t.get(Y)), (this.config = s)
    const i = s.items.map(c => {
      switch (c.type) {
        case W.Button:
          return this.createButton(c, n)
        case W.Select:
          return this.createSelect(c, n)
        case W.Dropdown:
          return this.createDropdown(c, n)
        case W.Dialog:
          return this.createDialog(c, n, o)
      }
    })
    this.menus = i
    const a = y('div', {
        classes: ['textbus-toolbar-group-menu'],
        children: i.map(c => c.elementRef)
      }),
      l = Dn(Object.assign(Object.assign({}, s), { menuView: a, stickyElement: e }))
    return (
      this.controller.onReadonlyStateChange.subscribe(c => {
        ;(l.disabled = c),
          i.forEach(h => {
            h.disabled(c)
          })
      }),
      (this.uiDropdown = l),
      l.elementRef
    )
  }
  refreshState() {
    this.menus.forEach(t => t.refreshState())
  }
  disabled() {}
  createDialog(t, e, s) {
    const n = this._createItem(
      Object.assign(Object.assign({}, t), { label: t.label || '', isDropdown: !1 })
    )
    I(n.elementRef, 'click').subscribe(() => {
      s.show(t.viewController.elementRef), this.uiDropdown.hide()
    })
    const o = {}
    let i = o
    t.viewController.onComplete.subscribe(l => {
      ;(i = l), t.useValue(l), s.hide()
    }),
      t.viewController.onCancel.subscribe(() => {
        s.hide()
      }),
      t.keymap &&
        e.addShortcut({
          keymap: t.keymap,
          action() {
            !n.disabled && i !== o && t.useValue(i)
          }
        })
    const a = this.controller
    return {
      elementRef: n.elementRef,
      disabled(l) {
        n.disabled = l
      },
      refreshState() {
        if (!t.queryState) return
        const l = n
        if (a.readonly) {
          ;(l.disabled = !0), (l.highlight = !1)
          return
        }
        const c = t.queryState()
        switch (c.state) {
          case v.Disabled:
            ;(l.disabled = !0), (l.highlight = !1), t.viewController.reset()
            break
          case v.Enabled:
            ;(l.disabled = !1), (l.highlight = !0), t.viewController.update(c.value)
            break
          case v.Normal:
            ;(l.disabled = !1), (l.highlight = !1), t.viewController.reset()
        }
      }
    }
  }
  createDropdown(t, e) {
    const s = this._createItem(
        Object.assign(Object.assign({}, t), { label: t.label || '', isDropdown: !0 })
      ),
      n = y('div', {
        classes: ['textbus-toolbar-submenu'],
        children: [t.viewController.elementRef]
      }),
      o = {}
    let i = o
    t.viewController.onComplete.subscribe(l => {
      ;(i = l), t.useValue(l), this.uiDropdown.hide()
    }),
      t.keymap &&
        e.addShortcut({
          keymap: t.keymap,
          action() {
            !s.disabled && i !== o && t.useValue(i)
          }
        }),
      s.elementRef.appendChild(n)
    const a = this.controller
    return {
      elementRef: s.elementRef,
      disabled(l) {
        s.disabled = l
      },
      refreshState() {
        if (!t.queryState) return
        const l = s
        if (a.readonly) {
          ;(l.disabled = !0), (l.highlight = !1)
          return
        }
        const c = t.queryState()
        switch (c.state) {
          case v.Disabled:
            ;(l.disabled = !0), (l.highlight = !1), t.viewController.reset()
            break
          case v.Enabled:
            ;(l.disabled = !1), (l.highlight = !0), t.viewController.update(c.value)
            break
          case v.Normal:
            ;(l.disabled = !1), (l.highlight = !1), t.viewController.reset()
        }
      }
    }
  }
  createSelect(t, e) {
    const s = this._createItem(Object.assign(Object.assign({}, t), { isDropdown: !0 })),
      n = new Map(),
      o = y('div', {
        classes: ['textbus-toolbar-submenu'],
        children: [
          y('div', {
            classes: ['textbus-toolbar-select-options'],
            children: t.options.map(a => {
              const l = Vn(
                Object.assign(Object.assign({}, a), {
                  onClick: () => {
                    t.onChecked(a.value), this.uiDropdown.hide()
                  }
                })
              )
              return (
                n.set(a, l),
                a.keymap &&
                  e.addShortcut({
                    keymap: a.keymap,
                    action() {
                      s.disabled || t.onChecked(a.value)
                    }
                  }),
                l
              )
            })
          })
        ]
      })
    s.elementRef.appendChild(o)
    const i = this.controller
    return {
      elementRef: s.elementRef,
      disabled(a) {
        s.disabled = a
      },
      refreshState() {
        if (!t.queryState) return
        const a = s
        if (i.readonly) {
          ;(a.disabled = !0), (a.highlight = !1)
          return
        }
        const l = t.queryState()
        switch (l.state) {
          case v.Disabled:
            ;(a.disabled = !0), (a.highlight = !1)
            break
          case v.Enabled:
            ;(a.disabled = !1),
              (a.highlight = !0),
              n.forEach((c, h) => {
                h.value === l.value
                  ? c.classList.add('textbus-toolbar-option-active')
                  : c.classList.remove('textbus-toolbar-option-active')
              })
            break
          case v.Normal:
            ;(a.disabled = !1),
              (a.highlight = !1),
              n.forEach(c => {
                c.classList.remove('textbus-toolbar-option-active')
              })
        }
      }
    }
  }
  createButton(t, e) {
    const s = this._createItem(
      Object.assign(Object.assign({}, t), { label: t.label || '', isDropdown: !1 })
    )
    I(s.elementRef, 'click').subscribe(() => {
      t.onClick(), this.uiDropdown.hide()
    }),
      t.keymap &&
        e.addShortcut({
          keymap: t.keymap,
          action() {
            s.disabled || t.onClick()
          }
        })
    const n = this.controller
    return {
      elementRef: s.elementRef,
      disabled(o) {
        s.disabled = o
      },
      refreshState() {
        if (!t.queryState) return
        const o = s
        if (n.readonly) {
          ;(o.disabled = !0), (o.highlight = !1)
          return
        }
        switch (t.queryState().state) {
          case v.Disabled:
            ;(o.disabled = !0), (o.highlight = !1)
            break
          case v.Enabled:
            ;(o.disabled = !1), (o.highlight = !0)
            break
          case v.Normal:
            ;(o.disabled = !1), (o.highlight = !1)
        }
      }
    }
  }
  _createItem(t) {
    const e = y('button', {
        attrs: { type: 'button' },
        classes: ['textbus-toolbar-group-button'],
        children: [
          t.iconClasses
            ? y('span', { classes: [...t.iconClasses, 'textbus-toolbar-group-button-icon'] })
            : null,
          y('span', { classes: ['textbus-toolbar-group-button-label'], children: [U(t.label)] }),
          t.keymap
            ? y('span', {
                classes: ['textbus-toolbar-group-button-keymap'],
                children: Vs(t.keymap)
              })
            : null,
          t.isDropdown ? y('span', { classes: ['textbus-toolbar-group-button-caret'] }) : null
        ]
      }),
      s = y('div', { classes: ['textbus-toolbar-group-item'], children: [e] })
    let n = !1,
      o = !1
    return {
      elementRef: s,
      get highlight() {
        return n
      },
      set highlight(i) {
        ;(n = i),
          i
            ? e.classList.add('textbus-toolbar-group-button-active')
            : e.classList.remove('textbus-toolbar-group-button-active')
      },
      get disabled() {
        return o
      },
      set disabled(i) {
        ;(o = i), (e.disabled = i)
      }
    }
  }
}
class qn {
  constructor(t) {
    ;(this.factory = t), (this.subs = [])
  }
  setup(t, e) {
    var s
    const n = this.factory(t)
    ;(this.controller = t.get(Y)), (this.config = n)
    const o = t.get(lt),
      i = n.viewController.elementRef,
      a = Mi(
        Object.assign(Object.assign({}, n), {
          menuView: i,
          stickyElement: e,
          onLeftButtonClick() {
            var h
            !a.disabled && c !== l && ((h = n.useValue) === null || h === void 0 || h.call(n, c))
          }
        })
      ),
      l = {}
    let c = l
    return (
      this.subs.push(
        n.viewController.onComplete.subscribe(h => {
          var u
          ;(c = h), (u = n.useValue) === null || u === void 0 || u.call(n, h), a.hide()
        })
      ),
      n.keymap &&
        o.addShortcut({
          keymap: n.keymap,
          action() {
            var h
            !a.disabled && c !== l && ((h = n.useValue) === null || h === void 0 || h.call(n, c))
          }
        }),
      (this.viewer = a),
      (s = n.onInit) === null || s === void 0 || s.call(n, a),
      a.elementRef
    )
  }
  disabled(t) {
    t && ((this.viewer.disabled = !0), (this.viewer.highlight = !1))
  }
  refreshState() {
    if (!this.config.queryState) return
    const t = this.viewer
    if (this.controller.readonly) {
      ;(t.disabled = !0), (t.highlight = !1)
      return
    }
    const e = this.config.queryState()
    switch ((this.config.viewController.update(e.value), e.state)) {
      case v.Enabled:
        ;(t.disabled = !1), (t.highlight = !0)
        break
      case v.Normal:
        ;(t.disabled = !1), (t.highlight = !1)
        break
      case v.Disabled:
        ;(t.disabled = !0), (t.highlight = !1)
        break
    }
  }
  onDestroy() {
    var t, e
    this.subs.forEach(s => s.unsubscribe()),
      (e = (t = this.config).onDestroy) === null || e === void 0 || e.call(t)
  }
}
class Pe {
  constructor(t) {
    this.factory = t
  }
  setup(t, e) {
    const s = this.factory(t)
    ;(this.controller = t.get(Y)), (this.config = s)
    const n = t.get(lt),
      o = Di(
        Object.assign(Object.assign({}, s), {
          stickyElement: e,
          onSelected: i => {
            s.onChecked(i)
          }
        })
      )
    return (
      s.options
        .filter(i => i.keymap)
        .forEach(i => {
          n.addShortcut({
            keymap: i.keymap,
            action: () => {
              o.disabled || this.config.onChecked(i.value)
            }
          })
        }),
      (this.viewer = o),
      o.elementRef
    )
  }
  refreshState() {
    if (!this.config.queryState) return
    const t = this.viewer
    if (this.controller.readonly) {
      ;(t.disabled = !0), (t.highlight = !1)
      return
    }
    const e = this.config.queryState()
    if (e.value) {
      const n = this.config.options.find(o => o.value === e.value)
      if (n) {
        t.setLabel(n.label), (t.disabled = !1), (t.highlight = !0)
        return
      }
    }
    ;(t.highlight = !1), (t.disabled = e.state === v.Disabled)
    let s
    for (const n of this.config.options)
      if (n.default) {
        s = n
        break
      }
    s && t.setLabel(s.label)
  }
  disabled(t) {
    t && ((this.viewer.disabled = !0), (this.viewer.highlight = !1))
  }
  onDestroy() {
    var t, e
    ;(e = (t = this.config).onDestroy) === null || e === void 0 || e.call(t)
  }
}
function qi(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L),
    n = r.get(Kt),
    o = t.getContext('plugins.toolbar.audioTool.view'),
    i = new Ct({
      title: o.get('title'),
      cancelBtnText: o.get('cancelBtnText'),
      confirmBtnText: o.get('confirmBtnText'),
      items: [
        new at({
          label: o.get('addressLabel'),
          name: 'src',
          placeholder: o.get('addressPlaceholder'),
          canUpload: !0,
          uploadType: 'audio',
          uploadBtnText: o.get('uploadBtnText'),
          fileUploader: n,
          validateFn(a) {
            return a ? !1 : o.get('errorMessage')
          }
        }),
        new ks({ label: o.get('switchLabel'), checked: !1, name: 'autoplay' }),
        new Nn({ name: 'controls', value: 'controls' })
      ]
    })
  return {
    iconClasses: ['textbus-icon-music'],
    tooltip: t.get('plugins.toolbar.audioTool.tooltip'),
    viewController: i,
    queryState() {
      const a = e.queryComponent(be)
      return a.state === v.Enabled
        ? { state: v.Enabled, value: a.value.extends.toJSON() }
        : { state: a.state, value: null }
    },
    useValue(a) {
      if (a) {
        const l = e.queryComponent(be)
        l.state === v.Enabled
          ? l.value.extends.mergeProps(a)
          : s.insert(be.createInstance(r, { state: a }))
      }
    }
  }
}
function Hi(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L),
    n = r.get(P)
  return {
    iconClasses: ['textbus-icon-quotes-right'],
    tooltip: t.get('plugins.toolbar.blockquoteTool.tooltip'),
    keymap: /win(dows|32|64)/i.test(navigator.userAgent)
      ? { altKey: !0, key: "'" }
      : { ctrlKey: !0, key: "'" },
    queryState() {
      return e.queryComponent(ye)
    },
    onClick() {
      const o = e.queryComponent(ye)
      if (o.state === v.Enabled) {
        const i = o.value,
          a = i.parent,
          l = a.indexOf(i)
        a.retain(l),
          s.removeComponent(i),
          i.slots
            .get(0)
            .sliceContent()
            .forEach(c => {
              a.insert(c)
            })
      } else {
        const i = ye.createInstance(r),
          a = i.slots.get(0)
        if (n.startSlot === n.endSlot) {
          const l = n.startSlot.parent,
            c = l.parent,
            h = c.indexOf(l)
          a.insert(l), c.retain(h), c.insert(i)
        } else {
          const l = n.commonAncestorSlot,
            c = n.getCommonAncestorSlotScope()
          l
            .cut(c.startOffset, c.endOffset)
            .sliceContent()
            .forEach(h => {
              a.insert(h)
            }),
            l.retain(c.startOffset),
            l.insert(i)
        }
      }
    }
  }
}
function zi(r) {
  const t = r.get(D),
    e = r.get(L),
    s = r.get(R)
  return {
    iconClasses: ['textbus-icon-bold'],
    tooltip: s.get('plugins.toolbar.boldTool.tooltip'),
    keymap: { ctrlKey: !0, key: 'b' },
    queryState() {
      return t.queryFormat(wt)
    },
    onClick() {
      t.queryFormat(wt).state === v.Enabled ? e.unApplyFormat(wt) : e.applyFormat(wt, !0)
    }
  }
}
function ji() {
  return new Q(zi)
}
function $i(r) {
  const t = r.get(P),
    e = r.get(L),
    s = r.get(R)
  return {
    iconClasses: ['textbus-icon-clear-formatting'],
    tooltip: s.get('plugins.toolbar.cleanTool.tooltip'),
    keymap: { ctrlKey: !0, shiftKey: !0, altKey: !0, key: 'c' },
    queryState() {
      return { state: t.isCollapsed ? v.Disabled : v.Normal, value: null }
    },
    onClick() {
      e.cleanFormats([et]), e.cleanAttributes()
    }
  }
}
function Ui() {
  return new Q($i)
}
function Ki(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    iconClasses: ['textbus-icon-code'],
    tooltip: t.get('plugins.toolbar.codeTool.tooltip'),
    keymap: { key: ';', ctrlKey: !0 },
    queryState() {
      return e.queryFormat(se)
    },
    onClick() {
      e.queryFormat(se).state === v.Enabled ? s.unApplyFormat(se) : s.applyFormat(se, !0)
    }
  }
}
class qs {
  constructor(t, e, s, n, o) {
    ;(this.styleName = t),
      (this.elementRef = document.createElement('div')),
      (this.completeEvent = new F()),
      this.elementRef.classList.add('textbus-toolbar-palette'),
      (this.onComplete = this.completeEvent.asObservable()),
      (this.picker = Zn(this.elementRef, {
        recentText: s,
        btnText: e,
        backText: n,
        paletteText: o
      })),
      this.picker.onSelected.subscribe(i => {
        if (!i.rgba) this.completeEvent.next(null)
        else if (i.rgba.a === 1) this.completeEvent.next(i.hex)
        else {
          const { r: a, g: l, b: c, a: h } = i.rgba
          this.completeEvent.next(`rgba(${a},${l},${c},${h})`)
        }
      })
  }
  update(t) {
    const e = t || '#f00'
    ;/^#/.test(e)
      ? (this.picker.hex = e)
      : /^rgba/.test(e)
      ? (this.picker.rgba = Ye(e))
      : /^rgb/.test(e)
      ? (this.picker.hex = Qn(Ye(e)))
      : /^hsl/.test(e) && (this.picker.hex = to(Ye(e)))
  }
}
qs.defaultColors = [
  '#f8f8f9',
  '#e9eaec',
  '#dddee1',
  '#bbbec4',
  '#80848f',
  '#495060',
  '#1c2838',
  '#e74f5e',
  '#ff9900',
  '#15bd9a',
  '#6ad1ec',
  '#1296db'
]
function Hn(r, t, e) {
  const s = r.get(D),
    n = r.get(L)
  let o
  return {
    viewController: {
      elementRef: t.elementRef,
      onComplete: t.onComplete,
      onCancel: new ue(),
      reset() {
        t.update()
      },
      update(i) {
        t.update(i)
      }
    },
    onInit(i) {
      o = i
    },
    useValue(i) {
      ;(o.leftButton.style.color = i), n.applyFormat(e, i)
    },
    queryState() {
      return s.queryFormat(e)
    }
  }
}
function Wi(r) {
  const t = r.get(R).getContext('plugins.toolbar.colorTool'),
    e = new qs(
      'color',
      t.get('view.btnText'),
      t.get('view.recentText'),
      t.get('view.backText'),
      t.get('view.paletteText')
    )
  return Object.assign(
    {
      iconClasses: ['textbus-icon-color'],
      tooltip: t.get('tooltip'),
      keymap: { ctrlKey: !0, shiftKey: !0, key: 'c' }
    },
    Hn(r, e, Ge)
  )
}
function Ji() {
  return new qn(Wi)
}
function Gi(r, t) {
  const e = document.createElement('div')
  e.classList.add('textbus-component-example-item')
  const s = document.createElement('div')
  s.classList.add('textbus-component-example')
  const n = document.createElement('div')
  n.classList.add('textbus-component-example-content'),
    typeof r == 'string' ? (n.innerHTML = r) : r instanceof HTMLElement && n.appendChild(r),
    s.appendChild(n)
  const o = document.createElement('div')
  o.classList.add('textbus-component-example-mask'), s.appendChild(o), e.appendChild(s)
  const i = document.createElement('div')
  return (
    i.classList.add('textbus-component-example-name'),
    (i.innerText = t || ''),
    e.appendChild(i),
    { wrapper: e, card: s }
  )
}
function Xi(r, t, e) {
  const { wrapper: s, card: n } = Gi(t.example, t.name),
    o = r.get(L),
    i = r.get(P)
  return (
    n.addEventListener('click', () => {
      const a = t.factory(r)
      a instanceof Promise
        ? a.then(l => {
            o.insert(l), i.selectFirstPosition(l), e.next()
          })
        : (o.insert(a), i.selectFirstPosition(a), e.next())
    }),
    s
  )
}
function Yi(r) {
  const t = r.get(R),
    e = y('div', { classes: ['textbus-component-stage-list'] }),
    s = [
      {
        name: t.get('components.imageCardComponent.creator.name'),
        example: `<img src="data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
          '<svg width="100" height="70" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f90"/><stop offset="100%" stop-color="#fff"/></linearGradient></defs><g><rect fill="url(#bg)" height="50" width="100%"/></g><g><path fill="#f00" opacity="0.2" d="M81.25 28.125c0 5.178-4.197 9.375-9.375 9.375s-9.375-4.197-9.375-9.375 4.197-9.375 9.375-9.375 9.375 4.197 9.375 9.375z"></path><path fill="#0e0" opacity="0.3" d="M87.5 81.25h-75v-12.5l21.875-37.5 25 31.25h6.25l21.875-18.75z"></path></g><g><rect fill="#fff" height="20" width="100%" y="50"></rect></g><g><text font-family="Helvetica, Arial, sans-serif" font-size="12" y="63" x="50%" text-anchor="middle" stroke-width="0" stroke="#000" fill="#000000">\u63CF\u8FF0\u6587\u5B57</text></g></svg>'
        )}" alt="">`,
        factory() {
          return Es.createInstance(r)
        }
      },
      {
        name: t.get('components.todoListComponent.creator.name'),
        example: `<img alt="\u9ED8\u8BA4\u56FE\u7247" src="data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
          '<svg width="100" height="70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ><g><rect fill="#fff" height="100%" width="100%"/></g><defs><g id="item"><rect fill="#fff" stroke="#1296db" height="8" width="8" rx="2" x="15" y="12"/><text font-family="Helvetica, Arial, sans-serif" font-size="8" x="28" y="19"  stroke-width="0" stroke="#000" fill="#000000">\u5F85\u529E\u4E8B\u9879...</text></g></defs><use xlink:href="#item"></use><use xlink:href="#item" transform="translate(0, 12)"></use><use xlink:href="#item" transform="translate(0, 24)"></use><use xlink:href="#item" transform="translate(0, 36)"></use></svg>'
        )}">`,
        factory() {
          return Ne.createInstance(r, {
            slots: [new T([b.Text, b.InlineComponent], { active: !1, disabled: !1 })]
          })
        }
      },
      {
        name: t.get('components.jumbotronComponent.creator.name'),
        example: `<img src="data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
          '<svg width="100" height="70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#6ad1ec"/><stop offset="100%" stop-color="#fff"/></linearGradient></defs><g><rect fill="url(#bg)" height="100%" width="100%"/></g><path fill="#fff" opacity="0.3" d="M81.25 28.125c0 5.178-4.197 9.375-9.375 9.375s-9.375-4.197-9.375-9.375 4.197-9.375 9.375-9.375 9.375 4.197 9.375 9.375z"></path><path fill="#fff" opacity="0.3"  d="M87.5 81.25h-75v-12.5l21.875-37.5 25 31.25h6.25l21.875-18.75z"></path><text font-family="Helvetica, Arial, sans-serif" font-size="12" x="10" y="25" stroke-width="0.3" stroke="#000" fill="#000000">Hello, world!</text><text font-family="Helvetica, Arial, sans-serif" font-size="6" x="10" y="40" stroke-width="0" stroke="#000" fill="#000000">\u4F60\u597D\uFF0C\u6211\u662F Textbus\uFF0C\u4E00\u4E2A\u7ED9\u4F60\u5E26\u6765\u5168\u65B0\u4F53\u9A8C\u7684\u5BCC\u6587\u672C\u5F00\u53D1\u6846\u67B6\u3002</text><text font-family="Helvetica, Arial, sans-serif" font-size="6" x="10" y="50" stroke-width="0" stroke="#000" fill="#000000">\u73B0\u5728\u6211\u4EEC\u5F00\u59CB\u5427\uFF01</text></svg>'
        )}">`,
        factory() {
          return Ts.createInstance(r)
        }
      },
      {
        name: t.get('components.katexComponent.creator.name'),
        example: `<img src="data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
          '<svg width="100" height="70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40.541"><path d="M4.618 27.925c-.299.299-.591.478-.874.538-.284.06-1.039.105-2.264.135H0v2.062h.493c.508-.09 2.66-.135 6.456-.135 3.796 0 5.948.045 6.456.135h.493v-2.062h-1.48c-1.764-.029-2.765-.209-3.004-.538-.09-.119-.135-1.584-.135-4.394v-4.259l2.062-2.018a83.544 83.544 0 002.063-1.972c.209-.209.388-.373.538-.493l3.901 5.873c2.331 3.587 3.661 5.62 3.99 6.098.09.179.135.359.135.538 0 .778-.688 1.166-2.062 1.166h-.359v2.062h.493c.628-.09 2.764-.135 6.412-.135.269 0 .673.008 1.211.022.538.015.956.022 1.255.022.298 0 .68.008 1.143.022.463.015.807.03 1.031.045.224.015.366.022.426.022h.359v-2.062h-.942c-1.255-.029-2.152-.194-2.69-.493a3.197 3.197 0 01-1.076-1.031l-5.179-7.779c-3.273-4.917-4.91-7.39-4.91-7.42 0-.029 1.33-1.33 3.99-3.901 2.66-2.57 4.065-3.93 4.215-4.08C26.6 2.817 28.379 2.219 30.62 2.1h.628V.037h-.269c-.03 0-.135.008-.314.022-.179.015-.434.03-.762.045a18.99 18.99 0 01-.852.022c-.209 0-.523.008-.942.022-.419.015-.747.022-.986.022-3.408 0-5.366-.045-5.873-.135h-.448v2.062h.179l.202.022.247.022c.836.209 1.255.643 1.255 1.3-.06.24-.12.404-.179.493-.06.12-2.272 2.317-6.636 6.591l-6.546 6.367-.045-6.95c0-4.663.015-7.024.045-7.084.06-.508.897-.762 2.511-.762h2.062V.037h-.493c-.509.09-2.661.135-6.456.135C3.152.172 1 .127.492.037H0v2.062h1.48c1.225.03 1.98.075 2.264.135.284.06.575.24.874.538v25.153zm34.924-16.858h1.793v-.269c.029-.119.074-.478.135-1.076.239-3.198.836-5.201 1.793-6.008.747-.628 1.763-1.046 3.049-1.255.298-.029 1.15-.045 2.556-.045h1.211c.687 0 1.113.022 1.278.067.164.045.291.202.381.471.029.06.045 4.23.045 12.509v12.375c-.24.329-.613.538-1.121.628-1.076.09-2.421.135-4.035.135h-1.345v2.062h.583c.628-.09 3.377-.135 8.25-.135 4.872 0 7.622.045 8.25.135h.583v-2.062h-1.345c-1.614 0-2.959-.045-4.035-.135-.509-.09-.882-.298-1.121-.628V15.461c0-8.279.015-12.449.045-12.509.09-.269.216-.426.381-.471.164-.045.59-.067 1.278-.067h1.211c1.674 0 2.825.075 3.452.224 1.136.329 1.957.807 2.466 1.435.747.867 1.225 2.75 1.435 5.649.06.598.104.957.135 1.076v.269h1.793v-.269c0-.06-.134-1.763-.404-5.111C67.97 2.34 67.82.636 67.791.576v-.27H40.394v.269c0 .06-.135 1.764-.404 5.111-.269 3.348-.419 5.052-.448 5.111v.27zm60.461 19.593v-2.062h-.359c-.658-.06-1.226-.254-1.704-.583-.478-.329-.717-.702-.717-1.121 0-.209.015-.329.045-.359.029-.09 1.031-1.629 3.004-4.618.448-.687.836-1.293 1.166-1.816.329-.523.605-.956.829-1.3.224-.343.411-.62.56-.829.149-.209.254-.343.314-.404l.135-.135 1.659 2.556a514.118 514.118 0 013.273 5.111c1.076 1.704 1.614 2.6 1.614 2.69 0 .209-.314.397-.942.56-.628.165-1.196.247-1.704.247h-.269v2.062h.493c.687-.09 2.869-.135 6.546-.135 3.318 0 5.201.045 5.649.135H120v-2.062h-1.39c-1.166-.029-1.958-.09-2.376-.179-.419-.09-.747-.269-.986-.538-.09-.09-1.667-2.526-4.73-7.308-3.064-4.782-4.596-7.203-4.596-7.263 0-.029.986-1.584 2.959-4.663 2.092-3.139 3.183-4.753 3.273-4.842 1.016-1.046 2.75-1.614 5.201-1.704h.762V.037h-.359c-.359.09-2.003.135-4.932.135-3.468 0-5.396-.045-5.784-.135h-.404v2.062h.359c.926.09 1.614.389 2.062.897.388.389.493.747.314 1.076 0 .03-.778 1.248-2.331 3.654-1.555 2.406-2.347 3.609-2.376 3.609-.06 0-.979-1.397-2.757-4.192-1.779-2.795-2.668-4.237-2.668-4.327.06-.149.404-.306 1.031-.471.628-.164 1.195-.247 1.704-.247h.224V.037h-.493c-.658.09-2.84.135-6.546.135-3.318 0-5.201-.045-5.649-.135h-.404v2.062h1.525c1.614 0 2.69.224 3.228.673.09.09 1.464 2.212 4.125 6.367 2.66 4.155 3.99 6.262 3.99 6.322 0 .03-1.188 1.868-3.564 5.515a2726.32 2726.32 0 01-3.744 5.739c-.957 1.166-2.765 1.793-5.425 1.883h-.763v2.062h.359c.359-.09 2.002-.135 4.932-.135 3.467 0 5.395.045 5.784.135h.448z"/><path d="M37.736 15.499h-3.429c-2.264 0-3.396-.011-3.396-.034l1.715-5.077 1.681-5.043.672 1.984a629.242 629.242 0 011.715 5.077l1.042 3.093zm-6.153 8.573v-1.547h-.168c-.493 0-.958-.095-1.395-.286-.437-.19-.723-.431-.857-.723a.491.491 0 01-.101-.303c0-.134.224-.863.672-2.185l.672-1.984h7.834l.807 2.387c.538 1.614.807 2.443.807 2.488 0 .403-.785.605-2.353.605h-.437v1.547h.336c.336-.067 1.95-.101 4.841-.101 2.51 0 3.934.034 4.27.101h.303v-1.547h-1.009c-1.166-.022-1.872-.146-2.118-.37a1.261 1.261 0 01-.235-.336c-.516-1.591-1.855-5.581-4.018-11.969C37.271 3.461 36.178.256 36.156.233c-.09-.132-.359-.21-.808-.233h-.303c-.359 0-.572.09-.639.269-.023.023-.611 1.754-1.765 5.194a16100.31 16100.31 0 01-5.262 15.65c-.449.874-1.479 1.345-3.093 1.412h-.504v1.547h.235c.269-.067 1.401-.101 3.396-.101 2.174 0 3.463.034 3.866.101h.304zm36.735 13.734c-.299.299-.591.478-.874.538-.284.06-1.039.105-2.264.135H63.7v2.062h26.229v-.135c.06-.09.381-2.085.964-5.986s.889-5.896.919-5.986v-.135h-1.793v.135c-.03.06-.105.464-.224 1.211-.269 1.793-.613 3.244-1.031 4.349-.509 1.375-1.248 2.399-2.219 3.071-.972.673-2.324 1.114-4.058 1.323-.419.03-1.973.045-4.663.045h-2.287c-1.375 0-2.152-.074-2.331-.224-.09-.06-.15-.164-.179-.314-.03-.06-.045-2.107-.045-6.142v-6.008h2.421c1.943.03 3.139.12 3.587.269.836.24 1.405.666 1.704 1.278.298.613.478 1.547.538 2.802v.897h1.793V18.437h-1.793v.897c-.06 1.255-.24 2.19-.538 2.802-.299.613-.867 1.039-1.704 1.278-.448.15-1.644.24-3.587.269h-2.421v-5.425c0-3.646.015-5.499.045-5.56.09-.298.269-.463.538-.493.239-.06 1.853-.09 4.842-.09 1.733 0 2.75.015 3.049.045 2.451.15 4.177.74 5.179 1.771 1.001 1.031 1.681 2.952 2.04 5.761.06.538.104.852.135.942v.179h1.793v-.179c0-.029-.209-1.763-.628-5.201l-.628-5.201v-.179H63.7v2.062h1.48c1.225.03 1.98.075 2.264.135.284.06.575.24.874.538v25.018z"/></svg>'
        )}">`,
        factory() {
          return Ns.createInstance(r, { state: { source: '' } })
        }
      },
      {
        name: t.get('components.wordExplainComponent.creator.name'),
        example: `<img alt="\u793A\u4F8B" src="data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
          '<svg width="100" height="70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><rect fill="#fff" height="100%" width="100%"/></g><defs><g id="item"><rect fill="#eee" height="18" width="90" rx="2" x="5" y="6"/><line x1="26" y1="9" x2="26" y2="20.5" stroke="#000" stroke-dasharray="0.8 0.8" stroke-width="0.1"></line><text font-family="Helvetica, Arial, sans-serif" font-size="6" x="10" y="14" stroke-width="0" stroke="#000" fill="#000000">\u540D\u8BCD</text><text font-family="Helvetica, Arial, sans-serif" font-size="5" x="12" y="20" stroke-width="0" stroke="#000" fill="#000000">\u8BF4\u660E</text><text font-family="Helvetica, Arial, sans-serif" font-size="6" x="30" y="14" stroke-width="0" stroke="#000" fill="#000000">\u8BE6\u7EC6\u89E3\u91CA...</text></g></defs><use xlink:href="#item"></use><use xlink:href="#item" transform="translate(0, 20)"></use><use xlink:href="#item" transform="translate(0, 40)"></use></svg>'
        )}">`,
        factory() {
          const { Text: o, InlineComponent: i } = b,
            a = new T([o, i]),
            l = new T([o, i]),
            c = new T([o, i])
          return (
            a.insert('\u6807\u9898', wt, !0),
            l.insert('\u526F\u6807\u9898'),
            a.setAttribute(le, 'right'),
            l.setAttribute(le, 'right'),
            c.insert('\u6B63\u6587...'),
            Ms.createInstance(r, { slots: [a, l, c] })
          )
        }
      },
      {
        name: t.get('components.timelineComponent.creator.name'),
        example: `<img alt="\u793A\u4F8B" src="data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
          '<svg width="100" height="70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><rect fill="#fff" height="100%" width="100%"/></g><defs><g id="item"><circle r="2" cx="10" cy="12"></circle><line x1="10" y1="12" x2="10" y2="24" stroke-width="0.5"></line><text font-family="Helvetica, Arial, sans-serif" font-size="5" x="16" y="14" stroke-width="0" stroke="#000" fill="#000000">\u4E8B\u4EF6\u4E3B\u9898</text><text font-family="Helvetica, Arial, sans-serif" font-size="4.5" x="38" y="13.5" stroke-width="0" stroke="#000" fill="#888">2020-08-08</text><text font-family="Helvetica, Arial, sans-serif" font-size="4.5" x="16" y="20" stroke-width="0" stroke="#000" fill="#000000">\u8BE6\u7EC6\u8BF4\u660E...</text></g></defs><use xlink:href="#item" fill="#1296db" stroke="#1296db"></use><use xlink:href="#item" transform="translate(0, 14)" fill="#15bd9a" stroke="#15bd9a"></use><use xlink:href="#item" transform="translate(0, 28)" fill="#495060" stroke="#495060"></use><use xlink:href="#item" transform="translate(0, 42)" fill="#E74F5E" stroke="#E74F5E"></use></svg>'
        )}">`,
        factory() {
          return _s.createInstance(r)
        }
      },
      {
        name: t.get('components.stepsComponent.creator.name'),
        example: `<img alt="\u793A\u4F8B" src="data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
          '<svg width="100" height="70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><rect fill="#fff" height="100%" width="100%"/></g><defs><g id="item"><circle r="2" cx="10" cy="12"></circle><line x1="12" y1="12" x2="38" y2="12" stroke-width="0.5"></line><text font-family="Helvetica, Arial, sans-serif" font-size="5" x="8" y="22" stroke-width="0" stroke="#000" fill="#000000">\u6807\u9898</text><text font-family="Helvetica, Arial, sans-serif" font-size="4.5" x="8" y="27" stroke-width="0" stroke="#000" fill="#000">\u63CF\u8FF0\u4FE1\u606F...</text></g></defs><use xlink:href="#item" transform="translate(0, 20)" fill="#15bd9a" stroke="#15bd9a"></use><use xlink:href="#item" transform="translate(30, 20)" fill="#1296db" stroke="#1296db"></use><use xlink:href="#item" transform="translate(60, 20)" fill="#aaa" stroke="#aaa"></use></svg>'
        )}">`,
        factory() {
          return Fs.createInstance(r)
        }
      },
      {
        name: t.get('components.alertComponent.creator.name'),
        example: `<img src="data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
          '<svg width="100" height="70" xmlns="http://www.w3.org/2000/svg"><g><rect fill="#fff" height="100%" width="100%"/></g><rect width="90%" height="20" fill="#eee" stroke="#dedede" rx="5" ry="5" x="5" y="25"></rect><text font-family="Helvetica, Arial, sans-serif" font-size="10" x="10" y="35" stroke-width="0" stroke="#000" fill="#000000">\u6587\u672C\u5185\u5BB9</text></svg>'
        )}">`,
        factory() {
          return Ss.createInstance(r)
        }
      }
    ],
    n = new F()
  return (
    s.forEach(o => {
      e.append(Xi(r, o, n))
    }),
    {
      iconClasses: ['textbus-icon-components'],
      tooltip: t.get('plugins.toolbar.componentsTool.tooltip'),
      viewController: { elementRef: e, onComplete: n, onCancel: new ue(), reset() {}, update() {} },
      queryState() {
        return { state: v.Normal, value: null }
      },
      useValue() {}
    }
  )
}
function Zi() {
  return new Xe(Yi)
}
function Qi(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    iconClasses: ['textbus-icon-superscript'],
    tooltip: t.get('plugins.toolbar.superscript.tooltip'),
    queryState() {
      return e.queryFormat(ee)
    },
    onClick() {
      e.queryFormat(ee).state === v.Enabled ? s.unApplyFormat(ee) : s.applyFormat(ee, !0)
    }
  }
}
function tr(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    iconClasses: ['textbus-icon-subscript'],
    tooltip: t.get('plugins.tooltip.subscript.tooltip'),
    queryState() {
      return e.queryFormat(te)
    },
    onClick() {
      e.queryFormat(te).state === v.Enabled ? s.unApplyFormat(te) : s.applyFormat(te, !0)
    }
  }
}
function er(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L),
    n = r.get(P)
  return {
    iconClasses: ['textbus-icon-terminal'],
    tooltip: t.get('plugins.toolbar.preTool.tooltip'),
    mini: !0,
    options: [
      { label: 'JavaScript', value: 'JavaScript' },
      { label: 'HTML', value: 'HTML' },
      { label: 'CSS', value: 'CSS' },
      { label: 'TypeScript', value: 'TypeScript' },
      { label: 'Java', value: 'Java' },
      { label: 'C', value: 'C' },
      { label: 'C++', value: 'CPP' },
      { label: 'C#', value: 'CSharp' },
      { label: 'Swift', value: 'Swift' },
      { label: 'Go', value: 'Go' },
      { label: 'JSON', value: 'JSON' },
      { label: 'Less', value: 'Less' },
      { label: 'SCSS', value: 'SCSS' },
      { label: 'Stylus', value: 'Stylus' },
      { label: 'Jsx', value: 'Jsx' },
      { label: 'Tsx', value: 'Tsx' },
      { label: t.get('plugins.toolbar.preTool.defaultLang'), value: '', default: !0 }
    ],
    queryState() {
      const o = e.queryComponent(xe)
      return { state: o.state, value: o.value ? o.value.toJSON().state.lang : null }
    },
    onChecked(o) {
      const i = e.queryComponent(xe)
      if (i.state === v.Enabled)
        i.value.updateState(a => {
          a.lang = o
        })
      else {
        const a = xe.createInstance(r, { state: { lang: o, theme: 'light' }, slots: [gt()] })
        s.insert(a), n.setPosition(a.slots.get(0), 0)
      }
    }
  }
}
function sr(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    tooltip: t.get('plugins.toolbar.lineHeightTool.tooltip'),
    iconClasses: ['textbus-icon-line-height'],
    mini: !0,
    options: [
      {
        label: t.get('plugins.toolbar.lineHeightTool.defaultValueLabel'),
        classes: ['textbus-toolbar-line-height-inherit'],
        value: '',
        default: !0
      },
      { label: '1x', classes: ['textbus-toolbar-line-height-1'], value: '1em' },
      { label: '1.2x', classes: ['textbus-toolbar-line-height-1_2'], value: '1.2em' },
      { label: '1.4x', classes: ['textbus-toolbar-line-height-1_4'], value: '1.4em' },
      { label: '1.6x', classes: ['textbus-toolbar-line-height-1_6'], value: '1.6em' },
      { label: '1.8x', classes: ['textbus-toolbar-line-height-1_8'], value: '1.8em' },
      { label: '2x', classes: ['textbus-toolbar-line-height-2'], value: '2em' },
      { label: '3x', classes: ['textbus-toolbar-line-height-3'], value: '3em' },
      { label: '4x', classes: ['textbus-toolbar-line-height-4'], value: '4em' }
    ],
    queryState() {
      return e.queryFormat(Se)
    },
    onChecked(n) {
      n ? s.applyFormat(Se, n) : s.unApplyFormat(Se)
    }
  }
}
function nr(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    tooltip: t.get('plugins.toolbar.letterSpacingTool.tooltip'),
    iconClasses: ['textbus-icon-letter-spacing'],
    mini: !0,
    options: [
      {
        label: t.get('plugins.toolbar.letterSpacingTool.defaultValueLabel'),
        value: '',
        classes: ['textbus-toolbar-letter-spacing-inherit'],
        default: !0
      },
      { label: '0px', value: '0px', classes: ['textbus-toolbar-letter-spacing-0'] },
      { label: '1px', classes: ['textbus-toolbar-letter-spacing-1'], value: '1px' },
      { label: '2px', classes: ['textbus-toolbar-letter-spacing-2'], value: '2px' },
      { label: '3px', classes: ['textbus-toolbar-letter-spacing-3'], value: '3px' },
      { label: '4px', classes: ['textbus-toolbar-letter-spacing-4'], value: '4px' },
      { label: '5px', classes: ['textbus-toolbar-letter-spacing-5'], value: '5px' }
    ],
    queryState() {
      return e.queryFormat(Ce)
    },
    onChecked(n) {
      n ? s.applyFormat(Ce, n) : s.unApplyFormat(Ce)
    }
  }
}
class or {
  constructor() {
    ;(this.elementRef = document.createElement('div')),
      (this.onCancel = new ue()),
      (this.checkEvent = new F()),
      (this.onComplete = this.checkEvent.asObservable()),
      this.elementRef.classList.add('textbus-toolbar-emoji-menu')
    const t = []
    for (let n = 128512; n <= 128591; n++) t.push(n.toString(16).toUpperCase())
    const e = document.createDocumentFragment(),
      s = t.map(n => {
        const o = document.createElement('button')
        return (
          (o.type = 'button'),
          o.classList.add('textbus-toolbar-emoji-menu-item'),
          (o.innerHTML = `&#x${n};`),
          e.appendChild(o),
          o
        )
      })
    this.elementRef.addEventListener('click', n => {
      const o = n.target
      for (const i of s)
        if (o === i) {
          this.checkEvent.next(i.innerHTML)
          break
        }
    }),
      this.elementRef.appendChild(e)
  }
  update() {}
  reset() {}
}
function ir(r) {
  const t = r.get(R),
    e = r.get(L)
  return {
    iconClasses: ['textbus-icon-emoji'],
    tooltip: t.get('plugins.toolbar.emojiTool.tooltip'),
    viewController: new or(),
    queryState() {
      return { state: v.Normal, value: null }
    },
    useValue(s) {
      e.insert(s)
    }
  }
}
function rr(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    iconClasses: ['textbus-icon-ltr'],
    tooltip: t.get('plugins.toolbar.leftToRightTool.tooltip'),
    queryState() {
      const n = e.queryAttribute(bt)
      return { state: n.value === 'ltr' ? v.Enabled : v.Normal, value: n.value }
    },
    onClick() {
      e.queryAttribute(bt).value === 'ltr' ? s.unApplyAttribute(bt) : s.applyAttribute(bt, 'ltr')
    }
  }
}
function ar(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    iconClasses: ['textbus-icon-rtl'],
    tooltip: t.get('plugins.toolbar.rightToLeftTool.tooltip'),
    queryState() {
      const n = e.queryAttribute(bt)
      return { state: n.value === 'rtl' ? v.Enabled : v.Normal, value: n.value }
    },
    onClick() {
      e.queryAttribute(bt).value === 'rtl' ? s.unApplyAttribute(bt) : s.applyAttribute(bt, 'rtl')
    }
  }
}
function lr(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L),
    n = r.get(Kt),
    o = t.getContext('plugins.toolbar.videoTool.view'),
    i = new Ct({
      title: o.get('title'),
      confirmBtnText: o.get('confirmBtnText'),
      cancelBtnText: o.get('cancelBtnText'),
      items: [
        new at({
          label: o.get('linkLabel'),
          name: 'src',
          placeholder: o.get('linkInputPlaceholder'),
          canUpload: !0,
          uploadType: 'video',
          fileUploader: n,
          uploadBtnText: o.get('uploadBtnText'),
          validateFn(a) {
            return a ? !1 : o.get('validateErrorMessage')
          }
        }),
        new Nn({ name: 'controls', value: 'controls' }),
        new at({
          label: o.get('videoWidthLabel'),
          name: 'width',
          placeholder: o.get('videoWidthInputPlaceholder'),
          value: '100%'
        }),
        new at({
          label: o.get('videoHeightLabel'),
          name: 'height',
          placeholder: o.get('videoHeightInputPlaceholder'),
          value: 'auto'
        }),
        new ks({ label: o.get('autoplayLabel'), checked: !1, name: 'autoplay' })
      ]
    })
  return {
    iconClasses: ['textbus-icon-video'],
    tooltip: t.get('plugins.toolbar.videoTool.tooltip'),
    viewController: i,
    queryState() {
      const a = e.queryComponent(ke)
      return a.state === v.Enabled
        ? { state: v.Enabled, value: a.value.toJSON().state }
        : { state: a.state, value: null }
    },
    useValue(a) {
      if (a) {
        const l = e.queryComponent(ke)
        l.state === v.Enabled
          ? l.value.extends.mergeProps(a)
          : s.insert(ke.createInstance(r, { state: a }))
      }
    }
  }
}
function cr(r) {
  const t = r.get(R)
  return {
    iconClasses: ['textbus-icon-plus'],
    items: [
      Object.assign(Object.assign({}, er(r)), {
        type: W.Select,
        label: t.get('plugins.toolbar.insertObjectTool.sourceCode')
      }),
      Object.assign(Object.assign({}, sr(r)), {
        type: W.Select,
        label: t.get('plugins.toolbar.insertObjectTool.lineHeight')
      }),
      Object.assign(Object.assign({}, nr(r)), {
        type: W.Select,
        label: t.get('plugins.toolbar.insertObjectTool.letterSpacing')
      }),
      Object.assign(Object.assign({}, ir(r)), {
        type: W.Dropdown,
        label: t.get('plugins.toolbar.insertObjectTool.emoji')
      }),
      Object.assign(Object.assign({}, qi(r)), {
        type: W.Dialog,
        label: t.get('plugins.toolbar.insertObjectTool.audio')
      }),
      Object.assign(Object.assign({}, lr(r)), {
        type: W.Dialog,
        label: t.get('plugins.toolbar.insertObjectTool.video')
      }),
      Object.assign(Object.assign({}, Qi(r)), {
        type: W.Button,
        label: t.get('plugins.toolbar.insertObjectTool.superscript')
      }),
      Object.assign(Object.assign({}, tr(r)), {
        type: W.Button,
        label: t.get('plugins.toolbar.insertObjectTool.subscript')
      }),
      Object.assign(Object.assign({}, Ki(r)), {
        type: W.Button,
        label: t.get('plugins.toolbar.insertObjectTool.code')
      }),
      Object.assign(Object.assign({}, Hi(r)), {
        type: W.Button,
        label: t.get('plugins.toolbar.insertObjectTool.blockquote')
      }),
      Object.assign(Object.assign({}, rr(r)), {
        type: W.Button,
        label: t.get('plugins.toolbar.insertObjectTool.leftToRight')
      }),
      Object.assign(Object.assign({}, ar(r)), {
        type: W.Button,
        label: t.get('plugins.toolbar.insertObjectTool.rightToLeft')
      })
    ]
  }
}
function hr() {
  return new Vi(cr)
}
const ur = (function () {
  const r = 'Arial',
    t = 'HeRe-is*SoMe%tEst +99.? !@ #~ &^teXtWw L$VEY$U0',
    o = document.createElement('canvas'),
    i = o.getContext('2d')
  ;(o.width = 200),
    (o.height = 50),
    (i.textAlign = 'center'),
    (i.fillStyle = 'black'),
    (i.textBaseline = 'middle')
  function a(l) {
    i.clearRect(0, 0, 200, 50), (i.font = 20 + 'px ' + l + ', ' + r), i.fillText(t, 200 / 2, 50 / 2)
    const c = i.getImageData(0, 0, 200, 50).data
    return Array.from(c).filter(h => h !== 0)
  }
  return function (l) {
    return l.toLowerCase() === r.toLowerCase() ? !0 : a(r).join('') !== a(l).join('')
  }
})()
function dr(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    tooltip: t.get('plugins.toolbar.fontFamilyTool.tooltip'),
    options: [
      {
        label: t.get('plugins.toolbar.fontFamilyTool.defaultFamilyText'),
        classes: ['textbus-toolbar-font-family-inherit'],
        value: '',
        default: !0
      },
      {
        label: '\u5B8B\u4F53',
        classes: ['textbus-toolbar-font-family-SimSun'],
        value: 'SimSun, STSong'
      },
      {
        label: '\u9ED1\u4F53',
        classes: ['textbus-toolbar-font-family-SimHei'],
        value: 'SimHei, STHeiti'
      },
      {
        label: '\u5FAE\u8F6F\u96C5\u9ED1',
        classes: ['textbus-toolbar-font-family-Microsoft-YaHei'],
        value: 'Microsoft YaHei'
      },
      {
        label: '\u6977\u4F53',
        classes: ['textbus-toolbar-font-family-KaiTi'],
        value: 'KaiTi, STKaiti'
      },
      {
        label: '\u4EFF\u5B8B',
        classes: ['textbus-toolbar-font-family-FangSong'],
        value: 'FangSong, STFangsong'
      },
      {
        label: '\u51AC\u9752\u9ED1\u7B80\u4F53\u4E2D\u6587',
        classes: ['textbus-toolbar-font-family-DongQingHei'],
        value: '"Hiragino Sans GB", \u51AC\u9752\u9ED1\u7B80\u4F53\u4E2D\u6587'
      },
      {
        label: '\u82F9\u65B9',
        classes: ['textbus-toolbar-font-family-PingFang'],
        value: '"PingFang SC", \u82F9\u65B9'
      },
      { label: '\u96B6\u4E66', classes: ['textbus-toolbar-font-family-SimLi'], value: 'SimLi' },
      {
        label: 'Andale Mono',
        classes: ['textbus-toolbar-font-family-andale-mono'],
        value: 'Andale Mono'
      },
      { label: 'Arial', classes: ['textbus-toolbar-font-family-Arial'], value: 'Arial' },
      {
        label: 'Helvetica',
        classes: ['textbus-toolbar-font-family-Helvetica'],
        value: 'Helvetica'
      },
      { label: 'Impact', classes: ['textbus-toolbar-font-family-Impact'], value: 'Impact' },
      {
        label: 'Times New Roman',
        classes: ['textbus-toolbar-font-family-Times-New-Roman'],
        value: 'Times New Roman'
      }
    ].map(
      n => (
        n.value &&
          (n.value
            .split(',')
            .map(o => ur(o.trim()))
            .some(o => o) ||
            (n.disabled = !0)),
        n
      )
    ),
    queryState() {
      return e.queryFormat(we)
    },
    onChecked(n) {
      n ? s.applyFormat(we, n) : s.unApplyFormat(we)
    }
  }
}
function fr() {
  return new Pe(dr)
}
function pr(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    tooltip: t.get('plugins.toolbar.fontSizeTool.tooltip'),
    iconClasses: ['textbus-icon-font-size'],
    mini: !0,
    options: [
      {
        label: t.get('plugins.toolbar.fontSizeTool.defaultSizeText'),
        classes: ['textbus-toolbar-font-size-inherit'],
        value: '',
        default: !0
      },
      { label: '12px', classes: ['textbus-toolbar-font-size-12'], value: '12px' },
      { label: '13px', classes: ['textbus-toolbar-font-size-13'], value: '13px' },
      { label: '14px', classes: ['textbus-toolbar-font-size-14'], value: '14px' },
      { label: '15px', classes: ['textbus-toolbar-font-size-15'], value: '15px' },
      { label: '16px', classes: ['textbus-toolbar-font-size-16'], value: '16px' },
      { label: '18px', classes: ['textbus-toolbar-font-size-18'], value: '18px' },
      { label: '20px', classes: ['textbus-toolbar-font-size-20'], value: '20px' },
      { label: '24px', classes: ['textbus-toolbar-font-size-24'], value: '24px' },
      { label: '36px', classes: ['textbus-toolbar-font-size-36'], value: '36px' },
      { label: '48px', classes: ['textbus-toolbar-font-size-48'], value: '48px' }
    ],
    queryState() {
      return e.queryFormat(Nt)
    },
    onChecked(n) {
      n ? s.applyFormat(Nt, n) : s.unApplyFormat(Nt)
    }
  }
}
function mr() {
  return new Pe(pr)
}
function gr(r) {
  const t = r.get(P),
    e = r.get(L),
    s = r.get(Vt),
    n = r.get(R),
    o = r.get(Rt)
  let i = !1
  return {
    iconClasses: ['textbus-icon-brush'],
    tooltip: n.get('plugins.toolbar.formatPainterTool.tooltip'),
    queryState() {
      return i
        ? { state: v.Enabled, value: null }
        : { state: t.isSelected ? v.Normal : v.Disabled, value: null }
    },
    onClick() {
      if (!t.isSelected) return
      i = !0
      const a = t.startSlot,
        l = a.extractFormatsByIndex(t.startOffset),
        c = a.parent,
        h = [ae, Ne],
        u = [z, ie, ae, Ne, re].map(x => x.name)
      let d = z.name,
        f = null
      u.includes(c.name) &&
        ((d = c.name),
        (f =
          typeof c.state == 'object' && c.state !== null
            ? JSON.parse(JSON.stringify(c.state))
            : c.state)),
        a.changeMarker.forceMarkChanged()
      const { Text: p, InlineComponent: m, BlockComponent: g } = b
      I(s, 'mouseup')
        .pipe(eo(1), rn(10))
        .subscribe(() => {
          ;(i = !1),
            e.cleanFormats([et]),
            l.forEach(x => {
              e.applyFormat(x[0], x[1])
            }),
            e.transform({
              multipleSlot: h.map(x => x.name).includes(d),
              target: o.getComponent(d),
              slotFactory() {
                return new T(d === ie.name ? [p, m, g] : [p, m], a.state)
              },
              stateFactory() {
                return f
              }
            })
        })
    }
  }
}
function br() {
  return new Q(gr)
}
function yr(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    tooltip: t.get('plugins.toolbar.headingTool.tooltip'),
    options: [
      {
        label: t.get('plugins.toolbar.headingTool.h1'),
        classes: ['textbus-toolbar-h1'],
        value: 'h1',
        keymap: { ctrlKey: !0, key: '1' }
      },
      {
        label: t.get('plugins.toolbar.headingTool.h2'),
        classes: ['textbus-toolbar-h2'],
        value: 'h2',
        keymap: { ctrlKey: !0, key: '2' }
      },
      {
        label: t.get('plugins.toolbar.headingTool.h3'),
        classes: ['textbus-toolbar-h3'],
        value: 'h3',
        keymap: { ctrlKey: !0, key: '3' }
      },
      {
        label: t.get('plugins.toolbar.headingTool.h4'),
        classes: ['textbus-toolbar-h4'],
        value: 'h4',
        keymap: { ctrlKey: !0, key: '4' }
      },
      {
        label: t.get('plugins.toolbar.headingTool.h5'),
        classes: ['textbus-toolbar-h5'],
        value: 'h5',
        keymap: { ctrlKey: !0, key: '5' }
      },
      {
        label: t.get('plugins.toolbar.headingTool.h6'),
        classes: ['textbus-toolbar-h6'],
        value: 'h6',
        keymap: { ctrlKey: !0, key: '6' }
      },
      {
        label: t.get('plugins.toolbar.headingTool.paragraph'),
        value: 'p',
        default: !0,
        keymap: { ctrlKey: !0, key: '0' }
      }
    ],
    queryState() {
      const n = e.queryComponent(re)
      if (n.state === v.Enabled) return { state: v.Enabled, value: n.value.extends.type }
      const o = e.queryComponent(z)
      return { state: o.state, value: o.state === v.Enabled ? 'p' : null }
    },
    onChecked(n) {
      const o = /h[1-6]/.test(n)
      s.transform({
        target: o ? re : z,
        multipleSlot: !1,
        slotFactory() {
          return new T([b.Text, b.InlineComponent])
        },
        stateFactory() {
          if (o) return n
        }
      })
    }
  }
}
function xr() {
  return new Pe(yr)
}
function vr(r) {
  const t = r.get(R),
    e = r.get(Dt)
  return {
    iconClasses: ['textbus-icon-history-back'],
    tooltip: t.get('plugins.toolbar.historyBackTool.tooltip'),
    keymap: { ctrlKey: !0, key: 'z' },
    queryState() {
      return { state: e.canBack ? v.Normal : v.Disabled, value: null }
    },
    onClick() {
      e.back()
    }
  }
}
function Cr() {
  return new Q(vr)
}
function wr(r) {
  const t = r.get(R),
    e = r.get(Dt)
  return {
    iconClasses: ['textbus-icon-history-forward'],
    tooltip: t.get('plugins.toolbar.historyForwardTool.tooltip'),
    keymap: { ctrlKey: !0, shiftKey: !0, key: 'z' },
    queryState() {
      return { state: e.canForward ? v.Normal : v.Disabled, value: null }
    },
    onClick() {
      e.forward()
    }
  }
}
function Sr() {
  return new Q(wr)
}
function kr(r) {
  const t = r.get(R),
    e = r.get(L),
    s = r.get(Kt),
    n = t.getContext('plugins.toolbar.imageTool.view'),
    o = new Ct({
      mini: !0,
      confirmBtnText: n.get('confirmBtnText'),
      items: [
        new at({
          label: n.get('linkLabel'),
          name: 'src',
          placeholder: n.get('linkInputPlaceholder')
        }),
        new Ho({
          name: '',
          value: '',
          label: n.get('uploadLabel'),
          btnText: n.get('uploadBtnText'),
          iconClasses: ['textbus-icon-upload'],
          onClick() {
            s.upload({ multiple: !0, uploadType: 'image', currentValue: '' }).subscribe(i => {
              typeof i == 'string' && (i = [i]),
                i.forEach(a => {
                  e.insert(Ke.createInstance(r, { state: { src: a } }))
                })
            })
          }
        })
      ]
    })
  return {
    iconClasses: ['textbus-icon-image'],
    tooltip: t.get('plugins.toolbar.imageTool.tooltip'),
    queryState() {
      return { state: v.Normal, value: null }
    },
    viewController: o,
    useValue(i) {
      !i || e.insert(Ke.createInstance(r, { state: { src: i.src } }))
    }
  }
}
function Er() {
  return new Xe(kr)
}
function Tr(r) {
  const t = r.get(R),
    e = r.get(L),
    s = r.get(P)
  return {
    iconClasses: ['textbus-icon-insert-paragraph-after'],
    tooltip: t.get('plugins.toolbar.insertParagraphAfterTool.tooltip'),
    keymap: { ctrlKey: !0, key: 'p' },
    queryState() {
      var n
      return s.isSelected && !((n = s.commonAncestorComponent) === null || n === void 0) && n.parent
        ? { state: v.Normal, value: null }
        : { state: v.Disabled, value: null }
    },
    onClick() {
      const n = z.createInstance(r)
      e.insertAfter(n, s.commonAncestorComponent), s.setPosition(n.slots.get(0), 0)
    }
  }
}
function Nr() {
  return new Q(Tr)
}
function Rr(r) {
  const t = r.get(R),
    e = r.get(L),
    s = r.get(P)
  return {
    iconClasses: ['textbus-icon-insert-paragraph-before'],
    tooltip: t.get('plugins.toolbar.insertParagraphBeforeTool.tooltip'),
    keymap: { ctrlKey: !0, shiftKey: !0, key: 'p' },
    queryState() {
      var n
      return s.isSelected && !((n = s.commonAncestorComponent) === null || n === void 0) && n.parent
        ? { state: v.Normal, value: null }
        : { state: v.Disabled, value: null }
    },
    onClick() {
      const n = z.createInstance(r)
      e.insertBefore(n, s.commonAncestorComponent), s.setPosition(n.slots.get(0), 0)
    }
  }
}
function Ar() {
  return new Q(Rr)
}
function Or(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    iconClasses: ['textbus-icon-italic'],
    tooltip: t.get('plugins.toolbar.italicTool.tooltip'),
    keymap: { ctrlKey: !0, key: 'i' },
    queryState() {
      return e.queryFormat(Yt)
    },
    onClick() {
      e.queryFormat(Yt).state === v.Enabled ? s.unApplyFormat(Yt) : s.applyFormat(Yt, !0)
    }
  }
}
function Ir() {
  return new Q(Or)
}
function Pr(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L),
    n = r.get(P),
    o = t.getContext('plugins.toolbar.linkTool.view'),
    i = new Ct({
      mini: !0,
      items: [
        new at({
          label: o.get('linkLabel'),
          name: 'href',
          placeholder: o.get('linkInputPlaceholder'),
          validateFn(a) {
            const l = document.createElement('a')
            return (l.href = a), l.hostname ? !1 : o.get('invalidMessage')
          }
        }),
        new Rn({
          label: o.get('jumpLabel'),
          name: 'target',
          values: [
            { label: o.get('jumpSelfLabel'), value: '_self', default: !0 },
            { label: o.get('jumpBlankLabel'), value: '_blank' }
          ]
        })
      ]
    })
  return {
    iconClasses: ['textbus-icon-link'],
    tooltip: t.get('plugins.toolbar.linkTool.tooltip'),
    viewController: i,
    queryState() {
      return e.queryFormat(et)
    },
    useValue(a) {
      if (n.isCollapsed) {
        const l = n.startSlot
        l.getFormatRangesByFormatter(et, 0, l.length)
          .filter(c => c.startIndex < n.startOffset && c.endIndex >= n.endOffset)
          .forEach(c => {
            l.retain(c.startIndex), l.retain(c.endIndex - c.startIndex, et, a)
          })
      }
      s.applyFormat(et, a)
    }
  }
}
function Lr() {
  return new Xe(Pr)
}
function zn(r, t) {
  const e = r.get(P),
    s = r.get(L),
    n = {
      queryState() {
        const o = e.commonAncestorComponent
        return (o == null ? void 0 : o.name) === ae.name && o.extends.type === t
          ? { state: v.Enabled, value: o }
          : { state: v.Normal, value: null }
      },
      onClick() {
        n.queryState().state === v.Normal ? n.toList() : n.toParagraph()
      },
      toParagraph() {
        s.transform({
          target: z,
          multipleSlot: !1,
          slotFactory() {
            return new T([b.Text, b.InlineComponent])
          }
        })
      },
      toList() {
        s.transform({
          target: ae,
          multipleSlot: !0,
          slotFactory() {
            return new T([b.Text, b.InlineComponent])
          },
          stateFactory() {
            return t
          }
        })
      }
    }
  return n
}
function Br(r) {
  const t = r.get(R)
  return Object.assign(
    {
      iconClasses: ['textbus-icon-list-numbered'],
      tooltip: t.get('plugins.toolbar.olTool.tooltip'),
      keymap: { shiftKey: !0, ctrlKey: !0, key: 'o' }
    },
    zn(r, 'ol')
  )
}
function Fr() {
  return new Q(Br)
}
function _r(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    iconClasses: ['textbus-icon-strikethrough'],
    tooltip: t.get('plugins.toolbar.strikeThrough.tooltip'),
    keymap: { ctrlKey: !0, key: 'd' },
    queryState() {
      return e.queryFormat(Zt)
    },
    onClick() {
      e.queryFormat(Zt).state === v.Enabled ? s.unApplyFormat(Zt) : s.applyFormat(Zt, !0)
    }
  }
}
function Mr() {
  return new Q(_r)
}
function Dr(r) {
  const t = r.get(R),
    e = r.get(L),
    s = r.get(P),
    n = t.getContext('plugins.toolbar.tableAddTool.view'),
    o = new Ct({
      mini: !0,
      confirmBtnText: n.get('confirmBtnText'),
      items: [
        new Xs({ name: 'rows', label: n.get('rowLabel'), placeholder: n.get('rowPlaceholder') }),
        new Xs({
          name: 'cols',
          label: n.get('columnLabel'),
          placeholder: n.get('columnPlaceholder')
        }),
        new ks({ label: n.get('useTextbusStyleLabel'), name: 'useTextbusStyle', checked: !0 })
      ]
    }),
    i = document.createElement('div')
  i.classList.add('textbus-toolbar-table-quick-selector')
  const a = new Map()
  for (let c = 0; c < 10; c++)
    for (let h = 0; h < 10; h++)
      ((u, d) => {
        const f = document.createElement('div')
        i.appendChild(f), a.set(f, { row: u, col: d })
      })(c, h)
  let l = !1
  return (
    i.addEventListener('mouseover', c => {
      if (l) return
      const h = c.target,
        u = a.get(h)
      u &&
        (a.forEach((d, f) => {
          d.row <= u.row && d.col <= u.col
            ? f.classList.add('textbus-toolbar-table-quick-selector-selected')
            : f.classList.remove('textbus-toolbar-table-quick-selector-selected')
        }),
        o.update({ cols: u.col + 1, rows: u.row + 1 }))
    }),
    i.addEventListener('mouseleave', () => {
      l ||
        (Array.from(a.keys()).forEach(c =>
          c.classList.remove('textbus-toolbar-table-quick-selector-selected')
        ),
        o.update({})),
        (l = !1)
    }),
    i.addEventListener('click', () => {
      l = !0
    }),
    o.elementRef.insertBefore(i, o.elementRef.childNodes[0]),
    {
      iconClasses: ['textbus-icon-table'],
      tooltip: t.get('plugins.toolbar.tableAddTool.tooltip'),
      viewController: o,
      queryState() {
        return { state: v.Normal, value: null }
      },
      useValue(c) {
        function h(d, f) {
          const p = [],
            m = d * f
          for (let g = 0; g < m; g++) p.push(dt())
          return p
        }
        const u = ce.createInstance(r, {
          slots: h(c.rows || 4, c.cols || 6),
          state: {
            useTextbusStyle: c.useTextbusStyle,
            columnCount: c.cols || 6,
            rowCount: c.rows || 4
          }
        })
        e.insert(u), s.setPosition(u.slots.get(0), 0)
      }
    }
  )
}
function Vr() {
  return new Xe(Dr)
}
function qr(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    iconClasses: ['textbus-icon-table-remove'],
    tooltip: t.get('plugins.toolbar.tableRemoveTool.tooltip'),
    queryState() {
      const n = e.queryComponent(ce)
      return (
        n.state !== v.Enabled
          ? (n.state = v.Disabled)
          : n.state === v.Enabled && (n.state = v.Normal),
        n
      )
    },
    onClick() {
      const n = e.queryComponent(ce)
      n.state === v.Enabled && s.removeComponent(n.value)
    }
  }
}
function Hr() {
  return new Q(qr)
}
function zr(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    tooltip: t.get('plugins.toolbar.textAlignTool.tooltip'),
    options: [
      {
        label: t.get('plugins.toolbar.textAlignTool.left'),
        iconClasses: ['textbus-icon-paragraph-left'],
        value: 'left',
        keymap: { ctrlKey: !0, key: 'l' },
        default: !0
      },
      {
        label: t.get('plugins.toolbar.textAlignTool.right'),
        iconClasses: ['textbus-icon-paragraph-right'],
        value: 'right',
        keymap: { ctrlKey: !0, key: 'r' }
      },
      {
        label: t.get('plugins.toolbar.textAlignTool.center'),
        iconClasses: ['textbus-icon-paragraph-center'],
        value: 'center',
        keymap: { ctrlKey: !0, key: 'e' }
      },
      {
        label: t.get('plugins.toolbar.textAlignTool.justify'),
        iconClasses: ['textbus-icon-paragraph-justify'],
        value: 'justify',
        keymap: { ctrlKey: !0, key: 'j' }
      }
    ],
    queryState() {
      return e.queryAttribute(le)
    },
    onChecked(n) {
      s.applyAttribute(le, n)
    }
  }
}
function jr() {
  return new Pe(zr)
}
function $r(r) {
  const t = r.get(R).getContext('plugins.toolbar.textBackgroundColorTool'),
    e = new qs(
      'color',
      t.get('view.btnText'),
      t.get('view.recentText'),
      t.get('view.backText'),
      t.get('view.paletteText')
    )
  return Object.assign(
    { iconClasses: ['textbus-icon-background-color'], tooltip: t.get('tooltip') },
    Hn(r, e, Bs)
  )
}
function Ur() {
  return new qn($r)
}
function Kr(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    tooltip: t.get('plugins.toolbar.textIndentTool.tooltip'),
    iconClasses: ['textbus-icon-text-indent'],
    mini: !0,
    options: [
      { label: '0x', value: '0', classes: ['textbus-toolbar-text-indent-0'], default: !0 },
      { label: '1x', value: '1em', classes: ['textbus-toolbar-text-indent-1'] },
      { label: '2x', classes: ['textbus-toolbar-text-indent-2'], value: '2em' },
      { label: '4x', classes: ['textbus-toolbar-text-indent-4'], value: '4em' }
    ],
    queryState() {
      return e.queryAttribute(ve)
    },
    onChecked(n) {
      n === '0' ? s.unApplyAttribute(ve) : s.applyAttribute(ve, n)
    }
  }
}
function Wr() {
  return new Pe(Kr)
}
function Jr(r) {
  const t = r.get(R)
  return Object.assign(
    {
      iconClasses: ['textbus-icon-list'],
      tooltip: t.get('plugins.toolbar.ulTool.tooltip'),
      keymap: { shiftKey: !0, ctrlKey: !0, key: 'u' }
    },
    zn(r, 'ul')
  )
}
function Gr() {
  return new Q(Jr)
}
function Xr(r) {
  const t = r.get(R),
    e = r.get(D),
    s = r.get(L)
  return {
    iconClasses: ['textbus-icon-underline'],
    tooltip: t.get('plugins.toolbar.underlineTool.tooltip'),
    keymap: { ctrlKey: !0, key: 'u' },
    queryState() {
      return e.queryFormat(Qt)
    },
    onClick() {
      e.queryFormat(Qt).state === v.Enabled ? s.unApplyFormat(Qt) : s.applyFormat(Qt, !0)
    }
  }
}
function Yr() {
  return new Q(Xr)
}
function Zr(r) {
  const t = r.get(R),
    e = r.get(P),
    s = r.get(D),
    n = r.get(L)
  return {
    tooltip: t.get('plugins.toolbar.unlinkTool.tooltip'),
    iconClasses: ['textbus-icon-unlink'],
    queryState() {
      const o = s.queryFormat(et)
      return o.state === v.Normal && (o.state = v.Disabled), o
    },
    onClick() {
      if (e.isCollapsed) {
        const o = e.startSlot
        o.getFormatRangesByFormatter(et, 0, o.length)
          .filter(i => i.startIndex < e.startOffset && i.endIndex >= e.endOffset)
          .forEach(i => {
            o.retain(i.startIndex), o.retain(i.endIndex - i.startIndex, et, null)
          })
      } else n.unApplyFormat(et)
    }
  }
}
function Qr() {
  return new Q(Zr)
}
var ta =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, s) {
      var n = arguments.length,
        o = n < 3 ? t : s === null ? (s = Object.getOwnPropertyDescriptor(t, e)) : s,
        i
      if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
        o = Reflect.decorate(r, t, e, s)
      else
        for (var a = r.length - 1; a >= 0; a--)
          (i = r[a]) && (o = (n < 3 ? i(o) : n > 3 ? i(t, e, o) : i(t, e)) || o)
      return n > 3 && o && Object.defineProperty(t, e, o), o
    },
  ea =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
        return Reflect.metadata(r, t)
    }
let he = class {
  constructor(t = !1) {
    ;(this._top = y('div', { classes: ['textbus-ui-top'] })),
      (this._bottom = y('div', { classes: ['textbus-ui-bottom'] })),
      (this.isAppendTop = !1),
      (this.isAppendBottom = !1),
      (this.sub = null),
      (this.container = y('div', {
        classes: ['textbus-container'],
        children: [
          (this.middle = y('div', {
            classes: ['textbus-ui-middle'],
            children: [
              (this.workbench = y('div', {
                classes: ['textbus-ui-workbench'],
                children: [(this.scroller = y('div', { classes: ['textbus-ui-scroller'] }))]
              }))
            ]
          }))
        ]
      })),
      t &&
        ((this.container.style.height = 'auto'),
        (this.scroller.style.overflow = 'visible'),
        (this.workbench.style.position = 'static'))
  }
  get top() {
    return (
      this.isAppendTop || (this.container.prepend(this._top), (this.isAppendTop = !0)), this._top
    )
  }
  get bottom() {
    return (
      this.isAppendBottom || (this.container.append(this._bottom), (this.isAppendBottom = !0)),
      this._bottom
    )
  }
  setTheme(t) {
    this.container.classList.add('textbus-theme-' + t)
  }
  destroy() {
    var t
    ;(t = this.sub) === null || t === void 0 || t.unsubscribe()
  }
}
he = ta([j(), ea('design:paramtypes', [Object])], he)
const sa = jt('Toolbar')
class na {
  constructor(t = [], e) {
    ;(this.toolFactories = t),
      (this.host = e),
      (this.subs = []),
      (this.tools = t.map(s => (Array.isArray(s) ? s.map(n => n()) : s())))
  }
  setup(t) {
    const e = t.get(he),
      s = t.get(P),
      n = t.get(nt),
      o = t.get(Ie)
    ;(this.elementRef = y('div', {
      classes: ['textbus-toolbar'],
      children: [
        (this.toolWrapper = y('div', { classes: ['textbus-toolbar-wrapper'] })),
        (this.keymapPrompt = y('div', { classes: ['textbus-toolbar-keymap-prompt'] }))
      ]
    })),
      o.theme && this.elementRef.classList.add('textbus-toolbar-' + o.theme)
    const i = this.host
    if (i) {
      let l
      if (
        (typeof i == 'string' ? (l = document.querySelector(i)) : (l = i),
        !l || !(l instanceof HTMLElement))
      )
        throw sa(
          'selector is not an HTMLElement, or the CSS selector cannot find a DOM element in the document.'
        )
      l.append(this.elementRef)
    } else e.top.append(this.elementRef)
    this.tools.forEach(l => {
      const c = document.createElement('div')
      if (
        (c.classList.add('textbus-toolbar-group'),
        this.toolWrapper.appendChild(c),
        Array.isArray(l))
      ) {
        l.forEach(h => {
          c.appendChild(h.setup(t, this.toolWrapper))
        })
        return
      }
      c.appendChild(l.setup(t, this.toolWrapper))
    })
    const a = this.tools.flat()
    this.subs.push(
      We(s.onChange, n.onViewUpdated)
        .pipe(so(100))
        .subscribe(() => {
          a.forEach(l => {
            l.refreshState()
          })
        }),
      I(this.elementRef, 'mouseover').subscribe(l => {
        const c = this.findNeedShowKeymapHandler(l.target)
        if (c)
          try {
            const h = JSON.parse(c)
            ;(this.keymapPrompt.innerHTML = ''),
              this.keymapPrompt.append(...Vs(h)),
              this.keymapPrompt.classList.add('textbus-toolbar-keymap-prompt-show')
            return
          } catch {}
        this.keymapPrompt.classList.remove('textbus-toolbar-keymap-prompt-show')
      })
    )
  }
  onDestroy() {
    this.subs.forEach(t => t.unsubscribe())
  }
  findNeedShowKeymapHandler(t) {
    return t === this.elementRef
      ? ''
      : t.dataset.keymap
      ? t.dataset.keymap
      : this.findNeedShowKeymapHandler(t.parentNode)
  }
}
var oa =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, s) {
      var n = arguments.length,
        o = n < 3 ? t : s === null ? (s = Object.getOwnPropertyDescriptor(t, e)) : s,
        i
      if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
        o = Reflect.decorate(r, t, e, s)
      else
        for (var a = r.length - 1; a >= 0; a--)
          (i = r[a]) && (o = (n < 3 ? i(o) : n > 3 ? i(t, e, o) : i(t, e)) || o)
      return n > 3 && o && Object.defineProperty(t, e, o), o
    },
  ia =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
        return Reflect.metadata(r, t)
    }
let Re = class {
  constructor(t) {
    ;(this.layout = t),
      (this.messageBox = y('div', { classes: ['textbus-message'] })),
      this.layout.workbench.append(this.messageBox)
  }
  message(t, e) {
    this.createMessage('message', t, e)
  }
  info(t, e) {
    this.createMessage('info', t, e)
  }
  success(t, e) {
    this.createMessage('success', t, e)
  }
  warning(t, e) {
    this.createMessage('warning', t, e)
  }
  danger(t, e) {
    this.createMessage('danger', t, e)
  }
  createMessage(t, e, s = 3e3) {
    const n = y('div', {
      classes: ['textbus-message-item', 'textbus-message-item-' + t],
      children: [U(e)]
    })
    this.messageBox.append(n),
      setTimeout(() => {
        n.remove()
      }, s)
  }
}
Re = oa([j(), ia('design:paramtypes', [he])], Re)
var ra =
    (globalThis && globalThis.__decorate) ||
    function (r, t, e, s) {
      var n = arguments.length,
        o = n < 3 ? t : s === null ? (s = Object.getOwnPropertyDescriptor(t, e)) : s,
        i
      if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
        o = Reflect.decorate(r, t, e, s)
      else
        for (var a = r.length - 1; a >= 0; a--)
          (i = r[a]) && (o = (n < 3 ? i(o) : n > 3 ? i(t, e, o) : i(t, e)) || o)
      return n > 3 && o && Object.defineProperty(t, e, o), o
    },
  aa =
    (globalThis && globalThis.__metadata) ||
    function (r, t) {
      if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
        return Reflect.metadata(r, t)
    },
  la =
    (globalThis && globalThis.__param) ||
    function (r, t) {
      return function (e, s) {
        t(e, s, r)
      }
    }
let Ee = class {
  constructor(t, e, s, n, o, i, a, l, c) {
    ;(this.container = t),
      (this.injector = e),
      (this.rootComponentRef = s),
      (this.i18n = n),
      (this.parser = o),
      (this.message = i),
      (this.renderer = a),
      (this.commander = l),
      (this.selection = c),
      (this.eventFromSelf = !1),
      (this.subs = []),
      (this.menuSubscriptions = []),
      (this.submenuSubscriptions = []),
      this.subs.push(
        I(document, 'mousedown').subscribe(() => {
          this.hide()
        }),
        I(t, 'contextmenu').subscribe(h => {
          const u = document.getSelection(),
            d = u.focusNode,
            f = u.focusOffset,
            p = u.isCollapsed
          setTimeout(() => {
            p && (u.isCollapsed || u.collapse(d, f))
          })
          const m = this.makeContextmenu(h.target),
            g = [
              {
                iconClasses: ['textbus-icon-copy'],
                label: this.i18n.get('editor.copy'),
                disabled: this.selection.isCollapsed,
                onClick: () => {
                  this.commander.copy()
                }
              },
              {
                iconClasses: ['textbus-icon-paste'],
                label: this.i18n.get('editor.paste'),
                onClick: () => {
                  navigator.permissions.query({ name: 'clipboard-write' }).then(x => {
                    x.state === 'granted'
                      ? navigator.clipboard.read().then(S => {
                          const N = S[0]
                          N.types
                            .filter(E => E === 'text/html')
                            .forEach(E => {
                              N.getType(E)
                                .then(k => k.text())
                                .then(k => {
                                  const w = document.createElement('div')
                                  ;(w.innerHTML = k),
                                    this.commander.paste(
                                      this.parser.parse(
                                        k,
                                        new T([b.BlockComponent, b.Text, b.InlineComponent])
                                      ),
                                      w.innerText
                                    )
                                })
                            })
                        })
                      : this.message.danger(this.i18n.get('editor.input.canNotAccessClipboard'))
                  })
                }
              },
              {
                iconClasses: ['textbus-icon-cut'],
                label: this.i18n.get('editor.cut'),
                disabled: this.selection.isCollapsed,
                onClick: () => {
                  this.commander.cut()
                }
              },
              {
                iconClasses: ['textbus-icon-select'],
                label: this.i18n.get('editor.selectAll'),
                onClick: () => {
                  this.selection.selectAll()
                }
              }
            ]
          ;(this.menu = this.show(
            [
              ...m,
              g,
              [
                {
                  label: this.i18n.get('editor.insertParagraphBefore'),
                  iconClasses: ['textbus-icon-insert-paragraph-before'],
                  disabled:
                    this.selection.commonAncestorComponent === this.rootComponentRef.component,
                  onClick: () => {
                    const x = z.createInstance(this.injector),
                      S = this.selection.commonAncestorComponent
                    S && (this.commander.insertBefore(x, S), this.selection.selectFirstPosition(x))
                  }
                },
                {
                  label: this.i18n.get('editor.insertParagraphAfter'),
                  iconClasses: ['textbus-icon-insert-paragraph-after'],
                  disabled:
                    this.selection.commonAncestorComponent === this.rootComponentRef.component,
                  onClick: () => {
                    const x = z.createInstance(this.injector),
                      S = this.selection.commonAncestorComponent
                    S && (this.commander.insertAfter(x, S), this.selection.selectFirstPosition(x))
                  }
                }
              ]
            ],
            h.clientX,
            h.clientY,
            this.menuSubscriptions
          )),
            h.preventDefault()
        })
      )
  }
  destroy() {
    this.hide(), this.subs.forEach(t => t.unsubscribe()), (this.subs = [])
  }
  makeContextmenu(t) {
    if (!this.selection.startSlot) return []
    let s = null
    do {
      const n = this.renderer.getLocationByNativeNode(t)
      if (n) {
        const o = n.slot.getContentAtIndex(n.startIndex)
        n.endIndex - n.startIndex === 1 && typeof o == 'object' ? (s = o) : (s = n.slot.parent)
        break
      } else t = t.parentNode
    } while (t)
    return s || (s = this.selection.commonAncestorComponent), s ? fo(s) : []
  }
  hide() {
    var t, e, s, n
    this.menuSubscriptions.forEach(o => o.unsubscribe()),
      (this.menuSubscriptions = []),
      (e = (t = this.menu) === null || t === void 0 ? void 0 : t.parentNode) === null ||
        e === void 0 ||
        e.removeChild(this.menu),
      (n = (s = this.submenu) === null || s === void 0 ? void 0 : s.parentNode) === null ||
        n === void 0 ||
        n.removeChild(this.submenu)
  }
  show(t, e, s, n) {
    let o
    const i = y('div', {
      classes: ['textbus-contextmenu'],
      children: [
        y('div', {
          classes: ['textbus-contextmenu-container'],
          children: [(o = y('div', { classes: ['textbus-contextmenu-groups'] }))]
        })
      ]
    })
    n.push(
      I(i, 'contextmenu').subscribe(d => {
        d.preventDefault()
      }),
      I(document, 'mousedown').subscribe(() => {
        this.eventFromSelf || this.hide()
      }),
      I(window, 'resize').subscribe(() => {
        a()
      })
    )
    const a = () => {
      const d = document.documentElement.clientWidth,
        f = document.documentElement.clientHeight
      e + h >= d && (e -= h),
        s + u >= f - 20 && (s = f - u - 20),
        s < 20 && (s = 20),
        Object.assign(i.style, { left: e + 'px', top: s + 'px' }),
        (i.style.maxHeight = f - s - 20 + 'px')
    }
    let l = 0
    const c = []
    t.forEach(d => {
      ;(l += d.length),
        d.length !== 0 &&
          o.appendChild(
            y('div', {
              classes: ['textbus-contextmenu-group'],
              children: d
                .map(f =>
                  Array.isArray(f.submenu)
                    ? Object.assign(Object.assign({}, this.createMenuView(f, !0)), { item: f })
                    : Object.assign(Object.assign({}, this.createMenuView(f)), { item: f })
                )
                .map(f => {
                  const { wrapper: p, btn: m, item: g } = f
                  return (
                    c.push(p),
                    n.push(
                      I(m, 'mouseenter').subscribe(() => {
                        var x
                        if (
                          !g.disabled &&
                          n === this.menuSubscriptions &&
                          (this.submenu &&
                            ((x = this.submenu.parentNode) === null ||
                              x === void 0 ||
                              x.removeChild(this.submenu),
                            this.submenuSubscriptions.forEach(S => S.unsubscribe()),
                            (this.submenuSubscriptions = [])),
                          c.forEach(S => S.classList.remove('textbus-contextmenu-item-active')),
                          Array.isArray(g.submenu))
                        ) {
                          const S = p.getBoundingClientRect(),
                            N = this.show(
                              [g.submenu],
                              S.left + S.width,
                              S.top,
                              this.submenuSubscriptions
                            )
                          p.classList.add('textbus-contextmenu-item-active'), (this.submenu = N)
                        }
                      })
                    ),
                    !g.disabled &&
                      typeof g.onClick == 'function' &&
                      (m.addEventListener('mousedown', x => {
                        ;(this.eventFromSelf = !0), x.stopPropagation()
                      }),
                      m.addEventListener('click', () => {
                        this.hide(), g.onClick(), (this.eventFromSelf = !1)
                      })),
                    f.wrapper
                  )
                })
            })
          )
    })
    const h = 180 + 10,
      u = l * 26 + t.length * 10 + t.length + 10
    return a(), document.body.appendChild(i), i
  }
  createMenuView(t, e = !1) {
    const s = y('button', {
      attrs: { type: 'button' },
      classes: ['textbus-contextmenu-item-btn'],
      props: { disabled: t.disabled },
      children: [
        y('span', {
          classes: ['textbus-contextmenu-item-icon'],
          children: [y('span', { classes: t.iconClasses || [] })]
        }),
        y('span', { classes: ['textbus-contextmenu-item-label'], children: [U(t.label)] }),
        e ? y('span', { classes: ['textbus-contextmenu-item-arrow'] }) : null
      ]
    })
    return {
      wrapper: y('div', {
        classes: t.disabled
          ? ['textbus-contextmenu-item', 'textbus-contextmenu-item-disabled']
          : ['textbus-contextmenu-item'],
        children: [s]
      }),
      btn: s
    }
  }
}
Ee = ra(
  [j(), la(0, yt(zt)), aa('design:paramtypes', [HTMLElement, ft, st, R, Tt, Re, nt, L, P])],
  Ee
)
const jn = K({
    type: b.BlockComponent,
    name: 'RootComponent',
    setup(r) {
      const t = G(),
        e = t.get(P),
        s = t.get(Ie),
        n = t.get(Vt),
        o = kt(),
        i = Z(
          (r == null ? void 0 : r.slots) || [new T([b.Text, b.BlockComponent, b.InlineComponent])]
        )
      mo(c => {
        if (typeof c.data.content == 'string' || c.data.content.type !== b.BlockComponent) {
          const h = z.createInstance(t),
            u = h.slots.get(0)
          u.insert(c.data.content),
            c.target.insert(h),
            e.setPosition(u, u.index),
            c.preventDefault()
        }
      }),
        fe(c => {
          const h = z.createInstance(t)
          i.get(0).insert(h), e.setPosition(h.slots.get(0), 0), c.preventDefault()
        }),
        ms(c => {
          c.preventDefault()
        })
      const a = ps(),
        l = new Ht()
      return (
        mn(() => {
          l.add(
            I(n, 'click').subscribe(c => {
              const h = a.current.getBoundingClientRect(),
                u = i.first
              if (c.clientY > h.top + h.height - 30) {
                const d = u.getContentAtIndex(u.length - 1)
                if (!u.isEmpty && typeof d != 'string' && d.name !== z.name) {
                  const f = u.index
                  u.retain(u.length)
                  const p = z.createInstance(t)
                  u.insert(p), u.retain(f), e.setPosition(p.slots.get(0), 0)
                }
              } else if (c.target === a.current) {
                let d = e.focusSlot.parent
                for (; d && d.parentComponent !== o; ) d = d.parentComponent
                if (!d) return
                const f = u.indexOf(d)
                f > -1 &&
                  (c.clientX - h.left < 4
                    ? (e.setPosition(u, f), e.restore())
                    : h.left + h.width - c.clientX < 4 && (e.setPosition(u, f + 1), e.restore()))
              }
            })
          )
        }),
        pt(() => {
          l.unsubscribe()
        }),
        {
          render(c) {
            return c(i.get(0), h => {
              var u
              return new C(
                'div',
                {
                  'textbus-document': 'true',
                  ref: a,
                  style: { padding: '8px 8px 30px' },
                  'data-placeholder':
                    (!((u = i.get(0)) === null || u === void 0) && u.isEmpty && s.placeholder) || ''
                },
                h
              )
            })
          }
        }
      )
    }
  }),
  ca = {
    match() {
      return !0
    },
    read(r, t, e) {
      const s = new T([b.Text, b.BlockComponent, b.InlineComponent])
      return e(s, r), jn.createInstance(t, { state: null, slots: [s] })
    }
  },
  ha = jt('Editor')
class Hs extends Xt {
  constructor(t = {}) {
    super(
      t.rootComponent || jn,
      t.rootComponentLoader || ca,
      (() => {
        const e = [
          { provide: he, useFactory: () => this.layout },
          { provide: R, useValue: new R(Li, t.i18n) },
          { provide: Hs, useFactory: () => this },
          {
            provide: Kt,
            useFactory(s, n, o) {
              return {
                upload: i => {
                  if (
                    (s.isSelected || (s.usePaths({ anchor: [0, 0], focus: [0, 0] }), s.restore()),
                    typeof t.uploader == 'function')
                  ) {
                    const a = t.uploader(i)
                    if (a instanceof ue) return a
                    if (a instanceof Promise) return no(a)
                    if (typeof a == 'string') return Le(a)
                    if (Array.isArray(a)) return Le(a)
                  }
                  return n.message(o.get('editor.noUploader')), i.multiple ? Le([]) : Le('')
                }
              }
            },
            deps: [P, Re, R]
          },
          Ee,
          xt,
          Re
        ]
        return (
          (t.providers = t.providers || []),
          t.providers.push(...e),
          (t.editingStyleSheets = t.editingStyleSheets || []),
          t.editingStyleSheets.push(
            '[textbus-document=true]::before {content: attr(data-placeholder); position: absolute; opacity: 0.6;}'
          ),
          t
        )
      })()
    ),
      (this.host = null),
      (this.readyEvent = new F()),
      (this.onReady = this.readyEvent.asObservable()),
      (this.layout = new he(t.autoHeight)),
      t.theme && this.layout.setTheme(t.theme),
      t.autoHeight && (this.layout.scroller.style.overflow = 'visible')
  }
  mount(t) {
    if (
      (typeof t == 'string' ? (this.host = document.querySelector(t)) : (this.host = t),
      !this.host || !(this.host instanceof HTMLElement))
    )
      throw ha(
        'selector is not an HTMLElement, or the CSS selector cannot find a DOM element in the document.'
      )
    return (
      this.host.append(this.layout.container),
      super.mount(this.layout.scroller).then(e => {
        if ((e.get(Ee), this.destroyed)) return e
        if (!this.options.autoHeight) {
          const s = this.layout.scroller
          e.get(qt).caret.correctScrollTop({
            onScroll: I(s, 'scroll'),
            getLimit() {
              const o = s.getBoundingClientRect()
              return { top: o.top, bottom: o.top + o.height }
            },
            setOffset(o) {
              s.scrollTop += o
            }
          })
        }
        return this.readyEvent.next(e), e
      })
    )
  }
  destroy() {
    var t
    if (this.destroyed) return
    ;[Ee, xt].forEach(s => {
      this.get(s).destroy()
    }),
      this.layout.destroy(),
      (t = this.layout.container.parentNode) === null ||
        t === void 0 ||
        t.removeChild(this.layout.container),
      super.destroy()
  }
}
const ua = [Go, Oi, Zo, Pi, Ai, ki, _o, Yo, Mo, Do, Vo, qo, Ko, Qo, Ro, si, Ni, Ii],
  da = [ci, hi, xi, bi, vi, gi, yi, ui, fi, pi, di, mi, Io, Si, wi],
  fa = [li, ai, ri, ii],
  pa = [be, ie, ye, re, Ke, ae, z, xe, ce, ke, Es, Ne, Ns, Ms, _s, Fs, Ss, Ts],
  ma = [wt, Yt, Ge, we, Nt, Ce, Se, Zt, te, ee, Qt, se, et, Bs, Mn],
  ga = [Pn, le, ve, bt],
  ba = {
    editingStyleSheets: [
      `[textbus-document=true] [style*=color]:not([style*=background-color])
     [textbus-document=true] a {color: inherit;}
     [textbus-document=true] a {text-decoration: underline; color: #449fdb; cursor: text;}
     [textbus-document=true] {line-height: 1.5}`
    ],
    components: pa,
    formatters: ma,
    componentLoaders: ua,
    formatLoaders: da,
    attributes: ga,
    attributeLoaders: fa
  },
  ya = [
    [Cr, Sr],
    [hr],
    [Zi],
    [xr],
    [ji, Ir, Mr, Yr],
    [Fr, Gr],
    [mr, Wr],
    [Ji, Ur],
    [Ar, Nr],
    [fr],
    [Lr, Qr],
    [Er],
    [jr],
    [Vr, Hr],
    [br],
    [Ui]
  ]
function Wa(r = {}) {
  return new Hs(
    Object.assign(Object.assign({ plugins: [() => new na(ya), () => new Bi()] }, ba), r)
  )
}
export { Wa as c }
