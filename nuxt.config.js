module.exports = {
	head: {
		title: 'Starter Template',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: 'img/favicon.ico' },
			{ rel: 'stylesheet', href: 'fonts/material-icons.css' }
		]
	},
	plugins: [
		'~/plugins/vue-stack.js'
	],
	css: [
		'~/assets/style/app.styl'
	],
	loading: { color: '#FF0000' },
	build: {
		extractCSS: true
	}
}