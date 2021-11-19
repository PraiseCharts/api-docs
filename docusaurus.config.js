// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PraiseCharts Admin Docs',
  tagline: 'How to run PraiseCharts',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'praisecharts', // Usually your GitHub org/user name.
  projectName: 'admin-docs',
  deploymentBranch: 'master',
  url: 'https://praisecharts-admin-docs.netlify.app',
  baseUrl: '/',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          sidebarCollapsed: false,
          editUrl: 'https://github.com/praisecharts/admin-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
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
        hideOnScroll: true,
        title: '',
        logo: {
          alt: 'PraiseCharts',
          src: 'https://cdn-assets.praisecharts.com/praisecharts-docs-logo-light.svg',
          srcDark: 'https://cdn-assets.praisecharts.com/praisecharts-docs-logo.svg',
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
            '^/guides/$|^/guides',
            label: 'Guides',
          },
          {
            to: '/reference',
            position: 'left',
            activeBaseRegex:
            '^/reference/$|^/reference',
            label: 'Reference',
          },
          {
            to: 'https://cpanel.praisecharts.com/app',
            position: 'left',
            label: 'Admin Login',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.praisecharts.com',
            className: 'navbar-item-praisecharts',
            position: 'right',
          },
          {
            href: 'https://github.com/praisecharts/admin-docs',
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
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/praisecharts/',
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

module.exports = config;
