var pages = {
	'home':function(){
		var tmp = '';
		for(var key in projects){
			tmp += '<a class="block background" onclick="loadPage(\''+key+'\')">'
			tmp += '<img class="thumbnail" src="'+getProjectThumbnail(key)+'">'
			tmp += '<span>'+getProjectTitle(key)+'</span>'
			if(getProjectPeriod(key)) tmp += '<span class="bottom">'+getProjectPeriod(key)+'</span>'
			tmp += '</a>';
		}
		var wtr = {
			'content':
				"<h2>Presentation</h2><p>My name is Lucien Catonnet and I'm a 22 year-old video game programming student at ENJMIN. I'm currently looking for an internship as a programmer in a video game studio. Ultimately I want to become a game engine programmer.</p>"
				+"<h2>Skills</h2><p>"
				+"<b>Languages</b>: C/C++, x86, C#, Java, PHP, JavaScript, GLSL"
				+"<br/><b>Software</b>: Unreal Engine 4, Visual Studio, Code::Blocks, Unity, Git, Perforce"
				+"<br/><b>Libraries</b>: OpenGL, Wwise, FreeType"
				+"<br/><b>Spoken languages</b>: French (mother tongue), English (fluent)"
				+"</p>"
				+"<h2>Projects</h2>"+tmp+'<div style="clear:both;"></div>'
				+"<h2>Studies</h2><p>"
				+"<b>Ecole Nationale du Jeu et des Médias Interactifs Numériques</b>: Master's Degree in video game programming (2014 - 2016)"
				+"<br/><b>Université de Picardie Jules Verne</b>: Bachelor's Degree in Computer Science (2011 - 2014)"
				+"<br/><b>Lycée Robert de Luzarches</b>: Baccalauréat L (literature), Audiovisual specialization (2011)"
				+"</p>"
				+"<h2>Interests</h2><p>Graphic design / Cinema / Experimental programming</p>",
			'media':[{'img':'img/photo.jpg'}]
		};
		return wtr;
	}
};
