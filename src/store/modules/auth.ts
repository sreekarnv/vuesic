import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
} from 'firebase/auth';
import { auth } from '@/config/firebase';
import { Module } from 'vuex';
import { AuthState, RootState } from '../types';

const authModule: Module<AuthState, RootState> = {
	state: {
		user: null,
		loginError: null,
		loginLoading: false,
	},
	actions: {
		async checkAuth(store) {
			const unsubscribe = onAuthStateChanged(auth, (u) => {
				if (u) {
					store.commit('setUser', u);
					unsubscribe();
				}
			});
		},
		async loginUser(store) {
			store.commit('toggleLoginLoading');
			try {
				await signInWithPopup(auth, new GoogleAuthProvider());
			} catch (err) {
				store.commit('setLoginError', err);
			}
			store.commit('toggleLoginLoading');
		},
		async logoutUser(store) {
			await auth.signOut();
			store.commit('setUser', null);
		},
	},
	getters: {},
	mutations: {
		setUser(state, user) {
			state.user = user;
		},
		setLoginError(state, error) {
			state.loginError = error;
		},
		toggleLoginLoading(state) {
			state.loginLoading = !state.loginLoading;
		},
	},
};

export default authModule;
