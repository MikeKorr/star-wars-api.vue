<template>
  <div class="box">
    <!-- <div v-if="isLoading">
      <div
        class="loader"
        style="--b: 15px; --c: #ffe81f; width: 120px; --n: 8"
      ></div>
    </div> -->
    <div class="text">
      <img src="../assets/images/All.jpg" class="img" alt="Все персонажи" />
      <div class="info-box">
        <span class="span-text">Name - {{ selectedPerson.name }}</span>
        <span class="span-text">
          {{
            selectedPerson.climate
              ? "Climate - " + selectedPerson.climate
              : null || selectedPerson.skin_color
              ? "Hair - " + selectedPerson.skin_color
              : null || selectedPerson.manufacturer
              ? "Manufacturer - " + selectedPerson.manufacturer
              : null
          }}
        </span>
        <span class="span-text">
          {{
            selectedPerson.terrain
              ? "Tarrain - " + selectedPerson.terrain
              : null || selectedPerson.gender
              ? "Gender - " + selectedPerson.gender
              : null || selectedPerson.starship_class
              ? "Starship class - " + selectedPerson.starship_class
              : null
          }}
        </span>
      </div>
      <div>
        <router-link class="route-link" :to="`/moreinfo/${selectedPerson.id}`"
          >Click for more info</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoPage",
  props: {
    selectedPerson: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.box {
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  border: 3px solid #ffe81f;

  .loader {
    --b: 10px;
    --n: 10;
    --g: 10deg;

    width: 100px;
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 1px;
    background: conic-gradient(#0000, var(--c)) content-box;
    --_m: repeating-conic-gradient(
        #0000 0deg,
        #000 1deg calc(360deg / var(--n) - var(--g) - 1deg),
        #0000 calc(360deg / var(--n) - var(--g)) calc(360deg / var(--n))
      ),
      radial-gradient(
        farthest-side,
        #0000 calc(98% - var(--b)),
        #000 calc(100% - var(--b))
      );
    -webkit-mask: var(--_m);
    mask: var(--_m);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
    animation: load 1s infinite steps(var(--n));
  }
  @keyframes load {
    to {
      transform: rotate(1turn);
    }
  }
}

.text {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  color: white;

  .route-link {
    color: white;
    text-decoration: none;
    margin-top: 30px;
    border-radius: 6px;
    font-size: 30px;
    border: 3px solid #ffe81f;
  }

  .route-link:hover {
    box-shadow: #ffe81f 0px 5px 15px;
    border-radius: 5px;
    color: red;
  }

  .img {
    margin: 20px 0 0 0;
    height: 250px;
    width: 400px;
    border-radius: 5px;
    border: 3px solid #ffe81f;
  }

  .info-box {
    display: flex;
    margin: 20px 0 0 0;
    color: #ffe81f;
    flex-direction: column;
    font-size: 15px;
    width: 100%;
    height: 200px;
    align-items: center;

    .span-text {
      font-size: 30px;
    }
  }
}
</style>
