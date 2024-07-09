const mysql=require('mysql')

let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'e_commerce'
})
module.exports=connection