<template>
  <ul class="pagination">
    <li v-for="page in totalPages" :key="page">
      <router-link :to="`/people/?page=${currentPage}`">
        <button
          :class="{ 'pagination__btn-active': currentPage === page }"
          class="pagination__btn"
          :disabled="disabled"
          @click="changePage(page)"
        >
          {{ page }}
        </button>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    total: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      default: 10,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.limit);
    },
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
      this.$emit("change", pageNumber);
    },
  },
  created() {
    if (this.$route.query.page) {
      this.changePage(Number(this.$route.query.page));
    }
  },
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  list-style-type: none;

  &__btn {
    background-color: #ffe81f;
    border: 1px solid black;
    margin-right: 3px;
    font-size: 16px;
    font-weight: 600;

    &-active {
      background-color: white;
      border: 1px solid black;

      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>
