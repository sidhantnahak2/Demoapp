const express = require("express");
const data=require("./dataRoute")
const sql = require('mssql/msnodesqlv8')
const bodyparser = require('body-parser')
const app = express();


app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(require('cors')())


app.use("/api/v1/",data)

app.use("/getdata", (req, res) => {

    sql.query("SELECT * from Inverter1GenerationDataFinal", (err, result, field) => {
        if (err) console.log(err)
        else {
            res.status(200).json({ data: result["recordsets"][0][0] })
        }
    })

})

module.exports = app;

