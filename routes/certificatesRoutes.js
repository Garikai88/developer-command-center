const express = require("express");
const router = express.Router();
const certificatesController = require("../controllers/certificatesController");

router.get("/", certificatesController.getCertificatesPage);

module.exports = router;
