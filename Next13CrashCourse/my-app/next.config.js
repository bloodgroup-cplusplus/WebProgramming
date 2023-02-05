/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    remotePatterns:[
      {
        protocol:'https',
       domains:['image.tmdb.org'],
       hostname:'localhost',
       port:'3000'

  },
  ],

}

module.exports = nextConfig
