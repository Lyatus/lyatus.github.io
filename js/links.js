const links = {
	'🐤Twitter':'https://twitter.com/lutopia_t',
	'🐘Mastodon':'https://mastodon.social/@lutopia',
	'👩‍💼LinkedIn':'https://www.linkedin.com/in/lucatonnet',
	'💾GitHub':'https://github.com/Lyatus',
	'🎮itch.io':'http://lutopia.itch.io',
	'🎶SoundCloud':'https://soundcloud.com/clean-tonic-tune',
};

window.addEventListener('load', function() {
	const links_element = document.getElementById('links');
	for(let key in links) {
		links_element.innerHTML += link(key,links[key]);
	}
});
