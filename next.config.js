import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
    loader: 'custom',
    loaderFile: './app/components/utils/contentful-loader.tsx',
    path: 'https://',
  },
}

export default withPlaiceholder(nextConfig);