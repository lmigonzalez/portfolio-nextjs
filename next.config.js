/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
  env: {
    MAIL_HOST: 'smtp.zoho.com',
    MAIL_PORT: 465,
    MAIL_USER: 'luisgonzalez@elegantdesigns.site',
    MAIL_PASS: 'luismi18',
    CONTENTFUL_SPACE_ID: 'hzvbafhwpm8o',
    CONTENTFUL_ACCESS_KEY: 'MuZT0LK-8n7-jFTqx8U5tp5nZX8yKFLqxGxji1lMauM',
    MEASUREMENT_ID: 'G-DFT9G3SC34',
  },
};

module.exports = nextConfig;
