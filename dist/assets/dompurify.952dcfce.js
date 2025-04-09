/*! @license DOMPurify 2.4.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.0/LICENSE */ function C(
  r
) {
  return (
    (C =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (n) {
            return typeof n
          }
        : function (n) {
            return n &&
              typeof Symbol == 'function' &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? 'symbol'
              : typeof n
          }),
    C(r)
  )
}
function we(r, n) {
  return (
    (we =
      Object.setPrototypeOf ||
      function (s, f) {
        return (s.__proto__ = f), s
      }),
    we(r, n)
  )
}
function It() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1
  if (typeof Proxy == 'function') return !0
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
  } catch {
    return !1
  }
}
function ne(r, n, o) {
  return (
    It()
      ? (ne = Reflect.construct)
      : (ne = function (f, S, D) {
          var R = [null]
          R.push.apply(R, S)
          var B = Function.bind.apply(f, R),
            W = new B()
          return D && we(W, D.prototype), W
        }),
    ne.apply(null, arguments)
  )
}
function g(r) {
  return Ct(r) || xt(r) || kt(r) || Pt()
}
function Ct(r) {
  if (Array.isArray(r)) return Ie(r)
}
function xt(r) {
  if ((typeof Symbol < 'u' && r[Symbol.iterator] != null) || r['@@iterator'] != null)
    return Array.from(r)
}
function kt(r, n) {
  if (!!r) {
    if (typeof r == 'string') return Ie(r, n)
    var o = Object.prototype.toString.call(r).slice(8, -1)
    if ((o === 'Object' && r.constructor && (o = r.constructor.name), o === 'Map' || o === 'Set'))
      return Array.from(r)
    if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Ie(r, n)
  }
}
function Ie(r, n) {
  ;(n == null || n > r.length) && (n = r.length)
  for (var o = 0, s = new Array(n); o < n; o++) s[o] = r[o]
  return s
}
function Pt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var Ft = Object.hasOwnProperty,
  at = Object.setPrototypeOf,
  Ut = Object.isFrozen,
  Ht = Object.getPrototypeOf,
  zt = Object.getOwnPropertyDescriptor,
  A = Object.freeze,
  N = Object.seal,
  Gt = Object.create,
  ut = typeof Reflect < 'u' && Reflect,
  oe = ut.apply,
  Ce = ut.construct
oe ||
  (oe = function (n, o, s) {
    return n.apply(o, s)
  })
A ||
  (A = function (n) {
    return n
  })
N ||
  (N = function (n) {
    return n
  })
Ce ||
  (Ce = function (n, o) {
    return ne(n, g(o))
  })
var Bt = b(Array.prototype.forEach),
  nt = b(Array.prototype.pop),
  V = b(Array.prototype.push),
  ie = b(String.prototype.toLowerCase),
  Wt = b(String.prototype.match),
  I = b(String.prototype.replace),
  jt = b(String.prototype.indexOf),
  $t = b(String.prototype.trim),
  _ = b(RegExp.prototype.test),
  Oe = Yt(TypeError)
