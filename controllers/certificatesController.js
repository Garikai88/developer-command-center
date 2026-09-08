const {getAllCertificates} = require("../models/Certificate");


exports.getCertificatesPage = async (req, res, next) => {
    try {
        const certificates = await getAllCertificates();
        res.render("certificates", {
            title: "Certification Archive",
            certificates
        });
    } catch (err) {
        next(err);
    }
};

