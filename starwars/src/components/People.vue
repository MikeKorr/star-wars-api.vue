<template>
  <div class="people">
    <div class="container" v-if="!isError">
      <div class="list">
        <Loader v-if="isLoading" />
        <div class="list-container" v-else>
          <p v-for="(person, index) of personList" :key="index">
            <a @click="setPerson(person)" class="list-elem"
              >{{ index + 1 }}. {{ person.name }}</a
            >
          </p>
        </div>

        <Pagination :total="total" :disabled="isLoading" @change="loadPeople" />
      </div>

      <InfoPage class="infopage" :selectedPerson="selectedPerson" />
    </div>

    <ErrorPage v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from "./Pagination.vue";
import { checkResponse } from "../utils/utils";
import InfoPage from "../pages/InfoPage.vue";
import ErrorPage from "./ErrorPage.vue";

import Loader from "./Loader.vue";

export default {
  name: "People",
  components: { Pagination, InfoPage, ErrorPage, Loader },

  data() {
    return {
      personList: [],
      selectedPerson: {},
      total: 0,
      isLoading: false,
      isError: false,
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
          this.personList = res.results.map((el, index) => ({
            ...el,
            id: index + 1,
          }));
          this.selectedPerson = this.personList.at(0);
        })
        .catch((e) => this.catchError(e))
        .finally(() => {
          this.isLoading = false;
          this.$store.dispatch("updateObject", this.selectedPerson);
        });
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

    .infopage {
      width: 40%;
    }

    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;

      width: 40%;
      border: 3px solid #ffe81f;
      border-radius: 2px;

      .list-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        .list-elem {
          text-align: left;
          max-width: 180px;
          color: white;
          font-size: 18px;
          font-weight: 600;
          margin: 30px 0 10px 20px;
          border: 2px solid black;
          border-radius: 6px;
          text-decoration: none;
          cursor: pointer;
        }
      }

      .active {
        color: #ffe81f;
      }

      .list-elem:hover {
        box-shadow: #ffe81f 0px 5px 15px;
      }
    }
    .info {
      display: flex;
      align-items: center;
      margin: 0 auto;

      width: 40%;
      border: 3px solid #ffe81f;
      border-radius: 2px;
    }
  }
}
</style>
