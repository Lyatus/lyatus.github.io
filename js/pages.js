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
			"<h2>Presentation</h2><p>My name is Lucien Catonnet and I'm a 21 year-old video game programming student at ENJMIN. I'm currently looking for an internship as a programmer in a video game studio.</p>"
			+"<h2>Skills</h2><p>"
			+"<b>Languages</b>: C/C++, C#, Java, PHP, JavaScript, GLSL"
			+"<br/><b>Middleware</b>: Unreal Engine 4, Visual Studio, Unity, Github, Code::blocks"
			+"<br/><b>Libraries</b>: OpenGL, Wwise"
			+"<br/><b>Spoken languages</b>: French (mother tongue), English (fluent)"
			+"</p>"
			+"<h2>Studies</h2><p>"
			+"ENJMIN: Master's Degree in video game programming (2014 to 2016)"
			+"<br/>UPJV: Bachelor's Degree in Computer Science (2011 to 2014)"
			+"<br/>Baccalauréat L (literature), Audiovisual specialization (2011)"
			+"</p>"
			+"<h2>Interests</h2><p>I love spending my time watching TV shows and movies (mostly TV shows recently). What drives me the most is clearly programming though, and especially everything low-level.</p>",
		'images':['img/photo.jpg']
	},
	/*'ENJMIN':
		'<h1>ENJMIN</h1>'
		+'<p><img src="img/enjmin/logo.jpg">ENJMIN (Ecole Nationale du Jeu et des Médias Interactifs Numériques) is a public video game school located in Angoulême, France. You can find their website and a bundle containing games made by their students in the links below. I\'m currently a student there in my first year of a Master\'s Degree and I\'m very fond of the way the school allows us to work with different fields of the video game industry, in order to understand the interactions that need to take place in an actual game development studio.</p>'
		+'<p>'
			+'<a class="link" href="http://cnam-enjmin.fr/" target="_blank">Website</a>'
			+'<a class="link" href="http://bundle.n-jmin.org/" target="_blank">Bundle</a>'
		+'</p>'
	*/
};
