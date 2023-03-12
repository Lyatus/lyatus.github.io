const projects = {
	'l-engine': {
		title: 'L Engine',
		short: [
			"Public-domain modular C++ and Vulkan game engine",
			"Fully deferred rendering pipeline",
			"Register-based script virtual machine",
			"Fiber-based task system",
		],
		content:
			"<h2>Presentation</h2><p>The L Engine is a public-domain modular C++ and Vulkan game engine.</p>"
			+"<h2>Modules</h2><p>The engine is made of a core part and numerous modules. The core cannot depend on any module. Modules can extend engine capabilities via multiple interfaces: resource loading and transforming, input management, audio management, window management. Most modules are stripped out in a release version of the engine's binary, only the ones necessary at runtime are kept.</p>"
			+"<h2>Resources</h2><p>Resources can be loaded and transformed by modules, but they always end up in a static format defined by the core. Resource loading can also mean generating; for instance, some modules allow generating noise textures out of a simple URL. Resource transformation are processes that happen after the initial loading/generation of a resource, they can be optimizations (e.g. script optimization), reformatting (e.g. vertex attribute order), compression (e.g. texture block compression).</p>"
			+"<h2>Rendering</h2><p>The rendering pipeline uses Vulkan, it's fully deferred, the geometry buffer is made up of base color in 3 bytes, view-space normals in 2 16-bit floats (using Lambert Azimuthal Equal-Area projection), metalness in 1 byte, roughness in a 16-bit float, emission in a 16-bit float, and the 24-bit depth buffer is used to reconstruct position with the inverse view*projection matrix.</p>"
			+"<h2>Physics</h2><p>The collision system uses the separating axis theorem to support boxes and spheres for the moment and uses an AABB dynamic tree as a broadphase. The collision system fires events to scripts on the same entity to allow custom reactions.</p>"
			+"<h2>Scripting</h2><p>Bytecode can be executed in a register-based virtual machine. Most of the bytecode is inspired by <a href=\"http://underpop.online.fr/l/lua/docs/a-no-frills-introduction-to-lua-5.1-vm-instructions.pdf\">Lua's bytecode</a>. All variables in the virtual machine are represented by a dynamic type mechanism resembling <a href=\"https://en.cppreference.com/w/cpp/utility/variant\">std::variant</a>.</p>"
			+"<h2>Threading</h2><p>The engine uses a fiber-based task system, I was very much influenced by Christian Gyrling's <a href=\"https://gdcvault.com/play/1022186/Parallelizing-the-Naughty-Dog-Engine\">talk</a> about Naughty Dog's use for them in their job system. The task system is made up of a thread per core and N fibers, threads take control of fibers when there's a task in it, clients directly put tasks in free fiber slots, there is no queuing involved. Because of the very cooperative nature of fiber threading, the whole system uses only one semaphore to allow threads to go to sleep when there are no tasks left to do (usually during V-Sync). Locks are usually avoided, by prefering very specific algorithms and containers for a problem rather than the usual ones wrapped around a critical section. Currently the task system is used by physics, collisions, resource loading and frustum culling.</p>"
			+"<h2>Sources</h2><p>The sources are publicly available on Github under the Unlicense (public-domain equivalent license). You can find a link below.</p>",
		media: [
			{img: 'project/lengine/rendering.png', desc: 'Early mesh rendering'},
			{img: 'project/lengine/lights.png', desc: 'Early deferred light rendering'},
			{img: 'project/lengine/cubes.gif', desc: 'Early cube physics'},
			{img: 'project/lengine/sandstorm.gif', desc: 'Sandstorm, game made for Ludum Dare 42'},
		],
		links: {'Documentation':'L','Repository':'https://github.com/Lyatus/L'},
		period: 'since 2011',
	},
	raccoon: {
		thumbnail: 'project/raccoon/thumbnail.png',
		short: [
			"Browser-based fantasy console",
			"Hot-reload code/data mechanism",
			"Code editor with syntax highlighting and go-to-definition",
			"Collaboration and sharing via source control",
		],
		content:
			"<h2>Presentation</h2><p>Raccoon is a web fantasy console. It's inspired by <a href=\"https://lexaloffle.com/pico-8.php\">PICO-8</a> but aims at offering better tools (not made within the constraints of the fantasy console). This is why for this project I work with a UX designer to try and get people to make games the easiest way possible. Raccoon wants to bring together game creation with constraints and great tools.</p>"
			+"<h2>Console features</h2><p>"
				+"- 20KiB of ROM to put your game assets<br/>"
				+"  - 192 8x8 sprites<br/>"
				+"  - 128x64 map tiles<br/>"
				+"- 32KiB of RAM to communicate with the virtual machine<br/>"
				+"- 128x128 pixel screen<br/>"
				+"- 16 user-defined colors<br/>"
				+"- Palette modification and transparency<br/>"
				+"- 4 audio channels<br/>"
				+"- 64 sound tracks<br/>"
				+"- 64 4-track music patterns<br/>"
				+"- 4 gamepads with 4 directions and 4 buttons each<br/>"
			+"</p>"
			+"<h2>Editor features</h2><p>"
			+"- Hot reload anything! Work on your sprites, map or code, while you play!<br/>"
			+"- Built-in documentation window, keep an eye on documentation as you make your game!<br/>"
			+"- Support for GitHub synchronization, work on a game with your friends!<br/>"
			+"</p>"
			+"<h2>Games</h2><p>Here's a list of games made with raccoon:<br/>"
			+'- <a href="https://raccoon.computer/?gh=Lyatus/ld44">Blood Fighters</a><br/>'
			+'- <a href="https://raccoon.computer/?gh=Lyatus/ld45">Architect</a><br/>'
			+'- <a href="https://raccoon.computer/?gh=Lyatus/ld46">Blip!</a><br/>'
			+'- <a href="https://raccoon.computer/?gh=Lyatus/ld47">Stamp!</a><br/>'
			+"</p>"
			+"<h2>Sources</h2><p>The sources are publicly available on Github under the Unlicense (public-domain equivalent license). You can find a link below.</p>"
		,
		media: [
			{img: 'project/raccoon/bloodfighters.gif', desc: 'Blood Fighters, game made for Ludum Dare 44'},
			{img: 'project/raccoon/architect.gif', desc: 'Architect, game made for Ludum Dare 45'},
		],
		links: {
			Website: 'https://raccoon.computer',
			Repository: 'https://github.com/Lyatus/raccoon',
		},
		team: [
			{name:'Marjolaine Paz', role: 'UI/UX designer'},
		],
		period: 'since 2019',
	},
	noidd: {
		thumbnail: 'project/noidd/thumbnail.png',
		content:
		"<h2>Presentation</h2><p>Noidd is a web application enabling its users to share music and videos live. People connect to channels in which they can post videos. Videos are streamed live to every person connected to the channel. People can change the video dynamically, creating a form of conversation.</p>"
		+"<h2>History</h2><p>I've been working on this project from the very start as the sole programmer with the help of 4 graphic designers including my brother. We started this project in 2010, back when we were still undergraduate students, the first version of the site was raw and bulky. But during the last three years we all learned a lot, and our common goal was still the release of Noidd.</p>"
		+"<h2>Technology</h2><p>Noidd does not make use of any framework. It uses APIs such as YouTube and SoundClound and relies heavily on XmlHttpRequest and WebSocket technologies for synchronization.</p>",
		media: [
			{img: 'project/noidd/screenshot.png'},
		],
		team: [
			{name: 'Benjamin Calméjane', role: 'UX/graphic designer'},
			{name: 'Léo Catonnet', role: 'UX/graphic designer'},
			{name: 'Mayk Navangi', role: 'Graphic designer'},
		],
		links: {
			Website: 'https://noidd.com',
		},
		period: 'since 2010',
	},
	'we-savages': {
		title: 'We Savages',
		thumbnail: 'project/wesavages/thumbnail.png',
		short: [
			"Unreal Engine 4 game for master's degree (second year)",
			"Crowd system to simulate riots",
			"Patrol AI system able to track player via information sharing",
			"Four-wheeler AI using UE4 vehicle and navigation mesh",
		],
		content:
			"<h2>Presentation</h2><p>We Savages is an Unreal Engine 4 student game developed by a team of 10 people. It's a third-person action/adventure game in which the main character, a young adult from a poor neighborhood, passionate about photography, tries to climb the social ladder. The goal of the exercise was to make us understand the purpose and stakes of preproduction, that's why we didn't have to develop the full game, but only a vertical slice and the necessary documents to be able to prove the worth of the project and the budget and time that would be necessary for the complete production of the game.</p>"
			+"<h2>Crowds</h2><p>I designed a crowd system to allow the creation of riot scenes. I used flocking with custom vector-field modifying events to let game designers time and model the crowd movements. We were not designing crowds with complex agent-to-agent behavior but rather mass behavior, because we were focusing on the feeling of seeing masses of people moving together. The system uses Unreal Engine's built-in quadtree to find neighbors and a level-of-detail on tick interval to avoid recomputing the velocities of distant agents too often. Collision between agents are also disabled when they're too far from the player. I ended up using a simple Actor instead of a Character for performance but it also gave weird physics behaviour that we never had the time to fix.</p>"
			+"<h2>Patrols</h2><p>I've also worked on a patrol system, meaning a squad of characters supposed to be looking for the main character. Each member of the squad is able to determine if they can see the target and remembers their latest position and rotation. Because of this, a squad can determine if a certain point in space has been recently seen by one of the members of the squad. This mechanism is how squad members rule out search options and tend to go look at \"non-recently-seen\" locations. It worked with good performance and could easily find most players.</p>"
			+"<h2>Quad</h2><p>At some point it was decided to have a scene on a quad bike driven by a friend of the main character. I created the AI that drove it, using UE4's vehicle system, navmeshes, trigonometry and a few raycasts for safety.</p>",
		media: [
			{yt: 'nz7gvwfISFY', desc: 'Walkthrough of the demo'},
			{img: 'project/wesavages/flocking.gif', desc: 'Crowd with vector fields'},
			{img: 'project/wesavages/patrol.gif', desc: 'Guard search AI, blue is player, green are guards, red are search targets'},
			{img: 'project/wesavages/quad.gif', desc: 'Quad bike following path'},
			{img: 'project/wesavages/screen0.png', desc: 'Environment art'},
		],
		team: [
			{name: 'Marc-Antoine Archier', role: 'Sound designer'},
			{name: 'Axel Deshors', role: 'Programmer'},
			{name: 'Romain Ferrand', role: 'Graphic designer'},
			{name: 'Victor Gibaud', role: 'UX designer'},
			{name: 'Anthony Krafft', role: 'Game designer'},
			{name: 'Cyril Malvaux', role: 'Programmer'},
			{name: 'Baptiste Poligné', role: 'Graphic designer'},
			{name: 'Pierre-Yves Revellin', role: 'Producer'},
			{name: 'François Rizzo', role: 'Game designer'},
		],
		period: 'October 2015 to March 2016',
	},
	apoptosis: {
		thumbnail: 'project/apoptosis/thumbnail.png',
		short: [
			"L Engine game for master's degree (first year)",
			"Marching cubes voxels (and voxelisation from triangle models)",
			"3D cellular automata to simulate organic life",
			"Space colonization algorithm to simulate blood vessels",
		],
		content:
		"<h2>Presentation</h2><p>Apoptosis is a short narrative experience that explores the effect of a grave illness on the relationship between two people. Sickness does not only affect the sick and we wanted to explore the feelings of someone close to the diseased, and especially the unspeakable ones in those situations.</p>"
		+"<h2>Intentions</h2><p>The player's objective is to expand the illness on an organ. We chose this particular position because we wanted to create a feeling of uneasiness in order to attain empathy for the characters. The narration progresses as the disease expands and thus the player feels trapped between wanting to know what comes next and witnessing the effect of his actions.</p>"
		+"<h2>Design</h2><p>We chose to have one of the most simple interaction possible (a mouse click) to emphasize this \"uneasiness\". The question the game asks to the player is whether they want to continue or not, without proposing any alternative solution. Even though the expansion of the disease can be graphically pleasant to watch, the interaction has to be practically uninteresting in order to have meaning. It had to be the opposite of fun.</p>"
		+"<h2>Technology</h2><p>The game uses my own C++ engine, which I had to interface with Wwise as requested by the sound designer. It uses voxels (marching cubes) and cellular automata to attain this special organic feel we wanted for the disease. I did try to implement marching cubes in Unity first but it wasn't fast enough to support per-frame automaton updating. I implemented many things in the engine to support developing this game, including template multidimensional trees for fast space queries, a camera class (and the matrix tools that go with it) and a pool allocator for memory efficiency.</p>",
		media: [
			{yt: 'tMwTOBmPpXQ', desc: 'Walkthrough of the experience'},
			{img: 'project/apoptosis/3.png'},
			{img: 'project/apoptosis/1.png', desc: 'Close view of a tumor with inner veins visible'},
			{img: 'project/apoptosis/2.png', desc: 'Wide view of the stage of the experience'},
		],
		team: [
			{name: 'Gaspard Morel', role: 'Sound designer'},
			{name: 'Marjolaine Paz', role: 'Graphic designer'},
			{name: 'François Rizzo', role: 'Writer / Game designer'},
		],
		links: {
			'itch.io':'https://lutopia.itch.io/apoptosis',
			'KillScreen article':'https://killscreen.com/articles/a-narrative-experience-where-you-are-the-cancer/',
			'OuJeViPo article':'https://oujevipo.fr/general/5081-apoptosis/',
			'ThePixelHunt article':'https://thepixelhunt.com/newsgames/dans-apoptosis-le-cancer-cest-vous',
			'FreeGamePlanet article':'https://freegameplanet.com/apoptosis-full-game-download/'
		},
		period: 'March 2015 to June 2015',
	},
	robin: {
		thumbnail: 'project/robin/thumbnail.png',
		content:
			"<h2>Presentation</h2><p>Robin is a project to create a <a href=\"https://github.com/nothings/single_file_libs\">single-file</a> <a href=\"https://en.wikipedia.org/wiki/MIDI\">MIDI</a>-compliant <a href=\"https://en.wikipedia.org/wiki/Frequency_modulation_synthesis\">frequency modulation synthesizer</a> in C.</p>"
			+"<h2>Single-file library</h2><p>Robin is a single-file library to be as easy to use and distribute as possible. It does not do any memory allocating because everything is kept inside the <code>rbn_instance</code> structure that the user has to allocate (which can even be on the stack if that's your style). It is accessible both in C and C++ (via <code>extern \"C\"</code>), and is distributed under the Unlicense (public domain equivalent).</p>"
			+"<h2>Frequency modulation</h2><p>Robin is a frequency modulation synth, which means that it creates sounds by combining sine waves in various ways. Each operator generates a sine wave, and can affect each operator's sine wave phase. This allows to create rich sounds without the need for sound samples, which is perfect for a small library that would be cluttered by additional data.</p>"
			+"<h2>General MIDI</h2><p>Robin not only complies with MIDI but also has a <a href=\"https://en.wikipedia.org/wiki/General_MIDI\">General MIDI</a> configuration provided with it (which means that even though robin itself is a single file, there is a second file for the General MIDI configuration, please don't sue me). The goal of that configuration is to have robin programs for each General MIDI instruments that sound as good as possible. Currently the programs are still very primitive and reused multiple times (the same program is used for all types of pianos for instance). The configuration is bound to advance faster once robin has a decent program editor.</p>"
			+"<h2>Command-line interface</h2><p>For testing purposes I've developed a command-line interface alongside the library in the same repository. It uses the General MIDI configuration by default. You can find more information about the available commands in the repository.</p>"
			+"<h2>JUCE plugin</h2><p>The repository also contains a VST plugin made with <a href=\"https://en.wikipedia.org/wiki/JUCE\">JUCE</a> which can be used with most <a href=\"https://en.wikipedia.org/wiki/Digital_audio_workstation\">DAW</a>s.</p>"
			+"<h2>Sources</h2><p>The sources are publicly available on Github under the Unlicense (public-domain equivalent license). You can find a link below.</p>",
		media: [
			{img: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Phase-modulation.gif', desc: 'Phase-modulation in a gif'},
			{snd: 'project/robin/outset_island.ogg', desc: 'The Legend of Zelda: The Wind Waker, Outset Island'},
			{snd: 'project/robin/stayin_alive.ogg', desc: 'The Bee Gees, Stayin\' Alive'},
		],
		links: {
			'Repository':'https://github.com/Lyatus/robin',
		},
		period: 'since September 2019',
	},
	steve: {
		thumbnail: 'project/steve/thumbnail.png',
		content:
			"<h2>Presentation</h2><p>Steve is a project to create a program that can output randomly generated music (as a <a href=\"https://en.wikipedia.org/wiki/MIDI#Standard_files\">Standard MIDI File</a>) from a configuration.</p>"
			+"<h2>Configurations</h2><p>Configurations can be very broad or very specific, they allow choosing from a selection of tempos, chords, scales, instruments, time signatures, etc. They can be created by a client program or they can be provided as JSON to the command-line interface. The JSON configurations can inherit from other configurations to make it easier to go from the broad to the specific. Some configurations are provided with the project.</p>"
			+"<h2>Creators</h2><p>Creators are classes that define the way a track is going to generate its content. For instance, a bass creator would try to create a bass line in the low notes that follows the chord progression and repeats itself.</p>"
			+"<h2>Sources</h2><p>The sources are publicly available on Github under the Unlicense (public-domain equivalent license). You can find a link below.</p>",
		media: [
			{snd: 'project/steve/Major_B_180.ogg', desc: 'Music box piece in B (January 2021)'},
			{snd: 'project/steve/Major_B_130.ogg', desc: 'Piano piece in B (July 2020)'},
		],
		links: {
			'Repository':'https://github.com/Lyatus/steve',
		},
		period: 'since 2011',
	},
	praytracer: {
		thumbnail: 'project/praytracer/thumbnail.png',
		content:
			"<h2>Presentation</h2><p>PRayTracer is a small program made as an exercise during ENJMIN. Our graphics teacher wanted us to implement a graphical algorithm using Processing. Some of my colleagues thought rendering a quad and doing ray-tracing on the GPU was smarter, and they were definitely right, but I figured it would be funny to try and do a ray-tracer on CPU... in Java.</p>"
			+"<h2>Ray-tracing</h2><p>It was my first ever ray-tracer and considering the language I went with a very object-oriented design. I've implemented a few shapes like planes, discs, spheres and cubes ; and also diffuse colors and shininess (specular color is always the same as diffuse). I wanted to do reflection too but considering the current state of the performance I thought it wiser not to. I think the most obvious problem is that I have no spatial structure to cull objects, I have to iterate over all of them. Although it seems to me like doing efficient culling with ray-tracing is way harder than with ray-marching. Apart from those obvious algorithmic problems, cache-locality is probably awful too.</p>"
			+"<h2>Parallelism</h2><p>Seeing as the performance in a single thread wasn't enough to have even indecent scenes running at a decent framerate, I took a multithreaded approach to the problem. All threads have a PImage that they render to, at the end of the frame we blit all PImages to the screen. Synchronization is simply done with a semaphore. At first the PImages were fullscreen and threads drew lines in a strided fashion. Some artifacts appeared (random white dots across the screen) but the performance was obviously better than the single-threaded version. I've then changed it to have smaller PImages (the height of the screen divided by the number of threads) and blitted accordingly, it did not seem to improve performance and the artifacts were still there. Sadly Processing does not come with a profiler so I don't really know where to concentrate my efforts to improve performance (I think there's a Java one but I can't be bothered to hook it up with a Processing sketch).</p>"
			+"<h2>Sources</h2><p>The sources are publicly available on Github under the Unlicense (public-domain equivalent license). You can find a link below.</p>",
			media: [
			{img: 'project/praytracer/1.png', desc: 'Example scene'},
		],
		links: {'Repository':'https://github.com/Lyatus/praytracer'},
		period: 'April 2015',
	},
	rationalist: {
		thumbnail: 'project/rationalist/thumbnail.png',
		content:
			"<h2>Presentation</h2><p>One night during dinner with friends, we were jokingly listing movies with numbers in their titles, each trying to continue the sequence. We then started talking about how certain movies have even more concrete values in their titles (such as distances, durations, etc.) and how each of these values could be compared to sort a list. That's how the idea for rationalist came to be. As stupid and useless a database to create, it felt like a thing I had to do.</p>"
			+"<h2>Technology</h2><p>There isn't much technology inside this project but a few small interesting problems. For units, it was imperative to convert everything to a standard unit, and I didn't want the entries in the database to do it manually, so data is actually entered with the original unit (e.g. miles) and then the script will convert it to the standard unit for that criterion (e.g. meters). For monetary values, I'm actually fetching currency rates via an API to convert from pounds or francs into USD (which is the standard unit in this case). For sorting colors, I've used a conversion from RGB to HSL and then using hue, saturation and lightness (in that order) to sort the colors, which is not ideal but at least gives a pretty nice rainbow of colors. For displaying the list, I use various APIs (<a href=\"https://musicbrainz.org\">musicbrainz</a>, <a href=\"https://coverartarchive.org\">coverartarchive</a> and media-imdb) to find information and especially cover art. I also try to create coherent links to the content, via Wikipedia searches or YouTube searches, when I can't make a direct link to the IMDB entry.</p>"
			+"<h2>Sources</h2><p>The sources are publicly available on Github under the Unlicense (public-domain equivalent license). You can find a link below.</p>",
		team: [
			{name: 'Marjolaine Paz', role: 'Styling'},
		],
		links: {
			'Repository':'https://github.com/Lyatus/rationalist',
			'Website':'https://rationalist.lutopia.net',
		},
		period: 'since May 2018',
	},
	antitris: {
		thumbnail: 'project/antitris/thumbnail.png',
		content:
			"<h2>Presentation</h2><p>Antitris is a small game that I created before going to ENJMIN as an exercise. It used to be in C++ with an old version of <a href=\"#l-engine\">my engine</a> but I ended up rewriting it for the web. The gameplay is supposed to be the opposite of Tetris: making tetrominoes of the same color from lines of four blocks of color. One problem with the gameplay that became obvious with time is that it's a bit hard to predict how tetrominoes are going to be detected (as opposed to lines in Tetris where it's very simple to understand), which means there are pretty much no advanced strategies, I haven't found a way to fix this problem yet.</p>"
			+"<h2>Sources</h2><p>The sources are publicly available on Github under the Unlicense (public-domain equivalent license). You can find a link below.</p>",
			team: [
			{name: 'Marjolaine Paz', role: 'Graphic Design'},
		],
		links: {
			'Repository':'https://github.com/Lyatus/antitris',
			'Website':'https://lutopia.net/antitris',
		},
		period: '2014',
	},
};

window.addEventListener('load', function() {
	for(let i in projects) {
		projects[i].title = projects[i].title || capitalize(i);
		projects[i].thumbnail = projects[i].thumbnail || 'img/logo.png';
		projects[i].subtitle = projects[i].period;
		pages[i] = projects[i];
	}
});
