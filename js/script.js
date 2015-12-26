var main = null;
var currentPage = "none";
function start(){
	main = document.getElementById('main');
	var linksElement = document.getElementById('links');
	for(var key in links)
		linksElement.innerHTML += '<a class="link" href="'+links[key]+'" target="_blank">'+key+'</a>';
	loadPage();
}

/* Page */
function loadPage(key){
	if(currentPage==key) return;
	else currentPage = key;
	if(!key) key = Object.keys(pages)[0];
	if(!pages[key]){ // It's not a standard page: it's a project
		pages[key] = projects[key];
		pages[key].title = getProjectTitle(key);
		pages[key].thumbnail = getProjectThumbnail(key);
	}
	if(typeof pages[key] == 'function') pages[key] = pages[key](); // Execute function if dynamic content
	if(typeof pages[key] != 'string'){
		var page = pages[key];
		var tmp = '';
		if(page.thumbnail) tmp += '<img class="thumbnail single" src="'+page.thumbnail+'"/>';
		if(page.title) tmp += '<h1 class="title background">'+page.title+'</h1>';
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
		if(page.links){
			tmp += '<div id="page_links">';
			for(var link in page.links)
				tmp += '<a class="link" href="'+page.links[link].url+'" target="_blank">'+page.links[link].name+'</a>';
			tmp += '</div>';
		}
		pages[key] = tmp;
	}
	main.style.opacity = 0;
	setTimeout(function(){
		main.innerHTML = pages[key];
		main.style.opacity = 1;
	},64);
}

/* Project */
function getProjectThumbnail(key){
	return (projects[key].thumbnail)?projects[key].thumbnail:'img/logo.png';
}
function getProjectTitle(key){
	return (projects[key].title)?projects[key].title:capitalize(key);
}
function capitalize(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
