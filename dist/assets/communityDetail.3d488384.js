import { k as j, l as ie, q as ue } from './element-plus.2a6d07e1.js'
import { i as G, a as le, n as q, U as K, H as ae, B as re } from './browseHistory.8ce28049.js'
import {
  r as b,
  a1 as W,
  D as N,
  a6 as ce,
  o as a,
  c as p,
  a as i,
  J as me,
  aj as de,
  u as t,
  V as pe,
  A as fe,
  M as w,
  a3 as D,
  L as g,
  P as F,
  S as C,
  at as z,
  au as U,
  w as V,
  n as ve,
  U as k,
  a4 as P,
  q as T,
  X as J,
  v as he,
  ar as Y,
  O as ye,
  Q as X
} from './@vue.459e27cf.js'
import { P as _e } from './vue3-emoji-picker.de060966.js'
import {
  b as x,
  u as R,
  e as A,
  I as ge,
  w as L,
  s as Z,
  f as Ie,
  E as Ce,
  i as ke
} from './index.2356ee1f.js'
import { e as ee } from './@vueuse.b3f314cf.js'
import { _ as M, V as $e } from './vue-markdown-menu-bar.54882429.js'
import { s as te, c as oe } from './index.93fcd833.js'
import { b as be } from './vue-router.bfd1ba04.js'
import { b as Ee, l as Fe } from './community.a40af039.js'
/* empty css                  */ import './@element-plus.52ff3d2f.js'
import './dayjs.6d6bf3b5.js'
import './aos.e37f4dc9.js'
import './lodash-es.2fa8789e.js'
import './@ctrl.82a509e0.js'
import './async-validator.fb49d0f5.js'
import './jspdf.93f2685e.js'
import './@babel.2898e469.js'
import './fflate.fca59393.js'
import './pinia.6bd7cd5d.js'
import './vue-demi.b3a9cad9.js'
import './picture-verification-code.e81ffd11.js'
import './axios.754b77ca.js'
import './form-data.2b153385.js'
import './nprogress.8e3ae131.js'
import './html2canvas.4d0ab5af.js'
import './config.965d0d02.js'
function Ae(e) {
  return x('/communityComment/publish', e)
}
function Be(e) {
  return x('/communityComment/reply', e)
}
function Te(e) {
  return x('/communityComment/remove', e)
}
function we(e) {
  return x('/communityComment/queryCommentsByArticleId', e)
}
function De(e) {
  return x('/communityComment/queryCommentPosition', e)
}
function Ne(e) {
  const n = b(!1)
  function s() {
    n.value = !n.value
  }
  function l(m) {
    s(), (e.value += m.i)
  }
  return { picker: n, togglePicker: s, setEmoji: l }
}
function xe(e, n, s, l, m, u, r, y, v) {
  const d = b(''),
    { loginState: h, loginModelToggle: I, userInfo: c } = R()
  async function o() {
    if (!h.logined) {
      I()
      return
    }
    if (!d.value.trim()) {
      L('\u4F60\u53D1\u4E2A\u7A7A\u5185\u5BB9\u662F\u60F3\u5E72\u561B\u5462\uFF1F\uFF1F\uFF1F')
      return
    }
    if (d.value.length > 200) {
      L('\u592A\u591A\u4E86\u5B58\u4E0D\u4E0B, \u5220\u5230200\u5B57\u4EE5\u5185\u5427')
      return
    }
    const _ = n.value == 1 ? Ae : Be,
      f = {
        content: d.value.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
        authorId: c.uid,
        images: v.value.join('~$^$~'),
        level: n.value,
        articleId: e.value,
        posterCommentId: s.value,
        replyAuthorId: l.value,
        replyArticleAuthorId: m.value,
        replyCommentId: u.value,
        replyCommentLevel: r.value
      },
      E = await _(f)
    E.code == 200 && ((d.value = ''), (v.value.length = 0), y('reQueryComments')),
      E.code == 200 ? Z(E.msg) : A(E.msg)
  }
  return (
    W(() => {
      ;(d.value = ''), (v.value.length = 0)
    }),
    { shareMainContent: d, publish: ee(o, 1e3) }
  )
}
function Me() {
  const e = b([])
  async function n() {
    if (e.value.length >= 2)
      return A('\u6700\u591A\u53EA\u80FD\u4E0A\u4F202\u5F20\u56FE\u7247\uFF01')
    const l = document.createElement('input')
    l.setAttribute('type', 'file'),
      l.setAttribute('accept', '.png,.jpg,.gif,.jpeg,.webp'),
      l.click(),
      (l.onchange = async function () {
        const m = Array.from(l.files)
        for (let u of m) {
          const r = await ge(u)
          e.value.push(r)
        }
        l.remove()
      })
  }
  function s(l) {
    e.value.splice(l, 1)
  }
  return { images: e, pickerImage: n, deleteImage: s }
}
const ne = e => (z('data-v-e43be507'), (e = e()), U(), e),
  Se = { class: 'community-publish content-card' },
  Qe = { class: 'community-content-edit' },
  Pe = { key: 0, class: 'covers-container community-comment-cover' },
  Re = { class: 'mr-10 cover-item-container' },
  qe = ['onClick'],
  Le = { class: 'community-operator-group flex community-content-edit-publish' },
  je = { class: 'community-edit-picker' },
  ze = ne(() => i('i', { class: 'iconfont icon-emoji font-25 mr-10' }, null, -1)),
  Ue = [ze],
  Ve = ne(() => i('i', { class: 'iconfont icon-image font-25' }, null, -1)),
  He = [Ve],
  Oe = N({
    __name: 'publish',
    props: {
      articleId: null,
      level: null,
      replyCommentLevel: { default: 1 },
      posterCommentId: { default: 0 },
      replyCommentId: { default: 0 },
      replyAuthorId: { default: 0 },
      replyArticleAuthorId: { default: 0 },
      background: { default: '#f8f8f8' }
    },
    emits: ['reQueryComments'],
    setup(e, { emit: n }) {
      const s = e,
        { pickerImage: l, images: m, deleteImage: u } = Me(),
        r = ce(s),
        { shareMainContent: y, publish: v } = xe(
          r.articleId,
          r.level,
          r.posterCommentId,
          r.replyAuthorId,
          r.replyArticleAuthorId,
          r.replyCommentId,
          r.replyCommentLevel,
          n,
          m
        ),
        { picker: d, setEmoji: h, togglePicker: I } = Ne(y)
      return (c, o) => {
        const _ = j
        return (
          a(),
          p('div', Se, [
            i('div', Qe, [
              me(
                i(
                  'textarea',
                  {
                    style: pe({ background: e.background }),
                    class: 'content-edit main-content',
                    'onUpdate:modelValue': o[0] || (o[0] = f => (fe(y) ? (y.value = f) : null)),
                    placeholder: '\u5185\u5BB9\u63A7\u5236\u5728200\u5B57\u4EE5\u5185\uFF5E'
                  },
                  null,
                  4
                ),
                [[de, t(y)]]
              )
            ]),
            t(m).length
              ? (a(),
                p('div', Pe, [
                  (a(!0),
                  p(
                    w,
                    null,
                    D(
                      t(m),
                      (f, E) => (
                        a(),
                        p('div', Re, [
                          C(
                            _,
                            {
                              loading: 'lazy',
                              src: f,
                              fit: 'cover',
                              class: 'cover-item',
                              'initial-index': E,
                              'preview-src-list': t(m),
                              'preview-teleported': !0,
                              'hide-on-click-modal': !0
                            },
                            null,
                            8,
                            ['src', 'initial-index', 'preview-src-list']
                          ),
                          i(
                            'i',
                            {
                              onClick: Q => t(u)(E),
                              class: 'iconfont icon-delete pointer hover cover-item-close'
                            },
                            null,
                            8,
                            qe
                          )
                        ])
                      )
                    ),
                    256
                  ))
                ]))
              : g('', !0),
            i('div', Le, [
              i('div', je, [
                i(
                  'span',
                  {
                    class: 'emoji pointer hover',
                    onClick: o[1] || (o[1] = (...f) => t(I) && t(I)(...f))
                  },
                  Ue
                ),
                i(
                  'span',
                  {
                    class: 'emoji pointer hover',
                    onClick: o[2] || (o[2] = (...f) => t(l) && t(l)(...f))
                  },
                  He
                ),
                t(d)
                  ? (a(),
                    F(
                      t(_e),
                      {
                        key: 0,
                        class: 'picker',
                        native: !0,
                        'hide-search': !0,
                        'hide-group-names': !0,
                        onSelect: t(h),
                        'static-texts': { skinTone: '\u6362\u80A4' }
                      },
                      null,
                      8,
                      ['onSelect']
                    ))
                  : g('', !0)
              ]),
              i(
                'button',
                { class: 'btn primary', onClick: o[3] || (o[3] = (...f) => t(v) && t(v)(...f)) },
                '\u53D1\u8868'
              )
            ])
          ])
        )
      }
    }
  })
