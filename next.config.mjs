import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: 'standalone',

  images: {
    domains: ['images.ctfassets.net'],
    loader: 'custom',
    loaderFile: './lib/contentful-loader.tsx',
    path: 'https://',
  },
}

export default withPlaiceholder(nextConfig);

