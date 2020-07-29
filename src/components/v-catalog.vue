<template>
 <div class="v-catalog">
   <router-link :to="{name: 'cart', params: {cart_data: CART}}">
     <div class="v-catalog__link_to_cart">
      Cart: {{ CART.length }}
    </div>
   </router-link>
   <h2>Catalog</h2>
   <div class="v-catalog__list">
      <v-catalog-item
        v-for="(product, index) in PRODUCTS"
        :key="index"
        :product_data="product"
        @addToCard="addToCard"
        />
   </div>
 </div>
</template>

<script>
import vCatalogItem from '@/components/v-catalog-item.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem,
  },
  data() {
    return {
      // products: [],
    };
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART',
    ]),
    addToCard(data) {
      this.ADD_TO_CART(data);
    },
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
    ]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
 .v-catalog {
   display: flex;
   flex-direction: column;
   align-items: center;
   &__list {
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
     align-items: center;
   }
   &__link_to_cart {
     position: fixed;
     top: 10px;
     right: 10px;
     padding: $padding * 2;
     border: solid 1px #aeaeae;
   }
 }
</style>
