const express = require('express')
const app = express()
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const SERVER_PORT = 3500

app.get('/api/products/', getProducts.getProducts)

app.get('/api/product/:id', getProduct.getId)

app.listen(SERVER_PORT, () => {
  console.log(`Welcome to ${SERVER_PORT}!`)
})

