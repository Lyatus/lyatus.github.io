var projects = {
	'l-engine':{
		'title':'L Engine',
		'short':[
			"Personal C++/OpenGL 3.3 engine with minimal dependencies (as in little to no STL) for Windows and Unix",
			"Fully deferred rendering pipeline",
			"Lisp-syntax Lua-design stack-based VM scripting language",
			"Simple 3D physics (no resting contacts, no friction for now)",
		],
		'content':
			"<h2>Presentation</h2><p>L is the name I gave to my personal C++ library. It started as a laboratory in my first year of bachelor's degree and since then it's always been halfway between a game engine project and a laboratory. I use it to experiment on anything that comes to mind, and it's a major factor of my ability to program.</p>"
			+"<h2>Principles</h2><p>I try to make the code self-sufficient by avoiding any dependency (the STL is almost absent from the codebase). I like it better this way because it's cleaner and I get to learn about programming literally every functionality.</p>"
			+"<h2>Rendering</h2><p>The rendering pipeline uses OpenGL 3.3 core, it's still very young but I'm pretty confident I want to keep it fully deferred. The geometry buffer is made up of albedo+spec on 4 bytes, view-space normals on two 16-bit floats (using Lambert Azimuthal Equal-Area projection), and the 24-bit depth buffer is used to reconstruct position with the inverse view*projection matrix. My ambition is to fake transparency using dithering, you can see the first attempt with a 2x2 Bayer matrix on the right, but I want to use a void and cluster matrix as default. It probably still needs some sort of anti-aliasing to look decent too. I'm using a Uniform Buffer Object to share frame and camera information across all shaders such as view, projection, eye position, time and also the dithering matrix.</p>"
			+"<h2>Physics</h2><p>The collision system uses the separating axis theorem to support boxes and spheres for the moment and uses an AABB dynamic tree as a broadphase. The physics engine does not yet support friction and resting contacts. The collision system fires events to scripts on the same entity to allow custom reactions.</p>"
			+"<h2>Scripting</h2><p>The scripting language has its syntax inspired by Lisp (parentheses everywhere), and its core design inspired by Lua (simple yet extendable). The choice for the Lisp syntax is because I had been struggling to do decent parsing in earlier versions of the language, and I figured it'd be nice to have the simplicity in design of Lua combined with the barest syntax. The virtual machine is very simple and inefficient for the moment, and memory fragmentation is very high, these are things I'm often thinking about but will probably solve when script performance becomes an issue (current bottleneck is collision). I've been experimenting with dynamic assembly too (in x86), and I'm not sure it's the right way to go but it would be an interesting exercise to make a JIT compiler for the language.</p>"
			+"<h2>Threading</h2><p>The engine uses a fiber-based task system, I was very much influenced by Christian Gyrling's <a href=\"http://www.gdcvault.com/play/1022186/Parallelizing-the-Naughty-Dog-Engine\">talk</a> about Naughty Dog's use for them in their job system. The task system is made up of a thread per core and N fibers, threads take control of fibers when there's a task in it, clients directly put tasks in free fiber slots, there is no queuing involved. Because of the very cooperative nature of fiber threading, the whole system uses only one semaphore to allow threads to go to sleep when there are no tasks left to do (usually during V-Sync) ; I also tend to avoid any lock in general, by prefering very specific algorithms and containers for a problem rather than the usual ones wrapped around a critical section. Currently the task system is used by physics, collisions, resource loading and frustum culling.</p>"
			+"<h2>Sources</h2><p>I intend to make the sources available at some point but there are still some embarassing pieces of code that need to be rewritten before that. I also feel like making the sources available is an action that I cannot take back and it's hard for me to take a decision with confidence. On an other note, the release of the binaries and documentation to use the engine is a no-brainer, you can find two links to those right below.</p>",
			'media':[{'img':'project/lengine/rendering.png'},{'img':'project/lengine/dithering.png'},{'img':'project/lengine/cubes.gif'}],
			'links':{'Documentation':'L','Sample':'https://github.com/Lyatus/L-sample'},
			'start':'2011'
	},
	'noidd':{
		'thumbnail':'project/noidd/thumbnail.png',
		'short':[
			"Live music sharing website (http://noidd.com) made with friends as sole programmer",
			"No framework, only HTML5/CSS3/JS/PHP/MYSQL",
			"Interfacing with YouTube and SoundCloud APIs",
			"Constant synchronization through WebSocket/XmlHttpRequest",
		],
		'content':
		"<h2>Presentation</h2><p>Noidd is a web application enabling its users to share music and videos live. People connect to channels in which they can post videos. Videos are streamed live to every person connected to the channel. People can change the video dynamically, creating a form of conversation.</p>"
		+"<h2>History</h2><p>I've been working on this project from the very start as the sole programmer with the help of 4 graphic designers including my brother. We started this project in 2010, back when we were still undergraduate students, the first version of the site was raw and bulky. But during the last three years we all learned a lot, and our common goal was still the release of Noidd.</p>"
		+"<h2>Technology</h2><p>Noidd does not make use of any framework. It uses APIs such as YouTube and SoundClound and relies heavily on XmlHttpRequest and WebSocket technologies for synchronization.</p>",
		'media':[{'img':'project/noidd/screenshot.png'}],
		'team':['Léo Catonnet','Benjamin Calméjane','Mayk Navangi'],
		'links':{'Website':'http://noidd.com'},
		'start':'2010'
	},
	'we-savages':{
		'title':'We Savages',
		'thumbnail':'project/wesavages/thumbnail.png',
		'short':[
			"Unreal Engine 4 game for school",
			"C++ crowd system to simulate riots",
			"Patrol AI system able to track player via information sharing",
			"Four-wheeler AI using UE4 vehicle and navigation mesh",
		],
		'content':
			"<h2>Presentation</h2><p>We Savages is an Unreal Engine 4 student game developed by a team of 10 people. It's a third-person action/adventure game in which the main character, a young adult from a poor neighborhood, passionate about photography, tries to climb the social ladder. The goal of the exercise was to make us understand the purpose and stakes of preproduction, that's why we didn't have to develop the full game, but only a vertical slice and the necessary documents to be able to prove the worth of the project and the budget and time that would be necessary for the complete production of the game.</p>"
			+"<h2>Crowds</h2><p>I designed a crowd system to allow the creation of riot scenes. I used flocking with custom vector-field modifying events to let game designers time and model the crowd movements. We were not designing crowds with complex agent-to-agent behavior but rather mass behavior, because we were focusing on the feeling of seeing masses of people moving together. The system uses Unreal Engine's built-in quadtree to find neighbors and a level-of-detail on tick interval to avoid recomputing the velocities of distant agents too often. Collision between agents are also disabled when they're too far from the player. I ended up using a simple Actor instead of a Character for performance but it also gave weird physics behaviour that we never had the time to fix.</p>"
			+"<h2>Patrols</h2><p>I've also worked on a patrol system, meaning a squad of characters supposed to be looking for the main character. Each member of the squad is able to determine if they can see the target and remembers their latest position and rotation. Because of this, a squad can determine if a certain point in space has been recently seen by one of the members of the squad. This mechanism is how squad members rule out search options and tend to go look at \"non-recently-seen\" locations. It worked with good performance and could easily find most players.</p>"
			+"<h2>Quad</h2><p>At some point it was decided to have a scene on a quad bike driven by a friend of the main character. I created the AI that drove it, using UE4's vehicle system, navmeshes, trigonometry and a few raycasts for safety.</p>",
		'media':[{'yt':'nz7gvwfISFY'},{'img':'project/wesavages/flocking.gif'},{'img':'project/wesavages/patrol.gif'},{'img':'project/wesavages/quad.gif'},{'img':'project/wesavages/screen0.png'}],
		'team':['François Rizzo','Anthony Krafft','Axel Deshors','Cyril Malvaux','Romain Ferrand','Baptiste Poligné','Pierre-Yves Revellin','Marc-Antoine Archier','Victor Gibaud'],
		'start':'Oct. 2015',
		'end':'Mar. 2016',
	},
	'apoptosis':{
		'thumbnail':'project/apoptosis/thumbnail.png',
		'short':[
			"Game made with my own C++ engine for school",
			"Marching cubes voxels with OpenGL VBOs (and voxelisation from triangle models)",
			"3D cellular automata to simulate organic life",
			"Space colonization algorithm to simulate blood vessels",
		],
		'content':
		"<h2>Presentation</h2><p>Apoptosis is a short narrative experience that explores the effect of a grave illness on the relationship between two people. Sickness does not only affect the sick and we wanted to explore the feelings of someone close to the diseased, and especially the unspeakable ones in those situations.</p>"
		+"<h2>Intentions</h2><p>The player's objective is to expand the illness on an organ. We chose this particular position because we wanted to create a feeling of uneasiness in order to attain empathy for the characters. The narration progresses as the disease expands and thus the player feels trapped between wanting to know what comes next and witnessing the effect of his actions.</p>"
		+"<h2>Design</h2><p>We chose to have one of the most simple interaction possible (a mouse click) to emphasize this \"uneasiness\". The question the game asks to the player is whether he wants to continue or not, without proposing any alternative solution. Even though the expansion of the disease can be graphically pleasant to watch, the interaction has to be practically uninteresting in order to have meaning. It had to be the opposite of fun.</p>"
		+"<h2>Technology</h2><p>The game uses my own C++ engine, which I had to interface with Wwise as requested by the sound designer. It uses voxels (marching cubes) and cellular automata to attain this special organic feel we wanted for the disease. I did try to implement marching cubes in Unity first but it wasn't fast enough to support per-frame automaton updating. I implemented many things in the engine to support developing this game, including template multidimensional trees for fast space queries, a camera class (and the matrix tools that go with it) and a pool allocator for memory efficiency.</p>",
		'media':[{'yt':'tMwTOBmPpXQ'},{'img':'project/apoptosis/3.png'},{'img':'project/apoptosis/1.png'},{'img':'project/apoptosis/2.png'}],
		'team':['François Rizzo','Marjolaine Paz','Gaspard Morel'],
		'links':{
			'itch.io':'http://lutopia.itch.io/apoptosis',
			'KillScreen article':'https://killscreen.com/articles/a-narrative-experience-where-you-are-the-cancer/',
			'OuJeViPo article':'http://oujevipo.fr/general/5081-apoptosis/',
			'ThePixelHunt article':'http://www.thepixelhunt.com/newsgames/dans-apoptosis-le-cancer-cest-vous',
			'FreeGamePlanet article':'https://www.freegameplanet.com/apoptosis-full-game-download/'
		},
		'start':'Mar. 2015',
		'end':'Jun. 2015'
	},
	'praytracer':{
		'thumbnail':'project/praytracer/thumbnail.png',
		'content':
			"<h2>Presentation</h2><p>PRayTracer is a small program made as an exercise during ENJMIN. Our graphics teacher wanted us to implement a graphical algorithm using Processing. Some of my colleagues thought rendering a quad and doing ray-tracing on the GPU was smarter, and they were definitely right, but I figured it would be funny to try and do a ray-tracer on CPU... in Java.</p>"
			+"<h2>Ray-tracing</h2><p>It was my first ever ray-tracer and considering the language I went with a very object-oriented design. I've implemented a few shapes like planes, discs, spheres and cubes ; and also diffuse colors and shininess (specular color is always the same as diffuse). I wanted to do reflection too but considering the current state of the performance I thought it wiser not to. I think the most obvious problem is that I have no spatial structure to cull objects, I have to iterate over all of them. Although it seems to me like doing efficient culling with ray-tracing is way harder than with ray-marching. Apart from those obvious algorithmic problems, cache-locality is probably awful too.</p>"
			+"<h2>Parallelism</h2><p>Seeing as the performance in a single thread wasn't enough to have even indecent scenes running at a decent framerate, I took a multithreaded approach to the problem. All threads have a PImage that they render to, at the end of the frame we blit all PImages to the screen. Synchronization is simply done with a semaphore. At first the PImages were fullscreen and threads drew lines in a strided fashion. Some artifacts appeared (random white dots across the screen) but the performance was obviously better than the single-threaded version. I've then changed it to have smaller PImages (the height of the screen divided by the number of threads) and blitted accordingly, it did not seem to improve performance and the artifacts were still there. Sadly Processing does not come with a profiler so I don't really know where to concentrate my efforts to improve performance (I think there's a Java one but I can't be bothered to hook it up with a Processing sketch).</p>",
		'media':[{'img':'project/praytracer/1.png'}],
		'links':{'GitHub repository':'https://github.com/Lyatus/praytracer'},
		'date':'Apr. 2015',
	},
	'antitris':{
		'thumbnail':'project/antitris/thumbnail.png',
		'content':
			"<h2>Presentation</h2><p>Antitris is a puzzle game inspired by Tetris in which you have to place horizontal bars of different colors in order to recreate tetrominos of the same color in the game's grid. It's a pretty small project that I developed on my own not long before entering ENJMIN.</p>"
			+"<h2>Technology</h2><p>The game was entirely made in C++, using an old version of my own engine.</p>",
		'media':[{'img':'project/antitris/ingame.png'}],
		'date':'Jun. 2014',
	},
};

function getProjectThumbnail(key){
	return (projects[key].thumbnail)?projects[key].thumbnail:'img/logo.png';
}
function getProjectTitle(key){
	return (projects[key].title)?projects[key].title:capitalize(key);
}
function getProjectPeriod(key){
	if(projects[key].start){
		if(projects[key].end)
			return projects[key].start+' to '+projects[key].end;
		else return 'since '+projects[key].start;
	}
	else if(projects[key].date)
		return projects[key].date;
	return false;
}
