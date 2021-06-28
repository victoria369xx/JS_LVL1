'use strict'
//generate products
class Product {
    constructor(id, image, name, description, price) {
        this.id = id,
            this.image = image,
            this.name = name,
            this.description = description,
            this.price = price
    }
}

let products = [
    new Product(
        0,
        '0.jpeg',
        'ELLERY X M`O CAPSULE',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        52.22
    ),
    new Product(
        1,
        '1.jpg',
        'ELLERY X M`O CAPSULE',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        33.12
    ),
    new Product(
        2,
        '2.jpg',
        'ELLERY X M`O CAPSULE',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        45.52
    ),
    new Product(
        3,
        '3.jpg',
        'ELLERY X M`O CAPSULE',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        52.22
    ),
    new Product(
        4,
        '4.jpg',
        'ELLERY X M`O CAPSULE',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        67.24
    ),
    new Product(
        5,
        '5.jpg',
        'ELLERY X M`O CAPSULE',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        12.23
    ),
];

//render products on the page
const pathToImages = "images";
const pathToProductImage = `${pathToImages}/products`;
const productsList = document.querySelector('.productsList');

function renderProductsItem(product) {
    return `<div class="productsList__item">
    <div class="productsList__item_img">
    <img src="${pathToProductImage}/${product.image}" alt="${product.name}">
   
        <button data-productId="${product.id}" class = "productsList__item_btn">
        <i class="fas fa-shopping-cart"></i>
       Add to Cart
        </button>
    
</div>


    <div class="productsList__item_data">
        <div class="productsList__item_name">
            ${product.name}
        </div>
        <div class="productsList__item_text">
            ${product.description}
        </div>
        <div class="productsList__item_price">
            $${product.price}
        </div>
    </div>
</div> `;
};

function insertProductsIntoPage(products, productsList) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += renderProductsItem(product);
    }
    productsList.insertAdjacentHTML('afterbegin', productsMarkup);
}

function addEventListenersForAddToCartBtns() {
    const addToCartBtns = document.querySelectorAll('button[data-productId]');
    addToCartBtns.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    });
};

function addedProductHandler (event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
}

insertProductsIntoPage(products, productsList);
addEventListenersForAddToCartBtns();

