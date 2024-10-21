const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: false, // Disable React's Strict Mode (not recommended for production)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add redirect configuration
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://wulo.ai/newsletter',
        permanent: true,
      },
    ];
  },
  // Additional configuration if necessary
};

module.exports = withMDX(nextConfig);