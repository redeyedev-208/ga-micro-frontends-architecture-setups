// This allows webpack to know that we are using module federation
// So it allows for the faker library or any other library to be shared
// between the products and cart and removing the error of having multiple
// copies of the faker library
import('./bootstrap');
