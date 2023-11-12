import { activeWorkspace, windows } from '@src/components/desktop/stores/statesStore';
import { get } from 'svelte/store';

export interface DesktopWindow {
	id: string;
	url: string;
	title: string;
	icon: string;
	workspace: number;
	width: number;
	height: number;
	x: number;
	y: number;
	renderZ: number;
	relatedIframe: HTMLIFrameElement;
}

export function openWindow(url: string) {
	windows.update((value: DesktopWindow[]) => {
		let newWindow: DesktopWindow = {
			id: Math.random().toString(36).substring(2, 9),
			url,
			title: 'New Window',
			icon: 'favicon.png',
			workspace: get(activeWorkspace),
			width: 800,
			height: 600,
			x: 0,
			y: 100,
			renderZ: 0,
			relatedIframe: document.createElement('iframe')
		};

		while (value.find((window) => window.id === newWindow.id)) {
			newWindow.id = Math.random().toString(36).substring(2, 9);
		}

		newWindow.relatedIframe.src = url;
		newWindow.relatedIframe.style.width = newWindow.width + 'px';
		newWindow.relatedIframe.style.height = newWindow.height + 'px';

		return [...value, newWindow];
	});
}

export function updateWindow(id: string, newWindow: DesktopWindow) {
	windows.update((value: DesktopWindow[]) => {
		return value.map((e) => {
			if (e.id === id) {
				return newWindow;
			}
			return e;
		});
	});
}

export function closeWindow(id: string) {
	let window = get(windows).find((window) => window.id === id);

	// delete the iframe from the DOM
	window?.relatedIframe?.remove();

	windows.update((value: DesktopWindow[]) => {
		return value.filter((window) => window.id !== id);
	});
}

export function moveWindowToTop(id: string) {
	windows.update((value: DesktopWindow[]) => {
		// increase the index of all windows
		value.forEach((window) => window.renderZ++);

		// find the window we want to move to the top
		const window = value.find((window) => window.id === id);

		// if the window exists
		if (window) {
			// set the renderZ to 0
			window.renderZ = 0;
		}

		// return the new array
		return value;
	});
}
