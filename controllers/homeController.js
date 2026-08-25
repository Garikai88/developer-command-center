exports.getHomePage = (req, res) => {
    res.render("index", {
        title:"Developer Command Center"
    });
};