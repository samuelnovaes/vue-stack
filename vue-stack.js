//Do not touch here!

const { Nuxt, Builder } = require('nuxt')
const path = require('path')
const config = require('./nuxt.config.js')
const express = require('express')

config.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(config)

const refreshAPI = () => {
	Object.keys(require.cache).forEach(id => {
		if (id.startsWith(`${path.join(__dirname, 'api')}${path.sep}`)) {
			delete require.cache[id]
		}
	})
}

module.exports = async function (app, port) {
	app.use(express.json())
	app.use(express.urlencoded({ extended: false }))
	app.use('/api', (req, res, next) => { require('./api/index.js')(req, res, next) })
	app.use(nuxt.render)

	if (config.dev) {
		const chokidar = require('chokidar')
		const watcher = chokidar.watch(path.join(__dirname, 'api'))
		watcher.on('add', refreshAPI)
		watcher.on('change', refreshAPI)
		await new Builder(nuxt).build()
	}

	await nuxt.ready()
	app.listen(port, () => {
		console.log(`Server running on port ${port}`)
	})
}