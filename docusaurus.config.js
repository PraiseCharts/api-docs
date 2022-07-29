// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const redocusaurus = [
  'redocusaurus',
  {
    debug: Boolean(process.env.DEBUG || process.env.CI),
    specs: [
      {
        id: 'using-single-yaml',
        spec: 'openapi.json',
        route: '/api/',
        layout: {
          noFooter: true
        }
      },
    ],
    theme: {
      /**
       * Highlight color for docs
       */
      primaryColor: '#2a87c7',
      primaryColorDark: '#2a87c7',

      /**
       * Options to pass to redoc
       * @see https://github.com/redocly/redoc#redoc-options-object
       */
      options: { 
        disableSearch: true, 
        scrollYOffset: '60'
      },
      /**
       * Options to pass to override RedocThemeObject
       * @see https://github.com/Redocly/redoc#redoc-theme-object
       */
      theme: {
        sidebar: {
          backgroundColor: '#171717',
          activeTextColor: '#2a87c7',
          groupItems: {
            activeBackgroundColor: '#171717',
            activeTextColor: '#2a87c7'
          },
          level1Items: {
            activeBackgroundColor: '#171717',
            activeTextColor: '#2a87c7'
          },
        }
      },
    },
  },
];

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'PraiseCharts Developers',
  tagline: 'How to run interact with PraiseCharts API',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'praisecharts', // Usually your GitHub org/user name.
  projectName: 'api-docs',
  deploymentBranch: 'master',
  url: 'https://developer.praisecharts.com',
  baseUrl: '/',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          sidebarCollapsed: false,
          editUrl: 'https://github.com/praisecharts/api-docs/edit/master/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    redocusaurus
  ],

  plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsDir: "docs",
        indexBlog: false,
        docsRouteBasePath: "/"
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        hideOnScroll: false,
        title: '',
        logo: {
          alt: 'PraiseCharts',
          src: 'https://cdn-assets.praisecharts.com/api-docs-logo.svg',
          srcDark: 'https://cdn-assets.praisecharts.com/api-docs-logo.svg',
        },
        items: [
          {
            to: '/',
            position: 'left',
            activeBaseRegex:
            '^/overview/$|^/ovweview',
            label: 'Overview',
          },
          {
            to: '/guides',
            position: 'left',
            activeBaseRegex:
            '^/guides/$|^/guides|^/guides/(!hidden)',
            label: 'Guides',
          },
          { to: "/api/", label: "Reference", position: "left" },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.praisecharts.com',
            className: 'navbar-item-praisecharts',
            position: 'right',
          },
          {
            href: 'https://github.com/praisecharts/api-docs',
            className: 'navbar-item-github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/praisecharts',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/praisecharts',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/praisechartsvideo',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/praisecharts/api-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sonreign Media, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsDark'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
        plugins: ['line-numbers', 'show-language'],
      },
    }),
};
