/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.unsplash.com",
                port: '',

            },
            {
                protocol: 'https',
                hostname: "docs.material-tailwind.com",
                port: '',

            },

        ],
    },
};

export default nextConfig;