const H = M(Oe, [['__scopeId', 'data-v-e43be507']])
function se(e) {
  const { userInfo: n } = R(),
    s = b(-1)
  let l = -1
  function m(r) {
    if (l === r) {
      ;(s.value = -1), (l = -1)
      return
    }
    ;(l = r), (s.value = r)
  }
  async function u(r, y, v) {
    if (!G()) {
      A('\u8BF7\u5148\u767B\u5F55\uFF01'), window.location.reload()
      return
    }
    const d = await Te({ commentId: r, articleId: y, level: v })
    if (d.code == 200) {
      Z(d.msg), e('reQueryComments')
      return
    }
    A(d.msg)
  }
  return { userInfo: n, reply: m, remove: u, currenId: s }
}
function Je(e) {
  const n = b(e > 1)
  function s() {
    n.value = !1
  }
  return { more: n, setMore: s }
}
function Xe(e) {
  const n = b()
  return (
    V(
      () => e.value,
      () => {
        try {
          ve(() => {
            const s = n.value.children[e.value]
            te(oe(s) - 65),
              s.classList.add('notice'),
              setTimeout(() => {
                s.classList.remove('notice')
              }, 1e3)
          })
        } catch (s) {
          console.log(s),
            A(
              '\u51FA\u4E86\u70B9\u9519\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u65B0\u5C1D\u8BD5\uFF5E'
            )
        }
      }
    ),
    { comments: n }
  )
}
const Ge = e => (z('data-v-e540ab29'), (e = e()), U(), e),
  Ke = { class: 'user-head' },
  We = ['src'],
  Ye = { class: 'user-info' },
  Ze = { class: 'user-name' },
  et = { class: 'date-school' },
  tt = { key: 0, class: 'datetime mr-20' },
  ot = { class: 'school' },
  nt = Ge(() => i('i', { class: 'iconfont icon-school' }, null, -1)),
  st = N({
    __name: 'UserInfo',
    props: { userInfo: null, publishTime: null },
    setup(e) {
      return (n, s) => {
        var l, m, u, r
        return (
          a(),
          p('div', Ke, [
            i(
              'img',
              { class: 'pointer mr-10', src: (l = e.userInfo) == null ? void 0 : l.avatar },
              null,
              8,
              We
            ),
            C(le, { class: 'user-tooltip', userInfo: e.userInfo }, null, 8, ['userInfo']),
            i('div', Ye, [
              i('span', Ze, k((m = e.userInfo) == null ? void 0 : m.nickName), 1),
              i('div', et, [
                e.publishTime
                  ? (a(), p('span', tt, k(t(Ie)(e.publishTime)) + '\u53D1\u5E03', 1))
                  : g('', !0),
                i('span', ot, [
                  nt,
                  P(
                    ' ' +
                      k((u = e.userInfo) == null ? void 0 : u.school) +
                      ' - ' +
                      k((r = e.userInfo) == null ? void 0 : r.graduation) +
                      '\u5C4A ',
                    1
                  )
                ])
              ])
            ])
          ])
        )
      }
    }
  })
