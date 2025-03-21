var y = Object.defineProperty
var m = (s, e, t) =>
  e in s ? y(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (s[e] = t)
var a = (s, e, t) => (m(s, typeof e != 'symbol' ? e + '' : e, t), t)
function p(s) {
  return new Promise(e => setTimeout(e, s))
}
function C(s) {
  return document.createTextNode(s)
}
function N(s, e) {
  const t = document.createElement('span')
  return (t.textContent = s), (t.style.cssText = e), t
}
function b() {
  return document.createElement('br')
}
const l = 'INSERT',
  d = 'REMOVE',
  u = 'MOVE'
function o(s, e, t, r) {
  return new Promise(n => {
    setTimeout(() => {
      switch (r) {
        case l:
          T(e, s)
          break
        case d:
          s.removeChild(e)
          break
        case u:
          E(e, s)
          break
      }
      n(1)
    }, t)
  })
}
function k(s) {
  var t
  const e = document.createElement('div')
  ;(e.textContent = '|'),
    (e.className = 'flicker'),
    (t = s.typeContainer) == null || t.appendChild(e)
}
function T(s, e) {
  const t = e.querySelector('.flicker')
  e.insertBefore(s, t)
}
function E(s, e) {
  const t = e.querySelector('.flicker')
  e.insertBefore(t, s)
}
function w(s) {
  var t
  const e = (s.typeContainer = document.createElement('div'))
  ;(e.className = 'type-container'),
    (e.style.cssText = s.options.style || ''),
    (t = s.root) == null || t.appendChild(s.typeContainer)
}
function h(s) {
  const e = Array.from(s.childNodes),
    t = []
  for (const r of e)
    (r.nodeType === 3 || (r.nodeType == 1 && r.className != 'flicker')) && t.push(r)
  return t
}
const g = { speed: 100 }
class x {
  constructor(e, t = g) {
    a(this, 'typeContainer')
    a(this, 'root')
    a(this, 'callbacks', [])
    a(this, 'cursorPosition', 0)
    if (((this.el = e), (this.options = t), (this.root = document.querySelector(e)), !this.root)) {
      console.error('please give the correct container.')
      return
    }
  }
  type(e, t) {
    return (
      this.callbacks.push(async () => {
        for (let r = 0, n = e.length; r < n; r++) {
          const c = t != null && t.style ? N(e[r], t == null ? void 0 : t.style) : C(e[r]),
            i = (t == null ? void 0 : t.speed) || this.options.speed
          await o(this.typeContainer, c, i, l), this.cursorPosition++
        }
      }),
      this
    )
  }
  remove(e = 1, t) {
    return (
      this.callbacks.push(async () => {
        const r = h(this.typeContainer)
        let n = Math.min(e, this.cursorPosition)
        for (; n--; ) {
          const c = r[--this.cursorPosition],
            i = (t == null ? void 0 : t.speed) || this.options.speed
          await o(this.typeContainer, c, i, d)
        }
      }),
      this
    )
  }
  move(e = 1, t) {
    return (
      this.callbacks.push(async () => {
        const r = h(this.typeContainer),
          n = e > 0 ? 'forward' : 'backward',
          c = {
            forward: {
              actualCharactersLength: Math.min(e, r.length - this.cursorPosition),
              add: 1
            },
            backward: { actualCharactersLength: Math.min(-e, this.cursorPosition), add: -1 }
          }
        for (; c[n].actualCharactersLength--; ) {
          const i = r[(this.cursorPosition += c[n].add)],
            f = (t == null ? void 0 : t.speed) || this.options.speed
          await o(this.typeContainer, i, f, u)
        }
      }),
      this
    )
  }
  sleep(e) {
    return this.callbacks.push(async () => await p(e)), this
  }
  line() {
    return (
      this.callbacks.push(async () => {
        const e = b()
        this.typeContainer.insertBefore(e, this.typeContainer.childNodes[this.cursorPosition++])
      }),
      this
    )
  }
  async start() {
    w(this), k(this)
    for (const e of this.callbacks) await e.apply(this)
  }
}
export { x as T }
