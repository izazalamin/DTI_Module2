// Pizza shop app
// that has a menu of pizzas
// and a cart to add pizzas to
// and a checkout to pay for pizzas

interface Pizza {
  name: string;
  price: number;
}

interface Menu {
  pizzas: Pizza[];
}

interface CartItem {
  pizza: Pizza;
  quantity: number;
}

interface Cart {
  items: CartItem[];
}

interface Order {
  cart: Cart;
  total: number;
}

// public Menu initMenu() 
function initMenu(): Menu {
  return {
    pizzas: [
      { name: 'Margherita', price: 5 },
      { name: 'Fungi', price: 3 },
      { name: 'Pepperoni', price: 6 },
      { name: 'Hawaiian', price: 7 },
    ]
  };
}

let menu = initMenu();
let cart: Cart = { items: [] };

let choosenPizza = menu.pizzas.find(pizza => pizza.name === 'Margherita');
if (!choosenPizza) {
  throw new Error('Pizza not found');
}

let choosenPizza2 = menu.pizzas.find(pizza => pizza.name === 'Pepperoni');
if (!choosenPizza2) {
  throw new Error('Pizza not found');
}

let choosenPizza3 = menu.pizzas.find(pizza => pizza.name === 'Hawaiian');
if (!choosenPizza3) {
  throw new Error('Pizza not found');
}

cart.items.push({ pizza: choosenPizza, quantity: 1 });
cart.items.push({ pizza: choosenPizza2, quantity: 6 });
cart.items.push({ pizza: choosenPizza3, quantity: 3 });

console.log(JSON.stringify(cart, null, 2));

let order: Order = {
  cart: cart,
  total: cart.items.reduce((acc, item) => acc + item.pizza.price * item.quantity, 0)
}

console.log(JSON.stringify(order, null, 2));