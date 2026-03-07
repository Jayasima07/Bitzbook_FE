export default {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Temporary: allow production builds even if type errors exist
    ignoreBuildErrors: true,
  },
};
