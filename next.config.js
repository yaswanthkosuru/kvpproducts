

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["lh3.googleusercontent.com"],
    },
    typescript: {
    },
    compiler: {
        styledComponents: true
    }

}

module.exports = nextConfig;