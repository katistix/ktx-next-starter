/** @type {import('next').NextConfig} */
const nextConfig = {
    //   reactStrictMode: true,
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com',
                port: '',
                pathname: '/avatars/**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/**',
            }
        ],
    },
}

module.exports = nextConfig
