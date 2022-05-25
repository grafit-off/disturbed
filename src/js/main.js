document.addEventListener("DOMContentLoaded", () => {
	// Includes
	// @include('components/_variables.js');
	// @include('components/_foo.js');
	// @include('resources/_burger.js');
	// -- //

	if (media.matches) {
		burgerBtn.setAttribute('aria-hidden', false);
		nav.setAttribute('aria-hidden', true);
	}

	const player = new OpenPlayerJS('audio-hero', {
		controls: {
			alwaysVisible: true,
			layers: {
				left: ['play', 'progress', 'time'],
				middle: [],
				right: [],
			}
		},
		mode: 'responsive',
		startVolume: 0.05,
		startTime: 0,
		onError: (e) => console.error(e),
	});

	player.init();
})