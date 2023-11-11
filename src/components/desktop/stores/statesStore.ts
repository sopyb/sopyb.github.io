import {
  writable
} from 'svelte/store';

export const loading = writable(true);
export const locked = writable(false);
export const activeWorkspace = writable(0);
export const focusedWindow = writable('');


export const time = writable(new Date());
export const timeString = writable('00:00');
export const dateString = writable('00/00/0000');

setInterval(() => {
  const now = new Date();
  time.set(now);
  timeString.set(now.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))
  // day of the week, day of the month, month short, year;
  dateString.set(now.toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }))
}, 1000);