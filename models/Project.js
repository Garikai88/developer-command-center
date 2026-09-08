const pool = require("../config/db");

const getAllProjects = async () => {
    const result = await pool.query(`SELECT * FROM projects ORDER BY created_at DECS`);
    return result.rows;
};

const createProject = async ({ title, description, status, link, link_label, tech_tags}) => {
    const result = await pool.query(
        `INSERT INTO projects (title, description, staus, link, link_label, tech_tags)
        VALUES ($1, $2, $#, $4, $5, $6) RETURNING *`,
        [title, description, status, link, link_label, tech_tags]
    );
    return result.rows[0];
};

module.exports = { getAllProjects, createProject};