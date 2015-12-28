var main = null;
var currentPage = "none";

function link(name,url){
	return '<a class="link" href="'+url+'" target="_blank">'+name+'</a>';
}
function capitalize(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
function start(){
	main = document.getElementById('main');
	var linksElement = document.getElementById('links');
	for(var key in links)
		linksElement.innerHTML += link(key,links[key]);
	loadPage((hash())?hash():'home');
}

/* Page */
function loadPage(key){
	if(currentPage==key) return;
	else currentPage = key;
	if(!pages[key]){ // It's not a standard page: it's a project
		pages[key] = projects[key];
		pages[key].title = getProjectTitle(key);
		pages[key].subtitle = getProjectPeriod(key);
		pages[key].thumbnail = getProjectThumbnail(key);
	}
	if(typeof pages[key] == 'function') pages[key] = pages[key](); // Execute function if dynamic content
	if(typeof pages[key] != 'string'){
		var page = pages[key];
		var tmp = '';
		if(page.thumbnail) tmp += '<img class="thumbnail single" src="'+page.thumbnail+'"/>';
		if(page.title){
			tmp += '<h1 class="title background">'+page.title;
			if(page.subtitle) tmp += '<span>'+page.subtitle+'</span>';
			tmp += '</h1>';
		}
		if(page.media){
			tmp += '<div id="media">';
			for(var m in page.media)
				if(page.media[m].img)
					tmp += '<img src="'+page.media[m].img+'"/>';
				else if(page.media[m].yt)
					tmp += '<iframe width="420" height="236" src="https://www.youtube.com/embed/'+page.media[m].yt+'" frameborder="0" allowfullscreen></iframe>';
			tmp += '</div>';
		}
		if(page.content)
			tmp += page.content;
		if(page.team){
			tmp += '<h2>Team</h2><p>';
			for(var m in page.team){
				var name = page.team[m];
				var member = people[name];
				if(!member) continue;
				tmp += '<b>'+name+'</b>'
				if(member.role) tmp += ' ('+member.role+')';
				if(member.links){
					tmp += ': ';
					for(var i in member.links)
						tmp += link(i,member.links[i]);
				}
				tmp += '<br/>';
			}
			tmp += '</p>';
		}
		if(page.links){
			tmp += '<div id="page_links">';
			for(var i in page.links)
				tmp += link(i,page.links[i]);
			tmp += '</div>';
		}
		pages[key] = tmp;
	}
	main.style.opacity = 0;
	setTimeout(function(){
		main.innerHTML = pages[key];
		main.style.opacity = 1;
		location = "#"+key;
		ga('send','pageview',location.pathname+location.hash);
	},64);
}

// History
function hash(){
	if(location.hash)
		return location.hash.substr(1);
	else return null;
}
function hashchange(){
	var h = hash();
	if(h) loadPage(h);
}