const pages = {
	home: function() {
		const subsection = (o) =>
			`${o.subtitle}${o.items ? `<indent>${o.items.map(i => `• ${i}<br/>`).join('')}</indent>`: '<br/>'}`;
		const section = (title, o) =>
			`<section class="${o.class || ''}">`
			+ `<h2>${title}</h2>`
			+ ((typeof o.content === 'string') ? o.content : (`<p>${o.content.map(e => `<subsection><b>${e.title}</b>: ${subsection(e)}</subsection>`).join('')}</p>`))
			+ '</section>';
		return {
			content:
				section('Presentation', {
					class: 'screenonly',
					content: '<p>Currently an engine programmer at DontNod Entertainment, previously a video game programming student at ENJMIN.</p>',
				})
				+ section('Experiences', {
					class: 'experiences',
					content: [
						{
							title: 'DontNod Entertainment',
							subtitle: 'engine programmer (October 2016 - now)',
							items: [
								'Working on <a href="https://tellmewhygame.com">Tell Me Why</a> (Microsoft, UE4, PC/XB1)',
								'Shipped <a href="http://vampyr-game.com">Vampyr</a> (Focus, UE4, PC/PS4/XB1)',
								'Built generic gameplay mechanisms with future projects in mind',
								'Built Microsoft Xbox Live Service API Online Subsystem for UE4',
								'Oversaw asset loading for various systems',
							],
						},
						{
							title: 'Ubisoft Mobile',
							subtitle: 'engine programmer assistant (April 2016 - September 2016)',
							items: [
								'Improved build times of an in-house engine',
								'Worked on build system solution to satisfy many projects dependency needs',
							],
						},
					],
				})
				+ section('Skills', {
					content: [
						{
							title: 'Languages',
							subtitle: 'C/C++, JavaScript, PHP, Lua, GLSL',
						},
						{
							title: 'Software',
							subtitle: 'Unreal Engine 4, Visual Studio, Git, Perforce, CMake',
						},
						{
							title: 'APIs',
							subtitle: 'OpenGL 3.3, Vulkan',
						},
						{
							title: 'Spoken languages',
							subtitle: 'French (mother tongue), English (fluent)',
						},
					],
				})
				+ section('Projects', {
					class: 'screenonly',
					content:
						Object.entries(projects).map(e =>
							`<a class="block project background" href="#${e[0]}">
							<img class="thumbnail" src="${e[1].thumbnail}">
							<span>${e[1].title}</span>
							</a>`
						).join('')
						+ '<div style="clear:both;"></div>',
				})
				+ section('Projects', {
					class: 'projects printonly',
					content: Object.values(projects).filter(p => p.short).map(p => ({
						title: p.title,
						subtitle: p.period,
						items: p.short,
					})),
				})
				+ section('Education', {
					content: [
						{
							title: 'ENJMIN',
							subtitle: 'Master\'s Degree in video game programming (2014 - 2016)',
						},
						{
							title: 'Université de Picardie Jules Verne',
							subtitle: 'Bachelor\'s Degree in Computer Science (2011 - 2014)',
						},
						{
							title: 'Lycée Robert de Luzarches',
							subtitle: 'Baccalauréat L (literature), Audiovisual specialization (2011)',
						},
					],
				})
				+ section('Interests', {
					content: [
						{
							title: 'Hobbies',
							subtitle: 'Sound synthesis, music composition, woodworking, game jams'
						},
						{
							title: 'Books',
							subtitle: 'Game Engine Architecture, The Design of Everyday Things, Mona Chollet',
						},
						{
							title: 'Video games',
							subtitle: 'Divinity: Original Sin 1&2, TESV: Oblivion, Slay the Spire, Screeps, RimWorld, The Stanley Parable',
						},
						{
							title: 'Music',
							subtitle: 'Andy Shauf, The Clash, The Chemical Brothers, The Distillers, Garbage, Gorillaz, King Gizzard',
						},
					],
				}),
			media: [
				{'img':'img/photo.jpg'},
			],
		};
	}
};
