import { b as ve } from './@babel.2898e469.js'
import { z as Go, u as Jc } from './fflate.fca59393.js'
const Xc = 'modulepreload',
  Kc = function (i, e) {
    return new URL(i, e).href
  },
  Ms = {},
  Yo = function (e, n, a) {
    if (!n || n.length === 0) return e()
    const u = document.getElementsByTagName('link')
    return Promise.all(
      n.map(o => {
        if (((o = Kc(o, a)), o in Ms)) return
        Ms[o] = !0
        const l = o.endsWith('.css'),
          h = l ? '[rel="stylesheet"]' : ''
        if (!!a)
          for (let A = u.length - 1; A >= 0; A--) {
            const N = u[A]
            if (N.href === o && (!l || N.rel === 'stylesheet')) return
          }
        else if (document.querySelector(`link[href="${o}"]${h}`)) return
        const g = document.createElement('link')
        if (
          ((g.rel = l ? 'stylesheet' : Xc),
          l || ((g.as = 'script'), (g.crossOrigin = '')),
          (g.href = o),
          document.head.appendChild(g),
          l)
        )
          return new Promise((A, N) => {
            g.addEventListener('load', A),
              g.addEventListener('error', () => N(new Error(`Unable to preload CSS for ${o}`)))
          })
      })
    ).then(() => e())
  }
var Ut = (function () {
  return typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : this
})()
function To() {
  Ut.console && typeof Ut.console.log == 'function' && Ut.console.log.apply(Ut.console, arguments)
}
var me = {
  log: To,
  warn: function (i) {
    Ut.console &&
      (typeof Ut.console.warn == 'function'
        ? Ut.console.warn.apply(Ut.console, arguments)
        : To.call(null, arguments))
  },
  error: function (i) {
    Ut.console &&
      (typeof Ut.console.error == 'function'
        ? Ut.console.error.apply(Ut.console, arguments)
        : To(i))
  }
}
function zo(i, e, n) {
  var a = new XMLHttpRequest()
  a.open('GET', i),
    (a.responseType = 'blob'),
    (a.onload = function () {
      Br(a.response, e, n)
    }),
    (a.onerror = function () {
      me.error('could not download file')
    }),
    a.send()
}
function Es(i) {
  var e = new XMLHttpRequest()
  e.open('HEAD', i, !1)
  try {
    e.send()
  } catch {}
  return e.status >= 200 && e.status <= 299
}
function Da(i) {
  try {
    i.dispatchEvent(new MouseEvent('click'))
  } catch {
    var e = document.createEvent('MouseEvents')
    e.initMouseEvent('click', !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
      i.dispatchEvent(e)
  }
}
var Ki,
  Jo,
  Br =
    Ut.saveAs ||
    ((typeof window > 'u' ? 'undefined' : ve(window)) !== 'object' || window !== Ut
      ? function () {}
      : typeof HTMLAnchorElement < 'u' && 'download' in HTMLAnchorElement.prototype
      ? function (i, e, n) {
          var a = Ut.URL || Ut.webkitURL,
            u = document.createElement('a')
          ;(e = e || i.name || 'download'),
            (u.download = e),
            (u.rel = 'noopener'),
            typeof i == 'string'
              ? ((u.href = i),
                u.origin !== location.origin
                  ? Es(u.href)
                    ? zo(i, e, n)
                    : Da(u, (u.target = '_blank'))
                  : Da(u))
              : ((u.href = a.createObjectURL(i)),
                setTimeout(function () {
                  a.revokeObjectURL(u.href)
                }, 4e4),
                setTimeout(function () {
                  Da(u)
                }, 0))
        }
      : 'msSaveOrOpenBlob' in navigator
      ? function (i, e, n) {
          if (((e = e || i.name || 'download'), typeof i == 'string'))
            if (Es(i)) zo(i, e, n)
            else {
              var a = document.createElement('a')
              ;(a.href = i),
                (a.target = '_blank'),
                setTimeout(function () {
                  Da(a)
                })
            }
          else
            navigator.msSaveOrOpenBlob(
              (function (u, o) {
                return (
                  o === void 0
                    ? (o = { autoBom: !1 })
                    : ve(o) !== 'object' &&
                      (me.warn('Deprecated: Expected third argument to be a object'),
                      (o = { autoBom: !o })),
                  o.autoBom &&
                  /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                    u.type
                  )
                    ? new Blob([String.fromCharCode(65279), u], { type: u.type })
                    : u
                )
              })(i, n),
              e
            )
        }
      : function (i, e, n, a) {
          if (
            ((a = a || open('', '_blank')) &&
              (a.document.title = a.document.body.innerText = 'downloading...'),
            typeof i == 'string')
          )
            return zo(i, e, n)
          var u = i.type === 'application/octet-stream',
            o = /constructor/i.test(Ut.HTMLElement) || Ut.safari,
            l = /CriOS\/[\d]+/.test(navigator.userAgent)
          if (
            (l || (u && o)) &&
            (typeof FileReader > 'u' ? 'undefined' : ve(FileReader)) === 'object'
          ) {
            var h = new FileReader()
            ;(h.onloadend = function () {
              var A = h.result
              ;(A = l ? A : A.replace(/^data:[^;]*;/, 'data:attachment/file;')),
                a ? (a.location.href = A) : (location = A),
                (a = null)
            }),
              h.readAsDataURL(i)
          } else {
            var f = Ut.URL || Ut.webkitURL,
              g = f.createObjectURL(i)
            a ? (a.location = g) : (location.href = g),
              (a = null),
              setTimeout(function () {
                f.revokeObjectURL(g)
              }, 4e4)
          }
        })
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */ function Qs(i) {
  var e
  ;(i = i || ''),
    (this.ok = !1),
    i.charAt(0) == '#' && (i = i.substr(1, 6)),
    (i =
      {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
      }[(i = (i = i.replace(/ /g, '')).toLowerCase())] || i)
  for (
    var n = [
        {
          re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
          example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
          process: function (h) {
            return [parseInt(h[1]), parseInt(h[2]), parseInt(h[3])]
          }
        },
        {
          re: /^(\w{2})(\w{2})(\w{2})$/,
          example: ['#00ff00', '336699'],
          process: function (h) {
            return [parseInt(h[1], 16), parseInt(h[2], 16), parseInt(h[3], 16)]
          }
        },
        {
          re: /^(\w{1})(\w{1})(\w{1})$/,
          example: ['#fb0', 'f0f'],
          process: function (h) {
            return [parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16), parseInt(h[3] + h[3], 16)]
          }
        }
      ],
      a = 0;
    a < n.length;
    a++
  ) {
    var u = n[a].re,
      o = n[a].process,
      l = u.exec(i)
    l && ((e = o(l)), (this.r = e[0]), (this.g = e[1]), (this.b = e[2]), (this.ok = !0))
  }
  ;(this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
    (this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
    (this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
    (this.toRGB = function () {
      return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')'
    }),
    (this.toHex = function () {
      var h = this.r.toString(16),
        f = this.g.toString(16),
        g = this.b.toString(16)
      return (
        h.length == 1 && (h = '0' + h),
        f.length == 1 && (f = '0' + f),
        g.length == 1 && (g = '0' + g),
        '#' + h + f + g
      )
    })
}
/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */ function Uo(i, e) {
  var n = i[0],
    a = i[1],
    u = i[2],
    o = i[3]
  ;(n = Ye(n, a, u, o, e[0], 7, -680876936)),
    (o = Ye(o, n, a, u, e[1], 12, -389564586)),
    (u = Ye(u, o, n, a, e[2], 17, 606105819)),
    (a = Ye(a, u, o, n, e[3], 22, -1044525330)),
    (n = Ye(n, a, u, o, e[4], 7, -176418897)),
    (o = Ye(o, n, a, u, e[5], 12, 1200080426)),
    (u = Ye(u, o, n, a, e[6], 17, -1473231341)),
    (a = Ye(a, u, o, n, e[7], 22, -45705983)),
    (n = Ye(n, a, u, o, e[8], 7, 1770035416)),
    (o = Ye(o, n, a, u, e[9], 12, -1958414417)),
    (u = Ye(u, o, n, a, e[10], 17, -42063)),
    (a = Ye(a, u, o, n, e[11], 22, -1990404162)),
    (n = Ye(n, a, u, o, e[12], 7, 1804603682)),
    (o = Ye(o, n, a, u, e[13], 12, -40341101)),
    (u = Ye(u, o, n, a, e[14], 17, -1502002290)),
    (n = Je(n, (a = Ye(a, u, o, n, e[15], 22, 1236535329)), u, o, e[1], 5, -165796510)),
    (o = Je(o, n, a, u, e[6], 9, -1069501632)),
    (u = Je(u, o, n, a, e[11], 14, 643717713)),
    (a = Je(a, u, o, n, e[0], 20, -373897302)),
    (n = Je(n, a, u, o, e[5], 5, -701558691)),
    (o = Je(o, n, a, u, e[10], 9, 38016083)),
    (u = Je(u, o, n, a, e[15], 14, -660478335)),
    (a = Je(a, u, o, n, e[4], 20, -405537848)),
    (n = Je(n, a, u, o, e[9], 5, 568446438)),
    (o = Je(o, n, a, u, e[14], 9, -1019803690)),
    (u = Je(u, o, n, a, e[3], 14, -187363961)),
    (a = Je(a, u, o, n, e[8], 20, 1163531501)),
    (n = Je(n, a, u, o, e[13], 5, -1444681467)),
    (o = Je(o, n, a, u, e[2], 9, -51403784)),
    (u = Je(u, o, n, a, e[7], 14, 1735328473)),
    (n = Xe(n, (a = Je(a, u, o, n, e[12], 20, -1926607734)), u, o, e[5], 4, -378558)),
    (o = Xe(o, n, a, u, e[8], 11, -2022574463)),
    (u = Xe(u, o, n, a, e[11], 16, 1839030562)),
    (a = Xe(a, u, o, n, e[14], 23, -35309556)),
    (n = Xe(n, a, u, o, e[1], 4, -1530992060)),
    (o = Xe(o, n, a, u, e[4], 11, 1272893353)),
    (u = Xe(u, o, n, a, e[7], 16, -155497632)),
    (a = Xe(a, u, o, n, e[10], 23, -1094730640)),
    (n = Xe(n, a, u, o, e[13], 4, 681279174)),
    (o = Xe(o, n, a, u, e[0], 11, -358537222)),
    (u = Xe(u, o, n, a, e[3], 16, -722521979)),
    (a = Xe(a, u, o, n, e[6], 23, 76029189)),
    (n = Xe(n, a, u, o, e[9], 4, -640364487)),
    (o = Xe(o, n, a, u, e[12], 11, -421815835)),
    (u = Xe(u, o, n, a, e[15], 16, 530742520)),
    (n = Ke(n, (a = Xe(a, u, o, n, e[2], 23, -995338651)), u, o, e[0], 6, -198630844)),
    (o = Ke(o, n, a, u, e[7], 10, 1126891415)),
    (u = Ke(u, o, n, a, e[14], 15, -1416354905)),
    (a = Ke(a, u, o, n, e[5], 21, -57434055)),
    (n = Ke(n, a, u, o, e[12], 6, 1700485571)),
    (o = Ke(o, n, a, u, e[3], 10, -1894986606)),
    (u = Ke(u, o, n, a, e[10], 15, -1051523)),
    (a = Ke(a, u, o, n, e[1], 21, -2054922799)),
    (n = Ke(n, a, u, o, e[8], 6, 1873313359)),
    (o = Ke(o, n, a, u, e[15], 10, -30611744)),
    (u = Ke(u, o, n, a, e[6], 15, -1560198380)),
    (a = Ke(a, u, o, n, e[13], 21, 1309151649)),
    (n = Ke(n, a, u, o, e[4], 6, -145523070)),
    (o = Ke(o, n, a, u, e[11], 10, -1120210379)),
    (u = Ke(u, o, n, a, e[2], 15, 718787259)),
    (a = Ke(a, u, o, n, e[9], 21, -343485551)),
    (i[0] = Nr(n, i[0])),
    (i[1] = Nr(a, i[1])),
    (i[2] = Nr(u, i[2])),
    (i[3] = Nr(o, i[3]))
}
function Ja(i, e, n, a, u, o) {
  return (e = Nr(Nr(e, i), Nr(a, o))), Nr((e << u) | (e >>> (32 - u)), n)
}
function Ye(i, e, n, a, u, o, l) {
  return Ja((e & n) | (~e & a), i, e, u, o, l)
}
function Je(i, e, n, a, u, o, l) {
  return Ja((e & a) | (n & ~a), i, e, u, o, l)
}
function Xe(i, e, n, a, u, o, l) {
  return Ja(e ^ n ^ a, i, e, u, o, l)
}
function Ke(i, e, n, a, u, o, l) {
  return Ja(n ^ (e | ~a), i, e, u, o, l)
}
function tc(i) {
  var e,
    n = i.length,
    a = [1732584193, -271733879, -1732584194, 271733878]
  for (e = 64; e <= i.length; e += 64) Uo(a, Zc(i.substring(e - 64, e)))
  i = i.substring(e - 64)
  var u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (e = 0; e < i.length; e++) u[e >> 2] |= i.charCodeAt(e) << (e % 4 << 3)
  if (((u[e >> 2] |= 128 << (e % 4 << 3)), e > 55)) for (Uo(a, u), e = 0; e < 16; e++) u[e] = 0
  return (u[14] = 8 * n), Uo(a, u), a
}
function Zc(i) {
  var e,
    n = []
  for (e = 0; e < 64; e += 4)
    n[e >> 2] =
      i.charCodeAt(e) +
      (i.charCodeAt(e + 1) << 8) +
      (i.charCodeAt(e + 2) << 16) +
      (i.charCodeAt(e + 3) << 24)
  return n
}
;(Ki = Ut.atob.bind(Ut)), (Jo = Ut.btoa.bind(Ut))
var qs = '0123456789abcdef'.split('')
function $c(i) {
  for (var e = '', n = 0; n < 4; n++) e += qs[(i >> (8 * n + 4)) & 15] + qs[(i >> (8 * n)) & 15]
  return e
}
function Qc(i) {
  return String.fromCharCode(
    (255 & i) >> 0,
    (65280 & i) >> 8,
    (16711680 & i) >> 16,
    (4278190080 & i) >> 24
  )
}
function Xo(i) {
  return tc(i).map(Qc).join('')
}
var tu =
  (function (i) {
    for (var e = 0; e < i.length; e++) i[e] = $c(i[e])
    return i.join('')
  })(tc('hello')) != '5d41402abc4b2a76b9719d911017c592'
function Nr(i, e) {
  if (tu) {
    var n = (65535 & i) + (65535 & e)
    return (((i >> 16) + (e >> 16) + (n >> 16)) << 16) | (65535 & n)
  }
  return (i + e) & 4294967295
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */ function Ko(i, e) {
  var n, a, u, o
  if (i !== n) {
    for (
      var l = ((u = i), (o = 1 + ((256 / i.length) >> 0)), new Array(o + 1).join(u)), h = [], f = 0;
      f < 256;
      f++
    )
      h[f] = f
    var g = 0
    for (f = 0; f < 256; f++) {
      var A = h[f]
      ;(g = (g + A + l.charCodeAt(f)) % 256), (h[f] = h[g]), (h[g] = A)
    }
    ;(n = i), (a = h)
  } else h = a
  var N = e.length,
    _ = 0,
    p = 0,
    B = ''
  for (f = 0; f < N; f++)
    (p = (p + (A = h[(_ = (_ + 1) % 256)])) % 256),
      (h[_] = h[p]),
      (h[p] = A),
      (l = h[(h[_] + h[p]) % 256]),
      (B += String.fromCharCode(e.charCodeAt(f) ^ l))
  return B
}
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */ var Ds = { print: 4, modify: 8, copy: 16, 'annot-forms': 32 }
function pi(i, e, n, a) {
  ;(this.v = 1), (this.r = 2)
  var u = 192
  i.forEach(function (h) {
    if (Ds.perm !== void 0) throw new Error('Invalid permission: ' + h)
    u += Ds[h]
  }),
    (this.padding = '(\xBFN^Nu\x8AAd\0NV\xFF\xFA\b..\0\xB6\xD0h>\x80/\f\xA9\xFEdSiz')
  var o = (e + this.padding).substr(0, 32),
    l = (n + this.padding).substr(0, 32)
  ;(this.O = this.processOwnerPassword(o, l)),
    (this.P = -(1 + (255 ^ u))),
    (this.encryptionKey = Xo(o + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(a)).substr(
      0,
      5
    )),
    (this.U = Ko(this.encryptionKey, this.padding))
}
function gi(i) {
  if (/[^\u0000-\u00ff]/.test(i))
    throw new Error('Invalid PDF Name Object: ' + i + ', Only accept ASCII characters.')
  for (var e = '', n = i.length, a = 0; a < n; a++) {
    var u = i.charCodeAt(a)
    u < 33 ||
    u === 35 ||
    u === 37 ||
    u === 40 ||
    u === 41 ||
    u === 47 ||
    u === 60 ||
    u === 62 ||
    u === 91 ||
    u === 93 ||
    u === 123 ||
    u === 125 ||
    u > 126
      ? (e += '#' + ('0' + u.toString(16)).slice(-2))
      : (e += i[a])
  }
  return e
}
function Rs(i) {
  if (ve(i) !== 'object')
    throw new Error('Invalid Context passed to initialize PubSub (jsPDF-module)')
  var e = {}
  ;(this.subscribe = function (n, a, u) {
    if (((u = u || !1), typeof n != 'string' || typeof a != 'function' || typeof u != 'boolean'))
      throw new Error('Invalid arguments passed to PubSub.subscribe (jsPDF-module)')
    e.hasOwnProperty(n) || (e[n] = {})
    var o = Math.random().toString(35)
    return (e[n][o] = [a, !!u]), o
  }),
    (this.unsubscribe = function (n) {
      for (var a in e)
        if (e[a][n]) return delete e[a][n], Object.keys(e[a]).length === 0 && delete e[a], !0
      return !1
    }),
    (this.publish = function (n) {
      if (e.hasOwnProperty(n)) {
        var a = Array.prototype.slice.call(arguments, 1),
          u = []
        for (var o in e[n]) {
          var l = e[n][o]
          try {
            l[0].apply(i, a)
          } catch (h) {
            Ut.console && me.error('jsPDF PubSub Error', h.message, h)
          }
          l[1] && u.push(o)
        }
        u.length && u.forEach(this.unsubscribe)
      }
    }),
    (this.getTopics = function () {
      return e
    })
}
function Ga(i) {
  if (!(this instanceof Ga)) return new Ga(i)
  var e = 'opacity,stroke-opacity'.split(',')
  for (var n in i) i.hasOwnProperty(n) && e.indexOf(n) >= 0 && (this[n] = i[n])
  ;(this.id = ''), (this.objectNumber = -1)
}
function ec(i, e) {
  ;(this.gState = i), (this.matrix = e), (this.id = ''), (this.objectNumber = -1)
}
function Mr(i, e, n, a, u) {
  if (!(this instanceof Mr)) return new Mr(i, e, n, a, u)
  ;(this.type = i === 'axial' ? 2 : 3), (this.coords = e), (this.colors = n), ec.call(this, a, u)
}
function mi(i, e, n, a, u) {
  if (!(this instanceof mi)) return new mi(i, e, n, a, u)
  ;(this.boundingBox = i),
    (this.xStep = e),
    (this.yStep = n),
    (this.stream = ''),
    (this.cloneIndex = 0),
    ec.call(this, a, u)
}
function zt(i) {
  var e,
    n = typeof arguments[0] == 'string' ? arguments[0] : 'p',
    a = arguments[1],
    u = arguments[2],
    o = arguments[3],
    l = [],
    h = 1,
    f = 16,
    g = 'S',
    A = null
  ve((i = i || {})) === 'object' &&
    ((n = i.orientation),
    (a = i.unit || a),
    (u = i.format || u),
    (o = i.compress || i.compressPdf || o),
    (A = i.encryption || null) !== null &&
      ((A.userPassword = A.userPassword || ''),
      (A.ownerPassword = A.ownerPassword || ''),
      (A.userPermissions = A.userPermissions || [])),
    (h = typeof i.userUnit == 'number' ? Math.abs(i.userUnit) : 1),
    i.precision !== void 0 && (e = i.precision),
    i.floatPrecision !== void 0 && (f = i.floatPrecision),
    (g = i.defaultPathOperation || 'S')),
    (l = i.filters || (o === !0 ? ['FlateEncode'] : l)),
    (a = a || 'mm'),
    (n = ('' + (n || 'P')).toLowerCase())
  var N = i.putOnlyUsedFonts || !1,
    _ = {},
    p = { internal: {}, __private__: {} }
  p.__private__.PubSub = Rs
  var B = '1.3',
    F = (p.__private__.getPdfVersion = function () {
      return B
    })
  p.__private__.setPdfVersion = function (s) {
    B = s
  }
  var q = {
    a0: [2383.94, 3370.39],
    a1: [1683.78, 2383.94],
    a2: [1190.55, 1683.78],
    a3: [841.89, 1190.55],
    a4: [595.28, 841.89],
    a5: [419.53, 595.28],
    a6: [297.64, 419.53],
    a7: [209.76, 297.64],
    a8: [147.4, 209.76],
    a9: [104.88, 147.4],
    a10: [73.7, 104.88],
    b0: [2834.65, 4008.19],
    b1: [2004.09, 2834.65],
    b2: [1417.32, 2004.09],
    b3: [1000.63, 1417.32],
    b4: [708.66, 1000.63],
    b5: [498.9, 708.66],
    b6: [354.33, 498.9],
    b7: [249.45, 354.33],
    b8: [175.75, 249.45],
    b9: [124.72, 175.75],
    b10: [87.87, 124.72],
    c0: [2599.37, 3676.54],
    c1: [1836.85, 2599.37],
    c2: [1298.27, 1836.85],
    c3: [918.43, 1298.27],
    c4: [649.13, 918.43],
    c5: [459.21, 649.13],
    c6: [323.15, 459.21],
    c7: [229.61, 323.15],
    c8: [161.57, 229.61],
    c9: [113.39, 161.57],
    c10: [79.37, 113.39],
    dl: [311.81, 623.62],
    letter: [612, 792],
    'government-letter': [576, 756],
    legal: [612, 1008],
    'junior-legal': [576, 360],
    ledger: [1224, 792],
    tabloid: [792, 1224],
    'credit-card': [153, 243]
  }
  p.__private__.getPageFormats = function () {
    return q
  }
  var S = (p.__private__.getPageFormat = function (s) {
    return q[s]
  })
  u = u || 'a4'
  var M = { COMPAT: 'compat', ADVANCED: 'advanced' },
    Z = M.COMPAT
  function st() {
    this.saveGraphicsState(),
      O(new Tt(It, 0, 0, -It, 0, cr() * It).toString() + ' cm'),
      this.setFontSize(this.getFontSize() / It),
      (g = 'n'),
      (Z = M.ADVANCED)
  }
  function dt() {
    this.restoreGraphicsState(), (g = 'S'), (Z = M.COMPAT)
  }
  var Nt = (p.__private__.combineFontStyleAndFontWeight = function (s, v) {
    if (
      (s == 'bold' && v == 'normal') ||
      (s == 'bold' && v == 400) ||
      (s == 'normal' && v == 'italic') ||
      (s == 'bold' && v == 'italic')
    )
      throw new Error('Invalid Combination of fontweight and fontstyle')
    return (
      v &&
        (s =
          v == 400 || v === 'normal'
            ? s === 'italic'
              ? 'italic'
              : 'normal'
            : (v != 700 && v !== 'bold') || s !== 'normal'
            ? (v == 700 ? 'bold' : v) + '' + s
            : 'bold'),
      s
    )
  })
  ;(p.advancedAPI = function (s) {
    var v = Z === M.COMPAT
    return v && st.call(this), typeof s != 'function' || (s(this), v && dt.call(this)), this
  }),
    (p.compatAPI = function (s) {
      var v = Z === M.ADVANCED
      return v && dt.call(this), typeof s != 'function' || (s(this), v && st.call(this)), this
    }),
    (p.isAdvancedAPI = function () {
      return Z === M.ADVANCED
    })
  var rt,
    G = function (s) {
      if (Z !== M.ADVANCED)
        throw new Error(
          s + " is only available in 'advanced' API mode. You need to call advancedAPI() first."
        )
    },
    vt =
      (p.roundToPrecision =
      p.__private__.roundToPrecision =
        function (s, v) {
          var C = e || v
          if (isNaN(s) || isNaN(C))
            throw new Error('Invalid argument passed to jsPDF.roundToPrecision')
          return s.toFixed(C).replace(/0+$/, '')
        })
  rt =
    p.hpf =
    p.__private__.hpf =
      typeof f == 'number'
        ? function (s) {
            if (isNaN(s)) throw new Error('Invalid argument passed to jsPDF.hpf')
            return vt(s, f)
          }
        : f === 'smart'
        ? function (s) {
            if (isNaN(s)) throw new Error('Invalid argument passed to jsPDF.hpf')
            return vt(s, s > -1 && s < 1 ? 16 : 5)
          }
        : function (s) {
            if (isNaN(s)) throw new Error('Invalid argument passed to jsPDF.hpf')
            return vt(s, 16)
          }
  var bt =
      (p.f2 =
      p.__private__.f2 =
        function (s) {
          if (isNaN(s)) throw new Error('Invalid argument passed to jsPDF.f2')
          return vt(s, 2)
        }),
    k = (p.__private__.f3 = function (s) {
      if (isNaN(s)) throw new Error('Invalid argument passed to jsPDF.f3')
      return vt(s, 3)
    }),
    I =
      (p.scale =
      p.__private__.scale =
        function (s) {
          if (isNaN(s)) throw new Error('Invalid argument passed to jsPDF.scale')
          return Z === M.COMPAT ? s * It : Z === M.ADVANCED ? s : void 0
        }),
    H = function (s) {
      return Z === M.COMPAT ? cr() - s : Z === M.ADVANCED ? s : void 0
    },
    R = function (s) {
      return I(H(s))
    }
  p.__private__.setPrecision = p.setPrecision = function (s) {
    typeof parseInt(s, 10) == 'number' && (e = parseInt(s, 10))
  }
  var ct,
    ot = '00000000000000000000000000000000',
    mt = (p.__private__.getFileId = function () {
      return ot
    }),
    tt = (p.__private__.setFileId = function (s) {
      return (
        (ot =
          s !== void 0 && /^[a-fA-F0-9]{32}$/.test(s)
            ? s.toUpperCase()
            : ot
                .split('')
                .map(function () {
                  return 'ABCDEF0123456789'.charAt(Math.floor(16 * Math.random()))
                })
                .join('')),
        A !== null && (Ve = new pi(A.userPermissions, A.userPassword, A.ownerPassword, ot)),
        ot
      )
    })
  ;(p.setFileId = function (s) {
    return tt(s), this
  }),
    (p.getFileId = function () {
      return mt()
    })
  var pt = (p.__private__.convertDateToPDFDate = function (s) {
      var v = s.getTimezoneOffset(),
        C = v < 0 ? '+' : '-',
        D = Math.floor(Math.abs(v / 60)),
        J = Math.abs(v % 60),
        it = [C, E(D), "'", E(J), "'"].join('')
      return [
        'D:',
        s.getFullYear(),
        E(s.getMonth() + 1),
        E(s.getDate()),
        E(s.getHours()),
        E(s.getMinutes()),
        E(s.getSeconds()),
        it
      ].join('')
    }),
    ft = (p.__private__.convertPDFDateToDate = function (s) {
      var v = parseInt(s.substr(2, 4), 10),
        C = parseInt(s.substr(6, 2), 10) - 1,
        D = parseInt(s.substr(8, 2), 10),
        J = parseInt(s.substr(10, 2), 10),
        it = parseInt(s.substr(12, 2), 10),
        yt = parseInt(s.substr(14, 2), 10)
      return new Date(v, C, D, J, it, yt, 0)
    }),
    Et = (p.__private__.setCreationDate = function (s) {
      var v
      if ((s === void 0 && (s = new Date()), s instanceof Date)) v = pt(s)
      else {
        if (
          !/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(
            s
          )
        )
          throw new Error('Invalid argument passed to jsPDF.setCreationDate')
        v = s
      }
      return (ct = v)
    }),
    w = (p.__private__.getCreationDate = function (s) {
      var v = ct
      return s === 'jsDate' && (v = ft(ct)), v
    })
  ;(p.setCreationDate = function (s) {
    return Et(s), this
  }),
    (p.getCreationDate = function (s) {
      return w(s)
    })
  var j,
    E = (p.__private__.padd2 = function (s) {
      return ('0' + parseInt(s)).slice(-2)
    }),
    W = (p.__private__.padd2Hex = function (s) {
      return ('00' + (s = s.toString())).substr(s.length)
    }),
    Y = 0,
    $ = [],
    et = [],
    Q = 0,
    At = [],
    Lt = [],
    Ot = !1,
    jt = et,
    Wt = function () {
      ;(Y = 0), (Q = 0), (et = []), ($ = []), (At = []), (Jn = je()), (wn = je())
    }
  p.__private__.setCustomOutputDestination = function (s) {
    ;(Ot = !0), (jt = s)
  }
  var at = function (s) {
    Ot || (jt = s)
  }
  p.__private__.resetCustomOutputDestination = function () {
    ;(Ot = !1), (jt = et)
  }
  var O = (p.__private__.out = function (s) {
      return (s = s.toString()), (Q += s.length + 1), jt.push(s), jt
    }),
    Xt = (p.__private__.write = function (s) {
      return O(arguments.length === 1 ? s.toString() : Array.prototype.join.call(arguments, ' '))
    }),
    Mt = (p.__private__.getArrayBuffer = function (s) {
      for (var v = s.length, C = new ArrayBuffer(v), D = new Uint8Array(C); v--; )
        D[v] = s.charCodeAt(v)
      return C
    }),
    wt = [
      ['Helvetica', 'helvetica', 'normal', 'WinAnsiEncoding'],
      ['Helvetica-Bold', 'helvetica', 'bold', 'WinAnsiEncoding'],
      ['Helvetica-Oblique', 'helvetica', 'italic', 'WinAnsiEncoding'],
      ['Helvetica-BoldOblique', 'helvetica', 'bolditalic', 'WinAnsiEncoding'],
      ['Courier', 'courier', 'normal', 'WinAnsiEncoding'],
      ['Courier-Bold', 'courier', 'bold', 'WinAnsiEncoding'],
      ['Courier-Oblique', 'courier', 'italic', 'WinAnsiEncoding'],
      ['Courier-BoldOblique', 'courier', 'bolditalic', 'WinAnsiEncoding'],
      ['Times-Roman', 'times', 'normal', 'WinAnsiEncoding'],
      ['Times-Bold', 'times', 'bold', 'WinAnsiEncoding'],
      ['Times-Italic', 'times', 'italic', 'WinAnsiEncoding'],
      ['Times-BoldItalic', 'times', 'bolditalic', 'WinAnsiEncoding'],
      ['ZapfDingbats', 'zapfdingbats', 'normal', null],
      ['Symbol', 'symbol', 'normal', null]
    ]
  p.__private__.getStandardFonts = function () {
    return wt
  }
  var xt = i.fontSize || 16
  p.__private__.setFontSize = p.setFontSize = function (s) {
    return (xt = Z === M.ADVANCED ? s / It : s), this
  }
  var kt,
    Pt =
      (p.__private__.getFontSize =
      p.getFontSize =
        function () {
          return Z === M.COMPAT ? xt : xt * It
        }),
    qt = i.R2L || !1
  ;(p.__private__.setR2L = p.setR2L =
    function (s) {
      return (qt = s), this
    }),
    (p.__private__.getR2L = p.getR2L =
      function () {
        return qt
      })
  var Gt,
    $t = (p.__private__.setZoomMode = function (s) {
      var v = [void 0, null, 'fullwidth', 'fullheight', 'fullpage', 'original']
      if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(s)) kt = s
      else if (isNaN(s)) {
        if (v.indexOf(s) === -1)
          throw new Error(
            'zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' +
              s +
              '" is not recognized.'
          )
        kt = s
      } else kt = parseInt(s, 10)
    })
  p.__private__.getZoomMode = function () {
    return kt
  }
  var te,
    ie = (p.__private__.setPageMode = function (s) {
      if ([void 0, null, 'UseNone', 'UseOutlines', 'UseThumbs', 'FullScreen'].indexOf(s) == -1)
        throw new Error(
          'Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' +
            s +
            '" is not recognized.'
        )
      Gt = s
    })
  p.__private__.getPageMode = function () {
    return Gt
  }
  var fe = (p.__private__.setLayoutMode = function (s) {
    if ([void 0, null, 'continuous', 'single', 'twoleft', 'tworight', 'two'].indexOf(s) == -1)
      throw new Error(
        'Layout mode must be one of continuous, single, twoleft, tworight. "' +
          s +
          '" is not recognized.'
      )
    te = s
  })
  ;(p.__private__.getLayoutMode = function () {
    return te
  }),
    (p.__private__.setDisplayMode = p.setDisplayMode =
      function (s, v, C) {
        return $t(s), fe(v), ie(C), this
      })
  var Ht = { title: '', subject: '', author: '', keywords: '', creator: '' }
  ;(p.__private__.getDocumentProperty = function (s) {
    if (Object.keys(Ht).indexOf(s) === -1)
      throw new Error('Invalid argument passed to jsPDF.getDocumentProperty')
    return Ht[s]
  }),
    (p.__private__.getDocumentProperties = function () {
      return Ht
    }),
    (p.__private__.setDocumentProperties =
      p.setProperties =
      p.setDocumentProperties =
        function (s) {
          for (var v in Ht) Ht.hasOwnProperty(v) && s[v] && (Ht[v] = s[v])
          return this
        }),
    (p.__private__.setDocumentProperty = function (s, v) {
      if (Object.keys(Ht).indexOf(s) === -1)
        throw new Error('Invalid arguments passed to jsPDF.setDocumentProperty')
      return (Ht[s] = v)
    })
  var ee,
    It,
    We,
    oe,
    vn,
    pe = {},
    we = {},
    Mn = [],
    ce = {},
    xr = {},
    Ne = {},
    bn = {},
    Yn = null,
    Ae = 0,
    Yt = [],
    ue = new Rs(p),
    Sr = i.hotfixes || [],
    Ue = {},
    En = {},
    qn = [],
    Tt = function s(v, C, D, J, it, yt) {
      if (!(this instanceof s)) return new s(v, C, D, J, it, yt)
      isNaN(v) && (v = 1),
        isNaN(C) && (C = 0),
        isNaN(D) && (D = 0),
        isNaN(J) && (J = 1),
        isNaN(it) && (it = 0),
        isNaN(yt) && (yt = 0),
        (this._matrix = [v, C, D, J, it, yt])
    }
  Object.defineProperty(Tt.prototype, 'sx', {
    get: function () {
      return this._matrix[0]
    },
    set: function (s) {
      this._matrix[0] = s
    }
  }),
    Object.defineProperty(Tt.prototype, 'shy', {
      get: function () {
        return this._matrix[1]
      },
      set: function (s) {
        this._matrix[1] = s
      }
    }),
    Object.defineProperty(Tt.prototype, 'shx', {
      get: function () {
        return this._matrix[2]
      },
      set: function (s) {
        this._matrix[2] = s
      }
    }),
    Object.defineProperty(Tt.prototype, 'sy', {
      get: function () {
        return this._matrix[3]
      },
      set: function (s) {
        this._matrix[3] = s
      }
    }),
    Object.defineProperty(Tt.prototype, 'tx', {
      get: function () {
        return this._matrix[4]
      },
      set: function (s) {
        this._matrix[4] = s
      }
    }),
    Object.defineProperty(Tt.prototype, 'ty', {
      get: function () {
        return this._matrix[5]
      },
      set: function (s) {
        this._matrix[5] = s
      }
    }),
    Object.defineProperty(Tt.prototype, 'a', {
      get: function () {
        return this._matrix[0]
      },
      set: function (s) {
        this._matrix[0] = s
      }
    }),
    Object.defineProperty(Tt.prototype, 'b', {
      get: function () {
        return this._matrix[1]
      },
      set: function (s) {
        this._matrix[1] = s
      }
    }),
    Object.defineProperty(Tt.prototype, 'c', {
      get: function () {
        return this._matrix[2]
      },
      set: function (s) {
        this._matrix[2] = s
      }
    }),
    Object.defineProperty(Tt.prototype, 'd', {
      get: function () {
        return this._matrix[3]
      },
      set: function (s) {
        this._matrix[3] = s
      }
    }),
    Object.defineProperty(Tt.prototype, 'e', {
      get: function () {
        return this._matrix[4]
      },
      set: function (s) {
        this._matrix[4] = s
      }
    }),
    Object.defineProperty(Tt.prototype, 'f', {
      get: function () {
        return this._matrix[5]
      },
      set: function (s) {
        this._matrix[5] = s
      }
    }),
    Object.defineProperty(Tt.prototype, 'rotation', {
      get: function () {
        return Math.atan2(this.shx, this.sx)
      }
    }),
    Object.defineProperty(Tt.prototype, 'scaleX', {
      get: function () {
        return this.decompose().scale.sx
      }
    }),
    Object.defineProperty(Tt.prototype, 'scaleY', {
      get: function () {
        return this.decompose().scale.sy
      }
    }),
    Object.defineProperty(Tt.prototype, 'isIdentity', {
      get: function () {
        return (
          this.sx === 1 &&
          this.shy === 0 &&
          this.shx === 0 &&
          this.sy === 1 &&
          this.tx === 0 &&
          this.ty === 0
        )
      }
    }),
    (Tt.prototype.join = function (s) {
      return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(rt).join(s)
    }),
    (Tt.prototype.multiply = function (s) {
      var v = s.sx * this.sx + s.shy * this.shx,
        C = s.sx * this.shy + s.shy * this.sy,
        D = s.shx * this.sx + s.sy * this.shx,
        J = s.shx * this.shy + s.sy * this.sy,
        it = s.tx * this.sx + s.ty * this.shx + this.tx,
        yt = s.tx * this.shy + s.ty * this.sy + this.ty
      return new Tt(v, C, D, J, it, yt)
    }),
    (Tt.prototype.decompose = function () {
      var s = this.sx,
        v = this.shy,
        C = this.shx,
        D = this.sy,
        J = this.tx,
        it = this.ty,
        yt = Math.sqrt(s * s + v * v),
        Ft = (s /= yt) * C + (v /= yt) * D
      ;(C -= s * Ft), (D -= v * Ft)
      var Dt = Math.sqrt(C * C + D * D)
      return (
        (Ft /= Dt),
        s * (D /= Dt) < v * (C /= Dt) && ((s = -s), (v = -v), (Ft = -Ft), (yt = -yt)),
        {
          scale: new Tt(yt, 0, 0, Dt, 0, 0),
          translate: new Tt(1, 0, 0, 1, J, it),
          rotate: new Tt(s, v, -v, s, 0, 0),
          skew: new Tt(1, 0, Ft, 1, 0, 0)
        }
      )
    }),
    (Tt.prototype.toString = function (s) {
      return this.join(' ')
    }),
    (Tt.prototype.inversed = function () {
      var s = this.sx,
        v = this.shy,
        C = this.shx,
        D = this.sy,
        J = this.tx,
        it = this.ty,
        yt = 1 / (s * D - v * C),
        Ft = D * yt,
        Dt = -v * yt,
        Kt = -C * yt,
        Qt = s * yt
      return new Tt(Ft, Dt, Kt, Qt, -Ft * J - Kt * it, -Dt * J - Qt * it)
    }),
    (Tt.prototype.applyToPoint = function (s) {
      var v = s.x * this.sx + s.y * this.shx + this.tx,
        C = s.x * this.shy + s.y * this.sy + this.ty
      return new Zr(v, C)
    }),
    (Tt.prototype.applyToRectangle = function (s) {
      var v = this.applyToPoint(s),
        C = this.applyToPoint(new Zr(s.x + s.w, s.y + s.h))
      return new Ci(v.x, v.y, C.x - v.x, C.y - v.y)
    }),
    (Tt.prototype.clone = function () {
      var s = this.sx,
        v = this.shy,
        C = this.shx,
        D = this.sy,
        J = this.tx,
        it = this.ty
      return new Tt(s, v, C, D, J, it)
    }),
    (p.Matrix = Tt)
  var yn = (p.matrixMult = function (s, v) {
      return v.multiply(s)
    }),
    Dn = new Tt(1, 0, 0, 1, 0, 0)
  p.unitMatrix = p.identityMatrix = Dn
  var $e = function (s, v) {
    if (!xr[s]) {
      var C = (v instanceof Mr ? 'Sh' : 'P') + (Object.keys(ce).length + 1).toString(10)
      ;(v.id = C), (xr[s] = C), (ce[C] = v), ue.publish('addPattern', v)
    }
  }
  ;(p.ShadingPattern = Mr),
    (p.TilingPattern = mi),
    (p.addShadingPattern = function (s, v) {
      return G('addShadingPattern()'), $e(s, v), this
    }),
    (p.beginTilingPattern = function (s) {
      G('beginTilingPattern()'),
        ga(
          s.boundingBox[0],
          s.boundingBox[1],
          s.boundingBox[2] - s.boundingBox[0],
          s.boundingBox[3] - s.boundingBox[1],
          s.matrix
        )
    }),
    (p.endTilingPattern = function (s, v) {
      G('endTilingPattern()'),
        (v.stream = Lt[j].join(`
`)),
        $e(s, v),
        ue.publish('endTilingPattern', v),
        qn.pop().restore()
    })
  var Ee = (p.__private__.newObject = function () {
      var s = je()
      return on(s, !0), s
    }),
    je = (p.__private__.newObjectDeferred = function () {
      return (
        Y++,
        ($[Y] = function () {
          return Q
        }),
        Y
      )
    }),
    on = function (s, v) {
      return (v = typeof v == 'boolean' && v), ($[s] = Q), v && O(s + ' 0 obj'), s
    },
    Dr = (p.__private__.newAdditionalObject = function () {
      var s = { objId: je(), content: '' }
      return At.push(s), s
    }),
    Jn = je(),
    wn = je(),
    Ln = (p.__private__.decodeColorString = function (s) {
      var v = s.split(' ')
      if (v.length !== 2 || (v[1] !== 'g' && v[1] !== 'G'))
        v.length === 5 &&
          (v[4] === 'k' || v[4] === 'K') &&
          (v = [(1 - v[0]) * (1 - v[3]), (1 - v[1]) * (1 - v[3]), (1 - v[2]) * (1 - v[3]), 'r'])
      else {
        var C = parseFloat(v[0])
        v = [C, C, C, 'r']
      }
      for (var D = '#', J = 0; J < 3; J++)
        D += ('0' + Math.floor(255 * parseFloat(v[J])).toString(16)).slice(-2)
      return D
    }),
    Nn = (p.__private__.encodeColorString = function (s) {
      var v
      typeof s == 'string' && (s = { ch1: s })
      var C = s.ch1,
        D = s.ch2,
        J = s.ch3,
        it = s.ch4,
        yt = s.pdfColorType === 'draw' ? ['G', 'RG', 'K'] : ['g', 'rg', 'k']
      if (typeof C == 'string' && C.charAt(0) !== '#') {
        var Ft = new Qs(C)
        if (Ft.ok) C = Ft.toHex()
        else if (!/^\d*\.?\d*$/.test(C))
          throw new Error('Invalid color "' + C + '" passed to jsPDF.encodeColorString.')
      }
      if (
        (typeof C == 'string' &&
          /^#[0-9A-Fa-f]{3}$/.test(C) &&
          (C = '#' + C[1] + C[1] + C[2] + C[2] + C[3] + C[3]),
        typeof C == 'string' && /^#[0-9A-Fa-f]{6}$/.test(C))
      ) {
        var Dt = parseInt(C.substr(1), 16)
        ;(C = (Dt >> 16) & 255), (D = (Dt >> 8) & 255), (J = 255 & Dt)
      }
      if (D === void 0 || (it === void 0 && C === D && D === J))
        if (typeof C == 'string') v = C + ' ' + yt[0]
        else
          switch (s.precision) {
            case 2:
              v = bt(C / 255) + ' ' + yt[0]
              break
            case 3:
            default:
              v = k(C / 255) + ' ' + yt[0]
          }
      else if (it === void 0 || ve(it) === 'object') {
        if (it && !isNaN(it.a) && it.a === 0) return (v = ['1.', '1.', '1.', yt[1]].join(' '))
        if (typeof C == 'string') v = [C, D, J, yt[1]].join(' ')
        else
          switch (s.precision) {
            case 2:
              v = [bt(C / 255), bt(D / 255), bt(J / 255), yt[1]].join(' ')
              break
            default:
            case 3:
              v = [k(C / 255), k(D / 255), k(J / 255), yt[1]].join(' ')
          }
      } else if (typeof C == 'string') v = [C, D, J, it, yt[2]].join(' ')
      else
        switch (s.precision) {
          case 2:
            v = [bt(C), bt(D), bt(J), bt(it), yt[2]].join(' ')
            break
          case 3:
          default:
            v = [k(C), k(D), k(J), k(it), yt[2]].join(' ')
        }
      return v
    }),
    Rn = (p.__private__.getFilters = function () {
      return l
    }),
    hn = (p.__private__.putStream = function (s) {
      var v = (s = s || {}).data || '',
        C = s.filters || Rn(),
        D = s.alreadyAppliedFilters || [],
        J = s.addLength1 || !1,
        it = v.length,
        yt = s.objectId,
        Ft = function (Ge) {
          return Ge
        }
      if (A !== null && yt === void 0)
        throw new Error('ObjectId must be passed to putStream for file encryption')
      A !== null && (Ft = Ve.encryptor(yt, 0))
      var Dt = {}
      C === !0 && (C = ['FlateEncode'])
      var Kt = s.additionalKeyValues || [],
        Qt =
          (Dt =
            zt.API.processDataByFilters !== void 0
              ? zt.API.processDataByFilters(v, C)
              : { data: v, reverseChain: [] }).reverseChain +
          (Array.isArray(D) ? D.join(' ') : D.toString())
      if (
        (Dt.data.length !== 0 &&
          (Kt.push({ key: 'Length', value: Dt.data.length }),
          J === !0 && Kt.push({ key: 'Length1', value: it })),
        Qt.length != 0)
      )
        if (Qt.split('/').length - 1 == 1) Kt.push({ key: 'Filter', value: Qt })
        else {
          Kt.push({ key: 'Filter', value: '[' + Qt + ']' })
          for (var re = 0; re < Kt.length; re += 1)
            if (Kt[re].key === 'DecodeParms') {
              for (var Le = [], xe = 0; xe < Dt.reverseChain.split('/').length - 1; xe += 1)
                Le.push('null')
              Le.push(Kt[re].value), (Kt[re].value = '[' + Le.join(' ') + ']')
            }
        }
      O('<<')
      for (var Oe = 0; Oe < Kt.length; Oe++) O('/' + Kt[Oe].key + ' ' + Kt[Oe].value)
      O('>>'), Dt.data.length !== 0 && (O('stream'), O(Ft(Dt.data)), O('endstream'))
    }),
    Tn = (p.__private__.putPage = function (s) {
      var v = s.number,
        C = s.data,
        D = s.objId,
        J = s.contentsObjId
      on(D, !0),
        O('<</Type /Page'),
        O('/Parent ' + s.rootDictionaryObjId + ' 0 R'),
        O('/Resources ' + s.resourceDictionaryObjId + ' 0 R'),
        O(
          '/MediaBox [' +
            parseFloat(rt(s.mediaBox.bottomLeftX)) +
            ' ' +
            parseFloat(rt(s.mediaBox.bottomLeftY)) +
            ' ' +
            rt(s.mediaBox.topRightX) +
            ' ' +
            rt(s.mediaBox.topRightY) +
            ']'
        ),
        s.cropBox !== null &&
          O(
            '/CropBox [' +
              rt(s.cropBox.bottomLeftX) +
              ' ' +
              rt(s.cropBox.bottomLeftY) +
              ' ' +
              rt(s.cropBox.topRightX) +
              ' ' +
              rt(s.cropBox.topRightY) +
              ']'
          ),
        s.bleedBox !== null &&
          O(
            '/BleedBox [' +
              rt(s.bleedBox.bottomLeftX) +
              ' ' +
              rt(s.bleedBox.bottomLeftY) +
              ' ' +
              rt(s.bleedBox.topRightX) +
              ' ' +
              rt(s.bleedBox.topRightY) +
              ']'
          ),
        s.trimBox !== null &&
          O(
            '/TrimBox [' +
              rt(s.trimBox.bottomLeftX) +
              ' ' +
              rt(s.trimBox.bottomLeftY) +
              ' ' +
              rt(s.trimBox.topRightX) +
              ' ' +
              rt(s.trimBox.topRightY) +
              ']'
          ),
        s.artBox !== null &&
          O(
            '/ArtBox [' +
              rt(s.artBox.bottomLeftX) +
              ' ' +
              rt(s.artBox.bottomLeftY) +
              ' ' +
              rt(s.artBox.topRightX) +
              ' ' +
              rt(s.artBox.topRightY) +
              ']'
          ),
        typeof s.userUnit == 'number' && s.userUnit !== 1 && O('/UserUnit ' + s.userUnit),
        ue.publish('putPage', { objId: D, pageContext: Yt[v], pageNumber: v, page: C }),
        O('/Contents ' + J + ' 0 R'),
        O('>>'),
        O('endobj')
      var it = C.join(`
`)
      return (
        Z === M.ADVANCED &&
          (it += `
Q`),
        on(J, !0),
        hn({ data: it, filters: Rn(), objectId: J }),
        O('endobj'),
        D
      )
    }),
    _r = (p.__private__.putPages = function () {
      var s,
        v,
        C = []
      for (s = 1; s <= Ae; s++) (Yt[s].objId = je()), (Yt[s].contentsObjId = je())
      for (s = 1; s <= Ae; s++)
        C.push(
          Tn({
            number: s,
            data: Lt[s],
            objId: Yt[s].objId,
            contentsObjId: Yt[s].contentsObjId,
            mediaBox: Yt[s].mediaBox,
            cropBox: Yt[s].cropBox,
            bleedBox: Yt[s].bleedBox,
            trimBox: Yt[s].trimBox,
            artBox: Yt[s].artBox,
            userUnit: Yt[s].userUnit,
            rootDictionaryObjId: Jn,
            resourceDictionaryObjId: wn
          })
        )
      on(Jn, !0), O('<</Type /Pages')
      var D = '/Kids ['
      for (v = 0; v < Ae; v++) D += C[v] + ' 0 R '
      O(D + ']'), O('/Count ' + Ae), O('>>'), O('endobj'), ue.publish('postPutPages')
    }),
    Rr = function (s) {
      ue.publish('putFont', { font: s, out: O, newObject: Ee, putStream: hn }),
        s.isAlreadyPutted !== !0 &&
          ((s.objectNumber = Ee()),
          O('<<'),
          O('/Type /Font'),
          O('/BaseFont /' + gi(s.postScriptName)),
          O('/Subtype /Type1'),
          typeof s.encoding == 'string' && O('/Encoding /' + s.encoding),
          O('/FirstChar 32'),
          O('/LastChar 255'),
          O('>>'),
          O('endobj'))
    },
    Tr = function () {
      for (var s in pe)
        pe.hasOwnProperty(s) && (N === !1 || (N === !0 && _.hasOwnProperty(s))) && Rr(pe[s])
    },
    zr = function (s) {
      s.objectNumber = Ee()
      var v = []
      v.push({ key: 'Type', value: '/XObject' }),
        v.push({ key: 'Subtype', value: '/Form' }),
        v.push({
          key: 'BBox',
          value: '[' + [rt(s.x), rt(s.y), rt(s.x + s.width), rt(s.y + s.height)].join(' ') + ']'
        }),
        v.push({ key: 'Matrix', value: '[' + s.matrix.toString() + ']' })
      var C = s.pages[1].join(`
`)
      hn({ data: C, additionalKeyValues: v, objectId: s.objectNumber }), O('endobj')
    },
    Ur = function () {
      for (var s in Ue) Ue.hasOwnProperty(s) && zr(Ue[s])
    },
    Zi = function (s, v) {
      var C,
        D = [],
        J = 1 / (v - 1)
      for (C = 0; C < 1; C += J) D.push(C)
      if ((D.push(1), s[0].offset != 0)) {
        var it = { offset: 0, color: s[0].color }
        s.unshift(it)
      }
      if (s[s.length - 1].offset != 1) {
        var yt = { offset: 1, color: s[s.length - 1].color }
        s.push(yt)
      }
      for (var Ft = '', Dt = 0, Kt = 0; Kt < D.length; Kt++) {
        for (C = D[Kt]; C > s[Dt + 1].offset; ) Dt++
        var Qt = s[Dt].offset,
          re = (C - Qt) / (s[Dt + 1].offset - Qt),
          Le = s[Dt].color,
          xe = s[Dt + 1].color
        Ft +=
          W(Math.round((1 - re) * Le[0] + re * xe[0]).toString(16)) +
          W(Math.round((1 - re) * Le[1] + re * xe[1]).toString(16)) +
          W(Math.round((1 - re) * Le[2] + re * xe[2]).toString(16))
      }
      return Ft.trim()
    },
    Xa = function (s, v) {
      v || (v = 21)
      var C = Ee(),
        D = Zi(s.colors, v),
        J = []
      J.push({ key: 'FunctionType', value: '0' }),
        J.push({ key: 'Domain', value: '[0.0 1.0]' }),
        J.push({ key: 'Size', value: '[' + v + ']' }),
        J.push({ key: 'BitsPerSample', value: '8' }),
        J.push({ key: 'Range', value: '[0.0 1.0 0.0 1.0 0.0 1.0]' }),
        J.push({ key: 'Decode', value: '[0.0 1.0 0.0 1.0 0.0 1.0]' }),
        hn({
          data: D,
          additionalKeyValues: J,
          alreadyAppliedFilters: ['/ASCIIHexDecode'],
          objectId: C
        }),
        O('endobj'),
        (s.objectNumber = Ee()),
        O('<< /ShadingType ' + s.type),
        O('/ColorSpace /DeviceRGB')
      var it = '/Coords [' + rt(parseFloat(s.coords[0])) + ' ' + rt(parseFloat(s.coords[1])) + ' '
      s.type === 2
        ? (it += rt(parseFloat(s.coords[2])) + ' ' + rt(parseFloat(s.coords[3])))
        : (it +=
            rt(parseFloat(s.coords[2])) +
            ' ' +
            rt(parseFloat(s.coords[3])) +
            ' ' +
            rt(parseFloat(s.coords[4])) +
            ' ' +
            rt(parseFloat(s.coords[5]))),
        O((it += ']')),
        s.matrix && O('/Matrix [' + s.matrix.toString() + ']'),
        O('/Function ' + C + ' 0 R'),
        O('/Extend [true true]'),
        O('>>'),
        O('endobj')
    },
    Ka = function (s, v) {
      var C = je(),
        D = Ee()
      v.push({ resourcesOid: C, objectOid: D }), (s.objectNumber = D)
      var J = []
      J.push({ key: 'Type', value: '/Pattern' }),
        J.push({ key: 'PatternType', value: '1' }),
        J.push({ key: 'PaintType', value: '1' }),
        J.push({ key: 'TilingType', value: '1' }),
        J.push({ key: 'BBox', value: '[' + s.boundingBox.map(rt).join(' ') + ']' }),
        J.push({ key: 'XStep', value: rt(s.xStep) }),
        J.push({ key: 'YStep', value: rt(s.yStep) }),
        J.push({ key: 'Resources', value: C + ' 0 R' }),
        s.matrix && J.push({ key: 'Matrix', value: '[' + s.matrix.toString() + ']' }),
        hn({ data: s.stream, additionalKeyValues: J, objectId: s.objectNumber }),
        O('endobj')
    },
    Hr = function (s) {
      var v
      for (v in ce)
        ce.hasOwnProperty(v) &&
          (ce[v] instanceof Mr ? Xa(ce[v]) : ce[v] instanceof mi && Ka(ce[v], s))
    },
    $i = function (s) {
      for (var v in ((s.objectNumber = Ee()), O('<<'), s))
        switch (v) {
          case 'opacity':
            O('/ca ' + bt(s[v]))
            break
          case 'stroke-opacity':
            O('/CA ' + bt(s[v]))
        }
      O('>>'), O('endobj')
    },
    Za = function () {
      var s
      for (s in Ne) Ne.hasOwnProperty(s) && $i(Ne[s])
    },
    Li = function () {
      for (var s in (O('/XObject <<'), Ue))
        Ue.hasOwnProperty(s) &&
          Ue[s].objectNumber >= 0 &&
          O('/' + s + ' ' + Ue[s].objectNumber + ' 0 R')
      ue.publish('putXobjectDict'), O('>>')
    },
    $a = function () {
      ;(Ve.oid = Ee()),
        O('<<'),
        O('/Filter /Standard'),
        O('/V ' + Ve.v),
        O('/R ' + Ve.r),
        O('/U <' + Ve.toHexString(Ve.U) + '>'),
        O('/O <' + Ve.toHexString(Ve.O) + '>'),
        O('/P ' + Ve.P),
        O('>>'),
        O('endobj')
    },
    Qi = function () {
      for (var s in (O('/Font <<'), pe))
        pe.hasOwnProperty(s) &&
          (N === !1 || (N === !0 && _.hasOwnProperty(s))) &&
          O('/' + s + ' ' + pe[s].objectNumber + ' 0 R')
      O('>>')
    },
    Qa = function () {
      if (Object.keys(ce).length > 0) {
        for (var s in (O('/Shading <<'), ce))
          ce.hasOwnProperty(s) &&
            ce[s] instanceof Mr &&
            ce[s].objectNumber >= 0 &&
            O('/' + s + ' ' + ce[s].objectNumber + ' 0 R')
        ue.publish('putShadingPatternDict'), O('>>')
      }
    },
    Wr = function (s) {
      if (Object.keys(ce).length > 0) {
        for (var v in (O('/Pattern <<'), ce))
          ce.hasOwnProperty(v) &&
            ce[v] instanceof p.TilingPattern &&
            ce[v].objectNumber >= 0 &&
            ce[v].objectNumber < s &&
            O('/' + v + ' ' + ce[v].objectNumber + ' 0 R')
        ue.publish('putTilingPatternDict'), O('>>')
      }
    },
    to = function () {
      if (Object.keys(Ne).length > 0) {
        var s
        for (s in (O('/ExtGState <<'), Ne))
          Ne.hasOwnProperty(s) &&
            Ne[s].objectNumber >= 0 &&
            O('/' + s + ' ' + Ne[s].objectNumber + ' 0 R')
        ue.publish('putGStateDict'), O('>>')
      }
    },
    Pe = function (s) {
      on(s.resourcesOid, !0),
        O('<<'),
        O('/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]'),
        Qi(),
        Qa(),
        Wr(s.objectOid),
        to(),
        Li(),
        O('>>'),
        O('endobj')
    },
    ta = function () {
      var s = []
      Tr(),
        Za(),
        Ur(),
        Hr(s),
        ue.publish('putResources'),
        s.forEach(Pe),
        Pe({ resourcesOid: wn, objectOid: Number.MAX_SAFE_INTEGER }),
        ue.publish('postPutResources')
    },
    ea = function () {
      ue.publish('putAdditionalObjects')
      for (var s = 0; s < At.length; s++) {
        var v = At[s]
        on(v.objId, !0), O(v.content), O('endobj')
      }
      ue.publish('postPutAdditionalObjects')
    },
    na = function (s) {
      ;(we[s.fontName] = we[s.fontName] || {}), (we[s.fontName][s.fontStyle] = s.id)
    },
    Ni = function (s, v, C, D, J) {
      var it = {
        id: 'F' + (Object.keys(pe).length + 1).toString(10),
        postScriptName: s,
        fontName: v,
        fontStyle: C,
        encoding: D,
        isStandardFont: J || !1,
        metadata: {}
      }
      return ue.publish('addFont', { font: it, instance: this }), (pe[it.id] = it), na(it), it.id
    },
    eo = function (s) {
      for (var v = 0, C = wt.length; v < C; v++) {
        var D = Ni.call(this, s[v][0], s[v][1], s[v][2], wt[v][3], !0)
        N === !1 && (_[D] = !0)
        var J = s[v][0].split('-')
        na({ id: D, fontName: J[0], fontStyle: J[1] || '' })
      }
      ue.publish('addFonts', { fonts: pe, dictionary: we })
    },
    An = function (s) {
      return (
        (s.foo = function () {
          try {
            return s.apply(this, arguments)
          } catch (D) {
            var v = D.stack || ''
            ~v.indexOf(' at ') && (v = v.split(' at ')[1])
            var C =
              'Error in function ' +
              v
                .split(
                  `
`
                )[0]
                .split('<')[0] +
              ': ' +
              D.message
            if (!Ut.console) throw new Error(C)
            Ut.console.error(C, D), Ut.alert && alert(C)
          }
        }),
        (s.foo.bar = s),
        s.foo
      )
    },
    Vr = function (s, v) {
      var C, D, J, it, yt, Ft, Dt, Kt, Qt
      if (
        ((J = (v = v || {}).sourceEncoding || 'Unicode'),
        (yt = v.outputEncoding),
        (v.autoencode || yt) &&
          pe[ee].metadata &&
          pe[ee].metadata[J] &&
          pe[ee].metadata[J].encoding &&
          ((it = pe[ee].metadata[J].encoding),
          !yt && pe[ee].encoding && (yt = pe[ee].encoding),
          !yt && it.codePages && (yt = it.codePages[0]),
          typeof yt == 'string' && (yt = it[yt]),
          yt))
      ) {
        for (Dt = !1, Ft = [], C = 0, D = s.length; C < D; C++)
          (Kt = yt[s.charCodeAt(C)]) ? Ft.push(String.fromCharCode(Kt)) : Ft.push(s[C]),
            Ft[C].charCodeAt(0) >> 8 && (Dt = !0)
        s = Ft.join('')
      }
      for (C = s.length; Dt === void 0 && C !== 0; ) s.charCodeAt(C - 1) >> 8 && (Dt = !0), C--
      if (!Dt) return s
      for (Ft = v.noBOM ? [] : [254, 255], C = 0, D = s.length; C < D; C++) {
        if ((Qt = (Kt = s.charCodeAt(C)) >> 8) >> 8)
          throw new Error(
            'Character at position ' +
              C +
              " of string '" +
              s +
              "' exceeds 16bits. Cannot be encoded into UCS-2 BE"
          )
        Ft.push(Qt), Ft.push(Kt - (Qt << 8))
      }
      return String.fromCharCode.apply(void 0, Ft)
    },
    Qe =
      (p.__private__.pdfEscape =
      p.pdfEscape =
        function (s, v) {
          return Vr(s, v).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
        }),
    Ai = (p.__private__.beginPage = function (s) {
      ;(Lt[++Ae] = []),
        (Yt[Ae] = {
          objId: 0,
          contentsObjId: 0,
          userUnit: Number(h),
          artBox: null,
          bleedBox: null,
          cropBox: null,
          trimBox: null,
          mediaBox: {
            bottomLeftX: 0,
            bottomLeftY: 0,
            topRightX: Number(s[0]),
            topRightY: Number(s[1])
          }
        }),
        ia(Ae),
        at(Lt[j])
    }),
    ra = function (s, v) {
      var C, D, J
      switch (
        ((n = v || n),
        typeof s == 'string' &&
          ((C = S(s.toLowerCase())), Array.isArray(C) && ((D = C[0]), (J = C[1]))),
        Array.isArray(s) && ((D = s[0] * It), (J = s[1] * It)),
        isNaN(D) && ((D = u[0]), (J = u[1])),
        (D > 14400 || J > 14400) &&
          (me.warn(
            'A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400'
          ),
          (D = Math.min(14400, D)),
          (J = Math.min(14400, J))),
        (u = [D, J]),
        n.substr(0, 1))
      ) {
        case 'l':
          J > D && (u = [J, D])
          break
        case 'p':
          D > J && (u = [J, D])
      }
      Ai(u),
        la(Pi),
        O(xn),
        Ii !== 0 && O(Ii + ' J'),
        Fi !== 0 && O(Fi + ' j'),
        ue.publish('addPage', { pageNumber: Ae })
    },
    no = function (s) {
      s > 0 &&
        s <= Ae &&
        (Lt.splice(s, 1), Yt.splice(s, 1), Ae--, j > Ae && (j = Ae), this.setPage(j))
    },
    ia = function (s) {
      s > 0 && s <= Ae && (j = s)
    },
    ro =
      (p.__private__.getNumberOfPages =
      p.getNumberOfPages =
        function () {
          return Lt.length - 1
        }),
    aa = function (s, v, C) {
      var D,
        J = void 0
      return (
        (C = C || {}),
        (s = s !== void 0 ? s : pe[ee].fontName),
        (v = v !== void 0 ? v : pe[ee].fontStyle),
        (D = s.toLowerCase()),
        we[D] !== void 0 && we[D][v] !== void 0
          ? (J = we[D][v])
          : we[s] !== void 0 && we[s][v] !== void 0
          ? (J = we[s][v])
          : C.disableWarning === !1 &&
            me.warn(
              "Unable to look up font label for font '" +
                s +
                "', '" +
                v +
                "'. Refer to getFontList() for available fonts."
            ),
        J || C.noFallback || ((J = we.times[v]) == null && (J = we.times.normal)),
        J
      )
    },
    io = (p.__private__.putInfo = function () {
      var s = Ee(),
        v = function (D) {
          return D
        }
      for (var C in (A !== null && (v = Ve.encryptor(s, 0)),
      O('<<'),
      O('/Producer (' + Qe(v('jsPDF ' + zt.version)) + ')'),
      Ht))
        Ht.hasOwnProperty(C) &&
          Ht[C] &&
          O('/' + C.substr(0, 1).toUpperCase() + C.substr(1) + ' (' + Qe(v(Ht[C])) + ')')
      O('/CreationDate (' + Qe(v(ct)) + ')'), O('>>'), O('endobj')
    }),
    xi = (p.__private__.putCatalog = function (s) {
      var v = (s = s || {}).rootDictionaryObjId || Jn
      switch (
        (Ee(),
        O('<<'),
        O('/Type /Catalog'),
        O('/Pages ' + v + ' 0 R'),
        kt || (kt = 'fullwidth'),
        kt)
      ) {
        case 'fullwidth':
          O('/OpenAction [3 0 R /FitH null]')
          break
        case 'fullheight':
          O('/OpenAction [3 0 R /FitV null]')
          break
        case 'fullpage':
          O('/OpenAction [3 0 R /Fit]')
          break
        case 'original':
          O('/OpenAction [3 0 R /XYZ null null 1]')
          break
        default:
          var C = '' + kt
          C.substr(C.length - 1) === '%' && (kt = parseInt(kt) / 100),
            typeof kt == 'number' && O('/OpenAction [3 0 R /XYZ null null ' + bt(kt) + ']')
      }
      switch ((te || (te = 'continuous'), te)) {
        case 'continuous':
          O('/PageLayout /OneColumn')
          break
        case 'single':
          O('/PageLayout /SinglePage')
          break
        case 'two':
        case 'twoleft':
          O('/PageLayout /TwoColumnLeft')
          break
        case 'tworight':
          O('/PageLayout /TwoColumnRight')
      }
      Gt && O('/PageMode /' + Gt), ue.publish('putCatalog'), O('>>'), O('endobj')
    }),
    ao = (p.__private__.putTrailer = function () {
      O('trailer'),
        O('<<'),
        O('/Size ' + (Y + 1)),
        O('/Root ' + Y + ' 0 R'),
        O('/Info ' + (Y - 1) + ' 0 R'),
        A !== null && O('/Encrypt ' + Ve.oid + ' 0 R'),
        O('/ID [ <' + ot + '> <' + ot + '> ]'),
        O('>>')
    }),
    oo = (p.__private__.putHeader = function () {
      O('%PDF-' + B), O('%\xBA\xDF\xAC\xE0')
    }),
    so = (p.__private__.putXRef = function () {
      var s = '0000000000'
      O('xref'), O('0 ' + (Y + 1)), O('0000000000 65535 f ')
      for (var v = 1; v <= Y; v++)
        typeof $[v] == 'function'
          ? O((s + $[v]()).slice(-10) + ' 00000 n ')
          : $[v] !== void 0
          ? O((s + $[v]).slice(-10) + ' 00000 n ')
          : O('0000000000 00000 n ')
    }),
    Xn = (p.__private__.buildDocument = function () {
      Wt(),
        at(et),
        ue.publish('buildDocument'),
        oo(),
        _r(),
        ea(),
        ta(),
        A !== null && $a(),
        io(),
        xi()
      var s = Q
      return (
        so(),
        ao(),
        O('startxref'),
        O('' + s),
        O('%%EOF'),
        at(Lt[j]),
        et.join(`
`)
      )
    }),
    Gr = (p.__private__.getBlob = function (s) {
      return new Blob([Mt(s)], { type: 'application/pdf' })
    }),
    Yr =
      (p.output =
      p.__private__.output =
        An(function (s, v) {
          switch (
            (typeof (v = v || {}) == 'string'
              ? (v = { filename: v })
              : (v.filename = v.filename || 'generated.pdf'),
            s)
          ) {
            case void 0:
              return Xn()
            case 'save':
              p.save(v.filename)
              break
            case 'arraybuffer':
              return Mt(Xn())
            case 'blob':
              return Gr(Xn())
            case 'bloburi':
            case 'bloburl':
              if (Ut.URL !== void 0 && typeof Ut.URL.createObjectURL == 'function')
                return (Ut.URL && Ut.URL.createObjectURL(Gr(Xn()))) || void 0
              me.warn(
                'bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.'
              )
              break
            case 'datauristring':
            case 'dataurlstring':
              var C = '',
                D = Xn()
              try {
                C = Jo(D)
              } catch {
                C = Jo(unescape(encodeURIComponent(D)))
              }
              return 'data:application/pdf;filename=' + v.filename + ';base64,' + C
            case 'pdfobjectnewwindow':
              if (Object.prototype.toString.call(Ut) === '[object Window]') {
                var J = 'https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js',
                  it =
                    ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"'
                v.pdfObjectUrl && ((J = v.pdfObjectUrl), (it = ''))
                var yt =
                    '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' +
                    J +
                    '"' +
                    it +
                    '></script><script >PDFObject.embed("' +
                    this.output('dataurlstring') +
                    '", ' +
                    JSON.stringify(v) +
                    ');</script></body></html>',
                  Ft = Ut.open()
                return Ft !== null && Ft.document.write(yt), Ft
              }
              throw new Error('The option pdfobjectnewwindow just works in a browser-environment.')
            case 'pdfjsnewwindow':
              if (Object.prototype.toString.call(Ut) === '[object Window]') {
                var Dt =
                    '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' +
                    (v.pdfJsUrl || 'examples/PDF.js/web/viewer.html') +
                    '?file=&downloadName=' +
                    v.filename +
                    '" width="500px" height="400px" /></body></html>',
                  Kt = Ut.open()
                if (Kt !== null) {
                  Kt.document.write(Dt)
                  var Qt = this
                  Kt.document.documentElement.querySelector('#pdfViewer').onload = function () {
                    ;(Kt.document.title = v.filename),
                      Kt.document.documentElement
                        .querySelector('#pdfViewer')
                        .contentWindow.PDFViewerApplication.open(Qt.output('bloburl'))
                  }
                }
                return Kt
              }
              throw new Error('The option pdfjsnewwindow just works in a browser-environment.')
            case 'dataurlnewwindow':
              if (Object.prototype.toString.call(Ut) !== '[object Window]')
                throw new Error('The option dataurlnewwindow just works in a browser-environment.')
              var re =
                  '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' +
                  this.output('datauristring', v) +
                  '"></iframe></body></html>',
                Le = Ut.open()
              if (
                (Le !== null && (Le.document.write(re), (Le.document.title = v.filename)),
                Le || typeof safari > 'u')
              )
                return Le
              break
            case 'datauri':
            case 'dataurl':
              return (Ut.document.location.href = this.output('datauristring', v))
            default:
              return null
          }
        })),
    oa = function (s) {
      return Array.isArray(Sr) === !0 && Sr.indexOf(s) > -1
    }
  switch (a) {
    case 'pt':
      It = 1
      break
    case 'mm':
      It = 72 / 25.4
      break
    case 'cm':
      It = 72 / 2.54
      break
    case 'in':
      It = 72
      break
    case 'px':
      It = oa('px_scaling') == 1 ? 0.75 : 96 / 72
      break
    case 'pc':
    case 'em':
      It = 12
      break
    case 'ex':
      It = 6
      break
    default:
      if (typeof a != 'number') throw new Error('Invalid unit: ' + a)
      It = a
  }
  var Ve = null
  Et(), tt()
  var co = function (s) {
      return A !== null
        ? Ve.encryptor(s, 0)
        : function (v) {
            return v
          }
    },
    sa =
      (p.__private__.getPageInfo =
      p.getPageInfo =
        function (s) {
          if (isNaN(s) || s % 1 != 0)
            throw new Error('Invalid argument passed to jsPDF.getPageInfo')
          return { objId: Yt[s].objId, pageNumber: s, pageContext: Yt[s] }
        }),
    Vt = (p.__private__.getPageInfoByObjId = function (s) {
      if (isNaN(s) || s % 1 != 0)
        throw new Error('Invalid argument passed to jsPDF.getPageInfoByObjId')
      for (var v in Yt) if (Yt[v].objId === s) break
      return sa(v)
    }),
    uo =
      (p.__private__.getCurrentPageInfo =
      p.getCurrentPageInfo =
        function () {
          return { objId: Yt[j].objId, pageNumber: j, pageContext: Yt[j] }
        })
  ;(p.addPage = function () {
    return ra.apply(this, arguments), this
  }),
    (p.setPage = function () {
      return ia.apply(this, arguments), at.call(this, Lt[j]), this
    }),
    (p.insertPage = function (s) {
      return this.addPage(), this.movePage(j, s), this
    }),
    (p.movePage = function (s, v) {
      var C, D
      if (s > v) {
        ;(C = Lt[s]), (D = Yt[s])
        for (var J = s; J > v; J--) (Lt[J] = Lt[J - 1]), (Yt[J] = Yt[J - 1])
        ;(Lt[v] = C), (Yt[v] = D), this.setPage(v)
      } else if (s < v) {
        ;(C = Lt[s]), (D = Yt[s])
        for (var it = s; it < v; it++) (Lt[it] = Lt[it + 1]), (Yt[it] = Yt[it + 1])
        ;(Lt[v] = C), (Yt[v] = D), this.setPage(v)
      }
      return this
    }),
    (p.deletePage = function () {
      return no.apply(this, arguments), this
    }),
    (p.__private__.text = p.text =
      function (s, v, C, D, J) {
        var it,
          yt,
          Ft,
          Dt,
          Kt,
          Qt,
          re,
          Le,
          xe,
          Oe = (D = D || {}).scope || this
        if (
          typeof s == 'number' &&
          typeof v == 'number' &&
          (typeof C == 'string' || Array.isArray(C))
        ) {
          var Ge = C
          ;(C = v), (v = s), (s = Ge)
        }
        if (
          (arguments[3] instanceof Tt
            ? (G('The transform parameter of text() with a Matrix value'), (xe = J))
            : ((Ft = arguments[4]),
              (Dt = arguments[5]),
              (ve((re = arguments[3])) === 'object' && re !== null) ||
                (typeof Ft == 'string' && ((Dt = Ft), (Ft = null)),
                typeof re == 'string' && ((Dt = re), (re = null)),
                typeof re == 'number' && ((Ft = re), (re = null)),
                (D = { flags: re, angle: Ft, align: Dt }))),
          isNaN(v) || isNaN(C) || s == null)
        )
          throw new Error('Invalid arguments passed to jsPDF.text')
        if (s.length === 0) return Oe
        var De = '',
          Sn = !1,
          sn = typeof D.lineHeightFactor == 'number' ? D.lineHeightFactor : kr,
          Zn = Oe.internal.scaleFactor
        function ma(be) {
          return (be = be.split('	').join(Array(D.TabLen || 9).join(' '))), Qe(be, re)
        }
        function Mi(be) {
          for (var ye, ke = be.concat(), qe = [], er = ke.length; er--; )
            typeof (ye = ke.shift()) == 'string'
              ? qe.push(ye)
              : Array.isArray(be) && (ye.length === 1 || (ye[1] === void 0 && ye[2] === void 0))
              ? qe.push(ye[0])
              : qe.push([ye[0], ye[1], ye[2]])
          return qe
        }
        function Ei(be, ye) {
          var ke
          if (typeof be == 'string') ke = ye(be)[0]
          else if (Array.isArray(be)) {
            for (var qe, er, dr = be.concat(), si = [], ba = dr.length; ba--; )
              typeof (qe = dr.shift()) == 'string'
                ? si.push(ye(qe)[0])
                : Array.isArray(qe) &&
                  typeof qe[0] == 'string' &&
                  ((er = ye(qe[0], qe[1], qe[2])), si.push([er[0], er[1], er[2]]))
            ke = si
          }
          return ke
        }
        var Qr = !1,
          qi = !0
        if (typeof s == 'string') Qr = !0
        else if (Array.isArray(s)) {
          var Di = s.concat()
          yt = []
          for (var ti, tn = Di.length; tn--; )
            (typeof (ti = Di.shift()) != 'string' ||
              (Array.isArray(ti) && typeof ti[0] != 'string')) &&
              (qi = !1)
          Qr = qi
        }
        if (Qr === !1)
          throw new Error('Type of text must be string or Array. "' + s + '" is not recognized.')
        typeof s == 'string' && (s = s.match(/[\r?\n]/) ? s.split(/\r\n|\r|\n/g) : [s])
        var ei = xt / Oe.internal.scaleFactor,
          ni = ei * (sn - 1)
        switch (D.baseline) {
          case 'bottom':
            C -= ni
            break
          case 'top':
            C += ei - ni
            break
          case 'hanging':
            C += ei - 2 * ni
            break
          case 'middle':
            C += ei / 2 - ni
        }
        if (
          ((Qt = D.maxWidth || 0) > 0 &&
            (typeof s == 'string'
              ? (s = Oe.splitTextToSize(s, Qt))
              : Object.prototype.toString.call(s) === '[object Array]' &&
                (s = s.reduce(function (be, ye) {
                  return be.concat(Oe.splitTextToSize(ye, Qt))
                }, []))),
          (it = {
            text: s,
            x: v,
            y: C,
            options: D,
            mutex: { pdfEscape: Qe, activeFontKey: ee, fonts: pe, activeFontSize: xt }
          }),
          ue.publish('preProcessText', it),
          (s = it.text),
          (Ft = (D = it.options).angle),
          !(xe instanceof Tt) && Ft && typeof Ft == 'number')
        ) {
          ;(Ft *= Math.PI / 180),
            D.rotationDirection === 0 && (Ft = -Ft),
            Z === M.ADVANCED && (Ft = -Ft)
          var ri = Math.cos(Ft),
            Ri = Math.sin(Ft)
          xe = new Tt(ri, Ri, -Ri, ri, 0, 0)
        } else Ft && Ft instanceof Tt && (xe = Ft)
        Z !== M.ADVANCED || xe || (xe = Dn),
          (Kt = D.charSpace || Kr) !== void 0 &&
            ((De +=
              rt(I(Kt)) +
              ` Tc
`),
            this.setCharSpace(this.getCharSpace() || 0)),
          (Le = D.horizontalScale) !== void 0 &&
            (De +=
              rt(100 * Le) +
              ` Tz
`),
          D.lang
        var en = -1,
          wo = D.renderingMode !== void 0 ? D.renderingMode : D.stroke,
          Ti = Oe.internal.getCurrentPageInfo().pageContext
        switch (wo) {
          case 0:
          case !1:
          case 'fill':
            en = 0
            break
          case 1:
          case !0:
          case 'stroke':
            en = 1
            break
          case 2:
          case 'fillThenStroke':
            en = 2
            break
          case 3:
          case 'invisible':
            en = 3
            break
          case 4:
          case 'fillAndAddForClipping':
            en = 4
            break
          case 5:
          case 'strokeAndAddPathForClipping':
            en = 5
            break
          case 6:
          case 'fillThenStrokeAndAddToPathForClipping':
            en = 6
            break
          case 7:
          case 'addToPathForClipping':
            en = 7
        }
        var va = Ti.usedRenderingMode !== void 0 ? Ti.usedRenderingMode : -1
        en !== -1
          ? (De +=
              en +
              ` Tr
`)
          : va !== -1 &&
            (De += `0 Tr
`),
          en !== -1 && (Ti.usedRenderingMode = en),
          (Dt = D.align || 'left')
        var _n,
          zi = xt * sn,
          Lo = Oe.internal.pageSize.getWidth(),
          No = pe[ee]
        ;(Kt = D.charSpace || Kr),
          (Qt = D.maxWidth || 0),
          (re = Object.assign({ autoencode: !0, noBOM: !0 }, D.flags))
        var ur = []
        if (Object.prototype.toString.call(s) === '[object Array]') {
          var fn
          ;(yt = Mi(s)),
            Dt !== 'left' &&
              (_n = yt.map(function (be) {
                return (
                  (Oe.getStringUnitWidth(be, {
                    font: No,
                    charSpace: Kt,
                    fontSize: xt,
                    doKerning: !1
                  }) *
                    xt) /
                  Zn
                )
              }))
          var Pn,
            lr = 0
          if (Dt === 'right') {
            ;(v -= _n[0]), (s = []), (tn = yt.length)
            for (var Un = 0; Un < tn; Un++)
              Un === 0 ? ((Pn = Kn(v)), (fn = or(C))) : ((Pn = I(lr - _n[Un])), (fn = -zi)),
                s.push([yt[Un], Pn, fn]),
                (lr = _n[Un])
          } else if (Dt === 'center') {
            ;(v -= _n[0] / 2), (s = []), (tn = yt.length)
            for (var $n = 0; $n < tn; $n++)
              $n === 0 ? ((Pn = Kn(v)), (fn = or(C))) : ((Pn = I((lr - _n[$n]) / 2)), (fn = -zi)),
                s.push([yt[$n], Pn, fn]),
                (lr = _n[$n])
          } else if (Dt === 'left') {
            ;(s = []), (tn = yt.length)
            for (var ii = 0; ii < tn; ii++) s.push(yt[ii])
          } else {
            if (Dt !== 'justify')
              throw new Error(
                'Unrecognized alignment option, use "left", "center", "right" or "justify".'
              )
            ;(s = []), (tn = yt.length), (Qt = Qt !== 0 ? Qt : Lo)
            for (var kn = 0; kn < tn; kn++)
              (fn = kn === 0 ? or(C) : -zi),
                (Pn = kn === 0 ? Kn(v) : 0),
                kn < tn - 1
                  ? ur.push(rt(I((Qt - _n[kn]) / (yt[kn].split(' ').length - 1))))
                  : ur.push(0),
                s.push([yt[kn], Pn, fn])
          }
        }
        var ai = typeof D.R2L == 'boolean' ? D.R2L : qt
        ai === !0 &&
          (s = Ei(s, function (be, ye, ke) {
            return [be.split('').reverse().join(''), ye, ke]
          })),
          (it = {
            text: s,
            x: v,
            y: C,
            options: D,
            mutex: { pdfEscape: Qe, activeFontKey: ee, fonts: pe, activeFontSize: xt }
          }),
          ue.publish('postProcessText', it),
          (s = it.text),
          (Sn = it.mutex.isHex || !1)
        var Ui = pe[ee].encoding
        ;(Ui !== 'WinAnsiEncoding' && Ui !== 'StandardEncoding') ||
          (s = Ei(s, function (be, ye, ke) {
            return [ma(be), ye, ke]
          })),
          (yt = Mi(s)),
          (s = [])
        for (
          var hr,
            In,
            Qn,
            Cr = 0,
            oi = 1,
            jr = Array.isArray(yt[0]) ? oi : Cr,
            fr = '',
            Hi = function (be, ye, ke) {
              var qe = ''
              return (
                ke instanceof Tt
                  ? ((ke =
                      typeof D.angle == 'number'
                        ? yn(ke, new Tt(1, 0, 0, 1, be, ye))
                        : yn(new Tt(1, 0, 0, 1, be, ye), ke)),
                    Z === M.ADVANCED && (ke = yn(new Tt(1, 0, 0, -1, 0, 0), ke)),
                    (qe =
                      ke.join(' ') +
                      ` Tm
`))
                  : (qe =
                      rt(be) +
                      ' ' +
                      rt(ye) +
                      ` Td
`),
                qe
              )
            },
            dn = 0;
          dn < yt.length;
          dn++
        ) {
          switch (((fr = ''), jr)) {
            case oi:
              ;(Qn = (Sn ? '<' : '(') + yt[dn][0] + (Sn ? '>' : ')')),
                (hr = parseFloat(yt[dn][1])),
                (In = parseFloat(yt[dn][2]))
              break
            case Cr:
              ;(Qn = (Sn ? '<' : '(') + yt[dn] + (Sn ? '>' : ')')), (hr = Kn(v)), (In = or(C))
          }
          ur !== void 0 &&
            ur[dn] !== void 0 &&
            (fr =
              ur[dn] +
              ` Tw
`),
            dn === 0
              ? s.push(fr + Hi(hr, In, xe) + Qn)
              : jr === Cr
              ? s.push(fr + Qn)
              : jr === oi && s.push(fr + Hi(hr, In, xe) + Qn)
        }
        ;(s =
          jr === Cr
            ? s.join(` Tj
T* `)
            : s.join(` Tj
`)),
          (s += ` Tj
`)
        var tr = `BT
/`
        return (
          (tr +=
            ee +
            ' ' +
            xt +
            ` Tf
`),
          (tr +=
            rt(xt * sn) +
            ` TL
`),
          (tr +=
            Ir +
            `
`),
          (tr += De),
          (tr += s),
          O((tr += 'ET')),
          (_[ee] = !0),
          Oe
        )
      })
  var lo =
    (p.__private__.clip =
    p.clip =
      function (s) {
        return O(s === 'evenodd' ? 'W*' : 'W'), this
      })
  ;(p.clipEvenOdd = function () {
    return lo('evenodd')
  }),
    (p.__private__.discardPath = p.discardPath =
      function () {
        return O('n'), this
      })
  var zn = (p.__private__.isValidStyle = function (s) {
    var v = !1
    return (
      [void 0, null, 'S', 'D', 'F', 'DF', 'FD', 'f', 'f*', 'B', 'B*', 'n'].indexOf(s) !== -1 &&
        (v = !0),
      v
    )
  })
  p.__private__.setDefaultPathOperation = p.setDefaultPathOperation = function (s) {
    return zn(s) && (g = s), this
  }
  var ca =
      (p.__private__.getStyle =
      p.getStyle =
        function (s) {
          var v = g
          switch (s) {
            case 'D':
            case 'S':
              v = 'S'
              break
            case 'F':
              v = 'f'
              break
            case 'FD':
            case 'DF':
              v = 'B'
              break
            case 'f':
            case 'f*':
            case 'B':
            case 'B*':
              v = s
          }
          return v
        }),
    ua = (p.close = function () {
      return O('h'), this
    })
  ;(p.stroke = function () {
    return O('S'), this
  }),
    (p.fill = function (s) {
      return Jr('f', s), this
    }),
    (p.fillEvenOdd = function (s) {
      return Jr('f*', s), this
    }),
    (p.fillStroke = function (s) {
      return Jr('B', s), this
    }),
    (p.fillStrokeEvenOdd = function (s) {
      return Jr('B*', s), this
    })
  var Jr = function (s, v) {
      ve(v) === 'object' ? fo(v, s) : O(s)
    },
    Si = function (s) {
      s === null || (Z === M.ADVANCED && s === void 0) || ((s = ca(s)), O(s))
    }
  function ho(s, v, C, D, J) {
    var it = new mi(
      v || this.boundingBox,
      C || this.xStep,
      D || this.yStep,
      this.gState,
      J || this.matrix
    )
    it.stream = this.stream
    var yt = s + '$$' + this.cloneIndex++ + '$$'
    return $e(yt, it), it
  }
  var fo = function (s, v) {
      var C = xr[s.key],
        D = ce[C]
      if (D instanceof Mr)
        O('q'),
          O(po(v)),
          D.gState && p.setGState(D.gState),
          O(s.matrix.toString() + ' cm'),
          O('/' + C + ' sh'),
          O('Q')
      else if (D instanceof mi) {
        var J = new Tt(1, 0, 0, -1, 0, cr())
        s.matrix &&
          ((J = J.multiply(s.matrix || Dn)),
          (C = ho.call(D, s.key, s.boundingBox, s.xStep, s.yStep, J).id)),
          O('q'),
          O('/Pattern cs'),
          O('/' + C + ' scn'),
          D.gState && p.setGState(D.gState),
          O(v),
          O('Q')
      }
    },
    po = function (s) {
      switch (s) {
        case 'f':
        case 'F':
          return 'W n'
        case 'f*':
          return 'W* n'
        case 'B':
          return 'W S'
        case 'B*':
          return 'W* S'
        case 'S':
          return 'W S'
        case 'n':
          return 'W n'
      }
    },
    _i = (p.moveTo = function (s, v) {
      return O(rt(I(s)) + ' ' + rt(R(v)) + ' m'), this
    }),
    Pr = (p.lineTo = function (s, v) {
      return O(rt(I(s)) + ' ' + rt(R(v)) + ' l'), this
    }),
    ar = (p.curveTo = function (s, v, C, D, J, it) {
      return O([rt(I(s)), rt(R(v)), rt(I(C)), rt(R(D)), rt(I(J)), rt(R(it)), 'c'].join(' ')), this
    })
  ;(p.__private__.line = p.line =
    function (s, v, C, D, J) {
      if (isNaN(s) || isNaN(v) || isNaN(C) || isNaN(D) || !zn(J))
        throw new Error('Invalid arguments passed to jsPDF.line')
      return Z === M.COMPAT
        ? this.lines([[C - s, D - v]], s, v, [1, 1], J || 'S')
        : this.lines([[C - s, D - v]], s, v, [1, 1]).stroke()
    }),
    (p.__private__.lines = p.lines =
      function (s, v, C, D, J, it) {
        var yt, Ft, Dt, Kt, Qt, re, Le, xe, Oe, Ge, De, Sn
        if (
          (typeof s == 'number' && ((Sn = C), (C = v), (v = s), (s = Sn)),
          (D = D || [1, 1]),
          (it = it || !1),
          isNaN(v) ||
            isNaN(C) ||
            !Array.isArray(s) ||
            !Array.isArray(D) ||
            !zn(J) ||
            typeof it != 'boolean')
        )
          throw new Error('Invalid arguments passed to jsPDF.lines')
        for (_i(v, C), yt = D[0], Ft = D[1], Kt = s.length, Ge = v, De = C, Dt = 0; Dt < Kt; Dt++)
          (Qt = s[Dt]).length === 2
            ? ((Ge = Qt[0] * yt + Ge), (De = Qt[1] * Ft + De), Pr(Ge, De))
            : ((re = Qt[0] * yt + Ge),
              (Le = Qt[1] * Ft + De),
              (xe = Qt[2] * yt + Ge),
              (Oe = Qt[3] * Ft + De),
              (Ge = Qt[4] * yt + Ge),
              (De = Qt[5] * Ft + De),
              ar(re, Le, xe, Oe, Ge, De))
        return it && ua(), Si(J), this
      }),
    (p.path = function (s) {
      for (var v = 0; v < s.length; v++) {
        var C = s[v],
          D = C.c
        switch (C.op) {
          case 'm':
            _i(D[0], D[1])
            break
          case 'l':
            Pr(D[0], D[1])
            break
          case 'c':
            ar.apply(this, D)
            break
          case 'h':
            ua()
        }
      }
      return this
    }),
    (p.__private__.rect = p.rect =
      function (s, v, C, D, J) {
        if (isNaN(s) || isNaN(v) || isNaN(C) || isNaN(D) || !zn(J))
          throw new Error('Invalid arguments passed to jsPDF.rect')
        return (
          Z === M.COMPAT && (D = -D),
          O([rt(I(s)), rt(R(v)), rt(I(C)), rt(I(D)), 're'].join(' ')),
          Si(J),
          this
        )
      }),
    (p.__private__.triangle = p.triangle =
      function (s, v, C, D, J, it, yt) {
        if (isNaN(s) || isNaN(v) || isNaN(C) || isNaN(D) || isNaN(J) || isNaN(it) || !zn(yt))
          throw new Error('Invalid arguments passed to jsPDF.triangle')
        return (
          this.lines(
            [
              [C - s, D - v],
              [J - C, it - D],
              [s - J, v - it]
            ],
            s,
            v,
            [1, 1],
            yt,
            !0
          ),
          this
        )
      }),
    (p.__private__.roundedRect = p.roundedRect =
      function (s, v, C, D, J, it, yt) {
        if (isNaN(s) || isNaN(v) || isNaN(C) || isNaN(D) || isNaN(J) || isNaN(it) || !zn(yt))
          throw new Error('Invalid arguments passed to jsPDF.roundedRect')
        var Ft = (4 / 3) * (Math.SQRT2 - 1)
        return (
          (J = Math.min(J, 0.5 * C)),
          (it = Math.min(it, 0.5 * D)),
          this.lines(
            [
              [C - 2 * J, 0],
              [J * Ft, 0, J, it - it * Ft, J, it],
              [0, D - 2 * it],
              [0, it * Ft, -J * Ft, it, -J, it],
              [2 * J - C, 0],
              [-J * Ft, 0, -J, -it * Ft, -J, -it],
              [0, 2 * it - D],
              [0, -it * Ft, J * Ft, -it, J, -it]
            ],
            s + J,
            v,
            [1, 1],
            yt,
            !0
          ),
          this
        )
      }),
    (p.__private__.ellipse = p.ellipse =
      function (s, v, C, D, J) {
        if (isNaN(s) || isNaN(v) || isNaN(C) || isNaN(D) || !zn(J))
          throw new Error('Invalid arguments passed to jsPDF.ellipse')
        var it = (4 / 3) * (Math.SQRT2 - 1) * C,
          yt = (4 / 3) * (Math.SQRT2 - 1) * D
        return (
          _i(s + C, v),
          ar(s + C, v - yt, s + it, v - D, s, v - D),
          ar(s - it, v - D, s - C, v - yt, s - C, v),
          ar(s - C, v + yt, s - it, v + D, s, v + D),
          ar(s + it, v + D, s + C, v + yt, s + C, v),
          Si(J),
          this
        )
      }),
    (p.__private__.circle = p.circle =
      function (s, v, C, D) {
        if (isNaN(s) || isNaN(v) || isNaN(C) || !zn(D))
          throw new Error('Invalid arguments passed to jsPDF.circle')
        return this.ellipse(s, v, C, C, D)
      }),
    (p.setFont = function (s, v, C) {
      return C && (v = Nt(v, C)), (ee = aa(s, v, { disableWarning: !1 })), this
    })
  var go =
    (p.__private__.getFont =
    p.getFont =
      function () {
        return pe[aa.apply(p, arguments)]
      })
  ;(p.__private__.getFontList = p.getFontList =
    function () {
      var s,
        v,
        C = {}
      for (s in we)
        if (we.hasOwnProperty(s))
          for (v in ((C[s] = []), we[s])) we[s].hasOwnProperty(v) && C[s].push(v)
      return C
    }),
    (p.addFont = function (s, v, C, D, J) {
      var it = ['StandardEncoding', 'MacRomanEncoding', 'Identity-H', 'WinAnsiEncoding']
      return (
        arguments[3] && it.indexOf(arguments[3]) !== -1
          ? (J = arguments[3])
          : arguments[3] && it.indexOf(arguments[3]) == -1 && (C = Nt(C, D)),
        (J = J || 'Identity-H'),
        Ni.call(this, s, v, C, J)
      )
    })
  var kr,
    Pi = i.lineWidth || 0.200025,
    Xr =
      (p.__private__.getLineWidth =
      p.getLineWidth =
        function () {
          return Pi
        }),
    la =
      (p.__private__.setLineWidth =
      p.setLineWidth =
        function (s) {
          return (Pi = s), O(rt(I(s)) + ' w'), this
        })
  p.__private__.setLineDash =
    zt.API.setLineDash =
    zt.API.setLineDashPattern =
      function (s, v) {
        if (((s = s || []), (v = v || 0), isNaN(v) || !Array.isArray(s)))
          throw new Error('Invalid arguments passed to jsPDF.setLineDash')
        return (
          (s = s
            .map(function (C) {
              return rt(I(C))
            })
            .join(' ')),
          (v = rt(I(v))),
          O('[' + s + '] ' + v + ' d'),
          this
        )
      }
  var ha =
    (p.__private__.getLineHeight =
    p.getLineHeight =
      function () {
        return xt * kr
      })
  p.__private__.getLineHeight = p.getLineHeight = function () {
    return xt * kr
  }
  var fa =
      (p.__private__.setLineHeightFactor =
      p.setLineHeightFactor =
        function (s) {
          return typeof (s = s || 1.15) == 'number' && (kr = s), this
        }),
    da =
      (p.__private__.getLineHeightFactor =
      p.getLineHeightFactor =
        function () {
          return kr
        })
  fa(i.lineHeight)
  var Kn = (p.__private__.getHorizontalCoordinate = function (s) {
      return I(s)
    }),
    or = (p.__private__.getVerticalCoordinate = function (s) {
      return Z === M.ADVANCED ? s : Yt[j].mediaBox.topRightY - Yt[j].mediaBox.bottomLeftY - I(s)
    }),
    mo =
      (p.__private__.getHorizontalCoordinateString =
      p.getHorizontalCoordinateString =
        function (s) {
          return rt(Kn(s))
        }),
    sr =
      (p.__private__.getVerticalCoordinateString =
      p.getVerticalCoordinateString =
        function (s) {
          return rt(or(s))
        }),
    xn = i.strokeColor || '0 G'
  ;(p.__private__.getStrokeColor = p.getDrawColor =
    function () {
      return Ln(xn)
    }),
    (p.__private__.setStrokeColor = p.setDrawColor =
      function (s, v, C, D) {
        return (
          (xn = Nn({ ch1: s, ch2: v, ch3: C, ch4: D, pdfColorType: 'draw', precision: 2 })),
          O(xn),
          this
        )
      })
  var ki = i.fillColor || '0 g'
  ;(p.__private__.getFillColor = p.getFillColor =
    function () {
      return Ln(ki)
    }),
    (p.__private__.setFillColor = p.setFillColor =
      function (s, v, C, D) {
        return (
          (ki = Nn({ ch1: s, ch2: v, ch3: C, ch4: D, pdfColorType: 'fill', precision: 2 })),
          O(ki),
          this
        )
      })
  var Ir = i.textColor || '0 g',
    vo =
      (p.__private__.getTextColor =
      p.getTextColor =
        function () {
          return Ln(Ir)
        })
  p.__private__.setTextColor = p.setTextColor = function (s, v, C, D) {
    return (Ir = Nn({ ch1: s, ch2: v, ch3: C, ch4: D, pdfColorType: 'text', precision: 3 })), this
  }
  var Kr = i.charSpace,
    bo =
      (p.__private__.getCharSpace =
      p.getCharSpace =
        function () {
          return parseFloat(Kr || 0)
        })
  p.__private__.setCharSpace = p.setCharSpace = function (s) {
    if (isNaN(s)) throw new Error('Invalid argument passed to jsPDF.setCharSpace')
    return (Kr = s), this
  }
  var Ii = 0
  ;(p.CapJoinStyles = {
    0: 0,
    butt: 0,
    but: 0,
    miter: 0,
    1: 1,
    round: 1,
    rounded: 1,
    circle: 1,
    2: 2,
    projecting: 2,
    project: 2,
    square: 2,
    bevel: 2
  }),
    (p.__private__.setLineCap = p.setLineCap =
      function (s) {
        var v = p.CapJoinStyles[s]
        if (v === void 0)
          throw new Error(
            "Line cap style of '" +
              s +
              "' is not recognized. See or extend .CapJoinStyles property for valid styles"
          )
        return (Ii = v), O(v + ' J'), this
      })
  var Fi = 0
  ;(p.__private__.setLineJoin = p.setLineJoin =
    function (s) {
      var v = p.CapJoinStyles[s]
      if (v === void 0)
        throw new Error(
          "Line join style of '" +
            s +
            "' is not recognized. See or extend .CapJoinStyles property for valid styles"
        )
      return (Fi = v), O(v + ' j'), this
    }),
    (p.__private__.setLineMiterLimit =
      p.__private__.setMiterLimit =
      p.setLineMiterLimit =
      p.setMiterLimit =
        function (s) {
          if (((s = s || 0), isNaN(s)))
            throw new Error('Invalid argument passed to jsPDF.setLineMiterLimit')
          return O(rt(I(s)) + ' M'), this
        }),
    (p.GState = Ga),
    (p.setGState = function (s) {
      ;(s = typeof s == 'string' ? Ne[bn[s]] : pa(null, s)).equals(Yn) ||
        (O('/' + s.id + ' gs'), (Yn = s))
    })
  var pa = function (s, v) {
    if (!s || !bn[s]) {
      var C = !1
      for (var D in Ne)
        if (Ne.hasOwnProperty(D) && Ne[D].equals(v)) {
          C = !0
          break
        }
      if (C) v = Ne[D]
      else {
        var J = 'GS' + (Object.keys(Ne).length + 1).toString(10)
        ;(Ne[J] = v), (v.id = J)
      }
      return s && (bn[s] = v.id), ue.publish('addGState', v), v
    }
  }
  ;(p.addGState = function (s, v) {
    return pa(s, v), this
  }),
    (p.saveGraphicsState = function () {
      return O('q'), Mn.push({ key: ee, size: xt, color: Ir }), this
    }),
    (p.restoreGraphicsState = function () {
      O('Q')
      var s = Mn.pop()
      return (ee = s.key), (xt = s.size), (Ir = s.color), (Yn = null), this
    }),
    (p.setCurrentTransformationMatrix = function (s) {
      return O(s.toString() + ' cm'), this
    }),
    (p.comment = function (s) {
      return O('#' + s), this
    })
  var Zr = function (s, v) {
      var C = s || 0
      Object.defineProperty(this, 'x', {
        enumerable: !0,
        get: function () {
          return C
        },
        set: function (it) {
          isNaN(it) || (C = parseFloat(it))
        }
      })
      var D = v || 0
      Object.defineProperty(this, 'y', {
        enumerable: !0,
        get: function () {
          return D
        },
        set: function (it) {
          isNaN(it) || (D = parseFloat(it))
        }
      })
      var J = 'pt'
      return (
        Object.defineProperty(this, 'type', {
          enumerable: !0,
          get: function () {
            return J
          },
          set: function (it) {
            J = it.toString()
          }
        }),
        this
      )
    },
    Ci = function (s, v, C, D) {
      Zr.call(this, s, v), (this.type = 'rect')
      var J = C || 0
      Object.defineProperty(this, 'w', {
        enumerable: !0,
        get: function () {
          return J
        },
        set: function (yt) {
          isNaN(yt) || (J = parseFloat(yt))
        }
      })
      var it = D || 0
      return (
        Object.defineProperty(this, 'h', {
          enumerable: !0,
          get: function () {
            return it
          },
          set: function (yt) {
            isNaN(yt) || (it = parseFloat(yt))
          }
        }),
        this
      )
    },
    ji = function () {
      ;(this.page = Ae),
        (this.currentPage = j),
        (this.pages = Lt.slice(0)),
        (this.pagesContext = Yt.slice(0)),
        (this.x = We),
        (this.y = oe),
        (this.matrix = vn),
        (this.width = Fr(j)),
        (this.height = cr(j)),
        (this.outputDestination = jt),
        (this.id = ''),
        (this.objectNumber = -1)
    }
  ji.prototype.restore = function () {
    ;(Ae = this.page),
      (j = this.currentPage),
      (Yt = this.pagesContext),
      (Lt = this.pages),
      (We = this.x),
      (oe = this.y),
      (vn = this.matrix),
      Oi(j, this.width),
      Bi(j, this.height),
      (jt = this.outputDestination)
  }
  var ga = function (s, v, C, D, J) {
      qn.push(new ji()), (Ae = j = 0), (Lt = []), (We = s), (oe = v), (vn = J), Ai([C, D])
    },
    yo = function (s) {
      if (En[s]) qn.pop().restore()
      else {
        var v = new ji(),
          C = 'Xo' + (Object.keys(Ue).length + 1).toString(10)
        ;(v.id = C), (En[s] = C), (Ue[C] = v), ue.publish('addFormObject', v), qn.pop().restore()
      }
    }
  for (var $r in ((p.beginFormObject = function (s, v, C, D, J) {
    return ga(s, v, C, D, J), this
  }),
  (p.endFormObject = function (s) {
    return yo(s), this
  }),
  (p.doFormObject = function (s, v) {
    var C = Ue[En[s]]
    return O('q'), O(v.toString() + ' cm'), O('/' + C.id + ' Do'), O('Q'), this
  }),
  (p.getFormObject = function (s) {
    var v = Ue[En[s]]
    return { x: v.x, y: v.y, width: v.width, height: v.height, matrix: v.matrix }
  }),
  (p.save = function (s, v) {
    return (
      (s = s || 'generated.pdf'),
      ((v = v || {}).returnPromise = v.returnPromise || !1),
      v.returnPromise === !1
        ? (Br(Gr(Xn()), s),
          typeof Br.unload == 'function' && Ut.setTimeout && setTimeout(Br.unload, 911),
          this)
        : new Promise(function (C, D) {
            try {
              var J = Br(Gr(Xn()), s)
              typeof Br.unload == 'function' && Ut.setTimeout && setTimeout(Br.unload, 911), C(J)
            } catch (it) {
              D(it.message)
            }
          })
    )
  }),
  zt.API))
    zt.API.hasOwnProperty($r) &&
      ($r === 'events' && zt.API.events.length
        ? (function (s, v) {
            var C, D, J
            for (J = v.length - 1; J !== -1; J--)
              (C = v[J][0]),
                (D = v[J][1]),
                s.subscribe.apply(s, [C].concat(typeof D == 'function' ? [D] : D))
          })(ue, zt.API.events)
        : (p[$r] = zt.API[$r]))
  var Fr = (p.getPageWidth = function (s) {
      return (Yt[(s = s || j)].mediaBox.topRightX - Yt[s].mediaBox.bottomLeftX) / It
    }),
    Oi = (p.setPageWidth = function (s, v) {
      Yt[s].mediaBox.topRightX = v * It + Yt[s].mediaBox.bottomLeftX
    }),
    cr = (p.getPageHeight = function (s) {
      return (Yt[(s = s || j)].mediaBox.topRightY - Yt[s].mediaBox.bottomLeftY) / It
    }),
    Bi = (p.setPageHeight = function (s, v) {
      Yt[s].mediaBox.topRightY = v * It + Yt[s].mediaBox.bottomLeftY
    })
  return (
    (p.internal = {
      pdfEscape: Qe,
      getStyle: ca,
      getFont: go,
      getFontSize: Pt,
      getCharSpace: bo,
      getTextColor: vo,
      getLineHeight: ha,
      getLineHeightFactor: da,
      getLineWidth: Xr,
      write: Xt,
      getHorizontalCoordinate: Kn,
      getVerticalCoordinate: or,
      getCoordinateString: mo,
      getVerticalCoordinateString: sr,
      collections: {},
      newObject: Ee,
      newAdditionalObject: Dr,
      newObjectDeferred: je,
      newObjectDeferredBegin: on,
      getFilters: Rn,
      putStream: hn,
      events: ue,
      scaleFactor: It,
      pageSize: {
        getWidth: function () {
          return Fr(j)
        },
        setWidth: function (s) {
          Oi(j, s)
        },
        getHeight: function () {
          return cr(j)
        },
        setHeight: function (s) {
          Bi(j, s)
        }
      },
      encryptionOptions: A,
      encryption: Ve,
      getEncryptor: co,
      output: Yr,
      getNumberOfPages: ro,
      pages: Lt,
      out: O,
      f2: bt,
      f3: k,
      getPageInfo: sa,
      getPageInfoByObjId: Vt,
      getCurrentPageInfo: uo,
      getPDFVersion: F,
      Point: Zr,
      Rectangle: Ci,
      Matrix: Tt,
      hasHotfix: oa
    }),
    Object.defineProperty(p.internal.pageSize, 'width', {
      get: function () {
        return Fr(j)
      },
      set: function (s) {
        Oi(j, s)
      },
      enumerable: !0,
      configurable: !0
    }),
    Object.defineProperty(p.internal.pageSize, 'height', {
      get: function () {
        return cr(j)
      },
      set: function (s) {
        Bi(j, s)
      },
      enumerable: !0,
      configurable: !0
    }),
    eo.call(p, wt),
    (ee = 'F1'),
    ra(u, n),
    ue.publish('initialized'),
    p
  )
}
;(pi.prototype.lsbFirstWord = function (i) {
  return String.fromCharCode((i >> 0) & 255, (i >> 8) & 255, (i >> 16) & 255, (i >> 24) & 255)
}),
  (pi.prototype.toHexString = function (i) {
    return i
      .split('')
      .map(function (e) {
        return ('0' + (255 & e.charCodeAt(0)).toString(16)).slice(-2)
      })
      .join('')
  }),
  (pi.prototype.hexToBytes = function (i) {
    for (var e = [], n = 0; n < i.length; n += 2)
      e.push(String.fromCharCode(parseInt(i.substr(n, 2), 16)))
    return e.join('')
  }),
  (pi.prototype.processOwnerPassword = function (i, e) {
    return Ko(Xo(e).substr(0, 5), i)
  }),
  (pi.prototype.encryptor = function (i, e) {
    var n = Xo(
      this.encryptionKey +
        String.fromCharCode(255 & i, (i >> 8) & 255, (i >> 16) & 255, 255 & e, (e >> 8) & 255)
    ).substr(0, 10)
    return function (a) {
      return Ko(n, a)
    }
  }),
  (Ga.prototype.equals = function (i) {
    var e,
      n = 'id,objectNumber,equals'
    if (!i || ve(i) !== ve(this)) return !1
    var a = 0
    for (e in this)
      if (!(n.indexOf(e) >= 0)) {
        if ((this.hasOwnProperty(e) && !i.hasOwnProperty(e)) || this[e] !== i[e]) return !1
        a++
      }
    for (e in i) i.hasOwnProperty(e) && n.indexOf(e) < 0 && a--
    return a === 0
  }),
  (zt.API = { events: [] }),
  (zt.version = '2.5.1')
var _e = zt.API,
  ts = 1,
  qr = function (i) {
    return i.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
  },
  fi = function (i) {
    return i.replace(/\\\\/g, '\\').replace(/\\\(/g, '(').replace(/\\\)/g, ')')
  },
  Jt = function (i) {
    return i.toFixed(2)
  },
  Lr = function (i) {
    return i.toFixed(5)
  }
_e.__acroform__ = {}
var an = function (i, e) {
    ;(i.prototype = Object.create(e.prototype)), (i.prototype.constructor = i)
  },
  Ts = function (i) {
    return i * ts
  },
  Wn = function (i) {
    var e = new rc(),
      n = Bt.internal.getHeight(i) || 0,
      a = Bt.internal.getWidth(i) || 0
    return (e.BBox = [0, 0, Number(Jt(a)), Number(Jt(n))]), e
  },
  eu = (_e.__acroform__.setBit = function (i, e) {
    if (((i = i || 0), (e = e || 0), isNaN(i) || isNaN(e)))
      throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.setBit')
    return (i |= 1 << e)
  }),
  nu = (_e.__acroform__.clearBit = function (i, e) {
    if (((i = i || 0), (e = e || 0), isNaN(i) || isNaN(e)))
      throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.clearBit')
    return (i &= ~(1 << e))
  }),
  ru = (_e.__acroform__.getBit = function (i, e) {
    if (isNaN(i) || isNaN(e))
      throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.getBit')
    return (i & (1 << e)) == 0 ? 0 : 1
  }),
  Ie = (_e.__acroform__.getBitForPdf = function (i, e) {
    if (isNaN(i) || isNaN(e))
      throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf')
    return ru(i, e - 1)
  }),
  Fe = (_e.__acroform__.setBitForPdf = function (i, e) {
    if (isNaN(i) || isNaN(e))
      throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf')
    return eu(i, e - 1)
  }),
  Ce = (_e.__acroform__.clearBitForPdf = function (i, e) {
    if (isNaN(i) || isNaN(e))
      throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf')
    return nu(i, e - 1)
  }),
  iu = (_e.__acroform__.calculateCoordinates = function (i, e) {
    var n = e.internal.getHorizontalCoordinate,
      a = e.internal.getVerticalCoordinate,
      u = i[0],
      o = i[1],
      l = i[2],
      h = i[3],
      f = {}
    return (
      (f.lowerLeft_X = n(u) || 0),
      (f.lowerLeft_Y = a(o + h) || 0),
      (f.upperRight_X = n(u + l) || 0),
      (f.upperRight_Y = a(o) || 0),
      [
        Number(Jt(f.lowerLeft_X)),
        Number(Jt(f.lowerLeft_Y)),
        Number(Jt(f.upperRight_X)),
        Number(Jt(f.upperRight_Y))
      ]
    )
  }),
  au = function (i) {
    if (i.appearanceStreamContent) return i.appearanceStreamContent
    if (i.V || i.DV) {
      var e = [],
        n = i._V || i.DV,
        a = Zo(i, n),
        u = i.scope.internal.getFont(i.fontName, i.fontStyle).id
      e.push('/Tx BMC'),
        e.push('q'),
        e.push('BT'),
        e.push(i.scope.__private__.encodeColorString(i.color)),
        e.push('/' + u + ' ' + Jt(a.fontSize) + ' Tf'),
        e.push('1 0 0 1 0 0 Tm'),
        e.push(a.text),
        e.push('ET'),
        e.push('Q'),
        e.push('EMC')
      var o = Wn(i)
      return (
        (o.scope = i.scope),
        (o.stream = e.join(`
`)),
        o
      )
    }
  },
  Zo = function (i, e) {
    var n = i.fontSize === 0 ? i.maxFontSize : i.fontSize,
      a = { text: '', fontSize: '' },
      u = (e =
        (e = e.substr(0, 1) == '(' ? e.substr(1) : e).substr(e.length - 1) == ')'
          ? e.substr(0, e.length - 1)
          : e).split(' ')
    u = i.multiline
      ? u.map(function (k) {
          return k.split(`
`)
        })
      : u.map(function (k) {
          return [k]
        })
    var o = n,
      l = Bt.internal.getHeight(i) || 0
    l = l < 0 ? -l : l
    var h = Bt.internal.getWidth(i) || 0
    h = h < 0 ? -h : h
    var f = function (k, I, H) {
      if (k + 1 < u.length) {
        var R = I + ' ' + u[k + 1][0]
        return Ra(R, i, H).width <= h - 4
      }
      return !1
    }
    o++
    t: for (; o > 0; ) {
      ;(e = ''), o--
      var g,
        A,
        N = Ra('3', i, o).height,
        _ = i.multiline ? l - o : (l - N) / 2,
        p = (_ += 2),
        B = 0,
        F = 0,
        q = 0
      if (o <= 0) {
        ;(e = `(...) Tj
`),
          (e +=
            '% Width of Text: ' +
            Ra(e, i, (o = 12)).width +
            ', FieldWidth:' +
            h +
            `
`)
        break
      }
      for (var S = '', M = 0, Z = 0; Z < u.length; Z++)
        if (u.hasOwnProperty(Z)) {
          var st = !1
          if (u[Z].length !== 1 && q !== u[Z].length - 1) {
            if ((N + 2) * (M + 2) + 2 > l) continue t
            ;(S += u[Z][q]), (st = !0), (F = Z), Z--
          } else {
            S = (S += u[Z][q] + ' ').substr(S.length - 1) == ' ' ? S.substr(0, S.length - 1) : S
            var dt = parseInt(Z),
              Nt = f(dt, S, o),
              rt = Z >= u.length - 1
            if (Nt && !rt) {
              ;(S += ' '), (q = 0)
              continue
            }
            if (Nt || rt) {
              if (rt) F = dt
              else if (i.multiline && (N + 2) * (M + 2) + 2 > l) continue t
            } else {
              if (!i.multiline || (N + 2) * (M + 2) + 2 > l) continue t
              F = dt
            }
          }
          for (var G = '', vt = B; vt <= F; vt++) {
            var bt = u[vt]
            if (i.multiline) {
              if (vt === F) {
                ;(G += bt[q] + ' '), (q = (q + 1) % bt.length)
                continue
              }
              if (vt === B) {
                G += bt[bt.length - 1] + ' '
                continue
              }
            }
            G += bt[0] + ' '
          }
          switch (
            ((G = G.substr(G.length - 1) == ' ' ? G.substr(0, G.length - 1) : G),
            (A = Ra(G, i, o).width),
            i.textAlign)
          ) {
            case 'right':
              g = h - A - 2
              break
            case 'center':
              g = (h - A) / 2
              break
            case 'left':
            default:
              g = 2
          }
          ;(e +=
            Jt(g) +
            ' ' +
            Jt(p) +
            ` Td
`),
            (e +=
              '(' +
              qr(G) +
              `) Tj
`),
            (e +=
              -Jt(g) +
              ` 0 Td
`),
            (p = -(o + 2)),
            (A = 0),
            (B = st ? F : F + 1),
            M++,
            (S = '')
        }
      break
    }
    return (a.text = e), (a.fontSize = o), a
  },
  Ra = function (i, e, n) {
    var a = e.scope.internal.getFont(e.fontName, e.fontStyle),
      u =
        e.scope.getStringUnitWidth(i, { font: a, fontSize: parseFloat(n), charSpace: 0 }) *
        parseFloat(n)
    return {
      height:
        e.scope.getStringUnitWidth('3', { font: a, fontSize: parseFloat(n), charSpace: 0 }) *
        parseFloat(n) *
        1.5,
      width: u
    }
  },
  ou = {
    fields: [],
    xForms: [],
    acroFormDictionaryRoot: null,
    printedOut: !1,
    internal: null,
    isInitialized: !1
  },
  su = function (i, e) {
    var n = { type: 'reference', object: i }
    e.internal.getPageInfo(i.page).pageContext.annotations.find(function (a) {
      return a.type === n.type && a.object === n.object
    }) === void 0 && e.internal.getPageInfo(i.page).pageContext.annotations.push(n)
  },
  cu = function (i, e) {
    for (var n in i)
      if (i.hasOwnProperty(n)) {
        var a = n,
          u = i[n]
        e.internal.newObjectDeferredBegin(u.objId, !0),
          ve(u) === 'object' && typeof u.putStream == 'function' && u.putStream(),
          delete i[a]
      }
  },
  uu = function (i, e) {
    if (
      ((e.scope = i),
      i.internal !== void 0 &&
        (i.internal.acroformPlugin === void 0 || i.internal.acroformPlugin.isInitialized === !1))
    ) {
      if (
        ((On.FieldNum = 0),
        (i.internal.acroformPlugin = JSON.parse(JSON.stringify(ou))),
        i.internal.acroformPlugin.acroFormDictionaryRoot)
      )
        throw new Error('Exception while creating AcroformDictionary')
      ;(ts = i.internal.scaleFactor),
        (i.internal.acroformPlugin.acroFormDictionaryRoot = new ic()),
        (i.internal.acroformPlugin.acroFormDictionaryRoot.scope = i),
        (i.internal.acroformPlugin.acroFormDictionaryRoot._eventID = i.internal.events.subscribe(
          'postPutResources',
          function () {
            ;(function (n) {
              n.internal.events.unsubscribe(
                n.internal.acroformPlugin.acroFormDictionaryRoot._eventID
              ),
                delete n.internal.acroformPlugin.acroFormDictionaryRoot._eventID,
                (n.internal.acroformPlugin.printedOut = !0)
            })(i)
          }
        )),
        i.internal.events.subscribe('buildDocument', function () {
          ;(function (n) {
            n.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0
            var a = n.internal.acroformPlugin.acroFormDictionaryRoot.Fields
            for (var u in a)
              if (a.hasOwnProperty(u)) {
                var o = a[u]
                ;(o.objId = void 0), o.hasAnnotation && su(o, n)
              }
          })(i)
        }),
        i.internal.events.subscribe('putCatalog', function () {
          ;(function (n) {
            if (n.internal.acroformPlugin.acroFormDictionaryRoot === void 0)
              throw new Error('putCatalogCallback: Root missing.')
            n.internal.write(
              '/AcroForm ' + n.internal.acroformPlugin.acroFormDictionaryRoot.objId + ' 0 R'
            )
          })(i)
        }),
        i.internal.events.subscribe('postPutPages', function (n) {
          ;(function (a, u) {
            var o = !a
            for (var l in (a ||
              (u.internal.newObjectDeferredBegin(
                u.internal.acroformPlugin.acroFormDictionaryRoot.objId,
                !0
              ),
              u.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),
            (a = a || u.internal.acroformPlugin.acroFormDictionaryRoot.Kids)))
              if (a.hasOwnProperty(l)) {
                var h = a[l],
                  f = [],
                  g = h.Rect
                if (
                  (h.Rect && (h.Rect = iu(h.Rect, u)),
                  u.internal.newObjectDeferredBegin(h.objId, !0),
                  (h.DA = Bt.createDefaultAppearanceStream(h)),
                  ve(h) === 'object' &&
                    typeof h.getKeyValueListForStream == 'function' &&
                    (f = h.getKeyValueListForStream()),
                  (h.Rect = g),
                  h.hasAppearanceStream && !h.appearanceStreamContent)
                ) {
                  var A = au(h)
                  f.push({ key: 'AP', value: '<</N ' + A + '>>' }),
                    u.internal.acroformPlugin.xForms.push(A)
                }
                if (h.appearanceStreamContent) {
                  var N = ''
                  for (var _ in h.appearanceStreamContent)
                    if (h.appearanceStreamContent.hasOwnProperty(_)) {
                      var p = h.appearanceStreamContent[_]
                      if (
                        ((N += '/' + _ + ' '),
                        (N += '<<'),
                        Object.keys(p).length >= 1 || Array.isArray(p))
                      ) {
                        for (var l in p)
                          if (p.hasOwnProperty(l)) {
                            var B = p[l]
                            typeof B == 'function' && (B = B.call(u, h)),
                              (N += '/' + l + ' ' + B + ' '),
                              u.internal.acroformPlugin.xForms.indexOf(B) >= 0 ||
                                u.internal.acroformPlugin.xForms.push(B)
                          }
                      } else
                        typeof (B = p) == 'function' && (B = B.call(u, h)),
                          (N += '/' + l + ' ' + B),
                          u.internal.acroformPlugin.xForms.indexOf(B) >= 0 ||
                            u.internal.acroformPlugin.xForms.push(B)
                      N += '>>'
                    }
                  f.push({
                    key: 'AP',
                    value:
                      `<<
` +
                      N +
                      '>>'
                  })
                }
                u.internal.putStream({ additionalKeyValues: f, objectId: h.objId }),
                  u.internal.out('endobj')
              }
            o && cu(u.internal.acroformPlugin.xForms, u)
          })(n, i)
        }),
        (i.internal.acroformPlugin.isInitialized = !0)
    }
  },
  nc = (_e.__acroform__.arrayToPdfArray = function (i, e, n) {
    var a = function (l) {
      return l
    }
    if (Array.isArray(i)) {
      for (var u = '[', o = 0; o < i.length; o++)
        switch ((o !== 0 && (u += ' '), ve(i[o]))) {
          case 'boolean':
          case 'number':
          case 'object':
            u += i[o].toString()
            break
          case 'string':
            i[o].substr(0, 1) !== '/'
              ? (e !== void 0 && n && (a = n.internal.getEncryptor(e)),
                (u += '(' + qr(a(i[o].toString())) + ')'))
              : (u += i[o].toString())
        }
      return (u += ']')
    }
    throw new Error('Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray')
  }),
  Ho = function (i, e, n) {
    var a = function (u) {
      return u
    }
    return (
      e !== void 0 && n && (a = n.internal.getEncryptor(e)),
      (i = i || '').toString(),
      (i = '(' + qr(a(i)) + ')')
    )
  },
  Vn = function () {
    ;(this._objId = void 0),
      (this._scope = void 0),
      Object.defineProperty(this, 'objId', {
        get: function () {
          if (this._objId === void 0) {
            if (this.scope === void 0) return
            this._objId = this.scope.internal.newObjectDeferred()
          }
          return this._objId
        },
        set: function (i) {
          this._objId = i
        }
      }),
      Object.defineProperty(this, 'scope', { value: this._scope, writable: !0 })
  }
;(Vn.prototype.toString = function () {
  return this.objId + ' 0 R'
}),
  (Vn.prototype.putStream = function () {
    var i = this.getKeyValueListForStream()
    this.scope.internal.putStream({
      data: this.stream,
      additionalKeyValues: i,
      objectId: this.objId
    }),
      this.scope.internal.out('endobj')
  }),
  (Vn.prototype.getKeyValueListForStream = function () {
    var i = [],
      e = Object.getOwnPropertyNames(this).filter(function (o) {
        return (
          o != 'content' &&
          o != 'appearanceStreamContent' &&
          o != 'scope' &&
          o != 'objId' &&
          o.substring(0, 1) != '_'
        )
      })
    for (var n in e)
      if (Object.getOwnPropertyDescriptor(this, e[n]).configurable === !1) {
        var a = e[n],
          u = this[a]
        u &&
          (Array.isArray(u)
            ? i.push({ key: a, value: nc(u, this.objId, this.scope) })
            : u instanceof Vn
            ? ((u.scope = this.scope), i.push({ key: a, value: u.objId + ' 0 R' }))
            : typeof u != 'function' && i.push({ key: a, value: u }))
      }
    return i
  })
var rc = function () {
  Vn.call(this),
    Object.defineProperty(this, 'Type', { value: '/XObject', configurable: !1, writable: !0 }),
    Object.defineProperty(this, 'Subtype', { value: '/Form', configurable: !1, writable: !0 }),
    Object.defineProperty(this, 'FormType', { value: 1, configurable: !1, writable: !0 })
  var i,
    e = []
  Object.defineProperty(this, 'BBox', {
    configurable: !1,
    get: function () {
      return e
    },
    set: function (n) {
      e = n
    }
  }),
    Object.defineProperty(this, 'Resources', { value: '2 0 R', configurable: !1, writable: !0 }),
    Object.defineProperty(this, 'stream', {
      enumerable: !1,
      configurable: !0,
      set: function (n) {
        i = n.trim()
      },
      get: function () {
        return i || null
      }
    })
}
an(rc, Vn)
var ic = function () {
  Vn.call(this)
  var i,
    e = []
  Object.defineProperty(this, 'Kids', {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return e.length > 0 ? e : void 0
    }
  }),
    Object.defineProperty(this, 'Fields', {
      enumerable: !1,
      configurable: !1,
      get: function () {
        return e
      }
    }),
    Object.defineProperty(this, 'DA', {
      enumerable: !1,
      configurable: !1,
      get: function () {
        if (i) {
          var n = function (a) {
            return a
          }
          return (
            this.scope && (n = this.scope.internal.getEncryptor(this.objId)), '(' + qr(n(i)) + ')'
          )
        }
      },
      set: function (n) {
        i = n
      }
    })
}
an(ic, Vn)
var On = function i() {
  Vn.call(this)
  var e = 4
  Object.defineProperty(this, 'F', {
    enumerable: !1,
    configurable: !1,
    get: function () {
      return e
    },
    set: function (S) {
      if (isNaN(S)) throw new Error('Invalid value "' + S + '" for attribute F supplied.')
      e = S
    }
  }),
    Object.defineProperty(this, 'showWhenPrinted', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(e, 3))
      },
      set: function (S) {
        Boolean(S) === !0 ? (this.F = Fe(e, 3)) : (this.F = Ce(e, 3))
      }
    })
  var n = 0
  Object.defineProperty(this, 'Ff', {
    enumerable: !1,
    configurable: !1,
    get: function () {
      return n
    },
    set: function (S) {
      if (isNaN(S)) throw new Error('Invalid value "' + S + '" for attribute Ff supplied.')
      n = S
    }
  })
  var a = []
  Object.defineProperty(this, 'Rect', {
    enumerable: !1,
    configurable: !1,
    get: function () {
      if (a.length !== 0) return a
    },
    set: function (S) {
      a = S !== void 0 ? S : []
    }
  }),
    Object.defineProperty(this, 'x', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !a || isNaN(a[0]) ? 0 : a[0]
      },
      set: function (S) {
        a[0] = S
      }
    }),
    Object.defineProperty(this, 'y', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !a || isNaN(a[1]) ? 0 : a[1]
      },
      set: function (S) {
        a[1] = S
      }
    }),
    Object.defineProperty(this, 'width', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !a || isNaN(a[2]) ? 0 : a[2]
      },
      set: function (S) {
        a[2] = S
      }
    }),
    Object.defineProperty(this, 'height', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !a || isNaN(a[3]) ? 0 : a[3]
      },
      set: function (S) {
        a[3] = S
      }
    })
  var u = ''
  Object.defineProperty(this, 'FT', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return u
    },
    set: function (S) {
      switch (S) {
        case '/Btn':
        case '/Tx':
        case '/Ch':
        case '/Sig':
          u = S
          break
        default:
          throw new Error('Invalid value "' + S + '" for attribute FT supplied.')
      }
    }
  })
  var o = null
  Object.defineProperty(this, 'T', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      if (!o || o.length < 1) {
        if (this instanceof Ya) return
        o = 'FieldObject' + i.FieldNum++
      }
      var S = function (M) {
        return M
      }
      return this.scope && (S = this.scope.internal.getEncryptor(this.objId)), '(' + qr(S(o)) + ')'
    },
    set: function (S) {
      o = S.toString()
    }
  }),
    Object.defineProperty(this, 'fieldName', {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return o
      },
      set: function (S) {
        o = S
      }
    })
  var l = 'helvetica'
  Object.defineProperty(this, 'fontName', {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return l
    },
    set: function (S) {
      l = S
    }
  })
  var h = 'normal'
  Object.defineProperty(this, 'fontStyle', {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return h
    },
    set: function (S) {
      h = S
    }
  })
  var f = 0
  Object.defineProperty(this, 'fontSize', {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return f
    },
    set: function (S) {
      f = S
    }
  })
  var g = void 0
  Object.defineProperty(this, 'maxFontSize', {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return g === void 0 ? 50 / ts : g
    },
    set: function (S) {
      g = S
    }
  })
  var A = 'black'
  Object.defineProperty(this, 'color', {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return A
    },
    set: function (S) {
      A = S
    }
  })
  var N = '/F1 0 Tf 0 g'
  Object.defineProperty(this, 'DA', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      if (!(!N || this instanceof Ya || this instanceof Er)) return Ho(N, this.objId, this.scope)
    },
    set: function (S) {
      ;(S = S.toString()), (N = S)
    }
  })
  var _ = null
  Object.defineProperty(this, 'DV', {
    enumerable: !1,
    configurable: !1,
    get: function () {
      if (_) return this instanceof ze ? _ : Ho(_, this.objId, this.scope)
    },
    set: function (S) {
      ;(S = S.toString()),
        (_ =
          this instanceof ze ? S : S.substr(0, 1) === '(' ? fi(S.substr(1, S.length - 2)) : fi(S))
    }
  }),
    Object.defineProperty(this, 'defaultValue', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return this instanceof ze ? fi(_.substr(1, _.length - 1)) : _
      },
      set: function (S) {
        ;(S = S.toString()), (_ = this instanceof ze ? '/' + S : S)
      }
    })
  var p = null
  Object.defineProperty(this, '_V', {
    enumerable: !1,
    configurable: !1,
    get: function () {
      if (p) return p
    },
    set: function (S) {
      this.V = S
    }
  }),
    Object.defineProperty(this, 'V', {
      enumerable: !1,
      configurable: !1,
      get: function () {
        if (p) return this instanceof ze ? p : Ho(p, this.objId, this.scope)
      },
      set: function (S) {
        ;(S = S.toString()),
          (p =
            this instanceof ze ? S : S.substr(0, 1) === '(' ? fi(S.substr(1, S.length - 2)) : fi(S))
      }
    }),
    Object.defineProperty(this, 'value', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return this instanceof ze ? fi(p.substr(1, p.length - 1)) : p
      },
      set: function (S) {
        ;(S = S.toString()), (p = this instanceof ze ? '/' + S : S)
      }
    }),
    Object.defineProperty(this, 'hasAnnotation', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return this.Rect
      }
    }),
    Object.defineProperty(this, 'Type', {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return this.hasAnnotation ? '/Annot' : null
      }
    }),
    Object.defineProperty(this, 'Subtype', {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return this.hasAnnotation ? '/Widget' : null
      }
    })
  var B,
    F = !1
  Object.defineProperty(this, 'hasAppearanceStream', {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return F
    },
    set: function (S) {
      ;(S = Boolean(S)), (F = S)
    }
  }),
    Object.defineProperty(this, 'page', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        if (B) return B
      },
      set: function (S) {
        B = S
      }
    }),
    Object.defineProperty(this, 'readOnly', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 1))
      },
      set: function (S) {
        Boolean(S) === !0 ? (this.Ff = Fe(this.Ff, 1)) : (this.Ff = Ce(this.Ff, 1))
      }
    }),
    Object.defineProperty(this, 'required', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 2))
      },
      set: function (S) {
        Boolean(S) === !0 ? (this.Ff = Fe(this.Ff, 2)) : (this.Ff = Ce(this.Ff, 2))
      }
    }),
    Object.defineProperty(this, 'noExport', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 3))
      },
      set: function (S) {
        Boolean(S) === !0 ? (this.Ff = Fe(this.Ff, 3)) : (this.Ff = Ce(this.Ff, 3))
      }
    })
  var q = null
  Object.defineProperty(this, 'Q', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      if (q !== null) return q
    },
    set: function (S) {
      if ([0, 1, 2].indexOf(S) === -1)
        throw new Error('Invalid value "' + S + '" for attribute Q supplied.')
      q = S
    }
  }),
    Object.defineProperty(this, 'textAlign', {
      get: function () {
        var S
        switch (q) {
          case 0:
          default:
            S = 'left'
            break
          case 1:
            S = 'center'
            break
          case 2:
            S = 'right'
        }
        return S
      },
      configurable: !0,
      enumerable: !0,
      set: function (S) {
        switch (S) {
          case 'right':
          case 2:
            q = 2
            break
          case 'center':
          case 1:
            q = 1
            break
          case 'left':
          case 0:
          default:
            q = 0
        }
      }
    })
}
an(On, Vn)
var vi = function () {
  On.call(this), (this.FT = '/Ch'), (this.V = '()'), (this.fontName = 'zapfdingbats')
  var i = 0
  Object.defineProperty(this, 'TI', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return i
    },
    set: function (n) {
      i = n
    }
  }),
    Object.defineProperty(this, 'topIndex', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return i
      },
      set: function (n) {
        i = n
      }
    })
  var e = []
  Object.defineProperty(this, 'Opt', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return nc(e, this.objId, this.scope)
    },
    set: function (n) {
      var a, u
      ;(u = []),
        typeof (a = n) == 'string' &&
          (u = (function (o, l, h) {
            h || (h = 1)
            for (var f, g = []; (f = l.exec(o)); ) g.push(f[h])
            return g
          })(a, /\((.*?)\)/g)),
        (e = u)
    }
  }),
    (this.getOptions = function () {
      return e
    }),
    (this.setOptions = function (n) {
      ;(e = n), this.sort && e.sort()
    }),
    (this.addOption = function (n) {
      ;(n = (n = n || '').toString()), e.push(n), this.sort && e.sort()
    }),
    (this.removeOption = function (n, a) {
      for (
        a = a || !1, n = (n = n || '').toString();
        e.indexOf(n) !== -1 && (e.splice(e.indexOf(n), 1), a !== !1);

      );
    }),
    Object.defineProperty(this, 'combo', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 18))
      },
      set: function (n) {
        Boolean(n) === !0 ? (this.Ff = Fe(this.Ff, 18)) : (this.Ff = Ce(this.Ff, 18))
      }
    }),
    Object.defineProperty(this, 'edit', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 19))
      },
      set: function (n) {
        this.combo === !0 &&
          (Boolean(n) === !0 ? (this.Ff = Fe(this.Ff, 19)) : (this.Ff = Ce(this.Ff, 19)))
      }
    }),
    Object.defineProperty(this, 'sort', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 20))
      },
      set: function (n) {
        Boolean(n) === !0 ? ((this.Ff = Fe(this.Ff, 20)), e.sort()) : (this.Ff = Ce(this.Ff, 20))
      }
    }),
    Object.defineProperty(this, 'multiSelect', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 22))
      },
      set: function (n) {
        Boolean(n) === !0 ? (this.Ff = Fe(this.Ff, 22)) : (this.Ff = Ce(this.Ff, 22))
      }
    }),
    Object.defineProperty(this, 'doNotSpellCheck', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 23))
      },
      set: function (n) {
        Boolean(n) === !0 ? (this.Ff = Fe(this.Ff, 23)) : (this.Ff = Ce(this.Ff, 23))
      }
    }),
    Object.defineProperty(this, 'commitOnSelChange', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 27))
      },
      set: function (n) {
        Boolean(n) === !0 ? (this.Ff = Fe(this.Ff, 27)) : (this.Ff = Ce(this.Ff, 27))
      }
    }),
    (this.hasAppearanceStream = !1)
}
an(vi, On)
var bi = function () {
  vi.call(this), (this.fontName = 'helvetica'), (this.combo = !1)
}
an(bi, vi)
var yi = function () {
  bi.call(this), (this.combo = !0)
}
an(yi, bi)
var Ua = function () {
  yi.call(this), (this.edit = !0)
}
an(Ua, yi)
var ze = function () {
  On.call(this),
    (this.FT = '/Btn'),
    Object.defineProperty(this, 'noToggleToOff', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 15))
      },
      set: function (n) {
        Boolean(n) === !0 ? (this.Ff = Fe(this.Ff, 15)) : (this.Ff = Ce(this.Ff, 15))
      }
    }),
    Object.defineProperty(this, 'radio', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 16))
      },
      set: function (n) {
        Boolean(n) === !0 ? (this.Ff = Fe(this.Ff, 16)) : (this.Ff = Ce(this.Ff, 16))
      }
    }),
    Object.defineProperty(this, 'pushButton', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 17))
      },
      set: function (n) {
        Boolean(n) === !0 ? (this.Ff = Fe(this.Ff, 17)) : (this.Ff = Ce(this.Ff, 17))
      }
    }),
    Object.defineProperty(this, 'radioIsUnison', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 26))
      },
      set: function (n) {
        Boolean(n) === !0 ? (this.Ff = Fe(this.Ff, 26)) : (this.Ff = Ce(this.Ff, 26))
      }
    })
  var i,
    e = {}
  Object.defineProperty(this, 'MK', {
    enumerable: !1,
    configurable: !1,
    get: function () {
      var n = function (o) {
        return o
      }
      if (
        (this.scope && (n = this.scope.internal.getEncryptor(this.objId)),
        Object.keys(e).length !== 0)
      ) {
        var a,
          u = []
        for (a in (u.push('<<'), e)) u.push('/' + a + ' (' + qr(n(e[a])) + ')')
        return (
          u.push('>>'),
          u.join(`
`)
        )
      }
    },
    set: function (n) {
      ve(n) === 'object' && (e = n)
    }
  }),
    Object.defineProperty(this, 'caption', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return e.CA || ''
      },
      set: function (n) {
        typeof n == 'string' && (e.CA = n)
      }
    }),
    Object.defineProperty(this, 'AS', {
      enumerable: !1,
      configurable: !1,
      get: function () {
        return i
      },
      set: function (n) {
        i = n
      }
    }),
    Object.defineProperty(this, 'appearanceState', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return i.substr(1, i.length - 1)
      },
      set: function (n) {
        i = '/' + n
      }
    })
}
an(ze, On)
var Ha = function () {
  ze.call(this), (this.pushButton = !0)
}
an(Ha, ze)
var wi = function () {
  ze.call(this), (this.radio = !0), (this.pushButton = !1)
  var i = []
  Object.defineProperty(this, 'Kids', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return i
    },
    set: function (e) {
      i = e !== void 0 ? e : []
    }
  })
}
an(wi, ze)
var Ya = function () {
  var i, e
  On.call(this),
    Object.defineProperty(this, 'Parent', {
      enumerable: !1,
      configurable: !1,
      get: function () {
        return i
      },
      set: function (u) {
        i = u
      }
    }),
    Object.defineProperty(this, 'optionName', {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return e
      },
      set: function (u) {
        e = u
      }
    })
  var n,
    a = {}
  Object.defineProperty(this, 'MK', {
    enumerable: !1,
    configurable: !1,
    get: function () {
      var u = function (h) {
        return h
      }
      this.scope && (u = this.scope.internal.getEncryptor(this.objId))
      var o,
        l = []
      for (o in (l.push('<<'), a)) l.push('/' + o + ' (' + qr(u(a[o])) + ')')
      return (
        l.push('>>'),
        l.join(`
`)
      )
    },
    set: function (u) {
      ve(u) === 'object' && (a = u)
    }
  }),
    Object.defineProperty(this, 'caption', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return a.CA || ''
      },
      set: function (u) {
        typeof u == 'string' && (a.CA = u)
      }
    }),
    Object.defineProperty(this, 'AS', {
      enumerable: !1,
      configurable: !1,
      get: function () {
        return n
      },
      set: function (u) {
        n = u
      }
    }),
    Object.defineProperty(this, 'appearanceState', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return n.substr(1, n.length - 1)
      },
      set: function (u) {
        n = '/' + u
      }
    }),
    (this.caption = 'l'),
    (this.appearanceState = 'Off'),
    (this._AppearanceType = Bt.RadioButton.Circle),
    (this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName))
}
an(Ya, On),
  (wi.prototype.setAppearance = function (i) {
    if (!('createAppearanceStream' in i) || !('getCA' in i))
      throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!")
    for (var e in this.Kids)
      if (this.Kids.hasOwnProperty(e)) {
        var n = this.Kids[e]
        ;(n.appearanceStreamContent = i.createAppearanceStream(n.optionName)),
          (n.caption = i.getCA())
      }
  }),
  (wi.prototype.createOption = function (i) {
    var e = new Ya()
    return (e.Parent = this), (e.optionName = i), this.Kids.push(e), lu.call(this.scope, e), e
  })
var Wa = function () {
  ze.call(this),
    (this.fontName = 'zapfdingbats'),
    (this.caption = '3'),
    (this.appearanceState = 'On'),
    (this.value = 'On'),
    (this.textAlign = 'center'),
    (this.appearanceStreamContent = Bt.CheckBox.createAppearanceStream())
}
an(Wa, ze)
var Er = function () {
  On.call(this),
    (this.FT = '/Tx'),
    Object.defineProperty(this, 'multiline', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 13))
      },
      set: function (e) {
        Boolean(e) === !0 ? (this.Ff = Fe(this.Ff, 13)) : (this.Ff = Ce(this.Ff, 13))
      }
    }),
    Object.defineProperty(this, 'fileSelect', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 21))
      },
      set: function (e) {
        Boolean(e) === !0 ? (this.Ff = Fe(this.Ff, 21)) : (this.Ff = Ce(this.Ff, 21))
      }
    }),
    Object.defineProperty(this, 'doNotSpellCheck', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 23))
      },
      set: function (e) {
        Boolean(e) === !0 ? (this.Ff = Fe(this.Ff, 23)) : (this.Ff = Ce(this.Ff, 23))
      }
    }),
    Object.defineProperty(this, 'doNotScroll', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 24))
      },
      set: function (e) {
        Boolean(e) === !0 ? (this.Ff = Fe(this.Ff, 24)) : (this.Ff = Ce(this.Ff, 24))
      }
    }),
    Object.defineProperty(this, 'comb', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 25))
      },
      set: function (e) {
        Boolean(e) === !0 ? (this.Ff = Fe(this.Ff, 25)) : (this.Ff = Ce(this.Ff, 25))
      }
    }),
    Object.defineProperty(this, 'richText', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 26))
      },
      set: function (e) {
        Boolean(e) === !0 ? (this.Ff = Fe(this.Ff, 26)) : (this.Ff = Ce(this.Ff, 26))
      }
    })
  var i = null
  Object.defineProperty(this, 'MaxLen', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return i
    },
    set: function (e) {
      i = e
    }
  }),
    Object.defineProperty(this, 'maxLength', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return i
      },
      set: function (e) {
        Number.isInteger(e) && (i = e)
      }
    }),
    Object.defineProperty(this, 'hasAppearanceStream', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return this.V || this.DV
      }
    })
}
an(Er, On)
var Va = function () {
  Er.call(this),
    Object.defineProperty(this, 'password', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return Boolean(Ie(this.Ff, 14))
      },
      set: function (i) {
        Boolean(i) === !0 ? (this.Ff = Fe(this.Ff, 14)) : (this.Ff = Ce(this.Ff, 14))
      }
    }),
    (this.password = !0)
}
an(Va, Er)
var Bt = {
  CheckBox: {
    createAppearanceStream: function () {
      return {
        N: { On: Bt.CheckBox.YesNormal },
        D: { On: Bt.CheckBox.YesPushDown, Off: Bt.CheckBox.OffPushDown }
      }
    },
    YesPushDown: function (i) {
      var e = Wn(i)
      e.scope = i.scope
      var n = [],
        a = i.scope.internal.getFont(i.fontName, i.fontStyle).id,
        u = i.scope.__private__.encodeColorString(i.color),
        o = Zo(i, i.caption)
      return (
        n.push('0.749023 g'),
        n.push('0 0 ' + Jt(Bt.internal.getWidth(i)) + ' ' + Jt(Bt.internal.getHeight(i)) + ' re'),
        n.push('f'),
        n.push('BMC'),
        n.push('q'),
        n.push('0 0 1 rg'),
        n.push('/' + a + ' ' + Jt(o.fontSize) + ' Tf ' + u),
        n.push('BT'),
        n.push(o.text),
        n.push('ET'),
        n.push('Q'),
        n.push('EMC'),
        (e.stream = n.join(`
`)),
        e
      )
    },
    YesNormal: function (i) {
      var e = Wn(i)
      e.scope = i.scope
      var n = i.scope.internal.getFont(i.fontName, i.fontStyle).id,
        a = i.scope.__private__.encodeColorString(i.color),
        u = [],
        o = Bt.internal.getHeight(i),
        l = Bt.internal.getWidth(i),
        h = Zo(i, i.caption)
      return (
        u.push('1 g'),
        u.push('0 0 ' + Jt(l) + ' ' + Jt(o) + ' re'),
        u.push('f'),
        u.push('q'),
        u.push('0 0 1 rg'),
        u.push('0 0 ' + Jt(l - 1) + ' ' + Jt(o - 1) + ' re'),
        u.push('W'),
        u.push('n'),
        u.push('0 g'),
        u.push('BT'),
        u.push('/' + n + ' ' + Jt(h.fontSize) + ' Tf ' + a),
        u.push(h.text),
        u.push('ET'),
        u.push('Q'),
        (e.stream = u.join(`
`)),
        e
      )
    },
    OffPushDown: function (i) {
      var e = Wn(i)
      e.scope = i.scope
      var n = []
      return (
        n.push('0.749023 g'),
        n.push('0 0 ' + Jt(Bt.internal.getWidth(i)) + ' ' + Jt(Bt.internal.getHeight(i)) + ' re'),
        n.push('f'),
        (e.stream = n.join(`
`)),
        e
      )
    }
  },
  RadioButton: {
    Circle: {
      createAppearanceStream: function (i) {
        var e = { D: { Off: Bt.RadioButton.Circle.OffPushDown }, N: {} }
        return (
          (e.N[i] = Bt.RadioButton.Circle.YesNormal),
          (e.D[i] = Bt.RadioButton.Circle.YesPushDown),
          e
        )
      },
      getCA: function () {
        return 'l'
      },
      YesNormal: function (i) {
        var e = Wn(i)
        e.scope = i.scope
        var n = [],
          a =
            Bt.internal.getWidth(i) <= Bt.internal.getHeight(i)
              ? Bt.internal.getWidth(i) / 4
              : Bt.internal.getHeight(i) / 4
        a = Number((0.9 * a).toFixed(5))
        var u = Bt.internal.Bezier_C,
          o = Number((a * u).toFixed(5))
        return (
          n.push('q'),
          n.push(
            '1 0 0 1 ' +
              Lr(Bt.internal.getWidth(i) / 2) +
              ' ' +
              Lr(Bt.internal.getHeight(i) / 2) +
              ' cm'
          ),
          n.push(a + ' 0 m'),
          n.push(a + ' ' + o + ' ' + o + ' ' + a + ' 0 ' + a + ' c'),
          n.push('-' + o + ' ' + a + ' -' + a + ' ' + o + ' -' + a + ' 0 c'),
          n.push('-' + a + ' -' + o + ' -' + o + ' -' + a + ' 0 -' + a + ' c'),
          n.push(o + ' -' + a + ' ' + a + ' -' + o + ' ' + a + ' 0 c'),
          n.push('f'),
          n.push('Q'),
          (e.stream = n.join(`
`)),
          e
        )
      },
      YesPushDown: function (i) {
        var e = Wn(i)
        e.scope = i.scope
        var n = [],
          a =
            Bt.internal.getWidth(i) <= Bt.internal.getHeight(i)
              ? Bt.internal.getWidth(i) / 4
              : Bt.internal.getHeight(i) / 4
        a = Number((0.9 * a).toFixed(5))
        var u = Number((2 * a).toFixed(5)),
          o = Number((u * Bt.internal.Bezier_C).toFixed(5)),
          l = Number((a * Bt.internal.Bezier_C).toFixed(5))
        return (
          n.push('0.749023 g'),
          n.push('q'),
          n.push(
            '1 0 0 1 ' +
              Lr(Bt.internal.getWidth(i) / 2) +
              ' ' +
              Lr(Bt.internal.getHeight(i) / 2) +
              ' cm'
          ),
          n.push(u + ' 0 m'),
          n.push(u + ' ' + o + ' ' + o + ' ' + u + ' 0 ' + u + ' c'),
          n.push('-' + o + ' ' + u + ' -' + u + ' ' + o + ' -' + u + ' 0 c'),
          n.push('-' + u + ' -' + o + ' -' + o + ' -' + u + ' 0 -' + u + ' c'),
          n.push(o + ' -' + u + ' ' + u + ' -' + o + ' ' + u + ' 0 c'),
          n.push('f'),
          n.push('Q'),
          n.push('0 g'),
          n.push('q'),
          n.push(
            '1 0 0 1 ' +
              Lr(Bt.internal.getWidth(i) / 2) +
              ' ' +
              Lr(Bt.internal.getHeight(i) / 2) +
              ' cm'
          ),
          n.push(a + ' 0 m'),
          n.push(a + ' ' + l + ' ' + l + ' ' + a + ' 0 ' + a + ' c'),
          n.push('-' + l + ' ' + a + ' -' + a + ' ' + l + ' -' + a + ' 0 c'),
          n.push('-' + a + ' -' + l + ' -' + l + ' -' + a + ' 0 -' + a + ' c'),
          n.push(l + ' -' + a + ' ' + a + ' -' + l + ' ' + a + ' 0 c'),
          n.push('f'),
          n.push('Q'),
          (e.stream = n.join(`
`)),
          e
        )
      },
      OffPushDown: function (i) {
        var e = Wn(i)
        e.scope = i.scope
        var n = [],
          a =
            Bt.internal.getWidth(i) <= Bt.internal.getHeight(i)
              ? Bt.internal.getWidth(i) / 4
              : Bt.internal.getHeight(i) / 4
        a = Number((0.9 * a).toFixed(5))
        var u = Number((2 * a).toFixed(5)),
          o = Number((u * Bt.internal.Bezier_C).toFixed(5))
        return (
          n.push('0.749023 g'),
          n.push('q'),
          n.push(
            '1 0 0 1 ' +
              Lr(Bt.internal.getWidth(i) / 2) +
              ' ' +
              Lr(Bt.internal.getHeight(i) / 2) +
              ' cm'
          ),
          n.push(u + ' 0 m'),
          n.push(u + ' ' + o + ' ' + o + ' ' + u + ' 0 ' + u + ' c'),
          n.push('-' + o + ' ' + u + ' -' + u + ' ' + o + ' -' + u + ' 0 c'),
          n.push('-' + u + ' -' + o + ' -' + o + ' -' + u + ' 0 -' + u + ' c'),
          n.push(o + ' -' + u + ' ' + u + ' -' + o + ' ' + u + ' 0 c'),
          n.push('f'),
          n.push('Q'),
          (e.stream = n.join(`
`)),
          e
        )
      }
    },
    Cross: {
      createAppearanceStream: function (i) {
        var e = { D: { Off: Bt.RadioButton.Cross.OffPushDown }, N: {} }
        return (
          (e.N[i] = Bt.RadioButton.Cross.YesNormal), (e.D[i] = Bt.RadioButton.Cross.YesPushDown), e
        )
      },
      getCA: function () {
        return '8'
      },
      YesNormal: function (i) {
        var e = Wn(i)
        e.scope = i.scope
        var n = [],
          a = Bt.internal.calculateCross(i)
        return (
          n.push('q'),
          n.push(
            '1 1 ' +
              Jt(Bt.internal.getWidth(i) - 2) +
              ' ' +
              Jt(Bt.internal.getHeight(i) - 2) +
              ' re'
          ),
          n.push('W'),
          n.push('n'),
          n.push(Jt(a.x1.x) + ' ' + Jt(a.x1.y) + ' m'),
          n.push(Jt(a.x2.x) + ' ' + Jt(a.x2.y) + ' l'),
          n.push(Jt(a.x4.x) + ' ' + Jt(a.x4.y) + ' m'),
          n.push(Jt(a.x3.x) + ' ' + Jt(a.x3.y) + ' l'),
          n.push('s'),
          n.push('Q'),
          (e.stream = n.join(`
`)),
          e
        )
      },
      YesPushDown: function (i) {
        var e = Wn(i)
        e.scope = i.scope
        var n = Bt.internal.calculateCross(i),
          a = []
        return (
          a.push('0.749023 g'),
          a.push('0 0 ' + Jt(Bt.internal.getWidth(i)) + ' ' + Jt(Bt.internal.getHeight(i)) + ' re'),
          a.push('f'),
          a.push('q'),
          a.push(
            '1 1 ' +
              Jt(Bt.internal.getWidth(i) - 2) +
              ' ' +
              Jt(Bt.internal.getHeight(i) - 2) +
              ' re'
          ),
          a.push('W'),
          a.push('n'),
          a.push(Jt(n.x1.x) + ' ' + Jt(n.x1.y) + ' m'),
          a.push(Jt(n.x2.x) + ' ' + Jt(n.x2.y) + ' l'),
          a.push(Jt(n.x4.x) + ' ' + Jt(n.x4.y) + ' m'),
          a.push(Jt(n.x3.x) + ' ' + Jt(n.x3.y) + ' l'),
          a.push('s'),
          a.push('Q'),
          (e.stream = a.join(`
`)),
          e
        )
      },
      OffPushDown: function (i) {
        var e = Wn(i)
        e.scope = i.scope
        var n = []
        return (
          n.push('0.749023 g'),
          n.push('0 0 ' + Jt(Bt.internal.getWidth(i)) + ' ' + Jt(Bt.internal.getHeight(i)) + ' re'),
          n.push('f'),
          (e.stream = n.join(`
`)),
          e
        )
      }
    }
  },
  createDefaultAppearanceStream: function (i) {
    var e = i.scope.internal.getFont(i.fontName, i.fontStyle).id,
      n = i.scope.__private__.encodeColorString(i.color)
    return '/' + e + ' ' + i.fontSize + ' Tf ' + n
  }
}
;(Bt.internal = {
  Bezier_C: 0.551915024494,
  calculateCross: function (i) {
    var e = Bt.internal.getWidth(i),
      n = Bt.internal.getHeight(i),
      a = Math.min(e, n)
    return {
      x1: { x: (e - a) / 2, y: (n - a) / 2 + a },
      x2: { x: (e - a) / 2 + a, y: (n - a) / 2 },
      x3: { x: (e - a) / 2, y: (n - a) / 2 },
      x4: { x: (e - a) / 2 + a, y: (n - a) / 2 + a }
    }
  }
}),
  (Bt.internal.getWidth = function (i) {
    var e = 0
    return ve(i) === 'object' && (e = Ts(i.Rect[2])), e
  }),
  (Bt.internal.getHeight = function (i) {
    var e = 0
    return ve(i) === 'object' && (e = Ts(i.Rect[3])), e
  })
var lu = (_e.addField = function (i) {
  if ((uu(this, i), !(i instanceof On)))
    throw new Error('Invalid argument passed to jsPDF.addField.')
  var e
  return (
    (e = i).scope.internal.acroformPlugin.printedOut &&
      ((e.scope.internal.acroformPlugin.printedOut = !1),
      (e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null)),
    e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e),
    (i.page = i.scope.internal.getCurrentPageInfo().pageNumber),
    this
  )
})
;(_e.AcroFormChoiceField = vi),
  (_e.AcroFormListBox = bi),
  (_e.AcroFormComboBox = yi),
  (_e.AcroFormEditBox = Ua),
  (_e.AcroFormButton = ze),
  (_e.AcroFormPushButton = Ha),
  (_e.AcroFormRadioButton = wi),
  (_e.AcroFormCheckBox = Wa),
  (_e.AcroFormTextField = Er),
  (_e.AcroFormPasswordField = Va),
  (_e.AcroFormAppearance = Bt),
  (_e.AcroForm = {
    ChoiceField: vi,
    ListBox: bi,
    ComboBox: yi,
    EditBox: Ua,
    Button: ze,
    PushButton: Ha,
    RadioButton: wi,
    CheckBox: Wa,
    TextField: Er,
    PasswordField: Va,
    Appearance: Bt
  }),
  (zt.AcroForm = {
    ChoiceField: vi,
    ListBox: bi,
    ComboBox: yi,
    EditBox: Ua,
    Button: ze,
    PushButton: Ha,
    RadioButton: wi,
    CheckBox: Wa,
    TextField: Er,
    PasswordField: Va,
    Appearance: Bt
  })
zt.AcroForm
function ac(i) {
  return i.reduce(function (e, n, a) {
    return (e[n] = a), e
  }, {})
}
;(function (i) {
  i.__addimage__ = {}
  var e = 'UNKNOWN',
    n = {
      PNG: [[137, 80, 78, 71]],
      TIFF: [
        [77, 77, 0, 42],
        [73, 73, 42, 0]
      ],
      JPEG: [
        [255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
        [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0],
        [255, 216, 255, 219],
        [255, 216, 255, 238]
      ],
      JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]],
      GIF87a: [[71, 73, 70, 56, 55, 97]],
      GIF89a: [[71, 73, 70, 56, 57, 97]],
      WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]],
      BMP: [
        [66, 77],
        [66, 65],
        [67, 73],
        [67, 80],
        [73, 67],
        [80, 84]
      ]
    },
    a = (i.__addimage__.getImageFileTypeByImageData = function (k, I) {
      var H,
        R,
        ct,
        ot,
        mt,
        tt = e
      if (
        (I = I || e) === 'RGBA' ||
        (k.data !== void 0 && k.data instanceof Uint8ClampedArray && 'height' in k && 'width' in k)
      )
        return 'RGBA'
      if (Nt(k))
        for (mt in n)
          for (ct = n[mt], H = 0; H < ct.length; H += 1) {
            for (ot = !0, R = 0; R < ct[H].length; R += 1)
              if (ct[H][R] !== void 0 && ct[H][R] !== k[R]) {
                ot = !1
                break
              }
            if (ot === !0) {
              tt = mt
              break
            }
          }
      else
        for (mt in n)
          for (ct = n[mt], H = 0; H < ct.length; H += 1) {
            for (ot = !0, R = 0; R < ct[H].length; R += 1)
              if (ct[H][R] !== void 0 && ct[H][R] !== k.charCodeAt(R)) {
                ot = !1
                break
              }
            if (ot === !0) {
              tt = mt
              break
            }
          }
      return tt === e && I !== e && (tt = I), tt
    }),
    u = function k(I) {
      for (
        var H = this.internal.write,
          R = this.internal.putStream,
          ct = (0, this.internal.getFilters)();
        ct.indexOf('FlateEncode') !== -1;

      )
        ct.splice(ct.indexOf('FlateEncode'), 1)
      I.objectId = this.internal.newObject()
      var ot = []
      if (
        (ot.push({ key: 'Type', value: '/XObject' }),
        ot.push({ key: 'Subtype', value: '/Image' }),
        ot.push({ key: 'Width', value: I.width }),
        ot.push({ key: 'Height', value: I.height }),
        I.colorSpace === q.INDEXED
          ? ot.push({
              key: 'ColorSpace',
              value:
                '[/Indexed /DeviceRGB ' +
                (I.palette.length / 3 - 1) +
                ' ' +
                ('sMask' in I && I.sMask !== void 0 ? I.objectId + 2 : I.objectId + 1) +
                ' 0 R]'
            })
          : (ot.push({ key: 'ColorSpace', value: '/' + I.colorSpace }),
            I.colorSpace === q.DEVICE_CMYK &&
              ot.push({ key: 'Decode', value: '[1 0 1 0 1 0 1 0]' })),
        ot.push({ key: 'BitsPerComponent', value: I.bitsPerComponent }),
        'decodeParameters' in I &&
          I.decodeParameters !== void 0 &&
          ot.push({ key: 'DecodeParms', value: '<<' + I.decodeParameters + '>>' }),
        'transparency' in I && Array.isArray(I.transparency))
      ) {
        for (var mt = '', tt = 0, pt = I.transparency.length; tt < pt; tt++)
          mt += I.transparency[tt] + ' ' + I.transparency[tt] + ' '
        ot.push({ key: 'Mask', value: '[' + mt + ']' })
      }
      I.sMask !== void 0 && ot.push({ key: 'SMask', value: I.objectId + 1 + ' 0 R' })
      var ft = I.filter !== void 0 ? ['/' + I.filter] : void 0
      if (
        (R({
          data: I.data,
          additionalKeyValues: ot,
          alreadyAppliedFilters: ft,
          objectId: I.objectId
        }),
        H('endobj'),
        'sMask' in I && I.sMask !== void 0)
      ) {
        var Et =
            '/Predictor ' +
            I.predictor +
            ' /Colors 1 /BitsPerComponent ' +
            I.bitsPerComponent +
            ' /Columns ' +
            I.width,
          w = {
            width: I.width,
            height: I.height,
            colorSpace: 'DeviceGray',
            bitsPerComponent: I.bitsPerComponent,
            decodeParameters: Et,
            data: I.sMask
          }
        'filter' in I && (w.filter = I.filter), k.call(this, w)
      }
      if (I.colorSpace === q.INDEXED) {
        var j = this.internal.newObject()
        R({ data: G(new Uint8Array(I.palette)), objectId: j }), H('endobj')
      }
    },
    o = function () {
      var k = this.internal.collections.addImage_images
      for (var I in k) u.call(this, k[I])
    },
    l = function () {
      var k,
        I = this.internal.collections.addImage_images,
        H = this.internal.write
      for (var R in I) H('/I' + (k = I[R]).index, k.objectId, '0', 'R')
    },
    h = function () {
      this.internal.collections.addImage_images ||
        ((this.internal.collections.addImage_images = {}),
        this.internal.events.subscribe('putResources', o),
        this.internal.events.subscribe('putXobjectDict', l))
    },
    f = function () {
      var k = this.internal.collections.addImage_images
      return h.call(this), k
    },
    g = function () {
      return Object.keys(this.internal.collections.addImage_images).length
    },
    A = function (k) {
      return typeof i['process' + k.toUpperCase()] == 'function'
    },
    N = function (k) {
      return ve(k) === 'object' && k.nodeType === 1
    },
    _ = function (k, I) {
      if (k.nodeName === 'IMG' && k.hasAttribute('src')) {
        var H = '' + k.getAttribute('src')
        if (H.indexOf('data:image/') === 0) return Ki(unescape(H).split('base64,').pop())
        var R = i.loadFile(H, !0)
        if (R !== void 0) return R
      }
      if (k.nodeName === 'CANVAS') {
        if (k.width === 0 || k.height === 0)
          throw new Error(
            'Given canvas must have data. Canvas width: ' + k.width + ', height: ' + k.height
          )
        var ct
        switch (I) {
          case 'PNG':
            ct = 'image/png'
            break
          case 'WEBP':
            ct = 'image/webp'
            break
          case 'JPEG':
          case 'JPG':
          default:
            ct = 'image/jpeg'
        }
        return Ki(k.toDataURL(ct, 1).split('base64,').pop())
      }
    },
    p = function (k) {
      var I = this.internal.collections.addImage_images
      if (I) {
        for (var H in I) if (k === I[H].alias) return I[H]
      }
    },
    B = function (k, I, H) {
      return (
        k || I || ((k = -96), (I = -96)),
        k < 0 && (k = (-1 * H.width * 72) / k / this.internal.scaleFactor),
        I < 0 && (I = (-1 * H.height * 72) / I / this.internal.scaleFactor),
        k === 0 && (k = (I * H.width) / H.height),
        I === 0 && (I = (k * H.height) / H.width),
        [k, I]
      )
    },
    F = function (k, I, H, R, ct, ot) {
      var mt = B.call(this, H, R, ct),
        tt = this.internal.getCoordinateString,
        pt = this.internal.getVerticalCoordinateString,
        ft = f.call(this)
      if (((H = mt[0]), (R = mt[1]), (ft[ct.index] = ct), ot)) {
        ot *= Math.PI / 180
        var Et = Math.cos(ot),
          w = Math.sin(ot),
          j = function (W) {
            return W.toFixed(4)
          },
          E = [j(Et), j(w), j(-1 * w), j(Et), 0, 0, 'cm']
      }
      this.internal.write('q'),
        ot
          ? (this.internal.write([1, '0', '0', 1, tt(k), pt(I + R), 'cm'].join(' ')),
            this.internal.write(E.join(' ')),
            this.internal.write([tt(H), '0', '0', tt(R), '0', '0', 'cm'].join(' ')))
          : this.internal.write([tt(H), '0', '0', tt(R), tt(k), pt(I + R), 'cm'].join(' ')),
        this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, 'cm'].join(' ')),
        this.internal.write('/I' + ct.index + ' Do'),
        this.internal.write('Q')
    },
    q = (i.color_spaces = {
      DEVICE_RGB: 'DeviceRGB',
      DEVICE_GRAY: 'DeviceGray',
      DEVICE_CMYK: 'DeviceCMYK',
      CAL_GREY: 'CalGray',
      CAL_RGB: 'CalRGB',
      LAB: 'Lab',
      ICC_BASED: 'ICCBased',
      INDEXED: 'Indexed',
      PATTERN: 'Pattern',
      SEPARATION: 'Separation',
      DEVICE_N: 'DeviceN'
    })
  i.decode = {
    DCT_DECODE: 'DCTDecode',
    FLATE_DECODE: 'FlateDecode',
    LZW_DECODE: 'LZWDecode',
    JPX_DECODE: 'JPXDecode',
    JBIG2_DECODE: 'JBIG2Decode',
    ASCII85_DECODE: 'ASCII85Decode',
    ASCII_HEX_DECODE: 'ASCIIHexDecode',
    RUN_LENGTH_DECODE: 'RunLengthDecode',
    CCITT_FAX_DECODE: 'CCITTFaxDecode'
  }
  var S = (i.image_compression = { NONE: 'NONE', FAST: 'FAST', MEDIUM: 'MEDIUM', SLOW: 'SLOW' }),
    M = (i.__addimage__.sHashCode = function (k) {
      var I,
        H,
        R = 0
      if (typeof k == 'string')
        for (H = k.length, I = 0; I < H; I++) (R = (R << 5) - R + k.charCodeAt(I)), (R |= 0)
      else if (Nt(k))
        for (H = k.byteLength / 2, I = 0; I < H; I++) (R = (R << 5) - R + k[I]), (R |= 0)
      return R
    }),
    Z = (i.__addimage__.validateStringAsBase64 = function (k) {
      ;(k = k || '').toString().trim()
      var I = !0
      return (
        k.length === 0 && (I = !1),
        k.length % 4 != 0 && (I = !1),
        /^[A-Za-z0-9+/]+$/.test(k.substr(0, k.length - 2)) === !1 && (I = !1),
        /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(k.substr(-2)) === !1 && (I = !1),
        I
      )
    }),
    st = (i.__addimage__.extractImageFromDataUrl = function (k) {
      var I = (k = k || '').split('base64,'),
        H = null
      if (I.length === 2) {
        var R = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(I[0])
        Array.isArray(R) && (H = { mimeType: R[1], charset: R[2], data: I[1] })
      }
      return H
    }),
    dt = (i.__addimage__.supportsArrayBuffer = function () {
      return typeof ArrayBuffer < 'u' && typeof Uint8Array < 'u'
    })
  i.__addimage__.isArrayBuffer = function (k) {
    return dt() && k instanceof ArrayBuffer
  }
  var Nt = (i.__addimage__.isArrayBufferView = function (k) {
      return (
        dt() &&
        typeof Uint32Array < 'u' &&
        (k instanceof Int8Array ||
          k instanceof Uint8Array ||
          (typeof Uint8ClampedArray < 'u' && k instanceof Uint8ClampedArray) ||
          k instanceof Int16Array ||
          k instanceof Uint16Array ||
          k instanceof Int32Array ||
          k instanceof Uint32Array ||
          k instanceof Float32Array ||
          k instanceof Float64Array)
      )
    }),
    rt = (i.__addimage__.binaryStringToUint8Array = function (k) {
      for (var I = k.length, H = new Uint8Array(I), R = 0; R < I; R++) H[R] = k.charCodeAt(R)
      return H
    }),
    G = (i.__addimage__.arrayBufferToBinaryString = function (k) {
      for (var I = '', H = Nt(k) ? k : new Uint8Array(k), R = 0; R < H.length; R += 8192)
        I += String.fromCharCode.apply(null, H.subarray(R, R + 8192))
      return I
    })
  i.addImage = function () {
    var k, I, H, R, ct, ot, mt, tt, pt
    if (
      (typeof arguments[1] == 'number'
        ? ((I = e),
          (H = arguments[1]),
          (R = arguments[2]),
          (ct = arguments[3]),
          (ot = arguments[4]),
          (mt = arguments[5]),
          (tt = arguments[6]),
          (pt = arguments[7]))
        : ((I = arguments[1]),
          (H = arguments[2]),
          (R = arguments[3]),
          (ct = arguments[4]),
          (ot = arguments[5]),
          (mt = arguments[6]),
          (tt = arguments[7]),
          (pt = arguments[8])),
      ve((k = arguments[0])) === 'object' && !N(k) && 'imageData' in k)
    ) {
      var ft = k
      ;(k = ft.imageData),
        (I = ft.format || I || e),
        (H = ft.x || H || 0),
        (R = ft.y || R || 0),
        (ct = ft.w || ft.width || ct),
        (ot = ft.h || ft.height || ot),
        (mt = ft.alias || mt),
        (tt = ft.compression || tt),
        (pt = ft.rotation || ft.angle || pt)
    }
    var Et = this.internal.getFilters()
    if ((tt === void 0 && Et.indexOf('FlateEncode') !== -1 && (tt = 'SLOW'), isNaN(H) || isNaN(R)))
      throw new Error('Invalid coordinates passed to jsPDF.addImage')
    h.call(this)
    var w = vt.call(this, k, I, mt, tt)
    return F.call(this, H, R, ct, ot, w, pt), this
  }
  var vt = function (k, I, H, R) {
      var ct, ot, mt
      if (typeof k == 'string' && a(k) === e) {
        k = unescape(k)
        var tt = bt(k, !1)
        ;(tt !== '' || (tt = i.loadFile(k, !0)) !== void 0) && (k = tt)
      }
      if ((N(k) && (k = _(k, I)), (I = a(k, I)), !A(I)))
        throw new Error(
          "addImage does not support files of type '" +
            I +
            "', please ensure that a plugin for '" +
            I +
            "' support is added."
        )
      if (
        (((mt = H) == null || mt.length === 0) &&
          (H = (function (pt) {
            return typeof pt == 'string' || Nt(pt) ? M(pt) : Nt(pt.data) ? M(pt.data) : null
          })(k)),
        (ct = p.call(this, H)) ||
          (dt() && (k instanceof Uint8Array || I === 'RGBA' || ((ot = k), (k = rt(k)))),
          (ct = this['process' + I.toUpperCase()](
            k,
            g.call(this),
            H,
            (function (pt) {
              return (
                pt && typeof pt == 'string' && (pt = pt.toUpperCase()),
                pt in i.image_compression ? pt : S.NONE
              )
            })(R),
            ot
          ))),
        !ct)
      )
        throw new Error('An unknown error occurred whilst processing the image.')
      return ct
    },
    bt = (i.__addimage__.convertBase64ToBinaryString = function (k, I) {
      var H
      I = typeof I != 'boolean' || I
      var R,
        ct = ''
      if (typeof k == 'string') {
        R = (H = st(k)) !== null ? H.data : k
        try {
          ct = Ki(R)
        } catch (ot) {
          if (I)
            throw Z(R)
              ? new Error('atob-Error in jsPDF.convertBase64ToBinaryString ' + ot.message)
              : new Error(
                  'Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString '
                )
        }
      }
      return ct
    })
  i.getImageProperties = function (k) {
    var I,
      H,
      R = ''
    if (
      (N(k) && (k = _(k)),
      typeof k == 'string' &&
        a(k) === e &&
        ((R = bt(k, !1)) === '' && (R = i.loadFile(k) || ''), (k = R)),
      (H = a(k)),
      !A(H))
    )
      throw new Error(
        "addImage does not support files of type '" +
          H +
          "', please ensure that a plugin for '" +
          H +
          "' support is added."
      )
    if (
      (!dt() || k instanceof Uint8Array || (k = rt(k)), !(I = this['process' + H.toUpperCase()](k)))
    )
      throw new Error('An unknown error occurred whilst processing the image')
    return (I.fileType = H), I
  }
})(zt.API),
  (function (i) {
    var e = function (n) {
      if (n !== void 0 && n != '') return !0
    }
    zt.API.events.push([
      'addPage',
      function (n) {
        this.internal.getPageInfo(n.pageNumber).pageContext.annotations = []
      }
    ]),
      i.events.push([
        'putPage',
        function (n) {
          for (
            var a,
              u,
              o,
              l = this.internal.getCoordinateString,
              h = this.internal.getVerticalCoordinateString,
              f = this.internal.getPageInfoByObjId(n.objId),
              g = n.pageContext.annotations,
              A = !1,
              N = 0;
            N < g.length && !A;
            N++
          )
            switch ((a = g[N]).type) {
              case 'link':
                ;(e(a.options.url) || e(a.options.pageNumber)) && (A = !0)
                break
              case 'reference':
              case 'text':
              case 'freetext':
                A = !0
            }
          if (A != 0) {
            this.internal.write('/Annots [')
            for (var _ = 0; _ < g.length; _++) {
              a = g[_]
              var p = this.internal.pdfEscape,
                B = this.internal.getEncryptor(n.objId)
              switch (a.type) {
                case 'reference':
                  this.internal.write(' ' + a.object.objId + ' 0 R ')
                  break
                case 'text':
                  var F = this.internal.newAdditionalObject(),
                    q = this.internal.newAdditionalObject(),
                    S = this.internal.getEncryptor(F.objId),
                    M = a.title || 'Note'
                  ;(o =
                    '<</Type /Annot /Subtype /Text ' +
                    (u =
                      '/Rect [' +
                      l(a.bounds.x) +
                      ' ' +
                      h(a.bounds.y + a.bounds.h) +
                      ' ' +
                      l(a.bounds.x + a.bounds.w) +
                      ' ' +
                      h(a.bounds.y) +
                      '] ') +
                    '/Contents (' +
                    p(S(a.contents)) +
                    ')'),
                    (o += ' /Popup ' + q.objId + ' 0 R'),
                    (o += ' /P ' + f.objId + ' 0 R'),
                    (o += ' /T (' + p(S(M)) + ') >>'),
                    (F.content = o)
                  var Z = F.objId + ' 0 R'
                  ;(o =
                    '<</Type /Annot /Subtype /Popup ' +
                    (u =
                      '/Rect [' +
                      l(a.bounds.x + 30) +
                      ' ' +
                      h(a.bounds.y + a.bounds.h) +
                      ' ' +
                      l(a.bounds.x + a.bounds.w + 30) +
                      ' ' +
                      h(a.bounds.y) +
                      '] ') +
                    ' /Parent ' +
                    Z),
                    a.open && (o += ' /Open true'),
                    (o += ' >>'),
                    (q.content = o),
                    this.internal.write(F.objId, '0 R', q.objId, '0 R')
                  break
                case 'freetext':
                  u =
                    '/Rect [' +
                    l(a.bounds.x) +
                    ' ' +
                    h(a.bounds.y) +
                    ' ' +
                    l(a.bounds.x + a.bounds.w) +
                    ' ' +
                    h(a.bounds.y + a.bounds.h) +
                    '] '
                  var st = a.color || '#000000'
                  ;(o =
                    '<</Type /Annot /Subtype /FreeText ' +
                    u +
                    '/Contents (' +
                    p(B(a.contents)) +
                    ')'),
                    (o +=
                      ' /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#' +
                      st +
                      ')'),
                    (o += ' /Border [0 0 0]'),
                    (o += ' >>'),
                    this.internal.write(o)
                  break
                case 'link':
                  if (a.options.name) {
                    var dt = this.annotations._nameMap[a.options.name]
                    ;(a.options.pageNumber = dt.page), (a.options.top = dt.y)
                  } else a.options.top || (a.options.top = 0)
                  if (
                    ((u =
                      '/Rect [' +
                      a.finalBounds.x +
                      ' ' +
                      a.finalBounds.y +
                      ' ' +
                      a.finalBounds.w +
                      ' ' +
                      a.finalBounds.h +
                      '] '),
                    (o = ''),
                    a.options.url)
                  )
                    o =
                      '<</Type /Annot /Subtype /Link ' +
                      u +
                      '/Border [0 0 0] /A <</S /URI /URI (' +
                      p(B(a.options.url)) +
                      ') >>'
                  else if (a.options.pageNumber)
                    switch (
                      ((o =
                        '<</Type /Annot /Subtype /Link ' +
                        u +
                        '/Border [0 0 0] /Dest [' +
                        this.internal.getPageInfo(a.options.pageNumber).objId +
                        ' 0 R'),
                      (a.options.magFactor = a.options.magFactor || 'XYZ'),
                      a.options.magFactor)
                    ) {
                      case 'Fit':
                        o += ' /Fit]'
                        break
                      case 'FitH':
                        o += ' /FitH ' + a.options.top + ']'
                        break
                      case 'FitV':
                        ;(a.options.left = a.options.left || 0),
                          (o += ' /FitV ' + a.options.left + ']')
                        break
                      case 'XYZ':
                      default:
                        var Nt = h(a.options.top)
                        ;(a.options.left = a.options.left || 0),
                          a.options.zoom === void 0 && (a.options.zoom = 0),
                          (o += ' /XYZ ' + a.options.left + ' ' + Nt + ' ' + a.options.zoom + ']')
                    }
                  o != '' && ((o += ' >>'), this.internal.write(o))
              }
            }
            this.internal.write(']')
          }
        }
      ]),
      (i.createAnnotation = function (n) {
        var a = this.internal.getCurrentPageInfo()
        switch (n.type) {
          case 'link':
            this.link(n.bounds.x, n.bounds.y, n.bounds.w, n.bounds.h, n)
            break
          case 'text':
          case 'freetext':
            a.pageContext.annotations.push(n)
        }
      }),
      (i.link = function (n, a, u, o, l) {
        var h = this.internal.getCurrentPageInfo(),
          f = this.internal.getCoordinateString,
          g = this.internal.getVerticalCoordinateString
        h.pageContext.annotations.push({
          finalBounds: { x: f(n), y: g(a), w: f(n + u), h: g(a + o) },
          options: l,
          type: 'link'
        })
      }),
      (i.textWithLink = function (n, a, u, o) {
        var l,
          h,
          f = this.getTextWidth(n),
          g = this.internal.getLineHeight() / this.internal.scaleFactor
        if (o.maxWidth !== void 0) {
          h = o.maxWidth
          var A = this.splitTextToSize(n, h).length
          l = Math.ceil(g * A)
        } else (h = f), (l = g)
        return (
          this.text(n, a, u, o),
          (u += 0.2 * g),
          o.align === 'center' && (a -= f / 2),
          o.align === 'right' && (a -= f),
          this.link(a, u - g, h, l, o),
          f
        )
      }),
      (i.getTextWidth = function (n) {
        var a = this.internal.getFontSize()
        return (this.getStringUnitWidth(n) * a) / this.internal.scaleFactor
      })
  })(zt.API),
  (function (i) {
    var e = {
        1569: [65152],
        1570: [65153, 65154],
        1571: [65155, 65156],
        1572: [65157, 65158],
        1573: [65159, 65160],
        1574: [65161, 65162, 65163, 65164],
        1575: [65165, 65166],
        1576: [65167, 65168, 65169, 65170],
        1577: [65171, 65172],
        1578: [65173, 65174, 65175, 65176],
        1579: [65177, 65178, 65179, 65180],
        1580: [65181, 65182, 65183, 65184],
        1581: [65185, 65186, 65187, 65188],
        1582: [65189, 65190, 65191, 65192],
        1583: [65193, 65194],
        1584: [65195, 65196],
        1585: [65197, 65198],
        1586: [65199, 65200],
        1587: [65201, 65202, 65203, 65204],
        1588: [65205, 65206, 65207, 65208],
        1589: [65209, 65210, 65211, 65212],
        1590: [65213, 65214, 65215, 65216],
        1591: [65217, 65218, 65219, 65220],
        1592: [65221, 65222, 65223, 65224],
        1593: [65225, 65226, 65227, 65228],
        1594: [65229, 65230, 65231, 65232],
        1601: [65233, 65234, 65235, 65236],
        1602: [65237, 65238, 65239, 65240],
        1603: [65241, 65242, 65243, 65244],
        1604: [65245, 65246, 65247, 65248],
        1605: [65249, 65250, 65251, 65252],
        1606: [65253, 65254, 65255, 65256],
        1607: [65257, 65258, 65259, 65260],
        1608: [65261, 65262],
        1609: [65263, 65264, 64488, 64489],
        1610: [65265, 65266, 65267, 65268],
        1649: [64336, 64337],
        1655: [64477],
        1657: [64358, 64359, 64360, 64361],
        1658: [64350, 64351, 64352, 64353],
        1659: [64338, 64339, 64340, 64341],
        1662: [64342, 64343, 64344, 64345],
        1663: [64354, 64355, 64356, 64357],
        1664: [64346, 64347, 64348, 64349],
        1667: [64374, 64375, 64376, 64377],
        1668: [64370, 64371, 64372, 64373],
        1670: [64378, 64379, 64380, 64381],
        1671: [64382, 64383, 64384, 64385],
        1672: [64392, 64393],
        1676: [64388, 64389],
        1677: [64386, 64387],
        1678: [64390, 64391],
        1681: [64396, 64397],
        1688: [64394, 64395],
        1700: [64362, 64363, 64364, 64365],
        1702: [64366, 64367, 64368, 64369],
        1705: [64398, 64399, 64400, 64401],
        1709: [64467, 64468, 64469, 64470],
        1711: [64402, 64403, 64404, 64405],
        1713: [64410, 64411, 64412, 64413],
        1715: [64406, 64407, 64408, 64409],
        1722: [64414, 64415],
        1723: [64416, 64417, 64418, 64419],
        1726: [64426, 64427, 64428, 64429],
        1728: [64420, 64421],
        1729: [64422, 64423, 64424, 64425],
        1733: [64480, 64481],
        1734: [64473, 64474],
        1735: [64471, 64472],
        1736: [64475, 64476],
        1737: [64482, 64483],
        1739: [64478, 64479],
        1740: [64508, 64509, 64510, 64511],
        1744: [64484, 64485, 64486, 64487],
        1746: [64430, 64431],
        1747: [64432, 64433]
      },
      n = {
        65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 },
        65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 },
        65165: { 65247: { 65248: { 65258: 65010 } } },
        1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }
      },
      a = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 },
      u = [1570, 1571, 1573, 1575]
    i.__arabicParser__ = {}
    var o = (i.__arabicParser__.isInArabicSubstitutionA = function (F) {
        return e[F.charCodeAt(0)] !== void 0
      }),
      l = (i.__arabicParser__.isArabicLetter = function (F) {
        return (
          typeof F == 'string' &&
          /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(F)
        )
      }),
      h = (i.__arabicParser__.isArabicEndLetter = function (F) {
        return l(F) && o(F) && e[F.charCodeAt(0)].length <= 2
      }),
      f = (i.__arabicParser__.isArabicAlfLetter = function (F) {
        return l(F) && u.indexOf(F.charCodeAt(0)) >= 0
      })
    i.__arabicParser__.arabicLetterHasIsolatedForm = function (F) {
      return l(F) && o(F) && e[F.charCodeAt(0)].length >= 1
    }
    var g = (i.__arabicParser__.arabicLetterHasFinalForm = function (F) {
      return l(F) && o(F) && e[F.charCodeAt(0)].length >= 2
    })
    i.__arabicParser__.arabicLetterHasInitialForm = function (F) {
      return l(F) && o(F) && e[F.charCodeAt(0)].length >= 3
    }
    var A = (i.__arabicParser__.arabicLetterHasMedialForm = function (F) {
        return l(F) && o(F) && e[F.charCodeAt(0)].length == 4
      }),
      N = (i.__arabicParser__.resolveLigatures = function (F) {
        var q = 0,
          S = n,
          M = '',
          Z = 0
        for (q = 0; q < F.length; q += 1)
          S[F.charCodeAt(q)] !== void 0
            ? (Z++,
              typeof (S = S[F.charCodeAt(q)]) == 'number' &&
                ((M += String.fromCharCode(S)), (S = n), (Z = 0)),
              q === F.length - 1 && ((S = n), (M += F.charAt(q - (Z - 1))), (q -= Z - 1), (Z = 0)))
            : ((S = n), (M += F.charAt(q - Z)), (q -= Z), (Z = 0))
        return M
      })
    i.__arabicParser__.isArabicDiacritic = function (F) {
      return F !== void 0 && a[F.charCodeAt(0)] !== void 0
    }
    var _ = (i.__arabicParser__.getCorrectForm = function (F, q, S) {
        return l(F)
          ? o(F) === !1
            ? -1
            : !g(F) ||
              (!l(q) && !l(S)) ||
              (!l(S) && h(q)) ||
              (h(F) && !l(q)) ||
              (h(F) && f(q)) ||
              (h(F) && h(q))
            ? 0
            : A(F) && l(q) && !h(q) && l(S) && g(S)
            ? 3
            : h(F) || !l(S)
            ? 1
            : 2
          : -1
      }),
      p = function (F) {
        var q = 0,
          S = 0,
          M = 0,
          Z = '',
          st = '',
          dt = '',
          Nt = (F = F || '').split('\\s+'),
          rt = []
        for (q = 0; q < Nt.length; q += 1) {
          for (rt.push(''), S = 0; S < Nt[q].length; S += 1)
            (Z = Nt[q][S]),
              (st = Nt[q][S - 1]),
              (dt = Nt[q][S + 1]),
              l(Z)
                ? ((M = _(Z, st, dt)),
                  (rt[q] += M !== -1 ? String.fromCharCode(e[Z.charCodeAt(0)][M]) : Z))
                : (rt[q] += Z)
          rt[q] = N(rt[q])
        }
        return rt.join(' ')
      },
      B =
        (i.__arabicParser__.processArabic =
        i.processArabic =
          function () {
            var F,
              q = typeof arguments[0] == 'string' ? arguments[0] : arguments[0].text,
              S = []
            if (Array.isArray(q)) {
              var M = 0
              for (S = [], M = 0; M < q.length; M += 1)
                Array.isArray(q[M]) ? S.push([p(q[M][0]), q[M][1], q[M][2]]) : S.push([p(q[M])])
              F = S
            } else F = p(q)
            return typeof arguments[0] == 'string' ? F : ((arguments[0].text = F), arguments[0])
          })
    i.events.push(['preProcessText', B])
  })(zt.API),
  (zt.API.autoPrint = function (i) {
    var e
    switch ((((i = i || {}).variant = i.variant || 'non-conform'), i.variant)) {
      case 'javascript':
        this.addJS('print({});')
        break
      case 'non-conform':
      default:
        this.internal.events.subscribe('postPutResources', function () {
          ;(e = this.internal.newObject()),
            this.internal.out('<<'),
            this.internal.out('/S /Named'),
            this.internal.out('/Type /Action'),
            this.internal.out('/N /Print'),
            this.internal.out('>>'),
            this.internal.out('endobj')
        }),
          this.internal.events.subscribe('putCatalog', function () {
            this.internal.out('/OpenAction ' + e + ' 0 R')
          })
    }
    return this
  }),
  (function (i) {
    var e = function () {
      var n = void 0
      Object.defineProperty(this, 'pdf', {
        get: function () {
          return n
        },
        set: function (h) {
          n = h
        }
      })
      var a = 150
      Object.defineProperty(this, 'width', {
        get: function () {
          return a
        },
        set: function (h) {
          ;(a = isNaN(h) || Number.isInteger(h) === !1 || h < 0 ? 150 : h),
            this.getContext('2d').pageWrapXEnabled && (this.getContext('2d').pageWrapX = a + 1)
        }
      })
      var u = 300
      Object.defineProperty(this, 'height', {
        get: function () {
          return u
        },
        set: function (h) {
          ;(u = isNaN(h) || Number.isInteger(h) === !1 || h < 0 ? 300 : h),
            this.getContext('2d').pageWrapYEnabled && (this.getContext('2d').pageWrapY = u + 1)
        }
      })
      var o = []
      Object.defineProperty(this, 'childNodes', {
        get: function () {
          return o
        },
        set: function (h) {
          o = h
        }
      })
      var l = {}
      Object.defineProperty(this, 'style', {
        get: function () {
          return l
        },
        set: function (h) {
          l = h
        }
      }),
        Object.defineProperty(this, 'parentNode', {})
    }
    ;(e.prototype.getContext = function (n, a) {
      var u
      if ((n = n || '2d') !== '2d') return null
      for (u in a) this.pdf.context2d.hasOwnProperty(u) && (this.pdf.context2d[u] = a[u])
      return (this.pdf.context2d._canvas = this), this.pdf.context2d
    }),
      (e.prototype.toDataURL = function () {
        throw new Error('toDataURL is not implemented.')
      }),
      i.events.push([
        'initialized',
        function () {
          ;(this.canvas = new e()), (this.canvas.pdf = this)
        }
      ])
  })(zt.API),
  (function (i) {
    var e = { left: 0, top: 0, bottom: 0, right: 0 },
      n = !1,
      a = function () {
        this.internal.__cell__ === void 0 &&
          ((this.internal.__cell__ = {}),
          (this.internal.__cell__.padding = 3),
          (this.internal.__cell__.headerFunction = void 0),
          (this.internal.__cell__.margins = Object.assign({}, e)),
          (this.internal.__cell__.margins.width = this.getPageWidth()),
          u.call(this))
      },
      u = function () {
        ;(this.internal.__cell__.lastCell = new o()), (this.internal.__cell__.pages = 1)
      },
      o = function () {
        var f = arguments[0]
        Object.defineProperty(this, 'x', {
          enumerable: !0,
          get: function () {
            return f
          },
          set: function (F) {
            f = F
          }
        })
        var g = arguments[1]
        Object.defineProperty(this, 'y', {
          enumerable: !0,
          get: function () {
            return g
          },
          set: function (F) {
            g = F
          }
        })
        var A = arguments[2]
        Object.defineProperty(this, 'width', {
          enumerable: !0,
          get: function () {
            return A
          },
          set: function (F) {
            A = F
          }
        })
        var N = arguments[3]
        Object.defineProperty(this, 'height', {
          enumerable: !0,
          get: function () {
            return N
          },
          set: function (F) {
            N = F
          }
        })
        var _ = arguments[4]
        Object.defineProperty(this, 'text', {
          enumerable: !0,
          get: function () {
            return _
          },
          set: function (F) {
            _ = F
          }
        })
        var p = arguments[5]
        Object.defineProperty(this, 'lineNumber', {
          enumerable: !0,
          get: function () {
            return p
          },
          set: function (F) {
            p = F
          }
        })
        var B = arguments[6]
        return (
          Object.defineProperty(this, 'align', {
            enumerable: !0,
            get: function () {
              return B
            },
            set: function (F) {
              B = F
            }
          }),
          this
        )
      }
    ;(o.prototype.clone = function () {
      return new o(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align)
    }),
      (o.prototype.toArray = function () {
        return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align]
      }),
      (i.setHeaderFunction = function (f) {
        return (
          a.call(this),
          (this.internal.__cell__.headerFunction = typeof f == 'function' ? f : void 0),
          this
        )
      }),
      (i.getTextDimensions = function (f, g) {
        a.call(this)
        var A = (g = g || {}).fontSize || this.getFontSize(),
          N = g.font || this.getFont(),
          _ = g.scaleFactor || this.internal.scaleFactor,
          p = 0,
          B = 0,
          F = 0,
          q = this
        if (!Array.isArray(f) && typeof f != 'string') {
          if (typeof f != 'number')
            throw new Error(
              'getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.'
            )
          f = String(f)
        }
        var S = g.maxWidth
        S > 0
          ? typeof f == 'string'
            ? (f = this.splitTextToSize(f, S))
            : Object.prototype.toString.call(f) === '[object Array]' &&
              (f = f.reduce(function (Z, st) {
                return Z.concat(q.splitTextToSize(st, S))
              }, []))
          : (f = Array.isArray(f) ? f : [f])
        for (var M = 0; M < f.length; M++)
          p < (F = this.getStringUnitWidth(f[M], { font: N }) * A) && (p = F)
        return (
          p !== 0 && (B = f.length),
          {
            w: (p /= _),
            h: Math.max(
              (B * A * this.getLineHeightFactor() - A * (this.getLineHeightFactor() - 1)) / _,
              0
            )
          }
        )
      }),
      (i.cellAddPage = function () {
        a.call(this), this.addPage()
        var f = this.internal.__cell__.margins || e
        return (
          (this.internal.__cell__.lastCell = new o(f.left, f.top, void 0, void 0)),
          (this.internal.__cell__.pages += 1),
          this
        )
      })
    var l = (i.cell = function () {
      var f
      ;(f =
        arguments[0] instanceof o
          ? arguments[0]
          : new o(
              arguments[0],
              arguments[1],
              arguments[2],
              arguments[3],
              arguments[4],
              arguments[5]
            )),
        a.call(this)
      var g = this.internal.__cell__.lastCell,
        A = this.internal.__cell__.padding,
        N = this.internal.__cell__.margins || e,
        _ = this.internal.__cell__.tableHeaderRow,
        p = this.internal.__cell__.printHeaders
      return (
        g.lineNumber !== void 0 &&
          (g.lineNumber === f.lineNumber
            ? ((f.x = (g.x || 0) + (g.width || 0)), (f.y = g.y || 0))
            : g.y + g.height + f.height + N.bottom > this.getPageHeight()
            ? (this.cellAddPage(),
              (f.y = N.top),
              p && _ && (this.printHeaderRow(f.lineNumber, !0), (f.y += _[0].height)))
            : (f.y = g.y + g.height || f.y)),
        f.text[0] !== void 0 &&
          (this.rect(f.x, f.y, f.width, f.height, n === !0 ? 'FD' : void 0),
          f.align === 'right'
            ? this.text(f.text, f.x + f.width - A, f.y + A, { align: 'right', baseline: 'top' })
            : f.align === 'center'
            ? this.text(f.text, f.x + f.width / 2, f.y + A, {
                align: 'center',
                baseline: 'top',
                maxWidth: f.width - A - A
              })
            : this.text(f.text, f.x + A, f.y + A, {
                align: 'left',
                baseline: 'top',
                maxWidth: f.width - A - A
              })),
        (this.internal.__cell__.lastCell = f),
        this
      )
    })
    i.table = function (f, g, A, N, _) {
      if ((a.call(this), !A)) throw new Error('No data for PDF table.')
      var p,
        B,
        F,
        q,
        S = [],
        M = [],
        Z = [],
        st = {},
        dt = {},
        Nt = [],
        rt = [],
        G = (_ = _ || {}).autoSize || !1,
        vt = _.printHeaders !== !1,
        bt = _.css && _.css['font-size'] !== void 0 ? 16 * _.css['font-size'] : _.fontSize || 12,
        k = _.margins || Object.assign({ width: this.getPageWidth() }, e),
        I = typeof _.padding == 'number' ? _.padding : 3,
        H = _.headerBackgroundColor || '#c8c8c8',
        R = _.headerTextColor || '#000'
      if (
        (u.call(this),
        (this.internal.__cell__.printHeaders = vt),
        (this.internal.__cell__.margins = k),
        (this.internal.__cell__.table_font_size = bt),
        (this.internal.__cell__.padding = I),
        (this.internal.__cell__.headerBackgroundColor = H),
        (this.internal.__cell__.headerTextColor = R),
        this.setFontSize(bt),
        N == null)
      )
        (M = S = Object.keys(A[0])),
          (Z = S.map(function () {
            return 'left'
          }))
      else if (Array.isArray(N) && ve(N[0]) === 'object')
        for (
          S = N.map(function (ft) {
            return ft.name
          }),
            M = N.map(function (ft) {
              return ft.prompt || ft.name || ''
            }),
            Z = N.map(function (ft) {
              return ft.align || 'left'
            }),
            p = 0;
          p < N.length;
          p += 1
        )
          dt[N[p].name] = N[p].width * (19.049976 / 25.4)
      else
        Array.isArray(N) &&
          typeof N[0] == 'string' &&
          ((M = S = N),
          (Z = S.map(function () {
            return 'left'
          })))
      if (G || (Array.isArray(N) && typeof N[0] == 'string'))
        for (p = 0; p < S.length; p += 1) {
          for (
            st[(q = S[p])] = A.map(function (ft) {
              return ft[q]
            }),
              this.setFont(void 0, 'bold'),
              Nt.push(
                this.getTextDimensions(M[p], {
                  fontSize: this.internal.__cell__.table_font_size,
                  scaleFactor: this.internal.scaleFactor
                }).w
              ),
              B = st[q],
              this.setFont(void 0, 'normal'),
              F = 0;
            F < B.length;
            F += 1
          )
            Nt.push(
              this.getTextDimensions(B[F], {
                fontSize: this.internal.__cell__.table_font_size,
                scaleFactor: this.internal.scaleFactor
              }).w
            )
          ;(dt[q] = Math.max.apply(null, Nt) + I + I), (Nt = [])
        }
      if (vt) {
        var ct = {}
        for (p = 0; p < S.length; p += 1)
          (ct[S[p]] = {}), (ct[S[p]].text = M[p]), (ct[S[p]].align = Z[p])
        var ot = h.call(this, ct, dt)
        ;(rt = S.map(function (ft) {
          return new o(f, g, dt[ft], ot, ct[ft].text, void 0, ct[ft].align)
        })),
          this.setTableHeaderRow(rt),
          this.printHeaderRow(1, !1)
      }
      var mt = N.reduce(function (ft, Et) {
        return (ft[Et.name] = Et.align), ft
      }, {})
      for (p = 0; p < A.length; p += 1) {
        'rowStart' in _ &&
          _.rowStart instanceof Function &&
          _.rowStart({ row: p, data: A[p] }, this)
        var tt = h.call(this, A[p], dt)
        for (F = 0; F < S.length; F += 1) {
          var pt = A[p][S[F]]
          'cellStart' in _ &&
            _.cellStart instanceof Function &&
            _.cellStart({ row: p, col: F, data: pt }, this),
            l.call(this, new o(f, g, dt[S[F]], tt, pt, p + 2, mt[S[F]]))
        }
      }
      return (this.internal.__cell__.table_x = f), (this.internal.__cell__.table_y = g), this
    }
    var h = function (f, g) {
      var A = this.internal.__cell__.padding,
        N = this.internal.__cell__.table_font_size,
        _ = this.internal.scaleFactor
      return Object.keys(f)
        .map(function (p) {
          var B = f[p]
          return this.splitTextToSize(B.hasOwnProperty('text') ? B.text : B, g[p] - A - A)
        }, this)
        .map(function (p) {
          return (this.getLineHeightFactor() * p.length * N) / _ + A + A
        }, this)
        .reduce(function (p, B) {
          return Math.max(p, B)
        }, 0)
    }
    ;(i.setTableHeaderRow = function (f) {
      a.call(this), (this.internal.__cell__.tableHeaderRow = f)
    }),
      (i.printHeaderRow = function (f, g) {
        if ((a.call(this), !this.internal.__cell__.tableHeaderRow))
          throw new Error('Property tableHeaderRow does not exist.')
        var A
        if (((n = !0), typeof this.internal.__cell__.headerFunction == 'function')) {
          var N = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages)
          this.internal.__cell__.lastCell = new o(N[0], N[1], N[2], N[3], void 0, -1)
        }
        this.setFont(void 0, 'bold')
        for (var _ = [], p = 0; p < this.internal.__cell__.tableHeaderRow.length; p += 1) {
          ;(A = this.internal.__cell__.tableHeaderRow[p].clone()),
            g && ((A.y = this.internal.__cell__.margins.top || 0), _.push(A)),
            (A.lineNumber = f)
          var B = this.getTextColor()
          this.setTextColor(this.internal.__cell__.headerTextColor),
            this.setFillColor(this.internal.__cell__.headerBackgroundColor),
            l.call(this, A),
            this.setTextColor(B)
        }
        _.length > 0 && this.setTableHeaderRow(_), this.setFont(void 0, 'normal'), (n = !1)
      })
  })(zt.API)
var oc = {
    italic: ['italic', 'oblique', 'normal'],
    oblique: ['oblique', 'italic', 'normal'],
    normal: ['normal', 'oblique', 'italic']
  },
  sc = [
    'ultra-condensed',
    'extra-condensed',
    'condensed',
    'semi-condensed',
    'normal',
    'semi-expanded',
    'expanded',
    'extra-expanded',
    'ultra-expanded'
  ],
  $o = ac(sc),
  cc = [100, 200, 300, 400, 500, 600, 700, 800, 900],
  hu = ac(cc)
function Qo(i) {
  var e = i.family.replace(/"|'/g, '').toLowerCase(),
    n = (function (o) {
      return oc[(o = o || 'normal')] ? o : 'normal'
    })(i.style),
    a = (function (o) {
      if (!o) return 400
      if (typeof o == 'number') return o >= 100 && o <= 900 && o % 100 == 0 ? o : 400
      if (/^\d00$/.test(o)) return parseInt(o)
      switch (o) {
        case 'bold':
          return 700
        case 'normal':
        default:
          return 400
      }
    })(i.weight),
    u = (function (o) {
      return typeof $o[(o = o || 'normal')] == 'number' ? o : 'normal'
    })(i.stretch)
  return {
    family: e,
    style: n,
    weight: a,
    stretch: u,
    src: i.src || [],
    ref: i.ref || { name: e, style: [u, n, a].join(' ') }
  }
}
function zs(i, e, n, a) {
  var u
  for (u = n; u >= 0 && u < e.length; u += a) if (i[e[u]]) return i[e[u]]
  for (u = n; u >= 0 && u < e.length; u -= a) if (i[e[u]]) return i[e[u]]
}
var fu = {
    'sans-serif': 'helvetica',
    fixed: 'courier',
    monospace: 'courier',
    terminal: 'courier',
    cursive: 'times',
    fantasy: 'times',
    serif: 'times'
  },
  Us = {
    caption: 'times',
    icon: 'times',
    menu: 'times',
    'message-box': 'times',
    'small-caption': 'times',
    'status-bar': 'times'
  }
function Hs(i) {
  return [i.stretch, i.style, i.weight, i.family].join(' ')
}
function du(i, e, n) {
  for (
    var a = (n = n || {}).defaultFontFamily || 'times',
      u = Object.assign({}, fu, n.genericFontFamilies || {}),
      o = null,
      l = null,
      h = 0;
    h < e.length;
    ++h
  )
    if ((u[(o = Qo(e[h])).family] && (o.family = u[o.family]), i.hasOwnProperty(o.family))) {
      l = i[o.family]
      break
    }
  if (!(l = l || i[a]))
    throw new Error(
      "Could not find a font-family for the rule '" + Hs(o) + "' and default family '" + a + "'."
    )
  if (
    ((l = (function (f, g) {
      if (g[f]) return g[f]
      var A = $o[f],
        N = A <= $o.normal ? -1 : 1,
        _ = zs(g, sc, A, N)
      if (!_) throw new Error('Could not find a matching font-stretch value for ' + f)
      return _
    })(o.stretch, l)),
    (l = (function (f, g) {
      if (g[f]) return g[f]
      for (var A = oc[f], N = 0; N < A.length; ++N) if (g[A[N]]) return g[A[N]]
      throw new Error('Could not find a matching font-style for ' + f)
    })(o.style, l)),
    !(l = (function (f, g) {
      if (g[f]) return g[f]
      if (f === 400 && g[500]) return g[500]
      if (f === 500 && g[400]) return g[400]
      var A = hu[f],
        N = zs(g, cc, A, f < 400 ? -1 : 1)
      if (!N) throw new Error('Could not find a matching font-weight for value ' + f)
      return N
    })(o.weight, l)))
  )
    throw new Error("Failed to resolve a font for the rule '" + Hs(o) + "'.")
  return l
}
function Ws(i) {
  return i.trimLeft()
}
function pu(i, e) {
  for (var n = 0; n < i.length; ) {
    if (i.charAt(n) === e) return [i.substring(0, n), i.substring(n + 1)]
    n += 1
  }
  return null
}
function gu(i) {
  var e = i.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i)
  return e === null ? null : [e[0], i.substring(e[0].length)]
}
var Ta,
  Vs,
  Gs,
  Wo = ['times']
;(function (i) {
  var e,
    n,
    a,
    u,
    o,
    l,
    h,
    f,
    g,
    A = function (w) {
      return (
        (w = w || {}),
        (this.isStrokeTransparent = w.isStrokeTransparent || !1),
        (this.strokeOpacity = w.strokeOpacity || 1),
        (this.strokeStyle = w.strokeStyle || '#000000'),
        (this.fillStyle = w.fillStyle || '#000000'),
        (this.isFillTransparent = w.isFillTransparent || !1),
        (this.fillOpacity = w.fillOpacity || 1),
        (this.font = w.font || '10px sans-serif'),
        (this.textBaseline = w.textBaseline || 'alphabetic'),
        (this.textAlign = w.textAlign || 'left'),
        (this.lineWidth = w.lineWidth || 1),
        (this.lineJoin = w.lineJoin || 'miter'),
        (this.lineCap = w.lineCap || 'butt'),
        (this.path = w.path || []),
        (this.transform = w.transform !== void 0 ? w.transform.clone() : new f()),
        (this.globalCompositeOperation = w.globalCompositeOperation || 'normal'),
        (this.globalAlpha = w.globalAlpha || 1),
        (this.clip_path = w.clip_path || []),
        (this.currentPoint = w.currentPoint || new l()),
        (this.miterLimit = w.miterLimit || 10),
        (this.lastPoint = w.lastPoint || new l()),
        (this.lineDashOffset = w.lineDashOffset || 0),
        (this.lineDash = w.lineDash || []),
        (this.margin = w.margin || [0, 0, 0, 0]),
        (this.prevPageLastElemOffset = w.prevPageLastElemOffset || 0),
        (this.ignoreClearRect = typeof w.ignoreClearRect != 'boolean' || w.ignoreClearRect),
        this
      )
    }
  i.events.push([
    'initialized',
    function () {
      ;(this.context2d = new N(this)),
        (e = this.internal.f2),
        (n = this.internal.getCoordinateString),
        (a = this.internal.getVerticalCoordinateString),
        (u = this.internal.getHorizontalCoordinate),
        (o = this.internal.getVerticalCoordinate),
        (l = this.internal.Point),
        (h = this.internal.Rectangle),
        (f = this.internal.Matrix),
        (g = new A())
    }
  ])
  var N = function (w) {
    Object.defineProperty(this, 'canvas', {
      get: function () {
        return { parentNode: !1, style: !1 }
      }
    })
    var j = w
    Object.defineProperty(this, 'pdf', {
      get: function () {
        return j
      }
    })
    var E = !1
    Object.defineProperty(this, 'pageWrapXEnabled', {
      get: function () {
        return E
      },
      set: function (at) {
        E = Boolean(at)
      }
    })
    var W = !1
    Object.defineProperty(this, 'pageWrapYEnabled', {
      get: function () {
        return W
      },
      set: function (at) {
        W = Boolean(at)
      }
    })
    var Y = 0
    Object.defineProperty(this, 'posX', {
      get: function () {
        return Y
      },
      set: function (at) {
        isNaN(at) || (Y = at)
      }
    })
    var $ = 0
    Object.defineProperty(this, 'posY', {
      get: function () {
        return $
      },
      set: function (at) {
        isNaN(at) || ($ = at)
      }
    }),
      Object.defineProperty(this, 'margin', {
        get: function () {
          return g.margin
        },
        set: function (at) {
          var O
          typeof at == 'number'
            ? (O = [at, at, at, at])
            : (((O = new Array(4))[0] = at[0]),
              (O[1] = at.length >= 2 ? at[1] : O[0]),
              (O[2] = at.length >= 3 ? at[2] : O[0]),
              (O[3] = at.length >= 4 ? at[3] : O[1])),
            (g.margin = O)
        }
      })
    var et = !1
    Object.defineProperty(this, 'autoPaging', {
      get: function () {
        return et
      },
      set: function (at) {
        et = at
      }
    })
    var Q = 0
    Object.defineProperty(this, 'lastBreak', {
      get: function () {
        return Q
      },
      set: function (at) {
        Q = at
      }
    })
    var At = []
    Object.defineProperty(this, 'pageBreaks', {
      get: function () {
        return At
      },
      set: function (at) {
        At = at
      }
    }),
      Object.defineProperty(this, 'ctx', {
        get: function () {
          return g
        },
        set: function (at) {
          at instanceof A && (g = at)
        }
      }),
      Object.defineProperty(this, 'path', {
        get: function () {
          return g.path
        },
        set: function (at) {
          g.path = at
        }
      })
    var Lt = []
    Object.defineProperty(this, 'ctxStack', {
      get: function () {
        return Lt
      },
      set: function (at) {
        Lt = at
      }
    }),
      Object.defineProperty(this, 'fillStyle', {
        get: function () {
          return this.ctx.fillStyle
        },
        set: function (at) {
          var O
          ;(O = _(at)),
            (this.ctx.fillStyle = O.style),
            (this.ctx.isFillTransparent = O.a === 0),
            (this.ctx.fillOpacity = O.a),
            this.pdf.setFillColor(O.r, O.g, O.b, { a: O.a }),
            this.pdf.setTextColor(O.r, O.g, O.b, { a: O.a })
        }
      }),
      Object.defineProperty(this, 'strokeStyle', {
        get: function () {
          return this.ctx.strokeStyle
        },
        set: function (at) {
          var O = _(at)
          ;(this.ctx.strokeStyle = O.style),
            (this.ctx.isStrokeTransparent = O.a === 0),
            (this.ctx.strokeOpacity = O.a),
            O.a === 0
              ? this.pdf.setDrawColor(255, 255, 255)
              : (O.a, this.pdf.setDrawColor(O.r, O.g, O.b))
        }
      }),
      Object.defineProperty(this, 'lineCap', {
        get: function () {
          return this.ctx.lineCap
        },
        set: function (at) {
          ;['butt', 'round', 'square'].indexOf(at) !== -1 &&
            ((this.ctx.lineCap = at), this.pdf.setLineCap(at))
        }
      }),
      Object.defineProperty(this, 'lineWidth', {
        get: function () {
          return this.ctx.lineWidth
        },
        set: function (at) {
          isNaN(at) || ((this.ctx.lineWidth = at), this.pdf.setLineWidth(at))
        }
      }),
      Object.defineProperty(this, 'lineJoin', {
        get: function () {
          return this.ctx.lineJoin
        },
        set: function (at) {
          ;['bevel', 'round', 'miter'].indexOf(at) !== -1 &&
            ((this.ctx.lineJoin = at), this.pdf.setLineJoin(at))
        }
      }),
      Object.defineProperty(this, 'miterLimit', {
        get: function () {
          return this.ctx.miterLimit
        },
        set: function (at) {
          isNaN(at) || ((this.ctx.miterLimit = at), this.pdf.setMiterLimit(at))
        }
      }),
      Object.defineProperty(this, 'textBaseline', {
        get: function () {
          return this.ctx.textBaseline
        },
        set: function (at) {
          this.ctx.textBaseline = at
        }
      }),
      Object.defineProperty(this, 'textAlign', {
        get: function () {
          return this.ctx.textAlign
        },
        set: function (at) {
          ;['right', 'end', 'center', 'left', 'start'].indexOf(at) !== -1 &&
            (this.ctx.textAlign = at)
        }
      })
    var Ot = null
    function jt(at, O) {
      if (Ot === null) {
        var Xt = (function (Mt) {
          var wt = []
          return (
            Object.keys(Mt).forEach(function (xt) {
              Mt[xt].forEach(function (kt) {
                var Pt = null
                switch (kt) {
                  case 'bold':
                    Pt = { family: xt, weight: 'bold' }
                    break
                  case 'italic':
                    Pt = { family: xt, style: 'italic' }
                    break
                  case 'bolditalic':
                    Pt = { family: xt, weight: 'bold', style: 'italic' }
                    break
                  case '':
                  case 'normal':
                    Pt = { family: xt }
                }
                Pt !== null && ((Pt.ref = { name: xt, style: kt }), wt.push(Pt))
              })
            }),
            wt
          )
        })(at.getFontList())
        Ot = (function (Mt) {
          for (var wt = {}, xt = 0; xt < Mt.length; ++xt) {
            var kt = Qo(Mt[xt]),
              Pt = kt.family,
              qt = kt.stretch,
              Gt = kt.style,
              $t = kt.weight
            ;(wt[Pt] = wt[Pt] || {}),
              (wt[Pt][qt] = wt[Pt][qt] || {}),
              (wt[Pt][qt][Gt] = wt[Pt][qt][Gt] || {}),
              (wt[Pt][qt][Gt][$t] = kt)
          }
          return wt
        })(Xt.concat(O))
      }
      return Ot
    }
    var Wt = null
    Object.defineProperty(this, 'fontFaces', {
      get: function () {
        return Wt
      },
      set: function (at) {
        ;(Ot = null), (Wt = at)
      }
    }),
      Object.defineProperty(this, 'font', {
        get: function () {
          return this.ctx.font
        },
        set: function (at) {
          var O
          if (
            ((this.ctx.font = at),
            (O =
              /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(
                at
              )) !== null)
          ) {
            var Xt = O[1],
              Mt = (O[2], O[3]),
              wt = O[4],
              xt = (O[5], O[6]),
              kt = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(wt)[2]
            ;(wt = Math.floor(
              kt === 'px'
                ? parseFloat(wt) * this.pdf.internal.scaleFactor
                : kt === 'em'
                ? parseFloat(wt) * this.pdf.getFontSize()
                : parseFloat(wt) * this.pdf.internal.scaleFactor
            )),
              this.pdf.setFontSize(wt)
            var Pt = (function (Ht) {
              var ee,
                It,
                We = [],
                oe = Ht.trim()
              if (oe === '') return Wo
              if (oe in Us) return [Us[oe]]
              for (; oe !== ''; ) {
                switch (((It = null), (ee = (oe = Ws(oe)).charAt(0)))) {
                  case '"':
                  case "'":
                    It = pu(oe.substring(1), ee)
                    break
                  default:
                    It = gu(oe)
                }
                if (
                  It === null ||
                  (We.push(It[0]), (oe = Ws(It[1])) !== '' && oe.charAt(0) !== ',')
                )
                  return Wo
                oe = oe.replace(/^,/, '')
              }
              return We
            })(xt)
            if (this.fontFaces) {
              var qt = du(
                jt(this.pdf, this.fontFaces),
                Pt.map(function (Ht) {
                  return { family: Ht, stretch: 'normal', weight: Mt, style: Xt }
                })
              )
              this.pdf.setFont(qt.ref.name, qt.ref.style)
            } else {
              var Gt = ''
              ;(Mt === 'bold' || parseInt(Mt, 10) >= 700 || Xt === 'bold') && (Gt = 'bold'),
                Xt === 'italic' && (Gt += 'italic'),
                Gt.length === 0 && (Gt = 'normal')
              for (
                var $t = '',
                  te = {
                    arial: 'Helvetica',
                    Arial: 'Helvetica',
                    verdana: 'Helvetica',
                    Verdana: 'Helvetica',
                    helvetica: 'Helvetica',
                    Helvetica: 'Helvetica',
                    'sans-serif': 'Helvetica',
                    fixed: 'Courier',
                    monospace: 'Courier',
                    terminal: 'Courier',
                    cursive: 'Times',
                    fantasy: 'Times',
                    serif: 'Times'
                  },
                  ie = 0;
                ie < Pt.length;
                ie++
              ) {
                if (
                  this.pdf.internal.getFont(Pt[ie], Gt, { noFallback: !0, disableWarning: !0 }) !==
                  void 0
                ) {
                  $t = Pt[ie]
                  break
                }
                if (
                  Gt === 'bolditalic' &&
                  this.pdf.internal.getFont(Pt[ie], 'bold', {
                    noFallback: !0,
                    disableWarning: !0
                  }) !== void 0
                )
                  ($t = Pt[ie]), (Gt = 'bold')
                else if (
                  this.pdf.internal.getFont(Pt[ie], 'normal', {
                    noFallback: !0,
                    disableWarning: !0
                  }) !== void 0
                ) {
                  ;($t = Pt[ie]), (Gt = 'normal')
                  break
                }
              }
              if ($t === '') {
                for (var fe = 0; fe < Pt.length; fe++)
                  if (te[Pt[fe]]) {
                    $t = te[Pt[fe]]
                    break
                  }
              }
              ;($t = $t === '' ? 'Times' : $t), this.pdf.setFont($t, Gt)
            }
          }
        }
      }),
      Object.defineProperty(this, 'globalCompositeOperation', {
        get: function () {
          return this.ctx.globalCompositeOperation
        },
        set: function (at) {
          this.ctx.globalCompositeOperation = at
        }
      }),
      Object.defineProperty(this, 'globalAlpha', {
        get: function () {
          return this.ctx.globalAlpha
        },
        set: function (at) {
          this.ctx.globalAlpha = at
        }
      }),
      Object.defineProperty(this, 'lineDashOffset', {
        get: function () {
          return this.ctx.lineDashOffset
        },
        set: function (at) {
          ;(this.ctx.lineDashOffset = at), Et.call(this)
        }
      }),
      Object.defineProperty(this, 'lineDash', {
        get: function () {
          return this.ctx.lineDash
        },
        set: function (at) {
          ;(this.ctx.lineDash = at), Et.call(this)
        }
      }),
      Object.defineProperty(this, 'ignoreClearRect', {
        get: function () {
          return this.ctx.ignoreClearRect
        },
        set: function (at) {
          this.ctx.ignoreClearRect = Boolean(at)
        }
      })
  }
  ;(N.prototype.setLineDash = function (w) {
    this.lineDash = w
  }),
    (N.prototype.getLineDash = function () {
      return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice()
    }),
    (N.prototype.fill = function () {
      st.call(this, 'fill', !1)
    }),
    (N.prototype.stroke = function () {
      st.call(this, 'stroke', !1)
    }),
    (N.prototype.beginPath = function () {
      this.path = [{ type: 'begin' }]
    }),
    (N.prototype.moveTo = function (w, j) {
      if (isNaN(w) || isNaN(j))
        throw (
          (me.error('jsPDF.context2d.moveTo: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.moveTo'))
        )
      var E = this.ctx.transform.applyToPoint(new l(w, j))
      this.path.push({ type: 'mt', x: E.x, y: E.y }), (this.ctx.lastPoint = new l(w, j))
    }),
    (N.prototype.closePath = function () {
      var w = new l(0, 0),
        j = 0
      for (j = this.path.length - 1; j !== -1; j--)
        if (
          this.path[j].type === 'begin' &&
          ve(this.path[j + 1]) === 'object' &&
          typeof this.path[j + 1].x == 'number'
        ) {
          w = new l(this.path[j + 1].x, this.path[j + 1].y)
          break
        }
      this.path.push({ type: 'close' }), (this.ctx.lastPoint = new l(w.x, w.y))
    }),
    (N.prototype.lineTo = function (w, j) {
      if (isNaN(w) || isNaN(j))
        throw (
          (me.error('jsPDF.context2d.lineTo: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.lineTo'))
        )
      var E = this.ctx.transform.applyToPoint(new l(w, j))
      this.path.push({ type: 'lt', x: E.x, y: E.y }), (this.ctx.lastPoint = new l(E.x, E.y))
    }),
    (N.prototype.clip = function () {
      ;(this.ctx.clip_path = JSON.parse(JSON.stringify(this.path))), st.call(this, null, !0)
    }),
    (N.prototype.quadraticCurveTo = function (w, j, E, W) {
      if (isNaN(E) || isNaN(W) || isNaN(w) || isNaN(j))
        throw (
          (me.error('jsPDF.context2d.quadraticCurveTo: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.quadraticCurveTo'))
        )
      var Y = this.ctx.transform.applyToPoint(new l(E, W)),
        $ = this.ctx.transform.applyToPoint(new l(w, j))
      this.path.push({ type: 'qct', x1: $.x, y1: $.y, x: Y.x, y: Y.y }),
        (this.ctx.lastPoint = new l(Y.x, Y.y))
    }),
    (N.prototype.bezierCurveTo = function (w, j, E, W, Y, $) {
      if (isNaN(Y) || isNaN($) || isNaN(w) || isNaN(j) || isNaN(E) || isNaN(W))
        throw (
          (me.error('jsPDF.context2d.bezierCurveTo: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.bezierCurveTo'))
        )
      var et = this.ctx.transform.applyToPoint(new l(Y, $)),
        Q = this.ctx.transform.applyToPoint(new l(w, j)),
        At = this.ctx.transform.applyToPoint(new l(E, W))
      this.path.push({ type: 'bct', x1: Q.x, y1: Q.y, x2: At.x, y2: At.y, x: et.x, y: et.y }),
        (this.ctx.lastPoint = new l(et.x, et.y))
    }),
    (N.prototype.arc = function (w, j, E, W, Y, $) {
      if (isNaN(w) || isNaN(j) || isNaN(E) || isNaN(W) || isNaN(Y))
        throw (
          (me.error('jsPDF.context2d.arc: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.arc'))
        )
      if ((($ = Boolean($)), !this.ctx.transform.isIdentity)) {
        var et = this.ctx.transform.applyToPoint(new l(w, j))
        ;(w = et.x), (j = et.y)
        var Q = this.ctx.transform.applyToPoint(new l(0, E)),
          At = this.ctx.transform.applyToPoint(new l(0, 0))
        E = Math.sqrt(Math.pow(Q.x - At.x, 2) + Math.pow(Q.y - At.y, 2))
      }
      Math.abs(Y - W) >= 2 * Math.PI && ((W = 0), (Y = 2 * Math.PI)),
        this.path.push({
          type: 'arc',
          x: w,
          y: j,
          radius: E,
          startAngle: W,
          endAngle: Y,
          counterclockwise: $
        })
    }),
    (N.prototype.arcTo = function (w, j, E, W, Y) {
      throw new Error('arcTo not implemented.')
    }),
    (N.prototype.rect = function (w, j, E, W) {
      if (isNaN(w) || isNaN(j) || isNaN(E) || isNaN(W))
        throw (
          (me.error('jsPDF.context2d.rect: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.rect'))
        )
      this.moveTo(w, j),
        this.lineTo(w + E, j),
        this.lineTo(w + E, j + W),
        this.lineTo(w, j + W),
        this.lineTo(w, j),
        this.lineTo(w + E, j),
        this.lineTo(w, j)
    }),
    (N.prototype.fillRect = function (w, j, E, W) {
      if (isNaN(w) || isNaN(j) || isNaN(E) || isNaN(W))
        throw (
          (me.error('jsPDF.context2d.fillRect: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.fillRect'))
        )
      if (!p.call(this)) {
        var Y = {}
        this.lineCap !== 'butt' && ((Y.lineCap = this.lineCap), (this.lineCap = 'butt')),
          this.lineJoin !== 'miter' && ((Y.lineJoin = this.lineJoin), (this.lineJoin = 'miter')),
          this.beginPath(),
          this.rect(w, j, E, W),
          this.fill(),
          Y.hasOwnProperty('lineCap') && (this.lineCap = Y.lineCap),
          Y.hasOwnProperty('lineJoin') && (this.lineJoin = Y.lineJoin)
      }
    }),
    (N.prototype.strokeRect = function (w, j, E, W) {
      if (isNaN(w) || isNaN(j) || isNaN(E) || isNaN(W))
        throw (
          (me.error('jsPDF.context2d.strokeRect: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.strokeRect'))
        )
      B.call(this) || (this.beginPath(), this.rect(w, j, E, W), this.stroke())
    }),
    (N.prototype.clearRect = function (w, j, E, W) {
      if (isNaN(w) || isNaN(j) || isNaN(E) || isNaN(W))
        throw (
          (me.error('jsPDF.context2d.clearRect: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.clearRect'))
        )
      this.ignoreClearRect || ((this.fillStyle = '#ffffff'), this.fillRect(w, j, E, W))
    }),
    (N.prototype.save = function (w) {
      w = typeof w != 'boolean' || w
      for (
        var j = this.pdf.internal.getCurrentPageInfo().pageNumber, E = 0;
        E < this.pdf.internal.getNumberOfPages();
        E++
      )
        this.pdf.setPage(E + 1), this.pdf.internal.out('q')
      if ((this.pdf.setPage(j), w)) {
        this.ctx.fontSize = this.pdf.internal.getFontSize()
        var W = new A(this.ctx)
        this.ctxStack.push(this.ctx), (this.ctx = W)
      }
    }),
    (N.prototype.restore = function (w) {
      w = typeof w != 'boolean' || w
      for (
        var j = this.pdf.internal.getCurrentPageInfo().pageNumber, E = 0;
        E < this.pdf.internal.getNumberOfPages();
        E++
      )
        this.pdf.setPage(E + 1), this.pdf.internal.out('Q')
      this.pdf.setPage(j),
        w &&
          this.ctxStack.length !== 0 &&
          ((this.ctx = this.ctxStack.pop()),
          (this.fillStyle = this.ctx.fillStyle),
          (this.strokeStyle = this.ctx.strokeStyle),
          (this.font = this.ctx.font),
          (this.lineCap = this.ctx.lineCap),
          (this.lineWidth = this.ctx.lineWidth),
          (this.lineJoin = this.ctx.lineJoin),
          (this.lineDash = this.ctx.lineDash),
          (this.lineDashOffset = this.ctx.lineDashOffset))
    }),
    (N.prototype.toDataURL = function () {
      throw new Error('toDataUrl not implemented.')
    })
  var _ = function (w) {
      var j, E, W, Y
      if ((w.isCanvasGradient === !0 && (w = w.getColor()), !w))
        return { r: 0, g: 0, b: 0, a: 0, style: w }
      if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(w))
        (j = 0), (E = 0), (W = 0), (Y = 0)
      else {
        var $ = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(w)
        if ($ !== null) (j = parseInt($[1])), (E = parseInt($[2])), (W = parseInt($[3])), (Y = 1)
        else if (
          ($ = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(w)) !== null
        )
          (j = parseInt($[1])), (E = parseInt($[2])), (W = parseInt($[3])), (Y = parseFloat($[4]))
        else {
          if (((Y = 1), typeof w == 'string' && w.charAt(0) !== '#')) {
            var et = new Qs(w)
            w = et.ok ? et.toHex() : '#000000'
          }
          w.length === 4
            ? ((j = w.substring(1, 2)),
              (j += j),
              (E = w.substring(2, 3)),
              (E += E),
              (W = w.substring(3, 4)),
              (W += W))
            : ((j = w.substring(1, 3)), (E = w.substring(3, 5)), (W = w.substring(5, 7))),
            (j = parseInt(j, 16)),
            (E = parseInt(E, 16)),
            (W = parseInt(W, 16))
        }
      }
      return { r: j, g: E, b: W, a: Y, style: w }
    },
    p = function () {
      return this.ctx.isFillTransparent || this.globalAlpha == 0
    },
    B = function () {
      return Boolean(this.ctx.isStrokeTransparent || this.globalAlpha == 0)
    }
  ;(N.prototype.fillText = function (w, j, E, W) {
    if (isNaN(j) || isNaN(E) || typeof w != 'string')
      throw (
        (me.error('jsPDF.context2d.fillText: Invalid arguments', arguments),
        new Error('Invalid arguments passed to jsPDF.context2d.fillText'))
      )
    if (((W = isNaN(W) ? void 0 : W), !p.call(this))) {
      var Y = tt(this.ctx.transform.rotation),
        $ = this.ctx.transform.scaleX
      I.call(this, { text: w, x: j, y: E, scale: $, angle: Y, align: this.textAlign, maxWidth: W })
    }
  }),
    (N.prototype.strokeText = function (w, j, E, W) {
      if (isNaN(j) || isNaN(E) || typeof w != 'string')
        throw (
          (me.error('jsPDF.context2d.strokeText: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.strokeText'))
        )
      if (!B.call(this)) {
        W = isNaN(W) ? void 0 : W
        var Y = tt(this.ctx.transform.rotation),
          $ = this.ctx.transform.scaleX
        I.call(this, {
          text: w,
          x: j,
          y: E,
          scale: $,
          renderingMode: 'stroke',
          angle: Y,
          align: this.textAlign,
          maxWidth: W
        })
      }
    }),
    (N.prototype.measureText = function (w) {
      if (typeof w != 'string')
        throw (
          (me.error('jsPDF.context2d.measureText: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.measureText'))
        )
      var j = this.pdf,
        E = this.pdf.internal.scaleFactor,
        W = j.internal.getFontSize(),
        Y = (j.getStringUnitWidth(w) * W) / j.internal.scaleFactor,
        $ = function (et) {
          var Q = (et = et || {}).width || 0
          return (
            Object.defineProperty(this, 'width', {
              get: function () {
                return Q
              }
            }),
            this
          )
        }
      return new $({ width: (Y *= Math.round(((96 * E) / 72) * 1e4) / 1e4) })
    }),
    (N.prototype.scale = function (w, j) {
      if (isNaN(w) || isNaN(j))
        throw (
          (me.error('jsPDF.context2d.scale: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.scale'))
        )
      var E = new f(w, 0, 0, j, 0, 0)
      this.ctx.transform = this.ctx.transform.multiply(E)
    }),
    (N.prototype.rotate = function (w) {
      if (isNaN(w))
        throw (
          (me.error('jsPDF.context2d.rotate: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.rotate'))
        )
      var j = new f(Math.cos(w), Math.sin(w), -Math.sin(w), Math.cos(w), 0, 0)
      this.ctx.transform = this.ctx.transform.multiply(j)
    }),
    (N.prototype.translate = function (w, j) {
      if (isNaN(w) || isNaN(j))
        throw (
          (me.error('jsPDF.context2d.translate: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.translate'))
        )
      var E = new f(1, 0, 0, 1, w, j)
      this.ctx.transform = this.ctx.transform.multiply(E)
    }),
    (N.prototype.transform = function (w, j, E, W, Y, $) {
      if (isNaN(w) || isNaN(j) || isNaN(E) || isNaN(W) || isNaN(Y) || isNaN($))
        throw (
          (me.error('jsPDF.context2d.transform: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.transform'))
        )
      var et = new f(w, j, E, W, Y, $)
      this.ctx.transform = this.ctx.transform.multiply(et)
    }),
    (N.prototype.setTransform = function (w, j, E, W, Y, $) {
      ;(w = isNaN(w) ? 1 : w),
        (j = isNaN(j) ? 0 : j),
        (E = isNaN(E) ? 0 : E),
        (W = isNaN(W) ? 1 : W),
        (Y = isNaN(Y) ? 0 : Y),
        ($ = isNaN($) ? 0 : $),
        (this.ctx.transform = new f(w, j, E, W, Y, $))
    })
  var F = function () {
    return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0
  }
  N.prototype.drawImage = function (w, j, E, W, Y, $, et, Q, At) {
    var Lt = this.pdf.getImageProperties(w),
      Ot = 1,
      jt = 1,
      Wt = 1,
      at = 1
    W !== void 0 &&
      Q !== void 0 &&
      ((Wt = Q / W),
      (at = At / Y),
      (Ot = ((Lt.width / W) * Q) / W),
      (jt = ((Lt.height / Y) * At) / Y)),
      $ === void 0 && (($ = j), (et = E), (j = 0), (E = 0)),
      W !== void 0 && Q === void 0 && ((Q = W), (At = Y)),
      W === void 0 && Q === void 0 && ((Q = Lt.width), (At = Lt.height))
    for (
      var O,
        Xt = this.ctx.transform.decompose(),
        Mt = tt(Xt.rotate.shx),
        wt = new f(),
        xt = (wt = (wt = (wt = wt.multiply(Xt.translate)).multiply(Xt.skew)).multiply(
          Xt.scale
        )).applyToRectangle(new h($ - j * Wt, et - E * at, W * Ot, Y * jt)),
        kt = q.call(this, xt),
        Pt = [],
        qt = 0;
      qt < kt.length;
      qt += 1
    )
      Pt.indexOf(kt[qt]) === -1 && Pt.push(kt[qt])
    if ((Z(Pt), this.autoPaging))
      for (var Gt = Pt[0], $t = Pt[Pt.length - 1], te = Gt; te < $t + 1; te++) {
        this.pdf.setPage(te)
        var ie = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1],
          fe = te === 1 ? this.posY + this.margin[0] : this.margin[0],
          Ht = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
          ee = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2],
          It = te === 1 ? 0 : Ht + (te - 2) * ee
        if (this.ctx.clip_path.length !== 0) {
          var We = this.path
          ;(O = JSON.parse(JSON.stringify(this.ctx.clip_path))),
            (this.path = M(
              O,
              this.posX + this.margin[3],
              -It + fe + this.ctx.prevPageLastElemOffset
            )),
            dt.call(this, 'fill', !0),
            (this.path = We)
        }
        var oe = JSON.parse(JSON.stringify(xt))
        oe = M([oe], this.posX + this.margin[3], -It + fe + this.ctx.prevPageLastElemOffset)[0]
        var vn = (te > Gt || te < $t) && F.call(this)
        vn &&
          (this.pdf.saveGraphicsState(),
          this.pdf.rect(this.margin[3], this.margin[0], ie, ee, null).clip().discardPath()),
          this.pdf.addImage(w, 'JPEG', oe.x, oe.y, oe.w, oe.h, null, null, Mt),
          vn && this.pdf.restoreGraphicsState()
      }
    else this.pdf.addImage(w, 'JPEG', xt.x, xt.y, xt.w, xt.h, null, null, Mt)
  }
  var q = function (w, j, E) {
      var W = []
      ;(j = j || this.pdf.internal.pageSize.width),
        (E = E || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2])
      var Y = this.posY + this.ctx.prevPageLastElemOffset
      switch (w.type) {
        default:
        case 'mt':
        case 'lt':
          W.push(Math.floor((w.y + Y) / E) + 1)
          break
        case 'arc':
          W.push(Math.floor((w.y + Y - w.radius) / E) + 1),
            W.push(Math.floor((w.y + Y + w.radius) / E) + 1)
          break
        case 'qct':
          var $ = pt(this.ctx.lastPoint.x, this.ctx.lastPoint.y, w.x1, w.y1, w.x, w.y)
          W.push(Math.floor(($.y + Y) / E) + 1), W.push(Math.floor(($.y + $.h + Y) / E) + 1)
          break
        case 'bct':
          var et = ft(this.ctx.lastPoint.x, this.ctx.lastPoint.y, w.x1, w.y1, w.x2, w.y2, w.x, w.y)
          W.push(Math.floor((et.y + Y) / E) + 1), W.push(Math.floor((et.y + et.h + Y) / E) + 1)
          break
        case 'rect':
          W.push(Math.floor((w.y + Y) / E) + 1), W.push(Math.floor((w.y + w.h + Y) / E) + 1)
      }
      for (var Q = 0; Q < W.length; Q += 1)
        for (; this.pdf.internal.getNumberOfPages() < W[Q]; ) S.call(this)
      return W
    },
    S = function () {
      var w = this.fillStyle,
        j = this.strokeStyle,
        E = this.font,
        W = this.lineCap,
        Y = this.lineWidth,
        $ = this.lineJoin
      this.pdf.addPage(),
        (this.fillStyle = w),
        (this.strokeStyle = j),
        (this.font = E),
        (this.lineCap = W),
        (this.lineWidth = Y),
        (this.lineJoin = $)
    },
    M = function (w, j, E) {
      for (var W = 0; W < w.length; W++)
        switch (w[W].type) {
          case 'bct':
            ;(w[W].x2 += j), (w[W].y2 += E)
          case 'qct':
            ;(w[W].x1 += j), (w[W].y1 += E)
          case 'mt':
          case 'lt':
          case 'arc':
          default:
            ;(w[W].x += j), (w[W].y += E)
        }
      return w
    },
    Z = function (w) {
      return w.sort(function (j, E) {
        return j - E
      })
    },
    st = function (w, j) {
      for (
        var E,
          W,
          Y = this.fillStyle,
          $ = this.strokeStyle,
          et = this.lineCap,
          Q = this.lineWidth,
          At = Math.abs(Q * this.ctx.transform.scaleX),
          Lt = this.lineJoin,
          Ot = JSON.parse(JSON.stringify(this.path)),
          jt = JSON.parse(JSON.stringify(this.path)),
          Wt = [],
          at = 0;
        at < jt.length;
        at++
      )
        if (jt[at].x !== void 0)
          for (var O = q.call(this, jt[at]), Xt = 0; Xt < O.length; Xt += 1)
            Wt.indexOf(O[Xt]) === -1 && Wt.push(O[Xt])
      for (var Mt = 0; Mt < Wt.length; Mt++)
        for (; this.pdf.internal.getNumberOfPages() < Wt[Mt]; ) S.call(this)
      if ((Z(Wt), this.autoPaging))
        for (var wt = Wt[0], xt = Wt[Wt.length - 1], kt = wt; kt < xt + 1; kt++) {
          this.pdf.setPage(kt),
            (this.fillStyle = Y),
            (this.strokeStyle = $),
            (this.lineCap = et),
            (this.lineWidth = At),
            (this.lineJoin = Lt)
          var Pt = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1],
            qt = kt === 1 ? this.posY + this.margin[0] : this.margin[0],
            Gt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
            $t = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2],
            te = kt === 1 ? 0 : Gt + (kt - 2) * $t
          if (this.ctx.clip_path.length !== 0) {
            var ie = this.path
            ;(E = JSON.parse(JSON.stringify(this.ctx.clip_path))),
              (this.path = M(
                E,
                this.posX + this.margin[3],
                -te + qt + this.ctx.prevPageLastElemOffset
              )),
              dt.call(this, w, !0),
              (this.path = ie)
          }
          if (
            ((W = JSON.parse(JSON.stringify(Ot))),
            (this.path = M(
              W,
              this.posX + this.margin[3],
              -te + qt + this.ctx.prevPageLastElemOffset
            )),
            j === !1 || kt === 0)
          ) {
            var fe = (kt > wt || kt < xt) && F.call(this)
            fe &&
              (this.pdf.saveGraphicsState(),
              this.pdf.rect(this.margin[3], this.margin[0], Pt, $t, null).clip().discardPath()),
              dt.call(this, w, j),
              fe && this.pdf.restoreGraphicsState()
          }
          this.lineWidth = Q
        }
      else (this.lineWidth = At), dt.call(this, w, j), (this.lineWidth = Q)
      this.path = Ot
    },
    dt = function (w, j) {
      if ((w !== 'stroke' || j || !B.call(this)) && (w === 'stroke' || j || !p.call(this))) {
        for (var E, W, Y = [], $ = this.path, et = 0; et < $.length; et++) {
          var Q = $[et]
          switch (Q.type) {
            case 'begin':
              Y.push({ begin: !0 })
              break
            case 'close':
              Y.push({ close: !0 })
              break
            case 'mt':
              Y.push({ start: Q, deltas: [], abs: [] })
              break
            case 'lt':
              var At = Y.length
              if (
                $[et - 1] &&
                !isNaN($[et - 1].x) &&
                ((E = [Q.x - $[et - 1].x, Q.y - $[et - 1].y]), At > 0)
              ) {
                for (; At >= 0; At--)
                  if (Y[At - 1].close !== !0 && Y[At - 1].begin !== !0) {
                    Y[At - 1].deltas.push(E), Y[At - 1].abs.push(Q)
                    break
                  }
              }
              break
            case 'bct':
              ;(E = [
                Q.x1 - $[et - 1].x,
                Q.y1 - $[et - 1].y,
                Q.x2 - $[et - 1].x,
                Q.y2 - $[et - 1].y,
                Q.x - $[et - 1].x,
                Q.y - $[et - 1].y
              ]),
                Y[Y.length - 1].deltas.push(E)
              break
            case 'qct':
              var Lt = $[et - 1].x + (2 / 3) * (Q.x1 - $[et - 1].x),
                Ot = $[et - 1].y + (2 / 3) * (Q.y1 - $[et - 1].y),
                jt = Q.x + (2 / 3) * (Q.x1 - Q.x),
                Wt = Q.y + (2 / 3) * (Q.y1 - Q.y),
                at = Q.x,
                O = Q.y
              ;(E = [
                Lt - $[et - 1].x,
                Ot - $[et - 1].y,
                jt - $[et - 1].x,
                Wt - $[et - 1].y,
                at - $[et - 1].x,
                O - $[et - 1].y
              ]),
                Y[Y.length - 1].deltas.push(E)
              break
            case 'arc':
              Y.push({ deltas: [], abs: [], arc: !0 }),
                Array.isArray(Y[Y.length - 1].abs) && Y[Y.length - 1].abs.push(Q)
          }
        }
        W = j ? null : w === 'stroke' ? 'stroke' : 'fill'
        for (var Xt = !1, Mt = 0; Mt < Y.length; Mt++)
          if (Y[Mt].arc)
            for (var wt = Y[Mt].abs, xt = 0; xt < wt.length; xt++) {
              var kt = wt[xt]
              kt.type === 'arc'
                ? G.call(
                    this,
                    kt.x,
                    kt.y,
                    kt.radius,
                    kt.startAngle,
                    kt.endAngle,
                    kt.counterclockwise,
                    void 0,
                    j,
                    !Xt
                  )
                : H.call(this, kt.x, kt.y),
                (Xt = !0)
            }
          else if (Y[Mt].close === !0) this.pdf.internal.out('h'), (Xt = !1)
          else if (Y[Mt].begin !== !0) {
            var Pt = Y[Mt].start.x,
              qt = Y[Mt].start.y
            R.call(this, Y[Mt].deltas, Pt, qt), (Xt = !0)
          }
        W && vt.call(this, W), j && bt.call(this)
      }
    },
    Nt = function (w) {
      var j = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor,
        E = j * (this.pdf.internal.getLineHeightFactor() - 1)
      switch (this.ctx.textBaseline) {
        case 'bottom':
          return w - E
        case 'top':
          return w + j - E
        case 'hanging':
          return w + j - 2 * E
        case 'middle':
          return w + j / 2 - E
        case 'ideographic':
          return w
        case 'alphabetic':
        default:
          return w
      }
    },
    rt = function (w) {
      return (
        w +
        (this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor) *
          (this.pdf.internal.getLineHeightFactor() - 1)
      )
    }
  ;(N.prototype.createLinearGradient = function () {
    var w = function () {}
    return (
      (w.colorStops = []),
      (w.addColorStop = function (j, E) {
        this.colorStops.push([j, E])
      }),
      (w.getColor = function () {
        return this.colorStops.length === 0 ? '#000000' : this.colorStops[0][1]
      }),
      (w.isCanvasGradient = !0),
      w
    )
  }),
    (N.prototype.createPattern = function () {
      return this.createLinearGradient()
    }),
    (N.prototype.createRadialGradient = function () {
      return this.createLinearGradient()
    })
  var G = function (w, j, E, W, Y, $, et, Q, At) {
      for (var Lt = ot.call(this, E, W, Y, $), Ot = 0; Ot < Lt.length; Ot++) {
        var jt = Lt[Ot]
        Ot === 0 && (At ? k.call(this, jt.x1 + w, jt.y1 + j) : H.call(this, jt.x1 + w, jt.y1 + j)),
          ct.call(this, w, j, jt.x2, jt.y2, jt.x3, jt.y3, jt.x4, jt.y4)
      }
      Q ? bt.call(this) : vt.call(this, et)
    },
    vt = function (w) {
      switch (w) {
        case 'stroke':
          this.pdf.internal.out('S')
          break
        case 'fill':
          this.pdf.internal.out('f')
      }
    },
    bt = function () {
      this.pdf.clip(), this.pdf.discardPath()
    },
    k = function (w, j) {
      this.pdf.internal.out(n(w) + ' ' + a(j) + ' m')
    },
    I = function (w) {
      var j
      switch (w.align) {
        case 'right':
        case 'end':
          j = 'right'
          break
        case 'center':
          j = 'center'
          break
        case 'left':
        case 'start':
        default:
          j = 'left'
      }
      var E = this.pdf.getTextDimensions(w.text),
        W = Nt.call(this, w.y),
        Y = rt.call(this, W) - E.h,
        $ = this.ctx.transform.applyToPoint(new l(w.x, W)),
        et = this.ctx.transform.decompose(),
        Q = new f()
      Q = (Q = (Q = Q.multiply(et.translate)).multiply(et.skew)).multiply(et.scale)
      for (
        var At,
          Lt,
          Ot,
          jt = this.ctx.transform.applyToRectangle(new h(w.x, W, E.w, E.h)),
          Wt = Q.applyToRectangle(new h(w.x, Y, E.w, E.h)),
          at = q.call(this, Wt),
          O = [],
          Xt = 0;
        Xt < at.length;
        Xt += 1
      )
        O.indexOf(at[Xt]) === -1 && O.push(at[Xt])
      if ((Z(O), this.autoPaging))
        for (var Mt = O[0], wt = O[O.length - 1], xt = Mt; xt < wt + 1; xt++) {
          this.pdf.setPage(xt)
          var kt = xt === 1 ? this.posY + this.margin[0] : this.margin[0],
            Pt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
            qt = this.pdf.internal.pageSize.height - this.margin[2],
            Gt = qt - this.margin[0],
            $t = this.pdf.internal.pageSize.width - this.margin[1],
            te = $t - this.margin[3],
            ie = xt === 1 ? 0 : Pt + (xt - 2) * Gt
          if (this.ctx.clip_path.length !== 0) {
            var fe = this.path
            ;(At = JSON.parse(JSON.stringify(this.ctx.clip_path))),
              (this.path = M(At, this.posX + this.margin[3], -1 * ie + kt)),
              dt.call(this, 'fill', !0),
              (this.path = fe)
          }
          var Ht = M(
            [JSON.parse(JSON.stringify(Wt))],
            this.posX + this.margin[3],
            -ie + kt + this.ctx.prevPageLastElemOffset
          )[0]
          w.scale >= 0.01 &&
            ((Lt = this.pdf.internal.getFontSize()),
            this.pdf.setFontSize(Lt * w.scale),
            (Ot = this.lineWidth),
            (this.lineWidth = Ot * w.scale))
          var ee = this.autoPaging !== 'text'
          if (ee || Ht.y + Ht.h <= qt) {
            if (ee || (Ht.y >= kt && Ht.x <= $t)) {
              var It = ee ? w.text : this.pdf.splitTextToSize(w.text, w.maxWidth || $t - Ht.x)[0],
                We = M(
                  [JSON.parse(JSON.stringify(jt))],
                  this.posX + this.margin[3],
                  -ie + kt + this.ctx.prevPageLastElemOffset
                )[0],
                oe = ee && (xt > Mt || xt < wt) && F.call(this)
              oe &&
                (this.pdf.saveGraphicsState(),
                this.pdf.rect(this.margin[3], this.margin[0], te, Gt, null).clip().discardPath()),
                this.pdf.text(It, We.x, We.y, {
                  angle: w.angle,
                  align: j,
                  renderingMode: w.renderingMode
                }),
                oe && this.pdf.restoreGraphicsState()
            }
          } else Ht.y < qt && (this.ctx.prevPageLastElemOffset += qt - Ht.y)
          w.scale >= 0.01 && (this.pdf.setFontSize(Lt), (this.lineWidth = Ot))
        }
      else
        w.scale >= 0.01 &&
          ((Lt = this.pdf.internal.getFontSize()),
          this.pdf.setFontSize(Lt * w.scale),
          (Ot = this.lineWidth),
          (this.lineWidth = Ot * w.scale)),
          this.pdf.text(w.text, $.x + this.posX, $.y + this.posY, {
            angle: w.angle,
            align: j,
            renderingMode: w.renderingMode,
            maxWidth: w.maxWidth
          }),
          w.scale >= 0.01 && (this.pdf.setFontSize(Lt), (this.lineWidth = Ot))
    },
    H = function (w, j, E, W) {
      ;(E = E || 0), (W = W || 0), this.pdf.internal.out(n(w + E) + ' ' + a(j + W) + ' l')
    },
    R = function (w, j, E) {
      return this.pdf.lines(w, j, E, null, null)
    },
    ct = function (w, j, E, W, Y, $, et, Q) {
      this.pdf.internal.out(
        [e(u(E + w)), e(o(W + j)), e(u(Y + w)), e(o($ + j)), e(u(et + w)), e(o(Q + j)), 'c'].join(
          ' '
        )
      )
    },
    ot = function (w, j, E, W) {
      for (var Y = 2 * Math.PI, $ = Math.PI / 2; j > E; ) j -= Y
      var et = Math.abs(E - j)
      et < Y && W && (et = Y - et)
      for (var Q = [], At = W ? -1 : 1, Lt = j; et > 1e-5; ) {
        var Ot = Lt + At * Math.min(et, $)
        Q.push(mt.call(this, w, Lt, Ot)), (et -= Math.abs(Ot - Lt)), (Lt = Ot)
      }
      return Q
    },
    mt = function (w, j, E) {
      var W = (E - j) / 2,
        Y = w * Math.cos(W),
        $ = w * Math.sin(W),
        et = Y,
        Q = -$,
        At = et * et + Q * Q,
        Lt = At + et * Y + Q * $,
        Ot = ((4 / 3) * (Math.sqrt(2 * At * Lt) - Lt)) / (et * $ - Q * Y),
        jt = et - Ot * Q,
        Wt = Q + Ot * et,
        at = jt,
        O = -Wt,
        Xt = W + j,
        Mt = Math.cos(Xt),
        wt = Math.sin(Xt)
      return {
        x1: w * Math.cos(j),
        y1: w * Math.sin(j),
        x2: jt * Mt - Wt * wt,
        y2: jt * wt + Wt * Mt,
        x3: at * Mt - O * wt,
        y3: at * wt + O * Mt,
        x4: w * Math.cos(E),
        y4: w * Math.sin(E)
      }
    },
    tt = function (w) {
      return (180 * w) / Math.PI
    },
    pt = function (w, j, E, W, Y, $) {
      var et = w + 0.5 * (E - w),
        Q = j + 0.5 * (W - j),
        At = Y + 0.5 * (E - Y),
        Lt = $ + 0.5 * (W - $),
        Ot = Math.min(w, Y, et, At),
        jt = Math.max(w, Y, et, At),
        Wt = Math.min(j, $, Q, Lt),
        at = Math.max(j, $, Q, Lt)
      return new h(Ot, Wt, jt - Ot, at - Wt)
    },
    ft = function (w, j, E, W, Y, $, et, Q) {
      var At,
        Lt,
        Ot,
        jt,
        Wt,
        at,
        O,
        Xt,
        Mt,
        wt,
        xt,
        kt,
        Pt,
        qt,
        Gt = E - w,
        $t = W - j,
        te = Y - E,
        ie = $ - W,
        fe = et - Y,
        Ht = Q - $
      for (Lt = 0; Lt < 41; Lt++)
        (Mt =
          (O = (Ot = w + (At = Lt / 40) * Gt) + At * ((Wt = E + At * te) - Ot)) +
          At * (Wt + At * (Y + At * fe - Wt) - O)),
          (wt =
            (Xt = (jt = j + At * $t) + At * ((at = W + At * ie) - jt)) +
            At * (at + At * ($ + At * Ht - at) - Xt)),
          Lt == 0
            ? ((xt = Mt), (kt = wt), (Pt = Mt), (qt = wt))
            : ((xt = Math.min(xt, Mt)),
              (kt = Math.min(kt, wt)),
              (Pt = Math.max(Pt, Mt)),
              (qt = Math.max(qt, wt)))
      return new h(Math.round(xt), Math.round(kt), Math.round(Pt - xt), Math.round(qt - kt))
    },
    Et = function () {
      if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
        var w,
          j,
          E =
            ((w = this.ctx.lineDash),
            (j = this.ctx.lineDashOffset),
            JSON.stringify({ lineDash: w, lineDashOffset: j }))
        this.prevLineDash !== E &&
          (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset),
          (this.prevLineDash = E))
      }
    }
})(zt.API),
  (function (i) {
    var e = function (o) {
        var l, h, f, g, A, N, _, p, B, F
        for (
          /[^\x00-\xFF]/.test(o),
            h = [],
            f = 0,
            g = (o += l = '\0\0\0\0'.slice(o.length % 4 || 4)).length;
          g > f;
          f += 4
        )
          (A =
            (o.charCodeAt(f) << 24) +
            (o.charCodeAt(f + 1) << 16) +
            (o.charCodeAt(f + 2) << 8) +
            o.charCodeAt(f + 3)) !== 0
            ? ((N =
                (A =
                  ((A =
                    ((A = ((A = (A - (F = A % 85)) / 85) - (B = A % 85)) / 85) - (p = A % 85)) /
                    85) -
                    (_ = A % 85)) /
                  85) % 85),
              h.push(N + 33, _ + 33, p + 33, B + 33, F + 33))
            : h.push(122)
        return (
          (function (q, S) {
            for (var M = S; M > 0; M--) q.pop()
          })(h, l.length),
          String.fromCharCode.apply(String, h) + '~>'
        )
      },
      n = function (o) {
        var l,
          h,
          f,
          g,
          A,
          N = String,
          _ = 'length',
          p = 255,
          B = 'charCodeAt',
          F = 'slice',
          q = 'replace'
        for (
          o[F](-2),
            o = o[F](0, -2)[q](/\s/g, '')[q]('z', '!!!!!'),
            f = [],
            g = 0,
            A = (o += l = 'uuuuu'[F](o[_] % 5 || 5))[_];
          A > g;
          g += 5
        )
          (h =
            52200625 * (o[B](g) - 33) +
            614125 * (o[B](g + 1) - 33) +
            7225 * (o[B](g + 2) - 33) +
            85 * (o[B](g + 3) - 33) +
            (o[B](g + 4) - 33)),
            f.push(p & (h >> 24), p & (h >> 16), p & (h >> 8), p & h)
        return (
          (function (S, M) {
            for (var Z = M; Z > 0; Z--) S.pop()
          })(f, l[_]),
          N.fromCharCode.apply(N, f)
        )
      },
      a = function (o) {
        var l = new RegExp(/^([0-9A-Fa-f]{2})+$/)
        if (
          ((o = o.replace(/\s/g, '')).indexOf('>') !== -1 && (o = o.substr(0, o.indexOf('>'))),
          o.length % 2 && (o += '0'),
          l.test(o) === !1)
        )
          return ''
        for (var h = '', f = 0; f < o.length; f += 2)
          h += String.fromCharCode('0x' + (o[f] + o[f + 1]))
        return h
      },
      u = function (o) {
        for (var l = new Uint8Array(o.length), h = o.length; h--; ) l[h] = o.charCodeAt(h)
        return (o = (l = Go(l)).reduce(function (f, g) {
          return f + String.fromCharCode(g)
        }, ''))
      }
    i.processDataByFilters = function (o, l) {
      var h = 0,
        f = o || '',
        g = []
      for (typeof (l = l || []) == 'string' && (l = [l]), h = 0; h < l.length; h += 1)
        switch (l[h]) {
          case 'ASCII85Decode':
          case '/ASCII85Decode':
            ;(f = n(f)), g.push('/ASCII85Encode')
            break
          case 'ASCII85Encode':
          case '/ASCII85Encode':
            ;(f = e(f)), g.push('/ASCII85Decode')
            break
          case 'ASCIIHexDecode':
          case '/ASCIIHexDecode':
            ;(f = a(f)), g.push('/ASCIIHexEncode')
            break
          case 'ASCIIHexEncode':
          case '/ASCIIHexEncode':
            ;(f =
              f
                .split('')
                .map(function (A) {
                  return ('0' + A.charCodeAt().toString(16)).slice(-2)
                })
                .join('') + '>'),
              g.push('/ASCIIHexDecode')
            break
          case 'FlateEncode':
          case '/FlateEncode':
            ;(f = u(f)), g.push('/FlateDecode')
            break
          default:
            throw new Error('The filter: "' + l[h] + '" is not implemented')
        }
      return { data: f, reverseChain: g.reverse().join(' ') }
    }
  })(zt.API),
  (function (i) {
    ;(i.loadFile = function (e, n, a) {
      return (function (u, o, l) {
        ;(o = o !== !1), (l = typeof l == 'function' ? l : function () {})
        var h = void 0
        try {
          h = (function (f, g, A) {
            var N = new XMLHttpRequest(),
              _ = 0,
              p = function (B) {
                var F = B.length,
                  q = [],
                  S = String.fromCharCode
                for (_ = 0; _ < F; _ += 1) q.push(S(255 & B.charCodeAt(_)))
                return q.join('')
              }
            if (
              (N.open('GET', f, !g),
              N.overrideMimeType('text/plain; charset=x-user-defined'),
              g === !1 &&
                (N.onload = function () {
                  N.status === 200 ? A(p(this.responseText)) : A(void 0)
                }),
              N.send(null),
              g && N.status === 200)
            )
              return p(N.responseText)
          })(u, o, l)
        } catch {}
        return h
      })(e, n, a)
    }),
      (i.loadImageFile = i.loadFile)
  })(zt.API),
  (function (i) {
    function e() {
      return (
        Ut.html2canvas
          ? Promise.resolve(Ut.html2canvas)
          : Yo(() => import('./html2canvas.4d0ab5af.js'), [], import.meta.url)
      )
        .catch(function (l) {
          return Promise.reject(new Error('Could not load html2canvas: ' + l))
        })
        .then(function (l) {
          return l.default ? l.default : l
        })
    }
    function n() {
      return (
        Ut.DOMPurify
          ? Promise.resolve(Ut.DOMPurify)
          : Yo(() => import('./dompurify.952dcfce.js'), [], import.meta.url)
      )
        .catch(function (l) {
          return Promise.reject(new Error('Could not load dompurify: ' + l))
        })
        .then(function (l) {
          return l.default ? l.default : l
        })
    }
    var a = function (l) {
        var h = ve(l)
        return h === 'undefined'
          ? 'undefined'
          : h === 'string' || l instanceof String
          ? 'string'
          : h === 'number' || l instanceof Number
          ? 'number'
          : h === 'function' || l instanceof Function
          ? 'function'
          : l && l.constructor === Array
          ? 'array'
          : l && l.nodeType === 1
          ? 'element'
          : h === 'object'
          ? 'object'
          : 'unknown'
      },
      u = function (l, h) {
        var f = document.createElement(l)
        for (var g in (h.className && (f.className = h.className),
        h.innerHTML && h.dompurify && (f.innerHTML = h.dompurify.sanitize(h.innerHTML)),
        h.style))
          f.style[g] = h.style[g]
        return f
      },
      o = function l(h) {
        var f = Object.assign(l.convert(Promise.resolve()), JSON.parse(JSON.stringify(l.template))),
          g = l.convert(Promise.resolve(), f)
        return (g = (g = g.setProgress(1, l, 1, [l])).set(h))
      }
    ;((o.prototype = Object.create(Promise.prototype)).constructor = o),
      (o.convert = function (l, h) {
        return (l.__proto__ = h || o.prototype), l
      }),
      (o.template = {
        prop: {
          src: null,
          container: null,
          overlay: null,
          canvas: null,
          img: null,
          pdf: null,
          pageSize: null,
          callback: function () {}
        },
        progress: { val: 0, state: null, n: 0, stack: [] },
        opt: {
          filename: 'file.pdf',
          margin: [0, 0, 0, 0],
          enableLinks: !0,
          x: 0,
          y: 0,
          html2canvas: {},
          jsPDF: {},
          backgroundColor: 'transparent'
        }
      }),
      (o.prototype.from = function (l, h) {
        return this.then(function () {
          switch (
            (h =
              h ||
              (function (f) {
                switch (a(f)) {
                  case 'string':
                    return 'string'
                  case 'element':
                    return f.nodeName.toLowerCase() === 'canvas' ? 'canvas' : 'element'
                  default:
                    return 'unknown'
                }
              })(l))
          ) {
            case 'string':
              return this.then(n).then(function (f) {
                return this.set({ src: u('div', { innerHTML: l, dompurify: f }) })
              })
            case 'element':
              return this.set({ src: l })
            case 'canvas':
              return this.set({ canvas: l })
            case 'img':
              return this.set({ img: l })
            default:
              return this.error('Unknown source type.')
          }
        })
      }),
      (o.prototype.to = function (l) {
        switch (l) {
          case 'container':
            return this.toContainer()
          case 'canvas':
            return this.toCanvas()
          case 'img':
            return this.toImg()
          case 'pdf':
            return this.toPdf()
          default:
            return this.error('Invalid target.')
        }
      }),
      (o.prototype.toContainer = function () {
        return this.thenList([
          function () {
            return this.prop.src || this.error('Cannot duplicate - no source HTML.')
          },
          function () {
            return this.prop.pageSize || this.setPageSize()
          }
        ]).then(function () {
          var l = {
              position: 'relative',
              display: 'inline-block',
              width:
                (typeof this.opt.width != 'number' ||
                isNaN(this.opt.width) ||
                typeof this.opt.windowWidth != 'number' ||
                isNaN(this.opt.windowWidth)
                  ? Math.max(
                      this.prop.src.clientWidth,
                      this.prop.src.scrollWidth,
                      this.prop.src.offsetWidth
                    )
                  : this.opt.windowWidth) + 'px',
              left: 0,
              right: 0,
              top: 0,
              margin: 'auto',
              backgroundColor: this.opt.backgroundColor
            },
            h = (function f(g, A) {
              for (
                var N = g.nodeType === 3 ? document.createTextNode(g.nodeValue) : g.cloneNode(!1),
                  _ = g.firstChild;
                _;
                _ = _.nextSibling
              )
                (A !== !0 && _.nodeType === 1 && _.nodeName === 'SCRIPT') || N.appendChild(f(_, A))
              return (
                g.nodeType === 1 &&
                  (g.nodeName === 'CANVAS'
                    ? ((N.width = g.width),
                      (N.height = g.height),
                      N.getContext('2d').drawImage(g, 0, 0))
                    : (g.nodeName !== 'TEXTAREA' && g.nodeName !== 'SELECT') || (N.value = g.value),
                  N.addEventListener(
                    'load',
                    function () {
                      ;(N.scrollTop = g.scrollTop), (N.scrollLeft = g.scrollLeft)
                    },
                    !0
                  )),
                N
              )
            })(this.prop.src, this.opt.html2canvas.javascriptEnabled)
          h.tagName === 'BODY' &&
            (l.height =
              Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
              ) + 'px'),
            (this.prop.overlay = u('div', {
              className: 'html2pdf__overlay',
              style: {
                position: 'fixed',
                overflow: 'hidden',
                zIndex: 1e3,
                left: '-100000px',
                right: 0,
                bottom: 0,
                top: 0
              }
            })),
            (this.prop.container = u('div', { className: 'html2pdf__container', style: l })),
            this.prop.container.appendChild(h),
            this.prop.container.firstChild.appendChild(
              u('div', {
                style: {
                  clear: 'both',
                  border: '0 none transparent',
                  margin: 0,
                  padding: 0,
                  height: 0
                }
              })
            ),
            (this.prop.container.style.float = 'none'),
            this.prop.overlay.appendChild(this.prop.container),
            document.body.appendChild(this.prop.overlay),
            (this.prop.container.firstChild.style.position = 'relative'),
            (this.prop.container.height =
              Math.max(
                this.prop.container.firstChild.clientHeight,
                this.prop.container.firstChild.scrollHeight,
                this.prop.container.firstChild.offsetHeight
              ) + 'px')
        })
      }),
      (o.prototype.toCanvas = function () {
        var l = [
          function () {
            return document.body.contains(this.prop.container) || this.toContainer()
          }
        ]
        return this.thenList(l)
          .then(e)
          .then(function (h) {
            var f = Object.assign({}, this.opt.html2canvas)
            return delete f.onrendered, h(this.prop.container, f)
          })
          .then(function (h) {
            ;(this.opt.html2canvas.onrendered || function () {})(h),
              (this.prop.canvas = h),
              document.body.removeChild(this.prop.overlay)
          })
      }),
      (o.prototype.toContext2d = function () {
        var l = [
          function () {
            return document.body.contains(this.prop.container) || this.toContainer()
          }
        ]
        return this.thenList(l)
          .then(e)
          .then(function (h) {
            var f = this.opt.jsPDF,
              g = this.opt.fontFaces,
              A =
                typeof this.opt.width != 'number' ||
                isNaN(this.opt.width) ||
                typeof this.opt.windowWidth != 'number' ||
                isNaN(this.opt.windowWidth)
                  ? 1
                  : this.opt.width / this.opt.windowWidth,
              N = Object.assign(
                {
                  async: !0,
                  allowTaint: !0,
                  scale: A,
                  scrollX: this.opt.scrollX || 0,
                  scrollY: this.opt.scrollY || 0,
                  backgroundColor: '#ffffff',
                  imageTimeout: 15e3,
                  logging: !0,
                  proxy: null,
                  removeContainer: !0,
                  foreignObjectRendering: !1,
                  useCORS: !1
                },
                this.opt.html2canvas
              )
            if (
              (delete N.onrendered,
              (f.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging),
              (f.context2d.posX = this.opt.x),
              (f.context2d.posY = this.opt.y),
              (f.context2d.margin = this.opt.margin),
              (f.context2d.fontFaces = g),
              g)
            )
              for (var _ = 0; _ < g.length; ++_) {
                var p = g[_],
                  B = p.src.find(function (F) {
                    return F.format === 'truetype'
                  })
                B && f.addFont(B.url, p.ref.name, p.ref.style)
              }
            return (
              (N.windowHeight = N.windowHeight || 0),
              (N.windowHeight =
                N.windowHeight == 0
                  ? Math.max(
                      this.prop.container.clientHeight,
                      this.prop.container.scrollHeight,
                      this.prop.container.offsetHeight
                    )
                  : N.windowHeight),
              f.context2d.save(!0),
              h(this.prop.container, N)
            )
          })
          .then(function (h) {
            this.opt.jsPDF.context2d.restore(!0),
              (this.opt.html2canvas.onrendered || function () {})(h),
              (this.prop.canvas = h),
              document.body.removeChild(this.prop.overlay)
          })
      }),
      (o.prototype.toImg = function () {
        return this.thenList([
          function () {
            return this.prop.canvas || this.toCanvas()
          }
        ]).then(function () {
          var l = this.prop.canvas.toDataURL('image/' + this.opt.image.type, this.opt.image.quality)
          ;(this.prop.img = document.createElement('img')), (this.prop.img.src = l)
        })
      }),
      (o.prototype.toPdf = function () {
        return this.thenList([
          function () {
            return this.toContext2d()
          }
        ]).then(function () {
          this.prop.pdf = this.prop.pdf || this.opt.jsPDF
        })
      }),
      (o.prototype.output = function (l, h, f) {
        return (f = f || 'pdf').toLowerCase() === 'img' || f.toLowerCase() === 'image'
          ? this.outputImg(l, h)
          : this.outputPdf(l, h)
      }),
      (o.prototype.outputPdf = function (l, h) {
        return this.thenList([
          function () {
            return this.prop.pdf || this.toPdf()
          }
        ]).then(function () {
          return this.prop.pdf.output(l, h)
        })
      }),
      (o.prototype.outputImg = function (l) {
        return this.thenList([
          function () {
            return this.prop.img || this.toImg()
          }
        ]).then(function () {
          switch (l) {
            case void 0:
            case 'img':
              return this.prop.img
            case 'datauristring':
            case 'dataurlstring':
              return this.prop.img.src
            case 'datauri':
            case 'dataurl':
              return (document.location.href = this.prop.img.src)
            default:
              throw 'Image output type "' + l + '" is not supported.'
          }
        })
      }),
      (o.prototype.save = function (l) {
        return this.thenList([
          function () {
            return this.prop.pdf || this.toPdf()
          }
        ])
          .set(l ? { filename: l } : null)
          .then(function () {
            this.prop.pdf.save(this.opt.filename)
          })
      }),
      (o.prototype.doCallback = function () {
        return this.thenList([
          function () {
            return this.prop.pdf || this.toPdf()
          }
        ]).then(function () {
          this.prop.callback(this.prop.pdf)
        })
      }),
      (o.prototype.set = function (l) {
        if (a(l) !== 'object') return this
        var h = Object.keys(l || {}).map(function (f) {
          if (f in o.template.prop)
            return function () {
              this.prop[f] = l[f]
            }
          switch (f) {
            case 'margin':
              return this.setMargin.bind(this, l.margin)
            case 'jsPDF':
              return function () {
                return (this.opt.jsPDF = l.jsPDF), this.setPageSize()
              }
            case 'pageSize':
              return this.setPageSize.bind(this, l.pageSize)
            default:
              return function () {
                this.opt[f] = l[f]
              }
          }
        }, this)
        return this.then(function () {
          return this.thenList(h)
        })
      }),
      (o.prototype.get = function (l, h) {
        return this.then(function () {
          var f = l in o.template.prop ? this.prop[l] : this.opt[l]
          return h ? h(f) : f
        })
      }),
      (o.prototype.setMargin = function (l) {
        return this.then(function () {
          switch (a(l)) {
            case 'number':
              l = [l, l, l, l]
            case 'array':
              if ((l.length === 2 && (l = [l[0], l[1], l[0], l[1]]), l.length === 4)) break
            default:
              return this.error('Invalid margin array.')
          }
          this.opt.margin = l
        }).then(this.setPageSize)
      }),
      (o.prototype.setPageSize = function (l) {
        function h(f, g) {
          return Math.floor(((f * g) / 72) * 96)
        }
        return this.then(function () {
          ;(l = l || zt.getPageSize(this.opt.jsPDF)).hasOwnProperty('inner') ||
            ((l.inner = {
              width: l.width - this.opt.margin[1] - this.opt.margin[3],
              height: l.height - this.opt.margin[0] - this.opt.margin[2]
            }),
            (l.inner.px = { width: h(l.inner.width, l.k), height: h(l.inner.height, l.k) }),
            (l.inner.ratio = l.inner.height / l.inner.width)),
            (this.prop.pageSize = l)
        })
      }),
      (o.prototype.setProgress = function (l, h, f, g) {
        return (
          l != null && (this.progress.val = l),
          h != null && (this.progress.state = h),
          f != null && (this.progress.n = f),
          g != null && (this.progress.stack = g),
          (this.progress.ratio = this.progress.val / this.progress.state),
          this
        )
      }),
      (o.prototype.updateProgress = function (l, h, f, g) {
        return this.setProgress(
          l ? this.progress.val + l : null,
          h || null,
          f ? this.progress.n + f : null,
          g ? this.progress.stack.concat(g) : null
        )
      }),
      (o.prototype.then = function (l, h) {
        var f = this
        return this.thenCore(l, h, function (g, A) {
          return (
            f.updateProgress(null, null, 1, [g]),
            Promise.prototype.then
              .call(this, function (N) {
                return f.updateProgress(null, g), N
              })
              .then(g, A)
              .then(function (N) {
                return f.updateProgress(1), N
              })
          )
        })
      }),
      (o.prototype.thenCore = function (l, h, f) {
        ;(f = f || Promise.prototype.then), l && (l = l.bind(this)), h && (h = h.bind(this))
        var g =
            Promise.toString().indexOf('[native code]') !== -1 && Promise.name === 'Promise'
              ? this
              : o.convert(Object.assign({}, this), Promise.prototype),
          A = f.call(g, l, h)
        return o.convert(A, this.__proto__)
      }),
      (o.prototype.thenExternal = function (l, h) {
        return Promise.prototype.then.call(this, l, h)
      }),
      (o.prototype.thenList = function (l) {
        var h = this
        return (
          l.forEach(function (f) {
            h = h.thenCore(f)
          }),
          h
        )
      }),
      (o.prototype.catch = function (l) {
        l && (l = l.bind(this))
        var h = Promise.prototype.catch.call(this, l)
        return o.convert(h, this)
      }),
      (o.prototype.catchExternal = function (l) {
        return Promise.prototype.catch.call(this, l)
      }),
      (o.prototype.error = function (l) {
        return this.then(function () {
          throw new Error(l)
        })
      }),
      (o.prototype.using = o.prototype.set),
      (o.prototype.saveAs = o.prototype.save),
      (o.prototype.export = o.prototype.output),
      (o.prototype.run = o.prototype.then),
      (zt.getPageSize = function (l, h, f) {
        if (ve(l) === 'object') {
          var g = l
          ;(l = g.orientation), (h = g.unit || h), (f = g.format || f)
        }
        ;(h = h || 'mm'), (f = f || 'a4'), (l = ('' + (l || 'P')).toLowerCase())
        var A,
          N = ('' + f).toLowerCase(),
          _ = {
            a0: [2383.94, 3370.39],
            a1: [1683.78, 2383.94],
            a2: [1190.55, 1683.78],
            a3: [841.89, 1190.55],
            a4: [595.28, 841.89],
            a5: [419.53, 595.28],
            a6: [297.64, 419.53],
            a7: [209.76, 297.64],
            a8: [147.4, 209.76],
            a9: [104.88, 147.4],
            a10: [73.7, 104.88],
            b0: [2834.65, 4008.19],
            b1: [2004.09, 2834.65],
            b2: [1417.32, 2004.09],
            b3: [1000.63, 1417.32],
            b4: [708.66, 1000.63],
            b5: [498.9, 708.66],
            b6: [354.33, 498.9],
            b7: [249.45, 354.33],
            b8: [175.75, 249.45],
            b9: [124.72, 175.75],
            b10: [87.87, 124.72],
            c0: [2599.37, 3676.54],
            c1: [1836.85, 2599.37],
            c2: [1298.27, 1836.85],
            c3: [918.43, 1298.27],
            c4: [649.13, 918.43],
            c5: [459.21, 649.13],
            c6: [323.15, 459.21],
            c7: [229.61, 323.15],
            c8: [161.57, 229.61],
            c9: [113.39, 161.57],
            c10: [79.37, 113.39],
            dl: [311.81, 623.62],
            letter: [612, 792],
            'government-letter': [576, 756],
            legal: [612, 1008],
            'junior-legal': [576, 360],
            ledger: [1224, 792],
            tabloid: [792, 1224],
            'credit-card': [153, 243]
          }
        switch (h) {
          case 'pt':
            A = 1
            break
          case 'mm':
            A = 72 / 25.4
            break
          case 'cm':
            A = 72 / 2.54
            break
          case 'in':
            A = 72
            break
          case 'px':
            A = 0.75
            break
          case 'pc':
          case 'em':
            A = 12
            break
          case 'ex':
            A = 6
            break
          default:
            throw 'Invalid unit: ' + h
        }
        var p,
          B = 0,
          F = 0
        if (_.hasOwnProperty(N)) (B = _[N][1] / A), (F = _[N][0] / A)
        else
          try {
            ;(B = f[1]), (F = f[0])
          } catch {
            throw new Error('Invalid format: ' + f)
          }
        if (l === 'p' || l === 'portrait') (l = 'p'), F > B && ((p = F), (F = B), (B = p))
        else {
          if (l !== 'l' && l !== 'landscape') throw 'Invalid orientation: ' + l
          ;(l = 'l'), B > F && ((p = F), (F = B), (B = p))
        }
        return { width: F, height: B, unit: h, k: A, orientation: l }
      }),
      (i.html = function (l, h) {
        ;((h = h || {}).callback = h.callback || function () {}),
          (h.html2canvas = h.html2canvas || {}),
          (h.html2canvas.canvas = h.html2canvas.canvas || this.canvas),
          (h.jsPDF = h.jsPDF || this),
          (h.fontFaces = h.fontFaces ? h.fontFaces.map(Qo) : null)
        var f = new o(h)
        return h.worker ? f : f.from(l).doCallback()
      })
  })(zt.API),
  (zt.API.addJS = function (i) {
    return (
      (Gs = i),
      this.internal.events.subscribe('postPutResources', function () {
        ;(Ta = this.internal.newObject()),
          this.internal.out('<<'),
          this.internal.out('/Names [(EmbeddedJS) ' + (Ta + 1) + ' 0 R]'),
          this.internal.out('>>'),
          this.internal.out('endobj'),
          (Vs = this.internal.newObject()),
          this.internal.out('<<'),
          this.internal.out('/S /JavaScript'),
          this.internal.out('/JS (' + Gs + ')'),
          this.internal.out('>>'),
          this.internal.out('endobj')
      }),
      this.internal.events.subscribe('putCatalog', function () {
        Ta !== void 0 && Vs !== void 0 && this.internal.out('/Names <</JavaScript ' + Ta + ' 0 R>>')
      }),
      this
    )
  }),
  (function (i) {
    var e
    i.events.push([
      'postPutResources',
      function () {
        var n = this,
          a = /^(\d+) 0 obj$/
        if (this.outline.root.children.length > 0)
          for (var u = n.outline.render().split(/\r\n/), o = 0; o < u.length; o++) {
            var l = u[o],
              h = a.exec(l)
            if (h != null) {
              var f = h[1]
              n.internal.newObjectDeferredBegin(f, !1)
            }
            n.internal.write(l)
          }
        if (this.outline.createNamedDestinations) {
          var g = this.internal.pages.length,
            A = []
          for (o = 0; o < g; o++) {
            var N = n.internal.newObject()
            A.push(N)
            var _ = n.internal.getPageInfo(o + 1)
            n.internal.write('<< /D[' + _.objId + ' 0 R /XYZ null null null]>> endobj')
          }
          var p = n.internal.newObject()
          for (n.internal.write('<< /Names [ '), o = 0; o < A.length; o++)
            n.internal.write('(page_' + (o + 1) + ')' + A[o] + ' 0 R')
          n.internal.write(' ] >>', 'endobj'),
            (e = n.internal.newObject()),
            n.internal.write('<< /Dests ' + p + ' 0 R'),
            n.internal.write('>>', 'endobj')
        }
      }
    ]),
      i.events.push([
        'putCatalog',
        function () {
          this.outline.root.children.length > 0 &&
            (this.internal.write('/Outlines', this.outline.makeRef(this.outline.root)),
            this.outline.createNamedDestinations && this.internal.write('/Names ' + e + ' 0 R'))
        }
      ]),
      i.events.push([
        'initialized',
        function () {
          var n = this
          ;(n.outline = { createNamedDestinations: !1, root: { children: [] } }),
            (n.outline.add = function (a, u, o) {
              var l = { title: u, options: o, children: [] }
              return a == null && (a = this.root), a.children.push(l), l
            }),
            (n.outline.render = function () {
              return (
                (this.ctx = {}),
                (this.ctx.val = ''),
                (this.ctx.pdf = n),
                this.genIds_r(this.root),
                this.renderRoot(this.root),
                this.renderItems(this.root),
                this.ctx.val
              )
            }),
            (n.outline.genIds_r = function (a) {
              a.id = n.internal.newObjectDeferred()
              for (var u = 0; u < a.children.length; u++) this.genIds_r(a.children[u])
            }),
            (n.outline.renderRoot = function (a) {
              this.objStart(a),
                this.line('/Type /Outlines'),
                a.children.length > 0 &&
                  (this.line('/First ' + this.makeRef(a.children[0])),
                  this.line('/Last ' + this.makeRef(a.children[a.children.length - 1]))),
                this.line('/Count ' + this.count_r({ count: 0 }, a)),
                this.objEnd()
            }),
            (n.outline.renderItems = function (a) {
              for (
                var u = this.ctx.pdf.internal.getVerticalCoordinateString, o = 0;
                o < a.children.length;
                o++
              ) {
                var l = a.children[o]
                this.objStart(l),
                  this.line('/Title ' + this.makeString(l.title)),
                  this.line('/Parent ' + this.makeRef(a)),
                  o > 0 && this.line('/Prev ' + this.makeRef(a.children[o - 1])),
                  o < a.children.length - 1 &&
                    this.line('/Next ' + this.makeRef(a.children[o + 1])),
                  l.children.length > 0 &&
                    (this.line('/First ' + this.makeRef(l.children[0])),
                    this.line('/Last ' + this.makeRef(l.children[l.children.length - 1])))
                var h = (this.count = this.count_r({ count: 0 }, l))
                if ((h > 0 && this.line('/Count ' + h), l.options && l.options.pageNumber)) {
                  var f = n.internal.getPageInfo(l.options.pageNumber)
                  this.line('/Dest [' + f.objId + ' 0 R /XYZ 0 ' + u(0) + ' 0]')
                }
                this.objEnd()
              }
              for (var g = 0; g < a.children.length; g++) this.renderItems(a.children[g])
            }),
            (n.outline.line = function (a) {
              this.ctx.val +=
                a +
                `\r
`
            }),
            (n.outline.makeRef = function (a) {
              return a.id + ' 0 R'
            }),
            (n.outline.makeString = function (a) {
              return '(' + n.internal.pdfEscape(a) + ')'
            }),
            (n.outline.objStart = function (a) {
              this.ctx.val +=
                `\r
` +
                a.id +
                ` 0 obj\r
<<\r
`
            }),
            (n.outline.objEnd = function () {
              this.ctx.val += `>> \r
endobj\r
`
            }),
            (n.outline.count_r = function (a, u) {
              for (var o = 0; o < u.children.length; o++) a.count++, this.count_r(a, u.children[o])
              return a.count
            })
        }
      ])
  })(zt.API),
  (function (i) {
    var e = [192, 193, 194, 195, 196, 197, 198, 199]
    i.processJPEG = function (n, a, u, o, l, h) {
      var f,
        g = this.decode.DCT_DECODE,
        A = null
      if (
        typeof n == 'string' ||
        this.__addimage__.isArrayBuffer(n) ||
        this.__addimage__.isArrayBufferView(n)
      ) {
        switch (
          ((n = l || n),
          (n = this.__addimage__.isArrayBuffer(n) ? new Uint8Array(n) : n),
          (f = (function (N) {
            for (
              var _,
                p = 256 * N.charCodeAt(4) + N.charCodeAt(5),
                B = N.length,
                F = { width: 0, height: 0, numcomponents: 1 },
                q = 4;
              q < B;
              q += 2
            ) {
              if (((q += p), e.indexOf(N.charCodeAt(q + 1)) !== -1)) {
                ;(_ = 256 * N.charCodeAt(q + 5) + N.charCodeAt(q + 6)),
                  (F = {
                    width: 256 * N.charCodeAt(q + 7) + N.charCodeAt(q + 8),
                    height: _,
                    numcomponents: N.charCodeAt(q + 9)
                  })
                break
              }
              p = 256 * N.charCodeAt(q + 2) + N.charCodeAt(q + 3)
            }
            return F
          })(
            (n = this.__addimage__.isArrayBufferView(n)
              ? this.__addimage__.arrayBufferToBinaryString(n)
              : n)
          )).numcomponents)
        ) {
          case 1:
            h = this.color_spaces.DEVICE_GRAY
            break
          case 4:
            h = this.color_spaces.DEVICE_CMYK
            break
          case 3:
            h = this.color_spaces.DEVICE_RGB
        }
        A = {
          data: n,
          width: f.width,
          height: f.height,
          colorSpace: h,
          bitsPerComponent: 8,
          filter: g,
          index: a,
          alias: u
        }
      }
      return A
    }
  })(zt.API)
var di,
  za,
  Ys,
  Js,
  Xs,
  mu = (function () {
    var i, e, n
    function a(o) {
      var l, h, f, g, A, N, _, p, B, F, q, S, M, Z
      for (
        this.data = o,
          this.pos = 8,
          this.palette = [],
          this.imgData = [],
          this.transparency = {},
          this.animation = null,
          this.text = {},
          N = null;
        ;

      ) {
        switch (
          ((l = this.readUInt32()),
          (B = function () {
            var st, dt
            for (dt = [], st = 0; st < 4; ++st) dt.push(String.fromCharCode(this.data[this.pos++]))
            return dt
          }
            .call(this)
            .join('')))
        ) {
          case 'IHDR':
            ;(this.width = this.readUInt32()),
              (this.height = this.readUInt32()),
              (this.bits = this.data[this.pos++]),
              (this.colorType = this.data[this.pos++]),
              (this.compressionMethod = this.data[this.pos++]),
              (this.filterMethod = this.data[this.pos++]),
              (this.interlaceMethod = this.data[this.pos++])
            break
          case 'acTL':
            this.animation = {
              numFrames: this.readUInt32(),
              numPlays: this.readUInt32() || 1 / 0,
              frames: []
            }
            break
          case 'PLTE':
            this.palette = this.read(l)
            break
          case 'fcTL':
            N && this.animation.frames.push(N),
              (this.pos += 4),
              (N = {
                width: this.readUInt32(),
                height: this.readUInt32(),
                xOffset: this.readUInt32(),
                yOffset: this.readUInt32()
              }),
              (A = this.readUInt16()),
              (g = this.readUInt16() || 100),
              (N.delay = (1e3 * A) / g),
              (N.disposeOp = this.data[this.pos++]),
              (N.blendOp = this.data[this.pos++]),
              (N.data = [])
            break
          case 'IDAT':
          case 'fdAT':
            for (
              B === 'fdAT' && ((this.pos += 4), (l -= 4)),
                o = (N != null ? N.data : void 0) || this.imgData,
                S = 0;
              0 <= l ? S < l : S > l;
              0 <= l ? ++S : --S
            )
              o.push(this.data[this.pos++])
            break
          case 'tRNS':
            switch (((this.transparency = {}), this.colorType)) {
              case 3:
                if (
                  ((f = this.palette.length / 3),
                  (this.transparency.indexed = this.read(l)),
                  this.transparency.indexed.length > f)
                )
                  throw new Error('More transparent colors than palette size')
                if ((F = f - this.transparency.indexed.length) > 0)
                  for (M = 0; 0 <= F ? M < F : M > F; 0 <= F ? ++M : --M)
                    this.transparency.indexed.push(255)
                break
              case 0:
                this.transparency.grayscale = this.read(l)[0]
                break
              case 2:
                this.transparency.rgb = this.read(l)
            }
            break
          case 'tEXt':
            ;(_ = (q = this.read(l)).indexOf(0)),
              (p = String.fromCharCode.apply(String, q.slice(0, _))),
              (this.text[p] = String.fromCharCode.apply(String, q.slice(_ + 1)))
            break
          case 'IEND':
            return (
              N && this.animation.frames.push(N),
              (this.colors = function () {
                switch (this.colorType) {
                  case 0:
                  case 3:
                  case 4:
                    return 1
                  case 2:
                  case 6:
                    return 3
                }
              }.call(this)),
              (this.hasAlphaChannel = (Z = this.colorType) === 4 || Z === 6),
              (h = this.colors + (this.hasAlphaChannel ? 1 : 0)),
              (this.pixelBitlength = this.bits * h),
              (this.colorSpace = function () {
                switch (this.colors) {
                  case 1:
                    return 'DeviceGray'
                  case 3:
                    return 'DeviceRGB'
                }
              }.call(this)),
              void (this.imgData = new Uint8Array(this.imgData))
            )
          default:
            this.pos += l
        }
        if (((this.pos += 4), this.pos > this.data.length))
          throw new Error('Incomplete or corrupt PNG file')
      }
    }
    ;(a.prototype.read = function (o) {
      var l, h
      for (h = [], l = 0; 0 <= o ? l < o : l > o; 0 <= o ? ++l : --l) h.push(this.data[this.pos++])
      return h
    }),
      (a.prototype.readUInt32 = function () {
        return (
          (this.data[this.pos++] << 24) |
          (this.data[this.pos++] << 16) |
          (this.data[this.pos++] << 8) |
          this.data[this.pos++]
        )
      }),
      (a.prototype.readUInt16 = function () {
        return (this.data[this.pos++] << 8) | this.data[this.pos++]
      }),
      (a.prototype.decodePixels = function (o) {
        var l = this.pixelBitlength / 8,
          h = new Uint8Array(this.width * this.height * l),
          f = 0,
          g = this
        if ((o == null && (o = this.imgData), o.length === 0)) return new Uint8Array(0)
        function A(N, _, p, B) {
          var F,
            q,
            S,
            M,
            Z,
            st,
            dt,
            Nt,
            rt,
            G,
            vt,
            bt,
            k,
            I,
            H,
            R,
            ct,
            ot,
            mt,
            tt,
            pt,
            ft = Math.ceil((g.width - N) / p),
            Et = Math.ceil((g.height - _) / B),
            w = g.width == ft && g.height == Et
          for (
            I = l * ft, bt = w ? h : new Uint8Array(I * Et), st = o.length, k = 0, q = 0;
            k < Et && f < st;

          ) {
            switch (o[f++]) {
              case 0:
                for (M = ct = 0; ct < I; M = ct += 1) bt[q++] = o[f++]
                break
              case 1:
                for (M = ot = 0; ot < I; M = ot += 1)
                  (F = o[f++]), (Z = M < l ? 0 : bt[q - l]), (bt[q++] = (F + Z) % 256)
                break
              case 2:
                for (M = mt = 0; mt < I; M = mt += 1)
                  (F = o[f++]),
                    (S = (M - (M % l)) / l),
                    (H = k && bt[(k - 1) * I + S * l + (M % l)]),
                    (bt[q++] = (H + F) % 256)
                break
              case 3:
                for (M = tt = 0; tt < I; M = tt += 1)
                  (F = o[f++]),
                    (S = (M - (M % l)) / l),
                    (Z = M < l ? 0 : bt[q - l]),
                    (H = k && bt[(k - 1) * I + S * l + (M % l)]),
                    (bt[q++] = (F + Math.floor((Z + H) / 2)) % 256)
                break
              case 4:
                for (M = pt = 0; pt < I; M = pt += 1)
                  (F = o[f++]),
                    (S = (M - (M % l)) / l),
                    (Z = M < l ? 0 : bt[q - l]),
                    k === 0
                      ? (H = R = 0)
                      : ((H = bt[(k - 1) * I + S * l + (M % l)]),
                        (R = S && bt[(k - 1) * I + (S - 1) * l + (M % l)])),
                    (dt = Z + H - R),
                    (Nt = Math.abs(dt - Z)),
                    (G = Math.abs(dt - H)),
                    (vt = Math.abs(dt - R)),
                    (rt = Nt <= G && Nt <= vt ? Z : G <= vt ? H : R),
                    (bt[q++] = (F + rt) % 256)
                break
              default:
                throw new Error('Invalid filter algorithm: ' + o[f - 1])
            }
            if (!w) {
              var j = ((_ + k * B) * g.width + N) * l,
                E = k * I
              for (M = 0; M < ft; M += 1) {
                for (var W = 0; W < l; W += 1) h[j++] = bt[E++]
                j += (p - 1) * l
              }
            }
            k++
          }
        }
        return (
          (o = Jc(o)),
          g.interlaceMethod == 1
            ? (A(0, 0, 8, 8),
              A(4, 0, 8, 8),
              A(0, 4, 4, 8),
              A(2, 0, 4, 4),
              A(0, 2, 2, 4),
              A(1, 0, 2, 2),
              A(0, 1, 1, 2))
            : A(0, 0, 1, 1),
          h
        )
      }),
      (a.prototype.decodePalette = function () {
        var o, l, h, f, g, A, N, _, p
        for (
          h = this.palette,
            A = this.transparency.indexed || [],
            g = new Uint8Array((A.length || 0) + h.length),
            f = 0,
            o = 0,
            l = N = 0,
            _ = h.length;
          N < _;
          l = N += 3
        )
          (g[f++] = h[l]),
            (g[f++] = h[l + 1]),
            (g[f++] = h[l + 2]),
            (g[f++] = (p = A[o++]) != null ? p : 255)
        return g
      }),
      (a.prototype.copyToImageData = function (o, l) {
        var h, f, g, A, N, _, p, B, F, q, S
        if (
          ((f = this.colors),
          (F = null),
          (h = this.hasAlphaChannel),
          this.palette.length &&
            ((F =
              (S = this._decodedPalette) != null
                ? S
                : (this._decodedPalette = this.decodePalette())),
            (f = 4),
            (h = !0)),
          (B = (g = o.data || o).length),
          (N = F || l),
          (A = _ = 0),
          f === 1)
        )
          for (; A < B; )
            (p = F ? 4 * l[A / 4] : _),
              (q = N[p++]),
              (g[A++] = q),
              (g[A++] = q),
              (g[A++] = q),
              (g[A++] = h ? N[p++] : 255),
              (_ = p)
        else
          for (; A < B; )
            (p = F ? 4 * l[A / 4] : _),
              (g[A++] = N[p++]),
              (g[A++] = N[p++]),
              (g[A++] = N[p++]),
              (g[A++] = h ? N[p++] : 255),
              (_ = p)
      }),
      (a.prototype.decode = function () {
        var o
        return (
          (o = new Uint8Array(this.width * this.height * 4)),
          this.copyToImageData(o, this.decodePixels()),
          o
        )
      })
    var u = function () {
      if (Object.prototype.toString.call(Ut) === '[object Window]') {
        try {
          ;(e = Ut.document.createElement('canvas')), (n = e.getContext('2d'))
        } catch {
          return !1
        }
        return !0
      }
      return !1
    }
    return (
      u(),
      (i = function (o) {
        var l
        if (u() === !0)
          return (
            (n.width = o.width),
            (n.height = o.height),
            n.clearRect(0, 0, o.width, o.height),
            n.putImageData(o, 0, 0),
            ((l = new Image()).src = e.toDataURL()),
            l
          )
        throw new Error('This method requires a Browser with Canvas-capability.')
      }),
      (a.prototype.decodeFrames = function (o) {
        var l, h, f, g, A, N, _, p
        if (this.animation) {
          for (p = [], h = A = 0, N = (_ = this.animation.frames).length; A < N; h = ++A)
            (l = _[h]),
              (f = o.createImageData(l.width, l.height)),
              (g = this.decodePixels(new Uint8Array(l.data))),
              this.copyToImageData(f, g),
              (l.imageData = f),
              p.push((l.image = i(f)))
          return p
        }
      }),
      (a.prototype.renderFrame = function (o, l) {
        var h, f, g
        return (
          (h = (f = this.animation.frames)[l]),
          (g = f[l - 1]),
          l === 0 && o.clearRect(0, 0, this.width, this.height),
          (g != null ? g.disposeOp : void 0) === 1
            ? o.clearRect(g.xOffset, g.yOffset, g.width, g.height)
            : (g != null ? g.disposeOp : void 0) === 2 &&
              o.putImageData(g.imageData, g.xOffset, g.yOffset),
          h.blendOp === 0 && o.clearRect(h.xOffset, h.yOffset, h.width, h.height),
          o.drawImage(h.image, h.xOffset, h.yOffset)
        )
      }),
      (a.prototype.animate = function (o) {
        var l,
          h,
          f,
          g,
          A,
          N,
          _ = this
        return (
          (h = 0),
          (N = this.animation),
          (g = N.numFrames),
          (f = N.frames),
          (A = N.numPlays),
          (l = function () {
            var p, B
            if (((p = h++ % g), (B = f[p]), _.renderFrame(o, p), g > 1 && h / g < A))
              return (_.animation._timeout = setTimeout(l, B.delay))
          })()
        )
      }),
      (a.prototype.stopAnimation = function () {
        var o
        return clearTimeout((o = this.animation) != null ? o._timeout : void 0)
      }),
      (a.prototype.render = function (o) {
        var l, h
        return (
          o._png && o._png.stopAnimation(),
          (o._png = this),
          (o.width = this.width),
          (o.height = this.height),
          (l = o.getContext('2d')),
          this.animation
            ? (this.decodeFrames(l), this.animate(l))
            : ((h = l.createImageData(this.width, this.height)),
              this.copyToImageData(h, this.decodePixels()),
              l.putImageData(h, 0, 0))
        )
      }),
      a
    )
  })()
/**
 * @license
 *
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */ /**
 * @license
 * (c) Dean McNamee <dean@gmail.com>, 2013.
 *
 * https://github.com/deanm/omggif
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
 * including animation and compression.  It does not rely on any specific
 * underlying system, so should run in the browser, Node, or Plask.
 */ function vu(i) {
  var e = 0
  if (
    i[e++] !== 71 ||
    i[e++] !== 73 ||
    i[e++] !== 70 ||
    i[e++] !== 56 ||
    ((i[e++] + 1) & 253) != 56 ||
    i[e++] !== 97
  )
    throw new Error('Invalid GIF 87a/89a header.')
  var n = i[e++] | (i[e++] << 8),
    a = i[e++] | (i[e++] << 8),
    u = i[e++],
    o = u >> 7,
    l = 1 << ((7 & u) + 1)
  i[e++], i[e++]
  var h = null,
    f = null
  o && ((h = e), (f = l), (e += 3 * l))
  var g = !0,
    A = [],
    N = 0,
    _ = null,
    p = 0,
    B = null
  for (this.width = n, this.height = a; g && e < i.length; )
    switch (i[e++]) {
      case 33:
        switch (i[e++]) {
          case 255:
            if (
              i[e] !== 11 ||
              (i[e + 1] == 78 &&
                i[e + 2] == 69 &&
                i[e + 3] == 84 &&
                i[e + 4] == 83 &&
                i[e + 5] == 67 &&
                i[e + 6] == 65 &&
                i[e + 7] == 80 &&
                i[e + 8] == 69 &&
                i[e + 9] == 50 &&
                i[e + 10] == 46 &&
                i[e + 11] == 48 &&
                i[e + 12] == 3 &&
                i[e + 13] == 1 &&
                i[e + 16] == 0)
            )
              (e += 14), (B = i[e++] | (i[e++] << 8)), e++
            else
              for (e += 12; ; ) {
                if (!((k = i[e++]) >= 0)) throw Error('Invalid block size')
                if (k === 0) break
                e += k
              }
            break
          case 249:
            if (i[e++] !== 4 || i[e + 4] !== 0) throw new Error('Invalid graphics extension block.')
            var F = i[e++]
            ;(N = i[e++] | (i[e++] << 8)),
              (_ = i[e++]),
              (1 & F) == 0 && (_ = null),
              (p = (F >> 2) & 7),
              e++
            break
          case 254:
            for (;;) {
              if (!((k = i[e++]) >= 0)) throw Error('Invalid block size')
              if (k === 0) break
              e += k
            }
            break
          default:
            throw new Error('Unknown graphic control label: 0x' + i[e - 1].toString(16))
        }
        break
      case 44:
        var q = i[e++] | (i[e++] << 8),
          S = i[e++] | (i[e++] << 8),
          M = i[e++] | (i[e++] << 8),
          Z = i[e++] | (i[e++] << 8),
          st = i[e++],
          dt = (st >> 6) & 1,
          Nt = 1 << ((7 & st) + 1),
          rt = h,
          G = f,
          vt = !1
        st >> 7 && ((vt = !0), (rt = e), (G = Nt), (e += 3 * Nt))
        var bt = e
        for (e++; ; ) {
          var k
          if (!((k = i[e++]) >= 0)) throw Error('Invalid block size')
          if (k === 0) break
          e += k
        }
        A.push({
          x: q,
          y: S,
          width: M,
          height: Z,
          has_local_palette: vt,
          palette_offset: rt,
          palette_size: G,
          data_offset: bt,
          data_length: e - bt,
          transparent_index: _,
          interlaced: !!dt,
          delay: N,
          disposal: p
        })
        break
      case 59:
        g = !1
        break
      default:
        throw new Error('Unknown gif block: 0x' + i[e - 1].toString(16))
    }
  ;(this.numFrames = function () {
    return A.length
  }),
    (this.loopCount = function () {
      return B
    }),
    (this.frameInfo = function (I) {
      if (I < 0 || I >= A.length) throw new Error('Frame index out of range.')
      return A[I]
    }),
    (this.decodeAndBlitFrameBGRA = function (I, H) {
      var R = this.frameInfo(I),
        ct = R.width * R.height,
        ot = new Uint8Array(ct)
      Ks(i, R.data_offset, ot, ct)
      var mt = R.palette_offset,
        tt = R.transparent_index
      tt === null && (tt = 256)
      var pt = R.width,
        ft = n - pt,
        Et = pt,
        w = 4 * (R.y * n + R.x),
        j = 4 * ((R.y + R.height) * n + R.x),
        E = w,
        W = 4 * ft
      R.interlaced === !0 && (W += 4 * n * 7)
      for (var Y = 8, $ = 0, et = ot.length; $ < et; ++$) {
        var Q = ot[$]
        if (
          (Et === 0 &&
            ((Et = pt),
            (E += W) >= j &&
              ((W = 4 * ft + 4 * n * (Y - 1)), (E = w + (pt + ft) * (Y << 1)), (Y >>= 1))),
          Q === tt)
        )
          E += 4
        else {
          var At = i[mt + 3 * Q],
            Lt = i[mt + 3 * Q + 1],
            Ot = i[mt + 3 * Q + 2]
          ;(H[E++] = Ot), (H[E++] = Lt), (H[E++] = At), (H[E++] = 255)
        }
        --Et
      }
    }),
    (this.decodeAndBlitFrameRGBA = function (I, H) {
      var R = this.frameInfo(I),
        ct = R.width * R.height,
        ot = new Uint8Array(ct)
      Ks(i, R.data_offset, ot, ct)
      var mt = R.palette_offset,
        tt = R.transparent_index
      tt === null && (tt = 256)
      var pt = R.width,
        ft = n - pt,
        Et = pt,
        w = 4 * (R.y * n + R.x),
        j = 4 * ((R.y + R.height) * n + R.x),
        E = w,
        W = 4 * ft
      R.interlaced === !0 && (W += 4 * n * 7)
      for (var Y = 8, $ = 0, et = ot.length; $ < et; ++$) {
        var Q = ot[$]
        if (
          (Et === 0 &&
            ((Et = pt),
            (E += W) >= j &&
              ((W = 4 * ft + 4 * n * (Y - 1)), (E = w + (pt + ft) * (Y << 1)), (Y >>= 1))),
          Q === tt)
        )
          E += 4
        else {
          var At = i[mt + 3 * Q],
            Lt = i[mt + 3 * Q + 1],
            Ot = i[mt + 3 * Q + 2]
          ;(H[E++] = At), (H[E++] = Lt), (H[E++] = Ot), (H[E++] = 255)
        }
        --Et
      }
    })
}
function Ks(i, e, n, a) {
  for (
    var u = i[e++],
      o = 1 << u,
      l = o + 1,
      h = l + 1,
      f = u + 1,
      g = (1 << f) - 1,
      A = 0,
      N = 0,
      _ = 0,
      p = i[e++],
      B = new Int32Array(4096),
      F = null;
    ;

  ) {
    for (; A < 16 && p !== 0; ) (N |= i[e++] << A), (A += 8), p === 1 ? (p = i[e++]) : --p
    if (A < f) break
    var q = N & g
    if (((N >>= f), (A -= f), q !== o)) {
      if (q === l) break
      for (var S = q < h ? q : F, M = 0, Z = S; Z > o; ) (Z = B[Z] >> 8), ++M
      var st = Z
      if (_ + M + (S !== q ? 1 : 0) > a)
        return void me.log('Warning, gif stream longer than expected.')
      n[_++] = st
      var dt = (_ += M)
      for (S !== q && (n[_++] = st), Z = S; M--; ) (Z = B[Z]), (n[--dt] = 255 & Z), (Z >>= 8)
      F !== null &&
        h < 4096 &&
        ((B[h++] = (F << 8) | st), h >= g + 1 && f < 12 && (++f, (g = (g << 1) | 1))),
        (F = q)
    } else (h = l + 1), (g = (1 << (f = u + 1)) - 1), (F = null)
  }
  return _ !== a && me.log('Warning, gif stream shorter than expected.'), n
}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/ function Vo(i) {
  var e,
    n,
    a,
    u,
    o,
    l = Math.floor,
    h = new Array(64),
    f = new Array(64),
    g = new Array(64),
    A = new Array(64),
    N = new Array(65535),
    _ = new Array(65535),
    p = new Array(64),
    B = new Array(64),
    F = [],
    q = 0,
    S = 7,
    M = new Array(64),
    Z = new Array(64),
    st = new Array(64),
    dt = new Array(256),
    Nt = new Array(2048),
    rt = [
      0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11,
      18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21,
      34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63
    ],
    G = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    vt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    bt = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
    k = [
      1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35,
      66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39,
      40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87,
      88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122,
      131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163,
      164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196,
      197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228,
      229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250
    ],
    I = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    H = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    R = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
    ct = [
      0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161,
      177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26,
      38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86,
      87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122,
      130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162,
      163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195,
      196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228,
      229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250
    ]
  function ot(w, j) {
    for (var E = 0, W = 0, Y = new Array(), $ = 1; $ <= 16; $++) {
      for (var et = 1; et <= w[$]; et++)
        (Y[j[W]] = []), (Y[j[W]][0] = E), (Y[j[W]][1] = $), W++, E++
      E *= 2
    }
    return Y
  }
  function mt(w) {
    for (var j = w[0], E = w[1] - 1; E >= 0; )
      j & (1 << E) && (q |= 1 << S),
        E--,
        --S < 0 && (q == 255 ? (tt(255), tt(0)) : tt(q), (S = 7), (q = 0))
  }
  function tt(w) {
    F.push(w)
  }
  function pt(w) {
    tt((w >> 8) & 255), tt(255 & w)
  }
  function ft(w, j, E, W, Y) {
    for (
      var $,
        et = Y[0],
        Q = Y[240],
        At = (function (wt, xt) {
          var kt,
            Pt,
            qt,
            Gt,
            $t,
            te,
            ie,
            fe,
            Ht,
            ee,
            It = 0
          for (Ht = 0; Ht < 8; ++Ht) {
            ;(kt = wt[It]),
              (Pt = wt[It + 1]),
              (qt = wt[It + 2]),
              (Gt = wt[It + 3]),
              ($t = wt[It + 4]),
              (te = wt[It + 5]),
              (ie = wt[It + 6])
            var We = kt + (fe = wt[It + 7]),
              oe = kt - fe,
              vn = Pt + ie,
              pe = Pt - ie,
              we = qt + te,
              Mn = qt - te,
              ce = Gt + $t,
              xr = Gt - $t,
              Ne = We + ce,
              bn = We - ce,
              Yn = vn + we,
              Ae = vn - we
            ;(wt[It] = Ne + Yn), (wt[It + 4] = Ne - Yn)
            var Yt = 0.707106781 * (Ae + bn)
            ;(wt[It + 2] = bn + Yt), (wt[It + 6] = bn - Yt)
            var ue = 0.382683433 * ((Ne = xr + Mn) - (Ae = pe + oe)),
              Sr = 0.5411961 * Ne + ue,
              Ue = 1.306562965 * Ae + ue,
              En = 0.707106781 * (Yn = Mn + pe),
              qn = oe + En,
              Tt = oe - En
            ;(wt[It + 5] = Tt + Sr),
              (wt[It + 3] = Tt - Sr),
              (wt[It + 1] = qn + Ue),
              (wt[It + 7] = qn - Ue),
              (It += 8)
          }
          for (It = 0, Ht = 0; Ht < 8; ++Ht) {
            ;(kt = wt[It]),
              (Pt = wt[It + 8]),
              (qt = wt[It + 16]),
              (Gt = wt[It + 24]),
              ($t = wt[It + 32]),
              (te = wt[It + 40]),
              (ie = wt[It + 48])
            var yn = kt + (fe = wt[It + 56]),
              Dn = kt - fe,
              $e = Pt + ie,
              Ee = Pt - ie,
              je = qt + te,
              on = qt - te,
              Dr = Gt + $t,
              Jn = Gt - $t,
              wn = yn + Dr,
              Ln = yn - Dr,
              Nn = $e + je,
              Rn = $e - je
            ;(wt[It] = wn + Nn), (wt[It + 32] = wn - Nn)
            var hn = 0.707106781 * (Rn + Ln)
            ;(wt[It + 16] = Ln + hn), (wt[It + 48] = Ln - hn)
            var Tn = 0.382683433 * ((wn = Jn + on) - (Rn = Ee + Dn)),
              _r = 0.5411961 * wn + Tn,
              Rr = 1.306562965 * Rn + Tn,
              Tr = 0.707106781 * (Nn = on + Ee),
              zr = Dn + Tr,
              Ur = Dn - Tr
            ;(wt[It + 40] = Ur + _r),
              (wt[It + 24] = Ur - _r),
              (wt[It + 8] = zr + Rr),
              (wt[It + 56] = zr - Rr),
              It++
          }
          for (Ht = 0; Ht < 64; ++Ht)
            (ee = wt[Ht] * xt[Ht]), (p[Ht] = ee > 0 ? (ee + 0.5) | 0 : (ee - 0.5) | 0)
          return p
        })(w, j),
        Lt = 0;
      Lt < 64;
      ++Lt
    )
      B[rt[Lt]] = At[Lt]
    var Ot = B[0] - E
    ;(E = B[0]), Ot == 0 ? mt(W[0]) : (mt(W[_[($ = 32767 + Ot)]]), mt(N[$]))
    for (var jt = 63; jt > 0 && B[jt] == 0; ) jt--
    if (jt == 0) return mt(et), E
    for (var Wt, at = 1; at <= jt; ) {
      for (var O = at; B[at] == 0 && at <= jt; ) ++at
      var Xt = at - O
      if (Xt >= 16) {
        Wt = Xt >> 4
        for (var Mt = 1; Mt <= Wt; ++Mt) mt(Q)
        Xt &= 15
      }
      ;($ = 32767 + B[at]), mt(Y[(Xt << 4) + _[$]]), mt(N[$]), at++
    }
    return jt != 63 && mt(et), E
  }
  function Et(w) {
    ;(w = Math.min(Math.max(w, 1), 100)),
      o != w &&
        ((function (j) {
          for (
            var E = [
                16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40,
                57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24,
                35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98,
                112, 100, 103, 99
              ],
              W = 0;
            W < 64;
            W++
          ) {
            var Y = l((E[W] * j + 50) / 100)
            ;(Y = Math.min(Math.max(Y, 1), 255)), (h[rt[W]] = Y)
          }
          for (
            var $ = [
                17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99,
                99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
                99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
                99
              ],
              et = 0;
            et < 64;
            et++
          ) {
            var Q = l(($[et] * j + 50) / 100)
            ;(Q = Math.min(Math.max(Q, 1), 255)), (f[rt[et]] = Q)
          }
          for (
            var At = [
                1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379
              ],
              Lt = 0,
              Ot = 0;
            Ot < 8;
            Ot++
          )
            for (var jt = 0; jt < 8; jt++)
              (g[Lt] = 1 / (h[rt[Lt]] * At[Ot] * At[jt] * 8)),
                (A[Lt] = 1 / (f[rt[Lt]] * At[Ot] * At[jt] * 8)),
                Lt++
        })(w < 50 ? Math.floor(5e3 / w) : Math.floor(200 - 2 * w)),
        (o = w))
  }
  ;(this.encode = function (w, j) {
    j && Et(j),
      (F = new Array()),
      (q = 0),
      (S = 7),
      pt(65496),
      pt(65504),
      pt(16),
      tt(74),
      tt(70),
      tt(73),
      tt(70),
      tt(0),
      tt(1),
      tt(1),
      tt(0),
      pt(1),
      pt(1),
      tt(0),
      tt(0),
      (function () {
        pt(65499), pt(132), tt(0)
        for (var Pt = 0; Pt < 64; Pt++) tt(h[Pt])
        tt(1)
        for (var qt = 0; qt < 64; qt++) tt(f[qt])
      })(),
      (function (Pt, qt) {
        pt(65472),
          pt(17),
          tt(8),
          pt(qt),
          pt(Pt),
          tt(3),
          tt(1),
          tt(17),
          tt(0),
          tt(2),
          tt(17),
          tt(1),
          tt(3),
          tt(17),
          tt(1)
      })(w.width, w.height),
      (function () {
        pt(65476), pt(418), tt(0)
        for (var Pt = 0; Pt < 16; Pt++) tt(G[Pt + 1])
        for (var qt = 0; qt <= 11; qt++) tt(vt[qt])
        tt(16)
        for (var Gt = 0; Gt < 16; Gt++) tt(bt[Gt + 1])
        for (var $t = 0; $t <= 161; $t++) tt(k[$t])
        tt(1)
        for (var te = 0; te < 16; te++) tt(I[te + 1])
        for (var ie = 0; ie <= 11; ie++) tt(H[ie])
        tt(17)
        for (var fe = 0; fe < 16; fe++) tt(R[fe + 1])
        for (var Ht = 0; Ht <= 161; Ht++) tt(ct[Ht])
      })(),
      pt(65498),
      pt(12),
      tt(3),
      tt(1),
      tt(0),
      tt(2),
      tt(17),
      tt(3),
      tt(17),
      tt(0),
      tt(63),
      tt(0)
    var E = 0,
      W = 0,
      Y = 0
    ;(q = 0), (S = 7), (this.encode.displayName = '_encode_')
    for (
      var $,
        et,
        Q,
        At,
        Lt,
        Ot,
        jt,
        Wt,
        at,
        O = w.data,
        Xt = w.width,
        Mt = w.height,
        wt = 4 * Xt,
        xt = 0;
      xt < Mt;

    ) {
      for ($ = 0; $ < wt; ) {
        for (Lt = wt * xt + $, jt = -1, Wt = 0, at = 0; at < 64; at++)
          (Ot = Lt + (Wt = at >> 3) * wt + (jt = 4 * (7 & at))),
            xt + Wt >= Mt && (Ot -= wt * (xt + 1 + Wt - Mt)),
            $ + jt >= wt && (Ot -= $ + jt - wt + 4),
            (et = O[Ot++]),
            (Q = O[Ot++]),
            (At = O[Ot++]),
            (M[at] = ((Nt[et] + Nt[(Q + 256) >> 0] + Nt[(At + 512) >> 0]) >> 16) - 128),
            (Z[at] =
              ((Nt[(et + 768) >> 0] + Nt[(Q + 1024) >> 0] + Nt[(At + 1280) >> 0]) >> 16) - 128),
            (st[at] =
              ((Nt[(et + 1280) >> 0] + Nt[(Q + 1536) >> 0] + Nt[(At + 1792) >> 0]) >> 16) - 128)
        ;(E = ft(M, g, E, e, a)), (W = ft(Z, A, W, n, u)), (Y = ft(st, A, Y, n, u)), ($ += 32)
      }
      xt += 8
    }
    if (S >= 0) {
      var kt = []
      ;(kt[1] = S + 1), (kt[0] = (1 << (S + 1)) - 1), mt(kt)
    }
    return pt(65497), new Uint8Array(F)
  }),
    (i = i || 50),
    (function () {
      for (var w = String.fromCharCode, j = 0; j < 256; j++) dt[j] = w(j)
    })(),
    (e = ot(G, vt)),
    (n = ot(I, H)),
    (a = ot(bt, k)),
    (u = ot(R, ct)),
    (function () {
      for (var w = 1, j = 2, E = 1; E <= 15; E++) {
        for (var W = w; W < j; W++)
          (_[32767 + W] = E), (N[32767 + W] = []), (N[32767 + W][1] = E), (N[32767 + W][0] = W)
        for (var Y = -(j - 1); Y <= -w; Y++)
          (_[32767 + Y] = E),
            (N[32767 + Y] = []),
            (N[32767 + Y][1] = E),
            (N[32767 + Y][0] = j - 1 + Y)
        ;(w <<= 1), (j <<= 1)
      }
    })(),
    (function () {
      for (var w = 0; w < 256; w++)
        (Nt[w] = 19595 * w),
          (Nt[(w + 256) >> 0] = 38470 * w),
          (Nt[(w + 512) >> 0] = 7471 * w + 32768),
          (Nt[(w + 768) >> 0] = -11059 * w),
          (Nt[(w + 1024) >> 0] = -21709 * w),
          (Nt[(w + 1280) >> 0] = 32768 * w + 8421375),
          (Nt[(w + 1536) >> 0] = -27439 * w),
          (Nt[(w + 1792) >> 0] = -5329 * w)
    })(),
    Et(i)
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function jn(i, e) {
  if (
    ((this.pos = 0),
    (this.buffer = i),
    (this.datav = new DataView(i.buffer)),
    (this.is_with_alpha = !!e),
    (this.bottom_up = !0),
    (this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1])),
    (this.pos += 2),
    ['BM', 'BA', 'CI', 'CP', 'IC', 'PT'].indexOf(this.flag) === -1)
  )
    throw new Error('Invalid BMP File')
  this.parseHeader(), this.parseBGR()
}
function Zs(i) {
  function e(G) {
    if (!G) throw Error('assert :P')
  }
  function n(G, vt, bt) {
    for (var k = 0; 4 > k; k++) if (G[vt + k] != bt.charCodeAt(k)) return !0
    return !1
  }
  function a(G, vt, bt, k, I) {
    for (var H = 0; H < I; H++) G[vt + H] = bt[k + H]
  }
  function u(G, vt, bt, k) {
    for (var I = 0; I < k; I++) G[vt + I] = bt
  }
  function o(G) {
    return new Int32Array(G)
  }
  function l(G, vt) {
    for (var bt = [], k = 0; k < G; k++) bt.push(new vt())
    return bt
  }
  function h(G, vt) {
    var bt = []
    return (
      (function k(I, H, R) {
        for (
          var ct = R[H], ot = 0;
          ot < ct && (I.push(R.length > H + 1 ? [] : new vt()), !(R.length < H + 1));
          ot++
        )
          k(I[ot], H + 1, R)
      })(bt, 0, G),
      bt
    )
  }
  var f = function () {
    var G = this
    function vt(t, r) {
      for (var c = (1 << (r - 1)) >>> 0; t & c; ) c >>>= 1
      return c ? (t & (c - 1)) + c : t
    }
    function bt(t, r, c, d, m) {
      e(!(d % c))
      do t[r + (d -= c)] = m
      while (0 < d)
    }
    function k(t, r, c, d, m) {
      if ((e(2328 >= m), 512 >= m)) var b = o(512)
      else if ((b = o(m)) == null) return 0
      return (function (y, L, x, P, T, X) {
        var K,
          V,
          ht = L,
          nt = 1 << x,
          z = o(16),
          U = o(16)
        for (e(T != 0), e(P != null), e(y != null), e(0 < x), V = 0; V < T; ++V) {
          if (15 < P[V]) return 0
          ++z[P[V]]
        }
        if (z[0] == T) return 0
        for (U[1] = 0, K = 1; 15 > K; ++K) {
          if (z[K] > 1 << K) return 0
          U[K + 1] = U[K] + z[K]
        }
        for (V = 0; V < T; ++V) (K = P[V]), 0 < P[V] && (X[U[K]++] = V)
        if (U[15] == 1) return ((P = new I()).g = 0), (P.value = X[0]), bt(y, ht, 1, nt, P), nt
        var ut,
          gt = -1,
          lt = nt - 1,
          Ct = 0,
          St = 1,
          Rt = 1,
          _t = 1 << x
        for (V = 0, K = 1, T = 2; K <= x; ++K, T <<= 1) {
          if (((St += Rt <<= 1), 0 > (Rt -= z[K]))) return 0
          for (; 0 < z[K]; --z[K])
            ((P = new I()).g = K), (P.value = X[V++]), bt(y, ht + Ct, T, _t, P), (Ct = vt(Ct, K))
        }
        for (K = x + 1, T = 2; 15 >= K; ++K, T <<= 1) {
          if (((St += Rt <<= 1), 0 > (Rt -= z[K]))) return 0
          for (; 0 < z[K]; --z[K]) {
            if (((P = new I()), (Ct & lt) != gt)) {
              for (ht += _t, ut = 1 << ((gt = K) - x); 15 > gt && !(0 >= (ut -= z[gt])); )
                ++gt, (ut <<= 1)
              ;(nt += _t = 1 << (ut = gt - x)),
                (y[L + (gt = Ct & lt)].g = ut + x),
                (y[L + gt].value = ht - L - gt)
            }
            ;(P.g = K - x), (P.value = X[V++]), bt(y, ht + (Ct >> x), T, _t, P), (Ct = vt(Ct, K))
          }
        }
        return St != 2 * U[15] - 1 ? 0 : nt
      })(t, r, c, d, m, b)
    }
    function I() {
      this.value = this.g = 0
    }
    function H() {
      this.value = this.g = 0
    }
    function R() {
      ;(this.G = l(5, I)),
        (this.H = o(5)),
        (this.jc = this.Qb = this.qb = this.nd = 0),
        (this.pd = l(tn, H))
    }
    function ct(t, r, c, d) {
      e(t != null),
        e(r != null),
        e(2147483648 > d),
        (t.Ca = 254),
        (t.I = 0),
        (t.b = -8),
        (t.Ka = 0),
        (t.oa = r),
        (t.pa = c),
        (t.Jd = r),
        (t.Yc = c + d),
        (t.Zc = 4 <= d ? c + d - 4 + 1 : c),
        $(t)
    }
    function ot(t, r) {
      for (var c = 0; 0 < r--; ) c |= Q(t, 128) << r
      return c
    }
    function mt(t, r) {
      var c = ot(t, r)
      return et(t) ? -c : c
    }
    function tt(t, r, c, d) {
      var m,
        b = 0
      for (
        e(t != null),
          e(r != null),
          e(4294967288 > d),
          t.Sb = d,
          t.Ra = 0,
          t.u = 0,
          t.h = 0,
          4 < d && (d = 4),
          m = 0;
        m < d;
        ++m
      )
        b += r[c + m] << (8 * m)
      ;(t.Ra = b), (t.bb = d), (t.oa = r), (t.pa = c)
    }
    function pt(t) {
      for (; 8 <= t.u && t.bb < t.Sb; )
        (t.Ra >>>= 8), (t.Ra += (t.oa[t.pa + t.bb] << (ri - 8)) >>> 0), ++t.bb, (t.u -= 8)
      E(t) && ((t.h = 1), (t.u = 0))
    }
    function ft(t, r) {
      if ((e(0 <= r), !t.h && r <= ni)) {
        var c = j(t) & ei[r]
        return (t.u += r), pt(t), c
      }
      return (t.h = 1), (t.u = 0)
    }
    function Et() {
      ;(this.b = this.Ca = this.I = 0),
        (this.oa = []),
        (this.pa = 0),
        (this.Jd = []),
        (this.Yc = 0),
        (this.Zc = []),
        (this.Ka = 0)
    }
    function w() {
      ;(this.Ra = 0), (this.oa = []), (this.h = this.u = this.bb = this.Sb = this.pa = 0)
    }
    function j(t) {
      return (t.Ra >>> (t.u & (ri - 1))) >>> 0
    }
    function E(t) {
      return e(t.bb <= t.Sb), t.h || (t.bb == t.Sb && t.u > ri)
    }
    function W(t, r) {
      ;(t.u = r), (t.h = E(t))
    }
    function Y(t) {
      t.u >= Ri && (e(t.u >= Ri), pt(t))
    }
    function $(t) {
      e(t != null && t.oa != null),
        t.pa < t.Zc
          ? ((t.I = (t.oa[t.pa++] | (t.I << 8)) >>> 0), (t.b += 8))
          : (e(t != null && t.oa != null),
            t.pa < t.Yc
              ? ((t.b += 8), (t.I = t.oa[t.pa++] | (t.I << 8)))
              : t.Ka
              ? (t.b = 0)
              : ((t.I <<= 8), (t.b += 8), (t.Ka = 1)))
    }
    function et(t) {
      return ot(t, 1)
    }
    function Q(t, r) {
      var c = t.Ca
      0 > t.b && $(t)
      var d = t.b,
        m = (c * r) >>> 8,
        b = (t.I >>> d > m) + 0
      for (b ? ((c -= m), (t.I -= ((m + 1) << d) >>> 0)) : (c = m + 1), d = c, m = 0; 256 <= d; )
        (m += 8), (d >>= 8)
      return (d = 7 ^ (m + en[d])), (t.b -= d), (t.Ca = (c << d) - 1), b
    }
    function At(t, r, c) {
      ;(t[r + 0] = (c >> 24) & 255),
        (t[r + 1] = (c >> 16) & 255),
        (t[r + 2] = (c >> 8) & 255),
        (t[r + 3] = (c >> 0) & 255)
    }
    function Lt(t, r) {
      return (t[r + 0] << 0) | (t[r + 1] << 8)
    }
    function Ot(t, r) {
      return Lt(t, r) | (t[r + 2] << 16)
    }
    function jt(t, r) {
      return Lt(t, r) | (Lt(t, r + 2) << 16)
    }
    function Wt(t, r) {
      var c = 1 << r
      return (
        e(t != null), e(0 < r), (t.X = o(c)), t.X == null ? 0 : ((t.Mb = 32 - r), (t.Xa = r), 1)
      )
    }
    function at(t, r) {
      e(t != null), e(r != null), e(t.Xa == r.Xa), a(r.X, 0, t.X, 0, 1 << r.Xa)
    }
    function O() {
      ;(this.X = []), (this.Xa = this.Mb = 0)
    }
    function Xt(t, r, c, d) {
      e(c != null), e(d != null)
      var m = c[0],
        b = d[0]
      return (
        m == 0 && (m = (t * b + r / 2) / r),
        b == 0 && (b = (r * m + t / 2) / t),
        0 >= m || 0 >= b ? 0 : ((c[0] = m), (d[0] = b), 1)
      )
    }
    function Mt(t, r) {
      return (t + (1 << r) - 1) >>> r
    }
    function wt(t, r) {
      return (
        (((((4278255360 & t) + (4278255360 & r)) >>> 0) & 4278255360) +
          ((((16711935 & t) + (16711935 & r)) >>> 0) & 16711935)) >>>
        0
      )
    }
    function xt(t, r) {
      G[r] = function (c, d, m, b, y, L, x) {
        var P
        for (P = 0; P < y; ++P) {
          var T = G[t](L[x + P - 1], m, b + P)
          L[x + P] = wt(c[d + P], T)
        }
      }
    }
    function kt() {
      this.ud = this.hd = this.jd = 0
    }
    function Pt(t, r) {
      return (((4278124286 & (t ^ r)) >>> 1) + (t & r)) >>> 0
    }
    function qt(t) {
      return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0
    }
    function Gt(t, r) {
      return qt(t + ((t - r + 0.5) >> 1))
    }
    function $t(t, r, c) {
      return Math.abs(r - c) - Math.abs(t - c)
    }
    function te(t, r, c, d, m, b, y) {
      for (d = b[y - 1], c = 0; c < m; ++c) b[y + c] = d = wt(t[r + c], d)
    }
    function ie(t, r, c, d, m) {
      var b
      for (b = 0; b < c; ++b) {
        var y = t[r + b],
          L = (y >> 8) & 255,
          x = 16711935 & (x = (x = 16711935 & y) + ((L << 16) + L))
        d[m + b] = ((4278255360 & y) + x) >>> 0
      }
    }
    function fe(t, r) {
      ;(r.jd = (t >> 0) & 255), (r.hd = (t >> 8) & 255), (r.ud = (t >> 16) & 255)
    }
    function Ht(t, r, c, d, m, b) {
      var y
      for (y = 0; y < d; ++y) {
        var L = r[c + y],
          x = L >>> 8,
          P = L,
          T = 255 & (T = (T = L >>> 16) + ((((t.jd << 24) >> 24) * ((x << 24) >> 24)) >>> 5))
        ;(P =
          255 &
          (P =
            (P = P + ((((t.hd << 24) >> 24) * ((x << 24) >> 24)) >>> 5)) +
            ((((t.ud << 24) >> 24) * ((T << 24) >> 24)) >>> 5))),
          (m[b + y] = (4278255360 & L) + (T << 16) + P)
      }
    }
    function ee(t, r, c, d, m) {
      ;(G[r] = function (b, y, L, x, P, T, X, K, V) {
        for (x = X; x < K; ++x) for (X = 0; X < V; ++X) P[T++] = m(L[d(b[y++])])
      }),
        (G[t] = function (b, y, L, x, P, T, X) {
          var K = 8 >> b.b,
            V = b.Ea,
            ht = b.K[0],
            nt = b.w
          if (8 > K)
            for (b = (1 << b.b) - 1, nt = (1 << K) - 1; y < L; ++y) {
              var z,
                U = 0
              for (z = 0; z < V; ++z) z & b || (U = d(x[P++])), (T[X++] = m(ht[U & nt])), (U >>= K)
            }
          else G['VP8LMapColor' + c](x, P, ht, nt, T, X, y, L, V)
        })
    }
    function It(t, r, c, d, m) {
      for (c = r + c; r < c; ) {
        var b = t[r++]
        ;(d[m++] = (b >> 16) & 255), (d[m++] = (b >> 8) & 255), (d[m++] = (b >> 0) & 255)
      }
    }
    function We(t, r, c, d, m) {
      for (c = r + c; r < c; ) {
        var b = t[r++]
        ;(d[m++] = (b >> 16) & 255),
          (d[m++] = (b >> 8) & 255),
          (d[m++] = (b >> 0) & 255),
          (d[m++] = (b >> 24) & 255)
      }
    }
    function oe(t, r, c, d, m) {
      for (c = r + c; r < c; ) {
        var b = (((y = t[r++]) >> 16) & 240) | ((y >> 12) & 15),
          y = ((y >> 0) & 240) | ((y >> 28) & 15)
        ;(d[m++] = b), (d[m++] = y)
      }
    }
    function vn(t, r, c, d, m) {
      for (c = r + c; r < c; ) {
        var b = (((y = t[r++]) >> 16) & 248) | ((y >> 13) & 7),
          y = ((y >> 5) & 224) | ((y >> 3) & 31)
        ;(d[m++] = b), (d[m++] = y)
      }
    }
    function pe(t, r, c, d, m) {
      for (c = r + c; r < c; ) {
        var b = t[r++]
        ;(d[m++] = (b >> 0) & 255), (d[m++] = (b >> 8) & 255), (d[m++] = (b >> 16) & 255)
      }
    }
    function we(t, r, c, d, m, b) {
      if (b == 0)
        for (c = r + c; r < c; )
          At(
            d,
            (((b = t[r++])[0] >> 24) |
              ((b[1] >> 8) & 65280) |
              ((b[2] << 8) & 16711680) |
              (b[3] << 24)) >>>
              0
          ),
            (m += 32)
      else a(d, m, t, r, c)
    }
    function Mn(t, r) {
      ;(G[r][0] = G[t + '0']),
        (G[r][1] = G[t + '1']),
        (G[r][2] = G[t + '2']),
        (G[r][3] = G[t + '3']),
        (G[r][4] = G[t + '4']),
        (G[r][5] = G[t + '5']),
        (G[r][6] = G[t + '6']),
        (G[r][7] = G[t + '7']),
        (G[r][8] = G[t + '8']),
        (G[r][9] = G[t + '9']),
        (G[r][10] = G[t + '10']),
        (G[r][11] = G[t + '11']),
        (G[r][12] = G[t + '12']),
        (G[r][13] = G[t + '13']),
        (G[r][14] = G[t + '0']),
        (G[r][15] = G[t + '0'])
    }
    function ce(t) {
      return t == So || t == _o || t == xa || t == Po
    }
    function xr() {
      ;(this.eb = []), (this.size = this.A = this.fb = 0)
    }
    function Ne() {
      ;(this.y = []),
        (this.f = []),
        (this.ea = []),
        (this.F = []),
        (this.Tc =
          this.Ed =
          this.Cd =
          this.Fd =
          this.lb =
          this.Db =
          this.Ab =
          this.fa =
          this.J =
          this.W =
          this.N =
          this.O =
            0)
    }
    function bn() {
      ;(this.Rd = this.height = this.width = this.S = 0),
        (this.f = {}),
        (this.f.RGBA = new xr()),
        (this.f.kb = new Ne()),
        (this.sd = null)
    }
    function Yn() {
      ;(this.width = [0]),
        (this.height = [0]),
        (this.Pd = [0]),
        (this.Qd = [0]),
        (this.format = [0])
    }
    function Ae() {
      this.Id =
        this.fd =
        this.Md =
        this.hb =
        this.ib =
        this.da =
        this.bd =
        this.cd =
        this.j =
        this.v =
        this.Da =
        this.Sd =
        this.ob =
          0
    }
    function Yt(t) {
      return alert('todo:WebPSamplerProcessPlane'), t.T
    }
    function ue(t, r) {
      var c = t.T,
        d = r.ba.f.RGBA,
        m = d.eb,
        b = d.fb + t.ka * d.A,
        y = gn[r.ba.S],
        L = t.y,
        x = t.O,
        P = t.f,
        T = t.N,
        X = t.ea,
        K = t.W,
        V = r.cc,
        ht = r.dc,
        nt = r.Mc,
        z = r.Nc,
        U = t.ka,
        ut = t.ka + t.T,
        gt = t.U,
        lt = (gt + 1) >> 1
      for (
        U == 0
          ? y(L, x, null, null, P, T, X, K, P, T, X, K, m, b, null, null, gt)
          : (y(r.ec, r.fc, L, x, V, ht, nt, z, P, T, X, K, m, b - d.A, m, b, gt), ++c);
        U + 2 < ut;
        U += 2
      )
        (V = P),
          (ht = T),
          (nt = X),
          (z = K),
          (T += t.Rc),
          (K += t.Rc),
          (b += 2 * d.A),
          y(L, (x += 2 * t.fa) - t.fa, L, x, V, ht, nt, z, P, T, X, K, m, b - d.A, m, b, gt)
      return (
        (x += t.fa),
        t.j + ut < t.o
          ? (a(r.ec, r.fc, L, x, gt), a(r.cc, r.dc, P, T, lt), a(r.Mc, r.Nc, X, K, lt), c--)
          : 1 & ut || y(L, x, null, null, P, T, X, K, P, T, X, K, m, b + d.A, null, null, gt),
        c
      )
    }
    function Sr(t, r, c) {
      var d = t.F,
        m = [t.J]
      if (d != null) {
        var b = t.U,
          y = r.ba.S,
          L = y == Aa || y == xa
        r = r.ba.f.RGBA
        var x = [0],
          P = t.ka
        ;(x[0] = t.T),
          t.Kb &&
            (P == 0 ? --x[0] : (--P, (m[0] -= t.width)),
            t.j + t.ka + t.T == t.o && (x[0] = t.o - t.j - P))
        var T = r.eb
        ;(P = r.fb + P * r.A),
          (t = ba(d, m[0], t.width, b, x, T, P + (L ? 0 : 3), r.A)),
          e(c == x),
          t && ce(y) && dr(T, P, L, b, x, r.A)
      }
      return 0
    }
    function Ue(t) {
      var r = t.ma,
        c = r.ba.S,
        d = 11 > c,
        m = c == La || c == Na || c == Aa || c == xo || c == 12 || ce(c)
      if (
        ((r.memory = null), (r.Ib = null), (r.Jb = null), (r.Nd = null), !qi(r.Oa, t, m ? 11 : 12))
      )
        return 0
      if ((m && ce(c) && yt(), t.da)) alert('todo:use_scaling')
      else {
        if (d) {
          if (((r.Ib = Yt), t.Kb)) {
            if (((c = (t.U + 1) >> 1), (r.memory = o(t.U + 2 * c)), r.memory == null)) return 0
            ;(r.ec = r.memory),
              (r.fc = 0),
              (r.cc = r.ec),
              (r.dc = r.fc + t.U),
              (r.Mc = r.cc),
              (r.Nc = r.dc + c),
              (r.Ib = ue),
              yt()
          }
        } else alert('todo:EmitYUV')
        m && ((r.Jb = Sr), d && J())
      }
      if (d && !vs) {
        for (t = 0; 256 > t; ++t)
          (Ic[t] = (89858 * (t - 128) + _a) >> Sa),
            (jc[t] = -22014 * (t - 128) + _a),
            (Cc[t] = -45773 * (t - 128)),
            (Fc[t] = (113618 * (t - 128) + _a) >> Sa)
        for (t = Vi; t < Fo; ++t)
          (r = (76283 * (t - 16) + _a) >> Sa),
            (Oc[t - Vi] = sn(r, 255)),
            (Bc[t - Vi] = sn((r + 8) >> 4, 15))
        vs = 1
      }
      return 1
    }
    function En(t) {
      var r = t.ma,
        c = t.U,
        d = t.T
      return (
        e(!(1 & t.ka)),
        0 >= c || 0 >= d ? 0 : ((c = r.Ib(t, r)), r.Jb != null && r.Jb(t, r, c), (r.Dc += c), 1)
      )
    }
    function qn(t) {
      t.ma.memory = null
    }
    function Tt(t, r, c, d) {
      return ft(t, 8) != 47
        ? 0
        : ((r[0] = ft(t, 14) + 1),
          (c[0] = ft(t, 14) + 1),
          (d[0] = ft(t, 1)),
          ft(t, 3) != 0 ? 0 : !t.h)
    }
    function yn(t, r) {
      if (4 > t) return t + 1
      var c = (t - 2) >> 1
      return ((2 + (1 & t)) << c) + ft(r, c) + 1
    }
    function Dn(t, r) {
      return 120 < r ? r - 120 : 1 <= (c = ((c = gc[r - 1]) >> 4) * t + (8 - (15 & c))) ? c : 1
      var c
    }
    function $e(t, r, c) {
      var d = j(c),
        m = t[(r += 255 & d)].g - 8
      return (
        0 < m && (W(c, c.u + 8), (d = j(c)), (r += t[r].value), (r += d & ((1 << m) - 1))),
        W(c, c.u + t[r].g),
        t[r].value
      )
    }
    function Ee(t, r, c) {
      return (c.g += t.g), (c.value += (t.value << r) >>> 0), e(8 >= c.g), t.g
    }
    function je(t, r, c) {
      var d = t.xc
      return e((r = d == 0 ? 0 : t.vc[t.md * (c >> d) + (r >> d)]) < t.Wb), t.Ya[r]
    }
    function on(t, r, c, d) {
      var m = t.ab,
        b = t.c * r,
        y = t.C
      r = y + r
      var L = c,
        x = d
      for (d = t.Ta, c = t.Ua; 0 < m--; ) {
        var P = t.gc[m],
          T = y,
          X = r,
          K = L,
          V = x,
          ht = ((x = d), (L = c), P.Ea)
        switch ((e(T < X), e(X <= P.nc), P.hc)) {
          case 2:
            va(K, V, (X - T) * ht, x, L)
            break
          case 0:
            var nt = T,
              z = X,
              U = x,
              ut = L,
              gt = (_t = P).Ea
            nt == 0 &&
              (wo(K, V, null, null, 1, U, ut),
              te(K, V + 1, 0, 0, gt - 1, U, ut + 1),
              (V += gt),
              (ut += gt),
              ++nt)
            for (
              var lt = 1 << _t.b,
                Ct = lt - 1,
                St = Mt(gt, _t.b),
                Rt = _t.K,
                _t = _t.w + (nt >> _t.b) * St;
              nt < z;

            ) {
              var se = Rt,
                le = _t,
                ae = 1
              for (Ti(K, V, U, ut - gt, 1, U, ut); ae < gt; ) {
                var ne = (ae & ~Ct) + lt
                ne > gt && (ne = gt),
                  (0, ur[(se[le++] >> 8) & 15])(K, V + +ae, U, ut + ae - gt, ne - ae, U, ut + ae),
                  (ae = ne)
              }
              ;(V += gt), (ut += gt), ++nt & Ct || (_t += St)
            }
            X != P.nc && a(x, L - ht, x, L + (X - T - 1) * ht, ht)
            break
          case 1:
            for (
              ht = K,
                z = V,
                gt = (K = P.Ea) - (ut = K & ~(U = (V = 1 << P.b) - 1)),
                nt = Mt(K, P.b),
                lt = P.K,
                P = P.w + (T >> P.b) * nt;
              T < X;

            ) {
              for (Ct = lt, St = P, Rt = new kt(), _t = z + ut, se = z + K; z < _t; )
                fe(Ct[St++], Rt), fn(Rt, ht, z, V, x, L), (z += V), (L += V)
              z < se && (fe(Ct[St++], Rt), fn(Rt, ht, z, gt, x, L), (z += gt), (L += gt)),
                ++T & U || (P += nt)
            }
            break
          case 3:
            if (K == x && V == L && 0 < P.b) {
              for (
                z = x,
                  K = ht = L + (X - T) * ht - (ut = (X - T) * Mt(P.Ea, P.b)),
                  V = x,
                  U = L,
                  nt = [],
                  ut = (gt = ut) - 1;
                0 <= ut;
                --ut
              )
                nt[ut] = V[U + ut]
              for (ut = gt - 1; 0 <= ut; --ut) z[K + ut] = nt[ut]
              _n(P, T, X, x, ht, x, L)
            } else _n(P, T, X, K, V, x, L)
        }
        ;(L = d), (x = c)
      }
      x != c && a(d, c, L, x, b)
    }
    function Dr(t, r) {
      var c = t.V,
        d = t.Ba + t.c * t.C,
        m = r - t.C
      if ((e(r <= t.l.o), e(16 >= m), 0 < m)) {
        var b = t.l,
          y = t.Ta,
          L = t.Ua,
          x = b.width
        if (
          (on(t, m, c, d),
          (m = L = [L]),
          e((c = t.C) < (d = r)),
          e(b.v < b.va),
          d > b.o && (d = b.o),
          c < b.j)
        ) {
          var P = b.j - c
          ;(c = b.j), (m[0] += P * x)
        }
        if (
          (c >= d
            ? (c = 0)
            : ((m[0] += 4 * b.v), (b.ka = c - b.j), (b.U = b.va - b.v), (b.T = d - c), (c = 1)),
          c)
        ) {
          if (((L = L[0]), 11 > (c = t.ca).S)) {
            var T = c.f.RGBA,
              X = ((d = c.S), (m = b.U), (b = b.T), (P = T.eb), T.A),
              K = b
            for (T = T.fb + t.Ma * T.A; 0 < K--; ) {
              var V = y,
                ht = L,
                nt = m,
                z = P,
                U = T
              switch (d) {
                case wa:
                  Pn(V, ht, nt, z, U)
                  break
                case La:
                  lr(V, ht, nt, z, U)
                  break
                case So:
                  lr(V, ht, nt, z, U), dr(z, U, 0, nt, 1, 0)
                  break
                case ss:
                  ii(V, ht, nt, z, U)
                  break
                case Na:
                  we(V, ht, nt, z, U, 1)
                  break
                case _o:
                  we(V, ht, nt, z, U, 1), dr(z, U, 0, nt, 1, 0)
                  break
                case Aa:
                  we(V, ht, nt, z, U, 0)
                  break
                case xa:
                  we(V, ht, nt, z, U, 0), dr(z, U, 1, nt, 1, 0)
                  break
                case xo:
                  Un(V, ht, nt, z, U)
                  break
                case Po:
                  Un(V, ht, nt, z, U), si(z, U, nt, 1, 0)
                  break
                case cs:
                  $n(V, ht, nt, z, U)
                  break
                default:
                  e(0)
              }
              ;(L += x), (T += X)
            }
            t.Ma += b
          } else alert('todo:EmitRescaledRowsYUVA')
          e(t.Ma <= c.height)
        }
      }
      ;(t.C = r), e(t.C <= t.i)
    }
    function Jn(t) {
      var r
      if (0 < t.ua) return 0
      for (r = 0; r < t.Wb; ++r) {
        var c = t.Ya[r].G,
          d = t.Ya[r].H
        if (0 < c[1][d[1] + 0].g || 0 < c[2][d[2] + 0].g || 0 < c[3][d[3] + 0].g) return 0
      }
      return 1
    }
    function wn(t, r, c, d, m, b) {
      if (t.Z != 0) {
        var y = t.qd,
          L = t.rd
        for (e(gr[t.Z] != null); r < c; ++r)
          gr[t.Z](y, L, d, m, d, m, b), (y = d), (L = m), (m += b)
        ;(t.qd = y), (t.rd = L)
      }
    }
    function Ln(t, r) {
      var c = t.l.ma,
        d = c.Z == 0 || c.Z == 1 ? t.l.j : t.C
      if (((d = t.C < d ? d : t.C), e(r <= t.l.o), r > d)) {
        var m = t.l.width,
          b = c.ca,
          y = c.tb + m * d,
          L = t.V,
          x = t.Ba + t.c * d,
          P = t.gc
        e(t.ab == 1), e(P[0].hc == 3), Lo(P[0], d, r, L, x, b, y), wn(c, d, r, b, y, m)
      }
      t.C = t.Ma = r
    }
    function Nn(t, r, c, d, m, b, y) {
      var L = t.$ / d,
        x = t.$ % d,
        P = t.m,
        T = t.s,
        X = c + t.$,
        K = X
      m = c + d * m
      var V = c + d * b,
        ht = 280 + T.ua,
        nt = t.Pb ? L : 16777216,
        z = 0 < T.ua ? T.Wa : null,
        U = T.wc,
        ut = X < V ? je(T, x, L) : null
      e(t.C < b), e(V <= m)
      var gt = !1
      t: for (;;) {
        for (; gt || X < V; ) {
          var lt = 0
          if (L >= nt) {
            var Ct = X - c
            e((nt = t).Pb),
              (nt.wd = nt.m),
              (nt.xd = Ct),
              0 < nt.s.ua && at(nt.s.Wa, nt.s.vb),
              (nt = L + vc)
          }
          if (
            (x & U || (ut = je(T, x, L)), e(ut != null), ut.Qb && ((r[X] = ut.qb), (gt = !0)), !gt)
          )
            if ((Y(P), ut.jc)) {
              ;(lt = P), (Ct = r)
              var St = X,
                Rt = ut.pd[j(lt) & (tn - 1)]
              e(ut.jc),
                256 > Rt.g
                  ? (W(lt, lt.u + Rt.g), (Ct[St] = Rt.value), (lt = 0))
                  : (W(lt, lt.u + Rt.g - 256), e(256 <= Rt.value), (lt = Rt.value)),
                lt == 0 && (gt = !0)
            } else lt = $e(ut.G[0], ut.H[0], P)
          if (P.h) break
          if (gt || 256 > lt) {
            if (!gt)
              if (ut.nd) r[X] = (ut.qb | (lt << 8)) >>> 0
              else {
                if (
                  (Y(P),
                  (gt = $e(ut.G[1], ut.H[1], P)),
                  Y(P),
                  (Ct = $e(ut.G[2], ut.H[2], P)),
                  (St = $e(ut.G[3], ut.H[3], P)),
                  P.h)
                )
                  break
                r[X] = ((St << 24) | (gt << 16) | (lt << 8) | Ct) >>> 0
              }
            if (
              ((gt = !1),
              ++X,
              ++x >= d && ((x = 0), ++L, y != null && L <= b && !(L % 16) && y(t, L), z != null))
            )
              for (; K < X; ) (lt = r[K++]), (z.X[((506832829 * lt) & 4294967295) >>> z.Mb] = lt)
          } else if (280 > lt) {
            if (
              ((lt = yn(lt - 256, P)),
              (Ct = $e(ut.G[4], ut.H[4], P)),
              Y(P),
              (Ct = Dn(d, (Ct = yn(Ct, P)))),
              P.h)
            )
              break
            if (X - c < Ct || m - X < lt) break t
            for (St = 0; St < lt; ++St) r[X + St] = r[X + St - Ct]
            for (X += lt, x += lt; x >= d; )
              (x -= d), ++L, y != null && L <= b && !(L % 16) && y(t, L)
            if ((e(X <= m), x & U && (ut = je(T, x, L)), z != null))
              for (; K < X; ) (lt = r[K++]), (z.X[((506832829 * lt) & 4294967295) >>> z.Mb] = lt)
          } else {
            if (!(lt < ht)) break t
            for (gt = lt - 280, e(z != null); K < X; )
              (lt = r[K++]), (z.X[((506832829 * lt) & 4294967295) >>> z.Mb] = lt)
            ;(lt = X), e(!(gt >>> (Ct = z).Xa)), (r[lt] = Ct.X[gt]), (gt = !0)
          }
          gt || e(P.h == E(P))
        }
        if (t.Pb && P.h && X < m)
          e(t.m.h), (t.a = 5), (t.m = t.wd), (t.$ = t.xd), 0 < t.s.ua && at(t.s.vb, t.s.Wa)
        else {
          if (P.h) break t
          y != null && y(t, L > b ? b : L), (t.a = 0), (t.$ = X - c)
        }
        return 1
      }
      return (t.a = 3), 0
    }
    function Rn(t) {
      e(t != null), (t.vc = null), (t.yc = null), (t.Ya = null)
      var r = t.Wa
      r != null && (r.X = null), (t.vb = null), e(t != null)
    }
    function hn() {
      var t = new yo()
      return t == null
        ? null
        : ((t.a = 0),
          (t.xb = hs),
          Mn('Predictor', 'VP8LPredictors'),
          Mn('Predictor', 'VP8LPredictors_C'),
          Mn('PredictorAdd', 'VP8LPredictorsAdd'),
          Mn('PredictorAdd', 'VP8LPredictorsAdd_C'),
          (va = ie),
          (fn = Ht),
          (Pn = It),
          (lr = We),
          (Un = oe),
          ($n = vn),
          (ii = pe),
          (G.VP8LMapColor32b = zi),
          (G.VP8LMapColor8b = No),
          t)
    }
    function Tn(t, r, c, d, m) {
      var b = 1,
        y = [t],
        L = [r],
        x = d.m,
        P = d.s,
        T = null,
        X = 0
      t: for (;;) {
        if (c)
          for (; b && ft(x, 1); ) {
            var K = y,
              V = L,
              ht = d,
              nt = 1,
              z = ht.m,
              U = ht.gc[ht.ab],
              ut = ft(z, 2)
            if (ht.Oc & (1 << ut)) b = 0
            else {
              switch (
                ((ht.Oc |= 1 << ut),
                (U.hc = ut),
                (U.Ea = K[0]),
                (U.nc = V[0]),
                (U.K = [null]),
                ++ht.ab,
                e(4 >= ht.ab),
                ut)
              ) {
                case 0:
                case 1:
                  ;(U.b = ft(z, 3) + 2),
                    (nt = Tn(Mt(U.Ea, U.b), Mt(U.nc, U.b), 0, ht, U.K)),
                    (U.K = U.K[0])
                  break
                case 3:
                  var gt,
                    lt = ft(z, 8) + 1,
                    Ct = 16 < lt ? 0 : 4 < lt ? 1 : 2 < lt ? 2 : 3
                  if (((K[0] = Mt(U.Ea, Ct)), (U.b = Ct), (gt = nt = Tn(lt, 1, 0, ht, U.K)))) {
                    var St,
                      Rt = lt,
                      _t = U,
                      se = 1 << (8 >> _t.b),
                      le = o(se)
                    if (le == null) gt = 0
                    else {
                      var ae = _t.K[0],
                        ne = _t.w
                      for (le[0] = _t.K[0][0], St = 1; St < 1 * Rt; ++St)
                        le[St] = wt(ae[ne + St], le[St - 1])
                      for (; St < 4 * se; ++St) le[St] = 0
                      ;(_t.K[0] = null), (_t.K[0] = le), (gt = 1)
                    }
                  }
                  nt = gt
                  break
                case 2:
                  break
                default:
                  e(0)
              }
              b = nt
            }
          }
        if (((y = y[0]), (L = L[0]), b && ft(x, 1) && !(b = 1 <= (X = ft(x, 4)) && 11 >= X))) {
          d.a = 3
          break t
        }
        var ge
        if ((ge = b))
          e: {
            var de,
              Zt,
              Be,
              nn = d,
              Me = y,
              rn = L,
              he = X,
              un = c,
              ln = nn.m,
              Re = nn.s,
              He = [null],
              Ze = 1,
              mn = 0,
              Hn = mc[he]
            n: for (;;) {
              if (un && ft(ln, 1)) {
                var Te = ft(ln, 3) + 2,
                  rr = Mt(Me, Te),
                  Or = Mt(rn, Te),
                  ci = rr * Or
                if (!Tn(rr, Or, 0, nn, He)) break n
                for (He = He[0], Re.xc = Te, de = 0; de < ci; ++de) {
                  var mr = (He[de] >> 8) & 65535
                  ;(He[de] = mr), mr >= Ze && (Ze = mr + 1)
                }
              }
              if (ln.h) break n
              for (Zt = 0; 5 > Zt; ++Zt) {
                var Se = us[Zt]
                !Zt && 0 < he && (Se += 1 << he), mn < Se && (mn = Se)
              }
              var Co = l(Ze * Hn, I),
                ws = Ze,
                Ls = l(ws, R)
              if (Ls == null) var ka = null
              else e(65536 >= ws), (ka = Ls)
              var Gi = o(mn)
              if (ka == null || Gi == null || Co == null) {
                nn.a = 1
                break n
              }
              var Ia = Co
              for (de = Be = 0; de < Ze; ++de) {
                var Cn = ka[de],
                  ui = Cn.G,
                  li = Cn.H,
                  Ns = 0,
                  Fa = 1,
                  As = 0
                for (Zt = 0; 5 > Zt; ++Zt) {
                  ;(Se = us[Zt]), (ui[Zt] = Ia), (li[Zt] = Be), !Zt && 0 < he && (Se += 1 << he)
                  i: {
                    var Ca,
                      jo = Se,
                      ja = nn,
                      Yi = Gi,
                      qc = Ia,
                      Dc = Be,
                      Oo = 0,
                      vr = ja.m,
                      Rc = ft(vr, 1)
                    if ((u(Yi, 0, 0, jo), Rc)) {
                      var Tc = ft(vr, 1) + 1,
                        zc = ft(vr, 1),
                        xs = ft(vr, zc == 0 ? 1 : 8)
                      ;(Yi[xs] = 1), Tc == 2 && (Yi[(xs = ft(vr, 8))] = 1)
                      var Oa = 1
                    } else {
                      var Ss = o(19),
                        _s = ft(vr, 4) + 4
                      if (19 < _s) {
                        ja.a = 3
                        var Ba = 0
                        break i
                      }
                      for (Ca = 0; Ca < _s; ++Ca) Ss[pc[Ca]] = ft(vr, 3)
                      var Bo = void 0,
                        Ji = void 0,
                        Ps = ja,
                        Uc = Ss,
                        Ma = jo,
                        ks = Yi,
                        Mo = 0,
                        br = Ps.m,
                        Is = 8,
                        Fs = l(128, I)
                      r: for (; k(Fs, 0, 7, Uc, 19); ) {
                        if (ft(br, 1)) {
                          var Hc = 2 + 2 * ft(br, 3)
                          if ((Bo = 2 + ft(br, Hc)) > Ma) break r
                        } else Bo = Ma
                        for (Ji = 0; Ji < Ma && Bo--; ) {
                          Y(br)
                          var Cs = Fs[0 + (127 & j(br))]
                          W(br, br.u + Cs.g)
                          var hi = Cs.value
                          if (16 > hi) (ks[Ji++] = hi), hi != 0 && (Is = hi)
                          else {
                            var Wc = hi == 16,
                              js = hi - 16,
                              Vc = fc[js],
                              Os = ft(br, hc[js]) + Vc
                            if (Ji + Os > Ma) break r
                            for (var Gc = Wc ? Is : 0; 0 < Os--; ) ks[Ji++] = Gc
                          }
                        }
                        Mo = 1
                        break r
                      }
                      Mo || (Ps.a = 3), (Oa = Mo)
                    }
                    ;(Oa = Oa && !vr.h) && (Oo = k(qc, Dc, 8, Yi, jo)),
                      Oa && Oo != 0 ? (Ba = Oo) : ((ja.a = 3), (Ba = 0))
                  }
                  if (Ba == 0) break n
                  if (
                    (Fa && dc[Zt] == 1 && (Fa = Ia[Be].g == 0),
                    (Ns += Ia[Be].g),
                    (Be += Ba),
                    3 >= Zt)
                  ) {
                    var Xi,
                      Eo = Gi[0]
                    for (Xi = 1; Xi < Se; ++Xi) Gi[Xi] > Eo && (Eo = Gi[Xi])
                    As += Eo
                  }
                }
                if (
                  ((Cn.nd = Fa),
                  (Cn.Qb = 0),
                  Fa &&
                    ((Cn.qb =
                      ((ui[3][li[3] + 0].value << 24) |
                        (ui[1][li[1] + 0].value << 16) |
                        ui[2][li[2] + 0].value) >>>
                      0),
                    Ns == 0 &&
                      256 > ui[0][li[0] + 0].value &&
                      ((Cn.Qb = 1), (Cn.qb += ui[0][li[0] + 0].value << 8))),
                  (Cn.jc = !Cn.Qb && 6 > As),
                  Cn.jc)
                ) {
                  var Ea,
                    ir = Cn
                  for (Ea = 0; Ea < tn; ++Ea) {
                    var yr = Ea,
                      wr = ir.pd[yr],
                      qa = ir.G[0][ir.H[0] + yr]
                    256 <= qa.value
                      ? ((wr.g = qa.g + 256), (wr.value = qa.value))
                      : ((wr.g = 0),
                        (wr.value = 0),
                        (yr >>= Ee(qa, 8, wr)),
                        (yr >>= Ee(ir.G[1][ir.H[1] + yr], 16, wr)),
                        (yr >>= Ee(ir.G[2][ir.H[2] + yr], 0, wr)),
                        Ee(ir.G[3][ir.H[3] + yr], 24, wr))
                  }
                }
              }
              ;(Re.vc = He), (Re.Wb = Ze), (Re.Ya = ka), (Re.yc = Co), (ge = 1)
              break e
            }
            ge = 0
          }
        if (!(b = ge)) {
          d.a = 3
          break t
        }
        if (0 < X) {
          if (((P.ua = 1 << X), !Wt(P.Wa, X))) {
            ;(d.a = 1), (b = 0)
            break t
          }
        } else P.ua = 0
        var qo = d,
          Bs = y,
          Yc = L,
          Do = qo.s,
          Ro = Do.xc
        if (
          ((qo.c = Bs),
          (qo.i = Yc),
          (Do.md = Mt(Bs, Ro)),
          (Do.wc = Ro == 0 ? -1 : (1 << Ro) - 1),
          c)
        ) {
          d.xb = xc
          break t
        }
        if ((T = o(y * L)) == null) {
          ;(d.a = 1), (b = 0)
          break t
        }
        b = (b = Nn(d, T, 0, y, L, L, null)) && !x.h
        break t
      }
      return b ? (m != null ? (m[0] = T) : (e(T == null), e(c)), (d.$ = 0), c || Rn(P)) : Rn(P), b
    }
    function _r(t, r) {
      var c = t.c * t.i,
        d = c + r + 16 * r
      return (
        e(t.c <= r),
        (t.V = o(d)),
        t.V == null
          ? ((t.Ta = null), (t.Ua = 0), (t.a = 1), 0)
          : ((t.Ta = t.V), (t.Ua = t.Ba + c + r), 1)
      )
    }
    function Rr(t, r) {
      var c = t.C,
        d = r - c,
        m = t.V,
        b = t.Ba + t.c * c
      for (e(r <= t.l.o); 0 < d; ) {
        var y = 16 < d ? 16 : d,
          L = t.l.ma,
          x = t.l.width,
          P = x * y,
          T = L.ca,
          X = L.tb + x * c,
          K = t.Ta,
          V = t.Ua
        on(t, y, m, b),
          es(K, V, T, X, P),
          wn(L, c, c + y, T, X, x),
          (d -= y),
          (m += y * t.c),
          (c += y)
      }
      e(c == r), (t.C = t.Ma = r)
    }
    function Tr() {
      this.ub = this.yd = this.td = this.Rb = 0
    }
    function zr() {
      this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0
    }
    function Ur() {
      ;(this.Fb = this.Bb = this.Cb = 0), (this.Zb = o(4)), (this.Lb = o(4))
    }
    function Zi() {
      this.Yb = (function () {
        var t = []
        return (
          (function r(c, d, m) {
            for (
              var b = m[d], y = 0;
              y < b && (c.push(m.length > d + 1 ? [] : 0), !(m.length < d + 1));
              y++
            )
              r(c[y], d + 1, m)
          })(t, 0, [3, 11]),
          t
        )
      })()
    }
    function Xa() {
      ;(this.jb = o(3)), (this.Wc = h([4, 8], Zi)), (this.Xc = h([4, 17], Zi))
    }
    function Ka() {
      ;(this.Pc = this.wb = this.Tb = this.zd = 0), (this.vd = new o(4)), (this.od = new o(4))
    }
    function Hr() {
      this.ld = this.La = this.dd = this.tc = 0
    }
    function $i() {
      this.Na = this.la = 0
    }
    function Za() {
      ;(this.Sc = [0, 0]), (this.Eb = [0, 0]), (this.Qc = [0, 0]), (this.ia = this.lc = 0)
    }
    function Li() {
      ;(this.ad = o(384)),
        (this.Za = 0),
        (this.Ob = o(16)),
        (this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0)
    }
    function $a() {
      ;(this.uc = this.M = this.Nb = 0),
        (this.wa = Array(new Hr())),
        (this.Y = 0),
        (this.ya = Array(new Li())),
        (this.aa = 0),
        (this.l = new Wr())
    }
    function Qi() {
      ;(this.y = o(16)), (this.f = o(8)), (this.ea = o(8))
    }
    function Qa() {
      ;(this.cb = this.a = 0),
        (this.sc = ''),
        (this.m = new Et()),
        (this.Od = new Tr()),
        (this.Kc = new zr()),
        (this.ed = new Ka()),
        (this.Qa = new Ur()),
        (this.Ic = this.$c = this.Aa = 0),
        (this.D = new $a()),
        (this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0),
        (this.Jc = l(8, Et)),
        (this.ia = 0),
        (this.pb = l(4, Za)),
        (this.Pa = new Xa()),
        (this.Bd = this.kc = 0),
        (this.Ac = []),
        (this.Bc = 0),
        (this.zc = [0, 0, 0, 0]),
        (this.Gd = Array(new Qi())),
        (this.Hd = 0),
        (this.rb = Array(new $i())),
        (this.sb = 0),
        (this.wa = Array(new Hr())),
        (this.Y = 0),
        (this.oc = []),
        (this.pc = 0),
        (this.sa = []),
        (this.ta = 0),
        (this.qa = []),
        (this.ra = 0),
        (this.Ha = []),
        (this.B = this.R = this.Ia = 0),
        (this.Ec = []),
        (this.M = this.ja = this.Vb = this.Fc = 0),
        (this.ya = Array(new Li())),
        (this.L = this.aa = 0),
        (this.gd = h([4, 2], Hr)),
        (this.ga = null),
        (this.Fa = []),
        (this.Cc = this.qc = this.P = 0),
        (this.Gb = []),
        (this.Uc = 0),
        (this.mb = []),
        (this.nb = 0),
        (this.rc = []),
        (this.Ga = this.Vc = 0)
    }
    function Wr() {
      ;(this.T = this.U = this.ka = this.height = this.width = 0),
        (this.y = []),
        (this.f = []),
        (this.ea = []),
        (this.Rc = this.fa = this.W = this.N = this.O = 0),
        (this.ma = 'void'),
        (this.put = 'VP8IoPutHook'),
        (this.ac = 'VP8IoSetupHook'),
        (this.bc = 'VP8IoTeardownHook'),
        (this.ha = this.Kb = 0),
        (this.data = []),
        (this.hb =
          this.ib =
          this.da =
          this.o =
          this.j =
          this.va =
          this.v =
          this.Da =
          this.ob =
          this.w =
            0),
        (this.F = []),
        (this.J = 0)
    }
    function to() {
      var t = new Qa()
      return t != null && ((t.a = 0), (t.sc = 'OK'), (t.cb = 0), (t.Xb = 0), Wi || (Wi = na)), t
    }
    function Pe(t, r, c) {
      return t.a == 0 && ((t.a = r), (t.sc = c), (t.cb = 0)), 0
    }
    function ta(t, r, c) {
      return 3 <= c && t[r + 0] == 157 && t[r + 1] == 1 && t[r + 2] == 42
    }
    function ea(t, r) {
      if (t == null) return 0
      if (((t.a = 0), (t.sc = 'OK'), r == null))
        return Pe(t, 2, 'null VP8Io passed to VP8GetHeaders()')
      var c = r.data,
        d = r.w,
        m = r.ha
      if (4 > m) return Pe(t, 7, 'Truncated header.')
      var b = c[d + 0] | (c[d + 1] << 8) | (c[d + 2] << 16),
        y = t.Od
      if (
        ((y.Rb = !(1 & b)), (y.td = (b >> 1) & 7), (y.yd = (b >> 4) & 1), (y.ub = b >> 5), 3 < y.td)
      )
        return Pe(t, 3, 'Incorrect keyframe parameters.')
      if (!y.yd) return Pe(t, 4, 'Frame not displayable.')
      ;(d += 3), (m -= 3)
      var L = t.Kc
      if (y.Rb) {
        if (7 > m) return Pe(t, 7, 'cannot parse picture header')
        if (!ta(c, d, m)) return Pe(t, 3, 'Bad code word')
        ;(L.c = 16383 & ((c[d + 4] << 8) | c[d + 3])),
          (L.Td = c[d + 4] >> 6),
          (L.i = 16383 & ((c[d + 6] << 8) | c[d + 5])),
          (L.Ud = c[d + 6] >> 6),
          (d += 7),
          (m -= 7),
          (t.za = (L.c + 15) >> 4),
          (t.Ub = (L.i + 15) >> 4),
          (r.width = L.c),
          (r.height = L.i),
          (r.Da = 0),
          (r.j = 0),
          (r.v = 0),
          (r.va = r.width),
          (r.o = r.height),
          (r.da = 0),
          (r.ib = r.width),
          (r.hb = r.height),
          (r.U = r.width),
          (r.T = r.height),
          u((b = t.Pa).jb, 0, 255, b.jb.length),
          e((b = t.Qa) != null),
          (b.Cb = 0),
          (b.Bb = 0),
          (b.Fb = 1),
          u(b.Zb, 0, 0, b.Zb.length),
          u(b.Lb, 0, 0, b.Lb)
      }
      if (y.ub > m) return Pe(t, 7, 'bad partition length')
      ct((b = t.m), c, d, y.ub),
        (d += y.ub),
        (m -= y.ub),
        y.Rb && ((L.Ld = et(b)), (L.Kd = et(b))),
        (L = t.Qa)
      var x,
        P = t.Pa
      if ((e(b != null), e(L != null), (L.Cb = et(b)), L.Cb)) {
        if (((L.Bb = et(b)), et(b))) {
          for (L.Fb = et(b), x = 0; 4 > x; ++x) L.Zb[x] = et(b) ? mt(b, 7) : 0
          for (x = 0; 4 > x; ++x) L.Lb[x] = et(b) ? mt(b, 6) : 0
        }
        if (L.Bb) for (x = 0; 3 > x; ++x) P.jb[x] = et(b) ? ot(b, 8) : 255
      } else L.Bb = 0
      if (b.Ka) return Pe(t, 3, 'cannot parse segment header')
      if (
        (((L = t.ed).zd = et(b)),
        (L.Tb = ot(b, 6)),
        (L.wb = ot(b, 3)),
        (L.Pc = et(b)),
        L.Pc && et(b))
      ) {
        for (P = 0; 4 > P; ++P) et(b) && (L.vd[P] = mt(b, 6))
        for (P = 0; 4 > P; ++P) et(b) && (L.od[P] = mt(b, 6))
      }
      if (((t.L = L.Tb == 0 ? 0 : L.zd ? 1 : 2), b.Ka))
        return Pe(t, 3, 'cannot parse filter header')
      var T = m
      if (((m = x = d), (d = x + T), (L = T), (t.Xb = (1 << ot(t.m, 2)) - 1), T < 3 * (P = t.Xb)))
        c = 7
      else {
        for (x += 3 * P, L -= 3 * P, T = 0; T < P; ++T) {
          var X = c[m + 0] | (c[m + 1] << 8) | (c[m + 2] << 16)
          X > L && (X = L), ct(t.Jc[+T], c, x, X), (x += X), (L -= X), (m += 3)
        }
        ct(t.Jc[+P], c, x, L), (c = x < d ? 0 : 5)
      }
      if (c != 0) return Pe(t, c, 'cannot parse partitions')
      for (
        c = ot((x = t.m), 7),
          m = et(x) ? mt(x, 4) : 0,
          d = et(x) ? mt(x, 4) : 0,
          L = et(x) ? mt(x, 4) : 0,
          P = et(x) ? mt(x, 4) : 0,
          x = et(x) ? mt(x, 4) : 0,
          T = t.Qa,
          X = 0;
        4 > X;
        ++X
      ) {
        if (T.Cb) {
          var K = T.Zb[X]
          T.Fb || (K += c)
        } else {
          if (0 < X) {
            t.pb[X] = t.pb[0]
            continue
          }
          K = c
        }
        var V = t.pb[X]
        ;(V.Sc[0] = ko[sn(K + m, 127)]),
          (V.Sc[1] = Io[sn(K + 0, 127)]),
          (V.Eb[0] = 2 * ko[sn(K + d, 127)]),
          (V.Eb[1] = (101581 * Io[sn(K + L, 127)]) >> 16),
          8 > V.Eb[1] && (V.Eb[1] = 8),
          (V.Qc[0] = ko[sn(K + P, 117)]),
          (V.Qc[1] = Io[sn(K + x, 127)]),
          (V.lc = K + x)
      }
      if (!y.Rb) return Pe(t, 4, 'Not a key frame.')
      for (et(b), y = t.Pa, c = 0; 4 > c; ++c) {
        for (m = 0; 8 > m; ++m)
          for (d = 0; 3 > d; ++d)
            for (L = 0; 11 > L; ++L)
              (P = Q(b, Nc[c][m][d][L]) ? ot(b, 8) : wc[c][m][d][L]), (y.Wc[c][m].Yb[d][L] = P)
        for (m = 0; 17 > m; ++m) y.Xc[c][m] = y.Wc[c][Ac[m]]
      }
      return (t.kc = et(b)), t.kc && (t.Bd = ot(b, 8)), (t.cb = 1)
    }
    function na(t, r, c, d, m, b, y) {
      var L = r[m].Yb[c]
      for (c = 0; 16 > m; ++m) {
        if (!Q(t, L[c + 0])) return m
        for (; !Q(t, L[c + 1]); ) if (((L = r[++m].Yb[0]), (c = 0), m == 16)) return 16
        var x = r[m + 1].Yb
        if (Q(t, L[c + 2])) {
          var P = t,
            T = 0
          if (Q(P, (K = L)[(X = c) + 3]))
            if (Q(P, K[X + 6])) {
              for (
                L = 0, X = 2 * (T = Q(P, K[X + 8])) + (K = Q(P, K[X + 9 + T])), T = 0, K = bc[X];
                K[L];
                ++L
              )
                T += T + Q(P, K[L])
              T += 3 + (8 << X)
            } else
              Q(P, K[X + 7]) ? ((T = 7 + 2 * Q(P, 165)), (T += Q(P, 145))) : (T = 5 + Q(P, 159))
          else T = Q(P, K[X + 4]) ? 3 + Q(P, K[X + 5]) : 2
          L = x[2]
        } else (T = 1), (L = x[1])
        ;(x = y + yc[m]), 0 > (P = t).b && $(P)
        var X,
          K = P.b,
          V = ((X = P.Ca >> 1) - (P.I >> K)) >> 31
        --P.b,
          (P.Ca += V),
          (P.Ca |= 1),
          (P.I -= ((X + 1) & V) << K),
          (b[x] = ((T ^ V) - V) * d[(0 < m) + 0])
      }
      return 16
    }
    function Ni(t) {
      var r = t.rb[t.sb - 1]
      ;(r.la = 0), (r.Na = 0), u(t.zc, 0, 0, t.zc.length), (t.ja = 0)
    }
    function eo(t, r) {
      if (t == null) return 0
      if (r == null) return Pe(t, 2, 'NULL VP8Io parameter in VP8Decode().')
      if (!t.cb && !ea(t, r)) return 0
      if ((e(t.cb), r.ac == null || r.ac(r))) {
        r.ob && (t.L = 0)
        var c = Pa[t.L]
        if (
          (t.L == 2
            ? ((t.yb = 0), (t.zb = 0))
            : ((t.yb = (r.v - c) >> 4),
              (t.zb = (r.j - c) >> 4),
              0 > t.yb && (t.yb = 0),
              0 > t.zb && (t.zb = 0)),
          (t.Va = (r.o + 15 + c) >> 4),
          (t.Hb = (r.va + 15 + c) >> 4),
          t.Hb > t.za && (t.Hb = t.za),
          t.Va > t.Ub && (t.Va = t.Ub),
          0 < t.L)
        ) {
          var d = t.ed
          for (c = 0; 4 > c; ++c) {
            var m
            if (t.Qa.Cb) {
              var b = t.Qa.Lb[c]
              t.Qa.Fb || (b += d.Tb)
            } else b = d.Tb
            for (m = 0; 1 >= m; ++m) {
              var y = t.gd[c][m],
                L = b
              if (
                (d.Pc && ((L += d.vd[0]), m && (L += d.od[0])),
                0 < (L = 0 > L ? 0 : 63 < L ? 63 : L))
              ) {
                var x = L
                0 < d.wb && (x = 4 < d.wb ? x >> 2 : x >> 1) > 9 - d.wb && (x = 9 - d.wb),
                  1 > x && (x = 1),
                  (y.dd = x),
                  (y.tc = 2 * L + x),
                  (y.ld = 40 <= L ? 2 : 15 <= L ? 1 : 0)
              } else y.tc = 0
              y.La = m
            }
          }
        }
        c = 0
      } else Pe(t, 6, 'Frame setup failed'), (c = t.a)
      if ((c = c == 0)) {
        if (c) {
          ;(t.$c = 0), 0 < t.Aa || (t.Ic = Ec)
          t: {
            ;(c = t.Ic), (d = 4 * (x = t.za))
            var P = 32 * x,
              T = x + 1,
              X = 0 < t.L ? x * (0 < t.Aa ? 2 : 1) : 0,
              K = (t.Aa == 2 ? 2 : 1) * x
            if (
              (y =
                d +
                832 +
                (m = ((3 * (16 * c + Pa[t.L])) / 2) * P) +
                (b = t.Fa != null && 0 < t.Fa.length ? t.Kc.c * t.Kc.i : 0)) != y
            )
              c = 0
            else {
              if (y > t.Vb) {
                if (((t.Vb = 0), (t.Ec = o(y)), (t.Fc = 0), t.Ec == null)) {
                  c = Pe(t, 1, 'no memory during frame initialization.')
                  break t
                }
                t.Vb = y
              }
              ;(y = t.Ec),
                (L = t.Fc),
                (t.Ac = y),
                (t.Bc = L),
                (L += d),
                (t.Gd = l(P, Qi)),
                (t.Hd = 0),
                (t.rb = l(T + 1, $i)),
                (t.sb = 1),
                (t.wa = X ? l(X, Hr) : null),
                (t.Y = 0),
                (t.D.Nb = 0),
                (t.D.wa = t.wa),
                (t.D.Y = t.Y),
                0 < t.Aa && (t.D.Y += x),
                e(!0),
                (t.oc = y),
                (t.pc = L),
                (L += 832),
                (t.ya = l(K, Li)),
                (t.aa = 0),
                (t.D.ya = t.ya),
                (t.D.aa = t.aa),
                t.Aa == 2 && (t.D.aa += x),
                (t.R = 16 * x),
                (t.B = 8 * x),
                (x = (P = Pa[t.L]) * t.R),
                (P = (P / 2) * t.B),
                (t.sa = y),
                (t.ta = L + x),
                (t.qa = t.sa),
                (t.ra = t.ta + 16 * c * t.R + P),
                (t.Ha = t.qa),
                (t.Ia = t.ra + 8 * c * t.B + P),
                (t.$c = 0),
                (L += m),
                (t.mb = b ? y : null),
                (t.nb = b ? L : null),
                e(L + b <= t.Fc + t.Vb),
                Ni(t),
                u(t.Ac, t.Bc, 0, d),
                (c = 1)
            }
          }
          if (c) {
            if (
              ((r.ka = 0),
              (r.y = t.sa),
              (r.O = t.ta),
              (r.f = t.qa),
              (r.N = t.ra),
              (r.ea = t.Ha),
              (r.Vd = t.Ia),
              (r.fa = t.R),
              (r.Rc = t.B),
              (r.F = null),
              (r.J = 0),
              !os)
            ) {
              for (c = -255; 255 >= c; ++c) ns[255 + c] = 0 > c ? -c : c
              for (c = -1020; 1020 >= c; ++c) rs[1020 + c] = -128 > c ? -128 : 127 < c ? 127 : c
              for (c = -112; 112 >= c; ++c) is[112 + c] = -16 > c ? -16 : 15 < c ? 15 : c
              for (c = -255; 510 >= c; ++c) as[255 + c] = 0 > c ? 0 : 255 < c ? 255 : c
              os = 1
            }
            ;(kn = io),
              (ai = no),
              (hr = ia),
              (In = ro),
              (Qn = aa),
              (Ui = ra),
              (Cr = ki),
              (oi = Ir),
              (jr = bo),
              (fr = Ii),
              (Hi = vo),
              (dn = Kr),
              (tr = Fi),
              (be = pa),
              (ye = da),
              (ke = Kn),
              (qe = or),
              (er = mo),
              (Fn[0] = zn),
              (Fn[1] = ao),
              (Fn[2] = uo),
              (Fn[3] = lo),
              (Fn[4] = ca),
              (Fn[5] = Jr),
              (Fn[6] = ua),
              (Fn[7] = Si),
              (Fn[8] = fo),
              (Fn[9] = ho),
              (pr[0] = oa),
              (pr[1] = so),
              (pr[2] = Xn),
              (pr[3] = Gr),
              (pr[4] = Ve),
              (pr[5] = co),
              (pr[6] = sa),
              (nr[0] = ar),
              (nr[1] = oo),
              (nr[2] = po),
              (nr[3] = _i),
              (nr[4] = kr),
              (nr[5] = go),
              (nr[6] = Pi),
              (c = 1)
          } else c = 0
        }
        c &&
          (c = (function (V, ht) {
            for (V.M = 0; V.M < V.Va; ++V.M) {
              var nt,
                z = V.Jc[V.M & V.Xb],
                U = V.m,
                ut = V
              for (nt = 0; nt < ut.za; ++nt) {
                var gt = U,
                  lt = ut,
                  Ct = lt.Ac,
                  St = lt.Bc + 4 * nt,
                  Rt = lt.zc,
                  _t = lt.ya[lt.aa + nt]
                if (
                  (lt.Qa.Bb
                    ? (_t.$b = Q(gt, lt.Pa.jb[0]) ? 2 + Q(gt, lt.Pa.jb[2]) : Q(gt, lt.Pa.jb[1]))
                    : (_t.$b = 0),
                  lt.kc && (_t.Ad = Q(gt, lt.Bd)),
                  (_t.Za = !Q(gt, 145) + 0),
                  _t.Za)
                ) {
                  var se = _t.Ob,
                    le = 0
                  for (lt = 0; 4 > lt; ++lt) {
                    var ae,
                      ne = Rt[0 + lt]
                    for (ae = 0; 4 > ae; ++ae) {
                      ne = Lc[Ct[St + ae]][ne]
                      for (var ge = ls[Q(gt, ne[0])]; 0 < ge; ) ge = ls[2 * ge + Q(gt, ne[ge])]
                      ;(ne = -ge), (Ct[St + ae] = ne)
                    }
                    a(se, le, Ct, St, 4), (le += 4), (Rt[0 + lt] = ne)
                  }
                } else
                  (ne = Q(gt, 156) ? (Q(gt, 128) ? 1 : 3) : Q(gt, 163) ? 2 : 0),
                    (_t.Ob[0] = ne),
                    u(Ct, St, ne, 4),
                    u(Rt, 0, ne, 4)
                _t.Dd = Q(gt, 142) ? (Q(gt, 114) ? (Q(gt, 183) ? 1 : 3) : 2) : 0
              }
              if (ut.m.Ka) return Pe(V, 7, 'Premature end-of-partition0 encountered.')
              for (; V.ja < V.za; ++V.ja) {
                if (
                  ((ut = z),
                  (gt = (U = V).rb[U.sb - 1]),
                  (Ct = U.rb[U.sb + U.ja]),
                  (nt = U.ya[U.aa + U.ja]),
                  (St = U.kc ? nt.Ad : 0))
                )
                  (gt.la = Ct.la = 0),
                    nt.Za || (gt.Na = Ct.Na = 0),
                    (nt.Hc = 0),
                    (nt.Gc = 0),
                    (nt.ia = 0)
                else {
                  var de, Zt
                  if (
                    ((gt = Ct),
                    (Ct = ut),
                    (St = U.Pa.Xc),
                    (Rt = U.ya[U.aa + U.ja]),
                    (_t = U.pb[Rt.$b]),
                    (lt = Rt.ad),
                    (se = 0),
                    (le = U.rb[U.sb - 1]),
                    (ne = ae = 0),
                    u(lt, se, 0, 384),
                    Rt.Za)
                  )
                    var Be = 0,
                      nn = St[3]
                  else {
                    ge = o(16)
                    var Me = gt.Na + le.Na
                    if (
                      ((Me = Wi(Ct, St[1], Me, _t.Eb, 0, ge, 0)),
                      (gt.Na = le.Na = (0 < Me) + 0),
                      1 < Me)
                    )
                      kn(ge, 0, lt, se)
                    else {
                      var rn = (ge[0] + 3) >> 3
                      for (ge = 0; 256 > ge; ge += 16) lt[se + ge] = rn
                    }
                    ;(Be = 1), (nn = St[0])
                  }
                  var he = 15 & gt.la,
                    un = 15 & le.la
                  for (ge = 0; 4 > ge; ++ge) {
                    var ln = 1 & un
                    for (rn = Zt = 0; 4 > rn; ++rn)
                      (he =
                        (he >> 1) |
                        ((ln = (Me = Wi(Ct, nn, (Me = ln + (1 & he)), _t.Sc, Be, lt, se)) > Be) <<
                          7)),
                        (Zt = (Zt << 2) | (3 < Me ? 3 : 1 < Me ? 2 : lt[se + 0] != 0)),
                        (se += 16)
                    ;(he >>= 4), (un = (un >> 1) | (ln << 7)), (ae = ((ae << 8) | Zt) >>> 0)
                  }
                  for (nn = he, Be = un >> 4, de = 0; 4 > de; de += 2) {
                    for (
                      Zt = 0, he = gt.la >> (4 + de), un = le.la >> (4 + de), ge = 0;
                      2 > ge;
                      ++ge
                    ) {
                      for (ln = 1 & un, rn = 0; 2 > rn; ++rn)
                        (Me = ln + (1 & he)),
                          (he =
                            (he >> 1) |
                            ((ln = 0 < (Me = Wi(Ct, St[2], Me, _t.Qc, 0, lt, se))) << 3)),
                          (Zt = (Zt << 2) | (3 < Me ? 3 : 1 < Me ? 2 : lt[se + 0] != 0)),
                          (se += 16)
                      ;(he >>= 2), (un = (un >> 1) | (ln << 5))
                    }
                    ;(ne |= Zt << (4 * de)), (nn |= (he << 4) << de), (Be |= (240 & un) << de)
                  }
                  ;(gt.la = nn),
                    (le.la = Be),
                    (Rt.Hc = ae),
                    (Rt.Gc = ne),
                    (Rt.ia = 43690 & ne ? 0 : _t.ia),
                    (St = !(ae | ne))
                }
                if (
                  (0 < U.L &&
                    ((U.wa[U.Y + U.ja] = U.gd[nt.$b][nt.Za]), (U.wa[U.Y + U.ja].La |= !St)),
                  ut.Ka)
                )
                  return Pe(V, 7, 'Premature end-of-file encountered.')
              }
              if (
                (Ni(V),
                (U = ht),
                (ut = 1),
                (nt = (z = V).D),
                (gt = 0 < z.L && z.M >= z.zb && z.M <= z.Va),
                z.Aa == 0)
              )
                t: {
                  if (
                    ((nt.M = z.M),
                    (nt.uc = gt),
                    Ei(z, nt),
                    (ut = 1),
                    (nt = (Zt = z.D).Nb),
                    (gt = (ne = Pa[z.L]) * z.R),
                    (Ct = (ne / 2) * z.B),
                    (ge = 16 * nt * z.R),
                    (rn = 8 * nt * z.B),
                    (St = z.sa),
                    (Rt = z.ta - gt + ge),
                    (_t = z.qa),
                    (lt = z.ra - Ct + rn),
                    (se = z.Ha),
                    (le = z.Ia - Ct + rn),
                    (un = (he = Zt.M) == 0),
                    (ae = he >= z.Va - 1),
                    z.Aa == 2 && Ei(z, Zt),
                    Zt.uc)
                  )
                    for (ln = (Me = z).D.M, e(Me.D.uc), Zt = Me.yb; Zt < Me.Hb; ++Zt) {
                      ;(Be = Zt), (nn = ln)
                      var Re = (He = (Se = Me).D).Nb
                      de = Se.R
                      var He = He.wa[He.Y + Be],
                        Ze = Se.sa,
                        mn = Se.ta + 16 * Re * de + 16 * Be,
                        Hn = He.dd,
                        Te = He.tc
                      if (Te != 0)
                        if ((e(3 <= Te), Se.L == 1))
                          0 < Be && ke(Ze, mn, de, Te + 4),
                            He.La && er(Ze, mn, de, Te),
                            0 < nn && ye(Ze, mn, de, Te + 4),
                            He.La && qe(Ze, mn, de, Te)
                        else {
                          var rr = Se.B,
                            Or = Se.qa,
                            ci = Se.ra + 8 * Re * rr + 8 * Be,
                            mr = Se.Ha,
                            Se = Se.Ia + 8 * Re * rr + 8 * Be
                          ;(Re = He.ld),
                            0 < Be &&
                              (oi(Ze, mn, de, Te + 4, Hn, Re),
                              fr(Or, ci, mr, Se, rr, Te + 4, Hn, Re)),
                            He.La &&
                              (dn(Ze, mn, de, Te, Hn, Re), be(Or, ci, mr, Se, rr, Te, Hn, Re)),
                            0 < nn &&
                              (Cr(Ze, mn, de, Te + 4, Hn, Re),
                              jr(Or, ci, mr, Se, rr, Te + 4, Hn, Re)),
                            He.La &&
                              (Hi(Ze, mn, de, Te, Hn, Re), tr(Or, ci, mr, Se, rr, Te, Hn, Re))
                        }
                    }
                  if ((z.ia && alert('todo:DitherRow'), U.put != null)) {
                    if (
                      ((Zt = 16 * he),
                      (he = 16 * (he + 1)),
                      un
                        ? ((U.y = z.sa),
                          (U.O = z.ta + ge),
                          (U.f = z.qa),
                          (U.N = z.ra + rn),
                          (U.ea = z.Ha),
                          (U.W = z.Ia + rn))
                        : ((Zt -= ne),
                          (U.y = St),
                          (U.O = Rt),
                          (U.f = _t),
                          (U.N = lt),
                          (U.ea = se),
                          (U.W = le)),
                      ae || (he -= ne),
                      he > U.o && (he = U.o),
                      (U.F = null),
                      (U.J = null),
                      z.Fa != null &&
                        0 < z.Fa.length &&
                        Zt < he &&
                        ((U.J = Bi(z, U, Zt, he - Zt)),
                        (U.F = z.mb),
                        U.F == null && U.F.length == 0))
                    ) {
                      ut = Pe(z, 3, 'Could not decode alpha data.')
                      break t
                    }
                    Zt < U.j &&
                      ((ne = U.j - Zt),
                      (Zt = U.j),
                      e(!(1 & ne)),
                      (U.O += z.R * ne),
                      (U.N += z.B * (ne >> 1)),
                      (U.W += z.B * (ne >> 1)),
                      U.F != null && (U.J += U.width * ne)),
                      Zt < he &&
                        ((U.O += U.v),
                        (U.N += U.v >> 1),
                        (U.W += U.v >> 1),
                        U.F != null && (U.J += U.v),
                        (U.ka = Zt - U.j),
                        (U.U = U.va - U.v),
                        (U.T = he - Zt),
                        (ut = U.put(U)))
                  }
                  nt + 1 != z.Ic ||
                    ae ||
                    (a(z.sa, z.ta - gt, St, Rt + 16 * z.R, gt),
                    a(z.qa, z.ra - Ct, _t, lt + 8 * z.B, Ct),
                    a(z.Ha, z.Ia - Ct, se, le + 8 * z.B, Ct))
                }
              if (!ut) return Pe(V, 6, 'Output aborted.')
            }
            return 1
          })(t, r)),
          r.bc != null && r.bc(r),
          (c &= 1)
      }
      return c ? ((t.cb = 0), c) : 0
    }
    function An(t, r, c, d, m) {
      ;(m = t[r + c + 32 * d] + (m >> 3)), (t[r + c + 32 * d] = -256 & m ? (0 > m ? 0 : 255) : m)
    }
    function Vr(t, r, c, d, m, b) {
      An(t, r, 0, c, d + m), An(t, r, 1, c, d + b), An(t, r, 2, c, d - b), An(t, r, 3, c, d - m)
    }
    function Qe(t) {
      return ((20091 * t) >> 16) + t
    }
    function Ai(t, r, c, d) {
      var m,
        b = 0,
        y = o(16)
      for (m = 0; 4 > m; ++m) {
        var L = t[r + 0] + t[r + 8],
          x = t[r + 0] - t[r + 8],
          P = ((35468 * t[r + 4]) >> 16) - Qe(t[r + 12]),
          T = Qe(t[r + 4]) + ((35468 * t[r + 12]) >> 16)
        ;(y[b + 0] = L + T),
          (y[b + 1] = x + P),
          (y[b + 2] = x - P),
          (y[b + 3] = L - T),
          (b += 4),
          r++
      }
      for (m = b = 0; 4 > m; ++m)
        (L = (t = y[b + 0] + 4) + y[b + 8]),
          (x = t - y[b + 8]),
          (P = ((35468 * y[b + 4]) >> 16) - Qe(y[b + 12])),
          An(c, d, 0, 0, L + (T = Qe(y[b + 4]) + ((35468 * y[b + 12]) >> 16))),
          An(c, d, 1, 0, x + P),
          An(c, d, 2, 0, x - P),
          An(c, d, 3, 0, L - T),
          b++,
          (d += 32)
    }
    function ra(t, r, c, d) {
      var m = t[r + 0] + 4,
        b = (35468 * t[r + 4]) >> 16,
        y = Qe(t[r + 4]),
        L = (35468 * t[r + 1]) >> 16
      Vr(c, d, 0, m + y, (t = Qe(t[r + 1])), L),
        Vr(c, d, 1, m + b, t, L),
        Vr(c, d, 2, m - b, t, L),
        Vr(c, d, 3, m - y, t, L)
    }
    function no(t, r, c, d, m) {
      Ai(t, r, c, d), m && Ai(t, r + 16, c, d + 4)
    }
    function ia(t, r, c, d) {
      ai(t, r + 0, c, d, 1), ai(t, r + 32, c, d + 128, 1)
    }
    function ro(t, r, c, d) {
      var m
      for (t = t[r + 0] + 4, m = 0; 4 > m; ++m) for (r = 0; 4 > r; ++r) An(c, d, r, m, t)
    }
    function aa(t, r, c, d) {
      t[r + 0] && In(t, r + 0, c, d),
        t[r + 16] && In(t, r + 16, c, d + 4),
        t[r + 32] && In(t, r + 32, c, d + 128),
        t[r + 48] && In(t, r + 48, c, d + 128 + 4)
    }
    function io(t, r, c, d) {
      var m,
        b = o(16)
      for (m = 0; 4 > m; ++m) {
        var y = t[r + 0 + m] + t[r + 12 + m],
          L = t[r + 4 + m] + t[r + 8 + m],
          x = t[r + 4 + m] - t[r + 8 + m],
          P = t[r + 0 + m] - t[r + 12 + m]
        ;(b[0 + m] = y + L), (b[8 + m] = y - L), (b[4 + m] = P + x), (b[12 + m] = P - x)
      }
      for (m = 0; 4 > m; ++m)
        (y = (t = b[0 + 4 * m] + 3) + b[3 + 4 * m]),
          (L = b[1 + 4 * m] + b[2 + 4 * m]),
          (x = b[1 + 4 * m] - b[2 + 4 * m]),
          (P = t - b[3 + 4 * m]),
          (c[d + 0] = (y + L) >> 3),
          (c[d + 16] = (P + x) >> 3),
          (c[d + 32] = (y - L) >> 3),
          (c[d + 48] = (P - x) >> 3),
          (d += 64)
    }
    function xi(t, r, c) {
      var d,
        m = r - 32,
        b = cn,
        y = 255 - t[m - 1]
      for (d = 0; d < c; ++d) {
        var L,
          x = b,
          P = y + t[r - 1]
        for (L = 0; L < c; ++L) t[r + L] = x[P + t[m + L]]
        r += 32
      }
    }
    function ao(t, r) {
      xi(t, r, 4)
    }
    function oo(t, r) {
      xi(t, r, 8)
    }
    function so(t, r) {
      xi(t, r, 16)
    }
    function Xn(t, r) {
      var c
      for (c = 0; 16 > c; ++c) a(t, r + 32 * c, t, r - 32, 16)
    }
    function Gr(t, r) {
      var c
      for (c = 16; 0 < c; --c) u(t, r, t[r - 1], 16), (r += 32)
    }
    function Yr(t, r, c) {
      var d
      for (d = 0; 16 > d; ++d) u(r, c + 32 * d, t, 16)
    }
    function oa(t, r) {
      var c,
        d = 16
      for (c = 0; 16 > c; ++c) d += t[r - 1 + 32 * c] + t[r + c - 32]
      Yr(d >> 5, t, r)
    }
    function Ve(t, r) {
      var c,
        d = 8
      for (c = 0; 16 > c; ++c) d += t[r - 1 + 32 * c]
      Yr(d >> 4, t, r)
    }
    function co(t, r) {
      var c,
        d = 8
      for (c = 0; 16 > c; ++c) d += t[r + c - 32]
      Yr(d >> 4, t, r)
    }
    function sa(t, r) {
      Yr(128, t, r)
    }
    function Vt(t, r, c) {
      return (t + 2 * r + c + 2) >> 2
    }
    function uo(t, r) {
      var c,
        d = r - 32
      for (
        d = new Uint8Array([
          Vt(t[d - 1], t[d + 0], t[d + 1]),
          Vt(t[d + 0], t[d + 1], t[d + 2]),
          Vt(t[d + 1], t[d + 2], t[d + 3]),
          Vt(t[d + 2], t[d + 3], t[d + 4])
        ]),
          c = 0;
        4 > c;
        ++c
      )
        a(t, r + 32 * c, d, 0, d.length)
    }
    function lo(t, r) {
      var c = t[r - 1],
        d = t[r - 1 + 32],
        m = t[r - 1 + 64],
        b = t[r - 1 + 96]
      At(t, r + 0, 16843009 * Vt(t[r - 1 - 32], c, d)),
        At(t, r + 32, 16843009 * Vt(c, d, m)),
        At(t, r + 64, 16843009 * Vt(d, m, b)),
        At(t, r + 96, 16843009 * Vt(m, b, b))
    }
    function zn(t, r) {
      var c,
        d = 4
      for (c = 0; 4 > c; ++c) d += t[r + c - 32] + t[r - 1 + 32 * c]
      for (d >>= 3, c = 0; 4 > c; ++c) u(t, r + 32 * c, d, 4)
    }
    function ca(t, r) {
      var c = t[r - 1 + 0],
        d = t[r - 1 + 32],
        m = t[r - 1 + 64],
        b = t[r - 1 - 32],
        y = t[r + 0 - 32],
        L = t[r + 1 - 32],
        x = t[r + 2 - 32],
        P = t[r + 3 - 32]
      ;(t[r + 0 + 96] = Vt(d, m, t[r - 1 + 96])),
        (t[r + 1 + 96] = t[r + 0 + 64] = Vt(c, d, m)),
        (t[r + 2 + 96] = t[r + 1 + 64] = t[r + 0 + 32] = Vt(b, c, d)),
        (t[r + 3 + 96] = t[r + 2 + 64] = t[r + 1 + 32] = t[r + 0 + 0] = Vt(y, b, c)),
        (t[r + 3 + 64] = t[r + 2 + 32] = t[r + 1 + 0] = Vt(L, y, b)),
        (t[r + 3 + 32] = t[r + 2 + 0] = Vt(x, L, y)),
        (t[r + 3 + 0] = Vt(P, x, L))
    }
    function ua(t, r) {
      var c = t[r + 1 - 32],
        d = t[r + 2 - 32],
        m = t[r + 3 - 32],
        b = t[r + 4 - 32],
        y = t[r + 5 - 32],
        L = t[r + 6 - 32],
        x = t[r + 7 - 32]
      ;(t[r + 0 + 0] = Vt(t[r + 0 - 32], c, d)),
        (t[r + 1 + 0] = t[r + 0 + 32] = Vt(c, d, m)),
        (t[r + 2 + 0] = t[r + 1 + 32] = t[r + 0 + 64] = Vt(d, m, b)),
        (t[r + 3 + 0] = t[r + 2 + 32] = t[r + 1 + 64] = t[r + 0 + 96] = Vt(m, b, y)),
        (t[r + 3 + 32] = t[r + 2 + 64] = t[r + 1 + 96] = Vt(b, y, L)),
        (t[r + 3 + 64] = t[r + 2 + 96] = Vt(y, L, x)),
        (t[r + 3 + 96] = Vt(L, x, x))
    }
    function Jr(t, r) {
      var c = t[r - 1 + 0],
        d = t[r - 1 + 32],
        m = t[r - 1 + 64],
        b = t[r - 1 - 32],
        y = t[r + 0 - 32],
        L = t[r + 1 - 32],
        x = t[r + 2 - 32],
        P = t[r + 3 - 32]
      ;(t[r + 0 + 0] = t[r + 1 + 64] = (b + y + 1) >> 1),
        (t[r + 1 + 0] = t[r + 2 + 64] = (y + L + 1) >> 1),
        (t[r + 2 + 0] = t[r + 3 + 64] = (L + x + 1) >> 1),
        (t[r + 3 + 0] = (x + P + 1) >> 1),
        (t[r + 0 + 96] = Vt(m, d, c)),
        (t[r + 0 + 64] = Vt(d, c, b)),
        (t[r + 0 + 32] = t[r + 1 + 96] = Vt(c, b, y)),
        (t[r + 1 + 32] = t[r + 2 + 96] = Vt(b, y, L)),
        (t[r + 2 + 32] = t[r + 3 + 96] = Vt(y, L, x)),
        (t[r + 3 + 32] = Vt(L, x, P))
    }
    function Si(t, r) {
      var c = t[r + 0 - 32],
        d = t[r + 1 - 32],
        m = t[r + 2 - 32],
        b = t[r + 3 - 32],
        y = t[r + 4 - 32],
        L = t[r + 5 - 32],
        x = t[r + 6 - 32],
        P = t[r + 7 - 32]
      ;(t[r + 0 + 0] = (c + d + 1) >> 1),
        (t[r + 1 + 0] = t[r + 0 + 64] = (d + m + 1) >> 1),
        (t[r + 2 + 0] = t[r + 1 + 64] = (m + b + 1) >> 1),
        (t[r + 3 + 0] = t[r + 2 + 64] = (b + y + 1) >> 1),
        (t[r + 0 + 32] = Vt(c, d, m)),
        (t[r + 1 + 32] = t[r + 0 + 96] = Vt(d, m, b)),
        (t[r + 2 + 32] = t[r + 1 + 96] = Vt(m, b, y)),
        (t[r + 3 + 32] = t[r + 2 + 96] = Vt(b, y, L)),
        (t[r + 3 + 64] = Vt(y, L, x)),
        (t[r + 3 + 96] = Vt(L, x, P))
    }
    function ho(t, r) {
      var c = t[r - 1 + 0],
        d = t[r - 1 + 32],
        m = t[r - 1 + 64],
        b = t[r - 1 + 96]
      ;(t[r + 0 + 0] = (c + d + 1) >> 1),
        (t[r + 2 + 0] = t[r + 0 + 32] = (d + m + 1) >> 1),
        (t[r + 2 + 32] = t[r + 0 + 64] = (m + b + 1) >> 1),
        (t[r + 1 + 0] = Vt(c, d, m)),
        (t[r + 3 + 0] = t[r + 1 + 32] = Vt(d, m, b)),
        (t[r + 3 + 32] = t[r + 1 + 64] = Vt(m, b, b)),
        (t[r + 3 + 64] =
          t[r + 2 + 64] =
          t[r + 0 + 96] =
          t[r + 1 + 96] =
          t[r + 2 + 96] =
          t[r + 3 + 96] =
            b)
    }
    function fo(t, r) {
      var c = t[r - 1 + 0],
        d = t[r - 1 + 32],
        m = t[r - 1 + 64],
        b = t[r - 1 + 96],
        y = t[r - 1 - 32],
        L = t[r + 0 - 32],
        x = t[r + 1 - 32],
        P = t[r + 2 - 32]
      ;(t[r + 0 + 0] = t[r + 2 + 32] = (c + y + 1) >> 1),
        (t[r + 0 + 32] = t[r + 2 + 64] = (d + c + 1) >> 1),
        (t[r + 0 + 64] = t[r + 2 + 96] = (m + d + 1) >> 1),
        (t[r + 0 + 96] = (b + m + 1) >> 1),
        (t[r + 3 + 0] = Vt(L, x, P)),
        (t[r + 2 + 0] = Vt(y, L, x)),
        (t[r + 1 + 0] = t[r + 3 + 32] = Vt(c, y, L)),
        (t[r + 1 + 32] = t[r + 3 + 64] = Vt(d, c, y)),
        (t[r + 1 + 64] = t[r + 3 + 96] = Vt(m, d, c)),
        (t[r + 1 + 96] = Vt(b, m, d))
    }
    function po(t, r) {
      var c
      for (c = 0; 8 > c; ++c) a(t, r + 32 * c, t, r - 32, 8)
    }
    function _i(t, r) {
      var c
      for (c = 0; 8 > c; ++c) u(t, r, t[r - 1], 8), (r += 32)
    }
    function Pr(t, r, c) {
      var d
      for (d = 0; 8 > d; ++d) u(r, c + 32 * d, t, 8)
    }
    function ar(t, r) {
      var c,
        d = 8
      for (c = 0; 8 > c; ++c) d += t[r + c - 32] + t[r - 1 + 32 * c]
      Pr(d >> 4, t, r)
    }
    function go(t, r) {
      var c,
        d = 4
      for (c = 0; 8 > c; ++c) d += t[r + c - 32]
      Pr(d >> 3, t, r)
    }
    function kr(t, r) {
      var c,
        d = 4
      for (c = 0; 8 > c; ++c) d += t[r - 1 + 32 * c]
      Pr(d >> 3, t, r)
    }
    function Pi(t, r) {
      Pr(128, t, r)
    }
    function Xr(t, r, c) {
      var d = t[r - c],
        m = t[r + 0],
        b = 3 * (m - d) + Ao[1020 + t[r - 2 * c] - t[r + c]],
        y = ya[112 + ((b + 4) >> 3)]
      ;(t[r - c] = cn[255 + d + ya[112 + ((b + 3) >> 3)]]), (t[r + 0] = cn[255 + m - y])
    }
    function la(t, r, c, d) {
      var m = t[r + 0],
        b = t[r + c]
      return pn[255 + t[r - 2 * c] - t[r - c]] > d || pn[255 + b - m] > d
    }
    function ha(t, r, c, d) {
      return 4 * pn[255 + t[r - c] - t[r + 0]] + pn[255 + t[r - 2 * c] - t[r + c]] <= d
    }
    function fa(t, r, c, d, m) {
      var b = t[r - 3 * c],
        y = t[r - 2 * c],
        L = t[r - c],
        x = t[r + 0],
        P = t[r + c],
        T = t[r + 2 * c],
        X = t[r + 3 * c]
      return 4 * pn[255 + L - x] + pn[255 + y - P] > d
        ? 0
        : pn[255 + t[r - 4 * c] - b] <= m &&
            pn[255 + b - y] <= m &&
            pn[255 + y - L] <= m &&
            pn[255 + X - T] <= m &&
            pn[255 + T - P] <= m &&
            pn[255 + P - x] <= m
    }
    function da(t, r, c, d) {
      var m = 2 * d + 1
      for (d = 0; 16 > d; ++d) ha(t, r + d, c, m) && Xr(t, r + d, c)
    }
    function Kn(t, r, c, d) {
      var m = 2 * d + 1
      for (d = 0; 16 > d; ++d) ha(t, r + d * c, 1, m) && Xr(t, r + d * c, 1)
    }
    function or(t, r, c, d) {
      var m
      for (m = 3; 0 < m; --m) da(t, (r += 4 * c), c, d)
    }
    function mo(t, r, c, d) {
      var m
      for (m = 3; 0 < m; --m) Kn(t, (r += 4), c, d)
    }
    function sr(t, r, c, d, m, b, y, L) {
      for (b = 2 * b + 1; 0 < m--; ) {
        if (fa(t, r, c, b, y))
          if (la(t, r, c, L)) Xr(t, r, c)
          else {
            var x = t,
              P = r,
              T = c,
              X = x[P - 2 * T],
              K = x[P - T],
              V = x[P + 0],
              ht = x[P + T],
              nt = x[P + 2 * T],
              z = (27 * (ut = Ao[1020 + 3 * (V - K) + Ao[1020 + X - ht]]) + 63) >> 7,
              U = (18 * ut + 63) >> 7,
              ut = (9 * ut + 63) >> 7
            ;(x[P - 3 * T] = cn[255 + x[P - 3 * T] + ut]),
              (x[P - 2 * T] = cn[255 + X + U]),
              (x[P - T] = cn[255 + K + z]),
              (x[P + 0] = cn[255 + V - z]),
              (x[P + T] = cn[255 + ht - U]),
              (x[P + 2 * T] = cn[255 + nt - ut])
          }
        r += d
      }
    }
    function xn(t, r, c, d, m, b, y, L) {
      for (b = 2 * b + 1; 0 < m--; ) {
        if (fa(t, r, c, b, y))
          if (la(t, r, c, L)) Xr(t, r, c)
          else {
            var x = t,
              P = r,
              T = c,
              X = x[P - T],
              K = x[P + 0],
              V = x[P + T],
              ht = ya[112 + (((nt = 3 * (K - X)) + 4) >> 3)],
              nt = ya[112 + ((nt + 3) >> 3)],
              z = (ht + 1) >> 1
            ;(x[P - 2 * T] = cn[255 + x[P - 2 * T] + z]),
              (x[P - T] = cn[255 + X + nt]),
              (x[P + 0] = cn[255 + K - ht]),
              (x[P + T] = cn[255 + V - z])
          }
        r += d
      }
    }
    function ki(t, r, c, d, m, b) {
      sr(t, r, c, 1, 16, d, m, b)
    }
    function Ir(t, r, c, d, m, b) {
      sr(t, r, 1, c, 16, d, m, b)
    }
    function vo(t, r, c, d, m, b) {
      var y
      for (y = 3; 0 < y; --y) xn(t, (r += 4 * c), c, 1, 16, d, m, b)
    }
    function Kr(t, r, c, d, m, b) {
      var y
      for (y = 3; 0 < y; --y) xn(t, (r += 4), 1, c, 16, d, m, b)
    }
    function bo(t, r, c, d, m, b, y, L) {
      sr(t, r, m, 1, 8, b, y, L), sr(c, d, m, 1, 8, b, y, L)
    }
    function Ii(t, r, c, d, m, b, y, L) {
      sr(t, r, 1, m, 8, b, y, L), sr(c, d, 1, m, 8, b, y, L)
    }
    function Fi(t, r, c, d, m, b, y, L) {
      xn(t, r + 4 * m, m, 1, 8, b, y, L), xn(c, d + 4 * m, m, 1, 8, b, y, L)
    }
    function pa(t, r, c, d, m, b, y, L) {
      xn(t, r + 4, 1, m, 8, b, y, L), xn(c, d + 4, 1, m, 8, b, y, L)
    }
    function Zr() {
      ;(this.ba = new bn()),
        (this.ec = []),
        (this.cc = []),
        (this.Mc = []),
        (this.Dc = this.Nc = this.dc = this.fc = 0),
        (this.Oa = new Ae()),
        (this.memory = 0),
        (this.Ib = 'OutputFunc'),
        (this.Jb = 'OutputAlphaFunc'),
        (this.Nd = 'OutputRowFunc')
    }
    function Ci() {
      ;(this.data = []),
        (this.offset = this.kd = this.ha = this.w = 0),
        (this.na = []),
        (this.xa = this.gb = this.Ja = this.Sa = this.P = 0)
    }
    function ji() {
      ;(this.nc = this.Ea = this.b = this.hc = 0), (this.K = []), (this.w = 0)
    }
    function ga() {
      ;(this.ua = 0),
        (this.Wa = new O()),
        (this.vb = new O()),
        (this.md = this.xc = this.wc = 0),
        (this.vc = []),
        (this.Wb = 0),
        (this.Ya = new R()),
        (this.yc = new I())
    }
    function yo() {
      ;(this.xb = this.a = 0),
        (this.l = new Wr()),
        (this.ca = new bn()),
        (this.V = []),
        (this.Ba = 0),
        (this.Ta = []),
        (this.Ua = 0),
        (this.m = new w()),
        (this.Pb = 0),
        (this.wd = new w()),
        (this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0),
        (this.s = new ga()),
        (this.ab = 0),
        (this.gc = l(4, ji)),
        (this.Oc = 0)
    }
    function $r() {
      ;(this.Lc = this.Z = this.$a = this.i = this.c = 0),
        (this.l = new Wr()),
        (this.ic = 0),
        (this.ca = []),
        (this.tb = 0),
        (this.qd = null),
        (this.rd = 0)
    }
    function Fr(t, r, c, d, m, b, y) {
      for (t = t == null ? 0 : t[r + 0], r = 0; r < y; ++r)
        (m[b + r] = (t + c[d + r]) & 255), (t = m[b + r])
    }
    function Oi(t, r, c, d, m, b, y) {
      var L
      if (t == null) Fr(null, null, c, d, m, b, y)
      else for (L = 0; L < y; ++L) m[b + L] = (t[r + L] + c[d + L]) & 255
    }
    function cr(t, r, c, d, m, b, y) {
      if (t == null) Fr(null, null, c, d, m, b, y)
      else {
        var L,
          x = t[r + 0],
          P = x,
          T = x
        for (L = 0; L < y; ++L)
          (P = T + (x = t[r + L]) - P),
            (T = (c[d + L] + (-256 & P ? (0 > P ? 0 : 255) : P)) & 255),
            (P = x),
            (m[b + L] = T)
      }
    }
    function Bi(t, r, c, d) {
      var m = r.width,
        b = r.o
      if ((e(t != null && r != null), 0 > c || 0 >= d || c + d > b)) return null
      if (!t.Cc) {
        if (t.ga == null) {
          var y
          if (
            ((t.ga = new $r()),
            (y = t.ga == null) ||
              ((y = r.width * r.o),
              e(t.Gb.length == 0),
              (t.Gb = o(y)),
              (t.Uc = 0),
              t.Gb == null ? (y = 0) : ((t.mb = t.Gb), (t.nb = t.Uc), (t.rc = null), (y = 1)),
              (y = !y)),
            !y)
          ) {
            y = t.ga
            var L = t.Fa,
              x = t.P,
              P = t.qc,
              T = t.mb,
              X = t.nb,
              K = x + 1,
              V = P - 1,
              ht = y.l
            if (
              (e(L != null && T != null && r != null),
              (gr[0] = null),
              (gr[1] = Fr),
              (gr[2] = Oi),
              (gr[3] = cr),
              (y.ca = T),
              (y.tb = X),
              (y.c = r.width),
              (y.i = r.height),
              e(0 < y.c && 0 < y.i),
              1 >= P)
            )
              r = 0
            else if (
              ((y.$a = (L[x + 0] >> 0) & 3),
              (y.Z = (L[x + 0] >> 2) & 3),
              (y.Lc = (L[x + 0] >> 4) & 3),
              (x = (L[x + 0] >> 6) & 3),
              0 > y.$a || 1 < y.$a || 4 <= y.Z || 1 < y.Lc || x)
            )
              r = 0
            else if (
              ((ht.put = En),
              (ht.ac = Ue),
              (ht.bc = qn),
              (ht.ma = y),
              (ht.width = r.width),
              (ht.height = r.height),
              (ht.Da = r.Da),
              (ht.v = r.v),
              (ht.va = r.va),
              (ht.j = r.j),
              (ht.o = r.o),
              y.$a)
            )
              t: {
                e(y.$a == 1), (r = hn())
                e: for (;;) {
                  if (r == null) {
                    r = 0
                    break t
                  }
                  if (
                    (e(y != null),
                    (y.mc = r),
                    (r.c = y.c),
                    (r.i = y.i),
                    (r.l = y.l),
                    (r.l.ma = y),
                    (r.l.width = y.c),
                    (r.l.height = y.i),
                    (r.a = 0),
                    tt(r.m, L, K, V),
                    !Tn(y.c, y.i, 1, r, null) ||
                      (r.ab == 1 && r.gc[0].hc == 3 && Jn(r.s)
                        ? ((y.ic = 1),
                          (L = r.c * r.i),
                          (r.Ta = null),
                          (r.Ua = 0),
                          (r.V = o(L)),
                          (r.Ba = 0),
                          r.V == null ? ((r.a = 1), (r = 0)) : (r = 1))
                        : ((y.ic = 0), (r = _r(r, y.c))),
                      !r))
                  )
                    break e
                  r = 1
                  break t
                }
                ;(y.mc = null), (r = 0)
              }
            else r = V >= y.c * y.i
            y = !r
          }
          if (y) return null
          t.ga.Lc != 1 ? (t.Ga = 0) : (d = b - c)
        }
        e(t.ga != null), e(c + d <= b)
        t: {
          if (((r = (L = t.ga).c), (b = L.l.o), L.$a == 0)) {
            if (
              ((K = t.rc),
              (V = t.Vc),
              (ht = t.Fa),
              (x = t.P + 1 + c * r),
              (P = t.mb),
              (T = t.nb + c * r),
              e(x <= t.P + t.qc),
              L.Z != 0)
            )
              for (e(gr[L.Z] != null), y = 0; y < d; ++y)
                gr[L.Z](K, V, ht, x, P, T, r), (K = P), (V = T), (T += r), (x += r)
            else for (y = 0; y < d; ++y) a(P, T, ht, x, r), (K = P), (V = T), (T += r), (x += r)
            ;(t.rc = K), (t.Vc = V)
          } else {
            if ((e(L.mc != null), (r = c + d), e((y = L.mc) != null), e(r <= y.i), y.C >= r)) r = 1
            else if ((L.ic || J(), L.ic)) {
              ;(L = y.V), (K = y.Ba), (V = y.c)
              var nt = y.i,
                z = ((ht = 1), (x = y.$ / V), (P = y.$ % V), (T = y.m), (X = y.s), y.$),
                U = V * nt,
                ut = V * r,
                gt = X.wc,
                lt = z < ut ? je(X, P, x) : null
              e(z <= U), e(r <= nt), e(Jn(X))
              e: for (;;) {
                for (; !T.h && z < ut; ) {
                  if (
                    (P & gt || (lt = je(X, P, x)),
                    e(lt != null),
                    Y(T),
                    256 > (nt = $e(lt.G[0], lt.H[0], T)))
                  )
                    (L[K + z] = nt), ++z, ++P >= V && ((P = 0), ++x <= r && !(x % 16) && Ln(y, x))
                  else {
                    if (!(280 > nt)) {
                      ht = 0
                      break e
                    }
                    nt = yn(nt - 256, T)
                    var Ct,
                      St = $e(lt.G[4], lt.H[4], T)
                    if ((Y(T), !(z >= (St = Dn(V, (St = yn(St, T)))) && U - z >= nt))) {
                      ht = 0
                      break e
                    }
                    for (Ct = 0; Ct < nt; ++Ct) L[K + z + Ct] = L[K + z + Ct - St]
                    for (z += nt, P += nt; P >= V; ) (P -= V), ++x <= r && !(x % 16) && Ln(y, x)
                    z < ut && P & gt && (lt = je(X, P, x))
                  }
                  e(T.h == E(T))
                }
                Ln(y, x > r ? r : x)
                break e
              }
              !ht || (T.h && z < U) ? ((ht = 0), (y.a = T.h ? 5 : 3)) : (y.$ = z), (r = ht)
            } else r = Nn(y, y.V, y.Ba, y.c, y.i, r, Rr)
            if (!r) {
              d = 0
              break t
            }
          }
          c + d >= b && (t.Cc = 1), (d = 1)
        }
        if (!d) return null
        if (t.Cc && ((d = t.ga) != null && (d.mc = null), (t.ga = null), 0 < t.Ga))
          return alert('todo:WebPDequantizeLevels'), null
      }
      return t.nb + c * m
    }
    function s(t, r, c, d, m, b) {
      for (; 0 < m--; ) {
        var y,
          L = t,
          x = r + (c ? 1 : 0),
          P = t,
          T = r + (c ? 0 : 3)
        for (y = 0; y < d; ++y) {
          var X = P[T + 4 * y]
          X != 255 &&
            ((X *= 32897),
            (L[x + 4 * y + 0] = (L[x + 4 * y + 0] * X) >> 23),
            (L[x + 4 * y + 1] = (L[x + 4 * y + 1] * X) >> 23),
            (L[x + 4 * y + 2] = (L[x + 4 * y + 2] * X) >> 23))
        }
        r += b
      }
    }
    function v(t, r, c, d, m) {
      for (; 0 < d--; ) {
        var b
        for (b = 0; b < c; ++b) {
          var y = t[r + 2 * b + 0],
            L = 15 & (P = t[r + 2 * b + 1]),
            x = 4369 * L,
            P = (((240 & P) | (P >> 4)) * x) >> 16
          ;(t[r + 2 * b + 0] =
            (((((240 & y) | (y >> 4)) * x) >> 16) & 240) |
            ((((((15 & y) | (y << 4)) * x) >> 16) >> 4) & 15)),
            (t[r + 2 * b + 1] = (240 & P) | L)
        }
        r += m
      }
    }
    function C(t, r, c, d, m, b, y, L) {
      var x,
        P,
        T = 255
      for (P = 0; P < m; ++P) {
        for (x = 0; x < d; ++x) {
          var X = t[r + x]
          ;(b[y + 4 * x] = X), (T &= X)
        }
        ;(r += c), (y += L)
      }
      return T != 255
    }
    function D(t, r, c, d, m) {
      var b
      for (b = 0; b < m; ++b) c[d + b] = t[r + b] >> 8
    }
    function J() {
      ;(dr = s), (si = v), (ba = C), (es = D)
    }
    function it(t, r, c) {
      G[t] = function (d, m, b, y, L, x, P, T, X, K, V, ht, nt, z, U, ut, gt) {
        var lt,
          Ct = (gt - 1) >> 1,
          St = L[x + 0] | (P[T + 0] << 16),
          Rt = X[K + 0] | (V[ht + 0] << 16)
        e(d != null)
        var _t = (3 * St + Rt + 131074) >> 2
        for (
          r(d[m + 0], 255 & _t, _t >> 16, nt, z),
            b != null &&
              ((_t = (3 * Rt + St + 131074) >> 2), r(b[y + 0], 255 & _t, _t >> 16, U, ut)),
            lt = 1;
          lt <= Ct;
          ++lt
        ) {
          var se = L[x + lt] | (P[T + lt] << 16),
            le = X[K + lt] | (V[ht + lt] << 16),
            ae = St + se + Rt + le + 524296,
            ne = (ae + 2 * (se + Rt)) >> 3
          ;(_t = (ne + St) >> 1),
            (St = ((ae = (ae + 2 * (St + le)) >> 3) + se) >> 1),
            r(d[m + 2 * lt - 1], 255 & _t, _t >> 16, nt, z + (2 * lt - 1) * c),
            r(d[m + 2 * lt - 0], 255 & St, St >> 16, nt, z + (2 * lt - 0) * c),
            b != null &&
              ((_t = (ae + Rt) >> 1),
              (St = (ne + le) >> 1),
              r(b[y + 2 * lt - 1], 255 & _t, _t >> 16, U, ut + (2 * lt - 1) * c),
              r(b[y + 2 * lt + 0], 255 & St, St >> 16, U, ut + (2 * lt + 0) * c)),
            (St = se),
            (Rt = le)
        }
        1 & gt ||
          ((_t = (3 * St + Rt + 131074) >> 2),
          r(d[m + gt - 1], 255 & _t, _t >> 16, nt, z + (gt - 1) * c),
          b != null &&
            ((_t = (3 * Rt + St + 131074) >> 2),
            r(b[y + gt - 1], 255 & _t, _t >> 16, U, ut + (gt - 1) * c)))
      }
    }
    function yt() {
      ;(gn[wa] = Sc),
        (gn[La] = fs),
        (gn[ss] = _c),
        (gn[Na] = ds),
        (gn[Aa] = ps),
        (gn[xo] = gs),
        (gn[cs] = Pc),
        (gn[So] = fs),
        (gn[_o] = ds),
        (gn[xa] = ps),
        (gn[Po] = gs)
    }
    function Ft(t) {
      return t & ~kc ? (0 > t ? 0 : 255) : t >> ms
    }
    function Dt(t, r) {
      return Ft(((19077 * t) >> 8) + ((26149 * r) >> 8) - 14234)
    }
    function Kt(t, r, c) {
      return Ft(((19077 * t) >> 8) - ((6419 * r) >> 8) - ((13320 * c) >> 8) + 8708)
    }
    function Qt(t, r) {
      return Ft(((19077 * t) >> 8) + ((33050 * r) >> 8) - 17685)
    }
    function re(t, r, c, d, m) {
      ;(d[m + 0] = Dt(t, c)), (d[m + 1] = Kt(t, r, c)), (d[m + 2] = Qt(t, r))
    }
    function Le(t, r, c, d, m) {
      ;(d[m + 0] = Qt(t, r)), (d[m + 1] = Kt(t, r, c)), (d[m + 2] = Dt(t, c))
    }
    function xe(t, r, c, d, m) {
      var b = Kt(t, r, c)
      ;(r = ((b << 3) & 224) | (Qt(t, r) >> 3)),
        (d[m + 0] = (248 & Dt(t, c)) | (b >> 5)),
        (d[m + 1] = r)
    }
    function Oe(t, r, c, d, m) {
      var b = (240 & Qt(t, r)) | 15
      ;(d[m + 0] = (240 & Dt(t, c)) | (Kt(t, r, c) >> 4)), (d[m + 1] = b)
    }
    function Ge(t, r, c, d, m) {
      ;(d[m + 0] = 255), re(t, r, c, d, m + 1)
    }
    function De(t, r, c, d, m) {
      Le(t, r, c, d, m), (d[m + 3] = 255)
    }
    function Sn(t, r, c, d, m) {
      re(t, r, c, d, m), (d[m + 3] = 255)
    }
    function sn(t, r) {
      return 0 > t ? 0 : t > r ? r : t
    }
    function Zn(t, r, c) {
      G[t] = function (d, m, b, y, L, x, P, T, X) {
        for (var K = T + (-2 & X) * c; T != K; )
          r(d[m + 0], b[y + 0], L[x + 0], P, T),
            r(d[m + 1], b[y + 0], L[x + 0], P, T + c),
            (m += 2),
            ++y,
            ++x,
            (T += 2 * c)
        1 & X && r(d[m + 0], b[y + 0], L[x + 0], P, T)
      }
    }
    function ma(t, r, c) {
      return c == 0 ? (t == 0 ? (r == 0 ? 6 : 5) : r == 0 ? 4 : 0) : c
    }
    function Mi(t, r, c, d, m) {
      switch (t >>> 30) {
        case 3:
          ai(r, c, d, m, 0)
          break
        case 2:
          Ui(r, c, d, m)
          break
        case 1:
          In(r, c, d, m)
      }
    }
    function Ei(t, r) {
      var c,
        d,
        m = r.M,
        b = r.Nb,
        y = t.oc,
        L = t.pc + 40,
        x = t.oc,
        P = t.pc + 584,
        T = t.oc,
        X = t.pc + 600
      for (c = 0; 16 > c; ++c) y[L + 32 * c - 1] = 129
      for (c = 0; 8 > c; ++c) (x[P + 32 * c - 1] = 129), (T[X + 32 * c - 1] = 129)
      for (
        0 < m
          ? (y[L - 1 - 32] = x[P - 1 - 32] = T[X - 1 - 32] = 129)
          : (u(y, L - 32 - 1, 127, 21), u(x, P - 32 - 1, 127, 9), u(T, X - 32 - 1, 127, 9)),
          d = 0;
        d < t.za;
        ++d
      ) {
        var K = r.ya[r.aa + d]
        if (0 < d) {
          for (c = -1; 16 > c; ++c) a(y, L + 32 * c - 4, y, L + 32 * c + 12, 4)
          for (c = -1; 8 > c; ++c)
            a(x, P + 32 * c - 4, x, P + 32 * c + 4, 4), a(T, X + 32 * c - 4, T, X + 32 * c + 4, 4)
        }
        var V = t.Gd,
          ht = t.Hd + d,
          nt = K.ad,
          z = K.Hc
        if (
          (0 < m &&
            (a(y, L - 32, V[ht].y, 0, 16),
            a(x, P - 32, V[ht].f, 0, 8),
            a(T, X - 32, V[ht].ea, 0, 8)),
          K.Za)
        ) {
          var U = y,
            ut = L - 32 + 16
          for (
            0 < m && (d >= t.za - 1 ? u(U, ut, V[ht].y[15], 4) : a(U, ut, V[ht + 1].y, 0, 4)),
              c = 0;
            4 > c;
            c++
          )
            U[ut + 128 + c] = U[ut + 256 + c] = U[ut + 384 + c] = U[ut + 0 + c]
          for (c = 0; 16 > c; ++c, z <<= 2)
            (U = y), (ut = L + bs[c]), Fn[K.Ob[c]](U, ut), Mi(z, nt, 16 * +c, U, ut)
        } else if (((U = ma(d, m, K.Ob[0])), pr[U](y, L), z != 0))
          for (c = 0; 16 > c; ++c, z <<= 2) Mi(z, nt, 16 * +c, y, L + bs[c])
        for (
          c = K.Gc,
            U = ma(d, m, K.Dd),
            nr[U](x, P),
            nr[U](T, X),
            z = nt,
            U = x,
            ut = P,
            255 & (K = c >> 0) && (170 & K ? hr(z, 256, U, ut) : Qn(z, 256, U, ut)),
            K = T,
            z = X,
            255 & (c >>= 8) && (170 & c ? hr(nt, 320, K, z) : Qn(nt, 320, K, z)),
            m < t.Ub - 1 &&
              (a(V[ht].y, 0, y, L + 480, 16),
              a(V[ht].f, 0, x, P + 224, 8),
              a(V[ht].ea, 0, T, X + 224, 8)),
            c = 8 * b * t.B,
            V = t.sa,
            ht = t.ta + 16 * d + 16 * b * t.R,
            nt = t.qa,
            K = t.ra + 8 * d + c,
            z = t.Ha,
            U = t.Ia + 8 * d + c,
            c = 0;
          16 > c;
          ++c
        )
          a(V, ht + c * t.R, y, L + 32 * c, 16)
        for (c = 0; 8 > c; ++c)
          a(nt, K + c * t.B, x, P + 32 * c, 8), a(z, U + c * t.B, T, X + 32 * c, 8)
      }
    }
    function Qr(t, r, c, d, m, b, y, L, x) {
      var P = [0],
        T = [0],
        X = 0,
        K = x != null ? x.kd : 0,
        V = x != null ? x : new Ci()
      if (t == null || 12 > c) return 7
      ;(V.data = t), (V.w = r), (V.ha = c), (r = [r]), (c = [c]), (V.gb = [V.gb])
      t: {
        var ht = r,
          nt = c,
          z = V.gb
        if (
          (e(t != null),
          e(nt != null),
          e(z != null),
          (z[0] = 0),
          12 <= nt[0] && !n(t, ht[0], 'RIFF'))
        ) {
          if (n(t, ht[0] + 8, 'WEBP')) {
            z = 3
            break t
          }
          var U = jt(t, ht[0] + 4)
          if (12 > U || 4294967286 < U) {
            z = 3
            break t
          }
          if (K && U > nt[0] - 8) {
            z = 7
            break t
          }
          ;(z[0] = U), (ht[0] += 12), (nt[0] -= 12)
        }
        z = 0
      }
      if (z != 0) return z
      for (U = 0 < V.gb[0], c = c[0]; ; ) {
        t: {
          var ut = t
          ;(nt = r), (z = c)
          var gt = P,
            lt = T,
            Ct = (ht = [0])
          if ((((_t = X = [X])[0] = 0), 8 > z[0])) z = 7
          else {
            if (!n(ut, nt[0], 'VP8X')) {
              if (jt(ut, nt[0] + 4) != 10) {
                z = 3
                break t
              }
              if (18 > z[0]) {
                z = 7
                break t
              }
              var St = jt(ut, nt[0] + 8),
                Rt = 1 + Ot(ut, nt[0] + 12)
              if (2147483648 <= Rt * (ut = 1 + Ot(ut, nt[0] + 15))) {
                z = 3
                break t
              }
              Ct != null && (Ct[0] = St),
                gt != null && (gt[0] = Rt),
                lt != null && (lt[0] = ut),
                (nt[0] += 18),
                (z[0] -= 18),
                (_t[0] = 1)
            }
            z = 0
          }
        }
        if (((X = X[0]), (ht = ht[0]), z != 0)) return z
        if (((nt = !!(2 & ht)), !U && X)) return 3
        if (
          (b != null && (b[0] = !!(16 & ht)),
          y != null && (y[0] = nt),
          L != null && (L[0] = 0),
          (y = P[0]),
          (ht = T[0]),
          X && nt && x == null)
        ) {
          z = 0
          break
        }
        if (4 > c) {
          z = 7
          break
        }
        if ((U && X) || (!U && !X && !n(t, r[0], 'ALPH'))) {
          ;(c = [c]), (V.na = [V.na]), (V.P = [V.P]), (V.Sa = [V.Sa])
          t: {
            ;(St = t), (z = r), (U = c)
            var _t = V.gb
            ;(gt = V.na),
              (lt = V.P),
              (Ct = V.Sa),
              (Rt = 22),
              e(St != null),
              e(U != null),
              (ut = z[0])
            var se = U[0]
            for (e(gt != null), e(Ct != null), gt[0] = null, lt[0] = null, Ct[0] = 0; ; ) {
              if (((z[0] = ut), (U[0] = se), 8 > se)) {
                z = 7
                break t
              }
              var le = jt(St, ut + 4)
              if (4294967286 < le) {
                z = 3
                break t
              }
              var ae = (8 + le + 1) & -2
              if (((Rt += ae), 0 < _t && Rt > _t)) {
                z = 3
                break t
              }
              if (!n(St, ut, 'VP8 ') || !n(St, ut, 'VP8L')) {
                z = 0
                break t
              }
              if (se[0] < ae) {
                z = 7
                break t
              }
              n(St, ut, 'ALPH') || ((gt[0] = St), (lt[0] = ut + 8), (Ct[0] = le)),
                (ut += ae),
                (se -= ae)
            }
          }
          if (((c = c[0]), (V.na = V.na[0]), (V.P = V.P[0]), (V.Sa = V.Sa[0]), z != 0)) break
        }
        ;(c = [c]), (V.Ja = [V.Ja]), (V.xa = [V.xa])
        t: if (
          ((_t = t),
          (z = r),
          (U = c),
          (gt = V.gb[0]),
          (lt = V.Ja),
          (Ct = V.xa),
          (St = z[0]),
          (ut = !n(_t, St, 'VP8 ')),
          (Rt = !n(_t, St, 'VP8L')),
          e(_t != null),
          e(U != null),
          e(lt != null),
          e(Ct != null),
          8 > U[0])
        )
          z = 7
        else {
          if (ut || Rt) {
            if (((_t = jt(_t, St + 4)), 12 <= gt && _t > gt - 12)) {
              z = 3
              break t
            }
            if (K && _t > U[0] - 8) {
              z = 7
              break t
            }
            ;(lt[0] = _t), (z[0] += 8), (U[0] -= 8), (Ct[0] = Rt)
          } else (Ct[0] = 5 <= U[0] && _t[St + 0] == 47 && !(_t[St + 4] >> 5)), (lt[0] = U[0])
          z = 0
        }
        if (((c = c[0]), (V.Ja = V.Ja[0]), (V.xa = V.xa[0]), (r = r[0]), z != 0)) break
        if (4294967286 < V.Ja) return 3
        if ((L == null || nt || (L[0] = V.xa ? 2 : 1), (y = [y]), (ht = [ht]), V.xa)) {
          if (5 > c) {
            z = 7
            break
          }
          ;(L = y),
            (K = ht),
            (nt = b),
            t == null || 5 > c
              ? (t = 0)
              : 5 <= c && t[r + 0] == 47 && !(t[r + 4] >> 5)
              ? ((U = [0]),
                (_t = [0]),
                (gt = [0]),
                tt((lt = new w()), t, r, c),
                Tt(lt, U, _t, gt)
                  ? (L != null && (L[0] = U[0]),
                    K != null && (K[0] = _t[0]),
                    nt != null && (nt[0] = gt[0]),
                    (t = 1))
                  : (t = 0))
              : (t = 0)
        } else {
          if (10 > c) {
            z = 7
            break
          }
          ;(L = ht),
            t == null || 10 > c || !ta(t, r + 3, c - 3)
              ? (t = 0)
              : ((K = t[r + 0] | (t[r + 1] << 8) | (t[r + 2] << 16)),
                (nt = 16383 & ((t[r + 7] << 8) | t[r + 6])),
                (t = 16383 & ((t[r + 9] << 8) | t[r + 8])),
                1 & K || 3 < ((K >> 1) & 7) || !((K >> 4) & 1) || K >> 5 >= V.Ja || !nt || !t
                  ? (t = 0)
                  : (y && (y[0] = nt), L && (L[0] = t), (t = 1)))
        }
        if (!t || ((y = y[0]), (ht = ht[0]), X && (P[0] != y || T[0] != ht))) return 3
        x != null &&
          ((x[0] = V), (x.offset = r - x.w), e(4294967286 > r - x.w), e(x.offset == x.ha - c))
        break
      }
      return z == 0 || (z == 7 && X && x == null)
        ? (b != null && (b[0] |= V.na != null && 0 < V.na.length),
          d != null && (d[0] = y),
          m != null && (m[0] = ht),
          0)
        : z
    }
    function qi(t, r, c) {
      var d = r.width,
        m = r.height,
        b = 0,
        y = 0,
        L = d,
        x = m
      if (
        ((r.Da = t != null && 0 < t.Da),
        r.Da &&
          ((L = t.cd),
          (x = t.bd),
          (b = t.v),
          (y = t.j),
          11 > c || ((b &= -2), (y &= -2)),
          0 > b || 0 > y || 0 >= L || 0 >= x || b + L > d || y + x > m))
      )
        return 0
      if (
        ((r.v = b),
        (r.j = y),
        (r.va = b + L),
        (r.o = y + x),
        (r.U = L),
        (r.T = x),
        (r.da = t != null && 0 < t.da),
        r.da)
      ) {
        if (!Xt(L, x, (c = [t.ib]), (b = [t.hb]))) return 0
        ;(r.ib = c[0]), (r.hb = b[0])
      }
      return (
        (r.ob = t != null && t.ob),
        (r.Kb = t == null || !t.Sd),
        r.da && ((r.ob = r.ib < (3 * d) / 4 && r.hb < (3 * m) / 4), (r.Kb = 0)),
        1
      )
    }
    function Di(t) {
      if (t == null) return 2
      if (11 > t.S) {
        var r = t.f.RGBA
        ;(r.fb += (t.height - 1) * r.A), (r.A = -r.A)
      } else
        (r = t.f.kb),
          (t = t.height),
          (r.O += (t - 1) * r.fa),
          (r.fa = -r.fa),
          (r.N += ((t - 1) >> 1) * r.Ab),
          (r.Ab = -r.Ab),
          (r.W += ((t - 1) >> 1) * r.Db),
          (r.Db = -r.Db),
          r.F != null && ((r.J += (t - 1) * r.lb), (r.lb = -r.lb))
      return 0
    }
    function ti(t, r, c, d) {
      if (d == null || 0 >= t || 0 >= r) return 2
      if (c != null) {
        if (c.Da) {
          var m = c.cd,
            b = c.bd,
            y = -2 & c.v,
            L = -2 & c.j
          if (0 > y || 0 > L || 0 >= m || 0 >= b || y + m > t || L + b > r) return 2
          ;(t = m), (r = b)
        }
        if (c.da) {
          if (!Xt(t, r, (m = [c.ib]), (b = [c.hb]))) return 2
          ;(t = m[0]), (r = b[0])
        }
      }
      ;(d.width = t), (d.height = r)
      t: {
        var x = d.width,
          P = d.height
        if (((t = d.S), 0 >= x || 0 >= P || !(t >= wa && 13 > t))) t = 2
        else {
          if (0 >= d.Rd && d.sd == null) {
            y = b = m = r = 0
            var T = (L = x * ys[t]) * P
            if (
              (11 > t || ((b = ((P + 1) / 2) * (r = (x + 1) / 2)), t == 12 && (y = (m = x) * P)),
              (P = o(T + 2 * b + y)) == null)
            ) {
              t = 1
              break t
            }
            ;(d.sd = P),
              11 > t
                ? (((x = d.f.RGBA).eb = P), (x.fb = 0), (x.A = L), (x.size = T))
                : (((x = d.f.kb).y = P),
                  (x.O = 0),
                  (x.fa = L),
                  (x.Fd = T),
                  (x.f = P),
                  (x.N = 0 + T),
                  (x.Ab = r),
                  (x.Cd = b),
                  (x.ea = P),
                  (x.W = 0 + T + b),
                  (x.Db = r),
                  (x.Ed = b),
                  t == 12 && ((x.F = P), (x.J = 0 + T + 2 * b)),
                  (x.Tc = y),
                  (x.lb = m))
          }
          if (((r = 1), (m = d.S), (b = d.width), (y = d.height), m >= wa && 13 > m))
            if (11 > m)
              (t = d.f.RGBA),
                (r &= (L = Math.abs(t.A)) * (y - 1) + b <= t.size),
                (r &= L >= b * ys[m]),
                (r &= t.eb != null)
            else {
              ;(t = d.f.kb),
                (L = (b + 1) / 2),
                (T = (y + 1) / 2),
                (x = Math.abs(t.fa)),
                (P = Math.abs(t.Ab))
              var X = Math.abs(t.Db),
                K = Math.abs(t.lb),
                V = K * (y - 1) + b
              ;(r &= x * (y - 1) + b <= t.Fd),
                (r &= P * (T - 1) + L <= t.Cd),
                (r = (r &= X * (T - 1) + L <= t.Ed) & (x >= b) & (P >= L) & (X >= L)),
                (r &= t.y != null),
                (r &= t.f != null),
                (r &= t.ea != null),
                m == 12 && ((r &= K >= b), (r &= V <= t.Tc), (r &= t.F != null))
            }
          else r = 0
          t = r ? 0 : 2
        }
      }
      return t != 0 || (c != null && c.fd && (t = Di(d))), t
    }
    var tn = 64,
      ei = [
        0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071,
        262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215
      ],
      ni = 24,
      ri = 32,
      Ri = 8,
      en = [
        0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
        4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
        6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 7, 7, 7, 7
      ]
    xt('Predictor0', 'PredictorAdd0'),
      (G.Predictor0 = function () {
        return 4278190080
      }),
      (G.Predictor1 = function (t) {
        return t
      }),
      (G.Predictor2 = function (t, r, c) {
        return r[c + 0]
      }),
      (G.Predictor3 = function (t, r, c) {
        return r[c + 1]
      }),
      (G.Predictor4 = function (t, r, c) {
        return r[c - 1]
      }),
      (G.Predictor5 = function (t, r, c) {
        return Pt(Pt(t, r[c + 1]), r[c + 0])
      }),
      (G.Predictor6 = function (t, r, c) {
        return Pt(t, r[c - 1])
      }),
      (G.Predictor7 = function (t, r, c) {
        return Pt(t, r[c + 0])
      }),
      (G.Predictor8 = function (t, r, c) {
        return Pt(r[c - 1], r[c + 0])
      }),
      (G.Predictor9 = function (t, r, c) {
        return Pt(r[c + 0], r[c + 1])
      }),
      (G.Predictor10 = function (t, r, c) {
        return Pt(Pt(t, r[c - 1]), Pt(r[c + 0], r[c + 1]))
      }),
      (G.Predictor11 = function (t, r, c) {
        var d = r[c + 0]
        return 0 >=
          $t((d >> 24) & 255, (t >> 24) & 255, ((r = r[c - 1]) >> 24) & 255) +
            $t((d >> 16) & 255, (t >> 16) & 255, (r >> 16) & 255) +
            $t((d >> 8) & 255, (t >> 8) & 255, (r >> 8) & 255) +
            $t(255 & d, 255 & t, 255 & r)
          ? d
          : t
      }),
      (G.Predictor12 = function (t, r, c) {
        var d = r[c + 0]
        return (
          ((qt(((t >> 24) & 255) + ((d >> 24) & 255) - (((r = r[c - 1]) >> 24) & 255)) << 24) |
            (qt(((t >> 16) & 255) + ((d >> 16) & 255) - ((r >> 16) & 255)) << 16) |
            (qt(((t >> 8) & 255) + ((d >> 8) & 255) - ((r >> 8) & 255)) << 8) |
            qt((255 & t) + (255 & d) - (255 & r))) >>>
          0
        )
      }),
      (G.Predictor13 = function (t, r, c) {
        var d = r[c - 1]
        return (
          ((Gt(((t = Pt(t, r[c + 0])) >> 24) & 255, (d >> 24) & 255) << 24) |
            (Gt((t >> 16) & 255, (d >> 16) & 255) << 16) |
            (Gt((t >> 8) & 255, (d >> 8) & 255) << 8) |
            Gt((t >> 0) & 255, (d >> 0) & 255)) >>>
          0
        )
      })
    var wo = G.PredictorAdd0
    ;(G.PredictorAdd1 = te),
      xt('Predictor2', 'PredictorAdd2'),
      xt('Predictor3', 'PredictorAdd3'),
      xt('Predictor4', 'PredictorAdd4'),
      xt('Predictor5', 'PredictorAdd5'),
      xt('Predictor6', 'PredictorAdd6'),
      xt('Predictor7', 'PredictorAdd7'),
      xt('Predictor8', 'PredictorAdd8'),
      xt('Predictor9', 'PredictorAdd9'),
      xt('Predictor10', 'PredictorAdd10'),
      xt('Predictor11', 'PredictorAdd11'),
      xt('Predictor12', 'PredictorAdd12'),
      xt('Predictor13', 'PredictorAdd13')
    var Ti = G.PredictorAdd2
    ee(
      'ColorIndexInverseTransform',
      'MapARGB',
      '32b',
      function (t) {
        return (t >> 8) & 255
      },
      function (t) {
        return t
      }
    ),
      ee(
        'VP8LColorIndexInverseTransformAlpha',
        'MapAlpha',
        '8b',
        function (t) {
          return t
        },
        function (t) {
          return (t >> 8) & 255
        }
      )
    var va,
      _n = G.ColorIndexInverseTransform,
      zi = G.MapARGB,
      Lo = G.VP8LColorIndexInverseTransformAlpha,
      No = G.MapAlpha,
      ur = (G.VP8LPredictorsAdd = [])
    ;(ur.length = 16),
      ((G.VP8LPredictors = []).length = 16),
      ((G.VP8LPredictorsAdd_C = []).length = 16),
      ((G.VP8LPredictors_C = []).length = 16)
    var fn,
      Pn,
      lr,
      Un,
      $n,
      ii,
      kn,
      ai,
      Ui,
      hr,
      In,
      Qn,
      Cr,
      oi,
      jr,
      fr,
      Hi,
      dn,
      tr,
      be,
      ye,
      ke,
      qe,
      er,
      dr,
      si,
      ba,
      es,
      ns = o(511),
      rs = o(2041),
      is = o(225),
      as = o(767),
      os = 0,
      Ao = rs,
      ya = is,
      cn = as,
      pn = ns,
      wa = 0,
      La = 1,
      ss = 2,
      Na = 3,
      Aa = 4,
      xo = 5,
      cs = 6,
      So = 7,
      _o = 8,
      xa = 9,
      Po = 10,
      hc = [2, 3, 7],
      fc = [3, 3, 11],
      us = [280, 256, 256, 256, 40],
      dc = [0, 1, 1, 1, 0],
      pc = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      gc = [
        24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4,
        71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35,
        45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101,
        107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123,
        49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64,
        114, 126, 97, 111, 80, 113, 127, 96, 112
      ],
      mc = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004],
      vc = 8,
      ko = [
        4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22,
        23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42,
        43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64,
        65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
        87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122,
        124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157
      ],
      Io = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88,
        90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131,
        134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189,
        193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269,
        274, 279, 284
      ],
      Wi = null,
      bc = [
        [173, 148, 140, 0],
        [176, 155, 140, 135, 0],
        [180, 157, 141, 134, 130, 0],
        [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]
      ],
      yc = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15],
      ls = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9],
      wc = [
        [
          [
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
          ],
          [
            [253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
            [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128],
            [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]
          ],
          [
            [1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
            [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
            [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]
          ],
          [
            [1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
            [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
            [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]
          ],
          [
            [1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
            [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
            [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]
          ],
          [
            [1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128],
            [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
            [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]
          ],
          [
            [1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
            [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
            [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]
          ],
          [
            [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
          ]
        ],
        [
          [
            [198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
            [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
            [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]
          ],
          [
            [1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
            [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
            [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]
          ],
          [
            [1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
            [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
            [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]
          ],
          [
            [1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
            [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
            [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]
          ],
          [
            [1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
            [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
            [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]
          ],
          [
            [1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
            [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
            [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]
          ],
          [
            [1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
            [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
            [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]
          ],
          [
            [1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
            [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
            [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]
          ]
        ],
        [
          [
            [253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
            [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128],
            [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]
          ],
          [
            [1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
            [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
            [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]
          ],
          [
            [1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
            [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
            [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]
          ],
          [
            [1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
            [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
            [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]
          ],
          [
            [1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128],
            [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
            [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
          ],
          [
            [1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]
          ],
          [
            [1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
            [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
            [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]
          ],
          [
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
          ]
        ],
        [
          [
            [202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
            [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
            [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]
          ],
          [
            [1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
            [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
            [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]
          ],
          [
            [1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
            [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
            [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]
          ],
          [
            [1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
            [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128],
            [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]
          ],
          [
            [1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
            [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
            [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]
          ],
          [
            [1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
            [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
            [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]
          ],
          [
            [1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
            [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
            [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]
          ],
          [
            [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
          ]
        ]
      ],
      Lc = [
        [
          [231, 120, 48, 89, 115, 113, 120, 152, 112],
          [152, 179, 64, 126, 170, 118, 46, 70, 95],
          [175, 69, 143, 80, 85, 82, 72, 155, 103],
          [56, 58, 10, 171, 218, 189, 17, 13, 152],
          [114, 26, 17, 163, 44, 195, 21, 10, 173],
          [121, 24, 80, 195, 26, 62, 44, 64, 85],
          [144, 71, 10, 38, 171, 213, 144, 34, 26],
          [170, 46, 55, 19, 136, 160, 33, 206, 71],
          [63, 20, 8, 114, 114, 208, 12, 9, 226],
          [81, 40, 11, 96, 182, 84, 29, 16, 36]
        ],
        [
          [134, 183, 89, 137, 98, 101, 106, 165, 148],
          [72, 187, 100, 130, 157, 111, 32, 75, 80],
          [66, 102, 167, 99, 74, 62, 40, 234, 128],
          [41, 53, 9, 178, 241, 141, 26, 8, 107],
          [74, 43, 26, 146, 73, 166, 49, 23, 157],
          [65, 38, 105, 160, 51, 52, 31, 115, 128],
          [104, 79, 12, 27, 217, 255, 87, 17, 7],
          [87, 68, 71, 44, 114, 51, 15, 186, 23],
          [47, 41, 14, 110, 182, 183, 21, 17, 194],
          [66, 45, 25, 102, 197, 189, 23, 18, 22]
        ],
        [
          [88, 88, 147, 150, 42, 46, 45, 196, 205],
          [43, 97, 183, 117, 85, 38, 35, 179, 61],
          [39, 53, 200, 87, 26, 21, 43, 232, 171],
          [56, 34, 51, 104, 114, 102, 29, 93, 77],
          [39, 28, 85, 171, 58, 165, 90, 98, 64],
          [34, 22, 116, 206, 23, 34, 43, 166, 73],
          [107, 54, 32, 26, 51, 1, 81, 43, 31],
          [68, 25, 106, 22, 64, 171, 36, 225, 114],
          [34, 19, 21, 102, 132, 188, 16, 76, 124],
          [62, 18, 78, 95, 85, 57, 50, 48, 51]
        ],
        [
          [193, 101, 35, 159, 215, 111, 89, 46, 111],
          [60, 148, 31, 172, 219, 228, 21, 18, 111],
          [112, 113, 77, 85, 179, 255, 38, 120, 114],
          [40, 42, 1, 196, 245, 209, 10, 25, 109],
          [88, 43, 29, 140, 166, 213, 37, 43, 154],
          [61, 63, 30, 155, 67, 45, 68, 1, 209],
          [100, 80, 8, 43, 154, 1, 51, 26, 71],
          [142, 78, 78, 16, 255, 128, 34, 197, 171],
          [41, 40, 5, 102, 211, 183, 4, 1, 221],
          [51, 50, 17, 168, 209, 192, 23, 25, 82]
        ],
        [
          [138, 31, 36, 171, 27, 166, 38, 44, 229],
          [67, 87, 58, 169, 82, 115, 26, 59, 179],
          [63, 59, 90, 180, 59, 166, 93, 73, 154],
          [40, 40, 21, 116, 143, 209, 34, 39, 175],
          [47, 15, 16, 183, 34, 223, 49, 45, 183],
          [46, 17, 33, 183, 6, 98, 15, 32, 183],
          [57, 46, 22, 24, 128, 1, 54, 17, 37],
          [65, 32, 73, 115, 28, 128, 23, 128, 205],
          [40, 3, 9, 115, 51, 192, 18, 6, 223],
          [87, 37, 9, 115, 59, 77, 64, 21, 47]
        ],
        [
          [104, 55, 44, 218, 9, 54, 53, 130, 226],
          [64, 90, 70, 205, 40, 41, 23, 26, 57],
          [54, 57, 112, 184, 5, 41, 38, 166, 213],
          [30, 34, 26, 133, 152, 116, 10, 32, 134],
          [39, 19, 53, 221, 26, 114, 32, 73, 255],
          [31, 9, 65, 234, 2, 15, 1, 118, 73],
          [75, 32, 12, 51, 192, 255, 160, 43, 51],
          [88, 31, 35, 67, 102, 85, 55, 186, 85],
          [56, 21, 23, 111, 59, 205, 45, 37, 192],
          [55, 38, 70, 124, 73, 102, 1, 34, 98]
        ],
        [
          [125, 98, 42, 88, 104, 85, 117, 175, 82],
          [95, 84, 53, 89, 128, 100, 113, 101, 45],
          [75, 79, 123, 47, 51, 128, 81, 171, 1],
          [57, 17, 5, 71, 102, 57, 53, 41, 49],
          [38, 33, 13, 121, 57, 73, 26, 1, 85],
          [41, 10, 67, 138, 77, 110, 90, 47, 114],
          [115, 21, 2, 10, 102, 255, 166, 23, 6],
          [101, 29, 16, 10, 85, 128, 101, 196, 26],
          [57, 18, 10, 102, 102, 213, 34, 20, 43],
          [117, 20, 15, 36, 163, 128, 68, 1, 26]
        ],
        [
          [102, 61, 71, 37, 34, 53, 31, 243, 192],
          [69, 60, 71, 38, 73, 119, 28, 222, 37],
          [68, 45, 128, 34, 1, 47, 11, 245, 171],
          [62, 17, 19, 70, 146, 85, 55, 62, 70],
          [37, 43, 37, 154, 100, 163, 85, 160, 1],
          [63, 9, 92, 136, 28, 64, 32, 201, 85],
          [75, 15, 9, 9, 64, 255, 184, 119, 16],
          [86, 6, 28, 5, 64, 255, 25, 248, 1],
          [56, 8, 17, 132, 137, 255, 55, 116, 128],
          [58, 15, 20, 82, 135, 57, 26, 121, 40]
        ],
        [
          [164, 50, 31, 137, 154, 133, 25, 35, 218],
          [51, 103, 44, 131, 131, 123, 31, 6, 158],
          [86, 40, 64, 135, 148, 224, 45, 183, 128],
          [22, 26, 17, 131, 240, 154, 14, 1, 209],
          [45, 16, 21, 91, 64, 222, 7, 1, 197],
          [56, 21, 39, 155, 60, 138, 23, 102, 213],
          [83, 12, 13, 54, 192, 255, 68, 47, 28],
          [85, 26, 85, 85, 128, 128, 32, 146, 171],
          [18, 11, 7, 63, 144, 171, 4, 4, 246],
          [35, 27, 10, 146, 174, 171, 12, 26, 128]
        ],
        [
          [190, 80, 35, 99, 180, 80, 126, 54, 45],
          [85, 126, 47, 87, 176, 51, 41, 20, 32],
          [101, 75, 128, 139, 118, 146, 116, 128, 85],
          [56, 41, 15, 176, 236, 85, 37, 9, 62],
          [71, 30, 17, 119, 118, 255, 17, 18, 138],
          [101, 38, 60, 138, 55, 70, 43, 26, 142],
          [146, 36, 19, 30, 171, 255, 97, 27, 20],
          [138, 45, 61, 62, 219, 1, 81, 188, 64],
          [32, 41, 20, 117, 151, 142, 20, 21, 163],
          [112, 19, 12, 61, 195, 128, 48, 4, 24]
        ]
      ],
      Nc = [
        [
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255],
            [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255],
            [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255],
            [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ]
        ],
        [
          [
            [217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255],
            [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]
          ],
          [
            [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ]
        ],
        [
          [
            [186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255],
            [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255],
            [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]
          ],
          [
            [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ]
        ],
        [
          [
            [248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255],
            [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255],
            [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ]
        ]
      ],
      Ac = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0],
      pr = [],
      Fn = [],
      nr = [],
      xc = 1,
      hs = 2,
      gr = [],
      gn = []
    it('UpsampleRgbLinePair', re, 3),
      it('UpsampleBgrLinePair', Le, 3),
      it('UpsampleRgbaLinePair', Sn, 4),
      it('UpsampleBgraLinePair', De, 4),
      it('UpsampleArgbLinePair', Ge, 4),
      it('UpsampleRgba4444LinePair', Oe, 2),
      it('UpsampleRgb565LinePair', xe, 2)
    var Sc = G.UpsampleRgbLinePair,
      _c = G.UpsampleBgrLinePair,
      fs = G.UpsampleRgbaLinePair,
      ds = G.UpsampleBgraLinePair,
      ps = G.UpsampleArgbLinePair,
      gs = G.UpsampleRgba4444LinePair,
      Pc = G.UpsampleRgb565LinePair,
      Sa = 16,
      _a = 1 << (Sa - 1),
      Vi = -227,
      Fo = 482,
      ms = 6,
      kc = (256 << ms) - 1,
      vs = 0,
      Ic = o(256),
      Fc = o(256),
      Cc = o(256),
      jc = o(256),
      Oc = o(Fo - Vi),
      Bc = o(Fo - Vi)
    Zn('YuvToRgbRow', re, 3),
      Zn('YuvToBgrRow', Le, 3),
      Zn('YuvToRgbaRow', Sn, 4),
      Zn('YuvToBgraRow', De, 4),
      Zn('YuvToArgbRow', Ge, 4),
      Zn('YuvToRgba4444Row', Oe, 2),
      Zn('YuvToRgb565Row', xe, 2)
    var bs = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396],
      Pa = [0, 2, 8],
      Mc = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1],
      Ec = 1
    this.WebPDecodeRGBA = function (t, r, c, d, m) {
      var b = La,
        y = new Zr(),
        L = new bn()
      ;(y.ba = L), (L.S = b), (L.width = [L.width]), (L.height = [L.height])
      var x = L.width,
        P = L.height,
        T = new Yn()
      if (T == null || t == null) var X = 2
      else e(T != null), (X = Qr(t, r, c, T.width, T.height, T.Pd, T.Qd, T.format, null))
      if (
        (X != 0
          ? (x = 0)
          : (x != null && (x[0] = T.width[0]), P != null && (P[0] = T.height[0]), (x = 1)),
        x)
      ) {
        ;(L.width = L.width[0]),
          (L.height = L.height[0]),
          d != null && (d[0] = L.width),
          m != null && (m[0] = L.height)
        t: {
          if (
            ((d = new Wr()),
            ((m = new Ci()).data = t),
            (m.w = r),
            (m.ha = c),
            (m.kd = 1),
            (r = [0]),
            e(m != null),
            ((t = Qr(m.data, m.w, m.ha, null, null, null, r, null, m)) == 0 || t == 7) &&
              r[0] &&
              (t = 4),
            (r = t) == 0)
          ) {
            if (
              (e(y != null),
              (d.data = m.data),
              (d.w = m.w + m.offset),
              (d.ha = m.ha - m.offset),
              (d.put = En),
              (d.ac = Ue),
              (d.bc = qn),
              (d.ma = y),
              m.xa)
            ) {
              if ((t = hn()) == null) {
                y = 1
                break t
              }
              if (
                (function (K, V) {
                  var ht = [0],
                    nt = [0],
                    z = [0]
                  e: for (;;) {
                    if (K == null) return 0
                    if (V == null) return (K.a = 2), 0
                    if (((K.l = V), (K.a = 0), tt(K.m, V.data, V.w, V.ha), !Tt(K.m, ht, nt, z))) {
                      K.a = 3
                      break e
                    }
                    if (
                      ((K.xb = hs),
                      (V.width = ht[0]),
                      (V.height = nt[0]),
                      !Tn(ht[0], nt[0], 1, K, null))
                    )
                      break e
                    return 1
                  }
                  return e(K.a != 0), 0
                })(t, d)
              ) {
                if ((d = (r = ti(d.width, d.height, y.Oa, y.ba)) == 0)) {
                  e: {
                    d = t
                    n: for (;;) {
                      if (d == null) {
                        d = 0
                        break e
                      }
                      if (
                        (e(d.s.yc != null),
                        e(d.s.Ya != null),
                        e(0 < d.s.Wb),
                        e((c = d.l) != null),
                        e((m = c.ma) != null),
                        d.xb != 0)
                      ) {
                        if (((d.ca = m.ba), (d.tb = m.tb), e(d.ca != null), !qi(m.Oa, c, Na))) {
                          d.a = 2
                          break n
                        }
                        if (!_r(d, c.width) || c.da) break n
                        if (
                          ((c.da || ce(d.ca.S)) && J(),
                          11 > d.ca.S ||
                            (alert('todo:WebPInitConvertARGBToYUV'), d.ca.f.kb.F != null && J()),
                          d.Pb && 0 < d.s.ua && d.s.vb.X == null && !Wt(d.s.vb, d.s.Wa.Xa))
                        ) {
                          d.a = 1
                          break n
                        }
                        d.xb = 0
                      }
                      if (!Nn(d, d.V, d.Ba, d.c, d.i, c.o, Dr)) break n
                      ;(m.Dc = d.Ma), (d = 1)
                      break e
                    }
                    e(d.a != 0), (d = 0)
                  }
                  d = !d
                }
                d && (r = t.a)
              } else r = t.a
            } else {
              if ((t = new to()) == null) {
                y = 1
                break t
              }
              if (((t.Fa = m.na), (t.P = m.P), (t.qc = m.Sa), ea(t, d))) {
                if ((r = ti(d.width, d.height, y.Oa, y.ba)) == 0) {
                  if (((t.Aa = 0), (c = y.Oa), e((m = t) != null), c != null)) {
                    if (0 < (x = 0 > (x = c.Md) ? 0 : 100 < x ? 255 : (255 * x) / 100)) {
                      for (P = T = 0; 4 > P; ++P)
                        12 > (X = m.pb[P]).lc && (X.ia = (x * Mc[0 > X.lc ? 0 : X.lc]) >> 3),
                          (T |= X.ia)
                      T && (alert('todo:VP8InitRandom'), (m.ia = 1))
                    }
                    ;(m.Ga = c.Id), 100 < m.Ga ? (m.Ga = 100) : 0 > m.Ga && (m.Ga = 0)
                  }
                  eo(t, d) || (r = t.a)
                }
              } else r = t.a
            }
            r == 0 && y.Oa != null && y.Oa.fd && (r = Di(y.ba))
          }
          y = r
        }
        b = y != 0 ? null : 11 > b ? L.f.RGBA.eb : L.f.kb.y
      } else b = null
      return b
    }
    var ys = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1]
  }
  function g(G, vt) {
    for (var bt = '', k = 0; k < 4; k++) bt += String.fromCharCode(G[vt++])
    return bt
  }
  function A(G, vt) {
    return ((G[vt + 0] << 0) | (G[vt + 1] << 8) | (G[vt + 2] << 16)) >>> 0
  }
  function N(G, vt) {
    return ((G[vt + 0] << 0) | (G[vt + 1] << 8) | (G[vt + 2] << 16) | (G[vt + 3] << 24)) >>> 0
  }
  new f()
  var _ = [0],
    p = [0],
    B = [],
    F = new f(),
    q = i,
    S = (function (G, vt) {
      var bt = {},
        k = 0,
        I = !1,
        H = 0,
        R = 0
      if (
        ((bt.frames = []),
        !(function (j, E, W, Y) {
          for (var $ = 0; $ < Y; $++) if (j[E + $] != W.charCodeAt($)) return !0
          return !1
        })(G, vt, 'RIFF', 4))
      ) {
        var ct, ot
        for (N(G, (vt += 4)), vt += 8; vt < G.length; ) {
          var mt = g(G, vt),
            tt = N(G, (vt += 4))
          vt += 4
          var pt = tt + (1 & tt)
          switch (mt) {
            case 'VP8 ':
            case 'VP8L':
              bt.frames[k] === void 0 && (bt.frames[k] = {}),
                ((w = bt.frames[k]).src_off = I ? R : vt - 8),
                (w.src_size = H + tt + 8),
                k++,
                I && ((I = !1), (H = 0), (R = 0))
              break
            case 'VP8X':
              ;(w = bt.header = {}).feature_flags = G[vt]
              var ft = vt + 4
              ;(w.canvas_width = 1 + A(G, ft)),
                (ft += 3),
                (w.canvas_height = 1 + A(G, ft)),
                (ft += 3)
              break
            case 'ALPH':
              ;(I = !0), (H = pt + 8), (R = vt - 8)
              break
            case 'ANIM':
              ;((w = bt.header).bgcolor = N(G, vt)),
                (ft = vt + 4),
                (w.loop_count = ((ct = G)[(ot = ft) + 0] << 0) | (ct[ot + 1] << 8)),
                (ft += 2)
              break
            case 'ANMF':
              var Et, w
              ;((w = bt.frames[k] = {}).offset_x = 2 * A(G, vt)),
                (vt += 3),
                (w.offset_y = 2 * A(G, vt)),
                (vt += 3),
                (w.width = 1 + A(G, vt)),
                (vt += 3),
                (w.height = 1 + A(G, vt)),
                (vt += 3),
                (w.duration = A(G, vt)),
                (vt += 3),
                (Et = G[vt++]),
                (w.dispose = 1 & Et),
                (w.blend = (Et >> 1) & 1)
          }
          mt != 'ANMF' && (vt += pt)
        }
        return bt
      }
    })(q, 0)
  ;(S.response = q), (S.rgbaoutput = !0), (S.dataurl = !1)
  var M = S.header ? S.header : null,
    Z = S.frames ? S.frames : null
  if (M) {
    ;(M.loop_counter = M.loop_count), (_ = [M.canvas_height]), (p = [M.canvas_width])
    for (var st = 0; st < Z.length && Z[st].blend != 0; st++);
  }
  var dt = Z[0],
    Nt = F.WebPDecodeRGBA(q, dt.src_off, dt.src_size, p, _)
  ;(dt.rgba = Nt), (dt.imgwidth = p[0]), (dt.imgheight = _[0])
  for (var rt = 0; rt < p[0] * _[0] * 4; rt++) B[rt] = Nt[rt]
  return (this.width = p), (this.height = _), (this.data = B), this
}
;(function (i) {
  var e = function () {
      return typeof Go == 'function'
    },
    n = function (_, p, B, F) {
      var q = 4,
        S = l
      switch (F) {
        case i.image_compression.FAST:
          ;(q = 1), (S = o)
          break
        case i.image_compression.MEDIUM:
          ;(q = 6), (S = h)
          break
        case i.image_compression.SLOW:
          ;(q = 9), (S = f)
      }
      _ = a(_, p, B, S)
      var M = Go(_, { level: q })
      return i.__addimage__.arrayBufferToBinaryString(M)
    },
    a = function (_, p, B, F) {
      for (
        var q, S, M, Z = _.length / p, st = new Uint8Array(_.length + Z), dt = A(), Nt = 0;
        Nt < Z;
        Nt += 1
      ) {
        if (((M = Nt * p), (q = _.subarray(M, M + p)), F)) st.set(F(q, B, S), M + Nt)
        else {
          for (var rt, G = dt.length, vt = []; rt < G; rt += 1) vt[rt] = dt[rt](q, B, S)
          var bt = N(vt.concat())
          st.set(vt[bt], M + Nt)
        }
        S = q
      }
      return st
    },
    u = function (_) {
      var p = Array.apply([], _)
      return p.unshift(0), p
    },
    o = function (_, p) {
      var B,
        F = [],
        q = _.length
      F[0] = 1
      for (var S = 0; S < q; S += 1) (B = _[S - p] || 0), (F[S + 1] = (_[S] - B + 256) & 255)
      return F
    },
    l = function (_, p, B) {
      var F,
        q = [],
        S = _.length
      q[0] = 2
      for (var M = 0; M < S; M += 1) (F = (B && B[M]) || 0), (q[M + 1] = (_[M] - F + 256) & 255)
      return q
    },
    h = function (_, p, B) {
      var F,
        q,
        S = [],
        M = _.length
      S[0] = 3
      for (var Z = 0; Z < M; Z += 1)
        (F = _[Z - p] || 0),
          (q = (B && B[Z]) || 0),
          (S[Z + 1] = (_[Z] + 256 - ((F + q) >>> 1)) & 255)
      return S
    },
    f = function (_, p, B) {
      var F,
        q,
        S,
        M,
        Z = [],
        st = _.length
      Z[0] = 4
      for (var dt = 0; dt < st; dt += 1)
        (F = _[dt - p] || 0),
          (q = (B && B[dt]) || 0),
          (S = (B && B[dt - p]) || 0),
          (M = g(F, q, S)),
          (Z[dt + 1] = (_[dt] - M + 256) & 255)
      return Z
    },
    g = function (_, p, B) {
      if (_ === p && p === B) return _
      var F = Math.abs(p - B),
        q = Math.abs(_ - B),
        S = Math.abs(_ + p - B - B)
      return F <= q && F <= S ? _ : q <= S ? p : B
    },
    A = function () {
      return [u, o, l, h, f]
    },
    N = function (_) {
      var p = _.map(function (B) {
        return B.reduce(function (F, q) {
          return F + Math.abs(q)
        }, 0)
      })
      return p.indexOf(Math.min.apply(null, p))
    }
  i.processPNG = function (_, p, B, F) {
    var q,
      S,
      M,
      Z,
      st,
      dt,
      Nt,
      rt,
      G,
      vt,
      bt,
      k,
      I,
      H,
      R,
      ct = this.decode.FLATE_DECODE,
      ot = ''
    if (
      (this.__addimage__.isArrayBuffer(_) && (_ = new Uint8Array(_)),
      this.__addimage__.isArrayBufferView(_))
    ) {
      if (
        ((_ = (M = new mu(_)).imgData),
        (S = M.bits),
        (q = M.colorSpace),
        (st = M.colors),
        [4, 6].indexOf(M.colorType) !== -1)
      ) {
        if (M.bits === 8) {
          ;(G = (rt =
            M.pixelBitlength == 32
              ? new Uint32Array(M.decodePixels().buffer)
              : M.pixelBitlength == 16
              ? new Uint16Array(M.decodePixels().buffer)
              : new Uint8Array(M.decodePixels().buffer)).length),
            (bt = new Uint8Array(G * M.colors)),
            (vt = new Uint8Array(G))
          var mt,
            tt = M.pixelBitlength - M.bits
          for (H = 0, R = 0; H < G; H++) {
            for (I = rt[H], mt = 0; mt < tt; ) (bt[R++] = (I >>> mt) & 255), (mt += M.bits)
            vt[H] = (I >>> mt) & 255
          }
        }
        if (M.bits === 16) {
          ;(G = (rt = new Uint32Array(M.decodePixels().buffer)).length),
            (bt = new Uint8Array(G * (32 / M.pixelBitlength) * M.colors)),
            (vt = new Uint8Array(G * (32 / M.pixelBitlength))),
            (k = M.colors > 1),
            (H = 0),
            (R = 0)
          for (var pt = 0; H < G; )
            (I = rt[H++]),
              (bt[R++] = (I >>> 0) & 255),
              k && ((bt[R++] = (I >>> 16) & 255), (I = rt[H++]), (bt[R++] = (I >>> 0) & 255)),
              (vt[pt++] = (I >>> 16) & 255)
          S = 8
        }
        F !== i.image_compression.NONE && e()
          ? ((_ = n(bt, M.width * M.colors, M.colors, F)), (Nt = n(vt, M.width, 1, F)))
          : ((_ = bt), (Nt = vt), (ct = void 0))
      }
      if (
        M.colorType === 3 &&
        ((q = this.color_spaces.INDEXED), (dt = M.palette), M.transparency.indexed)
      ) {
        var ft = M.transparency.indexed,
          Et = 0
        for (H = 0, G = ft.length; H < G; ++H) Et += ft[H]
        if ((Et /= 255) === G - 1 && ft.indexOf(0) !== -1) Z = [ft.indexOf(0)]
        else if (Et !== G) {
          for (
            rt = M.decodePixels(), vt = new Uint8Array(rt.length), H = 0, G = rt.length;
            H < G;
            H++
          )
            vt[H] = ft[rt[H]]
          Nt = n(vt, M.width, 1)
        }
      }
      var w = (function (j) {
        var E
        switch (j) {
          case i.image_compression.FAST:
            E = 11
            break
          case i.image_compression.MEDIUM:
            E = 13
            break
          case i.image_compression.SLOW:
            E = 14
            break
          default:
            E = 12
        }
        return E
      })(F)
      return (
        ct === this.decode.FLATE_DECODE && (ot = '/Predictor ' + w + ' '),
        (ot += '/Colors ' + st + ' /BitsPerComponent ' + S + ' /Columns ' + M.width),
        (this.__addimage__.isArrayBuffer(_) || this.__addimage__.isArrayBufferView(_)) &&
          (_ = this.__addimage__.arrayBufferToBinaryString(_)),
        ((Nt && this.__addimage__.isArrayBuffer(Nt)) || this.__addimage__.isArrayBufferView(Nt)) &&
          (Nt = this.__addimage__.arrayBufferToBinaryString(Nt)),
        {
          alias: B,
          data: _,
          index: p,
          filter: ct,
          decodeParameters: ot,
          transparency: Z,
          palette: dt,
          sMask: Nt,
          predictor: w,
          width: M.width,
          height: M.height,
          bitsPerComponent: S,
          colorSpace: q
        }
      )
    }
  }
})(zt.API),
  (function (i) {
    ;(i.processGIF89A = function (e, n, a, u) {
      var o = new vu(e),
        l = o.width,
        h = o.height,
        f = []
      o.decodeAndBlitFrameRGBA(0, f)
      var g = { data: f, width: l, height: h },
        A = new Vo(100).encode(g, 100)
      return i.processJPEG.call(this, A, n, a, u)
    }),
      (i.processGIF87A = i.processGIF89A)
  })(zt.API),
  (jn.prototype.parseHeader = function () {
    if (
      ((this.fileSize = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.reserved = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.offset = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.headerSize = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.width = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.height = this.datav.getInt32(this.pos, !0)),
      (this.pos += 4),
      (this.planes = this.datav.getUint16(this.pos, !0)),
      (this.pos += 2),
      (this.bitPP = this.datav.getUint16(this.pos, !0)),
      (this.pos += 2),
      (this.compress = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.rawSize = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.hr = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.vr = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.colors = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.importantColors = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15),
      this.bitPP < 15)
    ) {
      var i = this.colors === 0 ? 1 << this.bitPP : this.colors
      this.palette = new Array(i)
      for (var e = 0; e < i; e++) {
        var n = this.datav.getUint8(this.pos++, !0),
          a = this.datav.getUint8(this.pos++, !0),
          u = this.datav.getUint8(this.pos++, !0),
          o = this.datav.getUint8(this.pos++, !0)
        this.palette[e] = { red: u, green: a, blue: n, quad: o }
      }
    }
    this.height < 0 && ((this.height *= -1), (this.bottom_up = !1))
  }),
  (jn.prototype.parseBGR = function () {
    this.pos = this.offset
    try {
      var i = 'bit' + this.bitPP,
        e = this.width * this.height * 4
      ;(this.data = new Uint8Array(e)), this[i]()
    } catch (n) {
      me.log('bit decode error:' + n)
    }
  }),
  (jn.prototype.bit1 = function () {
    var i,
      e = Math.ceil(this.width / 8),
      n = e % 4
    for (i = this.height - 1; i >= 0; i--) {
      for (var a = this.bottom_up ? i : this.height - 1 - i, u = 0; u < e; u++)
        for (
          var o = this.datav.getUint8(this.pos++, !0), l = a * this.width * 4 + 8 * u * 4, h = 0;
          h < 8 && 8 * u + h < this.width;
          h++
        ) {
          var f = this.palette[(o >> (7 - h)) & 1]
          ;(this.data[l + 4 * h] = f.blue),
            (this.data[l + 4 * h + 1] = f.green),
            (this.data[l + 4 * h + 2] = f.red),
            (this.data[l + 4 * h + 3] = 255)
        }
      n !== 0 && (this.pos += 4 - n)
    }
  }),
  (jn.prototype.bit4 = function () {
    for (var i = Math.ceil(this.width / 2), e = i % 4, n = this.height - 1; n >= 0; n--) {
      for (var a = this.bottom_up ? n : this.height - 1 - n, u = 0; u < i; u++) {
        var o = this.datav.getUint8(this.pos++, !0),
          l = a * this.width * 4 + 2 * u * 4,
          h = o >> 4,
          f = 15 & o,
          g = this.palette[h]
        if (
          ((this.data[l] = g.blue),
          (this.data[l + 1] = g.green),
          (this.data[l + 2] = g.red),
          (this.data[l + 3] = 255),
          2 * u + 1 >= this.width)
        )
          break
        ;(g = this.palette[f]),
          (this.data[l + 4] = g.blue),
          (this.data[l + 4 + 1] = g.green),
          (this.data[l + 4 + 2] = g.red),
          (this.data[l + 4 + 3] = 255)
      }
      e !== 0 && (this.pos += 4 - e)
    }
  }),
  (jn.prototype.bit8 = function () {
    for (var i = this.width % 4, e = this.height - 1; e >= 0; e--) {
      for (var n = this.bottom_up ? e : this.height - 1 - e, a = 0; a < this.width; a++) {
        var u = this.datav.getUint8(this.pos++, !0),
          o = n * this.width * 4 + 4 * a
        if (u < this.palette.length) {
          var l = this.palette[u]
          ;(this.data[o] = l.red),
            (this.data[o + 1] = l.green),
            (this.data[o + 2] = l.blue),
            (this.data[o + 3] = 255)
        } else
          (this.data[o] = 255),
            (this.data[o + 1] = 255),
            (this.data[o + 2] = 255),
            (this.data[o + 3] = 255)
      }
      i !== 0 && (this.pos += 4 - i)
    }
  }),
  (jn.prototype.bit15 = function () {
    for (var i = this.width % 3, e = parseInt('11111', 2), n = this.height - 1; n >= 0; n--) {
      for (var a = this.bottom_up ? n : this.height - 1 - n, u = 0; u < this.width; u++) {
        var o = this.datav.getUint16(this.pos, !0)
        this.pos += 2
        var l = (((o & e) / e) * 255) | 0,
          h = ((((o >> 5) & e) / e) * 255) | 0,
          f = ((((o >> 10) & e) / e) * 255) | 0,
          g = o >> 15 ? 255 : 0,
          A = a * this.width * 4 + 4 * u
        ;(this.data[A] = f), (this.data[A + 1] = h), (this.data[A + 2] = l), (this.data[A + 3] = g)
      }
      this.pos += i
    }
  }),
  (jn.prototype.bit16 = function () {
    for (
      var i = this.width % 3,
        e = parseInt('11111', 2),
        n = parseInt('111111', 2),
        a = this.height - 1;
      a >= 0;
      a--
    ) {
      for (var u = this.bottom_up ? a : this.height - 1 - a, o = 0; o < this.width; o++) {
        var l = this.datav.getUint16(this.pos, !0)
        this.pos += 2
        var h = (((l & e) / e) * 255) | 0,
          f = ((((l >> 5) & n) / n) * 255) | 0,
          g = (((l >> 11) / e) * 255) | 0,
          A = u * this.width * 4 + 4 * o
        ;(this.data[A] = g),
          (this.data[A + 1] = f),
          (this.data[A + 2] = h),
          (this.data[A + 3] = 255)
      }
      this.pos += i
    }
  }),
  (jn.prototype.bit24 = function () {
    for (var i = this.height - 1; i >= 0; i--) {
      for (var e = this.bottom_up ? i : this.height - 1 - i, n = 0; n < this.width; n++) {
        var a = this.datav.getUint8(this.pos++, !0),
          u = this.datav.getUint8(this.pos++, !0),
          o = this.datav.getUint8(this.pos++, !0),
          l = e * this.width * 4 + 4 * n
        ;(this.data[l] = o),
          (this.data[l + 1] = u),
          (this.data[l + 2] = a),
          (this.data[l + 3] = 255)
      }
      this.pos += this.width % 4
    }
  }),
  (jn.prototype.bit32 = function () {
    for (var i = this.height - 1; i >= 0; i--)
      for (var e = this.bottom_up ? i : this.height - 1 - i, n = 0; n < this.width; n++) {
        var a = this.datav.getUint8(this.pos++, !0),
          u = this.datav.getUint8(this.pos++, !0),
          o = this.datav.getUint8(this.pos++, !0),
          l = this.datav.getUint8(this.pos++, !0),
          h = e * this.width * 4 + 4 * n
        ;(this.data[h] = o), (this.data[h + 1] = u), (this.data[h + 2] = a), (this.data[h + 3] = l)
      }
  }),
  (jn.prototype.getData = function () {
    return this.data
  }),
  (function (i) {
    i.processBMP = function (e, n, a, u) {
      var o = new jn(e, !1),
        l = o.width,
        h = o.height,
        f = { data: o.getData(), width: l, height: h },
        g = new Vo(100).encode(f, 100)
      return i.processJPEG.call(this, g, n, a, u)
    }
  })(zt.API),
  (Zs.prototype.getData = function () {
    return this.data
  }),
  (function (i) {
    i.processWEBP = function (e, n, a, u) {
      var o = new Zs(e),
        l = o.width,
        h = o.height,
        f = { data: o.getData(), width: l, height: h },
        g = new Vo(100).encode(f, 100)
      return i.processJPEG.call(this, g, n, a, u)
    }
  })(zt.API),
  (zt.API.processRGBA = function (i, e, n) {
    for (
      var a = i.data,
        u = a.length,
        o = new Uint8Array((u / 4) * 3),
        l = new Uint8Array(u / 4),
        h = 0,
        f = 0,
        g = 0;
      g < u;
      g += 4
    ) {
      var A = a[g],
        N = a[g + 1],
        _ = a[g + 2],
        p = a[g + 3]
      ;(o[h++] = A), (o[h++] = N), (o[h++] = _), (l[f++] = p)
    }
    var B = this.__addimage__.arrayBufferToBinaryString(o)
    return {
      alpha: this.__addimage__.arrayBufferToBinaryString(l),
      data: B,
      index: e,
      alias: n,
      colorSpace: 'DeviceRGB',
      bitsPerComponent: 8,
      width: i.width,
      height: i.height
    }
  }),
  (zt.API.setLanguage = function (i) {
    return (
      this.internal.languageSettings === void 0 &&
        ((this.internal.languageSettings = {}), (this.internal.languageSettings.isSubscribed = !1)),
      {
        af: 'Afrikaans',
        sq: 'Albanian',
        ar: 'Arabic (Standard)',
        'ar-DZ': 'Arabic (Algeria)',
        'ar-BH': 'Arabic (Bahrain)',
        'ar-EG': 'Arabic (Egypt)',
        'ar-IQ': 'Arabic (Iraq)',
        'ar-JO': 'Arabic (Jordan)',
        'ar-KW': 'Arabic (Kuwait)',
        'ar-LB': 'Arabic (Lebanon)',
        'ar-LY': 'Arabic (Libya)',
        'ar-MA': 'Arabic (Morocco)',
        'ar-OM': 'Arabic (Oman)',
        'ar-QA': 'Arabic (Qatar)',
        'ar-SA': 'Arabic (Saudi Arabia)',
        'ar-SY': 'Arabic (Syria)',
        'ar-TN': 'Arabic (Tunisia)',
        'ar-AE': 'Arabic (U.A.E.)',
        'ar-YE': 'Arabic (Yemen)',
        an: 'Aragonese',
        hy: 'Armenian',
        as: 'Assamese',
        ast: 'Asturian',
        az: 'Azerbaijani',
        eu: 'Basque',
        be: 'Belarusian',
        bn: 'Bengali',
        bs: 'Bosnian',
        br: 'Breton',
        bg: 'Bulgarian',
        my: 'Burmese',
        ca: 'Catalan',
        ch: 'Chamorro',
        ce: 'Chechen',
        zh: 'Chinese',
        'zh-HK': 'Chinese (Hong Kong)',
        'zh-CN': 'Chinese (PRC)',
        'zh-SG': 'Chinese (Singapore)',
        'zh-TW': 'Chinese (Taiwan)',
        cv: 'Chuvash',
        co: 'Corsican',
        cr: 'Cree',
        hr: 'Croatian',
        cs: 'Czech',
        da: 'Danish',
        nl: 'Dutch (Standard)',
        'nl-BE': 'Dutch (Belgian)',
        en: 'English',
        'en-AU': 'English (Australia)',
        'en-BZ': 'English (Belize)',
        'en-CA': 'English (Canada)',
        'en-IE': 'English (Ireland)',
        'en-JM': 'English (Jamaica)',
        'en-NZ': 'English (New Zealand)',
        'en-PH': 'English (Philippines)',
        'en-ZA': 'English (South Africa)',
        'en-TT': 'English (Trinidad & Tobago)',
        'en-GB': 'English (United Kingdom)',
        'en-US': 'English (United States)',
        'en-ZW': 'English (Zimbabwe)',
        eo: 'Esperanto',
        et: 'Estonian',
        fo: 'Faeroese',
        fj: 'Fijian',
        fi: 'Finnish',
        fr: 'French (Standard)',
        'fr-BE': 'French (Belgium)',
        'fr-CA': 'French (Canada)',
        'fr-FR': 'French (France)',
        'fr-LU': 'French (Luxembourg)',
        'fr-MC': 'French (Monaco)',
        'fr-CH': 'French (Switzerland)',
        fy: 'Frisian',
        fur: 'Friulian',
        gd: 'Gaelic (Scots)',
        'gd-IE': 'Gaelic (Irish)',
        gl: 'Galacian',
        ka: 'Georgian',
        de: 'German (Standard)',
        'de-AT': 'German (Austria)',
        'de-DE': 'German (Germany)',
        'de-LI': 'German (Liechtenstein)',
        'de-LU': 'German (Luxembourg)',
        'de-CH': 'German (Switzerland)',
        el: 'Greek',
        gu: 'Gujurati',
        ht: 'Haitian',
        he: 'Hebrew',
        hi: 'Hindi',
        hu: 'Hungarian',
        is: 'Icelandic',
        id: 'Indonesian',
        iu: 'Inuktitut',
        ga: 'Irish',
        it: 'Italian (Standard)',
        'it-CH': 'Italian (Switzerland)',
        ja: 'Japanese',
        kn: 'Kannada',
        ks: 'Kashmiri',
        kk: 'Kazakh',
        km: 'Khmer',
        ky: 'Kirghiz',
        tlh: 'Klingon',
        ko: 'Korean',
        'ko-KP': 'Korean (North Korea)',
        'ko-KR': 'Korean (South Korea)',
        la: 'Latin',
        lv: 'Latvian',
        lt: 'Lithuanian',
        lb: 'Luxembourgish',
        mk: 'North Macedonia',
        ms: 'Malay',
        ml: 'Malayalam',
        mt: 'Maltese',
        mi: 'Maori',
        mr: 'Marathi',
        mo: 'Moldavian',
        nv: 'Navajo',
        ng: 'Ndonga',
        ne: 'Nepali',
        no: 'Norwegian',
        nb: 'Norwegian (Bokmal)',
        nn: 'Norwegian (Nynorsk)',
        oc: 'Occitan',
        or: 'Oriya',
        om: 'Oromo',
        fa: 'Persian',
        'fa-IR': 'Persian/Iran',
        pl: 'Polish',
        pt: 'Portuguese',
        'pt-BR': 'Portuguese (Brazil)',
        pa: 'Punjabi',
        'pa-IN': 'Punjabi (India)',
        'pa-PK': 'Punjabi (Pakistan)',
        qu: 'Quechua',
        rm: 'Rhaeto-Romanic',
        ro: 'Romanian',
        'ro-MO': 'Romanian (Moldavia)',
        ru: 'Russian',
        'ru-MO': 'Russian (Moldavia)',
        sz: 'Sami (Lappish)',
        sg: 'Sango',
        sa: 'Sanskrit',
        sc: 'Sardinian',
        sd: 'Sindhi',
        si: 'Singhalese',
        sr: 'Serbian',
        sk: 'Slovak',
        sl: 'Slovenian',
        so: 'Somani',
        sb: 'Sorbian',
        es: 'Spanish',
        'es-AR': 'Spanish (Argentina)',
        'es-BO': 'Spanish (Bolivia)',
        'es-CL': 'Spanish (Chile)',
        'es-CO': 'Spanish (Colombia)',
        'es-CR': 'Spanish (Costa Rica)',
        'es-DO': 'Spanish (Dominican Republic)',
        'es-EC': 'Spanish (Ecuador)',
        'es-SV': 'Spanish (El Salvador)',
        'es-GT': 'Spanish (Guatemala)',
        'es-HN': 'Spanish (Honduras)',
        'es-MX': 'Spanish (Mexico)',
        'es-NI': 'Spanish (Nicaragua)',
        'es-PA': 'Spanish (Panama)',
        'es-PY': 'Spanish (Paraguay)',
        'es-PE': 'Spanish (Peru)',
        'es-PR': 'Spanish (Puerto Rico)',
        'es-ES': 'Spanish (Spain)',
        'es-UY': 'Spanish (Uruguay)',
        'es-VE': 'Spanish (Venezuela)',
        sx: 'Sutu',
        sw: 'Swahili',
        sv: 'Swedish',
        'sv-FI': 'Swedish (Finland)',
        'sv-SV': 'Swedish (Sweden)',
        ta: 'Tamil',
        tt: 'Tatar',
        te: 'Teluga',
        th: 'Thai',
        tig: 'Tigre',
        ts: 'Tsonga',
        tn: 'Tswana',
        tr: 'Turkish',
        tk: 'Turkmen',
        uk: 'Ukrainian',
        hsb: 'Upper Sorbian',
        ur: 'Urdu',
        ve: 'Venda',
        vi: 'Vietnamese',
        vo: 'Volapuk',
        wa: 'Walloon',
        cy: 'Welsh',
        xh: 'Xhosa',
        ji: 'Yiddish',
        zu: 'Zulu'
      }[i] !== void 0 &&
        ((this.internal.languageSettings.languageCode = i),
        this.internal.languageSettings.isSubscribed === !1 &&
          (this.internal.events.subscribe('putCatalog', function () {
            this.internal.write('/Lang (' + this.internal.languageSettings.languageCode + ')')
          }),
          (this.internal.languageSettings.isSubscribed = !0))),
      this
    )
  }),
  (di = zt.API),
  (za = di.getCharWidthsArray =
    function (i, e) {
      var n,
        a,
        u = (e = e || {}).font || this.internal.getFont(),
        o = e.fontSize || this.internal.getFontSize(),
        l = e.charSpace || this.internal.getCharSpace(),
        h = e.widths ? e.widths : u.metadata.Unicode.widths,
        f = h.fof ? h.fof : 1,
        g = e.kerning ? e.kerning : u.metadata.Unicode.kerning,
        A = g.fof ? g.fof : 1,
        N = e.doKerning !== !1,
        _ = 0,
        p = i.length,
        B = 0,
        F = h[0] || f,
        q = []
      for (n = 0; n < p; n++)
        (a = i.charCodeAt(n)),
          typeof u.metadata.widthOfString == 'function'
            ? q.push(
                (u.metadata.widthOfGlyph(u.metadata.characterToGlyph(a)) + l * (1e3 / o) || 0) / 1e3
              )
            : ((_ = N && ve(g[a]) === 'object' && !isNaN(parseInt(g[a][B], 10)) ? g[a][B] / A : 0),
              q.push((h[a] || F) / f + _)),
          (B = a)
      return q
    }),
  (Ys = di.getStringUnitWidth =
    function (i, e) {
      var n = (e = e || {}).fontSize || this.internal.getFontSize(),
        a = e.font || this.internal.getFont(),
        u = e.charSpace || this.internal.getCharSpace()
      return (
        di.processArabic && (i = di.processArabic(i)),
        typeof a.metadata.widthOfString == 'function'
          ? a.metadata.widthOfString(i, n, u) / n
          : za.apply(this, arguments).reduce(function (o, l) {
              return o + l
            }, 0)
      )
    }),
  (Js = function (i, e, n, a) {
    for (var u = [], o = 0, l = i.length, h = 0; o !== l && h + e[o] < n; ) (h += e[o]), o++
    u.push(i.slice(0, o))
    var f = o
    for (h = 0; o !== l; )
      h + e[o] > a && (u.push(i.slice(f, o)), (h = 0), (f = o)), (h += e[o]), o++
    return f !== o && u.push(i.slice(f, o)), u
  }),
  (Xs = function (i, e, n) {
    n || (n = {})
    var a,
      u,
      o,
      l,
      h,
      f,
      g,
      A = [],
      N = [A],
      _ = n.textIndent || 0,
      p = 0,
      B = 0,
      F = i.split(' '),
      q = za.apply(this, [' ', n])[0]
    if ((f = n.lineIndent === -1 ? F[0].length + 2 : n.lineIndent || 0)) {
      var S = Array(f).join(' '),
        M = []
      F.map(function (st) {
        ;(st = st.split(/\s*\n/)).length > 1
          ? (M = M.concat(
              st.map(function (dt, Nt) {
                return (
                  (Nt && dt.length
                    ? `
`
                    : '') + dt
                )
              })
            ))
          : M.push(st[0])
      }),
        (F = M),
        (f = Ys.apply(this, [S, n]))
    }
    for (o = 0, l = F.length; o < l; o++) {
      var Z = 0
      if (
        ((a = F[o]),
        f &&
          a[0] ==
            `
` &&
          ((a = a.substr(1)), (Z = 1)),
        _ +
          p +
          (B = (u = za.apply(this, [a, n])).reduce(function (st, dt) {
            return st + dt
          }, 0)) >
          e || Z)
      ) {
        if (B > e) {
          for (
            h = Js.apply(this, [a, u, e - (_ + p), e]), A.push(h.shift()), A = [h.pop()];
            h.length;

          )
            N.push([h.shift()])
          B = u.slice(a.length - (A[0] ? A[0].length : 0)).reduce(function (st, dt) {
            return st + dt
          }, 0)
        } else A = [a]
        N.push(A), (_ = B + f), (p = q)
      } else A.push(a), (_ += p + B), (p = q)
    }
    return (
      (g = f
        ? function (st, dt) {
            return (dt ? S : '') + st.join(' ')
          }
        : function (st) {
            return st.join(' ')
          }),
      N.map(g)
    )
  }),
  (di.splitTextToSize = function (i, e, n) {
    var a,
      u = (n = n || {}).fontSize || this.internal.getFontSize(),
      o = function (A) {
        if (A.widths && A.kerning) return { widths: A.widths, kerning: A.kerning }
        var N = this.internal.getFont(A.fontName, A.fontStyle)
        return N.metadata.Unicode
          ? {
              widths: N.metadata.Unicode.widths || { 0: 1 },
              kerning: N.metadata.Unicode.kerning || {}
            }
          : {
              font: N.metadata,
              fontSize: this.internal.getFontSize(),
              charSpace: this.internal.getCharSpace()
            }
      }.call(this, n)
    a = Array.isArray(i) ? i : String(i).split(/\r?\n/)
    var l = (1 * this.internal.scaleFactor * e) / u
    ;(o.textIndent = n.textIndent ? (1 * n.textIndent * this.internal.scaleFactor) / u : 0),
      (o.lineIndent = n.lineIndent)
    var h,
      f,
      g = []
    for (h = 0, f = a.length; h < f; h++) g = g.concat(Xs.apply(this, [a[h], l, o]))
    return g
  }),
  (function (i) {
    i.__fontmetrics__ = i.__fontmetrics__ || {}
    for (var e = 'klmnopqrstuvwxyz', n = {}, a = {}, u = 0; u < e.length; u++)
      (n[e[u]] = '0123456789abcdef'[u]), (a['0123456789abcdef'[u]] = e[u])
    var o = function (N) {
        return '0x' + parseInt(N, 10).toString(16)
      },
      l = (i.__fontmetrics__.compress = function (N) {
        var _,
          p,
          B,
          F,
          q = ['{']
        for (var S in N) {
          if (
            ((_ = N[S]),
            isNaN(parseInt(S, 10))
              ? (p = "'" + S + "'")
              : ((S = parseInt(S, 10)), (p = (p = o(S).slice(2)).slice(0, -1) + a[p.slice(-1)])),
            typeof _ == 'number')
          )
            _ < 0 ? ((B = o(_).slice(3)), (F = '-')) : ((B = o(_).slice(2)), (F = '')),
              (B = F + B.slice(0, -1) + a[B.slice(-1)])
          else {
            if (ve(_) !== 'object')
              throw new Error("Don't know what to do with value type " + ve(_) + '.')
            B = l(_)
          }
          q.push(p + B)
        }
        return q.push('}'), q.join('')
      }),
      h = (i.__fontmetrics__.uncompress = function (N) {
        if (typeof N != 'string') throw new Error('Invalid argument passed to uncompress.')
        for (
          var _, p, B, F, q = {}, S = 1, M = q, Z = [], st = '', dt = '', Nt = N.length - 1, rt = 1;
          rt < Nt;
          rt += 1
        )
          (F = N[rt]) == "'"
            ? _
              ? ((B = _.join('')), (_ = void 0))
              : (_ = [])
            : _
            ? _.push(F)
            : F == '{'
            ? (Z.push([M, B]), (M = {}), (B = void 0))
            : F == '}'
            ? (((p = Z.pop())[0][p[1]] = M), (B = void 0), (M = p[0]))
            : F == '-'
            ? (S = -1)
            : B === void 0
            ? n.hasOwnProperty(F)
              ? ((st += n[F]), (B = parseInt(st, 16) * S), (S = 1), (st = ''))
              : (st += F)
            : n.hasOwnProperty(F)
            ? ((dt += n[F]), (M[B] = parseInt(dt, 16) * S), (S = 1), (B = void 0), (dt = ''))
            : (dt += F)
        return q
      }),
      f = {
        codePages: ['WinAnsiEncoding'],
        WinAnsiEncoding: h(
          '{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}'
        )
      },
      g = {
        Unicode: {
          Courier: f,
          'Courier-Bold': f,
          'Courier-BoldOblique': f,
          'Courier-Oblique': f,
          Helvetica: f,
          'Helvetica-Bold': f,
          'Helvetica-BoldOblique': f,
          'Helvetica-Oblique': f,
          'Times-Roman': f,
          'Times-Bold': f,
          'Times-BoldItalic': f,
          'Times-Italic': f
        }
      },
      A = {
        Unicode: {
          'Courier-Oblique': h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          'Times-BoldItalic': h(
            "{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"
          ),
          'Helvetica-Bold': h(
            "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
          ),
          Courier: h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          'Courier-BoldOblique': h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          'Times-Bold': h(
            "{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"
          ),
          Symbol: h(
            "{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"
          ),
          Helvetica: h(
            "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
          ),
          'Helvetica-BoldOblique': h(
            "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
          ),
          ZapfDingbats: h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
          'Courier-Bold': h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          'Times-Italic': h(
            "{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"
          ),
          'Times-Roman': h(
            "{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"
          ),
          'Helvetica-Oblique': h(
            "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
          )
        }
      }
    i.events.push([
      'addFont',
      function (N) {
        var _ = N.font,
          p = A.Unicode[_.postScriptName]
        p &&
          ((_.metadata.Unicode = {}),
          (_.metadata.Unicode.widths = p.widths),
          (_.metadata.Unicode.kerning = p.kerning))
        var B = g.Unicode[_.postScriptName]
        B && ((_.metadata.Unicode.encoding = B), (_.encoding = B.codePages[0]))
      }
    ])
  })(zt.API),
  (function (i) {
    var e = function (n) {
      for (var a = n.length, u = new Uint8Array(a), o = 0; o < a; o++) u[o] = n.charCodeAt(o)
      return u
    }
    i.API.events.push([
      'addFont',
      function (n) {
        var a = void 0,
          u = n.font,
          o = n.instance
        if (!u.isStandardFont) {
          if (o === void 0)
            throw new Error(
              "Font does not exist in vFS, import fonts or remove declaration doc.addFont('" +
                u.postScriptName +
                "')."
            )
          if (
            typeof (a =
              o.existsFileInVFS(u.postScriptName) === !1
                ? o.loadFile(u.postScriptName)
                : o.getFileFromVFS(u.postScriptName)) != 'string'
          )
            throw new Error(
              "Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" +
                u.postScriptName +
                "')."
            )
          ;(function (l, h) {
            ;(h = /^\x00\x01\x00\x00/.test(h) ? e(h) : e(Ki(h))),
              (l.metadata = i.API.TTFFont.open(h)),
              (l.metadata.Unicode = l.metadata.Unicode || {
                encoding: {},
                kerning: {},
                widths: []
              }),
              (l.metadata.glyIdsUsed = [0])
          })(u, a)
        }
      }
    ])
  })(zt),
  (function (i) {
    function e() {
      return (
        Ut.canvg
          ? Promise.resolve(Ut.canvg)
          : Yo(
              () => import('./canvg.deec220b.js'),
              [
                './canvg.deec220b.js',
                './core-js.390b83f9.js',
                './aos.e37f4dc9.js',
                './aos.73168167.css',
                './@babel.2898e469.js',
                './raf.83fd7dc6.js',
                './performance-now.81e75aad.js',
                './rgbcolor.ee75fe19.js',
                './svg-pathdata.7155e77f.js',
                './stackblur-canvas.f67d5add.js'
              ],
              import.meta.url
            )
      )
        .catch(function (n) {
          return Promise.reject(new Error('Could not load canvg: ' + n))
        })
        .then(function (n) {
          return n.default ? n.default : n
        })
    }
    zt.API.addSvgAsImage = function (n, a, u, o, l, h, f, g) {
      if (isNaN(a) || isNaN(u))
        throw (
          (me.error('jsPDF.addSvgAsImage: Invalid coordinates', arguments),
          new Error('Invalid coordinates passed to jsPDF.addSvgAsImage'))
        )
      if (isNaN(o) || isNaN(l))
        throw (
          (me.error('jsPDF.addSvgAsImage: Invalid measurements', arguments),
          new Error('Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage'))
        )
      var A = document.createElement('canvas')
      ;(A.width = o), (A.height = l)
      var N = A.getContext('2d')
      ;(N.fillStyle = '#fff'), N.fillRect(0, 0, A.width, A.height)
      var _ = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 },
        p = this
      return e()
        .then(
          function (B) {
            return B.fromString(N, n, _)
          },
          function () {
            return Promise.reject(new Error('Could not load canvg.'))
          }
        )
        .then(function (B) {
          return B.render(_)
        })
        .then(function () {
          p.addImage(A.toDataURL('image/jpeg', 1), a, u, o, l, f, g)
        })
    }
  })(),
  (zt.API.putTotalPages = function (i) {
    var e,
      n = 0
    parseInt(this.internal.getFont().id.substr(1), 10) < 15
      ? ((e = new RegExp(i, 'g')), (n = this.internal.getNumberOfPages()))
      : ((e = new RegExp(this.pdfEscape16(i, this.internal.getFont()), 'g')),
        (n = this.pdfEscape16(this.internal.getNumberOfPages() + '', this.internal.getFont())))
    for (var a = 1; a <= this.internal.getNumberOfPages(); a++)
      for (var u = 0; u < this.internal.pages[a].length; u++)
        this.internal.pages[a][u] = this.internal.pages[a][u].replace(e, n)
    return this
  }),
  (zt.API.viewerPreferences = function (i, e) {
    var n
    ;(i = i || {}), (e = e || !1)
    var a,
      u,
      o,
      l = {
        HideToolbar: {
          defaultValue: !1,
          value: !1,
          type: 'boolean',
          explicitSet: !1,
          valueSet: [!0, !1],
          pdfVersion: 1.3
        },
        HideMenubar: {
          defaultValue: !1,
          value: !1,
          type: 'boolean',
          explicitSet: !1,
          valueSet: [!0, !1],
          pdfVersion: 1.3
        },
        HideWindowUI: {
          defaultValue: !1,
          value: !1,
          type: 'boolean',
          explicitSet: !1,
          valueSet: [!0, !1],
          pdfVersion: 1.3
        },
        FitWindow: {
          defaultValue: !1,
          value: !1,
          type: 'boolean',
          explicitSet: !1,
          valueSet: [!0, !1],
          pdfVersion: 1.3
        },
        CenterWindow: {
          defaultValue: !1,
          value: !1,
          type: 'boolean',
          explicitSet: !1,
          valueSet: [!0, !1],
          pdfVersion: 1.3
        },
        DisplayDocTitle: {
          defaultValue: !1,
          value: !1,
          type: 'boolean',
          explicitSet: !1,
          valueSet: [!0, !1],
          pdfVersion: 1.4
        },
        NonFullScreenPageMode: {
          defaultValue: 'UseNone',
          value: 'UseNone',
          type: 'name',
          explicitSet: !1,
          valueSet: ['UseNone', 'UseOutlines', 'UseThumbs', 'UseOC'],
          pdfVersion: 1.3
        },
        Direction: {
          defaultValue: 'L2R',
          value: 'L2R',
          type: 'name',
          explicitSet: !1,
          valueSet: ['L2R', 'R2L'],
          pdfVersion: 1.3
        },
        ViewArea: {
          defaultValue: 'CropBox',
          value: 'CropBox',
          type: 'name',
          explicitSet: !1,
          valueSet: ['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox'],
          pdfVersion: 1.4
        },
        ViewClip: {
          defaultValue: 'CropBox',
          value: 'CropBox',
          type: 'name',
          explicitSet: !1,
          valueSet: ['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox'],
          pdfVersion: 1.4
        },
        PrintArea: {
          defaultValue: 'CropBox',
          value: 'CropBox',
          type: 'name',
          explicitSet: !1,
          valueSet: ['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox'],
          pdfVersion: 1.4
        },
        PrintClip: {
          defaultValue: 'CropBox',
          value: 'CropBox',
          type: 'name',
          explicitSet: !1,
          valueSet: ['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox'],
          pdfVersion: 1.4
        },
        PrintScaling: {
          defaultValue: 'AppDefault',
          value: 'AppDefault',
          type: 'name',
          explicitSet: !1,
          valueSet: ['AppDefault', 'None'],
          pdfVersion: 1.6
        },
        Duplex: {
          defaultValue: '',
          value: 'none',
          type: 'name',
          explicitSet: !1,
          valueSet: ['Simplex', 'DuplexFlipShortEdge', 'DuplexFlipLongEdge', 'none'],
          pdfVersion: 1.7
        },
        PickTrayByPDFSize: {
          defaultValue: !1,
          value: !1,
          type: 'boolean',
          explicitSet: !1,
          valueSet: [!0, !1],
          pdfVersion: 1.7
        },
        PrintPageRange: {
          defaultValue: '',
          value: '',
          type: 'array',
          explicitSet: !1,
          valueSet: null,
          pdfVersion: 1.7
        },
        NumCopies: {
          defaultValue: 1,
          value: 1,
          type: 'integer',
          explicitSet: !1,
          valueSet: null,
          pdfVersion: 1.7
        }
      },
      h = Object.keys(l),
      f = [],
      g = 0,
      A = 0,
      N = 0
    function _(B, F) {
      var q,
        S = !1
      for (q = 0; q < B.length; q += 1) B[q] === F && (S = !0)
      return S
    }
    if (
      (this.internal.viewerpreferences === void 0 &&
        ((this.internal.viewerpreferences = {}),
        (this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(l))),
        (this.internal.viewerpreferences.isSubscribed = !1)),
      (n = this.internal.viewerpreferences.configuration),
      i === 'reset' || e === !0)
    ) {
      var p = h.length
      for (N = 0; N < p; N += 1) (n[h[N]].value = n[h[N]].defaultValue), (n[h[N]].explicitSet = !1)
    }
    if (ve(i) === 'object') {
      for (u in i)
        if (((o = i[u]), _(h, u) && o !== void 0)) {
          if (n[u].type === 'boolean' && typeof o == 'boolean') n[u].value = o
          else if (n[u].type === 'name' && _(n[u].valueSet, o)) n[u].value = o
          else if (n[u].type === 'integer' && Number.isInteger(o)) n[u].value = o
          else if (n[u].type === 'array') {
            for (g = 0; g < o.length; g += 1)
              if (((a = !0), o[g].length === 1 && typeof o[g][0] == 'number'))
                f.push(String(o[g] - 1))
              else if (o[g].length > 1) {
                for (A = 0; A < o[g].length; A += 1) typeof o[g][A] != 'number' && (a = !1)
                a === !0 && f.push([o[g][0] - 1, o[g][1] - 1].join(' '))
              }
            n[u].value = '[' + f.join(' ') + ']'
          } else n[u].value = n[u].defaultValue
          n[u].explicitSet = !0
        }
    }
    return (
      this.internal.viewerpreferences.isSubscribed === !1 &&
        (this.internal.events.subscribe('putCatalog', function () {
          var B,
            F = []
          for (B in n)
            n[B].explicitSet === !0 &&
              (n[B].type === 'name'
                ? F.push('/' + B + ' /' + n[B].value)
                : F.push('/' + B + ' ' + n[B].value))
          F.length !== 0 &&
            this.internal.write(
              `/ViewerPreferences
<<
` +
                F.join(`
`) +
                `
>>`
            )
        }),
        (this.internal.viewerpreferences.isSubscribed = !0)),
      (this.internal.viewerpreferences.configuration = n),
      this
    )
  }),
  (function (i) {
    var e = function () {
        var a =
            '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' +
            this.internal.__metadata__.namespaceuri +
            '"><jspdf:metadata>',
          u = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),
          o = unescape(encodeURIComponent(a)),
          l = unescape(encodeURIComponent(this.internal.__metadata__.metadata)),
          h = unescape(encodeURIComponent('</jspdf:metadata></rdf:Description></rdf:RDF>')),
          f = unescape(encodeURIComponent('</x:xmpmeta>')),
          g = o.length + l.length + h.length + u.length + f.length
        ;(this.internal.__metadata__.metadata_object_number = this.internal.newObject()),
          this.internal.write('<< /Type /Metadata /Subtype /XML /Length ' + g + ' >>'),
          this.internal.write('stream'),
          this.internal.write(u + o + l + h + f),
          this.internal.write('endstream'),
          this.internal.write('endobj')
      },
      n = function () {
        this.internal.__metadata__.metadata_object_number &&
          this.internal.write(
            '/Metadata ' + this.internal.__metadata__.metadata_object_number + ' 0 R'
          )
      }
    i.addMetadata = function (a, u) {
      return (
        this.internal.__metadata__ === void 0 &&
          ((this.internal.__metadata__ = {
            metadata: a,
            namespaceuri: u || 'http://jspdf.default.namespaceuri/'
          }),
          this.internal.events.subscribe('putCatalog', n),
          this.internal.events.subscribe('postPutResources', e)),
        this
      )
    }
  })(zt.API),
  (function (i) {
    var e = i.API,
      n = (e.pdfEscape16 = function (o, l) {
        for (
          var h,
            f = l.metadata.Unicode.widths,
            g = ['', '0', '00', '000', '0000'],
            A = [''],
            N = 0,
            _ = o.length;
          N < _;
          ++N
        ) {
          if (
            ((h = l.metadata.characterToGlyph(o.charCodeAt(N))),
            l.metadata.glyIdsUsed.push(h),
            (l.metadata.toUnicode[h] = o.charCodeAt(N)),
            f.indexOf(h) == -1 && (f.push(h), f.push([parseInt(l.metadata.widthOfGlyph(h), 10)])),
            h == '0')
          )
            return A.join('')
          ;(h = h.toString(16)), A.push(g[4 - h.length], h)
        }
        return A.join('')
      }),
      a = function (o) {
        var l, h, f, g, A, N, _
        for (
          A = `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`,
            f = [],
            N = 0,
            _ = (h = Object.keys(o).sort(function (p, B) {
              return p - B
            })).length;
          N < _;
          N++
        )
          (l = h[N]),
            f.length >= 100 &&
              ((A +=
                `
` +
                f.length +
                ` beginbfchar
` +
                f.join(`
`) +
                `
endbfchar`),
              (f = [])),
            o[l] !== void 0 &&
              o[l] !== null &&
              typeof o[l].toString == 'function' &&
              ((g = ('0000' + o[l].toString(16)).slice(-4)),
              (l = ('0000' + (+l).toString(16)).slice(-4)),
              f.push('<' + l + '><' + g + '>'))
        return (
          f.length &&
            (A +=
              `
` +
              f.length +
              ` beginbfchar
` +
              f.join(`
`) +
              `
endbfchar
`),
          (A += `endcmap
CMapName currentdict /CMap defineresource pop
end
end`)
        )
      }
    e.events.push([
      'putFont',
      function (o) {
        ;(function (l) {
          var h = l.font,
            f = l.out,
            g = l.newObject,
            A = l.putStream
          if (h.metadata instanceof i.API.TTFFont && h.encoding === 'Identity-H') {
            for (
              var N = h.metadata.Unicode.widths,
                _ = h.metadata.subset.encode(h.metadata.glyIdsUsed, 1),
                p = '',
                B = 0;
              B < _.length;
              B++
            )
              p += String.fromCharCode(_[B])
            var F = g()
            A({ data: p, addLength1: !0, objectId: F }), f('endobj')
            var q = g()
            A({ data: a(h.metadata.toUnicode), addLength1: !0, objectId: q }), f('endobj')
            var S = g()
            f('<<'),
              f('/Type /FontDescriptor'),
              f('/FontName /' + gi(h.fontName)),
              f('/FontFile2 ' + F + ' 0 R'),
              f('/FontBBox ' + i.API.PDFObject.convert(h.metadata.bbox)),
              f('/Flags ' + h.metadata.flags),
              f('/StemV ' + h.metadata.stemV),
              f('/ItalicAngle ' + h.metadata.italicAngle),
              f('/Ascent ' + h.metadata.ascender),
              f('/Descent ' + h.metadata.decender),
              f('/CapHeight ' + h.metadata.capHeight),
              f('>>'),
              f('endobj')
            var M = g()
            f('<<'),
              f('/Type /Font'),
              f('/BaseFont /' + gi(h.fontName)),
              f('/FontDescriptor ' + S + ' 0 R'),
              f('/W ' + i.API.PDFObject.convert(N)),
              f('/CIDToGIDMap /Identity'),
              f('/DW 1000'),
              f('/Subtype /CIDFontType2'),
              f('/CIDSystemInfo'),
              f('<<'),
              f('/Supplement 0'),
              f('/Registry (Adobe)'),
              f('/Ordering (' + h.encoding + ')'),
              f('>>'),
              f('>>'),
              f('endobj'),
              (h.objectNumber = g()),
              f('<<'),
              f('/Type /Font'),
              f('/Subtype /Type0'),
              f('/ToUnicode ' + q + ' 0 R'),
              f('/BaseFont /' + gi(h.fontName)),
              f('/Encoding /' + h.encoding),
              f('/DescendantFonts [' + M + ' 0 R]'),
              f('>>'),
              f('endobj'),
              (h.isAlreadyPutted = !0)
          }
        })(o)
      }
    ]),
      e.events.push([
        'putFont',
        function (o) {
          ;(function (l) {
            var h = l.font,
              f = l.out,
              g = l.newObject,
              A = l.putStream
            if (h.metadata instanceof i.API.TTFFont && h.encoding === 'WinAnsiEncoding') {
              for (var N = h.metadata.rawData, _ = '', p = 0; p < N.length; p++)
                _ += String.fromCharCode(N[p])
              var B = g()
              A({ data: _, addLength1: !0, objectId: B }), f('endobj')
              var F = g()
              A({ data: a(h.metadata.toUnicode), addLength1: !0, objectId: F }), f('endobj')
              var q = g()
              f('<<'),
                f('/Descent ' + h.metadata.decender),
                f('/CapHeight ' + h.metadata.capHeight),
                f('/StemV ' + h.metadata.stemV),
                f('/Type /FontDescriptor'),
                f('/FontFile2 ' + B + ' 0 R'),
                f('/Flags 96'),
                f('/FontBBox ' + i.API.PDFObject.convert(h.metadata.bbox)),
                f('/FontName /' + gi(h.fontName)),
                f('/ItalicAngle ' + h.metadata.italicAngle),
                f('/Ascent ' + h.metadata.ascender),
                f('>>'),
                f('endobj'),
                (h.objectNumber = g())
              for (var S = 0; S < h.metadata.hmtx.widths.length; S++)
                h.metadata.hmtx.widths[S] = parseInt(
                  h.metadata.hmtx.widths[S] * (1e3 / h.metadata.head.unitsPerEm)
                )
              f(
                '<</Subtype/TrueType/Type/Font/ToUnicode ' +
                  F +
                  ' 0 R/BaseFont/' +
                  gi(h.fontName) +
                  '/FontDescriptor ' +
                  q +
                  ' 0 R/Encoding/' +
                  h.encoding +
                  ' /FirstChar 29 /LastChar 255 /Widths ' +
                  i.API.PDFObject.convert(h.metadata.hmtx.widths) +
                  '>>'
              ),
                f('endobj'),
                (h.isAlreadyPutted = !0)
            }
          })(o)
        }
      ])
    var u = function (o) {
      var l,
        h = o.text || '',
        f = o.x,
        g = o.y,
        A = o.options || {},
        N = o.mutex || {},
        _ = N.pdfEscape,
        p = N.activeFontKey,
        B = N.fonts,
        F = p,
        q = '',
        S = 0,
        M = '',
        Z = B[F].encoding
      if (B[F].encoding !== 'Identity-H') return { text: h, x: f, y: g, options: A, mutex: N }
      for (M = h, F = p, Array.isArray(h) && (M = h[0]), S = 0; S < M.length; S += 1)
        B[F].metadata.hasOwnProperty('cmap') &&
          (l = B[F].metadata.cmap.unicode.codeMap[M[S].charCodeAt(0)]),
          l || (M[S].charCodeAt(0) < 256 && B[F].metadata.hasOwnProperty('Unicode'))
            ? (q += M[S])
            : (q += '')
      var st = ''
      return (
        parseInt(F.slice(1)) < 14 || Z === 'WinAnsiEncoding'
          ? (st = _(q, F)
              .split('')
              .map(function (dt) {
                return dt.charCodeAt(0).toString(16)
              })
              .join(''))
          : Z === 'Identity-H' && (st = n(q, B[F])),
        (N.isHex = !0),
        { text: st, x: f, y: g, options: A, mutex: N }
      )
    }
    e.events.push([
      'postProcessText',
      function (o) {
        var l = o.text || '',
          h = [],
          f = { text: l, x: o.x, y: o.y, options: o.options, mutex: o.mutex }
        if (Array.isArray(l)) {
          var g = 0
          for (g = 0; g < l.length; g += 1)
            Array.isArray(l[g]) && l[g].length === 3
              ? h.push([u(Object.assign({}, f, { text: l[g][0] })).text, l[g][1], l[g][2]])
              : h.push(u(Object.assign({}, f, { text: l[g] })).text)
          o.text = h
        } else o.text = u(Object.assign({}, f, { text: l })).text
      }
    ])
  })(zt),
  (function (i) {
    var e = function () {
      return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0
    }
    ;(i.existsFileInVFS = function (n) {
      return e.call(this), this.internal.vFS[n] !== void 0
    }),
      (i.addFileToVFS = function (n, a) {
        return e.call(this), (this.internal.vFS[n] = a), this
      }),
      (i.getFileFromVFS = function (n) {
        return e.call(this), this.internal.vFS[n] !== void 0 ? this.internal.vFS[n] : null
      })
  })(zt.API),
  (function (i) {
    i.__bidiEngine__ = i.prototype.__bidiEngine__ = function (a) {
      var u,
        o,
        l,
        h,
        f,
        g,
        A,
        N = e,
        _ = [
          [0, 3, 0, 1, 0, 0, 0],
          [0, 3, 0, 1, 2, 2, 0],
          [0, 3, 0, 17, 2, 0, 1],
          [0, 3, 5, 5, 4, 1, 0],
          [0, 3, 21, 21, 4, 0, 1],
          [0, 3, 5, 5, 4, 2, 0]
        ],
        p = [
          [2, 0, 1, 1, 0, 1, 0],
          [2, 0, 1, 1, 0, 2, 0],
          [2, 0, 2, 1, 3, 2, 0],
          [2, 0, 2, 33, 3, 1, 1]
        ],
        B = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 },
        F = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 },
        q = [
          '(',
          ')',
          '(',
          '<',
          '>',
          '<',
          '[',
          ']',
          '[',
          '{',
          '}',
          '{',
          '\xAB',
          '\xBB',
          '\xAB',
          '\u2039',
          '\u203A',
          '\u2039',
          '\u2045',
          '\u2046',
          '\u2045',
          '\u207D',
          '\u207E',
          '\u207D',
          '\u208D',
          '\u208E',
          '\u208D',
          '\u2264',
          '\u2265',
          '\u2264',
          '\u2329',
          '\u232A',
          '\u2329',
          '\uFE59',
          '\uFE5A',
          '\uFE59',
          '\uFE5B',
          '\uFE5C',
          '\uFE5B',
          '\uFE5D',
          '\uFE5E',
          '\uFE5D',
          '\uFE64',
          '\uFE65',
          '\uFE64'
        ],
        S = new RegExp(
          /^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/
        ),
        M = !1,
        Z = 0
      this.__bidiEngine__ = {}
      var st = function (k) {
          var I = k.charCodeAt(),
            H = I >> 8,
            R = F[H]
          return R !== void 0
            ? N[256 * R + (255 & I)]
            : H === 252 || H === 253
            ? 'AL'
            : S.test(H)
            ? 'L'
            : H === 8
            ? 'R'
            : 'N'
        },
        dt = function (k) {
          for (var I, H = 0; H < k.length; H++) {
            if ((I = st(k.charAt(H))) === 'L') return !1
            if (I === 'R') return !0
          }
          return !1
        },
        Nt = function (k, I, H, R) {
          var ct,
            ot,
            mt,
            tt,
            pt = I[R]
          switch (pt) {
            case 'L':
            case 'R':
              M = !1
              break
            case 'N':
            case 'AN':
              break
            case 'EN':
              M && (pt = 'AN')
              break
            case 'AL':
              ;(M = !0), (pt = 'R')
              break
            case 'WS':
              pt = 'N'
              break
            case 'CS':
              R < 1 ||
              R + 1 >= I.length ||
              ((ct = H[R - 1]) !== 'EN' && ct !== 'AN') ||
              ((ot = I[R + 1]) !== 'EN' && ot !== 'AN')
                ? (pt = 'N')
                : M && (ot = 'AN'),
                (pt = ot === ct ? ot : 'N')
              break
            case 'ES':
              pt =
                (ct = R > 0 ? H[R - 1] : 'B') === 'EN' && R + 1 < I.length && I[R + 1] === 'EN'
                  ? 'EN'
                  : 'N'
              break
            case 'ET':
              if (R > 0 && H[R - 1] === 'EN') {
                pt = 'EN'
                break
              }
              if (M) {
                pt = 'N'
                break
              }
              for (mt = R + 1, tt = I.length; mt < tt && I[mt] === 'ET'; ) mt++
              pt = mt < tt && I[mt] === 'EN' ? 'EN' : 'N'
              break
            case 'NSM':
              if (l && !h) {
                for (tt = I.length, mt = R + 1; mt < tt && I[mt] === 'NSM'; ) mt++
                if (mt < tt) {
                  var ft = k[R],
                    Et = (ft >= 1425 && ft <= 2303) || ft === 64286
                  if (((ct = I[mt]), Et && (ct === 'R' || ct === 'AL'))) {
                    pt = 'R'
                    break
                  }
                }
              }
              pt = R < 1 || (ct = I[R - 1]) === 'B' ? 'N' : H[R - 1]
              break
            case 'B':
              ;(M = !1), (u = !0), (pt = Z)
              break
            case 'S':
              ;(o = !0), (pt = 'N')
              break
            case 'LRE':
            case 'RLE':
            case 'LRO':
            case 'RLO':
            case 'PDF':
              M = !1
              break
            case 'BN':
              pt = 'N'
          }
          return pt
        },
        rt = function (k, I, H) {
          var R = k.split('')
          return H && G(R, H, { hiLevel: Z }), R.reverse(), I && I.reverse(), R.join('')
        },
        G = function (k, I, H) {
          var R,
            ct,
            ot,
            mt,
            tt,
            pt = -1,
            ft = k.length,
            Et = 0,
            w = [],
            j = Z ? p : _,
            E = []
          for (M = !1, u = !1, o = !1, ct = 0; ct < ft; ct++) E[ct] = st(k[ct])
          for (ot = 0; ot < ft; ot++) {
            if (
              ((tt = Et),
              (w[ot] = Nt(k, E, w, ot)),
              (R = 240 & (Et = j[tt][B[w[ot]]])),
              (Et &= 15),
              (I[ot] = mt = j[Et][5]),
              R > 0)
            )
              if (R === 16) {
                for (ct = pt; ct < ot; ct++) I[ct] = 1
                pt = -1
              } else pt = -1
            if (j[Et][6]) pt === -1 && (pt = ot)
            else if (pt > -1) {
              for (ct = pt; ct < ot; ct++) I[ct] = mt
              pt = -1
            }
            E[ot] === 'B' && (I[ot] = 0), (H.hiLevel |= mt)
          }
          o &&
            (function (W, Y, $) {
              for (var et = 0; et < $; et++)
                if (W[et] === 'S') {
                  Y[et] = Z
                  for (var Q = et - 1; Q >= 0 && W[Q] === 'WS'; Q--) Y[Q] = Z
                }
            })(E, I, ft)
        },
        vt = function (k, I, H, R, ct) {
          if (!(ct.hiLevel < k)) {
            if (k === 1 && Z === 1 && !u) return I.reverse(), void (H && H.reverse())
            for (var ot, mt, tt, pt, ft = I.length, Et = 0; Et < ft; ) {
              if (R[Et] >= k) {
                for (tt = Et + 1; tt < ft && R[tt] >= k; ) tt++
                for (pt = Et, mt = tt - 1; pt < mt; pt++, mt--)
                  (ot = I[pt]),
                    (I[pt] = I[mt]),
                    (I[mt] = ot),
                    H && ((ot = H[pt]), (H[pt] = H[mt]), (H[mt] = ot))
                Et = tt
              }
              Et++
            }
          }
        },
        bt = function (k, I, H) {
          var R = k.split(''),
            ct = { hiLevel: Z }
          return (
            H || (H = []),
            G(R, H, ct),
            (function (ot, mt, tt) {
              if (tt.hiLevel !== 0 && A)
                for (var pt, ft = 0; ft < ot.length; ft++)
                  mt[ft] === 1 && (pt = q.indexOf(ot[ft])) >= 0 && (ot[ft] = q[pt + 1])
            })(R, H, ct),
            vt(2, R, I, H, ct),
            vt(1, R, I, H, ct),
            R.join('')
          )
        }
      return (
        (this.__bidiEngine__.doBidiReorder = function (k, I, H) {
          if (
            ((function (ct, ot) {
              if (ot) for (var mt = 0; mt < ct.length; mt++) ot[mt] = mt
              h === void 0 && (h = dt(ct)), g === void 0 && (g = dt(ct))
            })(k, I),
            l || !f || g)
          )
            if (l && f && h ^ g) (Z = h ? 1 : 0), (k = rt(k, I, H))
            else if (!l && f && g) (Z = h ? 1 : 0), (k = bt(k, I, H)), (k = rt(k, I))
            else if (!l || h || f || g) {
              if (l && !f && h ^ g)
                (k = rt(k, I)),
                  h ? ((Z = 0), (k = bt(k, I, H))) : ((Z = 1), (k = bt(k, I, H)), (k = rt(k, I)))
              else if (l && h && !f && g) (Z = 1), (k = bt(k, I, H)), (k = rt(k, I))
              else if (!l && !f && h ^ g) {
                var R = A
                h
                  ? ((Z = 1), (k = bt(k, I, H)), (Z = 0), (A = !1), (k = bt(k, I, H)), (A = R))
                  : ((Z = 0),
                    (k = bt(k, I, H)),
                    (k = rt(k, I)),
                    (Z = 1),
                    (A = !1),
                    (k = bt(k, I, H)),
                    (A = R),
                    (k = rt(k, I)))
              }
            } else (Z = 0), (k = bt(k, I, H))
          else (Z = h ? 1 : 0), (k = bt(k, I, H))
          return k
        }),
        (this.__bidiEngine__.setOptions = function (k) {
          k &&
            ((l = k.isInputVisual),
            (f = k.isOutputVisual),
            (h = k.isInputRtl),
            (g = k.isOutputRtl),
            (A = k.isSymmetricSwapping))
        }),
        this.__bidiEngine__.setOptions(a),
        this.__bidiEngine__
      )
    }
    var e = [
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'S',
        'B',
        'S',
        'WS',
        'B',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'B',
        'B',
        'B',
        'S',
        'WS',
        'N',
        'N',
        'ET',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'N',
        'N',
        'ES',
        'CS',
        'ES',
        'CS',
        'CS',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'CS',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'N',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'B',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'CS',
        'N',
        'ET',
        'ET',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'N',
        'L',
        'N',
        'N',
        'BN',
        'N',
        'N',
        'ET',
        'ET',
        'EN',
        'EN',
        'N',
        'L',
        'N',
        'N',
        'N',
        'EN',
        'L',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'L',
        'N',
        'N',
        'N',
        'N',
        'N',
        'ET',
        'N',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'R',
        'NSM',
        'R',
        'NSM',
        'NSM',
        'R',
        'NSM',
        'NSM',
        'R',
        'NSM',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'N',
        'N',
        'N',
        'N',
        'N',
        'R',
        'R',
        'R',
        'R',
        'R',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'N',
        'N',
        'AL',
        'ET',
        'ET',
        'AL',
        'CS',
        'AL',
        'N',
        'N',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'AL',
        'AL',
        'N',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'ET',
        'AN',
        'AN',
        'AL',
        'AL',
        'AL',
        'NSM',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'AN',
        'N',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'AL',
        'AL',
        'NSM',
        'NSM',
        'N',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'AL',
        'AL',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'N',
        'AL',
        'AL',
        'NSM',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'N',
        'N',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'AL',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'R',
        'R',
        'N',
        'N',
        'N',
        'N',
        'R',
        'N',
        'N',
        'N',
        'N',
        'N',
        'WS',
        'WS',
        'WS',
        'WS',
        'WS',
        'WS',
        'WS',
        'WS',
        'WS',
        'WS',
        'WS',
        'BN',
        'BN',
        'BN',
        'L',
        'R',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'WS',
        'B',
        'LRE',
        'RLE',
        'PDF',
        'LRO',
        'RLO',
        'CS',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'CS',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'WS',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'N',
        'LRI',
        'RLI',
        'FSI',
        'PDI',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'EN',
        'L',
        'N',
        'N',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'ES',
        'ES',
        'N',
        'N',
        'N',
        'L',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'ES',
        'ES',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'N',
        'N',
        'R',
        'NSM',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'ES',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'N',
        'R',
        'R',
        'R',
        'R',
        'R',
        'N',
        'R',
        'N',
        'R',
        'R',
        'N',
        'R',
        'R',
        'N',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'CS',
        'N',
        'CS',
        'N',
        'N',
        'CS',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'ET',
        'N',
        'N',
        'ES',
        'ES',
        'N',
        'N',
        'N',
        'N',
        'N',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'N',
        'N',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'N',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'N',
        'N',
        'BN',
        'N',
        'N',
        'N',
        'ET',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'N',
        'N',
        'ES',
        'CS',
        'ES',
        'CS',
        'CS',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'CS',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N'
      ],
      n = new i.__bidiEngine__({ isInputVisual: !0 })
    i.API.events.push([
      'postProcessText',
      function (a) {
        var u = a.text,
          o = (a.x, a.y, a.options || {}),
          l = (a.mutex, o.lang, [])
        if (
          ((o.isInputVisual = typeof o.isInputVisual != 'boolean' || o.isInputVisual),
          n.setOptions(o),
          Object.prototype.toString.call(u) === '[object Array]')
        ) {
          var h = 0
          for (l = [], h = 0; h < u.length; h += 1)
            Object.prototype.toString.call(u[h]) === '[object Array]'
              ? l.push([n.doBidiReorder(u[h][0]), u[h][1], u[h][2]])
              : l.push([n.doBidiReorder(u[h])])
          a.text = l
        } else a.text = n.doBidiReorder(u)
        n.setOptions({ isInputVisual: !0 })
      }
    ])
  })(zt),
  (zt.API.TTFFont = (function () {
    function i(e) {
      var n
      if (
        ((this.rawData = e),
        (n = this.contents = new Ar(e)),
        (this.contents.pos = 4),
        n.readString(4) === 'ttcf')
      )
        throw new Error('TTCF not supported.')
      ;(n.pos = 0), this.parse(), (this.subset = new ju(this)), this.registerTTF()
    }
    return (
      (i.open = function (e) {
        return new i(e)
      }),
      (i.prototype.parse = function () {
        return (
          (this.directory = new bu(this.contents)),
          (this.head = new wu(this)),
          (this.name = new Su(this)),
          (this.cmap = new uc(this)),
          (this.toUnicode = {}),
          (this.hhea = new Lu(this)),
          (this.maxp = new _u(this)),
          (this.hmtx = new Pu(this)),
          (this.post = new Au(this)),
          (this.os2 = new Nu(this)),
          (this.loca = new Cu(this)),
          (this.glyf = new ku(this)),
          (this.ascender = (this.os2.exists && this.os2.ascender) || this.hhea.ascender),
          (this.decender = (this.os2.exists && this.os2.decender) || this.hhea.decender),
          (this.lineGap = (this.os2.exists && this.os2.lineGap) || this.hhea.lineGap),
          (this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax])
        )
      }),
      (i.prototype.registerTTF = function () {
        var e, n, a, u, o
        if (
          ((this.scaleFactor = 1e3 / this.head.unitsPerEm),
          (this.bbox = function () {
            var l, h, f, g
            for (g = [], l = 0, h = (f = this.bbox).length; l < h; l++)
              (e = f[l]), g.push(Math.round(e * this.scaleFactor))
            return g
          }.call(this)),
          (this.stemV = 0),
          this.post.exists
            ? ((a = 255 & (u = this.post.italic_angle)),
              (32768 & (n = u >> 16)) != 0 && (n = -(1 + (65535 ^ n))),
              (this.italicAngle = +(n + '.' + a)))
            : (this.italicAngle = 0),
          (this.ascender = Math.round(this.ascender * this.scaleFactor)),
          (this.decender = Math.round(this.decender * this.scaleFactor)),
          (this.lineGap = Math.round(this.lineGap * this.scaleFactor)),
          (this.capHeight = (this.os2.exists && this.os2.capHeight) || this.ascender),
          (this.xHeight = (this.os2.exists && this.os2.xHeight) || 0),
          (this.familyClass = ((this.os2.exists && this.os2.familyClass) || 0) >> 8),
          (this.isSerif =
            (o = this.familyClass) === 1 || o === 2 || o === 3 || o === 4 || o === 5 || o === 7),
          (this.isScript = this.familyClass === 10),
          (this.flags = 0),
          this.post.isFixedPitch && (this.flags |= 1),
          this.isSerif && (this.flags |= 2),
          this.isScript && (this.flags |= 8),
          this.italicAngle !== 0 && (this.flags |= 64),
          (this.flags |= 32),
          !this.cmap.unicode)
        )
          throw new Error('No unicode cmap for font')
      }),
      (i.prototype.characterToGlyph = function (e) {
        var n
        return ((n = this.cmap.unicode) != null ? n.codeMap[e] : void 0) || 0
      }),
      (i.prototype.widthOfGlyph = function (e) {
        var n
        return (n = 1e3 / this.head.unitsPerEm), this.hmtx.forGlyph(e).advance * n
      }),
      (i.prototype.widthOfString = function (e, n, a) {
        var u, o, l, h
        for (l = 0, o = 0, h = (e = '' + e).length; 0 <= h ? o < h : o > h; o = 0 <= h ? ++o : --o)
          (u = e.charCodeAt(o)),
            (l += this.widthOfGlyph(this.characterToGlyph(u)) + a * (1e3 / n) || 0)
        return l * (n / 1e3)
      }),
      (i.prototype.lineHeight = function (e, n) {
        var a
        return (
          n == null && (n = !1),
          (a = n ? this.lineGap : 0),
          ((this.ascender + a - this.decender) / 1e3) * e
        )
      }),
      i
    )
  })())
var Bn,
  Ar = (function () {
    function i(e) {
      ;(this.data = e != null ? e : []), (this.pos = 0), (this.length = this.data.length)
    }
    return (
      (i.prototype.readByte = function () {
        return this.data[this.pos++]
      }),
      (i.prototype.writeByte = function (e) {
        return (this.data[this.pos++] = e)
      }),
      (i.prototype.readUInt32 = function () {
        return (
          16777216 * this.readByte() +
          (this.readByte() << 16) +
          (this.readByte() << 8) +
          this.readByte()
        )
      }),
      (i.prototype.writeUInt32 = function (e) {
        return (
          this.writeByte((e >>> 24) & 255),
          this.writeByte((e >> 16) & 255),
          this.writeByte((e >> 8) & 255),
          this.writeByte(255 & e)
        )
      }),
      (i.prototype.readInt32 = function () {
        var e
        return (e = this.readUInt32()) >= 2147483648 ? e - 4294967296 : e
      }),
      (i.prototype.writeInt32 = function (e) {
        return e < 0 && (e += 4294967296), this.writeUInt32(e)
      }),
      (i.prototype.readUInt16 = function () {
        return (this.readByte() << 8) | this.readByte()
      }),
      (i.prototype.writeUInt16 = function (e) {
        return this.writeByte((e >> 8) & 255), this.writeByte(255 & e)
      }),
      (i.prototype.readInt16 = function () {
        var e
        return (e = this.readUInt16()) >= 32768 ? e - 65536 : e
      }),
      (i.prototype.writeInt16 = function (e) {
        return e < 0 && (e += 65536), this.writeUInt16(e)
      }),
      (i.prototype.readString = function (e) {
        var n, a
        for (a = [], n = 0; 0 <= e ? n < e : n > e; n = 0 <= e ? ++n : --n)
          a[n] = String.fromCharCode(this.readByte())
        return a.join('')
      }),
      (i.prototype.writeString = function (e) {
        var n, a, u
        for (u = [], n = 0, a = e.length; 0 <= a ? n < a : n > a; n = 0 <= a ? ++n : --n)
          u.push(this.writeByte(e.charCodeAt(n)))
        return u
      }),
      (i.prototype.readShort = function () {
        return this.readInt16()
      }),
      (i.prototype.writeShort = function (e) {
        return this.writeInt16(e)
      }),
      (i.prototype.readLongLong = function () {
        var e, n, a, u, o, l, h, f
        return (
          (e = this.readByte()),
          (n = this.readByte()),
          (a = this.readByte()),
          (u = this.readByte()),
          (o = this.readByte()),
          (l = this.readByte()),
          (h = this.readByte()),
          (f = this.readByte()),
          128 & e
            ? -1 *
              (72057594037927940 * (255 ^ e) +
                281474976710656 * (255 ^ n) +
                1099511627776 * (255 ^ a) +
                4294967296 * (255 ^ u) +
                16777216 * (255 ^ o) +
                65536 * (255 ^ l) +
                256 * (255 ^ h) +
                (255 ^ f) +
                1)
            : 72057594037927940 * e +
              281474976710656 * n +
              1099511627776 * a +
              4294967296 * u +
              16777216 * o +
              65536 * l +
              256 * h +
              f
        )
      }),
      (i.prototype.writeLongLong = function (e) {
        var n, a
        return (
          (n = Math.floor(e / 4294967296)),
          (a = 4294967295 & e),
          this.writeByte((n >> 24) & 255),
          this.writeByte((n >> 16) & 255),
          this.writeByte((n >> 8) & 255),
          this.writeByte(255 & n),
          this.writeByte((a >> 24) & 255),
          this.writeByte((a >> 16) & 255),
          this.writeByte((a >> 8) & 255),
          this.writeByte(255 & a)
        )
      }),
      (i.prototype.readInt = function () {
        return this.readInt32()
      }),
      (i.prototype.writeInt = function (e) {
        return this.writeInt32(e)
      }),
      (i.prototype.read = function (e) {
        var n, a
        for (n = [], a = 0; 0 <= e ? a < e : a > e; a = 0 <= e ? ++a : --a) n.push(this.readByte())
        return n
      }),
      (i.prototype.write = function (e) {
        var n, a, u, o
        for (o = [], a = 0, u = e.length; a < u; a++) (n = e[a]), o.push(this.writeByte(n))
        return o
      }),
      i
    )
  })(),
  bu = (function () {
    var i
    function e(n) {
      var a, u, o
      for (
        this.scalarType = n.readInt(),
          this.tableCount = n.readShort(),
          this.searchRange = n.readShort(),
          this.entrySelector = n.readShort(),
          this.rangeShift = n.readShort(),
          this.tables = {},
          u = 0,
          o = this.tableCount;
        0 <= o ? u < o : u > o;
        u = 0 <= o ? ++u : --u
      )
        (a = {
          tag: n.readString(4),
          checksum: n.readInt(),
          offset: n.readInt(),
          length: n.readInt()
        }),
          (this.tables[a.tag] = a)
    }
    return (
      (e.prototype.encode = function (n) {
        var a, u, o, l, h, f, g, A, N, _, p, B, F
        for (F in ((p = Object.keys(n).length),
        (f = Math.log(2)),
        (N = 16 * Math.floor(Math.log(p) / f)),
        (l = Math.floor(N / f)),
        (A = 16 * p - N),
        (u = new Ar()).writeInt(this.scalarType),
        u.writeShort(p),
        u.writeShort(N),
        u.writeShort(l),
        u.writeShort(A),
        (o = 16 * p),
        (g = u.pos + o),
        (h = null),
        (B = []),
        n))
          for (
            _ = n[F],
              u.writeString(F),
              u.writeInt(i(_)),
              u.writeInt(g),
              u.writeInt(_.length),
              B = B.concat(_),
              F === 'head' && (h = g),
              g += _.length;
            g % 4;

          )
            B.push(0), g++
        return u.write(B), (a = 2981146554 - i(u.data)), (u.pos = h + 8), u.writeUInt32(a), u.data
      }),
      (i = function (n) {
        var a, u, o, l
        for (n = lc.call(n); n.length % 4; ) n.push(0)
        for (o = new Ar(n), u = 0, a = 0, l = n.length; a < l; a = a += 4) u += o.readUInt32()
        return 4294967295 & u
      }),
      e
    )
  })(),
  yu = {}.hasOwnProperty,
  Gn = function (i, e) {
    for (var n in e) yu.call(e, n) && (i[n] = e[n])
    function a() {
      this.constructor = i
    }
    return (a.prototype = e.prototype), (i.prototype = new a()), (i.__super__ = e.prototype), i
  }
Bn = (function () {
  function i(e) {
    var n
    ;(this.file = e),
      (n = this.file.directory.tables[this.tag]),
      (this.exists = !!n),
      n && ((this.offset = n.offset), (this.length = n.length), this.parse(this.file.contents))
  }
  return (
    (i.prototype.parse = function () {}),
    (i.prototype.encode = function () {}),
    (i.prototype.raw = function () {
      return this.exists
        ? ((this.file.contents.pos = this.offset), this.file.contents.read(this.length))
        : null
    }),
    i
  )
})()
var wu = (function (i) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return (
      Gn(e, Bn),
      (e.prototype.tag = 'head'),
      (e.prototype.parse = function (n) {
        return (
          (n.pos = this.offset),
          (this.version = n.readInt()),
          (this.revision = n.readInt()),
          (this.checkSumAdjustment = n.readInt()),
          (this.magicNumber = n.readInt()),
          (this.flags = n.readShort()),
          (this.unitsPerEm = n.readShort()),
          (this.created = n.readLongLong()),
          (this.modified = n.readLongLong()),
          (this.xMin = n.readShort()),
          (this.yMin = n.readShort()),
          (this.xMax = n.readShort()),
          (this.yMax = n.readShort()),
          (this.macStyle = n.readShort()),
          (this.lowestRecPPEM = n.readShort()),
          (this.fontDirectionHint = n.readShort()),
          (this.indexToLocFormat = n.readShort()),
          (this.glyphDataFormat = n.readShort())
        )
      }),
      (e.prototype.encode = function (n) {
        var a
        return (
          (a = new Ar()).writeInt(this.version),
          a.writeInt(this.revision),
          a.writeInt(this.checkSumAdjustment),
          a.writeInt(this.magicNumber),
          a.writeShort(this.flags),
          a.writeShort(this.unitsPerEm),
          a.writeLongLong(this.created),
          a.writeLongLong(this.modified),
          a.writeShort(this.xMin),
          a.writeShort(this.yMin),
          a.writeShort(this.xMax),
          a.writeShort(this.yMax),
          a.writeShort(this.macStyle),
          a.writeShort(this.lowestRecPPEM),
          a.writeShort(this.fontDirectionHint),
          a.writeShort(n),
          a.writeShort(this.glyphDataFormat),
          a.data
        )
      }),
      e
    )
  })(),
  $s = (function () {
    function i(e, n) {
      var a, u, o, l, h, f, g, A, N, _, p, B, F, q, S, M, Z
      switch (
        ((this.platformID = e.readUInt16()),
        (this.encodingID = e.readShort()),
        (this.offset = n + e.readInt()),
        (N = e.pos),
        (e.pos = this.offset),
        (this.format = e.readUInt16()),
        (this.length = e.readUInt16()),
        (this.language = e.readUInt16()),
        (this.isUnicode =
          (this.platformID === 3 && this.encodingID === 1 && this.format === 4) ||
          (this.platformID === 0 && this.format === 4)),
        (this.codeMap = {}),
        this.format)
      ) {
        case 0:
          for (f = 0; f < 256; ++f) this.codeMap[f] = e.readByte()
          break
        case 4:
          for (
            p = e.readUInt16(),
              _ = p / 2,
              e.pos += 6,
              o = (function () {
                var st, dt
                for (dt = [], f = st = 0; 0 <= _ ? st < _ : st > _; f = 0 <= _ ? ++st : --st)
                  dt.push(e.readUInt16())
                return dt
              })(),
              e.pos += 2,
              F = (function () {
                var st, dt
                for (dt = [], f = st = 0; 0 <= _ ? st < _ : st > _; f = 0 <= _ ? ++st : --st)
                  dt.push(e.readUInt16())
                return dt
              })(),
              g = (function () {
                var st, dt
                for (dt = [], f = st = 0; 0 <= _ ? st < _ : st > _; f = 0 <= _ ? ++st : --st)
                  dt.push(e.readUInt16())
                return dt
              })(),
              A = (function () {
                var st, dt
                for (dt = [], f = st = 0; 0 <= _ ? st < _ : st > _; f = 0 <= _ ? ++st : --st)
                  dt.push(e.readUInt16())
                return dt
              })(),
              u = (this.length - e.pos + this.offset) / 2,
              h = (function () {
                var st, dt
                for (dt = [], f = st = 0; 0 <= u ? st < u : st > u; f = 0 <= u ? ++st : --st)
                  dt.push(e.readUInt16())
                return dt
              })(),
              f = S = 0,
              Z = o.length;
            S < Z;
            f = ++S
          )
            for (q = o[f], a = M = B = F[f]; B <= q ? M <= q : M >= q; a = B <= q ? ++M : --M)
              A[f] === 0
                ? (l = a + g[f])
                : (l = h[A[f] / 2 + (a - B) - (_ - f)] || 0) !== 0 && (l += g[f]),
                (this.codeMap[a] = 65535 & l)
      }
      e.pos = N
    }
    return (
      (i.encode = function (e, n) {
        var a,
          u,
          o,
          l,
          h,
          f,
          g,
          A,
          N,
          _,
          p,
          B,
          F,
          q,
          S,
          M,
          Z,
          st,
          dt,
          Nt,
          rt,
          G,
          vt,
          bt,
          k,
          I,
          H,
          R,
          ct,
          ot,
          mt,
          tt,
          pt,
          ft,
          Et,
          w,
          j,
          E,
          W,
          Y,
          $,
          et,
          Q,
          At,
          Lt,
          Ot
        switch (
          ((R = new Ar()),
          (l = Object.keys(e).sort(function (jt, Wt) {
            return jt - Wt
          })),
          n)
        ) {
          case 'macroman':
            for (
              F = 0,
                q = (function () {
                  var jt = []
                  for (B = 0; B < 256; ++B) jt.push(0)
                  return jt
                })(),
                M = { 0: 0 },
                o = {},
                ct = 0,
                pt = l.length;
              ct < pt;
              ct++
            )
              M[(Q = e[(u = l[ct])])] == null && (M[Q] = ++F),
                (o[u] = { old: e[u], new: M[e[u]] }),
                (q[u] = M[e[u]])
            return (
              R.writeUInt16(1),
              R.writeUInt16(0),
              R.writeUInt32(12),
              R.writeUInt16(0),
              R.writeUInt16(262),
              R.writeUInt16(0),
              R.write(q),
              { charMap: o, subtable: R.data, maxGlyphID: F + 1 }
            )
          case 'unicode':
            for (
              I = [], N = [], Z = 0, M = {}, a = {}, S = g = null, ot = 0, ft = l.length;
              ot < ft;
              ot++
            )
              M[(dt = e[(u = l[ot])])] == null && (M[dt] = ++Z),
                (a[u] = { old: dt, new: M[dt] }),
                (h = M[dt] - u),
                (S != null && h === g) || (S && N.push(S), I.push(u), (g = h)),
                (S = u)
            for (
              S && N.push(S),
                N.push(65535),
                I.push(65535),
                bt = 2 * (vt = I.length),
                G = 2 * Math.pow(Math.log(vt) / Math.LN2, 2),
                _ = Math.log(G / 2) / Math.LN2,
                rt = 2 * vt - G,
                f = [],
                Nt = [],
                p = [],
                B = mt = 0,
                Et = I.length;
              mt < Et;
              B = ++mt
            ) {
              if (((k = I[B]), (A = N[B]), k === 65535)) {
                f.push(0), Nt.push(0)
                break
              }
              if (k - (H = a[k].new) >= 32768)
                for (
                  f.push(0), Nt.push(2 * (p.length + vt - B)), u = tt = k;
                  k <= A ? tt <= A : tt >= A;
                  u = k <= A ? ++tt : --tt
                )
                  p.push(a[u].new)
              else f.push(H - k), Nt.push(0)
            }
            for (
              R.writeUInt16(3),
                R.writeUInt16(1),
                R.writeUInt32(12),
                R.writeUInt16(4),
                R.writeUInt16(16 + 8 * vt + 2 * p.length),
                R.writeUInt16(0),
                R.writeUInt16(bt),
                R.writeUInt16(G),
                R.writeUInt16(_),
                R.writeUInt16(rt),
                $ = 0,
                w = N.length;
              $ < w;
              $++
            )
              (u = N[$]), R.writeUInt16(u)
            for (R.writeUInt16(0), et = 0, j = I.length; et < j; et++) (u = I[et]), R.writeUInt16(u)
            for (At = 0, E = f.length; At < E; At++) (h = f[At]), R.writeUInt16(h)
            for (Lt = 0, W = Nt.length; Lt < W; Lt++) (st = Nt[Lt]), R.writeUInt16(st)
            for (Ot = 0, Y = p.length; Ot < Y; Ot++) (F = p[Ot]), R.writeUInt16(F)
            return { charMap: a, subtable: R.data, maxGlyphID: Z + 1 }
        }
      }),
      i
    )
  })(),
  uc = (function (i) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return (
      Gn(e, Bn),
      (e.prototype.tag = 'cmap'),
      (e.prototype.parse = function (n) {
        var a, u, o
        for (
          n.pos = this.offset,
            this.version = n.readUInt16(),
            o = n.readUInt16(),
            this.tables = [],
            this.unicode = null,
            u = 0;
          0 <= o ? u < o : u > o;
          u = 0 <= o ? ++u : --u
        )
          (a = new $s(n, this.offset)),
            this.tables.push(a),
            a.isUnicode && this.unicode == null && (this.unicode = a)
        return !0
      }),
      (e.encode = function (n, a) {
        var u, o
        return (
          a == null && (a = 'macroman'),
          (u = $s.encode(n, a)),
          (o = new Ar()).writeUInt16(0),
          o.writeUInt16(1),
          (u.table = o.data.concat(u.subtable)),
          u
        )
      }),
      e
    )
  })(),
  Lu = (function (i) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return (
      Gn(e, Bn),
      (e.prototype.tag = 'hhea'),
      (e.prototype.parse = function (n) {
        return (
          (n.pos = this.offset),
          (this.version = n.readInt()),
          (this.ascender = n.readShort()),
          (this.decender = n.readShort()),
          (this.lineGap = n.readShort()),
          (this.advanceWidthMax = n.readShort()),
          (this.minLeftSideBearing = n.readShort()),
          (this.minRightSideBearing = n.readShort()),
          (this.xMaxExtent = n.readShort()),
          (this.caretSlopeRise = n.readShort()),
          (this.caretSlopeRun = n.readShort()),
          (this.caretOffset = n.readShort()),
          (n.pos += 8),
          (this.metricDataFormat = n.readShort()),
          (this.numberOfMetrics = n.readUInt16())
        )
      }),
      e
    )
  })(),
  Nu = (function (i) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return (
      Gn(e, Bn),
      (e.prototype.tag = 'OS/2'),
      (e.prototype.parse = function (n) {
        if (
          ((n.pos = this.offset),
          (this.version = n.readUInt16()),
          (this.averageCharWidth = n.readShort()),
          (this.weightClass = n.readUInt16()),
          (this.widthClass = n.readUInt16()),
          (this.type = n.readShort()),
          (this.ySubscriptXSize = n.readShort()),
          (this.ySubscriptYSize = n.readShort()),
          (this.ySubscriptXOffset = n.readShort()),
          (this.ySubscriptYOffset = n.readShort()),
          (this.ySuperscriptXSize = n.readShort()),
          (this.ySuperscriptYSize = n.readShort()),
          (this.ySuperscriptXOffset = n.readShort()),
          (this.ySuperscriptYOffset = n.readShort()),
          (this.yStrikeoutSize = n.readShort()),
          (this.yStrikeoutPosition = n.readShort()),
          (this.familyClass = n.readShort()),
          (this.panose = (function () {
            var a, u
            for (u = [], a = 0; a < 10; ++a) u.push(n.readByte())
            return u
          })()),
          (this.charRange = (function () {
            var a, u
            for (u = [], a = 0; a < 4; ++a) u.push(n.readInt())
            return u
          })()),
          (this.vendorID = n.readString(4)),
          (this.selection = n.readShort()),
          (this.firstCharIndex = n.readShort()),
          (this.lastCharIndex = n.readShort()),
          this.version > 0 &&
            ((this.ascent = n.readShort()),
            (this.descent = n.readShort()),
            (this.lineGap = n.readShort()),
            (this.winAscent = n.readShort()),
            (this.winDescent = n.readShort()),
            (this.codePageRange = (function () {
              var a, u
              for (u = [], a = 0; a < 2; a = ++a) u.push(n.readInt())
              return u
            })()),
            this.version > 1))
        )
          return (
            (this.xHeight = n.readShort()),
            (this.capHeight = n.readShort()),
            (this.defaultChar = n.readShort()),
            (this.breakChar = n.readShort()),
            (this.maxContext = n.readShort())
          )
      }),
      e
    )
  })(),
  Au = (function (i) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return (
      Gn(e, Bn),
      (e.prototype.tag = 'post'),
      (e.prototype.parse = function (n) {
        var a, u, o
        switch (
          ((n.pos = this.offset),
          (this.format = n.readInt()),
          (this.italicAngle = n.readInt()),
          (this.underlinePosition = n.readShort()),
          (this.underlineThickness = n.readShort()),
          (this.isFixedPitch = n.readInt()),
          (this.minMemType42 = n.readInt()),
          (this.maxMemType42 = n.readInt()),
          (this.minMemType1 = n.readInt()),
          (this.maxMemType1 = n.readInt()),
          this.format)
        ) {
          case 65536:
            break
          case 131072:
            var l
            for (
              u = n.readUInt16(), this.glyphNameIndex = [], l = 0;
              0 <= u ? l < u : l > u;
              l = 0 <= u ? ++l : --l
            )
              this.glyphNameIndex.push(n.readUInt16())
            for (this.names = [], o = []; n.pos < this.offset + this.length; )
              (a = n.readByte()), o.push(this.names.push(n.readString(a)))
            return o
          case 151552:
            return (u = n.readUInt16()), (this.offsets = n.read(u))
          case 196608:
            break
          case 262144:
            return (this.map = function () {
              var h, f, g
              for (
                g = [], l = h = 0, f = this.file.maxp.numGlyphs;
                0 <= f ? h < f : h > f;
                l = 0 <= f ? ++h : --h
              )
                g.push(n.readUInt32())
              return g
            }.call(this))
        }
      }),
      e
    )
  })(),
  xu = function (i, e) {
    ;(this.raw = i),
      (this.length = i.length),
      (this.platformID = e.platformID),
      (this.encodingID = e.encodingID),
      (this.languageID = e.languageID)
  },
  Su = (function (i) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return (
      Gn(e, Bn),
      (e.prototype.tag = 'name'),
      (e.prototype.parse = function (n) {
        var a, u, o, l, h, f, g, A, N, _, p
        for (
          n.pos = this.offset, n.readShort(), a = n.readShort(), f = n.readShort(), u = [], l = 0;
          0 <= a ? l < a : l > a;
          l = 0 <= a ? ++l : --l
        )
          u.push({
            platformID: n.readShort(),
            encodingID: n.readShort(),
            languageID: n.readShort(),
            nameID: n.readShort(),
            length: n.readShort(),
            offset: this.offset + f + n.readShort()
          })
        for (g = {}, l = N = 0, _ = u.length; N < _; l = ++N)
          (o = u[l]),
            (n.pos = o.offset),
            (A = n.readString(o.length)),
            (h = new xu(A, o)),
            g[(p = o.nameID)] == null && (g[p] = []),
            g[o.nameID].push(h)
        ;(this.strings = g),
          (this.copyright = g[0]),
          (this.fontFamily = g[1]),
          (this.fontSubfamily = g[2]),
          (this.uniqueSubfamily = g[3]),
          (this.fontName = g[4]),
          (this.version = g[5])
        try {
          this.postscriptName = g[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, '')
        } catch {
          this.postscriptName = g[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, '')
        }
        return (
          (this.trademark = g[7]),
          (this.manufacturer = g[8]),
          (this.designer = g[9]),
          (this.description = g[10]),
          (this.vendorUrl = g[11]),
          (this.designerUrl = g[12]),
          (this.license = g[13]),
          (this.licenseUrl = g[14]),
          (this.preferredFamily = g[15]),
          (this.preferredSubfamily = g[17]),
          (this.compatibleFull = g[18]),
          (this.sampleText = g[19])
        )
      }),
      e
    )
  })(),
  _u = (function (i) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return (
      Gn(e, Bn),
      (e.prototype.tag = 'maxp'),
      (e.prototype.parse = function (n) {
        return (
          (n.pos = this.offset),
          (this.version = n.readInt()),
          (this.numGlyphs = n.readUInt16()),
          (this.maxPoints = n.readUInt16()),
          (this.maxContours = n.readUInt16()),
          (this.maxCompositePoints = n.readUInt16()),
          (this.maxComponentContours = n.readUInt16()),
          (this.maxZones = n.readUInt16()),
          (this.maxTwilightPoints = n.readUInt16()),
          (this.maxStorage = n.readUInt16()),
          (this.maxFunctionDefs = n.readUInt16()),
          (this.maxInstructionDefs = n.readUInt16()),
          (this.maxStackElements = n.readUInt16()),
          (this.maxSizeOfInstructions = n.readUInt16()),
          (this.maxComponentElements = n.readUInt16()),
          (this.maxComponentDepth = n.readUInt16())
        )
      }),
      e
    )
  })(),
  Pu = (function (i) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return (
      Gn(e, Bn),
      (e.prototype.tag = 'hmtx'),
      (e.prototype.parse = function (n) {
        var a, u, o, l, h, f, g
        for (
          n.pos = this.offset, this.metrics = [], a = 0, f = this.file.hhea.numberOfMetrics;
          0 <= f ? a < f : a > f;
          a = 0 <= f ? ++a : --a
        )
          this.metrics.push({ advance: n.readUInt16(), lsb: n.readInt16() })
        for (
          o = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics,
            this.leftSideBearings = (function () {
              var A, N
              for (N = [], a = A = 0; 0 <= o ? A < o : A > o; a = 0 <= o ? ++A : --A)
                N.push(n.readInt16())
              return N
            })(),
            this.widths = function () {
              var A, N, _, p
              for (p = [], A = 0, N = (_ = this.metrics).length; A < N; A++)
                (l = _[A]), p.push(l.advance)
              return p
            }.call(this),
            u = this.widths[this.widths.length - 1],
            g = [],
            a = h = 0;
          0 <= o ? h < o : h > o;
          a = 0 <= o ? ++h : --h
        )
          g.push(this.widths.push(u))
        return g
      }),
      (e.prototype.forGlyph = function (n) {
        return n in this.metrics
          ? this.metrics[n]
          : {
              advance: this.metrics[this.metrics.length - 1].advance,
              lsb: this.leftSideBearings[n - this.metrics.length]
            }
      }),
      e
    )
  })(),
  lc = [].slice,
  ku = (function (i) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return (
      Gn(e, Bn),
      (e.prototype.tag = 'glyf'),
      (e.prototype.parse = function () {
        return (this.cache = {})
      }),
      (e.prototype.glyphFor = function (n) {
        var a, u, o, l, h, f, g, A, N, _
        return n in this.cache
          ? this.cache[n]
          : ((l = this.file.loca),
            (a = this.file.contents),
            (u = l.indexOf(n)),
            (o = l.lengthOf(n)) === 0
              ? (this.cache[n] = null)
              : ((a.pos = this.offset + u),
                (h = (f = new Ar(a.read(o))).readShort()),
                (A = f.readShort()),
                (_ = f.readShort()),
                (g = f.readShort()),
                (N = f.readShort()),
                (this.cache[n] = h === -1 ? new Fu(f, A, _, g, N) : new Iu(f, h, A, _, g, N)),
                this.cache[n]))
      }),
      (e.prototype.encode = function (n, a, u) {
        var o, l, h, f, g
        for (h = [], l = [], f = 0, g = a.length; f < g; f++)
          (o = n[a[f]]), l.push(h.length), o && (h = h.concat(o.encode(u)))
        return l.push(h.length), { table: h, offsets: l }
      }),
      e
    )
  })(),
  Iu = (function () {
    function i(e, n, a, u, o, l) {
      ;(this.raw = e),
        (this.numberOfContours = n),
        (this.xMin = a),
        (this.yMin = u),
        (this.xMax = o),
        (this.yMax = l),
        (this.compound = !1)
    }
    return (
      (i.prototype.encode = function () {
        return this.raw.data
      }),
      i
    )
  })(),
  Fu = (function () {
    function i(e, n, a, u, o) {
      var l, h
      for (
        this.raw = e,
          this.xMin = n,
          this.yMin = a,
          this.xMax = u,
          this.yMax = o,
          this.compound = !0,
          this.glyphIDs = [],
          this.glyphOffsets = [],
          l = this.raw;
        (h = l.readShort()),
          this.glyphOffsets.push(l.pos),
          this.glyphIDs.push(l.readUInt16()),
          32 & h;

      )
        (l.pos += 1 & h ? 4 : 2),
          128 & h ? (l.pos += 8) : 64 & h ? (l.pos += 4) : 8 & h && (l.pos += 2)
    }
    return (
      (i.prototype.encode = function () {
        var e, n, a
        for (n = new Ar(lc.call(this.raw.data)), e = 0, a = this.glyphIDs.length; e < a; ++e)
          n.pos = this.glyphOffsets[e]
        return n.data
      }),
      i
    )
  })(),
  Cu = (function (i) {
    function e() {
      return e.__super__.constructor.apply(this, arguments)
    }
    return (
      Gn(e, Bn),
      (e.prototype.tag = 'loca'),
      (e.prototype.parse = function (n) {
        var a, u
        return (
          (n.pos = this.offset),
          (a = this.file.head.indexToLocFormat),
          (this.offsets =
            a === 0
              ? function () {
                  var o, l
                  for (l = [], u = 0, o = this.length; u < o; u += 2) l.push(2 * n.readUInt16())
                  return l
                }.call(this)
              : function () {
                  var o, l
                  for (l = [], u = 0, o = this.length; u < o; u += 4) l.push(n.readUInt32())
                  return l
                }.call(this))
        )
      }),
      (e.prototype.indexOf = function (n) {
        return this.offsets[n]
      }),
      (e.prototype.lengthOf = function (n) {
        return this.offsets[n + 1] - this.offsets[n]
      }),
      (e.prototype.encode = function (n, a) {
        for (var u = new Uint32Array(this.offsets.length), o = 0, l = 0, h = 0; h < u.length; ++h)
          if (((u[h] = o), l < a.length && a[l] == h)) {
            ++l, (u[h] = o)
            var f = this.offsets[h],
              g = this.offsets[h + 1] - f
            g > 0 && (o += g)
          }
        for (var A = new Array(4 * u.length), N = 0; N < u.length; ++N)
          (A[4 * N + 3] = 255 & u[N]),
            (A[4 * N + 2] = (65280 & u[N]) >> 8),
            (A[4 * N + 1] = (16711680 & u[N]) >> 16),
            (A[4 * N] = (4278190080 & u[N]) >> 24)
        return A
      }),
      e
    )
  })(),
  ju = (function () {
    function i(e) {
      ;(this.font = e), (this.subset = {}), (this.unicodes = {}), (this.next = 33)
    }
    return (
      (i.prototype.generateCmap = function () {
        var e, n, a, u, o
        for (n in ((u = this.font.cmap.tables[0].codeMap), (e = {}), (o = this.subset)))
          (a = o[n]), (e[n] = u[a])
        return e
      }),
      (i.prototype.glyphsFor = function (e) {
        var n, a, u, o, l, h, f
        for (u = {}, l = 0, h = e.length; l < h; l++) u[(o = e[l])] = this.font.glyf.glyphFor(o)
        for (o in ((n = []), u)) (a = u[o]) != null && a.compound && n.push.apply(n, a.glyphIDs)
        if (n.length > 0) for (o in (f = this.glyphsFor(n))) (a = f[o]), (u[o] = a)
        return u
      }),
      (i.prototype.encode = function (e, n) {
        var a, u, o, l, h, f, g, A, N, _, p, B, F, q, S
        for (u in ((a = uc.encode(this.generateCmap(), 'unicode')),
        (l = this.glyphsFor(e)),
        (p = { 0: 0 }),
        (S = a.charMap)))
          p[(f = S[u]).old] = f.new
        for (B in ((_ = a.maxGlyphID), l)) B in p || (p[B] = _++)
        return (
          (A = (function (M) {
            var Z, st
            for (Z in ((st = {}), M)) st[M[Z]] = Z
            return st
          })(p)),
          (N = Object.keys(A).sort(function (M, Z) {
            return M - Z
          })),
          (F = (function () {
            var M, Z, st
            for (st = [], M = 0, Z = N.length; M < Z; M++) (h = N[M]), st.push(A[h])
            return st
          })()),
          (o = this.font.glyf.encode(l, F, p)),
          (g = this.font.loca.encode(o.offsets, F)),
          (q = {
            cmap: this.font.cmap.raw(),
            glyf: o.table,
            loca: g,
            hmtx: this.font.hmtx.raw(),
            hhea: this.font.hhea.raw(),
            maxp: this.font.maxp.raw(),
            post: this.font.post.raw(),
            name: this.font.name.raw(),
            head: this.font.head.encode(n)
          }),
          this.font.os2.exists && (q['OS/2'] = this.font.os2.raw()),
          this.font.directory.encode(q)
        )
      }),
      i
    )
  })()
zt.API.PDFObject = (function () {
  var i
  function e() {}
  return (
    (i = function (n, a) {
      return (Array(a + 1).join('0') + n).slice(-a)
    }),
    (e.convert = function (n) {
      var a, u, o, l
      if (Array.isArray(n))
        return (
          '[' +
          (function () {
            var h, f, g
            for (g = [], h = 0, f = n.length; h < f; h++) (a = n[h]), g.push(e.convert(a))
            return g
          })().join(' ') +
          ']'
        )
      if (typeof n == 'string') return '/' + n
      if (n != null && n.isString) return '(' + n + ')'
      if (n instanceof Date)
        return (
          '(D:' +
          i(n.getUTCFullYear(), 4) +
          i(n.getUTCMonth(), 2) +
          i(n.getUTCDate(), 2) +
          i(n.getUTCHours(), 2) +
          i(n.getUTCMinutes(), 2) +
          i(n.getUTCSeconds(), 2) +
          'Z)'
        )
      if ({}.toString.call(n) === '[object Object]') {
        for (u in ((o = ['<<']), n)) (l = n[u]), o.push('/' + u + ' ' + e.convert(l))
        return (
          o.push('>>'),
          o.join(`
`)
        )
      }
      return '' + n
    }),
    e
  )
})()
export { zt as E, Yo as _ }
