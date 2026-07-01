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
  // 301 redirects from legacy URLs to the SEO-friendly structure.
  // Order matters: specific /articles/* rules must precede the generic /articles/:slug.
  async redirects() {
    return [
      // Solutions -> /giai-phap/*
      { source: '/toa-nha-thong-minh', destination: '/giai-phap/toa-nha-thong-minh', permanent: true },
      { source: '/nha-may-thong-minh', destination: '/giai-phap/nha-may-thong-minh', permanent: true },
      { source: '/giai-phap-esg', destination: '/giai-phap/giai-phap-esg', permanent: true },
      { source: '/ai-soc', destination: '/giai-phap/ai-soc', permanent: true },
      // Products -> /san-pham/*
      { source: '/products/chatbot', destination: '/san-pham/v-ai-agent', permanent: true },
      { source: '/products/vietguard', destination: '/san-pham/vietguard', permanent: true },
      { source: '/products/ai-soc', destination: '/san-pham/ai-soc', permanent: true },
      { source: '/products/csa-dlp', destination: '/san-pham/csa-dlp', permanent: true },
      { source: '/products/pentest-services', destination: '/san-pham/pentest-services', permanent: true },
      { source: '/products/oracle-cloud', destination: '/san-pham/oracle-cloud', permanent: true },
      { source: '/products/smart-dashboard', destination: '/san-pham/smart-dashboard', permanent: true },
      // Retired category pages -> unified news listing
      { source: '/blog', destination: '/tin-tuc/danh-muc', permanent: true },
      { source: '/news', destination: '/tin-tuc/danh-muc', permanent: true },
      { source: '/documents', destination: '/tin-tuc/danh-muc', permanent: true },
      // News admin + listing (specific rules BEFORE the generic slug rule)
      { source: '/articles/articles-list', destination: '/tin-tuc/danh-muc', permanent: true },
      { source: '/articles/articles-management', destination: '/tin-tuc/quan-ly-bai-viet', permanent: true },
      { source: '/articles/write-article', destination: '/tin-tuc/viet-bai-moi', permanent: true },
      // Article detail (generic) -> /tin-tuc/:slug
      { source: '/articles/:slug', destination: '/tin-tuc/:slug', permanent: true },
    ]
  },
}

export default nextConfig
