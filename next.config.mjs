/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    // allow these qualities used in the app (silences Next.js warning)
    qualities: [75, 90],
  },
}

export default nextConfig
