import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '',
};

export default withFlowbiteReact(nextConfig);