const it = M(st, [['__scopeId', 'data-v-e540ab29']]),
  ut = { class: 'comments-list mt-20 content-card' },
  lt = { class: 'comment-item' },
  at = { class: 'comment-content line-4' },
  rt = { class: 'reply-text pointer' },
  ct = { key: 0, class: 'covers-container' },
  mt = { class: 'list-style-init flex operator' },
  dt = ['onClick'],
  pt = ['onClick'],
  ft = N({
    __name: 'reply',
    props: { data: null, commentId: null, articleId: null },
    emits: ['reQueryComments'],
    setup(e, { emit: n }) {
      const s = e,
        { currenId: l, reply: m, userInfo: u, remove: r } = se(n),
        { more: y, setMore: v } = Je(s.data.length)
      return (d, h) => {
        const I = j
        return (
          a(),
          p('div', ut, [
            (a(!0),
            p(
              w,
              null,
              D(
                t(y) ? e.data.slice(0, 1) : e.data,
                c => (
                  a(),
                  p('div', lt, [
                    C(it, { 'user-info': c.authorInfo, 'publish-time': c.createTime }, null, 8, [
                      'user-info',
                      'publish-time'
                    ]),
                    i('p', at, [
                      i('span', rt, '@' + k(c.replyNickName) + '\uFF1A', 1),
                      P(' ' + k(c.content), 1)
                    ]),
                    c.images
                      ? (a(),
                        p('div', ct, [
                          (a(!0),
                          p(
                            w,
                            null,
                            D(
                              c.images.split('~$^$~'),
                              (o, _) => (
                                a(),
                                F(
                                  I,
                                  {
                                    src: o,
                                    'preview-src-list': c.images.split('~$^$~'),
                                    'initial-index': _,
                                    fit: 'cover',
                                    loading: 'lazy',
                                    lazy: !0,
                                    class: 'mr-10 cover-item',
                                    'preview-teleported': !0,
                                    'hide-on-click-modal': !0
                                  },
                                  null,
                                  8,
                                  ['src', 'preview-src-list', 'initial-index']
                                )
                              )
                            ),
                            256
                          ))
                        ]))
                      : g('', !0),
                    i('ul', mt, [
                      i(
                        'li',
                        { class: 'mr-10', onClick: o => t(m)(c.commentId) },
                        '\u56DE\u590D',
                        8,
                        dt
                      ),
                      t(u).uid === c.authorId
                        ? (a(),
                          p(
                            'li',
                            { key: 0, onClick: o => t(r)(c.commentId, e.articleId, 2) },
                            '\u5220\u9664',
                            8,
                            pt
                          ))
                        : g('', !0)
                    ]),
                    t(l) === c.commentId
                      ? (a(),
                        F(
                          H,
                          {
                            key: 1,
                            'article-id': e.articleId,
                            level: 2,
                            'reply-comment-level': c.level,
                            'poster-comment-id': e.commentId,
                            'reply-comment-id': c.commentId,
                            'reply-author-id': c.authorId,
                            background: 'white',
                            onReQueryComments: h[0] || (h[0] = o => d.$emit('reQueryComments'))
                          },
                          null,
                          8,
                          [
                            'article-id',
                            'reply-comment-level',
                            'poster-comment-id',
                            'reply-comment-id',
                            'reply-author-id'
                          ]
                        ))
                      : g('', !0)
                  ])
                )
              ),
              256
            )),
            t(y)
              ? (a(),
                p(
                  'span',
                  {
                    key: 0,
                    onClick: h[1] || (h[1] = (...c) => t(v) && t(v)(...c)),
                    class: 'pointer showMore'
                  },
                  '\u663E\u793A\u5168\u90E8...'
                ))
              : g('', !0)
          ])
        )
      }
    }
  })
