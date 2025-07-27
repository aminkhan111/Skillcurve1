/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com', 
      'randomuser.me', 
      'upload.wikimedia.org',
      'www.manipal.edu',
      'jainuniversity.ac.in',
      'www.lpu.in',
      'www.gla.ac.in',
      'www.amity.edu',
      'masters-union.org',
      'svyasa.edu.in',
      'woxsen.edu.in',
      'www.nmims.edu',
      'paruluniversity.ac.in',
      'res.cloudinary.com'
    ],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
}

module.exports = nextConfig 
