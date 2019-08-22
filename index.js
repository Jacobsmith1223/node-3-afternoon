require('dotenv').config()
const express = require('express')
const massive = require('massive')

productCTRL = require('./product_controller/products_contoller')

const {CONNECTION_STRING} = process.env



massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db',dbInstance)
    console.log('I cant feel my face, Im just a database')
})



const app = express()


app.use(express.json())


app.listen(3000,() => console.log('ready to serve master'))


app.get('/api/products', productCTRL.getAll)

app.get('/api/products/:id', productCTRL.getOne)

app.post('/api/products', productCTRL.create)

app.put('/api/products/:id', productCTRL.update)

app.delete('/api/products/:id', productCTRL.delete1)