/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: "/media/:path*",
                headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
            },
        ]
    },
}
