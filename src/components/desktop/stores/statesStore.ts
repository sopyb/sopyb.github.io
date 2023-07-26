import {
  writable
} from 'svelte/store';

export const loading = writable(true);
export const activeWorkspace = writable(0);
export const focusedWindow = writable('');