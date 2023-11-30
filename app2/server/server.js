const app=require("./index")
const sql = require('mssql/msnodesqlv8')

process.on("uncaughtException", (err) => {
    console.log("Server is closing due to uncaughtException Occured! ");
    console.log("Error : ", err);
    server.close(() => {
        process.exit(1);
    })
})


const config = {
    database: "pvAPM_AutomationDB",
    server: "SIDHANT\\SQLEXPRESS",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
}

sql.connect(config, err => {
    if (err)  console.log(err);
    console.log("Connecting !")
})


const server = app.listen(4000, (err) => {
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