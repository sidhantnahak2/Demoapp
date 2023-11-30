const app = require("./index")
const sql = require('mssql/msnodesqlv8')
require("dotenv").config({ path: "./config.env" })


process.on("uncaughtException", (err) => {
    console.log("Server is closing due to uncaughtException Occured! ");
    console.log("Error : ", err);
    server.close(() => {
        process.exit(1);
    })
})

//First way to connect sql server

// const config = {
//     database: "pvAPM_AutomationDB",
//     server: "SIDHANT\\SQLEXPRESS",
//     driver: "msnodesqlv8",
//     options: {
//         trustedConnection: true
//     }
// }
// sql.connect(config, err => {
//     if (err)  console.log(err);
//     console.log("Connecting !")
// })


//Second way to connect to sql server

sql.connect('Server=SIDHANT\\SQLEXPRESS,1433;Database=pvAPM_AutomationDB;User Id=sidh;Password=sidh')
    .then(() => console.log("connection done"))
    .catch((err) => console.log("Error ", err))


//Third way to connect to sql server

// const connectfunc = async () => {
//     try {
//         await sql.connect('Server=SIDHANT\\SQLEXPRESS,1433;Database=pvAPM_AutomationDB;User Id=sidh;Password=sidh')
//         const result = await sql.query`select * from registrationGreenEnco`
//         console.dir(result)
//     } catch (err) {
//         console.log("Error ", err)
//     }
// }
// connectfunc();


//Fourth way to connect to sql server

// function connectfunc() {
//     try {
//         sql.connect('Server=SIDHANT\\SQLEXPRESS,1433;Database=pvAPM_AutomationDB;User Id=sidh;Password=sidh')
//             .then(() => {
//                 sql.query`select * from registrationGreenEnco`
//                     .then((result) => console.log(result))
//                     .catch(err => console.log("error ", err))
//             })
//     } catch (err) {
//         console.log("Error ", err)
//     }
// }
// connectfunc();


//Fifth way to connect to sql server


// const sqlConfig = {
//     user: process.env.DB_USER,
//     password: process.env.DB_PWD,
//     database: process.env.DB_NAME,
//     server: "SIDHANT\\SQLEXPRESS"

// }

// function connectToDatabase() {
//     try {
//         // make sure that any items are correctly URL encoded in the connection string
//         sql.connect(sqlConfig)
//             .then(() => {
//                 console.log("Connected to database")
//             })
//     } catch (err) {
//         console.log("Error : ", err)
//     }
// }

// connectToDatabase();

const server = app.listen(process.env.PORT || 5000, (err) => {
    if (err) console.log("Error :", err);
    else console.log(`server is running in port : ${server.address().port}`)
})


process.on("unhandledRejection", err => {
    console.log("Server is closing dut to unhandledRejectin Occured!")
    console.log("Error : ", err);
    server.close(() => {
        process.exit(1);
    })
})