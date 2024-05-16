/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.luisgonzalezdev.com/:path*',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
