<template>
  <div>
    <div>
      <ul class="flex">
        <li v-for="pers in totalPages" :key="pers">
          <router-link :to="`/people/?page=${changedPage}`"
            ><button
              :class="{ actClass: changedPage === pers }"
              class="btn-pagination"
              @click="changePage(pers)"
            >
              {{ pers }}
            </button></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["total", "item"],
  data() {
    return {
      changedPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.item);
    },
  },
  created() {
    if (this.$route.query.page) {
      this.changePage(this.$route.query.page);
    }
  },
  methods: {
    changePage(pageNumber) {
      this.changedPage = pageNumber;
      this.$emit("pageChanged", pageNumber);
    },
  },
};
</script>

<style lang="scss">
.flex {
  display: flex;
  list-style-type: none;

  .btn-pagination {
    background-color: #ffe81f;
    color: black;
    border: 1px solid black;
    margin-right: 3px;
    font-size: 16px;
    font-weight: 600;
  }

  .actClass {
    background-color: white;
    color: black;
    border: 1px solid black;

    font-size: 16px;
    font-weight: 600;
  }
}
</style>
