<template>
  <div class="modal">
    <span class="title">{{ error }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NoInfoPage",
  data() {
    return {
      error: "",
    };
  },
  created() {
    this.createErr();
  },

  computed: { ...mapGetters(["checkErr"]) },
  methods: {
    createErr() {
      this.error = this.checkErr;
    },
  },
};
</script>

<style lang="scss">
.modal {
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
    font-size: 30px;
  }

  .img-box {
    height: 300px;
    width: 300px;
  }
}
</style>
