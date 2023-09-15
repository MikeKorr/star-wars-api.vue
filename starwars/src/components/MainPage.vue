<template>
  <div class="mainpage">
    <span class="main-title">STAR WARS API PROJECT</span>

    <div class="ship-container"><div class="destroyer"></div></div>
    <div class="ship-container"><div class="ship"></div></div>
    <div class="ship-container"><div class="destroyer"></div></div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style lang="scss">
.mainpage {
  height: 100vh;
  width: 100%;
  position: relative;

  .main-title {
    color: #ffe81f;
    font-size: 60px;
    z-index: 99;
    position: absolute;
    right: 600px;
    font-weight: 900;
    top: 400px;
    right: 580px;
  }

  .ship-container {
    height: 265px;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 0;
    position: relative;
    overflow: hidden;

    .ship {
      height: 100%;
      width: 100%;
      background: url(../assets/images/sokol.png) 0px 0px;
      background-repeat: no-repeat;
      left: -600px;
      animation: play 15s linear infinite;
      position: absolute;
      z-index: 0;
    }

    .destroyer {
      height: 190px;
      width: 100%;
      background: url(../assets/images/destroyer.png) 0px 0px;
      background-repeat: no-repeat;
      animation: play2 15s linear infinite;
      position: absolute;
      z-index: 0;
    }

    @keyframes play {
      from {
        left: -600px;
      }

      to {
        left: 100%;
      }
    }

    @keyframes play2 {
      from {
        left: -1000px;
      }
      10% {
        top: 40px;
      }
      20% {
        top: 80px;
      }
      30% {
        top: 40px;
      }
      40% {
        top: 80px;
      }
      50% {
        top: 40px;
      }
      60% {
        top: 80px;
      }
      70% {
        top: 40px;
      }
      80% {
        top: 80px;
      }
      90% {
        top: 40px;
      }

      to {
        left: 100%;
      }
    }
  }
}
</style>
