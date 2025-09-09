/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  trailingSlash: false,
  images: {
    unoptimized: true,
  }, 
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups", // "same-origin-allow-popups"
          },
        ],
      },
    ];
  },
  //typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    //ignoreBuildErrors: true,
  //},

}

export default nextConfig;
