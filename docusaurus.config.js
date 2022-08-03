// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const baseUrl = process.env.BASE_URL || '/'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Saga',
  tagline: 'Dataplattformen til Statens vegvesen',
  url: 'https://docs.saga.vegvesen.no',
  baseUrl: baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'svvsaga',
  projectName: 'docs-public',
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/svvsaga/docs-public/edit/main/${versionDocsDirPath}/${docPath}`,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-WZTM4JRGRL',
          anonymizeIP: true,
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Saga',
        logo: {
          src: 'img/saga-visuals.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Dokumentasjon',
          },
          {
            href: 'https://data.saga.vegvesen.no/',
            position: 'right',
            label: 'Datakatalog',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `En tjeneste fra Statens vegvesen </br> ${new Date().getFullYear()}`,
        logo: {
          alt: 'Statens Vegvesen',
          src: 'img/svv-logo-bw.svg',
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
