// This is for the container which is the "Host"
// We will use ModuelFederationPlugin to share code between our microfrontends
// We are using this to share code between our microfrontends
// Needing the file from the products microfrontend
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      // Name of our microfrontend
      name: 'container',
      // Where to find the file that is going to be shar
      remotes: {
        products: 'products@http://localhost:8081/remoteEntry.js',
        cart: 'cart@http://localhost:8082/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
