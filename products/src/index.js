// We want to generate a list of products and display them on the page
import faker from 'faker';

let products = '';

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

// We are going to use webpack to bundle our code
// We are going to use webpack-dev-server to serve up our code
// 1st so that we output onto the page for the products endpoint -> console.log(products);
document.querySelector('#dev-faker-products').innerHTML = products;
