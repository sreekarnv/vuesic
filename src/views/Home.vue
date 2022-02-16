<template>
  <div class="container d-flex flex-column justify-content-center align-items-center pt-4">
    <h1 class="fw-bold text-dark ">Vuesic</h1>
    <p class="mb-4">Built with
      <a
        href="https://vuejs.org/"
        class="text-primary"
      >
        Vue Js
      </a>
      and
      <a
        class="text-primary"
        href="https://firebase.google.com/"
      >
        Firebase
      </a>
    </p>
    <button
      @click="loginUser"
      class="btn btn-gradient mb-5"
    >Log in / Sign Up</button>
    <img
      class="img-fluid home-bg-image"
      src="../assets/home.jpg"
      alt="home-bg"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const store = useStore();

    return {
      loginUser: () => store.dispatch("loginUser"),
    };
  },
});
</script>

<style lang="scss" scoped>
.home-bg-image {
  height: 550px;

  @media screen and (max-width: 768px) {
    height: 400px;
  }
}
</style>
