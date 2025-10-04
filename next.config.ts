import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.hostelz.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mytriphack.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'budgettraveller.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
