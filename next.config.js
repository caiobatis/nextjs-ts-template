const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withImages = require('next-images')

const { parsed: envs } = require('dotenv').config()

module.exports = withImages({
  esModule: true,
  webpack(config) {
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true
        })
      )
    }

    config.plugins.push(new webpack.EnvironmentPlugin(envs))

    return config
  }
})
