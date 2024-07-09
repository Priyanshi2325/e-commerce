const express = require("express")
let route = express.Router()
let productcontroller = require("../controller/productcontroller")
let uploads  = require("../multerConfig.js")

route.post('/productSave',uploads.single('image'), productController.productSave )


route.post('/productSave',productcontroller.productSave)

route.get('/getProduct', productcontroller.getProduct)

route.get('/getProductById/:id', productcontroller.getProductById)

route.put('/updateProduct/:id', productcontroller.updateProduct)

route.delete('/deleteProduct/:id', productcontroller.deleteProduct)

route.get('/searchProduct/:inp', productcontroller.searchProduct)



module.exports=route

