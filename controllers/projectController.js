const {getAllProjects} = require("../models/Project");

exports.getProjectsPage = async (req, res, next) => {
    try {
        const projects = await getAllProjects();
        res.render("projects", {
            title: "Deployed Missions",
            projects
        });
    } catch (err) {
        next(err);
    }
};