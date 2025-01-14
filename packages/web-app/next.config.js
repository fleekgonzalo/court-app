const { i18n } = require("./next-i18next.config");
const withTM = require("next-transpile-modules")(["@nation3/ui-components"]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
	reactStrictMode: true,
	output: 'export',
        trailingSlash: true,
	images: {
		domains: ["https://picsum.photos/"],
	},
	
});
