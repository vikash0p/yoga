/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 60,
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.unsplash.com",
                port: '',

            },
            {
                protocol: 'https',
                hostname: "plus.unsplash.com" ,
                port: '',

            },

        ],
    },
};

export default nextConfig;
