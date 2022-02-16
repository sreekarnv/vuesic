<template>
  <div
    v-if="currentSong"
    class="py-4 container"
  >
    <div class="d-flex flex-column justify-content-center align-items-center music-content pt-5">
      <div class="d-flex align-items-center mb-3 me-auto">
        <img
          class="avatar"
          :src="currentSong.artist.photo"
          :alt="currentSong.artist.name"
        >
        <p class="ms-2 mb-0 text-muted fw-bold">{{ currentSong.artist.name }}</p>

      </div>
      <img
        class="img-fluid rounded music-cover"
        :src="currentSong.photo"
        alt="Music Cover"
      >
      <h2 class="text-start align-self-start mt-2 mb-3 fw-bold text-dark">{{ currentSong.name }}</h2>
      <div>
        <audio
          ref="audio"
          preload
          :src="currentSong.file"
          id="music"
          autoplay
          @timeupdate="handleProgress"
        />

        <div class="d-flex align-items-center">
          <div
            @click="handleSeekbar"
            ref="progress"
            class="progress progress-width"
          >
            <div
              ref="progressBar"
              class="progress-bar bg-success progress-bar-striped"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>

        </div>
        <div class="mb-4 d-flex justify-content-between">
          <small class="fw-bold text-muted">{{ currentTime }} </small>
          <small class="fw-bold text-muted">{{ totalTime }} </small>
        </div>

        <div class="text-center">
          <button
            @click="toggleMusic"
            class="btn btn-success mb-5"
            :disabled="currentTime === '00:00'"
          >
            <span v-if="isPlaying">Pause</span>
            <span v-else>
              Play
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { calcTime } from "@/utils/calcTime";
import { computed, defineComponent, onUpdated, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "dashboard-main",
  setup() {
    const audio = ref<HTMLAudioElement>();
    const progressBar = ref<HTMLDivElement>();
    const progress = ref<HTMLDivElement>();
    const currentTime = ref(`00:00`);
    const totalTime = ref(`00:00`);
    const store = useStore();

    const toggleMusic = () => {
      if (audio.value) {
        audio.value.paused ? audio.value.play() : audio.value.pause();
        store.commit("toggleCurrentSong");
      }
    };

    const handleProgress = () => {
      if (audio.value) {
        currentTime.value = calcTime(audio.value.currentTime) || "";

        const percent = (audio.value.currentTime / audio.value.duration) * 100;
        progressBar.value!.style.width = `${percent}%`;

        if (percent === 100) {
          store.commit("toggleCurrentSong");
        }
      }
    };

    const handleSeekbar = (e: any) => {
      const width = progress.value!.offsetWidth;
      if (audio.value && progressBar.value) {
        const x = e.offsetX;
        progressBar.value.style.width = `${(x / width) * 100}%`;
        currentTime.value =
          calcTime(audio.value.duration * (x / width)) || "00:00";
        audio.value.currentTime = audio.value.duration * (x / width);
      }
    };

    onUpdated(() => {
      if (totalTime.value && audio.value) {
        totalTime.value = calcTime(audio.value.duration) || `00:00`;
      }
    });

    return {
      audio,
      progressBar,
      progress,
      toggleMusic,
      handleProgress,
      handleSeekbar,
      currentTime,
      totalTime,
      currentSong: computed(() => store.state.music.currentSong),
      songs: computed(() => store.state.music.songs),
      isPlaying: computed(() => store.state.music.currentSong?.isPlaying),
    };
  },
});
</script>


<style lang="scss">
.music-content {
  max-width: 350px;
  margin: 0 auto;
}

.music-cover {
  height: 350px;
  width: 350px;
}

.avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.progress-width {
  cursor: pointer;
  width: 350px;
}
</style>