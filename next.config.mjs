/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      'mongodb', 
      'mongoose', 
      '@mongodb-js/zstd', 
      'kerberos', 
      'snappy',
      'nodemailer',
      'bcryptjs',
      'jsonwebtoken'
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve server-side modules on the client
      config.resolve.fallback = {
        fs: false,
        net: false,
        dns: false,
        child_process: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false,
        nodemailer: false,
        bcryptjs: false,
        jsonwebtoken: false,
      }

      // Completely exclude these modules from client bundle
      config.externals = config.externals || []
      config.externals.push({
        'nodemailer': 'commonjs nodemailer',
        'bcryptjs': 'commonjs bcryptjs',
        'jsonwebtoken': 'commonjs jsonwebtoken',
        'mongodb': 'commonjs mongodb',
        'mongodb-client-encryption': 'commonjs mongodb-client-encryption',
        'kerberos': 'commonjs kerberos',
        '@napi-rs/snappy-linux-x64-gnu': 'commonjs @napi-rs/snappy-linux-x64-gnu',
        '@napi-rs/snappy-linux-x64-musl': 'commonjs @napi-rs/snappy-linux-x64-musl',
        'snappy': 'commonjs snappy',
        'bson-ext': 'commonjs bson-ext',
      })
    }

    return config
  },
}

export default nextConfig
