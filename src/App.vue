<template>
  <app-navbar></app-navbar>
  <div class="main">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import AppNavbar from "./components/AppNavbar.vue";

export default defineComponent({
  components: {
    AppNavbar,
  },
  name: "App",
  setup() {
    const store = useStore();
    store.dispatch("checkAuth");
    return {};
  },
});
</script>
