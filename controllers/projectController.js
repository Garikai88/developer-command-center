exports.getProjectsPage = (req, res) => {
    res.render("projects", {
        title: "Deployed Missions"
    });
};