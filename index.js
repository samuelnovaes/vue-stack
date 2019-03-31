const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(config)

app.use('/api', (req, res, next) => { require('./server/index.js')(req, res, next) })
app.use(nuxt.render)

async function start() {
	if (config.dev) {
		const chokidar = require('chokidar')
		const watcher = chokidar.watch(path.join(__dirname, 'server'))
		watcher.on('all', () => {
			Object.keys(require.cache).forEach(id => {
				if (new RegExp(`^${path.join(__dirname, 'server')}${path.sep}`).test(id)) {
					delete require.cache[id]
				}
			})
		})
		await new Builder(nuxt).build()
	}
	await nuxt.ready()
	app.listen(port, () => {
		console.log(`Server listening on port ${port}`)
	})
}

start()