function b(r) {
  return function (n) {
    for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++)
      s[f - 1] = arguments[f]
    return oe(r, n, s)
  }
}
function Yt(r) {
  return function () {
    for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s]
    return Ce(r, o)
  }
}
function l(r, n, o) {
  ;(o = o || ie), at && at(r, null)
  for (var s = n.length; s--; ) {
    var f = n[s]
    if (typeof f == 'string') {
      var S = o(f)
      S !== f && (Ut(n) || (n[s] = S), (f = S))
    }
    r[f] = !0
  }
  return r
}
function k(r) {
  var n = Gt(null),
    o
  for (o in r) oe(Ft, r, [o]) && (n[o] = r[o])
  return n
}
function re(r, n) {
  for (; r !== null; ) {
    var o = zt(r, n)
    if (o) {
      if (o.get) return b(o.get)
      if (typeof o.value == 'function') return b(o.value)
    }
    r = Ht(r)
  }
  function s(f) {
    return console.warn('fallback value for', f), null
  }
  return s
}
var it = A([
    'a',
    'abbr',
    'acronym',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'bdi',
    'bdo',
    'big',
    'blink',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'center',
    'cite',
    'code',
    'col',
    'colgroup',
    'content',
    'data',
    'datalist',
    'dd',
    'decorator',
    'del',
    'details',
    'dfn',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'element',
    'em',
    'fieldset',
    'figcaption',
    'figure',
    'font',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meter',
    'nav',
    'nobr',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'section',
    'select',
    'shadow',
    'small',
    'source',
    'spacer',
    'span',
    'strike',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'track',
    'tt',
    'u',
    'ul',
    'var',
    'video',
    'wbr'
  ]),
  Ne = A([
    'svg',
    'a',
    'altglyph',
    'altglyphdef',
    'altglyphitem',
    'animatecolor',
    'animatemotion',
    'animatetransform',
    'circle',
    'clippath',
    'defs',
    'desc',
    'ellipse',
    'filter',
    'font',
    'g',
    'glyph',
    'glyphref',
    'hkern',
    'image',
    'line',
    'lineargradient',
    'marker',
    'mask',
    'metadata',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialgradient',
    'rect',
    'stop',
    'style',
    'switch',
    'symbol',
    'text',
    'textpath',
    'title',
    'tref',
    'tspan',
    'view',
    'vkern'
  ]),
  De = A([
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
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
    'feTurbulence'
  ]),
  Vt = A([
    'animate',
    'color-profile',
    'cursor',
    'discard',
    'fedropshadow',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-src',
    'font-face-uri',
    'foreignobject',
    'hatch',
    'hatchpath',
    'mesh',
    'meshgradient',
    'meshpatch',
    'meshrow',
    'missing-glyph',
    'script',
    'set',
    'solidcolor',
    'unknown',
    'use'
  ]),
  Me = A([
    'math',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mglyph',
    'mi',
    'mlabeledtr',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mspace',
    'msqrt',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover'
  ]),
  qt = A([
    'maction',
    'maligngroup',
    'malignmark',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'mstack',
    'msline',
    'msrow',
    'semantics',
    'annotation',
    'annotation-xml',
    'mprescripts',
    'none'
  ]),
  ot = A(['#text']),
  lt = A([
    'accept',
    'action',
    'align',
    'alt',
    'autocapitalize',
    'autocomplete',
    'autopictureinpicture',
    'autoplay',
    'background',
    'bgcolor',
    'border',
    'capture',
    'cellpadding',
    'cellspacing',
    'checked',
    'cite',
    'class',
    'clear',
    'color',
    'cols',
    'colspan',
    'controls',
    'controlslist',
    'coords',
    'crossorigin',
    'datetime',
    'decoding',
    'default',
    'dir',
    'disabled',
    'disablepictureinpicture',
    'disableremoteplayback',
    'download',
    'draggable',
    'enctype',
    'enterkeyhint',
    'face',
    'for',
    'headers',
    'height',
    'hidden',
    'high',
    'href',
    'hreflang',
    'id',
    'inputmode',
    'integrity',
    'ismap',
    'kind',
    'label',
    'lang',
    'list',
    'loading',
    'loop',
    'low',
    'max',
    'maxlength',
    'media',
    'method',
    'min',
    'minlength',
    'multiple',
    'muted',
    'name',
    'nonce',
    'noshade',
    'novalidate',
    'nowrap',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'playsinline',
    'poster',
    'preload',
    'pubdate',
    'radiogroup',
    'readonly',
    'rel',
    'required',
    'rev',
    'reversed',
    'role',
    'rows',
    'rowspan',
    'spellcheck',
    'scope',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'srclang',
    'start',
    'src',
    'srcset',
    'step',
    'style',
    'summary',
    'tabindex',
    'title',
    'translate',
    'type',
    'usemap',
    'valign',
    'value',
    'width',
    'xmlns',
    'slot'
  ]),
  Le = A([
    'accent-height',
    'accumulate',
    'additive',
    'alignment-baseline',
    'ascent',
    'attributename',
    'attributetype',
    'azimuth',
    'basefrequency',
    'baseline-shift',
    'begin',
    'bias',
    'by',
    'class',
    'clip',
    'clippathunits',
    'clip-path',
    'clip-rule',
    'color',
    'color-interpolation',
    'color-interpolation-filters',
    'color-profile',
    'color-rendering',
    'cx',
    'cy',
    'd',
    'dx',
    'dy',
    'diffuseconstant',
    'direction',
    'display',
    'divisor',
    'dur',
    'edgemode',
    'elevation',
    'end',
    'fill',
    'fill-opacity',
    'fill-rule',
    'filter',
    'filterunits',
    'flood-color',
    'flood-opacity',
    'font-family',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-variant',
    'font-weight',
    'fx',
    'fy',
    'g1',
    'g2',
    'glyph-name',
    'glyphref',
    'gradientunits',
    'gradienttransform',
    'height',
    'href',
    'id',
    'image-rendering',
    'in',
    'in2',
    'k',
    'k1',
    'k2',
    'k3',
    'k4',
    'kerning',
    'keypoints',
    'keysplines',
    'keytimes',
    'lang',
    'lengthadjust',
    'letter-spacing',
    'kernelmatrix',
    'kernelunitlength',
    'lighting-color',
    'local',
    'marker-end',
    'marker-mid',
    'marker-start',
    'markerheight',
    'markerunits',
    'markerwidth',
    'maskcontentunits',
    'maskunits',
    'max',
    'mask',
    'media',
    'method',
    'mode',
    'min',
    'name',
    'numoctaves',
    'offset',
    'operator',
    'opacity',
    'order',
    'orient',
    'orientation',
    'origin',
    'overflow',
    'paint-order',
    'path',
    'pathlength',
    'patterncontentunits',
    'patterntransform',
    'patternunits',
    'points',
    'preservealpha',
    'preserveaspectratio',
    'primitiveunits',
    'r',
    'rx',
    'ry',
    'radius',
    'refx',
    'refy',
    'repeatcount',
    'repeatdur',
    'restart',
    'result',
    'rotate',
    'scale',
    'seed',
    'shape-rendering',
    'specularconstant',
    'specularexponent',
    'spreadmethod',
    'startoffset',
    'stddeviation',
    'stitchtiles',
    'stop-color',
    'stop-opacity',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke',
    'stroke-width',
    'style',
    'surfacescale',
    'systemlanguage',
    'tabindex',
    'targetx',
    'targety',
    'transform',
    'transform-origin',
    'text-anchor',
    'text-decoration',
    'text-rendering',
    'textlength',
    'type',
    'u1',
    'u2',
    'unicode',
    'values',
    'viewbox',
    'visibility',
    'version',
    'vert-adv-y',
    'vert-origin-x',
    'vert-origin-y',
    'width',
    'word-spacing',
    'wrap',
    'writing-mode',
    'xchannelselector',
    'ychannelselector',
    'x',
    'x1',
    'x2',
    'xmlns',
    'y',
    'y1',
    'y2',
    'z',
    'zoomandpan'
  ]),
  st = A([
    'accent',
    'accentunder',
    'align',
    'bevelled',
    'close',
    'columnsalign',
    'columnlines',
    'columnspan',
    'denomalign',
    'depth',
    'dir',
    'display',
    'displaystyle',
    'encoding',
    'fence',
    'frame',
    'height',
    'href',
    'id',
    'largeop',
    'length',
    'linethickness',
    'lspace',
    'lquote',
    'mathbackground',
    'mathcolor',
    'mathsize',
    'mathvariant',
    'maxsize',
    'minsize',
    'movablelimits',
    'notation',
    'numalign',
    'open',
    'rowalign',
    'rowlines',
    'rowspacing',
    'rowspan',
    'rspace',
    'rquote',
    'scriptlevel',
    'scriptminsize',
    'scriptsizemultiplier',
    'selection',
    'separator',
    'separators',
    'stretchy',
    'subscriptshift',
    'supscriptshift',
    'symmetric',
    'voffset',
    'width',
    'xmlns'
  ]),
  ae = A(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']),
  Xt = N(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  Kt = N(/<%[\w\W]*|[\w\W]*%>/gm),
  Zt = N(/^data-[\-\w.\u00B7-\uFFFF]/),
  Jt = N(/^aria-[\-\w]+$/),
  Qt = N(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
  er = N(/^(?:\w+script|data):/i),
  tr = N(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  rr = N(/^html$/i),
  ar = function () {
    return typeof window > 'u' ? null : window
  },
  nr = function (n, o) {
    if (C(n) !== 'object' || typeof n.createPolicy != 'function') return null
    var s = null,
      f = 'data-tt-policy-suffix'
    o.currentScript && o.currentScript.hasAttribute(f) && (s = o.currentScript.getAttribute(f))
    var S = 'dompurify' + (s ? '#' + s : '')
    try {
      return n.createPolicy(S, {
        createHTML: function (R) {
          return R
        },
        createScriptURL: function (R) {
          return R
        }
      })
    } catch {
      return console.warn('TrustedTypes policy ' + S + ' could not be created.'), null
    }
  }
function ft() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ar(),
    n = function (e) {
      return ft(e)
    }
  if (((n.version = '2.4.0'), (n.removed = []), !r || !r.document || r.document.nodeType !== 9))
    return (n.isSupported = !1), n
  var o = r.document,
    s = r.document,
    f = r.DocumentFragment,
    S = r.HTMLTemplateElement,
    D = r.Node,
    R = r.Element,
    B = r.NodeFilter,
    W = r.NamedNodeMap,
    ct = W === void 0 ? r.NamedNodeMap || r.MozNamedAttrMap : W,
    mt = r.HTMLFormElement,
    pt = r.DOMParser,
    q = r.trustedTypes,
    X = R.prototype,
    dt = re(X, 'cloneNode'),
    vt = re(X, 'nextSibling'),
    ht = re(X, 'childNodes'),
    le = re(X, 'parentNode')
  if (typeof S == 'function') {
    var se = s.createElement('template')
    se.content && se.content.ownerDocument && (s = se.content.ownerDocument)
  }
  var y = nr(q, o),
    xe = y ? y.createHTML('') : '',
    K = s,
    ue = K.implementation,
    Tt = K.createNodeIterator,
    _t = K.createDocumentFragment,
    At = K.getElementsByTagName,
    Et = o.importNode,
    ke = {}
  try {
    ke = k(s).documentMode ? s.documentMode : {}
  } catch {}
  var O = {}
  n.isSupported = typeof le == 'function' && ue && typeof ue.createHTMLDocument < 'u' && ke !== 9
  var fe = Xt,
    ce = Kt,
    yt = Zt,
    gt = Jt,
    bt = er,
    Pe = tr,
    me = Qt,
    m = null,
    Fe = l({}, [].concat(g(it), g(Ne), g(De), g(Me), g(ot))),
    d = null,
    Ue = l({}, [].concat(g(lt), g(Le), g(st), g(ae))),
    c = Object.seal(
      Object.create(null, {
        tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
        attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1
        }
      })
    ),
    j = null,
    pe = null,
    He = !0,
    de = !0,
    ze = !1,
    P = !1,
    x = !1,
    ve = !1,
    he = !1,
    F = !1,
    Z = !1,
    J = !1,
    Ge = !0,
    Be = !1,
    St = 'user-content-',
    Te = !0,
    $ = !1,
    U = {},
    H = null,
    We = l({}, [
      'annotation-xml',
      'audio',
      'colgroup',
      'desc',
      'foreignobject',
      'head',
      'iframe',
      'math',
      'mi',
      'mn',
      'mo',
      'ms',
      'mtext',
      'noembed',
      'noframes',
      'noscript',
      'plaintext',
      'script',
      'style',
      'svg',
      'template',
      'thead',
      'title',
      'video',
      'xmp'
    ]),
    je = null,
    $e = l({}, ['audio', 'video', 'img', 'source', 'image', 'track']),
    _e = null,
    Ye = l({}, [
      'alt',
      'class',
      'for',
      'id',
      'label',
      'name',
      'pattern',
      'placeholder',
      'role',
      'summary',
      'title',
      'value',
      'style',
      'xmlns'
    ]),
    Ae = 'http://www.w3.org/1998/Math/MathML',
    Ee = 'http://www.w3.org/2000/svg',
    w = 'http://www.w3.org/1999/xhtml',
    Q = w,
    ye = !1,
    z,
    Rt = ['application/xhtml+xml', 'text/html'],
    Ot = 'text/html',
    p,
    G = null,
    Nt = s.createElement('form'),
    Ve = function (e) {
      return e instanceof RegExp || e instanceof Function
    },
    ge = function (e) {
      ;(G && G === e) ||
        ((!e || C(e) !== 'object') && (e = {}),
        (e = k(e)),
        (z = Rt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? (z = Ot) : (z = e.PARSER_MEDIA_TYPE)),
        (p =
          z === 'application/xhtml+xml'
            ? function (t) {
                return t
              }
            : ie),
        (m = 'ALLOWED_TAGS' in e ? l({}, e.ALLOWED_TAGS, p) : Fe),
        (d = 'ALLOWED_ATTR' in e ? l({}, e.ALLOWED_ATTR, p) : Ue),
        (_e = 'ADD_URI_SAFE_ATTR' in e ? l(k(Ye), e.ADD_URI_SAFE_ATTR, p) : Ye),
        (je = 'ADD_DATA_URI_TAGS' in e ? l(k($e), e.ADD_DATA_URI_TAGS, p) : $e),
        (H = 'FORBID_CONTENTS' in e ? l({}, e.FORBID_CONTENTS, p) : We),
        (j = 'FORBID_TAGS' in e ? l({}, e.FORBID_TAGS, p) : {}),
        (pe = 'FORBID_ATTR' in e ? l({}, e.FORBID_ATTR, p) : {}),
        (U = 'USE_PROFILES' in e ? e.USE_PROFILES : !1),
        (He = e.ALLOW_ARIA_ATTR !== !1),
        (de = e.ALLOW_DATA_ATTR !== !1),
        (ze = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
        (P = e.SAFE_FOR_TEMPLATES || !1),
        (x = e.WHOLE_DOCUMENT || !1),
        (F = e.RETURN_DOM || !1),
        (Z = e.RETURN_DOM_FRAGMENT || !1),
        (J = e.RETURN_TRUSTED_TYPE || !1),
        (he = e.FORCE_BODY || !1),
        (Ge = e.SANITIZE_DOM !== !1),
        (Be = e.SANITIZE_NAMED_PROPS || !1),
        (Te = e.KEEP_CONTENT !== !1),
        ($ = e.IN_PLACE || !1),
        (me = e.ALLOWED_URI_REGEXP || me),
        (Q = e.NAMESPACE || w),
        e.CUSTOM_ELEMENT_HANDLING &&
          Ve(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
          (c.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
        e.CUSTOM_ELEMENT_HANDLING &&
          Ve(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
          (c.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
        e.CUSTOM_ELEMENT_HANDLING &&
          typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == 'boolean' &&
          (c.allowCustomizedBuiltInElements =
            e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
        P && (de = !1),
        Z && (F = !0),
        U &&
          ((m = l({}, g(ot))),
          (d = []),
          U.html === !0 && (l(m, it), l(d, lt)),
          U.svg === !0 && (l(m, Ne), l(d, Le), l(d, ae)),
          U.svgFilters === !0 && (l(m, De), l(d, Le), l(d, ae)),
          U.mathMl === !0 && (l(m, Me), l(d, st), l(d, ae))),
        e.ADD_TAGS && (m === Fe && (m = k(m)), l(m, e.ADD_TAGS, p)),
        e.ADD_ATTR && (d === Ue && (d = k(d)), l(d, e.ADD_ATTR, p)),
        e.ADD_URI_SAFE_ATTR && l(_e, e.ADD_URI_SAFE_ATTR, p),
        e.FORBID_CONTENTS && (H === We && (H = k(H)), l(H, e.FORBID_CONTENTS, p)),
        Te && (m['#text'] = !0),
        x && l(m, ['html', 'head', 'body']),
        m.table && (l(m, ['tbody']), delete j.tbody),
        A && A(e),
        (G = e))
    },
    qe = l({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
    Xe = l({}, ['foreignobject', 'desc', 'title', 'annotation-xml']),
    Dt = l({}, ['title', 'style', 'font', 'a', 'script']),
    ee = l({}, Ne)
  l(ee, De), l(ee, Vt)
  var be = l({}, Me)
  l(be, qt)
  var Mt = function (e) {
      var t = le(e)
      ;(!t || !t.tagName) && (t = { namespaceURI: w, tagName: 'template' })
      var a = ie(e.tagName),
        u = ie(t.tagName)
      return e.namespaceURI === Ee
        ? t.namespaceURI === w
          ? a === 'svg'
          : t.namespaceURI === Ae
          ? a === 'svg' && (u === 'annotation-xml' || qe[u])
          : Boolean(ee[a])
        : e.namespaceURI === Ae
        ? t.namespaceURI === w
          ? a === 'math'
          : t.namespaceURI === Ee
          ? a === 'math' && Xe[u]
          : Boolean(be[a])
        : e.namespaceURI === w
        ? (t.namespaceURI === Ee && !Xe[u]) || (t.namespaceURI === Ae && !qe[u])
          ? !1
          : !be[a] && (Dt[a] || !ee[a])
        : !1
    },
    M = function (e) {
      V(n.removed, { element: e })
      try {
        e.parentNode.removeChild(e)
      } catch {
        try {
          e.outerHTML = xe
        } catch {
          e.remove()
        }
      }
    },
    Se = function (e, t) {
      try {
        V(n.removed, { attribute: t.getAttributeNode(e), from: t })
      } catch {
        V(n.removed, { attribute: null, from: t })
      }
      if ((t.removeAttribute(e), e === 'is' && !d[e]))
        if (F || Z)
          try {
            M(t)
          } catch {}
        else
          try {
            t.setAttribute(e, '')
          } catch {}
    },
    Ke = function (e) {
      var t, a
      if (he) e = '<remove></remove>' + e
      else {
        var u = Wt(e, /^[\r\n\t ]+/)
        a = u && u[0]
      }
      z === 'application/xhtml+xml' &&
        (e =
          '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + '</body></html>')
      var E = y ? y.createHTML(e) : e
      if (Q === w)
        try {
          t = new pt().parseFromString(E, z)
        } catch {}
      if (!t || !t.documentElement) {
        t = ue.createDocument(Q, 'template', null)
        try {
          t.documentElement.innerHTML = ye ? '' : E
        } catch {}
      }
      var h = t.body || t.documentElement
      return (
        e && a && h.insertBefore(s.createTextNode(a), h.childNodes[0] || null),
        Q === w ? At.call(t, x ? 'html' : 'body')[0] : x ? t.documentElement : h
      )
    },
    Ze = function (e) {
      return Tt.call(
        e.ownerDocument || e,
        e,
        B.SHOW_ELEMENT | B.SHOW_COMMENT | B.SHOW_TEXT,
        null,
        !1
      )
    },
    Lt = function (e) {
      return (
        e instanceof mt &&
        (typeof e.nodeName != 'string' ||
          typeof e.textContent != 'string' ||
          typeof e.removeChild != 'function' ||
          !(e.attributes instanceof ct) ||
          typeof e.removeAttribute != 'function' ||
          typeof e.setAttribute != 'function' ||
          typeof e.namespaceURI != 'string' ||
          typeof e.insertBefore != 'function')
      )
    },
    Y = function (e) {
      return C(D) === 'object'
        ? e instanceof D
        : e && C(e) === 'object' && typeof e.nodeType == 'number' && typeof e.nodeName == 'string'
    },
    L = function (e, t, a) {
      !O[e] ||
        Bt(O[e], function (u) {
          u.call(n, t, a, G)
        })
    },
    Je = function (e) {
      var t
      if ((L('beforeSanitizeElements', e, null), Lt(e) || _(/[\u0080-\uFFFF]/, e.nodeName)))
        return M(e), !0
      var a = p(e.nodeName)
      if (
        (L('uponSanitizeElement', e, { tagName: a, allowedTags: m }),
        (e.hasChildNodes() &&
          !Y(e.firstElementChild) &&
          (!Y(e.content) || !Y(e.content.firstElementChild)) &&
          _(/<[/\w]/g, e.innerHTML) &&
          _(/<[/\w]/g, e.textContent)) ||
          (a === 'select' && _(/<template/i, e.innerHTML)))
      )
        return M(e), !0
      if (!m[a] || j[a]) {
        if (
          !j[a] &&
          et(a) &&
          ((c.tagNameCheck instanceof RegExp && _(c.tagNameCheck, a)) ||
            (c.tagNameCheck instanceof Function && c.tagNameCheck(a)))
        )
          return !1
        if (Te && !H[a]) {
          var u = le(e) || e.parentNode,
            E = ht(e) || e.childNodes
          if (E && u)
            for (var h = E.length, v = h - 1; v >= 0; --v) u.insertBefore(dt(E[v], !0), vt(e))
        }
        return M(e), !0
      }
      return (e instanceof R && !Mt(e)) ||
        ((a === 'noscript' || a === 'noembed') && _(/<\/no(script|embed)/i, e.innerHTML))
        ? (M(e), !0)
        : (P &&
            e.nodeType === 3 &&
            ((t = e.textContent),
            (t = I(t, fe, ' ')),
            (t = I(t, ce, ' ')),
            e.textContent !== t && (V(n.removed, { element: e.cloneNode() }), (e.textContent = t))),
          L('afterSanitizeElements', e, null),
          !1)
    },
    Qe = function (e, t, a) {
      if (Ge && (t === 'id' || t === 'name') && (a in s || a in Nt)) return !1
      if (!(de && !pe[t] && _(yt, t))) {
        if (!(He && _(gt, t))) {
          if (!d[t] || pe[t]) {
            if (
              !(
                (et(e) &&
                  ((c.tagNameCheck instanceof RegExp && _(c.tagNameCheck, e)) ||
                    (c.tagNameCheck instanceof Function && c.tagNameCheck(e))) &&
                  ((c.attributeNameCheck instanceof RegExp && _(c.attributeNameCheck, t)) ||
                    (c.attributeNameCheck instanceof Function && c.attributeNameCheck(t)))) ||
                (t === 'is' &&
                  c.allowCustomizedBuiltInElements &&
                  ((c.tagNameCheck instanceof RegExp && _(c.tagNameCheck, a)) ||
                    (c.tagNameCheck instanceof Function && c.tagNameCheck(a))))
              )
            )
              return !1
          } else if (!_e[t]) {
            if (!_(me, I(a, Pe, ''))) {
              if (
                !(
                  (t === 'src' || t === 'xlink:href' || t === 'href') &&
                  e !== 'script' &&
                  jt(a, 'data:') === 0 &&
                  je[e]
                )
              ) {
                if (!(ze && !_(bt, I(a, Pe, '')))) {
                  if (a) return !1
                }
              }
            }
          }
        }
      }
      return !0
    },
    et = function (e) {
      return e.indexOf('-') > 0
    },
    tt = function (e) {
      var t, a, u, E
      L('beforeSanitizeAttributes', e, null)
      var h = e.attributes
      if (!!h) {
        var v = { attrName: '', attrValue: '', keepAttr: !0, allowedAttributes: d }
        for (E = h.length; E--; ) {
          t = h[E]
          var te = t,
            T = te.name,
            Re = te.namespaceURI
          if (
            ((a = T === 'value' ? t.value : $t(t.value)),
            (u = p(T)),
            (v.attrName = u),
            (v.attrValue = a),
            (v.keepAttr = !0),
            (v.forceKeepAttr = void 0),
            L('uponSanitizeAttribute', e, v),
            (a = v.attrValue),
            !v.forceKeepAttr && (Se(T, e), !!v.keepAttr))
          ) {
            if (_(/\/>/i, a)) {
              Se(T, e)
              continue
            }
            P && ((a = I(a, fe, ' ')), (a = I(a, ce, ' ')))
            var rt = p(e.nodeName)
            if (!!Qe(rt, u, a)) {
              if (
                (Be && (u === 'id' || u === 'name') && (Se(T, e), (a = St + a)),
                y && C(q) === 'object' && typeof q.getAttributeType == 'function' && !Re)
              )
                switch (q.getAttributeType(rt, u)) {
                  case 'TrustedHTML':
                    a = y.createHTML(a)
                    break
                  case 'TrustedScriptURL':
                    a = y.createScriptURL(a)
                    break
                }
              try {
                Re ? e.setAttributeNS(Re, T, a) : e.setAttribute(T, a), nt(n.removed)
              } catch {}
            }
          }
        }
        L('afterSanitizeAttributes', e, null)
      }
    },
    wt = function i(e) {
      var t,
        a = Ze(e)
      for (L('beforeSanitizeShadowDOM', e, null); (t = a.nextNode()); )
        L('uponSanitizeShadowNode', t, null),
          !Je(t) && (t.content instanceof f && i(t.content), tt(t))
      L('afterSanitizeShadowDOM', e, null)
    }
  return (
    (n.sanitize = function (i) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        t,
        a,
        u,
        E,
        h
      if (((ye = !i), ye && (i = '<!-->'), typeof i != 'string' && !Y(i))) {
        if (typeof i.toString != 'function') throw Oe('toString is not a function')
        if (((i = i.toString()), typeof i != 'string')) throw Oe('dirty is not a string, aborting')
      }
      if (!n.isSupported) {
        if (C(r.toStaticHTML) === 'object' || typeof r.toStaticHTML == 'function') {
          if (typeof i == 'string') return r.toStaticHTML(i)
          if (Y(i)) return r.toStaticHTML(i.outerHTML)
        }
        return i
      }
      if ((ve || ge(e), (n.removed = []), typeof i == 'string' && ($ = !1), $)) {
        if (i.nodeName) {
          var v = p(i.nodeName)
          if (!m[v] || j[v]) throw Oe('root node is forbidden and cannot be sanitized in-place')
        }
      } else if (i instanceof D)
        (t = Ke('<!---->')),
          (a = t.ownerDocument.importNode(i, !0)),
          (a.nodeType === 1 && a.nodeName === 'BODY') || a.nodeName === 'HTML'
            ? (t = a)
            : t.appendChild(a)
      else {
        if (!F && !P && !x && i.indexOf('<') === -1) return y && J ? y.createHTML(i) : i
        if (((t = Ke(i)), !t)) return F ? null : J ? xe : ''
      }
      t && he && M(t.firstChild)
      for (var te = Ze($ ? i : t); (u = te.nextNode()); )
        (u.nodeType === 3 && u === E) ||
          Je(u) ||
          (u.content instanceof f && wt(u.content), tt(u), (E = u))
      if (((E = null), $)) return i
      if (F) {
        if (Z) for (h = _t.call(t.ownerDocument); t.firstChild; ) h.appendChild(t.firstChild)
        else h = t
        return d.shadowroot && (h = Et.call(o, h, !0)), h
      }
      var T = x ? t.outerHTML : t.innerHTML
      return (
        x &&
          m['!doctype'] &&
          t.ownerDocument &&
          t.ownerDocument.doctype &&
          t.ownerDocument.doctype.name &&
          _(rr, t.ownerDocument.doctype.name) &&
          (T =
            '<!DOCTYPE ' +
            t.ownerDocument.doctype.name +
            `>
` +
            T),
        P && ((T = I(T, fe, ' ')), (T = I(T, ce, ' '))),
        y && J ? y.createHTML(T) : T
      )
    }),
    (n.setConfig = function (i) {
      ge(i), (ve = !0)
    }),
    (n.clearConfig = function () {
      ;(G = null), (ve = !1)
    }),
    (n.isValidAttribute = function (i, e, t) {
      G || ge({})
      var a = p(i),
        u = p(e)
      return Qe(a, u, t)
    }),
    (n.addHook = function (i, e) {
      typeof e == 'function' && ((O[i] = O[i] || []), V(O[i], e))
    }),
    (n.removeHook = function (i) {
      if (O[i]) return nt(O[i])
    }),
    (n.removeHooks = function (i) {
      O[i] && (O[i] = [])
    }),
    (n.removeAllHooks = function () {
      O = {}
    }),
    n
  )
}
var or = ft()
export { or as default }
