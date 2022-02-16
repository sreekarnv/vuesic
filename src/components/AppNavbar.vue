<template>
  <nav class="navbar main-navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <div class="container-fluid">
      <router-link
        class="fw-bold text-muted navbar-brand"
        to="/"
      >Vuesic</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarNav"
        v-if="user"
      >
        <ul class="navbar-nav ms-auto">

          <li class="nav-item">
            <img
              class="img-fluid rounded-circle avatar"
              :src="user.photoURL"
              :alt="user.displayName"
            >
          </li>

          <li class="nav-item">
            <a
              @click="logoutUser"
              href="#"
              role="button"
              class="nav-link ms-3 text-danger fw-bold"
              to="/dashboard"
            >Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "app-navbar",
  setup() {
    const store = useStore();

    return {
      user: computed(() => store.state.auth.user),
      loginUser: () => store.dispatch("loginUser"),
      logoutUser: () => store.dispatch("logoutUser"),
    };
  },
});
</script>


<style lang="scss" scoped>
.main-navbar {
  padding: 1rem 2rem;
  border-bottom: 1px solid #dee2e6;
}

.avatar {
  height: 40px;
  width: 40px;
}
</style>
