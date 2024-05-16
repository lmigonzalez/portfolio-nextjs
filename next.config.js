/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
  async redirects() {
    return [
      {
        source: '*',
        destination: 'https://www.luisgonzalezdev.com',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
