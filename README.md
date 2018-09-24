# vue-stack
Minimalistic Boilerplate for FullStack Express and Vue.js applications.

> To understand how this boilerplate works, see the [Nuxt.js documentation](https://nuxtjs.org).

## Installation

```sh
git clone https://github.com/samuelnovaes/vue-stack.git
cd vue-stack
npm install
npm run dev
```

> You can delete all `.gitkeep` files in your project

## Express back end (With hot reload in dev mode!)

There is a `server` directory with the Express API. Each route is mapped to `/api`.

### Example

server/index.js

```javascript
const router = require('express').Router()

// GET /api/greeting
router.get('/greeting', (req, res) => {
	console.log('Hello World!')
})

module.exports = router
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

Command | Description
--- | ---
npm run dev | Launch a development server on localhost:3000 with hot-reloading.
npm run build | Build your application with webpack and minify the JS & CSS (for production).
npm start | Start the server in production mode (after running nuxt build).
npm run generate | Build the application and generate every route as a HTML file (used for static hosting).

## See more

- [ExpressJS](http://expressjs.com)
- [Nuxt.js](https://nuxtjs.org)
- [Vue.js](http://vuejs.org)
- [Vuetify](https://vuetifyjs.com)
- [Node.js](https://nodejs.org)
- [Axios](https://github.com/mzabriskie/axios)