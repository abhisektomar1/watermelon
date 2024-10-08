/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'w7.pngwing.com',
          },
        ],
      },
};

export default nextConfig;
