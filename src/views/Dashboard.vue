<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-md-2 sidebar-container">
        <dashboard-sidebar></dashboard-sidebar>
      </div>
      <div class="col-md-10">
        <dashboard-main></dashboard-main>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import DashboardMain from "@/components/DashboardMain.vue";
import DashboardSidebar from "@/components/DashboardSidebar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { DashboardSidebar, DashboardMain },
  setup() {
    return {};
  },
});
</script>


<style lang="scss" scoped>
.sidebar-container {
  border-right: 1px solid #dee2e6;
}
</style>