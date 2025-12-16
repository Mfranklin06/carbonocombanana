import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [new URL("https://images.unsplash.com/photo-1596443686812-2f45229eebc3?q=80&w=2071&auto=format&fit=crop")]
  }
};


export default nextConfig;
