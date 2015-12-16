function start(){
	var pagesElement = document.getElementById('pages');
	for(var key in pages)
		pagesElement.innerHTML += '<a class="link" onclick="loadPage(\''+key+'\')" target="_blank">'+key+'</a>';
	var linksElement = document.getElementById('links');
	for(var key in links)
		linksElement.innerHTML += '<a class="link" href="'+links[key]+'" target="_blank">'+key+'</a>';
	loadPage();
}

/* Page */
function loadMain(page){
	var tmp = '';
	if(typeof page == 'function') page = page(); // Execute function if dynamic content
	if(page.thumbnail) tmp += '<img class="thumbnail single" src="'+page.thumbnail+'"/>';
	if(page.title) tmp += '<h1 class="title background">'+page.title+'</h1>';
	if(page.images){
		tmp += '<div id="images">';
		for(var image in page.images)
			tmp += '<img src="'+page.images[image]+'"/>';
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
	document.getElementById('main').innerHTML = tmp;
}
function loadPage(key){
	loadMain(pages[key||Object.keys(pages)[0]]);
}

/* Project */
function loadProject(key){
	var page = {
		'thumbnail':getProjectThumbnail(key),
		'title':getProjectTitle(key)
	};
	if(projects[key].images)
		page.images = projects[key].images;
	if(projects[key].content)
		page.content = projects[key].content;
	if(projects[key].links)
		page.links = projects[key].links
	loadMain(page);
}
function getProjectThumbnail(key){
	return (projects[key].thumbnail)?projects[key].thumbnail:'img/logo.png';
}
function getProjectTitle(key){
	return (projects[key].title)?projects[key].title:capitalize(key);
}
function capitalize(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
