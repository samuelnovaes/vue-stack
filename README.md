# vue-stack
Nuxt, Vue.js, Express, NanoSQL and Node.js stack

## Installation

- Download vue-stack [here](https://github.com/samuelnovaes/vue-stack/releases)
- Extract
- Enter the directory
- Run `npm install` to install dependencies

## Express back end

- There is a `server` directory with Express routes.

## NanoSQL models

- There is a `nsql` directory with NanoSQL models.

## HTTP request example

### You have to use `this.$axios` to make http requuest

pages/index.vue

```html
<template>
	<div id="page">
		<button @click="sendMsg">Send message to server</button>
	</div>
</template>

<script>
	export default {
		methods: {
			sendMsg(){
				this.$axios.post('/msg', {msg: 'Hello Server!'}).then((res)=>{
					alert(res.data)
				})
			}
		}
	}
</script>
```

server/index.js

```javascript
module.exports = (app) => {
	app.post('/msg', (req, res)=>{
		console.log(req.body.msg)
		res.send("Hello client!")
	})
}
```

## How to use NanoSQL in vue-stack? (example)

nsql/index.js

```javascript
module.exports = (nSQL)=>{
	nSQL('people').model([
		{key: 'id', type: 'int', props: ['pk', 'ai']},
		{key: 'name', type: 'string'},
		{key: 'age', type: 'int'}
	])
}
```

server/index.js

```javascript
const {nSQL} = require('nano-sql') //Import nano-sql module

module.exports = (app) => {

	//Add person
	app.post('/add', (req, res)=>{
		nSQL('people').query('upsert', {name: req.body.name, age: req.body.age}).exec().then(()=>{
			res.end()
		})
	})

	//List people
	app.get('/list', (req, res)=>{
		nSQL('people').query('select').exec().then((rows)=>{
			res.send(JSON.stringify(rows))
		})
	})

}
```

## Some express request attributes

- `request.query` GET url query values
- `request.body` POST body values
- `request.files` multiparty files
- `request.session` manage sessions

## Commands

| Command | Description |
|---------|-------------|
| npm run dev | Start server in development with Nuxt.js in dev mode (hot reloading). Listen on [http://localhost:8080](http://localhost:8080). |
| npm run build | Build application for production. |
| npm start | Start server in production. |

## Documentation

- [ExpressJS](http://expressjs.com/en/guide/routing.html)
- [Nuxt.js](https://nuxtjs.org/guide/)
- [Vue.js](http://vuejs.org/guide/)
- [NanoSQL](https://github.com/ClickSimply/Nano-SQL)
- [Node.js](https://nodejs.org/dist/latest-v8.x/docs/api)
- [Axios](https://github.com/mzabriskie/axios)
