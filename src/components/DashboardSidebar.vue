<template>
  <aside class="sidebar">
    <ul
      v-if="songs.length"
      class="list-group top-0 pt-4"
    >
      <song-item
        v-for="song in songs"
        :key="song.id"
        :song="song"
      ></song-item>
    </ul>
    <div v-else>
      Loading...
    </div>
  </aside>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import SongItem from "./SongItem.vue";

export default defineComponent({
  components: { SongItem },
  name: "dashboard-sidebar",
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("fetchSongs");
    });

    return {
      songs: computed(() => store.state.music.songs),
    };
  },
});
</script>
