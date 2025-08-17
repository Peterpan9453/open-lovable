import type { nextConfig } from "next";

const nextConfig: nextConfig = {
  experimental: {
    optimizeCss: false,        // 之前 lightningcss 在 Windows 的保險關
  },
  typescript: {
    ignoreBuildErrors: true,   // 先略過 TS 型別錯誤
  },
  eslint: {
    ignoreDuringBuilds: true,  // 若有 ESLint 錯誤也不擋 build
  },
};

export default nextConfig;
