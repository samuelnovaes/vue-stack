module.exports = {
	head: {
		title: 'Vue Stack',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }
		]
	},
	plugins: [
		'~/plugins/axios.js'
	],
	loading: { color: '#FF0000' },
	build: {
		extractCSS: true,
		vendor: ['axios']
	}
}
