<template>
 <div class="v-catalog-item">
   <img
    class="v-catalog-item__image"
    :src=" require('../assets/images/' + product_data.image) "
    :alt="product_data.image"
    >
   <p class="v-catalog-item__name">{{product_data.name}}</p>
   <p class="v-catalog-item__price">Price: {{product_data.price}} Р.</p>
   <button
    class="v-catalog-item__add_to_card_btn btn"
    @click="addToCard"
    > Add to Cart</button>
 </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    addToCard() {
      this.$emit('addToCard', this.product_data);
    },
  },
  mounted() {
    this.$set(this.product_data, 'quantity', 1);
  },
};
</script>

<style lang="scss">
.v-catalog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__image {
    width: 100px;
  }
}
</style>
