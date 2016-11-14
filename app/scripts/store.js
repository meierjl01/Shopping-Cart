import Cart from './models/cart';

export default {
  cart: new Cart(),
    storeItems: [{
        name: "sword",
        price: 100
    }, {
        name: "dagger",
        price: 50,
    }, {
        name: "lightsaber",
        price: 250,
    }]
};
