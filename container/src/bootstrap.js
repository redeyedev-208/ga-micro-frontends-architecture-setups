// Importing the dependencies before executing the code
// So when we build our project webpack will bundle all the dependencies
// It looks for the word "products" in the import statement
// So product is the keyword that webpack will look for so they must match
import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('This is the container');

productsMount(document.querySelector('#dev-faker-products'));
cartMount(document.querySelector('#my-cart'));
