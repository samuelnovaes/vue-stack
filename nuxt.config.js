module.exports = {
	head: {
		title: 'Vue Stack',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		]
	},
	plugins: [
		'~/plugins/axios.js'
	],
	loading: { color: '#FF0000' },
	build: {
		extractCSS: true
	}
}
