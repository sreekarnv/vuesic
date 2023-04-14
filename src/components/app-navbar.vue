<template>
	<nav class="navbar main-navbar navbar-expand fixed-top navbar-light bg-light">
		<div class="container-fluid">
			<router-link class="fw-bold text-muted navbar-brand" to="/"
				>Vuesic</router-link
			>

			<ul v-if="user" class="navbar-nav ms-auto">
				<li class="nav-item">
					<img
						class="img-fluid rounded-circle avatar"
						:src="user.photoURL"
						:alt="user.displayName"
					/>
				</li>

				<li class="nav-item">
					<router-link
						to="/logout"
						role="button"
						class="nav-link logout rounded-circle p-2 btn-sm ms-3 text-danger fw-bold btn btn-outline-danger"
						data-bs-toggle="tooltip"
						data-bs-placement="top"
						title="Logout"
					>
						<span class="visually-hidden">Logout</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							width="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							/>
						</svg>
					</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
	name: 'app-navbar',
	setup() {
		const store = useStore();

		return {
			user: computed(() => store.state.auth.user),
			loginUser: () => store.dispatch('loginUser'),
		};
	},
});
</script>

<style lang="scss" scoped>
.main-navbar {
	padding: 1rem 2rem;
	border-bottom: 1px solid #dee2e6;

	@media (max-width: 576px) {
		padding: 0.65rem 0.85rem;
	}
}

.avatar {
	height: 44px;
	width: 44px;
}

.logout {
	border: 2px solid var(--bs-danger);

	svg {
		fill: none;
		stroke: var(--bs-danger);
	}

	&:hover,
	&:focus {
		svg {
			stroke: var(--bs-light);
		}
	}
}
</style>
