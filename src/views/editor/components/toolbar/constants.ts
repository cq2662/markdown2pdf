export const toolbarConfig = [
  {
    icon: 'bold',
    command: 'bold',
    tip: '加粗文本'
  },
  {
    icon: 'italic',
    command: 'italic',
    tip: '斜体文本'
  },
  {
    icon: 'link',
    command: 'insertLink',
    tip: '添加链接/替换选中文本'
  },
  {
    icon: 'unorderedlist',
    command: 'insertUnorderedList',
    tip: '无序列表'
  },
  {
    icon: 'orderedlist',
    command: 'insertOrderedList',
    tip: '有序列表'
  },
  {
    icon: 'emoji',
    command: 'insertIcon',
    tip: '插入图标'
  },
  {
    icon: 'info',
    command: 'insertUserInfo',
    tip: '插入个人信息布局'
  },
  {
    icon: 'columns',
    command: 'multiColumns',
    tip: '插入多列布局'
  },
  {
    icon: 'table',
    command: 'insertTable',
    tip: '插入表格'
  },
  {
    icon: 'code',
    command: 'insertCode',
    tip: '插入技能点'
  },
  {
    icon: 'goto',
    command: 'insertToTail',
    tip: '跳出当前所在布局容器'
  },
  {
    icon: 'write',
    command: 'toMarkdownMode',
    tip: '切换至Markdown模式'
  }
]

export const headings = [
  { label: '正文', value: '' },
  { label: '一级标题', value: 'h1' },
  { label: '二级标题', value: 'h2' },
  { label: '三级标题', value: 'h3' },
  { label: '四级标记', value: 'h4' },
  { label: '五级标题', value: 'h5' },
  { label: '六级标题', value: 'h6' }
]

export const markdownModeToolbarConfig = [
  {
    icon: 'emoji',
    command: 'insertIcon',
    tip: '插入图标'
  },
  {
    icon: 'info',
    command: 'insertHeadLayout',
    tip: '插入个人信息布局'
  },
  {
    icon: 'practice',
    command: 'insertMainLayout',
    tip: '插入主体内容布局'
  },
  {
    icon: 'columns',
    command: 'insertMultiColumns',
    tip: '插入多列布局'
  },
  {
    icon: 'table',
    command: 'insertTable',
    tip: '插入表格'
  },
  {
    icon: 'write',
    command: 'toContentMode',
    tip: '切换至内容模式'
  }
]
