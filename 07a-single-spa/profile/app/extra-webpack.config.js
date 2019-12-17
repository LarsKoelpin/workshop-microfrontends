const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);
  singleSpaWebpackConfig.externals = {}; //  externals: { 'zone.js': 'Zone' }
  singleSpaWebpackConfig.output.filename = 'profile-service.js';
  return singleSpaWebpackConfig;
};