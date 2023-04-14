<template>
	<div class="container-fluid h-100">
		<div class="row h-100">
			<div class="col-md-4 col-xl-3 order-2 order-md-1 sidebar-container">
				<dashboard-sidebar></dashboard-sidebar>
			</div>
			<div
				:class="!currentSong ? 'd-none d-md-block' : ''"
				class="col-md-8 col-xl-9 order-md-2"
			>
				<dashboard-main></dashboard-main>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import DashboardMain from '../components/dashboard-main.vue';
import DashboardSidebar from '../components/dashboard-sidebar.vue';
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
	components: { DashboardSidebar, DashboardMain },
	setup() {
		const store = useStore();

		return {
			currentSong: computed(() => store.state.music.currentSong),
		};
	},
});
</script>

<style lang="scss" scoped>
.sidebar-container {
	border-right: 1px solid #dee2e6;
}
</style>
