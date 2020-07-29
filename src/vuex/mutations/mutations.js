export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products.map((item) => {
      const product = item;
      product.price = Math.trunc(product.price);
      return product;
    });
  },
  SET_CART: (state, product) => {
    if (state.cart.length) {
      let isProductExist = false;
      state.cart.forEach((data) => {
        const item = data;
        if (item.article === product.article) {
          isProductExist = true;
          item.quantity += 1;
        }
      });
      if (!isProductExist) {
        state.cart.push(product);
      }
    } else {
      state.cart.push(product);
    }
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1);
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity += 1;
  },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity -= 1;
    }
  },
};
