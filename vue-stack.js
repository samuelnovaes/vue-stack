//Do not touch here!

const { Nuxt, Builder } = require('nuxt')
const path = require('path')
const config = require('./nuxt.config.js')

config.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(config)

module.exports = async function(app, port) {
	app.use('/api', (req, res, next) => { require('./server/index.js')(req, res, next) })
	app.use(nuxt.render)

	if (config.dev) {
		const chokidar = require('chokidar')
		const watcher = chokidar.watch(path.join(__dirname, 'server'))
		watcher.on('all', () => {
			Object.keys(require.cache).forEach(id => {
				if (id.startsWith(`${path.join(__dirname, 'server')}${path.sep}`)) {
					delete require.cache[id]
				}
			})
		})
		await new Builder(nuxt).build()
	}

	await nuxt.ready()
	app.listen(port, () => {
		console.log(`Server running on port ${port}`)
	})
}