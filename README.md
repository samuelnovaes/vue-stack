# vue-stack
Minimalistic Boilerplate for FullStack Express and Vue.js applications with PWA support.

> To understand how this boilerplate works, see the [Nuxt.js documentation](https://nuxtjs.org).

## Installation

```sh
git clone https://github.com/samuelnovaes/vue-stack.git
cd vue-stack
npm install
npm run dev
```

## Express API (With hot reload in dev mode!)

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

## Index.js file

The index.js file is responsible for starting the Express application. The `vueStack(app, port)` function starts the application on a specific port.

```javascript
const express = require('express')
const vueStack = require('./vue-stack')
const app = express()

vueStack(app, 3000)
```

## PWA

By default, Vue Stack generates a PWA application en production mode. You can customize its manifest and icons in nuxt.config.js

## Commands

Command | Description
--- | ---
npm run dev | Launch a development server on localhost:3000 with hot-reloading.
npm run build | Build your application with webpack and minify the JS & CSS (for production).
npm start | Start the server in production mode (after running nuxt build).
npm run generate | Build the application and generate every route as a HTML file (used for static hosting).

## Using Docker

```
# docker build -t [IMAGE_NAME] .
# docker run -d --name [CONTAINER_NAME] -p [PORT]:3000 [IMAGE_NAME]
```

## See more

- [Node.js](https://nodejs.org)
- [ExpressJS](http://expressjs.com)
- [Vue.js](http://vuejs.org)
- [Nuxt.js](https://nuxtjs.org)
- [Nuxt PWA](https://pwa.nuxtjs.org)