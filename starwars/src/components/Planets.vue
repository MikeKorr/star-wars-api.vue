<template>
  <div class="mainpage">
    <div class="container">
      <div class="list">
        <div class="box" v-if="isLoading">
          <div
            class="loader"
            style="--b: 15px; --c: #ffe81f; width: 120px; --n: 8"
          ></div>
        </div>
        <div class="column" v-else>
          <p v-for="(pers, index) of personList" :key="index">
            <router-link class="list-elem" :to="`/planets/${pers.id}`"
              >{{ index + 1 }}. {{ pers.name }}</router-link
            >
          </p>
          <Pagination :total="total" :item="10" @pageChanged="loadPers" />
        </div>
      </div>
      <div class="info">
        <router-view :personList="personList"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from "./Pagination.vue";
import { checkResponse } from "../utils/utils";

export default {
  name: "Planets",
  components: { Pagination },

  data() {
    return {
      isLoading: true,
      personList: [],
      page: 1,
      total: 0,
    };
  },

  async mounted() {
    // await this.$store.dispatch("requestPlanetsApi");
    // this.isLoading = false;
    await this.loadPers(this.page);
    this.isLoading = false;
  },
  computed: { ...mapGetters(["getUrl"]) },
  methods: {
    async loadPers(pageNumber) {
      this.personList = await fetch(
        `${this.getUrl}/planets/?page=${pageNumber}`
      )
        .then(checkResponse)
        .then((res) => {
          this.total = res.count;
          return res.results.map((el, index) => {
            return { ...el, id: index + 1 };
          });
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style lang="scss">
.mainpage {
  height: 100vh;
  width: 100%;
  position: relative;

  .container {
    display: flex;
    justify-content: space-around;
    margin: 150px auto 0;
    height: 600px;
    width: 80%;

    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      height: 550px;
      width: 40%;
      border: 3px solid #ffe81f;
      border-radius: 2px;

      .box {
        display: flex;
        align-items: center;
      }

      .loader {
        margin-top: 100px;
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

      .list-elem {
        text-align: left;
        max-width: 180px;
        color: white;
        font-size: 18px;
        font-weight: 600;
        margin: 15px 0 10px 20px;
        border: 2px solid black;
        border-radius: 6px;
        text-decoration: none;
      }
      .active {
        color: #ffe81f;
      }

      .list-elem:hover {
        box-shadow: #ffe81f 0px 5px 15px;
      }

      .loading {
        font-size: 30px;
        color: #ffe81f;
        align-self: center;
      }
    }
    .info {
      display: flex;
      align-items: center;
      margin: 0 auto;
      height: 550px;
      width: 40%;
      border: 3px solid #ffe81f;
      border-radius: 2px;
    }
  }
}
</style>
