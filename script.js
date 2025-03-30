let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} ha sido añadido al carrito. Total: $${calculateTotal()}`);
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}