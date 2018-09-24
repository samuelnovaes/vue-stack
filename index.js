const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const path = require('path')
const chokidar = require('chokidar')
const compression = require('compression')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
app.use(compression())

app.use('/api', (req, res, next) => {
	require('./server/index.js')(req, res, next)
})

async function start() {
	const nuxt = new Nuxt(config)
	if (config.dev) {
		const watcher = chokidar.watch(path.join(__dirname, 'server'))
		watcher.on('all', () => {
			Object.keys(require.cache).forEach(id => {
				if (new RegExp(`^${path.join(__dirname, 'server')}${path.sep}`).test(id)) {
					delete require.cache[id]
				}
			})
		})
		const builder = new Builder(nuxt)
		await builder.build()
	}
	app.use(nuxt.render)
	app.listen(port, host, () => {
		console.log(`Server listening on http://${host}:${port}`)
	})
}

start()