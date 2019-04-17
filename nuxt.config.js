module.exports = {
	mode: 'spa',
	head: {
		title: 'Vue Stack',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/img/icon.png' }
		]
	},
	loading: {
		color: '#FF0000'
	},
	build: {
		extractCSS: true
	},
	modules: [
		['@nuxtjs/pwa']
	],
	manifest: {
		name: "Vue Stack",
		short_name: "Vue Stack",
		theme_color: "#1976D2",
		background_color: "#1976D2",
		display: "standalone",
		orientation: "portrait",
		scope: "/",
		start_url: "/"
	},
	icon: {
		iconSrc: 'static/img/icon.png'
	}
}