exports.getCertificatesPage = (req, res) => {
    res.render("certificates", {
        title: "Certification Archive"
    });
};
