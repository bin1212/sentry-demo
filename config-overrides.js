const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin
} = require("customize-cra");
const SentryCliPlugin = require('@sentry/webpack-plugin')
const path = require('path')
const paths = require('react-scripts/config/paths')

const appBuildPathFile = () => config => {
  config.devtool = 'source-map'
  return config
}

module.exports = {
  webpack:override(
    fixBabelImports("import", {
      libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "#1DA57A" }
    }),
    addWebpackPlugin(new SentryCliPlugin({
      release:'0.0.1',
      ignore: ['node_modules'],
      url:'http://118.195.203.216:9000/',
      org:'sentry',
      project:'cra-test',
      authToken:'41b27081219c40289180ad01c75af2c1093b51af02734eb1ba621bb0232f7b68',
      urlPrefix: '~/',
      include: './build'
    })),
    appBuildPathFile()
  ),
}