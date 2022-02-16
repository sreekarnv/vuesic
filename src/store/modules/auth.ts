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
		logoutLoading: false,
	},
	actions: {
		async checkAuth(store) {
			onAuthStateChanged(auth, (u) => {
				if (u) {
					store.commit('setUser', u);
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
			store.commit('toggleLogoutLoading');
			await auth.signOut();
			store.commit('setUser', null);
			store.commit('toggleLogoutLoading');
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
		toggleLogoutLoading(state) {
			state.logoutLoading = !state.logoutLoading;
		},
	},
};

export default authModule;
