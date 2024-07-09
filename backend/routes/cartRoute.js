let express = require('express')
let route = express.Router()
let cartController = require('../controller/cartController')

route.post('/cartSave:unique', cartController.cartSave)

route.get('/getCart:unique', cartController.getCart)

route.delete('/deleteCart/:id:unique',cartController.deleteCart)

module.exports = route 