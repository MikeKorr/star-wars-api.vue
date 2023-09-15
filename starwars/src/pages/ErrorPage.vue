<template>
  <div class="block">
    <img src="../assets/images/itsatrap.webp" alt="Ловушка" />
    <div class="text">404 NOT FOUND</div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style lang="scss">
.block {
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;

  .text {
    margin: 20px 0 0 0;
    border: none;
    font-size: 50px;
    color: white;
  }
}
</style>
