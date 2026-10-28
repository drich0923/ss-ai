import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "systemizedsales.ai" }],
        destination: "https://www.systemizedsales.ai/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