const vt = M(ft, [['__scopeId', 'data-v-2fd1d303']]),
  ht = { class: 'comments-container content-card' },
  yt = { class: 'tip' },
  _t = { class: 'comment-item' },
  gt = { class: 'comment-content line-4' },
  It = { key: 0, class: 'covers-container' },
  Ct = { class: 'list-style-init flex operator' },
  kt = ['onClick'],
  $t = ['onClick'],
  bt = N({
    __name: 'comments',
    props: {
      data: null,
      articleId: null,
      pageNum: null,
      scrollTo: null,
      total: null,
      articleAuthorId: null,
      commentsTotal: null
    },
    emits: ['pageNumChange', 'reQueryComments'],
    setup(e, { emit: n }) {
      const s = e,
        l = T(() => s.scrollTo),
        { currenId: m, reply: u, userInfo: r, remove: y } = se(n),
        { comments: v } = Xe(l)
      return (d, h) => {
        const I = j,
          c = ie
        return (
          a(),
          p('div', ht, [
            i(
              'span',
              yt,
              '\u672C\u9875\u8BC4\u8BBA/\u56DE\u590D\u5171 ' + k(t(q)(e.total)) + ' \u6761',
              1
            ),
            e.data.length
              ? (a(),
                p(
                  'div',
                  {
                    key: 0,
                    class: 'comments-list mt-20 content-card',
                    ref_key: 'comments',
                    ref: v
                  },
                  [
                    (a(!0),
                    p(
                      w,
                      null,
                      D(
                        e.data,
                        o => (
                          a(),
                          p('div', _t, [
                            C(
                              K,
                              { 'user-info': o.authorInfo, 'publish-time': o.createTime },
                              null,
                              8,
                              ['user-info', 'publish-time']
                            ),
                            i('p', gt, k(o.content), 1),
                            o.images
                              ? (a(),
                                p('div', It, [
                                  (a(!0),
                                  p(
                                    w,
                                    null,
                                    D(
                                      o.images.split('~$^$~'),
                                      (_, f) => (
                                        a(),
                                        F(
                                          I,
                                          {
                                            src: _,
                                            'preview-src-list': o.images.split('~$^$~'),
                                            'initial-index': f,
                                            fit: 'cover',
                                            lazy: !0,
                                            loading: 'lazy',
                                            class: 'mr-10 cover-item',
                                            'preview-teleported': !0,
                                            'hide-on-click-modal': !0
                                          },
                                          null,
                                          8,
                                          ['src', 'preview-src-list', 'initial-index']
                                        )
                                      )
                                    ),
                                    256
                                  ))
                                ]))
                              : g('', !0),
                            i('ul', Ct, [
                              i(
                                'li',
                                { class: 'mr-10', onClick: _ => t(u)(o.commentId) },
                                '\u56DE\u590D',
                                8,
                                kt
                              ),
                              t(r).uid === o.authorId
                                ? (a(),
                                  p(
                                    'li',
                                    { key: 0, onClick: _ => t(y)(o.commentId, e.articleId, 1) },
                                    '\u5220\u9664',
                                    8,
                                    $t
                                  ))
                                : g('', !0)
                            ]),
                            t(m) === o.commentId
                              ? (a(),
                                F(
                                  H,
                                  {
                                    key: 1,
                                    'article-id': e.articleId,
                                    level: 2,
                                    'poster-comment-id': o.commentId,
                                    'reply-comment-id': o.commentId,
                                    'reply-comment-level': o.level,
                                    'reply-author-id': o.authorId,
                                    'reply-article-author-id': e.articleAuthorId,
                                    onReQueryComments:
                                      h[0] || (h[0] = _ => d.$emit('reQueryComments'))
                                  },
                                  null,
                                  8,
                                  [
                                    'article-id',
                                    'poster-comment-id',
                                    'reply-comment-id',
                                    'reply-comment-level',
                                    'reply-author-id',
                                    'reply-article-author-id'
                                  ]
                                ))
                              : g('', !0),
                            o.children.length
                              ? (a(),
                                F(
                                  vt,
                                  {
                                    key: 2,
                                    data: o.children,
                                    'comment-id': o.commentId,
                                    'article-id': e.articleId,
                                    onReQueryComments:
                                      h[1] || (h[1] = _ => d.$emit('reQueryComments'))
                                  },
                                  null,
                                  8,
                                  ['data', 'comment-id', 'article-id']
                                ))
                              : g('', !0)
                          ])
                        )
                      ),
                      256
                    ))
                  ],
                  512
                ))
              : g('', !0),
            e.data.length
              ? (a(),
                F(
                  c,
                  {
                    key: 1,
                    background: '',
                    layout: 'prev, pager, next',
                    total: e.commentsTotal,
                    class: 'mt-4 mt-20',
                    'current-page': e.pageNum,
                    onCurrentChange: h[2] || (h[2] = o => d.$emit('pageNumChange', o))
                  },
                  null,
                  8,
                  ['total', 'current-page']
                ))
              : g('', !0),
            e.data.length
              ? g('', !0)
              : (a(),
                F(Ce, { key: 2, title: '\u8FD8\u6CA1\u6709\u4EBA\u53D1\u8868\u8BC4\u8BBA...' }))
          ])
        )
      }
    }
  })
