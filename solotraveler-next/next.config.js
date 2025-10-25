/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的エクスポートを完全に無効化
  output: undefined,
  
  // プリレンダリングを無効化
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  
  // 画像最適化
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 外部画像ドメインの許可
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    // 画像の遅延読み込みを有効化
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // 画像のキャッシュ設定を最適化
    minimumCacheTTL: 31536000, // 1年
    // 画像の最適化を有効化
    unoptimized: false,
  },
  
  // 圧縮
  compress: true,
  
  // パフォーマンス最適化
  experimental: {
    optimizePackageImports: ['@next/font'],
  },
  
  // CSS最適化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // バンドル分析
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // CSS最適化
    if (!dev) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        styles: {
          name: 'styles',
          test: /\.(css|scss)$/,
          chunks: 'all',
          enforce: true,
        },
      };
    }
    
    return config;
  },

  // 現代的なブラウザターゲットを設定（ポリフィルを削減）
  swcMinify: true,
  
  // 静的エクスポートを完全に無効化
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  
  // ヘッダー設定
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      // 静的リソースのキャッシュ設定
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // 画像ファイルのキャッシュ設定
      {
        source: '/:path*\\.(png|jpg|jpeg|gif|webp|avif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // CSS/JSファイルのキャッシュ設定
      {
        source: '/:path*\\.(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // フォントファイルのキャッシュ設定
      {
        source: '/:path*\\.(woff|woff2|eot|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // HTMLファイルのキャッシュ設定（短め）
      {
        source: '/:path*\\.html',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400',
          },
        ],
      },
      // APIルートのキャッシュ設定
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=600',
          },
        ],
      },
    ];
  },
  
  // リダイレクト設定
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  // robots.txtの最適化
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
};

module.exports = nextConfig; 