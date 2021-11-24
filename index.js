"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const productName = 'fanny pack';
let shipping;
let taxPercent;
let taxTotal;
let total;
const shippingAddress = 'No 3800/Pt 160 Butumagyabu, New York';
const product = products_1.default.filter(product => product.name === productName)[0];
console.log(product);
if (product.preOrder.toLowerCase() === 'true') {
    console.log('Your order will be shipped very soon and we will soon notify you when product ships');
}
if (Number(product.price) >= 25) {
    shipping = 0;
    console.log('We provide free shipping for this product');
}
else if (Number(product.price) < 25) {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log(`Your product is ${product.name} shipping address is ${shippingAddress}, the price is ${product.price}. The tax total is ${taxTotal.toFixed(2)}, Shipping is ${shipping.toFixed(2)} and your total amount is $${total.toFixed(2)}`);
