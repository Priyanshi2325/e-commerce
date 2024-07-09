const express = require('express')
const cors = require('cors')
const db = require('./databaseconfig.js')
let productRoute=require("./routes/RouterProvider.js")
let cartRoute = require('./routes/cartRoute.js')
let adminRoute = require('./routes/adminRoute.js')
let clientRoute = require('./routes/clientRoute.js')

let app = express ()
app.use(express.json())
app.use (cors())
app.use(express.static('uploads'))

db.connect((err)=>{
    if (err) throw err
    else{
        console.log("database Connected")
    }
})

let productTableQuery = `CREATE TABLE if not exists product(
    id INT NOT NULL AUTO_INCREMENT,
    productBrand varchar(255)NULL,
    productPrice varchar(255)NULL,
    productRating varchar(255)NULL,
    productType varchar(255)NULL,
      image VARCHAR(255) NULL,
       primary key(id)
);`
db.query(productTableQuery,(err,result)=>{
    if(err) throw err
    else{
        console.log('product table created')
    }
})

let cartTableQuery  = `CREATE TABLE if not exists cart (
    id INT NOT NULL AUTO_INCREMENT,
    productBrand VARCHAR(255) NULL,
    productPrice VARCHAR(255) NULL,
    productRating VARCHAR(255) NULL,
    productType VARCHAR(255) NULL,
    image VARCHAR(255) NULL,
    PRIMARY KEY (id));`

    db.query(cartTableQuery, (err, result)=>{
        if(err) throw err
        else{
            console.log("cart Table created")
        }
    })

    let clientDetailTableQuery  = `CREATE TABLE if not exists clientDetail (
        id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(255) NULL,
        email VARCHAR(255) NULL,
        password VARCHAR(255) NULL,
        image VARCHAR(255) NULL,
        PRIMARY KEY (id));`
    
        db.query(clientDetailTableQuery, (err, result)=>{
            if(err) throw err
            else{
                console.log("clientDetail Table created")
            }
        })

app.use('/api',productRoute)

app.use('/api', cartRoute)

app.use('/api',adminRoute)

app.use('/api',clientRoute)

app.listen(3000,()=>{
    console.log('server is running at 3000')
})














































































































































































































