import { User } from 'firebase/auth';

export interface AuthState {
	user: null | User;
	loginError: any;
	loginLoading: boolean;
}

export interface RootState {
	auth: AuthState;
	music: any;
}
