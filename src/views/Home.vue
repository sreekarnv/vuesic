<template>
  <div class="container d-flex flex-column justify-content-center align-items-center pt-4">
    <h1 class="fw-bold text-dark ">Vuesic</h1>

    <button
      v-if="!user"
      @click="loginUser"
      class="btn btn-gradient mt-3 mb-4"
    >Log in / Sign Up</button>
    <router-link
      v-else
      to="/dashboard"
      class="btn btn-gradient mt-3 mb-4"
    >Go to dashboard</router-link>
    <img
      class="img-fluid home-bg-image"
      src="../assets/home.png"
      alt="home-bg"
    >
  </div>
  <p class="mt-5 text-center">Built with
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
</template>

<script lang="ts">
import { computed, defineComponent, onUpdated } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();

    const loginUser = async () => {
      await store.dispatch("loginUser");
      router.replace("/dashboard");
    };

    return {
      loginUser,
      user: computed(() => store.state.auth.user),
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
