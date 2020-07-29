<template>
  <div id="app" class="app">
    <vMainWrapper />
  </div>
</template>

<script>
import vMainWrapper from '@/components/v-main-wrapper.vue';

export default {
  name: 'app',
  components: {
    vMainWrapper,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
