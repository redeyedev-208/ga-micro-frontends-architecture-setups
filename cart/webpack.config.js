const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// This is for the cart also known as "Remote

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartShow': './src/index',
      },
      // Basically, we are saying that we want to share the faker library
      // So if the products and cart both import faker, they will get the same
      // An extra copy of faker will not be bundled with the products and cart
      // Note: If trying to use a different version of faker, it will not work because
      // the faker version is locked in the products webpack config
      // Error in the console will be something like: Unsatified version 5.1.0 of shared singleton module faker
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
