const { Nuxt, Builder } = require('nuxt')
const { nSQL } = require('nano-sql')
const express = require('express')
const path = require('path')
const app = express()
const server = require('http').Server(app)
const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const multipart = require('connect-multiparty')
const LevelStore = require('level-session-store')(expressSession)
const nSQLConfig = require('./nsql/index.js')
const watcher = chokidar.watch('./server')
const isProd = (process.env.NODE_ENV === 'production')
const port = process.env.PORT || process.argv[2] || 8080
const config = require('./nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(multipart())
app.use(expressSession({
	store: new LevelStore(),
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}))
app.use((req, res, next)=>{
	let router = express.Router()
	require('./server/index.js')(router)
	router(req, res, next)
})
app.use(nuxt.render)

if (config.dev) {
	watcher.on('ready', function() {
		watcher.on('all', function() {
			Object.keys(require.cache).forEach(function(id) {
				if (new RegExp(path.join(__dirname, 'server')).test(id)){
					delete require.cache[id]
				}
			})
		})
	})
	new Builder(nuxt).build().then(() => {
		serve()
	}).catch((error) => {
		console.error(error)
		process.exit(1)
	})
}
else {
	serve()
}

function serve() {
	nSQL().config({
		persistent: true,
		history: false,
		memory: false
	})
	nSQLConfig(nSQL)
	nSQL().connect().then(() => {
		server.listen(port, () => {
			console.log('Server running on port ' + port)
		})
	})
}
