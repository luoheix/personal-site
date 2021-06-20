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
    includes: [
      'docs',
      'packages/components/src',
      'packages/interesting/src',
      'packages/optimize/src',
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
