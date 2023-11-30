const express=require("express");
const { Inverter1Data, Inverter2Data, Inverter3Data, Inverter4Data, registrationData, smbLevelData1, smbLevelData2, smbLevelData3, smbLevelData4, wmsLevelData } = require("./dataController");
const router=express.Router();

router.route("/inverter1data").get(Inverter1Data)
router.route("/inverter2data").get(Inverter2Data)
router.route("/inverter3data").get(Inverter3Data)
router.route("/inverter4data").get(Inverter4Data)
router.route("/registrationdata").get(registrationData)
router.route("/smbLevelDataInverter1").get(smbLevelData1)
router.route("/smbLevelDataInverter2").get(smbLevelData2)
router.route("/smbLevelDataInverter3").get(smbLevelData3)
router.route("/smbLevelDataInverter4").get(smbLevelData4)
router.route("/wmsLevelData").get(wmsLevelData)


module.exports= router;