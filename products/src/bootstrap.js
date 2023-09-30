// We want to generate a list of products and display them on the page
import faker from 'faker';

// We are refactoring our code to be reusable and have a more verbose implementation
// This file will be used in both development and production
// We are being proactive and making sure that we are not immediately rendering our app
// Due to how teams will be using this file, we are not going to assume that an element with an id of dev-products exists

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  // To accomplish this in React we would use ReactDOM.render(<App />, el)
  el.innerHTML = products;
};

// Context/Situation #1 - We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of dev-products
// We want to immediately render our app into that element
// The env variable is set in webpack.config.js

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-faker-products');

  // Assuming our container doesn't have an element with an id of dev-products
  // We are running this file in isolation
  // We are using our local index.html file
  // Which DEFINITELY has an element with an id of dev-faker-products
  // We want to immediately render our app into that element
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

// Context/Situation #2 - We are running this file in development or production
// We are running this file in the CONTAINER app
// There is no guarantee that an element with an id of dev-products exists
// We DO NOT want to immediately render our app into that element
// Our container will call mount (which will be defined in the container)
export { mount };
