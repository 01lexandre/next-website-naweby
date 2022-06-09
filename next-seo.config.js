export default {
  openGraph: {
    type: 'website',
    locale: process.env.APP_LANG,
    url: 'https://www.naweby.com.br/',
    site_name: process.env.APP_NAME,
    title: process.env.APP_NAME + ' - ' + process.env.APP_SLOGAN,
  },
  defaultTitle: process.env.APP_NAME + ' - ' + process.env.APP_SLOGAN,
  twitter: {
    handle: '@naweby',
    site: '@naweby',
    cardType: 'summary_large_image',
  },
  robotsProps: {
    nosnippet: true,
    notranslate: true,
    noimageindex: true,
    noarchive: true,
    maxSnippet: -1,
    maxImagePreview: 'none',
    maxVideoPreview: -1,
  }
};
