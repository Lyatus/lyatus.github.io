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
	if(page.thumbnail) tmp += '<img class="thumbnail single" src="'+page.thumbnail+'"/>';
	if(page.title) tmp += '<h1 class="title background">'+page.title+'</h1>';
	if(page.content){
		if(typeof page.content == 'function') page.content = page.content(); // Execute function if dynamic content
		tmp += page.content;
	}
	document.getElementById('main').innerHTML = tmp;
}
function loadPage(key){
	if(!key) key = Object.keys(pages)[0];
	loadMain(pages[key]);
}

/* Project */
function loadProject(key){
	var page = {
		'thumbnail':getProjectThumbnail(key),
		'title':getProjectTitle(key)
	};
	page.content = '';
	if(projects[key].images){
		page.content += '<div id="images">';
		for(var image in projects[key].images)
			page.content += '<img src="'+projects[key].images[image]+'"/>';
		page.content += '</div>';
	}
	if(projects[key].content)
		page.content += projects[key].content;
	if(projects[key].links){
		page.content += '<p>';
		for(var link in projects[key].links)
			page.content += '<a class="link" href="'+projects[key].links[link].url+'" target="_blank">'+projects[key].links[link].name+'</a>';
		page.content += '</p>';
	}
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