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
				"<h2>Presentation</h2><p>My name is Lucien Catonnet and I'm a 22 year-old video game programming student at ENJMIN. I'm currently looking for work as a junior engine programmer starting late September.</p>"
				+"<h2>Skills</h2><p>"
				+"<b>Languages</b>: C/C++, Lua, x86, C#, Java, PHP, JavaScript, GLSL"
				+"<br/><b>Software</b>: Unreal Engine 4, Visual Studio, Code::Blocks, Unity, Git, Perforce, Premake"
				+"<br/><b>Libraries</b>: OpenGL 3.3, Wwise, FreeType"
				+"<br/><b>Spoken languages</b>: French (mother tongue), English (fluent)"
				+"</p>"
				+"<h2>Projects</h2>"+tmp+'<div style="clear:both;"></div>'
				+"<h2>Experiences</h2><p>"
				+"<b>Ubisoft Mobile</b>: engine programmer assistant (April 2016 - September 2016)"
				+"<indent>- Put in place and cleaned precompiled headers for several projects of an in-house engine"
				+"<br/>- Created a build system solution that could satisfy our many projects dependency needs"
				+"<br/>- Debugged iOS games with the support team</indent>"
				+"<br/><b>MER7</b>: web internship (August 2012)"
				+"<indent>- Refactored a service selling website"
				+"<br/>- Played a lot of Tekken Tag Tournament 2</indent>"
				+"</p>"
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
