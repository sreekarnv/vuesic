<template>

  <div
    class="vh-100 d-flex justify-content-center align-items-center"
    v-if="loginLoading || logoutLoading"
  >
    <div
      class="spinner-border text-primary"
      style="width: 3rem; height: 3rem;"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div v-else>
    <app-navbar></app-navbar>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount } from "vue";
import { useStore } from "vuex";
import AppNavbar from "./components/AppNavbar.vue";

export default defineComponent({
  components: {
    AppNavbar,
  },
  name: "App",
  setup() {
    const store = useStore();

    onBeforeMount(async () => {
      await store.dispatch("checkAuth");
    });

    return {
      loginLoading: computed(() => store.state.auth.loginLoading),
      logoutLoading: computed(() => store.state.auth.logoutLoading),
    };
  },
});
</script>
