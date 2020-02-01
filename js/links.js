const links = {
	'Twitter':'https://twitter.com/LucienCatonnet',
	'LinkedIn':'https://www.linkedin.com/in/luciencatonnet',
	'GitHub':'https://github.com/Lyatus',
	'itch.io':'http://lutopia.itch.io',
};

window.addEventListener('load', function() {
	const links_element = document.getElementById('links');
	for(let key in links) {
		links_element.innerHTML += link(key,links[key]);
	}
});
