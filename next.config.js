/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com',
              'www.notion.so',
              'notion-emojis.s3-us-west-2.amazonaws.com',
              'lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig