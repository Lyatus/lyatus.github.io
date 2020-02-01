let main = null;
let currentPage = "none";

function link(name, url) {
	return '<a class="link" href="'+url+'" target="_blank">'+name+'</a>';
}
function capitalize(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
function imgload(e) {
	const img = e.srcElement;
	if(img.width<img.naturalWidth) {
		img.classList.add('clickable');
		img.onclick = function(e){window.open(e.srcElement.src,"_blank")};
	}
}
window.addEventListener('load', function() {
	main = document.getElementById('main');
	const links_element = document.getElementById('links');
	for(let key in links) {
		links_element.innerHTML += link(key,links[key]);
	}
	loadPage(hash() || 'home');
});
window.addEventListener('hashchange', function() {
	loadPage(hash() || 'home');
});

/* Page */
function loadPage(key) {
	if(currentPage==key) return;
	else currentPage = key;
	if(typeof pages[key] == 'function') pages[key] = pages[key](); // Execute function if dynamic content
	if(typeof pages[key] != 'string') {
		let page = pages[key];
		let tmp = '';
		if(page.title) {
			tmp += '<div class="block background title">'
			if(page.thumbnail) tmp += '<img class="thumbnail" src="'+page.thumbnail+'"/>';
			tmp += '<span>'+page.title+'</span>';
			if(page.subtitle) tmp += '<span class="bottom">'+page.subtitle+'</span>';
			tmp += '</div>';
		}
		if(page.media){
			tmp += '<div id="media">';
			for(var m in page.media)
				if(page.media[m].img)
					tmp += '<img onload="imgload(event)" src="'+page.media[m].img+'"/>';
				else if(page.media[m].yt)
					tmp += '<iframe width="420" height="236" src="https://www.youtube.com/embed/'+page.media[m].yt+'" frameborder="0" allowfullscreen></iframe>';
			tmp += '</div>';
		}
		if(page.content)
			tmp += page.content;
		if(page.team){
			tmp += '<h2>Teammates</h2><p>';
			for(let team_member of page.team) {
				const info = people[team_member.name];
				if(!info) continue;
				tmp += '<b>'+team_member.name+'</b>'
				if(team_member.role) tmp += ' ('+team_member.role+')';
				if(info.links) {
					tmp += ': ';
					for(let i in info.links)
						tmp += link(i,info.links[i]);
				}
				tmp += '<br/>';
			}
			tmp += '</p>';
		}
		if(page.links) {
			tmp += '<div id="page_links">';
			for(let i in page.links) {
				tmp += link(i,page.links[i]);
			}
			tmp += '</div>';
		}
		pages[key] = tmp;
	}
	main.innerHTML = pages[key];
	window.scrollTo(0,0);
	location = "#"+key;
}

// History
function hash() {
	return location.hash && location.hash.substr(1);
}
