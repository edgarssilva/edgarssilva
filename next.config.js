import createMDX from "@next/mdx";
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

    images: {
        domains: ["placehold.co"],
        dangerouslyAllowSVG: true,
    },

    typescript: {
        ignoreBuildErrors: true,
    },

    eslint: {
        ignoreDuringBuilds: true,
    },
};

const withMDX = createMDX({
});


export default withMDX(config);
