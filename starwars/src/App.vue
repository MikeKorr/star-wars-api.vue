<template>
  <main>
    <div class="new"><HeaderNav /> <router-view></router-view></div>
  </main>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";

export default {
  components: { HeaderNav },
};
</script>

<style lang="scss">
main {
  .new {
    display: flex;
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    background-image: url(./assets/images/zvezda.png);
  }
}
</style>
