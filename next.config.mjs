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
      // CSA-DLP page is served by an external landing site. Force redirect so the
      // internal /san-pham/csa-dlp content is never shown to users.
      { source: '/san-pham/csa-dlp', destination: 'https://landing-csa.vercel.app', permanent: false },
      { source: '/san-pham/csa-dlp/:path*', destination: 'https://landing-csa.vercel.app', permanent: false },
      // internal /san-pham/oracle-cloud content is never shown to users.
      { source: '/san-pham/oracle-cloud', destination: 'https://oraclecloud.vn/', permanent: false },
      { source: '/san-pham/oracle-cloud/:path*', destination: 'https://oraclecloud.vn/', permanent: false },
      // internal /san-pham/smart-dashboard content is never shown to users.
      { source: '/san-pham/smart-dashboard', destination: 'https://smartdashboard.vn/', permanent: false },
      { source: '/san-pham/smart-dashboard/:path*', destination: 'https://smartdashboard.vn/', permanent: false },
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
      // Legacy top-level category pages -> nested category routes
      { source: '/blog', destination: '/tin-tuc/blog', permanent: true },
      { source: '/news', destination: '/tin-tuc/news', permanent: true },
      { source: '/documents', destination: '/tin-tuc/documents', permanent: true },
      // Retired unified listing -> default news category
      { source: '/tin-tuc/danh-muc', destination: '/tin-tuc/news', permanent: true },
      // News admin + listing (specific rules BEFORE the generic slug rule)
      { source: '/articles/articles-list', destination: '/tin-tuc/news', permanent: true },
      { source: '/articles/articles-management', destination: '/tin-tuc/quan-ly-bai-viet', permanent: true },
      { source: '/articles/write-article', destination: '/tin-tuc/viet-bai-moi', permanent: true },
      // Article detail (generic) -> /tin-tuc/:slug
      { source: '/articles/:slug', destination: '/tin-tuc/:slug', permanent: true },
    ]
  },
}

export default nextConfig
