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
  margin-top: 20px;
  justify-content: center;

  .header__container {
    display: flex;
    padding: 10px 10px;
    justify-content: space-around;
    width: 80%;
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
