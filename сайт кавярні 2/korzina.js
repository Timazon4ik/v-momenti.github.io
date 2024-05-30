// Код JavaScript

id

const cartItems = document.getElementById('cartItems');
const totalPriceDisplay = document.getElementById('totalPrice');

let cart = [];

function addToCart(item) {
    cart.push(item);
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} грн`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Видалити';
        removeBtn.addEventListener('click', () => {
            removeFromCart(index);
        });
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
        total += item.price;
    });
    totalPriceDisplay.textContent = `Загальна вартість: ${total} грн`;
}

document.getElementById('addToCartBtn').addEventListener('click', () => {
    const beverage = document.getElementById('beverage').value;
    const dessert = document.getElementById('dessert').value;
    const item = {
        name: `${beverage}, ${dessert}`,
        price: calculatePrice(beverage, dessert)
    };
    addToCart(item);
});

function calculatePrice(beverage, dessert) {
   

    // Ви можете додати власну логіку розрахунку ціни тут
    // У цьому прикладі просто вертаємо випадкову ціну від 10 до 50
    return Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    
}

document.getElementById('checkoutBtn').addEventListener('click', () => {
    const formData = new FormData(document.getElementById('orderForm'));
    const order = {};
    for (const [key, value] of formData.entries()) {
        order[key] = value;
    }
    order.items = cart;
    console.log('Замовлення:', order);
    // Тут ви можете відправити замовлення на сервер або зробити інше необхідне
    // Наприклад, можна відправити AJAX-запит на сервер з даними замовлення
});