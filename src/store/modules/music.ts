import { db } from '@/config/firebase';
import { query, collection, getDocs } from 'firebase/firestore';
import { Module } from 'vuex';
import { MusicState, RootState } from '../types';

const musicModule: Module<MusicState, RootState> = {
	state: {
		songs: [],
		currentSong: null,
	},
	actions: {
		async fetchSongs(store) {
			const q = query(collection(db, 'songs'));
			const snapShot = await getDocs(q);
			const songsData: any = [];
			snapShot.forEach((doc) => {
				songsData.push({
					isPlaying: false,
					id: doc.id,
					...doc.data(),
				});
			});
			store.commit('setSongs', songsData);
		},
	},
	getters: {},
	mutations: {
		setSongs(state, songs) {
			state.songs = songs;
		},
		playSong(store, song) {
			store.currentSong = {
				...song,
				isPlaying: true,
			};
		},
		toggleCurrentSong(state) {
			if (state.currentSong) {
				state.currentSong.isPlaying = !state.currentSong.isPlaying;
			}
		},
	},
};

export default musicModule;
