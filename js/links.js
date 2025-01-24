const links = {
	'🐘Mastodon':'https://mastodon.social/@lutopia',
	'👩‍💼LinkedIn':'https://www.linkedin.com/in/lucatonnet',
	'💾GitHub':'https://github.com/lut0pia',
	'🎮itch.io':'http://lutopia.itch.io',
	'🎶SoundCloud':'https://soundcloud.com/clean-tonic-tune',
	'🐋MobyGames':'https://www.mobygames.com/person/928174',
};

window.addEventListener('load', function() {
	const links_element = document.getElementById('links');
	for(let key in links) {
		links_element.innerHTML += link(key,links[key]);
	}
});
