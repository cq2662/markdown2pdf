import { f as A, u as E, a as H, g as L, e as R, E as $ } from './index.2356ee1f.js'
import {
  D as m,
  o as n,
  c as u,
  a as s,
  U as e,
  a4 as d,
  at as p,
  au as I,
  S as b,
  u as r,
  L as T,
  r as k,
  ar as N,
  f as O,
  M as C,
  a3 as B,
  O as g,
  P as S
} from './@vue.459e27cf.js'
import { _ as y } from './vue-markdown-menu-bar.54882429.js'
import { u as w } from './vue-router.bfd1ba04.js'
import { a as U } from './community.a40af039.js'
const v = t => (p('data-v-80652053'), (t = t()), I(), t),
  V = { class: 'user-tooltip flex content-card' },
  q = { class: 'head flex' },
  M = ['src'],
  W = { class: 'nick-name' },
  Y = v(() => s('strong', null, '\u6027\u522B\uFF1A', -1)),
  z = v(() => s('strong', null, '\u9662\u6821\uFF1A', -1)),
  P = v(() => s('strong', null, '\u6C42\u804C\u610F\u5411\uFF1A', -1)),
  j = v(() => s('strong', null, '\u6240\u5728\u5730\u533A\uFF1A', -1)),
  G = m({
    __name: 'userTooltip',
    props: { userInfo: null },
    setup(t) {
      return (c, i) => (
        n(),
        u('div', V, [
          s('div', q, [
            s('img', { class: 'mr-10', src: t.userInfo.avatar, alt: '\u5934\u50CF' }, null, 8, M),
            s('strong', W, e(t.userInfo.nickName), 1)
          ]),
          s('p', null, [Y, d(e(t.userInfo.sex) + '\u751F', 1)]),
          s('p', null, [
            z,
            s('span', null, e(t.userInfo.school) + ' - ', 1),
            s('span', null, e(t.userInfo.graduation) + '\u5C4A', 1)
          ]),
          s('p', null, [P, d(e(t.userInfo.professional), 1)]),
          s('p', null, [j, d(e(t.userInfo.origin), 1)])
        ])
      )
    }
  })
