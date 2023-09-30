// Import faker for fake text on fake products that will go in the div
import faker from 'faker';

const mount = (el) => {
  const cartMessage = `<div>You have ${faker.random.number()} items in your cart</div>`;
  el.innerHTML = cartMessage;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');
  if (el) {
    mount(el);
  }
}

export { mount };
