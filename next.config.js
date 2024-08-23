/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn-images-1.medium.com'],
        unoptimized: true,
    },
    output: 'export'
}

module.exports = nextConfig
