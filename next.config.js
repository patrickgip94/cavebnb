/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.imgur.com", 'avatars.githubusercontent.com', 'lh3.googleusercontent.com', "res.cloudinary.com"]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
