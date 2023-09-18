<template>
  <div class="block">
    <div>
      <div v-if="isLoading">
        <div
          class="loader"
          style="--b: 15px; --c: #ffe81f; width: 120px; --n: 8"
        ></div>
      </div>
      <div v-else class="moreinfo-container">
        <img
          src="../assets/images/facts.png"
          class="moreinfo-img"
          alt="Все персонажи"
        />
        <div class="grid">
          <span class="moreinfo-text">Name - {{ checkPers.name }}</span>
          <span class="moreinfo-text">
            {{
              checkPers.climate
                ? "Climate - " + checkPers.climate
                : null || checkPers.skin_color
                ? "Hair - " + checkPers.skin_color
                : null || checkPers.manufacturer
                ? "Manufacturer - " + checkPers.manufacturer
                : null
            }}
          </span>
          <span class="moreinfo-text">
            {{
              checkPers.terrain
                ? "Tarrain - " + checkPers.terrain
                : null || checkPers.gender
                ? "Gender - " + checkPers.gender
                : null || checkPers.starship_class
                ? "Starship class - " + checkPers.starship_class
                : null
            }}
          </span>
          <span class="moreinfo-text">
            {{
              checkPers.height
                ? "Height - " + checkPers.height
                : null || checkPers.rotation_period
                ? "Rotation period - " + checkPers.rotation_period
                : null || checkPers.model
                ? "Model - " + checkPers.model
                : null
            }}
          </span>
          <span class="moreinfo-text">
            {{
              checkPers.mass
                ? "Mass - " + checkPers.mass
                : null || checkPers.orbital_period
                ? "Orbital period - " + checkPers.orbital_period
                : null || checkPers.cost_in_credits
                ? "Cost in credits - " + checkPers.cost_in_credits
                : null
            }}
          </span>
          <span class="moreinfo-text">
            {{
              checkPers.hair_color
                ? "Hair color - " + checkPers.hair_color
                : null || checkPers.diameter
                ? "Diameter - " + checkPers.diameter
                : null || checkPers.length
                ? "Length - " + checkPers.length
                : null
            }}
          </span>
          <span class="moreinfo-text">
            {{
              checkPers.eye_color
                ? "Eye color - " + checkPers.eye_color
                : null || checkPers.gravity
                ? "Gravity - " + checkPers.gravity
                : null || checkPers.max_atmosphering_speed
                ? "Max speed - " + checkPers.max_atmosphering_speed
                : null
            }}
          </span>
          <span class="moreinfo-text">
            {{
              checkPers.birth_year
                ? "Birth year - " + checkPers.birth_year
                : null || checkPers.surface_water
                ? "Surface water - " + checkPers.surface_water
                : null || checkPers.crew
                ? "Crew - " + checkPers.crew
                : null
            }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MoreInfo",

  data() {
    return {
      checkPers: {},
      isLoading: true,
    };
  },

  created() {
    this.checkPers = this.checkObj;
    this.isLoading = false;
  },
  computed: { ...mapGetters(["checkObj"]) },
};
</script>

<style lang="scss">
.block {
  display: flex;
  margin: 0 auto;
  align-items: center;
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
  .moreinfo-container {
    display: flex;
    align-items: center;

    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    height: 700px;
    width: 1000px;
    font-size: 30px;
    color: white;

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
      gap: 16px;
      text-align: center;
    }

    .moreinfo-text {
      font-size: 22px;
      color: white;
      border: 2px solid #ffe81f;
      padding: 10px;
      border-radius: 3px;
      margin: 10px;
    }

    .moreinfo-img {
      margin: 0 0 20px 0;
      border-radius: 50%;
    }
  }
}
</style>
