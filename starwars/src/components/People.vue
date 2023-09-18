<template>
  <div class="people">
    <div class="container" v-if="!isError">
      <div class="list">
        <div class="box" v-if="isLoading">
          <div class="loader" style="--b: 15px; --c: #ffe81f; width: 120px; --n: 8"></div>
        </div>

        <div v-else>
          <p v-for="(person, index) of personList" :key="index">
            <a @click="setPerson(person)" class="list-elem">{{ index + 1 }}. {{ person.name }}</a>
          </p>
        </div>

        <Pagination :total="total" :disabled="isLoading" @change="loadPeople" />
      </div>

      <InfoPage :selectedPerson="selectedPerson"/>
    </div>

    <ErrorPage v-else/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from "./Pagination.vue";
import { checkResponse } from "../utils/utils";
import InfoPage from "../pages/InfoPage.vue";
import ErrorPage from "./ErrorPage.vue";

export default {
  name: "People",
  components: { Pagination, InfoPage, ErrorPage },

  data() {
    return {
      personList: [],
      selectedPerson: {},
      total: 0,
      isLoading: false,
      isError: false
    };
  },
  computed: { ...mapGetters(["getUrl", "checkObj", "checkErr"]) },
  methods: {
    async loadPeople(pageNumber) {
      this.isLoading = true;

       fetch(`${this.getUrl}/people/?page=${pageNumber}`)
        .then(checkResponse)
        .then((res) => {
          this.total = res.count;
          this.personList = res.results.map((el, index) => ({ ...el, id: index + 1 }));
          this.selectedPerson = this.personList.at(0);
        })
        .catch((e) => this.catchError(e))
        .finally(() => { this.isLoading = false });
    },
    setPerson(obj) {
      this.selectedPerson = obj;
    },
    catchError(err) {
      this.isError = true;
      this.$store.dispatch("updateError", err);
    },
  },
};
</script>

<style lang="scss">
.people {
  .container {
    display: flex;
    justify-content: space-between;
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

      .column {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
          margin: 15px 0 15px 0;
        }
      }

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
        cursor: pointer;
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
