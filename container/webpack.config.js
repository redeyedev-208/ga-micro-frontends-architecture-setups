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
      // Where to find the file that is going to be share
      // Gotcha here is that the file name is not the same as the file name in the products microfrontend
      // There is a bug in webpack that will not allow you to use the same file name or id
      // Due to a global variable collision, logging the global variable in the console will show that
      // This is seen when we change the id to something else like "containerProducts"
      // Which is why we are using the name "products" here
      // Also why we are using the name "cart" in the cart microfrontend
      // So in our DOM we will see the id of "containerProducts" and "containerCart"
      // We don't want to have an id with the same name in the ModuleFederationPlugin for the name: 'cart' as an example
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
