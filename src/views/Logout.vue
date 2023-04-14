<template>
	<div>loading....</div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
	setup() {
		const router = useRouter();
		const store = useStore();

		onBeforeMount(async () => {
			await store.dispatch('logoutUser');
		});

		onMounted(() => {
			router.replace('/');
		});

		return {};
	},
});
</script>
