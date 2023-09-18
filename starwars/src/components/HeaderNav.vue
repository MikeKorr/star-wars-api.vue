<template>
  <header>
    <div class="header__container">
      <router-link class="link" to="/">MAIN PAGE</router-link>
      <router-link class="link" to="/people/?page=1">PEOPLE</router-link>
      <router-link class="link" to="/planets">PLANETS</router-link>
      <router-link class="link" to="/starships">SHIPS</router-link>
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderNav",
};
</script>
<style lang="scss">
header {
  display: flex;
  margin: 20px auto 0;
  align-items: center;

  .header__container {
    display: flex;
    padding: 10px 10px;
    justify-content: space-around;
    margin: 0 auto 0;
    width: 900px;
    border: 3px solid #ffe81f;
    border-radius: 6px;
    box-shadow: #ffe81f 0px 5px 15px;

    .link {
      color: white;
      font-size: 30px;
      font-weight: 900;
      text-decoration: none;
    }
    .active {
      color: #ffe81f;
    }
  }
}
</style>
