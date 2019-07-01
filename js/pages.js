var pages = {
	home: function(){
		var prjs = '';
		prjs += '<p class="printonly">';
		for(var key in projects){
			if(projects[key].short){
				prjs += "<b>"+getProjectTitle(key)+"</b>";
				if(getProjectPeriod(key)) prjs += ' ('+getProjectPeriod(key)+')';
				prjs += ":<indent>";
				for(var i in projects[key].short)
					prjs += "- "+projects[key].short[i]+"<br/>";
				prjs += "</indent>";
			}
		}
		prjs += '</p>';
		for(var key in projects){
			prjs += '<a class="block project background screenonly" onclick="loadPage(\''+key+'\')">'
			prjs += '<img class="thumbnail" src="'+getProjectThumbnail(key)+'">'
			prjs += '<span>'+getProjectTitle(key)+'</span>'
			if(getProjectPeriod(key)) prjs += '<span class="bottom">'+getProjectPeriod(key)+'</span>'
			prjs += '</a>';
		}
		var wtr = {
			'content':
				"<h2>Presentation</h2><p>Currently an engine programmer at DontNod Entertainment, previously a video game programming student at ENJMIN.</p>"
				+"<h2>Skills</h2><p>"
				+"<b>Languages</b>: C/C++, Lua, x86, C#, Java, PHP, JavaScript, GLSL"
				+"<br/><b>Software</b>: Unreal Engine 4, Visual Studio, Unity, Git, Perforce, Premake"
				+"<br/><b>APIs</b>: OpenGL 3.3, Vulkan, Wwise"
				+"<br/><b>Spoken languages</b>: French (mother tongue), English (fluent)"
				+"</p>"
				+"<h2>Projects</h2>"+prjs+'<div style="clear:both;"></div>'
				+"<h2>Experiences</h2><p>"
				+"<b>DontNod Entertainment</b>: engine programmer (October 2016 - now)"
				+"<indent>- Profiled and debugged on PS4 and XB1"
				+"<br/>- Shipped Vampyr (PC/PS4/XB1)</indent>"
				+"<b>Ubisoft Mobile</b>: engine programmer assistant (April 2016 - September 2016)"
				+"<indent>- Put in place and cleaned precompiled headers for several projects of an in-house engine"
				+"<br/>- Created a build system solution that could satisfy our many projects dependency needs"
				+"<br/>- Debugged iOS games with the support team</indent>"
				+"</p>"
				+"<h2>Studies</h2><p>"
				+"<b>ENJMIN</b>: Master's Degree in video game programming (2014 - 2016)"
				+"<br/><b>Université de Picardie Jules Verne</b>: Bachelor's Degree in Computer Science (2011 - 2014)"
				+"<br/><b>Lycée Robert de Luzarches</b>: Baccalauréat L (literature), Audiovisual specialization (2011)"
				+"</p>"
				+"<h2>Interests</h2><p>Graphic design / Cinema / Experimental programming / Woodworking</p>",
			'media':[{'img':'img/photo.jpg'}]
		};
		return wtr;
	}
};
