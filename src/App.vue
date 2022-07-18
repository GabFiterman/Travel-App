<template>
  <TheNavigation />
  <div class="container">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";
export default{
  name: 'App',
  components: {
    TheNavigation
  }
}
</script>

<style>
@import './assets/main.css';

</style>
