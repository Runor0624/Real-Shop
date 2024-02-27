/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: process.env.NEXT_PUBLIC_URL_IMAGE,
		  },
		],
	  }
};

export default nextConfig;
