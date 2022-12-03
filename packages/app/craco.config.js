// const path = require("path");
// const { getLoader, loaderByName } = require("@craco/craco");

// const packages = [];
// packages.push(path.join(__dirname, "../components"));

// module.exports = {
//   webpack: {
//     configure: (webpackConfig, arg) => {
//       const { isFound, match } = getLoader(
//         webpackConfig,
//         loaderByName("babel-loader")
//       );
//       if (isFound) {
//         const include = Array.isArray(match.loader.include)
//           ? match.loader.include
//           : [match.loader.include];

//         match.loader.include = include.concat(packages);
//       }
//       return webpackConfig;
//     },
//   },
// };


const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
	plugins: [
		{
			plugin: require('craco-babel-loader'),
			options: {
				includes: [path.join(__dirname, "../components")],
			},
		},
	],
};


