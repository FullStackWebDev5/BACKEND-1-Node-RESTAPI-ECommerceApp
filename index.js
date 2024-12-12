const express = require('express')
const bodyParser = require('body-parser')
const productCntrls = require('./src/modules/product/product.controller')

const app = express()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to ECommerce App'
  })
})

// Product routes
app.get('/api/products', productCntrls.getAllProducts)
app.get('/api/products/search', productCntrls.getSearchedProducts)
app.post('/api/products/filter', productCntrls.getFilteredProducts)
app.get('/api/products/:id', productCntrls.getProductById)
app.get('/api/category/:category', productCntrls.getProductByCategory)

// Customer routes
// Cart routes
// Order routes

app.listen(3000, () => {
  console.log('Server is up :)')
})


/*
  # E-Commerce App (Using REST API)
    - Features/Modules
      - Products
        - Get all products ✅
        - Get products by category ✅
        - Get product by ID ✅
        - Get searched products
        - Get filtered products (Min.price, Max.price, Brand)
        - Rate the product
      - Customers
        - Sign up
        - Login
      - Cart
        - Get all cart items
        - Add to cart
        - Delete from cart
      - Order
        - Place order
        - Get orders by customer ID
        - Get order by ID

    # Notes:
      - Routes -> Controllers -> Models
*/