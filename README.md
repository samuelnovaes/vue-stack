# vue-stack
Nuxt, Vue.js, Vuetify, Axios, Express, Node.js FullStack Boilerplate

## Installation

```sh
git clone https://github.com/samuelnovaes/vue-stack.git
cd vue-stack
npm install
npm run dev
```

## Express back end

There is a `server` directory with the Express API. Each route is mapped to `/api`.

### Example

server/index.js

```javascript
const express = require('express')
const app = express()

// GET /api/greeting
app.get('/greeting', (req, res) => {
	console.log('Hello World!')
})

module.exports = app
```

## HTTP request example

Use `this.$axios` to make HTTP requests

```html
<template>
	<v-container>
		<v-btn @click="sendMsg">Send message to server</v-btn>
	</v-container>
</template>

<script>
	export default {
		methods: {
			sendMsg(){
				this.$axios.post('/api/messages', {message: 'Hello World!'}).then((response)=>{
					console.log('Message sent')
				})
			}
		}
	}
</script>
```

## Commands

| Command | Description |
|---------|-------------|
| npm run dev | Start server in development with Nuxt.js in dev mode (hot reloading). Listen on [http://localhost:3000](http://localhost:3000). |
| npm run build | Build application for production. |
| npm start | Start server in production. |

## Documentation

- [ExpressJS](http://expressjs.com)
- [Nuxt.js](https://nuxtjs.org)
- [Vue.js](http://vuejs.org)
- [Vuetify](https://vuetifyjs.com)
- [Node.js](https://nodejs.org)
- [Axios](https://github.com/mzabriskie/axios)