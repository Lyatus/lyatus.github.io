var projects = {
	'apoptosis':{
		'thumbnail':'project/apoptosis/thumbnail.png',
		'content':
			"<h2>Presentation</h2><p>Apoptosis is a short narrative experience that explores the effect of a grave illness on the relationship between two people. Sickness does not only affect the sick and we wanted to explore the feelings of someone close to the diseased, and especially the unspeakable ones in those situations.</p>"
			+"<h2>Intentions</h2><p>The player's objective is to expand the illness on an organ. We chose this particular position because we wanted to provoke a feeling of uneasiness in order to attain empathy for the characters. The narrative progresses as the disease expands and thus the player feels trapped between wanting to know what comes next and witnessing the effect of his actions.</p>"
			+"<h2>Design</h2><p>We chose to have one of the most simple interaction possible (a mouse click) to emphasize this \"uneasiness\". The question the game asks to the player is whether he wants to continue or not, without proposing any alternative solution. Even though the expansion of the disease can be graphically pleasant to watch, the interaction has to be practically uninteresting in order to have meaning. It had to be the opposite of fun.</p>"
			+"<h2>Target</h2><p>We didn't conceive the game with a specific target audience in mind. This game is a school project we made in 3 months during our first year at Enjmin (France) and we were told not to think about a target and just create something that would touch us. We had total freedom and went for it.</p>"
			+"<h2>Technology</h2><p>The game uses my own C++ engine, which I had to interface with Wwise as requested by the sound designer. It uses voxels (marching cubes) and cellular automata to attain this special organic feel we wanted for the disease. I did try to implement marching cubes in Unity first but it wasn't fast enough to support per-frame automaton updating. I implemented many things in the engine to support developing this game, including template multidimensional trees for fast space queries, a camera class (and the matrix tools that go with it) and a pool allocator for memory efficiency.</p>",
		'images':['project/apoptosis/3.png','project/apoptosis/1.png','project/apoptosis/2.png'],
		'links':[
			{'name':'English Windows installer','url':'project/apoptosis/Apoptosis_setup_en.exe'},
			{'name':'French Windows installer','url':'project/apoptosis/Apoptosis_setup_fr.exe'},
			{'name':'itch.io','url':'http://lutopia.itch.io/apoptosis'}
		]
	},
	'noidd':{
		'thumbnail':'project/noidd/thumbnail.png',
		'content':
			"<h2>Presentation</h2><p>Noidd is a web application enabling its users to share music and videos live. People connect to channels in which they can post videos. Videos are streamed live to every person connected to the channel. People can change the video dynamically, creating a form of conversation.</p>"
			+"<h2>History</h2><p>I've been working on this project from the very start as a programmer with the help of 4 graphic designers including my brother. We started this project in 2011, back when we were still undergraduate students, the first version of the site was raw and bulky. But during the last three years we all learned a lot, and our common goal was still the release of Noidd.</p>"
			+"<h2>Technology</h2><p>Noidd uses XmlHttpRequest and WebSocket technologies heavily.</p>",
		'images':['project/noidd/screenshot.png'],
		'links':[{'name':'Website','url':'http://noidd.com'}]
	},
	'antitris':{
		'thumbnail':'project/antitris/thumbnail.png',
		'content':
			"<h2>Presentation</h2><p>Antitris is a puzzle game inspired by Tetris in which you have to place horizontal bars of different colors in order to recreate tetrominos of the same color in the game's grid. It's a pretty small project that I developed on my own not long before entering ENJMIN.</p>"
			+"<h2>Technology</h2><p>The game was entirely made in C++, using an old version of my own engine.</p>",
		'images':['project/antitris/ingame.png'],
		'links':[{'name':'Download for Windows','url':'project/antitris/antitris-win.zip'}]
	},
	'l engine':{
		'content':"<p>L is the name I gave to my personal library. It's written in C++, using the least possible parts of the C++ STL. It's always been halfway between a game engine project and a laboratory, and helpt me learn a lot about the language.</p><p>"
	},
	'starpool':{
		'thumbnail':'project/starpool/thumbnail.png',
		'content':"<p>StarPool is a video game developed for the Gaite Game Jam in 2015. I was merely a consultant programmer and game designer. The idea of the game was recreate a kind of pool game (and pinball game) into space, using planets and other massive entities that can be found in space.</p><p>The game was made using Unity.</p>"
	}
};