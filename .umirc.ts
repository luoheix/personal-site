import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'personal blog',
  favicon:
    'https://6865-heixongjun-ok4ws-1302448573.tcb.qcloud.la/personalBlog/xiongzhua.png',
  logo:
    'https://6865-heixongjun-ok4ws-1302448573.tcb.qcloud.la/personalBlog/xiong.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  resolve: {
    includes: ['docs'],
  },
  menus: {
    '/components': [
      {
        title: '通用组件',
        children: [
          '/components/blowup',
          '/components/expandableDom',
          '/components/imgWatermark',
        ],
      },
      {
        title: '大屏项目组件',
        children: ['/components/autoScrollRow', '/components/autoScrollTable'],
      },
    ],
    '/interesting': [
      {
        title: '有趣的设计',
        children: ['/interesting/interestOne'],
      },
    ],
    '/optimize': [
      {
        title: '利用 React 优化',
        children: ['/optimize/useReactMemo'],
      },
    ],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});
