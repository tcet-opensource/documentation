// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TCET Open Source',
  tagline: 'Official Website of TCET Open Source',
  favicon: 'img/favicon.ico?v=3',

  // Set the production url of your site here
  url: 'https://opensource.tcetmumbai.in/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tcet-opensource', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    'apiKey': process.env.API_KEY,
    'appId': process.env.APPLICATION_ID,
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
           'https://github.com/tcet-opensource/documentation/edit/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: "Blogs",
          blogDescription: "TCET Open Source Blogging Page",
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      metadata: [{name: 'TCET Open Source', content: 'opensource, software'}],
      announcementBar: {
        id: 'opensource-recruitment',
        content: `ANNOUNCEMENT: We are hiring interns for the month of June. Apply 
        <a href="https://bit.ly/tcetosrecruitment" target=_blank>here</a>.`,
      },
      navbar: {
        hideOnScroll: true,
        title: 'TCET Open Source',
        logo: {
          alt: 'TCET Open Source Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'about-tcetopensource',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            label: 'Join us',
            href: 'https://bit.ly/tcetosrecruitment',
            position: 'left',
          },
          {
            href: 'https://github.com/tcet-opensource/documentation',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          }
        ],
      },
      algolia: {
        apiKey: process.env.API_KEY,
        appId: process.env.APPLICATION_ID,
        indexName: process.env.index
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'TCET Open Source',
                to: '/docs/about-tcetopensource',
              },
              {
                label: 'Docs Website',
                to: '/docs/projects/docs-site/about-docs',
              },
              {
                label: 'T&P Website',
                to: '/docs/projects/tnp-website/about-tnp-website',
              },
              {
                label: 'TCET Linux',
                to: '/docs/projects/tcet-linux/about-tcet-linux',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blogs',
                to: '/blog',
              },
              {
                label: 'Workflows',
                to: '/docs/category/workflows',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                to: 'https://github.com/tcet-opensource/documentation',
              },
              {
                label: 'Discord',
                to: 'https://discord.gg/r7ZhAREg2M',
              },
            ],
          },
          {
            title: 'Connect with us',
            items: [
              {
                label: 'Instagram',
                to: "https://www.instagram.com/tcetopensource/  ",
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/tcetopensource',
              },
              {
                label: 'LinkedIn',
                to: 'https://www.linkedin.com/company/tcet-opensource/mycompany/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TCET Open Source.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
