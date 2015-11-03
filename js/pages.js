var pages = {
	'Projects':{'content':function(){
		var wtr = '';
		for(var key in projects)
			wtr += '<a class="block background" onclick="loadProject(\''+key+'\')"><img class="thumbnail" src="'+getProjectThumbnail(key)+'"><span>'+getProjectTitle(key)+'</span></a>';
		return wtr;
	}},
	'Curriculum':{
		'title':'Curriculum',
		'content':
			'<p><img style="max-width:128px;float:right;" src="img/photo.jpg">My name is Lucien Catonnet and I\'m a 21 year-old video game programming student at <a href="/enjmin">ENJMIN</a>. Before that, I studied computer science for three years at Jules Verne\'s University of Picardy. On this website I\'m putting most of the projects I\'ve worked on and writing what my work was in it. Feel free to contact me if you want to know more.</p>'
			+'<h2>Interests</h2>'
			+'<p>I love spending my time watching TV shows and movies (mostly TV shows recently). What drives me the most is clearly programming though, and especially everything low-level.</p>'
	},
	'Skills':{
		'title':'Skills',
		'content':
			'<h2>Languages</h2>'
			+'<p>C/C++, C#, Java, PHP, JavaScript, GLSL</p>'
			+'<h2>Middleware</h2>'
			+'<p>Unreal Engine 4, Visual Studio, Unity, Github, Code::blocks</p>'
			+'<h2>Libraries</h2>'
			+'<p>OpenGL, Wwise</p>'
			+'<h2>Spoken languages</h2>'
			+'<p>French (mother tongue), English (fluent)</p>'
	}
	/*'ENJMIN':
		'<h1>ENJMIN</h1>'
		+'<p><img src="img/enjmin/logo.jpg">ENJMIN (Ecole Nationale du Jeu et des Médias Interactifs Numériques) is a public video game school located in Angoulême, France. You can find their website and a bundle containing games made by their students in the links below. I\'m currently a student there in my first year of a Master\'s Degree and I\'m very fond of the way the school allows us to work with different fields of the video game industry, in order to understand the interactions that need to take place in an actual game development studio.</p>'
		+'<p>'
			+'<a class="link" href="http://cnam-enjmin.fr/" target="_blank">Website</a>'
			+'<a class="link" href="http://bundle.n-jmin.org/" target="_blank">Bundle</a>'
		+'</p>'
	*/
};