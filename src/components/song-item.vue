<template>
	<li
		@click="toggleActive"
		:class="currentSong?.id === song.id ? 'music-item--active' : ''"
		class="list-group-item music-item"
	>
		<div class="d-flex align-items-center">
			<img
				class="img-thumbnail music-item__image"
				:src="song.photo"
				alt="Music Item"
			/>
			<div class="ps-3">
				<h5 class="m-0 fw-bold text-truncate">{{ song.name }}</h5>
				<div class="d-flex align-items-center">
					<p class="m-0 text-muted fw-bold text-truncate">
						{{ song.artist.name }}
					</p>
				</div>
				<small v-if="currentSong?.id === song.id" class="text-primary"
					>Playing..</small
				>
			</div>
		</div>
	</li>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
	name: 'song-item',
	props: ['song'],
	setup(props) {
		const store = useStore();

		const toggleActive = () => {
			store.commit('playSong', props.song);
		};

		return {
			toggleActive,
			currentSong: computed(() => store.state.music.currentSong),
		};
	},
});
</script>

<style lang="scss" scoped>
.music-item {
	background-color: transparent;
	cursor: pointer;
	border: none;
	border-radius: 0.75rem;
	margin-bottom: 1rem;
	transition: all 0.3s ease-out;

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	&--active {
		background-color: rgba(0, 0, 0, 0.1);
	}

	&__image {
		height: 5rem;
		width: 5rem;
		border: none;
		background: transparent;
		border-radius: 0.75rem;
	}
}
</style>
