/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' ,
  basePath: "/portifolio-front",
  images: { unoptimized: true },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["media.graphassets.com"],
  },
  // i18n: {
  //   locales: ['en-US', 'pt-BR'],
  //   defaultLocale: 'en-US',
  //   domains: [
  //     {
  //       domain: 'home.com',
  //       defaultLocale: 'en-US',
  //       locales: ['es'],
  //     },
  //     {
  //       domain: 'home.nl',
  //       defaultLocale: 'pt-BR',
  //     }
  //   ],
  // },
};

module.exports = nextConfig;
