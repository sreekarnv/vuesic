<template>
  <div class="container d-flex flex-column justify-content-center align-items-center pt-4">
    <h1 class="mb-4">Home Page</h1>
    <button
      @click="loginUser"
      class="btn btn-gradient"
    >Log in / Sign Up</button>
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
