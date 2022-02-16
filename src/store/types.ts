import { User } from 'firebase/auth';

export interface AuthState {
	user: null | User;
	loginError: any;
	loginLoading: boolean;
	logoutLoading: boolean;
}

export type Artist = {
	name: string;
	photo: string;
};

export type Song = {
	file: string;
	id: string;
	photo: string;
	name: string;
	isPlaying: boolean;
	artist: Artist;
};

export interface MusicState {
	currentSong: Song | null;
	songs: Song[];
}

export interface RootState {
	auth: AuthState;
	music: MusicState;
}
