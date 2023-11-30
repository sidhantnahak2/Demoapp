const sql = require('mssql/msnodesqlv8')


exports.Inverter1Data = async (req, res) => {

    sql.query("SELECT top 5 * from Inverter1GenerationDataFinal", (err, result, field) => {
        if (err) console.log(err)
        else {
            res.status(200).json({ data: result.recordsets [0]})
        }
    })

}


exports.Inverter2Data = async (req, res) => {

    sql.query("SELECT * from Inverter2GenerationDataFinal", (err, result, field) => {
        if (err) console.log(err)
        else {
            res.status(200).json({ data: result["recordsets"][0][0] })
        }
    })

}

exports.Inverter3Data = async (req, res) => {

    sql.query("SELECT * from Inverter3GenerationDataFinal", (err, result, field) => {
        if (err) console.log(err)
        else {
            res.status(200).json({ data: result["recordsets"][0][0] })
        }
    })

}
exports.Inverter4Data = async (req, res) => {

    sql.query("SELECT * from Inverter4GenerationDataFinal", (err, result, field) => {
        if (err) console.log(err)
        else {
            res.status(200).json({ data: result["recordsets"][0][0] })
        }
    })

}


exports.registrationData = async (req, res) => {

    sql.query("SELECT * from registrationGreenEnco", (err, result, field) => {
        if (err) console.log(err)
        else {
            res.status(200).json({ data: result["recordsets"] })
        }
    })

}


exports.smbLevelData1 = async (req, res) => {

    sql.query("SELECT * from smbLevelDataInverter1", (err, result, field) => {
        if (err) console.log(err)
        else {
            res.status(200).json({ data: result["recordsets"][0][0] })
        }
    })

}

exports.smbLevelData2 = async (req, res) => {

    sql.query("SELECT * from smbLevelDataInverter2", (err, result, field) => {
        if (err) console.log(err)
        else {
            res.status(200).json({ data: result["recordsets"][0][0] })
        }
    })

}

exports.smbLevelData3 = async (req, res) => {

    sql.query("SELECT * from smbLevelDataInverter3", (err, result, field) => {
        if (err) console.log(err)
        else {
            res.status(200).json({ data: result["recordsets"][0][0] })
        }
    })

}
exports.smbLevelData4 = async (req, res) => {

    sql.query("SELECT * from smbLevelDataInverter4", (err, result, field) => {
        if (err) console.log(err)
        else {
            res.status(200).json({ data: result["recordsets"][0][0] })
        }
    })

}

exports.wmsLevelData = async (req, res) => {

    sql.query("SELECT * from wmsLevelData", (err, result, field) => {
        if (err) console.log(err)
        else {
            res.status(200).json({ data: result["recordsets"][0][0] })
        }
    })

}


