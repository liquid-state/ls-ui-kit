const path = require('path');
const fs = require('fs');
// Load package.json
const pkgPath = path.join(__dirname, '../', 'package.json');
const pkg = fs.existsSync(pkgPath) ? require(pkgPath) : {};

let theme = {};
if (pkg.theme && typeof (pkg.theme) === 'string') {
  let cfgPath = pkg.theme;
  // relative path
  if (cfgPath.charAt(0) === '.') {
    cfgPath = path.resolve(__dirname, '../', cfgPath);
  }
  const getThemeConfig = require(cfgPath);
  theme = getThemeConfig();
} else if (pkg.theme && typeof (pkg.theme) === 'object') {
  theme = pkg.theme;
}

module.exports = (basicConfig, env, defaultConfig) => {
  // add less support
  defaultConfig.module.rules.push({
    test: /\.less$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: "less-loader",
        options: {
          modifyVars: theme,
          javascriptEnabled: true
        }
      }
    ]
  });

  defaultConfig.resolve.extensions.push('.less')

  return defaultConfig;
};
