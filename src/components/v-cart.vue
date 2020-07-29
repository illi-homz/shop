<template>
 <div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-cart__back_to_catalog">
        Back to catalog
      </div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products in cart</p>
    <v-cart-item
      class="v-cart__item"
      v-for="(item, index) in cart_data"
      :key="index"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
      />
    <div class="v-cart__total">
      <p class="total__name">Total:</p>
      <p>{{ cartTotalCost }} р.</p>
    </div>
 </div>
</template>

<script>
import vCartItem from '@/components/v-cart-item.vue';
import { mapActions } from 'vuex';

export default {
  name: 'v-cart',
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    cartTotalCost() {
      let result = [];
      if (this.cart_data.length) {
        this.cart_data.forEach((item) => {
          result.push(item.price * item.quantity);
        });

        result = result.reduce((sum, el) => sum + el);
        return result;
      }
      return 0;
    },
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
  },
};
</script>

<style lang="scss">
  .v-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
    &__back_to_catalog {
      position: fixed;
      top: 10px;
      right: 10px;
      padding: $padding * 2;
      border: solid 1px #aeaeae;
    }
    &__total {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: $padding;
      display: flex;
      justify-content: center;
      background: #189b18;
      color: #fff;
      font-size: 20px;
    }
  .total__name {
    margin-right: $margin * 2;
  }
 }
</style>
