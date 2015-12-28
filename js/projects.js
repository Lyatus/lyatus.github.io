var projects = {
	'we-savages':{
		'title':'We Savages',
		'thumbnail':'project/wesavages/thumbnail.png',
		'content':
			"<h2>Presentation</h2><p>We Savages is a student game currently being developed by a team of 10 people. It's a third-person adventure game in which the main character, a young adult from a poor neighborhood, passionate about photography, tries to climb the social ladder.</p>"
			+"<h2>Crowds</h2><p>One of my works on the project is to create a crowd system to allow creating riot scenes. I'm currently using flocking with custom vector-field modifying events to model the crowd movements.</p>"
			+"<h2>Patrols</h2><p>I'm also working on a patrol system, meaning a squad of characters supposed to be looking for the main character. Each member of the squad is able to determine if they can see the target and remembers their latest position and rotation. Because of this, a squad can determine if a certain point in space has been recently seen by one of the members of the squad. This mechanism is how squad members rule out search options and tend to go look at \"non-recently-seen\" locations. The current prototype works with good performance and easily finds most players.</p>",
		'media':[{'yt':'UciJAgPx7to'},{'img':'project/wesavages/screen0.png'}],
		'team':['François Rizzo','Anthony Krafft','Axel Deshors','Cyril Malvaux','Romain Ferrand','Baptiste Poligné','Pierre-Yves Revellin','Marc-Antoine Archier','Victor Gibaud']
	},
	'apoptosis':{
		'thumbnail':'project/apoptosis/thumbnail.png',
		'content':
			"<h2>Presentation</h2><p>Apoptosis is a short narrative experience that explores the effect of a grave illness on the relationship between two people. Sickness does not only affect the sick and we wanted to explore the feelings of someone close to the diseased, and especially the unspeakable ones in those situations.</p>"
			+"<h2>Intentions</h2><p>The player's objective is to expand the illness on an organ. We chose this particular position because we wanted to create a feeling of uneasiness in order to attain empathy for the characters. The narration progresses as the disease expands and thus the player feels trapped between wanting to know what comes next and witnessing the effect of his actions.</p>"
			+"<h2>Design</h2><p>We chose to have one of the most simple interaction possible (a mouse click) to emphasize this \"uneasiness\". The question the game asks to the player is whether he wants to continue or not, without proposing any alternative solution. Even though the expansion of the disease can be graphically pleasant to watch, the interaction has to be practically uninteresting in order to have meaning. It had to be the opposite of fun.</p>"
			+"<h2>Technology</h2><p>The game uses my own C++ engine, which I had to interface with Wwise as requested by the sound designer. It uses voxels (marching cubes) and cellular automata to attain this special organic feel we wanted for the disease. I did try to implement marching cubes in Unity first but it wasn't fast enough to support per-frame automaton updating. I implemented many things in the engine to support developing this game, including template multidimensional trees for fast space queries, a camera class (and the matrix tools that go with it) and a pool allocator for memory efficiency.</p>",
		'media':[{'yt':'tMwTOBmPpXQ'},{'img':'project/apoptosis/3.png'},{'img':'project/apoptosis/1.png'},{'img':'project/apoptosis/2.png'}],
		'team':['François Rizzo','Marjolaine Paz','Gaspard Morel'],
		'links':{
			'English Windows installer':'http://file.luciencatonnet.com/Apoptosis_setup_en.exe',
			'French Windows installer':'http://file.luciencatonnet.com/Apoptosis_setup_fr.exe',
			'itch.io':'http://lutopia.itch.io/apoptosis',
			'KillScreen article':'https://killscreen.com/articles/a-narrative-experience-where-you-are-the-cancer/',
			'ThePixelHunt article':'http://www.thepixelhunt.com/newsgames/dans-apoptosis-le-cancer-cest-vous/.html'
		}
	},
	'noidd':{
		'thumbnail':'project/noidd/thumbnail.png',
		'content':
			"<h2>Presentation</h2><p>Noidd is a web application enabling its users to share music and videos live. People connect to channels in which they can post videos. Videos are streamed live to every person connected to the channel. People can change the video dynamically, creating a form of conversation.</p>"
			+"<h2>History</h2><p>I've been working on this project from the very start as the sole programmer with the help of 4 graphic designers including my brother. We started this project in 2011, back when we were still undergraduate students, the first version of the site was raw and bulky. But during the last three years we all learned a lot, and our common goal was still the release of Noidd.</p>"
			+"<h2>Technology</h2><p>Noidd does not make use of any framework. It uses APIs such as YouTube and SoundClound and relies heavily on XmlHttpRequest and WebSocket technologies for synchronization.</p>",
		'media':[{'img':'project/noidd/screenshot.png'}],
		'team':['Léo Catonnet','Benjamin Calméjane'],
		'links':{'Website':'http://noidd.com'}
	},
	'l-engine':{
		'title':'L Engine',
		'content':
			"<h2>Presentation</h2><p>L is the name I gave to my personal C++ library. It started as a laboratory in my first year of bachelor's degree and since then it's always been halfway between a game engine project and a laboratory. I use it to experiment on anything that comes to mind, and it's a major factor of my ability to code.</p>"
			+"<h2>Principles</h2><p>While developing the engine, I've ended up making and following a list of basic principles."
			+"<br/>- Avoid using the C++ Standard Library. Using custom containers is crucial to truly control memory management and that plays a major part in good performance. Also parts of the standard are bloated with unrequired functionality (big up for iostream)."
			+"<br/>- Avoid using any third-party library (only system libraries and OpenGL-related). Because of this I've written a template class to allow dynamically adding ways of transforming data from or to different kinds of sources (images, models, fonts, anything)."
			+"<br/>- Anything that behaves similarly in different dimensions should be templatized. Any dimension vector/matrix comes from one definition, this relies on constant loops being optimized by the compiler."
			+"</p>"
			+"<h2>Sources</h2><p>I intend to make the sources available at some point but there are still some embarassing pieces of code that need to be rewritten before that.</p>"
	},
	'antitris':{
		'thumbnail':'project/antitris/thumbnail.png',
		'content':
			"<h2>Presentation</h2><p>Antitris is a puzzle game inspired by Tetris in which you have to place horizontal bars of different colors in order to recreate tetrominos of the same color in the game's grid. It's a pretty small project that I developed on my own not long before entering ENJMIN.</p>"
			+"<h2>Technology</h2><p>The game was entirely made in C++, using an old version of my own engine.</p>",
		'media':[{'img':'project/antitris/ingame.png'}],
		'links':{'Download for Windows':'http://file.luciencatonnet.com/Antitris.zip'}
	},
	/*
	'starpool':{
		'thumbnail':'project/starpool/thumbnail.png',
		'content':
			"<h2>Presentation</h2><p>StarPool is a video game developed with Unity in 72 hours for the Gaite Game Jam in 2015. I was merely a consultant programmer and game designer. The idea of the game was recreate a kind of pool game (and pinball game) into space, using planets and other massive entities that can be found in space. The game was exhibited for two weeks at Gaîté Lyrique in Paris, as one of the selected winners of the game jam.</p>",
		'images':['project/starpool/screenshot.jpg'],
		'links':[{'name':'GitHub repository','url':'https://github.com/cuvette/SpacePool'}]
	}
	*/
};

function getProjectThumbnail(key){
	return (projects[key].thumbnail)?projects[key].thumbnail:'img/logo.png';
}
function getProjectTitle(key){
	return (projects[key].title)?projects[key].title:capitalize(key);
}