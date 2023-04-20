import { defineConfig, DefaultTheme } from 'vitepress'

const ogDescription = 'DataLab | 数据实验室'
const ogImage = '/images/logo.png'
const ogTitle = 'DataLab'
const ogUrl = ''

// netlify envs
// const deployURL = process.env.DEPLOY_PRIME_URL || ''
// const commitRef = process.env.COMMIT_REF?.slice(0, 8) || 'dev'

// const deployType = (() => {
//   switch (deployURL) {
//     case 'https://main--vite-docs-main.netlify.app':
//       return 'main'
//     case '':
//       return 'local'
//     default:
//       return 'release'
//   }
// })()
// const additionalTitle = ((): string => {
//   switch (deployType) {
//     case 'main':
//       return ' (main branch)'
//     case 'local':
//       return ' (local)'
//     case 'release':
//       return ''
//   }
// })()
// const versionLinks = ((): DefaultTheme.NavItemWithLink[] => {
//   switch (deployType) {
//     // case 'main':
//     case 'local':
//       return [
//         {
//           text: 'Vite 4 Docs (release)',
//           link: 'https://vitejs.dev',
//         },
//         {
//           text: 'Vite 3 Docs',
//           link: 'https://v3.vitejs.dev',
//         },
//         {
//           text: 'Vite 2 Docs',
//           link: 'https://v2.vitejs.dev',
//         },
//       ]
//     case 'release':
//       return [
//         {
//           text: 'Vite 3 Docs',
//           link: 'https://v3.vitejs.dev',
//         },
//         {
//           text: 'Vite 2 Docs',
//           link: 'https://v2.vitejs.dev',
//         },
//       ]
//   }
// })()

export default defineConfig({
  lang: 'zh-CN',
  title: 'DataLab | 数据实验室',
  description: '大数据技术研究与实践记录',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    // ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    // ['meta', { name: 'twitter:site', content: '@vite_js' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'CBDFBSLI',
        'data-spa': 'auto',
        defer: '',
      },
    ],
  ],

  locales: {
    root: { label: '简体中文' },
    zh: { label: 'English', link: '/en/' },
  },

  themeConfig: {
    logo: '/images/logo.png',

    editLink: {
      pattern: 'https://github.com/bin9li/bin9li.github.io/master/docs/:path',
      text: '编辑此页',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bin9li' },
    ],

    // algolia: {
    //   appId: '7H67QR5P0A',
    //   apiKey: 'deaab78bcdfe96b599497d25acc6460e',
    //   indexName: 'vitejs',
    //   searchParameters: {
    //     facetFilters: ['tags:en'],
    //   },
    // },

    // carbonAds: {
    //   code: 'CEBIEK3N',
    //   placement: 'vitejsdev',
    // },

    footer: {
      message: 'Released under the MIT License. ',
      copyright: 'Copyright ©️ 2023-present bin9li & Vite Contributors',
    },

    nav: [
      { text: '指引', link: '/main/', activeMatch: '/main/' },
      { text: '基础知识', link: '/base/', activeMatch: '/base/' },
      { text: '编程语言', link: '/lang/', activeMatch: '/lang/' },
      // { text: '数据技术', link: '/data/', activeMatch: '/data/' },
      { text: '数据技术', 
        items: [
          {text: 'HDFS', link: '/data/hdfs/01-Introduction-to-HDFS'} 
        ],
        // link: '/data/', activeMatch: '/data/' 
      },
      { text: '工具工程', link: '/tool/', activeMatch: '/tool/' },
      { text: '读书笔记', link: '/book/', activeMatch: '/book/' },
      {
        text: '相关链接',
        items: [
          { text: '首页', link: '/' },
          {
            items: [
              {
                text: '百度',
                link: 'https://www.baidu.com/',
              },
              {
                text: '阿里',
                link: 'https://ali-home.alibaba.com/',
              },
              {
                text: '腾讯',
                link: 'https://www.qq.com/',
              },
              {
                text: '字节',
                link: 'https://www.bytedance.com/',
              },
            ],
          },
        ],
      },
    ],

    sidebar: {
      '/base/': [
        {
          text: '计算机基础',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '概述',
              link: '/base/',
            },
          ],
        },
        // {
        //   text: '计算机数学',
        //   collapsed: false, //折叠子菜单功能
        //   items: [
        //     {
        //       text: '概述',
        //       link: '/base/',
        //     },
        //   ],
        // },
        // {
        //   text: '计算机英语',
        //   collapsed: false, //折叠子菜单功能
        //   items: [
        //     {
        //       text: '概述',
        //       link: '/base/',
        //     },
        //   ],
        // },
        {
          text: '计算机组成原理',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '概述',
              link: '/base/',
            },
          ],
        },
        {
          text: '计算机网络',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '概述',
              link: '/base/',
            },
          ],
        },
        {
          text: '数据结构',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '概述',
              link: '/base/',
            },
          ],
        },
        {
          text: '算法',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '概述',
              link: '/base/',
            },
          ],
        },
        {
          text: '操作系统',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '概述',
              link: '/base/',
            },
          ],
        },
        {
          text: '数据库概论',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '概述',
              link: '/base/',
            },
          ],
        },
      ],
      'lang' :[
        {
          text: '编程语言',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '概述',
              link: '/lang/',
            },
          ],
        },
        {
          text: 'Java',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: 'Java 概述',
              link: '/lang/',
            },
            {
              text: 'Java 详解',
              link: '/lang/',
            },
          ],
        },
        {
          text: 'Scala',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: 'Scala 概述',
              link: '/lang/',
            },
            {
              text: 'Scala 详解',
              link: '/lang/',
            },
          ],
        },
        {
          text: 'Python',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: 'Python 概述',
              link: '/lang/',
            },
            {
              text: 'Python 详解',
              link: '/lang/',
            },
          ],
        },
      ],
      '/data/': [
        {
          text: '概述',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '开始',
              link: '/data/',
            },
          ],
        },  
        {
          text: '数据库技术',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '开始',
              link: '/data/',
            },
          ],
        }, 
        {
          text: 'HDFS',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: 'HDFS简介',
              link: '/data/hdfs/01-Introduction-to-HDFS',
            },
          ],
        },   
      ],
      '/tool/': [
        {
          text: '工具工程技术',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '概述',
              link: '/tool/',
            },
          ],
        },  
        {
          text: 'Linux',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '开始',
              link: '/tool/',
            },
          ],
        }, 
        {
          text: 'Docker',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '开始',
              link: '/tool/',
            },
          ],
        }, 
        {
          text: 'Git',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '开始',
              link: '/tool/',
            },
          ],
        }, 
        {
          text: '设计模式',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '开始',
              link: '/tool/',
            },
          ],
        },  
        {
          text: 'Maven',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '开始',
              link: '/tool/',
            },
          ],
        },   
        {
          text: 'Markdown',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '开始',
              link: '/tool/',
            },
          ],
        }, 
        {
          text: 'Zookeeper',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '开始',
              link: '/tool/',
            },
          ],
        },
      ], 
      '/book/': [
        {
          text: '读书笔记',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '概述',
              link: '/tool/',
            },
          ],
        },  
        {
          text: '数据仓库工具箱',
          collapsed: false, //折叠子菜单功能
          items: [
            {
              text: '开始',
              link: '/tool/',
            },
          ],
        }, 
      ], 
    },
  },
})
