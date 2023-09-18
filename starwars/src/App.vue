<template>
  <div class="wrapper">
    <HeaderNav />
    <router-view class="router"/>
  </div>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";

export default {
  components: { HeaderNav },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-image: url(./assets/images/zvezda.png);

  .router { flex-grow: 1; }
}
</style>
