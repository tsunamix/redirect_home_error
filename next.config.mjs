/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            /* Redirect / (home) to /page1. It fail */
            {
              source: '/',
              destination: '/page1',
            },
            /* Redirect page3 to /page2. It works */
            {
                source: '/page3',
                destination: '/page2',
              },
        ]
    }
};

export default nextConfig;
