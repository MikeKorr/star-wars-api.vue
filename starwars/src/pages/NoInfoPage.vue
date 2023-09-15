<template>
  <div class="box">
    <div class="page-box">
      <p class="title">MAKE YOUR CHOISE, JEDI</p>
      <img src="../assets/images/dart.png" alt="Вейдер" class="img-box" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NoInfoPage",
};
</script>

<style lang="scss">
.box {
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;

  .page-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    height: 550px;
    width: 100%;
    font-size: 30px;
    color: white;
  }

  .title {
    border-radius: 6px;
    box-shadow: #b00000 0px 5px 15px;
    border: 3px solid #ffe81f;
    color: #b00000;
    font-weight: 700;
  }

  .img-box {
    height: 300px;
    width: 300px;
  }
}
</style>
