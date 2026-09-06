exports.getAboutPage = (req, res) => {
    res.render("about", {
        title: "Commander Profile"
    });
};
