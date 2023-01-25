import { mount as cartMount } from 'cartApp/ShowCart';
import { mount } from 'productsApp/ProductsIndex';

mount(document.querySelector('#my-products'))

cartMount(document.querySelector('#my-cart'))
