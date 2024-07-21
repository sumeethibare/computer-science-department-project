import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.pdf$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    publicPath: '/_next/static/files',
                    outputPath: 'static/files',
                },
            },
        });

        return config;
    },
};

export default nextConfig;
