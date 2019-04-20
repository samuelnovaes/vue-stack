const express = require('express')
const vueStack = require('./vue-stack')
const app = express()

vueStack(app, process.env.PORT || 3000)