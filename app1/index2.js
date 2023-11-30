// const app = require('express')();
// // const sql=require("mssql")
// const sql = require("mysql")
// // const config = {
// //     host:"localhost",
// //     user: "root",
// //     password: ""
// // }

// // const db = sql.createConnection({
// //     config
// // })
// // db.connect(function (err) {
// //     if (err) console.log("error",err);
// //     else console.log("not error")
// // })



// var sqlConfig = {
//     user: 'sidh',
//     password: 'sidh',
//     server: 'SIDHANT',
//     database: 'pvAPM_AutomationDB'
// };


// const db = sql.createConnection({
//     sqlConfig
// })
// db.connect(function (err) {
//     if (err) console.log("error",err);
//     else console.log("not error")
// })
// // const config={
// //     user:"sidh",
// //     passsword:"sidh",
// //     server:"SIDHANT",
// //     database:"pvAPM_AutomationDB",
// //     options:{
// //         trustedconnection:true,
// //         enableArithAort:true,
// //         instancename:"SQLEXPRESS"
// //     }
// // }

// // async function Test(){
// //     try {
// //         let pool=await sql.connect(config);
// //         let data=await pool.request().query("SELECT * from Inverter1GenerationDataFinal")
// //         return data;
// //     } catch (error) {
// //         return error
// //     }
// // }
// //  Test()
// //  .then(data=>console.log(data))
// //  .catch(err=>console.log(err))
// const server = app.listen(4000, err => {
//     if (err) console.log(err);
//     else console.log(`sever is running on port ${server.address().port}`)
// })

// app.get("/test", (req, res) => {
//     res.send("We are getting")
// })


// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
   
//     var sql = require("mssql");

//     // config for your database
//     var config = {
//         user: 'sidh',
//         password: 'sidh',
//         server: 'SIDHANT', 
//         database: 'pvAPM_AutomationDB' 
//     };

//     // connect to your database
//     sql.connect(config, function (err) {
    
//         if (err) console.log(err);
//         else console.log("connected")

//         // create Request object
//         var request = new sql.Request();
           
//         // query to the database and get the records
//         request.query('select * from [dbo].[Inverter1GenerationDataFinal]', function (err, recordset) {
            
//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);
            
//         });
//     });
// });
// var server = app.listen(5000, function () {
//     console.log('Server is running..',server.address().port);
// });


var sql = require('mssql');

var config = {
    server: 'SIDHANT\\SQLEXPRESS',
    database: 'MyDB',
    username :'sidh',
    password : 'sidh',
    options: {
        trustedConnection: true
    },
    port: 52087
};

function connection()
{
    return new sql.ConnectionPool(config);
}