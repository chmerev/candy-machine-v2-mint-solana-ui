/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')([
  '@solana/wallet-adapter-react-ui',
]);

module.exports = withTM({
	images: {
		domains: ['saigas.club']
	},
  reactStrictMode: true,
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
      issuer: /\.[jt]sx?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					// plugins: [{ removeViewBox: false }],
					plugins: [{
            name: 'preset-default',
            params: {
              override: {
                removeViewBox: false
              }
            }
          }],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
});