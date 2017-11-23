module.exports = {
	head: {
		title: 'Vue Stack',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		],
		link: [
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
			{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }
		]
	},
	plugins: [
		'~/plugins/config.js'
	],
	css: [
		'~/assets/style/app.styl'
	],
	loading: { color: '#FF0000' },
	build: {
		extractCSS: true,
		vendor: ['axios']
	}
}
