const content = `::: headStart
::: start
![个人头像](https://codeleilei.gitee.io/blog/avatar.jpg)
:::
## xxxx **Java开发工程师**
icon:city 浙江杭州 / icon:user 男 / 22岁 / icon:school 应届生
icon:email coderlei@test.cn / icon:wechat x972761675 / icon:phone 123xxxxx223
:::
icon:github [github.com/acmenlei](https://github.com/acmenlei)
icon:yuque [yueque.com/xxxxx](https://yuque.com/xiongleixin)
icon:link [个人网站 coderlei.netlify.app](https://coderlei.netlify.app)
::: end
::: headEnd

## 教育经历
::: start
- **北京大学** - 光华管理学院 - 工商管理 - 硕士
:::
**2021.09 - 2024.07**
::: end

::: start
- **清华大学** - 工商管理学院 - 工商管理 - 学士
:::

**2017.09 - 2021.07**

::: end

## 工作经历
::: start
### 杭州xx网络有限公司 - xxxxx工程师
:::
**2018.03 - 2018.07**
::: end
1. 对电商平台整体规划设计、前台页进行更新迭代设计、主题活动设计、专题页设计；
2. 对电商网站页面设计、店铺产品装修、详情页面设计、推广图等图片设计制作。
3. 对照片进行精修，熟悉抠图、调色及各种常规及特殊调色手法；
4. 负责图片、文字设计排版，要求卖点突出、方便阅读、吸引购买；
5. 根据设计逻辑及活动/宝贝特性，进行文案描写；
6. 配合运营、业务部门及客户反馈，优化、修正商品图片信息；

## 项目经历
::: start
### xxxxB端管理台
:::
### 2020.12 - 2021.05
::: end
- **技术栈**：\`ts\` \`vue3\` \`vite\` \`vue-router\` \`vuex\` \`nodejs\` \`MySQL\`&nbsp;
- **项目简介**：该项目是一个使用 Vue.js 开发的电商类小程序的商家端管理系统，是一个前后端分离的 SPA 应
- **工作内容**：
1. 登录采用 Cookie + Token 的方式，用户分为店长以及员工，并针对这几种角色对其进行权限控制
2. 权限做到按钮级别，页面级权限通过 Vue-Router 守卫进行控制、按钮级权限通过 directive 实现，并使用单例模式解决了按钮过多引发的频繁拉取权限的 HTTP 请求的问题
3. 根据权限菜单的级联关系对权限码结构进行改造，并使用 Tree 组件渲染树形结构权限列表，提升可读性
4. 使用 ECharts 可视化渲染店铺商品销售占比、近几个月收支、会员购买商品所占份额图表
5. 对于表格中所有的模糊查询，都使用了节流进行优化，尽量减轻服务器的压力

## 个人荣誉
1. 四年班长 + 团支书xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
2. 大学生创新创业大赛国家级立项xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
3. 互联网+金融赛道一等奖xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
4. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx......

## 自我评价
1. 本人热心诚恳、乐观向上，有良好的思想品德和职业素质，工作认真负责，爱好是看美女。
2. 通过在学生会任职的经历，锻炼出了良好的组织协调能力，善于调动团队成员的工作热情与积极性。
3. 丰富的在外兼职经历使自己拥有较强的亲和力与责任心，并有良好的团队协作和敬业精神。`
export default {
  name: '简约万能模板',
  primaryColor: '#333',
  primaryBackground: '#C42F76',
  img: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d474637fe9b943ec950eb1047d6d5f37~tplv-k3u1fbpfcp-watermark.image?',
  content
}