const J = y(G, [['__scopeId', 'data-v-80652053']]),
  K = t => (p('data-v-5593f860'), (t = t()), I(), t),
  Q = { class: 'user-head' },
  X = ['src'],
  Z = { class: 'user-info' },
  tt = { class: 'user-name' },
  st = { class: 'date-school' },
  et = { key: 0, class: 'datetime mr-20' },
  ot = { class: 'school' },
  nt = K(() => s('i', { class: 'iconfont icon-school' }, null, -1)),
  at = m({
    __name: 'userInfo',
    props: { userInfo: null, publishTime: null },
    setup(t) {
      return (c, i) => {
        var _, a, o, l
        return (
          n(),
          u('div', Q, [
            s(
              'img',
              { class: 'pointer mr-10', src: (_ = t.userInfo) == null ? void 0 : _.avatar },
              null,
              8,
              X
            ),
            b(J, { class: 'user-tooltip', userInfo: t.userInfo }, null, 8, ['userInfo']),
            s('div', Z, [
              s('span', tt, e((a = t.userInfo) == null ? void 0 : a.nickName), 1),
              s('div', st, [
                t.publishTime
                  ? (n(), u('span', et, e(r(A)(t.publishTime)) + '\u53D1\u5E03', 1))
                  : T('', !0),
                s('span', ot, [
                  nt,
                  d(
                    ' ' +
                      e((o = t.userInfo) == null ? void 0 : o.school) +
                      ' - ' +
                      e((l = t.userInfo) == null ? void 0 : l.graduation) +
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
const Bt = y(at, [['__scopeId', 'data-v-5593f860']])
function St() {
  const { loginState: t } = E()
  return t.logined
}
function ut() {
  const t = '__BROWSE_HISTORY__',
    i = k([]),
    _ = w()
  function a(f) {
    let h = o()
    h.length >= 10 && h.pop(), h.unshift(f), H(t, h, 60 * 60 * 1e3 * 24 * 365)
  }
  function o() {
    return L(t) || []
  }
  function l(f) {
    i.value = f
  }
  function F(f) {
    _.push(`/community/detail?articleId=${f}`)
  }
  return (
    N(() => {
      l(o() || [])
    }),
    { data: i, useDetail: F, setBrowseHistory: a, getBrowseHistory: o }
  )
}
function x(t) {
  return t >= 1e3 ? (t / 1e3).toFixed(1) + 'k' : t
}
function ct() {
  const t = k([]),
    c = w()
  async function i() {
    const a = await U({ requireCount: 10 })
    if (a.code === 200) {
      t.value = a.data
      return
    }
    R(a.msg)
  }
  function _(a) {
    c.push(`/community/detail?articleId=${a}`)
  }
  return O(() => i()), { useDetail: _, hotList: t }
}
const it = t => (p('data-v-717a63c4'), (t = t()), I(), t),
  lt = { class: 'hot-list content-card' },
  rt = it(() => s('p', { class: 'hot-title slide-title' }, ' \u70ED\u95E8\u9762\u7ECF ', -1)),
  _t = { key: 0, class: 'list-style-init' },
  dt = ['onClick'],
  ft = m({
    __name: 'hotList',
    setup(t) {
      const { hotList: c, useDetail: i } = ct()
      return (_, a) => (
        n(),
        u('div', lt, [
          rt,
          r(c).length
            ? (n(),
              u('ul', _t, [
                (n(!0),
                u(
                  C,
                  null,
                  B(
                    r(c),
                    (o, l) => (
                      n(),
                      u(
                        'li',
                        { class: 'line-2', onClick: F => r(i)(o.articleId) },
                        [
                          s('span', { class: g(['rank', { topRank: l < 3 }]) }, e(l + 1), 3),
                          d(' ' + e(o.title) + ' ', 1),
                          s(
                            'i',
                            { class: g(['iconfont icon-hot font-20', { topRank: l < 3 }]) },
                            null,
                            2
                          ),
                          s('span', { class: g({ topRank: l < 3 }) }, e(r(x)(o.hot)), 3)
                        ],
                        8,
                        dt
                      )
                    )
                  ),
                  256
                ))
              ]))
            : (n(),
              S($, {
                key: 1,
                title: '\u8FD8\u6CA1\u6709\u9762\u7ECF\uFF0C\u5FEB\u53BB\u62A2\u6C99\u53D1\u5427.'
              }))
        ])
      )
    }
  })
const wt = y(ft, [['__scopeId', 'data-v-717a63c4']]),
  D = t => (p('data-v-e6b20fe6'), (t = t()), I(), t),
  ht = { class: 'browse-history-list mt-20 content-card' },
  mt = D(() =>
    s('p', { class: 'browse-history-title slide-title' }, ' \u6D4F\u89C8\u5386\u53F2 ', -1)
  ),
  pt = { key: 0, class: 'list-style-init history-list' },
  It = ['onClick'],
  yt = D(() => s('i', { class: 'iconfont icon-browse font-20' }, null, -1)),
  vt = m({
    __name: 'browseHistory',
    setup(t) {
      const { data: c, useDetail: i } = ut()
      return (_, a) => (
        n(),
        u('div', ht, [
          mt,
          r(c).length
            ? (n(),
              u('ul', pt, [
                (n(!0),
                u(
                  C,
                  null,
                  B(
                    r(c),
                    o => (
                      n(),
                      u(
                        'li',
                        { class: 'line-2', onClick: l => r(i)(o.articleId) },
                        [
                          d(e(o.title) + '\xA0', 1),
                          s('span', null, [yt, d(' ' + e(r(x)(o.hot)), 1)])
                        ],
                        8,
                        It
                      )
                    )
                  ),
                  256
                ))
              ]))
            : (n(),
              S($, {
                key: 1,
                title: '\u4F60\u8FD8\u6CA1\u6D4F\u89C8\u8FC7\u4EFB\u4F55\u6587\u7AE0'
              }))
        ])
      )
    }
  })
const xt = y(vt, [['__scopeId', 'data-v-e6b20fe6']])
export { xt as B, wt as H, Bt as U, J as a, St as i, x as n, ut as u }
