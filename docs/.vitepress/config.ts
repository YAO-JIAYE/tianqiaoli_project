import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/tianqiaoli_project/',
  title: "グループ５８のサイト",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'ホームページ', link: '/' },
      { text: '概要', link: '/overview' },
      { text: 'プロジェクト', link: '/project_info' },
      { text: '活動内容', link: '/event' },
      { text: '結果', link: '/result' },
      { text: '過程', link: '/process' },
      { text: 'メンバー紹介', link: '/member_intro' },
      
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' },
      //     { text: 'メンバー紹介', link: '/member_intro' }

      //   ]
      // }
    ],

    socialLinks: [
    ]
  }
})