const Et = M(bt, [['__scopeId', 'data-v-bcb3a90c']])
function Ft(e, n) {
  const s = J({
      title: '',
      content: '',
      professional: '',
      authorId: 0,
      likes: [],
      commentTotal: 0,
      hot: 0,
      createTime: '',
      updateTime: '',
      articleId: e.value,
      introduce: '',
      authorInfo: ke,
      comments: []
    }),
    l = b(0),
    m = b(0),
    u = J({ pageNum: 1, pageSize: 10, articleId: e.value }),
    r = b()
  async function y() {
    if (!e.value) {
      A('\u51FA\u9519\u4E86')
      return
    }
    const o = await Ee({ articleId: e.value })
    o.code == 200 && At(s, o.data)
  }
  async function v() {
    u.articleId = e.value
    const o = await we(u)
    o.code == 200 && ((s.comments = o.data), (l.value = o.total), (m.value = o.commentsTotal))
  }
  function d() {
    const o = document.querySelector('.anchor')
    te(oe(o) - 65)
  }
  function h(o) {
    ;(u.pageNum = o), v(), d()
  }
  async function I(o) {
    if (!G()) return A('\u8BF7\u5148\u767B\u5F55')
    if (o) {
      L('\u70B9\u8FC7\u8D5E\u4E86, \u4E0D\u7528\u518D\u70B9\u4E86\uFF5E')
      return
    }
    const { userInfo: _ } = R(),
      { code: f } = await Fe({ articleId: e.value, userId: _.uid })
    f == 200 && s.likes.push(_.uid)
  }
  const c = ee(function () {
    isNaN(e.value) || (v(), y())
  })
  return (
    V(
      () => e.value,
      () => {
        c()
      }
    ),
    he(async () => {
      if (isNaN(n.value)) return
      const {
        data: o,
        code: _,
        msg: f
      } = await De({ commentId: n.value, pageSize: u.pageSize, articleId: e.value })
      _ === 200 ? ((u.pageNum = o.pageNum), (s.comments = o.data), (r.value = o.position)) : A(f)
    }),
    Y(c),
    W(() => (s.content = '')),
    {
      commentsConditions: u,
      total: l,
      position: r,
      commentsTotal: m,
      article: s,
      like: I,
      queryArticle: y,
      pageNumChange: h,
      queryComments: v,
      toCommentFieldTop: d
    }
  )
}
function At(e, n) {
  ;(e.articleId = n.articleId),
    (e.title = n.title),
    (e.content = n.content),
    (e.commentTotal = n.commentTotal),
    (e.professional = n.professional),
    (e.authorId = n.authorId),
    (e.likes = n.likes),
    (e.createTime = n.createTime),
    (e.updateTime = n.updateTime),
    (e.introduce = n.introduce),
    (e.authorInfo = n.authorInfo)
}
function Bt(e) {
  const n = b(!1)
  function s() {
    ;(n.value = !1), setTimeout(() => (n.value = !0), 200)
  }
  return (
    Y(() => {
      s()
    }),
    V(
      () => e.value,
      () => {
        s()
      }
    ),
    { delay: n }
  )
}
const S = e => (z('data-v-7ba56919'), (e = e()), U(), e),
  Tt = { class: 'community-detail flex' },
  wt = { class: 'main-content mr-20' },
  Dt = { class: 'main content-card' },
  Nt = ['innerHTML'],
  xt = { class: 'supports mb-20' },
  Mt = S(() => i('i', { class: 'iconfont icon-like font-20' }, null, -1)),
  St = S(() => i('i', { class: 'iconfont icon-comment font-20' }, null, -1)),
  Qt = S(() => i('i', { class: 'iconfont icon-share font-20' }, null, -1)),
  Pt = S(() => i('i', { class: 'iconfont icon-edit font-20' }, null, -1)),
  Rt = { class: 'pointer tag mr-20' },
  qt = S(() => i('i', { class: 'anchor' }, null, -1)),
  Lt = { class: 'slide-content' },
  jt = N({
    __name: 'communityDetail',
    setup(e) {
      const n = be(),
        s = T(() => parseInt(n.query.articleId)),
        l = T(() => parseInt(n.query.posterCommentId)),
        { userInfo: m } = R(),
        {
          article: u,
          total: r,
          position: y,
          commentsTotal: v,
          like: d,
          pageNumChange: h,
          toCommentFieldTop: I,
          queryComments: c,
          commentsConditions: o
        } = Ft(s, l),
        { delay: _ } = Bt(s),
        f = T(() => u.likes.includes(m.uid)),
        E = T(() => u.authorId == m.uid)
      return (Q, $) => {
        const O = ue
        return (
          a(),
          p('div', Tt, [
            i('div', wt, [
              i('div', Dt, [
                C(
                  K,
                  {
                    class: 'user-info',
                    'user-info': t(u).authorInfo,
                    'publish-time': t(u).createTime
                  },
                  null,
                  8,
                  ['user-info', 'publish-time']
                ),
                i('article', { class: 'content', innerHTML: t(u).content }, null, 8, Nt),
                i('div', xt, [
                  i(
                    'span',
                    { onClick: $[0] || ($[0] = B => t(d)(t(f))), class: ye({ clicked: t(f) }) },
                    [Mt, P(' ' + k(t(q)(t(u).likes.length)), 1)],
                    2
                  ),
                  i('span', { onClick: $[1] || ($[1] = (...B) => t(I) && t(I)(...B)) }, [
                    St,
                    P(' ' + k(t(q)(t(u).comments.length)), 1)
                  ]),
                  i('span', null, [
                    C(
                      O,
                      { placement: 'bottom', content: '\u5206\u4EAB\u7ED9\u670B\u53CB' },
                      { default: X(() => [Qt]), _: 1 }
                    )
                  ]),
                  t(E)
                    ? (a(),
                      p(
                        'span',
                        {
                          key: 0,
                          onClick:
                            $[2] ||
                            ($[2] = B => Q.$router.push(`/community/editor?articleId=${t(s)}`))
                        },
                        [
                          C(
                            O,
                            { placement: 'bottom', content: '\u7F16\u8F91' },
                            { default: X(() => [Pt]), _: 1 }
                          )
                        ]
                      ))
                    : g('', !0)
                ]),
                i('span', Rt, '#' + k(t(u).professional), 1),
                i(
                  'span',
                  { class: 'pointer hover', onClick: $[3] || ($[3] = B => Q.$router.back()) },
                  '\u8FD4\u56DE\u4E0A\u4E00\u9875'
                ),
                i(
                  'span',
                  {
                    class: 'pointer hover back absolute',
                    onClick: $[4] || ($[4] = B => Q.$router.back())
                  },
                  '\u8FD4\u56DE\u4E0A\u4E00\u9875'
                )
              ]),
              C(
                H,
                {
                  'article-id': t(s),
                  level: 1,
                  'reply-article-author-id': t(u).authorId,
                  onReQueryComments: t(c)
                },
                null,
                8,
                ['article-id', 'reply-article-author-id', 'onReQueryComments']
              ),
              qt,
              C(
                Et,
                {
                  data: t(u).comments,
                  'article-id': t(s),
                  total: t(r),
                  'page-num': t(o).pageNum,
                  'scroll-to': t(y),
                  'comments-total': t(v),
                  'article-author-id': t(u).authorId,
                  onPageNumChange: t(h),
                  onReQueryComments: t(c)
                },
                null,
                8,
                [
                  'data',
                  'article-id',
                  'total',
                  'page-num',
                  'scroll-to',
                  'comments-total',
                  'article-author-id',
                  'onPageNumChange',
                  'onReQueryComments'
                ]
              )
            ]),
            i('div', Lt, [
              C(ae, { class: 'slide-item' }),
              C(re),
              t(_)
                ? (a(),
                  F(t($e), {
                    key: 0,
                    class: 'slide-item menu-bar content-card',
                    body: '.content',
                    width: '300px'
                  }))
                : g('', !0)
            ])
          ])
        )
      }
    }
  })
const yo = M(jt, [['__scopeId', 'data-v-7ba56919']])
export { yo as default }
