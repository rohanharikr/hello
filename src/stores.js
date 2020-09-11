import { writable } from 'svelte/store';

export const tags = writable([
		{id: 1, name: "Design"},
		{id: 2, name: "Frontend"},
		{id: 3, name: "Backend"}
	]);