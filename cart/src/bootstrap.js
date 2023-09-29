// Import faker for fake text on fake products that will go in the div
import faker from 'faker';

const cartMessage = `<div>You have ${faker.random.number()} items in your cart</div>`;
// Render the cartMessage to the div with id 'dev-cart'

document.querySelector('#show-dev-cart').innerHTML = cartMessage;
