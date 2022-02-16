import { createStore } from 'vuex';
import authModule from './modules/auth';
import musicModule from './modules/music';

export default createStore({
	modules: {
		auth: authModule,
		music: musicModule,
	},
});
